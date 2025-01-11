// Use server-only for server-side functionality
"use server";

import "server-only";
import { StackServerApp } from "@stackframe/stack";

// Initialize the StackServerApp with your configuration
export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
});

// Optionally, export the app as a function or API route handler if needed
export default function StackPage() {
  // You can add additional logic here if required for rendering or API routes
  return (
    <div>
      <h1>Stack Server App Initialized</h1>
    </div>
  );
}
