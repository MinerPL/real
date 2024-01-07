            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("255397"),
                s = n("191145"),
                u = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getVoiceParticipantsHidden(e));
                return (0, i.jsx)(l.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: u.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => r.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }