            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("18054"),
                i = n("679653"),
                r = n("367376"),
                o = n("233069"),
                u = n("957255"),
                d = n("987772"),
                c = n("938244"),
                f = n("172554"),
                h = n("49111"),
                C = n("782340"),
                p = n("212697");

            function m(e) {
                let {
                    channel: t
                } = e, n = (0, i.default)(t, !0), m = (0, s.useStateFromStores)([u.default], () => u.default.can(h.Permissions.MANAGE_CHANNELS, t) && o.EDITABLE_CHANNEL_TYPES.has(t.type));
                return (0, a.jsxs)(f.default, {
                    channelId: t.id,
                    children: [(0, a.jsx)(f.EmptyMessageIcon, {
                        channelType: t.type
                    }), (0, a.jsx)(f.EmptyMessageHeader, {
                        children: C.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                            channelName: n
                        })
                    }), (0, a.jsx)(f.EmptyMessageBody, {
                        children: C.default.Messages.BEGINNING_CHANNEL_DESCRIPTION.format({
                            channelName: n,
                            topicHook: () => r.default.parseTopic(t.topic, !0, {
                                channelId: t.id
                            })
                        })
                    }), m ? (0, a.jsx)("div", {
                        className: p.buttonContainer,
                        children: (0, a.jsx)(c.default, {
                            label: C.default.Messages.EDIT_CHANNEL,
                            onClick: () => {
                                l.default.open(t.id)
                            },
                            icon: (0, a.jsx)(d.default, {
                                width: 16,
                                height: 16
                            })
                        })
                    }) : null]
                })
            }