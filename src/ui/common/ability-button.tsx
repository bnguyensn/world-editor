import React from 'react';
import {Box, Tooltip, makeStyles} from '@material-ui/core';
import {BaseAbility} from '../../abilities/models';

interface IComponentProps {
  ability: BaseAbility;
}

const useStyles = makeStyles(() => ({
  abilityButtonContainer: {
    position: 'relative',
    width: 64,
    height: 64,

    cursor: 'pointer',
  },

  abilityIcon: {
    border: '1px solid #212121',
    borderRadius: 5,
  },
}));

const AbilityButton = ({ability}: IComponentProps) => {
  const {icon, description} = ability;

  const classes = useStyles();

  return (
    <Tooltip title={description} aria-label={description}>
      <Box className={classes.abilityButtonContainer}>
        <img className={classes.abilityIcon} src={icon} alt="Ability icon" />
      </Box>
    </Tooltip>
  );
};

export default AbilityButton;
