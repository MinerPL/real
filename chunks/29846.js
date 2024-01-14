"use strict";
t.r(s), t.d(s, {
  BlockedUsersNotice: function() {
    return g
  },
  BlockedUser: function() {
    return p
  }
});
var r = t("37983");
t("884691");
var l = t("446674"),
  a = t("669491"),
  n = t("77078"),
  i = t("272030"),
  c = t("328275"),
  d = t("849467"),
  o = t("258078"),
  u = t("823050"),
  h = t("158998"),
  f = t("325861"),
  v = t("151642"),
  x = t("782340"),
  C = t("960236");
let g = e => {
    let {
      channelId: s
    } = e, t = (0, v.useStageBlockedUsersCount)(s);
    return 0 === t ? null : (0, r.jsxs)("div", {
      className: C.blockedNotice,
      children: [(0, r.jsx)(c.default, {
        className: C.blockedIcon,
        color: a.default.unsafe_rawColors.RED_400.css
      }), (0, r.jsx)(n.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: x.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
          number: t
        })
      }), (0, r.jsx)(n.Clickable, {
        className: C.blockedButton,
        onClick: e => {
          (0, i.openContextMenu)(e, e => (0, r.jsx)(m, {
            ...e,
            channelId: s
          }), {
            position: "left",
            align: "bottom"
          })
        },
        children: x.default.Messages.VIEW_ALL
      })]
    })
  },
  p = e => {
    let {
      user: s,
      showStatus: t,
      speaker: a,
      channelId: i
    } = e, c = (0, l.useStateFromStores)([f.default], () => f.default.isModerator(s.id, i)), v = null;
    return t && (v = a ? x.default.Messages.STAGE_SPEAKER : c ? x.default.Messages.STAGE_MODERATOR_TOOLTIP : x.default.Messages.STAGE_AUDIENCE), (0, r.jsxs)("div", {
      className: C.user,
      children: [(0, r.jsx)(u.default, {
        src: s.getAvatarURL(null, 32),
        size: n.AvatarSizes.SIZE_32,
        muted: !1,
        deafen: !1,
        speaking: !1,
        ringing: !1,
        renderIcon: a ? () => (0, r.jsx)(d.default, {
          className: C.icon
        }) : null
      }, s.id), (0, r.jsxs)("div", {
        className: C.userInfo,
        children: [(0, r.jsxs)("div", {
          className: C.username,
          children: [(0, r.jsx)(o.default, {
            size: t ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
            children: h.default.getName(s)
          }), (0, r.jsx)(o.default, {
            size: t ? o.default.Sizes.SIZE_16 : o.default.Sizes.SIZE_14,
            color: o.default.Colors.HEADER_SECONDARY,
            children: "#".concat(s.discriminator)
          })]
        }), (0, r.jsxs)("div", {
          className: C.username,
          children: [(0, r.jsx)(n.Text, {
            variant: "text-xs/normal",
            color: "text-danger",
            children: x.default.Messages.BLOCKED
          }), (0, r.jsxs)(n.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: [" ", "| ", v]
          })]
        })]
      })]
    })
  },
  m = e => {
    let {
      channelId: s
    } = e, t = (0, v.useStageBlockedUsers)(s);
    return (0, r.jsx)(n.Scroller, {
      className: C.container,
      children: t.map(e => {
        let {
          user: t
        } = e;
        return (0, r.jsx)(p, {
          user: t,
          channelId: s
        }, t.id)
      })
    })
  }