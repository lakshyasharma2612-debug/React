import { useState } from "react";

function Quiz()
{
    const questionbank =[
        {
            question:"Who is the God of cricket?",
            options:["Virat Kohli","Sachin tendulkar","MS Dhoni","Rohit Sharma"],
            answer:"Sachin tendulkar",
        },
        {
            question:"What is the capital of Germany?",
            options:["Berlin","Frankfurt","Quebec","New York"],
            answer:"Berlin",
        },
        {
            question:"Which animals barks?",
            options:["Dog","Cat","Lizard","Sparrow"],
            answer:"Dog",
        },
        
    ]
    const ans=[null,null,null];
    const[userans,setans]=useState(ans);
    const [currQuest,setcurrQuest]=useState(0);
   const [opselected,setopselected]=useState("None");
   const selectedAns=userans[currQuest];

    function handleoption(option)
    {
        const newAns=[...userans];
        newAns[currQuest]=option;
        setans(newAns);
       
    }
    function goNext()
    {
        setcurrQuest(currQuest+1);
    }
    function goPrev()
    {   if(currQuest>0){
        setcurrQuest(currQuest-1);
    }
    }
    return <div> <h2> Question {currQuest}</h2>
    <p className="question"> {questionbank[currQuest].question}</p>
    {questionbank[currQuest].options.map((option)=>(
         <button className={"option"+(selectedAns==option?" selected":"")} onClick={()=> handleoption(option)}>{option}</button>
    ))}
    
   <div className="nav-buttons">
    <button onClick={goPrev} disabled ={currQuest===0}> Previous </button>
    <button onClick={goNext} disabled={selectedAns===null}> {currQuest===questionbank.length-1?"Submit":"Next"} </button>

   </div>
    </div>
}
export default Quiz