"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("974667"),
  o = n("446674"),
  u = n("77078"),
  d = n("336696"),
  c = n("383667"),
  f = n("459776"),
  h = n("654017"),
  E = n("603531"),
  m = n("845579"),
  p = n("271938"),
  g = n("957255"),
  S = n("697218"),
  N = n("898260"),
  _ = n("888400"),
  I = n("530686"),
  T = n("970268"),
  C = n("49111"),
  A = n("782340"),
  x = n("145568");
let v = {
  left: 4,
  right: -12
};

function M(e) {
  var t;
  let {
    channel: n,
    message: s,
    compact: i,
    isGroupStart: o,
    treatSpam: d,
    gotoChannel: c
  } = e, f = (0, r.useListItem)(null !== (t = s.id) && void 0 !== t ? t : ""), h = l.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
    }
  }, [n.id]);
  return (0, a.jsx)(u.FocusRing, {
    offset: v,
    children: (0, a.jsxs)("div", {
      className: x.messageContainer,
      onKeyDown: h,
      ...f,
      children: [(0, a.jsx)(I.default, {
        className: x.jumpButton,
        onJump: e => c(e, s.id)
      }), (0, a.jsx)(E.default, {
        id: s.id,
        message: s,
        channel: n,
        className: x.message,
        compact: i,
        animateAvatar: !1,
        isGroupStart: o,
        onKeyDown: h,
        treatSpam: d
      })]
    }, s.id)
  })
}

function R(e) {
  var t, n;
  let {
    channel: l,
    channelRecord: s,
    gotoChannel: r
  } = e, {
    enabled: E
  } = d.default.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: !1
  }), I = m.MessageDisplayCompact.useSetting(), v = (0, o.useStateFromStores)([g.default], () => g.default.can(C.Permissions.CREATE_INSTANT_INVITE, s)), R = (0, h.isSpamSupported)(s), L = !1, O = 0 === l.messages.length || l.messages[0].timestamp.isSame(i(), "day"), b = null !== (n = null === (t = S.default.getUser(p.default.getId())) || void 0 === t ? void 0 : t.hasFlag(C.UserFlags.SPAMMER)) && void 0 !== n && n, y = [];
  if (!l.collapsed) {
    let e = null,
      t = null,
      n = l.messages.slice(0, T.MAX_SHOWN_MESSAGES);
    n.forEach(n => {
      if (!(0, c.default)(n, v)) {
        if (!O && (null == e || !e.isSame(n.timestamp, "day"))) {
          let t = (0, _.dateFormat)(n.timestamp, "LL");
          y.push((0, a.jsx)(N.default, {
            className: x.divider,
            children: t
          }, t)), e = n.timestamp
        }
        let l = null == t || (0, f.default)(s, t, n);
        t = n, L = L || (0, h.isSpam)(n), y.push((0, a.jsx)(M, {
          channel: s,
          message: n,
          compact: I,
          isGroupStart: l,
          treatSpam: !b && E && (0, h.isSpam)(n) && R,
          gotoChannel: r
        }, n.id))
      }
    }), l.messages.length >= T.MAX_SHOWN_MESSAGES && y.push((0, a.jsxs)(u.Button, {
      color: u.Button.Colors.LINK,
      look: u.Button.Looks.LINK,
      onClick: e => r(e, n[n.length - 1].id),
      children: [A.default.Messages.UNREADS_VIEW_CHANNEL, " ›"]
    }, "view-all")), 0 === y.length && (y = [(0, a.jsx)(u.Spinner, {}, "spinner")])
  }
  return L && R && d.default.trackExposure({
    location: "20e3b0_2"
  }), (0, a.jsx)("div", {
    className: x.messages,
    children: y
  })
}