"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983"),
  a = n("884691"),
  r = n("414456"),
  s = n.n(r),
  i = n("90915"),
  u = n("446674"),
  o = n("669491"),
  c = n("77078"),
  d = n("80300"),
  f = n("471671"),
  E = n("103603"),
  h = n("474293"),
  g = n("580357"),
  _ = n("491088");
let S = {
    SMOL: "Smol",
    MINI: "Mini",
    SMALLER: "Smaller",
    SMALL: "Small",
    MEDIUM: "Medium",
    LARGE: "Large",
    LARGER: "Larger",
    XLARGE: "XLarge"
  },
  v = {
    [S.SMOL]: 16,
    [S.MINI]: 20,
    [S.SMALLER]: 24,
    [S.SMALL]: 30,
    [S.MEDIUM]: 40,
    [S.LARGE]: 50,
    [S.LARGER]: 64,
    [S.XLARGE]: 100
  },
  R = {
    [S.SMOL]: [10, 10, 8, 6, 6, 4],
    [S.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [S.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [S.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [S.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [S.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [S.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [S.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class m extends a.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != e.icon || null != t ? null : (0, l.jsx)("div", {
      className: _.acronym,
      children: e.acronym
    })
  }
  renderBadge() {
    let {
      showBadge: e,
      guild: t,
      badgeStrokeColor: n
    } = this.props;
    return e && null != t.hasFeature ? (0, l.jsx)(g.default, {
      className: _.guildIconBadge,
      guild: t,
      badgeStrokeColor: n
    }) : null
  }
  renderIcon() {
    var e, t;
    let {
      guild: n,
      className: a,
      showBadge: r,
      active: i,
      size: u,
      style: o = {},
      textScale: d,
      showTooltip: f,
      tooltipPosition: E,
      onClick: g,
      to: S,
      badgeStrokeColor: v,
      animate: m,
      tabIndex: C,
      iconSrc: N,
      "aria-hidden": T,
      ...p
    } = this.props, I = R[u], x = null != g ? c.Clickable : "div";
    return (0, l.jsxs)(x, {
      className: s(_.icon, a, (0, h.getClass)(_, "iconSize", u), {
        [null !== (e = (0, h.getClass)(_, "iconActive", u)) && void 0 !== e ? e : ""]: i,
        [_.iconInactive]: !i,
        [_.noIcon]: null == n.icon
      }),
      "aria-hidden": T,
      style: null == n.icon ? {
        fontSize: (null !== (t = I[n.acronym.length]) && void 0 !== t ? t : I[I.length - 1]) * d,
        ...o
      } : o,
      onClick: null != S || null == g ? void 0 : g,
      tabIndex: C,
      ...p,
      children: [this.renderAcronym(), this.renderBadge()]
    })
  }
  renderTooltip() {
    let {
      guild: e,
      showTooltip: t,
      tooltipPosition: n
    } = this.props;
    return t ? (0, l.jsx)(c.Tooltip, {
      text: e.name,
      position: n,
      "aria-label": !1,
      children: e => a.cloneElement(a.Children.only(this.renderIcon()), {
        ...e
      })
    }) : this.renderIcon()
  }
  render() {
    let {
      to: e,
      guild: t,
      source: n,
      tabIndex: a,
      "aria-hidden": r
    } = this.props;
    return null != e ? (0, l.jsx)(i.Link, {
      "aria-hidden": r,
      to: {
        pathname: e,
        state: null != n ? {
          analyticsSource: n
        } : null
      },
      "aria-label": t.toString(),
      tabIndex: a,
      children: this.renderTooltip()
    }) : this.renderTooltip()
  }
}
let C = u.default.connectStores([f.default], e => {
  let {
    guild: t,
    animate: n,
    iconSrc: l,
    style: a,
    size: r
  } = e;
  return {
    style: {
      ...a,
      backgroundImage: (0, E.makeCssUrlString)(null != l ? l : t.getIconURL(v[r], n && f.default.isFocused()))
    }
  }
})((0, d.backgroundImagePreloader)(e => (0, l.jsx)(m, {
  ...e
})));
class N extends a.PureComponent {
  render() {
    return (0, l.jsx)(C, {
      ...this.props
    })
  }
}
N.Sizes = S, N.defaultProps = {
  size: S.LARGE,
  textScale: 1,
  showBadge: !1,
  showTooltip: !1,
  active: !1,
  tooltipPosition: "top",
  badgeStrokeColor: o.default.unsafe_rawColors.WHITE_500.css,
  animate: !1
};
var T = N