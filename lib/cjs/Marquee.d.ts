import React from 'react';
export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
    speed?: number;
    indent?: number;
    direction?: 'horizontal' | 'vertical' | 'horizontal-reverse' | 'vertical-reverse';
    stop?: boolean;
    pauseOnHover?: boolean;
}
declare const _default: React.NamedExoticComponent<MarqueeProps>;
export default _default;
