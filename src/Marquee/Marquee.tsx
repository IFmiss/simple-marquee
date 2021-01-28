import React, {
  useRef,
  useState,
  CSSProperties,
  useMemo,
  useEffect,
  useCallback,
  memo
} from 'react';
import styles from './marquee.less';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  indent?: number;
  direction?:
    'horizontal'
    | 'vertical'
    | 'horizontal-reverse'
    | 'vertical-reverse';
  stop?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  speed = 1,
  children,
  indent = 0,
  direction = 'horizontal',
  stop = false,
  style,
  className,
  ...rest
}) => {
  const mgRef = useRef<HTMLDivElement>(null);
  const mgWrapRef = useRef<HTMLDivElement>(null);
  const [move, setMove] = useState(indent);
  let timerMarquee: any;

  const isReverse = useMemo(() => {
    return (
      direction === 'horizontal-reverse' ||
      direction === 'vertical-reverse'
    )
  }, [direction])

  const isVertical = useMemo(() => {
    return (
      direction === 'vertical' ||
      direction === 'vertical-reverse'
    )
  }, [direction]);

  const rectProp = useMemo(() => {
    return isVertical
      ? 'height'
      : 'width';
  }, [isVertical]);

  const getPos = useCallback(() => {
    const mgWrapRectProp = mgWrapRef.current?.getBoundingClientRect()[rectProp] || 0;
    const mgRectProp = mgRef.current?.getBoundingClientRect()[rectProp] || 0;
    return isReverse
      ? (
        mgRectProp > mgWrapRectProp
          ? mgWrapRectProp
          : mgWrapRectProp + (mgWrapRectProp - mgRectProp) - indent
      )
      : mgWrapRectProp - indent;
  }, [isVertical, move]);

  const reverseTransPos = useMemo(() => {
    const mgWrapRectProp = mgWrapRef.current?.getBoundingClientRect()[rectProp] || 0;
    const mgRectProp = mgRef.current?.getBoundingClientRect()[rectProp] || 0;
    return isReverse
      ? mgWrapRectProp - mgRectProp
      : 0
  }, [isReverse, move]); 

  useEffect(() => {
    setMove(getPos());
  }, []);

  useEffect(() => {
    if (stop) {
      return timerMarquee && cancelAnimationFrame(timerMarquee);
    }
    runAnimate();

    return () => {
      cancelAnimationFrame(timerMarquee)
    };
  }, [move, stop]);

  // 动画执行
  const runAnimate = useCallback(() => {
    const f = () => {
      if (isReverse) {
        if (move < reverseTransPos) {
          setMove(getPos());
        } else {
          setMove(m => m - speed);
        }
      } else {
        if (move > (mgWrapRef.current?.getBoundingClientRect()[rectProp] ?? 0)) {
          setMove(0);
        } else {
          setMove(m => m + speed);
        }
      }
    };

    timerMarquee = requestAnimationFrame(() => {
      f();
    });
  }, [move, stop, speed]);

  const wrapStyle: CSSProperties = {
    transform: isVertical ? `translate3d(0, -${move}px, 0)` : `translate3d(-${move}px, 0, 0)`
  };

  const marqueeCls = classNames(
    styles.marquee,
    styles[direction],
    className
  );

  const marqueeWrapCls = classNames(styles.marquee_wrap);

  return (
    <div {...rest}
      className={marqueeCls}
      ref={mgRef}
      style={{
        ...style,
        overflow: 'hidden'
      }}>
      <div className={marqueeWrapCls} ref={mgWrapRef} style={wrapStyle}>
        {children}
      </div>
      <div className={marqueeWrapCls} style={wrapStyle}>
        {children}
      </div>
    </div>
  );
};

Marquee.propTypes = {
  speed: PropTypes.number,
  indent: PropTypes.number,
  direction: PropTypes.oneOf([
    'horizontal',
    'vertical',
    'horizontal-reverse',
    'vertical-reverse'
  ]),
  stop: PropTypes.bool
};

Marquee.displayName = 'Marquee';

export default memo(Marquee);
