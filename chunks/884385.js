"use strict";
i.r(t), i.d(t, {
  isSpotifyPlayable: function() {
    return s
  },
  ensureSpotifyPlayable: function() {
    return c
  },
  isSpotifyPremium: function() {
    return f
  },
  ensureSpotifyPremium: function() {
    return _
  }
}), i("70102"), i("860677"), i("222007");
var n = i("376556"),
  l = i("568307"),
  a = i("613691"),
  u = i("155815"),
  r = i("662285"),
  d = i("450484"),
  o = i("49111");

function s(e) {
  return null != e.getActiveSocketAndDevice() || u.default.isProtocolRegistered()
}

function c() {
  let e = r.default.getActiveSocketAndDevice();
  if (null != e) return Promise.resolve(e);
  if (!u.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
  let t = r.default.getPlayableComputerDevices();
  if (l.default.isObservedAppRunning(n.default.get(o.PlatformTypes.SPOTIFY).name) && t.length > 0) {
    let {
      socket: e,
      device: i
    } = t[0];
    return (0, a.setActiveDevice)(e.accountId, i.id), Promise.resolve({
      socket: e,
      device: i
    })
  }
  return new Promise((e, i) => {
    let n = setTimeout(() => {
        r.default.removeChangeListener(l), i(Error("timeout launching spotify"))
      }, 3e4),
      l = () => {
        let i = r.default.getPlayableComputerDevices();
        for (let {
            socket: u,
            device: d
          }
          of i) null == t.find(e => e.device.id === d.id) && (clearTimeout(n), r.default.removeChangeListener(l), setImmediate(() => {
          (0, a.setActiveDevice)(u.accountId, d.id), e({
            socket: u,
            device: d
          })
        }))
      };
    r.default.addChangeListener(l), window.open("".concat(d.SPOTIFY_APP_PROTOCOL, ":"))
  })
}

function f() {
  let e = r.default.getActiveSocketAndDevice();
  if (null == e) return null;
  let {
    socket: t
  } = e;
  return t.isPremium
}

function _() {
  let e = r.default.getActiveSocketAndDevice();
  if (null == e) return Promise.reject(Error("no active profile"));
  let {
    socket: t
  } = e;
  return t.isPremium ? Promise.resolve() : (0, a.getProfile)(t.accountId, t.accessToken).then(() => {
    if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"))
  })
}