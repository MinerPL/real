            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("70102");
            var i = n("759843"),
                r = n("627929"),
                l = n("913144"),
                o = n("81732"),
                s = n("282109"),
                a = n("34676"),
                u = n("840707"),
                c = n("519705"),
                d = n("49111"),
                f = n("397336"),
                E = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: E,
                            permissionOverwrites: _ = [],
                            bitrate: h,
                            userLimit: p,
                            parentId: I,
                            skuId: S,
                            branchId: g
                        } = e;
                        l.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let T = {
                            type: n,
                            name: E,
                            permission_overwrites: _
                        };
                        if (null != h && h !== d.BITRATE_DEFAULT && (T.bitrate = h), null != p && p > 0 && (T.user_limit = p), null != I && (T.parent_id = I), n === d.ChannelTypes.GUILD_STORE) {
                            if (null == S) throw Error("Unexpected missing SKU");
                            T.sku_id = S, T.branch_id = g
                        }
                        return u.default.post({
                            url: d.Endpoints.GUILD_CHANNELS(t),
                            body: T,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, r.exact)({
                                        is_private: _.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (s.default.isOptInEnabled(t) && c.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }, a.NotificationLabels.OptedIn), o.default.checkGuildTemplateDirty(t), e), e => {
                            throw l.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, l) => u.default.post({
                        url: d.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: l
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, r.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }