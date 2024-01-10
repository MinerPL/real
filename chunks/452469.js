            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("987317"),
                i = n("713726"),
                l = n("754493"),
                r = n("374021"),
                o = n("649275"),
                u = n("751661"),
                d = n("734019"),
                c = n("293137"),
                E = n("962541"),
                f = n("782340");

            function _() {
                return (0, a.jsx)(E.default, {
                    tooltipText: f.default.Messages.DISCONNECT_SELF,
                    onClick: () => {
                        (0, i.stopBroadcast)(), s.default.disconnect()
                    },
                    icon: c.default
                })
            }

            function h(e) {
                let {
                    channel: t
                } = e;
                return (0, a.jsx)(E.default, {
                    tooltipText: f.default.Messages.AUDIENCE_DISCONNECT,
                    onClick: () => {
                        if ((0, d.default)(t)) {
                            (0, u.openEndStageModal)(t);
                            return
                        }
                        s.default.disconnect()
                    },
                    icon: c.default
                })
            }

            function C(e) {
                let {
                    channel: t
                } = e;
                return (0, a.jsx)(E.default, {
                    tooltipText: f.default.Messages.DISCONNECT_SELF,
                    onClick: () => {
                        if ((0, o.default)(t)) {
                            (0, r.openEndEventModal)(t);
                            return
                        }
                        s.default.disconnect()
                    },
                    icon: c.default
                })
            }

            function T(e) {
                let {
                    channel: t
                } = e, n = (0, l.default)();
                return t.isGuildStageVoice() ? (0, a.jsx)(h, {
                    channel: t
                }) : n && t.isBroadcastChannel() ? (0, a.jsx)(_, {}) : (0, a.jsx)(C, {
                    channel: t
                })
            }