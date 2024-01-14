"use strict";
a.r(t), a.d(t, {
  default: function() {
    return j
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("917351"),
  i = a.n(s),
  d = a("446674"),
  r = a("77078"),
  u = a("987317"),
  o = a("990766"),
  c = a("242740"),
  f = a("223913"),
  m = a("795026"),
  h = a("673527"),
  E = a("848848"),
  g = a("233069"),
  I = a("373469"),
  _ = a("271938"),
  x = a("957255"),
  v = a("18494"),
  S = a("267675"),
  C = a("158998"),
  N = a("154925"),
  p = a("49111"),
  T = a("62082");

function A(e) {
  var t;
  let {
    channel: a,
    voiceStates: n,
    showPlaceholder: s
  } = e, c = (0, d.useStateFromStores)([I.default], () => I.default.getAllApplicationStreamsForChannel(a.id)[0]), E = (0, d.useStateFromStores)([I.default], () => null != c ? I.default.getActiveStreamForApplicationStream(c) : null), g = (0, d.useStateFromStores)([_.default], () => _.default.getId()), [x, v] = (0, f.useCanWatchStream)(a);
  if (null == c) return null;
  let N = i.chain(n).map("member").find(["userId", c.ownerId]).value(),
    A = i.chain(n).map("user").find(["id", c.ownerId]).value(),
    j = null !== (t = null == N ? void 0 : N.nick) && void 0 !== t ? t : C.default.getName(A),
    M = null != E && null != c && E.state !== p.ApplicationStreamStates.ENDED && E.ownerId === c.ownerId;
  return (0, l.jsxs)(r.Clickable, {
    onClick: () => {
      u.default.selectVoiceChannel(a.id), !M && (0, o.watchStreamAndTransitionToStream)(c)
    },
    className: T.previewContainer,
    children: [s ? (0, l.jsx)(h.DefaultFallback, {
      className: T.previewImage,
      isLoading: !0
    }) : (0, l.jsx)(h.default, {
      className: T.previewImage,
      stream: c
    }), x ? (0, l.jsx)("div", {
      className: T.previewHover,
      children: (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: T.previewButton,
        children: (0, m.default)(c, E, g, v)
      })
    }) : null, null != j ? (0, l.jsxs)("div", {
      className: T.previewName,
      children: [(0, l.jsx)(S.default, {
        width: 18,
        height: 18,
        className: T.icon
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: j
      })]
    }) : null]
  })
}

function j(e) {
  var t;
  let {
    guildId: a,
    channel: s,
    voiceStates: r,
    trackChannelClick: u,
    showPreview: o
  } = e, f = r.map(e => e.user), {
    needSubscriptionToAccess: m
  } = (0, E.default)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : void 0), h = (0, d.useStateFromStores)([x.default], () => !x.default.can(p.Permissions.CONNECT, s)), I = n.useRef(null), _ = function(e) {
    let t = n.useRef(null),
      [a, l] = n.useState(!1);
    return n.useEffect(() => {
      t.current = new IntersectionObserver(e => {
        let [t] = e;
        return l(t.isIntersecting)
      })
    }, []), n.useEffect(() => {
      var a;
      if (null != e.current) return null === (a = t.current) || void 0 === a || a.observe(e.current), () => {
        var e;
        null === (e = t.current) || void 0 === e || e.disconnect()
      }
    }, [e]), a
  }(I), S = n.useRef(!1);
  n.useEffect(() => {
    _ && (S.current = !0)
  }, [_]);
  let T = i.map(r, e => {
      var t, a;
      return null !== (a = null === (t = e.member) || void 0 === t ? void 0 : t.nick) && void 0 !== a ? a : C.default.getName(e.user)
    }),
    j = T.join(", ");
  return (0, l.jsx)(N.ActiveChannelBase, {
    ref: I,
    guildId: a,
    channel: s,
    text: j,
    usersInSummary: f,
    onChannelClick: () => {
      if (!(0, g.isGuildVocalChannelType)(s.type)) return;
      let e = v.default.getVoiceChannelId(),
        t = !x.default.can(p.Permissions.CONNECT, s);
      u(s), c.default.handleVoiceConnect({
        channel: s,
        locked: t,
        connected: e === s.id,
        needSubscriptionToAccess: m
      })
    },
    channelIconOptions: {
      locked: h
    },
    children: o && (0, l.jsx)(A, {
      channel: s,
      voiceStates: r,
      showPlaceholder: !S.current
    })
  })
}