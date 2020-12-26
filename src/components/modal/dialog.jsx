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
      <DialogTitle id="simple-dialog-title">選択してください</DialogTitle>
      <List>
        <ListItem button >
          <ListItemText primary="おみくじ" onClick={()=>history.push('/omikuji')}/>
        </ListItem>
        <ListItem button >
          <ListItemText primary="お賽銭" onClick={()=>history.push('/osaisen')}/>
        </ListItem>
      </List>
    </Dialog>
  );
}