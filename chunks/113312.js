            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return k
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("907002"),
                r = a("819855"),
                u = a("77078"),
                o = a("841098"),
                c = a("601414"),
                f = a("137215"),
                m = a("945330"),
                h = a("302120"),
                E = a("782340"),
                g = a("710611"),
                I = a("499255"),
                _ = a("704936"),
                x = a("465988"),
                v = a("526954"),
                S = a("35296"),
                C = a("344665"),
                N = a("93556"),
                p = a("118913"),
                T = a("125134"),
                A = a("380493"),
                j = a("783858"),
                M = a("181482"),
                D = a("925107"),
                F = a("347124"),
                L = a("630344"),
                R = a("735468");
            let b = [{
                light: F,
                dark: D,
                selected: L,
                value: h.GuildFeedbackRating.TERRIBLE,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_TERRIBLE,
                description: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_TERRIBLE
            }, {
                light: _,
                dark: I,
                selected: x,
                value: h.GuildFeedbackRating.BAD,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_BAD
            }, {
                light: j,
                dark: A,
                selected: M,
                value: h.GuildFeedbackRating.OKAY,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_OKAY
            }, {
                light: p,
                dark: N,
                selected: T,
                value: h.GuildFeedbackRating.GOOD,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_GOOD
            }, {
                light: S,
                dark: v,
                selected: C,
                value: h.GuildFeedbackRating.EXCELLENT,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_EXCELLENT,
                description: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_EXCELLENT
            }];

            function G(e) {
                let {
                    defaultSrc: t,
                    selectedSrc: a,
                    selected: s,
                    disableAnimation: i,
                    alt: r
                } = e, [u, o] = (0, d.useSpring)(() => ({
                    from: {
                        opacity: 1
                    },
                    config: {
                        duration: i ? 0 : h.GUILD_FEED_FEEDBACK_ANIMATION_DURATION
                    }
                }), [s, i]), [c, f] = (0, d.useSpring)(() => ({
                    from: {
                        opacity: 0
                    },
                    config: {
                        duration: i ? 0 : h.GUILD_FEED_FEEDBACK_ANIMATION_DURATION
                    }
                }), [s, i]);
                return n.useEffect(() => {
                    s ? (o({
                        opacity: 0
                    }), f({
                        opacity: 1
                    })) : (o({
                        opacity: 1
                    }), f({
                        opacity: 0
                    }))
                }, [s, i, o, f]), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(d.animated.img, {
                        style: {
                            opacity: c.opacity
                        },
                        src: a,
                        width: 40,
                        height: 40,
                        alt: r
                    }), (0, l.jsx)(d.animated.img, {
                        className: g.ratingInner,
                        style: {
                            opacity: u.opacity
                        },
                        src: t,
                        width: 40,
                        height: 40,
                        alt: r
                    })]
                })
            }

            function y(e) {
                let {
                    selectedRating: t,
                    setSelectedRating: a,
                    disableAnimation: n
                } = e, s = (0, o.default)();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_1_TITLE
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_1_SUBTITLE
                    }), (0, l.jsx)("div", {
                        className: g.ratingsContainer,
                        children: b.map(e => (0, l.jsxs)("div", {
                            className: g.ratingContainer,
                            children: [(0, l.jsx)(u.Clickable, {
                                className: g.rating,
                                onClick: () => {
                                    a(e.value)
                                },
                                children: (0, l.jsx)(G, {
                                    defaultSrc: (0, r.isThemeDark)(s) ? e.dark : e.light,
                                    selectedSrc: e.selected,
                                    selected: t === e.value,
                                    alt: e.altDescription(),
                                    disableAnimation: n
                                })
                            }), null != e.description ? (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: e.altDescription()
                            }) : null]
                        }, e.value))
                    })]
                })
            }

            function O(e) {
                var t;
                let {
                    selectedRating: a,
                    selectedReasons: n,
                    onSelectedReasons: s,
                    onUserFeedbackChanged: d,
                    onSubmitPressed: r,
                    canSubmit: o
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_2_TITLE.format({
                            rating: a.toLowerCase()
                        })
                    }), (0, l.jsx)("div", {
                        className: g.pillContainer,
                        children: (null !== (t = (0, h.GUILD_FEED_FEEDBACK_REASONS)[a]) && void 0 !== t ? t : []).map(e => (0, l.jsx)(u.Clickable, {
                            onClick: () => s(e),
                            className: i(g.pill, n.has(e) ? g.pillSelected : null),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: (0, c.getDescriptionFromReason)(e)
                            })
                        }, e))
                    }), n.has(h.GuildFeedFeedbackReason.OTHER) ? (0, l.jsx)(u.TextInput, {
                        autoFocus: !0,
                        className: g.textInput,
                        onChange: d,
                        placeholder: E.default.Messages.GUILD_FEED_FEEDBACK_OTHER_PLACEHOLDER
                    }) : null, (0, l.jsx)(u.Button, {
                        className: g.button,
                        disabled: !o,
                        onClick: r,
                        children: E.default.Messages.SUBMIT
                    })]
                })
            }

            function H() {
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsx)("img", {
                        src: R,
                        width: 75,
                        height: 75,
                        alt: ""
                    }), (0, l.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_3_TITLE
                    })]
                })
            }

            function k(e) {
                let t, a;
                let {
                    selectedRating: n,
                    setSelectedRating: s,
                    selectedReasons: d,
                    setSelectedReasons: r,
                    setUserFeedback: o,
                    backPressed: h,
                    onSubmitPressed: E,
                    onBackPressed: I,
                    onClosePressed: _,
                    showSubmitted: x,
                    canSubmit: v,
                    isAnimating: S,
                    useReducedMotion: C
                } = (0, c.useGuildFeedFeedback)(e);
                return x ? (a = !1, t = (0, l.jsx)(H, {})) : null == n || h || S ? (a = !1, t = (0, l.jsx)(y, {
                    disableAnimation: h || C,
                    selectedRating: n,
                    setSelectedRating: s
                })) : (a = !0, t = (0, l.jsx)(O, {
                    selectedRating: n,
                    selectedReasons: d,
                    onSelectedReasons: r,
                    onUserFeedbackChanged: o,
                    onBackPressed: I,
                    onSubmitPressed: E,
                    canSubmit: v
                })), (0, l.jsx)("div", {
                    className: g.parentContainer,
                    onClick: e => e.stopPropagation(),
                    children: (0, l.jsxs)("div", {
                        className: i(g.container, g.containerDivider),
                        children: [t, a ? (0, l.jsx)(u.Clickable, {
                            className: i(g.icon, g.back),
                            onClick: I,
                            children: (0, l.jsx)(f.default, {
                                direction: f.default.Directions.LEFT
                            })
                        }) : null, (0, l.jsx)(u.Clickable, {
                            className: i(g.icon, g.close),
                            onClick: _,
                            children: (0, l.jsx)(m.default, {})
                        })]
                    })
                })
            }