"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("77078"),
  r = n("132755"),
  a = n("78404"),
  o = n("520497"),
  u = n("812809"),
  d = n("129722"),
  c = n("859971"),
  f = n("477633"),
  m = n("782340"),
  h = n("803336"),
  g = l.memo(function(e) {
    let {
      sound: t,
      volume: n,
      disabled: g
    } = e, [E, S] = l.useState(!1), p = l.useRef(null), {
      file: v,
      audio: _,
      loadAudioFromFile: N
    } = (0, d.useAudioTrimmerStore)(), C = l.useMemo(() => (0, o.default)(t.soundId), [t]);
    return l.useEffect(() => {
      null == p.current && (p.current = (0, c.loadAudioFileFromUrl)(C, t.name).then(N))
    }, [C, N, t.name]), (0, i.jsxs)("div", {
      className: h.previewContainer,
      children: [(0, i.jsx)(s.Clickable, {
        onClick: g ? void 0 : function() {
          null != _ && (_.paused ? (_.volume = (0, u.default)(n), _.currentTime = 0, _.play(), S(!0), _.addEventListener("ended", () => S(!1), {
            once: !0
          })) : (_.pause(), S(!1)))
        },
        className: h.playButton,
        "aria-label": E ? m.default.Messages.STOP : m.default.Messages.PLAY,
        children: E ? (0, i.jsx)(a.default, {
          className: h.playIcon
        }) : (0, i.jsx)(r.default, {
          className: h.playIcon
        })
      }), (0, i.jsx)("div", {
        className: h.waveformContainer,
        children: (0, i.jsx)(f.default, {
          className: h.waveform,
          file: v,
          audio: _
        })
      })]
    })
  })