"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  i = s("917351"),
  a = s.n(i),
  o = s("446674"),
  r = s("77078"),
  d = s("629109"),
  u = s("278108"),
  c = s("996808"),
  h = s("42887"),
  m = s("145131"),
  p = s("476765"),
  f = s("829536"),
  g = s("49111"),
  E = s("353927"),
  _ = s("782340"),
  R = s("686084"),
  T = s("926622");
let C = (0, p.uid)(),
  O = (0, p.uid)(),
  D = (0, p.uid)();
class M extends l.PureComponent {
  handleValueRender(e) {
    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
  }
  renderAutomaticVADToggle() {
    let {
      autoThreshold: e
    } = this.props;
    return (0, n.jsx)(p.UID, {
      children: t => (0, n.jsxs)(m.default, {
        className: T.marginBottom4,
        children: [(0, n.jsx)(r.FormTitle, {
          tag: r.FormTitleTags.H3,
          children: (0, n.jsx)("label", {
            htmlFor: t,
            children: _.default.Messages.FORM_LABEL_AUTOMATIC_VAD
          })
        }), (0, n.jsx)(r.Switch, {
          id: t,
          checked: e,
          onChange: this.handleAutoThresholdChange
        })]
      })
    })
  }
  renderSlider() {
    let {
      autoThreshold: e,
      threshold: t
    } = this.props;
    if (!e) return (0, n.jsx)(r.Slider, {
      initialValue: t + 100,
      onValueRender: this.handleValueRender,
      onValueChange: this.handleSensitivityChange,
      "aria-label": _.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
    })
  }
  render() {
    return (0, n.jsxs)(r.FormItem, {
      title: _.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
      className: T.marginBottom8,
      children: [this.renderAutomaticVADToggle(), this.renderSlider()]
    })
  }
  constructor(...e) {
    super(...e), this.handleAutoThresholdChange = e => {
      let {
        onThresholdChange: t,
        threshold: s
      } = this.props;
      null == t || t(s, e)
    }, this.handleSensitivityChange = e => {
      let {
        onThresholdChange: t,
        autoThreshold: s
      } = this.props;
      null == t || t(-((100 - e) * 1), s)
    }
  }
}
let I = o.default.connectStores([h.default], e => {
  let {
    mediaEngineContext: t
  } = e;
  return {
    inputVolume: h.default.getInputVolume(),
    outputVolume: h.default.getOutputVolume(),
    inputDeviceId: h.default.getInputDeviceId(),
    inputDevices: h.default.getInputDevices(),
    outputDevices: h.default.getOutputDevices(),
    outputDeviceId: h.default.getOutputDeviceId(),
    inputMode: h.default.getMode(t),
    shortcut: h.default.getModeOptions(t).shortcut,
    vadThreshold: h.default.getModeOptions(t).threshold,
    vadAutoThreshold: h.default.getModeOptions(t).autoThreshold,
    delay: h.default.getModeOptions(t).delay
  }
})(e => {
  let t, {
      mediaEngineContext: s,
      inputMode: i,
      shortcut: o,
      delay: c,
      vadThreshold: h,
      vadAutoThreshold: m,
      inputDevices: p,
      inputDeviceId: E,
      inputVolume: R,
      outputDeviceId: I,
      outputDevices: v,
      outputVolume: N,
      speaking: x = !1
    } = e,
    S = a.first(p),
    U = null != S && S.disabled,
    b = a.first(v),
    A = null != b && b.disabled,
    V = [{
      value: g.InputModes.VOICE_ACTIVITY,
      name: _.default.Messages.INPUT_MODE_VAD
    }, {
      value: g.InputModes.PUSH_TO_TALK,
      name: _.default.Messages.INPUT_MODE_PTT
    }];
  return t = i === g.InputModes.PUSH_TO_TALK ? (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsx)(r.FormItem, {
      title: _.default.Messages.FORM_LABEL_SHORTCUT,
      className: T.marginBottom20,
      children: (0, n.jsx)(u.default, {
        defaultValue: o,
        onChange: e => d.default.setMode(i, {
          shortcut: e
        }, s)
      })
    }), (0, n.jsxs)(r.FormItem, {
      className: T.marginBottom8,
      children: [(0, n.jsx)(r.FormTitle, {
        id: C,
        children: _.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
      }), (0, n.jsx)(r.Slider, {
        initialValue: c,
        onValueChange: e => d.default.setMode(i, {
          delay: e
        }, s),
        onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
        maxValue: g.MAX_PTT_RELEASE_DELAY,
        "aria-labelledby": C
      })]
    })]
  }) : (0, n.jsx)(M, {
    speaking: x,
    inputMode: i,
    threshold: h,
    autoThreshold: m,
    onThresholdChange: (e, t) => d.default.setMode(i, {
      threshold: e,
      autoThreshold: t
    }, s)
  }), (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsx)(r.FormItem, {
      title: _.default.Messages.FORM_LABEL_INPUT_DEVICE,
      className: T.marginBottom20,
      children: (0, n.jsx)(r.SingleSelect, {
        value: E,
        onChange: e => d.default.setInputDevice(e, "Voice Settings"),
        options: a.map(p, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: U
      })
    }), (0, n.jsxs)(r.FormItem, {
      className: T.marginBottom20,
      children: [(0, n.jsx)(r.FormTitle, {
        id: O,
        children: _.default.Messages.FORM_LABEL_INPUT_VOLUME
      }), (0, n.jsx)(r.Slider, {
        initialValue: (0, f.amplitudeToPerceptual)(R),
        asValueChanges: e => d.default.setInputVolume((0, f.perceptualToAmplitude)(e)),
        "aria-labelledby": O
      })]
    }), (0, n.jsx)(r.FormItem, {
      title: _.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
      className: T.marginBottom20,
      children: (0, n.jsx)(r.SingleSelect, {
        value: I,
        onChange: e => d.default.setOutputDevice(e, "Voice Settings"),
        options: a.map(v, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: A
      })
    }), (0, n.jsxs)(r.FormItem, {
      className: T.marginBottom20,
      children: [(0, n.jsx)(r.FormTitle, {
        id: D,
        children: _.default.Messages.FORM_LABEL_OUTPUT_VOLUME
      }), (0, n.jsx)(r.Slider, {
        initialValue: (0, f.amplitudeToPerceptual)(N),
        maxValue: 200,
        asValueChanges: e => d.default.setOutputVolume((0, f.perceptualToAmplitude)(e)),
        "aria-labelledby": D
      })]
    }), (0, n.jsx)(r.FormItem, {
      title: _.default.Messages.FORM_LABEL_INPUT_MODE,
      className: T.marginBottom20,
      children: (0, n.jsx)(r.RadioGroup, {
        onChange: e => {
          let {
            value: t
          } = e;
          return d.default.setMode(t, {}, s)
        },
        options: V,
        value: i
      })
    }), t]
  })
});

function v(e) {
  var t;
  return (0, c.default)(() => {
    null != g.CURRENT_APP_CONTEXT && e.onClose()
  }), (0, n.jsxs)(r.ModalRoot, {
    transitionState: e.transitionState,
    "aria-label": _.default.Messages.VOICE_SETTINGS,
    children: [(0, n.jsxs)(r.ModalHeader, {
      children: [(0, n.jsxs)(m.default.Child, {
        children: [(0, n.jsx)(r.FormTitle, {
          tag: "h1",
          className: T.marginReset,
          children: _.default.Messages.VOICE_SETTINGS
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/normal",
          className: R.title,
          children: e.title
        })]
      }), (0, n.jsx)(m.default.Child, {
        grow: 0,
        children: (0, n.jsx)(r.ModalCloseButton, {
          onClick: e.onClose
        })
      })]
    }), (0, n.jsx)(r.ModalContent, {
      children: (0, n.jsx)(I, {
        mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : E.MediaEngineContextTypes.DEFAULT
      })
    })]
  })
}