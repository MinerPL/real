            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("70102");
            var l = n("759843"),
                i = n("627929"),
                r = n("913144"),
                s = n("81732"),
                a = n("282109"),
                o = n("34676"),
                u = n("840707"),
                d = n("519705"),
                c = n("49111"),
                f = n("397336"),
                E = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: E,
                            permissionOverwrites: _ = [],
                            bitrate: p,
                            userLimit: h,
                            parentId: S,
                            skuId: T,
                            branchId: m
                        } = e;
                        r.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let C = {
                            type: n,
                            name: E,
                            permission_overwrites: _
                        };
                        if (null != p && p !== c.BITRATE_DEFAULT && (C.bitrate = p), null != h && h > 0 && (C.user_limit = h), null != S && (C.parent_id = S), n === c.ChannelTypes.GUILD_STORE) {
                            if (null == T) throw Error("Unexpected missing SKU");
                            C.sku_id = T, C.branch_id = m
                        }
                        return u.default.post({
                            url: c.Endpoints.GUILD_CHANNELS(t),
                            body: C,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, i.exact)({
                                        is_private: _.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (a.default.isOptInEnabled(t) && d.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }, o.NotificationLabels.OptedIn), s.default.checkGuildTemplateDirty(t), e), e => {
                            throw r.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, r) => u.default.post({
                        url: c.Endpoints.GUILD_CHANNELS(e),
                        body: {
                            name: t,
                            type: n,
                            topic: r
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.CHANNEL_CREATE,
                            properties: e => {
                                var t, n;
                                return (0, i.exact)({
                                    is_private: !0,
                                    channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                    channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                })
                            }
                        }
                    })
                }