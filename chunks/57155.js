            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ee
                }
            }), n("222007"), n("424973"), n("860677"), n("70102");
            var a = n("37983"),
                l = n("884691"),
                r = n("414456"),
                i = n.n(r),
                o = n("627445"),
                s = n.n(o),
                u = n("917351"),
                c = n.n(u),
                d = n("509043"),
                f = n("446674"),
                R = n("819855"),
                m = n("77078"),
                E = n("430568"),
                h = n("145079"),
                A = n("87657"),
                T = n("206230"),
                g = n("867805"),
                _ = n("584375"),
                S = n("430475"),
                O = n("390236"),
                p = n("185014"),
                I = n("875978"),
                M = n("512306"),
                N = n("941723"),
                C = n("166257"),
                y = n("432173"),
                v = n("300322"),
                b = n("161778"),
                j = n("42203"),
                U = n("26989"),
                x = n("486996"),
                D = n("377253"),
                w = n("957255"),
                B = n("27618"),
                L = n("697218"),
                F = n("145131"),
                k = n("945330"),
                P = n("315102"),
                Y = n("402671"),
                G = n("387111"),
                H = n("441823"),
                V = n("49111"),
                z = n("782340"),
                J = n("324673"),
                q = n("926622");

            function K(e) {
                return null == e.id ? g.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }
            let W = e => {
                let {
                    emoji: t,
                    channelId: n,
                    messageId: r
                } = e, [o, s] = l.useState(!0), [u, c] = l.useState([]), d = l.useMemo(() => {
                    if (null == u || u.length < 1) return;
                    let e = (0, N.buildEffect)(t, u[0], n, {
                        emojiSize: M.BurstReactionSize.LARGE,
                        messageId: r
                    });
                    return (0, a.jsx)(M.default, {
                        className: J.effect,
                        effect: e,
                        emojiSize: M.BurstReactionSize.LARGE,
                        onComplete: () => s(!1)
                    })
                }, [u, t, n, r]);
                return l.useEffect(() => {
                    let e = !1;
                    return s(!0), !async function() {
                        let n = await (0, Y.getEmojiColors)(t);
                        Array.isArray(n) && n.length > 0 && !e && c(n)
                    }(), () => {
                        e = !0
                    }
                }, [t]), (0, a.jsxs)("div", {
                    className: J.burstEmojiSection,
                    children: [d, (0, a.jsx)(E.default, {
                        className: i(J.burstEmoji, {
                            [J.hideEmoji]: o
                        }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction"
                    }), (0, a.jsx)(m.Text, {
                        variant: "text-md/medium",
                        children: K(t)
                    })]
                })
            };
            class X extends l.PureComponent {
                render() {
                    let {
                        emoji: e,
                        count: t,
                        isSelected: n,
                        setSelected: l,
                        reactionType: r,
                        colors: o
                    } = this.props, s = K(e), u = function(e, t, n, l) {
                        let r = null == e.id ? Y.default.getURL(e.name) : P.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: 24
                        });
                        return null != r && "" !== r ? (0, a.jsx)("img", {
                            className: n,
                            src: r,
                            alt: e.name
                        }) : (0, a.jsx)("span", {
                            className: l,
                            children: e.name
                        })
                    }(e, 24, J.emoji, i(J.emoji, J.emojiText)), c = r === I.ReactionTypes.BURST, f = c ? z.default.Messages.BURST_REACTION_REACTORS_A11Y : z.default.Messages.REACTION_REACTORS_A11Y, R = f.format({
                        name: s,
                        n: t
                    }), E = {}, h = {};
                    if (c) {
                        let {
                            backgroundColor: e = "",
                            opacity: t = 1,
                            accentColor: a = ""
                        } = null != o ? o : {};
                        if (h.color = a, n) {
                            var A;
                            E.background = null !== (A = (0, d.hex2rgb)(e, t)) && void 0 !== A ? A : ""
                        }
                    }
                    return (0, a.jsx)(m.Tooltip, {
                        position: "left",
                        text: s,
                        children: o => {
                            let {
                                onMouseEnter: s,
                                onMouseLeave: c
                            } = o;
                            return (0, a.jsxs)(m.Clickable, {
                                className: i({
                                    [J.reactionDefault]: !n,
                                    [J.reactionSelected]: n
                                }),
                                "aria-label": R,
                                onClick: () => l({
                                    emoji: e,
                                    reactionType: r
                                }),
                                onMouseEnter: s,
                                onMouseLeave: c,
                                style: E,
                                children: [u, (0, a.jsx)(m.Text, {
                                    variant: "text-sm/bold",
                                    style: h,
                                    children: t
                                })]
                            })
                        }
                    })
                }
            }

            function Z(e) {
                let {
                    emoji: t,
                    user: n,
                    message: l,
                    channel: r,
                    guildId: i,
                    reactionType: o,
                    onRemoveReactor: u,
                    disableManage: c = !1
                } = e, d = L.default.getCurrentUser(), R = (0, f.useStateFromStores)([L.default], () => L.default.getUser(n.id), [n]);
                s(null != d, "Reactor: currentUser cannot be undefined");
                let E = (0, v.useIsActiveChannelOrUnarchivableThread)(r),
                    T = (0, f.useStateFromStores)([w.default], () => w.default.can(V.Permissions.MANAGE_MESSAGES, r) && E),
                    g = T || d.id === n.id,
                    _ = (0, f.useStateFromStores)([U.default, j.default, B.default], () => G.default.getName(i, r.id, n));
                return (0, a.jsxs)(F.default, {
                    className: J.reactorDefault,
                    onContextMenu: e => (0, H.openUserContextMenu)(e, n, r),
                    align: F.default.Align.CENTER,
                    children: [(0, a.jsx)(F.default.Child, {
                        wrap: !0,
                        grow: 0,
                        shrink: 0,
                        className: q.marginReset,
                        children: (0, a.jsx)(A.default, {
                            user: null != R ? R : n,
                            size: m.AvatarSizes.SIZE_24
                        })
                    }), (0, a.jsx)(F.default.Child, {
                        children: (0, a.jsxs)(m.Text, {
                            tag: "strong",
                            variant: "text-md/normal",
                            className: J.name,
                            children: [null != _ && "" !== _ && (0, a.jsx)("span", {
                                className: n.isPomelo() ? "" : J.nickname,
                                children: _
                            }), (0, a.jsx)(h.default, {
                                user: n,
                                className: null != _ && "" !== _ ? J.tagFaded : null,
                                usernameClass: J.username,
                                discriminatorClass: J.discriminator,
                                forceUsername: !0
                            })]
                        })
                    }), !c && g && (0, a.jsx)(m.Clickable, {
                        onClick: function() {
                            C.removeReactionWithConfirmation({
                                emoji: t,
                                userId: n.id,
                                channelId: r.id,
                                messageId: l.id,
                                reactionType: o,
                                isMe: (null == d ? void 0 : d.id) === n.id
                            }), null == u || u()
                        },
                        children: (0, a.jsx)(k.default, {
                            width: 16,
                            height: 16,
                            className: J.remove
                        })
                    })]
                })
            }
            class Q extends l.PureComponent {
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
                        lastId: a
                    } = this.state;
                    this.setState({
                        loadingMore: !0
                    }), C.getReactors({
                        channelId: e.getChannelId(),
                        messageId: e.id,
                        emoji: t.emoji,
                        limit: V.DEFAULT_NUM_REACTION_USERS,
                        after: a,
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
                        message: l,
                        reactionType: r
                    } = this.props, i = [];
                    return 0 === t.length && this.state.loadingMore ? i.push(length) : (i.push(t.length), e && i.push(1)), (0, a.jsxs)("div", {
                        className: J.reactorsContainer,
                        children: [r === I.ReactionTypes.BURST && (0, a.jsx)(W, {
                            emoji: n.emoji,
                            channelId: l.getChannelId(),
                            messageId: l.id
                        }), (0, a.jsx)(m.List, {
                            className: J.reactors,
                            fade: !0,
                            ref: this.scrollerRef,
                            sections: i,
                            sectionHeight: 0,
                            rowHeight: this.getRowHeight,
                            renderRow: this.renderRow,
                            renderSection: this.renderSection,
                            onScroll: e ? this.handleScroll : void 0
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = l.createRef(), this.state = {
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
                            message: l,
                            guildId: r,
                            channel: i,
                            reaction: o,
                            reactors: s,
                            reactionType: u,
                            disableManage: c
                        } = this.props, d = s[n];
                        if (1 === t) return 0 === n ? (0, a.jsx)(m.Spinner, {
                            className: J.spinnerMore
                        }, "hasMore") : null;
                        return 0 === s.length && this.state.loadingMore ? (0, a.jsx)(m.Spinner, {
                            className: J.spinner
                        }, "loadingMore") : null != d && (0, a.jsx)(Z, {
                            message: l,
                            emoji: o.emoji,
                            guildId: r,
                            channel: i,
                            user: d,
                            reaction: o,
                            reactionType: u,
                            disableManage: c
                        }, d.id)
                    }
                }
            }
            let $ = f.default.connectStores([x.default], e => {
                let {
                    message: t,
                    reaction: n,
                    reactionType: a
                } = e, l = x.default.getReactions(t.getChannelId(), t.id, n.emoji, V.DEFAULT_NUM_REACTION_USERS, a);
                if (null == l) return {
                    reactors: [],
                    hasMore: !1
                };
                let r = Object.values(l),
                    i = a === I.ReactionTypes.BURST ? n.burst_count : n.count,
                    o = i > r.length;
                return {
                    reactors: r,
                    hasMore: o
                }
            })(Q);

            function ee(e) {
                var t;
                let {
                    message: n,
                    selectedReaction: r,
                    disableManage: i = !1,
                    disableTabs: o = !1,
                    onClose: s,
                    transitionState: u,
                    "aria-label": c = z.default.Messages.REACTIONS
                } = e, d = (0, f.useStateFromStores)([j.default], () => j.default.getChannel(n.getChannelId())), E = null == d ? void 0 : d.getGuildId(), h = (0, f.useStateFromStores)([D.default, S.default, p.default], () => {
                    var e, t, a;
                    let l = null !== (a = null !== (t = D.default.getMessage(n.getChannelId(), n.id)) && void 0 !== t ? t : null === (e = S.default.getMessage(n.id)) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== a ? a : null != E ? p.default.getCachedMessage(E, n.getChannelId(), n.id) : void 0;
                    return null != l ? l.reactions : []
                }, [n, E]);
                let A = (t = h, l.useMemo(() => {
                        let e = [];
                        return t.forEach(t => {
                            t.burst_count > 0 && e.push({
                                ...t,
                                count: 0
                            }), t.count > 0 && e.push({
                                ...t,
                                burst_count: 0
                            })
                        }), e.sort((e, t) => {
                            let n = e.burst_count > 0 ? e.burst_count : e.count,
                                a = t.burst_count > 0 ? t.burst_count : t.count;
                            return a - n
                        }), e
                    }, [t])),
                    g = A[0],
                    M = null != g ? {
                        emoji: g.emoji,
                        reactionType: g.burst_count > 0 ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL
                    } : null,
                    [N, C] = function(e, t, n) {
                        let [a, r] = l.useState(null != e ? e : t);
                        return l.useEffect(() => {
                            if (null != a) {
                                let e = n.find(e => {
                                    let t = null != e.me_vote ? I.ReactionTypes.VOTE : e.burst_count > 0 ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL;
                                    return (0, y.emojiEquals)(e.emoji, a.emoji) && t === a.reactionType
                                });
                                null == e && r(t)
                            }
                        }, [a, r, n, t]), [a, r]
                    }(r, M, h),
                    v = l.useMemo(() => {
                        var e;
                        return null == N ? null : null !== (e = h.find(e => (0, y.emojiEquals)(e.emoji, N.emoji))) && void 0 !== e ? e : null
                    }, [h, N]),
                    U = (0, f.useStateFromStores)([T.default], () => T.default.saturation),
                    x = (0, f.useStateFromStores)([b.default], () => (0, R.isThemeDark)(b.default.theme));
                if (l.useEffect(() => {
                        (0 === h.length || null == N && null == v) && setImmediate(s)
                    }, [s, h.length, v, N]), null == N || null == v) return (0, a.jsx)(m.Spinner, {});
                if (null == d) throw Error("MessageReactions.render: Message does not have a channelId");
                return (0, a.jsx)(O.default.Provider, {
                    value: null != E ? E : void 0,
                    children: (0, a.jsxs)(m.ModalRoot, {
                        "aria-label": c,
                        transitionState: u,
                        size: m.ModalSize.DYNAMIC,
                        className: J.container,
                        children: [o ? null : (0, a.jsx)(m.Scroller, {
                            className: J.scroller,
                            fade: !0,
                            children: A.map(e => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, a.jsx)(X, {
                                    isSelected: et(N, e, n ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL),
                                    setSelected: C,
                                    reactionType: n ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL,
                                    emoji: e.emoji,
                                    count: n ? e.burst_count : e.count,
                                    colors: null != e.burst_colors ? (0, _.buildEmojiColorPalette)(e.burst_colors, U, x) : void 0
                                }, "".concat(n ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
                            })
                        }), (0, a.jsx)($, {
                            message: n,
                            reaction: v,
                            guildId: E,
                            channel: d,
                            reactionType: N.reactionType,
                            disableManage: i
                        })]
                    })
                })
            }
            let et = (e, t, n) => c.isEqual(e.emoji, t.emoji) && e.reactionType === n