import React from 'react';
import { Box, Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline,Grid, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
import projects from '../../data/projects.json';

const cards = [1]

function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <CssBaseline />
      </Box>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Projects
            <PhotoCamera className={classes.icon} />
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              My recent projects
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    My Github
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Email Me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* Second container */}
        <Container className={classes.cardGrid} maxWidth="md">
        {cards.map((card) => (
          <Grid container spacing={4}>
          { projects.map(post => {
                    return(
                      <>
              <Grid item key={card} xs={12} sm={6} md={4} rows={3}>
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {post.projectName}
                    </Typography>
                    <Typography>
                      {post.description}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Source
                    </Button>
                  </CardActions>
                </Card>
              </Grid> 
              </>
                  )
                  })}
          </Grid>
          ))}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give purpose
        </Typography>
      </footer>
    </>
  );
}

export default Portfolio;
