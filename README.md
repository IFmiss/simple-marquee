# simple-marquee
**marquee component for react by requestAnimationFrame**

### [demo](https://daiwei.site/marquee)

### start
```code
npm i simple-marquee
```
**OR**
```code
yarn add simple-marquee
```

### import
```js
import Marquee from 'simple-marquee';
const {
  MarqueeGroup
} = Marquee;
```
**OR**
```js
import Marquee, {
  MarqueeGroup
} from 'simple-marquee';
```

### Marquee text
```tsx
<Marquee className={styles.marquee_group}
  direction={'horizontal'}
  stop={!(stopMarquee.stop && stopMarquee.index === -1)}>
  2020年结束了，2021年开始了，为新的一年，加油 ！！！！⛽️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</Marquee>
```

### Marquee list
```tsx
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
```

### MarqueeGroup props
- `stop` 【boolean】  Control animation group state  

### Marquee props
- `speed` 【number】 animation speed  `default` 1
- `indent`【number】 animation content indent  `default` 0
- `direction`animation direction `default` horizontal
  - 'horizontal'
  - 'vertical'
  - 'horizontal-reverse'
  - 'vertical-reverse'
- `stop` 【boolean】  Control animation state  
- `pauseOnHover`【boolean】 Control animation state when mouseover `default` false

