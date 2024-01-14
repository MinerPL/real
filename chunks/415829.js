"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("446674"),
  r = n("77078"),
  o = n("272030"),
  u = n("913491"),
  d = n("42203"),
  c = n("69890"),
  f = n("610730"),
  m = n("487269"),
  E = n("292657"),
  _ = n("967241"),
  h = n("49111"),
  p = n("782340"),
  I = n("758179");

function T(e) {
  let {
    message: t,
    compact: n
  } = e, s = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(t.id));
  return null == s ? null : (0, a.jsx)(g, {
    channel: s,
    compact: n,
    isSystemMessage: (0, u.default)(t)
  })
}

function g(e) {
  let {
    channel: t,
    compact: s,
    isSystemMessage: u
  } = e, d = (0, i.useStateFromStores)([f.default], () => f.default.getCount(t.id)), T = function(e) {
    var t;
    let n = (0, i.useStateFromStores)([f.default], () => f.default.getMostRecentMessage(e.id)),
      s = (0, i.useStateFromStores)([f.default], () => f.default.getCount(e.id)),
      l = (0, m.useLastMessageTimestamp)(e);
    return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? p.default.Messages.NO_RECENT_THREAD_MESSAGES : null == s || 0 === s ? p.default.Messages.NO_THREAD_MESSAGES : null == n ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("span", {
        children: p.default.Messages.NO_RECENT_THREAD_MESSAGES
      }), (0, a.jsx)("span", {
        className: I.timestamp,
        children: (0, m.getTimestampString)(l)
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.default, {
        message: n,
        channel: e
      }), (0, a.jsx)("span", {
        className: I.timestamp,
        children: (0, m.getTimestampString)(l)
      })]
    })
  }(t), g = null != d && d > 0;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: l(I.spine, {
        [I.cozy]: !s,
        [I.systemMessageSpine]: u
      })
    }), (0, a.jsx)(r.Clickable, {
      onClick: function(e) {
        e.stopPropagation(), (0, _.openThreadSidebarForViewing)(t, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          a = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === h.KeyboardKeys.SPACE || e.which === h.KeyboardKeys.ENTER) && (e.preventDefault(), (n || a) && (0, _.openThreadSidebarForViewing)(t, a))
      },
      onContextMenu: function(e) {
        (0, o.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("994827").then(n.bind(n, "994827"));
          return n => (0, a.jsx)(e, {
            channel: t,
            ...n
          })
        })
      },
      "aria-roledescription": p.default.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
      className: l(I.container, {
        [I.systemMessageContainer]: u
      }),
      children: (0, a.jsxs)(r.BlockInteractions, {
        children: [(0, a.jsxs)("div", {
          className: I.topLine,
          children: [(0, a.jsx)(r.HiddenVisually, {
            children: p.default.Messages.THREAD
          }), (0, a.jsx)("span", {
            className: I.name,
            children: t.name
          }), (0, a.jsx)("span", {
            className: I.cta,
            "aria-hidden": !g,
            children: (0, c.formatMessageCountLabel)(d, t.id)
          })]
        }), (0, a.jsx)("span", {
          "aria-hidden": !0,
          className: l(I.bottomLine),
          children: T
        })]
      })
    })]
  })
}