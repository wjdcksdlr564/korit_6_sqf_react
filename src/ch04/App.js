import { useState } from "react";
import Button from "./Button";

function App() {
    const [ number, setNumber ] = useState(0);
    
    return <>
        <h1>번호: {number}</h1>
        <Button text={"증가"} number={number} setNumber={setNumber}/>
        <Button text={"감소"} number={number} setNumber={setNumber}/>   
    </>
}

export default App();