"use strict";
t.r(s), t.d(s, {
  default: function() {
    return v
  }
});
var r, a, l = t("37983"),
  n = t("884691"),
  i = t("414456"),
  d = t.n(i),
  c = t("77078"),
  o = t("200639"),
  u = t("97347"),
  h = t("587974"),
  f = t("989769");
(r = a || (a = {}))[r.OUTGOING = 0] = "OUTGOING", r[r.INCOMING = 1] = "INCOMING";
class C extends n.PureComponent {
  renderStatus() {
    let {
      muted: e,
      deafen: s
    } = this.props, t = s ? o.default : u.default;
    return e || s ? (0, l.jsx)(t, {
      className: f.status
    }, "status") : null
  }
  renderBorder() {
    let {
      speaking: e
    } = this.props;
    return (0, l.jsx)("div", {
      className: d(f.border, {
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
    return e && s ? (0, l.jsxs)(l.Fragment, {
      children: [this.renderBorder(), this.renderStatus()]
    }) : e || t ? (0, l.jsx)(l.Fragment, {
      children: this.renderStatus()
    }) : (0, l.jsx)(l.Fragment, {
      children: this.renderBorder()
    })
  }
  renderVoiceCallAvatar() {
    let {
      src: e,
      disabled: s,
      ringing: t,
      ringingType: r,
      avatarClassName: a,
      muted: n,
      deafen: i,
      size: o,
      renderIcon: u
    } = this.props, C = (0, c.getAvatarSize)(o), v = (0, l.jsx)("img", {
      src: e,
      alt: " ",
      className: d(f.voiceAvatar, a, {
        [f.ringingOutgoing]: t && 0 === r
      })
    });
    if (s) return v;
    let x = h.MaskIDs.AVATAR_DEFAULT;
    return null != u ? x = o === c.AvatarSizes.SIZE_32 ? h.MaskIDs.AVATAR_CALL_ICON_32 : h.MaskIDs.AVATAR_CALL_ICON : (n || i) && (x = h.MaskIDs.AVATAR_VOICE_CALL_80), (0, l.jsxs)("div", {
      className: f.callAvatarMaskContainer,
      children: [(0, l.jsxs)(h.default, {
        className: f.callAvatarMask,
        width: C,
        height: C,
        mask: x,
        children: [null == u ? void 0 : u(), v]
      }), this.renderMask()]
    })
  }
  render() {
    let {
      size: e,
      onClick: s,
      style: t,
      onContextMenu: r,
      className: a,
      ringingType: n,
      ringing: i
    } = this.props, o = d(f.wrapper, {
      [f.clickable]: null != s,
      [f.ringingOutgoing]: i && 0 === n,
      [f.ringingIncoming]: i && 1 === n
    }, a), u = (0, c.getAvatarSize)(e), h = {
      height: u,
      width: u,
      ...t
    };
    return (0, l.jsx)("div", {
      style: h,
      onContextMenu: r,
      className: o,
      children: this.renderVoiceCallAvatar()
    })
  }
}
C.defaultProps = {
  size: c.AvatarSizes.SIZE_80,
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
}, C.RingingType = a;
var v = C