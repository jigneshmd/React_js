import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)

    const inc = () => {
        setCount(count + 1)
    }

    const callMulti = useMemo(() => {
        return item * count
    }, [item])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                inc()
            }}>Increment</button>
            <h1>{item}</h1>
            <button onClick={() => {
                setItem(item * count)
            }}>Multiplay</button>
            <h1>{callMulti}</h1>
        </>
    )
}

export default Memo
