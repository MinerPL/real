            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("519705"),
                u = n("531674"),
                d = n("319165"),
                c = n("282109"),
                f = n("34676"),
                E = n("782340");

            function _(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: a,
                        muteConfig: _
                    } = (0, i.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    h = (0, d.useMutedUntilText)(_);
                return null == n ? null : a ? (0, l.jsx)(r.MenuItem, {
                    id: "unmute-guild",
                    label: E.default.Messages.UNMUTE_SERVER,
                    subtext: h,
                    action: () => o.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    }, f.NotificationLabels.Unmuted)
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-guild",
                    label: E.default.Messages.MUTE_SERVER,
                    action: () => o.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }, f.NotificationLabels.Muted),
                    children: (0, u.getMuteTimes)().map(e => {
                        let {
                            value: a,
                            label: i
                        } = e;
                        return (0, l.jsx)(r.MenuItem, {
                            id: "".concat(a),
                            label: i,
                            action: () => (function(e) {
                                if (null == n) return;
                                let l = e > 0 ? s().add(e, "second").toISOString() : null;
                                o.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: l
                                    }
                                }, f.NotificationLabels.Muted, t)
                            })(a)
                        }, a)
                    })
                })
            }