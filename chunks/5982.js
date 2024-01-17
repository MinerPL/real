"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("803816"),
  i = n("685665"),
  r = n("653047"),
  o = n("671071"),
  u = n("271938"),
  d = n("824563"),
  c = n("49111"),
  f = n("450484"),
  E = n("738766"),
  _ = e => {
    var t;
    let {
      channel: n,
      message: _,
      hideParty: T
    } = e, {
      analyticsLocations: I
    } = (0, i.default)(), m = (0, l.useStateFromStores)([u.default], () => u.default.getId()), N = (0, l.useStateFromStores)([d.default], () => {
      if (null == _.application) return d.default.findActivity(_.author.id, e => e.type === c.ActivityTypes.LISTENING);
      {
        var e;
        let t = _.author.id;
        return (null === (e = _.activity) || void 0 === e ? void 0 : e.type) === c.ActivityActionTypes.JOIN_REQUEST && (t = t === m && n.isPrivate() ? n.getRecipientId() : m), d.default.getApplicationActivity(t, _.application.id)
      }
    }, [_, n, m]);
    return (0, s.jsx)(a.default, {
      className: E.container,
      activity: N,
      activityActionType: null != _.activity ? _.activity.type : null,
      partyId: null != _.activity ? _.activity.party_id : null,
      userId: _.author.id,
      application: null != (t = _).application ? r.default.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, f.isSpotifyParty)(t.activity.party_id) ? o.SpotifyApplication : void 0,
      message: _,
      channelId: n.id,
      guildId: n.getGuildId(),
      hideParty: T,
      isSender: _.author.id === m,
      analyticsLocations: I
    })
  }