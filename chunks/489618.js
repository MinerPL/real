            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("866227"),
                a = i.n(s),
                l = i("65597"),
                r = i("77078"),
                d = i("519705"),
                o = i("305961"),
                u = i("282109"),
                c = i("34676"),
                S = i("47495"),
                h = i("468200"),
                g = i("782340"),
                N = i("518887");

            function f(e) {
                var t;
                let {
                    guildId: i
                } = e, s = (0, l.default)([o.default], () => o.default.getGuild(i)), f = (0, l.default)([u.default], () => u.default.isMuted(i)), _ = (0, l.default)([u.default], () => u.default.getMuteConfig(i));
                return null == s ? null : (0, n.jsxs)(r.FormItem, {
                    children: [(0, n.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: f,
                        onChange: e => {
                            d.default.updateGuildNotificationSettings(i, {
                                muted: e
                            }, c.NotificationLabel.muted(e))
                        },
                        style: {
                            marginBottom: 0
                        },
                        note: g.default.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
                        children: g.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                            name: s.name
                        })
                    }), f && (0, n.jsxs)("div", {
                        className: N.mutedConfig,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                tag: "h3",
                                children: g.default.Messages.MUTE_UNTIL
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: function(e) {
                                    return null == e || null == e.end_time ? null : g.default.Messages.MUTED_UNTIL_TIME.format({
                                        endTime: new Date(e.end_time).toLocaleString(g.default.getLocale(), {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit"
                                        })
                                    })
                                }(_)
                            })]
                        }), (0, n.jsx)(r.SingleSelect, {
                            onChange: e => {
                                let t = e > 0 ? a().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(i, {
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: t
                                    },
                                    muted: !0
                                }, c.NotificationLabels.Muted)
                            },
                            options: (0, S.getMuteTimeOptions)(),
                            value: null !== (t = null == _ ? void 0 : _.selected_time_window) && void 0 !== t ? t : h.MuteUntilSeconds.ALWAYS
                        })]
                    })]
                })
            }