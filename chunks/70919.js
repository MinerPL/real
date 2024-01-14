"use strict";
n.r(t), n.d(t, {
  fetchRoleConnectionsConfiguration: function() {
    return l
  },
  putRoleConnectionsConfigurations: function() {
    return r
  },
  fetchUserApplicationRoleConnections: function() {
    return c
  }
});
var s = n("872717"),
  a = n("913144"),
  i = n("895026"),
  o = n("49111");

function l(e, t) {
  s.default.get({
    url: o.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
  }).then(e => {
    let n = [];
    e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
      connectionType: e.connection_type,
      connectionMetadataField: e.connection_metadata_field,
      applicationId: e.application_id,
      operator: e.operator,
      value: e.value
    })))), a.default.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: t,
      roleConnectionConfigurations: n
    })
  }).catch(() => {})
}
async function r(e, t, n) {
  let l = n.map(e => e.map(e => ({
      connection_type: e.connectionType,
      connection_metadata_field: e.connectionMetadataField,
      application_id: e.applicationId,
      operator: e.operator,
      value: e.value
    }))),
    r = await s.default.put({
      url: o.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
      body: 0 === l.length ? [] : l,
      oldFormErrors: !0
    }).then(e => {
      let t = [];
      return e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
        connectionType: e.connection_type,
        connectionMetadataField: e.connection_metadata_field,
        applicationId: e.application_id,
        operator: e.operator,
        value: e.value
      })))), t
    }),
    c = await (0, i.requestMembersForRole)(e, t, !1);
  null != c && a.default.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: e,
    roleId: t,
    count: c
  }), a.default.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: t,
    roleConnectionConfigurations: r
  })
}
async function c() {
  let e = await s.default.get({
    url: o.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
  });
  return e.body
}