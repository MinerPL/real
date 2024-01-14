"use strict";
i.r(t), i.d(t, {
  default: function() {
    return l
  }
});
var n = i("884385");

function l(e, t, i, l) {
  var a, u, r;
  let d = e.hasConnectedAccount(),
    o = (0, n.isSpotifyPlayable)(e),
    s = e.getTrack(),
    c = e.getSyncingWith(),
    f = e.getActivity(),
    _ = null !== (r = null !== (u = null == s ? void 0 : s.id) && void 0 !== u ? u : null == f ? void 0 : f.sync_id) && void 0 !== r ? r : e.getLastPlayedTrackId();
  return {
    user: i,
    activity: l,
    hasSpotifyAccount: d,
    canPlaySpotify: o,
    notPlayable: d && !o,
    syncingWithParty: (null == f ? void 0 : f.party) != null && (null == l ? void 0 : null === (a = l.party) || void 0 === a ? void 0 : a.id) === f.party.id,
    syncingWithUser: (null == c ? void 0 : c.userId) != null && (null == c ? void 0 : c.userId) === i.id,
    isCurrentUser: i.id === t.getId(),
    currentUserTrackId: _,
    playingSameTrack: null != _ && _ === (null == l ? void 0 : l.sync_id)
  }
}