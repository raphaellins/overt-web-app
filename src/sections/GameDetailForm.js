import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="initialDraw"
            name="initialDraw"
            label="Initial Draw"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastDraw"
            name="lastDraw"
            label="Last Draw"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="game"
            name="game"
            label="Game"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}