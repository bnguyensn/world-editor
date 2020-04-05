import React from 'react';
import {
  Box,
  Divider,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';

interface ComponentProps {
  open: boolean;
  onClose: (...args: any[]) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formCtn: {
      width: `calc(${theme.breakpoints.values['sm']}px * 0.9)`,

      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },

      '& > *': {
        width: '100%',
        margin: theme.spacing(0.5),
      },
    },
  })
);

const NewAbilityDialog = ({ open, onClose }: ComponentProps) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>New Ability</DialogTitle>
      <DialogContent>
        <DialogContentText>Create a new ability</DialogContentText>
        <Box className={classes.formCtn}>
          <TextField required label="Name" placeholder="e.g. Fireball" />
          <TextField label="Description" placeholder="e.g. Deal fire damage" />
          <TextField
            label="Icon"
            placeholder="e.g. https://wow.zamimg.com/images/wow/icons/large/inv_pet_ghoul.jpg"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewAbilityDialog;
