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
        <div>
            <h1>Welcome to the Quiz</h1>
            <button onClick={handleStart}>Start</button>
        </div>
    );
}

export default Start;
