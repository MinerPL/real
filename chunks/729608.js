"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
});
var s = a("37983"),
  n = a("884691"),
  l = a("77078"),
  r = a("300322"),
  i = a("660074"),
  o = a("543289"),
  d = a("772280"),
  u = a("659500"),
  c = a("680986"),
  m = a("867965"),
  h = a("49111"),
  f = a("782340"),
  g = a("731808");

function x(e) {
  let {
    channelName: t,
    guildId: x,
    tagFilter: C,
    channel: T
  } = e, _ = (0, c.useCanManageChannel)(T), S = (0, r.useCanStartThread)(T), p = T.isMediaChannel(), E = n.useCallback(() => {
    (0, m.trackForumUpsellModalViewed)(), (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("135430").then(a.bind(a, "135430"));
      return t => (0, s.jsx)(e, {
        ...t,
        guildId: x
      })
    })
  }, [x]), N = C.size > 0, M = S || _, A = !N && _ && !p, v = n.useCallback(() => A ? E() : S ? void u.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_COMPOSER_TITLE) : (0, h.NOOP_NULL)(), [E, A, S]);
  return (0, s.jsxs)("div", {
    className: g.container,
    children: [(0, s.jsxs)("div", {
      className: g.iconContainer,
      children: [(0, s.jsx)("div", {
        className: g.icon,
        children: (0, s.jsx)(i.default, {
          width: 30,
          height: 30
        })
      }), (0, s.jsx)(o.default, {
        className: g.stars
      })]
    }), (0, s.jsx)(l.Heading, {
      className: g.header,
      variant: "heading-md/semibold",
      children: N ? f.default.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
        numTags: C.size
      }) : f.default.Messages.FORUM_EMPTY_STATE_TITLE
    }), (0, s.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N ? f.default.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
        numTags: C.size
      }) : f.default.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
        channelName: t
      })
    }), M && (0, s.jsxs)(l.Button, {
      look: l.Button.Looks.BLANK,
      size: l.Button.Sizes.MIN,
      color: l.Button.Colors.GREEN,
      onClick: v,
      className: g.cta,
      innerClassName: g.button,
      children: [A ? f.default.Messages.FORUM_EMPTY_STATE_CTA : f.default.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, s.jsx)(d.default, {
        width: 12
      })]
    })]
  })
}