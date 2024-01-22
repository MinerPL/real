"use strict";
s.r(a), s.d(a, {
  default: function() {
    return _
  }
});
var n = s("759843"),
  t = s("448993"),
  l = s("840707"),
  E = s("49111"),
  _ = {
    createGuildFromTemplate: async function e(e, a, s, _, d) {
      try {
        let t = await l.default.post({
          url: E.Endpoints.GUILDS,
          body: {
            name: e,
            icon: a,
            channels: s.channels,
            system_channel_id: s.system_channel_id,
            roles: s.roles,
            guild_template_code: s.code,
            staff_only: !!d || void 0
          },
          trackedActionData: {
            event: n.NetworkActionNames.GUILD_CREATE,
            properties: {
              template_name: s.id,
              is_community_intent: _
            }
          }
        });
        return t.body
      } catch (e) {
        throw new t.APIError(e)
      }
    }
  }