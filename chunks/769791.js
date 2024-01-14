"use strict";
n.r(e), n.d(e, {
  openPremiumSite: function() {
    return l
  },
  openTrack: function() {
    return a
  },
  openAlbum: function() {
    return d
  },
  openArtist: function() {
    return c
  }
}), n("70102");
var i = n("968194"),
  o = n("773336"),
  r = n("155815"),
  s = n("450484");

function u(t, e, n) {
  let u;
  !(0, o.isDesktop)() && (u = window.open("", "_blank")), (0, i.getMetadata)(t, e).then(t => n(t)).then(t => {
    let {
      resourceType: e,
      resourceId: n
    } = t, i = r.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(e, n) : s.SpotifyEndpoints.WEB_OPEN(e, n);
    null != u ? u.location.href = i : window.open(i)
  }).catch(() => {
    null != u && u.close()
  })
}

function l() {
  window.open(s.SpotifyEndpoints.PREMIUM_SITE)
}

function a(t) {
  let {
    sync_id: e
  } = t;
  if (null == e) return;
  let n = s.SpotifyResourceTypes.TRACK,
    i = r.default.isProtocolRegistered() ? s.SpotifyEndpoints.PLAYER_OPEN(n, e) : s.SpotifyEndpoints.WEB_OPEN(n, e);
  window.open(i)
}

function d(t, e) {
  u(t, e, t => {
    let {
      album_id: e
    } = t;
    if (null == e) throw Error("no album id in metadata");
    return {
      resourceType: s.SpotifyResourceTypes.ALBUM,
      resourceId: e
    }
  })
}

function c(t, e, n) {
  u(t, e, t => {
    let {
      artist_ids: e
    } = t;
    if (null == e) throw Error("no artist ids in metadata");
    let i = e[n];
    if (null == i) throw Error("invalid artist index");
    return {
      resourceType: s.SpotifyResourceTypes.ARTIST,
      resourceId: i
    }
  })
}