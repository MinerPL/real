"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  a = n.n(s),
  r = n("77078"),
  o = n("132755"),
  u = n("78404"),
  d = n("718517"),
  c = n("812809"),
  f = n("129722"),
  m = n("278175"),
  h = n("859971"),
  g = n("846325"),
  E = n("193326");
let S = 10 * d.default.Millis.SECOND,
  p = {
    startPositionMs: 0,
    endPositionMs: 2 * S,
    playheadPositionMs: 0
  };
var v = l.memo(function(e) {
  var t;
  let {
    className: n,
    volume: s,
    disabled: S = !1,
    onChange: v
  } = e, {
    audio: _
  } = (0, f.useAudioTrimmerStore)(), [N, C] = l.useState(!1), [A, b] = l.useState(p), {
    playheadPositionMs: I,
    endPositionMs: O,
    startPositionMs: D
  } = A, w = null != _, x = O - D, L = x > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
  l.useEffect(() => {
    null != _ && b({
      playheadPositionMs: 0,
      endPositionMs: _.duration * d.default.Millis.SECOND,
      startPositionMs: 0
    })
  }, [_]);
  let U = l.useCallback(e => {
      null != _ && (_.pause(), null != e && (_.currentTime = e), C(!1))
    }, [_]),
    T = l.useCallback(() => {
      if (null != _) {
        if (N) {
          U();
          return
        }
        I >= O ? _.currentTime = (0, h.toSeconds)(D) : _.currentTime = (0, h.toSeconds)(I), _.volume = (0, c.default)(s), _.play(), C(!0)
      }
    }, [_, O, U, I, N, D, s]),
    M = l.useCallback(e => {
      b(e), null == v || v({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [v]),
    R = l.useCallback(e => {
      null != _ && (_.currentTime = e)
    }, [_]);
  return (0, i.jsxs)("div", {
    className: a(E.container, {
      [E.initialized]: w,
      [E.disabled]: !w || S
    }, n),
    children: [(0, i.jsxs)("div", {
      className: E.playButtonContainer,
      children: [(0, i.jsx)(r.Clickable, {
        className: E.playButton,
        onClick: w ? T : void 0,
        children: N ? (0, i.jsx)(u.default, {
          className: E.playButtonIcon
        }) : (0, i.jsx)(o.default, {
          className: E.playButtonIcon
        })
      }), (0, i.jsx)("div", {
        className: E.durationContainer,
        children: (0, i.jsx)(r.Text, {
          className: E.duration,
          variant: "text-xs/normal",
          color: L ? "text-warning" : "text-positive",
          children: (t = x, "".concat((0, h.toSeconds)(t).toFixed(2), "s"))
        })
      })]
    }), (0, i.jsx)(m.default, {
      playing: N,
      onPlaybackChange: R,
      onPausePlayback: U,
      onChangePosition: M,
      disabled: S
    })]
  })
})