"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("414456"),
  i = n.n(s),
  l = n("255397"),
  u = n("256170"),
  o = n("155207"),
  d = n("981913"),
  c = n("782340"),
  f = n("789749");

function E(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, a.jsxs)("div", {
    className: f.iconContainer,
    children: [(0, a.jsx)(u.default, {
      className: i(n ? f.upCaret : f.leftCaret, t)
    }), (0, a.jsx)(o.default, {
      className: i(f.members, t)
    })]
  })
}

function h(e) {
  let {
    className: t,
    isVertical: n
  } = e;
  return (0, a.jsxs)("div", {
    className: f.iconContainer,
    children: [(0, a.jsx)(u.default, {
      className: i(n ? f.downCaret : f.rightCaret, t)
    }), n && (0, a.jsx)(o.default, {
      className: i(f.members, t)
    })]
  })
}

function p(e) {
  let {
    channelId: t,
    className: n,
    isParticipantsOpen: s,
    isVertical: u = !1,
    hideTooltip: o = !1
  } = e, p = r.useCallback(e => {
    let {
      className: t
    } = e;
    return s ? (0, a.jsx)(h, {
      className: t,
      isVertical: u
    }) : (0, a.jsx)(E, {
      className: t,
      isVertical: u
    })
  }, [s, u]);
  return (0, a.jsx)(d.default, {
    label: s ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
    className: i(f.participantsButton, n),
    onClick: function() {
      l.default.toggleParticipants(t, !s)
    },
    iconComponent: p,
    shouldShowTooltip: !o
  })
}