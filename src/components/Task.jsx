
import './task.css'

function Task (props){
    return(
    <>
        <div className='container'>
            <p>{props.children} {props.cDate}. {props.advice}</p>
            <div id="left">
                <label for="task">Task Name:</label> <br />
                <input type="text" value={props.value} name="task" id="task" onChange={props.change}/>
                <br /> <br />
                <button type="button" onClick={props.btnFn}>Submit</button>
            </div>
        </div>
    </>
    )    
}

export default Task