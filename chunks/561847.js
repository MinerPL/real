"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("669491"),
  r = s("77078"),
  o = s("430568"),
  d = s("697218"),
  u = s("832132"),
  c = s("368121"),
  S = s("228220"),
  E = s("719923"),
  f = s("78581"),
  T = s("23106"),
  m = s("429829"),
  _ = s("553372"),
  g = s("191191"),
  h = s("782340"),
  I = s("686066");

function N(e) {
  let {
    onSelect: t
  } = e, [s, i] = n.useState(!1), o = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), c = E.default.canUseCustomCallSounds(o);

  function S(e) {
    c && (i(!1), null == t || t(e))
  }
  return (0, a.jsx)(r.Popout, {
    shouldShow: s,
    position: "left",
    onRequestClose: () => i(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(r.Dialog, {
        children: (0, a.jsx)(g.default, {
          suppressPlaySound: !0,
          shouldShowUpsell: !1,
          guildId: null,
          channel: null,
          onClose: t,
          onSelect: S,
          gridNotice: c ? null : (0, a.jsx)(m.CustomCallSoundUpsell, {}),
          analyticsSource: "call sounds edit setting"
        })
      })
    },
    children: e => (0, a.jsx)(_.SecondaryActionButton, {
      ...e,
      onClick: () => {
        i(!s)
      },
      text: h.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_CHANGE,
      children: (0, a.jsx)(u.default, {
        className: I.secondaryIcon
      })
    })
  })
}

function p(e) {
  let {
    sound: t
  } = e, {
    previewSound: s
  } = (0, T.default)(t, null), n = (0, f.getAmplitudinalSoundboardVolume)(), l = 0 === n ? h.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND_LOW_VOLUME : h.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
    emojiName: t.emojiName,
    soundName: t.name
  });
  return (0, a.jsx)(_.SecondaryActionButton, {
    onClick: s,
    text: l,
    children: (0, a.jsx)(c.default, {
      className: I.secondaryIconActive
    })
  })
}

function C(e) {
  let {
    sound: t,
    isGlobal: s,
    onSelect: n
  } = e, l = null != t, d = null == t ? void 0 : t.emojiId, u = null == t ? void 0 : t.emojiName, E = l && (null != u || null != d), f = e => (0, a.jsx)(r.Text, {
    variant: "text-xs/medium",
    color: "header-secondary",
    tag: "span",
    children: e
  });
  return (0, a.jsxs)("div", {
    className: I.soundButtonSettingContainer,
    children: [(0, a.jsxs)("div", {
      className: I.container,
      children: [E && (0, a.jsx)(o.default, {
        emojiId: d,
        emojiName: u,
        className: I.emoji
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-primary",
        className: I.soundText,
        children: null == t ? h.default.Messages.NONE : s ? h.default.Messages.CALL_SOUNDS_SETTINGS_ALL_SERVERS.format({
          soundName: t.name,
          subtextHook: f
        }) : t.name
      }), l ? (0, a.jsx)(p, {
        sound: t
      }) : (0, a.jsx)(c.default, {
        className: I.secondaryIconDisabled
      })]
    }), (0, a.jsxs)("div", {
      className: I.container,
      children: [(0, a.jsx)(N, {
        onSelect: n
      }), l && !s && (0, a.jsx)(_.SecondaryActionButton, {
        onClick: () => n(null),
        text: h.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND_REMOVE,
        children: (0, a.jsx)(S.default, {
          color: i.default.unsafe_rawColors.RED_400.css,
          className: I.secondaryIcon
        })
      })]
    })]
  })
}