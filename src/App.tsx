import { useState, useEffect } from 'react';
import { QuizProvider } from './context/QuizContext';
import Quiz from './components/Quiz';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.addEventListener('load', () => setIsLoading(false));
        return () => window.removeEventListener('load', () => setIsLoading(false));
    }, []);

    return (
        <QuizProvider>
            <div className={isLoading ? 'quiz-container loading' : 'quiz-container'}>
                <Quiz />
            </div>
        </QuizProvider>
    );
}

export default App;
