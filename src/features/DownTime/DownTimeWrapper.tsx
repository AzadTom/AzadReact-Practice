import React from 'react';
import DownTime from './DownTime';

interface DownTimeWrapperProps {
    children: React.ReactNode;
}

const DownTimeWrapper = ({ children }: DownTimeWrapperProps) => {
    const isEnabled   = import.meta.env.VITE_REACT_APP_ENABLE_DOWNTIME === 'true';

    return <main>{isEnabled ? <DownTime /> : <>{children}</>}</main>;
};

export default DownTimeWrapper;