import React from 'react';
import './Contact.css';
import {Typography, Card, CardContent, Grid, TextField, Button} from '@material-ui/core'

function Contact(props) {
    return (
      <div className="App">
        <Card style={{maxWidth:450, margin: "0 auto", padding:"20px 5px"}}>
          <CardContent>
          <Typography gutterBottom variant="h5">Let's get in contact!</Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">FIll this out please!</Typography>
            <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="Email"
                  label="Email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  type="number"
                  label="Phone Number"
                  placeholder="Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Message"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}

export default Contact;