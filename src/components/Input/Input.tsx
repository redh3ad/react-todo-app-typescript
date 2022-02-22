import React, {Dispatch, FC, SetStateAction,FormEvent, useRef} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

interface Props {
  todo:string;
  setTodo: Dispatch<SetStateAction<string>>;
  handleAdd: (e:FormEvent) => void;
}

const Input:FC<Props> = ({todo, setTodo, handleAdd}) => {

const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Paper
      component="form"
      onSubmit={(e:FormEvent) => {
        handleAdd(e)
        inputRef.current?.blur();
      }}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%', maxWidth: 700 }}
      elevation={24}
    >
      <InputBase
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter a Todo"
      />
      <IconButton type='submit'>
      <Icon sx={{ fontSize: 30 }} color="primary">add_circle</Icon>
      </IconButton>
    </Paper>
  )
}

export default Input