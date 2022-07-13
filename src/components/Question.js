export default function Question(props) {
    return (
        <div>
            <h2 className='question' key={props.id}> {props.question}</h2>
            <button onClick={props.fetchQuestion} className='question-btn'>QUESTION</button>
        </div>

    )
}

