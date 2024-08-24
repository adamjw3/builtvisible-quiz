import { useState, useEffect } from 'react';
import { QuizProvider } from './context/QuizContext';
import Quiz from './components/Quiz';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 200);

        return () => clearTimeout(timer);
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
