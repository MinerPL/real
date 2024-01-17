"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("70102"), n("222007");
var a = n("37983"),
  r = n("884691"),
  s = n("414456"),
  l = n.n(s),
  i = n("917351"),
  u = n.n(i),
  o = n("446674"),
  d = n("862337"),
  c = n("77078"),
  f = n("272030"),
  h = n("901582"),
  p = n("373469"),
  E = n("697218"),
  C = n("427302"),
  m = n("462579"),
  S = n("449008"),
  g = n("387111"),
  _ = n("99795"),
  T = n("49111"),
  v = n("782340"),
  A = n("2081");

function I(e, t) {
  switch (e) {
    case _.ParticipantTypes.ACTIVITY:
      return v.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
        numUsers: t
      });
    case _.ParticipantTypes.STREAM:
      return v.default.Messages.SPECTATORS.format({
        numViewers: t
      });
    default:
      throw Error("Unknown participant type.")
  }
}

function M(e) {
  let {
    users: t,
    disableInteraction: n,
    guildId: r,
    participantType: s,
    channelId: i,
    handleUserContextMenu: u
  } = e, o = I(s, t.length);
  return (0, a.jsx)(c.Dialog, {
    "aria-label": o,
    className: A.popoutWrapper,
    children: (0, a.jsxs)(c.Scroller, {
      className: A.scroller,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: A.memberListHeader,
        children: o
      }), (0, a.jsx)("div", {
        children: t.map(e => (0, a.jsx)(C.default, {
          guildId: null != r ? r : void 0,
          className: l(A.memberListItem, {
            [A.popoutDisabled]: n
          }),
          textClassName: A.memberListItemText,
          user: e,
          disablePopout: n,
          nick: g.default.getNickname(r, i, e),
          onContextMenu: t => n ? null : u(t, e)
        }, e.id))
      })]
    })
  })
}

function x(e) {
  let {
    users: t,
    guildId: n,
    channelId: r,
    maxVisibleUsers: s = 3,
    className: i,
    participantType: u
  } = e, o = I(u, t.length), d = t.length < s ? t.map(e => (0, a.jsx)("div", {
    className: A.viewersTooltipItem,
    children: g.default.getName(n, r, e)
  }, e.id)) : o;
  return (0, a.jsx)(c.TooltipContainer, {
    text: d,
    "aria-label": o,
    children: (0, a.jsxs)("div", {
      className: l(A.viewers, i),
      children: [(0, a.jsx)(m.default, {
        className: A.viewersIcon
      }), (0, a.jsx)("span", {
        "aria-hidden": "true",
        children: t.length
      })]
    })
  })
}
let N = [];

function R(e) {
  let {
    channelId: t,
    guildId: s,
    participant: i,
    className: C,
    compact: m = !1,
    disableInteraction: g = !1,
    maxVisibleUsers: v = 3
  } = e, [I, R] = r.useState(!1), L = r.useRef(new d.DelayedCall(150, () => R(!1))), O = (0, o.useStateFromStoresArray)([p.default, E.default], () => {
    if (i.type === _.ParticipantTypes.STREAM) {
      let e = p.default.getViewerIds(i.id);
      return e.length > 0 ? e.map(e => E.default.getUser(e)).filter(S.isNotNullish) : N
    }
    return i.type === _.ParticipantTypes.ACTIVITY ? i.participants.size > 0 ? Array.from(i.participants).map(e => E.default.getUser(e)).filter(S.isNotNullish) : N : N
  }, [i]), y = r.useCallback(() => {
    L.current.cancel(), R(!0)
  }, []), P = r.useCallback(() => {
    L.current.delay()
  }, []), D = r.useCallback((e, t) => {
    y(), (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("406784").then(n.bind(n, "406784"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t
      })
    }, {
      onClose: P
    })
  }, [P, y]);
  if (0 === O.length) return null;
  if (m) return (0, a.jsx)(x, {
    maxVisibleUsers: v,
    users: O,
    guildId: s,
    channelId: t,
    className: C,
    participantType: i.type
  });
  let b = u(O).take(v).map(e => (0, a.jsx)(c.Avatar, {
    src: e.getAvatarURL(s, 24),
    "aria-label": e.username,
    size: c.AvatarSizes.SIZE_24,
    className: A.viewer
  }, e.id)).value();
  return O.length > v && (b[b.length - 1] = (0, a.jsxs)("div", {
    className: A.overflow,
    children: ["+", O.length - v + 1]
  }, "overflow")), (0, a.jsx)(h.default, {
    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
    children: (0, a.jsx)("div", {
      onMouseEnter: y,
      onMouseLeave: P,
      children: (0, a.jsx)(c.Popout, {
        renderPopout: () => (0, a.jsx)(M, {
          participantType: i.type,
          handleUserContextMenu: D,
          guildId: s,
          channelId: t,
          users: O,
          disableInteraction: g
        }),
        shouldShow: I,
        position: "top",
        children: () => (0, a.jsx)("div", {
          className: l(A.viewers, C),
          children: b
        })
      })
    })
  })
}