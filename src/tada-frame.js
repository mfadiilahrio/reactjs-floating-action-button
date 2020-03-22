import React from 'react';

function TadaFrame(props) {
    
    return (
        <div className="tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-enter-done" style={{height: 'calc(100% - 120px)', bottom: 'calc(100px)', right: 20}}>
            <iframe className="tada-panel-frame" src={props.src} allowFullScreen></iframe>
        </div>
    );
}

export default TadaFrame;