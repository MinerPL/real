"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("228100"),
  i = s("966082"),
  r = s("657960"),
  o = s("988268"),
  d = e => {
    let {
      guild: t
    } = e, {
      application: s,
      loading: d
    } = (0, l.default)(t.id, o.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS);
    return d ? (0, a.jsx)(n.Spinner, {}) : null != s ? (0, a.jsx)(i.default, {
      guildId: t.id,
      application: s
    }) : (0, a.jsx)(r.default, {
      guild: t
    })
  }