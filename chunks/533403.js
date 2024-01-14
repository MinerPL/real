"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("424973"), n("222007");
var r = n("37983"),
  i = n("884691"),
  u = n("414456"),
  l = n.n(u),
  o = n("77078"),
  s = n("766274"),
  a = n("368121"),
  d = n("519657"),
  c = n("486425");
class f extends i.PureComponent {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: r
    } = this.props, i = [], u = e.length === t ? e.length : t - 1, l = 0;
    for (; l < u && l < e.length;) {
      let t = l === e.length - 1;
      i.push(n(e[l] || null, t ? null : d.avatarMasked, "user-".concat(l), t)), l++
    }
    if (l < e.length) {
      let t = Math.min(e.length - l, 99);
      i.push(r("+".concat(t), d.moreUsers, "more-users", t))
    }
    return i
  }
  renderIcon() {
    return this.props.icon ? (0, r.jsx)("div", {
      className: d.iconContainer,
      children: (0, r.jsx)(a.default, {
        width: 16,
        height: 16,
        foreground: d.foreground,
        className: d.icon
      })
    }) : null
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, r.jsxs)("div", {
      className: l(e, d.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), this.defaultRenderUser = (e, t, n, i) => {
      let {
        onClick: u,
        size: a,
        guildId: f
      } = this.props, h = e instanceof s.default ? e : null != e ? e.user : null;
      return null == h ? (0, r.jsx)("div", {
        className: l(d.emptyUser, t)
      }, n) : (0, r.jsx)(o.Avatar, {
        tabIndex: 0,
        src: h.getAvatarURL(f, (0, o.getAvatarSize)(a)),
        size: a,
        "aria-label": h.username,
        className: l(t, c.cursorPointer, d.avatarSize),
        onClick: e => null != u ? u(e, h, this._ref) : null
      }, h.id)
    }
  }
}
f.defaultProps = {
  max: 10,
  renderMoreUsers: function(e, t, n) {
    return (0, r.jsx)("div", {
      className: t,
      children: e
    }, n)
  },
  size: o.AvatarSizes.SIZE_24
};
var h = f