"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("37983");
n("884691");
var i = n("65597"),
  r = n("151426"),
  o = n("77078"),
  s = n("430568"),
  a = n("206230"),
  u = n("10641"),
  d = n("917764"),
  c = n("538282"),
  f = n("562323"),
  p = n("305961"),
  m = n("227602"),
  h = n("471671"),
  E = n("945330"),
  S = n("95689"),
  g = n("423487"),
  C = n("773336"),
  T = n("13798"),
  v = n("235004"),
  y = n("49111"),
  x = n("782340"),
  I = n("762484");

function N(e) {
  let {
    soundboardSound: t,
    closePicker: N
  } = e, _ = (0, c.useExpressionPickerStore)(e => e.searchQuery), A = (0, i.default)([v.default], () => null != t && v.default.isFavoriteSound(t.soundId)), R = (0, i.default)([p.default], () => p.default.getGuild(null == t ? void 0 : t.guildId)), O = (0, i.default)([a.default], () => a.default.useReducedMotion, []), M = (0, i.default)([h.default], () => h.default.isFocused()), k = (0, i.default)([m.default], () => m.default.getKeybindForAction(y.GlobalKeybindActions.SOUNDBOARD_HOLD));
  if (null != t && _.length > 0) return (0, l.jsx)(f.default, {
    graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, l.jsx)(s.default, {
      emojiId: t.emojiId,
      emojiName: t.emojiName,
      className: I.emoji
    }) : (0, l.jsx)(S.default, {
      className: I.emoji
    }),
    graphicSecondary: null != R ? (0, l.jsx)(d.default, {
      guild: R,
      shouldAnimate: !O && M
    }) : null,
    titlePrimary: t.name,
    titleSecondary: null == R ? void 0 : R.name,
    isFavorite: A
  });
  let b = () => {
      N(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("644926").then(n.bind(n, "644926"));
        return t => (0, l.jsx)(e, {
          ...t
        })
      })
    },
    P = (0, u.isDismissibleContentDismissed)(r.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
    L = null != k && (0, C.isWindows)() && !P ? x.default.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
      keybind: (0, T.toString)(k.shortcut, !0),
      openSettingsHook: (e, t) => (0, l.jsx)(o.Anchor, {
        onClick: b,
        children: e
      }, t)
    }) : null;
  return null == L ? null : (0, l.jsxs)("div", {
    className: I.keybindHint,
    children: [(0, l.jsx)(g.default, {
      className: I.warningIcon
    }), (0, l.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      className: I.keybindHintText,
      children: L
    }), (0, l.jsx)(o.Clickable, {
      className: I.closeButton,
      onClick: () => (0, u.markDismissibleContentAsDismissed)(r.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
      children: (0, l.jsx)(E.default, {
        width: 16,
        height: 16
      })
    })]
  })
}