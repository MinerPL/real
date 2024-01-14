"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("429224"),
  o = n("550762"),
  u = n("381546"),
  d = n("733160"),
  c = n("713573"),
  f = n("850642"),
  m = n("782340"),
  E = n("35847"),
  _ = e => {
    let {
      channelId: t,
      messageId: n
    } = e, _ = (0, l.useStateFromStores)([f.default], () => f.default.shouldShowBump(n), [n]), h = s.useCallback(() => {
      r.default.dismissPublishBump(n), (0, o.default)(t, n)
    }, [t, n]), p = s.useCallback(() => {
      r.default.dismissPublishBump(n)
    }, [n]), I = s.useCallback(() => {
      r.default.permanentlyHidePublishBump(t)
    }, [t]);
    return _ ? (0, a.jsxs)("div", {
      className: E.container,
      children: [(0, a.jsxs)("div", {
        className: E.bumpBox,
        children: [(0, a.jsx)(d.default, {
          className: E.icon
        }), (0, a.jsx)(c.default, {
          className: E.tagline,
          size: c.default.Sizes.SIZE_14,
          children: m.default.Messages.NEWS_CHANNEL_PUBLISH_BUMP
        }), (0, a.jsx)(i.Button, {
          color: i.Button.Colors.LINK,
          look: i.Button.Looks.LINK,
          size: i.Button.Sizes.MIN,
          className: E.publish,
          onClick: h,
          children: m.default.Messages.NEWS_CHANNEL_PUBLISH
        }), (0, a.jsx)(i.Clickable, {
          onClick: p,
          children: (0, a.jsx)(u.default, {
            className: E.closeIcon,
            width: 16,
            height: 16
          })
        })]
      }), (0, a.jsx)(i.Text, {
        color: "text-muted",
        className: E.hidePermanently,
        variant: "text-sm/normal",
        children: (0, a.jsx)(i.Clickable, {
          onClick: I,
          children: m.default.Messages.NEWS_CHANNEL_PUBLISH_BUMP_HIDE_PERMANENTLY
        })
      })]
    }) : null
  }