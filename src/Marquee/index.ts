import M, { MarqueeProps } from './Marquee';
import MarqueeGroup from './MarqueeGroup';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<MarqueeProps> {
  MarqueeGroup: typeof MarqueeGroup;
}

const Marquee = M as CompoundedComponent;
Marquee.MarqueeGroup = MarqueeGroup;

export default Marquee;
