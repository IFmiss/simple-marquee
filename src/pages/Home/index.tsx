import List from '@pages/List';
import React, { useState } from 'react'
import Marquee from '../../Marquee';
import MarqueeGroup from '../../Marquee/MarqueeGroup';
import styles from './home.less'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  const [stopMarquee, setStopMarquee] = useState(false);
  const color = Math.random().toString(16).substr(2, 6);

  return (
    <div className={styles.home}>
      <h1>Simple Marquee for React</h1>
      <button onClick={() => setStopMarquee(s => !s)}>开关</button>
      <div className={styles.area}>
        <h3 className={styles.title}>横向</h3>
        <Marquee className={styles.marquee_group}
        direction={'horizontal'}
        stop={stopMarquee}>
          <List style={{
            backgroundColor: `#${color}`
          }}>白日依山尽</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>黄河入海流</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>欲穷千里目</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>更上一层楼</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>你好</List>
        </Marquee>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>Marquee组</h3>
        <div className={styles.marquee_group}>
          <MarqueeGroup stop={stopMarquee}>
            <Marquee
            style={{
              marginBottom: '12px'
            }}
            speed={1.8}
            direction={'horizontal'}
            stop={stopMarquee}>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
            </Marquee>
            <Marquee
            style={{
              marginBottom: '12px'
            }}
            direction={'horizontal'}
            speed={1.2}
            stop={stopMarquee}>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
            </Marquee>
            <Marquee
            style={{
              marginBottom: '12px'
            }}
            direction={'horizontal'}
            speed={1.4}
            stop={stopMarquee}>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
            </Marquee>
            <Marquee
            direction={'horizontal'}
            speed={1.6}
            stop={stopMarquee}>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
            </Marquee>
          </MarqueeGroup>
        </div>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>横向-反方向</h3>
        <Marquee className={styles.marquee_group}
        direction={'horizontal-reverse'}>
          <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
        </Marquee>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>竖向</h3>
        <Marquee className={styles.marquee_group_vertical}
        direction={'vertical'}>
          <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
        </Marquee>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>竖向</h3>
        <Marquee className={styles.marquee_group_vertical}
        direction={'vertical-reverse'}>
          <List style={{
                backgroundColor: `#${color}`
              }}>你好</List>
        </Marquee>
      </div>
    </div>
  )
}

export default Home
