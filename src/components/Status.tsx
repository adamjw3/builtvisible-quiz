import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

function Status() {
    const context = useContext(QuizContext);

    if (!context) {
        throw new Error('Status must be used within a QuizProvider');
    }
    const { dispatch } = context;

    const handleStatus = (status: string) => {
        dispatch({ type: 'SET_STATUS', payload: status });
        dispatch({ type: 'NEXT_QUESTION' });
    };

    return (
        <div>
            <h2>Are you single or in a couple?</h2>
            <button onClick={() => handleStatus('Single')}>Single</button>
            <button onClick={() => handleStatus('Couple')}>Couple</button>
        </div>
    );
}

export default Status;
