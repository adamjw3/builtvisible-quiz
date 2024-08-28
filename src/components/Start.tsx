import { useContext, useState, useEffect, useRef } from 'react';
import { QuizContext } from '../context/QuizContext';

function Start() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const context = useContext(QuizContext);

    if (!context) {
        throw new Error('Start must be used within a QuizProvider');
    }
    const { dispatch } = context;

    const handleStart = () => {
        dispatch({ type: 'SET_START', payload: false });
    };

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect.width < 480) {
                    setIsMobile(true);
                } else {
                    setIsMobile(false);
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="quiz-start quiz-grid" ref={containerRef}>
            <div className="quiz-start__content-bg">
                {isMobile ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 414 581" className="oval-mobile">
                        <path id="textPath" d="M-13,312.732 A219.517,219.517 0 0,1 426,312.732" fill="none" />

                        <path
                            fill="#F4ECED"
                            fillRule="evenodd"
                            d="M426 312.732c.023-1.319.035-2.64.035-3.964 0-121.19-98.281-219.4347-219.517-219.4347C85.8715 89.3333-12.0427 186.624-12.993 307H-13v345h439V312.732Z"
                            clipRule="evenodd"
                        />
                        <g filter="url(#a)">
                            <path
                                fill="#fff"
                                fillOpacity=".75"
                                d="M206.5 518.267c115.847 0 209.76-93.878 209.76-209.681 0-115.804-93.913-209.6812-209.76-209.6812-115.8472 0-209.76001 93.8772-209.76001 209.6812 0 115.803 93.91281 209.681 209.76001 209.681Z"
                            />
                            <path
                                fill="url(#b)"
                                d="M206.5 518.267c115.847 0 209.76-93.878 209.76-209.681 0-115.804-93.913-209.6812-209.76-209.6812-115.8472 0-209.76001 93.8772-209.76001 209.6812 0 115.803 93.91281 209.681 209.76001 209.681Z"
                            />
                        </g>
                        <text fontSize="40" fill="#000" className="curved-text">
                            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                                <tspan x="0" dy="-25">
                                    INTIMACY ALLY TOOL
                                </tspan>
                            </textPath>
                        </text>
                        <defs>
                            <linearGradient id="b" x1="206.5" x2="206.5" y1="98.9048" y2="518.267" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F5CEE0" stopOpacity=".75" />
                                <stop offset="1" stopColor="#F5CEE0" stopOpacity="0" />
                            </linearGradient>
                            <filter id="a" width="519.52" height="519.362" x="-53.26" y="48.9048" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_209_3360" stdDeviation="25" />
                            </filter>
                        </defs>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 593" className="oval">
                        <path id="textPath" d="M-13,501.668 A412.5,412.669 0 0,1 812,501.668" fill="none" />
                        <path
                            id="textPath"
                            fill="#fff"
                            fillOpacity=".75"
                            d="M400.5 905.337c227.817 0 412.5-184.758 412.5-412.669C813 264.758 628.317 80 400.5 80S-12 264.758-12 492.668c0 227.911 184.683 412.669 412.5 412.669Z"
                        />
                        <g filter="url(#a)">
                            <path
                                fill="#fff"
                                fillOpacity=".75"
                                d="M400.5 886.651c217.691 0 394.165-176.546 394.165-394.325C794.665 274.546 618.191 98 400.5 98 182.809 98 6.33545 274.546 6.33545 492.326c0 217.779 176.47355 394.325 394.16455 394.325Z"
                            />
                            <path
                                fill="url(#b)"
                                d="M400.5 886.651c217.691 0 394.165-176.546 394.165-394.325C794.665 274.546 618.191 98 400.5 98 182.809 98 6.33545 274.546 6.33545 492.326c0 217.779 176.47355 394.325 394.16455 394.325Z"
                            />
                        </g>
                        <text fontSize="40" fill="#000" className="curved-text">
                            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                                <tspan x="0" dy="-35">
                                    INTIMACY ALLY TOOL
                                </tspan>
                            </textPath>
                        </text>
                        <defs>
                            <linearGradient id="b" x1="400.5" x2="400.5" y1="98" y2="886.651" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F5CEE0" stopOpacity=".75" />
                                <stop offset="1" stopColor="#F5CEE0" stopOpacity="0" />
                            </linearGradient>
                            <filter id="a" width="888.329" height="888.651" x="-43.6646" y="48" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_284_2725" stdDeviation="25" />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div className="quiz-start__content">
                    <p className="quiz-start__content-intro">
                        The quiz is designed to help you navigate intimacy within your relationships by answering <strong>10 questions around sexual experiences, exploration and performance</strong>.
                        <br />
                        <br /> Each question will be scored between 1-5 and a score for sexual and non-sexual intimacy will be granted at the end of the quiz.
                        <br />
                        <br /> To get the best results - you will benefit if you answer honestly.
                    </p>
                    <button onClick={handleStart} className="btn">
                        <span className="btn__inner">Start</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Start;
