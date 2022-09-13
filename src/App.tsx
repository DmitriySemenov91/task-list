import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

import { reducer } from "./store/reducers";
import {
  addTodoAction,
  toggleCompleteAction,
  removeTodoAction,
  removeAllTodoAction,
  unmarkAllTodosAction,
  markAllTodosAction,
} from "./store/actions";

const initialState = {
  todo: {
    items: [],
    isAllTodoMarked: false,
  },
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const todo = state.todo;

  const addTodo = (text: string, completed: boolean) => {
    dispatch(addTodoAction(text, completed));
  };

  const toggleComplete = (id: number) => {
    dispatch(toggleCompleteAction(id));
  };

  const removeTodo = (id: number) => {
    if (window.confirm("Удалить задачу?")) {
      dispatch(removeTodoAction(id));
    }
  };

  const removeAllTodo = () => {
    dispatch(removeAllTodoAction());
  };

  const markAllTodos = () => {
    dispatch(markAllTodosAction());
  };

  const unmarkAllTodos = () => {
    dispatch(unmarkAllTodosAction());
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTodo={addTodo} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {todo.items.map((todo) => (
            <Item
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
              key={todo.id}
              {...todo}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button
            onClick={todo.isAllTodoMarked ? unmarkAllTodos : markAllTodos}
          >
            {todo.isAllTodoMarked ? "Снять отметки" : "Отметить всё"}
          </Button>
          <Button onClick={removeAllTodo}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
