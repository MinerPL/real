"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("272030"),
  o = n("120027"),
  u = n("487269"),
  d = n("957255"),
  c = n("660478"),
  m = n("109264"),
  f = n("251144"),
  h = n("20662"),
  p = n("15738"),
  g = n("299039"),
  E = n("347738"),
  v = n("118094"),
  C = n("402318"),
  I = n("976818"),
  x = n("49111"),
  _ = n("200521"),
  S = n("137738");

function N(e) {
  let {
    summary: t,
    channel: c,
    members: I,
    guildId: N,
    unread: M,
    onClick: T
  } = e, [A, j] = a.useState(!1), y = (0, u.getTimestampString)(g.default.extractTimestamp(t.startId)), R = (0, s.useStateFromStores)([E.default], () => E.default.summaryFeedback(t)), L = (e, n) => {
    e.stopPropagation(), (0, v.default)({
      summary: t,
      channel: c,
      rating: n
    })
  }, b = d.default.can(x.Permissions.MANAGE_MESSAGES, c);
  return (0, l.jsxs)(i.Clickable, {
    className: S.container,
    onClick: T,
    onContextMenu: e => {
      b && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("113286").then(n.bind(n, "113286"));
        return n => (0, l.jsx)(e, {
          ...n,
          summary: t
        })
      })
    },
    onMouseEnter: () => j(!0),
    onMouseLeave: () => j(!1),
    children: [(0, l.jsx)(p.default, {
      hovered: A,
      unread: M,
      className: S.unreadPill
    }), (0, l.jsx)("div", {
      className: S.rowHeader,
      children: (0, l.jsxs)("div", {
        className: S.rowHeaderLeft,
        children: [(0, l.jsx)(i.Text, {
          className: S.timestamp,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: y
        }), (0, l.jsx)(o.default, {
          height: 4,
          width: 4,
          "aria-hidden": "true",
          className: S.dot
        }), (0, l.jsx)(m.default, {
          height: 12,
          width: 12,
          className: S.icon
        }), (0, l.jsx)(i.Text, {
          className: S.count,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: t.count
        }), I.length > 0 && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(o.default, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: S.dot
          }), (0, l.jsx)(C.default, {
            partySize: {
              knownSize: I.length,
              totalSize: I.length
            },
            maxAvatarsShown: 3,
            members: I,
            guildId: N
          })]
        })]
      })
    }), A && !R && (0, l.jsxs)("div", {
      className: S.feedbackContainer,
      children: [(0, l.jsx)(i.Clickable, {
        onClick: e => L(e, _.FeedbackRating.GOOD),
        children: (0, l.jsx)(h.default, {
          className: S.thumbIcon,
          width: 12,
          height: 12
        })
      }), (0, l.jsx)(i.Clickable, {
        onClick: e => L(e, _.FeedbackRating.BAD),
        children: (0, l.jsx)(f.default, {
          className: S.thumbIcon,
          width: 12,
          height: 12
        })
      })]
    }), (0, l.jsx)(i.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      className: S.title,
      children: t.topic
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: S.subtitle,
      children: t.summShort
    })]
  })
}

function M(e) {
  let {
    summaries: t,
    summariesMembers: n,
    channel: i,
    selectTopic: r,
    setOpen: o
  } = e, u = (0, s.useStateFromStores)([c.default], () => c.default.getOldestUnreadMessageId(i.id)), d = a.useCallback(e => {
    r(e), o(!1)
  }, [r, o]);
  return t.length < 1 ? (0, l.jsx)(I.default, {}) : (0, l.jsx)(l.Fragment, {
    children: t.map((e, t) => {
      var a;
      let s = null !== (a = n[t]) && void 0 !== a ? a : [];
      return (0, l.jsx)(N, {
        summary: e,
        channel: i,
        members: s,
        guildId: i.guild_id,
        unread: null != u && g.default.compare(e.endId, u) > 0,
        onClick: () => d(t)
      }, t)
    })
  })
}