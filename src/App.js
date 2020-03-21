import React from 'react';
import posed from 'react-pose';
import BodyEnd from './body-end';

import { config } from './config';

import { getSetting } from './contract/tada-setting';

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

  state = {
    frameShown: false,
    rewardVisible: false,
    formDisplay: 'none',
    buttonText: 'Rewards',
    buttonColor: '#ff7003',
    buttonTextColor: '#ffffff',
    buttonPosition: 'bottom-left',
    pageUrl: '',
    icon: 'https://cdn.sweettooth.io/v1/images/launcher_icons/crown.svg?color=%23FFFFFF'
  }

  async componentDidMount() {
    var div = document.getElementById('tada-shopify-init');

    const response = await getSetting(div.dataset.shop);

    if (response.status === 200) {
      const setting = await response.json();

      this.setState({
        rewardVisible: setting.active === 1 ? true : false,
        buttonText: setting.buttonText != null && setting.buttonText.length > 0 ? setting.buttonText : 'Rewards',
        buttonColor: setting.buttonColor,
        buttonTextColor: setting.buttonTextColor,
        buttonPosition: setting.buttonPosition,
        pageUrl: setting.pageUrl,
        icon: setting.icon != null ? `${config.IMAGE_URL}/${setting.icon}` : 'https://cdn.sweettooth.io/v1/images/launcher_icons/crown.svg?color=%23FFFFFF'
      })
    }
  }

  render() {
    const {
      rewardVisible,
      frameShown,
      buttonText,
      buttonColor,
      buttonTextColor,
      buttonPosition,
      icon,
      pageUrl
    } = this.state;

    const closeForm = () => {
      this.setState({ frameShown: false });
    }

    const showForm = () => {
      this.setState({ frameShown: true });
    }

    const openButtonStyle = buttonPosition === 'bottom-left' ? { display: frameShown ? 'none' : 'block', left: 20 } : { display: frameShown ? 'none' : 'block', right: 20 }
    const frameStyle = buttonPosition === 'bottom-left' ? { display: frameShown ? 'block' : 'none', left: 20 } : { display: frameShown ? 'block' : 'none', right: 20 }

    console.log(icon);

    return rewardVisible && pageUrl.length > 0 && (
      <BodyEnd>
        <RewardsButtonLayout id="rewardsButtonLayout" className="tada-floating-button" style={openButtonStyle}>
          <button className="tada-launcher-button" onClick={showForm}>
            <div style={{ backgroundColor: buttonColor }} className="tada-launcher-container tada-launcher-font-color-light tada-launcher-border-radius-circular tada-launcher-image-only launcher-closed" tabIndex="-1">
              <div className="tada-launcher-content-container">
                <img src={icon} className="tada-launcher-icon" alt="" />
                <div className="tada-launcher-text"><font style={{ color: buttonTextColor }}>{buttonText}</font></div>
              </div>
            </div>
          </button>
        </RewardsButtonLayout>
        <FormLayout className="tada-popup" pose={frameShown ? 'open' : 'closed'} style={frameStyle}>
          <div className="tada-form-container">
            <iframe title="TADA" src={pageUrl}
              className="tada-form-container"
              overflow="hidden"
              height="590px"
              width="360px"
              frameBorder="0"
              display="initial"
              position="relative" />
          </div>
          <button className="tada-launcher-button" style={{ width: 40 }} onClick={closeForm}>
            <div style={{ backgroundColor: buttonColor }} className="tada-launcher-container tada-launcher-font-color-light tada-launcher-border-radius-circular tada-launcher-image-only launcher-open" tabIndex="-1">
              <div className="tada-launcher-close-icon tada-close-btn"></div>
            </div>
          </button>
        </FormLayout>
      </BodyEnd>
    );
  }
}
export default App;