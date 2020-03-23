import React, { useEffect, useState } from 'react';

function TadaFrame(props) {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setVisible(props.visible);
        }, 100);
    }, [props.visible]);

    const frameStyle = props.position === 'bottom-right' || props.isMobile ? {height: 'calc(100% - 120px)', bottom: 'calc(100px)', right: 20} : {height: 'calc(100% - 120px)', bottom: 'calc(100px)', left: 20}
   
    console.log('visible: ' + visible + ', props: ' + props.visible);
 
    if (props.visible) {
        if (visible !== props.visible) {
            return (
                <div className="tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-enter tada-panel-enter-active" style={frameStyle}>
                    <iframe className="tada-panel-frame" src={props.src} allowFullScreen></iframe>
                </div>
            )
        } else {
            return (
                <div className="tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-enter-done" style={frameStyle}>
                    <iframe className="tada-panel-frame" src={props.src} allowFullScreen></iframe>
                </div>
            );
        }
    } else {
        if (visible !== props.visible) {
            return (
                <div className="tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-exit tada-panel-exit-active" style={frameStyle}>
                    <iframe className="tada-panel-frame" src={props.src} allowFullScreen></iframe>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default TadaFrame;