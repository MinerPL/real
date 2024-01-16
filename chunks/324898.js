"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("717837"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("819689"),
  f = n("260526"),
  h = n("619259"),
  C = n("865343"),
  p = n("148337"),
  m = n("701909"),
  E = n("124297"),
  g = n("497880"),
  S = n("587904"),
  _ = n("49111"),
  A = n("782340"),
  T = n("676831"),
  M = n("632215"),
  I = n("741566");
let N = a.memo(function(e) {
  let {
    message: t,
    notice: n,
    compact: a = !1,
    onDismiss: l
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: i(T.blockedNoticeContainer, {
        [T.compact]: a
      }),
      children: [(0, s.jsx)("div", {
        className: T.blockedNoticeIcon,
        children: (0, s.jsx)(p.default, {
          className: T.shieldIcon,
          width: 16,
          height: 16
        })
      }), (0, s.jsx)("div", {
        className: T.blockedNotice,
        children: (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "interactive-normal",
          children: n
        })
      })]
    }), (0, s.jsx)("div", {
      className: i(T.ephemeralAccessories, {
        [T.compact]: a
      }),
      children: (0, s.jsx)(E.default, {
        message: t,
        onDeleteMessage: l,
        children: (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "interactive-normal",
          tag: "span",
          className: T.learnMore,
          children: A.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format({
            helpUrl: m.default.getArticleURL(_.HelpdeskArticles.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })
      })
    })]
  })
});
var L = a.memo(function(e) {
  var t, n;
  let {
    className: l,
    compact: r,
    message: d,
    children: p,
    content: m,
    onUpdate: E
  } = e, _ = null === (t = d.editedTimestamp) || void 0 === t ? void 0 : t.toString(), L = a.useRef(!1), v = (0, u.useStateFromStores)([h.default], () => h.default.getMessage(d.id), [d.id]), R = a.useCallback(() => {
    (null == v ? void 0 : v.isBlockedEdit) ? (0, f.removeAutomodMessageNotice)(d.id) : c.default.deleteMessage(d.channel_id, d.id, !0)
  }, [d, v]);
  return a.useLayoutEffect(() => {
    L.current ? null != E && E() : L.current = !0
  }, [E, d.content, m, _, p]), (0, s.jsxs)("div", {
    id: (0, C.getMessageContentId)(d),
    className: i(l, M.markup, {
      [I.messageContent]: !0,
      [I.markupRtl]: "rtl" === o(d.content),
      [T.blockedEdit]: null == v ? void 0 : v.isBlockedEdit,
      [T.blockedSend]: !(null == v ? void 0 : v.isBlockedEdit)
    }),
    children: [null != p ? p : (0, g.getContent)(d, m), (null == v ? void 0 : v.isBlockedEdit) && null != d.timestamp && (0, s.jsxs)(s.Fragment, {
      children: [" ", (0, s.jsx)(S.default, {
        timestamp: d.timestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, s.jsxs)("span", {
          className: I.edited,
          children: ["(", A.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX, ")"]
        })
      })]
    }), (0, s.jsx)(N, {
      notice: null !== (n = null == v ? void 0 : v.errorMessage) && void 0 !== n ? n : A.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
      message: d,
      compact: r,
      onDismiss: R
    })]
  })
}, g.memoizeMessageProps)