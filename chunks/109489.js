"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("414456"),
  l = n.n(s),
  i = n("255397"),
  u = n("256170"),
  o = n("155207"),
  d = n("981913"),
  c = n("782340"),
  f = n("789749");

function h(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, a.jsxs)("div", {
    className: f.iconContainer,
    children: [(0, a.jsx)(u.default, {
      className: l(n ? f.upCaret : f.leftCaret, t)
    }), (0, a.jsx)(o.default, {
      className: l(f.members, t)
    })]
  })
}

function p(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, a.jsxs)("div", {
    className: f.iconContainer,
    children: [(0, a.jsx)(u.default, {
      className: l(n ? f.downCaret : f.rightCaret, t)
    }), n && (0, a.jsx)(o.default, {
      className: l(f.members, t)
    })]
  })
}

function E(e) {
  let {
    channelId: t,
    className: n,
    isParticipantsOpen: s,
    isVertical: u = !1,
    hideTooltip: o = !1
  } = e, E = r.useCallback(e => {
    let {
      className: t
    } = e;
    return s ? (0, a.jsx)(p, {
      className: t,
      isVertical: u
    }) : (0, a.jsx)(h, {
      className: t,
      isVertical: u
    })
  }, [s, u]);
  return (0, a.jsx)(d.default, {
    label: s ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
    className: l(f.participantsButton, n),
    onClick: function() {
      i.default.toggleParticipants(t, !s)
    },
    iconComponent: E,
    shouldShowTooltip: !o
  })
}