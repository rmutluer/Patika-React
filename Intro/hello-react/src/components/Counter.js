import React, { useState } from "react";


function Counter(){
    const [count, setCount]=useState(0);
    const decrease=()=>setCount(count-1);
    return <div>
        Sayaç
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Arttır</button>
        <button onClick={decrease}>Azalt</button>
    </div>
}
export default Counter;