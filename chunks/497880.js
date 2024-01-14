"use strict";
n.r(t), n.d(t, {
  getContent: function() {
    return E
  },
  memoizeMessageProps: function() {
    return A
  },
  default: function() {
    return S
  }
});
var a = n("37983"),
  i = n("884691"),
  s = n("414456"),
  r = n.n(s),
  l = n("717837"),
  o = n.n(l),
  u = n("233736"),
  c = n("865343"),
  d = n("587904"),
  m = n("49111"),
  f = n("782340"),
  g = n("632215"),
  p = n("741566");

function E(e, t) {
  let {
    asPartialPreview: n = !1
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if (e.isPoll() && n) {
    var a, i, s;
    return null !== (s = null === (i = e.poll) || void 0 === i ? void 0 : null === (a = i.question) || void 0 === a ? void 0 : a.text) && void 0 !== s ? s : ""
  }
  if (e.isPoll()) return "";
  if (e.type === m.MessageTypes.VOICE_HANGOUT_INVITE) return "";
  return e.hasFlag(m.MessageFlags.SOURCE_MESSAGE_DELETED) ? f.default.Messages.SOURCE_MESSAGE_DELETED : t
}

function A(e, t) {
  var n, a;
  let {
    message: i
  } = t, {
    message: s
  } = e;
  return (0, u.default)(e, t, ["message"]) && i.content === s.content && i.state === s.state && (null === (n = i.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = s.editedTimestamp) || void 0 === a ? void 0 : a.toString())
}
var S = i.memo(function(e) {
  var t;
  let {
    className: n,
    message: s,
    children: l,
    content: u,
    onUpdate: A,
    contentRef: S,
    asPartialPreview: h
  } = e, I = s.isEdited(), T = s.state === m.MessageStates.SEND_FAILED, y = s.state === m.MessageStates.SENDING, M = s.isCommandType(), v = null === (t = s.editedTimestamp) || void 0 === t ? void 0 : t.toString(), _ = i.useRef(!1);
  return i.useLayoutEffect(() => {
    _.current ? null != A && A() : _.current = !0
  }, [A, s.content, u, v, l]), (0, a.jsxs)("div", {
    id: (0, c.getMessageContentId)(s),
    ref: S,
    className: r(n, g.markup, {
      [p.messageContent]: !0,
      [p.isSending]: y && !M,
      [p.markupRtl]: "rtl" === o(s.content),
      [p.isFailed]: T
    }),
    children: [null != l ? l : E(s, u, {
      asPartialPreview: h
    }), I && null != s.editedTimestamp && (0, a.jsxs)(a.Fragment, {
      children: [" ", (0, a.jsx)(d.default, {
        timestamp: s.editedTimestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, a.jsxs)("span", {
          className: p.edited,
          children: ["(", f.default.Messages.MESSAGE_EDITED, ")"]
        })
      })]
    })]
  })
}, A)