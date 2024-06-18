import React, { Component } from 'react'

export default class ClassTodo extends Component {
    constructor(props) {
        super(props)
        this.state = { task: [], updateId: null }
    }

    addTask() {
        if (this.state.updateId == null) {
            let Taskdata = document.getElementById('input').value
            this.setState(pervState => ({
                task: [...pervState.task, Taskdata]
            }))
        } else {
            let TaskData = document.getElementById('input').value
            let uid = this.state.updateId
            let updateData = this.state.task.map((result, index) => {
                if (uid === index) {
                    return TaskData
                } else {
                    return result
                }
            })
            // console.log(updateData);
            this.setState({ task: updateData })
        }
        document.getElementById('input').value = ''
        this.setState({ updateId: null })
    }

    deleteTask = (id) => {
        let newTask = this.state.task.filter((result, index) => {
            return id !== index
        })

        this.setState({ task: newTask })
    }

    editData = (result, id) => {
        document.getElementById('input').value = result
        this.setState({ updateId: id })
    }

    render() {
        return (
            <>
                <input type="text" id='input' />
                <button onClick={() => {
                    this.addTask()
                }}>{this.state.updateId == null ? 'Add' : 'Update'}</button>
                {this.state.task.map((result, id) => {
                    return (
                        <>
                            <h1>{result}</h1>
                            <button onClick={() => {
                                this.editData(result, id)
                            }}>Update</button>
                            <button onClick={() => {
                                this.deleteTask(id)
                            }}>Delete</button>

                        </>
                    )
                })}
            </>
        )
    }
}
