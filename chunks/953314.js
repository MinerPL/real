            "use strict";
            a.r(t), a.d(t, {
                isEligibleForTryPacksModal: function() {
                    return v
                },
                default: function() {
                    return L
                }
            }), a("222007"), a("424973");
            var s = a("37983"),
                l = a("884691"),
                i = a("65597"),
                d = a("151426"),
                n = a("77078"),
                o = a("997289"),
                r = a("812204"),
                u = a("685665"),
                c = a("10641"),
                m = a("385976"),
                _ = a("298878"),
                f = a("529932"),
                E = a("166465"),
                N = a("557562"),
                T = a("649844"),
                I = a("305961"),
                h = a("697218"),
                C = a("181114"),
                x = a("476765"),
                A = a("216422"),
                j = a("642032"),
                P = a("599110"),
                R = a("701909"),
                g = a("719923"),
                k = a("78291"),
                O = a("646718"),
                S = a("49111"),
                M = a("994428"),
                p = a("365058"),
                D = a("782340"),
                y = a("466701");
            let b = "2023_fall_try_packs_modal",
                Y = [{
                    humanReadableName: "ooblets",
                    guildId: "255509377614610433",
                    featuredEmojiIds: ["893216643759620178", "431916066835529728", "431888257849098240", "431887978084696074", "481491021570637825", "893216644376191006"]
                }, {
                    humanReadableName: "haikyuu",
                    guildId: "424012709219008522",
                    featuredEmojiIds: ["758052547733749889", "758052547746463885", "758052547771760752", "758052548023287918", "1154091599148634172", "1154091595143053423"]
                }, {
                    humanReadableName: "lofiGirl",
                    guildId: "707230275175841915",
                    featuredEmojiIds: ["859801993303949343", "859802018197143622", "867335504928309288", "859801993806479401", "1096430408914190408", "859801993262006322"]
                }, {
                    humanReadableName: "townhall",
                    guildId: "169256939211980800",
                    featuredEmojiIds: ["1143953689409769562", "1143284729790070875", "1143273217457410141", "1143956675766796360", "1143957933122662441", "1143287122862809118"]
                }];

            function v(e) {
                if (E.default.getIsFetching() || null == E.default.getPackEmojisTTL() || (0, c.isDismissibleContentDismissed)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL)) return !1;
                let t = 0,
                    a = 0,
                    s = new Set(E.default.getSortedPackIds());
                for (let e of Y) {
                    let l = e.featuredEmojiIds[0],
                        i = (0, f.getJoinedEmojiSourceGuildData)(m.default, I.default, l);
                    null != i.joinedEmojiSourceGuildRecord ? t++ : s.has(e.guildId) && a++
                }
                return !!(t < Y.length / 2 && a + t < Y.length && s.size < (0, N.getMaxPacksForUserType)(e)) || (!(0, c.isDismissibleContentDismissed)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL) && (P.default.track(S.AnalyticEvents.CHANGE_LOG_CLOSED, {
                    change_log_id: b,
                    seconds_open: 0
                }), (0, c.markDismissibleContentAsDismissed)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL, {
                    dismissAction: M.ContentDismissActionType.DISMISS
                })), !1)
            }

            function L(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: a,
                    transitionState: m
                } = t, f = (0, x.useUID)(), {
                    location: N
                } = (0, o.useAnalyticsContext)(), {
                    analyticsLocations: I
                } = (0, u.default)(r.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), v = (0, i.default)([h.default], () => (0, g.isPremium)(h.default.getCurrentUser())), L = (0, i.useStateFromStoresArray)([E.default], () => {
                    let e = [];
                    return Y.map(e => e.guildId).map(e => E.default.getPackByPackId({
                        packId: e
                    })).forEach(t => {
                        (null == t ? void 0 : t.id) != null && e.push(t.id)
                    }), e
                });
                return l.useEffect(() => {
                    (0, c.requestMarkDismissibleContentAsShown)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL);
                    let e = Date.now();
                    return P.default.track(S.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: b
                    }), () => {
                        P.default.track(S.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: b,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, c.markDismissibleContentAsDismissed)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL, {
                            dismissAction: M.ContentDismissActionType.DISMISS
                        })
                    }
                }, []), (0, s.jsxs)(n.ModalRoot, {
                    className: y.root,
                    transitionState: m,
                    "aria-labelledby": f,
                    children: [(0, s.jsx)(n.ModalCloseButton, {
                        className: y.closeButton,
                        onClick: a
                    }), (0, s.jsxs)("span", {
                        children: [(0, s.jsx)(j.default, {
                            foreground: y.star1
                        }), (0, s.jsx)(j.default, {
                            foreground: y.star2
                        }), (0, s.jsx)(j.default, {
                            foreground: y.star3
                        }), (0, s.jsx)(_.default, {
                            className: y.betaTag,
                            color: "white"
                        }), (0, s.jsx)(j.default, {
                            foreground: y.star4
                        }), (0, s.jsx)(j.default, {
                            foreground: y.star5
                        })]
                    }), (0, s.jsxs)(n.ModalContent, {
                        className: y.content,
                        scrollbarType: "none",
                        children: [(0, s.jsxs)(n.Heading, {
                            color: "always-white",
                            variant: "heading-xl/extrabold",
                            className: y.headerText,
                            children: [(0, s.jsx)(A.default, {
                                className: y.nitroWheelHeader
                            }), v ? D.default.Messages.INVENTORY_TRY_PACKS_TITLE_NITRO : D.default.Messages.INVENTORY_TRY_PACKS_TITLE_FREEMIUM]
                        }), (0, s.jsx)(n.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: y.subHeaderText,
                            children: D.default.Messages.INVENTORY_TRY_PACKS_DESCRIPTION_V2.format({
                                helpCenterLink: R.default.getArticleURL(S.HelpdeskArticles.INVENTORY_PACKS)
                            })
                        }), (0, s.jsx)(n.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: y.subHeaderText,
                            children: v ? D.default.Messages.INVENTORY_TRY_PACKS_SECONDARY_DESCRIPTION_V2_NITRO.format({
                                maxPacks: p.INVENTORY_MAX_PACKS
                            }) : D.default.Messages.INVENTORY_TRY_PACKS_SECONDARY_DESCRIPTION_V2_FREEMIUM
                        }), (0, s.jsx)("div", {
                            className: y.featuredPacks,
                            children: Y.map((e, t) => (0, s.jsx)(k.InventoryTryPacksFeaturedPack, {
                                autoFocused: 0 === t,
                                featuredPack: e,
                                alreadyAddedPackIds: L,
                                headerId: f
                            }, e.guildId))
                        }), !v && (() => {
                            let e = Date.now();
                            return (0, s.jsxs)("div", {
                                className: y.footerUpsell,
                                children: [(0, s.jsx)(n.Text, {
                                    className: y.upsellText,
                                    variant: "text-sm/normal",
                                    children: D.default.Messages.INVENTORY_TRY_PACKS_UPSELL.format({
                                        maxPacks: p.INVENTORY_MAX_PACKS
                                    })
                                }), (0, s.jsx)(C.default, {
                                    onlyShineOnHover: !0,
                                    className: y.getNitroButton,
                                    color: n.Button.Colors.GREEN,
                                    size: n.Button.Sizes.SMALL,
                                    onClick: () => {
                                        P.default.track(S.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                            change_log_id: b,
                                            cta_type: "get_nitro_button",
                                            seconds_open: Math.round((Date.now() - e) / 1e3),
                                            target: "inventory_try_packs_payment_modal"
                                        }), (0, T.default)({
                                            subscriptionTier: O.PremiumSubscriptionSKUs.TIER_2,
                                            analyticsLocations: I,
                                            analyticsObject: {
                                                ...N,
                                                object: S.AnalyticsObjects.BUTTON_CTA,
                                                objectType: S.AnalyticsObjectTypes.TIER_2
                                            },
                                            onClose: e => {
                                                e && a()
                                            }
                                        })
                                    },
                                    children: (0, s.jsxs)(n.Text, {
                                        color: "always-white",
                                        variant: "text-sm/semibold",
                                        className: y.getNitroButtonContents,
                                        children: [(0, s.jsx)(A.default, {
                                            className: y.nitroWheelButton
                                        }), D.default.Messages.PREMIUM_UPSELL_GET_NITRO]
                                    })
                                })]
                            })
                        })()]
                    })]
                })
            }