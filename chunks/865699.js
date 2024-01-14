"use strict";
n.r(t), n.d(t, {
  InviteErrorMessage: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("592407"),
  r = n("957255"),
  o = n("49111"),
  u = n("782340"),
  d = n("435808");

function c(e) {
  let {
    guild: t,
    error: n,
    onClose: c
  } = e, f = t.id, p = a.useCallback(() => {
    c(), i.default.open(f, o.GuildSettingsSections.INSTANT_INVITES)
  }, [f, c]), E = a.useCallback(e => (0, l.jsx)(s.Clickable, {
    className: d.errorLink,
    onClick: p,
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [p]), I = a.useCallback(e => (0, l.jsx)(s.Anchor, {
    href: o.MarketingURLs.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), h = n.code !== o.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : r.default.can(o.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
    inviteListHook: E,
    inviteHelpHook: I
  }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
  return (0, l.jsx)(s.Text, {
    className: d.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: h
  })
}