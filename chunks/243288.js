            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("255397"),
                l = a("191145"),
                s = a("782340");

            function i(e) {
                let t = (0, u.useStateFromStores)([l.default], () => l.default.getVoiceParticipantsHidden(e));
                return (0, n.jsx)(r.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => d.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }