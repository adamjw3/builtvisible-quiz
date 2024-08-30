import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import quizData from '../data/quiz.json';
import { QuizData } from '../types/quiz';
import { getImageURL } from '../utils/image-util';

function Question() {
    const context = useContext(QuizContext);

    if (!context) {
        throw new Error('Question must be used within a QuizProvider');
    }

    const { state, dispatch } = context;
    const quizDataTyped = quizData as QuizData;
    const questions = quizDataTyped.quiz.find((q) => q.status === state.status)!.questions;
    const currentQuestion = questions[state.currentQuestionIndex];

    // State to track the currently selected answer
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    useEffect(() => {
        // Preselect the answer if it has already been answered
        const existingAnswer = state.answers[state.currentQuestionIndex];

        console.log('existingAnswer', existingAnswer);
        if (existingAnswer !== undefined) {
            setSelectedAnswer(existingAnswer);
        }
    }, [state.currentQuestionIndex, state.answers]);

    const handleAnswer = (answerId: number) => {
        setSelectedAnswer(answerId); // Set the selected answer
        dispatch({ type: 'ANSWER_QUESTION', payload: answerId });
    };

    const handleNext = () => {
        if (state.answers[state.currentQuestionIndex] !== undefined) {
            dispatch({ type: 'NEXT_QUESTION' });
            setSelectedAnswer(null);
        }
    };

    const handlePrev = () => {
        if (state.currentQuestionIndex > 0) {
            dispatch({ type: 'PREV_QUESTION' });
            setSelectedAnswer(null);
        } else {
            dispatch({ type: 'SET_STATUS', payload: null });
            setSelectedAnswer(null);
        }
    };

    return (
        <div className="quiz-question quiz-grid">
            <div className="quiz-question__icon">
                <span className="quiz-question__icon-image">
                    <img src={getImageURL(currentQuestion.icon)} alt={currentQuestion.icon} />
                    <span className="quiz-question__icon-number">Q{currentQuestion.id}</span>
                </span>
            </div>

            <div className="quiz-question__item">
                <span className="quiz-question__item-category">{currentQuestion.category}</span>
                <h2 className="quiz-question__item-question">
                    <span>Q{currentQuestion.id} </span>
                    {currentQuestion.body}
                </h2>
                {currentQuestion.answers.map((answer) => (
                    <button
                        key={answer.id}
                        onClick={() => handleAnswer(answer.id)}
                        className={`quiz-question__item-answer ${selectedAnswer === answer.id ? 'is-selected' : ''}`}
                        dangerouslySetInnerHTML={{ __html: answer.body }}
                    ></button>
                ))}
            </div>

            <div className="quiz-question__pagination">
                <button onClick={handlePrev} className="btn">
                    <span className="btn__inner">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 18L9.5 12L15.5 6" stroke="#21272A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Previous</span>
                    </span>
                </button>

                <button className="btn" onClick={handleNext}>
                    <span className="btn__inner">
                        <span>{state.currentQuestionIndex === 9 ? 'Finish' : 'Next'}</span>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 18L15.5 12L9.5 6" stroke="#090A0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Question;
