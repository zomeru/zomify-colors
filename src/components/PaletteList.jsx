import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import useStyles from '../styles/PaletteListStyles';

const PaletteList = ({ palettes, history, deletePalette }) => {
  const classes = useStyles();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingId, setDeletingId] = useState('');

  const openDialog = id => {
    setOpenDeleteDialog(true);
    setDeletingId(id);
  };

  const closeDialog = () => {
    setOpenDeleteDialog(false);
    setDeletingId('');
  };

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  const handleDelete = () => {
    deletePalette(deletingId);
    closeDialog();
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Zomify Colors</h1>
          {/* <button onClick={() => localStorage.clear()}>Reset</button> */}
          <div className={classes.createButton}>
            <Link to='/palette/new'>Create New Palette</Link>
          </div>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(palette => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
              <Link
                to={`/palette/${palette.id}`}
                style={{ textDecoration: 'none' }}
              >
                <MiniPalette
                  {...palette}
                  goToPalette={goToPalette}
                  // handleDelete={deletePalette}
                  openDialog={openDialog}
                  key={palette.id}
                  id={palette.id}
                />
              </Link>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDeleteDialog}
        aria-labelledby='delete-dialog-tile'
        onClose={closeDialog}
      >
        <DialogTitle id='delete-dialog-title'>Delete this palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Delete' />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Cancel' />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default PaletteList;
