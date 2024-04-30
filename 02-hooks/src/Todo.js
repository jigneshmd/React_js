import React, { useState } from 'react'
// import './Todo.css';

const Todo = () => {
    const [Todo, setTodo] = useState([])
    const [updateIndex, setIndex] = useState(null)

    const addData = () => {
        var input = document.getElementById("input").value
        if (input !== '') {
            if (updateIndex == null) {
                setTodo((old) => [...old, input])
            } else {
                let data = [...Todo]
                data [updateIndex] = input
                setTodo(data)
                setIndex(null)
            }
            document.getElementById("input").value = ""
        } else {
            alert("Please Insert Data")
        }
    }

    const DeleteData = (i) => {
        let data = Todo.filter((re, index) => {
            return i != index
        })
        setTodo(data)
    }

    const EditData = (res, index) => {
        document.getElementById("input").value = res
        setIndex(index)
    }

    return (
        <>
            <input type="text" id='input' />
            <button onClick={() => {
                addData()
            }}>{updateIndex==null?"Add":"Update"}</button>
            {Todo.map((result, i) => {
                return (
                    <>
                        <h1>{result}</h1>
                        <button onClick={() => {
                            DeleteData(i)
                        }}>Delete</button>
                        <button onClick={() => {
                            EditData(result, i)
                        }}>Update</button>
                    </>
                )
            })}
        </>
    )
}

export default Todo