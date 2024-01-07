            "use strict";
            s.r(t), s.d(t, {
                FIRST_TIER_KEY: function() {
                    return N
                },
                default: function() {
                    return C
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("907002"),
                o = s("748820"),
                d = s("118810"),
                u = s("769846"),
                c = s("77078"),
                E = s("159885"),
                _ = s("36694"),
                T = s("49111"),
                I = s("782340"),
                S = s("688541");
            let N = -1,
                g = (0, E.cssValueToNumber)(u.default.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
                f = (0, E.cssValueToNumber)(u.default.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
                A = {
                    tension: 140,
                    friction: 30
                },
                L = {
                    tension: 800,
                    friction: 20
                };
            class m extends n.Component {
                getTotalHeight() {
                    let {
                        tiers: e
                    } = this.props;
                    return e[e.length - 1].y + f / 2
                }
                getProgressHeight(e) {
                    let {
                        tiers: t,
                        progress: s
                    } = this.props, a = t[e], n = t[e + 1];
                    if (null == n || s === a.numRequired) return a.y;
                    let l = n.y - a.y,
                        i = n.numRequired - a.numRequired,
                        r = s - a.numRequired;
                    return a.y + r / i * l
                }
                getCurrentTierIndex() {
                    let {
                        tiers: e,
                        progress: t
                    } = this.props;
                    for (let s = e.length - 1; s > 0; s--)
                        if (t >= e[s].numRequired) return s;
                    return 0
                }
                renderForegroundTooltip() {
                    let {
                        progress: e,
                        tiers: t
                    } = this.props, {
                        showForegroundTooltip: s,
                        foregroundTooltipY: n
                    } = this.state;
                    if (!s || null == this.foregroundTooltipElementRef.current) return null;
                    let l = this.getCurrentTierIndex(),
                        i = t[l + 1],
                        r = null != i ? i.numRequired : null,
                        o = null != r ? r - e : null;
                    return (0, a.jsxs)(c.TooltipLayer, {
                        targetElementRef: this.foregroundTooltipElementRef,
                        position: "right",
                        color: c.Tooltip.Colors.BLACK,
                        tooltipClassName: S.foregroundTooltip,
                        children: [(0, a.jsx)("div", {
                            children: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NUM_SUBSCRIPTIONS.format({
                                numSubscriptions: e
                            })
                        }), null != o && null != i ? (0, a.jsx)("div", {
                            className: S.tooltipMuted,
                            children: I.default.Messages.PREMIUM_GUILD_SETTINGS_MEMBERS_SUBSCRIBED_NEEDED.format({
                                number: o,
                                tier: i.name
                            })
                        }) : null]
                    }, n)
                }
                renderTierMarkerTooltip(e) {
                    let {
                        progress: t
                    } = this.props;
                    if (null == e.name || e.key === T.BoostedGuildTiers.NONE) return null;
                    let s = Math.min(t, e.numRequired);
                    return (0, a.jsxs)("div", {
                        className: S.tierTooltip,
                        children: [(0, a.jsx)("div", {
                            children: e.name
                        }), (0, a.jsx)("div", {
                            children: I.default.Messages.PREMIUM_GUILD_SETTINGS_X_OF_Y_SUBSCRIPTIONS.format({
                                subscribers: s,
                                numRequired: e.numRequired
                            })
                        })]
                    })
                }
                renderTierMarker(e, t, s) {
                    var n;
                    let l;
                    let {
                        progress: i,
                        tiers: o
                    } = this.props, d = o[s], u = i >= e.numRequired, E = null != d && e.key === d.key, T = e.key === o[0].key;
                    l = T ? S.tierFirst : E ? S.tierCurrent : u ? S.tierAccomplished : S.tierInProgress;
                    let I = e.y - (T ? 0 : f / 2),
                        N = this.state.tierMarkerActive === t,
                        g = !T && E && N;
                    return (0, a.jsx)(c.Tooltip, {
                        text: this.renderTierMarkerTooltip(e),
                        position: "right",
                        "aria-label": null !== (n = e.name) && void 0 !== n ? n : "",
                        children: e => (0, a.jsx)(r.Spring, {
                            from: {
                                scale: 1
                            },
                            to: {
                                scale: g ? 1.625 : 1
                            },
                            config: L,
                            children: t => (0, a.jsx)(r.animated.div, {
                                ...e,
                                className: l,
                                style: {
                                    top: I,
                                    transform: t.scale.interpolate(e => "scale(".concat(e, ")"))
                                },
                                children: g && (0, a.jsx)(_.default, {
                                    className: S.currentTierIcon
                                })
                            })
                        })
                    }, e.key)
                }
                renderProgressMask(e) {
                    let {
                        tiers: t
                    } = this.props;
                    return (0, a.jsxs)("mask", {
                        id: "".concat(this.tierMarkerMaskId),
                        children: [(0, a.jsx)("rect", {
                            x: "0",
                            y: "0",
                            width: g,
                            height: e,
                            fill: "white"
                        }), t.map(e => (0, a.jsx)("circle", {
                            cx: g / 2,
                            cy: e.y,
                            r: g / 2,
                            fill: "black"
                        }, e.key))]
                    })
                }
                renderProgressBar(e, t) {
                    let s = this.getProgressHeight(t),
                        {
                            finishedInitialAnimation: n,
                            showForegroundTooltip: l
                        } = this.state;
                    return (0, a.jsxs)("g", {
                        mask: "url(#".concat(this.tierMarkerMaskId, ")"),
                        children: [(0, a.jsx)("rect", {
                            className: S.background,
                            height: e,
                            fill: "currentColor"
                        }), (0, a.jsx)(r.Spring, {
                            from: {
                                height: 0
                            },
                            to: {
                                height: s
                            },
                            config: A,
                            delay: n ? 0 : this.props.initialAnimationDelay,
                            onChange: this.handleForegroundFrame,
                            onRest: n ? void 0 : this.handleFinishedInitialAnimation,
                            children: e => (0, a.jsx)(r.animated.rect, {
                                className: S.foreground,
                                height: e.height.interpolate(e => Math.max(0, e)),
                                onMouseEnter: this.handleForegroundMouseEnter,
                                onMouseLeave: this.handleForegroundMouseLeave,
                                onMouseMove: l ? this.handleForegroundMouseMove : void 0,
                                fill: "currentColor"
                            })
                        })]
                    })
                }
                render() {
                    let {
                        className: e,
                        tiers: t
                    } = this.props, s = this.getCurrentTierIndex(), n = this.getTotalHeight();
                    return (0, a.jsxs)("div", {
                        className: i(e, S.progressBar),
                        style: {
                            height: n
                        },
                        children: [(0, a.jsxs)("svg", {
                            viewBox: "0 0 ".concat(g, " ").concat(n),
                            width: g,
                            height: n,
                            children: [this.renderProgressMask(n), this.renderProgressBar(n, s)]
                        }), (0, a.jsx)("div", {
                            ref: this.foregroundTooltipElementRef,
                            style: {
                                top: this.state.foregroundTooltipY
                            },
                            className: S.foregroundTooltipPosition
                        }), t.map((e, t) => this.renderTierMarker(e, t, s)), this.renderForegroundTooltip()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        showForegroundTooltip: !1,
                        foregroundTooltipY: 0,
                        tierMarkerActive: 0,
                        finishedInitialAnimation: !1
                    }, this.foregroundTooltipElementRef = n.createRef(), this.tierMarkerMaskId = (0, o.v4)(), this.handleForegroundMouseEnter = e => {
                        this.setState({
                            showForegroundTooltip: !0
                        }), this.handleForegroundMouseMove(e)
                    }, this.handleForegroundMouseMove = e => {
                        if (!(0, d.isElement)(e.target)) return;
                        let t = e.target.getBoundingClientRect(),
                            s = e.clientY - t.top;
                        s !== this.state.foregroundTooltipY && this.setState({
                            foregroundTooltipY: s
                        })
                    }, this.handleForegroundMouseLeave = () => {
                        this.setState({
                            showForegroundTooltip: !1
                        })
                    }, this.handleForegroundFrame = e => {
                        let {
                            height: t
                        } = e, {
                            tiers: s,
                            progress: a,
                            onAnimatedTierMaker: n
                        } = this.props, {
                            tierMarkerActive: l
                        } = this.state;
                        for (let e = s.length - 1; e > 0; e--) {
                            let i = s[e],
                                r = l === e;
                            if (t + 20 >= i.y && a >= i.numRequired) {
                                !r && (this.setState({
                                    tierMarkerActive: e
                                }), null != n && n(i));
                                return
                            }
                        }
                    }, this.handleFinishedInitialAnimation = () => {
                        this.setState({
                            finishedInitialAnimation: !0
                        })
                    }
                }
            }
            m.defaultProps = {
                initialAnimationDelay: 0
            };
            var C = m