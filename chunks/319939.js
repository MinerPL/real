            "use strict";
            n.r(t), n.d(t, {
                useShouldBlockDMInputForQuarantinedUser: function() {
                    return l.default
                },
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("594864"),
                l = n("293322"),
                i = n("586269"),
                r = n("782340");
            let o = n("648529");
            var u = () => (0, a.jsx)(s.MessageNoticeBanner, {
                bannerIcon: o,
                bannerHeader: r.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING,
                bannerSubtext: r.default.Messages.LIMITED_ACCESS_DM_BAR_SUBTEXT.format({
                    appealLink: i.QUARANTINE_APPEAL_LINK
                })
            })