"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  o = n("77078"),
  u = n("430568"),
  d = n("277855"),
  c = n("305122"),
  m = n("462550"),
  f = n("235004"),
  h = n("520497"),
  p = n("812809"),
  g = n("948613"),
  E = n("368121"),
  v = n("653110"),
  C = function(e) {
    let {
      soundId: t,
      jumbo: n = !1
    } = e, {
      currentPreviewRef: s
    } = a.useContext(m.default), C = (0, r.default)([f.default], () => f.default.getSoundById(t)), I = (null == C ? void 0 : C.emojiId) != null || (null == C ? void 0 : C.emojiName) != null, [x, _] = a.useState(!1), S = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), N = a.useCallback(() => {
      var e;
      null == C && (0, c.maybeFetchSoundboardSounds)();
      let n = new Audio((0, h.default)(t));
      null != s.current && s.current.pause(), s.current = n, n.currentTime = 0, n.volume = (0, p.default)(null !== (e = null == C ? void 0 : C.volume) && void 0 !== e ? e : .5), _(!0), n.play(), n.addEventListener("ended", () => {
        _(!1)
      }, {
        once: !0
      })
    }, [t, C, s, _]);
    return S ? null == C ? (0, l.jsxs)(o.Clickable, {
      title: "Risky Click",
      tag: "span",
      onClick: N,
      className: v.container,
      children: [(0, l.jsx)(E.default, {
        className: v.unknownSound
      }), (0, l.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "none",
        className: v.text,
        children: "Unknown"
      })]
    }) : n ? (0, l.jsxs)(o.Clickable, {
      onClick: N,
      className: v.jumboContainer,
      children: [(0, l.jsx)("div", {
        className: i(v.jumboOverlay, {
          [v.playing]: x
        }),
        children: (0, l.jsx)(g.default, {
          className: v.jumboPlayIcon
        })
      }), I && (0, l.jsx)(u.default, {
        emojiId: null == C ? void 0 : C.emojiId,
        emojiName: null == C ? void 0 : C.emojiName,
        className: v.jumboEmoji
      }), (0, l.jsx)(o.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "none",
        className: v.text,
        children: C.name
      })]
    }) : (0, l.jsxs)(o.Clickable, {
      tag: "span",
      onClick: N,
      className: v.container,
      children: [I && (0, l.jsx)(u.default, {
        emojiId: null == C ? void 0 : C.emojiId,
        emojiName: null == C ? void 0 : C.emojiName,
        className: v.emoji
      }), (0, l.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "none",
        className: v.text,
        children: C.name
      })]
    }) : null
  }