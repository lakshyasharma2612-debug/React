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
   const [opselected,setopselected]=useState("None");

    function handleoption(option)
    {
       setopselected(option);
    }
    return <div> <h2> Question 1</h2>
    <p className="question"> {questionbank[0].question}</p>
    {questionbank[0].options.map((option)=>(
         <button className="option" onClick={()=> handleoption(option)}>{option}</button>
    ))}
    <p> Option Selected:{opselected}</p>
   <div className="nav-buttons">
    <button>Previous</button>
    <button>Next</button>

   </div>
    </div>
}
export default Quiz