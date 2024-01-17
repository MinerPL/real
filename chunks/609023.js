"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("974667"),
  o = n("446674"),
  u = n("77078"),
  d = n("336696"),
  c = n("383667"),
  f = n("459776"),
  E = n("654017"),
  h = n("603531"),
  _ = n("845579"),
  S = n("271938"),
  T = n("957255"),
  N = n("697218"),
  p = n("898260"),
  I = n("888400"),
  m = n("530686"),
  A = n("970268"),
  g = n("49111"),
  C = n("782340"),
  R = n("145568");
let M = {
  left: 4,
  right: -12
};

function O(e) {
  var t;
  let {
    channel: n,
    message: s,
    compact: i,
    isGroupStart: o,
    treatSpam: d,
    gotoChannel: c
  } = e, f = (0, r.useListItem)(null !== (t = s.id) && void 0 !== t ? t : ""), E = a.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
    }
  }, [n.id]);
  return (0, l.jsx)(u.FocusRing, {
    offset: M,
    children: (0, l.jsxs)("div", {
      className: R.messageContainer,
      onKeyDown: E,
      ...f,
      children: [(0, l.jsx)(m.default, {
        className: R.jumpButton,
        onJump: e => c(e, s.id)
      }), (0, l.jsx)(h.default, {
        id: s.id,
        message: s,
        channel: n,
        className: R.message,
        compact: i,
        animateAvatar: !1,
        isGroupStart: o,
        onKeyDown: E,
        treatSpam: d
      })]
    }, s.id)
  })
}

function L(e) {
  var t, n;
  let {
    channel: a,
    channelRecord: s,
    gotoChannel: r
  } = e, {
    enabled: h
  } = d.default.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: !1
  }), m = _.MessageDisplayCompact.useSetting(), M = (0, o.useStateFromStores)([T.default], () => T.default.can(g.Permissions.CREATE_INSTANT_INVITE, s)), L = (0, E.isSpamSupported)(s), v = !1, D = 0 === a.messages.length || a.messages[0].timestamp.isSame(i(), "day"), y = null !== (n = null === (t = N.default.getUser(S.default.getId())) || void 0 === t ? void 0 : t.hasFlag(g.UserFlags.SPAMMER)) && void 0 !== n && n, x = [];
  if (!a.collapsed) {
    let e = null,
      t = null,
      n = a.messages.slice(0, A.MAX_SHOWN_MESSAGES);
    n.forEach(n => {
      if (!(0, c.default)(n, M)) {
        if (!D && (null == e || !e.isSame(n.timestamp, "day"))) {
          let t = (0, I.dateFormat)(n.timestamp, "LL");
          x.push((0, l.jsx)(p.default, {
            className: R.divider,
            children: t
          }, t)), e = n.timestamp
        }
        let a = null == t || (0, f.default)(s, t, n);
        t = n, v = v || (0, E.isSpam)(n), x.push((0, l.jsx)(O, {
          channel: s,
          message: n,
          compact: m,
          isGroupStart: a,
          treatSpam: !y && h && (0, E.isSpam)(n) && L,
          gotoChannel: r
        }, n.id))
      }
    }), a.messages.length >= A.MAX_SHOWN_MESSAGES && x.push((0, l.jsxs)(u.Button, {
      color: u.Button.Colors.LINK,
      look: u.Button.Looks.LINK,
      onClick: e => r(e, n[n.length - 1].id),
      children: [C.default.Messages.UNREADS_VIEW_CHANNEL, " ›"]
    }, "view-all")), 0 === x.length && (x = [(0, l.jsx)(u.Spinner, {}, "spinner")])
  }
  return v && L && d.default.trackExposure({
    location: "20e3b0_2"
  }), (0, l.jsx)("div", {
    className: R.messages,
    children: x
  })
}