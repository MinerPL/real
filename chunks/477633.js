"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  r = n.n(s),
  a = n("917351"),
  o = n("819855"),
  u = n("77078"),
  d = n("841098"),
  c = n("449918"),
  f = n("302185"),
  m = n("89050"),
  h = n("843455"),
  g = n("353295"),
  E = l.memo(function(e) {
    let {
      file: t,
      audio: n,
      className: s,
      waveformSettings: E
    } = e, [S, p] = l.useState({
      width: 0,
      height: 0
    }), v = l.useRef(null), _ = l.useMemo(() => {
      var e;
      let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
      return {
        fineTuning: -1,
        fineTuningResolution: t / m.defaultWaveformConfig.fineTuningScale,
        duration: t,
        ...null != E ? E : {}
      }
    }, [n, E]), N = (0, f.useAudioBufferData)(t), C = (0, f.useAudioWaveformData)(N, v.current, _), A = (0, d.default)(), b = (0, c.useColorValue)((0, o.isThemeDark)(A) ? h.Color.PRIMARY_300 : h.Color.PRIMARY_700), I = null == N || null == C, O = 0 === S.width || 0 === S.height, w = (O || I) && null != t, x = l.useCallback(() => {
      null != v.current && p({
        width: v.current.offsetWidth,
        height: v.current.offsetHeight
      })
    }, []);
    return l.useEffect(() => {
      if (null != v.current) {
        let e = new ResizeObserver((0, a.debounce)(x, 50));
        return e.observe(v.current), () => {
          e.disconnect()
        }
      }
    }, [x]), l.useEffect(() => {
      if (null == v.current) return;
      let e = v.current,
        t = e.getContext("2d");
      if (null == t) return;
      let {
        width: n,
        height: i
      } = e;
      if (0 !== S.width && 0 !== S.height && null != C && C.length > 0) {
        let e = n / C.length,
          l = -(e * (m.defaultWaveformConfig.waveformBarWidth - 1));
        t.clearRect(0, 0, n, i), t.fillStyle = b.hex;
        for (let n = 0; n < C.length; n++) {
          let s = C[n] * i,
            r = n * e + l,
            a = i / 2 - s / 2;
          t.fillRect(r, a, e - l, s)
        }
      }
    }, [b, S, A, C]), (0, i.jsxs)("div", {
      className: r(g.container, s),
      children: [(0, i.jsx)("canvas", {
        className: g.waveformCanvas,
        ref: v,
        width: 4 * S.width,
        height: 4 * S.height
      }), w && (0, i.jsx)("div", {
        className: g.loading,
        children: (0, i.jsx)(u.Spinner, {
          type: u.SpinnerTypes.SPINNING_CIRCLE
        })
      })]
    })
  })