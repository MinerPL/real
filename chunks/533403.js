"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("424973"), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  u = n.n(l),
  o = n("77078"),
  s = n("766274"),
  a = n("368121"),
  d = n("519657"),
  c = n("486425");
class f extends r.PureComponent {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: i
    } = this.props, r = [], l = e.length === t ? e.length : t - 1, u = 0;
    for (; u < l && u < e.length;) {
      let t = u === e.length - 1;
      r.push(n(e[u] || null, t ? null : d.avatarMasked, "user-".concat(u), t)), u++
    }
    if (u < e.length) {
      let t = Math.min(e.length - u, 99);
      r.push(i("+".concat(t), d.moreUsers, "more-users", t))
    }
    return r
  }
  renderIcon() {
    return this.props.icon ? (0, i.jsx)("div", {
      className: d.iconContainer,
      children: (0, i.jsx)(a.default, {
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
    return (0, i.jsxs)("div", {
      className: u(e, d.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), this.defaultRenderUser = (e, t, n, r) => {
      let {
        onClick: l,
        size: a,
        guildId: f
      } = this.props, S = e instanceof s.default ? e : null != e ? e.user : null;
      return null == S ? (0, i.jsx)("div", {
        className: u(d.emptyUser, t)
      }, n) : (0, i.jsx)(o.Avatar, {
        tabIndex: 0,
        src: S.getAvatarURL(f, (0, o.getAvatarSize)(a)),
        size: a,
        "aria-label": S.username,
        className: u(t, c.cursorPointer, d.avatarSize),
        onClick: e => null != l ? l(e, S, this._ref) : null
      }, S.id)
    }
  }
}
f.defaultProps = {
  max: 10,
  renderMoreUsers: function(e, t, n) {
    return (0, i.jsx)("div", {
      className: t,
      children: e
    }, n)
  },
  size: o.AvatarSizes.SIZE_24
};
var S = f