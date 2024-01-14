"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("677935"),
  a = n.n(s),
  o = n("793722"),
  l = n("441822");

function u(e) {
  let {
    streamId: t,
    paused: n,
    onReady: s,
    onResize: u,
    className: c,
    ...d
  } = e, f = r.useRef(null), E = r.useRef({
    width: 0,
    height: 0
  });
  r.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return (0, o.registerActiveSink)(t), e.srcObject = (0, l.getVideoStream)(t), () => {
      (0, o.unregisterActiveSink)(t), e.srcObject = null, e.load()
    }
  }, [t]), r.useEffect(() => {
    var e, i;
    return n ? (null === (e = f.current) || void 0 === e || e.pause(), (0, o.unregisterActiveSink)(t)) : null === (i = f.current) || void 0 === i || i.play().catch(() => {}), () => {
      n && (0, o.registerActiveSink)(t)
    }
  }, [n]);
  let h = r.useCallback(() => {
    var e, t, n, i;
    let {
      width: r,
      height: s
    } = E.current, a = null !== (n = null === (e = f.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, o = null !== (i = null === (t = f.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
    if (r !== a || s !== o) {
      let e = {
        width: a,
        height: o
      };
      null == u || u(e), E.current = e
    }
  }, [u]);
  r.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return e.addEventListener("resize", h), () => e.removeEventListener("resize", h)
  }, [h]);
  let p = r.useCallback(() => {
      null == s || s()
    }, [s]),
    _ = r.useCallback(e => {
      !n && e.currentTarget.play()
    }, [n]);
  return (0, i.jsx)("video", {
    className: a("media-engine-video", c),
    ref: f,
    autoPlay: !0,
    onPause: _,
    onCanPlayThrough: p,
    muted: !0,
    ...d
  })
}
u.defaultProps = {
  paused: !1
}