"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("222007"), a("424973");
var n = a("37983"),
  l = a("884691"),
  i = a("917351"),
  r = a("31695"),
  s = a("58608"),
  u = a("756458");

function o(e) {
  let {
    setRef: t,
    audioTrackLabel: a,
    src: i,
    muted: r
  } = e, s = l.useCallback(e => {
    t(e, a)
  }, [t, a]), o = l.useCallback(e => {
    Object.values(e.currentTarget.audioTracks).forEach(e => {
      e.enabled = a === e.label
    })
  }, [a]);
  return (0, n.jsx)("audio", {
    id: "ClipsPlayerAudioTrack:".concat(a),
    className: u.hidden,
    ref: s,
    src: i,
    muted: r,
    preload: "auto",
    onLoadedMetadata: o
  })
}
var d = l.forwardRef(function(e, t) {
  let {
    src: a,
    audioSrc: d,
    applicationAudioEnabled: c,
    voiceAudioEnabled: f,
    isLoading: m,
    onDoneLoading: v,
    startTime: E = 0,
    endTime: p
  } = e, h = l.useRef({}), [C, N] = l.useState([]), x = l.useRef(!1), S = l.useCallback(() => {
    let e = h.current.main;
    if (null == e) return;
    let t = (0, i.round)(e.currentTime, 3),
      a = (0, i.round)(E, 3),
      n = null != p ? (0, i.round)(p, 3) : (0, i.round)(e.duration, 3);
    if (t >= n || t < a) {
      for (let e of Object.values(h.current)) null != e && (e.currentTime = E);
      return !0
    }
  }, [E, p]);
  (0, r.default)(() => {
    if (x.current) {
      let e = S();
      e && I()
    }
  });
  let I = l.useCallback(() => {
      for (let e of (x.current = !0, S(), Object.values(h.current))) null != e && e.play()
    }, [S]),
    g = l.useCallback(() => {
      for (let e of Object.values(h.current)) null != e && e.pause()
    }, []),
    _ = l.useCallback(e => {
      var t;
      for (let a of ((null === (t = h.current.main) || void 0 === t ? void 0 : t.paused) && (x.current = !1), Object.values(h.current))) null != a && (a.currentTime = e)
    }, []),
    L = l.useCallback(() => {
      var e;
      (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused) ? I(): g()
    }, [I, g]),
    M = l.useCallback(e => {
      h.current.main = e
    }, []),
    T = l.useCallback(e => {
      let t = [];
      for (let a of Object.values(e.currentTarget.audioTracks)) a.label.includes(":application") ? a.enabled = !0 : a.label.includes(":voice") ? (a.enabled = !1, !t.includes(a.label) && t.push(a.label)) : a.enabled = !1;
      N(t)
    }, []),
    A = l.useCallback((e, t) => {
      h.current[t] = e
    }, []);
  return (l.useImperativeHandle(t, () => ({
    play: I,
    seek: _,
    pause: g,
    videoElement: h.current.main
  })), null == a) ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.default, {
      onClick: L,
      className: m ? u.hidden : u.displayVideo,
      ref: M,
      src: a,
      muted: !c,
      onLoadedMetadata: T,
      onLoadedData: v,
      preload: "auto"
    }), C.map(e => (0, n.jsx)(o, {
      audioTrackLabel: e,
      setRef: A,
      src: d,
      muted: !f
    }, e))]
  })
})