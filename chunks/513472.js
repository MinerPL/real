            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("866227"),
                a = n.n(i),
                l = n("446674"),
                u = n("77078"),
                r = n("519705"),
                o = n("531674"),
                d = n("319165"),
                c = n("282109"),
                f = n("34676"),
                S = n("782340");

            function E(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: i,
                        muteConfig: E
                    } = (0, l.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    g = (0, d.useMutedUntilText)(E);
                return null == n ? null : i ? (0, s.jsx)(u.MenuItem, {
                    id: "unmute-guild",
                    label: S.default.Messages.UNMUTE_SERVER,
                    subtext: g,
                    action: () => r.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    }, f.NotificationLabels.Unmuted)
                }) : (0, s.jsx)(u.MenuItem, {
                    id: "mute-guild",
                    label: S.default.Messages.MUTE_SERVER,
                    action: () => r.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }, f.NotificationLabels.Muted),
                    children: (0, o.getMuteTimes)().map(e => {
                        let {
                            value: i,
                            label: l
                        } = e;
                        return (0, s.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: l,
                            action: () => (function(e) {
                                if (null == n) return;
                                let s = e > 0 ? a().add(e, "second").toISOString() : null;
                                r.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: s
                                    }
                                }, f.NotificationLabels.Muted, t)
                            })(i)
                        }, i)
                    })
                })
            }