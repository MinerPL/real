"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("446674"),
  r = n("77078"),
  o = n("272030"),
  u = n("913491"),
  d = n("42203"),
  c = n("69890"),
  f = n("610730"),
  E = n("487269"),
  _ = n("292657"),
  T = n("967241"),
  I = n("49111"),
  m = n("782340"),
  N = n("758179");

function p(e) {
  let {
    message: t,
    compact: n
  } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(t.id));
  return null == l ? null : (0, s.jsx)(S, {
    channel: l,
    compact: n,
    isSystemMessage: (0, u.default)(t)
  })
}

function S(e) {
  let {
    channel: t,
    compact: l,
    isSystemMessage: u
  } = e, d = (0, i.useStateFromStores)([f.default], () => f.default.getCount(t.id)), p = function(e) {
    var t;
    let n = (0, i.useStateFromStores)([f.default], () => f.default.getMostRecentMessage(e.id)),
      l = (0, i.useStateFromStores)([f.default], () => f.default.getCount(e.id)),
      a = (0, E.useLastMessageTimestamp)(e);
    return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? m.default.Messages.NO_RECENT_THREAD_MESSAGES : null == l || 0 === l ? m.default.Messages.NO_THREAD_MESSAGES : null == n ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("span", {
        children: m.default.Messages.NO_RECENT_THREAD_MESSAGES
      }), (0, s.jsx)("span", {
        className: N.timestamp,
        children: (0, E.getTimestampString)(a)
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(_.default, {
        message: n,
        channel: e
      }), (0, s.jsx)("span", {
        className: N.timestamp,
        children: (0, E.getTimestampString)(a)
      })]
    })
  }(t), S = null != d && d > 0;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: a(N.spine, {
        [N.cozy]: !l,
        [N.systemMessageSpine]: u
      })
    }), (0, s.jsx)(r.Clickable, {
      onClick: function(e) {
        e.stopPropagation(), (0, T.openThreadSidebarForViewing)(t, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          s = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === I.KeyboardKeys.SPACE || e.which === I.KeyboardKeys.ENTER) && (e.preventDefault(), (n || s) && (0, T.openThreadSidebarForViewing)(t, s))
      },
      onContextMenu: function(e) {
        (0, o.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("994827").then(n.bind(n, "994827"));
          return n => (0, s.jsx)(e, {
            channel: t,
            ...n
          })
        })
      },
      "aria-roledescription": m.default.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
      className: a(N.container, {
        [N.systemMessageContainer]: u
      }),
      children: (0, s.jsxs)(r.BlockInteractions, {
        children: [(0, s.jsxs)("div", {
          className: N.topLine,
          children: [(0, s.jsx)(r.HiddenVisually, {
            children: m.default.Messages.THREAD
          }), (0, s.jsx)("span", {
            className: N.name,
            children: t.name
          }), (0, s.jsx)("span", {
            className: N.cta,
            "aria-hidden": !S,
            children: (0, c.formatMessageCountLabel)(d, t.id)
          })]
        }), (0, s.jsx)("span", {
          "aria-hidden": !0,
          className: a(N.bottomLine),
          children: p
        })]
      })
    })]
  })
}