"use strict";
l.r(t), l.d(t, {
  InvalidAction: function() {
    return a
  },
  showApplicationCommandPermissionLockoutModal: function() {
    return d
  }
});
var n, a, s = l("404118"),
  i = l("701909"),
  r = l("49111"),
  o = l("782340");

function d(e, t) {
  let l;
  0 === e ? l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_SELF.format() : 1 === e ? l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_ROLE.format({
    name: t
  }) : 2 === e && (l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_DENY_ROLE.format({
    name: t
  })), s.default.show({
    title: o.default.Messages.SELF_DENY_PERMISSION_TITLE,
    body: l,
    cancelText: o.default.Messages.HELP_DESK,
    onCancel() {
      window.open(i.default.getArticleURL(r.HelpdeskArticles.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT))
    }
  })
}(n = a || (a = {}))[n.REMOVE_SELF = 0] = "REMOVE_SELF", n[n.REMOVE_ROLE = 1] = "REMOVE_ROLE", n[n.DENY_ROLE = 2] = "DENY_ROLE"