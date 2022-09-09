import React from "react";
import { IconButton, Checkbox, ListItem, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type TItemProps = {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
};

export const Item: React.FC<TItemProps> = ({
  id,
  text,
  completed,
  toggleComplete,
}) => {
  const handleCheckboxClick = () => {
    toggleComplete(id);
  };

  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          onClick={handleCheckboxClick}
          checked={completed}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
