"use strict";
s.r(t), s.d(t, {
  normalizeIndex: function() {
    return c
  },
  default: function() {
    return m
  }
}), s("222007"), s("70102");
var n = s("37983"),
  a = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("458960"),
  o = s("737960"),
  d = s("213844");
let u = {
    tension: 7,
    friction: 5,
    overshootClamping: !0
  },
  h = {
    CENTER: "center",
    RIGHT: "right"
  };

function c(e, t) {
  return (e % t + t) % t
}
class p extends a.Component {
  componentDidMount() {
    this.animatedIndex.setValue(this.props.currentIndex)
  }
  componentDidUpdate(e) {
    let {
      align: t,
      animate: s,
      currentIndex: n,
      items: a,
      width: i
    } = this.props, r = c(n, a.length), o = c(e.currentIndex, a.length);
    (r !== o || a.length !== e.items.length) && this.updateAnimatedIndex(r, o), i !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : s && (t !== e.align || r !== o) && l.default.spring(this.animatedAlignmentOffset, {
      ...u,
      toValue: this.getAlignmentOffset(t)
    }).start()
  }
  getAlignmentOffset(e) {
    let {
      width: t,
      itemSize: s,
      currentIndex: n,
      gutter: a,
      items: i
    } = this.props, r = c(n, i.length), l = a * r * 2;
    return e === h.CENTER ? (t - s.width) / 2 + l : e === h.RIGHT ? t - s.width - a + l : a + l
  }
  getCarouselTranslate() {
    let {
      itemSize: e,
      edgeItems: t
    } = this.props;
    return t * (e.width + e.margin)
  }
  animateToIndex(e, t) {
    let {
      animatedIndex: s
    } = this, {
      items: n,
      edgeItems: a
    } = this.props;
    a > 0 && (0 === e && t === n.length - 1 ? s.setValue(-1) : 0 === t && e === n.length - 1 && n.length > 2 && s.setValue(n.length)), l.default.spring(s, {
      ...u,
      toValue: e
    }).start()
  }
  updateAnimatedIndex(e, t) {
    let {
      animatedIndex: s,
      animatedOpacity: n
    } = this, {
      animate: a
    } = this.props;
    a ? this.animateToIndex(e, t) : l.default.timing(n, {
      fromValue: 1,
      toValue: 0,
      duration: 100
    }).start(() => {
      s.setValue(e), l.default.timing(n, {
        fromValue: 0,
        toValue: 1,
        duration: 100
      }).start()
    })
  }
  renderSingleItem() {
    let {
      renderItem: e,
      items: t,
      itemSize: s,
      className: a
    } = this.props;
    return (0, n.jsx)("div", {
      className: r(d.singleItemWrapper, d.viewport, a),
      children: (0, n.jsx)("div", {
        className: d.singleItem,
        style: {
          width: s.width,
          height: s.height
        },
        children: e(t[0], 0)
      })
    })
  }
  renderCarouselItems() {
    let e;
    let {
      animatedIndex: t,
      animatedAlignmentOffset: s,
      animatedOpacity: a
    } = this, {
      renderItem: i,
      items: r,
      itemSize: o,
      edgeItems: u,
      gutter: h
    } = this.props, {
      margin: c,
      width: p
    } = o, m = this.getCarouselTranslate(), g = this.getItemStyle();
    e = u > 0 ? [...r.slice(-u), ...r, ...r.slice(0, u)] : r;
    let C = e.map((e, t) => (0, n.jsx)("div", {
      style: g,
      className: d.item,
      children: i(e, t - u, this.interpolateValueForItem(t - u))
    }, t));
    return (0, n.jsx)(l.default.div, {
      className: d.carousel,
      style: {
        opacity: a,
        left: l.default.add(t.interpolate({
          inputRange: [0, 1],
          outputRange: [-m, -c - p - m - h * (r.length - 1)]
        }), s)
      },
      children: C
    })
  }
  render() {
    let {
      items: e,
      className: t,
      hideOverflow: s
    } = this.props;
    if (e.length <= 0) throw Error("Carousel has no items");
    return 1 === e.length ? this.renderSingleItem() : (0, n.jsx)("div", {
      className: r({
        [d.viewport]: s
      }, t),
      children: this.renderCarouselItems()
    })
  }
  constructor(...e) {
    super(...e), this.animatedIndex = new l.default.Value(this.props.currentIndex), this.animatedAlignmentOffset = new l.default.Value(this.getAlignmentOffset(this.props.align)), this.animatedOpacity = new l.default.Value(1), this.getItemStyle = () => {
      let {
        itemSize: {
          width: e,
          margin: t,
          height: s
        }
      } = this.props;
      return {
        flexBasis: e,
        marginRight: t,
        height: s,
        width: e,
        maxWidth: e
      }
    }, this.interpolateValueForItem = e => this.animatedIndex.interpolate({
      inputRange: [e - 1, e, e + 1],
      outputRange: [0, 1, 0],
      extrapolate: "clamp"
    })
  }
}
p.defaultProps = {
  animate: !0,
  edgeItems: 2,
  align: h.CENTER,
  gutter: 0,
  hideOverflow: !0
};
var m = (0, o.default)(p)