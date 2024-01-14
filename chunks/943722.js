"use strict";
n.r(t), n.d(t, {
  ActivityEmoji: function() {
    return M
  },
  default: function() {
    return O
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("430568"),
  c = n("309570"),
  d = n("29088"),
  f = n("867805"),
  T = n("699209"),
  E = n("32346"),
  A = n("342845"),
  _ = n("845579"),
  S = n("271938"),
  m = n("42203"),
  C = n("957255"),
  N = n("824563"),
  g = n("800762"),
  v = n("137783"),
  p = n("49111"),
  I = n("205341");

function M(e) {
  let {
    emoji: t,
    className: n,
    animate: l = !0,
    hideTooltip: s
  } = e, r = _.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), d = {
    className: i(I.emoji, n),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: !0,
    animated: !!(t.animated && r && l)
  };
  return s ? (0, a.jsx)(o.default, {
    ...d
  }) : (0, a.jsx)(u.Tooltip, {
    text: c,
    children: e => (0, a.jsx)(o.default, {
      ...e,
      ...d
    })
  })
}
let h = e => {
  let {
    className: t,
    text: n
  } = e, s = l.useRef(null), r = l.useRef(null), [o, c] = l.useState(!1);
  return l.useLayoutEffect(() => {
    let {
      current: e
    } = s, {
      current: t
    } = r;
    if (null == e || null == t) return;
    let n = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
    c(!n)
  }, [n]), (0, a.jsx)(u.Tooltip, {
    text: o || null == n || "" === n ? null : n,
    delay: 150,
    "aria-label": !1,
    children: e => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        ...e,
        className: t,
        ref: s,
        children: n
      }), (0, a.jsx)("div", {
        className: i(I.textRuler, t),
        ref: r,
        "aria-hidden": !0,
        children: n
      })]
    })
  })
};
var O = e => {
  var t;
  let {
    activities: n,
    applicationStream: l,
    className: s,
    textClassName: i,
    emojiClassName: u,
    animate: o = !0,
    hideTooltip: f = !1,
    hideEmoji: _ = !1,
    user: O
  } = e, U = null != n ? n.find(e => e.type === p.ActivityTypes.CUSTOM_STATUS) : null, x = (0, r.useStateFromStores)([S.default], () => S.default.getId() === (null == O ? void 0 : O.id)), R = (0, r.useStateFromStores)([E.default], () => x ? E.default.getHangStatusActivity() : null != n ? n.find(e => e.type === p.ActivityTypes.HANG_STATUS) : null), y = (0, r.useStateFromStores)([g.default, m.default], () => {
    var e;
    return null != R && null != O ? m.default.getChannel(null === (e = g.default.getVoiceStateForUser(O.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: j
  } = T.HangStatusExperiment.useExperiment({
    guildId: null == y ? void 0 : y.guild_id,
    location: "ActivityStatus"
  }), P = null, H = j && null != R && C.default.can(p.Permissions.CONNECT, y);
  H ? P = (0, a.jsx)(A.default, {
    className: u,
    hangStatusActivity: R
  }) : null != U && null != U.emoji && !_ && (P = (0, a.jsx)(M, {
    emoji: U.emoji,
    animate: o,
    hideTooltip: f,
    className: u
  }));
  let L = (0, r.useStateFromStores)([N.default], () => null != O ? N.default.getStatus(O.id) : null),
    G = null !== L && [p.StatusTypes.OFFLINE, p.StatusTypes.INVISIBLE].includes(L),
    D = null === (t = (0, d.default)(n, l, void 0, H)) || void 0 === t ? void 0 : t.activityText,
    b = null != D && D.length > 0;
  return G || null == P && !b ? null : (0, a.jsxs)("div", {
    className: s,
    children: [P, (0, a.jsx)(h, {
      text: D,
      className: i
    }), null != n && n.some(c.default) ? (0, a.jsx)(v.default, {
      width: 16,
      height: 16,
      className: I.icon
    }) : null]
  })
}