// Artificial latency between 200-1200ms as per requirements
export const delay = () => 
    new Promise(resolve => 
      setTimeout(resolve, 200 + Math.random() * 1000)
    );
  
  // 5-10% error rate on write endpoints
  export const maybeFail = () => {
    const errorRate = 0.05 + Math.random() * 0.05; // Random between 5-10%
    if (Math.random() < errorRate) {
      const errors = [
        { message: 'Network timeout - Please try again', status: 408 },
        { message: 'Server temporarily unavailable', status: 503 },
        { message: 'Internal server error', status: 500 },
        { message: 'Database connection failed', status: 503 },
        { message: 'Request timeout', status: 504 },
      ];
      const error = errors[Math.floor(Math.random() * errors.length)];
      const serverError = new Error(error.message);
      (serverError as any).status = error.status;
      throw serverError;
    }
  };
  