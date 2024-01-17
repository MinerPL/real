"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("139321"),
  r = n("597517"),
  u = n("782340"),
  o = n("8341"),
  d = n("533662");
let c = () => (0, l.jsxs)(l.Fragment, {
  children: [(0, l.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: o.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
  }), (0, l.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: o.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
  }), (0, l.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: o.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
  }), (0, l.jsx)(s.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: o.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
  })]
});

function E(e) {
  let {
    onClick: t
  } = e, n = (0, a.useStateFromStores)([i.HotspotStore], () => !i.HotspotStore.hasHotspot(i.HotspotLocations.STAGE_CHANNEL_UPSELL));
  return n ? null : (0, l.jsxs)("div", {
    className: o.container,
    children: [(0, l.jsxs)("div", {
      className: o.content,
      children: [(0, l.jsxs)("div", {
        className: o.textContainer,
        children: [(0, l.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
        }), (0, l.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: o.descriptionText,
          children: u.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
        }), (0, l.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
            suggestionsHook: c
          })
        })]
      }), (0, l.jsx)("div", {
        className: o.image,
        children: (0, l.jsx)("img", {
          src: d,
          alt: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
        })
      })]
    }), (0, l.jsxs)("div", {
      className: o.footer,
      children: [(0, l.jsx)(s.Button, {
        onClick: t,
        color: s.Button.Colors.PRIMARY,
        size: s.Button.Sizes.SMALL,
        className: o.button,
        children: u.default.Messages.CREATE_STAGE_CHANNEL
      }), (0, l.jsx)(s.Button, {
        onClick: () => {
          r.hideHotspot(i.HotspotLocations.STAGE_CHANNEL_UPSELL)
        },
        color: s.Button.Colors.TRANSPARENT,
        size: s.Button.Sizes.SMALL,
        look: s.ButtonLooks.LINK,
        children: u.default.Messages.DONT_SHOW_AGAIN
      })]
    })]
  })
}