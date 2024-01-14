"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("69927"),
  r = n("794818"),
  o = n("244922"),
  u = n("143217"),
  d = n("447621"),
  c = n("782340"),
  E = n("254514"),
  f = n("152985"),
  _ = e => {
    let {
      loadId: t
    } = e, n = (0, o.default)();
    return s.useEffect(() => {
      (0, r.trackDiscoveryViewed)({
        loadId: t,
        gamesYouPlayGuilds: [],
        allGuilds: [],
        categoryId: d.DISCORD_HUB_ID
      })
    }, [t]), (0, l.usePageTitle)({
      subsection: c.default.Messages.HUB_SCHOOL_HUBS,
      location: c.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
    }), (0, a.jsx)(i.Scroller, {
      className: E.scroller,
      children: (0, a.jsxs)("div", {
        className: E.viewWrapper,
        children: [(0, a.jsxs)("div", {
          className: E.headerContainer,
          children: [(0, a.jsx)("img", {
            alt: "",
            className: E.headerImage,
            src: f
          }), (0, a.jsxs)("div", {
            className: E.headerContent,
            children: [(0, a.jsx)(i.Heading, {
              className: E.headerText,
              variant: "heading-xl/semibold",
              children: c.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
            }), (0, a.jsx)(i.Text, {
              className: E.headerDescription,
              variant: "text-md/normal",
              color: "none",
              children: c.default.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
            })]
          })]
        }), (0, a.jsx)(u.default, {
          guilds: n
        }), (0, a.jsx)("div", {
          className: E.divider
        }), (0, a.jsx)(i.Text, {
          className: E.footerDescription,
          variant: "text-md/medium",
          color: "header-secondary",
          children: c.default.Messages.HUB_DISCOVERY_FOOTER_DESCRIPTION
        })]
      })
    })
  }