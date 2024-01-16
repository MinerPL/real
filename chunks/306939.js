"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("77078"),
  r = l("139321"),
  i = l("597517"),
  u = l("782340"),
  d = l("8341"),
  o = l("533662");
let c = () => (0, n.jsxs)(n.Fragment, {
  children: [(0, n.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: d.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
  }), (0, n.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: d.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
  }), (0, n.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: d.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
  }), (0, n.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: d.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
  })]
});

function E(e) {
  let {
    onClick: t
  } = e, l = (0, a.useStateFromStores)([r.HotspotStore], () => !r.HotspotStore.hasHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL));
  return l ? null : (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsxs)("div", {
      className: d.content,
      children: [(0, n.jsxs)("div", {
        className: d.textContainer,
        children: [(0, n.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
        }), (0, n.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: d.descriptionText,
          children: u.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
        }), (0, n.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
            suggestionsHook: c
          })
        })]
      }), (0, n.jsx)("div", {
        className: d.image,
        children: (0, n.jsx)("img", {
          src: o,
          alt: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
        })
      })]
    }), (0, n.jsxs)("div", {
      className: d.footer,
      children: [(0, n.jsx)(s.Button, {
        onClick: t,
        color: s.Button.Colors.PRIMARY,
        size: s.Button.Sizes.SMALL,
        className: d.button,
        children: u.default.Messages.CREATE_STAGE_CHANNEL
      }), (0, n.jsx)(s.Button, {
        onClick: () => {
          i.hideHotspot(r.HotspotLocations.STAGE_CHANNEL_UPSELL)
        },
        color: s.Button.Colors.TRANSPARENT,
        size: s.Button.Sizes.SMALL,
        look: s.ButtonLooks.LINK,
        children: u.default.Messages.DONT_SHOW_AGAIN
      })]
    })]
  })
}