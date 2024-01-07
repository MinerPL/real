            "use strict";
            n.r(t), n.d(t, {
                CommunicationDisabledBanner: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                i = n("594864"),
                r = n("271938"),
                o = n("26989"),
                u = n("91551"),
                d = n("491401"),
                c = n("637695"),
                f = n("564568"),
                h = n("919398"),
                C = n("903639"),
                p = n("782340"),
                m = n("222415");

            function E(e) {
                let {
                    guild: t,
                    disabledUntil: n
                } = e, [E, g] = (0, f.useCommunicationDisabledNoticeStore)(t.id), S = (0, a.useStateFromStores)([o.default, r.default], () => o.default.getMember(t.id, r.default.getId()), [t.id]);
                return (0, c.useCommunicationDisabledCountdownCleanup)(S), (0, s.jsxs)("div", {
                    children: [E ? (0, s.jsx)(h.default, {
                        onClose: () => g(t.id),
                        guildName: t.name
                    }) : null, (0, s.jsx)(i.MessageNoticeBanner, {
                        bannerIcon: (0, s.jsx)(d.default, {
                            className: m.bannerIcon
                        }),
                        bannerHeader: p.default.Messages.GUILD_COMMUNICATION_DISABLED_NOTICE_HEADER,
                        bannerSubtext: p.default.Messages.GUILD_COMMUNICATION_DISABLED_CHAT_NOTICE_DESCRIPTION.format({
                            link: C.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
                        }),
                        containerStyles: m.bannerContainer,
                        headerStyles: m.bannerHeader,
                        children: (0, s.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: (0, s.jsx)(u.default, {
                                deadline: new Date(n),
                                showUnits: !0,
                                stopAtOneSec: !0
                            })
                        })
                    })]
                })
            }