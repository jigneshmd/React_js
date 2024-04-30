import React, { useEffect, useState } from 'react'

const Test = () => {
    const [Cnt, setCnt] = useState(0)
    const [AddData, setData] = useState('Hii')
    useEffect(() => {
        console.log('hiiiii');
        let color = ['red', 'green', 'blue', 'pink', 'yellow', 'violet']
        document.body.style.backgroundColor = color[Cnt]
    }, [Cnt])

    const increement = () => {
        setCnt(Cnt + 1)
    }

    const Changevalue = () => {
        setData('Hello')
        document.getElementById('text').style.color = 'yellow'
    }

    return (
        <>
            <h1>{Cnt}</h1>
            <h2 id='text' onClick={() => {
                Changevalue()
            }}>{AddData}</h2>
            <button onClick={() => {
                increement()
            }}>Increement</button>
        </>
    )
}

export default Test