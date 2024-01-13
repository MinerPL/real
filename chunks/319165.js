            "use strict";
            n.r(t), n.d(t, {
                useMutedUntilText: function() {
                    return a
                },
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("782340");

            function a(e) {
                return null == e || null == e.end_time ? null : l.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(l.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function s(e) {
                let {
                    muteConfig: t,
                    className: n
                } = e, l = a(t);
                return null != l ? (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: l
                }) : null
            }