"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var s = n("872717"),
  i = n("819855"),
  r = n("913144"),
  a = n("81732"),
  o = n("21121"),
  d = n("258158"),
  u = n("393414"),
  l = n("233069"),
  f = n("42203"),
  _ = n("271560"),
  c = n("561288"),
  g = n("987317"),
  m = n("49111"),
  h = n("782340"),
  v = {
    async openPrivateChannel(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 ? arguments[4] : void 0,
        a = this._getRecipients(e),
        o = e => {
          t && c.default.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null)
        };
      if (1 === a.length) {
        let [e] = a, t = this._openCachedDMChannel(e, r);
        if (null != t) return o(t), Promise.resolve(t.id)
      }
      try {
        let e = await s.default.post({
          url: m.Endpoints.USER_CHANNELS,
          body: {
            recipients: a
          },
          context: {
            location: i
          },
          oldFormErrors: !0
        });
        null == r || r();
        let t = this._openPrivateChannel(e.body);
        return o(t), e.body.id
      } catch (e) {
        var u;
        throw (null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code) === m.AbortCodes.QUARANTINED && (0, d.default)(), e
      }
    },
    async createBroadcastPrivateChannel() {
      try {
        let e = await s.default.post({
            url: m.Endpoints.BROADCAST_PRIVATE_CHANNEL
          }),
          t = (0, l.createChannelRecordFromServer)(e.body);
        return c.default.call(t.id, !1, !1, null), e.body.id
      } catch (t) {
        var e;
        throw (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === m.AbortCodes.QUARANTINED && (0, d.default)(), t
      }
    },
    _openCachedDMChannel(e, t) {
      let n = f.default.getDMFromUserId(e),
        s = null != n ? f.default.getChannel(n) : null;
      return null != s ? (null == t || t(), null != (0, o.getRootNavigationRefIfInExperiment)() ? (0, u.transitionTo)(m.Routes.CHANNEL(m.ME, s.id), {
        navigationReplace: !0
      }) : g.default.selectPrivateChannel(s.id), s) : null
    },
    async ensurePrivateChannel(e) {
      let t = this._getRecipients(e),
        n = await s.default.post({
          url: m.Endpoints.USER_CHANNELS,
          body: {
            recipients: t
          },
          oldFormErrors: !0
        }),
        i = (0, l.createChannelRecordFromServer)(n.body);
      return r.default.dispatch({
        type: "CHANNEL_CREATE",
        channel: i
      }), i.id
    },
    async getOrEnsurePrivateChannel(e) {
      let t = f.default.getDMFromUserId(e);
      return null != t ? t : await this.ensurePrivateChannel(e)
    },
    async getDMChannel(e) {
      let t = await s.default.get(m.Endpoints.DM_CHANNEL(e)),
        n = (0, l.createChannelRecordFromServer)(t.body);
      return r.default.dispatch({
        type: "CHANNEL_CREATE",
        channel: n
      }), n.id
    },
    _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
    _openPrivateChannel(e) {
      let t = (0, l.createChannelRecordFromServer)(e);
      return r.default.dispatch({
        type: "CHANNEL_CREATE",
        channel: t
      }), null != (0, o.getRootNavigationRefIfInExperiment)() ? (0, u.transitionTo)(m.Routes.CHANNEL(m.ME, t.id), {
        navigationReplace: !0
      }) : g.default.selectPrivateChannel(t.id), t
    },
    closePrivateChannel(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return r.default.dispatch({
        type: "CHANNEL_DELETE",
        channel: {
          id: e,
          guild_id: void 0,
          parent_id: void 0
        },
        silent: n
      }), t && !__OVERLAY__ && (0, u.transitionTo)(m.Routes.FRIENDS), s.default.delete({
        url: m.Endpoints.CHANNEL(e),
        query: {
          silent: n
        },
        oldFormErrors: !0
      }).then(() => {
        i.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
      }).catch(() => {
        i.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
      })
    },
    updatePermissionOverwrite: (e, t) => s.default.put({
      url: m.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
      body: t,
      oldFormErrors: !0
    }),
    clearPermissionOverwrite: (e, t) => s.default.delete({
      url: m.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
      oldFormErrors: !0
    }),
    addRecipient(e, t, n, r) {
      return s.default.put({
        url: m.Endpoints.CHANNEL_RECIPIENT(e, t),
        context: {
          location: n
        },
        oldFormErrors: !0
      }).then(t => (i.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == r || r(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (i.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e))
    },
    addRecipients(e, t, n, s) {
      return this.addRecipient(e, t[0], n, s).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
    },
    removeRecipient: (e, t) => s.default.delete({
      url: m.Endpoints.CHANNEL_RECIPIENT(e, t),
      oldFormErrors: !0
    }),
    setDMOwner: (e, t) => s.default.patch({
      url: m.Endpoints.CHANNEL(e),
      body: {
        owner: t
      },
      oldFormErrors: !0
    }),
    async setName(e, t) {
      let n = f.default.getChannel(e),
        i = await s.default.patch({
          url: m.Endpoints.CHANNEL(e),
          body: {
            name: t
          },
          oldFormErrors: !0
        }),
        r = null == n ? void 0 : n.getGuildId();
      return null != r && !(null == n ? void 0 : n.isThread()) && a.default.checkGuildTemplateDirty(r), i
    },
    setIcon(e, t) {
      let n = f.default.getChannel(e);
      s.default.patch({
        url: m.Endpoints.CHANNEL(e),
        body: {
          icon: t
        },
        oldFormErrors: !0
      }).then(() => {
        let e = null == n ? void 0 : n.getGuildId();
        null != e && !(null == n ? void 0 : n.isThread()) && a.default.checkGuildTemplateDirty(e)
      })
    },
    convertToGuild: e => s.default.post({
      url: m.Endpoints.CHANNEL_CONVERT(e),
      oldFormErrors: !0
    }),
    preload(e, t) {
      r.default.dispatch({
        type: "CHANNEL_PRELOAD",
        guildId: e === m.ME ? null : e,
        channelId: t,
        context: m.CURRENT_APP_CONTEXT
      })
    },
    fetchChannelStoreListing(e, t) {
      let n = null != t ? m.Endpoints.CHANNEL_STORE_LISTING_SKU(e, t) : m.Endpoints.CHANNEL_STORE_LISTING(e);
      return (0, _.httpGetWithCountryCodeQuery)(n).then(t => {
        r.default.dispatch({
          type: "STORE_LISTING_FETCH_SUCCESS",
          channelId: e,
          storeListing: t.body
        })
      })
    },
    async createTextChannel(e, t, n, i) {
      let r = {
        type: m.ChannelTypes.GUILD_TEXT,
        name: t,
        permission_overwrites: []
      };
      null != n && (r.parent_id = n), null != i && (r.topic = i);
      let o = await s.default.post({
        url: m.Endpoints.GUILD_CHANNELS(e),
        body: r,
        oldFormErrors: !0
      });
      return a.default.checkGuildTemplateDirty(e), o
    }
  }