"use strict";

function s(e) {
  return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
}

function i(e) {
  return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
}

function r() {
  return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
}
n.r(t), n.d(t, {
  getInviteDynamicLinkTemplate: function() {
    return s
  },
  getGuildTemplateDynamicLinkTemplate: function() {
    return i
  },
  getDefaultDynamicLinkTemplate: function() {
    return r
  }
})