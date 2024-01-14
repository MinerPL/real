"use strict";
n.r(e), n.d(e, {
  default: function() {
    return o
  }
}), n("222007"), n("424973");
var s, o, i = n("37983"),
  r = n("884691"),
  a = n("414456"),
  l = n.n(a),
  c = n("369470"),
  u = n.n(c),
  d = n("458960"),
  p = n("266491"),
  h = n("957954"),
  f = n("485328"),
  m = n("407063"),
  C = n("87465"),
  g = n("659500"),
  E = n("49111"),
  L = n("585292");
let A = {
  friction: 10,
  tension: 100
};

function N(t, e) {
  return (t % e + e) % e
}
class O extends r.Component {
  componentWillEnter(t) {
    let {
      directionHistory: e
    } = this.props, {
      translate: n,
      opacity: s
    } = this.state;
    n.setValue(e[e.length - 1]), s.setValue(0), t(), d.default.parallel([d.default.timing(s, {
      toValue: 1,
      easing: d.default.Easing.out(d.default.Easing.linear),
      duration: 200
    }), d.default.spring(n, {
      toValue: 0,
      ...A
    })]).start()
  }
  componentWillLeave(t) {
    let {
      directionHistory: e
    } = this.props, {
      opacity: n,
      translate: s
    } = this.state;
    d.default.parallel([d.default.timing(n, {
      toValue: 0,
      easing: d.default.Easing.in(d.default.Easing.linear),
      duration: 200
    }), d.default.spring(s, {
      toValue: -1 * e[e.length - 1],
      ...A
    })]).start(t)
  }
  getStyle() {
    let {
      translate: t,
      opacity: e
    } = this.state;
    return d.default.accelerate({
      opacity: e,
      transform: [{
        translateX: t.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "300px"]
        })
      }]
    })
  }
  render() {
    let {
      item: t
    } = this.props, {
      className: e
    } = this.props;
    return (0, i.jsx)(d.default.img, {
      src: t.src,
      alt: "",
      className: l(L.slide, e),
      style: this.getStyle()
    })
  }
  constructor(...t) {
    super(...t), this.state = {
      translate: new d.default.Value(0),
      opacity: new d.default.Value(1)
    }
  }
}(s = class extends r.Component {
  componentDidMount() {
    this.preloadNextImages(), f.default.disable(), f.default.enableTemp(h.MODAL_CAROUSEL_LAYOUT), g.ComponentDispatch.subscribe(E.ComponentActions.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), g.ComponentDispatch.subscribe(E.ComponentActions.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  componentWillUnmount() {
    f.default.disableTemp(), g.ComponentDispatch.unsubscribe(E.ComponentActions.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), g.ComponentDispatch.unsubscribe(E.ComponentActions.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  preloadNextImages() {
    var t, e;
    let {
      currentIndex: n
    } = this.state, {
      items: s
    } = this.props;
    let o = ((n + 1) % (t = s.length) + t) % t;
    let i = ((n - 1) % (e = s.length) + e) % e;
    this.preloadImage(s[o]), this.preloadImage(s[i])
  }
  preloadImage(t) {
    (0, m.loadImage)(t.src)
  }
  componentDidUpdate(t, e) {
    let {
      currentIndex: n
    } = this.state;
    n !== e.currentIndex && this.preloadNextImages()
  }
  navigateTo(t) {
    var e, n, s;
    let {
      directionHistory: o,
      currentIndex: i
    } = this.state;
    o.push(t - i), t = (t % (s = this.props.items.length) + s) % s, this.setState({
      currentIndex: t,
      directionHistory: o
    }), null === (e = (n = this.props).onIndexChange) || void 0 === e || e.call(n, t)
  }
  render() {
    var t;
    let {
      className: e
    } = this.props, {
      currentIndex: n,
      directionHistory: s
    } = this.state, {
      modalCarouselItemClassName: o
    } = this.props, r = this.props.items[n], a = this.props.items;
    return (0, i.jsxs)(p.default, {
      component: "div",
      className: l(L.wrapper, e),
      children: [a.length > 1 ? (0, i.jsx)(C.CarouselPrevious, {
        className: L.navPrev,
        onClick: this.gotoPrev
      }) : null, null !== (t = r.component) && void 0 !== t ? t : (0, i.jsx)(O, {
        item: r,
        directionHistory: s,
        className: o
      }, r.src), a.length > 1 ? (0, i.jsx)(C.CarouselNext, {
        className: L.navNext,
        onClick: this.gotoNext
      }) : null]
    })
  }
  constructor(t) {
    super(t), this.gotoNext = () => {
      let {
        currentIndex: t
      } = this.state;
      this.navigateTo(t + 1)
    }, this.gotoPrev = () => {
      let {
        currentIndex: t
      } = this.state;
      this.navigateTo(t - 1)
    }, this.gotoNextThrottled = u(this.gotoNext, 300), this.gotoPrevThrottled = u(this.gotoPrev, 300), this.state = {
      currentIndex: t.startWith,
      directionHistory: []
    }
  }
}).defaultProps = {
  startWith: 0
}, o = s