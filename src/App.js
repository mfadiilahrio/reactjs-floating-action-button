import React from 'react';
import posed from 'react-pose';
import './App.css';

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
      <div>
        <RewardsButtonLayout id="rewardsButtonLayout" className="tada-floating-button" pose={isRewardsVisible ? 'open' : 'closed'} style={{display: rewardsDisplay}}>
        <div className="frame-content">
            <button className="tada-launcher-button" onClick={this.showForm}>
              <div style={{ backgroundColor: "#fe4c4c" }} className="tada-launcher-container tada-launcher-font-color-light tada-launcher-border-radius-circular tada-launcher-image-only launcher-closed" tabIndex="-1">
                <div className="tada-launcher-content-container">
                  <img src="https://cdn.sweettooth.io/v1/images/launcher_icons/crown.svg?color=%23FFFFFF" className="tada-launcher-icon" alt="" />
                  <div className="tada-launcher-text">Rewards</div>
                </div>
                <div className="tada-launcher-close-icon tada-close-btn"></div>
              </div>
            </button>
          </div>
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
          <div className="frame-content">
            <button className="tada-launcher-button" onClick={this.closeForm}>
              <div style={{ backgroundColor: "#fe4c4c" }} className="tada-launcher-container tada-launcher-font-color-light tada-launcher-border-radius-circular tada-launcher-image-only launcher-open" tabIndex="-1">
                <div className="tada-launcher-close-icon tada-close-btn"></div>
              </div>
            </button>
          </div>
        </FormLayout>
      </div>
    );
  }
}
export default App;