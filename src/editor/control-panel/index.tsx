import React, { useState } from 'react';
import {
  Box,
  Button,
  makeStyles,
  createStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import NewAbilityDialog from './new-ability-dialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnCtn: {
      padding: theme.spacing(1),

      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

const ControlPanel = () => {
  const classes = useStyles();

  const [dialogOpen, setDialogOpen] = useState('');

  const handleOpenNewAbilityDialog = () => {
    setDialogOpen('ability');
  };

  const handleOpenNewUnitDialog = () => {
    setDialogOpen('unit');
  };

  const handleOpenNewItemDialog = () => {
    setDialogOpen('item');
  };

  const handleDialogOnClose = () => {
    setDialogOpen('');
  };

  return (
    <Paper square>
      <Box className={classes.btnCtn}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenNewAbilityDialog}
        >
          New Ability
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenNewUnitDialog}
        >
          New Unit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenNewItemDialog}
        >
          New Item
        </Button>
      </Box>

      <NewAbilityDialog
        open={dialogOpen === 'ability'}
        onClose={handleDialogOnClose}
      />
    </Paper>
  );
};

export default ControlPanel;
