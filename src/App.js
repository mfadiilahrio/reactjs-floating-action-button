import React from 'react';
import BodyEnd from './body-end';
import TadaFrame from './tada-frame';

import { config } from './config';

import { getSetting } from './contract/tada-setting';

import './App.css';

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
    isMobile: false,
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

    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({isMobile: window.innerWidth <= 450 })
  }

  render() {
    const {
      rewardVisible,
      frameShown,
      buttonText,
      buttonColor,
      buttonTextColor,
      buttonPosition,
      pageUrl,
      isMobile,
      icon,
    } = this.state;

    const toggleForm = () => {
      this.setState({ frameShown: !frameShown });
    }

    const isTooDark = (color) => {
      const hex = color.replace('#', '');
      const c_r = parseInt(hex.substr(0, 2), 16);
      const c_g = parseInt(hex.substr(2, 2), 16);
      const c_b = parseInt(hex.substr(4, 2), 16);
      const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
      
      return brightness < 155;
    }

    const buttonStyle = buttonPosition === 'bottom-right' || isMobile ? {bottom: isMobile ? 30 : 20, width: 143, right: isMobile ? 30 : 20 } : {bottom: isMobile ? 30 : 20, width: 147, left: isMobile ? 30 : 20 }
    
    console.log('dada: ' + isTooDark(buttonColor));
    
    return rewardVisible && pageUrl.length > 0 && (
      <BodyEnd>
        <div style={{ position: "fixed", width: 0, height: 0, bottom: 0, right: 0, zIndex: 2147483647 }}>
          <div>
            { frameShown ? <TadaFrame src={pageUrl} position={buttonPosition} isMobile={isMobile} /> : null }
            <div className={`tada-launcher-frame-container tada-launcher-border-radius-circular ${isMobile ? 'tada-launcher-mobile' : 'tada-launcher-image-only'} ${frameShown ? 'tada-launcher-open' : 'tada-launcher-closed'} tada-launcher-animate`} style={buttonStyle}>
              <button className="tada-launcher-button" onClick={toggleForm}>
                <div style={{ backgroundColor: buttonColor }} className={`tada-launcher-container ${isTooDark(buttonColor) ? 'tada-launcher-font-color-light' : 'tada-launcher-font-color-dark'} tada-launcher-border-radius-circular ${isMobile ? 'tada-launcher-mobile' : 'tada-launcher-image-only'} ${frameShown ? 'tada-launcher-open' : 'tada-launcher-closed'}`} tabIndex="-1">
                  <div className="tada-launcher-content-container">
                    <img src={icon} className="tada-launcher-icon" alt="" />
                    <div className="tada-launcher-text"><font style={{ color: buttonTextColor }}>{buttonText}</font></div>
                  </div>
                  <img src={icon} className="tada-launcher-icon tada-launcher-mobile-only" alt="" />
                  <div className="tada-launcher-close-icon tada-close-btn"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </BodyEnd>
    );
  }
}
export default App;