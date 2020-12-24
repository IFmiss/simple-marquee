import React, {
  useCallback,
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
  FunctionComponent
} from 'react';
import styles from './marquee.less';
import useAnimationFrame from './useRequestCallback';
// import PropTypes from 'prop-types';

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  indent?: number;
  direction?: 'horizontal' | 'vertical';
  stop?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  speed = 1,
  children,
  indent = 0,
  direction = 'horizontal',
  stop = false,
  ...rest
}) => {
  const mgRef = useRef<HTMLDivElement>(null);
  const mgWrapRef = useRef<HTMLDivElement>(null);
  const [move, setMove] = useState(indent);
  let timerMarquee: any;
  useLayoutEffect(() => {
    if (stop) {
      return cancleAnimate();
    }
    runAnimate();
  }, [move, stop]);

  const runAnimate = () => {
    const rectProp = direction === 'vertical' ? 'height' : 'width';
    const f = () => {
      if (move > ((mgWrapRef.current?.getBoundingClientRect()[rectProp] ?? 0)) - 1) {
        setMove(0);
      } else {
        setMove(m => m + speed);
      }
    };

    timerMarquee = requestAnimationFrame(() => {
      f();
    });

    return () => {
      cancelAnimationFrame(timerMarquee);
    };
  };

  const cancleAnimate = () => {
    timerMarquee && cancelAnimationFrame(timerMarquee);
    timerMarquee = undefined;
  };

  const restartAnimate = () => {
    !timerMarquee && runAnimate();
  };

  const style = {
    transform: direction === 'horizontal' ? `translate3d(-${move}px, 0, 0)` : `translate3d(0, -${move}px, 0)`
  };

  return (
    <div {...rest}>
      <div className={`${styles.marquee} ${direction}`} ref={mgRef}>
        <div className={styles.marquee_wrap} ref={mgWrapRef} style={style}>
          {children}
        </div>
        <div className={styles.marquee_wrap} style={style}>
          {children}
        </div>
      </div>
    </div>
  );
};

//Marquee.propTypes = {
//	props: PropTypes.string
//};

Marquee.displayName = 'Marquee';

export default Marquee;
