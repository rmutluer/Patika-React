import React from 'react'
import { memo } from 'react'    

function Header({ increment}) {
    console.log("Header da render edildi");
  return (
    <div>Header
        <br/>
        <div>
            {/* <h3>Sayaç:{count}</h3> */}
        </div>
        

        <button onClick={increment}>Headerdan arttır</button>
    </div>
  )
}

export default memo(Header)