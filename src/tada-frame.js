import React from 'react';

function TadaFrame(props) {

    const frameStyle = props.position === 'bottom-right' || props.isMobile ? {height: 'calc(100% - 120px)', bottom: 'calc(100px)', right: 20} : {height: 'calc(100% - 120px)', bottom: 'calc(100px)', left: 20}
   
    return (
        <div className="tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-enter-done" style={frameStyle}>
            <iframe className="tada-panel-frame" src={props.src} allowFullScreen></iframe>
        </div>
    );
}

export default TadaFrame;