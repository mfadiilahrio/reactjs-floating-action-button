/* eslint-disable react/style-prop-object */
import React from 'react';
import Iframe from 'react-iframe';
import './App.css';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    background: '#fe4c4c',
    color: '#ffffff',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  frameContainer: {
    borderRadius: 20,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="app">
      <div id="rewardsButtonLayout">
        <Fab variant="extended" className={classes.fab} id="rewardsButton" onClick={function () {
          document.getElementById("rewardsButtonLayout").style.display = "none";
          document.getElementById("myForm").style.display = "block";
          document.getElementById("closeButtonLayout").style.display = "block";
        }}>
          <img src="https://cdn.sweettooth.io/v1/images/launcher_icons/crown.svg?color=%23FFFFFF" alt="" className={classes.extendedIcon} />
        Rewards
      </Fab>
      </div>
      <div className="popup" id="myForm">
        <div className="form-container">
          <Iframe url="https://mediadistribution.espn.com/"
            className={classes.frameContainer}
            overflow="hidden"
            height="450px"
            frameBorder="0"
            display="initial"
            position="relative" />
        </div>
        <div id="closeButtonLayout" style={{ display: 'none' }} >
          <Fab className={classes.fab} id="closeButton" onClick={function () {
            document.getElementById("rewardsButtonLayout").style.display = "block";
            document.getElementById("myForm").style.display = "none";
            document.getElementById("closeButtonLayout").style.display = "none";
          }}>
            <CloseIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default App;
