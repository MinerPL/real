"use strict";
s.r(t), s.d(t, {
  default: function() {
    return W
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("79112"),
  S = s("533280"),
  E = s("180748"),
  f = s("206230"),
  T = s("951212"),
  m = s("692038"),
  _ = s("815297"),
  g = s("574073"),
  h = s("291655"),
  I = s("67508"),
  N = s("76629"),
  p = s("981957"),
  C = s("145131"),
  A = s("476765"),
  O = s("830837"),
  x = s("132755"),
  R = s("599110"),
  M = s("701909"),
  v = s("845579"),
  D = s("186709"),
  L = s("225849"),
  P = s("397336"),
  j = s("49111"),
  b = s("560241"),
  U = s("357046"),
  B = s("782340"),
  y = s("667473"),
  F = s("926622"),
  G = s("307757");
let k = (0, A.uid)(),
  H = (0, A.uid)(),
  w = (0, A.uid)(),
  V = o.debounce(e => {
    (0, E.setSaturation)(e)
  }, 250),
  Y = o.debounce(e => {
    (0, N.setSpeechRate)(e)
  }, 250);

function W(e) {
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: B.default.Messages.ACCESSIBILITY,
    children: [(0, a.jsx)(K, {}), (0, a.jsx)(z, {}), (0, a.jsx)(u.FormDivider, {}), (0, a.jsx)(Q, {}), (0, a.jsx)(q, {}), (0, a.jsx)(Z, {}), (0, T.canEnableForcedColors)() ? (0, a.jsx)(X, {}) : null, (0, a.jsx)(J, {}), (0, a.jsx)($, {}), (0, a.jsx)(ee, {}), (0, a.jsx)(et, {}), (0, a.jsx)(u.FormDivider, {
      className: F.marginBottom20
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_APPEARANCE_LINK.format({
        onAppearanceClick() {
          c.default.open(j.UserSettingsSections.APPEARANCE)
        }
      })
    })]
  })
}

function K() {
  let e = v.MessageDisplayCompact.useSetting(),
    [t] = n.useState(() => {
      let e = (0, m.createMessageRecord)({
        ...(0, _.default)({
          channelId: "1337",
          content: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_LINK_PREVIEW_MESSAGE.format({
            previewLink: "https://discord.com/accessibility"
          })
        }),
        state: j.MessageStates.SENT,
        id: "".concat(0)
      });
      return e.colorString = "green", e
    });
  return (0, a.jsx)(u.FocusBlock, {
    children: (0, a.jsxs)(u.Card, {
      className: y.preview,
      "aria-hidden": !0,
      children: [(0, a.jsxs)("div", {
        className: y.previewHeader,
        children: [(0, a.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          color: u.Button.Colors.BRAND,
          children: B.default.Messages.ACCESSIBILITY_EXAMPLE_BUTTON_LABEL
        }), (0, a.jsx)("div", {
          className: y.previewAvatars,
          children: [j.StatusTypes.ONLINE, j.StatusTypes.DND, j.StatusTypes.IDLE].map(e => (0, a.jsx)(u.AnimatedAvatar, {
            "aria-label": B.default.Messages.USER_SETTINGS_AVATAR,
            src: G,
            size: u.AvatarSizes.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, a.jsx)("div", {
        className: y.previewMessage,
        children: (0, a.jsx)(h.default, {
          compact: e,
          author: {
            ...(0, g.getMessageAuthor)(t),
            colorString: "#DD80F4"
          },
          message: t
        })
      })]
    })
  })
}

function z() {
  let {
    saturation: e,
    desaturateUserColors: t
  } = (0, d.useStateFromStoresObject)([f.default], () => ({
    saturation: f.default.saturation,
    desaturateUserColors: f.default.desaturateUserColors
  }));
  return (0, a.jsxs)(u.FormSection, {
    className: F.marginTop20,
    children: [(0, a.jsx)(u.FormTitle, {
      id: k,
      className: F.marginBottom8,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
    }), (0, a.jsx)(u.FormText, {
      id: H,
      type: u.FormText.Types.DESCRIPTION,
      className: F.marginBottom20,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_DESCRIPTION
    }), (0, a.jsx)(u.Slider, {
      "aria-labelledby": k,
      "aria-describedby": H,
      markers: j.Accessibility.SATURATION_INCREMENTS,
      equidistant: !0,
      stickToMarkers: !0,
      maxValue: 1,
      minValue: 0,
      initialValue: e,
      onValueChange: V,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : void 0
    }), (0, a.jsx)(u.FormSwitch, {
      hideBorder: !0,
      className: i(F.marginTop8, F.marginBottom20),
      value: t,
      onChange: E.toggleDesaturateUserColors,
      note: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_DESCRIPTION,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL
    })]
  })
}

function Q() {
  let e = (0, d.useStateFromStores)([f.default], () => f.default.alwaysShowLinkDecorations);
  return (0, a.jsx)(u.FormItem, {
    className: F.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      note: B.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_NOTE,
      value: e,
      onChange: function() {
        (0, E.setAlwaysShowLinkDecorations)(!e)
      },
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL
    })
  })
}

function q() {
  let e = (0, d.useStateFromStores)([f.default], () => f.default.roleStyle);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormItem, {
      title: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
      className: F.marginTop20,
      children: [(0, a.jsx)(u.FormText, {
        type: u.FormText.Types.DESCRIPTION,
        className: F.marginBottom8,
        children: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DESCRIPTION
      }), (0, a.jsx)(u.RadioGroup, {
        options: [{
          name: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
          value: "username"
        }, {
          name: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
          value: "dot"
        }, {
          name: B.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
          value: "hidden"
        }],
        onChange: function(e) {
          (0, E.setRoleStyle)(e.value)
        },
        value: e
      })]
    }), (0, a.jsx)(u.FormDivider, {
      className: F.marginTop20
    })]
  })
}

function Z() {
  let e = (0, d.useStateFromStores)([f.default], () => f.default.syncProfileThemeWithUserTheme),
    t = n.useRef(null);
  return (0, L.default)(t, P.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, a.jsx)(u.FormItem, {
    ref: t,
    title: B.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
    className: i(F.marginTop20, y.syncProfileThemeWithUserTheme),
    children: (0, a.jsx)(u.FormSwitch, {
      note: B.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_NOTE.format({
        onThemeClick() {
          c.default.open(j.UserSettingsSections.APPEARANCE)
        }
      }),
      className: F.marginTop20,
      value: e,
      onChange: E.toggleSyncProfileThemeWithUserTheme,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION
    })
  })
}

function X() {
  let [e] = (0, d.useStateFromStoresArray)([f.default], () => [f.default.syncForcedColors, f.default.systemForcedColors]), [t, s] = n.useState(e);
  n.useEffect(() => {
    s(e)
  }, [e]);
  let l = n.useRef(null);
  n.useEffect(() => {
    null != l.current && (clearTimeout(l.current), l.current = null), t !== e && (l.current = setTimeout(() => (0, E.setSyncForcedColors)(t), 150))
  }, [t, e]);
  let i = B.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_DESCRIPTION.format({
    learnMoreLink: M.default.getArticleURL(j.HelpdeskArticles.FORCED_COLORS)
  });
  return (0, a.jsx)(u.FormItem, {
    title: B.default.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
    className: F.marginTop20,
    children: (0, a.jsx)(u.FormSwitch, {
      value: t,
      note: i,
      onChange: s,
      children: B.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL
    })
  })
}

function J() {
  let e = v.GifAutoPlay.useSetting(),
    t = v.AnimateEmoji.useSetting(),
    {
      useReducedMotion: s,
      rawPrefersReducedMotion: l,
      systemPrefersReducedMotion: r,
      gifAutoPlayOverrideReason: o,
      animateEmojiOverrideReason: c
    } = (0, d.useStateFromStoresObject)([f.default, D.default], () => ({
      systemPrefersReducedMotion: f.default.systemPrefersReducedMotion,
      rawPrefersReducedMotion: f.default.rawPrefersReducedMotion,
      useReducedMotion: f.default.useReducedMotion,
      gifAutoPlayOverrideReason: D.default.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: D.default.getAppliedOverrideReasonKey("animateEmoji")
    })),
    S = n.useRef(null);
  (0, L.default)(S, P.AccessibilityScrollPositions.REDUCED_MOTION);
  let T = n.useCallback((e, t) => {
      (0, E.setPrefersReducedMotion)(t ? "auto" : r)
    }, [r]),
    m = n.useCallback(e => {
      (0, E.setPrefersReducedMotion)(e ? "reduce" : "no-preference")
    }, []);
  return (0, a.jsxs)(u.FormItem, {
    ref: S,
    title: B.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
    className: i(F.marginTop20, y.reducedMotion),
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: F.marginBottom8,
      children: B.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_DESCRIPTION.format({
        helpdeskArticle: M.default.getArticleURL(j.HelpdeskArticles.REDUCED_MOTION)
      })
    }), (0, a.jsx)(u.Checkbox, {
      className: F.marginTop20,
      value: "auto" === l,
      shape: u.Checkbox.Shapes.BOX,
      type: u.Checkbox.Types.INVERTED,
      onChange: T,
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: B.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_AUTO
      })
    }), (0, a.jsx)(u.FormSwitch, {
      className: F.marginTop20,
      value: s,
      onChange: m,
      children: B.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE
    }), (0, a.jsx)(u.FormSwitch, {
      className: F.marginBottom40,
      value: e,
      note: null != o ? (0, I.default)(o) : void 0,
      onChange: v.GifAutoPlay.updateSetting,
      children: B.default.Messages.GIF_AUTO_PLAY_LABEL
    }), (0, a.jsx)(u.FormSwitch, {
      className: i(F.marginTop8, F.marginBottom20),
      value: t,
      note: null != c ? (0, I.default)(c) : void 0,
      onChange: v.AnimateEmoji.updateSetting,
      children: B.default.Messages.ANIMATE_EMOJI
    })]
  })
}

