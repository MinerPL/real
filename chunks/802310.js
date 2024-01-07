            "use strict";
            s.r(t), s.d(t, {
                GuildSettingsEmojiInventory: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("252931"),
                o = s("13162"),
                d = s("330893"),
                u = s("817963"),
                c = s("915639"),
                E = s("599110"),
                _ = s("240481"),
                T = s("49111"),
                I = s("782340"),
                S = s("174715");
            let N = e => {
                let {
                    guild: t
                } = e, {
                    inventorySettings: s
                } = t, N = (null == s ? void 0 : s.isEmojiPackCollectible) !== !1, g = (0, u.useHasInventoryGuildSettingsPermission)(t), {
                    showSettingsToggle: f
                } = (0, r.useInventoryGuildSettingsExperiment)({
                    guildId: t.id
                }), [A, L] = n.useState(N), [m, C] = n.useState(void 0), O = (0, l.useStateFromStores)([c.default], () => c.default.locale);
                n.useEffect(() => {
                    if (!g) return;
                    let e = async () => {
                        var e;
                        let s = await (0, o.getPackMetadata)({
                            packId: t.id
                        });
                        C(null !== (e = null == s ? void 0 : s.collectedCount) && void 0 !== e ? e : 0)
                    };
                    e()
                }, [t.id, g]);
                let h = async () => {
                    try {
                        L(!N), await (0, o.updateInventorySettings)({
                            guildId: t.id,
                            settings: {
                                isEmojiPackCollectible: !N
                            }
                        }), E.default.track(T.AnalyticEvents.INVENTORY_GUILD_SETTINGS, {
                            publish_emoji_in_pack: !N,
                            guild_id: t.id
                        })
                    } catch {
                        L(N)
                    }
                };
                return f && g ? (0, a.jsxs)(i.FormSection, {
                    children: [(0, a.jsx)(i.FormSwitch, {
                        className: S.marginBottom8,
                        value: A,
                        onChange: () => {
                            let e = null != m ? m : 0;
                            if (A && e > 0) {
                                let t = (0, _.humanizeValue)(e, O);
                                (0, d.openInventoryDisablePublishEmojiModal)({
                                    collectedCount: t,
                                    onConfirm: h
                                })
                            } else h()
                        },
                        hideBorder: !0,
                        children: I.default.Messages.INVENTORY_ALLOW_USE_SETTING_V2
                    }), (0, a.jsx)(i.FormText, {
                        className: S.marginBottom4,
                        children: I.default.Messages.INVENTORY_EMOJI_VISIBLE_DESCRIPTION
                    }), void 0 !== m && (0, a.jsx)(i.FormText, {
                        children: I.default.Messages.INVENTORY_EMOJI_COLLECTED_DESCRIPTION_V2.format({
                            number: (0, _.humanizeValue)(m, O)
                        })
                    }), (0, a.jsx)(i.FormDivider, {
                        className: S.divider
                    })]
                }) : null
            }