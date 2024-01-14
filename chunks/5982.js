"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("803816"),
  i = n("685665"),
  r = n("653047"),
  o = n("671071"),
  u = n("271938"),
  d = n("824563"),
  c = n("49111"),
  f = n("450484"),
  m = n("738766"),
  E = e => {
    var t;
    let {
      channel: n,
      message: E,
      hideParty: _
    } = e, {
      analyticsLocations: h
    } = (0, i.default)(), p = (0, s.useStateFromStores)([u.default], () => u.default.getId()), I = (0, s.useStateFromStores)([d.default], () => {
      if (null == E.application) return d.default.findActivity(E.author.id, e => e.type === c.ActivityTypes.LISTENING);
      {
        var e;
        let t = E.author.id;
        return (null === (e = E.activity) || void 0 === e ? void 0 : e.type) === c.ActivityActionTypes.JOIN_REQUEST && (t = t === p && n.isPrivate() ? n.getRecipientId() : p), d.default.getApplicationActivity(t, E.application.id)
      }
    }, [E, n, p]);
    return (0, a.jsx)(l.default, {
      className: m.container,
      activity: I,
      activityActionType: null != E.activity ? E.activity.type : null,
      partyId: null != E.activity ? E.activity.party_id : null,
      userId: E.author.id,
      application: null != (t = E).application ? r.default.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, f.isSpotifyParty)(t.activity.party_id) ? o.SpotifyApplication : void 0,
      message: E,
      channelId: n.id,
      guildId: n.getGuildId(),
      hideParty: _,
      isSender: E.author.id === p,
      analyticsLocations: h
    })
  }