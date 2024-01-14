"use strict";
n.r(t), n.d(t, {
  validateOptionContent: function() {
    return a
  }
}), n("222007");
var l = n("118200"),
  i = n("524768"),
  r = n("810065"),
  o = n("317041"),
  s = n("782340");

function a(e) {
  let {
    option: t,
    content: n,
    guildId: a,
    channelId: u,
    allowEmptyValues: d,
    commandOrigin: c = i.CommandOrigin.CHAT
  } = e, f = null != n ? (0, l.getString)({
    content: n
  }, "content").trim() : "", p = t.required, m = null != n, h = "" === f;
  if (!m) return p ? {
    success: !1,
    error: s.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
  } : {
    success: !0
  };
  if (h) return d ? {
    success: !0
  } : p ? {
    success: !1,
    error: s.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
  } : {
    success: !1,
    error: (0, o.getValidationErrorText)(t)
  };
  let E = n.length > 1 ? {
      type: "text",
      text: f
    } : n[0],
    S = (0, r.default)[t.type](E, t, u, a, c);
  return !S.success && null == S.error && (S.error = (0, o.getValidationErrorText)(t)), S
}