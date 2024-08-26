import { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';

function Results() {
    const context = useContext(QuizContext);

    const [IsSexual, SetIsSexual] = useState(true);

    if (!context) {
        throw new Error('Results must be used within a QuizProvider');
    }
    const { state, dispatch } = context;

    const handleRestart = () => {
        dispatch({ type: 'SET_RESTART' });
    };

    const handleTabs = (val: boolean) => {
        SetIsSexual(val);
    };

    return (
        <div className="quiz-results quiz-grid">
            <h1>Results!</h1>
            <button onClick={() => handleRestart()} className="quiz-results__restart-btn btn__round btn__round--small">
                <span className="btn__round-inner">
                    <span className="btn__round-inner-text">Retake</span>
                    <svg className="btn__round-inner-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 33">
                        <path
                            stroke="#21272A"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.2"
                            d="M6 8.378v4.6h.109m20.475 2.667C25.928 10.383 21.44 6.312 16 6.312a10.67 10.67 0 0 0-9.891 6.666m0 0H9.8m16.2 13.4v-5.4h-.109m0 0A10.67 10.67 0 0 1 16 27.645c-5.44 0-9.928-4.072-10.584-9.333m20.475 2.666H21.6"
                        />
                    </svg>
                </span>
            </button>
            <div className="quiz-results__graph">
                <p>
                    Sexual Intimacy: {state.scores['Sexual Intimacy']} {state.status}
                </p>
                <p>
                    Non-Sexual Intimacy: {state.scores['Non - Sexual Intimacy']} {state.status}
                </p>
            </div>

            <div className="quiz-results__tab-controls">
                <button onClick={() => handleTabs(true)} className={IsSexual ? 'quiz-results__tab-controls-btn quiz-results__tab-controls-btn--active' : 'quiz-results__tab-controls-btn'}>
                    Sexual Intimacy
                </button>
                <button onClick={() => handleTabs(false)} className={IsSexual ? 'quiz-results__tab-controls-btn ' : 'quiz-results__tab-controls-btn quiz-results__tab-controls-btn--active'}>
                    Non-Sexual Intimacy
                </button>
            </div>

            <div className="quiz-results__tab-content">
                <div className="quiz-results__tab-content-inner quiz-grid">
                    {IsSexual ? (
                        <>
                            {state.status === 'Couple' && (
                                <>
                                    {state.scores['Sexual Intimacy'] <= 13 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>Time to focus on building a stronger foundation of trust and communication with your partner. </p>
                                                <p>
                                                    Start by creating a safe, non-judgmental space for discussing sexual preferences and boundaries. Schedule regular, uninterrupted times to talk about
                                                    these topics. Use conversation starters or prompts to help initiate these discussions if you feel hesitant or unsure. You can then gradually build
                                                    comfort by discussing desires and fantasies outside the bedroom. This could be by practicing non-sexual physical touch to increase comfort levels
                                                    with initiating intimacy or setting small, achievable goals for initiating sexual activity, and celebrating the progress you make.
                                                </p>
                                                <p>
                                                    It's also important to address performance anxiety by focusing on the emotional connection you have together to reduce pressure. This could be
                                                    through engaging in mindfulness and relaxation techniques together or finding alternative ways to relax together. If anxiety remains high; a
                                                    therapist can provide more targeted strategies to manage and reduce anxiety to increase your sexual intimacy.
                                                </p>
                                                <p>
                                                    Consider seeking help for intimacy issues in your relationship, as it can lead to deeper understanding and a stronger connection with your partner.
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {state.scores['Sexual Intimacy'] >= 14 && state.scores['Sexual Intimacy'] <= 21 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>Scoring average in the sexual intimacy category, shows you have a good foundation but can still improve your connection and communication.</p>
                                                <p>
                                                    This can start by increasing the frequency and depth of conversations about sexual preferences and boundaries. Make these discussions a regular part
                                                    of your relationship, and use tools like couples' questionnaires or games to explore each other's desires in a fun and relaxed manner. By continuing
                                                    to work on building comfort you'll find it even easier to practice open communication about what feels good and what doesn't and therefore initiate
                                                    pleasurable sexual activity.
                                                </p>
                                                <p>
                                                    Whilst you continue to build on your communication, mindfulness and stress-reduction techniques can reduce any anxiety around sexual performance to
                                                    allow for a deeper focus on enjoying the moment rather than achieving a specific outcome. If alcohol is being used to enhance intimacy, try to
                                                    identify and replicate those relaxing factors in a sober setting by planning intimate sober activities to build a stronger, more natural connection.
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {state.scores['Sexual Intimacy'] >= 22 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Nicely Done!</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>Scoring high in the sexual intimacy category, shows you are doing well in maintaining a healthy sexual relationship. </p>
                                                <p>
                                                    Keep up the good work by continuing to have open and honest discussions about your sexual preferences and boundaries and regularly checking in with
                                                    each other to ensure both partners feel satisfied and heard.
                                                </p>
                                                <p>
                                                    Remember, don't get complacent. Keep the spark alive by exploring new ways to initiate and enjoy sexual activity together to stay curious and open
                                                    to new experiences.
                                                </p>
                                                <p>Maintain confidence in your sexual performance by focusing on mutual satisfaction and pleasure rather than perfection. </p>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                            {state.status === 'Single' && (
                                <>
                                    {state.scores['Sexual Intimacy'] <= 16 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>It's time to focus on building your confidence and communication skills regarding sexual topics.</p>
                                                <p>
                                                    Start by exploring your own body and what feels good through masturbation, to help you become more comfortable with your desires and limits. By
                                                    reflecting on these experiences you'll better understand your likes and dislikes, and remember you can discuss these with a trusted friend or
                                                    therapist, sex doesn't need to be a taboo subject.
                                                </p>
                                                <p>
                                                    When it comes to initiating, start small by suggesting non-sexual touch or playful flirting and then as you become more comfortable, you can
                                                    progress to initiating sexual activity; confidence will grow with practice and open communication. It’s also crucial to work on building confidence
                                                    and comfort in sexual situations without relying on alcohol.
                                                </p>
                                                <p>
                                                    You can address performance anxiety by focusing on the emotional and physical connection of sex rather than the act itself, and engage in
                                                    mindfulness and relaxation exercises. If discussing past sexual experiences makes you uncomfortable, start with less intimate details you don't need
                                                    to share everything but ensure sexual health is being discussed and you are safe and consenting before engaging in sexual activity.
                                                </p>
                                                <p>
                                                    Consider seeking help for intimacy issues in your relationship, as it can lead to deeper understanding and a stronger connection with your partner.
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {state.scores['Sexual Intimacy'] >= 17 && state.scores['Sexual Intimacy'] <= 25 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>Seems like you have a good foundation. </p>
                                                <p>
                                                    You can enhance your connection and communication further by increasing the frequency and depth of conversations about sexual preferences and
                                                    boundaries, making these discussions a regular part of your interactions. Continue to explore your own body and understand what brings you pleasure
                                                    through masturbation and self-exploration. You can then increase the frequency and depth of conversations about sexual preferences and boundaries as
                                                    you'll know more about your likes and dislikes.
                                                </p>
                                                <p>
                                                    Practice mindfulness and stress-reduction techniques to ease performance anxiety, and focus on the pleasure and connection rather than specific
                                                    outcomes. Lastly, be open to trying new things in your sexual experiences by discussing them with partners beforehand and building trust and
                                                    excitement around exploring new activities together.
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {state.scores['Sexual Intimacy'] >= 26 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>You are doing well to maintain a healthy sexual relationship!</p>
                                                <p>
                                                    You can further enhance your experiences by keeping communication and exploration alive. Keep being open and honest about your sexual preferences
                                                    and boundaries, regularly checking in with partners to ensure both of you feel satisfied and heard when intimate.
                                                </p>
                                                <p>
                                                    By exploring new ways of initiating and enjoying sexual activity, you can stay curious and open to new experiences whilst maintaining confidence in
                                                    your sexual performance.
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {state.status === 'Couple' && (
                                <>
                                    {state.scores['Non - Sexual Intimacy'] <= 9 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>Time to focus on building emotional connection and understanding each other's love languages.</p>
                                                <p>
                                                    Take time to learn and understand each other's love languages, using resources like books or quizzes to help identify them and making a conscious
                                                    effort to show love in the ways that matter most to your partner. You should communicate openly about what makes each of you feel loved or
                                                    appreciated and then practice responding to each other through small, consistent actions.
                                                </p>
                                                <p>
                                                    Building a supportive environment is important to help both partners feel comfortable discussing any issues, including sexual dysfunction. Approach
                                                    these conversations with empathy and a problem-solving mindset, and seek professional help if needed to work through more significant challenges.
                                                </p>
                                                <p>
                                                    Consider seeking help for intimacy issues in your relationship, as it can lead to deeper understanding and a stronger connection with your partner.
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {state.scores['Non - Sexual Intimacy'] >= 10 && state.scores['Non - Sexual Intimacy'] <= 15 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>You have a good understanding but could enhance your connection further.</p>
                                                <p>
                                                    Continue to explore and understand each other by regularly asking how you can make your partner feel more loved and appreciated. You can then plan
                                                    activities that cater to each other, building them into a regular part of your routine. By being consistent in your support and efforts, you can
                                                    work together to address any issues that arise, ensuring that both partners feel heard and supported.
                                                </p>
                                                <p>
                                                    Increase the quality of your non-sexual interactions by planning regular date nights and engaging in activities that you both enjoy, making time for
                                                    meaningful conversations and shared experiences.
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {state.scores['Non - Sexual Intimacy'] >= 16 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>Nice work, you are strong in this area but can always find ways to keep your relationship dynamic and fulfilling. </p>
                                                <p>
                                                    Keep doing what you're doing by consistently showing love and appreciation in the ways that matter most to your partner and regularly checking in
                                                    with each other. Continue to support each other through any challenges to ensure that both partners feel valued and understood, working together to
                                                    find solutions.
                                                </p>
                                                <p>
                                                    Keep your relationship fresh and exciting by trying new activities and experiences together, whether this is through planning surprise dates and
                                                    adventures or celebrating your strengths as a couple. Use your strong foundation to tackle any new challenges that arise with confidence and unity.
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}

                            {state.status === 'Single' && (
                                <>
                                    {state.scores['Non - Sexual Intimacy'] <= 7 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>
                                                    Scoring low in the non-sexual intimacy category, suggest you'll need to focus on building emotional connections and understanding how you best
                                                    recieve love.
                                                </p>
                                                <p>
                                                    Practice discussing sexual health topics in a safe and non-judgmental environment, gradually building comfort in bringing these topics up with new
                                                    sexual partners.
                                                </p>
                                                <p>
                                                    Consider seeking help for intimacy issues in your relationship, as it can lead to deeper understanding and a stronger connection with your partner.
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {state.scores['Non - Sexual Intimacy'] >= 8 && state.scores['Non - Sexual Intimacy'] <= 11 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>You have a good understanding but can enhance your emotional connections further.</p>
                                                <p>
                                                    Increase the frequency and ease of conversations about sexual health, making it a natural part of your interactions with new partners. Highlight the
                                                    benefits of open communication for a healthy experience on both parts.
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {state.scores['Non - Sexual Intimacy'] >= 12 && (
                                        <>
                                            <div className="quiz-results__tab-content-header">
                                                <h2>Not Bad</h2>
                                            </div>
                                            <div className="quiz-results__tab-content-body">
                                                <p>You are strong in this area but can always find ways to keep your relationships dynamic and fulfilling.</p>
                                                <p>
                                                    Maintain open discussions about sexual health with new partners, ensuring these conversations are part of your regular interactions to maintain
                                                    mutual understanding and safety.
                                                </p>
                                                <p> Use your strong understanding of love languages to consistently show appreciation and love in ways that matter most to you.</p>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Results;
