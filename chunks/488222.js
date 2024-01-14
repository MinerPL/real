"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var n = l("37983");
l("884691");
var r = l("414456"),
  i = l.n(r),
  s = l("746379"),
  a = l.n(s),
  o = l("450484"),
  d = l("590787");

function u(e) {
  let {
    className: t,
    embed: {
      url: l
    }
  } = e;
  if (null == l) return null;
  let r = null,
    s = null;
  try {
    let e = a.parse(l, !0);
    r = e.host, s = e.pathname
  } catch (e) {
    return null
  }
  if ("open.spotify.com" !== r || null == s) return null;
  let u = s.split("/"),
    c = null != u[1] ? u[1].toLowerCase() : null,
    m = null != u[3] ? u[3].toLowerCase() : null,
    h = u[4];
  if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != c ? c : "") || "user" === c && "playlist" !== m) return null;
  "user" === c && "playlist" === m && null != h && (s = "/playlist/".concat(h));
  let p = 352;
  return "track" === c ? p = 80 : ("episode" === c || "show" === c) && (p = 232), (0, n.jsx)("iframe", {
    className: i(d.embedSpotify, t),
    src: o.SpotifyEndpoints.EMBED(s),
    style: {
      width: 400,
      height: p
    },
    frameBorder: 0,
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  })
}