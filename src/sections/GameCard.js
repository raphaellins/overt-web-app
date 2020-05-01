import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '10px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  secondaryTitle: {
    color: '#A9A9A9'
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>
            1960 - <span className={classes.secondaryTitle}>29/04/2020</span>
          </Typography>
          <hr />
          <Typography>02	03	07	09	10  12	13	15	17	18  20	21	23	24	25</Typography>
        </CardContent>
      </div>
    </Card>
  );
}