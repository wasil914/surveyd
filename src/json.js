export const json = {
    "title": "SaffireEssence",
    "description": "Welcome to the Saffire Essence Survey, where your insights pave the way for excellence! At Saffire Essence, we are committed to delivering unparalleled quality and satisfaction, and your feedback is vital to achieving this goal. This short survey is designed to understand your preferences, experiences, and expectations better. Whether it’s about our products, services, or your overall experience, every response helps us grow and innovate. Thank you for taking the time to share your valuable input. Together, let’s shape the future of Saffire Essence!",
    "logo": "/images/logo.png",
    "logoWidth": "auto",
    "logoHeight": "40px",
    "logoFit": "cover",
    "focusFirstQuestionAutomatic": false,
    "completedHtmlOnCondition": [
      {
        "expression": "{nps-score} <= 6 or {rebuy} = false",
        "html": "Thank you for your feedback! We value all thoughts and suggestions from our customers, whether positive or critical. We may reach out to you in the future to learn more about how we can enhance our saffron products to better meet your expectations."
      },
      {
        "expression": "{nps-score} = 6 or {nps-score} = 7",
        "html": "Thank you for your feedback. Our goal is to provide the best saffron experience, and your ideas help us identify areas for improvement."
      },
      {
        "expression": "{nps-score} >= 8",
        "html": "Thank you for your feedback. It's wonderful to hear that you're a fan of SaffireEssence. Your feedback helps us find new ways to improve and ensure you get the best quality saffron."
      }
    ],
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "rating",
                "name": "nps-score",
                "title": "On a scale from 0 to 10, how likely are you to recommend SaffireEssence saffron to a friend or colleague?",
                "defaultValue": 9,
                "rateMin": 0,
                "rateMax": 10
              },
              {
                "type": "comment",
                "name": "disappointing-experience",
                "visible": false,
                "visibleIf": "{nps-score} <= 5",
                "title": "How did we disappoint you with our saffron and what can we do to improve?",
                "maxLength": 300
              },
              {
                "type": "comment",
                "name": "improvements-required",
                "visibleIf": "{nps-score} >= 6",
                "title": "What can we do to make your SaffireEssence saffron experience more satisfying?",
                "maxLength": 300
              },
              {
                "type": "checkbox",
                "name": "promoter-features",
                "visibleIf": "{nps-score} >= 9",
                "title": "Which of the following features of SaffireEssence saffron do you value the most?",
                "description": "Please select no more than three features.",
                "isRequired": true,
                "choices": [
                  {
                    "value": "quality",
                    "text": "Quality"
                  },
                  {
                    "value": "taste",
                    "text": "Taste"
                  },
                  {
                    "value": "packaging",
                    "text": "Packaging"
                  },
                  {
                    "value": "affordability",
                    "text": "Affordability"
                  },
                  {
                    "value": "sustainability",
                    "text": "Sustainability"
                  },
                  {
                    "value": "customer-service",
                    "text": "Customer Service"
                  }
                ],
                "showOtherItem": true,
                "otherPlaceholder": "Please specify...",
                "otherText": "Other features",
                "colCount": 2,
                "maxSelectedChoices": 3
              }
            ]
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "boolean",
            "name": "rebuy",
            "title": "Would you buy SaffireEssence saffron again?"
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "radiogroup",
            "name": "testimonial",
            "title": "Would you mind providing us a brief testimonial for the SaffireEssence website?",
            "choices": [
              {
                "value": "yes",
                "text": "Sure!"
              },
              {
                "value": "no",
                "text": "No"
              }
            ]
          },
          {
            "type": "text",
            "name": "email",
            "visible": false,
            "visibleIf": "{testimonial} = 'yes'",
            "title": "What is your email address?",
            "validators": [
              {
                "type": "email"
              }
            ],
            "placeholder": "Enter your email here"
          }
        ]
      }
    ],
    "showPrevButton": false,
    "showQuestionNumbers": "off",
    "widthMode": "static",
    "width": "800"
  };
  