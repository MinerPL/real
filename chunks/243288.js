            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("255397"),
                d = n("191145"),
                s = n("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => u.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }