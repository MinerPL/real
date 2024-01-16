"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("808653"), n("222007");
var a = n("37983"),
  i = n("884691"),
  l = n("446674"),
  s = n("77078"),
  u = n("404118"),
  r = n("562228"),
  d = n("166257"),
  o = n("300322"),
  c = n("957255"),
  f = n("315102"),
  E = n("402671"),
  M = n("49111"),
  m = n("782340");

function g(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(s.AccessibilityPreferencesContext), g = (0, o.useIsActiveChannelOrUnarchivableThread)(t), p = (0, l.useStateFromStores)([c.default], () => c.default.can(M.Permissions.MANAGE_MESSAGES, t) && g, [t, g]), I = e.reactions.reduce((e, t) => {
    var n;
    return (null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
  }, []), S = (n, a) => {
    n.shiftKey ? (0, d.removeEmojiReactions)(t.id, e.id, a) : u.default.show({
      title: m.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
      body: m.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
      confirmText: m.default.Messages.YES_TEXT,
      cancelText: m.default.Messages.NO_TEXT,
      onConfirm: () => {
        (0, d.removeEmojiReactions)(t.id, e.id, a)
      }
    })
  };
  return !p || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, r.hasNonVoteReactions)(e) ? null : (0, a.jsx)(s.MenuItem, {
    id: "remove-emoji-reactions",
    label: m.default.Messages.REMOVE_EMOJI_REACTIONS,
    color: "danger",
    children: I.map(e => {
      var t, i;
      return (0, a.jsx)(s.MenuItem, {
        id: "remove-emoji-reactions-".concat(null !== (t = e.name) && void 0 !== t ? t : e.id),
        label: null == e.id ? e.name : ":".concat(e.name, ":"),
        action: t => S(t, e),
        imageUrl: t => {
          var a;
          let {
            isFocused: i
          } = t;
          return null != e.id ? f.default.getEmojiURL({
            id: e.id,
            animated: e.animated && (!n.enabled || i),
            size: 18
          }) : E.default.getURL(null !== (a = e.name) && void 0 !== a ? a : "")
        },
        dontCloseOnActionIfHoldingShiftKey: !0
      }, null !== (i = e.name) && void 0 !== i ? i : e.id)
    })
  })
}