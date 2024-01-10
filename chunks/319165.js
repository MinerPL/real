            "use strict";
            i.r(t), i.d(t, {
                useMutedUntilText: function() {
                    return a
                },
                default: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                s = i("782340");

            function a(e) {
                return null == e || null == e.end_time ? null : s.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(s.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function r(e) {
                let {
                    muteConfig: t,
                    className: i
                } = e, s = a(t);
                return null != s ? (0, n.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: i,
                    children: s
                }) : null
            }