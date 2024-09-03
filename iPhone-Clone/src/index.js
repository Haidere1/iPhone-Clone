import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f5e37df281c591b72dd6c6c193747266@o4507884840681472.ingest.de.sentry.io/4507884855033936",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration(
        {
            useEffect:React.useEffect,
        }
    ),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);


