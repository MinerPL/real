"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("629109"),
  u = s("79112"),
  c = s("49671"),
  S = s("42887"),
  E = s("26092"),
  f = s("476765"),
  T = s("701909"),
  m = s("773336"),
  _ = s("934810"),
  g = s("789854"),
  h = s("988231"),
  I = s("173364"),
  N = s("201114"),
  p = s("593647"),
  C = s("366662"),
  A = s("992121"),
  O = s("338601"),
  x = s("555066"),
  R = s("904725"),
  M = s("397336"),
  v = s("49111"),
  D = s("353927"),
  L = s("782340"),
  P = s("926622");
let j = (0, f.uid)(),
  b = "".concat(T.default.getArticleURL(v.HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm");

function U(e, t, s) {
  (0, o.openModal)(n => (0, a.jsx)(o.ConfirmModal, {
    header: e,
    confirmText: L.default.Messages.OKAY,
    cancelText: L.default.Messages.CANCEL,
    onConfirm: s,
    ...n,
    children: (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      children: t
    })
  }))
}

function B() {
  let {
    inputMode: e,
    qosEnabled: t,
    attenuation: s,
    attenuateWhileSpeakingSelf: l,
    attenuateWhileSpeakingOthers: f,
    audioSubsystem: T,
    silenceWarning: v,
    debugLoggingEnabled: B,
    legacyAudioSubsystemSupported: y,
    experimentalAudioSubsystemSupported: F,
    qosSupported: G,
    attenuationSupported: k
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    inputMode: S.default.getMode(),
    qosEnabled: S.default.getQoS(),
    attenuation: S.default.getAttenuation(),
    attenuateWhileSpeakingSelf: S.default.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: S.default.getAttenuateWhileSpeakingOthers(),
    audioSubsystem: S.default.getAudioSubsystem(),
    silenceWarning: S.default.getEnableSilenceWarning(),
    debugLoggingEnabled: S.default.supports(D.Features.DEBUG_LOGGING),
    legacyAudioSubsystemSupported: S.default.supports(D.Features.LEGACY_AUDIO_SUBSYSTEM),
    experimentalAudioSubsystemSupported: S.default.supports(D.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM),
    qosSupported: S.default.supports(D.Features.QOS),
    attenuationSupported: S.default.supports(D.Features.ATTENUATION)
  })), H = (0, r.useStateFromStores)([E.default], () => E.default.getSubsection()), w = n.createRef(), V = m.isPlatformEmbedded && B && null != c.default.fileManager.readLogFiles;
  return n.useEffect(() => {
    if (H === M.SOUNDBOARD_SUBSECTION) {
      var e;
      null == w || null === (e = w.current) || void 0 === e || e.scrollIntoView(), u.default.clearSubsection()
    }
  }, [w, H]), (0, a.jsxs)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: L.default.Messages.VOICE_SETTINGS,
    children: [(0, a.jsx)(I.default, {}), (0, a.jsx)(R.default, {}), (0, a.jsx)(p.default, {}), (0, a.jsx)(o.FormText, {
      className: P.marginBottom20,
      type: o.FormText.Types.DESCRIPTION,
      children: L.default.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_GUIDE.format({
        guideURL: b
      })
    }), (0, a.jsx)(o.FormDivider, {
      className: i(P.marginBottom20)
    }), (0, a.jsx)(N.default, {}), e === D.InputModes.VOICE_ACTIVITY && (0, a.jsx)(x.default, {}), (0, a.jsx)(o.FormDivider, {
      className: P.marginBottom40
    }), (0, a.jsx)("div", {
      style: {
        scrollMarginTop: "48px"
      },
      ref: w
    }), (0, a.jsx)(_.default, {}), (0, a.jsx)(A.default, {}), (0, a.jsxs)(o.HeadingLevel, {
      component: (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: P.marginBottom20,
        children: L.default.Messages.SETTINGS_ADVANCED
      }),
      children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(O.default, {}), G && (0, a.jsx)(o.FormSection, {
        className: P.marginBottom20,
        title: L.default.Messages.FORM_LABEL_QOS,
        children: (0, a.jsx)(o.FormSwitch, {
          value: t,
          onChange: e => d.default.setQoS(e),
          note: L.default.Messages.FORM_HELP_QOS,
          children: L.default.Messages.FORM_CHECKBOX_QOS
        })
      }), k && (0, a.jsxs)(o.FormSection, {
        className: P.marginBottom20,
        children: [(0, a.jsx)(o.FormTitle, {
          id: j,
          tag: o.FormTitleTags.H5,
          className: P.marginBottom8,
          children: L.default.Messages.FORM_LABEL_ATTENUATION
        }), (0, a.jsx)(o.Slider, {
          initialValue: s,
          onValueChange: e => {
            d.default.setAttenuation(e, l, f)
          },
          "aria-labelledby": j
        }), (0, a.jsx)(o.FormText, {
          className: P.marginBottom20,
          type: o.FormText.Types.DESCRIPTION,
          children: L.default.Messages.FORM_HELP_ATTENUATION
        }), (0, a.jsx)(o.FormDivider, {
          className: P.marginBottom20
        }), (0, a.jsx)(o.FormSwitch, {
          value: l,
          onChange: e => d.default.setAttenuation(s, e, f),
          children: L.default.Messages.ATTENUATE_WHILE_SPEAKING_SELF
        }), (0, a.jsx)(o.FormSwitch, {
          value: f,
          onChange: e => d.default.setAttenuation(s, l, e),
          children: L.default.Messages.ATTENUATE_WHILE_SPEAKING_OTHERS
        })]
      }), (y || F) && (0, a.jsxs)(o.FormSection, {
        className: P.marginBottom20,
        title: L.default.Messages.FORM_LABEL_SUBSYSTEM,
        children: [(0, a.jsx)(o.SingleSelect, {
          className: P.marginBottom20,
          value: T,
          options: function(e, t) {
            let s = [{
              value: D.AudioSubsystems.STANDARD,
              label: "Standard"
            }];
            return e && s.push({
              value: D.AudioSubsystems.LEGACY,
              label: "Legacy"
            }), t && s.push({
              value: D.AudioSubsystems.EXPERIMENTAL,
              label: "Experimental"
            }), s
          }(y, F),
          onChange: e => {
            U(L.default.Messages.SWITCH_SUBSYSTEM, L.default.Messages.SWITCH_SUBSYSTEM_BODY, () => d.default.setAudioSubsystem(e))
          }
        }), (0, a.jsx)(o.FormDivider, {
          className: P.marginBottom20
        })]
      }), m.isPlatformEmbedded && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(C.default, {}), (0, a.jsx)(o.FormSection, {
          className: P.marginBottom20,
          title: L.default.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
          children: (0, a.jsx)(o.FormSwitch, {
            value: v,
            onChange: e => d.default.setSilenceWarning(e),
            children: L.default.Messages.DISPLAY_SILENCE_WARNING
          })
        })]
      }), V && (0, a.jsx)(h.default, {}), (0, a.jsx)(o.FormItem, {
        children: (0, a.jsx)(o.Button, {
          look: o.Button.Looks.OUTLINED,
          color: o.Button.Colors.RED,
          onClick: () => {
            U(L.default.Messages.RESET_VOICE_SETTINGS, L.default.Messages.RESET_VOICE_SETTINGS_BODY, d.default.reset)
          },
          size: o.Button.Sizes.SMALL,
          children: L.default.Messages.RESET_VOICE_SETTINGS
        })
      })]
    })]
  })
}