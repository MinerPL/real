            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("413709"),
                s = n("306160"),
                u = n("782340");

            function r(e) {
                return s.SUPPORTS_COPY ? (0, a.jsx)(i.MenuItem, {
                    id: "copy-text",
                    label: u.default.Messages.COPY_TEXT,
                    icon: l.default,
                    action: () => {
                        (0, s.copy)(e.content)
                    }
                }) : null
            }