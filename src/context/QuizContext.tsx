import React, { createContext, useReducer, ReactNode } from 'react';
import quizData from '../data/quiz.json';
import { QuizState, QuizAction, QuizData } from '../types/quiz';

interface QuizProviderProps {
    children: ReactNode;
}

interface QuizContextType {
    state: QuizState;
    dispatch: React.Dispatch<QuizAction>;
}

const initialState: QuizState = {
    start: true,
    status: null,
    currentQuestionIndex: 0,
    answers: [],
    scores: {
        'Sexual Intimacy': 0,
        'Non - Sexual Intimacy': 0,
    },
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
    switch (action.type) {
        case 'SET_START':
            return { ...state, start: action.payload };
        case 'SET_STATUS':
            return { ...state, status: action.payload };
        case 'NEXT_QUESTION':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
        case 'PREV_QUESTION':
            return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
        case 'ANSWER_QUESTION': {
            const quizDataTyped = quizData as QuizData;
            const question = quizDataTyped.quiz.find((q) => q.status === state.status)!.questions[state.currentQuestionIndex];
            const answer = question.answers.find((a) => a.id === action.payload)!;
            const newAnswers = [...state.answers];
            newAnswers[state.currentQuestionIndex] = action.payload;
            return {
                ...state,
                answers: newAnswers,
                scores: {
                    ...state.scores,
                    [question.category]: state.scores[question.category as keyof typeof state.scores] + answer.score,
                },
            };
        }
        case 'SET_RESTART':
            return initialState;
        default:
            return state;
    }
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

function QuizProvider({ children }: QuizProviderProps) {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
}

export { QuizContext, QuizProvider };
