"use client";
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";


function Home() {
  const { v4: uuidv4 } = require('uuid');
  const randomUUID = uuidv4();
  const [todos, setTodos] = React.useState([
    { title: "Some task", id: randomUUID, is_completed: false },
    { title: "Some other task", id: randomUUID, is_completed: true},
    { title: "last task", id: randomUUID, is_completed: false },
  ]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <TODOList todos={todos} />
    </div>
  );
}
export default Home;