function $() {
  let e = v.AnimateStickers.useSetting(),
    t = (0, d.useStateFromStores)([D.default], () => D.default.getAppliedOverrideReasonKey("animateStickers")),
    s = n.useCallback(e => {
      v.AnimateStickers.updateSetting(e.value)
    }, []);
  return (0, a.jsxs)(u.FormItem, {
    className: F.marginBottom40,
    title: B.default.Messages.STICKERS_AUTO_PLAY_HEADING,
    children: [(0, a.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: F.marginBottom8,
      children: null != t ? (0, I.default)(t) : B.default.Messages.STICKERS_AUTO_PLAY_HELP
    }), (0, a.jsx)(u.RadioGroup, {
      options: [{
        name: B.default.Messages.STICKERS_ALWAYS_ANIMATE,
        value: b.StickerAnimationSettings.ALWAYS_ANIMATE
      }, {
        name: B.default.Messages.STICKERS_ANIMATE_ON_INTERACTION,
        desc: B.default.Messages.STICKERS_ANIMATE_ON_INTERACTION_DESCRIPTION,
        value: b.StickerAnimationSettings.ANIMATE_ON_INTERACTION
      }, {
        name: B.default.Messages.STICKERS_NEVER_ANIMATE,
        value: b.StickerAnimationSettings.NEVER_ANIMATE
      }],
      onChange: s,
      value: e
    })]
  })
}

