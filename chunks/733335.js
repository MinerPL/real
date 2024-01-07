            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("234755"),
                r = n("101125"),
                o = n("474571"),
                u = n("962541"),
                d = n("782340");

            function c() {
                let e = (0, a.useStateFromStores)([r.default], () => r.default.getBroadcast());
                return null == e ? null : (0, l.jsx)(s.Popout, {
                    position: "top",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, l.jsx)(i.default, {
                            onClose: t
                        })
                    },
                    animation: s.Popout.Animation.FADE,
                    children: e => (0, l.jsx)(u.default, {
                        ...e,
                        tooltipText: d.default.Messages.BROADCAST_SETTINGS,
                        icon: o.default
                    })
                })
            }