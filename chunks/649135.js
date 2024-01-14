"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var i = l("37983");
l("884691");
var a = l("77078"),
  n = l("545158"),
  s = l("599110"),
  r = l("412707"),
  c = l("49111"),
  o = l("782340"),
  d = l("870179");

function u(e) {
  let {
    guildId: t
  } = e;
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)("img", {
      className: d.image,
      src: l("785417"),
      alt: ""
    }), (0, i.jsxs)("div", {
      className: d.content,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-md/extrabold",
        children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
      })]
    }), (0, i.jsx)(a.Button, {
      size: a.Button.Sizes.SMALL,
      onClick: function() {
        s.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "submit_music_app",
          current_page: r.ApplicationDirectoryViews.SEARCH,
          guild_id: t
        }), (0, n.default)("https://dis.gd/music-search-page-inclusion")
      },
      color: a.Button.Colors.TRANSPARENT,
      className: d.button,
      children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
    })]
  })
}