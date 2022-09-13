import { TState, TActions } from "./types";

export function reducer(state: TState, action: TActions) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: {
          ...state.todo,
          items: [
            ...state.todo.items,
            {
              id: (state.todo.items[state.todo.items.length - 1]?.id || 0) + 1,
              text: action.payload.text,
              completed: action.payload.completed,
            },
          ],
        },
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todo: {
          ...state.todo,
          items: state.todo.items.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        },
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todo: {
          ...state.todo,
          items: state.todo.items.filter((todo) => todo.id !== action.payload),
        },
      };
    case "REMOVE_ALL_TODO":
      return {
        ...state,
        todo: {
          ...state.todo,
          items: [],
        },
      };
    case "MARK_ALL_TODOS":
      return {
        ...state,
        todo: {
          ...state.todo,
          isAllTodoMarked: true,
          items: state.todo.items.map((todo) => ({ ...todo, completed: true })),
        },
      };
    case "UNMARK_ALL_TODOS":
      return {
        ...state,
        todo: {
          ...state.todo,
          isAllTodoMarked: false,
          items: state.todo.items.map((todo) => ({
            ...todo,
            completed: false,
          })),
        },
      };
    default:
      return state;
  }
}
