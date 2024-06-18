import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

const TodoApp = () => {
    const [todo, setTodo] = useState([])
    const [updateId, setUpdateId] = useState(null)
    const addInput = useRef('')
    useEffect(() => {
        getTodo()
    }, [])

    const getTodo = () => {
        axios.get("http://localhost:3000/Std").then((res) => {
            setTodo(res.data)
        })
    }

    const addData = () => {
        if (updateId == null) {
            axios.post('http://localhost:3000/Std', { name: addInput.current.value }).then(() => {
                getTodo()
                addInput.current.value = ''
            })
        } else {
            axios.patch(`http://localhost:3000/Std/${updateId}`, { name: addInput.current.value }).then(() => {
                getTodo()
                addInput.current.value = ''
                setUpdateId(null)
            })
        }

    }

    const editData = (name, id) => {
        addInput.current.value = name
        setUpdateId(id)
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/Std/${id}`).then(() => {
            getTodo()
        })
    }

    return (
        <>
            <input type="text" ref={addInput} /><button onClick={() => {
                addData()
            }}>{updateId == null ? 'Add' : 'Update'}</button>
            {todo.map((result) => {
                return (
                    <>
                        <h1>{result.name}</h1>
                        <button onClick={() => {
                            editData(result.name, result.id)
                        }}>Update</button>
                        <button onClick={() => {
                            deleteData(result.id)
                        }}>Delete</button>
                    </>
                )
            })}
        </>
    )
}
export default TodoApp