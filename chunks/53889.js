"use strict";
n.r(t), n.d(t, {
  TutorialIndicator: function() {
    return _
  },
  default: function() {
    return T
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("817736"),
  d = n("118810"),
  c = n("446674"),
  f = n("77078"),
  h = n("715315"),
  C = n("778588"),
  p = n("471671"),
  m = n("808072"),
  g = n("807061"),
  E = n("826431"),
  S = n("612246"),
  A = n("933934");
class _ extends a.PureComponent {
  componentDidMount() {
    this.updateCache()
  }
  componentDidUpdate(e) {
    let {
      tutorialId: t,
      origin: {
        x: n,
        y: s
      },
      targetWidth: a,
      targetHeight: l,
      position: i,
      offset: r
    } = e;
    (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== s || this.props.targetWidth !== a || this.props.targetHeight !== l || this.props.position !== i || this.props.offset.x !== r.x || this.props.offset.y !== r.y) && this.updateCache()
  }
  updateCache() {
    var e, t;
    let n = (0, u.findDOMNode)(this);
    if (null == n || !(0, d.isElement)(n, HTMLElement)) return;
    let {
      offsetWidth: s,
      offsetHeight: a
    } = n, l = {
      offsetX: (this.props.targetWidth - s) / 2,
      offsetY: (this.props.targetHeight - a) / 2
    }, i = this.props.position;
    switch (i) {
      case "left":
        l.offsetX = -s;
        break;
      case "right":
        l.offsetX = this.props.targetWidth;
        break;
      case "bottom":
        l.offsetY = this.props.targetHeight;
        break;
      default:
        l.offsetY = -a
    }
    l.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0, l.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0, this.setState(l)
  }
  handleSkipTips() {
    h.default.suppressAll()
  }
  getTutorialPopoutText() {
    let {
      tutorialId: e
    } = this.props;
    return (0, E.getTutorialPopoutText)(e)
  }
  render() {
    let {
      tutorialId: e,
      autoInvert: t,
      focused: n,
      origin: a
    } = this.props, l = (0, g.getTutorialPopoutAttributes)(e);
    if (null == l) return null;
    let {
      media: r,
      textAlign: o,
      isLongText: u,
      highPriority: d,
      spacing: c,
      arrowAlignment: h = m.ArrowAlignments.TOP,
      popoutPosition: C
    } = l, {
      offsetX: p,
      offsetY: E
    } = this.state, S = {
      left: null != p ? a.x + p : void 0,
      top: null != E ? a.y + E : void 0
    }, _ = e => {
      let t = n && !e;
      return !0 !== d ? null : (0, s.jsxs)("div", {
        children: [(0, s.jsx)("div", {
          className: i(A.top, {
            [A.animating]: t,
            [A.notAnimating]: !t
          })
        }), (0, s.jsx)("div", {
          className: i(A.bottom, {
            [A.animating]: t,
            [A.notAnimating]: !t
          })
        })]
      })
    }, T = e => {
      let t = n && !e;
      return {
        [A.animating]: t,
        [A.notAnimating]: !t,
        [A.highPriority]: d
      }
    }, M = this.getTutorialPopoutText();
    return (0, s.jsx)(m.default, {
      position: C,
      renderMedia: r,
      textAlign: o,
      spacing: c,
      isLongText: u,
      uniqueId: e,
      autoInvert: t,
      arrowAlignment: h,
      onSkipAll: this.handleSkipTips,
      onComplete: this.handleDismiss,
      ...M,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, s.jsx)(f.Clickable, {
          ...e,
          className: A.indicator,
          style: S,
          children: (0, s.jsxs)("div", {
            className: i(A.animationContainer, T(n)),
            children: [_(n), (0, s.jsx)("div", {
              className: i(A.innerCircle, T(n))
            }), (0, s.jsx)("div", {
              className: i(A.outerCircle, T(n))
            })]
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      offsetX: null,
      offsetY: null
    }, this.handleDismiss = () => {
      h.default.dismiss(this.props.tutorialId)
    }
  }
}
var T = function() {
  let {
    indicators: e,
    tutorialData: t,
    windowFocused: n,
    shouldShowAny: a
  } = (0, c.useStateFromStoresObject)([S.default, p.default, C.default], () => ({
    indicators: S.default.getIndicators(),
    tutorialData: S.default.getData(),
    shouldShowAny: S.default.shouldShowAnyIndicators() && !C.default.hasLayers(),
    windowFocused: p.default.isFocused()
  }));
  return a ? (0, s.jsx)(s.Fragment, {
    children: Object.entries(e).map(e => {
      let [a, l] = e, i = t[a];
      return o(null != i, "Missing tutorial definition for ".concat(a)), (0, s.jsx)(_, {
        tutorialId: a,
        tutorialDefinition: i,
        focused: n,
        ...l
      }, a)
    })
  }) : null
}