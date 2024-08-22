import { QuizProvider } from './context/QuizContext';
import Quiz from './components/Quiz';

function App() {
    return (
        <QuizProvider>
            <div className="quiz-container">
                <Quiz />
            </div>
        </QuizProvider>
    );
}

export default App;
