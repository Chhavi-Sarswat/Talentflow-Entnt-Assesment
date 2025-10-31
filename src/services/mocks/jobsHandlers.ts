import { http, HttpResponse } from 'msw';
import { getAllJobs, createJob, updateJob, reorderJob, deleteJob, jobsDb } from '../db/jobsDb';
import { delay, maybeFail } from '../../utils/latency';

export const jobsHandlers = [
  http.get('/jobs', async ({ request }) => {
    // console.log('MSW Handler: /jobs request intercepted');
    // console.log('MSW Handler: Request URL:', request.url);
    await delay();
    
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const status = url.searchParams.get('status') || '';
    const jobType = url.searchParams.get('jobType') || '';
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '10');
    
    // console.log('MSW Handler: Calling getAllJobs with params:', { search, status, jobType, page, pageSize });
    const result = await getAllJobs({ search, status, jobType, page, pageSize });
    // console.log('MSW Handler: getAllJobs result:', result);
    
    return HttpResponse.json(result);
  }),


  http.post('/jobs', async ({ request }) => {
    await delay();
    maybeFail(); // 5-10% error rate on write
    
    const jobData = await request.json() as any;
    const newJob = await createJob(jobData);
    return HttpResponse.json(newJob, { status: 201 });
  }),

  http.patch('/jobs/:id', async ({ params, request }) => {
    await delay();
    maybeFail(); // 5-10% error rate on write
    
    const updates = await request.json() as any;
    const updatedJob = await updateJob(params.id as string, updates);
    return HttpResponse.json(updatedJob);
  }),

  http.patch('/jobs/:id/reorder', async ({ params, request }) => {
    await delay();
    // Note: Reorder has optimistic updates, occasional failures are expected
    if (Math.random() < 0.05) { // 5% failure rate for testing rollback
      return new HttpResponse(JSON.stringify({ error: 'Failed to reorder' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const reorderData = await request.json() as any;
    const updatedJob = await reorderJob(params.id as string, reorderData);
    return HttpResponse.json(updatedJob);
  }),

  http.get('/jobs/:id', async ({ params }) => {
    await delay();
    
    const job = await jobsDb.jobs.get(params.id as string);
    if (!job) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(job);
  }),

  http.delete('/jobs/:id', async ({ params }) => {
    await delay();
    
    await deleteJob(params.id as string);
    return new HttpResponse(null, { status: 204 });
  }),
];
