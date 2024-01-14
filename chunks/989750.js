"use strict";
i.r(e), i.d(e, {
  default: function() {
    return m
  }
});
var l = i("37983"),
  r = i("884691"),
  n = i("77078"),
  a = i("716241"),
  s = i("933629"),
  o = i("383161"),
  d = i("42203"),
  c = i("18494"),
  h = i("35006"),
  u = i("599110"),
  f = i("49111"),
  x = i("782340"),
  g = i("966955"),
  m = function(t) {
    let {
      guild: e,
      message: i,
      onClose: m
    } = t, j = d.default.getChannel(c.default.getChannelId(e.id));
    return (r.useEffect(() => {
      u.default.track(f.AnalyticEvents.OPEN_POPOUT, {
        type: "New Member Badge Popout",
        guild_id: e.id,
        channel_id: null == j ? void 0 : j.id
      })
    }, []), null == j) ? null : (0, l.jsx)(s.MessagePopoutContent, {
      children: (0, l.jsxs)("div", {
        className: g.popoutContainer,
        children: [(0, l.jsxs)("div", {
          className: g.mainContent,
          children: [(0, l.jsx)("div", {
            className: g.iconContainer,
            children: (0, l.jsx)(h.default, {
              width: 40,
              height: 40
            })
          }), (0, l.jsxs)("div", {
            children: [(0, l.jsx)(n.Heading, {
              variant: "heading-md/semibold",
              className: g.header,
              children: x.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
            }), (0, l.jsx)(n.Text, {
              variant: "text-sm/normal",
              children: x.default.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
            })]
          })]
        }), (0, l.jsx)(n.Button, {
          size: n.Button.Sizes.SMALL,
          color: n.Button.Colors.BRAND,
          className: g.ctaButton,
          innerClassName: g.ctaButtonContent,
          fullWidth: !0,
          onClick: () => {
            a.default.trackWithMetadata(f.AnalyticEvents.NEW_MEMBER_MENTION_CTA_CLICKED, {
              target_user_id: i.author.id
            }), m(), (0, o.mentionUser)(i.author, j.id)
          },
          children: x.default.Messages.MENTION_USER.format({
            username: i.author.username
          })
        })]
      })
    })
  }