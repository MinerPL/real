"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var d = l("872717"),
  a = l("913144"),
  r = l("599110"),
  n = l("82339"),
  o = l("49111"),
  i = {
    resolveGuildTemplate: function e(t) {
      return a.default.isDispatching() ? Promise.resolve().then(() => e(t)) : (a.default.dispatch({
        type: "GUILD_TEMPLATE_RESOLVE",
        code: t
      }), d.default.get({
        url: o.Endpoints.UNRESOLVED_GUILD_TEMPLATE(t),
        oldFormErrors: !0
      }).then(e => {
        let l = e.body;
        return r.default.track(o.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
          resolved: !0,
          guild_template_code: t,
          guild_template_name: l.name,
          guild_template_description: l.description,
          guild_template_guild_id: l.source_guild_id
        }), a.default.dispatch({
          type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
          guildTemplate: l,
          code: t
        }), {
          guildTemplate: (0, n.default)(l),
          code: t
        }
      }, () => (r.default.track(o.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
        resolved: !1,
        guild_template_code: t
      }), a.default.dispatch({
        type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
        code: t
      }), {
        guildTemplate: null,
        code: t
      })))
    },
    loadTemplatesForGuild: e => d.default.get({
      url: o.Endpoints.GUILD_TEMPLATES(e),
      oldFormErrors: !0
    }).then(e => (a.default.dispatch({
      type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
      guildTemplates: e.body
    }), e)),
    createGuildTemplate: (e, t, l) => d.default.post({
      url: o.Endpoints.GUILD_TEMPLATES(e),
      body: {
        name: t,
        description: l
      },
      oldFormErrors: !0
    }).then(e => {
      a.default.dispatch({
        type: "GUILD_TEMPLATE_CREATE_SUCCESS",
        guildTemplate: e.body,
        code: e.body.code
      })
    }),
    syncGuildTemplate: (e, t) => d.default.put({
      url: o.Endpoints.GUILD_TEMPLATE(e, t),
      oldFormErrors: !0
    }).then(e => {
      a.default.dispatch({
        type: "GUILD_TEMPLATE_SYNC_SUCCESS",
        guildTemplate: e.body,
        code: t
      })
    }),
    updateGuildTemplate: (e, t, l, r) => d.default.patch({
      url: o.Endpoints.GUILD_TEMPLATE(e, t),
      body: {
        name: l,
        description: r
      },
      oldFormErrors: !0
    }).then(e => {
      a.default.dispatch({
        type: "GUILD_TEMPLATE_SYNC_SUCCESS",
        guildTemplate: e.body,
        code: t
      })
    }),
    deleteGuildTemplate: (e, t) => d.default.delete({
      url: o.Endpoints.GUILD_TEMPLATE(e, t),
      oldFormErrors: !0
    }).then(() => {
      a.default.dispatch({
        type: "GUILD_TEMPLATE_DELETE_SUCCESS",
        guildId: e,
        code: t
      })
    })
  }