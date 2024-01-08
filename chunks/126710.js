            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("450911"),
                s = n("42203"),
                a = n("782340");

            function o(e, t) {
                let n = s.default.getChannel(e);
                return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(l.MenuItem, {
                    id: "close-dm",
                    label: a.default.Messages.CLOSE_DM,
                    action: () => r.default.closePrivateChannel(e, t)
                })
            }