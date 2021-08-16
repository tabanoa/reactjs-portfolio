import React from 'react';
import './Portfolio.css';
import { Box, Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline,Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9]

function Portfolio() {
    const classes = useStyles();
    return (
        <>
        <Box>
            <CssBaseline />
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6">
                Portfolio
            </Typography>
         </Box>
         <main>
             <div className={classes.container}>
                 <Container maxWidth="sm">
                     <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                         Projects
                     </Typography>
                     <Typography variant="h5" align="center" color="textSecondary" paragraph>
                         My recent projects
                     </Typography>
                    <div className={classes.button}>
                    <Grid container spacing={2} justify="center"> 
                        <Grid item>
                            <Button variant="contained" color="primary">
                                See my projects
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                        </Grid>
                    </Grid>
                    </div>
                </Container>
             </div>
             <Container className={classes.cardGrid} maxWidth="md">
                 <Grid container spacing={4}>
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
                                Header
                            </Typography>
                            <Typography>
                                Media card to describe project where u can write whatever you want about the project
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                 </Grid>
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
    )
}

export default Portfolio;
