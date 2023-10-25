(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57327"], {
        264514: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return I
                }
            });
            var a = t("920040");
            t("773670");
            var l = t("161179"),
                n = t.n(l),
                o = t("77078"),
                i = t("162426"),
                r = t("197509"),
                d = t("191814"),
                u = t("476765"),
                c = t("49111"),
                E = t("782340"),
                _ = t("369649");

            function I(e) {
                let {
                    transitionState: s,
                    guild: t,
                    onClose: l
                } = e, I = (0, u.useUID)(), [T, {
                    loading: h,
                    error: m
                }] = (0, i.default)(r.removeMonetization), M = async () => {
                    n(null != t, "no guild");
                    let e = await T(t.id);
                    null != e && l()
                };
                return (0, a.jsxs)(o.ModalRoot, {
                    transitionState: s,
                    "aria-labelledby": I,
                    children: [(0, a.jsxs)(o.ModalHeader, {
                        children: [(0, a.jsx)(o.Heading, {
                            id: I,
                            variant: "heading-md/semibold",
                            children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DISABLE_MONETIZATION_MODAL_HEADER
                        }), (0, a.jsx)(o.ModalCloseButton, {
                            className: _.closeButton,
                            onClick: l
                        })]
                    }), (0, a.jsxs)(o.ModalContent, {
                        className: _.content,
                        children: [null != m ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(o.FormErrorBlock, {
                                children: m.message
                            }), (0, a.jsx)(d.default, {
                                size: 24
                            })]
                        }) : null, (0, a.jsx)(o.FormText, {
                            type: o.FormText.Types.ERROR,
                            children: E.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DISABLE_MONETIZATION_MODAL_DESCRIPTION.format({
                                guildName: t.toString(),
                                url: c.MarketingURLs.DEVELOPER_PORTAL_TEAMS
                            })
                        }), (0, a.jsx)(d.default, {
                            size: 16
                        })]
                    }), (0, a.jsx)(o.ModalFooter, {
                        className: _.footer,
                        children: (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            className: _.goBackButton,
                            submitting: h,
                            onClick: M,
                            children: E.default.Messages.SAVE
                        })
                    })]
                })
            }
        }
    }
]);