import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
  root: {
    background: 'green',
    marginLeft: 'auto'
  },
  label: {
    textTransform: 'lowercase'
  }
})


const ButtonComponent = () => {
    const classes = useStyle();
    return (
        <Button classes={{root: classes.root,
            label: classes.label}}>
              Munachi
        </Button>
    )
}

export default ButtonComponent
