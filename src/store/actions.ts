import {
  TAddTodoAction,
  TToggleCompleteAction,
  TRemoveTodoAction,
  TRemoveAllTodoAction,
  TMarkAllTodosAction,
  TUnmarkAllTodosAction,
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

export const removeAllTodoAction = (): TRemoveAllTodoAction => ({
  type: "REMOVE_ALL_TODO",
});

export const markAllTodosAction = (): TMarkAllTodosAction => ({
  type: "MARK_ALL_TODOS",
});

export const unmarkAllTodosAction = (): TUnmarkAllTodosAction => ({
  type: "UNMARK_ALL_TODOS",
});
