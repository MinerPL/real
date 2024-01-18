"use strict";
n.r(t), n.d(t, {
  TextAlignments: function() {
    return a
  },
  ArrowAlignments: function() {
    return l
  },
  default: function() {
    return i
  }
}), n("222007");
var s, a, l, i, r, o, u = n("37983"),
  d = n("884691"),
  c = n("414456"),
  f = n.n(c),
  h = n("819855"),
  C = n("77078"),
  p = n("599110"),
  m = n("439932"),
  E = n("145131"),
  g = n("49111"),
  S = n("782340"),
  A = n("816456");
(r = a || (a = {})).CENTER = "center", r.LEFT = "left", (o = l || (l = {})).TOP = "top", o.MIDDLE = "middle";
class _ extends d.PureComponent {
  componentDidMount() {
    let {
      uniqueId: e
    } = this.props;
    p.default.track(g.AnalyticEvents.SHOW_TUTORIAL, {
      tutorial: e
    })
  }
  componentWillUnmount() {
    p.default.track(g.AnalyticEvents.CLOSE_TUTORIAL, {
      tutorial: this.props.uniqueId,
      acknowledged: this.state.confirmed
    })
  }
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      isLongText: n,
      title: s,
      body: a,
      className: l,
      forceTheme: i,
      onClickSkipAll: r
    } = this.props, o = "left" === t || n, d = "center" === t || !o;
    return (0, u.jsxs)(C.Dialog, {
      className: f(A.popoutRoot, l),
      children: [null != e && (0, u.jsx)(E.default, {
        className: A.mediaContainer,
        justify: o ? E.default.Justify.START : E.default.Justify.CENTER,
        children: e()
      }), (0, u.jsx)(C.H, {
        className: f({
          [A.titleCenter]: d,
          [A.titleLeft]: o
        }),
        children: s
      }), (0, u.jsx)("string" == typeof a ? "p" : "div", {
        className: f({
          [A.bodyCenter]: d,
          [A.bodyLeft]: o
        }),
        children: a
      }), (0, u.jsxs)(E.default, {
        className: A.buttonContainer,
        justify: o ? E.default.Justify.BETWEEN : E.default.Justify.CENTER,
        children: [(0, u.jsx)(C.Button, {
          size: C.ButtonSizes.SMALL,
          onClick: this.handleDismiss,
          children: S.default.Messages.TUTORIAL_CLOSE
        }), (0, u.jsx)(C.Button, {
          size: C.ButtonSizes.SMALL,
          look: C.Button.Looks.BLANK,
          onClick: r,
          color: (0, h.isThemeLight)(i) ? C.Button.Colors.PRIMARY : C.Button.Colors.WHITE,
          className: o ? A.buttonSkipLeftAlign : A.buttonSkipCenterAlign,
          children: S.default.Messages.SKIP_ALL_TIPS
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      confirmed: !1
    }, this.handleDismiss = () => {
      let {
        onClickComplete: e
      } = this.props;
      this.setState({
        confirmed: !0
      }, () => null == e ? void 0 : e())
    }
  }
}(s = class extends d.PureComponent {
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      onComplete: n,
      onSkipAll: s,
      isLongText: a,
      title: l,
      body: i,
      children: r,
      spacing: o,
      forceTheme: d,
      ...c
    } = this.props, f = "top" === c.position || "bottom" === c.position ? "center" : "top";
    return (0, u.jsx)(C.Popout, {
      ...c,
      align: f,
      spacing: null != o ? o : 0,
      renderPopout: this.renderPopoutContent,
      nudgeAlignIntoViewport: !0,
      children: r
    })
  }
  constructor(...e) {
    super(...e), this.onClickComplete = e => {
      e(), this.props.onComplete()
    }, this.onClickSkipAll = e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), p.default.track(g.AnalyticEvents.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }, this.renderPopoutContent = e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: s,
        isLongText: a,
        arrowAlignment: l,
        renderMedia: i
      } = this.props, r = null != i;
      return (0, u.jsx)(_, {
        ...this.props,
        className: f({
          [A.bottom]: "bottom" === n,
          [A.contentNarrowNoMedia]: !a && !r,
          [A.contentNarrowWithMedia]: !a && r,
          [A.contentWideNoMedia]: a && !r,
          [A.contentWideWithMedia]: a && r,
          [A.right]: "right" === n,
          [A.top]: "top" === n,
          [A.left]: "left" === n,
          [A.arrowAlignmentTop]: "top" === l,
          [A.arrowAlignmentMiddle]: "middle" === l,
          "force-theme": null != s
        }, (0, m.getThemeClass)(s)),
        onClickComplete: () => this.onClickComplete(t),
        onClickSkipAll: () => this.onClickSkipAll(t)
      })
    }
  }
}).TextAlignments = a, s.defaultProps = {
  textAlign: "left"
}, i = s