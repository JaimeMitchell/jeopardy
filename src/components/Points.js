import React from 'react'
export default function Points(props) {
    const [score, setScore] = React.useState(props.score)

    const handleDecrease = () => {
        console.log("CLicked");
        setScore(score - props.value);
    }
    return (<div>
        <h2 name='points'>{props.value}</h2>
        <button onClick={() => setScore(score + props.value)}>INCREASE POINTS</button>
        <button onClick={handleDecrease}>SUBTRACT POINTS</button>
    </div>)

}