function ee() {
  let e = (0, d.useStateFromStores)([f.default], () => f.default.isSubmitButtonEnabled),
    t = v.UseLegacyChatInput.useSetting(),
    s = n.useRef(null);
  return (0, L.default)(s, P.AccessibilityScrollPositions.LEGACY_CHAT_INPUT), (0, a.jsxs)(u.FormItem, {
    ref: s,
    children: [(0, a.jsx)(u.FormTitle, {
      className: F.marginBottom8,
      children: B.default.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT
    }), (0, a.jsx)(u.FormSwitch, {
      className: F.marginTop20,
      value: e,
      onChange: E.toggleSubmitButton,
      children: B.default.Messages.DISPLAY_SUBMIT_BUTTON
    }), (0, a.jsx)(u.FormSwitch, {
      className: F.marginTop8,
      value: t,
      note: B.default.Messages.LEGACY_CHAT_INPUT_DESCRIPTION,
      onChange: e => {
        R.default.track(j.AnalyticEvents.LEGACY_CHAT_INPUT_TOGGLED, {
          enabled: e,
          location: {
            section: j.AnalyticsSections.SETTINGS_ACCESSIBILITY
          }
        }), v.UseLegacyChatInput.updateSetting(e)
      },
      children: B.default.Messages.LEGACY_CHAT_INPUT
    })]
  })
}

function et() {
  let e = v.EnableTTSCommand.useSetting(),
    t = (0, d.useStateFromStores)([p.default], () => p.default.speechRate),
    [s, l] = n.useState(!1);
  return S.supported ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.FormItem, {
      children: [(0, a.jsx)(u.FormTitle, {
        className: F.marginBottom8,
        children: B.default.Messages.FORM_LABEL_TTS
      }), (0, a.jsx)(u.FormSwitch, {
        className: F.marginTop20,
        value: e,
        onChange: v.EnableTTSCommand.updateSetting,
        children: B.default.Messages.ALLOW_TTS_COMMAND
      })]
    }), (0, a.jsxs)(u.FormItem, {
      className: F.marginBottom20,
      children: [(0, a.jsx)(u.FormTitle, {
        id: w,
        className: F.marginBottom20,
        children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
      }), (0, a.jsx)("div", {
        className: y.ttsPreviewWrapper,
        children: (0, a.jsx)(u.Button, {
          color: u.ButtonColors.BRAND_NEW,
          onClick: () => {
            if (s) {
              (0, N.stopSpeaking)(), l(!1);
              return
            }(0, N.speakText)(B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_TEST, !0, void 0, () => l(!0), () => l(!1)), l(!0)
          },
          children: (0, a.jsxs)(C.default, {
            align: C.default.Align.CENTER,
            children: [s ? (0, a.jsx)(O.default, {
              width: 24,
              height: 24
            }) : (0, a.jsx)(x.default, {
              width: 24,
              height: 24
            }), (0, a.jsx)("span", {
              children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_PREVIEW
            }), (0, a.jsx)(u.HiddenVisually, {
              children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL
            })]
          })
        })
      }), (0, a.jsx)(u.Slider, {
        markers: U.SPEECH_RATE_INCREMENTS,
        initialValue: t,
        defaultValue: 1,
        stickToMarkers: !0,
        onValueChange: Y,
        onValueRender: e => "x".concat(e.toFixed(2)),
        onMarkerRender: e => 0 === e ? (0, a.jsx)("span", {
          className: y.ttsSliderMarker,
          children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_SLOWER
        }) : 10 === e ? (0, a.jsx)("span", {
          className: y.ttsSliderMarker,
          children: B.default.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_FASTER
        }) : 1 === e ? (0, a.jsx)("span", {
          children: "x1.0"
        }) : e % 1 == 0 ? "" : void 0,
        "aria-labelledby": w
      })]
    })]
  }) : null
}