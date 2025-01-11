"use client"; // Ensures client-side rendering for this component

import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css"; // Survey.js default styles
import { json } from "../src/json"; // Import your JSON data from json.js

const SurveyComponent = () => {
  const [surveyModel, setSurveyModel] = useState(null);

  useEffect(() => {
    // Create the survey model using the imported JSON data
    const survey = new Model(json);

    setSurveyModel(survey);

    // FormSpark-specific action URL
    const FORMSPARK_URL = "https://submit-form.com/EXly6m4tz";

    const onComplete = (sender) => {
      const data = sender.data;

      // POST the survey data to FormSpark
      fetch(FORMSPARK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            alert("Survey submitted successfully!");
          } else {
            alert("There was an issue submitting the survey.");
          }
        })
        .catch(() => {
          alert("Network error. Try again later.");
        });
    };

    survey.onComplete.add(onComplete);

    // Cleanup on unmount
    return () => {
      survey.onComplete.remove(onComplete);
    };
  }, []);

  if (!surveyModel) {
    return <div>Loading...</div>;
  }

  return <Survey model={surveyModel} />;
};

export default SurveyComponent;
