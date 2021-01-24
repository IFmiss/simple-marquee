/// <reference types="react" />
import { MarqueeProps } from './Marquee';
import MarqueeGroup from './MarqueeGroup';
interface CompoundedComponent extends React.ForwardRefExoticComponent<MarqueeProps> {
    MarqueeGroup: typeof MarqueeGroup;
}
declare const Marquee: CompoundedComponent;
export default Marquee;
