"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var n = a("37983"),
  l = a("884691"),
  i = a("759843"),
  r = a("77078"),
  s = a("477566"),
  u = a("49671"),
  o = a("812204"),
  d = a("685665"),
  c = a("803725"),
  f = a("758946"),
  m = a("99366"),
  v = a("135284"),
  E = a("488673"),
  p = a("5431"),
  h = a("464135"),
  C = a("28388"),
  N = a("782340"),
  x = a("756458");

function S(e) {
  var t, a, p, h, C, S, g, _;
  let {
    clip: L,
    channelId: M,
    transitionState: T,
    onClose: A
  } = e, [R, j] = l.useState(!0), [b, P] = l.useState(!1), [w, D] = l.useState(null), [y, O] = l.useState(null), {
    AnalyticsLocationProvider: k
  } = (0, d.default)(o.default.CLIPS_EDITOR);
  l.useEffect(() => {
    (async function e() {
      let e;
      try {
        e = await u.default.clips.loadClip(L.filepath)
      } catch {
        A(), s.default.show({
          title: N.default.Messages.CLIPS_LOAD_ERROR_TITLE,
          body: N.default.Messages.CLIPS_LOAD_ERROR_BODY
        });
        return
      }
      let t = e.data.buffer,
        a = await (0, f.createAudioMP4FromVideoMP4)(t),
        n = URL.createObjectURL(new Blob([a], {
          type: "audio/mp4"
        })),
        l = URL.createObjectURL(new Blob([e.data], {
          type: "video/mp4"
        }));
      O(n), D(l)
    })()
  }, [L.filepath, A]), l.useEffect(() => () => {
    null != w && URL.revokeObjectURL(w)
  }, [w]), l.useEffect(() => () => {
    null != y && URL.revokeObjectURL(y)
  }, [y]);
  let [F, G] = l.useState(null === (C = null === (t = L.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === C || C), [U, B] = l.useState(null === (S = null === (a = L.editMetadata) || void 0 === a ? void 0 : a.applicationAudio) || void 0 === S || S), [V, H] = l.useState({
    start: null !== (g = null === (p = L.editMetadata) || void 0 === p ? void 0 : p.start) && void 0 !== g ? g : 0,
    end: null !== (_ = null === (h = L.editMetadata) || void 0 === h ? void 0 : h.end) && void 0 !== _ ? _ : 0
  }), [z, Z] = l.useState(L.name), K = l.useRef({
    name: z,
    editMetadata: {
      start: V.start,
      end: V.end,
      voiceAudio: F,
      applicationAudio: U
    }
  });
  K.current = {
    name: z,
    editMetadata: {
      start: V.start,
      end: V.end,
      voiceAudio: F,
      applicationAudio: U
    }
  };
  let X = (0, v.useClipProtocolURL)(L);
  return l.useEffect(() => {
    async function e() {
      let e = {};
      null != X && (e = {
        thumbnail: await (0, m.createThumbnailFromVideo)(X, K.current.editMetadata.start)
      }), (0, c.updateClipMetadata)(L.id, {
        ...K.current,
        ...e
      })
    }
    return () => {
      e()
    }
  }, [L.id, X]), (0, n.jsx)(r.ModalRoot, {
    impression: {
      impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED
    },
    size: r.ModalSize.DYNAMIC,
    className: x.modalRoot,
    transitionState: T,
    children: (0, n.jsx)(k, {
      children: (0, n.jsx)(r.ModalContent, {
        className: x.modalContent,
        children: null == w || null == y ? (0, n.jsx)("div", {
          className: x.spinnerContainer,
          children: (0, n.jsx)(r.Spinner, {})
        }) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(I, {
            voiceAudioEnabled: F,
            applicationAudioEnabled: U,
            videoURL: w,
            cropData: V,
            onSetCropData: H,
            isLoading: R,
            hasOpenPrompt: b,
            onDoneLoading: () => j(!1),
            audioURL: y,
            transitionState: T
          }), !R && (0, n.jsx)(E.default, {
            voiceAudioEnabled: F,
            channelId: M,
            applicationAudioEnabled: U,
            onChangeApplicationAudioEnabled: B,
            onChangeVoiceAudioEnabled: G,
            cropData: V,
            onSetClipName: Z,
            clipName: z,
            clip: L,
            onPrompt: P,
            onClose: A
          })]
        })
      })
    })
  })
}

function I(e) {
  let {
    cropData: t,
    onSetCropData: a,
    voiceAudioEnabled: i,
    applicationAudioEnabled: s,
    isLoading: u,
    hasOpenPrompt: o,
    onDoneLoading: d,
    videoURL: c,
    audioURL: f,
    transitionState: m
  } = e, v = l.useRef(null), E = l.useCallback(() => {
    var e;
    null === (e = v.current) || void 0 === e || e.seek(t.start), d()
  }, [d, t.start]);
  return l.useEffect(() => {
    var e, t, a;
    o && !(null === (t = v.current) || void 0 === t ? void 0 : null === (e = t.videoElement) || void 0 === e ? void 0 : e.paused) && (null === (a = v.current) || void 0 === a || a.pause())
  }, [o]), l.useEffect(() => {
    function e(e) {
      var a, n;
      if ((null === (a = document.activeElement) || void 0 === a ? void 0 : a.tagName) === "INPUT") return;
      let l = v.current;
      if (null == l) return;
      let i = null === (n = v.current) || void 0 === n ? void 0 : n.videoElement;
      if (null == i) return;
      let r = (0, C.default)(i.duration, e.shiftKey),
        s = !1;
      switch (e.key) {
        case " ":
          s = !0, i.paused ? l.play() : l.pause();
          break;
        case "ArrowLeft":
          s = !0, l.seek(Math.max(i.currentTime - r, t.start));
          break;
        case "ArrowRight":
          s = !0, l.seek(Math.min(i.currentTime + r, t.end))
      }
      s && (e.stopPropagation(), e.preventDefault())
    }
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
  }, [t.start, t.end]), (0, n.jsxs)("div", {
    className: x.editorPane,
    children: [(0, n.jsx)("div", {
      className: x.videoSizer,
      children: (0, n.jsx)(p.default, {
        applicationAudioEnabled: s,
        voiceAudioEnabled: i,
        ref: v,
        audioSrc: f,
        src: c,
        isLoading: u,
        onDoneLoading: E,
        startTime: t.start,
        endTime: t.end
      })
    }), !u && m && [r.ModalTransitionState.ENTERED, r.ModalTransitionState.HIDDEN].includes(m) ? (0, n.jsx)(h.default, {
      videoPlayerRef: v,
      cropData: t,
      setCropData: a,
      sourceURL: c
    }) : null]
  })
}