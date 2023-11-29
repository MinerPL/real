(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93463"], {
        78291: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                InventoryTryPacksFeaturedPack: function() {
                    return j
                }
            }), a("222007");
            var s = a("37983");
            a("884691");
            var l = a("414456"),
                i = a.n(l),
                d = a("65597"),
                n = a("77078"),
                o = a("430568"),
                r = a("13162"),
                u = a("529932"),
                c = a("166465"),
                m = a("557562"),
                _ = a("412745"),
                f = a("697218"),
                E = a("580357"),
                N = a("476263"),
                T = a("587974"),
                I = a("599110"),
                h = a("719923"),
                C = a("49111"),
                x = a("782340"),
                A = a("367969");

            function j(e) {
                let {
                    featuredPack: t,
                    alreadyAddedPackIds: a,
                    headerId: l,
                    autoFocused: j
                } = e, P = (0, u.useEmojiAndSourceGuild)({
                    emojiId: t.featuredEmojiIds[0]
                }), R = (0, d.default)([f.default], () => (0, h.isPremium)(f.default.getCurrentUser())), g = (0, d.default)([c.default], () => c.default.getSortedPackIds().length >= (0, m.getMaxPacksForUserType)(R)), k = e => new Set(a).has(e), O = (e, t, a) => {
                    I.default.track(C.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: e,
                        inventory_pack_id: t,
                        nonce: a
                    })
                };
                if (P.isFetching || null == P.expressionSourceGuild || null == P.expressionSourceGuild.emojis || P.hasJoinedEmojiSourceGuild) return null;
                let S = new Set(t.featuredEmojiIds),
                    M = P.expressionSourceGuild.emojis.filter(e => S.has(e.id)),
                    {
                        expressionSourceGuild: p
                    } = P;
                return (0, s.jsxs)("div", {
                    className: i(A.featuredPack, {
                        [A.dimmed]: g && !k(p.id)
                    }),
                    children: [(0, s.jsx)("div", {
                        className: A.featuredPackGuildIcon,
                        children: (0, s.jsx)(T.default, {
                            mask: T.default.Masks.SQUIRCLE,
                            width: 62,
                            height: 62,
                            className: A.guildIconContainer,
                            children: (0, s.jsx)(N.default, {
                                className: A.featuredPackGuildIconImage,
                                size: N.default.Sizes.LARGER,
                                guild: p
                            })
                        })
                    }), (0, s.jsxs)(n.Text, {
                        className: A.featuredPackTitle,
                        variant: "text-sm/semibold",
                        children: [(0, s.jsx)(E.default, {
                            guild: p,
                            className: A.featuredPackGuildBadge
                        }), p.name]
                    }), (0, s.jsx)("div", {
                        className: A.featuredPackEmojiGrid,
                        children: M.map(e => (0, s.jsx)("div", {
                            className: A.featuredPackEmojiWrapper,
                            children: (0, s.jsx)(o.default, {
                                emojiId: e.id,
                                emojiName: e.name,
                                size: "jumbo"
                            })
                        }, e.id))
                    }), (0, s.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        children: x.default.Messages.INVENTORY_TRY_PACKS_MORE_EMOJI.format({
                            numberOfEmoji: P.expressionSourceGuild.emojis.length - M.length
                        })
                    }), (0, s.jsx)("div", {
                        className: A.featuredPackFooter,
                        children: k(p.id) ? (0, s.jsx)(n.Button, {
                            autoFocus: j,
                            color: n.ButtonColors.PRIMARY,
                            className: A.featuredPackFooterButton,
                            onClick: () => {
                                (0, r.uncollectPack)({
                                    packId: p.id
                                }), O(_.EmojiPopoutType.REMOVE_PACK, p.id, l)
                            },
                            children: (0, s.jsx)(n.Text, {
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: R ? x.default.Messages.INVENTORY_REMOVE_PACK : x.default.Messages.INVENTORY_REMOVE_FREE_PACK
                            })
                        }) : (0, s.jsx)(n.Button, {
                            autoFocus: j,
                            className: A.featuredPackFooterButton,
                            disabled: g && !k(p.id),
                            onClick: () => {
                                (0, r.collectPack)({
                                    packId: p.id
                                }), O(_.EmojiPopoutType.ADD_PACK, p.id, l)
                            },
                            children: (0, s.jsx)(n.Text, {
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: R ? x.default.Messages.INVENTORY_ADD_PACK : x.default.Messages.INVENTORY_ADD_FREE_PACK
                            })
                        })
                    })]
                }, p.id)
            }
        },
        953314: function(e, t, a) {
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
        }
    }
]);