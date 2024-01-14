"use strict";
t.r(s), t.d(s, {
  default: function() {
    return x
  }
});
var r, l, a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  c = t.n(i),
  d = t("77078"),
  o = t("200639"),
  u = t("97347"),
  h = t("587974"),
  f = t("989769");
(r = l || (l = {}))[r.OUTGOING = 0] = "OUTGOING", r[r.INCOMING = 1] = "INCOMING";
class v extends n.PureComponent {
  renderStatus() {
    let {
      muted: e,
      deafen: s
    } = this.props, t = s ? o.default : u.default;
    return e || s ? (0, a.jsx)(t, {
      className: f.status
    }, "status") : null
  }
  renderBorder() {
    let {
      speaking: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: c(f.border, {
        [f.speaking]: e
      })
    }, "border")
  }
  renderMask() {
    let {
      muted: e,
      speaking: s,
      deafen: t
    } = this.props;
    return e && s ? (0, a.jsxs)(a.Fragment, {
      children: [this.renderBorder(), this.renderStatus()]
    }) : e || t ? (0, a.jsx)(a.Fragment, {
      children: this.renderStatus()
    }) : (0, a.jsx)(a.Fragment, {
      children: this.renderBorder()
    })
  }
  renderVoiceCallAvatar() {
    let {
      src: e,
      disabled: s,
      ringing: t,
      ringingType: r,
      avatarClassName: l,
      muted: n,
      deafen: i,
      size: o,
      renderIcon: u
    } = this.props, v = (0, d.getAvatarSize)(o), x = (0, a.jsx)("img", {
      src: e,
      alt: " ",
      className: c(f.voiceAvatar, l, {
        [f.ringingOutgoing]: t && 0 === r
      })
    });
    if (s) return x;
    let C = h.MaskIDs.AVATAR_DEFAULT;
    return null != u ? C = o === d.AvatarSizes.SIZE_32 ? h.MaskIDs.AVATAR_CALL_ICON_32 : h.MaskIDs.AVATAR_CALL_ICON : (n || i) && (C = h.MaskIDs.AVATAR_VOICE_CALL_80), (0, a.jsxs)("div", {
      className: f.callAvatarMaskContainer,
      children: [(0, a.jsxs)(h.default, {
        className: f.callAvatarMask,
        width: v,
        height: v,
        mask: C,
        children: [null == u ? void 0 : u(), x]
      }), this.renderMask()]
    })
  }
  render() {
    let {
      size: e,
      onClick: s,
      style: t,
      onContextMenu: r,
      className: l,
      ringingType: n,
      ringing: i
    } = this.props, o = c(f.wrapper, {
      [f.clickable]: null != s,
      [f.ringingOutgoing]: i && 0 === n,
      [f.ringingIncoming]: i && 1 === n
    }, l), u = (0, d.getAvatarSize)(e), h = {
      height: u,
      width: u,
      ...t
    };
    return (0, a.jsx)("div", {
      style: h,
      onContextMenu: r,
      className: o,
      children: this.renderVoiceCallAvatar()
    })
  }
}
v.defaultProps = {
  size: d.AvatarSizes.SIZE_80,
  ringingType: 0,
  speaking: !1,
  soundsharing: !1,
  ringing: !1,
  muted: !1,
  deafen: !1,
  hasVideo: !1,
  mirror: !1,
  disabled: !1,
  paused: !1
}, v.RingingType = l;
var x = v