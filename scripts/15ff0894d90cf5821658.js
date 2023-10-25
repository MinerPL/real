(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["93463"], {
        78291: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                InventoryTryPacksFeaturedPack: function() {
                    return P
                }
            });
            var s = a("920040");
            a("773670");
            var i = a("575482"),
                l = a.n(i),
                d = a("744196"),
                n = a("77078"),
                o = a("430568"),
                r = a("13162"),
                u = a("529932"),
                c = a("166465"),
                m = a("557562"),
                _ = a("412745"),
                f = a("697218"),
                N = a("580357"),
                E = a("109024"),
                T = a("587974"),
                I = a("599110"),
                h = a("719923"),
                x = a("49111"),
                j = a("782340"),
                C = a("784975");

            function P(e) {
                let {
                    featuredPack: t,
                    alreadyAddedPackIds: a,
                    headerId: i,
                    autoFocused: P
                } = e, g = (0, u.useEmojiAndSourceGuild)({
                    emojiId: t.featuredEmojiIds[0]
                }), A = (0, d.default)([f.default], () => (0, h.isPremium)(f.default.getCurrentUser())), R = (0, d.default)([c.default], () => c.default.getSortedPackIds().length >= (0, m.getMaxPacksForUserType)(A)), k = e => new Set(a).has(e), S = (e, t, a) => {
                    I.default.track(x.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: e,
                        inventory_pack_id: t,
                        nonce: a
                    })
                };
                if (g.isFetching || null == g.expressionSourceGuild || null == g.expressionSourceGuild.emojis || g.hasJoinedEmojiSourceGuild) return null;
                let O = new Set(t.featuredEmojiIds),
                    M = g.expressionSourceGuild.emojis.filter(e => O.has(e.id)),
                    {
                        expressionSourceGuild: p
                    } = g;
                return (0, s.jsxs)("div", {
                    className: l(C.featuredPack, {
                        [C.dimmed]: R && !k(p.id)
                    }),
                    children: [(0, s.jsx)("div", {
                        className: C.featuredPackGuildIcon,
                        children: (0, s.jsx)(T.default, {
                            mask: T.default.Masks.SQUIRCLE,
                            width: 62,
                            height: 62,
                            className: C.guildIconContainer,
                            children: (0, s.jsx)(E.default, {
                                className: C.featuredPackGuildIconImage,
                                size: E.default.Sizes.LARGER,
                                guild: p
                            })
                        })
                    }), (0, s.jsxs)(n.Text, {
                        className: C.featuredPackTitle,
                        variant: "text-sm/semibold",
                        children: [(0, s.jsx)(N.default, {
                            guild: p,
                            className: C.featuredPackGuildBadge
                        }), p.name]
                    }), (0, s.jsx)("div", {
                        className: C.featuredPackEmojiGrid,
                        children: M.map(e => (0, s.jsx)("div", {
                            className: C.featuredPackEmojiWrapper,
                            children: (0, s.jsx)(o.default, {
                                emojiId: e.id,
                                emojiName: e.name,
                                size: "jumbo"
                            })
                        }, e.id))
                    }), (0, s.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        children: j.default.Messages.INVENTORY_TRY_PACKS_MORE_EMOJI.format({
                            numberOfEmoji: g.expressionSourceGuild.emojis.length - M.length
                        })
                    }), (0, s.jsx)("div", {
                        className: C.featuredPackFooter,
                        children: k(p.id) ? (0, s.jsx)(n.Button, {
                            autoFocus: P,
                            color: n.ButtonColors.PRIMARY,
                            className: C.featuredPackFooterButton,
                            onClick: () => {
                                (0, r.uncollectPack)({
                                    packId: p.id
                                }), S(_.EmojiPopoutType.REMOVE_PACK, p.id, i)
                            },
                            children: (0, s.jsx)(n.Text, {
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: j.default.Messages.INVENTORY_REMOVE_PACK
                            })
                        }) : (0, s.jsx)(n.Button, {
                            autoFocus: P,
                            className: C.featuredPackFooterButton,
                            disabled: R && !k(p.id),
                            onClick: () => {
                                (0, r.collectPack)({
                                    packId: p.id
                                }), S(_.EmojiPopoutType.ADD_PACK, p.id, i)
                            },
                            children: (0, s.jsx)(n.Text, {
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: j.default.Messages.INVENTORY_ADD_PACK
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
                    return Y
                },
                default: function() {
                    return v
                }
            });
            var s = a("920040"),
                i = a("773670"),
                l = a("744196"),
                d = a("975162"),
                n = a("77078"),
                o = a("997289"),
                r = a("812204"),
                u = a("685665"),
                c = a("10641"),
                m = a("385976"),
                _ = a("298878"),
                f = a("529932"),
                N = a("166465"),
                E = a("557562"),
                T = a("649844"),
                I = a("305961"),
                h = a("697218"),
                x = a("181114"),
                j = a("476765"),
                C = a("216422"),
                P = a("642032"),
                g = a("599110"),
                A = a("719923"),
                R = a("78291"),
                k = a("646718"),
                S = a("49111"),
                O = a("994428"),
                M = a("365058"),
                p = a("782340"),
                y = a("383353");
            let D = "2023_fall_try_packs_modal",
                b = [{
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

            function Y(e) {
                if (N.default.getIsFetching() || null == N.default.getPackEmojisTTL() || (0, c.isDismissibleContentDismissed)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL)) return !1;
                let t = 0,
                    a = 0,
                    s = new Set(N.default.getSortedPackIds());
                for (let e of b) {
                    let i = e.featuredEmojiIds[0],
                        l = (0, f.getJoinedEmojiSourceGuildData)(m.default, I.default, i);
                    null != l.joinedEmojiSourceGuildRecord ? t++ : s.has(e.guildId) && a++
                }
                return !!(t < b.length / 2 && a + t < b.length && s.size < (0, E.getMaxPacksForUserType)(e)) || (!(0, c.isDismissibleContentDismissed)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL) && (g.default.track(S.AnalyticEvents.CHANGE_LOG_CLOSED, {
                    change_log_id: D,
                    seconds_open: 0
                }), (0, c.markDismissibleContentAsDismissed)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL, {
                    dismissAction: O.ContentDismissActionType.DISMISS
                })), !1)
            }

            function v(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: a,
                    transitionState: m
                } = t, f = (0, j.useUID)(), {
                    location: E
                } = (0, o.useAnalyticsContext)(), {
                    analyticsLocations: I
                } = (0, u.default)(r.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), Y = (0, l.default)([h.default], () => (0, A.isPremium)(h.default.getCurrentUser())), v = (0, l.useStateFromStoresArray)([N.default], () => {
                    let e = [];
                    return b.map(e => e.guildId).map(e => N.default.getPackByPackId({
                        packId: e
                    })).forEach(t => {
                        (null == t ? void 0 : t.id) != null && e.push(t.id)
                    }), e
                });
                return i.useEffect(() => {
                    (0, c.requestMarkDismissibleContentAsShown)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL);
                    let e = Date.now();
                    return g.default.track(S.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: D
                    }), () => {
                        g.default.track(S.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: D,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, c.markDismissibleContentAsDismissed)(d.DismissibleContent.INVENTORY_TRY_PACKS_MODAL, {
                            dismissAction: O.ContentDismissActionType.DISMISS
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
                        children: [(0, s.jsx)(P.default, {
                            foreground: y.star1
                        }), (0, s.jsx)(P.default, {
                            foreground: y.star2
                        }), (0, s.jsx)(P.default, {
                            foreground: y.star3
                        }), (0, s.jsx)(_.default, {
                            className: y.betaTag,
                            color: "white"
                        }), (0, s.jsx)(P.default, {
                            foreground: y.star4
                        }), (0, s.jsx)(P.default, {
                            foreground: y.star5
                        })]
                    }), (0, s.jsxs)(n.ModalContent, {
                        className: y.content,
                        scrollbarType: "none",
                        children: [(0, s.jsxs)(n.Heading, {
                            color: "always-white",
                            variant: "heading-xl/extrabold",
                            className: y.headerText,
                            children: [(0, s.jsx)(C.default, {
                                className: y.nitroWheelHeader
                            }), p.default.Messages.INVENTORY_TRY_PACKS_TITLE]
                        }), (0, s.jsx)(n.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: y.subHeaderText,
                            children: Y ? p.default.Messages.INVENTORY_TRY_PACKS_DESCRIPTION.format({
                                maxPacks: M.INVENTORY_MAX_PACKS
                            }) : p.default.Messages.INVENTORY_TRY_PACKS_DESCRIPTION_FREEMIUM.format({
                                maxFreePacks: M.INVENTORY_MAX_FREE_PACKS
                            })
                        }), (0, s.jsx)(n.Text, {
                            color: "always-white",
                            variant: "text-md/normal",
                            className: y.subHeaderText,
                            children: Y ? p.default.Messages.INVENTORY_TRY_PACKS_DESCRIPTION_2 : p.default.Messages.INVENTORY_TRY_PACKS_DESCRIPTION_FREEMIUM_2
                        }), (0, s.jsx)("div", {
                            className: y.featuredPacks,
                            children: b.map((e, t) => (0, s.jsx)(R.InventoryTryPacksFeaturedPack, {
                                autoFocused: 0 === t,
                                featuredPack: e,
                                alreadyAddedPackIds: v,
                                headerId: f
                            }, e.guildId))
                        }), !Y && (() => {
                            let e = Date.now();
                            return (0, s.jsxs)("div", {
                                className: y.footerUpsell,
                                children: [(0, s.jsx)(n.Text, {
                                    className: y.upsellText,
                                    variant: "text-sm/normal",
                                    children: p.default.Messages.INVENTORY_TRY_PACKS_UPSELL.format({
                                        maxPacks: M.INVENTORY_MAX_PACKS
                                    })
                                }), (0, s.jsx)(x.default, {
                                    onlyShineOnHover: !0,
                                    className: y.getNitroButton,
                                    color: n.Button.Colors.GREEN,
                                    size: n.Button.Sizes.SMALL,
                                    onClick: () => {
                                        g.default.track(S.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                            change_log_id: D,
                                            cta_type: "get_nitro_button",
                                            seconds_open: Math.round((Date.now() - e) / 1e3),
                                            target: "inventory_try_packs_payment_modal"
                                        }), (0, T.default)({
                                            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_2,
                                            analyticsLocations: I,
                                            analyticsObject: {
                                                ...E,
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
                                        children: [(0, s.jsx)(C.default, {
                                            className: y.nitroWheelButton
                                        }), p.default.Messages.PREMIUM_UPSELL_GET_NITRO]
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