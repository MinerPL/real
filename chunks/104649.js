            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("272030"),
                i = n("824563"),
                r = n("401642"),
                u = n("69682"),
                o = n("49111"),
                d = e => {
                    let {
                        connection: t
                    } = e, {
                        user: d
                    } = t, c = d.isNonUserBot(), f = (0, l.useStateFromStores)([i.default], () => c ? null : i.default.getStatus(d.id));
                    return (0, a.jsx)(u.FriendRow, {
                        user: d,
                        status: null != f ? f : o.StatusTypes.UNKNOWN,
                        onSelect: () => {
                            (0, r.openUserProfileModal)({
                                userId: d.id,
                                analyticsLocation: {
                                    section: o.AnalyticsSections.DM_PROFILE
                                }
                            })
                        },
                        onContextMenu: e => {
                            var t, l;
                            return t = e, l = d, void(0, s.openContextMenuLazy)(t, async () => {
                                let {
                                    default: e
                                } = await n.el("406784").then(n.bind(n, "406784"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    user: l
                                })
                            })
                        }
                    })
                }