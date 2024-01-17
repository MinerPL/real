"use strict";
n.r(t), n.d(t, {
  setActiveCommand: function() {
    return f
  },
  setPreferredCommandId: function() {
    return h
  },
  updateOptionStates: function() {
    return E
  },
  updateOptionValidationStates: function() {
    return g
  },
  updateApplicationGuildCommandPermissions: function() {
    return m
  },
  querySearchManager: function() {
    return A
  },
  performAutocomplete: function() {
    return T
  },
  fetchCommand: function() {
    return p
  },
  fetchCommands: function() {
    return S
  },
  fetchCommandsForApplication: function() {
    return M
  },
  updateRegistry: function() {
    return N
  }
}), n("222007");
var i = n("627445"),
  l = n.n(i),
  a = n("872717"),
  s = n("913144"),
  r = n("798609"),
  u = n("271938"),
  d = n("299039"),
  o = n("246598"),
  c = n("524768"),
  _ = n("49111");

function f(e) {
  let {
    channelId: t,
    command: n,
    section: i,
    location: a,
    initialValues: r,
    triggerSection: u,
    queryLength: d
  } = e;
  null != n && l(n.inputType !== c.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), s.default.dispatch({
    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
    channelId: t,
    command: n,
    section: i,
    initialValues: r,
    location: a,
    triggerSection: u,
    queryLength: d
  })
}

function h(e, t) {
  s.default.dispatch({
    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
    channelId: e,
    commandId: t
  })
}

function E(e, t) {
  s.default.dispatch({
    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
    channelId: e,
    changedOptionStates: t
  })
}

function g(e, t) {
  let n = Object.fromEntries(Object.entries(t).map(e => {
    let [t, n] = e;
    return [t, {
      lastValidationResult: n
    }]
  }));
  E(e, n)
}

function m(e, t, n, i) {
  return a.default.put({
    body: {
      permissions: i
    },
    url: _.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
  })
}
let A = (e, t, n, i, l) => {
  s.default.dispatch({
    type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
    context: e,
    query: t,
    limit: n,
    commandType: i,
    applicationId: l
  })
};

function T(e, t, n) {
  var i;
  l(null != t.autocomplete, "Missing autocomplete context");
  let {
    query: c,
    name: f
  } = t.autocomplete, h = d.default.fromTimestamp(Date.now());
  s.default.dispatch({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
    nonce: h,
    channelId: t.channel.id,
    query: c,
    name: f
  }), null == o.default.getAutocompleteChoices(t.channel.id, f, c) && a.default.post({
    url: _.Endpoints.INTERACTIONS,
    body: {
      type: r.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
      application_id: e.applicationId,
      guild_id: null === (i = t.guild) || void 0 === i ? void 0 : i.id,
      channel_id: t.channel.id,
      session_id: u.default.getSessionId(),
      data: n,
      nonce: h
    },
    timeout: 3e3
  }).catch(() => {
    s.default.dispatch({
      type: "INTERACTION_FAILURE",
      nonce: h
    })
  })
}

function p(e, t, n) {
  s.default.dispatch({
    type: "APPLICATION_COMMAND_FETCH",
    channelId: t,
    commandId: n,
    guildId: e
  })
}

function S(e, t, n) {
  s.default.dispatch({
    type: "APPLICATION_COMMANDS_FETCH",
    channelId: t,
    commandIds: n,
    guildId: e
  })
}

function M(e) {
  let {
    guildId: t,
    channelId: n,
    applicationId: i
  } = e;
  s.default.dispatch({
    type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION",
    channelId: n,
    guildId: t,
    applicationId: i
  })
}

function N(e, t, n) {
  s.default.dispatch({
    type: "APPLICATION_COMMAND_REGISTRY_UPDATE",
    applications: t,
    commands: e,
    channelId: n
  })
}