"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var s = n("913144"),
  i = n("600965"),
  l = n("316272"),
  r = n("191225"),
  o = n("292687"),
  u = n("373469"),
  d = n("42203"),
  c = n("778588"),
  f = n("42887"),
  E = n("449501"),
  _ = n("945956"),
  h = n("18494"),
  C = n("162771"),
  I = n("800762"),
  T = n("49111"),
  S = n("353927");

function m() {
  var e;
  let t = a;
  if (null == t || !E.default.isOpen(t)) return !1;
  s.default.wait(() => i.close(t)), null === (e = _.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), a = null
}

function p() {
  let e = _.default.getChannelId(),
    t = a === e;
  return function() {
    let e = _.default.getChannelId(),
      t = h.default.getChannelId(),
      n = f.default.supports(S.Features.VIDEO);
    if (!n) return !0;
    let a = o.default.getWindowOpen(T.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
    if (a) return !0;
    let s = u.default.getAllActiveStreams().length > 0,
      i = null != e && Object.values(I.default.getVideoVoiceStatesForChannel(e)).some(e => {
        let {
          userId: t
        } = e;
        return !f.default.isLocalVideoDisabled(t)
      });
    if (!(i || s)) return !0;
    let l = c.default.hasLayers(),
      r = l && c.default.getLayers().includes(T.Layers.RTC_DEBUG);
    if (r) return !1;
    if (l) return !0;
    let d = e === t;
    return !!d || !1
  }() ? m() : (!t && m(), null != e && function(e) {
    var t;
    let n = d.default.getChannel(e);
    if (null == n || E.default.isOpen(e)) return !1;
    s.default.wait(() => i.open(n.id, T.PictureInPictureComponents.VIDEO, {
      channel: n
    })), null === (t = _.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), a = e
  }(e))
}
class A extends l.default {
  _initialize() {
    h.default.addChangeListener(p), C.default.addChangeListener(p), _.default.addChangeListener(p), I.default.addChangeListener(p), c.default.addChangeListener(p), u.default.addChangeListener(p), o.default.addChangeListener(p), f.default.addChangeListener(p), r.default.addChangeListener(p)
  }
  _terminate() {
    h.default.removeChangeListener(p), C.default.removeChangeListener(p), _.default.removeChangeListener(p), I.default.removeChangeListener(p), c.default.removeChangeListener(p), u.default.removeChangeListener(p), o.default.removeChangeListener(p), f.default.removeChangeListener(p), r.default.removeChangeListener(p)
  }
}
var g = new A