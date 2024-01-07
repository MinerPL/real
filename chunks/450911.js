            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var i = n("872717"),
                a = n("819855"),
                l = n("913144"),
                s = n("81732"),
                r = n("21121"),
                u = n("258158"),
                o = n("393414"),
                d = n("233069"),
                c = n("42203"),
                _ = n("271560"),
                E = n("561288"),
                f = n("987317"),
                h = n("49111"),
                p = n("782340"),
                T = {
                    async openPrivateChannel(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = arguments.length > 3 ? arguments[3] : void 0,
                            l = arguments.length > 4 ? arguments[4] : void 0,
                            s = this._getRecipients(e),
                            r = e => {
                                t && E.default.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null)
                            };
                        if (1 === s.length) {
                            let [e] = s, t = this._openCachedDMChannel(e, l);
                            if (null != t) return r(t), Promise.resolve(t.id)
                        }
                        try {
                            let e = await i.default.post({
                                url: h.Endpoints.USER_CHANNELS,
                                body: {
                                    recipients: s
                                },
                                context: {
                                    location: a
                                },
                                oldFormErrors: !0
                            });
                            null == l || l();
                            let t = this._openPrivateChannel(e.body);
                            return r(t), e.body.id
                        } catch (e) {
                            var o;
                            throw (null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.code) === h.AbortCodes.QUARANTINED && (0, u.default)(), e
                        }
                    },
                    async createBroadcastPrivateChannel() {
                        try {
                            let e = await i.default.post({
                                    url: h.Endpoints.BROADCAST_PRIVATE_CHANNEL
                                }),
                                t = (0, d.createChannelRecordFromServer)(e.body);
                            return E.default.call(t.id, !1, !1, null), e.body.id
                        } catch (t) {
                            var e;
                            throw (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === h.AbortCodes.QUARANTINED && (0, u.default)(), t
                        }
                    },
                    _openCachedDMChannel(e, t) {
                        let n = c.default.getDMFromUserId(e),
                            i = null != n ? c.default.getChannel(n) : null;
                        return null != i ? (null == t || t(), null != (0, r.getRootNavigationRefIfInExperiment)() ? (0, o.transitionTo)(h.Routes.CHANNEL(h.ME, i.id), {
                            navigationReplace: !0
                        }) : f.default.selectPrivateChannel(i.id), i) : null
                    },
                    async ensurePrivateChannel(e) {
                        let t = this._getRecipients(e),
                            n = await i.default.post({
                                url: h.Endpoints.USER_CHANNELS,
                                body: {
                                    recipients: t
                                },
                                oldFormErrors: !0
                            }),
                            a = (0, d.createChannelRecordFromServer)(n.body);
                        return l.default.dispatch({
                            type: "CHANNEL_CREATE",
                            channel: a
                        }), a.id
                    },
                    async getOrEnsurePrivateChannel(e) {
                        let t = c.default.getDMFromUserId(e);
                        return null != t ? t : await this.ensurePrivateChannel(e)
                    },
                    async getDMChannel(e) {
                        let t = await i.default.get(h.Endpoints.DM_CHANNEL(e)),
                            n = (0, d.createChannelRecordFromServer)(t.body);
                        return l.default.dispatch({
                            type: "CHANNEL_CREATE",
                            channel: n
                        }), n.id
                    },
                    _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
                    _openPrivateChannel(e) {
                        let t = (0, d.createChannelRecordFromServer)(e);
                        return l.default.dispatch({
                            type: "CHANNEL_CREATE",
                            channel: t
                        }), null != (0, r.getRootNavigationRefIfInExperiment)() ? (0, o.transitionTo)(h.Routes.CHANNEL(h.ME, t.id), {
                            navigationReplace: !0
                        }) : f.default.selectPrivateChannel(t.id), t
                    },
                    closePrivateChannel(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return l.default.dispatch({
                            type: "CHANNEL_DELETE",
                            channel: {
                                id: e,
                                guild_id: void 0,
                                parent_id: void 0
                            },
                            silent: n
                        }), t && !__OVERLAY__ && (0, o.transitionTo)(h.Routes.FRIENDS), i.default.delete({
                            url: h.Endpoints.CHANNEL(e),
                            query: {
                                silent: n
                            },
                            oldFormErrors: !0
                        }).then(() => {
                            a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
                        }).catch(() => {
                            a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
                        })
                    },
                    updatePermissionOverwrite: (e, t) => i.default.put({
                        url: h.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
                        body: t,
                        oldFormErrors: !0
                    }),
                    clearPermissionOverwrite: (e, t) => i.default.delete({
                        url: h.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
                        oldFormErrors: !0
                    }),
                    addRecipient(e, t, n, l) {
                        return i.default.put({
                            url: h.Endpoints.CHANNEL_RECIPIENT(e, t),
                            context: {
                                location: n
                            },
                            oldFormErrors: !0
                        }).then(t => (a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == l || l(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (a.AccessibilityAnnouncer.announce(p.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e))
                    },
                    addRecipients(e, t, n, i) {
                        return this.addRecipient(e, t[0], n, i).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
                    },
                    removeRecipient: (e, t) => i.default.delete({
                        url: h.Endpoints.CHANNEL_RECIPIENT(e, t),
                        oldFormErrors: !0
                    }),
                    setDMOwner: (e, t) => i.default.patch({
                        url: h.Endpoints.CHANNEL(e),
                        body: {
                            owner: t
                        },
                        oldFormErrors: !0
                    }),
                    async setName(e, t) {
                        let n = c.default.getChannel(e),
                            a = await i.default.patch({
                                url: h.Endpoints.CHANNEL(e),
                                body: {
                                    name: t
                                },
                                oldFormErrors: !0
                            }),
                            l = null == n ? void 0 : n.getGuildId();
                        return null != l && !(null == n ? void 0 : n.isThread()) && s.default.checkGuildTemplateDirty(l), a
                    },
                    setIcon(e, t) {
                        let n = c.default.getChannel(e);
                        i.default.patch({
                            url: h.Endpoints.CHANNEL(e),
                            body: {
                                icon: t
                            },
                            oldFormErrors: !0
                        }).then(() => {
                            let e = null == n ? void 0 : n.getGuildId();
                            null != e && !(null == n ? void 0 : n.isThread()) && s.default.checkGuildTemplateDirty(e)
                        })
                    },
                    convertToGuild: e => i.default.post({
                        url: h.Endpoints.CHANNEL_CONVERT(e),
                        oldFormErrors: !0
                    }),
                    preload(e, t) {
                        l.default.dispatch({
                            type: "CHANNEL_PRELOAD",
                            guildId: e === h.ME ? null : e,
                            channelId: t,
                            context: h.CURRENT_APP_CONTEXT
                        })
                    },
                    fetchChannelStoreListing(e, t) {
                        let n = null != t ? h.Endpoints.CHANNEL_STORE_LISTING_SKU(e, t) : h.Endpoints.CHANNEL_STORE_LISTING(e);
                        return (0, _.httpGetWithCountryCodeQuery)(n).then(t => {
                            l.default.dispatch({
                                type: "STORE_LISTING_FETCH_SUCCESS",
                                channelId: e,
                                storeListing: t.body
                            })
                        })
                    },
                    async createTextChannel(e, t, n, a) {
                        let l = {
                            type: h.ChannelTypes.GUILD_TEXT,
                            name: t,
                            permission_overwrites: []
                        };
                        null != n && (l.parent_id = n), null != a && (l.topic = a);
                        let r = await i.default.post({
                            url: h.Endpoints.GUILD_CHANNELS(e),
                            body: l,
                            oldFormErrors: !0
                        });
                        return s.default.checkGuildTemplateDirty(e), r
                    }
                }