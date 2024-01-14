"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("227231"),
  r = s("915639"),
  o = s("161778"),
  d = s("782340"),
  u = s("779928"),
  c = e => {
    let {
      quest: t
    } = e, s = (0, n.useStateFromStores)([r.default], () => r.default.locale), c = (0, n.useStateFromStores)([o.default], () => o.default.getState().theme), S = new Date(t.config.expiresAt).toLocaleDateString(s, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return (0, a.jsxs)("div", {
      className: u.questsCardHeader,
      children: [(0, a.jsx)("img", {
        src: (0, i.getHeroAssetUrl)(t.id),
        alt: "",
        className: u.questSplash
      }), (0, a.jsxs)("div", {
        className: u.headerContent,
        children: [(0, a.jsxs)("div", {
          className: u.iconLogotypeContainer,
          children: [(0, a.jsx)("img", {
            src: (0, i.getGameTileAssetUrl)(t.id),
            alt: "",
            className: u.questIcon
          }), (0, a.jsx)("img", {
            src: (0, i.getGameLogotypeAssetUrl)(t.id, c),
            alt: "",
            className: u.questLogotype
          })]
        }), (0, a.jsxs)("div", {
          className: u.questInfo,
          children: [(0, a.jsx)(l.Heading, {
            variant: "heading-xxl/bold",
            className: u.questTitle,
            children: t.config.messages.questName
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: u.questSubtitle,
            children: d.default.Messages.QUESTS_AVAILABLE_THROUGH.format({
              date: S
            })
          })]
        })]
      })]
    })
  }