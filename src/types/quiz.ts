export interface Answer {
    id: number;
    body: string;
    question_id: number;
    score: number;
}

export interface Question {
    id: number;
    body: string;
    category: string;
    icon: string;
    answers: Answer[];
}

export interface QuizSection {
    id: number;
    status: string;
    questions: Question[];
}

export interface QuizData {
    quiz: QuizSection[];
}

export interface QuizState {
    start: boolean;
    status: string | null;
    currentQuestionIndex: number;
    answers: number[];
    scores: {
        'Sexual Intimacy': number;
        'Non - Sexual Intimacy': number;
    };
}

export type QuizAction =
    | { type: 'SET_START'; payload: boolean }
    | { type: 'SET_STATUS'; payload: string | null }
    | { type: 'SET_RESTART' }
    | { type: 'NEXT_QUESTION' }
    | { type: 'PREV_QUESTION' }
    | { type: 'ANSWER_QUESTION'; payload: number };
