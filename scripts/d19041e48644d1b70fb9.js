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
                l = n.n(s),
                o = n("627445"),
                r = n.n(o),
                u = n("917351"),
                c = n.n(u),
                d = n("509043"),
                m = n("446674"),
                f = n("819855"),
                h = n("77078"),
                T = n("430568"),
                R = n("145079"),
                E = n("87657"),
                p = n("225664"),
                _ = n("206230"),
                S = n("867805"),
                g = n("430475"),
                I = n("390236"),
                C = n("185014"),
                A = n("875978"),
                O = n("463617"),
                N = n("512306"),
                v = n("941723"),
                M = n("166257"),
                j = n("432173"),
                y = n("300322"),
                x = n("161778"),
                U = n("42203"),
                b = n("26989"),
                L = n("486996"),
                P = n("377253"),
                B = n("957255"),
                D = n("27618"),
                k = n("697218"),
                V = n("145131"),
                F = n("945330"),
                w = n("315102"),
                G = n("402671"),
                H = n("387111"),
                W = n("441823"),
                K = n("49111"),
                z = n("782340"),
                Y = n("324673"),
                J = n("926622");

            function X(e) {
                return null == e.id ? S.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }
            let q = e => {
                let {
                    emoji: t,
                    channelId: n,
                    messageId: s
                } = e, [o, r] = a.useState(!0), [u, c] = a.useState([]), d = a.useMemo(() => {
                    if (null == u || u.length < 1) return;
                    let e = (0, v.buildEffect)(t, u[0], n, {
                        emojiSize: N.BurstReactionSize.LARGE,
                        messageId: s
                    });
                    return (0, i.jsx)(N.default, {
                        className: Y.effect,
                        effect: e,
                        emojiSize: N.BurstReactionSize.LARGE,
                        onComplete: () => r(!1)
                    })
                }, [u, t, n, s]);
                return a.useEffect(() => {
                    let e = !1;
                    return r(!0), !async function() {
                        let n = await (0, G.getEmojiColors)(t);
                        Array.isArray(n) && n.length > 0 && !e && c(n)
                    }(), () => {
                        e = !0
                    }
                }, [t]), (0, i.jsxs)("div", {
                    className: Y.burstEmojiSection,
                    children: [d, (0, i.jsx)(T.default, {
                        className: l(Y.burstEmoji, {
                            [Y.hideEmoji]: o
                        }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction"
                    }), (0, i.jsx)(h.Text, {
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
                        colors: o
                    } = this.props, r = X(e), u = function(e, t, n, a) {
                        let s = null == e.id ? G.default.getURL(e.name) : w.default.getEmojiURL({
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
                    }(e, 24, Y.emoji, l(Y.emoji, Y.emojiText)), c = s === A.ReactionTypes.BURST, m = c ? z.default.Messages.BURST_REACTION_REACTORS_A11Y : z.default.Messages.REACTION_REACTORS_A11Y, f = m.format({
                        name: r,
                        n: t
                    }), T = {}, R = {};
                    if (c) {
                        let {
                            backgroundColor: e = "",
                            opacity: t = 1,
                            accentColor: i = ""
                        } = null != o ? o : {};
                        if (R.color = i, n) {
                            var E;
                            T.background = null !== (E = (0, d.hex2rgb)(e, t)) && void 0 !== E ? E : ""
                        }
                    }
                    return (0, i.jsx)(h.Tooltip, {
                        position: "left",
                        text: r,
                        children: o => {
                            let {
                                onMouseEnter: r,
                                onMouseLeave: c
                            } = o;
                            return (0, i.jsxs)(h.Clickable, {
                                className: l({
                                    [Y.reactionDefault]: !n,
                                    [Y.reactionSelected]: n
                                }),
                                "aria-label": f,
                                onClick: () => a({
                                    emoji: e,
                                    reactionType: s
                                }),
                                onMouseEnter: r,
                                onMouseLeave: c,
                                style: T,
                                children: [u, (0, i.jsx)(h.Text, {
                                    variant: "text-sm/bold",
                                    style: R,
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
                    guildId: l,
                    reactionType: o,
                    onRemoveReactor: u
                } = e, c = k.default.getCurrentUser(), d = (0, m.useStateFromStores)([k.default], () => k.default.getUser(n.id), [n]);
                r(null != c, "Reactor: currentUser cannot be undefined");
                let f = (0, y.useIsActiveChannelOrUnarchivableThread)(s),
                    T = (0, m.useStateFromStores)([B.default], () => B.default.can(K.Permissions.MANAGE_MESSAGES, s) && f),
                    p = T || c.id === n.id,
                    _ = (0, m.useStateFromStores)([b.default, U.default, D.default], () => H.default.getName(l, s.id, n));
                return (0, i.jsxs)(V.default, {
                    className: Y.reactorDefault,
                    onContextMenu: e => (0, W.openUserContextMenu)(e, n, s),
                    align: V.default.Align.CENTER,
                    children: [(0, i.jsx)(V.default.Child, {
                        wrap: !0,
                        grow: 0,
                        shrink: 0,
                        className: J.marginReset,
                        children: (0, i.jsx)(E.default, {
                            user: null != d ? d : n,
                            size: h.AvatarSizes.SIZE_24
                        })
                    }), (0, i.jsx)(V.default.Child, {
                        children: (0, i.jsxs)(h.Text, {
                            tag: "strong",
                            variant: "text-md/normal",
                            className: Y.name,
                            children: [null != _ && "" !== _ && (0, i.jsx)("span", {
                                className: n.isPomelo() ? "" : Y.nickname,
                                children: _
                            }), (0, i.jsx)(R.default, {
                                user: n,
                                className: null != _ && "" !== _ ? Y.tagFaded : null,
                                usernameClass: Y.username,
                                discriminatorClass: Y.discriminator,
                                forceUsername: !0
                            })]
                        })
                    }), p && (0, i.jsx)(h.Clickable, {
                        onClick: function() {
                            M.removeReactionWithConfirmation({
                                emoji: t,
                                userId: n.id,
                                channelId: s.id,
                                messageId: a.id,
                                reactionType: o,
                                isMe: (null == c ? void 0 : c.id) === n.id
                            }), null == u || u()
                        },
                        children: (0, i.jsx)(F.default, {
                            width: 16,
                            height: 16,
                            className: Y.remove
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
                        limit: K.DEFAULT_NUM_REACTION_USERS,
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
                    } = this.props, l = [];
                    return 0 === t.length && this.state.loadingMore ? l.push(length) : (l.push(t.length), e && l.push(1)), (0, i.jsxs)("div", {
                        className: Y.reactorsContainer,
                        children: [s === A.ReactionTypes.BURST && (0, i.jsx)(q, {
                            emoji: n.emoji,
                            channelId: a.getChannelId(),
                            messageId: a.id
                        }), (0, i.jsx)(h.List, {
                            className: Y.reactors,
                            fade: !0,
                            ref: this.scrollerRef,
                            sections: l,
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
                            channel: l,
                            reaction: o,
                            reactors: r,
                            reactionType: u
                        } = this.props, c = r[n];
                        if (1 === t) return 0 === n ? (0, i.jsx)(h.Spinner, {
                            className: Y.spinnerMore
                        }, "hasMore") : null;
                        return 0 === r.length && this.state.loadingMore ? (0, i.jsx)(h.Spinner, {
                            className: Y.spinner
                        }, "loadingMore") : null != c && (0, i.jsx)(Q, {
                            message: a,
                            emoji: o.emoji,
                            guildId: s,
                            channel: l,
                            user: c,
                            reaction: o,
                            reactionType: u
                        }, c.id)
                    }
                }
            }
            let ee = m.default.connectStores([L.default], e => {
                let {
                    message: t,
                    reaction: n,
                    reactionType: i
                } = e, a = L.default.getReactions(t.getChannelId(), t.id, n.emoji, K.DEFAULT_NUM_REACTION_USERS, i);
                if (null == a) return {
                    reactors: [],
                    hasMore: !1
                };
                let s = Object.values(a),
                    l = i === A.ReactionTypes.BURST ? n.burst_count : n.count,
                    o = l > s.length;
                return {
                    reactors: s,
                    hasMore: o
                }
            })($);

            function et(e) {
                var t, n;
                let {
                    message: s,
                    selectedReaction: l,
                    onClose: o,
                    transitionState: r
                } = e, u = (0, m.useStateFromStores)([U.default], () => U.default.getChannel(s.getChannelId())), c = null == u ? void 0 : u.getGuildId(), d = (0, m.useStateFromStores)([P.default, g.default, C.default], () => {
                    var e, t, n;
                    let i = null !== (n = null !== (t = P.default.getMessage(s.getChannelId(), s.id)) && void 0 !== t ? t : null === (e = g.default.getMessage(s.id)) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== n ? n : null != c ? C.default.getCachedMessage(c, s.getChannelId(), s.id) : void 0;
                    return null != i ? i.reactions : []
                }, [s, c]), {
                    enabled: T
                } = (0, p.useBurstReactionsExperiment)(c);
                let R = (t = d, n = T, a.useMemo(() => {
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
                    E = R[0],
                    S = null != E ? {
                        emoji: E.emoji,
                        reactionType: E.burst_count > 0 ? A.ReactionTypes.BURST : A.ReactionTypes.NORMAL
                    } : null,
                    [N, v] = function(e, t, n) {
                        let [i, s] = a.useState(null != e ? e : t);
                        return a.useEffect(() => {
                            if (null != i) {
                                let e = n.find(e => {
                                    let t = e.burst_count > 0 ? A.ReactionTypes.BURST : A.ReactionTypes.NORMAL;
                                    return e.emoji === i.emoji && t === i.reactionType
                                });
                                null == e && s(t)
                            }
                        }, [i, s, n, t]), [i, s]
                    }(l, S, d),
                    M = a.useMemo(() => {
                        var e;
                        return null == N ? null : null !== (e = d.find(e => (0, j.emojiEquals)(e.emoji, N.emoji))) && void 0 !== e ? e : null
                    }, [d, N]),
                    y = (0, m.useStateFromStores)([_.default], () => _.default.saturation),
                    b = (0, m.useStateFromStores)([x.default], () => (0, f.isThemeDark)(x.default.theme));
                if (a.useEffect(() => {
                        (0 === d.length || null == N && null == M) && setImmediate(o)
                    }, [o, d.length, M, N]), null == N || null == M) return (0, i.jsx)(h.Spinner, {});
                if (null == u) throw Error("MessageReactions.render: Message does not have a channelId");
                return (0, i.jsx)(I.default.Provider, {
                    value: null != c ? c : void 0,
                    children: (0, i.jsxs)(h.ModalRoot, {
                        "aria-label": z.default.Messages.REACTIONS,
                        transitionState: r,
                        size: h.ModalSize.DYNAMIC,
                        className: Y.container,
                        children: [(0, i.jsx)(h.Scroller, {
                            className: Y.scroller,
                            fade: !0,
                            children: R.map(e => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, i.jsx)(Z, {
                                    isSelected: en(N, e, n ? A.ReactionTypes.BURST : A.ReactionTypes.NORMAL),
                                    setSelected: v,
                                    reactionType: n ? A.ReactionTypes.BURST : A.ReactionTypes.NORMAL,
                                    emoji: e.emoji,
                                    count: n ? e.burst_count : e.count,
                                    colors: null != e.burst_colors ? (0, O.buildBurstReactionColors)(e.burst_colors, y, b) : void 0
                                }, "".concat(n ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
                            })
                        }), (0, i.jsx)(ee, {
                            message: s,
                            reaction: M,
                            guildId: c,
                            channel: u,
                            reactionType: N.reactionType
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
                    return E
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("516555"),
                l = n("301165"),
                o = n("458960"),
                r = n("430568"),
                u = n("526887"),
                c = n("590527"),
                d = n("983782"),
                m = n("315102"),
                f = n("402671"),
                h = n("172858"),
                T = n("612683");
            let R = [];

            function E(e) {
                let {
                    messageId: t,
                    emoji: n,
                    startPosition: E,
                    targetPosition: p
                } = e, [_, S] = a.useState(0), [g, I] = a.useState(0), [C, A] = a.useState(null), {
                    confettiCanvas: O
                } = a.useContext(u.ConfettiCannonContext), N = (0, s.useConfettiCannon)(O, C), v = a.useMemo(() => {
                    let e = null == n.id ? f.default.getURL(n.name) : m.default.getEmojiURL({
                        id: n.id,
                        animated: !1,
                        size: 22
                    });
                    return [{
                        src: e,
                        colorize: !1
                    }]
                }, [n.name, n.id]), M = p.x - p.width / 2 * .5, j = p.y - p.height / 2 * .5, y = (0, l.useSpring)({
                    from: {
                        y: E.y
                    },
                    to: {
                        y: j
                    },
                    config: {
                        duration: 450,
                        easing: o.default.Easing.in(o.default.Easing.exp)
                    },
                    onChange: e => {
                        let {
                            y: t
                        } = e;
                        I(t)
                    }
                }), x = (0, l.useSpring)({
                    from: {
                        x: E.x,
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
                        easing: o.default.Easing.in(o.default.Easing.ease)
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
                    _ > 0 && g > 0 && N.createConfetti({
                        ...h.COMMON_CONFETTI_BASE_CONFIG,
                        position: {
                            type: "static",
                            value: {
                                x: _,
                                y: g
                            }
                        }
                    })
                }, [N, _, g]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.SpriteCanvas, {
                        ref: A,
                        sprites: v,
                        colors: R,
                        spriteWidth: h.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: h.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    }), (0, i.jsx)(d.default, {
                        children: (0, i.jsx)(l.animated.div, {
                            style: {
                                ...y
                            },
                            className: T.emojiContainer,
                            children: (0, i.jsx)(l.animated.div, {
                                style: {
                                    ...x,
                                    opacity: x.opacity
                                },
                                children: (0, i.jsx)(r.default, {
                                    className: T.emoji,
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
                    return R
                }
            });
            var i, a, s = n("37983"),
                l = n("884691"),
                o = n("446674"),
                r = n("77078"),
                u = n("851387"),
                c = n("476765"),
                d = n("449008"),
                m = n("267567"),
                f = n("49111"),
                h = n("782340"),
                T = n("404637");
            (i = a || (a = {}))[i.CHAT = 0] = "CHAT", i[i.REACTIONS = 1] = "REACTIONS";
            var R = e => {
                let {
                    type: t,
                    guild: i,
                    closePopout: R,
                    ctaRef: E
                } = e, p = (0, c.useUID)(), [_, S] = l.useState(!1), g = (0, o.useStateFromStores)([m.default], () => m.default.isLurking(i.id), [i.id]);
                l.useEffect(() => {
                    _ && !g && R()
                }, [_, g, R]);
                let I = null,
                    C = h.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
                switch (t) {
                    case a.CHAT:
                        I = h.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
                        break;
                    case a.REACTIONS:
                        I = h.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
                        break;
                    default:
                        return (0, d.assertNever)(t)
                }
                if (null == I) return null;
                let A = async () => {
                    S(!0);
                    try {
                        await u.default.joinGuild(i.id, {
                            source: f.JoinGuildSources.CHAT_INPUT_BLOCKER
                        }), R()
                    } catch {
                        S(!1)
                    }
                };
                return (0, s.jsxs)(r.Dialog, {
                    className: T.container,
                    "aria-labelledby": p,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        className: T.image,
                        src: n("748301")
                    }), (0, s.jsxs)("div", {
                        className: T.content,
                        children: [(0, s.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            id: p,
                            children: I
                        }), (0, s.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: C
                        }), (0, s.jsxs)("div", {
                            className: T.buttonContainer,
                            children: [(0, s.jsx)(r.Button, {
                                buttonRef: E,
                                onClick: A,
                                submitting: _,
                                children: h.default.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, s.jsx)(r.Button, {
                                onClick: R,
                                look: r.Button.Looks.BLANK,
                                className: T.cancel,
                                children: h.default.Messages.LURKER_MODE_POPOUT_CANCEL
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
                l = n("913144");
            (i = a || (a = {})).HOVER = "HOVER", i.EXTERNAL = "EXTERNAL", i.RANDOM = "RANDOM";
            let o = {},
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
                        l = s.filter(e => {
                            let [, t] = e;
                            return t === i
                        }),
                        o = Object.fromEntries(l);
                    if (Object.keys(o).length >= 5 && e === a.EXTERNAL) {
                        for (let e in o)
                            if (null == u[t] || null == u[t][e]) {
                                delete r[t][e], delete o[e];
                                break
                            }
                    }
                    return Object.keys(o).length
                };
            class m extends s.default.Store {
                getReactionPickerAnimation(e, t, n) {
                    return o["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
                }
                getEffectForEmojiId(e, t, n) {
                    var i;
                    let a = c(t, n);
                    return null === (i = r[e]) || void 0 === i ? void 0 : i[a]
                }
            }
            m.displayName = "BurstReactionEffectsStore";
            var f = new m(l.default, {
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
                        messageId: l,
                        emoji: o,
                        key: m
                    } = e, f = c(l, o);
                    if (d(m, s) >= 5) return;
                    let h = null !== (t = r[s]) && void 0 !== t ? t : {},
                        T = null !== (n = u[s]) && void 0 !== n ? n : {},
                        R = T[f],
                        E = h[f];
                    if (m !== a.HOVER || null == E) {
                        E === a.HOVER && m === a.EXTERNAL && null != R && ("function" == typeof R.destroy && R.destroy(), null === (i = u[s]) || void 0 === i || delete i[f], E = void 0);
                        null == E && (null != r[s] ? r[s][f] = m : r[s] = {
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
                    o["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")] = a
                },
                BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
                    let {
                        messageId: t,
                        emojiName: n,
                        emojiId: i
                    } = e;
                    delete o["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")]
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
                    isGuest: l,
                    communicationDisabled: o,
                    isActiveChannelOrUnarchivableThread: r
                } = e, u = t.isPrivate(), c = t.isSystemDM(), d = (n || u) && r;
                return {
                    disableReactionReads: !i,
                    disableReactionCreates: s || l || !d || !((!0 === a || u) && !c && r),
                    disableReactionUpdates: s || l || !d || !0 === o
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
                l = n("161778"),
                o = n("61069");

            function r(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.saturation),
                    n = (0, i.useStateFromStores)([l.default], () => (0, a.isThemeDark)(l.default.theme));
                return u(e, t, n)
            }

            function u(e, t, n) {
                var i;
                if (null == e || e.length < 1) return null;
                let a = o.default.buildEmojiReactionColorsPlatformed({
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
                    return h
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                l = n("432173"),
                o = n("599110"),
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
                    o.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: r.BurstAnalyticTypes.OUT_OF_BURSTS
                    })
                }, []);
                let f = (0, l.useNextReplenishmentMessage)();
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

            function h() {
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
                l = n("42203"),
                o = n("486996"),
                r = n("27618"),
                u = n("387111"),
                c = n("875978"),
                d = n("782340");

            function m(e, t) {
                var n;
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.ReactionTypes.NORMAL,
                    m = arguments.length > 3 ? arguments[3] : void 0,
                    f = o.default.getReactions(e.getChannelId(), e.id, t, 3, i),
                    h = l.default.getChannel(e.getChannelId()),
                    T = null == h || h.isPrivate() ? null : h.getGuildId(),
                    R = e.getReaction(t),
                    E = i === c.ReactionTypes.BURST,
                    p = a(f).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(T, null == h ? void 0 : h.id, e)).value();
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
                    S = E ? _.burst : _.standard,
                    g = null !== (n = E ? null == R ? void 0 : R.burst_count : null == R ? void 0 : R.count) && void 0 !== n ? n : 0,
                    I = Math.max(0, g - p.length),
                    C = (0, s.getReactionEmojiName)(t);
                if (1 === p.length) return I > 0 ? null != m ? S.reactionTooltip1NInteractive.format({
                    a: p[0],
                    n: I,
                    emojiName: C,
                    onClick: m
                }) : S.reactionTooltip1N.format({
                    a: p[0],
                    n: I,
                    emojiName: C
                }) : S.reactionTooltip1.format({
                    a: p[0],
                    emojiName: C
                });
                if (2 === p.length) return I > 0 ? null != m ? S.reactionTooltip2NInteractive.format({
                    a: p[0],
                    b: p[1],
                    n: I,
                    emojiName: C,
                    onClick: m
                }) : S.reactionTooltip2N.format({
                    a: p[0],
                    b: p[1],
                    n: I,
                    emojiName: C
                }) : S.reactionTooltip2.format({
                    a: p[0],
                    b: p[1],
                    emojiName: C
                });
                if (3 === p.length) return I > 0 ? null != m ? S.reactionTooltip3NInteractive.format({
                    a: p[0],
                    b: p[1],
                    c: p[2],
                    n: I,
                    emojiName: C,
                    onClick: m
                }) : S.reactionTooltip3N.format({
                    a: p[0],
                    b: p[1],
                    c: p[2],
                    n: I,
                    emojiName: C
                }) : S.reactionTooltip3.format({
                    a: p[0],
                    b: p[1],
                    c: p[2],
                    emojiName: C
                });
                else return null != m ? S.reactionTooltipNInteractive.format({
                    n: I,
                    emojiName: C,
                    onClick: m
                }) : S.reactionTooltipN.format({
                    n: I,
                    emojiName: C
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
                    return eh
                },
                Reaction: function() {
                    return eR
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                l = n.n(s),
                o = n("748820"),
                r = n("458960"),
                u = n("509043"),
                c = n("446674"),
                d = n("151426"),
                m = n("862337"),
                f = n("130969"),
                h = n("77078"),
                T = n("430568"),
                R = n("57155"),
                E = n("225664"),
                p = n("206230"),
                _ = n("716241"),
                S = n("10641"),
                g = n("58533"),
                I = n("385976"),
                C = n("858619"),
                A = n("865453"),
                O = n("233322"),
                N = n("529932"),
                v = n("446066"),
                M = n("13066"),
                j = n("785621"),
                y = n("638971"),
                x = n("635956"),
                U = n("85589"),
                b = n("166257"),
                L = n("432173"),
                P = n("845579"),
                B = n("42203"),
                D = n("305961"),
                k = n("486996"),
                V = n("162771"),
                F = n("697218"),
                w = n("471671"),
                G = n("738107"),
                H = n("791106"),
                W = n("256170"),
                K = n("216422"),
                z = n("599110"),
                Y = n("719923"),
                J = n("590527"),
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
                el = n("646718"),
                eo = n("782340"),
                er = n("154403"),
                eu = n("550244"),
                ec = n("314934"),
                ed = n("219468");
            let em = 9;

            function ef(e, t, n) {
                (0, h.openModal)(e => (0, i.jsx)(R.default, {
                    ...e,
                    message: t,
                    selectedReaction: n
                }))
            }

            function eh(e, t, n) {
                return n === Z.ReactionTypes.BURST && t || n === Z.ReactionTypes.NORMAL && e
            }
            class eT extends a.PureComponent {
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
                    w.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
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
                        colors: o,
                        isBurstReaction: c,
                        hideCount: d,
                        emoji: m,
                        readOnly: f,
                        isLurking: R,
                        isGuest: E,
                        isPendingMember: p,
                        className: _,
                        useChatFontScaling: S,
                        message: I,
                        hideEmoji: C,
                        shouldShowFreeUserSentCoachmark: A,
                        onRenderFreeUserSentPopout: O,
                        hasBurstShake: N,
                        hasBurstGlow: v,
                        animationStartPosition: M,
                        hasBurstSendAnimation: y
                    } = this.props, {
                        shouldShowTooltip: x,
                        tooltipTextAria: U,
                        reactionRef: b,
                        tooltipPositionKey: P
                    } = this.state, B = S ? ec : eu, D = {
                        transform: [{
                            scale: this.scale
                        }],
                        opacity: this.opacity
                    }, k = c ? s : a;
                    if (c && null != o) {
                        let {
                            accentColor: i,
                            backgroundColor: a,
                            opacity: s
                        } = o, l = null !== (e = (0, u.hex2rgb)(null != a ? a : "", s)) && void 0 !== e ? e : "";
                        this.isMe() && (D.borderColor = a), D.background = l, t = i, n = i
                    }
                    let V = null == b ? void 0 : b.getBoundingClientRect(),
                        F = null != M && null != V && y,
                        w = null == M || !y;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(h.Popout, {
                            shouldShow: x,
                            "aria-label": null != U && U,
                            renderPopout: this.renderTooltip,
                            nudgeAlignIntoViewport: !0,
                            position: "top",
                            align: "center",
                            positionKey: P,
                            children: () => (0, i.jsx)("div", {
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave,
                                ref: this.handleSetReactionRef,
                                children: (0, i.jsx)(r.default.div, {
                                    className: l(B.reaction, _, {
                                        [B.reactionMe]: this.isMe(),
                                        [B.reactionReadOnly]: f && !R && !p && !E,
                                        [B.shakeReaction]: C && N && null == M
                                    }),
                                    style: D,
                                    children: (0, i.jsx)(h.Popout, {
                                        renderPopout: this.renderLurkerModeUpsellPopout,
                                        position: "top",
                                        children: e => (0, i.jsxs)(h.Clickable, {
                                            ...e,
                                            className: B.reactionInner,
                                            onClick: this.handleClick,
                                            "aria-disabled": f,
                                            "aria-label": (0, L.getAccessibleEmojiDisplayName)(this.isMe(), k, m, c),
                                            "aria-pressed": this.isMe(),
                                            children: [(0, i.jsx)("div", {
                                                className: l({
                                                    [B.burstGlow]: v && c
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(n)
                                                }
                                            }), (0, i.jsxs)("div", {
                                                children: [c ? (0, i.jsxs)(i.Fragment, {
                                                    children: [F && (0, i.jsx)(g.default, {
                                                        messageId: I.id,
                                                        emoji: m,
                                                        startPosition: M,
                                                        targetPosition: V
                                                    }), w && (0, i.jsx)(ea.default, {
                                                        count: s,
                                                        emoji: m,
                                                        channelId: I.getChannelId(),
                                                        messageId: I.id,
                                                        useChatFontScaling: S,
                                                        color: n
                                                    })]
                                                }) : null, (0, i.jsx)(T.default, {
                                                    className: l({
                                                        [B.hideEmoji]: C
                                                    }),
                                                    emojiId: m.id,
                                                    emojiName: m.name,
                                                    size: "reaction",
                                                    animated: m.animated
                                                })]
                                            }), d ? null : (0, i.jsx)(G.default, {
                                                className: B.reactionCount,
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
                        }), c && A && null != O && (0, i.jsx)(h.Popout, {
                            renderPopout: O,
                            shouldShow: !0,
                            closeOnScroll: !0,
                            onRequestClose: this.handleDismissCoachmark,
                            children: e => (0, i.jsx)("div", {
                                className: B.hidden,
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
                    }, this.hasShownTooltip = !1, this.nonce = (0, o.v4)(), this.userCanBurstReact = () => {
                        let {
                            hasUnlimited: e
                        } = E.BurstReactionsUserExperiment.getCurrentConfig({
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
                            isBurstReaction: l,
                            isPendingMember: o,
                            isLurking: r,
                            isGuest: u,
                            isForumToolbar: c,
                            userHasPremium: m,
                            hasDismissedRemoveModal: f,
                            shouldShowFreeUserSentCoachmark: h
                        } = this.props, T = B.default.getChannel(i.getChannelId());
                        if (r || u) {
                            null === (n = this.ctaRef) || void 0 === n || null === (t = n.current) || void 0 === t || t.focus();
                            return
                        }
                        let R = i.getChannelId(),
                            E = c ? b.ReactionLocations.FORUM_TOOLBAR : b.ReactionLocations.MESSAGE;
                        if (l && !s && this.isMe()) f ? (0, b.removeReaction)(R, i.id, a, void 0, E, {
                            burst: l
                        }) : (0, b.removeReactionWithConfirmation)({
                            emoji: a,
                            channelId: R,
                            messageId: i.id,
                            reactionType: l ? Z.ReactionTypes.BURST : Z.ReactionTypes.NORMAL,
                            location: E,
                            isMe: this.isMe()
                        });
                        else if (!l || this.userCanBurstReact() || m) {
                            if (l && !this.userCanBurstReact()) {
                                (0, ee.openOutOfBurstsModal)();
                                return
                            } else o ? this.handleShowVerificationGate() : !s && (this.isMe() ? (0, b.removeReaction)(R, i.id, a, void 0, E) : (0, b.addReaction)(R, i.id, a, E, {
                                burst: l
                            }))
                        } else {
                            (0, U.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: el.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: (null == T ? void 0 : T.getGuildId()) != null ? es.AnalyticsPages.GUILD_CHANNEL : es.AnalyticsPages.DM_CHANNEL,
                                    section: null != T ? (0, L.getBurstAnalyticsSection)(T) : void 0,
                                    object: es.AnalyticsObjects.EMOJI_REACTION_UPSELL
                                }
                            });
                            return
                        }
                        l && this.isMe() && h && ((0, J.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT))
                    }, this.handleEnter = e => {
                        let {
                            emoji: t,
                            message: n,
                            type: i,
                            reduceMotion: a,
                            animateEmoji: s
                        } = this.props, l = i === Z.ReactionTypes.BURST;
                        l && !this.isReactionEventActive && !a && s && (0, b.playBurstReaction)({
                            channelId: n.getChannelId(),
                            messageId: n.id,
                            emoji: t,
                            key: X.BurstReactionEffectSource.HOVER
                        }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(l ? 750 : 500, this.showTooltip, !1)
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
                        }), this.hasShownTooltip && z.default.track(es.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: this.nonce
                        })
                    }, this.isMe = () => {
                        let {
                            me: e,
                            me_burst: t,
                            type: n
                        } = this.props;
                        return eh(e, t, n)
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
                        } = this.props, s = B.default.getChannel(n.getChannelId()), l = D.default.getGuild(null == s ? void 0 : s.getGuildId());
                        return a && null != l ? (0, i.jsx)(M.default, {
                            ctaRef: this.ctaRef,
                            type: M.LurkerModeUpsellPopoutTypes.REACTIONS,
                            guild: l,
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
                            colors: o,
                            isBurstReaction: r = !1,
                            burstReactionsEnabled: u = !1,
                            hasUnlimitedBurstReactions: c = !1
                        } = this.props, {
                            tooltipText: d
                        } = this.state, m = n => {
                            let i = B.default.getChannel(t.getChannelId());
                            if (null == i) return;
                            this.handleLeave();
                            let a = r ? Z.ReactionTypes.BURST : Z.ReactionTypes.NORMAL;
                            ef(i, t, {
                                emoji: e,
                                reactionType: a
                            })
                        }, R = "string" == typeof d ? "" === d.trim() : null == d, E = () => R || null == d ? null : (0, i.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            className: ed.reactionTooltipText,
                            "aria-label": d,
                            children: d
                        });
                        if (n === Z.ReactionTypes.BURST) {
                            let t = F.default.getCurrentUser(),
                                n = (0, L.useTooltipReplenishmentMessage)(),
                                r = c ? (0, Y.isPremium)(t) : null != a && a > 0;
                            return (0, i.jsxs)(f.Dialog, {
                                className: ed.reactionTooltip,
                                onMouseEnter: this.handleEnterTooltip,
                                onMouseLeave: this.handleLeave,
                                children: [(0, i.jsxs)(h.Clickable, {
                                    className: ed.burstReactionTooltipInner,
                                    onClick: m,
                                    children: [(0, i.jsxs)("div", {
                                        className: l(ed.burstReactionTooltipMessage, {
                                            [ed.burstReactionTooltipSpacer]: u
                                        }),
                                        children: [(0, i.jsx)(T.default, {
                                            className: ed.reactionTooltipEmoji,
                                            emojiId: e.id,
                                            emojiName: e.name,
                                            animated: e.animated,
                                            size: this.props.emojiSize
                                        }), E()]
                                    }), u && (0, i.jsxs)("div", {
                                        className: ed.burstReactionTooltipPrompt,
                                        children: [(0, Y.isPremium)(t) && (0, i.jsx)(K.default, {
                                            className: ed.burstReactionTooltipNitroIcon,
                                            color: H.GradientCssUrls.PREMIUM_TIER_2
                                        }), r ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)(h.Text, {
                                                variant: "text-sm/normal",
                                                className: ed.reactionTooltipText,
                                                "aria-label": "super reaction tooltip cta",
                                                children: s ? eo.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED : eo.default.Messages.SUPER_REACTION_TOOLTIP_CTA
                                            }), !c && (0, i.jsx)(G.default, {
                                                className: ed.burstAnimatedCounter,
                                                value: null != a ? a : 0,
                                                animationSpeed: 600,
                                                animationColor: null == o ? void 0 : o.accentColor,
                                                formatString: e => eo.default.Messages.BURST_REACTION_TOOLTIP_CTA_LEFT.format({
                                                    n: e.toString()
                                                })
                                            })]
                                        }) : (0, i.jsx)(i.Fragment, {
                                            children: (0, Y.isPremium)(t) ? (0, i.jsx)(h.Text, {
                                                variant: "text-sm/normal",
                                                "aria-label": "super reaction tooltip replenishment message",
                                                children: n
                                            }) : (0, i.jsx)(i.Fragment, {
                                                children: !this.isKeyboardNavigation && (0, i.jsxs)("div", {
                                                    children: [(0, i.jsx)(h.Text, {
                                                        variant: "text-sm/normal",
                                                        "aria-label": "super reaction tooltip upsell",
                                                        children: eo.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                                    }), (0, i.jsx)(x.default, {
                                                        subscriptionTier: el.PremiumSubscriptionSKUs.TIER_2,
                                                        buttonText: eo.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
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
                            children: [(0, i.jsx)(h.Clickable, {
                                onClick: m,
                                children: (0, i.jsxs)("div", {
                                    className: ed.reactionTooltipInner,
                                    children: [(0, i.jsx)(T.default, {
                                        className: ed.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), E()]
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
                        let n = B.default.getChannel(e.getChannelId()),
                            i = D.default.getGuild(null == n ? void 0 : n.getGuildId());
                        null != i && (0, O.openMemberVerificationModal)(i.id)
                    }, this.handleSetReactionRef = e => {
                        this.setState({
                            reactionRef: e
                        })
                    }, this.handleDismissCoachmark = () => {
                        (0, J.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                    }, this.trackReactionTooltipViewed = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: n
                        } = this.props, i = F.default.getCurrentUser(), a = B.default.getChannel(t.getChannelId()), s = n === Z.ReactionTypes.BURST, l = (0, Y.isPremium)(i), o = s ? el.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : el.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
                        if (s && !this.userCanBurstReact() && !l && (o = el.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), _.default.trackWithMetadata(es.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                                type: o,
                                expression_id: e.id,
                                expression_name: e.name,
                                is_animated: e.animated,
                                is_custom: null != e.id,
                                nonce: this.nonce
                            }), s && null != a && !l && !this.userCanBurstReact()) z.default.track(es.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: el.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == a ? void 0 : a.getGuildId()) != null ? es.AnalyticsPages.GUILD_CHANNEL : es.AnalyticsPages.DM_CHANNEL,
                                section: (0, L.getBurstAnalyticsSection)(a),
                                object: es.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    }
                }
            }
            eT.defaultProps = {
                emojiSize: "jumbo"
            };
            let eR = a.memo(e => {
                    let {
                        type: t,
                        burst_colors: n,
                        message: a,
                        emoji: s
                    } = e, l = t === Z.ReactionTypes.BURST, {
                        enabled: o,
                        hasBurstShake: r,
                        hasBurstGlow: u,
                        hasSendAnimation: m,
                        hasUnlimited: f
                    } = (0, E.useBurstReactionsExperiment)(), h = (0, $.default)(l && null != n ? n : []), T = (0, c.useStateFromStores)([X.default], () => void 0 !== X.default.getEffectForEmojiId(a.getChannelId(), a.id, s)), R = (0, c.useStateFromStores)([p.default], () => p.default.useReducedMotion), _ = P.AnimateEmoji.useSetting(), g = (0, S.isDismissibleContentDismissed)(d.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), [I, C] = (0, c.useStateFromStoresArray)([q.default], () => [q.default.remainingBurstCurrency, q.default.emojiReactionToTargetForCoachmark]), A = F.default.getCurrentUser(), O = (0, Y.isPremium)(A), N = (0, S.isDismissibleContentDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT), v = o && !(0, Y.isNewUser)(A) && I > 0 && !N && null != C && s.id === C.id && s.name === C.name;
                    v && O && ((0, J.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT));
                    let M = (0, c.useStateFromStores)([X.default], () => X.default.getReactionPickerAnimation(a.id, s.name, s.id)),
                        j = l && (T || null != M && m);
                    return (0, i.jsx)(eT, {
                        ...e,
                        colors: h,
                        isBurstReaction: l,
                        hideEmoji: j,
                        remainingBurstCurrency: I,
                        userHasPremium: O,
                        burstReactionsEnabled: o,
                        reduceMotion: R,
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
                eE = e => {
                    var t;
                    let {
                        emojiId: n,
                        expressionSourceGuild: a,
                        hasJoinedExpressionSourceGuild: s,
                        onClose: l,
                        packCollectionData: o,
                        popoutData: r,
                        currentGuildId: u,
                        nonce: c
                    } = e;
                    (0, A.useTrackOpenPopout)({
                        emojiId: n,
                        currentGuildId: u,
                        popoutData: r,
                        emojiSourceGuildId: null == a ? void 0 : a.id,
                        nonce: c
                    });
                    let d = null !== (t = null == a ? void 0 : a.isDiscoverable()) && void 0 !== t && t,
                        m = o.collectEnabled;
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
                                onClose: l,
                                popoutData: r,
                                packCollectionData: o,
                                isDisplayingButtonInTopSection: !1,
                                nonce: c
                            })]
                        }) : (0, i.jsx)(h.Text, {
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
                        onClose: o,
                        nonce: r
                    } = e, {
                        joinedEmojiSourceGuild: u
                    } = (0, c.useStateFromStoresObject)([I.default, D.default], () => {
                        let e = I.default.getCustomEmojiById(n);
                        return {
                            joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === C.EmojiTypes.GUILD ? D.default.getGuild(null == e ? void 0 : e.guildId) : void 0
                        }
                    }), [d, m] = a.useState(void 0), [f, T] = a.useState(!1), [R, E] = a.useState(!1), p = null != u, _ = (0, N.usePackCollectionData)({
                        expressionSourceGuild: d
                    }), S = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t, g = V.default.getGuildId(), A = null != g && (g === (null == d ? void 0 : d.id) || g === (null == u ? void 0 : u.id)), O = (0, Q.getEmojiPopoutData)({
                        isPremium: _.isPremium,
                        hasJoinedEmojiSourceGuild: p,
                        isDiscoverable: S,
                        packCollectionData: _,
                        emojiComesFromCurrentGuild: A,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1,
                        isRoleSubscriptionEmoji: !1,
                        shouldHideRoleSubscriptionCTA: !1
                    });
                    a.useEffect(() => {
                        if (!f) return;
                        let e = async () => {
                            s(), E(!0), m(await v.default.getGuildFromEmojiId(n)), E(!1), s()
                        };
                        e()
                    }, [n, f]);
                    let M = !_.viewAndUseEnabled || p;
                    if (M) return null;
                    let j = () => {
                            T(!f)
                        },
                        y = f && void 0 !== d;
                    return (0, i.jsxs)("div", {
                        children: [y ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: er.reactionEmojiDetailsDivider
                            }), null != O.emojiDescription && O.type !== Q.EmojiPopoutType.UNAVAILABLE && (0, i.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                "aria-label": O.type,
                                children: O.emojiDescription
                            })]
                        }) : (() => {
                            let e = eo.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                            return (0, i.jsxs)(h.Clickable, {
                                onClick: j,
                                className: er.reactionEmojiDetailsClickable,
                                children: [(0, i.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "none",
                                    "aria-label": e,
                                    children: e
                                }), (0, i.jsx)(W.default, {
                                    width: 16,
                                    height: 16,
                                    className: l(er.reactionEmojiDetailsArrow, {
                                        [er.reactionEmojiDetailsArrowCollapsed]: !f
                                    })
                                })]
                            })
                        })(), R ? (0, i.jsx)(en.PopoutLoadingAnimation, {
                            className: er.emojiDetailsLoader
                        }) : y && (0, i.jsx)(eE, {
                            emojiId: n,
                            expressionSourceGuild: d,
                            hasJoinedExpressionSourceGuild: p,
                            onClose: o,
                            popoutData: O,
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
                    return E
                }
            });
            var i, a, s = n("37983"),
                l = n("884691"),
                o = n("414456"),
                r = n.n(o),
                u = n("230265"),
                c = n.n(u),
                d = n("913144"),
                m = n("15935"),
                f = n("103475"),
                h = n("941723"),
                T = n("256346");
            (i = a || (a = {}))[i.NORMAL = 16] = "NORMAL", i[i.LARGE = 32] = "LARGE";
            let R = async e => {
                var t;
                let {
                    effect: n
                } = e, i = (0, f.getBurstAnimation)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : "", n.emoji.name), a = await (0, h.getResizedAnimation)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
                return a.assets[0].p = n.url, a
            };

            function E(e) {
                let {
                    className: t,
                    effect: n,
                    onComplete: i,
                    emojiSize: o = a.NORMAL
                } = e, u = l.useRef(null), f = o * h.ANIMATION_TO_EMOJI_RATIO, E = (f + o) / 2;
                return l.useEffect(() => {
                    let e;
                    if (null != n) return !async function() {
                        if (null != u.current) {
                            let t = await R({
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
                }, [i, n, o]), (0, s.jsx)("div", {
                    className: T.effectsWrapper,
                    children: (0, s.jsx)("div", {
                        className: r(T.effect, t),
                        style: {
                            transform: "translateY(".concat(E, "px)"),
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
                    return E
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("446674"),
                l = n("913144"),
                o = n("225664"),
                r = n("206230"),
                u = n("166257"),
                c = n("845579"),
                d = n("15935"),
                m = n("103475"),
                f = n("512306"),
                h = n("941723"),
                T = n("981937"),
                R = n("205591"),
                E = a.memo(function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: E,
                        useChatFontScaling: p,
                        color: _,
                        count: S
                    } = e, {
                        hasPlayRandomAnimations: g
                    } = (0, o.useBurstReactionsExperiment)(null, !1), I = (0, s.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, n, E)), C = p ? R : T, A = a.useMemo(() => (0, h.buildEffect)(E, _, t, {
                        key: I,
                        messageId: n
                    }), [_, I, E, t, n]), [O, N] = a.useState(!1), v = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), M = c.AnimateEmoji.useSetting(), j = a.useCallback(() => {
                        l.default.dispatch({
                            type: "BURST_REACTION_EFFECT_CLEAR",
                            channelId: t,
                            messageId: n,
                            emoji: E
                        })
                    }, [E, t, n]);
                    return (a.useEffect(() => {
                        let e = () => {
                            if (O) return;
                            let e = (0, m.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(n).concat(E.name)),
                                i = e % 10;
                            (i += S > 4 ? 4 : S - 1) > 7 && (N(!0), (0, u.playBurstReaction)({
                                channelId: t,
                                messageId: n,
                                emoji: E,
                                key: d.BurstReactionEffectSource.RANDOM
                            }))
                        };
                        if (O || !g || v && !M || !M) return;
                        e();
                        let i = setInterval(e, 5e3);
                        return () => {
                            clearInterval(i)
                        }
                    }, [M, t, S, E, E.name, g, O, n, v]), null == I) ? null : (0, i.jsx)(f.default, {
                        className: C.effect,
                        effect: A,
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
                l = n("397485"),
                o = n("284679"),
                r = n("103475");
            let u = 7.5,
                c = (0, i.memoize)((e, t, n, i) => new Promise(e => {
                    let a = new Image;
                    a.src = t, a.crossOrigin = "Anonymous", a.onload = () => {
                        let t = 32 * (0, s.getDevicePixelRatio)(),
                            l = JSON.stringify(n);
                        if (null != i && (l = (0, r.replaceAnimationColors)(l, (0, o.hexToRgb)(i))), a.width === t && a.height === t || 0 === a.width && 0 === a.height) e(JSON.parse(l));
                        else {
                            let t = 128 / a.width * a.height;
                            e(JSON.parse(l = (l = l.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
                        }
                    }
                }));

            function d(e, t, n, i) {
                let {
                    emojiSize: s,
                    key: o,
                    messageId: r
                } = null != i ? i : {}, u = (0, l.getEffectUrl)(e, null != s ? 2 * s : void 0);
                return {
                    channelId: n,
                    messageId: r,
                    emoji: e,
                    animationId: (0, a.v4)(),
                    url: u,
                    key: o,
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
                l = n("506885"),
                o = n("981601"),
                r = n("42203"),
                u = n("441823");

            function c(e, t, n) {
                var c, d;
                let m = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    f = arguments.length > 4 ? arguments[4] : void 0;
                let h = (c = e, d = t, a.useCallback(e => {
                    let t = r.default.getChannel(d);
                    null != t && null != c && (0, u.openUserContextMenu)(e, c, t)
                }, [c, d]));
                return a.useCallback(r => (u, c) => {
                    let d = (e, t) => (0, a.createElement)(s.NameWithRoleAnchor, {
                            ...null != e ? e : {},
                            key: t,
                            onContextMenu: h,
                            name: u,
                            color: null == r ? void 0 : r.colorString,
                            roleName: null == r ? void 0 : r.colorRoleName,
                            "aria-label": f
                        }),
                        T = e => t => {
                            m && t.stopPropagation(), e(t)
                        };
                    return null != e ? (0, i.jsx)(s.Popout, {
                        position: "right",
                        preload: () => (0, l.default)(e.id, e.getAvatarURL(n, 80), {
                            guildId: n,
                            channelId: t
                        }),
                        renderPopout: a => (0, i.jsx)(o.default, {
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
                                onClick: T(t),
                                ...n
                            })
                        }
                    }, c) : d(void 0, c)
                }, [e, t, n, h, m, f])
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
                l = n("65597"),
                o = n("880731"),
                r = n("232268"),
                u = n("759432"),
                c = n("798592"),
                d = n("39141");

            function m(e) {
                let {
                    reactionRef: t,
                    count: n
                } = e, i = a.useRef(n), r = (0, l.default)([o.default], () => o.default.getState()), d = (0, c.default)(), m = (0, u.default)(t);
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
                l = n("151426"),
                o = n("77078"),
                r = n("685665"),
                u = n("10641"),
                c = n("590527"),
                d = n("649844"),
                m = n("626301"),
                f = n("646718"),
                h = n("49111"),
                T = n("782340"),
                R = n("825746"),
                E = n("54338"),
                p = () => {
                    let {
                        analyticsLocations: e
                    } = (0, r.default)();
                    return (0, i.jsx)(o.Dialog, {
                        children: (0, i.jsxs)("div", {
                            className: R.burstReactionTooltipCoachmark,
                            children: [(0, i.jsx)("img", {
                                src: E,
                                alt: ""
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-md/bold",
                                children: T.default.Messages.SUPER_REACTIONS_CONGRATS_HEADER
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.SUPER_REACTIONS_CONGRATS_DESCRIPTION.format({
                                    onClick: () => {
                                        (0, m.navigateToPremiumMarketingPage)(), (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    }
                                })
                            }), (0, i.jsxs)("span", {
                                className: R.burstReactionTooltipCoachmarkButtons,
                                children: [(0, i.jsx)(o.Button, {
                                    className: s(R.burstReactionTooltipCoachmarkButton, R.burstReactionTooltipCoachmarkDismiss),
                                    color: o.Button.Colors.CUSTOM,
                                    look: o.Button.Looks.BLANK,
                                    onClick: () => {
                                        (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    },
                                    children: T.default.Messages.DISMISS
                                }), (0, i.jsx)(o.Button, {
                                    autoFocus: !0,
                                    className: s(R.burstReactionTooltipCoachmarkButton, R.burstReactionTooltipCoachmarkCTA),
                                    color: o.Button.Colors.CUSTOM,
                                    look: o.Button.Looks.FILLED,
                                    onClick: () => {
                                        let t = {
                                            page: h.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS
                                        };
                                        (0, d.default)({
                                            initialPlanId: null,
                                            subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                                            analyticsObject: t,
                                            analyticsLocations: e
                                        }), (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(l.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                                    },
                                    children: T.default.Messages.PREMIUM_UPSELL_GET_NITRO
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
                    return T
                },
                openBurstReactionsUpsellModal: function() {
                    return R
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("79112"),
                l = n("225664"),
                o = n("154889"),
                r = n("917247"),
                u = n("789946"),
                c = n("646718"),
                d = n("49111"),
                m = n("782340"),
                f = n("61791"),
                h = n("277064");

            function T(e) {
                var t, n;
                let {
                    onClose: a,
                    analyticsSource: T,
                    ...R
                } = e, {
                    hasUnlimited: E
                } = (0, l.useBurstReactionsExperiment)(null, !1), p = E ? m.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY : m.default.Messages.SUPER_REACTIONS_UPSELL_BODY_LAUNCH, _ = p.format({
                    onClick: () => {
                        s.default.open(d.UserSettingsSections.PREMIUM), a()
                    }
                }), S = (0, r.usePremiumTrialOffer)(), g = (0, o.usePremiumDiscountOffer)();
                return (0, i.jsx)(u.default, {
                    artURL: h,
                    artContainerClassName: f.artContainer,
                    modalClassName: f.modalContainer,
                    bodyClassName: f.bodyContainer,
                    type: c.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    title: m.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
                    body: _,
                    glowUp: _,
                    analyticsSource: T,
                    analyticsLocation: {
                        page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
                        object: d.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: a,
                    subscribeButtonText: null != S || null != g ? void 0 : m.default.Messages.PREMIUM_SETTINGS_GET,
                    subscriptionTier: null !== (n = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : c.PremiumSubscriptionSKUs.TIER_2,
                    backButtonText: m.default.Messages.NO_THANKS,
                    ...R
                })
            }

            function R(e) {
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
                    return L
                },
                setGuildBurstPreview: function() {
                    return P
                },
                clearGuildBurstPreview: function() {
                    return B
                }
            });
            var i, a, s = n("872717"),
                l = n("151426"),
                o = n("819855"),
                r = n("913144"),
                u = n("404118"),
                c = n("225664"),
                d = n("10641"),
                m = n("590527"),
                f = n("692171"),
                h = n("875978"),
                T = n("263024"),
                R = n("271938"),
                E = n("377253"),
                p = n("659500"),
                _ = n("402671"),
                S = n("61069"),
                g = n("502575"),
                I = n("49111"),
                C = n("782340");

            function A(e, t, n) {
                let {
                    status: i,
                    body: a
                } = e;
                if (429 === i) return setTimeout(t, 1e3 * e.body.retry_after), !1;
                if (403 === i) switch (a && a.code) {
                    case I.AbortCodes.TOO_MANY_REACTIONS:
                        u.default.show({
                            title: C.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                            body: C.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                            confirmText: C.default.Messages.OKAY
                        });
                        break;
                    case I.AbortCodes.REACTION_BLOCKED:
                        p.ComponentDispatch.dispatch(I.ComponentActions.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        })
                } else if (!n.isRetry) return t(), !1;
                return !0
            }

            function O(e, t, n, i, a) {
                var s, l, o;
                r.default.dispatch({
                    type: e,
                    channelId: t,
                    messageId: n,
                    userId: null !== (s = null == a ? void 0 : a.userId) && void 0 !== s ? s : R.default.getId(),
                    emoji: i,
                    optimistic: !0,
                    burst: null !== (l = null == a ? void 0 : a.burst) && void 0 !== l && l,
                    colors: null !== (o = null == a ? void 0 : a.colors) && void 0 !== o ? o : []
                })
            }

            function N(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    userId: a,
                    useTypeEndpoint: s = !1,
                    type: l = h.ReactionTypes.NORMAL
                } = e, o = null != i.id ? "".concat(i.name, ":").concat(i.id) : i.name;
                return null == a ? I.Endpoints.REACTIONS(t, n, o) : s ? I.Endpoints.REACTION_WITH_TYPE(t, n, o, a, l) : I.Endpoints.REACTION(t, n, o, a)
            }
            async function v(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    limit: a,
                    after: l,
                    type: o
                } = e, u = await s.default.get({
                    url: N({
                        channelId: t,
                        messageId: n,
                        emoji: i
                    }),
                    query: {
                        limit: a,
                        after: l,
                        type: o
                    },
                    oldFormErrors: !0
                });
                return r.default.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: t,
                    messageId: n,
                    users: u.body,
                    emoji: i,
                    reactionType: o
                }), u.body
            }
            async function M(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.MESSAGE,
                    l = arguments.length > 4 ? arguments[4] : void 0,
                    r = null != l && !!l.burst,
                    d = null != l && !!l.isRetry,
                    {
                        hasUnlimited: R
                    } = c.BurstReactionsUserExperiment.getCurrentConfig({
                        location: "ReactionActionCreators.addReaction"
                    }, {
                        autoTrackExposure: !1
                    });
                if (r && !f.default.hasAvailableBurstCurrency && !R) return;
                if (!d && function(e, t, n, i) {
                        let a = E.default.getMessage(e, t);
                        return null != a && a.userHasReactedWithEmoji(n, i)
                    }(e, t, n, r)) {
                    u.default.show({
                        title: C.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                        body: C.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                        confirmText: C.default.Messages.GOT_IT
                    });
                    return
                }
                let p = await b(n, r);
                O("MESSAGE_REACTION_ADD", e, t, n, {
                    burst: r,
                    colors: p
                }), await T.default.unarchiveThreadIfNecessary(e), s.default.put({
                    url: N({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: "@me"
                    }),
                    query: {
                        location: i,
                        type: r ? h.ReactionTypes.BURST : h.ReactionTypes.NORMAL
                    },
                    oldFormErrors: !0
                }).then(() => {
                    let i = f.default.remainingBurstCurrency;
                    r ? (o.AccessibilityAnnouncer.announce(R ? C.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                        name: n.name
                    }) : C.default.Messages.BURST_REACTION_ADD_SUCCESS_A11Y.format({
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
                    })) : o.AccessibilityAnnouncer.announce(C.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(a => {
                    A(a, () => M(e, t, n, i, {
                        burst: r,
                        isRetry: !0
                    }), {
                        isRetry: d
                    }) && (O("MESSAGE_REACTION_REMOVE", e, t, n, {
                        burst: r
                    }), r ? o.AccessibilityAnnouncer.announce(R ? C.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                        name: n.name
                    }) : C.default.Messages.BURST_REACTION_ADD_ERROR_A11Y.format({
                        name: n.name,
                        n: f.default.remainingBurstCurrency
                    })) : o.AccessibilityAnnouncer.announce(C.default.Messages.REACTION_ADD_ERROR_A11Y.format({
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
                await T.default.unarchiveThreadIfNecessary(e), s.default.delete({
                    url: I.Endpoints.REMOVE_REACTIONS(e, t),
                    oldFormErrors: !0
                }).catch(n => {
                    A(n, () => y(e, t, {
                        isRetry: !0
                    }), {
                        isRetry: i
                    })
                })
            }
            async function x(e, t, n, i) {
                let a = null != i && !!i.isRetry;
                await T.default.unarchiveThreadIfNecessary(e);
                let l = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
                s.default.delete({
                    url: I.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, l),
                    oldFormErrors: !0
                }).catch(i => {
                    A(i, () => x(e, t, n, {
                        isRetry: !0
                    }), {
                        isRetry: a
                    })
                })
            }
            async function U(e, t, n, i) {
                let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.MESSAGE,
                    r = arguments.length > 5 ? arguments[5] : void 0,
                    u = null != r && !!r.burst,
                    c = null != r && !!r.isRetry;
                O("MESSAGE_REACTION_REMOVE", e, t, n, {
                    userId: i,
                    burst: u
                }), await T.default.unarchiveThreadIfNecessary(e), s.default.delete({
                    url: N({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: null != i ? i : "@me",
                        type: u ? h.ReactionTypes.BURST : h.ReactionTypes.NORMAL,
                        useTypeEndpoint: !0
                    }),
                    query: {
                        location: l,
                        burst: u
                    },
                    oldFormErrors: !0
                }).then(() => {
                    (null == r ? void 0 : r.burst) ? o.AccessibilityAnnouncer.announce(C.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    })): o.AccessibilityAnnouncer.announce(C.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(async a => {
                    if (A(a, () => U(e, t, n, i, l, {
                            burst: u,
                            isRetry: !0
                        }), {
                            isRetry: c
                        })) {
                        let a = await b(n, u);
                        O("MESSAGE_REACTION_ADD", e, t, n, {
                            userId: i,
                            burst: u,
                            colors: a
                        }), (null == r ? void 0 : r.burst) ? o.AccessibilityAnnouncer.announce(C.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        })) : o.AccessibilityAnnouncer.announce(C.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
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

            function L(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    reactionType: a,
                    userId: s,
                    location: o,
                    isMe: r = !0
                } = e, u = a === h.ReactionTypes.BURST, m = () => {
                    U(t, n, i, s, o, {
                        burst: u
                    })
                }, f = (0, d.isDismissibleContentDismissed)(l.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), {
                    hasUnlimited: T
                } = c.BurstReactionsUserExperiment.getCurrentConfig({
                    location: "removeReactionWithConfirmation"
                }, {
                    autoTrackExposure: !1
                });
                u && r && !f && !T ? (0, g.default)(m) : m()
            }

            function P(e, t, n, i) {
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

            function B(e) {
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
                    return T
                }
            });
            var i = n("446674"),
                a = n("913144"),
                s = n("267567"),
                l = n("875978"),
                o = n("166257"),
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
                } = e, o = s ? l.ReactionTypes.BURST : l.ReactionTypes.NORMAL, r = m.ensure(n, a, o);
                if ("MESSAGE_REACTION_ADD" === t) {
                    let e = c.default.getUser(i);
                    null != e && (r.users[i] = e)
                } else delete r.users[i]
            }
            class h extends i.default.Store {
                getReactions(e, t, n, i, a) {
                    let l = m.ensure(t, n, a);
                    if (!l.fetched) {
                        let r = u.default.getChannel(e),
                            c = null != r ? r.getGuildId() : null;
                        if (null != c && s.default.isLurking(c)) return;
                        o.getReactors({
                            channelId: e,
                            messageId: t,
                            emoji: n,
                            limit: i,
                            type: a
                        }), l.fetched = !0
                    }
                    return l.users
                }
            }
            h.displayName = "MessageReactionsStore";
            var T = new h(a.default, {
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
        },
        738107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMinCounterWidth: function() {
                    return m
                },
                default: function() {
                    return f
                }
            });
            var i, a, s = n("37983"),
                l = n("884691"),
                o = n("917351"),
                r = n.n(o),
                u = n("458960"),
                c = n("471671");

            function d(e, t) {
                return {
                    toValue: e,
                    duration: null != t ? t : 300,
                    easing: u.default.Easing.inOut(u.default.Easing.back())
                }
            }

            function m(e, t, n) {
                if (null != t) {
                    let i = Math.ceil(Math.log10(e + 1));
                    return null != n && n > 0 ? Math.min(i, n) * t : i * t
                }
            }(i = a || (a = {}))[i.ABOVE = 0] = "ABOVE", i[i.VISIBLE = 1] = "VISIBLE", i[i.BELOW = 2] = "BELOW";
            class f extends l.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        prevValue: n,
                        currValue: i,
                        nextValue: a
                    } = t;
                    return null == n && i !== e.value ? {
                        prevValue: c.default.isFocused() ? i : null,
                        currValue: e.value
                    } : null != a && a !== e.value ? {
                        nextValue: e.value
                    } : null
                }
                componentDidUpdate(e, t) {
                    let {
                        prevValue: n,
                        currValue: i
                    } = this.state;
                    n !== t.prevValue && null != n && this.animateBetween(n, i)
                }
                animateBetween(e, t) {
                    let n;
                    let {
                        forcePosition: i,
                        animationSpeed: s
                    } = this.props;
                    this.prevAnimate.setValue(a.VISIBLE), null != i ? i === a.ABOVE ? (this.currAnimate.setValue(a.ABOVE), n = a.BELOW) : i === a.BELOW && (this.currAnimate.setValue(a.BELOW), n = a.ABOVE) : e > t ? (this.currAnimate.setValue(a.ABOVE), n = a.BELOW) : (this.currAnimate.setValue(a.BELOW), n = a.ABOVE), u.default.parallel([u.default.timing(this.prevAnimate, d(n, s)), u.default.timing(this.currAnimate, d(a.VISIBLE, s))]).start(this.animateNext)
                }
                getAnimatedStyle(e) {
                    let {
                        animationColor: t
                    } = this.props;
                    return {
                        transform: [{
                            translateY: e.interpolate({
                                inputRange: [0, 1, 2],
                                outputRange: ["-100%", "0%", "100%"]
                            })
                        }],
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        ...null != t && {
                            color: t
                        }
                    }
                }
                getMinWidth(e) {
                    let {
                        digitWidth: t,
                        padStartLength: n
                    } = this.props;
                    return m(e, t, n)
                }
                padValue(e) {
                    let {
                        padStartLength: t
                    } = this.props;
                    return null != t ? String(e).padStart(t, "0") : e
                }
                render() {
                    let {
                        prevValue: e,
                        currValue: t
                    } = this.state, {
                        color: n,
                        formatString: i
                    } = this.props, a = r.omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
                    if (null == e) return (0, s.jsx)("div", {
                        ...a,
                        style: {
                            color: n,
                            minWidth: this.getMinWidth(t)
                        },
                        children: null != i ? i(this.padValue(t)) : this.padValue(t)
                    });
                    let l = Math.max(e, t);
                    return (0, s.jsxs)("div", {
                        ...a,
                        style: {
                            color: n,
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [(0, s.jsx)("div", {
                            style: {
                                visibility: "hidden",
                                minWidth: this.getMinWidth(l)
                            },
                            children: this.padValue(l)
                        }), (0, s.jsx)(u.default.div, {
                            style: {
                                color: n,
                                ...this.getAnimatedStyle(this.prevAnimate)
                            },
                            children: null != i ? i(this.padValue(e)) : this.padValue(e)
                        }), (0, s.jsx)(u.default.div, {
                            style: {
                                color: n,
                                ...this.getAnimatedStyle(this.currAnimate)
                            },
                            children: null != i ? i(this.padValue(t)) : this.padValue(t)
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.animateNext = () => {
                        let {
                            currValue: e,
                            nextValue: t
                        } = this.state;
                        null != t ? this.setState({
                            prevValue: c.default.isFocused() ? e : null,
                            currValue: t,
                            nextValue: null
                        }) : this.setState({
                            prevValue: null
                        })
                    }, this.state = {
                        prevValue: null,
                        currValue: e.value,
                        nextValue: null
                    }, this.prevAnimate = new u.default.Value(a.ABOVE), this.currAnimate = new u.default.Value(a.VISIBLE)
                }
            }
            f.Positions = a
        }
    }
]);