// Question Types
// 1. checkbox || radio
// 2. Text field || text area  // To Do

export const quiz = {
    topic: 'Tutor Questionnaire',
    totalQuestions: 2,
    perQuestionScore: 10,
    questions: [
        {
            question: 'What kind of tutoring experience do you have?',
            choices: ['Online tutoring', 'Home schooling', 'After school club', 'None of the above'],
            type: 'checkbox',
        },
        {
            question: 'How much overall tutoring experience do you have?',
            choices: ['0-1 years', '1-2 years', '3 or more', 'None of the above'],
            type: 'radio',
        },
    ],
}
