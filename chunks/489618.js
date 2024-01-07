            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("866227"),
                a = s.n(l),
                n = s("65597"),
                r = s("77078"),
                d = s("519705"),
                o = s("305961"),
                u = s("282109"),
                c = s("34676"),
                h = s("47495"),
                f = s("468200"),
                N = s("782340"),
                g = s("518887");

            function S(e) {
                var t;
                let {
                    guildId: s
                } = e, l = (0, n.default)([o.default], () => o.default.getGuild(s)), S = (0, n.default)([u.default], () => u.default.isMuted(s)), E = (0, n.default)([u.default], () => u.default.getMuteConfig(s));
                return null == l ? null : (0, i.jsxs)(r.FormItem, {
                    children: [(0, i.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: S,
                        onChange: e => {
                            d.default.updateGuildNotificationSettings(s, {
                                muted: e
                            }, c.NotificationLabel.muted(e))
                        },
                        style: {
                            marginBottom: 0
                        },
                        note: N.default.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
                        children: N.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                            name: l.name
                        })
                    }), S && (0, i.jsxs)("div", {
                        className: g.mutedConfig,
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(r.FormTitle, {
                                tag: "h3",
                                children: N.default.Messages.MUTE_UNTIL
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: function(e) {
                                    return null == e || null == e.end_time ? null : N.default.Messages.MUTED_UNTIL_TIME.format({
                                        endTime: new Date(e.end_time).toLocaleString(N.default.getLocale(), {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit"
                                        })
                                    })
                                }(E)
                            })]
                        }), (0, i.jsx)(r.SingleSelect, {
                            onChange: e => {
                                let t = e > 0 ? a().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(s, {
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: t
                                    },
                                    muted: !0
                                }, c.NotificationLabels.Muted)
                            },
                            options: (0, h.getMuteTimeOptions)(),
                            value: null !== (t = null == E ? void 0 : E.selected_time_window) && void 0 !== t ? t : f.MuteUntilSeconds.ALWAYS
                        })]
                    })]
                })
            }