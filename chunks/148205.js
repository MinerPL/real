"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  o = n("242740"),
  u = n("889014"),
  d = n("848848"),
  c = n("300322"),
  f = n("957255"),
  h = n("800762"),
  p = n("887657"),
  m = n("664336"),
  E = n("659500"),
  C = n("49111"),
  g = n("782340"),
  S = l.memo(function(e) {
    let {
      channel: t
    } = e, n = (0, u.default)(), s = (0, r.useStateFromStores)([h.default], () => h.default.isInChannel(t.id)), S = (0, r.useStateFromStores)([h.default], () => !i.isEmpty(h.default.getVoiceStatesForChannel(t.id))), _ = (0, r.useStateFromStores)([f.default], () => f.default.can(C.Permissions.CONNECT, t)), {
      needSubscriptionToAccess: I
    } = (0, d.default)(t.id), T = (0, c.useIsActiveChannelOrUnarchivableThread)(t), v = l.useCallback(() => {
      o.default.handleVoiceConnect({
        channel: t,
        connected: s,
        needSubscriptionToAccess: I,
        locked: !1
      })
    }, [t, s, I]);
    return (l.useEffect(() => (E.ComponentDispatch.subscribe(C.ComponentActions.CALL_START, v), () => {
      E.ComponentDispatch.unsubscribe(C.ComponentActions.CALL_START, v)
    }), [v]), c.VoiceInThreadsExperiment.useExperiment({
      guildId: t.guild_id,
      location: "63250c_1"
    }, {
      autoTrackExposure: !1
    }).enabled && !n && !s && _ && T && t.isVocalThread()) ? (0, a.jsx)(m.default.Icon, {
      icon: p.default,
      onClick: v,
      tooltip: S ? g.default.Messages.JOIN_VOICE_CALL : g.default.Messages.START_VOICE_CALL
    }) : null
  })