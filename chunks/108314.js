            "use strict";
            n.r(t), n.d(t, {
                GuildRoleSubscriptionBenefits: function() {
                    return F
                },
                default: function() {
                    return V
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("834897"),
                d = n("38654"),
                c = n("160299"),
                f = n("191814"),
                h = n("476765"),
                p = n("837899"),
                m = n("425190"),
                E = n("68238"),
                C = n("315102"),
                g = n("577357"),
                S = n("837008"),
                _ = n("167109"),
                I = n("176687"),
                T = n("595197"),
                v = n("41391"),
                x = n("549590"),
                N = n("833531"),
                A = n("270295"),
                M = n("246506"),
                R = n("226965"),
                j = n("944256"),
                L = n("97116"),
                O = n("320946"),
                y = n("677795"),
                P = n("49111"),
                b = n("782340"),
                D = n("938088");
            let U = e => {
                    let {
                        benefits: t,
                        header: n,
                        guildId: s
                    } = e, [i, r] = l.useState(!1), u = i ? t : t.slice(0, 5), d = t.length > 5, c = t.length - 5, p = b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
                        numTruncated: c
                    }), m = (0, h.useUID)();
                    return 0 === t.length ? null : (0, a.jsxs)("div", {
                        className: D.benefitsSection,
                        children: [(0, a.jsx)(o.Heading, {
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            className: D.sectionHeader,
                            id: m,
                            children: n
                        }), (0, a.jsx)(f.default, {
                            size: 12
                        }), (0, a.jsx)("ul", {
                            className: D.benefitsList,
                            "aria-labelledby": m,
                            children: u.map((e, t) => (0, a.jsx)("li", {
                                children: (0, a.jsx)(R.default, {
                                    guildId: s,
                                    benefit: e
                                }, (0, g.getBenefitKey)(e))
                            }, t))
                        }), d && (0, a.jsx)(k, {
                            isViewAll: i,
                            onToggle: () => r(e => !e),
                            showMoreText: p
                        })]
                    })
                },
                w = e => {
                    let {
                        guildId: t,
                        listingId: n
                    } = e, l = (0, v.default)(t), [s] = _.useTierEmojiIds(n, t), i = l.filter(e => s.has(e.id));
                    return 0 === i.length ? null : (0, a.jsxs)("div", {
                        className: D.benefitsSection,
                        children: [(0, a.jsx)(o.Heading, {
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            className: D.sectionHeader,
                            children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
                                count: i.length
                            })
                        }), (0, a.jsx)(f.default, {
                            size: 12
                        }), (0, a.jsx)("div", {
                            className: D.emojiList,
                            children: i.map((e, t) => {
                                var n;
                                return (0, a.jsx)(o.Tooltip, {
                                    text: e.name,
                                    "aria-label": !1,
                                    children: t => {
                                        var n;
                                        return (0, a.jsx)("img", {
                                            ...t,
                                            className: D.emojiListEmoji,
                                            src: (n = e, C.default.getEmojiURL({
                                                id: n.id,
                                                animated: n.animated,
                                                size: 24
                                            })),
                                            width: 24,
                                            height: 24,
                                            alt: e.name
                                        })
                                    }
                                }, null !== (n = e.id) && void 0 !== n ? n : t)
                            })
                        })]
                    })
                },
                F = e => {
                    let {
                        listingId: t,
                        guildId: n,
                        className: l
                    } = e, s = (0, x.default)(n, t), [r] = _.useChannelBenefits(t), u = (0, N.default)(r), [d] = _.useIntangibleBenefits(t), c = _.useRole(t, n), [h] = _.useTierEmojiIds(t, n);
                    return null == s && 0 === u.length && 0 === d.length && 0 === h.size ? null : (0, a.jsxs)("div", {
                        className: i(D.subscriptionPerks, l),
                        children: [null != s && (0, a.jsxs)(o.HeadingLevel, {
                            component: (0, a.jsx)(o.Heading, {
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                className: D.sectionHeader,
                                children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
                            }),
                            children: [(0, a.jsx)(f.default, {
                                size: 8
                            }), (0, a.jsx)(M.default, {
                                role: c,
                                guildId: n,
                                className: D.roleMessagePreview
                            })]
                        }), (0, a.jsx)(U, {
                            header: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
                            benefits: u,
                            guildId: n
                        }), (0, a.jsx)(U, {
                            header: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
                            benefits: d,
                            guildId: n
                        }), (0, a.jsx)(w, {
                            guildId: n,
                            listingId: t
                        })]
                    })
                },
                k = e => {
                    let t, {
                        onToggle: n,
                        isViewAll: l,
                        showMoreText: s
                    } = e;
                    return t = l ? (0, a.jsxs)(a.Fragment, {
                        children: [b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, a.jsx)(m.default, {
                            className: D.toggleTruncationButtonIcon
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [s, (0, a.jsx)(p.default, {
                            className: D.toggleTruncationButtonIcon
                        })]
                    }), (0, a.jsx)(o.Button, {
                        look: o.Button.Looks.BLANK,
                        size: o.Button.Sizes.NONE,
                        className: D.toggleTruncationButton,
                        innerClassName: D.toggleTruncationButtonInner,
                        onClick: n,
                        children: t
                    })
                };
            var V = e => {
                var t;
                let {
                    listingId: n,
                    guildId: s,
                    groupListingId: h,
                    analyticsLocation: p
                } = e, m = (0, S.useSubscriptionListing)(n), {
                    openModal: C,
                    canOpenModal: v,
                    cannotOpenReason: x,
                    isCheckingTrialEligibility: N
                } = (0, O.default)(m, s, h, p), M = (0, r.useStateFromStores)([c.default], () => c.default.isSyncing), {
                    activeSubscription: R,
                    activeSubscriptionListing: U
                } = (0, I.default)(h), w = (null == U ? void 0 : U.id) === n, V = (null == R ? void 0 : R.status) === P.SubscriptionStatusTypes.CANCELED, [B, H] = l.useState(!1), [G, W] = l.useState(!1), Y = l.useCallback(e => {
                    let t = !1;
                    null != e && (t = e.scrollHeight - e.clientHeight > 1), W(t)
                }, []), [z] = _.useName(n), [K] = _.useDescription(n), [Z] = _.useTrialInterval(n), [X] = _.useTrialLimit(n), J = (0, T.default)(s, n), q = null != Z && null == R && J, Q = (0, u.default)(y.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), [$, ee] = l.useState(!1), et = $ || !Q, en = (0, r.useStateFromStores)([d.default], () => d.default.isViewingSubscriptionRoles(s)), ea = (null == m ? void 0 : m.published) === !0, el = (null == m ? void 0 : m.soft_deleted) === !0, es = b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
                return (ea || en) && !el ? (0, a.jsxs)("article", {
                    className: D.container,
                    "aria-label": z,
                    children: [q && (0, a.jsxs)("div", {
                        className: i(D.tierTrialIndicator, D.tierTopIndicator),
                        children: [b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
                            trialPeriodDuration: (0, g.formatPlanIntervalDuration)({
                                interval: Z.interval,
                                interval_count: Z.interval_count
                            })
                        }), (0, a.jsx)(o.Tooltip, {
                            clickableOnMobile: !0,
                            text: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
                                activeTrialUserLimit: null != X ? X : 0
                            }),
                            children: e => (0, a.jsx)(E.default, {
                                className: D.tierTrialIndicatorIcon,
                                ...e
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: q ? void 0 : D.cardContainerWithoutTopIndicator,
                        children: [(0, a.jsxs)("div", {
                            className: D.tierInfoContainer,
                            children: [Q ? (0, a.jsx)(L.GuildRoleSubscriptionCollapsibleCardBasicInfo, {
                                listingId: n,
                                isListingPublished: ea,
                                expanded: et,
                                onToggleExpanded: () => ee(e => !e)
                            }) : (0, a.jsx)(j.GuildRoleSubscriptionCardBasicInfo, {
                                listingId: n,
                                isListingPublished: ea
                            }), et && (0, a.jsxs)(a.Fragment, {
                                children: [Q && (0, a.jsx)("div", {
                                    className: D.divider
                                }), w ? (0, a.jsx)(o.Button, {
                                    fullWidth: !0,
                                    look: o.Button.Looks.OUTLINED,
                                    color: o.Button.Colors.PRIMARY,
                                    disabled: !0,
                                    children: V ? b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
                                }) : (0, a.jsx)(o.Tooltip, {
                                    text: v ? null : x,
                                    "aria-label": null !== (t = v && x) && void 0 !== t && t,
                                    children: e => (0, a.jsx)(A.default, {
                                        ...e,
                                        fullWidth: !0,
                                        disabled: !v || M,
                                        submitting: N,
                                        onClick: C,
                                        onlyShineOnHover: !0,
                                        children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                }), (0, a.jsx)(f.default, {
                                    size: 16
                                }), (0, a.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-normal",
                                    className: i((!G || !B) && D.tierDescriptionTruncate),
                                    children: (0, a.jsx)("div", {
                                        ref: Y,
                                        children: K
                                    })
                                }), G && (0, a.jsx)(k, {
                                    isViewAll: B,
                                    onToggle: () => H(e => !e),
                                    showMoreText: es
                                })]
                            })]
                        }), et && (0, a.jsx)(o.HeadingLevel, {
                            children: (0, a.jsx)(F, {
                                listingId: n,
                                guildId: s
                            })
                        })]
                    })]
                }) : null
            }