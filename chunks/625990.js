"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("222007");
var a = s("884691"),
  n = s("448993"),
  l = s("651057");

function i() {
  let [e, t] = a.useState(!1), [s, i] = a.useState(), r = a.useRef(), o = async (e, s, a, o) => {
    i(void 0);
    try {
      if (t(!0), null == r.current) {
        let t = await l.default.createApplication({
          name: o,
          guildId: e.id,
          type: a,
          teamId: s
        });
        r.current = t
      }
      return await l.default.getApplicationsForGuild(e.id, {
        type: a,
        includeTeam: !0
      }), !0
    } catch (e) {
      return i(new n.APIError(e)), !1
    } finally {
      t(!1)
    }
  };
  return {
    createGuildApplication: o,
    submitting: e,
    error: s
  }
}