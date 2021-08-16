import React from 'react';
import './Home.css';
import Banner from 'react-js-banner';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
  
  export default function Hook() {
    const classes = useStyles();
    return(
        <div className="home">
        <div>
        <Banner showBanner={true} className="banner">
        <img className="img" src="https://www.creativeboom.com/uploads/articles/4a/4a6be01a52c0223c81a2dddb8dd6da8473f8ea8d_810.jpg"/>
        <div>
            <h1 className="welcome">Welcome!</h1>
            <h1 className="welcome">to my portfolio!</h1>
            <Button className={classes.root}><GetAppOutlinedIcon />Resume</Button>
        </div>
        </Banner>
        </div>
    </div>
    )
  }

// export default Home;