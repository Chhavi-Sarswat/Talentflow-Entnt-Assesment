import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { initializeJobs } from "./services/db/jobsDb";
import { initializeCandidates } from "./services/db/candidatesDb";
import { initializeAssessments } from "./services/db/assessmentsDb";
import { Toaster } from "react-hot-toast";

const startApp = () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </StrictMode>
  );
};

if (import.meta.env.MODE === "development") {
  // console.log("Starting MSW in development mode");
  import("./services/mocks/browser")
    .then(({ worker }) => {
      // console.log("MSW module loaded, starting worker");
      worker
        .start({
          onUnhandledRequest: "warn",
        })
        .then(async () => {
          // console.log("MSW started successfully");
          // Initialize databases after MSW is ready and wait for them to complete
          await Promise.all([
            initializeJobs(),
            initializeCandidates(),
            initializeAssessments(),
          ]);
          // Start the app after databases are initialized
          startApp();
        })
        .catch((error) => console.error("MSW failed to start:", error));
    })
    .catch(async (error) => {
      console.error("Failed to import MSW:", error);
      // Fallback: start app without MSW if import fails
      await Promise.all([
        initializeJobs(),
        initializeCandidates(),
        initializeAssessments(),
      ]);
      startApp();
    });
} else {
  // In production, initialize databases and wait for them to complete before starting app
  Promise.all([
    initializeJobs(),
    initializeCandidates(),
    initializeAssessments(),
  ]).then(() => {
    startApp();
  }).catch((error) => {
    console.error("Error initializing databases:", error);
    // Start app anyway
    startApp();
  });
}
