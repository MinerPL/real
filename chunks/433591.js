"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("355262"),
  o = n("432710"),
  u = n("77078"),
  d = n("74456"),
  c = n("302437"),
  f = n("155084"),
  E = n("826684"),
  _ = n("599110"),
  h = n("803524"),
  C = n("7643"),
  I = n("785770"),
  T = n("521702"),
  S = n("452229"),
  m = n("196986"),
  p = n("92918"),
  A = n("973199"),
  g = n("49111"),
  N = n("782340"),
  R = n("127671");

function O() {
  let e = s.useRef(null),
    t = (0, T.default)(),
    n = (0, S.useSpamMessageRequestCount)(),
    i = (0, h.useListHasSingleSpamMessageRequest)(),
    O = (0, d.useIsRejectAllMessageRequestsEnabled)(),
    L = (0, c.default)("message-requests-spam-list"),
    {
      channelId: v
    } = (0, I.useMessageRequestSidebarState)(),
    M = s.useCallback(() => {
      (0, u.showToast)((0, u.createToast)(N.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE))
    }, []),
    {
      rejectAll: P
    } = (0, C.useMessageRequestActions)({
      onError: M
    }),
    D = s.useCallback(() => {
      let e = t.map(e => e.channel.id);
      P(e)
    }, [t, P]);
  s.useEffect(() => {
    _.default.track(g.AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: n
    }), f.default.increment({
      name: o.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW
    })
  }, []);
  let y = s.useCallback(e => {
      var n, s;
      let {
        row: r
      } = e, o = t[r], u = null === (s = t[r + 1]) || void 0 === s ? void 0 : null === (n = s.channel) || void 0 === n ? void 0 : n.id, d = o.channel.id;
      return (0, a.jsx)(p.default, {
        index: r,
        className: l({
          [R.selected]: null != v && v === d,
          [R.siblingSelected]: null != v && v === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: i
      }, d)
    }, [t, i, v]),
    x = s.useCallback(() => (0, a.jsxs)(E.default, {
      className: R.sectionTitle,
      children: [N.default.Messages.MESSAGE_REQUESTS_SPAM_HEADER.format({
        count: n
      }), O && n > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Text, {
          className: R.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, a.jsx)(u.Button, {
          onClick: D,
          look: u.ButtonLooks.LINK,
          color: u.ButtonColors.LINK,
          size: u.ButtonSizes.SMALL,
          className: R.clearAllButton,
          "aria-label": N.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: N.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "message-requests-spam-title"), [n, D, O]);
  return 0 === t.length ? (0, a.jsx)(m.default, {
    section: A.MessageRequestSections.SPAM
  }) : (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: L,
    children: (0, a.jsx)(r.ListNavigatorContainer, {
      children: n => {
        let {
          ref: s,
          role: i,
          ...l
        } = n;
        return (0, a.jsx)(u.List, {
          className: R.list,
          innerRole: i,
          innerAriaLabel: N.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: A.LIST_SECTION_HEIGHT,
          rowHeight: A.LIST_ROW_HEIGHT,
          renderSection: x,
          renderRow: y,
          sections: [t.length],
          chunkSize: 30,
          fade: !0,
          ...l
        }, "message-requests-spam-list")
      }
    })
  })
}