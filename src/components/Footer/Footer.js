import React from 'react'
import {Typography} from '@material-ui/core';

function Footer() {
    return (
        <div>
      <footer className="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give purpose
        </Typography>
      </footer> 
        </div>
    )
}

export default Footer;
