"use strict";
n.r(t), n.d(t, {
  extractDisplayName: function() {
    return A
  },
  default: function() {
    return R
  }
});
var a = n("917351"),
  s = n.n(a),
  i = n("446674"),
  l = n("913144"),
  r = n("629109"),
  o = n("374363"),
  u = n("773336"),
  d = n("42887"),
  c = n("49111"),
  f = n("353927");
let E = {},
  _ = E,
  h = !1,
  C = {},
  I = {},
  T = {},
  S = {
    id: null,
    justChanged: !1
  },
  m = {
    id: null,
    justChanged: !1
  },
  p = /\(([^)]+)\)/;

function A(e) {
  if ((0, u.getPlatform)() === u.PlatformTypes.WINDOWS) {
    let t = e.name.match(p);
    if (null != t) return t[1]
  }
  return e.name
}

function g(e, t, n) {
  return null == e || e.displayName !== t ? {
    displayName: t,
    type: n
  } : e.type === c.ConnectedDeviceType.INPUT && n === c.ConnectedDeviceType.OUTPUT || e.type === c.ConnectedDeviceType.OUTPUT && n === c.ConnectedDeviceType.INPUT ? {
    displayName: t,
    type: c.ConnectedDeviceType.INPUT_AND_OUTPUT
  } : e
}
class N extends i.default.DeviceSettingsStore {
  initialize(e) {
    this.waitFor(d.default, o.default), _ = null != e ? e : E
  }
  getUserAgnosticState() {
    return _
  }
  get initialized() {
    return h
  }
  get lastDeviceConnected() {
    return T
  }
  get inputDevices() {
    return C
  }
  get lastInputSystemDevice() {
    return S
  }
  get outputDevices() {
    return I
  }
  get lastOutputSystemDevice() {
    return m
  }
}
N.displayName = "ConnectedDeviceStore", N.persistKey = "ConnectedDeviceStore";
var R = new N(l.default, {
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n
    } = e, a = {};
    S.justChanged = !1, t.forEach(e => {
      if (a[A(e)] = e.id, e.id === f.DEFAULT_DEVICE_ID) {
        var t;
        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
        n !== S.id && (S.justChanged = !0), S.id = n
      }
    });
    let i = {};
    if (m.justChanged = !1, n.forEach(e => {
        if (i[A(e)] = e.id, e.id === f.DEFAULT_DEVICE_ID) {
          var t;
          let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
          n !== m.id && (m.justChanged = !0), m.id = n
        }
      }), !h) {
      C = a, I = i, h = !0;
      return
    }
    let l = Object.keys(C),
      r = Object.keys(a),
      o = Object.keys(I),
      u = Object.keys(i),
      d = s.difference(l, r),
      E = s.difference(o, u);
    if (d.length > 0 || E.length > 0) T = {};
    else {
      let e = s.difference(r, l);
      e.forEach(e => {
        T[e] = g(T[e], e, c.ConnectedDeviceType.INPUT)
      });
      let t = s.difference(u, o);
      t.forEach(e => {
        T[e] = g(T[e], e, c.ConnectedDeviceType.OUTPUT)
      })
    }
    return !(s.isEqual(l, r) && s.isEqual(o, u)) && (C = a, I = i, !0)
  },
  CONNECTED_DEVICE_SET: function(e) {
    let {
      displayName: t,
      connectedDevicePreference: n,
      location: a
    } = e;
    ! function(e, t, n) {
      if (t === c.ConnectedDevicePreference.INPUT || t === c.ConnectedDevicePreference.INPUT_AND_OUTPUT) {
        let t = C[e];
        null != t && l.default.wait(() => r.default.setInputDevice(t, n))
      }
      if (t === c.ConnectedDevicePreference.OUTPUT || t === c.ConnectedDevicePreference.INPUT_AND_OUTPUT) {
        let t = I[e];
        l.default.wait(() => r.default.setOutputDevice(t, n))
      }
    }(t, n, a), delete T[t]
  },
  CONNECTED_DEVICE_IGNORE: function(e) {
    let {
      displayName: t
    } = e;
    delete T[t]
  },
  CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
    T = {}, _ = {
      neverShowModal: !0
    }
  }
})