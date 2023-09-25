import { useState, useEffect } from 'react'
import { quiz } from './Questions'
import './App.css';

function App() {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState([])

    const { questions } = quiz
    const currentQuestion = questions[activeQuestion]

    const { question, type, choices } = currentQuestion

   const onClickNext = () => {
        setResult([...result, { ...currentQuestion, selectedAnswer }])

        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setShowResult(true)
        }

        setSelectedAnswer([])
    }

    const handleAnswerSelection = (e) => {
        const { value, type } = e.target;

        if (type === 'checkbox') {
            // Add or remove the element into the 'selectedAnswers' array depending on check/uncheck of a checkbox
            if (selectedAnswer.indexOf(value) >= 0) {
                setSelectedAnswer(prev => prev.filter(x => x !== value))
            } else {
                setSelectedAnswer(prev => [...prev, value])
            }
        } else {
            setSelectedAnswer([value])
        }
    }

    const onReset = () => {
        setActiveQuestion(0)
        setSelectedAnswer([])
        setShowResult(false)
        setResult([])
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
    console.log("handleAnswerSelection>>>>>>>>>", selectedAnswer, result)
    return (
        <div className="App">
            <div className="container">
                {!showResult ? (
                    <div>
                        <div>
                            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                            <span className="total-question">/{addLeadingZero(questions.length)}</span>
                        </div>
                        <h1>Tutor Questionnaire</h1>
                        <h2>{question}</h2>
                        <ul>
                            {choices.map((choice, index) => (
                                <li key={index}>                     
                                    <input
                                        key={choice}
                                        name={question}
                                        value={choice}
                                        id={type}
                                        // radio is for checked one option and checkbox is for checked multiple options
                                        type={type}
                                        onChange={handleAnswerSelection}
                                        //checked={selectedAnswer.includes(choice)}
                                        data-testid="cbShowHide"
                                    />
                                    <label>{choice} </label>
                                </li>
                            ))}
                        </ul>
                        <div className="flex-right">
                            {activeQuestion === questions.length - 1 && (
                                <button className="reset-button" onClick={onReset}>Reset</button>
                            )}
                            <button
                                name="{activeQuestion === questions.length - 1 ? 'Submit' : 'Next'}"
                                onClick={onClickNext}
                            >
                                {activeQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>Thank You for taking your time to fill in the My Tutor questionnaire. Soon We'll get in touch.</div>
                )}
            </div>
        </div>
    );
}

export default App;
