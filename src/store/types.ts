type TTodo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TState = {
  todo: {
    isAllTodoMarked: boolean;
    items: TTodo[];
  };
};

export type TAddTodoAction = {
  type: "ADD_TODO";
  payload: {
    text: string;
    completed: boolean;
  };
};

export type TToggleCompleteAction = {
  type: "TOGGLE_COMPLETE";
  payload: number;
};

export type TRemoveTodoAction = {
  type: "REMOVE_TODO";
  payload: number;
};

export type TActions =
  | TAddTodoAction
  | TToggleCompleteAction
  | TRemoveTodoAction;
