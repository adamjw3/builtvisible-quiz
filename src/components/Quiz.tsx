import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import Start from './Start';
import Status from './Status';
import Question from './Question';
import Results from './Results';

function Quiz() {
    const context = useContext(QuizContext);

    if (!context) {
        throw new Error('Quiz must be used within a QuizProvider');
    }
    const { state } = context;

    if (state.start) {
        return <Start />;
    } else if (!state.start && state.status == null) {
        return <Status />;
    } else if (state.currentQuestionIndex < 10) {
        return <Question />;
    } else {
        return <Results />;
    }
}

export default Quiz;
