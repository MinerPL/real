"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var s = n("884691"),
  a = n("819689"),
  l = n("267567"),
  i = n("625149"),
  r = n("300322"),
  o = n("967241"),
  u = n("845579"),
  d = n("271938"),
  c = n("42203"),
  f = n("836417"),
  h = n("26989"),
  C = n("88093"),
  p = n("377253"),
  m = n("957255"),
  E = n("306160"),
  g = n("659500"),
  S = n("773336"),
  _ = n("61400"),
  A = n("913491"),
  T = n("583022"),
  M = n("363396"),
  I = n("49111");

function N(e) {
  return m.default.can(I.Permissions.MANAGE_MESSAGES, e)
}
var L = function(e, t, n) {
  let L = s.useRef(n);
  return L.current = n, s.useCallback(n => {
    var s, v, R, x, y;
    if (!L.current || n.target !== n.currentTarget) return;
    let D = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      O = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      j = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      P = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      b = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      U = p.default.getMessage(t, e),
      F = c.default.getChannel(t);
    if (null == U || null == F) return;
    let H = d.default.getId(),
      k = U.author.id === H;
    switch (n.key.toLowerCase()) {
      case "backspace":
        D && (N(F) || k) && (n.preventDefault(), (0, M.deleteMessage)(F, U, n));
        break;
      case "c":
        ((0, S.isMac)() ? P : j) && E.SUPPORTS_COPY && (n.preventDefault(), (0, E.copy)(U.content));
        break;
      case "e":
        if (D) {
          ;
          if (s = H, v = F, R = U, !v.isSystemDM() && (0, _.default)(R, s)) n.preventDefault(), (0, M.editMessage)(F, U)
        }
        break;
      case "p":
        if (D || b) {
          ;
          if (x = F, y = U, !x.isSystemDM() && !(0, A.default)(y) && (N(x) || x.isPrivate())) n.preventDefault(), (0, M.pinMessage)(F, U, n)
        }
        break;
      case "+":
        (D || b) && function(e) {
          let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
            n = u.RenderReactions.getSetting(),
            {
              disableReactionCreates: s
            } = (0, T.default)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && m.default.can(I.Permissions.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && l.default.isLurking(e.guild_id),
              isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
            });
          return !s && n
        }(F) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(I.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, U.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (D || b) && (0, i.canReplyToMessage)(F, U) && (n.preventDefault(), (0, M.replyToMessage)(F, U, n));
        break;
      case "t":
        if (D && (0, r.computeCanStartPublicThread)(F, U)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(F, U, "Message Shortcut");
        else if (U.hasFlag(I.MessageFlags.HAS_THREAD)) {
          let e = c.default.getChannel(U.id);
          null != e && (D || b) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, b))
        }
        break;
      case "enter":
        O && (n.preventDefault(), (0, M.markMessageUnread)(F, U));
        break;
      case "escape":
        f.default.isEditing(F.id, U.id) ? a.default.endEditMessage(F.id) : g.ComponentDispatch.dispatch(I.ComponentActions.TEXTAREA_FOCUS)
    }
  }, [e, t])
}