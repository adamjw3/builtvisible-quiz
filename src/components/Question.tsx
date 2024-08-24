import { useContext } from 'react';
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

    const handleAnswer = (answerId: number) => {
        dispatch({ type: 'ANSWER_QUESTION', payload: answerId });
    };

    const handleNext = () => {
        if (state.answers[state.currentQuestionIndex] !== undefined) {
            dispatch({ type: 'NEXT_QUESTION' });
        }
    };

    const handlePrev = () => {
        dispatch({ type: 'PREV_QUESTION' });
    };

    return (
        <div className="quiz-question quiz-grid">
            <div className="quiz-question__icon">
                <span className="quiz-question__icon-image">
                    <img src={getImageURL(currentQuestion.icon)} alt={currentQuestion.icon} />
                    <span className="quiz-question__icon-number">Q{state.currentQuestionIndex}</span>
                </span>
            </div>

            <div className="quiz-question__item">
                <span className="quiz-question__item-category">{currentQuestion.category}</span>
                <h2 className="quiz-question__item-question">
                    <span>Q{state.currentQuestionIndex} </span>
                    {currentQuestion.body}
                </h2>
                {currentQuestion.answers.map((answer) => (
                    <button key={answer.id} onClick={() => handleAnswer(answer.id)} className="quiz-question__item-answer" dangerouslySetInnerHTML={{ __html: answer.body }}></button>
                ))}
            </div>

            <div className="quiz-question__pagination">
                {state.currentQuestionIndex > 0 && (
                    <button onClick={handlePrev} className="btn">
                        <span className="btn__inner">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 18L9.5 12L15.5 6" stroke="#21272A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Previous</span>
                        </span>
                    </button>
                )}

                <button className="btn" onClick={handleNext}>
                    <span className="btn__inner">
                        <span>{state.currentQuestionIndex === 10 ? 'Finish' : 'Next'}</span>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 18L15.5 12L9.5 6" stroke="#090A0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Question;
