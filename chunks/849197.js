"use strict";
n.r(t), n.d(t, {
  useInteractivePollMessage: function() {
    return f
  },
  default: function() {
    return _
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("627445"),
  i = n.n(a),
  r = n("65597"),
  o = n("819689"),
  u = n("377253"),
  d = n("905206");
let c = l.createContext(void 0);

function f(e) {
  var t;
  let n = null !== (t = l.useContext(c)) && void 0 !== t ? t : e;
  return i(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function E(e) {
  let {
    message: t,
    children: n
  } = e, a = (0, r.default)([u.default], () => u.default.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), i = null != a;
  return l.useEffect(() => {
    !i && o.default.focusMessage({
      channelId: t.channel_id,
      messageId: t.id
    })
  }, [i, t.channel_id, t.id]), (0, s.jsx)(c.Provider, {
    value: null != a ? a : t,
    children: n
  })
}

function _(e) {
  let {
    message: t,
    children: n
  } = e;
  return (0, d.isPollMessageDirectlyInteractive)(t) ? (0, s.jsx)(s.Fragment, {
    children: n
  }) : (0, s.jsx)(E, {
    message: t,
    children: n
  })
}