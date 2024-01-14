"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var r = n("37983"),
  i = n("884691"),
  l = n("414456"),
  a = n.n(l),
  o = n("446674"),
  u = n("77078"),
  s = n("430568"),
  c = n("133403"),
  d = n("252744"),
  f = n("86678"),
  E = n("923959"),
  _ = n("882641"),
  I = n("384830"),
  p = n("958706"),
  T = n("782340"),
  S = n("545456");

function h(e) {
  let {
    className: t,
    guildId: n,
    error: l,
    emojiId: h,
    emojiName: N,
    isRequiredField: C = !0,
    shouldUpdateBothEmojiFields: v = !1,
    setEmojiId: A,
    setEmojiName: g
  } = e, m = (0, I.default)({
    emojiId: h,
    emojiName: N
  }), R = (0, o.useStateFromStores)([E.default], () => null != n ? E.default.getDefaultChannel(n) : null), L = i.createRef(), P = (0, d.default)(L), y = () => {
    g(void 0), A(void 0)
  }, U = e => (t, n) => {
    let r = (null == t ? void 0 : t.id) == null;
    y(), r ? g(null == t ? void 0 : t.optionallyDiverseSequence) : (v && g(null == t ? void 0 : t.name), A(null == t ? void 0 : t.id)), n && e()
  }, O = e => {
    e.stopPropagation(), y()
  };
  return (0, r.jsx)(u.FormItem, {
    required: C,
    title: T.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
    className: a(t, S.section),
    error: l,
    children: (0, r.jsx)(u.Popout, {
      animation: u.Popout.Animation.NONE,
      position: "top",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(f.default, {
          closePopout: t,
          pickerIntention: p.EmojiIntention.SOUNDBOARD,
          onNavigateAway: t,
          onSelectEmoji: U(t),
          guildId: n,
          channel: R
        })
      },
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, r.jsxs)("div", {
          ...e,
          className: S.emojiInput,
          ref: L,
          children: [(0, r.jsx)(_.default, {
            className: S.emojiButton,
            active: n,
            tabIndex: 0,
            renderButtonContents: null != h || null != N ? () => (0, r.jsx)(s.default, {
              emojiName: N,
              emojiId: h
            }) : null
          }), (0, r.jsx)(u.TextInput, {
            inputClassName: S.emojiText,
            placeholder: T.default.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
            value: null != m ? ":".concat(m, ":") : "",
            readOnly: !0
          }), P && null != m && (0, r.jsx)(c.default, {
            ...e,
            onClick: O,
            className: S.removeButton
          })]
        })
      }
    })
  })
}