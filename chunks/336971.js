            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                i = n("758710"),
                l = n("981913"),
                u = n("782340"),
                o = n("407735");

            function d(e) {
                let {
                    popoutOpen: t,
                    onClosePopout: n,
                    onOpenPopout: s,
                    ...d
                } = e, c = t ? u.default.Messages.POPOUT_RETURN : u.default.Messages.POPOUT_PLAYER;
                return (0, a.jsx)(l.default, {
                    label: c,
                    onClick: t ? n : s,
                    iconComponent: i.default,
                    iconClassName: r({
                        [o.popIn]: t
                    }),
                    ...d
                })
            }