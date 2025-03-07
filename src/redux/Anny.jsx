import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './action';

export default function Anny() {
    const [todoname, setTodoname] = useState("");
    const [startDate, setStartDate] = useState("");
    const [isUpdate, setIsUpdate] = useState({ is: false, id: null });
    let dispatch = useDispatch();
    let submitHandler = (e) => {
        e.preventDefault();
        if (isUpdate.is && isUpdate.id) {
            dispatch(updateTodo({ id: isUpdate.id, data: { todoname, startDate } }));
            setIsUpdate({ is: false, id: null })
        } else {
            dispatch(addTodo({ todoname, startDate, id: Date.now() }))
        }
        setStartDate("")
        setTodoname("")
    }
    let { todo } = useSelector(state => state.todoreducer);
    console.log(todo);
    let updateitem = (data) => {
        setIsUpdate({ is: true, id: data.id });
        setTodoname(data.todoname)
        setStartDate(data.startDate)
    }
    return (
        <div>
            <form onSubmit={submitHandler} className='w-75 m-auto my-5 p-5 bg-secondary' data-aos="zoom-in">
                <div className="mb-3" data-aos="fade-up-right">
                    <label htmlFor="name" className="form-label">todoname </label>
                    <input type="text" className="form-control"
                        value={todoname}
                        onChange={(e) => { setTodoname(e.target.value) }}
                        name="name" id="name" />
                </div>
                <div className="mb-3" data-aos="fade-up-left">
                    <label htmlFor="name" className="form-label">startDate </label>
                    <input type="date" className="form-control"
                        value={startDate}
                        onChange={(e) => { setStartDate(e.target.value) }}
                        name="name" id="name" />
                </div>
                <button type="submit" className={`btn btn-primary`}> {isUpdate.is ? "Update" : "Submit"} </button>
            </form>
            {todo && todo.map((v, i) => (
                <div>
                    <h1> {v.todoname}</h1>
                    <h1> {v.startDate}</h1>
                    <h1> {v.id}</h1>
                    <button onClick={() => {
                        dispatch(deleteTodo(v.id))
                    }}> delete me</button>
                    <button onClick={() => {
                        updateitem(v)
                    }}> Update me</button>

                </div>
            ))}
        </div>
    )
}
