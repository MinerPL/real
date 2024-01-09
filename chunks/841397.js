            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("450911"),
                i = n("377114"),
                r = n("61505"),
                o = n("949067"),
                u = n("782340");

            function d(e) {
                let {
                    otherUserId: t,
                    channel: n,
                    buttonSize: d = s.ButtonSizes.TINY,
                    className: c,
                    buttonText: f,
                    navigateAwayOnReportSuccess: h = !0,
                    onReportClick: C,
                    onReportSubmit: p,
                    onMouseEnter: m,
                    onMouseLeave: E
                } = e, g = (0, r.useIsRelationshipTypeSpamReportable)(t), S = (0, o.useLongestChannelMessageBeforeReply)(n.id, t);
                if (!g || null == S) return null;
                let A = () => {
                    null == p || p(), l.default.closePrivateChannel(n.id, h)
                };
                return (0, a.jsx)(s.Button, {
                    className: c,
                    size: d,
                    color: s.Button.Colors.RED,
                    disabled: null == S,
                    onClick: () => {
                        null == C || C(), (0, i.showReportModalForFirstDM)(S, A)
                    },
                    onMouseEnter: m,
                    onMouseLeave: E,
                    children: null != f ? f : u.default.Messages.REPORT_SPAM
                })
            }