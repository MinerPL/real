"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("77078"),
  l = n("271938"),
  r = n("662285"),
  o = n("629414"),
  u = n("53887"),
  d = n("486150"),
  c = n("555759"),
  f = n("450484"),
  E = n("782340");

function _(e, t, n) {
  let _ = (0, s.useStateFromStores)([r.default, l.default], () => null != t ? (0, u.default)(r.default, l.default, t, e) : void 0, [e, t]);
  if (null == _ || null == e || null == t) return null;
  let h = _.isCurrentUser || _.notPlayable || _.playingSameTrack,
    C = _.isCurrentUser || _.syncingWithUser || _.syncingWithParty;
  return [(0, a.jsx)(i.MenuItem, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, c.default)(_, f.SpotifyActionTypes.USER_ACTIVITY_PLAY, n),
    label: E.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
    subtext: h ? (0, o.default)(_, f.SpotifyActionTypes.USER_ACTIVITY_PLAY) : void 0,
    disabled: h
  }, "spotify-play-".concat(e.session_id)), _.canPlaySpotify ? (0, a.jsx)(i.MenuItem, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, d.default)(_, f.SpotifyActionTypes.USER_ACTIVITY_SYNC, n),
    label: E.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
    subtext: C ? (0, o.default)(_, f.SpotifyActionTypes.USER_ACTIVITY_SYNC) : void 0,
    disabled: C
  }, "spotify-sync-".concat(e.session_id)) : null]
}