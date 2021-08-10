import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
    background: 'transperent',
    border: '2px solid red',
    borderRadius: 15,
    textAlign: 'center',
  },
  but: {
   background: 'white',
   margin: 'auto'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: 15,
  },
});

export default function Cards() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          What happened in 1960
        </Typography>
        <Typography variant="h5" component="h2">
          Munachiso
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          between
        </Typography>
        <Typography variant="body2" component="p">
          the sounds of time
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.but}>Learn More</Button>
      </CardActions>
    </Card>
  );
}