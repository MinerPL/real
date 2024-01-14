"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("424973"), n("222007");
var a = n("37983");
n("884691");
var l = n("446674"),
  i = n("669491"),
  o = n("77078"),
  r = n("255397"),
  s = n("600965"),
  d = n("191225"),
  u = n("299285"),
  c = n("191145"),
  p = n("373469"),
  f = n("449501"),
  m = n("697218"),
  h = n("663745"),
  v = n("49111"),
  I = n("99795"),
  P = n("782340"),
  S = n("374142");

function C(e) {
  let {
    closePopout: t,
    idle: n,
    pipWindows: i,
    voiceChannelId: m,
    onSelect: h
  } = e;
  n && t();
  let S = (0, l.useStateFromStores)([d.default], () => d.default.getSelfEmbeddedActivityForChannel(m)),
    C = (0, l.useStateFromStores)([f.default], () => f.default.pipWindow),
    g = (0, l.useStateFromStores)([c.default], () => c.default.getSelectedParticipant(m)),
    y = (0, l.useStateFromStores)([c.default], () => c.default.getStreamParticipants(m));
  return (0, a.jsx)(o.Menu, {
    navId: "pip-menu",
    "aria-label": "switch PIP",
    onClose: t,
    onSelect: h,
    children: (function() {
      let e = i.find(e => e.component === v.PictureInPictureComponents.EMBED_IFRAME),
        t = i.find(e => e.component === v.PictureInPictureComponents.VIDEO),
        n = [];
      return null != e && (null == C ? void 0 : C.id) !== e.id && n.push({
        pipWindow: e
      }), null != t && y.forEach(e => {
        let a = p.default.getActiveStreamForApplicationStream(e.stream),
          l = e.id === (null == g ? void 0 : g.id) && (null == C ? void 0 : C.id) === t.id;
        null != a && !l && n.push({
          pipWindow: t,
          participant: e,
          stream: a
        })
      }), n
    })().map(function(e) {
      var t;
      let n = e.pipWindow.id,
        l = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
        i = function(e) {
          if (e.pipWindow.component === v.PictureInPictureComponents.EMBED_IFRAME && null != S) {
            var t;
            let e = null === (t = u.default.getApplication(S.applicationId)) || void 0 === t ? void 0 : t.name;
            return null == e ? P.default.Messages.SWITCH_PIP_TO_ACTIVITY : P.default.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
              activityName: e
            })
          }
          return null == e.participant || e.participant.type !== I.ParticipantTypes.STREAM ? P.default.Messages.SWITCH_PIP_TO_GO_LIVE : P.default.Messages.SWITCH_PIP_TO_USER_STREAM.format({
            username: e.participant.userNick
          })
        }(e),
        d = "".concat(n).concat(null != l ? l : "");
      return (0, a.jsx)(o.MenuItem, {
        id: d,
        label: i,
        action: () => (function(e) {
          (null == C ? void 0 : C.id) !== e.pipWindow.id && (0, s.switchPIPFocus)(e.pipWindow.id);
          let t = e.participant;
          null != t && t.type !== I.ParticipantTypes.ACTIVITY && r.default.selectParticipant(m, t.id)
        })(e)
      }, d)
    })
  })
}
var g = function(e) {
  let {
    voiceChannelId: t,
    idle: n
  } = e, r = (0, l.useStateFromStores)([f.default], () => f.default.pipWindows), s = Array.from(r.values()), d = (0, l.useStateFromStoresArray)([p.default], () => p.default.getAllActiveStreamsForChannel(t)), u = d.filter(e => {
    var n;
    return e.ownerId !== (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
  }), c = 1 === s.length && s[0].component === v.PictureInPictureComponents.EMBED_IFRAME || 0 === u.length, I = 1 === s.length && u.length <= 1;
  return c || I ? null : (0, a.jsx)(o.Popout, {
    position: "bottom",
    renderPopout: e => (0, a.jsx)(C, {
      voiceChannelId: t,
      pipWindows: s,
      idle: n,
      ...e
    }),
    children: e => (0, a.jsx)(o.Clickable, {
      className: S.menuIcon,
      ...e,
      children: (0, a.jsx)(h.default, {
        color: i.default.unsafe_rawColors.WHITE_500.css
      })
    })
  })
}