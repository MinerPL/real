            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return N
                }
            }), n("222007");
            var r = n("37983"),
                l = n("884691"),
                i = n("65597"),
                o = n("77078"),
                s = n("812204"),
                u = n("685665"),
                a = n("271938"),
                d = n("26989"),
                c = n("305961"),
                h = n("476263"),
                f = n("533930"),
                _ = n("599110"),
                p = n("681937"),
                E = n("956967"),
                I = n("143460"),
                S = n("49111"),
                T = n("657944"),
                g = n("782340"),
                m = n("678576");

            function N(t) {
                var e;
                let {
                    onClose: n,
                    transitionState: N,
                    guildId: v
                } = t, L = (0, i.default)([a.default], () => a.default.getId()), A = (0, i.default)([d.default], () => d.default.getMember(v, L), [v, L]), C = (0, i.default)([c.default], () => c.default.getGuild(v), [v]), M = null !== (e = null == C ? void 0 : C.name) && void 0 !== e ? e : "", O = (0, p.getAutomodQuarantinedGuildMemberFlags)(A), {
                    analyticsLocations: U
                } = (0, u.default)(s.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [R, D] = (0, E.useOpenFixQuarantinedProfileModal)({
                    guildId: v,
                    analyticsLocations: U,
                    openWithoutBackstack: !0
                }), y = O.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? g.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : g.default.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
                !D && (y = g.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
                let b = D ? g.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : g.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
                return (l.useEffect(() => {
                    _.default.track(S.AnalyticEvents.OPEN_MODAL, {
                        type: I.QUARANTINE_USER_ALERT_KEY,
                        guild_id: v,
                        other_user_id: L
                    })
                }, []), l.useEffect(() => {
                    if (null == C) {
                        n();
                        return
                    }
                }, [C, n]), null == C) ? null : (0, r.jsxs)(o.ModalRoot, {
                    transitionState: N,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, r.jsxs)("div", {
                            className: m.headerContainer,
                            children: [(0, r.jsxs)("div", {
                                className: m.guildIconContainer,
                                children: [(0, r.jsx)(h.default, {
                                    guild: C,
                                    size: h.default.Sizes.LARGER
                                }), (0, r.jsx)("div", {
                                    className: m.statusContainer,
                                    children: (0, r.jsx)(f.default, {
                                        className: m.statusIcon,
                                        width: 24,
                                        height: 24
                                    })
                                })]
                            }), (0, r.jsx)(o.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: g.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
                                    guildName: M
                                })
                            })]
                        })
                    }), (0, r.jsx)(o.ModalContent, {
                        children: (0, r.jsx)("div", {
                            className: m.descriptionContainer,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: y
                            })
                        })
                    }), (0, r.jsxs)(o.ModalFooter, {
                        children: [(0, r.jsx)(o.Button, {
                            onClick: () => {
                                R(), n()
                            },
                            color: o.Button.Colors.BRAND_NEW,
                            look: o.Button.Looks.FILLED,
                            children: b
                        }), (0, r.jsx)(o.Button, {
                            onClick: n,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: g.default.Messages.CANCEL
                        })]
                    })]
                })
            }