import React from 'react';
import posed from 'react-pose';
import './App.css';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class App extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="App">
        <p className="tada-header-text">Hello :)</p>
        <p className="tada-content-text">This is React Web App sample for Floating Action Button With Floating Iframe</p>
        <Box className="tada-box" pose={isVisible ? 'visible' : 'hidden'} />
        <p className="tada-content-text">
  
          The standard Lorem Ipsum passage, used since the 1500s
  
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
        </p>
        <div id="rewardsButtonLayout" className="tada-floating-button">
          <Fab variant="extended" className="tada-fab" id="rewardsButton" onClick={function () {
            document.getElementById("rewardsButtonLayout").style.display = "none";
            document.getElementById("myForm").style.display = "block";
            document.getElementById("closeButtonLayout").style.display = "block";
          }}>
            <img src="https://cdn.sweettooth.io/v1/images/launcher_icons/crown.svg?color=%23FFFFFF" alt="" className="tada-extended-icon" />
          Rewards
        </Fab>
        </div>
        <div className="tada-popup" id="myForm">
          <div className="tada-form-container">
            <iframe title="test" src="https://www.michaelcorrey.com/"
              className="tada-form-container"
              overflow="hidden"
              height="450px"
              frameBorder="0"
              display="initial"
              position="relative" />
          </div>
          <div id="closeButtonLayout" style={{ display: 'none' }} >
            <Fab className="tada-fab" id="closeButton" onClick={function () {
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
}
export default App;