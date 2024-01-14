"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("907002"),
  r = n("65597"),
  o = n("77078"),
  u = n("97810"),
  d = n("909004"),
  c = n("251144"),
  f = n("20662"),
  h = n("347738"),
  C = n("118094"),
  p = n("200521"),
  m = n("894488"),
  E = n("782340"),
  g = n("339723");

function S(e) {
  let {
    summary: t,
    channel: n
  } = e, a = (0, r.default)([h.default], () => h.default.summaryFeedback(t)), l = (e, s) => {
    e.stopPropagation(), (0, C.default)({
      summary: t,
      channel: n,
      rating: s
    })
  }, u = (0, i.useTransition)(null == a, {
    enter: {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    },
    leave: {
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    }
  });
  return (0, s.jsx)(s.Fragment, {
    children: u((e, t) => t ? (0, s.jsx)("div", {
      className: g.summaryFeedbackWrapper,
      children: (0, s.jsxs)(i.animated.div, {
        style: e,
        className: g.summaryFeedback,
        children: [(0, s.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: E.default.Messages.SUMMARY_FEEDBACK
        }), (0, s.jsx)(o.Clickable, {
          onClick: e => l(e, p.FeedbackRating.GOOD),
          children: (0, s.jsx)(f.default, {
            className: g.thumbIcon,
            width: 12,
            height: 12
          })
        }), (0, s.jsx)(o.Clickable, {
          onClick: e => l(e, p.FeedbackRating.BAD),
          children: (0, s.jsx)(c.default, {
            className: g.thumbIcon,
            width: 12,
            height: 12
          })
        })]
      })
    }) : null)
  })
}

function _(e) {
  var t, n;
  let a, {
      item: i,
      channel: o,
      index: c
    } = e,
    f = (0, r.default)([h.default], () => h.default.selectedSummary(o.id));
  if (null == f) return null;
  let C = null != i.unreadId,
    p = null != i.content;
  return a = p ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(d.default, {
      className: g.summaryStartIcon,
      width: 16,
      height: 16
    }), i.content]
  }) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(S, {
      summary: f,
      channel: o
    }), (0, s.jsx)(d.default, {
      className: g.summaryEndIcon,
      width: 16,
      height: 16
    })]
  }), (0, s.jsx)(u.default, {
    className: l(g.summaryDivider, p ? g.summaryDividerStart : g.summaryDividerEnd),
    contentClassName: p ? g.summaryStartContent : g.summaryEndContent,
    isUnread: C,
    id: C ? m.NEW_MESSAGE_BAR_ID : void 0,
    children: a
  }, "divider-".concat(null !== (n = null !== (t = i.contentKey) && void 0 !== t ? t : i.unreadId) && void 0 !== n ? n : c))
}