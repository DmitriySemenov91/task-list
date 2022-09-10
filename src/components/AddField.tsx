import React from "react";

import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type TAddFieldProps = {
  addTodo: (text: string, completed: boolean) => void;
};

export const AddField: React.FC<TAddFieldProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [isChecked, setChecked] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setChecked(checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleAddClick = () => {
    const todoIsEmpty = !inputValue.trim();

    if (todoIsEmpty) {
      return setError(true);
    }

    addTodo(inputValue, isChecked);

    setInputValue("");
    setChecked(false);
    setError(false);
  };
  return (
    <div className="field">
      <Checkbox
        onChange={handleCheckboxChange}
        checked={isChecked}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        error={error}
        helperText={error && "Данные введены некорректно"}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button onClick={handleAddClick}>
        <AddIcon />
      </Button>
    </div>
  );
};
