import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { useHistory } from 'react-router-dom';

export default function SimpleDialog(props) {
  const history = useHistory();
  const { onClose, selectedValue, open} = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{props.text}を選択中</DialogTitle>
      <List>
        <ListItem button >
          <ListItemText primary="おみくじを引く" onClick={()=>history.push('/omikuji')}/>
        </ListItem>
        <ListItem button >
          <ListItemText primary="お賽銭する" onClick={()=>history.push('/osaisen')}/>
        </ListItem>
      </List>
    </Dialog>
  );
}