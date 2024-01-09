            "use strict";
            n.r(t), n.d(t, {
                useMutedUntilText: function() {
                    return s
                },
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("782340");

            function s(e) {
                return null == e || null == e.end_time ? null : r.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(r.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function a(e) {
                let {
                    muteConfig: t,
                    className: n
                } = e, r = s(t);
                return null != r ? (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: r
                }) : null
            }