function Results({userans, questionbank, restartQuiz})
{   
    function getScore()
    {
        let finalScore=0;
        userans.forEach((answer, index)=>
        {
            if(answer===questionbank[index].answer)
            {
                finalScore++;
            }
        })
        return finalScore;
    }
    
    const score=getScore();
    return( <div>
        <h2>RESULT</h2>
        <p>Your Score: {score} / {questionbank.length}  </p>
        <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>)
}
export default Results;