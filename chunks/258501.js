            "use strict";
            n.r(t), n.d(t, {
                Header: function() {
                    return T
                },
                PurchaseConfirmation: function() {
                    return v
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                u = n("430568"),
                o = n("834897"),
                d = n("85336"),
                c = n("305961"),
                f = n("945330"),
                h = n("271560"),
                p = n("577357"),
                m = n("837008"),
                E = n("41391"),
                C = n("833531"),
                g = n("393381"),
                S = n("677795"),
                _ = n("782340"),
                I = n("751071");
            let T = e => {
                    let {
                        onClose: t,
                        listing: n,
                        step: l,
                        guildId: i
                    } = e, u = (0, m.useSubscriptionsSettings)(i), c = (0, o.default)(S.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY), p = (() => {
                        var e;
                        if (c) return null;
                        let t = (null == u ? void 0 : null === (e = u.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, h.getAssetURL)(u.cover_image_asset.application_id, u.cover_image_asset, 440) : void 0;
                        return null == t && l !== d.Step.CONFIRM ? null : null == t ? (0, a.jsx)("div", {
                            className: I.headerImageEmpty
                        }) : (0, a.jsx)("img", {
                            src: t,
                            alt: "",
                            className: I.headerImage
                        })
                    })();
                    return (0, a.jsxs)("div", {
                        className: s(I.headerContainer, {
                            [I.headerEmpty]: c || null == p
                        }),
                        children: [p, (() => {
                            if (l !== d.Step.CONFIRM) return null;
                            let e = null == n.image_asset ? void 0 : (0, h.getAssetURL)(n.application_id, n.image_asset, 80);
                            return (0, a.jsx)("div", {
                                className: I.tierImageContainer,
                                children: (0, a.jsx)("img", {
                                    src: e,
                                    alt: "",
                                    className: I.tierImage
                                })
                            })
                        })(), (0, a.jsx)(r.Clickable, {
                            className: I.closeContainer,
                            onClick: () => t(!1),
                            "aria-label": _.default.Messages.CLOSE,
                            children: (0, a.jsx)(f.default, {
                                className: I.closeIcon
                            })
                        })]
                    })
                },
                v = e => {
                    let {
                        onClose: t,
                        listing: n,
                        guildId: l
                    } = e, s = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(l), [l]), o = (0, E.default)(l), d = o.filter(e => e.roles.includes(n.role_id)), f = n.role_benefits.benefits.filter(p.isChannelBenefit).slice(0, null === d.length ? 4 : 3), h = (0, C.default)(f).slice(0, null === d.length ? 4 : 3);
                    return (0, a.jsxs)("div", {
                        className: I.confirmationContainer,
                        children: [(0, a.jsx)(r.Heading, {
                            className: I.confirmationHeader,
                            variant: "heading-xl/semibold",
                            color: "header-secondary",
                            children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
                                serverName: null == s ? void 0 : s.toString()
                            })
                        }), (0, a.jsx)(r.Text, {
                            className: I.confirmationSubtitle,
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                                tier: n.name
                            })
                        }), h.length > 0 && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: I.confirmationSectionLabel,
                                children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
                            }), (0, a.jsx)("div", {
                                className: I.confirmationBenefits,
                                children: h.map(e => (0, a.jsx)(g.default, {
                                    benefit: e,
                                    guildId: l,
                                    onClick: () => t(!0)
                                }, (0, p.getBenefitKey)(e)))
                            })]
                        }), (() => {
                            var e;
                            if (0 === d.length) return null;
                            let t = d[0];
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    color: "header-secondary",
                                    className: I.confirmationSectionLabel,
                                    children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
                                }), (0, a.jsxs)("div", {
                                    className: I.emojiBenefitsRow,
                                    children: [(0, a.jsx)(u.default, {
                                        emojiId: t.id,
                                        emojiName: t.name,
                                        animated: null !== (e = t.animated) && void 0 !== e && e,
                                        className: I.emojiImage
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(r.Text, {
                                            variant: "text-md/medium",
                                            color: "header-primary",
                                            className: I.emojiName,
                                            children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
                                        }), (0, a.jsx)(r.Text, {
                                            color: "interactive-normal",
                                            variant: "text-sm/normal",
                                            children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                                                count: d.length
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })(), (0, a.jsx)(r.Button, {
                            className: I.confirmationButton,
                            onClick: () => t(!0),
                            children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                        })]
                    })
                }