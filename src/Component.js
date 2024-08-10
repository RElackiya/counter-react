import {useState} from "react"

function Component(){

    var [count,setCount] = useState(0)

    function increment()
    {
   
     setCount(count+1)
    }
    function decrement()
    {
     setCount(count-1)
    }
return(
    <div className='d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
        <div className="text-center" style={{fontSize: "70px"}}>
            <h1> Counter App</h1>
            <p>{count}</p>
<div className='d-flex'>
    <button onClick={increment} className='btn btn-success me-3'>INCREMENT</button>
    <button onClick={decrement} className='btn btn-danger ms-3'>DECREMENT</button>
</div>
</div>
</div>)
}
export default Component