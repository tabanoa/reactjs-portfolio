import React from "react";
import useStyles from "./styles";
import { FolderSpecial } from "@material-ui/icons";
import {
  Grid,
  Card,
  Container,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import technologies from "../../data/technologies.json";

const cards = [1];

function Technologies() {
  const classes = useStyles();
  return (
    <main>
      <Container>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Skills
          <FolderSpecial className={classes.icon} />
        </Typography>
        <Grid sx={useStyles.grid} container spacing={4}>
          {technologies.map((post) => {
            return (
              <>
                {cards.map((card) => (
                  <Grid item key={card} xs={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={post.image}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5"></Typography>
                        {post.servicename}
                        <Typography>{post.description}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </>
            );
          })}
        </Grid>
      </Container>
    </main>
  );
}

export default Technologies;
