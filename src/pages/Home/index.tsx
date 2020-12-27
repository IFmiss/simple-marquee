import List from '@pages/List';
import React, { useState } from 'react'
import Marquee from '../../Marquee';
import MarqueeGroup from '../../Marquee/MarqueeGroup';
import styles from './home.less'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  const [stopMarquee, setStopMarquee] = useState(false);

  return (
    <div className={styles.home}>
      <h1>Simple Marquee for React</h1>
      <button onClick={() => setStopMarquee(s => !s)}>开关</button>
      <div className={styles.area}>
        <h3 className={styles.title}>横向</h3>
        <Marquee style={{
          width: '400px',
          maxWidth: '100%', 
          background: 'red'
        }}
        direction={'horizontal'}
        stop={stopMarquee}>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
          <List style={{
            backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`
          }}>你好</List>
        </Marquee>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>Marquee组</h3>
        <div>
          <MarqueeGroup stop={stopMarquee}>
            <Marquee style={{
              width: '400px',
              maxWidth: '100%', 
              background: 'red'
            }}
            direction={'horizontal'}
            stop={stopMarquee}>
              <h3 className={styles['horizontal-item']}>123123123123123123123123123123123123123123</h3>
            </Marquee>
            <Marquee style={{
              width: '400px',
              maxWidth: '100%', 
              background: 'red'
            }}
            direction={'horizontal'}
            speed={1.2}
            stop={stopMarquee}>
              <h3 className={styles['horizontal-item']}>123123123123123123123123123123123123123123</h3>
            </Marquee>
            <Marquee style={{
              width: '400px',
              maxWidth: '100%', 
              background: 'red'
            }}
            direction={'horizontal'}
            stop={stopMarquee}>
              <h3 className={styles['horizontal-item']}>123123123123123123123123123123123123123123</h3>
            </Marquee>
            <Marquee style={{
              width: '400px',
              maxWidth: '100%', 
              background: 'red'
            }}
            direction={'horizontal'}
            stop={stopMarquee}>
              <h3 className={styles['horizontal-item']}>123123123123123123123123123123123123123123</h3>
            </Marquee>
          </MarqueeGroup>
        </div>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>横向-反方向</h3>
        <Marquee style={{
          width: '400px',
          maxWidth: '100%', 
          background: 'red'
        }}
        direction={'horizontal-reverse'}>
          <h3 className={styles['horizontal-item']}>123123123123123123123123123123123123123123</h3>
        </Marquee>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>竖向</h3>
        <Marquee style={{
          width: '400px',
          maxWidth: '100%', 
          height: '20px',
          background: 'blue'
        }}
        direction={'vertical'}>
          <h3 className={styles['horizontal-item']}>123123123123123123123123123123123123123123</h3>
        </Marquee>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>竖向</h3>
        <Marquee style={{
          width: '400px',
          maxWidth: '100%', 
          height: '20px',
          background: 'blue'
        }}
        direction={'vertical-reverse'}>
          <h3 className={styles['horizontal-item']}>123123123123123123123123123123123123123123</h3>
        </Marquee>
      </div>
    </div>
  )
}

export default Home
