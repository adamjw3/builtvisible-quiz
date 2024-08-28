import { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';

function Status() {
    const context = useContext(QuizContext);
    const [status, setStatus] = useState('');

    if (!context) {
        throw new Error('Status must be used within a QuizProvider');
    }
    const { dispatch } = context;

    const handleStatus = (status: string) => {
        setStatus(status);
    };

    const handleBegin = () => {
        if (status) dispatch({ type: 'SET_STATUS', payload: status });
    };

    const handleRestart = () => {
        dispatch({ type: 'SET_RESTART' });
    };

    return (
        <div className="quiz-status quiz-grid">
            <h2 className="quiz-status__header">Lorem ipsum dolor sit amet, consectetur adipiscing?</h2>
            <div className="quiz-staus__content-bg">
                <div className="quiz-staus__content">
                    <div className="quiz-staus__content-options">
                        <button onClick={() => handleStatus('Single')} className="btn__round">
                            <span className="btn__round-inner">
                                <span className="btn__round-inner-text">Single</span>
                                <svg className="btn__round-inner-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                    <path
                                        d="M66.667 70.5v-6.667A13.334 13.334 0 0 0 53.333 50.5H26.667a13.334 13.334 0 0 0-13.334 13.333V70.5M40 37.167c7.364 0 13.333-5.97 13.333-13.334C53.333 16.47 47.363 10.5 40 10.5c-7.364 0-13.333 5.97-13.333 13.333 0 7.364 5.97 13.334 13.333 13.334Z"
                                        stroke="#21272A"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>
                        <button onClick={() => handleStatus('Couple')} className="btn__round">
                            <span className="btn__round-inner">
                                <span className="btn__round-inner-text">Couple</span>
                                <svg className="btn__round-inner-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                                    <path
                                        d="M56.667 70.5v-6.667A13.333 13.333 0 0 0 43.333 50.5H16.667A13.334 13.334 0 0 0 3.333 63.833V70.5M30 37.167c7.364 0 13.333-5.97 13.333-13.334C43.333 16.47 37.363 10.5 30 10.5c-7.364 0-13.333 5.97-13.333 13.333 0 7.364 5.97 13.334 13.333 13.334ZM76.667 70.5v-6.667a13.333 13.333 0 0 0-10-12.9M53.333 10.933a13.334 13.334 0 0 1 0 25.834"
                                        stroke="#21272A"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="quiz-staus__content-controls">
                        <button onClick={handleRestart} className="btn">
                            <span className="btn__inner">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 18L9.5 12L15.5 6" stroke="#21272A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Back To Start</span>
                            </span>
                        </button>
                        <button onClick={handleBegin} className="btn">
                            <span className="btn__inner">
                                <span>Begin Quiz</span>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 18L15.5 12L9.5 6" stroke="#090A0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Status;
