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
                h = n("77078"),
                T = n("430568"),
                E = n("145079"),
                R = n("87657"),
                p = n("225664"),
                _ = n("206230"),
                S = n("867805"),
                g = n("584375"),
                I = n("430475"),
                C = n("390236"),
                A = n("185014"),
                O = n("875978"),
                N = n("512306"),
                v = n("941723"),
                M = n("166257"),
                j = n("432173"),
                x = n("300322"),
                y = n("161778"),
                b = n("42203"),
                U = n("26989"),
                P = n("486996"),
                L = n("377253"),
                B = n("957255"),
                D = n("27618"),
                k = n("697218"),
                F = n("145131"),
                w = n("945330"),
                V = n("315102"),
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
                } = e, [l, r] = a.useState(!0), [u, c] = a.useState([]), d = a.useMemo(() => {
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
                        className: o(Y.burstEmoji, {
                            [Y.hideEmoji]: l
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
                        colors: l
                    } = this.props, r = X(e), u = function(e, t, n, a) {
                        let s = null == e.id ? G.default.getURL(e.name) : V.default.getEmojiURL({
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
                    }(e, 24, Y.emoji, o(Y.emoji, Y.emojiText)), c = s === O.ReactionTypes.BURST, m = c ? z.default.Messages.BURST_REACTION_REACTORS_A11Y : z.default.Messages.REACTION_REACTORS_A11Y, f = m.format({
                        name: r,
                        n: t
                    }), T = {}, E = {};
                    if (c) {
                        let {
                            backgroundColor: e = "",
                            opacity: t = 1,
                            accentColor: i = ""
                        } = null != l ? l : {};
                        if (E.color = i, n) {
                            var R;
                            T.background = null !== (R = (0, d.hex2rgb)(e, t)) && void 0 !== R ? R : ""
                        }
                    }
                    return (0, i.jsx)(h.Tooltip, {
                        position: "left",
                        text: r,
                        children: l => {
                            let {
                                onMouseEnter: r,
                                onMouseLeave: c
                            } = l;
                            return (0, i.jsxs)(h.Clickable, {
                                className: o({
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
                let f = (0, x.useIsActiveChannelOrUnarchivableThread)(s),
                    T = (0, m.useStateFromStores)([B.default], () => B.default.can(K.Permissions.MANAGE_MESSAGES, s) && f),
                    p = T || c.id === n.id,
                    _ = (0, m.useStateFromStores)([U.default, b.default, D.default], () => H.default.getName(o, s.id, n));
                return (0, i.jsxs)(F.default, {
                    className: Y.reactorDefault,
                    onContextMenu: e => (0, W.openUserContextMenu)(e, n, s),
                    align: F.default.Align.CENTER,
                    children: [(0, i.jsx)(F.default.Child, {
                        wrap: !0,
                        grow: 0,
                        shrink: 0,
                        className: J.marginReset,
                        children: (0, i.jsx)(R.default, {
                            user: null != d ? d : n,
                            size: h.AvatarSizes.SIZE_24
                        })
                    }), (0, i.jsx)(F.default.Child, {
                        children: (0, i.jsxs)(h.Text, {
                            tag: "strong",
                            variant: "text-md/normal",
                            className: Y.name,
                            children: [null != _ && "" !== _ && (0, i.jsx)("span", {
                                className: n.isPomelo() ? "" : Y.nickname,
                                children: _
                            }), (0, i.jsx)(E.default, {
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
                                reactionType: l,
                                isMe: (null == c ? void 0 : c.id) === n.id
                            }), null == u || u()
                        },
                        children: (0, i.jsx)(w.default, {
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
                    } = this.props, o = [];
                    return 0 === t.length && this.state.loadingMore ? o.push(length) : (o.push(t.length), e && o.push(1)), (0, i.jsxs)("div", {
                        className: Y.reactorsContainer,
                        children: [s === O.ReactionTypes.BURST && (0, i.jsx)(q, {
                            emoji: n.emoji,
                            channelId: a.getChannelId(),
                            messageId: a.id
                        }), (0, i.jsx)(h.List, {
                            className: Y.reactors,
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
                        if (1 === t) return 0 === n ? (0, i.jsx)(h.Spinner, {
                            className: Y.spinnerMore
                        }, "hasMore") : null;
                        return 0 === r.length && this.state.loadingMore ? (0, i.jsx)(h.Spinner, {
                            className: Y.spinner
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
                } = e, a = P.default.getReactions(t.getChannelId(), t.id, n.emoji, K.DEFAULT_NUM_REACTION_USERS, i);
                if (null == a) return {
                    reactors: [],
                    hasMore: !1
                };
                let s = Object.values(a),
                    o = i === O.ReactionTypes.BURST ? n.burst_count : n.count,
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
                } = e, u = (0, m.useStateFromStores)([b.default], () => b.default.getChannel(s.getChannelId())), c = null == u ? void 0 : u.getGuildId(), d = (0, m.useStateFromStores)([L.default, I.default, A.default], () => {
                    var e, t, n;
                    let i = null !== (n = null !== (t = L.default.getMessage(s.getChannelId(), s.id)) && void 0 !== t ? t : null === (e = I.default.getMessage(s.id)) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== n ? n : null != c ? A.default.getCachedMessage(c, s.getChannelId(), s.id) : void 0;
                    return null != i ? i.reactions : []
                }, [s, c]), {
                    enabled: T
                } = (0, p.useBurstReactionsExperiment)(c);
                let E = (t = d, n = T, a.useMemo(() => {
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
                    R = E[0],
                    S = null != R ? {
                        emoji: R.emoji,
                        reactionType: R.burst_count > 0 ? O.ReactionTypes.BURST : O.ReactionTypes.NORMAL
                    } : null,
                    [N, v] = function(e, t, n) {
                        let [i, s] = a.useState(null != e ? e : t);
                        return a.useEffect(() => {
                            if (null != i) {
                                let e = n.find(e => {
                                    let t = e.burst_count > 0 ? O.ReactionTypes.BURST : O.ReactionTypes.NORMAL;
                                    return e.emoji === i.emoji && t === i.reactionType
                                });
                                null == e && s(t)
                            }
                        }, [i, s, n, t]), [i, s]
                    }(o, S, d),
                    M = a.useMemo(() => {
                        var e;
                        return null == N ? null : null !== (e = d.find(e => (0, j.emojiEquals)(e.emoji, N.emoji))) && void 0 !== e ? e : null
                    }, [d, N]),
                    x = (0, m.useStateFromStores)([_.default], () => _.default.saturation),
                    U = (0, m.useStateFromStores)([y.default], () => (0, f.isThemeDark)(y.default.theme));
                if (a.useEffect(() => {
                        (0 === d.length || null == N && null == M) && setImmediate(l)
                    }, [l, d.length, M, N]), null == N || null == M) return (0, i.jsx)(h.Spinner, {});
                if (null == u) throw Error("MessageReactions.render: Message does not have a channelId");
                return (0, i.jsx)(C.default.Provider, {
                    value: null != c ? c : void 0,
                    children: (0, i.jsxs)(h.ModalRoot, {
                        "aria-label": z.default.Messages.REACTIONS,
                        transitionState: r,
                        size: h.ModalSize.DYNAMIC,
                        className: Y.container,
                        children: [(0, i.jsx)(h.Scroller, {
                            className: Y.scroller,
                            fade: !0,
                            children: E.map(e => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, i.jsx)(Z, {
                                    isSelected: en(N, e, n ? O.ReactionTypes.BURST : O.ReactionTypes.NORMAL),
                                    setSelected: v,
                                    reactionType: n ? O.ReactionTypes.BURST : O.ReactionTypes.NORMAL,
                                    emoji: e.emoji,
                                    count: n ? e.burst_count : e.count,
                                    colors: null != e.burst_colors ? (0, g.buildEmojiColorPalette)(e.burst_colors, x, U) : void 0
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
                    return R
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
                h = n("172858"),
                T = n("612683");
            let E = [];

            function R(e) {
                let {
                    messageId: t,
                    emoji: n,
                    startPosition: R,
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
                }, [n.name, n.id]), M = p.x - p.width / 2 * .5, j = p.y - p.height / 2 * .5, x = (0, o.useSpring)({
                    from: {
                        y: R.y
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
                        I(t)
                    }
                }), y = (0, o.useSpring)({
                    from: {
                        x: R.x,
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
                        colors: E,
                        spriteWidth: h.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: h.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    }), (0, i.jsx)(d.default, {
                        children: (0, i.jsx)(o.animated.div, {
                            style: {
                                ...x
                            },
                            className: T.emojiContainer,
                            children: (0, i.jsx)(o.animated.div, {
                                style: {
                                    ...y,
                                    opacity: y.opacity
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
        102873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useEmojiColorPalette: function() {
                    return r
                }
            });
            var i = n("819855"),
                a = n("446674"),
                s = n("206230"),
                o = n("161778"),
                l = n("584375");
            let r = e => {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.saturation),
                    n = (0, a.useStateFromStores)([o.default], () => (0, i.isThemeDark)(o.default.theme));
                return (0, l.buildEmojiColorPalette)(e, t, n)
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
                h = n("782340"),
                T = n("404637");
            (i = a || (a = {}))[i.CHAT = 0] = "CHAT", i[i.REACTIONS = 1] = "REACTIONS";
            var E = e => {
                let {
                    type: t,
                    guild: i,
                    closePopout: E,
                    ctaRef: R
                } = e, p = (0, c.useUID)(), [_, S] = o.useState(!1), g = (0, l.useStateFromStores)([m.default], () => m.default.isLurking(i.id), [i.id]);
                o.useEffect(() => {
                    _ && !g && E()
                }, [_, g, E]);
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
                        }), E()
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
                                buttonRef: R,
                                onClick: A,
                                submitting: _,
                                children: h.default.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, s.jsx)(r.Button, {
                                onClick: E,
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
                    let h = null !== (t = r[s]) && void 0 !== t ? t : {},
                        T = null !== (n = u[s]) && void 0 !== n ? n : {},
                        E = T[f],
                        R = h[f];
                    if (m !== a.HOVER || null == R) {
                        R === a.HOVER && m === a.EXTERNAL && null != E && ("function" == typeof E.destroy && E.destroy(), null === (i = u[s]) || void 0 === i || delete i[f], R = void 0);
                        null == R && (null != r[s] ? r[s][f] = m : r[s] = {
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
        103475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BurstAnalyticTypes: function() {
                    return i
                },
                replaceAnimationColors: function() {
                    return o
                },
                getBurstAnimationHash: function() {
                    return l
                }
            });
            var i, a = n("917351"),
                s = n("284679");
            (i || (i = {})).OUT_OF_BURSTS = "out of burst reactions modal";
            let o = (e, t) => {
                    let n = (0, s.getComplimentaryPaletteForColor)([t.r, t.g, t.b], 2);
                    return e = (e = e.replace(/(\[1,0,0,)/g, "[".concat(n[0][0] / 255, ",").concat(n[0][1] / 255, ",").concat(n[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(n[1][0] / 255, ",").concat(n[1][1] / 255, ",").concat(n[1][2] / 255, ","))
                },
                l = (0, a.memoize)(e => {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
                    return Math.abs(t)
                })
        },
        569512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBurstAnimation: function() {
                    return s
                }
            });
            var i = n("103475");
            let a = [{
                    load: () => n.el("758972").then(n.t.bind(n, "758972", 19))
                }, {
                    load: () => n.el("734436").then(n.t.bind(n, "734436", 19))
                }, {
                    load: () => n.el("494925").then(n.t.bind(n, "494925", 19))
                }, {
                    load: () => n.el("199777").then(n.t.bind(n, "199777", 19))
                }, {
                    load: () => n.el("942466").then(n.t.bind(n, "942466", 19))
                }, {
                    load: () => n.el("56957").then(n.t.bind(n, "56957", 19))
                }, {
                    load: () => n.el("547173").then(n.t.bind(n, "547173", 19))
                }, {
                    load: () => n.el("485996").then(n.t.bind(n, "485996", 19))
                }, {
                    load: () => n.el("871996").then(n.t.bind(n, "871996", 19))
                }, {
                    load: () => n.el("584037").then(n.t.bind(n, "584037", 19))
                }, {
                    load: () => n.el("320512").then(n.t.bind(n, "320512", 19))
                }, {
                    load: () => n.el("925536").then(n.t.bind(n, "925536", 19))
                }, {
                    load: () => n.el("522373").then(n.t.bind(n, "522373", 19))
                }, {
                    load: () => n.el("837366").then(n.t.bind(n, "837366", 19))
                }, {
                    load: () => n.el("42949").then(n.t.bind(n, "42949", 19))
                }, {
                    load: () => n.el("294705").then(n.t.bind(n, "294705", 19))
                }, {
                    load: () => n.el("454599").then(n.t.bind(n, "454599", 19))
                }, {
                    load: () => n.el("814738").then(n.t.bind(n, "814738", 19))
                }],
                s = async function(e, t, n) {
                    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    let s = (0, i.getBurstAnimationHash)("".concat(e).concat(t).concat(n)),
                        o = a[s % a.length];
                    return await o.load()
                }
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
                    h = o.default.getChannel(e.getChannelId()),
                    T = null == h || h.isPrivate() ? null : h.getGuildId(),
                    E = e.getReaction(t),
                    R = i === c.ReactionTypes.BURST,
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
                    S = R ? _.burst : _.standard,
                    g = null !== (n = R ? null == E ? void 0 : E.burst_count : null == E ? void 0 : E.count) && void 0 !== n ? n : 0,
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
                    return ef
                },
                showReactionsModal: function() {
                    return eh
                },
                isMeReaction: function() {
                    return eT
                },
                Reaction: function() {
                    return eR
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
                h = n("77078"),
                T = n("430568"),
                E = n("57155"),
                R = n("225664"),
                p = n("206230"),
                _ = n("716241"),
                S = n("10641"),
                g = n("58533"),
                I = n("385976"),
                C = n("858619"),
                A = n("102873"),
                O = n("865453"),
                N = n("233322"),
                v = n("252931"),
                M = n("529932"),
                j = n("446066"),
                x = n("13066"),
                y = n("785621"),
                b = n("638971"),
                U = n("635956"),
                P = n("85589"),
                L = n("166257"),
                B = n("432173"),
                D = n("845579"),
                k = n("42203"),
                F = n("305961"),
                w = n("486996"),
                V = n("162771"),
                G = n("697218"),
                H = n("471671"),
                W = n("738107"),
                K = n("791106"),
                z = n("256170"),
                Y = n("216422"),
                J = n("599110"),
                X = n("719923"),
                q = n("590527"),
                Z = n("15935"),
                Q = n("692171"),
                $ = n("875978"),
                ee = n("412745"),
                et = n("255135"),
                en = n("459698"),
                ei = n("933629"),
                ea = n("331011"),
                es = n("81924"),
                eo = n("49111"),
                el = n("646718"),
                er = n("782340"),
                eu = n("154403"),
                ec = n("550244"),
                ed = n("314934"),
                em = n("219468");
            let ef = 9;

            function eh(e, t, n) {
                (0, h.openModal)(e => (0, i.jsx)(E.default, {
                    ...e,
                    message: t,
                    selectedReaction: n
                }))
            }

            function eT(e, t, n) {
                return n === $.ReactionTypes.BURST && t || n === $.ReactionTypes.NORMAL && e
            }
            class eE extends a.PureComponent {
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
                    let {
                        autoUnfurlReactionTooltip: t
                    } = this.props;
                    H.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
                        toValue: 1,
                        duration: t ? 200 : 300,
                        easing: r.default.Easing.inOut(r.default.Easing.back())
                    }), r.default.timing(this.opacity, {
                        toValue: 1,
                        duration: t ? 200 : 300
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
                        isGuest: R,
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
                        hasBurstSendAnimation: j
                    } = this.props, {
                        shouldShowTooltip: x,
                        tooltipTextAria: b,
                        reactionRef: U,
                        tooltipPositionKey: P
                    } = this.state, L = S ? ed : ec, D = {
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
                        this.isMe() && (D.borderColor = a), D.background = o, t = i, n = i
                    }
                    let F = null == U ? void 0 : U.getBoundingClientRect(),
                        w = null != M && null != F && j,
                        V = null == M || !j;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(h.Popout, {
                            shouldShow: x,
                            "aria-label": null != b && b,
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
                                    className: o(L.reaction, _, {
                                        [L.reactionMe]: this.isMe(),
                                        [L.reactionReadOnly]: f && !E && !p && !R,
                                        [L.shakeReaction]: C && N && null == M
                                    }),
                                    style: D,
                                    children: (0, i.jsx)(h.Popout, {
                                        renderPopout: this.renderLurkerModeUpsellPopout,
                                        position: "top",
                                        children: e => (0, i.jsxs)(h.Clickable, {
                                            ...e,
                                            className: L.reactionInner,
                                            onClick: this.handleClick,
                                            "aria-disabled": f,
                                            "aria-label": (0, B.getAccessibleEmojiDisplayName)(this.isMe(), k, m, c),
                                            "aria-pressed": this.isMe(),
                                            children: [(0, i.jsx)("div", {
                                                className: o({
                                                    [L.burstGlow]: v && c
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(n)
                                                }
                                            }), (0, i.jsxs)("div", {
                                                children: [c ? (0, i.jsxs)(i.Fragment, {
                                                    children: [w && (0, i.jsx)(g.default, {
                                                        messageId: I.id,
                                                        emoji: m,
                                                        startPosition: M,
                                                        targetPosition: F
                                                    }), V && (0, i.jsx)(es.default, {
                                                        count: s,
                                                        emoji: m,
                                                        channelId: I.getChannelId(),
                                                        messageId: I.id,
                                                        useChatFontScaling: S,
                                                        color: n
                                                    })]
                                                }) : null, (0, i.jsx)(T.default, {
                                                    className: o({
                                                        [L.hideEmoji]: C
                                                    }),
                                                    emojiId: m.id,
                                                    emojiName: m.name,
                                                    size: "reaction",
                                                    animated: m.animated
                                                })]
                                            }), d ? null : (0, i.jsx)(W.default, {
                                                className: L.reactionCount,
                                                value: k,
                                                color: t,
                                                digitWidth: ef
                                            }), (0, i.jsx)(y.default, {
                                                count: k,
                                                reactionRef: U
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
                                className: L.hidden,
                                ...e
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new m.Timeout, this.hideTimeout = new m.Timeout, this.ctaRef = a.createRef(), this.type = $.ReactionTypes.NORMAL, this.colors = {
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
                        } = R.BurstReactionsUserExperiment.getCurrentConfig({
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
                            shouldShowFreeUserSentCoachmark: h
                        } = this.props, T = k.default.getChannel(i.getChannelId());
                        if (r || u) {
                            null === (n = this.ctaRef) || void 0 === n || null === (t = n.current) || void 0 === t || t.focus();
                            return
                        }
                        let E = i.getChannelId(),
                            R = c ? L.ReactionLocations.FORUM_TOOLBAR : L.ReactionLocations.MESSAGE;
                        if (o && !s && this.isMe()) f ? (0, L.removeReaction)(E, i.id, a, void 0, R, {
                            burst: o
                        }) : (0, L.removeReactionWithConfirmation)({
                            emoji: a,
                            channelId: E,
                            messageId: i.id,
                            reactionType: o ? $.ReactionTypes.BURST : $.ReactionTypes.NORMAL,
                            location: R,
                            isMe: this.isMe()
                        });
                        else if (!o || this.userCanBurstReact() || m) {
                            if (o && !this.userCanBurstReact()) {
                                (0, et.openOutOfBurstsModal)();
                                return
                            } else l ? this.handleShowVerificationGate() : !s && (this.isMe() ? (0, L.removeReaction)(E, i.id, a, void 0, R) : (0, L.addReaction)(E, i.id, a, R, {
                                burst: o
                            }))
                        } else {
                            (0, P.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: el.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: (null == T ? void 0 : T.getGuildId()) != null ? eo.AnalyticsPages.GUILD_CHANNEL : eo.AnalyticsPages.DM_CHANNEL,
                                    section: null != T ? (0, B.getBurstAnalyticsSection)(T) : void 0,
                                    object: eo.AnalyticsObjects.EMOJI_REACTION_UPSELL
                                }
                            });
                            return
                        }
                        o && this.isMe() && h && ((0, q.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT))
                    }, this.handleEnter = e => {
                        let {
                            emoji: t,
                            message: n,
                            type: i,
                            reduceMotion: a,
                            animateEmoji: s,
                            autoUnfurlReactionTooltip: o
                        } = this.props, l = i === $.ReactionTypes.BURST;
                        l && !this.isReactionEventActive && !a && s && (0, L.playBurstReaction)({
                            channelId: n.getChannelId(),
                            messageId: n.id,
                            emoji: t,
                            key: Z.BurstReactionEffectSource.HOVER
                        }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(l ? 750 : o ? 200 : 500, this.showTooltip, !1)
                    }, this.handleEnterTooltip = () => {
                        this.isReactionEventActive = !0, this.handleShowTooltip()
                    }, this.handleShowTooltip = () => {
                        this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), w.default.addChangeListener(this.updateTooltipText))
                    }, this.showTooltip = () => {
                        this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
                    }, this.handleLeave = () => {
                        this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), w.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
                    }, this.hideTooltip = () => {
                        this.setState({
                            shouldShowTooltip: !1
                        }), this.hasShownTooltip && J.default.track(eo.AnalyticEvents.CLOSE_POPOUT, {
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
                        } = this.props, i = (0, ea.getReactionTooltipText)(e, t, n), a = this.isKeyboardNavigation ? i : (0, ea.getReactionTooltipText)(e, t, n, eo.NOOP);
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
                        } = this.props, s = k.default.getChannel(n.getChannelId()), o = F.default.getGuild(null == s ? void 0 : s.getGuildId());
                        return a && null != o ? (0, i.jsx)(x.default, {
                            ctaRef: this.ctaRef,
                            type: x.LurkerModeUpsellPopoutTypes.REACTIONS,
                            guild: o,
                            closePopout: t
                        }) : (0, i.jsx)(i.Fragment, {})
                    }, this.renderEmojiDetails = () => {
                        let e = this.props.emoji;
                        return null != e.id && (0, i.jsx)(e_, {
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
                            let i = k.default.getChannel(t.getChannelId());
                            if (null == i) return;
                            this.handleLeave();
                            let a = r ? $.ReactionTypes.BURST : $.ReactionTypes.NORMAL;
                            eh(i, t, {
                                emoji: e,
                                reactionType: a
                            })
                        }, E = "string" == typeof d ? "" === d.trim() : null == d, R = () => E || null == d ? null : (0, i.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            className: em.reactionTooltipText,
                            "aria-label": d,
                            children: d
                        });
                        if (n === $.ReactionTypes.BURST) {
                            let t = G.default.getCurrentUser(),
                                n = (0, B.useTooltipReplenishmentMessage)(),
                                r = c ? (0, X.isPremium)(t) : null != a && a > 0;
                            return (0, i.jsxs)(f.Dialog, {
                                className: em.reactionTooltip,
                                onMouseEnter: this.handleEnterTooltip,
                                onMouseLeave: this.handleLeave,
                                children: [(0, i.jsxs)(h.Clickable, {
                                    className: em.burstReactionTooltipInner,
                                    onClick: m,
                                    children: [(0, i.jsxs)("div", {
                                        className: o(em.burstReactionTooltipMessage, {
                                            [em.burstReactionTooltipSpacer]: u
                                        }),
                                        children: [(0, i.jsx)(T.default, {
                                            className: em.reactionTooltipEmoji,
                                            emojiId: e.id,
                                            emojiName: e.name,
                                            animated: e.animated,
                                            size: this.props.emojiSize
                                        }), R()]
                                    }), u && (0, i.jsxs)("div", {
                                        className: em.burstReactionTooltipPrompt,
                                        children: [(0, X.isPremium)(t) && (0, i.jsx)(Y.default, {
                                            className: em.burstReactionTooltipNitroIcon,
                                            color: K.GradientCssUrls.PREMIUM_TIER_2
                                        }), r ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)(h.Text, {
                                                variant: "text-sm/normal",
                                                className: em.reactionTooltipText,
                                                "aria-label": "super reaction tooltip cta",
                                                children: s ? er.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED : er.default.Messages.SUPER_REACTION_TOOLTIP_CTA
                                            }), !c && (0, i.jsx)(W.default, {
                                                className: em.burstAnimatedCounter,
                                                value: null != a ? a : 0,
                                                animationSpeed: 600,
                                                animationColor: null == l ? void 0 : l.accentColor,
                                                formatString: e => er.default.Messages.BURST_REACTION_TOOLTIP_CTA_LEFT.format({
                                                    n: e.toString()
                                                })
                                            })]
                                        }) : (0, i.jsx)(i.Fragment, {
                                            children: (0, X.isPremium)(t) ? (0, i.jsx)(h.Text, {
                                                variant: "text-sm/normal",
                                                "aria-label": "super reaction tooltip replenishment message",
                                                children: n
                                            }) : (0, i.jsx)(i.Fragment, {
                                                children: !this.isKeyboardNavigation && (0, i.jsxs)("div", {
                                                    children: [(0, i.jsx)(h.Text, {
                                                        variant: "text-sm/normal",
                                                        "aria-label": "super reaction tooltip upsell",
                                                        children: er.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                                    }), (0, i.jsx)(U.default, {
                                                        subscriptionTier: el.PremiumSubscriptionSKUs.TIER_2,
                                                        buttonText: er.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                                        className: em.burstReactionTooltipUpsellCta,
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
                            className: em.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, i.jsx)(h.Clickable, {
                                onClick: m,
                                children: (0, i.jsxs)("div", {
                                    className: em.reactionTooltipInner,
                                    children: [(0, i.jsx)(T.default, {
                                        className: em.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), R()]
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
                        let n = k.default.getChannel(e.getChannelId()),
                            i = F.default.getGuild(null == n ? void 0 : n.getGuildId());
                        null != i && (0, N.openMemberVerificationModal)(i.id)
                    }, this.handleSetReactionRef = e => {
                        this.setState({
                            reactionRef: e
                        })
                    }, this.handleDismissCoachmark = () => {
                        (0, q.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
                    }, this.trackReactionTooltipViewed = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: n
                        } = this.props, i = G.default.getCurrentUser(), a = k.default.getChannel(t.getChannelId()), s = n === $.ReactionTypes.BURST, o = (0, X.isPremium)(i), l = s ? el.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : el.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
                        if (s && !this.userCanBurstReact() && !o && (l = el.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), _.default.trackWithMetadata(eo.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                                type: l,
                                expression_id: e.id,
                                expression_name: e.name,
                                is_animated: e.animated,
                                is_custom: null != e.id,
                                nonce: this.nonce
                            }), s && null != a && !o && !this.userCanBurstReact()) J.default.track(eo.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: el.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == a ? void 0 : a.getGuildId()) != null ? eo.AnalyticsPages.GUILD_CHANNEL : eo.AnalyticsPages.DM_CHANNEL,
                                section: (0, B.getBurstAnalyticsSection)(a),
                                object: eo.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    }
                }
            }
            eE.defaultProps = {
                emojiSize: "jumbo"
            };
            let eR = a.memo(e => {
                    let {
                        type: t,
                        burst_colors: n,
                        message: a,
                        emoji: s
                    } = e, o = t === $.ReactionTypes.BURST, {
                        enabled: l,
                        hasBurstShake: r,
                        hasBurstGlow: u,
                        hasSendAnimation: m,
                        hasUnlimited: f
                    } = (0, R.useBurstReactionsExperiment)(), {
                        autoUnfurlReactionTooltip: h
                    } = (0, v.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }), T = (0, A.useEmojiColorPalette)(o && null != n ? n : []), E = (0, c.useStateFromStores)([Z.default], () => void 0 !== Z.default.getEffectForEmojiId(a.getChannelId(), a.id, s)), _ = (0, c.useStateFromStores)([p.default], () => p.default.useReducedMotion), g = D.AnimateEmoji.useSetting(), I = (0, S.isDismissibleContentDismissed)(d.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), [C, O] = (0, c.useStateFromStoresArray)([Q.default], () => [Q.default.remainingBurstCurrency, Q.default.emojiReactionToTargetForCoachmark]), N = G.default.getCurrentUser(), M = (0, X.isPremium)(N), j = (0, S.isDismissibleContentDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT), x = l && !(0, X.isNewUser)(N) && C > 0 && !j && null != O && s.id === O.id && s.name === O.name;
                    x && M && ((0, q.toggleFreeUserSentPopout)(null), (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT));
                    let y = (0, c.useStateFromStores)([Z.default], () => Z.default.getReactionPickerAnimation(a.id, s.name, s.id)),
                        U = o && (E || null != y && m);
                    return (0, i.jsx)(eE, {
                        ...e,
                        colors: T,
                        isBurstReaction: o,
                        hideEmoji: U,
                        remainingBurstCurrency: C,
                        userHasPremium: M,
                        burstReactionsEnabled: l,
                        reduceMotion: _,
                        animateEmoji: g,
                        hasDismissedRemoveModal: I,
                        shouldShowFreeUserSentCoachmark: x,
                        onRenderFreeUserSentPopout: () => (0, i.jsx)(b.default, {}),
                        hasBurstShake: r,
                        hasBurstGlow: u,
                        animationStartPosition: y,
                        hasBurstSendAnimation: m,
                        hasUnlimitedBurstReactions: f,
                        autoUnfurlReactionTooltip: h
                    })
                }),
                ep = e => {
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
                    (0, O.useTrackOpenPopout)({
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
                                className: eu.reactionEmojiDetailsUnfurlGuildDetails,
                                children: (0, i.jsx)(en.GuildDetails, {
                                    expressionSourceGuild: a,
                                    hasJoinedExpressionSourceGuild: s,
                                    isDisplayingJoinGuildButtonInPopout: r.type === ee.EmojiPopoutType.JOIN_GUILD
                                })
                            }), (0, i.jsx)(en.EmojiPopoutList, {
                                emojiId: n,
                                expressionSourceGuild: a,
                                hasJoinedEmojiSourceGuild: s,
                                onClose: o,
                                popoutData: r,
                                packCollectionData: l,
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
                e_ = e => {
                    var t;
                    let {
                        emojiId: n,
                        refreshPositionKey: s,
                        onClose: l,
                        nonce: r
                    } = e, {
                        joinedEmojiSourceGuild: u
                    } = (0, c.useStateFromStoresObject)([I.default, F.default], () => {
                        let e = I.default.getCustomEmojiById(n);
                        return {
                            joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === C.EmojiTypes.GUILD ? F.default.getGuild(null == e ? void 0 : e.guildId) : void 0
                        }
                    }), [d, m] = a.useState(void 0), [f, T] = a.useState(!1), [E, R] = a.useState(!1), [p, _] = a.useState(!1), S = null != u, g = (0, M.usePackCollectionData)({
                        expressionSourceGuild: d
                    }), A = g.autoUnfurlReactionTooltip, O = null !== (t = null == d ? void 0 : d.isDiscoverable()) && void 0 !== t && t, N = V.default.getGuildId(), v = null != N && (N === (null == d ? void 0 : d.id) || N === (null == u ? void 0 : u.id)), x = (0, ee.getEmojiPopoutData)({
                        isPremium: g.isPremium,
                        hasJoinedEmojiSourceGuild: S,
                        isDiscoverable: O,
                        packCollectionData: g,
                        emojiComesFromCurrentGuild: v,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1,
                        isRoleSubscriptionEmoji: !1,
                        shouldHideRoleSubscriptionCTA: !1
                    });
                    a.useEffect(() => {
                        let e = !f,
                            t = !A || p;
                        if (e && t) return;
                        let i = async () => {
                            s(), R(!0);
                            let e = await j.default.getGuildFromEmojiId(n);
                            m(e), R(!1), _(!0), s()
                        };
                        i()
                    }, [n, A, f, p, s]);
                    let y = !g.viewAndUseEnabled || S;
                    if (y) return null;
                    let b = () => {
                            T(!f)
                        },
                        U = () => {
                            let e = er.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                            return (0, i.jsxs)(h.Clickable, {
                                onClick: b,
                                className: eu.reactionEmojiDetailsClickable,
                                children: [(0, i.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "none",
                                    "aria-label": e,
                                    children: e
                                }), (0, i.jsx)(z.default, {
                                    width: 16,
                                    height: 16,
                                    className: o(eu.reactionEmojiDetailsArrow, {
                                        [eu.reactionEmojiDetailsArrowCollapsed]: !f
                                    })
                                })]
                            })
                        },
                        P = f && void 0 !== d,
                        L = () => (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: eu.reactionEmojiDetailsDivider
                            }), null != x.emojiDescription && x.type !== ee.EmojiPopoutType.UNAVAILABLE && (0, i.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                "aria-label": x.type,
                                children: x.emojiDescription
                            })]
                        });
                    return A ? (0, i.jsxs)("div", {
                        children: [p ? L() : null, E ? (0, i.jsx)(ei.PopoutLoadingAnimation, {
                            className: eu.emojiDetailsLoader
                        }) : p && (0, i.jsx)(ep, {
                            emojiId: n,
                            expressionSourceGuild: d,
                            hasJoinedExpressionSourceGuild: S,
                            onClose: l,
                            popoutData: x,
                            packCollectionData: g,
                            currentGuildId: N,
                            nonce: r
                        })]
                    }) : (0, i.jsxs)("div", {
                        children: [P ? L() : U(), E ? (0, i.jsx)(ei.PopoutLoadingAnimation, {
                            className: eu.emojiDetailsLoader
                        }) : P && (0, i.jsx)(ep, {
                            emojiId: n,
                            expressionSourceGuild: d,
                            hasJoinedExpressionSourceGuild: S,
                            onClose: l,
                            popoutData: x,
                            packCollectionData: g,
                            currentGuildId: N,
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
                    return R
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
                f = n("569512"),
                h = n("941723"),
                T = n("256346");
            (i = a || (a = {}))[i.NORMAL = 16] = "NORMAL", i[i.LARGE = 32] = "LARGE";
            let E = async e => {
                var t;
                let {
                    effect: n
                } = e, i = await (0, f.getBurstAnimation)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : "", n.emoji.name), a = await (0, h.getResizedAnimation)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
                return a.assets[0].p = n.url, a
            };

            function R(e) {
                let {
                    className: t,
                    effect: n,
                    onComplete: i,
                    emojiSize: l = a.NORMAL
                } = e, u = o.useRef(null), f = l * h.ANIMATION_TO_EMOJI_RATIO, R = (f + l) / 2;
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
                    className: T.effectsWrapper,
                    children: (0, s.jsx)("div", {
                        className: r(T.effect, t),
                        style: {
                            transform: "translateY(".concat(R, "px)"),
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
                    return R
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
                h = n("941723"),
                T = n("981937"),
                E = n("205591"),
                R = a.memo(function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: R,
                        useChatFontScaling: p,
                        color: _,
                        count: S
                    } = e, {
                        hasPlayRandomAnimations: g
                    } = (0, l.useBurstReactionsExperiment)(null, !1), I = (0, s.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, n, R)), C = p ? E : T, A = a.useMemo(() => (0, h.buildEffect)(R, _, t, {
                        key: I,
                        messageId: n
                    }), [_, I, R, t, n]), [O, N] = a.useState(!1), v = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), M = c.AnimateEmoji.useSetting(), j = a.useCallback(() => {
                        o.default.dispatch({
                            type: "BURST_REACTION_EFFECT_CLEAR",
                            channelId: t,
                            messageId: n,
                            emoji: R
                        })
                    }, [R, t, n]);
                    return (a.useEffect(() => {
                        let e = () => {
                            if (O) return;
                            let e = (0, m.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(n).concat(R.name)),
                                i = e % 10;
                            (i += S > 4 ? 4 : S - 1) > 7 && (N(!0), (0, u.playBurstReaction)({
                                channelId: t,
                                messageId: n,
                                emoji: R,
                                key: d.BurstReactionEffectSource.RANDOM
                            }))
                        };
                        if (O || !g || v && !M || !M) return;
                        e();
                        let i = setInterval(e, 5e3);
                        return () => {
                            clearInterval(i)
                        }
                    }, [M, t, S, R, R.name, g, O, n, v]), null == I) ? null : (0, i.jsx)(f.default, {
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
                h = n("49111"),
                T = n("782340"),
                E = n("825746"),
                R = n("54338"),
                p = () => {
                    let {
                        analyticsLocations: e
                    } = (0, r.default)();
                    return (0, i.jsx)(l.Dialog, {
                        children: (0, i.jsxs)("div", {
                            className: E.burstReactionTooltipCoachmark,
                            children: [(0, i.jsx)("img", {
                                src: R,
                                alt: ""
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/bold",
                                children: T.default.Messages.SUPER_REACTIONS_CONGRATS_HEADER
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.SUPER_REACTIONS_CONGRATS_DESCRIPTION.format({
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
                                    children: T.default.Messages.DISMISS
                                }), (0, i.jsx)(l.Button, {
                                    autoFocus: !0,
                                    className: s(E.burstReactionTooltipCoachmarkButton, E.burstReactionTooltipCoachmarkCTA),
                                    color: l.Button.Colors.CUSTOM,
                                    look: l.Button.Looks.FILLED,
                                    onClick: () => {
                                        let t = {
                                            page: h.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS
                                        };
                                        (0, d.default)({
                                            initialPlanId: null,
                                            subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                                            analyticsObject: t,
                                            analyticsLocations: e
                                        }), (0, c.toggleFreeUserSentPopout)(null), (0, u.markDismissibleContentAsDismissed)(o.DismissibleContent.SUPER_REACTIONS_FREE_USER_FIRST_SENT)
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
                h = n("277064");

            function T(e) {
                var t, n;
                let {
                    onClose: a,
                    analyticsSource: T,
                    ...E
                } = e, {
                    hasUnlimited: R
                } = (0, o.useBurstReactionsExperiment)(null, !1), p = R ? m.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY : m.default.Messages.SUPER_REACTIONS_UPSELL_BODY_LAUNCH, _ = p.format({
                    onClick: () => {
                        s.default.open(d.UserSettingsSections.PREMIUM), a()
                    }
                }), S = (0, r.usePremiumTrialOffer)(), g = (0, l.usePremiumDiscountOffer)();
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
                    return x
                },
                removeEmojiReactions: function() {
                    return y
                },
                removeReaction: function() {
                    return b
                },
                removeReactionWithConfirmation: function() {
                    return P
                },
                setGuildBurstPreview: function() {
                    return L
                },
                clearGuildBurstPreview: function() {
                    return B
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
                h = n("875978"),
                T = n("263024"),
                E = n("271938"),
                R = n("377253"),
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

            function N(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: i,
                    userId: a,
                    useTypeEndpoint: s = !1,
                    type: o = h.ReactionTypes.NORMAL
                } = e, l = null != i.id ? "".concat(i.name, ":").concat(i.id) : i.name;
                return null == a ? I.Endpoints.REACTIONS(t, n, l) : s ? I.Endpoints.REACTION_WITH_TYPE(t, n, l, a, o) : I.Endpoints.REACTION(t, n, l, a)
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
                    url: N({
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
                        let a = R.default.getMessage(e, t);
                        return null != a && a.userHasReactedWithEmoji(n, i)
                    }(e, t, n, r)) {
                    u.default.show({
                        title: C.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                        body: C.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                        confirmText: C.default.Messages.GOT_IT
                    });
                    return
                }
                let p = await U(n, r);
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
                    r ? (l.AccessibilityAnnouncer.announce(E ? C.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
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
                    })) : l.AccessibilityAnnouncer.announce(C.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
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
                    }), r ? l.AccessibilityAnnouncer.announce(E ? C.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                        name: n.name
                    }) : C.default.Messages.BURST_REACTION_ADD_ERROR_A11Y.format({
                        name: n.name,
                        n: f.default.remainingBurstCurrency
                    })) : l.AccessibilityAnnouncer.announce(C.default.Messages.REACTION_ADD_ERROR_A11Y.format({
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
            async function x(e, t, n) {
                let i = null != n && !!n.isRetry;
                await T.default.unarchiveThreadIfNecessary(e), s.default.delete({
                    url: I.Endpoints.REMOVE_REACTIONS(e, t),
                    oldFormErrors: !0
                }).catch(n => {
                    A(n, () => x(e, t, {
                        isRetry: !0
                    }), {
                        isRetry: i
                    })
                })
            }
            async function y(e, t, n, i) {
                let a = null != i && !!i.isRetry;
                await T.default.unarchiveThreadIfNecessary(e);
                let o = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
                s.default.delete({
                    url: I.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, o),
                    oldFormErrors: !0
                }).catch(i => {
                    A(i, () => y(e, t, n, {
                        isRetry: !0
                    }), {
                        isRetry: a
                    })
                })
            }
            async function b(e, t, n, i) {
                let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.MESSAGE,
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
                        location: o,
                        burst: u
                    },
                    oldFormErrors: !0
                }).then(() => {
                    (null == r ? void 0 : r.burst) ? l.AccessibilityAnnouncer.announce(C.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    })): l.AccessibilityAnnouncer.announce(C.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(async a => {
                    if (A(a, () => b(e, t, n, i, o, {
                            burst: u,
                            isRetry: !0
                        }), {
                            isRetry: c
                        })) {
                        let a = await U(n, u);
                        O("MESSAGE_REACTION_ADD", e, t, n, {
                            userId: i,
                            burst: u,
                            colors: a
                        }), (null == r ? void 0 : r.burst) ? l.AccessibilityAnnouncer.announce(C.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        })) : l.AccessibilityAnnouncer.announce(C.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        }))
                    }
                })
            }
            async function U(e, t) {
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
                } = e, u = a === h.ReactionTypes.BURST, m = () => {
                    b(t, n, i, s, l, {
                        burst: u
                    })
                }, f = (0, d.isDismissibleContentDismissed)(o.DismissibleContent.BURST_REACTIONS_REMOVE_MODAL), {
                    hasUnlimited: T
                } = c.BurstReactionsUserExperiment.getCurrentConfig({
                    location: "removeReactionWithConfirmation"
                }, {
                    autoTrackExposure: !1
                });
                u && r && !f && !T ? (0, g.default)(m) : m()
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
                    burst: s,
                    reactionType: l
                } = e, r = null != l ? l : s ? o.ReactionTypes.BURST : o.ReactionTypes.NORMAL, u = m.ensure(n, a, r);
                if ("MESSAGE_REACTION_ADD" === t) {
                    let e = c.default.getUser(i);
                    null != e && (u.users[i] = e)
                } else delete u.users[i]
            }
            class h extends i.default.Store {
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
                o = n("884691"),
                l = n("917351"),
                r = n.n(l),
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
            class f extends o.PureComponent {
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
                    let o = Math.max(e, t);
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
                                minWidth: this.getMinWidth(o)
                            },
                            children: this.padValue(o)
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