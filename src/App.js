import React from 'react';
import posed from 'react-pose';
import './App.css';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';

const RewardsButtonLayout = posed.div({
  open: { x: '0%' },
  closed: { x: '-100%' }
});

const FormLayout = posed.div({
  open: { x: '0%' },
  closed: { x: '-100%' }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRewardsVisible: true,
      isFormVisible: false,
      rewardsDisplay: 'block',
      formDisplay: 'none'
    };

    this.closeForm = this.closeForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  closeForm() {
    this.setState(() => ({      
      isRewardsVisible: true,
      isFormVisible: false,
      rewardsDisplay: 'block',
      formDisplay: 'none'
    }));  
  }

  showForm() {
    this.setState(() => ({      
      isRewardsVisible: false,
      isFormVisible: true,
      rewardsDisplay: 'none',
      formDisplay: 'block'
    }));  
  }

  render() {
    const { isRewardsVisible, isFormVisible, rewardsDisplay, formDisplay } = this.state;
    return (
      <div className="App">
        <p className="tada-header-text">Hello :)</p>
        <p className="tada-content-text">This is React Web App sample for Floating Action Button With Floating Iframe</p>
        <p className="tada-content-text">
  
          The standard Lorem Ipsum passage, used since the 1500s
  
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
        </p>
        <RewardsButtonLayout id="rewardsButtonLayout" className="tada-floating-button" pose={isRewardsVisible ? 'open' : 'closed'} style={{display: rewardsDisplay}}>
          <Fab variant="extended" className="tada-fab" id="rewardsButton" onClick={this.showForm}>
            <img src="https://cdn.sweettooth.io/v1/images/launcher_icons/crown.svg?color=%23FFFFFF" alt="" className="tada-extended-icon" />
          Rewards
        </Fab>
        </RewardsButtonLayout>
        <FormLayout className="tada-popup" id="myForm" pose={isFormVisible ? 'open' : 'closed'} style={{display: formDisplay}}>
          <div className="tada-form-container">
            <iframe title="test" src="https://www.michaelcorrey.com/"
              className="tada-form-container"
              overflow="hidden"
              height="450px"
              frameBorder="0"
              display="initial"
              position="relative" />
          </div>
          <div id="closeButtonLayout">
            <Fab className="tada-fab" id="closeButton" onClick={this.closeForm}>
              <CloseIcon />
            </Fab>
          </div>
        </FormLayout>
      </div>
    );
  }
}
export default App;