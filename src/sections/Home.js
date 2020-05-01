import React from 'react';
import HeaderBar from './HeaderBar'
import Grid from '@material-ui/core/Grid';
import GameCard from './GameCard'
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import { Container } from './styles';

export default function Home() {
  return (
    <div>
      <HeaderBar />
      <Grid
        container
        direction="row"
        justify="space-between"
        spacing={1}
      >

        <Grid container item xs={6} spacing={1} direction="column">
          <AppBar position="static">
            <Toolbar>
              <Typography>Games</Typography>
            </Toolbar>
          </AppBar>
          <GameCard></GameCard>
          <GameCard></GameCard>
          <GameCard></GameCard>
        </Grid>

        <Grid container item xs={6} spacing={1} direction="column">
          <AppBar position="static">
            <Toolbar>
              <Typography>Draws</Typography>
            </Toolbar>
          </AppBar>
          <GameCard></GameCard>
          <GameCard></GameCard>
        </Grid>

      </Grid>
    </div>
  );
}
