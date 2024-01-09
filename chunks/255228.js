            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("319165"),
                u = n("755624"),
                d = n("263024"),
                c = n("531674"),
                f = n("782340");

            function E(e) {
                let [t, n, a] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.isMuted(e.id), u.default.getMuteConfig(e.id), u.default.hasJoined(e.id)]), E = (0, o.useMutedUntilText)(n);

                function _(t) {
                    d.default.setNotificationSettings(e, {
                        muted: t
                    })
                }
                return a ? t ? (0, l.jsx)(r.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? f.default.Messages.UNMUTE_FORUM_POST : f.default.Messages.UNMUTE_THREAD,
                    subtext: E,
                    action: () => _(!1)
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? f.default.Messages.MUTE_FORUM_POST : f.default.Messages.MUTE_THREAD,
                    action: () => _(!0),
                    children: (0, c.getMuteTimes)().map(t => {
                        let {
                            value: n,
                            label: a
                        } = t;
                        return (0, l.jsx)(r.MenuItem, {
                            id: "".concat(n),
                            label: a,
                            action: () => (function(t) {
                                let n = t > 0 ? s().add(t, "second").toISOString() : null;
                                d.default.setNotificationSettings(e, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: t,
                                        end_time: n
                                    }
                                })
                            })(n)
                        }, n)
                    })
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? f.default.Messages.MUTE_FORUM_POST : f.default.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }