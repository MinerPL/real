"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("917351"),
  o = n.n(r),
  i = n("872717"),
  u = n("913144"),
  a = n("49111");
let l = ["Spidey Bot", "Captain Hook"];
var d = {
  fetchForGuild(e) {
    u.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e
    }), i.default.get({
      url: a.Endpoints.GUILD_WEBHOOKS(e),
      oldFormErrors: !0
    }).then(t => {
      let {
        body: n
      } = t;
      return u.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        webhooks: n
      })
    }).catch(t => {
      let {
        body: n
      } = t;
      u.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        error: n.message
      })
    })
  },
  fetchForChannel(e, t) {
    u.default.dispatch({
      type: "WEBHOOKS_FETCHING",
      guildId: e,
      channelId: t
    }), i.default.get({
      url: a.Endpoints.CHANNEL_WEBHOOKS(t),
      oldFormErrors: !0
    }).then(n => {
      let {
        body: r
      } = n;
      return u.default.dispatch({
        type: "WEBHOOKS_UPDATE",
        guildId: e,
        channelId: t,
        webhooks: r
      })
    })
  },
  create: (e, t, n) => (null == n && (n = l[o.random(0, l.length - 1)]), i.default.post({
    url: a.Endpoints.CHANNEL_WEBHOOKS(t),
    body: {
      name: n
    },
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return u.default.dispatch({
      type: "WEBHOOK_CREATE",
      guildId: e,
      webhook: n
    }), n
  })),
  delete: (e, t) => i.default.delete({
    url: a.Endpoints.WEBHOOK(t),
    oldFormErrors: !0
  }).then(() => {
    u.default.dispatch({
      type: "WEBHOOK_DELETE",
      guildId: e,
      webhookId: t
    })
  }),
  update: (e, t, n) => i.default.patch({
    url: a.Endpoints.WEBHOOK(t),
    body: n,
    oldFormErrors: !0
  }).then(t => {
    let {
      body: n
    } = t;
    return u.default.dispatch({
      type: "WEBHOOK_UPDATE",
      guildId: e,
      webhook: n
    }), n
  })
}