import React, { useEffect, useState } from 'react';

function TadaFrame(props) {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setVisible(props.visible);
        }, 100);
    }, [props.visible]);

    const handleCLose = () => {
        props.onClose();
    };

    const frameStyle = props.position === 'bottom-right' || props.isMobile ? {height: 'calc(100% - 120px)', bottom: 'calc(100px)', right: 20} : {height: 'calc(100% - 120px)', bottom: 'calc(100px)', left: 20}

    const innerCloseButton = props.isMobile ? 'block' : 'none';
 
    var className = "";
    var loadingClassName = "tada-loading-spinner-container tada-content-loading tada-loading-spinner-hide";

    if (props.visible) {
        if (visible !== props.visible) {
            className = "tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-enter tada-panel-enter-active";
            loadingClassName = "tada-loading-spinner-container tada-content-loading tada-loading-spinner-show";
        } else {
            className = "tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-enter-done";
            loadingClassName = "tada-loading-spinner-container tada-content-loading tada-loading-spinner-hide";
        }
    } else {
        if (visible !== props.visible) {
            className = "tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-exit tada-panel-exit-active";
        } else {
            return "";
        }
    }

    return className.length > 0 && (
        <div className={className} style={frameStyle}>
            <div className={loadingClassName}>
                ::before
                ::after
            </div>
            <iframe className="tada-panel-frame" src={props.src} allowFullScreen></iframe>
            <button className="tada-panel-close-button" style={{display: innerCloseButton}} onClick={handleCLose}>
                x
            </button>
        </div>
    );
}

export default TadaFrame;