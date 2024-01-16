"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("429928"),
  i = n("36539"),
  s = n("502651"),
  l = n("671071"),
  a = n("322631"),
  o = n("947297");

function u(e) {
  return (0, i.default)(e) ? o.XBOX_APPLICATION_ID_PREFIX + e.name : (0, r.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, s.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
}