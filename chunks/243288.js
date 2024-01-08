            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                o = n("255397"),
                a = n("191145"),
                r = n("782340");

            function d(e) {
                let t = (0, l.useStateFromStores)([a.default], () => a.default.getVoiceParticipantsHidden(e));
                return (0, i.jsx)(u.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => o.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }