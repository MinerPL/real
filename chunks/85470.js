"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
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
  g = n("306160"),
  E = n("659500"),
  S = n("773336"),
  A = n("61400"),
  _ = n("913491"),
  T = n("583022"),
  M = n("363396"),
  I = n("49111");

function N(e) {
  return m.default.can(I.Permissions.MANAGE_MESSAGES, e)
}
var v = function(e, t, n) {
  let v = s.useRef(n);
  return v.current = n, s.useCallback(n => {
    var s, L, x, R, y;
    if (!v.current || n.target !== n.currentTarget) return;
    let D = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      O = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      j = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      b = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      P = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      H = p.default.getMessage(t, e),
      F = c.default.getChannel(t);
    if (null == H || null == F) return;
    let U = d.default.getId(),
      k = H.author.id === U;
    switch (n.key.toLowerCase()) {
      case "backspace":
        D && (N(F) || k) && (n.preventDefault(), (0, M.deleteMessage)(F, H, n));
        break;
      case "c":
        ((0, S.isMac)() ? b : j) && g.SUPPORTS_COPY && (n.preventDefault(), (0, g.copy)(H.content));
        break;
      case "e":
        if (D) {
          ;
          if (s = U, L = F, x = H, !L.isSystemDM() && (0, A.default)(x, s)) n.preventDefault(), (0, M.editMessage)(F, H)
        }
        break;
      case "p":
        if (D || P) {
          ;
          if (R = F, y = H, !R.isSystemDM() && !(0, _.default)(y) && (N(R) || R.isPrivate())) n.preventDefault(), (0, M.pinMessage)(F, H, n)
        }
        break;
      case "+":
        (D || P) && function(e) {
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
        }(F) && (n.preventDefault(), E.ComponentDispatch.dispatchKeyed(I.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, H.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (D || P) && (0, i.canReplyToMessage)(F, H) && (n.preventDefault(), (0, M.replyToMessage)(F, H, n));
        break;
      case "t":
        if (D && (0, r.computeCanStartPublicThread)(F, H)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(F, H, "Message Shortcut");
        else if (H.hasFlag(I.MessageFlags.HAS_THREAD)) {
          let e = c.default.getChannel(H.id);
          null != e && (D || P) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, P))
        }
        break;
      case "enter":
        O && (n.preventDefault(), (0, M.markMessageUnread)(F, H));
        break;
      case "escape":
        f.default.isEditing(F.id, H.id) ? a.default.endEditMessage(F.id) : E.ComponentDispatch.dispatch(I.ComponentActions.TEXTAREA_FOCUS)
    }
  }, [e, t])
}