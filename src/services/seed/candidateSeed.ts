import { faker } from '@faker-js/faker';

faker.seed(54321);

export interface Candidate {
  id: string;
  name: string;
  email: string;
  stage: 'applied' | 'screening' | 'interview' | 'offer' | 'hired' | 'rejected';
  jobId: string;
  phone: string;
  resume: string;
  notes: string[];
  appliedAt: Date;
  updatedAt: Date;
  // Application-specific fields
  coverLetter?: string;
  experience?: string;
  skills?: string[];
  education?: string;
}

const stages: Candidate['stage'][] = ['applied', 'screening', 'interview', 'offer', 'hired', 'rejected'];

// Indian names pool
const indianFirstNames = {
  male: ['Aarav', 'Arjun', 'Aditya', 'Rahul', 'Rohan', 'Karan', 'Aryan', 'Vikram', 'Amit', 'Raj', 'Sanjay', 'Prateek', 'Varun', 'Nikhil', 'Vishal', 'Aakash', 'Dev', 'Krishna', 'Ravi', 'Kunal', 'Ajay', 'Manish', 'Rohit', 'Akash', 'Siddharth'],
  female: ['Priya', 'Ananya', 'Isha', 'Kavya', 'Riya', 'Sneha', 'Pooja', 'Neha', 'Divya', 'Anjali', 'Shruti', 'Diya', 'Aisha', 'Meera', 'Sanya', 'Tanvi', 'Ishita', 'Simran', 'Kiara', 'Nisha', 'Preeti', 'Sakshi', 'Swati', 'Ayesha', 'Aditi']
};

const indianLastNames = ['Sharma', 'Verma', 'Patel', 'Kumar', 'Singh', 'Gupta', 'Reddy', 'Rao', 'Mehta', 'Joshi', 'Desai', 'Agarwal', 'Kapoor', 'Malhotra', 'Khanna', 'Chopra', 'Nair', 'Iyer', 'Menon', 'Banerjee', 'Chakraborty', 'Das', 'Sinha', 'Pandey', 'Mishra'];

function generateCandidate(index: number, jobIds: string[]): Candidate {
  const gender = index % 2 === 0 ? 'male' : 'female';
  const firstName = faker.helpers.arrayElement(indianFirstNames[gender]);
  const lastName = faker.helpers.arrayElement(indianLastNames);
  
  // Generate additional application-specific fields
  const techSkills = [
    'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java',
    'TypeScript', 'JavaScript', 'AWS', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 'REST API',
    'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin',
    'Machine Learning', 'Data Science', 'DevOps', 'Frontend', 'Backend'
  ];

  const skills = faker.helpers.arrayElements(techSkills, { min: 2, max: 6 });
  const experience = `Experienced developer with ${faker.number.int({ min: 1, max: 8 })} years of experience in software development. Proficient in ${skills.slice(0, 3).join(', ')}. Strong background in building scalable applications and working in agile environments.`;
  
  const coverLetter = `Dear Hiring Manager,

I am writing to express my interest in the position. With my background in ${skills.slice(0, 2).join(' and ')}, I am confident that I would be a valuable addition to your team.

${faker.lorem.paragraph()}

I am excited about the opportunity to contribute to your organization and would welcome the chance to discuss my qualifications further.

Best regards,
${firstName} ${lastName}`;

  return {
    id: `candidate-${index + 1}`,
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    stage: faker.helpers.arrayElement(stages),
    jobId: faker.helpers.arrayElement(jobIds),
    phone: `+91 ${faker.string.numeric(5)} ${faker.string.numeric(5)}`,
    resume: faker.internet.url(),
    notes: Array.from({ length: faker.number.int({ min: 0, max: 3 }) }, 
      () => faker.lorem.sentence()
    ),
    appliedAt: faker.date.past({ years: 1 }),
    updatedAt: faker.date.recent({ days: 30 }),
    // Application-specific fields
    coverLetter,
    experience,
    skills,
    education: faker.helpers.arrayElement([
      'B.Tech in Computer Science - IIT Delhi',
      'M.Tech in Software Engineering - IIT Bombay',
      'B.E. in Information Technology - NIT Trichy',
      'MCA - BITS Pilani',
      'B.Tech in Electronics - VIT Vellore',
      'M.S. in Computer Science - IIIT Hyderabad',
      'B.Sc. in Mathematics - Delhi University',
      'MBA - IIM Bangalore',
      'B.Tech - Anna University',
      'M.Tech - IIT Madras'
    ])
  };
}

// Generate job IDs for reference
const jobIds = Array.from({ length: 25 }, (_, i) => `job-${i + 1}`);

export const candidatesSeed: Candidate[] = Array.from({ length: 1000 }, 
  (_, i) => generateCandidate(i, jobIds)
);
