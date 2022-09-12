import {
  TAddTodoAction,
  TToggleCompleteAction,
  TRemoveTodoAction,
} from "./types";

export const addTodoAction = (
  text: string,
  completed: boolean
): TAddTodoAction => ({
  type: "ADD_TODO",
  payload: {
    text,
    completed,
  },
});

export const toggleCompleteAction = (id: number): TToggleCompleteAction => ({
  type: "TOGGLE_COMPLETE",
  payload: id,
});

export const removeTodoAction = (id: number): TRemoveTodoAction => ({
  type: "REMOVE_TODO",
  payload: id,
});
