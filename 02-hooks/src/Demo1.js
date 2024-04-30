import React, { useState } from 'react'
import './Demo1.css'
// const Demo1 = () => {
//     const [count, setcnt] = useState(0)

//     const increement = () => {
//         if (count < 20) {
//             setcnt(count + 1)
//         }
//         else {
//             alert("do not incress becase max length is over")
//         }
//     }
//     const decreement = () => {
//         if (count > 0) {
//             setcnt(count - 1)
//         }
//         else {
//             alert("pleas enter a number")
//         }
//     }
//     return (
//         <>
//             <div class="center">
//                 <h1>{count}</h1>
//                 <button onClick={() => {
//                     increement()
//                 }}>Increement</button>

//                 <button onClick={() => {
//                     decreement()
//                 }}>Decreement</button>
//             </div>
//         </>
//     )

// }

const Demo1 = () => {

    const [Std, setStd] = useState(["jignesh", "jatin", "bhautik"])

    const addvalue = (e) => {
        setStd((oldStd) => [...oldStd, e.target.value])
    };
    return (
        <>
            <div class="center">
                <input
                    type="text"
                    onBlur={(event) => {
                        addvalue(event)
                    }}
                />

                {Std.map((result) => {
                    return <h1>{result}</h1>;
                })}
            </div>
        </>
    )
}

export default Demo1