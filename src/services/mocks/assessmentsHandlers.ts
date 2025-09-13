import { http, HttpResponse } from 'msw';
import { getAssessmentByJobId, saveAssessment, submitAssessmentResponse } from '../db/assessmentsDb';
import { delay, maybeFail } from '../../utils/latency';
import { assessmentsDb } from '../db/assessmentsDb';

export const assessmentsHandlers = [
  http.get('/assessments', async () => {
    await delay();
    
    // Get all assessments from the database
    const assessments = await assessmentsDb.assessments.toArray();
    
    return HttpResponse.json({
      data: assessments,
      total: assessments.length
    });
  }),

  http.get('/assessments/:jobId', async ({ params }) => {
    await delay();
    
    const assessment = await getAssessmentByJobId(params.jobId as string);
    return HttpResponse.json(assessment);
  }),

  http.put('/assessments/:jobId', async ({ params, request }) => {
    await delay();
    maybeFail();
    
    const assessmentData = await request.json() as any;
    const savedAssessment = await saveAssessment(assessmentData);
    return HttpResponse.json(savedAssessment);
  }),

  http.post('/assessments/:jobId/submit', async ({ params, request }) => {
    await delay();
    maybeFail();
    
    const responses = await request.json() as any;
    const result = await submitAssessmentResponse(params.jobId as string, responses);
    return HttpResponse.json(result);
  }),
];
