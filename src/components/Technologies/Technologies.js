import React from 'react';
import useStyles from './styles';
import { Grid, Button, Card, Container, CardMedia, CardContent, Typography, CardActions} from '@material-ui/core';


const cards = [1,2,3,4,5,6]

function Technologies() {
  
    const classes = useStyles();
    return (
    
      <main>
        <Container>
          <Grid sx={useStyles.grid} container spacing={4}>
          {cards.map((card) => (
              <Grid item key={card} xs={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                    </Typography>
                    service name
                    <Typography>
                      Media card to describe project where u can write whatever
                      you want about the project
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))};
            </Grid>
        </Container>
      </main>
       );
}

export default Technologies;

