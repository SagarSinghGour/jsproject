import { combineReducers } from "redux";

let initialtodo = {
    todo: [],
}
let todo = function (state = initialtodo, action) {
    switch (action.type) {
        case "ADDTODO": return { ...state, todo: [...state.todo, action.payload] };
        case "DELETETODO": return { ...state, todo: state.todo.filter((a) => { return a.id !== action.payload }) };
        case "UPDATETODO": return {
            ...state, todo: state.todo.map((v, i) => {
                if (v.id === action.payload.id) {
                    return { ...v, ...action.payload.data }
                } else {
                    return v
                }
            })
        };
        default: return state;
    }
}

export let root = combineReducers({ todoreducer: todo })