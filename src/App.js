import {useState} from 'react';

const messages= [
"Learn React ",
"Apply for job",
"Invest your new Income "
];

export default function App() {
    //////
    const [state , setState ] = useState(1);
    const handleNext = ()=>{
     if(state<3) { setState(state+1);}


    }
    const handlePrevious = ()=>{
            if(state >1  )
            setState(state-1);
           
     

    }

    return (
        <div className="steps">
            <div className="numbers">
              
            <div className={state>=1 ?"active" : ""}>1</div>
            <div className={state>=2 ?"active": ""}>2</div>
            <div className={state>=3 ?"active" : ""}>3</div>


            </div>

            <p className="message">{messages[state-1]}</p>

            <div className="buttons">
                <button onClick={handlePrevious} style={{backgroundColor : "#7950f2", color:"white"}}>Previous</button>
                <button onClick={handleNext} style={{backgroundColor : "#7950f2" ,color:"white"}}>Next</button>


            </div>
        </div>

    )
}
