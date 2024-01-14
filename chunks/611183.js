"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("917351"),
  a = n.n(i),
  l = n("872717"),
  r = n("913144"),
  s = n("49111");
let u = ["Spidey Bot", "Captain Hook"];
var o = {
  fetchForGuild(e) {
    r.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e
    }), l.default.get({
      url: s.Endpoints.GUILD_WEBHOOKS(e),
      oldFormErrors: !0
    }).then(t => {
      let {
        body: n
      } = t;
      return r.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        webhooks: n
      })
    }).catch(t => {
      let {
        body: n
      } = t;
      r.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        error: n.message
      })
    })
  },
  fetchForChannel(e, t) {
    r.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e,
      channelId: t
    }), l.default.get({
      url: s.Endpoints.CHANNEL_WEBHOOKS(t),
      oldFormErrors: !0
    }).then(n => {
      let {
        body: i
      } = n;
      return r.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        channelId: t,
        webhooks: i
      })
    })
  },
  create: (e, t, n) => (null == n && (n = u[a.random(0, u.length - 1)]), l.default.post({
    url: s.Endpoints.CHANNEL_WEBHOOKS(t),
    body: {
      name: n
    },
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return r.default.dispatch({
      type: "WEBHOOK_CREATE",
      guildId: e,
      webhook: n
    }), n
  })),
  delete: (e, t) => l.default.delete({
    url: s.Endpoints.WEBHOOK(t),
    oldFormErrors: !0
  }).then(() => {
    r.default.dispatch({
      type: "WEBHOOK_DELETE",
      guildId: e,
      webhookId: t
    })
  }),
  update: (e, t, n) => l.default.patch({
    url: s.Endpoints.WEBHOOK(t),
    body: n,
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return r.default.dispatch({
      type: "WEBHOOK_UPDATE",
      guildId: e,
      webhook: n
    }), n
  })
}