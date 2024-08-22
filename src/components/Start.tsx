import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function Start() {
    const context = useContext(QuizContext);

    if (!context) {
        throw new Error('Start must be used within a QuizProvider');
    }
    const { dispatch } = context;

    const handleStart = () => {
        dispatch({ type: 'SET_START', payload: false });
    };

    return (
        <div className="quiz-start quiz-grid">
            <div className="quiz-start__content-bg">
                <div className="quiz-start__content">
                    <p className="quiz-start__content-intro">
                        The quiz is designed to help you navigate intimacy within your relationships by answering <strong>10 questions around sexual experiences, exploration and performance</strong>.
                        <br />
                        <br /> Each question will be scored between 1-5 and a score for sexual and non-sexual intimacy will be granted at the end of the quiz.
                        <br />
                        <br /> To get the best results - you will benefit if you answer honestly.
                    </p>
                    <button onClick={handleStart} className="btn">
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Start;
