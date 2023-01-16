import React , {useContext, useEffect, useState} from "react";
import { db } from "../../firebase";
import {  collection, DocumentData, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { AuthContext } from "../providers/auth";

export const HomePage = () =>{
    const [todos, setTodos] = useState<DocumentData[] | null>(null);
    const {user} = useContext(AuthContext)
    // async function getTodos() {
    //     const todosCol = collection(db, 'todos');
    //     const todoSnapshot = await getDocs(todosCol);
    //     const todoList = todoSnapshot.docs.map((doc) => doc.data());
    //     setTodos(todoList) ;
    //   }

    if(!user){
        return null;
    }

      const q = query(collection(db, "todos"), where("userId", "==", user?.uid));
      useEffect(() => {
        const unsub = onSnapshot(q, (querySnapshot) => {
            const todos: DocumentData[] = [];
            querySnapshot.forEach((doc) => {
                todos.push(doc.data());
            });
            setTodos(todos);
        });
        return unsub;
            }, []);
       const todoItems = todos?.map((todo: DocumentData) => <span>{todo.title}</span>); 
    return <div>  {todoItems}</div>

}