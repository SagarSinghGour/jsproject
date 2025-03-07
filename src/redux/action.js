export let addTodo = (todo) => {
    return {
        type: "ADDTODO", payload: todo
    }
}
export let deleteTodo = (id) => {
    return {
        type: "DELETETODO", payload: id
    }
}
export let updateTodo = ({id, data}) => {
    return {
        type: "UPDATETODO", payload: { id, data }
    }
}



//import axios from "axios";

// export let addTodo = () => async (dispatch) => {
//     try {
//         dispatch({ type: "TODOREQUEST" });
//         let { data } = await axios.get("http://jsonplaceholder.typicode.com/todos");
//         dispatch({ type: "TODOSUCCESS", payload: data })
//     } catch (error) {
//         dispatch({ type: "TODOFAIL", payload: error.message });
//     }
// }













