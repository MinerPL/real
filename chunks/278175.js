"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var i, l, s = n("37983"),
  r = n("884691"),
  a = n("414456"),
  o = n.n(a),
  u = n("461380"),
  d = n("129722"),
  c = n("859971"),
  f = n("184692"),
  m = n("89050"),
  h = n("721013");
(l = i || (i = {}))[l.START = 0] = "START", l[l.PLAYHEAD = 1] = "PLAYHEAD", l[l.END = 2] = "END";
var g = r.memo(function(e) {
  let {
    playing: t,
    onPausePlayback: n,
    onPlaybackChange: i,
    onChangePosition: l,
    disabled: a = !1
  } = e, g = {
    ...m.defaultWaveformConfig
  }, {
    audio: E
  } = (0, d.useAudioTrimmerStore)(), S = null != E, p = r.useRef(null), v = r.useRef(null), _ = r.useRef(null), [N, C] = r.useState(0), [A, b] = r.useState(0), [I, O] = r.useState(0), [w, x] = r.useState(!1), [L, D] = r.useState(!1), [U, T] = r.useState(!1), [M, R] = r.useState(0), [y, P] = r.useState(-1), k = r.useMemo(() => M / g.fineTuningScale, [g.fineTuningScale, M]);
  r.useEffect(() => {
    if (null == E) return;
    let e = 1e3 * E.duration;
    C(0), b(0), O(e), R(e)
  }, [E]);
  let F = r.useCallback((e, t) => {
      if (n(), 0 === e.button) switch (t) {
        case 0:
          x(!0);
          break;
        case 1:
          D(!0);
          break;
        case 2:
          T(!0)
      }
    }, [n]),
    j = r.useCallback(e => {
      switch (e) {
        case 0:
          x(!1);
          break;
        case 1:
          D(!1);
          break;
        case 2:
          T(!1)
      }
      P(-1)
    }, []),
    V = r.useCallback(e => {
      if (null == E || !w) return;
      let t = parseInt(e.target.value),
        n = t > I ? I : t;
      i((0, c.toSeconds)(n)), C(n), b(n)
    }, [E, i, I, w]),
    B = r.useCallback(e => {
      if (null == E || !L) return;
      let t = parseInt(e.target.value);
      t < N ? (i((0, c.toSeconds)(N)), b(N)) : t > I ? (i((0, c.toSeconds)(I)), b(I)) : (i((0, c.toSeconds)(t)), b(t))
    }, [E, i, I, L, N]),
    G = r.useCallback(e => {
      if (null == E || !U) return;
      let t = parseInt(e.target.value),
        n = t > N ? t : N;
      i((0, c.toSeconds)(N)), b(N), O(n)
    }, [E, i, U, N]);
  return r.useEffect(() => {
    null != l && S && l({
      startPositionMs: N,
      endPositionMs: I,
      playheadPositionMs: A
    })
  }, [N, I, l, S, A]), r.useEffect(() => {
    let e;
    if (null != E) return t && (e = setInterval(() => {
      E.currentTime < (0, c.toSeconds)(I) ? E.currentTime >= (0, c.toSeconds)(A) && b(1e3 * E.currentTime) : (n((0, c.toSeconds)(N)), b(N))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [E, I, n, A, t, N]), r.useEffect(() => {
    if (g.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      w && N == N && -1 === y ? P(N) : U && I == I && -1 === y ? P(I) : L && A == A && -1 === y && P(A)
    }, g.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [g.fineTuningDelay, U, I, y, L, A, w, N]), (0, s.jsxs)("div", {
    className: o(h.timeline, {
      [h.initialized]: S
    }),
    children: [(0, s.jsxs)("div", {
      className: h.rangeHandleContainer,
      children: [(0, s.jsxs)("div", {
        className: h.rangeHandleFrame,
        children: [(0, s.jsx)("input", {
          ref: p,
          className: o(h.rangeHandle, h.rangeHandleStart),
          type: "range",
          min: (0, c.getMinValue)(y, k, M),
          max: (0, c.getMaxValue)(y, k, M),
          value: N,
          onChange: V,
          onMouseDown: e => F(e, 0),
          onMouseUp: () => j(0),
          disabled: !S || a
        }), (0, s.jsx)("input", {
          ref: _,
          className: o(h.rangeHandle, h.rangeHandleEnd),
          type: "range",
          min: (0, c.getMinValue)(y, k, M),
          max: (0, c.getMaxValue)(y, k, M),
          value: I,
          onChange: G,
          onMouseDown: e => F(e, 2),
          onMouseUp: () => j(2),
          disabled: !S || a
        })]
      }), (0, s.jsx)("div", {
        className: h.handlePlayheadTrack,
        children: (0, s.jsx)("input", {
          ref: v,
          className: o(h.rangeHandle, h.rangeHandlePlayhead),
          type: "range",
          min: (0, c.getMinValue)(y, k, M),
          max: (0, c.getMaxValue)(y, k, M),
          value: A,
          onChange: B,
          onMouseDown: e => F(e, 1),
          onMouseUp: () => j(1),
          disabled: !S || a
        })
      })]
    }), (0, s.jsxs)("div", {
      className: h.handleContainer,
      children: [(0, s.jsxs)("div", {
        className: o(h.handleFrame, {
          [h.startDragging]: w,
          [h.endDragging]: U
        }),
        style: {
          left: "".concat((0, c.getStartHandleValue)(N, y, k, M), "%"),
          right: "".concat((0, c.getEndHandleValue)(I, y, k, M), "%")
        },
        children: [(0, s.jsx)("div", {
          className: o(h.handleIconFrame, h.handleIconFrameStart),
          children: (0, s.jsx)("div", {
            className: o(h.handleIconContainer, h.start),
            children: (0, s.jsx)(u.default, {
              direction: u.default.Directions.RIGHT,
              className: h.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, s.jsx)("div", {
          className: o(h.handleIconFrame, h.handleIconFrameEnd),
          children: (0, s.jsx)("div", {
            className: o(h.handleIconContainer, h.end),
            children: (0, s.jsx)(u.default, {
              direction: u.default.Directions.LEFT,
              className: h.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: h.playheadTrack,
        children: (0, s.jsx)("div", {
          className: o(h.playhead, {
            [h.dragging]: L || w || U || t
          }),
          style: {
            left: "".concat((0, c.getStartHandleValue)(A, y, k, M), "%")
          }
        })
      })]
    }), (0, s.jsx)("div", {
      className: h.waveformContainer,
      children: (0, s.jsx)(f.default, {
        fineTuning: y,
        fineTuningResolution: k,
        duration: M
      })
    })]
  })
})