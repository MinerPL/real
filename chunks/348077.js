"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var i = s("37983"),
  l = s("884691"),
  a = s("77078"),
  n = s("660279"),
  r = s("149943"),
  d = s("784905"),
  o = s("489618"),
  u = s("205382"),
  c = s("782340"),
  h = s("551040");

function f(e) {
  return (0, i.jsx)("div", {
    className: h.sectionHeader,
    children: (0, i.jsx)(a.Heading, {
      variant: "text-xs/bold",
      className: h.sectionHeaderTitle,
      color: "text-muted",
      children: e.title
    })
  })
}

function N(e) {
  return (0, i.jsxs)("div", {
    children: [null != e.title && (0, i.jsx)(f, {
      title: e.title
    }), (0, i.jsx)("div", {
      className: h.sectionContent,
      children: e.children
    })]
  })
}

function g(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)(a.ModalHeader, {
    className: h.header,
    children: [(0, i.jsxs)("div", {
      className: h.headerLeft,
      children: [(0, i.jsx)(n.default, {
        className: h.headerBell
      }), (0, i.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: c.default.Messages.NOTIFICATION_SETTINGS
      })]
    }), (0, i.jsx)(a.ModalCloseButton, {
      onClick: t
    })]
  })
}

function S(e) {
  let t = l.useRef(null);
  return (0, i.jsxs)(a.ModalRoot, {
    size: a.ModalSize.MEDIUM,
    transitionState: e.transitionState,
    "aria-label": c.default.Messages.NOTIFICATION_SETTINGS,
    children: [(0, i.jsx)(g, {
      onClose: e.onClose
    }), (0, i.jsxs)(a.ModalContent, {
      className: h.content,
      scrollerRef: t,
      children: [(0, i.jsx)(N, {
        children: (0, i.jsx)(o.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(N, {
        title: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
        children: (0, i.jsx)(u.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(N, {
        title: c.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
        children: (0, i.jsx)(r.default, {
          guildId: e.guildId
        })
      }), (0, i.jsx)(f, {
        title: c.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
      }), (0, i.jsx)(d.default, {
        guildId: e.guildId,
        requestScrollToBottom: () => {
          null != t && null != t.current && t.current.scrollToBottom({
            animate: !0
          })
        }
      })]
    })]
  })
}