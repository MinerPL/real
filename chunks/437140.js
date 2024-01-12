            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("70102");
            var i = n("759843"),
                r = n("627929"),
                l = n("913144"),
                o = n("81732"),
                u = n("282109"),
                a = n("34676"),
                s = n("840707"),
                c = n("519705"),
                d = n("49111"),
                f = n("397336"),
                h = {
                    createChannel(e) {
                        let {
                            guildId: t,
                            type: n,
                            name: h,
                            permissionOverwrites: p = [],
                            bitrate: E,
                            userLimit: _,
                            parentId: g,
                            skuId: v,
                            branchId: C
                        } = e;
                        l.default.dispatch({
                            type: "CREATE_CHANNEL_MODAL_SUBMIT"
                        });
                        let I = {
                            type: n,
                            name: h,
                            permission_overwrites: p
                        };
                        if (null != E && E !== d.BITRATE_DEFAULT && (I.bitrate = E), null != _ && _ > 0 && (I.user_limit = _), null != g && (I.parent_id = g), n === d.ChannelTypes.GUILD_STORE) {
                            if (null == v) throw Error("Unexpected missing SKU");
                            I.sku_id = v, I.branch_id = C
                        }
                        return s.default.post({
                            url: d.Endpoints.GUILD_CHANNELS(t),
                            body: I,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.CHANNEL_CREATE,
                                properties: e => {
                                    var t, n;
                                    return (0, r.exact)({
                                        is_private: p.length > 0,
                                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                                        channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                                    })
                                }
                            }
                        }).then(e => (u.default.isOptInEnabled(t) && c.default.updateChannelOverrideSettings(t, e.body.id, {
                            flags: f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
                        }, a.NotificationLabels.OptedIn), o.default.checkGuildTemplateDirty(t), e), e => {
                            throw l.default.dispatch({
                                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                                errors: e.body
                            }), e
                        })
                    },
                    createRoleSubscriptionTemplateChannel: (e, t, n, l) => s.default.post({
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