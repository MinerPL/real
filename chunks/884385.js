"use strict";
i.r(t), i.d(t, {
  isSpotifyPlayable: function() {
    return f
  },
  ensureSpotifyPlayable: function() {
    return _
  },
  isSpotifyPremium: function() {
    return E
  },
  ensureSpotifyPremium: function() {
    return I
  }
}), i("70102"), i("860677"), i("222007");
var n = i("376556"),
  l = i("568307"),
  a = i("718517"),
  u = i("613691"),
  r = i("155815"),
  d = i("662285"),
  o = i("450484"),
  s = i("49111");
let c = 30 * a.default.Millis.SECOND;

function f(e) {
  return null != e.getActiveSocketAndDevice() || r.default.isProtocolRegistered()
}

function _() {
  let e = d.default.getActiveSocketAndDevice();
  if (null != e) return Promise.resolve(e);
  if (!r.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
  let t = d.default.getPlayableComputerDevices();
  if (l.default.isObservedAppRunning(n.default.get(s.PlatformTypes.SPOTIFY).name) && t.length > 0) {
    let {
      socket: e,
      device: i
    } = t[0];
    return (0, u.setActiveDevice)(e.accountId, i.id), Promise.resolve({
      socket: e,
      device: i
    })
  }
  return new Promise((e, i) => {
    let n = setTimeout(() => {
        d.default.removeChangeListener(l), i(Error("timeout launching spotify"))
      }, c),
      l = () => {
        let i = d.default.getPlayableComputerDevices();
        for (let {
            socket: a,
            device: r
          }
          of i) null == t.find(e => e.device.id === r.id) && (clearTimeout(n), d.default.removeChangeListener(l), setImmediate(() => {
          (0, u.setActiveDevice)(a.accountId, r.id), e({
            socket: a,
            device: r
          })
        }))
      };
    d.default.addChangeListener(l), window.open("".concat(o.SPOTIFY_APP_PROTOCOL, ":"))
  })
}

function E() {
  let e = d.default.getActiveSocketAndDevice();
  if (null == e) return null;
  let {
    socket: t
  } = e;
  return t.isPremium
}

function I() {
  let e = d.default.getActiveSocketAndDevice();
  if (null == e) return Promise.reject(Error("no active profile"));
  let {
    socket: t
  } = e;
  return t.isPremium ? Promise.resolve() : (0, u.getProfile)(t.accountId, t.accessToken).then(() => {
    if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"))
  })
}