"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("917351"),
  i = n.n(s),
  l = n("77078"),
  r = n("533222"),
  o = n("113605"),
  u = n("42887"),
  d = n("353927");
let c = new Set(["DisplayPort"]),
  E = !1;

function f() {
  let e;
  if (E) return;
  let t = u.default.getInputDeviceId(),
    s = u.default.getOutputDeviceId();
  if (o.default.getState().neverShowModal || i.isEmpty(o.default.lastDeviceConnected)) return;
  let f = (0, o.extractDisplayName)(u.default.getInputDevices()[t]),
    _ = (0, o.extractDisplayName)(u.default.getOutputDevices()[s]),
    h = i.some(o.default.lastDeviceConnected, e => c.has(e.displayName) || e.displayName === f || e.displayName === _);
  if (h) return;
  let C = i.some(o.default.lastDeviceConnected, e => r.default.isCertified(o.default.inputDevices[e.displayName]) || r.default.isCertified(o.default.outputDevices[e.displayName])),
    T = t === d.DEFAULT_DEVICE_ID && o.default.lastInputSystemDevice.justChanged || s === d.DEFAULT_DEVICE_ID && o.default.lastOutputSystemDevice.justChanged;
  if (T && !C) return;
  let I = i.first(Object.keys(o.default.lastDeviceConnected)),
    S = null != I && "" !== I ? o.default.lastDeviceConnected[I] : null;
  null != S && (o.default.initialized && null != I && (r.default.isCertified(o.default.inputDevices[I]) ? e = r.default.getCertifiedDevice(o.default.inputDevices[I]) : r.default.isCertified(o.default.outputDevices[I]) && (e = r.default.getCertifiedDevice(o.default.outputDevices[I]))), E = !0, (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("134064").then(n.bind(n, "134064"));
    return n => {
      let {
        transitionState: s,
        onClose: i
      } = n;
      return (0, a.jsx)(t, {
        device: S,
        certifiedDeviceMetadata: e,
        transitionState: s,
        onClose: () => (E = !1, i())
      })
    }
  }))
}
var _ = {
  init() {
    o.default.addChangeListener(f)
  }
}