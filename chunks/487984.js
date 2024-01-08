            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("244201"),
                i = n("751661"),
                r = n("228427"),
                o = n("888237"),
                u = n("782340");

            function d(e) {
                let {
                    className: t,
                    channel: n,
                    highlight: d
                } = e, c = (0, s.useAppContext)();
                return (0, a.jsx)(o.default, {
                    highlight: null != d && d,
                    className: t,
                    icon: (0, a.jsx)(r.default, {
                        height: 20,
                        width: 20
                    }),
                    color: l.default.unsafe_rawColors.GREEN_360.css,
                    title: u.default.Messages.STAGE_CHANNEL_START_TITLE,
                    description: u.default.Messages.STAGE_CHANNEL_START_SUBTITLE,
                    onClick: function() {
                        (0, i.openStageChannelSettings)(n, c)
                    }
                })
            }