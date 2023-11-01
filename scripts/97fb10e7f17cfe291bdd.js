(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13350"], {
        277064: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b7cfbc1104ec3593f753.gif"
        },
        748301: function(e, t, n) {
            "use strict";
            e.exports = n.p + "45266c5a3e03cba8884e.svg"
        },
        257809: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d83432a67613c4ff249f.png"
        },
        54338: function(e, t, n) {
            "use strict";
            e.exports = n.p + "98233dd23a0dd0a0c2ec.svg"
        },
        57155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return et
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                l = n("627445"),
                r = n.n(l),
                u = n("917351"),
                c = n.n(u),
                d = n("509043"),
                m = n("446674"),
                f = n("819855"),
                T = n("77078"),
                R = n("430568"),
                E = n("145079"),
                h = n("87657"),
                p = n("225664"),
                _ = n("206230"),
                S = n("867805"),
                g = n("430475"),
                C = n("390236"),
                I = n("185014"),
                N = n("875978"),
                A = n("463617"),
                O = n("512306"),
                v = n("941723"),
                M = n("166257"),
                j = n("432173"),
                y = n("300322"),
                x = n("161778"),
                U = n("42203"),
                b = n("26989"),
                P = n("486996"),
                L = n("377253"),
                D = n("957255"),
                B = n("27618"),
                k = n("697218"),
                F = n("145131"),
                w = n("945330"),
                G = n("315102"),
                V = n("402671"),
                H = n("387111"),
                K = n("441823"),
                z = n("49111"),
                Y = n("782340"),
                J = n("324673"),
                W = n("926622");

            function X(e) {
                return null == e.id ? S.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }
            let q = e => {
                let {
                    emoji: t,
                    channelId: n,
                    messageId: s
                } = e, [l, r] = a.useState(!0), [u, c] = a.useState([]), d = a.useMemo(() => {
                    if (null == u || u.length < 1) return;
                    let e = (0, v.buildEffect)(t, u[0], n, {
                        emojiSize: O.BurstReactionSize.LARGE,
                        messageId: s
                    });
                    return (0, i.jsx)(O.default, {
                        className: J.effect,
                        effect: e,
                        emojiSize: O.BurstReactionSize.LARGE,
                        onComplete: () => r(!1)
                    })
                }, [u, t, n, s]);
                return a.useEffect(() => {
                    let e = !1;
                    return r(!0), !async function() {
                        let n = await (0, V.getEmojiColors)(t);
                        Array.isArray(n) && n.length > 0 && !e && c(n)
                    }(), () => {
                        e = !0
                    }
                }, [t]), (0, i.jsxs)("div", {
                    className: J.burstEmojiSection,
                    children: [d, (0, i.jsx)(R.default, {
                        className: o(J.burstEmoji, {
                            [J.hideEmoji]: l
                        }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction"
                    }), (0, i.jsx)(T.Text, {
                        variant: "text-md/medium",
                        children: X(t)
                    })]
                })
            };
            class Z extends a.PureComponent {
                render() {
                    let {
                        emoji: e,
                        count: t,
                        isSelected: n,
                        setSelected: a,
                        reactionType: s,
                        colors: l
                    } = this.props, r = X(e), u = function(e, t, n, a) {
                        let s = null == e.id ? V.default.getURL(e.name) : G.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: 24
                        });
                        return null != s && "" !== s ? (0, i.jsx)("img", {
                            className: n,
                            src: s,
                            alt: e.name
                        }) : (0, i.jsx)("span", {
                            className: a,
                            children: e.name
                        })
                    }(e, 24, J.emoji, o(J.emoji, J.emojiText)), c = s === N.ReactionTypes.BURST, m = c ? Y.default.Messages.BURST_REACTION_REACTORS_A11Y : Y.default.Messages.REACTION_REACTORS_A11Y, f = m.format({
                        name: r,
                        n: t
                    }), R = {}, E = {};
                    if (c) {
                        let {
                            backgroundColor: e = "",
                            opacity: t = 1,
                            accentColor: i = ""
                        } = null != l ? l : {};
                        if (E.color = i, n) {
                            var h;
                            R.background = null !== (h = (0, d.hex2rgb)(e, t)) && void 0 !== h ? h : ""
                        }
                    }
                    return (0, i.jsx)(T.Tooltip, {
                        position: "left",
                        text: r,
                        children: l => {
                            let {
                                onMouseEnter: r,
                                onMouseLeave: c
                            } = l;
                            return (0, i.jsxs)(T.Clickable, {
                                className: o({
                                    [J.reactionDefault]: !n,
                                    [J.reactionSelected]: n
                                }),
                                "aria-label": f,
                                onClick: () => a({
                                    emoji: e,
                                    reactionType: s
                                }),
                                onMouseEnter: r,
                                onMouseLeave: c,
                                style: R,
                                children: [u, (0, i.jsx)(T.Text, {
                                    variant: "text-sm/bold",
                                    style: E,
                                    children: t
                                })]
                            })
                        }
                    })
                }
            }

            function Q(e) {
                let {
                    emoji: t,
                    user: n,
                    message: a,
                    channel: s,
                    guildId: o,
                    reactionType: l,
                    onRemoveReactor: u
                } = e, c = k.default.getCurrentUser(), d = (0, m.useStateFromStores)([k.default], () => k.default.getUser(n.id), [n]);
                r(null != c, "Reactor: currentUser cannot be undefined");
                let f = (0, y.useIsActiveChannelOrUnarchivableThread)(s),
                    R = (0, m.useStateFromStores)([D.default], () => D.default.can(z.Permissions.MANAGE_MESSAGES, s) && f),
                    p = R || c.id === n.id,
                    _ = (0, m.useStateFromStores)([b.default, U.default, B.default], () => H.default.getName(o, s.id, n));
                return (0, i.jsxs)(F.default, {
                    className: J.reactorDefault,
                    onContextMenu: e => (0, K.openUserContextMenu)(e, n, s),
                    align: F.default.Align.CENTER,
                    children: [(0, i.jsx)(F.default.Child, {
                        wrap: !0,
                        grow: 0,
                        shrink: 0,
                        className: W.marginReset,
                        children: (0, i.jsx)(h.default, {
                            user: null != d ? d : n,
                            size: T.AvatarSizes.SIZE_24
                        })
                    }), (0, i.jsx)(F.default.Child, {
                        children: (0, i.jsxs)(T.Text, {
                            tag: "strong",
                            variant: "text-md/normal",
                            className: J.name,
                            children: [null != _ && "" !== _ && (0, i.jsx)("span", {
                                className: n.isPomelo() ? "" : J.nickname,
                                children: _
                            }), (0, i.jsx)(E.default, {
                                user: n,
                                className: null != _ && "" !== _ ? J.tagFaded : null,
                                usernameClass: J.username,
                                discriminatorClass: J.discriminator,
                                forceUsername: !0
                            })]
                        })
                    }), p && (0, i.jsx)(T.Clickable, {
                        onClick: function() {
                            M.removeReactionWithConfirmation({
                                emoji: t,
                                userId: n.id,
                                channelId: s.id,
                                messageId: a.id,
                                reactionType: l,
                                isMe: (null == c ? void 0 : c.id) === n.id
                            }), null == u || u()
                        },
                        children: (0, i.jsx)(w.default, {
                            width: 16,
                            height: 16,
                            className: J.remove
                        })
                    })]
                })
            }
            class $ extends a.PureComponent {
                componentDidMount() {
                    this.loadMore()
                }
                componentDidUpdate(e) {
                    (!c.isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) && this.setState({
                        lastId: null,
                        loadingMore: !1
                    }, () => this.loadMore())
                }
                loadMore() {
                    let {
                        message: e,
                        reaction: t,
                        reactionType: n
                    } = this.props, {
                        lastId: i
                    } = this.state;
                    this.setState({
                        loadingMore: !0
                    }), M.getReactors({
                        channelId: e.getChannelId(),
                        messageId: e.id,
                        emoji: t.emoji,
                        limit: z.DEFAULT_NUM_REACTION_USERS,
                        after: i,
                        type: n
                    }).then(e => {
                        var t;
                        return this.setState({
                            loadingMore: !1,
                            lastId: null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.id
                        })
                    })
                }
                renderSection() {
                    return null
                }
                render() {
                    let {
                        hasMore: e,
                        reactors: t,
                        reaction: n,
                        message: a,
                        reactionType: s
                    } = this.props, o = [];
                    return 0 === t.length && this.state.loadingMore ? o.push(length) : (o.push(t.length), e && o.push(1)), (0, i.jsxs)("div", {
                        className: J.reactorsContainer,
                        children: [s === N.ReactionTypes.BURST && (0, i.jsx)(q, {
                            emoji: n.emoji,
                            channelId: a.getChannelId(),
                            messageId: a.id
                        }), (0, i.jsx)(T.List, {
                            className: J.reactors,
                            fade: !0,
                            ref: this.scrollerRef,
                            sections: o,
                            sectionHeight: 0,
                            rowHeight: this.getRowHeight,
                            renderRow: this.renderRow,
                            renderSection: this.renderSection,
                            onScroll: e ? this.handleScroll : void 0
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = a.createRef(), this.state = {
                        lastId: null,
                        loadingMore: !1
                    }, this.handleScroll = () => {
                        let {
                            current: e
                        } = this.scrollerRef;
                        if (null == e) return;
                        let t = e.getScrollerState();
                        t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
                    }, this.getRowHeight = (e, t) => {
                        let {
                            reactors: n
                        } = this.props;
                        if (1 === e) return 0 === t ? 44 : 0;
                        if (0 === e) {
                            if (0 === t && 0 === n.length) return 440;
                            if (null != this.props.reactors[t]) return 44
                        }
                        return 0
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e, {
                            message: a,
                            guildId: s,
                            channel: o,
                            reaction: l,
                            reactors: r,
                            reactionType: u
                        } = this.props, c = r[n];
                        if (1 === t) return 0 === n ? (0, i.jsx)(T.Spinner, {
                            className: J.spinnerMore
                        }, "hasMore") : null;
                        return 0 === r.length && this.state.loadingMore ? (0, i.jsx)(T.Spinner, {
                            className: J.spinner
                        }, "loadingMore") : null != c && (0, i.jsx)(Q, {
                            message: a,
                            emoji: l.emoji,
                            guildId: s,
                            channel: o,
                            user: c,
                            reaction: l,
                            reactionType: u
                        }, c.id)
                    }
                }
            }
            let ee = m.default.connectStores([P.default], e => {
                let {
                    message: t,
                    reaction: n,
                    reactionType: i
                } = e, a = P.default.getReactions(t.getChannelId(), t.id, n.emoji, z.DEFAULT_NUM_REACTION_USERS, i);
                if (null == a) return {
                    reactors: [],
                    hasMore: !1
                };
                let s = Object.values(a),
                    o = i === N.ReactionTypes.BURST ? n.burst_count : n.count,
                    l = o > s.length;
                return {
                    reactors: s,
                    hasMore: l
                }
            })($);

            function et(e) {
                var t, n;
                let {
                    message: s,
                    selectedReaction: o,
                    onClose: l,
                    transitionState: r
                } = e, u = (0, m.useStateFromStores)([U.default], () => U.default.getChannel(s.getChannelId())), c = null == u ? void 0 : u.getGuildId(), d = (0, m.useStateFromStores)([L.default, g.default, I.default], () => {
                    var e, t, n;
                    let i = null !== (n = null !== (t = L.default.getMessage(s.getChannelId(), s.id)) && void 0 !== t ? t : null === (e = g.default.getMessage(s.id)) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== n ? n : null != c ? I.default.getCachedMessage(c, s.getChannelId(), s.id) : void 0;
                    return null != i ? i.reactions : []
                }, [s, c]), {
                    enabled: R
                } = (0, p.useBurstReactionsExperiment)(c);
                let E = (t = d, n = R, a.useMemo(() => {
                        let e = [];
                        return t.forEach(t => {
                            n && t.burst_count > 0 && e.push({
                                ...t,
                                count: 0
                            }), t.count > 0 && e.push({
                                ...t,
                                burst_count: 0
                            })
                        }), e.sort((e, t) => {
                            let n = e.burst_count > 0 ? e.burst_count : e.count,
                                i = t.burst_count > 0 ? t.burst_count : t.count;
                            return i - n
                        }), e
                    }, [t, n])),
                    h = E[0],
                    S = null != h ? {
                        emoji: h.emoji,
                        reactionType: h.burst_count > 0 ? N.ReactionTypes.BURST : N.ReactionTypes.NORMAL
                    } : null,
                    [O, v] = function(e, t, n) {
                        let [i, s] = a.useState(null != e ? e : t);
                        return a.useEffect(() => {
                            if (null != i) {
                                let e = n.find(e => {
                                    let t = e.burst_count > 0 ? N.ReactionTypes.BURST : N.ReactionTypes.NORMAL;
                                    return e.emoji === i.emoji && t === i.reactionType
                                });
                                null == e && s(t)
                            }
                        }, [i, s, n, t]), [i, s]
                    }(o, S, d),
                    M = a.useMemo(() => {
                        var e;
                        return null == O ? null : null !== (e = d.find(e => (0, j.emojiEquals)(e.emoji, O.emoji))) && void 0 !== e ? e : null
                    }, [d, O]),
                    y = (0, m.useStateFromStores)([_.default], () => _.default.saturation),
                    b = (0, m.useStateFromStores)([x.default], () => (0, f.isThemeDark)(x.default.theme));
                if (a.useEffect(() => {
                        (0 === d.length || null == O && null == M) && setImmediate(l)
                    }, [l, d.length, M, O]), null == O || null == M) return (0, i.jsx)(T.Spinner, {});
                if (null == u) throw Error("MessageReactions.render: Message does not have a channelId");
                return (0, i.jsx)(C.default.Provider, {
                    value: null != c ? c : void 0,
                    children: (0, i.jsxs)(T.ModalRoot, {
                        "aria-label": Y.default.Messages.REACTIONS,
                        transitionState: r,
                        size: T.ModalSize.DYNAMIC,
                        className: J.container,
                        children: [(0, i.jsx)(T.Scroller, {
                            className: J.scroller,
                            fade: !0,
                            children: E.map(e => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, i.jsx)(Z, {
                                    isSelected: en(O, e, n ? N.ReactionTypes.BURST : N.ReactionTypes.NORMAL),
                                    setSelected: v,
                                    reactionType: n ? N.ReactionTypes.BURST : N.ReactionTypes.NORMAL,
                                    emoji: e.emoji,
                                    count: n ? e.burst_count : e.count,
                                    colors: null != e.burst_colors ? (0, A.buildBurstReactionColors)(e.burst_colors, y, b) : void 0
                                }, "".concat(n ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
                            })
                        }), (0, i.jsx)(ee, {
                            message: s,
                            reaction: M,
                            guildId: c,
                            channel: u,
                            reactionType: O.reactionType
                        })]
                    })
                })
            }
            let en = (e, t, n) => c.isEqual(e.emoji, t.emoji) && e.reactionType === n
        },
        58533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("516555"),
                o = n("301165"),
                l = n("458960"),
                r = n("430568"),
                u = n("526887"),
                c = n("590527"),
                d = n("983782"),
                m = n("315102"),
                f = n("402671"),
                T = n("172858"),
                R = n("612683");
            let E = [];

            function h(e) {
                let {
                    messageId: t,
                    emoji: n,
                    startPosition: h,
                    targetPosition: p
                } = e, [_, S] = a.useState(0), [g, C] = a.useState(0), [I, N] = a.useState(null), {
                    confettiCanvas: A
                } = a.useContext(u.ConfettiCannonContext), O = (0, s.useConfettiCannon)(A, I), v = a.useMemo(() => {
                    let e = null == n.id ? f.default.getURL(n.name) : m.default.getEmojiURL({
                        id: n.id,
                        animated: !1,
                        size: 22
                    });
                    return [{
                        src: e,
                        colorize: !1
                    }]
                }, [n.name, n.id]), M = p.x - p.width / 2 * .5, j = p.y - p.height / 2 * .5, y = (0, o.useSpring)({
                    from: {
                        y: h.y
                    },
                    to: {
                        y: j
                    },
                    config: {
                        duration: 450,
                        easing: l.default.Easing.in(l.default.Easing.exp)
                    },
                    onChange: e => {
                        let {
                            y: t
                        } = e;
                        C(t)
                    }
                }), x = (0, o.useSpring)({
                    from: {
                        x: h.x,
                        scale: 1,
                        opacity: 1
                    },
                    to: {
                        x: M,
                        scale: .5,
                        opacity: .4
                    },
                    config: {
                        duration: 450,
                        easing: l.default.Easing.in(l.default.Easing.ease)
                    },
                    onRest: () => {
                        (0, c.clearReactionPickerAnimation)(t, n.name, n.id)
                    },
                    onChange: e => {
                        let {
                            x: t
                        } = e;
                        S(t)
                    }
                });
                return a.useEffect(() => {
                    _ > 0 && g > 0 && O.createConfetti({
                        ...T.COMMON_CONFETTI_BASE_CONFIG,
                        position: {
                            type: "static",
                            value: {
                                x: _,
                                y: g
                            }
                        }
                    })
                }, [O, _, g]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.SpriteCanvas, {
                        ref: N,
                        sprites: v,
                        colors: E,
                        spriteWidth: T.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: T.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    }), (0, i.jsx)(d.default, {
                        children: (0, i.jsx)(o.animated.div, {
                            style: {
                                ...y
                            },
                            className: R.emojiContainer,
                            children: (0, i.jsx)(o.animated.div, {
                                style: {
                                    ...x,
                                    opacity: x.opacity
                                },
                                children: (0, i.jsx)(r.default, {
                                    className: R.emoji,
                                    emojiId: n.id,
                                    emojiName: n.name,
                                    animated: n.animated,
                                    size: "jumbo"
                                })
                            })
                        })
                    })]
                })
            }
        },
        13066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LurkerModeUpsellPopoutTypes: function() {
                    return a
                },
                default: function() {
                    return E
                }
            });
            var i, a, s = n("37983"),
                o = n("884691"),
                l = n("446674"),
                r = n("77078"),
                u = n("851387"),
                c = n("476765"),
                d = n("449008"),
                m = n("267567"),
                f = n("49111"),
                T = n("782340"),
                R = n("404637");
            (i = a || (a = {}))[i.CHAT = 0] = "CHAT", i[i.REACTIONS = 1] = "REACTIONS";
            var E = e => {
                let {
                    type: t,
                    guild: i,
                    closePopout: E,
                    ctaRef: h
                } = e, p = (0, c.useUID)(), [_, S] = o.useState(!1), g = (0, l.useStateFromStores)([m.default], () => m.default.isLurking(i.id), [i.id]);
                o.useEffect(() => {
                    _ && !g && E()
                }, [_, g, E]);
                let C = null,
                    I = T.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
                switch (t) {
                    case a.CHAT:
                        C = T.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
                        break;
                    case a.REACTIONS:
                        C = T.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
                        break;
                    default:
                        return (0, d.assertNever)(t)
                }
                if (null == C) return null;
                let N = async () => {
                    S(!0);
                    try {
                        await u.default.joinGuild(i.id, {
                            source: f.JoinGuildSources.CHAT_INPUT_BLOCKER
                        }), E()
                    } catch {
                        S(!1)
                    }
                };
                return (0, s.jsxs)(r.Dialog, {
                    className: R.container,
                    "aria-labelledby": p,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        className: R.image,
                        src: n("748301")
                    }), (0, s.jsxs)("div", {
                        className: R.content,
                        children: [(0, s.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            id: p,
                            children: C
                        }), (0, s.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: I
                        }), (0, s.jsxs)("div", {
                            className: R.buttonContainer,
                            children: [(0, s.jsx)(r.Button, {
                                buttonRef: h,
                                onClick: N,
                                submitting: _,
                                children: T.default.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, s.jsx)(r.Button, {
                                onClick: E,
                                look: r.Button.Looks.BLANK,
                                className: R.cancel,
                                children: T.default.Messages.LURKER_MODE_POPOUT_CANCEL
                            })]
                        })]
                    })]
                })
            }
        },
        15935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BurstReactionEffectSource: function() {
                    return a
                },
                default: function() {
                    return f
                }
            });
            var i, a, s = n("446674"),
                o = n("913144");
            (i = a || (a = {})).HOVER = "HOVER", i.EXTERNAL = "EXTERNAL", i.RANDOM = "RANDOM";
            let l = {},
                r = {},
                u = {},
                c = (e, t) => {
                    let n = null != t.id ? t.id : t.name;
                    return "".concat(e, ":").concat(n)
                },
                d = (e, t) => {
                    var n;
                    let i;
                    switch (e) {
                        case a.HOVER:
                            i = a.HOVER;
                            break;
                        case a.RANDOM:
                            i = a.RANDOM;
                            break;
                        default:
                            i = a.EXTERNAL
                    }
                    let s = Object.entries(null !== (n = r[t]) && void 0 !== n ? n : {}),
                        o = s.filter(e => {
                            let [, t] = e;
                            return t === i
                        }),
                        l = Object.fromEntries(o);
                    if (Object.keys(l).length >= 5 && e === a.EXTERNAL) {
                        for (let e in l)
                            if (null == u[t] || null == u[t][e]) {
                                delete r[t][e], delete l[e];
                                break
                            }
                    }
                    return Object.keys(l).length
                };
            class m extends s.default.Store {
                getReactionPickerAnimation(e, t, n) {
                    return l["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
                }
                getEffectForEmojiId(e, t, n) {
                    var i;
                    let a = c(t, n);
                    return null === (i = r[e]) || void 0 === i ? void 0 : i[a]
                }
            }
            m.displayName = "BurstReactionEffectsStore";
            var f = new m(o.default, {
                BURST_REACTION_EFFECT_CLEAR: e => {
                    var t;
                    let {
                        channelId: n,
                        messageId: i,
                        emoji: a
                    } = e, s = c(i, a);
                    null === (t = r[n]) || void 0 === t || delete t[s]
                },
                BURST_REACTION_EFFECT_PLAY: e => {
                    var t, n, i;
                    let {
                        channelId: s,
                        messageId: o,
                        emoji: l,
                        key: m
                    } = e, f = c(o, l);
                    if (d(m, s) >= 5) return;
                    let T = null !== (t = r[s]) && void 0 !== t ? t : {},
                        R = null !== (n = u[s]) && void 0 !== n ? n : {},
                        E = R[f],
                        h = T[f];
                    if (m !== a.HOVER || null == h) {
                        h === a.HOVER && m === a.EXTERNAL && null != E && ("function" == typeof E.destroy && E.destroy(), null === (i = u[s]) || void 0 === i || delete i[f], h = void 0);
                        null == h && (null != r[s] ? r[s][f] = m : r[s] = {
                            [f]: m
                        })
                    }
                },
                BURST_REACTION_ANIMATION_ADD: e => {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: i,
                        animation: a
                    } = e, s = c(n, i);
                    null == u[t] && (u[t] = {}), u[t][s] = a
                },
                BURST_REACTION_PICKER_ANIMATION_ADD: e => {
                    let {
                        messageId: t,
                        emojiName: n,
                        emojiId: i,
                        startPosition: a
                    } = e;
                    l["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")] = a
                },
                BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
                    let {
                        messageId: t,
                        emojiName: n,
                        emojiId: i
                    } = e;
                    delete l["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")]
                }
            })
        },
        875978: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                ReactionTypes: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.NORMAL = 0] = "NORMAL", a[a.BURST = 1] = "BURST"
        },
        583022: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = e => {
                let {
                    channel: t,
                    canChat: n,
                    renderReactions: i,
                    canAddNewReactions: a,
                    isLurking: s,
                    isGuest: o,
                    communicationDisabled: l,
                    isActiveChannelOrUnarchivableThread: r
                } = e, u = t.isPrivate(), c = t.isSystemDM(), d = (n || u) && r;
                return {
                    disableReactionReads: !i,
                    disableReactionCreates: s || o || !d || !((!0 === a || u) && !c && r),
                    disableReactionUpdates: s || o || !d || !0 === l
                }
            }
        },
        463617: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                buildBurstReactionColors: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("819855"),
                s = n("206230"),
                o = n("161778"),
                l = n("61069");

            function r(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.saturation),
                    n = (0, i.useStateFromStores)([o.default], () => (0, a.isThemeDark)(o.default.theme));
                return u(e, t, n)
            }

            function u(e, t, n) {
                var i;
                if (null == e || e.length < 1) return null;
                let a = l.default.buildEmojiReactionColorsPlatformed({
                        colors: e,
                        saturationFactor: t
                    }),
                    s = n ? null == a ? void 0 : a.DARK : null == a ? void 0 : a.LIGHT;
                return {
                    backgroundColor: null == s ? void 0 : s.backgroundColor,
                    accentColor: null == s ? void 0 : s.accentColor,
                    highlightColor: null == s ? void 0 : s.highlightColor,
                    opacity: null !== (i = null == s ? void 0 : s.opacity) && void 0 !== i ? i : .15
                }
            }
        },
        255135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                openOutOfBurstsModal: function() {
                    return T
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                o = n("432173"),
                l = n("599110"),
                r = n("103475"),
                u = n("49111"),
                c = n("782340"),
                d = n("355582");
            let m = n("257809");

            function f(e) {
                let {
                    onClose: t,
                    transitionState: n
                } = e;
                a.useEffect(() => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: r.BurstAnalyticTypes.OUT_OF_BURSTS
                    })
                }, []);
                let f = (0, o.useNextReplenishmentMessage)();
                return (0, i.jsxs)(s.ModalRoot, {
                    className: d.root,
                    "aria-label": c.default.Messages.SUPER_REACTION_OUT_OF_BURSTS,
                    transitionState: n,
                    children: [(0, i.jsx)("img", {
                        className: d.art,
                        alt: "",
                        src: m
                    }), (0, i.jsxs)(s.ModalContent, {
                        className: d.content,
                        children: [(0, i.jsx)(s.Heading, {
                            className: d.header,
                            variant: "heading-xl/semibold",
                            children: c.default.Messages.SUPER_REACTION_OUT_OF_BURSTS
                        }), (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: f
                        }), (0, i.jsx)(s.Button, {
                            className: d.button,
                            onClick: t,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.BRAND,
                            children: c.default.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }

            function T() {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("255135").then(n.bind(n, "255135"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        331011: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getReactionTooltipText: function() {
                    return m
                }
            });
            var i = n("917351"),
                a = n.n(i),
                s = n("432173"),
                o = n("42203"),
                l = n("486996"),
                r = n("27618"),
                u = n("387111"),
                c = n("875978"),
                d = n("782340");

            function m(e, t) {
                var n;
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.ReactionTypes.NORMAL,
                    m = arguments.length > 3 ? arguments[3] : void 0,
                    f = l.default.getReactions(e.getChannelId(), e.id, t, 3, i),
                    T = o.default.getChannel(e.getChannelId()),
                    R = null == T || T.isPrivate() ? null : T.getGuildId(),
                    E = e.getReaction(t),
                    h = i === c.ReactionTypes.BURST,
                    p = a(f).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(R, null == T ? void 0 : T.id, e)).value();
                if (0 === p.length) return "";
                let _ = {
                        standard: {
                            reactionTooltip1NInteractive: d.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: d.default.Messages.REACTION_TOOLTIP_1_N,
                            reactionTooltip1: d.default.Messages.REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: d.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: d.default.Messages.REACTION_TOOLTIP_2_N,
                            reactionTooltip2: d.default.Messages.REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: d.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: d.default.Messages.REACTION_TOOLTIP_3_N,
                            reactionTooltip3: d.default.Messages.REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: d.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: d.default.Messages.REACTION_TOOLTIP_N
                        },
                        burst: {
                            reactionTooltip1NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: d.default.Messages.BURST_REACTION_TOOLTIP_1_N,
                            reactionTooltip1: d.default.Messages.BURST_REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: d.default.Messages.BURST_REACTION_TOOLTIP_2_N,
                            reactionTooltip2: d.default.Messages.BURST_REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: d.default.Messages.BURST_REACTION_TOOLTIP_3_N,
                            reactionTooltip3: d.default.Messages.BURST_REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: d.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: d.default.Messages.BURST_REACTION_TOOLTIP_N
                        }
                    },
                    S = h ? _.burst : _.standard,
                    g = null !== (n = h ? null == E ? void 0 : E.burst_count : null == E ? void 0 : E.count) && void 0 !== n ? n : 0,
                    C = Math.max(0, g - p.length),
                    I = (0, s.getReactionEmojiName)(t);
                if (1 === p.length) return C > 0 ? null != m ? S.reactionTooltip1NInteractive.format({
                    a: p[0],
                    n: C,
                    emojiName: I,
                    onClick: m
                }) : S.reactionTooltip1N.format({
                    a: p[0],
                    n: C,
                    emojiName: I
                }) : S.reactionTooltip1.format({
                    a: p[0],
                    emojiName: I
                });
                if (2 === p.length) return C > 0 ? null != m ? S.reactionTooltip2NInteractive.format({
                    a: p[0],
                    b: p[1],
                    n: C,
                    emojiName: I,
                    onClick: m
                }) : S.reactionTooltip2N.format({
                    a: p[0],
                    b: p[1],
                    n: C,
                    emojiName: I
                }) : S.reactionTooltip2.format({
                    a: p[0],
                    b: p[1],
                    emojiName: I
                });
                if (3 === p.length) return C > 0 ? null != m ? S.reactionTooltip3NInteractive.format({
                    a: p[0],
                    b: p[1],
                    c: p[2],
                    n: C,
                    emojiName: I,
                    onClick: m
                }) : S.reactionTooltip3N.format({
                    a: p[0],
                    b: p[1],
                    c: p[2],
                    n: C,
                    emojiName: I
                }) : S.reactionTooltip3.format({
                    a: p[0],
                    b: p[1],
                    c: p[2],
                    emojiName: I
                });
                else return null != m ? S.reactionTooltipNInteractive.format({
                    n: C,
                    emojiName: I,
                    onClick: m
                }) : S.reactionTooltipN.format({
                    n: C,
                    emojiName: I
                })
            }
        },
        350134: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                REACTION_MIN_WIDTH_DIGITS: function() {
                    return em
                },
                showReactionsModal: function() {
                    return ef
                },
                isMeReaction: function() {
                    return eT
                },
                Reaction: function() {
                    return eE
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                l = n("748820"),
                r = n("458960"),
                u = n("509043"),
                c = n("446674"),
                d = n("151426"),
                m = n("862337"),
                f = n("130969"),
                T = n("77078"),
                R = n("430568"),
                E = n("57155"),
                h = n("225664"),
                p = n("206230"),
                _ = n("716241"),
                S = n("10641"),
                g = n("58533"),
                C = n("385976"),
                I = n("858619"),
                N = n("865453"),
                A = n("233322"),
                O = n("529932"),
                v = n("446066"),
                M = n("13066"),
                j = n("785621"),
                y = n("638971"),
                x = n("635956"),
                U = n("85589"),
                b = n("166257"),
                P = n("432173"),
                L = n("845579"),
                D = n("42203"),
                B = n("305961"),
                k = n("486996"),
                F = n("162771"),
                w = n("697218"),
                G = n("471671"),
                V = n("738107"),
                H = n("791106"),
                K = n("256170"),
                z = n("216422"),
                Y = n("599110"),
                J = n("719923"),
                W = n("590527"),
                X = n("15935"),
                q = n("692171"),
                Z = n("875978"),
                Q = n("412745"),
                $ = n("463617"),
                ee = n("255135"),
                et = n("459698"),
                en = n("933629"),
                ei = n("331011"),
                ea = n("81924"),
                es = n("49111"),
                eo = n("646718"),
                el = n("782340"),
                er = n("154403"),
                eu = n("550244"),
                ec = n("314934"),
                ed = n("219468");
            let em = 9;

            function ef(e, t, n) {
                (0, T.openModal)(e => (0, i.jsx)(E.default, {
                    ...e,
                    message: t,
                    selectedReaction: n
                }))
            }

            function eT(e, t, n) {
                return n === Z.ReactionTypes.BURST && t || n === Z.ReactionTypes.NORMAL && e
            }
            class eR extends a.PureComponent {
                componentWillAppear(e) {
                    this.animateIn(e)
                }
                componentWillEnter(e) {
                    this.animateIn(e)
                }
                componentWillUnmount() {
                    this.hideTooltip()
                }
                animateIn(e) {
                    G.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
                        toValue: 1,
                        duration: 300,
                        easing: r.default.Easing.inOut(r.default.Easing.back())
                    }), r.default.timing(this.opacity, {
                        toValue: 1,
                        duration: 300
                    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
                }
                render() {
                    var e;
                    let t, n;
                    let {
                        count: a,
                        burst_count: s,
                        colors: l,
                        isBurstReaction: c,
                        hideCount: d,
                        emoji: m,
                        readOnly: f,
                        isLurking: E,
                        isGuest: h,
                        isPendingMember: p,
                        className: _,
                        useChatFontScaling: S,
                        message: C,
                        hideEmoji: I,
                        shouldShowFreeUserSentCoachmark: N,
                        onRenderFreeUserSentPopout: A,
                        hasBurstShake: O,
                        hasBurstGlow: v,
                        animationStartPosition: M,
                        hasBurstSendAnimation: y
                    } = this.props, {
                        shouldShowTooltip: x,
                        tooltipTextAria: U,
                        reactionRef: b,
                        tooltipPositionKey: L
                    } = this.state, D = S ? ec : eu, B = {
                        transform: [{
                            scale: this.scale
                        }],
                        opacity: this.opacity
                    }, k = c ? s : a;
                    if (c && null != l) {
                        let {
                            accentColor: i,
                            backgroundColor: a,
                            opacity: s
                        } = l, o = null !== (e = (0, u.hex2rgb)(null != a ? a : "", s)) && void 0 !== e ? e : "";
                        this.isMe() && (B.borderColor = a), B.background = o, t = i, n = i
                    }
                    let F = null == b ? void 0 : b.getBoundingClientRect(),
                        w = null != M && null != F && y,
                        G = null == M || !y;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(T.Popout, {
                            shouldShow: x,
                            "aria-label": null != U && U,
                            renderPopout: this.renderTooltip,
                            nudgeAlignIntoViewport: !0,
                            position: "top",
                            align: "center",
                            positionKey: L,
                            children: () => (0, i.jsx)("div", {
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave,
                                ref: this.handleSetReactionRef,
                                children: (0, i.jsx)(r.default.div, {
                                    className: o(D.reaction, _, {
                                        [D.reactionMe]: this.isMe(),
                                        [D.reactionReadOnly]: f && !E && !p && !h,
                                        [D.shakeReaction]: I && O && null == M
                                    }),
                                    style: B,
                                    children: (0, i.jsx)(T.Popout, {
                                        renderPopout: this.renderLurkerModeUpsellPopout,
                                        position: "top",
                                        children: e => (0, i.jsxs)(T.Clickable, {
                                            ...e,
                                            className: D.reactionInner,
                                            onClick: this.handleClick,
                                            "aria-disabled": f,
                                            "aria-label": (0, P.getAccessibleEmojiDisplayName)(this.isMe(), k, m, c),
                                            "aria-pressed": this.isMe(),
                                            children: [(0, i.jsx)("div", {
                                                className: o({
                                                    [D.burstGlow]: v && c
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(n)
                                                }
                                            }), (0, i.jsxs)("div", {
                                                children: [c ? (0, i.jsxs)(i.Fragment, {
                                                    children: [w && (0, i.jsx)(g.default, {
                                                        messageId: C.id,
                                                        emoji: m,
                                                        startPosition: M,
                                                        targetPosition: F
                                                    }), G && (0, i.jsx)(ea.default, {
                                                        count: s,
                                                        emoji: m,
                                                        channelId: C.getChannelId(),
                                                        messageId: C.id,
                                                        useChatFontScaling: S,
                                                        color: n
                                                    })]
                                                }) : null, (0, i.jsx)(R.default, {
                                                    className: o({
                                                        [D.hideEmoji]: I
                                                    }),
                                                    emojiId: m.id,
                                                    emojiName: m.name,
                                                    size: "reaction",
                                                    animated: m.animated
                                                })]
                                            }), d ? null : (0, i.jsx)(V.default, {
                                                className: D.reactionCount,
                                                value: k,
                                                color: t,
                                                digitWidth: em
                                            }), (0, i.jsx)(j.default, {
                                                count: k,
                                                reactionRef: b
                                            })]
                                        })
                                    })
                                })
                            })
                        }), c && N && null != A && (0, i.jsx)(T.Popout, {
                            renderPopout: A,
                            shouldShow: !0,
                            closeOnScroll: !0,
                            onRequestClose: this.handleDismissCoachmark,
                            children: e => (0, i.jsx)("div", {
                                className: D.hidden,
                                ...e
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new m.Timeout, this.hideTimeout = new m.Timeout, this.ctaRef = a.createRef(), this.type = Z.ReactionTypes.NORMAL, this.colors = {
                        backgroundColor: void 0,
                        borderColor: void 0,
                        textColor: void 0
                    }, this.hasDismissedRemoveModal = !1, this.shouldShowFreeUserSentCoachmark = !1, this.state = {
                        shouldShowTooltip: !1,
                        tooltipText: null,
                        tooltipTextAria: null,
                        reactionRef: null,
                        tooltipPositionKey: void 0
                    }, this.hasShownTooltip = !1, this.nonce = (0, l.v4)(), this.userCanBurstReact = () => {
                        let {
                            hasUnlimited: e
                        } = h.BurstReactionsUserExperiment.getCurrentConfig({
                            location: "Reaction user can burst react"
                        }, {
                            autoTrackExposure: !1
                        }), {
                            remainingBurstCurrency: t,
                            userHasPremium: n
                        } = this.props;
                        return e ? n : void 0 !== t && t > 0
                    }, this.handleClick = e => {
                        var t, n;
                        e.stopPropagation();
                        let {
                            message: i,
                            emoji: a,
                            readOnly: s,
                            isBurstReaction: o,
                            isPendingMember: l,
                            isLurking: r,
                            isGuest: u,
                            isForumToolbar: c,
                            userHasPremium: m,
                            hasDismissedRemoveModal: f,
                            shouldShowFreeUserSentCoachmark: T
                        } = this.props, R = D.default.getChannel(i.getChannelId());
                        if (r || u) {
                            null === (n = this.ctaRef) || void 0 === n || null === (t = n.current) || void 0 === t || t.focus();
                            return
                        }
                        let E = i.getChannelId(),
                            h = c ? b.ReactionLocations.FORUM_TOOLBAR : b.ReactionLocations.MESSAGE;
                        if (o && !s && this.isMe()) f ? (0, b.removeReaction)(E, i.id, a, void 0, h, {
                            burst: o
                        }) : (0, b.removeReactionWithConfirmation)({
                            emoji: a,
                            channelId: E,
                            messageId: i.id,
                            reactionType: o ? Z.ReactionTypes.BURST : Z.ReactionTypes.NORMAL,
                            location: h,
                            isMe: this.isMe()
                        });
                        else if (!o || this.userCanBurstReact() || m) {
                            if (o && !this.userCanBurstReact()) {
                                (0, ee.openOutOfBurstsModal)();
                                return
                            } else l ? this.handleShowVerificationGate() : !s && (this.isMe() ? (0, b.removeReaction)(E, i.id, a, void 0, h) : (0, b.addReaction)(E, i.id, a, h, {
                                burst: o
                            }))
                        } else {
                            (0, U.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: eo.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: (null == R ? void 0 : R.getGuildId()) != null ? es.AnalyticsPages.GUILD_CHANNEL : es.AnalyticsPages.DM_CHANNEL,
                                    section: null != R ? (0, P.getBurstAnalyticsSection)(R) : void 0,
                                    object: es.AnalyticsObjects.EMOJI_REACTION_UPSELL
                                }
                            });
                            return
                        }
                        o && this.isMe() && T && ((0, W.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT))
                    }, this.handleEnter = e => {
                        let {
                            emoji: t,
                            message: n,
                            type: i,
                            reduceMotion: a,
                            animateEmoji: s
                        } = this.props, o = i === Z.ReactionTypes.BURST;
                        o && !this.isReactionEventActive && !a && s && (0, b.playBurstReaction)({
                            channelId: n.getChannelId(),
                            messageId: n.id,
                            emoji: t,
                            key: X.BurstReactionEffectSource.HOVER
                        }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(o ? 750 : 500, this.showTooltip, !1)
                    }, this.handleEnterTooltip = () => {
                        this.isReactionEventActive = !0, this.handleShowTooltip()
                    }, this.handleShowTooltip = () => {
                        this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), k.default.addChangeListener(this.updateTooltipText))
                    }, this.showTooltip = () => {
                        this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
                    }, this.handleLeave = () => {
                        this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), k.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
                    }, this.hideTooltip = () => {
                        this.setState({
                            shouldShowTooltip: !1
                        }), this.hasShownTooltip && Y.default.track(es.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: this.nonce
                        })
                    }, this.isMe = () => {
                        let {
                            me: e,
                            me_burst: t,
                            type: n
                        } = this.props;
                        return eT(e, t, n)
                    }, this.updateTooltipText = () => {
                        let {
                            message: e,
                            emoji: t,
                            type: n
                        } = this.props, i = (0, ei.getReactionTooltipText)(e, t, n), a = this.isKeyboardNavigation ? i : (0, ei.getReactionTooltipText)(e, t, n, es.NOOP);
                        this.setState({
                            tooltipText: a,
                            tooltipTextAria: i,
                            shouldShowTooltip: null != a && "" !== a
                        })
                    }, this.renderLurkerModeUpsellPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            message: n,
                            isLurking: a
                        } = this.props, s = D.default.getChannel(n.getChannelId()), o = B.default.getGuild(null == s ? void 0 : s.getGuildId());
                        return a && null != o ? (0, i.jsx)(M.default, {
                            ctaRef: this.ctaRef,
                            type: M.LurkerModeUpsellPopoutTypes.REACTIONS,
                            guild: o,
                            closePopout: t
                        }) : (0, i.jsx)(i.Fragment, {})
                    }, this.renderEmojiDetails = () => {
                        let e = this.props.emoji;
                        return null != e.id && (0, i.jsx)(ep, {
                            emojiId: e.id,
                            refreshPositionKey: this.refreshTooltipPositionKey,
                            onClose: this.handleLeave,
                            nonce: this.nonce
                        })
                    }, this.renderTooltip = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: n,
                            remainingBurstCurrency: a,
                            me_burst: s,
                            colors: l,
                            isBurstReaction: r = !1,
                            burstReactionsEnabled: u = !1,
                            hasUnlimitedBurstReactions: c = !1
                        } = this.props, {
                            tooltipText: d
                        } = this.state, m = n => {
                            let i = D.default.getChannel(t.getChannelId());
                            if (null == i) return;
                            this.handleLeave();
                            let a = r ? Z.ReactionTypes.BURST : Z.ReactionTypes.NORMAL;
                            ef(i, t, {
                                emoji: e,
                                reactionType: a
                            })
                        }, E = "string" == typeof d ? "" === d.trim() : null == d, h = () => E || null == d ? null : (0, i.jsx)(T.Text, {
                            variant: "text-sm/normal",
                            className: ed.reactionTooltipText,
                            "aria-label": d,
                            children: d
                        });
                        if (n === Z.ReactionTypes.BURST) {
                            let t = w.default.getCurrentUser(),
                                n = (0, P.useTooltipReplenishmentMessage)(),
                                r = c ? (0, J.isPremium)(t) : null != a && a > 0;
                            return (0, i.jsxs)(f.Dialog, {
                                className: ed.reactionTooltip,
                                onMouseEnter: this.handleEnterTooltip,
                                onMouseLeave: this.handleLeave,
                                children: [(0, i.jsxs)(T.Clickable, {
                                    className: ed.burstReactionTooltipInner,
                                    onClick: m,
                                    children: [(0, i.jsxs)("div", {
                                        className: o(ed.burstReactionTooltipMessage, {
                                            [ed.burstReactionTooltipSpacer]: u
                                        }),
                                        children: [(0, i.jsx)(R.default, {
                                            className: ed.reactionTooltipEmoji,
                                            emojiId: e.id,
                                            emojiName: e.name,
                                            animated: e.animated,
                                            size: this.props.emojiSize
                                        }), h()]
                                    }), u && (0, i.jsxs)("div", {
                                        className: ed.burstReactionTooltipPrompt,
                                        children: [(0, J.isPremium)(t) && (0, i.jsx)(z.default, {
                                            className: ed.burstReactionTooltipNitroIcon,
                                            color: H.GradientCssUrls.PREMIUM_TIER_2
                                        }), r ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)(T.Text, {
                                                variant: "text-sm/normal",
                                                className: ed.reactionTooltipText,
                                                "aria-label": "super reaction tooltip cta",
                                                children: s ? el.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED : el.default.Messages.SUPER_REACTION_TOOLTIP_CTA
                                            }), !c && (0, i.jsx)(V.default, {
                                                className: ed.burstAnimatedCounter,
                                                value: null != a ? a : 0,
                                                animationSpeed: 600,
                                                animationColor: null == l ? void 0 : l.accentColor,
                                                formatString: e => el.default.Messages.BURST_REACTION_TOOLTIP_CTA_LEFT.format({
                                                    n: e.toString()
                                                })
                                            })]
                                        }) : (0, i.jsx)(i.Fragment, {
                                            children: (0, J.isPremium)(t) ? (0, i.jsx)(T.Text, {
                                                variant: "text-sm/normal",
                                                "aria-label": "super reaction tooltip replenishment message",
                                                children: n
                                            }) : (0, i.jsx)(i.Fragment, {
                                                children: !this.isKeyboardNavigation && (0, i.jsxs)("div", {
                                                    children: [(0, i.jsx)(T.Text, {
                                                        variant: "text-sm/normal",
                                                        "aria-label": "super reaction tooltip upsell",
                                                        children: el.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                                    }), (0, i.jsx)(x.default, {
                                                        subscriptionTier: eo.PremiumSubscriptionSKUs.TIER_2,
                                                        buttonText: el.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                                        className: ed.burstReactionTooltipUpsellCta,
                                                        onClick: e => e.stopPropagation()
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                }), this.renderEmojiDetails()]
                            })
                        }
                        return (0, i.jsxs)(f.Dialog, {
                            className: ed.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, i.jsx)(T.Clickable, {
                                onClick: m,
                                children: (0, i.jsxs)("div", {
                                    className: ed.reactionTooltipInner,
                                    children: [(0, i.jsx)(R.default, {
                                        className: ed.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), h()]
                                })
                            }), this.renderEmojiDetails()]
                        })
                    }, this.refreshTooltipPositionKey = () => {
                        this.setState({
                            tooltipPositionKey: String(Date.now())
                        })
                    }, this.handleShowVerificationGate = () => {
                        let {
                            message: e,
                            isPendingMember: t
                        } = this.props;
                        if (!t) return null;
                        let n = D.default.getChannel(e.getChannelId()),
                            i = B.default.getGuild(null == n ? void 0 : n.getGuildId());
                        null != i && (0, A.openMemberVerificationModal)(i.id)
                    }, this.handleSetReactionRef = e => {
                        this.setState({
                            reactionRef: e
                        })
                    }, this.handleDismissCoachmark = () => {
                        (0, W.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                    }, this.trackReactionTooltipViewed = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: n
                        } = this.props, i = w.default.getCurrentUser(), a = D.default.getChannel(t.getChannelId()), s = n === Z.ReactionTypes.BURST, o = (0, J.isPremium)(i), l = s ? eo.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : eo.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
                        if (s && !this.userCanBurstReact() && !o && (l = eo.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), _.default.trackWithMetadata(es.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                                type: l,
                                expression_id: e.id,
                                expression_name: e.name,
                                is_animated: e.animated,
                                is_custom: null != e.id,
                                nonce: this.nonce
                            }), s && null != a && !o && !this.userCanBurstReact()) Y.default.track(es.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: eo.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == a ? void 0 : a.getGuildId()) != null ? es.AnalyticsPages.GUILD_CHANNEL : es.AnalyticsPages.DM_CHANNEL,
                                section: (0, P.getBurstAnalyticsSection)(a),
                                object: es.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    }
                }
            }
            eR.defaultProps = {
                emojiSize: "jumbo"
            };
            let eE = a.memo(e => {
                    let {
                        type: t,
                        burst_colors: n,
                        message: a,
                        emoji: s
                    } = e, o = t === Z.ReactionTypes.BURST, {
                        enabled: l,
                        hasBurstShake: r,
                        hasBurstGlow: u,
                        hasSendAnimation: m,
                        hasUnlimited: f
                    } = (0, h.useBurstReactionsExperiment)(), T = (0, $.default)(o && null != n ? n : []), R = (0, c.useStateFromStores)([X.default], () => void 0 !== X.default.getEffectForEmojiId(a.getChannelId(), a.id, s)), E = (0, c.useStateFromStores)([p.default], () => p.default.useReducedMotion), _ = L.AnimateEmoji.useSetting(), g = (0, S.isDismissibleContentDismissed)(d.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), [C, I] = (0, c.useStateFromStoresArray)([q.default], () => [q.default.remainingBurstCurrency, q.default.emojiReactionToTargetForCoachmark]), N = w.default.getCurrentUser(), A = (0, J.isPremium)(N), O = (0, S.isDismissibleContentDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT), v = l && !(0, J.isNewUser)(N) && C > 0 && !O && null != I && s.id === I.id && s.name === I.name;
                    v && A && ((0, W.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT));
                    let M = (0, c.useStateFromStores)([X.default], () => X.default.getReactionPickerAnimation(a.id, s.name, s.id)),
                        j = o && (R || null != M && m);
                    return (0, i.jsx)(eR, {
                        ...e,
                        colors: T,
                        isBurstReaction: o,
                        hideEmoji: j,
                        remainingBurstCurrency: C,
                        userHasPremium: A,
                        burstReactionsEnabled: l,
                        reduceMotion: E,
                        animateEmoji: _,
                        hasDismissedRemoveModal: g,
                        shouldShowFreeUserSentCoachmark: v,
                        onRenderFreeUserSentPopout: () => (0, i.jsx)(y.default, {}),
                        hasBurstShake: r,
                        hasBurstGlow: u,
                        animationStartPosition: M,
                        hasBurstSendAnimation: m,
                        hasUnlimitedBurstReactions: f
                    })
                }),
                eh = e => {
                    var t;
                    let {
                        emojiId: n,
                        expressionSourceGuild: a,
                        hasJoinedExpressionSourceGuild: s,
                        onClose: o,
                        packCollectionData: l,
                        popoutData: r,
                        currentGuildId: u,
                        nonce: c
                    } = e;
                    (0, N.useTrackOpenPopout)({
                        emojiId: n,
                        currentGuildId: u,
                        popoutData: r,
                        emojiSourceGuildId: null == a ? void 0 : a.id,
                        nonce: c
                    });
                    let d = null !== (t = null == a ? void 0 : a.isDiscoverable()) && void 0 !== t && t,
                        m = l.collectEnabled;
                    return (0, i.jsx)(i.Fragment, {
                        children: null !== a && (d || m) ? null == a ? null : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: er.reactionEmojiDetailsUnfurlGuildDetails,
                                children: (0, i.jsx)(et.GuildDetails, {
                                    expressionSourceGuild: a,
                                    hasJoinedExpressionSourceGuild: s,
                                    isDisplayingJoinGuildButtonInPopout: r.type === Q.EmojiPopoutType.JOIN_GUILD
                                })
                            }), (0, i.jsx)(et.EmojiPopoutList, {
                                emojiId: n,
                                expressionSourceGuild: a,
                                hasJoinedEmojiSourceGuild: s,
                                onClose: o,
                                popoutData: r,
                                packCollectionData: l,
                                isDisplayingButtonInTopSection: !1,
                                nonce: c
                            })]
                        }) : (0, i.jsx)(T.Text, {
                            variant: "text-sm/normal",
                            "aria-label": r.type,
                            children: r.emojiDescription
                        })
                    })
                },
                ep = e => {
                    var t;
                    let {
                        emojiId: n,
                        refreshPositionKey: s,
                        onClose: l,
                        nonce: r
                    } = e, {
                        joinedEmojiSourceGuild: u
                    } = (0, c.useStateFromStoresObject)([C.default, B.default], () => {
                        let e = C.default.getCustomEmojiById(n);
                        return {
                            joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === I.EmojiTypes.GUILD ? B.default.getGuild(null == e ? void 0 : e.guildId) : void 0
                        }
                    }), [d, m] = a.useState(void 0), [f, R] = a.useState(!1), [E, h] = a.useState(!1), p = null != u, _ = (0, O.usePackCollectionData)({
                        expressionSourceGuild: d
                    }), S = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t, g = F.default.getGuildId(), N = null != g && (g === (null == d ? void 0 : d.id) || g === (null == u ? void 0 : u.id)), A = (0, Q.getEmojiPopoutData)({
                        isPremium: _.isPremium,
                        hasJoinedEmojiSourceGuild: p,
                        isDiscoverable: S,
                        packCollectionData: _,
                        emojiComesFromCurrentGuild: N,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1,
                        isRoleSubscriptionEmoji: !1,
                        shouldHideRoleSubscriptionCTA: !1
                    });
                    a.useEffect(() => {
                        if (!f) return;
                        let e = async () => {
                            s(), h(!0), m(await v.default.getGuildFromEmojiId(n)), h(!1), s()
                        };
                        e()
                    }, [n, f]);
                    let M = !_.viewAndUseEnabled || p;
                    if (M) return null;
                    let j = () => {
                            R(!f)
                        },
                        y = f && void 0 !== d;
                    return (0, i.jsxs)("div", {
                        children: [y ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: er.reactionEmojiDetailsDivider
                            }), null != A.emojiDescription && A.type !== Q.EmojiPopoutType.UNAVAILABLE && (0, i.jsx)(T.Text, {
                                variant: "text-sm/normal",
                                "aria-label": A.type,
                                children: A.emojiDescription
                            })]
                        }) : (() => {
                            let e = el.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                            return (0, i.jsxs)(T.Clickable, {
                                onClick: j,
                                className: er.reactionEmojiDetailsClickable,
                                children: [(0, i.jsx)(T.Text, {
                                    variant: "text-sm/normal",
                                    color: "none",
                                    "aria-label": e,
                                    children: e
                                }), (0, i.jsx)(K.default, {
                                    width: 16,
                                    height: 16,
                                    className: o(er.reactionEmojiDetailsArrow, {
                                        [er.reactionEmojiDetailsArrowCollapsed]: !f
                                    })
                                })]
                            })
                        })(), E ? (0, i.jsx)(en.PopoutLoadingAnimation, {
                            className: er.emojiDetailsLoader
                        }) : y && (0, i.jsx)(eh, {
                            emojiId: n,
                            expressionSourceGuild: d,
                            hasJoinedExpressionSourceGuild: p,
                            onClose: l,
                            popoutData: A,
                            packCollectionData: _,
                            currentGuildId: g,
                            nonce: r
                        })]
                    })
                }
        },
        512306: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BurstReactionSize: function() {
                    return a
                },
                default: function() {
                    return h
                }
            });
            var i, a, s = n("37983"),
                o = n("884691"),
                l = n("414456"),
                r = n.n(l),
                u = n("230265"),
                c = n.n(u),
                d = n("913144"),
                m = n("15935"),
                f = n("103475"),
                T = n("941723"),
                R = n("256346");
            (i = a || (a = {}))[i.NORMAL = 16] = "NORMAL", i[i.LARGE = 32] = "LARGE";
            let E = async e => {
                var t;
                let {
                    effect: n
                } = e, i = (0, f.getBurstAnimation)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : "", n.emoji.name), a = await (0, T.getResizedAnimation)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
                return a.assets[0].p = n.url, a
            };

            function h(e) {
                let {
                    className: t,
                    effect: n,
                    onComplete: i,
                    emojiSize: l = a.NORMAL
                } = e, u = o.useRef(null), f = l * T.ANIMATION_TO_EMOJI_RATIO, h = (f + l) / 2;
                return o.useEffect(() => {
                    let e;
                    if (null != n) return !async function() {
                        if (null != u.current) {
                            let t = await E({
                                effect: n
                            });
                            (e = c.loadAnimation({
                                container: u.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t
                            })).addEventListener("complete", () => {
                                null == i || i(), e.destroy()
                            }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === m.BurstReactionEffectSource.HOVER && d.default.dispatch({
                                type: "BURST_REACTION_ANIMATION_ADD",
                                channelId: n.channelId,
                                messageId: n.messageId,
                                emoji: n.emoji,
                                animation: e
                            })
                        }
                    }(), () => {
                        null != e && e.destroy()
                    }
                }, [i, n, l]), (0, s.jsx)("div", {
                    className: R.effectsWrapper,
                    children: (0, s.jsx)("div", {
                        className: r(R.effect, t),
                        style: {
                            transform: "translateY(".concat(h, "px)"),
                            height: f,
                            width: f
                        },
                        ref: u
                    })
                })
            }
        },
        81924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("446674"),
                o = n("913144"),
                l = n("225664"),
                r = n("206230"),
                u = n("166257"),
                c = n("845579"),
                d = n("15935"),
                m = n("103475"),
                f = n("512306"),
                T = n("941723"),
                R = n("981937"),
                E = n("205591"),
                h = a.memo(function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: h,
                        useChatFontScaling: p,
                        color: _,
                        count: S
                    } = e, {
                        hasPlayRandomAnimations: g
                    } = (0, l.useBurstReactionsExperiment)(null, !1), C = (0, s.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, n, h)), I = p ? E : R, N = a.useMemo(() => (0, T.buildEffect)(h, _, t, {
                        key: C,
                        messageId: n
                    }), [_, C, h, t, n]), [A, O] = a.useState(!1), v = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), M = c.AnimateEmoji.useSetting(), j = a.useCallback(() => {
                        o.default.dispatch({
                            type: "BURST_REACTION_EFFECT_CLEAR",
                            channelId: t,
                            messageId: n,
                            emoji: h
                        })
                    }, [h, t, n]);
                    return (a.useEffect(() => {
                        let e = () => {
                            if (A) return;
                            let e = (0, m.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(n).concat(h.name)),
                                i = e % 10;
                            (i += S > 4 ? 4 : S - 1) > 7 && (O(!0), (0, u.playBurstReaction)({
                                channelId: t,
                                messageId: n,
                                emoji: h,
                                key: d.BurstReactionEffectSource.RANDOM
                            }))
                        };
                        if (A || !g || v && !M || !M) return;
                        e();
                        let i = setInterval(e, 5e3);
                        return () => {
                            clearInterval(i)
                        }
                    }, [M, t, S, h, h.name, g, A, n, v]), null == C) ? null : (0, i.jsx)(f.default, {
                        className: I.effect,
                        effect: N,
                        onComplete: j
                    })
                })
        },
        941723: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ANIMATION_TO_EMOJI_RATIO: function() {
                    return u
                },
                getResizedAnimation: function() {
                    return c
                },
                buildEffect: function() {
                    return d
                }
            });
            var i = n("917351"),
                a = n("748820"),
                s = n("407063"),
                o = n("397485"),
                l = n("284679"),
                r = n("103475");
            let u = 7.5,
                c = (0, i.memoize)((e, t, n, i) => new Promise(e => {
                    let a = new Image;
                    a.src = t, a.crossOrigin = "Anonymous", a.onload = () => {
                        let t = 32 * (0, s.getDevicePixelRatio)(),
                            o = JSON.stringify(n);
                        if (null != i && (o = (0, r.replaceAnimationColors)(o, (0, l.hexToRgb)(i))), a.width === t && a.height === t || 0 === a.width && 0 === a.height) e(JSON.parse(o));
                        else {
                            let t = 128 / a.width * a.height;
                            e(JSON.parse(o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
                        }
                    }
                }));

            function d(e, t, n, i) {
                let {
                    emojiSize: s,
                    key: l,
                    messageId: r
                } = null != i ? i : {}, u = (0, o.getEffectUrl)(e, null != s ? 2 * s : void 0);
                return {
                    channelId: n,
                    messageId: r,
                    emoji: e,
                    animationId: (0, a.v4)(),
                    url: u,
                    key: l,
                    color: t
                }
            }
        },
        232259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUsernameHook: function() {
                    return c
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                o = n("506885"),
                l = n("981601"),
                r = n("42203"),
                u = n("441823");

            function c(e, t, n) {
                var c, d;
                let m = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    f = arguments.length > 4 ? arguments[4] : void 0;
                let T = (c = e, d = t, a.useCallback(e => {
                    let t = r.default.getChannel(d);
                    null != t && null != c && (0, u.openUserContextMenu)(e, c, t)
                }, [c, d]));
                return a.useCallback(r => (u, c) => {
                    let d = (e, t) => (0, a.createElement)(s.NameWithRoleAnchor, {
                            ...null != e ? e : {},
                            key: t,
                            onContextMenu: T,
                            name: u,
                            color: null == r ? void 0 : r.colorString,
                            roleName: null == r ? void 0 : r.colorRoleName,
                            "aria-label": f
                        }),
                        R = e => t => {
                            m && t.stopPropagation(), e(t)
                        };
                    return null != e ? (0, i.jsx)(s.Popout, {
                        position: "right",
                        preload: () => (0, o.default)(e.id, e.getAvatarURL(n, 80), {
                            guildId: n,
                            channelId: t
                        }),
                        renderPopout: a => (0, i.jsx)(l.default, {
                            ...a,
                            userId: e.id,
                            guildId: n,
                            channelId: t
                        }),
                        children: e => {
                            let {
                                onClick: t,
                                ...n
                            } = e;
                            return d({
                                onClick: R(t),
                                ...n
                            })
                        }
                    }, c) : d(void 0, c)
                }, [e, t, n, T, m, f])
            }
        },
        785621: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("917351"),
                o = n("65597"),
                l = n("880731"),
                r = n("232268"),
                u = n("759432"),
                c = n("798592"),
                d = n("39141");

            function m(e) {
                let {
                    reactionRef: t,
                    count: n
                } = e, i = a.useRef(n), r = (0, o.default)([l.default], () => l.default.getState()), d = (0, c.default)(), m = (0, u.default)(t);
                return a.useEffect(() => {
                    if (n > i.current && null != m) {
                        let e = (0, s.clamp)(n, r.confettiCount / 2, 2 * r.confettiCount);
                        d.fire(m.x, m.y, {
                            count: e
                        })
                    }
                    i.current = n
                }, [n, m, d, r.confettiCount]), null
            }

            function f(e) {
                return (0, i.jsx)(r.default, {
                    confettiLocation: d.ConfettiLocation.REACTION,
                    children: (0, i.jsx)(m, {
                        ...e
                    })
                })
            }
        },
        638971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                o = n("151426"),
                l = n("77078"),
                r = n("685665"),
                u = n("10641"),
                c = n("590527"),
                d = n("649844"),
                m = n("626301"),
                f = n("646718"),
                T = n("49111"),
                R = n("782340"),
                E = n("825746"),
                h = n("54338"),
                p = () => {
                    let {
                        analyticsLocations: e
                    } = (0, r.default)();
                    return (0, i.jsx)(l.Dialog, {
                        children: (0, i.jsxs)("div", {
                            className: E.burstReactionTooltipCoachmark,
                            children: [(0, i.jsx)("img", {
                                src: h,
                                alt: ""
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/bold",
                                children: R.default.Messages.SUPER_REACTIONS_CONGRATS_HEADER
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: R.default.Messages.SUPER_REACTIONS_CONGRATS_DESCRIPTION.format({
                                    onClick: () => {
                                        (0, m.navigateToPremiumMarketingPage)(), (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(o.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    }
                                })
                            }), (0, i.jsxs)("span", {
                                className: E.burstReactionTooltipCoachmarkButtons,
                                children: [(0, i.jsx)(l.Button, {
                                    className: s(E.burstReactionTooltipCoachmarkButton, E.burstReactionTooltipCoachmarkDismiss),
                                    color: l.Button.Colors.CUSTOM,
                                    look: l.Button.Looks.BLANK,
                                    onClick: () => {
                                        (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(o.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    },
                                    children: R.default.Messages.DISMISS
                                }), (0, i.jsx)(l.Button, {
                                    autoFocus: !0,
                                    className: s(E.burstReactionTooltipCoachmarkButton, E.burstReactionTooltipCoachmarkCTA),
                                    color: l.Button.Colors.CUSTOM,
                                    look: l.Button.Looks.FILLED,
                                    onClick: () => {
                                        let t = {
                                            page: T.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS
                                        };
                                        (0, d.default)({
                                            initialPlanId: null,
                                            subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                                            analyticsObject: t,
                                            analyticsLocations: e
                                        }), (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(o.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    },
                                    children: R.default.Messages.PREMIUM_UPSELL_GET_NITRO
                                })]
                            })]
                        })
                    })
                }
        },
        85589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                },
                openBurstReactionsUpsellModal: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("79112"),
                o = n("225664"),
                l = n("154889"),
                r = n("917247"),
                u = n("789946"),
                c = n("646718"),
                d = n("49111"),
                m = n("782340"),
                f = n("61791"),
                T = n("277064");

            function R(e) {
                var t, n;
                let {
                    onClose: a,
                    analyticsSource: R,
                    ...E
                } = e, {
                    hasUnlimited: h
                } = (0, o.useBurstReactionsExperiment)(null, !1), p = h ? m.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY : m.default.Messages.SUPER_REACTIONS_UPSELL_BODY_LAUNCH, _ = p.format({
                    onClick: () => {
                        s.default.open(d.UserSettingsSections.PREMIUM), a()
                    }
                }), S = (0, r.usePremiumTrialOffer)(), g = (0, l.usePremiumDiscountOffer)();
                return (0, i.jsx)(u.default, {
                    artURL: T,
                    artContainerClassName: f.artContainer,
                    modalClassName: f.modalContainer,
                    bodyClassName: f.bodyContainer,
                    type: c.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    title: m.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
                    body: _,
                    glowUp: _,
                    analyticsSource: R,
                    analyticsLocation: {
                        page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
                        object: d.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: a,
                    subscribeButtonText: null != S || null != g ? void 0 : m.default.Messages.PREMIUM_SETTINGS_GET,
                    subscriptionTier: null !== (n = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : c.PremiumSubscriptionSKUs.TIER_2,
                    backButtonText: m.default.Messages.NO_THANKS,
                    ...E
                })
            }

            function E(e) {
                let {
                    analytics: t
                } = e;
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("85589").then(n.bind(n, "85589"));
                    return n => (0, i.jsx)(e, {
                        analyticsSource: t,
                        ...n
                    })
                })
            }
        },
        166257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ReactionLocations: function() {
                    return a
                },
                getReactors: function() {
                    return v
                },
                addReaction: function() {
                    return M
                },
                playBurstReaction: function() {
                    return j
                },
                removeAllReactions: function() {
                    return y
                },
                removeEmojiReactions: function() {
                    return x
                },
                removeReaction: function() {
                    return U
                },
                removeReactionWithConfirmation: function() {
                    return P
                },
                setGuildBurstPreview: function() {
                    return L
                },
                clearGuildBurstPreview: function() {
                    return D
                }
            });
            var i, a, s = n("872717"),
                o = n("151426"),
                l = n("819855"),
                r = n("913144"),
                u = n("404118"),
                c = n("225664"),
                d = n("10641"),
                m = n("590527"),
                f = n("692171"),
                T = n("875978"),
                R = n("263024"),
                E = n("271938"),
                h = n("377253"),
                p = n("659500"),
                _ = n("402671"),
                S = n("61069"),
                g = n("502575"),
                C = n("49111"),
                I = n("782340");

            function N(e, t, n) {
                let {
                    status: i,
                    body: a
                } = e;
                if (429 === i) return setTimeout(t, 1e3 * e.body.retry_after), !1;
                if (403 === i) switch (a && a.code) {
                    case C.AbortCodes.TOO_MANY_REACTIONS:
                        u.default.show({
                            title: I.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                            body: I.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                            confirmText: I.default.Messages.OKAY
                        });
                        break;
                    case C.AbortCodes.REACTION_BLOCKED:
                        p.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        })
                } else if (!n.isRetry) return t(), !1;
                return !0
            }

            function A(e, t, n, i, a) {
                var s, o, l;
                r.default.dispatch({
                    type: e,
                    channelId: t,
                    messageId: n,
                    userId: null !== (s = null == a ? void 0 : a.userId) && void 0 !== s ? s : E.default.getId(),
                    emoji: i,
                    optimistic: !0,
                    burst: null !== (o = null == a ? void 0 : a.burst) && void 0 !== o && o,
                    colors: null !== (l = null == a ? void 0 : a.colors) && void 0 !== l ? l : []
                })
            }

            function O(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    userId: a,
                    useTypeEndpoint: s = !1,
                    type: o = T.ReactionTypes.NORMAL
                } = e, l = null != i.id ? "".concat(i.name, ":").concat(i.id) : i.name;
                return null == a ? C.Endpoints.REACTIONS(t, n, l) : s ? C.Endpoints.REACTION_WITH_TYPE(t, n, l, a, o) : C.Endpoints.REACTION(t, n, l, a)
            }
            async function v(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    limit: a,
                    after: o,
                    type: l
                } = e, u = await s.default.get({
                    url: O({
                        channelId: t,
                        messageId: n,
                        emoji: i
                    }),
                    query: {
                        limit: a,
                        after: o,
                        type: l
                    },
                    oldFormErrors: !0
                });
                return r.default.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: t,
                    messageId: n,
                    users: u.body,
                    emoji: i,
                    reactionType: l
                }), u.body
            }
            async function M(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.MESSAGE,
                    o = arguments.length > 4 ? arguments[4] : void 0,
                    r = null != o && !!o.burst,
                    d = null != o && !!o.isRetry,
                    {
                        hasUnlimited: E
                    } = c.BurstReactionsUserExperiment.getCurrentConfig({
                        location: "ReactionActionCreators.addReaction"
                    }, {
                        autoTrackExposure: !1
                    });
                if (r && !f.default.hasAvailableBurstCurrency && !E) return;
                if (!d && function(e, t, n, i) {
                        let a = h.default.getMessage(e, t);
                        return null != a && a.userHasReactedWithEmoji(n, i)
                    }(e, t, n, r)) {
                    u.default.show({
                        title: I.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                        body: I.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                        confirmText: I.default.Messages.GOT_IT
                    });
                    return
                }
                let p = await b(n, r);
                A("MESSAGE_REACTION_ADD", e, t, n, {
                    burst: r,
                    colors: p
                }), await R.default.unarchiveThreadIfNecessary(e), s.default.put({
                    url: O({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: "@me"
                    }),
                    query: {
                        location: i,
                        type: r ? T.ReactionTypes.BURST : T.ReactionTypes.NORMAL
                    },
                    oldFormErrors: !0
                }).then(() => {
                    let i = f.default.remainingBurstCurrency;
                    r ? (l.AccessibilityAnnouncer.announce(E ? I.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                        name: n.name
                    }) : I.default.Messages.BURST_REACTION_ADD_SUCCESS_A11Y.format({
                        name: n.name,
                        n: i
                    })), S.default.triggerFullscreenAnimation({
                        channelId: e,
                        messageId: t,
                        emoji: {
                            ...n,
                            animated: !1
                        }
                    }), i > 0 && (0, m.toggleFreeUserSentPopout)({
                        animated: !1,
                        ...n
                    })) : l.AccessibilityAnnouncer.announce(I.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(a => {
                    N(a, () => M(e, t, n, i, {
                        burst: r,
                        isRetry: !0
                    }), {
                        isRetry: d
                    }) && (A("MESSAGE_REACTION_REMOVE", e, t, n, {
                        burst: r
                    }), r ? l.AccessibilityAnnouncer.announce(E ? I.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                        name: n.name
                    }) : I.default.Messages.BURST_REACTION_ADD_ERROR_A11Y.format({
                        name: n.name,
                        n: f.default.remainingBurstCurrency
                    })) : l.AccessibilityAnnouncer.announce(I.default.Messages.REACTION_ADD_ERROR_A11Y.format({
                        name: n.name
                    })))
                })
            }

            function j(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    key: a
                } = e;
                r.default.dispatch({
                    type: "BURST_REACTION_EFFECT_PLAY",
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    key: a
                })
            }
            async function y(e, t, n) {
                let i = null != n && !!n.isRetry;
                await R.default.unarchiveThreadIfNecessary(e), s.default.delete({
                    url: C.Endpoints.REMOVE_REACTIONS(e, t),
                    oldFormErrors: !0
                }).catch(n => {
                    N(n, () => y(e, t, {
                        isRetry: !0
                    }), {
                        isRetry: i
                    })
                })
            }
            async function x(e, t, n, i) {
                let a = null != i && !!i.isRetry;
                await R.default.unarchiveThreadIfNecessary(e);
                let o = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
                s.default.delete({
                    url: C.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, o),
                    oldFormErrors: !0
                }).catch(i => {
                    N(i, () => x(e, t, n, {
                        isRetry: !0
                    }), {
                        isRetry: a
                    })
                })
            }
            async function U(e, t, n, i) {
                let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.MESSAGE,
                    r = arguments.length > 5 ? arguments[5] : void 0,
                    u = null != r && !!r.burst,
                    c = null != r && !!r.isRetry;
                A("MESSAGE_REACTION_REMOVE", e, t, n, {
                    userId: i,
                    burst: u
                }), await R.default.unarchiveThreadIfNecessary(e), s.default.delete({
                    url: O({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: null != i ? i : "@me",
                        type: u ? T.ReactionTypes.BURST : T.ReactionTypes.NORMAL,
                        useTypeEndpoint: !0
                    }),
                    query: {
                        location: o,
                        burst: u
                    },
                    oldFormErrors: !0
                }).then(() => {
                    (null == r ? void 0 : r.burst) ? l.AccessibilityAnnouncer.announce(I.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    })): l.AccessibilityAnnouncer.announce(I.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(async a => {
                    if (N(a, () => U(e, t, n, i, o, {
                            burst: u,
                            isRetry: !0
                        }), {
                            isRetry: c
                        })) {
                        let a = await b(n, u);
                        A("MESSAGE_REACTION_ADD", e, t, n, {
                            userId: i,
                            burst: u,
                            colors: a
                        }), (null == r ? void 0 : r.burst) ? l.AccessibilityAnnouncer.announce(I.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        })) : l.AccessibilityAnnouncer.announce(I.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        }))
                    }
                })
            }
            async function b(e, t) {
                let n = [];
                if (t) try {
                    n = await (0, _.getEmojiColors)(e)
                } catch {}
                return n
            }(i = a || (a = {})).MESSAGE = "Message", i.FORUM_TOOLBAR = "Forum Toolbar", i.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";

            function P(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    reactionType: a,
                    userId: s,
                    location: l,
                    isMe: r = !0
                } = e, u = a === T.ReactionTypes.BURST, m = () => {
                    U(t, n, i, s, l, {
                        burst: u
                    })
                }, f = (0, d.isDismissibleContentDismissed)(o.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), {
                    hasUnlimited: R
                } = c.BurstReactionsUserExperiment.getCurrentConfig({
                    location: "removeReactionWithConfirmation"
                }, {
                    autoTrackExposure: !1
                });
                u && r && !f && !R ? (0, g.default)(m) : m()
            }

            function L(e, t, n, i) {
                r.default.dispatch({
                    type: "BURST_GUILD_PREVIEW_SET",
                    guildId: e,
                    channelId: t,
                    messageId: n,
                    emoji: {
                        ...i,
                        animated: !1
                    }
                })
            }

            function D(e) {
                r.default.dispatch({
                    type: "BURST_GUILD_PREVIEW_CLEAR",
                    guildId: e
                })
            }
        },
        502575: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078");

            function s(e) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("230670").then(n.bind(n, "230670"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        onConfirm: e
                    })
                })
            }
        },
        486996: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("446674"),
                a = n("913144"),
                s = n("267567"),
                o = n("875978"),
                l = n("166257"),
                r = n("766274"),
                u = n("42203"),
                c = n("697218");
            let d = {};
            class m {
                static ensure(e, t, n) {
                    var i, a;
                    let s = "".concat(e, ":").concat(t.name, ":").concat(null !== (i = t.id) && void 0 !== i ? i : "", ":").concat(n);
                    return d[s] = null !== (a = d[s]) && void 0 !== a ? a : new m
                }
                constructor() {
                    this.fetched = !1, this.users = {}
                }
            }

            function f(e) {
                let {
                    type: t,
                    messageId: n,
                    userId: i,
                    emoji: a,
                    burst: s
                } = e, l = s ? o.ReactionTypes.BURST : o.ReactionTypes.NORMAL, r = m.ensure(n, a, l);
                if ("MESSAGE_REACTION_ADD" === t) {
                    let e = c.default.getUser(i);
                    null != e && (r.users[i] = e)
                } else delete r.users[i]
            }
            class T extends i.default.Store {
                getReactions(e, t, n, i, a) {
                    let o = m.ensure(t, n, a);
                    if (!o.fetched) {
                        let r = u.default.getChannel(e),
                            c = null != r ? r.getGuildId() : null;
                        if (null != c && s.default.isLurking(c)) return;
                        l.getReactors({
                            channelId: e,
                            messageId: t,
                            emoji: n,
                            limit: i,
                            type: a
                        }), o.fetched = !0
                    }
                    return o.users
                }
            }
            T.displayName = "MessageReactionsStore";
            var R = new T(a.default, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                MESSAGE_REACTION_ADD: f,
                MESSAGE_REACTION_REMOVE: f,
                MESSAGE_REACTION_ADD_USERS: function(e) {
                    let {
                        messageId: t,
                        users: n,
                        emoji: i,
                        reactionType: a
                    } = e, s = m.ensure(t, i, a);
                    n.forEach(e => s.users[e.id] = new r.default(e))
                }
            })
        }
    }
]);