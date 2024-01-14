"use strict";
s.r(a), s.d(a, {
  default: function() {
    return T
  }
});
var n = s("759843"),
  t = s("448993"),
  l = s("923959"),
  E = s("305961"),
  _ = s("599110"),
  d = s("840707"),
  i = s("49111"),
  T = {
    createGuildFromTemplate: async function e(e, a, s, T, r) {
      try {
        let t = await d.default.post({
            url: i.Endpoints.GUILDS,
            body: {
              name: e,
              icon: a,
              channels: s.channels,
              system_channel_id: s.system_channel_id,
              roles: s.roles,
              guild_template_code: s.code,
              staff_only: !!r || void 0
            },
            trackedActionData: {
              event: n.NetworkActionNames.GUILD_CREATE,
              properties: {
                template_name: s.id,
                is_community_intent: T
              }
            }
          }),
          u = t.body.id;
        return "2TffvPucqHkN" === s.code && E.default.addConditionalChangeListener(() => {
          let e = E.default.getGuild(u);
          if (null != e) {
            let e = l.default.getVocalChannelIds(u).length > 0;
            return _.default.track(i.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
              skipped: !e,
              reason: "guild_voice_channel",
              rating: "0",
              feedback: u
            }), !1
          }
          return !0
        }), t.body
      } catch (e) {
        throw new t.APIError(e)
      }
    }
  }