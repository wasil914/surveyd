import React, { useState, useEffect, JSX } from "react";
import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

export default function Handler(props: unknown) {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    async function fetchStackContent() {
      try {
        // Call StackHandler with the same arguments as in your original code
        const resolvedContent = await StackHandler({
          fullPage: true,
          app: stackServerApp,
          routeProps: props,
        });
        // Ensure the returned content is valid JSX
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

  // Show a loading state while waiting for StackHandler to resolve
  if (!content) {
    return <div>Loading...</div>;
  }

  return content;
}
//hi