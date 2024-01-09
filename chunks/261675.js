            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("306160"),
                u = n("782340");

            function s(e) {
                return i.SUPPORTS_COPY ? (0, a.jsx)(l.MenuItem, {
                    id: "copy-channel-topic",
                    label: u.default.Messages.COPY_CHANNEL_TOPIC,
                    action: () => (0, i.copy)(e.topic)
                }) : null
            }