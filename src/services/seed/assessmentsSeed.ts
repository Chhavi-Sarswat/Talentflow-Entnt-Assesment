import { faker } from '@faker-js/faker';

faker.seed(98765);

export interface Question {
  id: string;
  type: 'single-choice' | 'multi-choice' | 'short-text' | 'long-text' | 'numeric' | 'file-upload';
  question: string;
  options?: string[];
  required: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
  conditionalOn?: {
    questionId: string;
    value: string | string[];
  };
}

export interface Assessment {
  id: string;
  jobId: string;
  title: string;
  description: string;
  sections: {
    id: string;
    title: string;
    questions: Question[];
  }[];
  createdAt: Date;
}

function generateQuestion(sectionIndex: number, questionIndex: number): Question {
  const types: Question['type'][] = ['single-choice', 'multi-choice', 'short-text', 'long-text', 'numeric', 'file-upload'];
  const type = faker.helpers.arrayElement(types);
  
  const questionBanks = {
    'single-choice': [
      'What is your current employment status?',
      'How many years of experience do you have?',
      'What is your preferred work arrangement?',
      'What is your highest level of education?',
      'Are you authorized to work in this country?'
    ],
    'multi-choice': [
      'Which programming languages are you proficient in?',
      'Select all tools you have experience with:',
      'Which of the following best describes your skills?',
      'What types of projects have you worked on?',
      'Which methodologies are you familiar with?'
    ],
    'short-text': [
      'What is your current job title?',
      'In one sentence, what makes you a great fit?',
      'What is your LinkedIn profile URL?',
      'What is your GitHub username?',
      'What is your portfolio website?'
    ],
    'long-text': [
      'Describe a challenging project you worked on and how you overcame obstacles.',
      'Tell us about your professional background and key achievements.',
      'What motivates you in your career and what are your long-term goals?',
      'Describe your experience with team collaboration and leadership.',
      'Why are you interested in this position?'
    ],
    'numeric': [
      'How many years of professional experience do you have?',
      'What is your expected salary range (in thousands)?',
      'How many people have you managed in your career?',
      'On a scale of 1-10, rate your proficiency in this skill:',
      'How many projects have you completed in the last year?'
    ],
    'file-upload': [
      'Please upload your resume/CV',
      'Upload a portfolio or work sample',
      'Attach any relevant certifications',
      'Upload a cover letter (optional)',
      'Attach a code sample or technical writing'
    ]
  };
  
  const baseQuestion: Question = {
    id: `q-${sectionIndex}-${questionIndex}`,
    type,
    question: faker.helpers.arrayElement(questionBanks[type]),
    required: faker.datatype.boolean(0.7), // 70% required
  };

  if (type === 'single-choice' || type === 'multi-choice') {
    const optionsBanks = {
      'single-choice': [
        ['Employed', 'Unemployed', 'Student', 'Freelancer'],
        ['0-2 years', '2-5 years', '5-10 years', '10+ years'],
        ['Remote', 'Hybrid', 'On-site', 'Flexible'],
        ['High School', 'Bachelor\'s', 'Master\'s', 'PhD'],
        ['Yes', 'No', 'Require Sponsorship']
      ],
      'multi-choice': [
        ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go'],
        ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure'],
        ['Frontend', 'Backend', 'Full Stack', 'DevOps', 'Mobile'],
        ['Web Apps', 'Mobile Apps', 'APIs', 'Microservices', 'ML Models'],
        ['Agile', 'Scrum', 'Kanban', 'Waterfall', 'Lean']
      ]
    };
    baseQuestion.options = faker.helpers.arrayElement(optionsBanks[type]);
  }

  if (type === 'short-text') {
    baseQuestion.validation = {
      minLength: 2,
      maxLength: 100
    };
  }

  if (type === 'long-text') {
    baseQuestion.validation = {
      minLength: 50,
      maxLength: 1000
    };
  }

  if (type === 'numeric') {
    baseQuestion.validation = {
      min: 0,
      max: type.includes('salary') ? 500 : 100
    };
  }

  return baseQuestion;
}

function generateAssessment(jobId: string, assessmentIndex: number): Assessment {
  const sectionsCount = faker.number.int({ min: 3, max: 5 });
  
  // Calculate questions to ensure at least 10 total
  const minQuestionsPerSection = Math.ceil(10 / sectionsCount);
  const maxQuestionsPerSection = Math.ceil(15 / sectionsCount);
  
  return {
    id: `assessment-${jobId}`,
    jobId,
    title: `${faker.helpers.arrayElement(['Technical', 'Behavioral', 'Skills', 'Cognitive'])} Assessment - ${jobId}`,
    description: faker.lorem.paragraph(),
    sections: Array.from({ length: sectionsCount }, (_, sectionIndex) => ({
      id: `section-${assessmentIndex}-${sectionIndex}`,
      title: faker.helpers.arrayElement([
        'Technical Skills',
        'Problem Solving',
        'Communication',
        'Team Collaboration',
        'Professional Background',
        'Work Experience',
        'Cultural Fit',
        'Project Experience'
      ]),
      questions: Array.from(
        { length: faker.number.int({ min: minQuestionsPerSection, max: maxQuestionsPerSection }) }, 
        (_, questionIndex) => generateQuestion(assessmentIndex * 10 + sectionIndex, questionIndex)
      )
    })),
    createdAt: faker.date.past({ years: 1 })
  };
}

// Generate assessments for first 5 jobs (increased from 3)
const jobIds = ['job-1', 'job-2', 'job-3', 'job-4', 'job-5'];
export const assessmentsSeed: Assessment[] = jobIds.map((jobId, index) => generateAssessment(jobId, index));
