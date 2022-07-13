
export default function Answer(props) {
    function showAnswer() { props.answer = !props.answer }
    return (
        <div>
            <h2 className='answer'> {props.answer}</h2>
            <button className='answer-btn' onClick={showAnswer}>ANSWER</button>
        </div>
    )
}