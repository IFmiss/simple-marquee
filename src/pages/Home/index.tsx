import List from '@pages/List';
import React, { useState } from 'react'
import Marquee from 'simple-marquee';
// import MarqueeGroup from '../../Marquee/MarqueeGroup';
import styles from './home.less'
const { MarqueeGroup } = Marquee;

interface IHomeProps {}

const color = '6f7f81'

const Home: React.FC<IHomeProps> = (props) => {
  const [stopMarquee, setStopMarquee] = useState({
    stop: true,
    index: -1
  });

  const onBtnClick = (index: number) => {
    setStopMarquee(s => ({
      stop: index === s.index ? !s.stop : true,
      index
    }))
  }

  const isPlay = (index: number) => {
    return stopMarquee.index === index && stopMarquee.stop
  }

  return (
    <div className={styles.home}>
      <h1>Simple Marquee for React</h1>

      <p>⚠️ 组件使用js实现的 Marquee 功能不适用于多个 Marquee 组件同时展示</p>
      
      <code>npm i simple-marquee</code>
      <p>OR</p>
      <code>yarn add simple-marquee</code>

      <div className={styles.area}>
        <h3 className={styles.title}>横向文字</h3>
        <Marquee className={styles.marquee_group}
          direction={'horizontal'}
          stop={!(stopMarquee.stop && stopMarquee.index === -1)}>
          2020年结束了，2021年开始了，为新的一年，加油 ！！！！⛽️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>
      <button onClick={() => onBtnClick(-1)}>{ isPlay(-1) ? '关闭' : '启动' }</button>

      <div className={styles.area}>
        <h3 className={styles.title}>横向列表</h3>
        <Marquee className={styles.marquee_group}
        direction={'horizontal'}
        stop={!(stopMarquee.stop && stopMarquee.index === 0)}>
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
          }}>春眠不觉晓</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>处处闻啼鸟</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>夜来风雨声</List>
          <List style={{
            backgroundColor: `#${color}`
          }}>花落知多少</List>
        </Marquee>
      </div>
      <button onClick={() => onBtnClick(0)}>{ isPlay(0) ? '关闭' : '启动' }</button>

      <div className={styles.area}>
        <h3 className={styles.title}>Marquee组</h3>
        <div className={styles.marquee_group}>
          <MarqueeGroup stop={!(stopMarquee.stop && stopMarquee.index === 1)}>
            <Marquee
            style={{
              marginBottom: '12px'
            }}
            speed={1.8}
            indent={10}
            direction={'horizontal'}>
              <List style={{
                backgroundColor: `#${color}`
              }}>枯藤老树昏鸦</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>小桥流水人家</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>古道西风瘦马</List>
            </Marquee>
            <Marquee
            style={{
              marginBottom: '12px'
            }}
            direction={'horizontal-reverse'}
            indent={25}
            speed={1.2}>
              <List style={{
                backgroundColor: `#${color}`
              }}>夕阳西下</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>断肠人在天涯</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>离离原上草</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>一岁一枯荣</List>
            </Marquee>
            <Marquee
            direction={'horizontal'}
            indent={55}
            speed={1.4}>
              <List style={{
                backgroundColor: `#${color}`
              }}>一岁一枯荣</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>野火烧不尽</List>
              <List style={{
                backgroundColor: `#${color}`
              }}>春风吹又生</List>
            </Marquee>
          </MarqueeGroup>
        </div>

        <button onClick={() => onBtnClick(1)}>{ isPlay(1) ? '关闭' : '启动' }</button>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>横向-反方向</h3>
        <Marquee className={styles.marquee_group}
        direction={'horizontal-reverse'}
        stop={!(stopMarquee.stop && stopMarquee.index === 2)}>
          <List style={{
                backgroundColor: `#${color}`
              }}>明天会更好，打工人</List>
        </Marquee>

        <button onClick={() => onBtnClick(2)}>{ isPlay(2) ? '关闭' : '启动' }</button>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>竖向</h3>
        <Marquee className={styles.marquee_group_vertical}
        direction={'vertical'}
        stop={!(stopMarquee.stop && stopMarquee.index === 3)}>
          <List style={{
                // backgroundColor: `#${color}`
              }}>hello</List>
          <List style={{
                // backgroundColor: `#${color}`
              }}>this is a react component</List>
          <List style={{
                // backgroundColor: `#${color}`
              }}>react simple marquee</List>
        </Marquee>
        <button onClick={() => onBtnClick(3)}>{ isPlay(3) ? '关闭' : '启动' }</button>
      </div>

      <div className={styles.area}>
        <h3 className={styles.title}>竖向-反方向</h3>
        <Marquee className={styles.marquee_group_vertical}
        direction={'vertical-reverse'}
        stop={!(stopMarquee.stop && stopMarquee.index === 4)}>
          <List style={{
                // backgroundColor: `#${color}`
              }}>11111111111</List>
          <List style={{
                // backgroundColor: `#${color}`
              }}>22222222</List>
          <List style={{
                // backgroundColor: `#${color}`
              }}>33333333</List>
        </Marquee>
        <button onClick={() => onBtnClick(4)}>{ isPlay(4) ? '关闭' : '启动' }</button>
      </div>
    </div>
  )
}

export default Home
