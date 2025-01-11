'use client'; // Mark this file as a client-side component

import React, { useState, useEffect, JSX } from "react";
import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../stack";

export default function Handler(props: unknown) {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    async function fetchStackContent() {
      try {
        // Call StackHandler with the provided arguments
        const resolvedContent = await StackHandler({
          fullPage: true,
          app: stackServerApp,
          routeProps: props,
        });
        // Ensure the resolved content is a valid JSX element
        if (React.isValidElement(resolvedContent)) {
          setContent(resolvedContent);
        } else {
          console.error("Resolved content is not a valid JSX element:", resolvedContent);
          setContent(<div>Error: Invalid content from StackHandler</div>);
        }
      } catch (error) {
        console.error("Error rendering StackHandler:", error);
        setContent(<div>Error loading content</div>);
      }
    }

    fetchStackContent();
  }, [props]);

  // Display loading state while content is being fetched
  if (!content) {
    return <div>Loading...</div>;
  }

  return content;
}
