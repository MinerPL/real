"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i, l, s = n("37983"),
  a = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("461380"),
  d = n("718517"),
  c = n("129722"),
  f = n("859971"),
  m = n("184692"),
  h = n("89050"),
  g = n("721013");
(l = i || (i = {}))[l.START = 0] = "START", l[l.PLAYHEAD = 1] = "PLAYHEAD", l[l.END = 2] = "END";
var E = a.memo(function(e) {
  let {
    playing: t,
    onPausePlayback: n,
    onPlaybackChange: i,
    onChangePosition: l,
    disabled: r = !1
  } = e, E = {
    ...h.defaultWaveformConfig
  }, {
    audio: S
  } = (0, c.useAudioTrimmerStore)(), p = null != S, v = a.useRef(null), _ = a.useRef(null), N = a.useRef(null), [C, A] = a.useState(0), [b, I] = a.useState(0), [O, D] = a.useState(0), [w, x] = a.useState(!1), [L, U] = a.useState(!1), [T, M] = a.useState(!1), [R, y] = a.useState(0), [P, k] = a.useState(-1), F = a.useMemo(() => R / E.fineTuningScale, [E.fineTuningScale, R]);
  a.useEffect(() => {
    if (null == S) return;
    let e = S.duration * d.default.Millis.SECOND;
    A(0), I(0), D(e), y(e)
  }, [S]);
  let j = a.useCallback((e, t) => {
      if (n(), 0 === e.button) switch (t) {
        case 0:
          x(!0);
          break;
        case 1:
          U(!0);
          break;
        case 2:
          M(!0)
      }
    }, [n]),
    V = a.useCallback(e => {
      switch (e) {
        case 0:
          x(!1);
          break;
        case 1:
          U(!1);
          break;
        case 2:
          M(!1)
      }
      k(-1)
    }, []),
    B = a.useCallback(e => {
      if (null == S || !w) return;
      let t = parseInt(e.target.value),
        n = t > O ? O : t;
      i((0, f.toSeconds)(n)), A(n), I(n)
    }, [S, i, O, w]),
    G = a.useCallback(e => {
      if (null == S || !L) return;
      let t = parseInt(e.target.value);
      t < C ? (i((0, f.toSeconds)(C)), I(C)) : t > O ? (i((0, f.toSeconds)(O)), I(O)) : (i((0, f.toSeconds)(t)), I(t))
    }, [S, i, O, L, C]),
    H = a.useCallback(e => {
      if (null == S || !T) return;
      let t = parseInt(e.target.value),
        n = t > C ? t : C;
      i((0, f.toSeconds)(C)), I(C), D(n)
    }, [S, i, T, C]);
  return a.useEffect(() => {
    null != l && p && l({
      startPositionMs: C,
      endPositionMs: O,
      playheadPositionMs: b
    })
  }, [C, O, l, p, b]), a.useEffect(() => {
    let e;
    if (null != S) return t && (e = setInterval(() => {
      S.currentTime < (0, f.toSeconds)(O) ? S.currentTime >= (0, f.toSeconds)(b) && I(S.currentTime * d.default.Millis.SECOND) : (n((0, f.toSeconds)(C)), I(C))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [S, O, n, b, t, C]), a.useEffect(() => {
    if (E.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      w && C == C && -1 === P ? k(C) : T && O == O && -1 === P ? k(O) : L && b == b && -1 === P && k(b)
    }, E.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [E.fineTuningDelay, T, O, P, L, b, w, C]), (0, s.jsxs)("div", {
    className: o(g.timeline, {
      [g.initialized]: p
    }),
    children: [(0, s.jsxs)("div", {
      className: g.rangeHandleContainer,
      children: [(0, s.jsxs)("div", {
        className: g.rangeHandleFrame,
        children: [(0, s.jsx)("input", {
          ref: v,
          className: o(g.rangeHandle, g.rangeHandleStart),
          type: "range",
          min: (0, f.getMinValue)(P, F, R),
          max: (0, f.getMaxValue)(P, F, R),
          value: C,
          onChange: B,
          onMouseDown: e => j(e, 0),
          onMouseUp: () => V(0),
          disabled: !p || r
        }), (0, s.jsx)("input", {
          ref: N,
          className: o(g.rangeHandle, g.rangeHandleEnd),
          type: "range",
          min: (0, f.getMinValue)(P, F, R),
          max: (0, f.getMaxValue)(P, F, R),
          value: O,
          onChange: H,
          onMouseDown: e => j(e, 2),
          onMouseUp: () => V(2),
          disabled: !p || r
        })]
      }), (0, s.jsx)("div", {
        className: g.handlePlayheadTrack,
        children: (0, s.jsx)("input", {
          ref: _,
          className: o(g.rangeHandle, g.rangeHandlePlayhead),
          type: "range",
          min: (0, f.getMinValue)(P, F, R),
          max: (0, f.getMaxValue)(P, F, R),
          value: b,
          onChange: G,
          onMouseDown: e => j(e, 1),
          onMouseUp: () => V(1),
          disabled: !p || r
        })
      })]
    }), (0, s.jsxs)("div", {
      className: g.handleContainer,
      children: [(0, s.jsxs)("div", {
        className: o(g.handleFrame, {
          [g.startDragging]: w,
          [g.endDragging]: T
        }),
        style: {
          left: "".concat((0, f.getStartHandleValue)(C, P, F, R), "%"),
          right: "".concat((0, f.getEndHandleValue)(O, P, F, R), "%")
        },
        children: [(0, s.jsx)("div", {
          className: o(g.handleIconFrame, g.handleIconFrameStart),
          children: (0, s.jsx)("div", {
            className: o(g.handleIconContainer, g.start),
            children: (0, s.jsx)(u.default, {
              direction: u.default.Directions.RIGHT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, s.jsx)("div", {
          className: o(g.handleIconFrame, g.handleIconFrameEnd),
          children: (0, s.jsx)("div", {
            className: o(g.handleIconContainer, g.end),
            children: (0, s.jsx)(u.default, {
              direction: u.default.Directions.LEFT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: g.playheadTrack,
        children: (0, s.jsx)("div", {
          className: o(g.playhead, {
            [g.dragging]: L || w || T || t
          }),
          style: {
            left: "".concat((0, f.getStartHandleValue)(b, P, F, R), "%")
          }
        })
      })]
    }), (0, s.jsx)("div", {
      className: g.waveformContainer,
      children: (0, s.jsx)(m.default, {
        fineTuning: P,
        fineTuningResolution: F,
        duration: R
      })
    })]
  })
})