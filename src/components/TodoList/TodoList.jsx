import { Component } from "react";


class TodoList extends Component {
    render(){
        const {todos, onDelete,handleCompleted} = this.props

        return(
            <>
            <ul>{todos.map(({id, text, completed}) => {
               return(
                <li key={id} style={{display: "flex", gap: 10, justifyContent: "center"}}>
                    <input type="checkbox"  checked={completed} onChange={() => handleCompleted(id)}/>
                    <p>{text}</p>
                    <button type="button" onClick={() => onDelete(id)}>Видалити</button>
                </li>
               )
            })}</ul>    
            </>
        )
    }
}



export default TodoList











// TodoList - для відображення списку завдань, 