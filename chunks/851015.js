"use strict";
s.r(t), s.d(t, {
  EmojiList: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  r = s("228220"),
  o = s("315102"),
  d = s("757715"),
  u = s("41391"),
  c = s("782340"),
  E = s("182131");

function _(e) {
  let {
    emoji: t,
    onRemoveEmoji: s,
    disabled: n = !1
  } = e, d = o.default.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 32
  });
  return (0, a.jsxs)("div", {
    className: l(E.emojiRow, {
      [E.disabled]: n
    }),
    children: [(0, a.jsx)("img", {
      className: E.emojiImage,
      src: d,
      alt: t.name
    }), (0, a.jsx)(i.Text, {
      color: "header-primary",
      variant: "text-md/medium",
      className: E.emojiAlias,
      children: t.name
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.BLANK,
      size: i.Button.Sizes.ICON,
      className: E.deleteButton,
      onClick: () => s(t),
      "aria-label": c.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_EMOJI_REMOVE_BUTTON_ARIA_LABEL,
      disabled: n,
      children: (0, a.jsx)(r.default, {
        className: E.trashIcon
      })
    })]
  })
}

function T(e) {
  let {
    tierEmojiIds: t,
    guildId: s,
    onRemoveEmoji: n
  } = e, l = (0, u.default)(s), i = null != t ? l.filter(e => t.has(e.id)) : [], r = (0, d.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsx)("div", {
    className: E.container,
    children: i.map(e => (0, a.jsx)(_, {
      emoji: e,
      onRemoveEmoji: () => n(e),
      disabled: r
    }, e.id))
  })
}