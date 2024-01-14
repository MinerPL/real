"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  r = n.n(s),
  a = n("77078"),
  o = n("132755"),
  u = n("78404"),
  d = n("812809"),
  c = n("129722"),
  f = n("278175"),
  m = n("859971"),
  h = n("846325"),
  g = n("193326");
let E = {
  startPositionMs: 0,
  endPositionMs: 2e4,
  playheadPositionMs: 0
};
var S = l.memo(function(e) {
  var t;
  let {
    className: n,
    volume: s,
    disabled: S = !1,
    onChange: p
  } = e, {
    audio: v
  } = (0, c.useAudioTrimmerStore)(), [_, N] = l.useState(!1), [C, A] = l.useState(E), {
    playheadPositionMs: b,
    endPositionMs: I,
    startPositionMs: O
  } = C, w = null != v, x = I - O, L = x > 1e3 * h.MAX_SOUND_LENGTH_SECONDS;
  l.useEffect(() => {
    null != v && A({
      playheadPositionMs: 0,
      endPositionMs: 1e3 * v.duration,
      startPositionMs: 0
    })
  }, [v]);
  let D = l.useCallback(e => {
      null != v && (v.pause(), null != e && (v.currentTime = e), N(!1))
    }, [v]),
    U = l.useCallback(() => {
      if (null != v) {
        if (_) {
          D();
          return
        }
        b >= I ? v.currentTime = (0, m.toSeconds)(O) : v.currentTime = (0, m.toSeconds)(b), v.volume = (0, d.default)(s), v.play(), N(!0)
      }
    }, [v, I, D, b, _, O, s]),
    T = l.useCallback(e => {
      A(e), null == p || p({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [p]),
    M = l.useCallback(e => {
      null != v && (v.currentTime = e)
    }, [v]);
  return (0, i.jsxs)("div", {
    className: r(g.container, {
      [g.initialized]: w,
      [g.disabled]: !w || S
    }, n),
    children: [(0, i.jsxs)("div", {
      className: g.playButtonContainer,
      children: [(0, i.jsx)(a.Clickable, {
        className: g.playButton,
        onClick: w ? U : void 0,
        children: _ ? (0, i.jsx)(u.default, {
          className: g.playButtonIcon
        }) : (0, i.jsx)(o.default, {
          className: g.playButtonIcon
        })
      }), (0, i.jsx)("div", {
        className: g.durationContainer,
        children: (0, i.jsx)(a.Text, {
          className: g.duration,
          variant: "text-xs/normal",
          color: L ? "text-warning" : "text-positive",
          children: (t = x, "".concat((0, m.toSeconds)(t).toFixed(2), "s"))
        })
      })]
    }), (0, i.jsx)(f.default, {
      playing: _,
      onPlaybackChange: M,
      onPausePlayback: D,
      onChangePosition: T,
      disabled: S
    })]
  })
})