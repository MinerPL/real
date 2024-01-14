"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("222007");
var a, n, r = l("37983"),
  i = l("884691"),
  u = l("414456"),
  s = l.n(u),
  o = l("77078"),
  d = l("145131"),
  c = l("618556");
(n = a || (a = {})).SINGLE_AVATAR = "1", n.MULTIPLE_AVATAR = "2";
let f = {
  [o.AvatarSizes.SIZE_32]: c.avatarSmall,
  [o.AvatarSizes.SIZE_40]: c.avatarLarge
};
class m extends i.Component {
  render() {
    let {
      type: e,
      avatarSize: t,
      className: l
    } = this.props;
    return "2" === e ? (0, r.jsxs)("div", {
      className: s(c.multiplePlaceholder, l),
      children: [(0, r.jsxs)(d.default, {
        children: [(0, r.jsx)("div", {
          className: s(c.placeholderAvatar, f[t], c.avatarMasked)
        }), (0, r.jsx)("div", {
          className: s(c.placeholderAvatar, f[t], c.avatarMasked)
        }), (0, r.jsx)("div", {
          className: s(c.placeholderAvatar, f[t])
        })]
      }), (0, r.jsx)(d.default, {
        grow: 1,
        className: c.mulitplePlaceholderUsername,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    }) : (0, r.jsxs)(d.default, {
      className: s(c.placeholder, l),
      children: [(0, r.jsx)("div", {
        className: s(c.placeholderAvatar, f[t])
      }), (0, r.jsx)(d.default, {
        grow: 1,
        className: c.placeholderUsername,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    })
  }
  constructor(...e) {
    super(...e), this.placeholderMaxWidth = "".concat(Math.floor(40 * Math.random()) + 40, "%")
  }
}
m.defaultProps = {
  type: "1"
}, m.Types = a;
var h = m