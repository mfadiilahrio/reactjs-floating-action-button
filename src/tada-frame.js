import React, { useEffect, useState } from 'react';

function TadaFrame(props) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(props.visible);
            setVisible(props.visible);
        }, 100);
    }, [props.visible]);

    const handleClose = () => {
        props.onClose();
    };

    const onFrameLoaded = () => {
        setLoading(false);
    }

    const frameStyle = props.position === 'bottom-right' || props.isMobile ? {height: 'calc(100% - 120px)', bottom: 'calc(100px)', right: 20} : {height: 'calc(100% - 120px)', bottom: 'calc(100px)', left: 20}

    const innerCloseButton = props.isMobile ? 'block' : 'none';
 
    var className = "";

    if (props.visible) {
        if (visible !== props.visible) {
            className = "tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-enter tada-panel-enter-active";
        } else {
            className = "tada-panel-frame-container tada-panel-border-radius-rounded tada-theme-light tada-panel-enter-done";
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
            <div className={loading ? 'tada-loading-spinner-container tada-content-loading tada-loading-spinner-show' : 'tada-loading-spinner-container tada-content-loading tada-loading-spinner-hide'}>
                ::before
                ::after
            </div>
            <iframe onLoad={onFrameLoaded} className="tada-panel-frame" src={props.src} allowFullScreen></iframe>
            <button className="tada-panel-close-button" style={{display: innerCloseButton}} onClick={handleClose}>
            </button>
        </div>
    );
}

export default TadaFrame;