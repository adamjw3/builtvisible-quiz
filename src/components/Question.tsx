import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import quizData from '../data/quiz.json';
import { QuizData } from '../types/quiz';

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
        dispatch({ type: 'NEXT_QUESTION' });
    };

    const handlePrev = () => {
        dispatch({ type: 'PREV_QUESTION' });
    };

    return (
        <div>
            <h2>{currentQuestion.body}</h2>
            {currentQuestion.answers.map((answer) => (
                <button key={answer.id} onClick={() => handleAnswer(answer.id)}>
                    {answer.body}
                </button>
            ))}
            {state.currentQuestionIndex > 0 && <button onClick={handlePrev}>Previous</button>}

            {state.answers[state.currentQuestionIndex] !== undefined && <button onClick={handleNext}>{state.currentQuestionIndex === 9 ? 'Finish' : 'Next'}</button>}
        </div>
    );
}

export default Question;
