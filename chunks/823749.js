"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("70102");
var i, l, s = n("37983"),
  a = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("627445"),
  d = n.n(u),
  c = n("77078"),
  f = n("599417"),
  m = n("208548"),
  h = n("104945"),
  g = n("599110"),
  E = n("305122"),
  S = n("664113"),
  p = n("129722"),
  v = n("102432"),
  _ = n("876189"),
  N = n("846325"),
  C = n("49111"),
  A = n("782340"),
  b = n("921389");
(l = i || (i = {})).READY = "ready", l.ENCODING_FAILED = "encoding-failed", l.ENCODING = "encoding", l.UPLOADING = "uploading";
let I = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
}];

function O(e) {
  var t, n, i, l;
  let {
    guildId: r,
    sourceFile: u,
    existingSound: O,
    onClose: D,
    transitionState: w,
    showGuildPicker: x = !1
  } = e, [L, U] = a.useState(null !== (n = null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : null == O ? void 0 : O.name) && void 0 !== n ? n : ""), [T, M] = a.useState(null !== (i = null == O ? void 0 : O.volume) && void 0 !== i ? i : 1), [R, y] = a.useState(null == O ? void 0 : O.emojiId), [P, k] = a.useState(null == O ? void 0 : O.emojiName), {
    file: F,
    loadAudioFromFile: j,
    maxVolume: V,
    setMaxVolume: B
  } = (0, p.useAudioTrimmerStore)(), [G, H] = a.useState(!1), [W, K] = a.useState(null), [Z, z] = a.useState(null), [Y, q] = a.useState("ready"), [X, J] = a.useState(r);
  async function Q(e) {
    try {
      await j(null != e ? e : null), q("ready"), K(null)
    } catch (e) {
      $(e)
    }
  }

  function $(e) {
    if (e instanceof f.default) K(e);
    else if (e instanceof Error) {
      let t = {
        status: 500,
        body: {
          message: e.message
        }
      };
      K(new f.default(t))
    } else K(new f.default(e))
  }
  a.useEffect(() => {
    (null == u ? void 0 : u.file) != null && e(u.file);
    async function e(e) {
      try {
        await j(e), q("ready"), K(null)
      } catch (e) {
        $(e)
      }
    }
  }, [null == u ? void 0 : u.file, j]);
  let ee = function(e) {
      switch (e) {
        case "encoding":
          return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
        case "encoding-failed":
          return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
        case "uploading":
          return A.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
      }
      return null
    }(Y),
    et = "uploading" === Y || "encoding" === Y,
    en = null != O,
    ei = L.length >= 2 && (en || null != F) && null != X && function(e) {
      if (null == e) return !0;
      let t = (e.endMs - e.startMs) / 1e3;
      return t > 0 && t <= N.MAX_SOUND_LENGTH_SECONDS
    }(Z),
    el = a.useCallback(async (e, t) => {
      q("encoding");
      try {
        let n = await (0, v.trimAndEncodeAudio)(e, t);
        return q("ready"), n
      } catch (e) {
        throw q("encoding-failed"), e
      }
    }, []),
    es = a.useCallback(async () => {
      if (null == F) return;
      d(null != X, "Cannot submit soundboard sound with no guildId");
      let e = F;
      if (null != Z) {
        let t = await el(F, Z);
        if (null == t) return;
        e = t
      }
      let t = (0, v.getDataUrlFromFile)(e);
      q("uploading");
      try {
        await (0, v.uploadFileReadPromise)({
          readPromise: t,
          guildId: X,
          name: L,
          volume: T,
          emojiId: R,
          emojiName: P
        }), q("ready")
      } catch (e) {
        throw new f.default(e)
      }
    }, [F, X, L, el, Z, T, R, P]),
    ea = a.useCallback(async () => {
      d(null != X, "Cannot submit soundboard sound with no guildId"), H(!0), K(null);
      try {
        en ? await (0, E.updateSound)({
          guildId: X,
          soundId: O.soundId,
          name: L,
          volume: T,
          emojiId: R,
          emojiName: P
        }) : await es(), D()
      } catch (e) {
        $(e)
      } finally {
        q("ready"), H(!1), M(1), B(1)
      }
    }, [en, D, X, O, L, T, R, P, es, B]);
  a.useEffect(() => {
    j(null), g.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: X
    })
  }, []), a.useEffect(() => {
    M(Math.min(T, V))
  }, [T, M, V]);
  let er = (0, s.jsx)(m.default, {
    guildId: X,
    emojiId: R,
    emojiName: P,
    setEmojiId: y,
    setEmojiName: k,
    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
    isRequiredField: !1
  });
  return (0, s.jsxs)(c.ModalRoot, {
    transitionState: w,
    children: [(0, s.jsx)(c.ModalCloseButton, {
      onClick: D,
      className: b.modalClose
    }), (0, s.jsx)(c.ModalHeader, {
      className: b.headerContainer,
      separator: !1,
      children: (0, s.jsx)(c.Heading, {
        className: b.header,
        variant: "heading-xl/extrabold",
        children: en ? A.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
      })
    }), (0, s.jsxs)(c.ModalContent, {
      className: b.content,
      children: [null != W && !W.hasFieldErrors() && (0, s.jsx)(c.FormErrorBlock, {
        className: b.section,
        children: W.message
      }), x ? (0, s.jsx)(c.FormItem, {
        required: !0,
        className: b.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
        children: (0, s.jsx)(_.default, {
          value: X,
          onChange: J
        })
      }) : null, (en || null != F) && (0, s.jsx)(S.default, {
        sound: O,
        volume: T,
        disabled: et,
        onChange: z
      }), en || null != u ? null : (0, s.jsx)(c.FormItem, {
        required: !0,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
        className: b.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
        children: (0, s.jsx)(h.default, {
          filename: null !== (l = null == F ? void 0 : F.name) && void 0 !== l ? l : "",
          buttonText: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
          placeholder: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
          onFileSelect: Q,
          filters: I
        })
      }), (0, s.jsxs)("div", {
        className: b.multiInput,
        children: [(0, s.jsx)(c.FormItem, {
          required: !0,
          error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
          className: o(b.section, b.halfInput),
          title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
          children: (0, s.jsx)(c.TextInput, {
            placeholder: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
            value: L,
            onChange: U,
            maxLength: N.MAX_LENGTH_SOUND_NAME
          })
        }), er]
      }), (0, s.jsx)(c.FormItem, {
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
        className: b.section,
        title: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
        children: (0, s.jsx)(c.Slider, {
          initialValue: T,
          onValueChange: e => M(e),
          minValue: 0,
          maxValue: V
        })
      })]
    }), (0, s.jsxs)(c.ModalFooter, {
      children: [(0, s.jsx)(c.Button, {
        disabled: !ei,
        submitting: G,
        size: c.Button.Sizes.SMALL,
        onClick: ea,
        children: en ? A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
      }), (0, s.jsx)(c.Button, {
        disabled: G,
        onClick: D,
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        children: A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
      }), null != ee && (0, s.jsx)("div", {
        className: b.soundStateHint,
        children: (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ee
        })
      })]
    })]
  })
}