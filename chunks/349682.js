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
  f = n("254514"),
  E = n("152985"),
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
      className: f.scroller,
      children: (0, a.jsxs)("div", {
        className: f.viewWrapper,
        children: [(0, a.jsxs)("div", {
          className: f.headerContainer,
          children: [(0, a.jsx)("img", {
            alt: "",
            className: f.headerImage,
            src: E
          }), (0, a.jsxs)("div", {
            className: f.headerContent,
            children: [(0, a.jsx)(i.Heading, {
              className: f.headerText,
              variant: "heading-xl/semibold",
              children: c.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
            }), (0, a.jsx)(i.Text, {
              className: f.headerDescription,
              variant: "text-md/normal",
              color: "none",
              children: c.default.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
            })]
          })]
        }), (0, a.jsx)(u.default, {
          guilds: n
        }), (0, a.jsx)("div", {
          className: f.divider
        }), (0, a.jsx)(i.Text, {
          className: f.footerDescription,
          variant: "text-md/medium",
          color: "header-secondary",
          children: c.default.Messages.HUB_DISCOVERY_FOOTER_DESCRIPTION
        })]
      })
    })
  }