"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983"),
  i = n("884691"),
  l = n("446674"),
  s = n("77078"),
  u = n("788506"),
  r = n("252931"),
  d = n("166257"),
  o = n("432173"),
  c = n("300322"),
  f = n("845579"),
  E = n("957255"),
  M = n("79945"),
  m = n("315102"),
  g = n("659500"),
  I = n("402671"),
  S = n("49111"),
  p = n("958706"),
  _ = n("782340");

function A(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(s.AccessibilityPreferencesContext), A = (0, c.useIsActiveChannelOrUnarchivableThread)(t), h = (0, l.useStateFromStores)([E.default], () => (t.isPrivate() || E.default.can(S.Permissions.ADD_REACTIONS, t)) && A, [t, A]), v = (0, u.useEmojiInPriorityOrder)(t.getGuildId()), {
    viewAndUseEnabled: T
  } = (0, r.useInventoryGuildPacksUserExperiment)({
    autoTrackExposure: !1
  });
  if (!f.RenderReactions.getSetting() || !h || e.type === S.MessageTypes.GUILD_INVITE_REMINDER) return null;
  let C = v.filter(e => !I.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: p.EmojiIntention.REACTION,
    canViewAndUsePackEmoji: T
  })).slice(0, 12).map((i, l) => {
    var u, r, c;
    return (0, a.jsx)(s.MenuItem, {
      color: "default",
      id: null !== (c = null !== (r = null !== (u = i.id) && void 0 !== u ? u : i.optionallyDiverseSequence) && void 0 !== r ? r : i.name) && void 0 !== c ? c : ":".concat(i.name, ":"),
      label: null == i.id ? i.name : ":".concat(i.name, ":"),
      imageUrl: e => {
        var t;
        let {
          isFocused: a
        } = e;
        return null != i.id ? m.default.getEmojiURL({
          id: i.id,
          animated: i.animated && (!n.enabled || a),
          size: 18
        }) : I.default.getURL(null !== (t = i.optionallyDiverseSequence) && void 0 !== t ? t : "")
      },
      action: () => {
        (0, d.addReaction)(t.id, e.id, (0, o.toReactionEmoji)(i), void 0)
      },
      dontCloseOnActionIfHoldingShiftKey: !0
    }, l)
  });
  return (0, a.jsx)(s.MenuItem, {
    id: "add-reaction",
    label: _.default.Messages.ADD_REACTION,
    action: () => {
      g.ComponentDispatch.dispatchKeyed(S.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: !0
      })
    },
    color: "default",
    children: (0, a.jsxs)(a.Fragment, {
      children: [C, (0, a.jsx)(s.MenuSeparator, {}), (0, a.jsx)(s.MenuItem, {
        color: "default",
        id: "other-reactions",
        label: _.default.Messages.VIEW_MORE,
        icon: M.default,
        action: () => {
          g.ComponentDispatch.dispatchKeyed(S.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: !0
          })
        }
      })]
    })
  })
}