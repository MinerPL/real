(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40958"], {
        940159: function(e, t, s) {
            "use strict";
            e.exports = s.p + "ab941e3bb3e2e650927a.svg"
        },
        517790: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6f222b93b4b971e68613.svg"
        },
        642995: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("913144"),
                a = s("599110"),
                l = s("49111"),
                i = {
                    dismissForApplicationId(e) {
                        n.default.dispatch({
                            type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
                            key: e,
                            value: !0
                        }), a.default.track(l.AnalyticEvents.CLOSE_TUTORIAL, {
                            tutorial: "activity-invite-nux-inline",
                            application_id: e,
                            acknowledged: !0
                        })
                    }
                }
        },
        125667: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return z
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                u = s.n(r),
                o = s("866227"),
                d = s.n(o),
                c = s("458960"),
                h = s("509043"),
                f = s("446674"),
                m = s("669491"),
                g = s("77078"),
                S = s("642995"),
                p = s("656723"),
                x = s("509802"),
                v = s("943551"),
                C = s("630485"),
                T = s("478025"),
                N = s("271938"),
                E = s("546463"),
                _ = s("305961"),
                I = s("957255"),
                A = s("27618"),
                F = s("101125"),
                M = s("401848"),
                O = s("191542"),
                j = s("697218"),
                y = s("471671"),
                R = s("32238"),
                w = s("599110"),
                b = s("659500"),
                L = s("449008"),
                D = s("387111"),
                P = s("49111"),
                U = s("782340"),
                k = s("883181");
            let H = [];
            class B extends a.PureComponent {
                componentDidMount() {
                    this.timeout = setTimeout(() => {
                        this.setState({
                            fadeIn: !0
                        }), this.timeout = null, this.logShownEventIfNeeded()
                    }, 100)
                }
                componentDidUpdate() {
                    this.logShownEventIfNeeded()
                }
                logShownEventIfNeeded() {
                    let e = this.props.activity.application_id;
                    null != e && -1 === H.indexOf(e) && (w.default.track(P.AnalyticEvents.SHOW_TUTORIAL, {
                        tutorial: "activity-invite-nux-inline",
                        application_id: e
                    }), H.push(e))
                }
                componentWillUnmount() {
                    null !== this.timeout && clearTimeout(this.timeout)
                }
                render() {
                    let {
                        activity: e
                    } = this.props;
                    return (0, n.jsxs)("div", {
                        className: i(k.activityInviteEducation, {
                            [k.activityInviteEducationFadeIn]: this.state.fadeIn
                        }),
                        children: [(0, n.jsx)("div", {
                            className: k.activityInviteEducationArrow
                        }), (0, n.jsx)("span", {
                            children: U.default.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
                                game: e.name,
                                dismissOnClick: this.handleDismissInviteEducation
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        fadeIn: !1
                    }, this.timeout = null, this.handleDismissInviteEducation = () => {
                        let {
                            activity: e
                        } = this.props;
                        null != e && null != e.application_id && S.default.dismissForApplicationId(e.application_id)
                    }
                }
            }

            function G(e) {
                let {
                    channel: t,
                    guild: s
                } = e;
                return (0, n.jsx)(x.default, {
                    contentTypes: [],
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: s
                        } = e;
                        return null
                    }
                })
            }
            class W extends a.PureComponent {
                componentDidMount() {
                    b.ComponentDispatch.subscribe(P.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
                }
                componentWillUnmount() {
                    b.ComponentDispatch.unsubscribe(P.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown)
                }
                getCooldownTextStyle() {
                    let {
                        color: e
                    } = this.state, {
                        baseTextColor: t,
                        activeTextColor: s
                    } = this.props, n = {
                        color: e.interpolate({
                            inputRange: [0, 1],
                            outputRange: [t, (0, h.hex2rgb)(s, .9)]
                        })
                    };
                    return n
                }
                render() {
                    let e;
                    let {
                        guildId: t,
                        activity: s,
                        showInviteEducation: a,
                        isFocused: l,
                        typingUsers: r,
                        className: o,
                        slowmodeCooldownGuess: h,
                        isBypassSlowmode: f,
                        channel: m,
                        isThreadCreation: S,
                        renderDots: p,
                        poggermodeEnabled: x,
                        isComboing: v
                    } = this.props, {
                        rateLimitPerUser: T
                    } = m, N = j.default.getCurrentUser(), E = _.default.getGuild(t), I = T > 0, F = S ? [] : u(r).keys().filter(e => e !== (null == N ? void 0 : N.id)).reject(A.default.isBlocked).map(e => j.default.getUser(e)).filter(L.isNotNullish).map(e => D.default.getName(t, this.props.channel.id, e)).value();
                    if (0 === F.length && !I && !v) return a && null != s ? (0, n.jsx)(B, {
                        activity: s,
                        isFocused: l
                    }) : (0, n.jsx)(G, {
                        channel: m,
                        guild: E
                    });
                    let M = "",
                        O = null,
                        y = "";
                    if (I) {
                        if (O = (0, n.jsx)(R.default, {
                                className: k.slowModeIcon
                            }), T >= P.Durations.HOUR) {
                            let e = Math.floor(T / P.Durations.HOUR),
                                t = Math.floor((T - e * P.Durations.HOUR) / P.Durations.MINUTE),
                                s = T - e * P.Durations.HOUR - t * P.Durations.MINUTE;
                            y = U.default.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
                                hours: e,
                                minutes: t,
                                seconds: s
                            })
                        } else if (T >= 60) {
                            let e = Math.floor(T / 60),
                                t = T - 60 * e;
                            y = U.default.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
                                minutes: e,
                                seconds: t
                            })
                        } else y = U.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                            seconds: T
                        });
                        if (!f && h > 0) {
                            let e = d.duration(h);
                            if (h > 1e3 * P.Durations.HOUR) {
                                let t = "".concat(e.minutes()).padStart(2, "0"),
                                    s = "".concat(e.seconds()).padStart(2, "0");
                                M = "".concat(e.hours(), ":").concat(t, ":").concat(s)
                            } else {
                                let t = "".concat(e.seconds()).padStart(2, "0");
                                M = "".concat(e.minutes(), ":").concat(t)
                            }
                        } else 0 === F.length && (M = f ? U.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : U.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT)
                    }
                    let [w, b, H] = F;
                    return e = 0 === F.length ? "" : 1 === F.length ? U.default.Messages.ONE_USER_TYPING.format({
                        a: w
                    }) : 2 === F.length ? U.default.Messages.TWO_USERS_TYPING.format({
                        a: w,
                        b
                    }) : 3 === F.length ? U.default.Messages.THREE_USERS_TYPING.format({
                        a: w,
                        b,
                        c: H
                    }) : U.default.Messages.SEVERAL_USERS_TYPING, (0, n.jsxs)("div", {
                        className: i(k.typing, {
                            "stop-animation": !l,
                            [k.isComboing]: x && v
                        }, o),
                        children: [(0, n.jsxs)("div", {
                            className: k.typingDots,
                            children: [F.length > 0 && !1 !== p && (0, n.jsx)(g.Dots, {
                                className: k.ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }), (0, n.jsx)("span", {
                                className: k.text,
                                "aria-live": "polite",
                                "aria-atomic": !0,
                                children: e
                            })]
                        }), I && (0, n.jsx)(g.Tooltip, {
                            text: y,
                            children: e => (0, n.jsxs)(c.default.div, {
                                style: this.getCooldownTextStyle(),
                                className: k.cooldownWrapper,
                                ...e,
                                children: [M, O]
                            })
                        }), x && v && (0, n.jsx)(C.default, {
                            channelId: m.id
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        color: new c.default.Value(0)
                    }, this.emphasizeSlowmodeCooldown = () => {
                        let {
                            color: e
                        } = this.state;
                        c.default.sequence([c.default.timing(e, {
                            toValue: 1,
                            duration: 100,
                            easing: c.default.Easing.quad
                        }), c.default.timing(e, {
                            delay: 250,
                            toValue: 0,
                            duration: 100,
                            easing: c.default.Easing.quad
                        })]).start()
                    }
                }
            }

            function z(e) {
                let {
                    channel: t,
                    isThreadCreation: s = !1,
                    ...a
                } = e, l = (0, f.useStateFromStores)([F.default], () => F.default.findActivity(e => null != e.application_id)), i = (0, f.useStateFromStores)([v.default, N.default], () => v.default.getUserCombo(N.default.getId(), t.id)), r = (0, f.useStateFromStores)([T.default, E.default], () => (0, p.default)(t, l, T.default, E.default)), u = (0, f.useStateFromStores)([M.default], () => M.default.getSlowmodeCooldownGuess(t.id, s ? M.SlowmodeType.CreateThread : M.SlowmodeType.SendMessage)), o = (0, f.useStateFromStores)([I.default], () => s ? I.default.can(P.Permissions.MANAGE_THREADS, t) : I.default.can(P.Permissions.MANAGE_CHANNELS, t) || I.default.can(P.Permissions.MANAGE_MESSAGES, t)), d = {
                    ...a,
                    baseTextColor: (0, g.useToken)(m.default.colors.INTERACTIVE_NORMAL).hex(),
                    activeTextColor: (0, g.useToken)(m.default.colors.INTERACTIVE_NORMAL).hex(),
                    showInviteEducation: r,
                    activity: l,
                    typingUsers: (0, f.useStateFromStores)([O.default], () => O.default.getTypingUsers(t.id)),
                    isFocused: (0, f.useStateFromStores)([y.default], () => y.default.isFocused()),
                    guildId: t.guild_id,
                    slowmodeCooldownGuess: u,
                    isComboing: null != i,
                    isBypassSlowmode: o,
                    channel: t,
                    isThreadCreation: s
                };
                return (0, n.jsx)(W, {
                    ...d
                })
            }
        },
        419135: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                createASTHighlighter: function() {
                    return h
                }
            });
            var n = s("917351"),
                a = s.n(n),
                l = s("111633"),
                i = s.n(l);
            let r = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

            function u(e) {
                return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
            }

            function o(e) {
                return e.toLowerCase()
            }

            function d(e) {
                return r.has(e)
            }

            function c(e) {
                return 0 === e.length
            }

            function h(e) {
                let t = new Set(a(e.split(/\W+/)).map(u).reject(c).map(o).reject(d).map(i).value());
                return e => (function e(t, s) {
                    if (Array.isArray(t)) t.forEach(t => e(t, s));
                    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
                        let e = [],
                            n = "";
                        t.content.split(/(\W+)/g).forEach(t => {
                            var a, l;
                            if (a = t, l = s, !c(a = o(u(a))) && !d(a) && l.has(i(a))) n.length > 0 && e.push({
                                type: "text",
                                content: n
                            }), e.push({
                                type: "highlight",
                                content: t
                            }), n = "";
                            else n += t
                        }), e.length > 0 && (n.length > 0 && e.push({
                            type: "text",
                            content: n
                        }), "text" === t.type ? t.content = e : t.content = [{
                            type: "text",
                            content: e
                        }])
                    } else null != t.content && e(t.content, s);
                    return t
                })(e, t)
            }
        },
        656723: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("568734"),
                a = s("871388"),
                l = s("49111");

            function i(e, t, s, i) {
                let r = null == t ? void 0 : t.application_id;
                if (null == e || null == t || !(0, a.default)(t, l.ActivityFlags.JOIN) || null == r) return !1;
                let u = i.getGame(r);
                return !(null == u || (0, n.hasFlag)(u.flags, l.ApplicationFlags.EMBEDDED)) && s.shouldShowEducation(r)
            }
        },
        339792: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useForumChannelStore: function() {
                    return g
                },
                useForumChannelStoreApi: function() {
                    return S
                }
            });
            var n = s("627445"),
                a = s.n(n),
                l = s("308503"),
                i = s("482402"),
                r = s("335710"),
                u = s("446674"),
                o = s("42203"),
                d = s("446480");
            let c = new Set,
                h = {
                    layoutType: i.ForumLayout.LIST,
                    sortOrder: r.ThreadSortOrder.CREATION_DATE,
                    tagFilter: c,
                    scrollPosition: 0
                };
            class f {
                constructor(e, t) {
                    this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
                        let s = this.get(),
                            n = this.getChannelState(e),
                            a = {
                                ...s.channelStates
                            };
                        a[e] = {
                            ...n,
                            ...t
                        }, this.set({
                            channelStates: a
                        })
                    }, this.getChannelState = e => {
                        if (null == e) return h;
                        let {
                            channelStates: t
                        } = this.get(), s = t[e];
                        if (null == s) {
                            let t = o.default.getChannel(e);
                            a(null != t, "[Forum Channel Store] The channel should not be missing."), s = {
                                layoutType: t.getDefaultLayout(),
                                sortOrder: t.getDefaultSortOrder(),
                                tagFilter: c,
                                scrollPosition: 0
                            }
                        }
                        return s
                    }, this.toggleTagFilter = (e, t) => {
                        let s = this.getChannelState(e),
                            n = new Set(s.tagFilter);
                        n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n)
                    }, this.setTagFilter = (e, t) => {
                        this.setChannelState(e, {
                            tagFilter: t
                        }), d.default.setFilterTagIds(t)
                    }, this.setSortOrder = (e, t) => {
                        this.setChannelState(e, {
                            sortOrder: t
                        }), d.default.setSortOrder(t)
                    }, this.setLayoutType = (e, t) => {
                        this.setChannelState(e, {
                            layoutType: t
                        }), d.default.setLayout(t)
                    }, this.setScrollPosition = (e, t) => {
                        this.setChannelState(e, {
                            scrollPosition: t
                        })
                    }
                }
            }
            let m = (0, l.default)((e, t) => new f(e, t)),
                g = e => {
                    let t = m(),
                        s = (0, u.useStateFromStores)([o.default], () => o.default.getChannel(e));
                    return null == s ? h : t.getChannelState(e)
                },
                S = () => m
        },
        512630: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                i = s("506838"),
                r = s("681187"),
                u = s("605160"),
                o = s("265363"),
                d = s("17264"),
                c = e => {
                    let {
                        obscureReason: t,
                        iconClassname: s
                    } = e;
                    return (0, i.match)(t).with(u.ObscureReason.EXPLICIT_CONTENT, () => (0, n.jsx)(r.ImageWarningIcon, {
                        className: l(s, d.obscuredIcon),
                        color: "white"
                    })).with(u.ObscureReason.SPOILER, () => (0, n.jsx)(o.default, {
                        className: s
                    })).otherwise(() => null)
                }
        },
        152637: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MAX_THUMBNAIL_HEIGHT: function() {
                    return en
                },
                MAX_THUMBNAIL_WIDTH: function() {
                    return ea
                },
                default: function() {
                    return el
                },
                useHighlightedChannelName: function() {
                    return er
                },
                MessageCount: function() {
                    return ed
                },
                DefaultReaction: function() {
                    return ec
                },
                MostUsedReaction: function() {
                    return eh
                },
                Facepile: function() {
                    return em
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                u = s.n(r),
                o = s("866227"),
                d = s.n(o),
                c = s("974667"),
                h = s("446674"),
                f = s("669491"),
                m = s("77078"),
                g = s("125667"),
                S = s("731898"),
                p = s("419135"),
                x = s("651693"),
                v = s("605160"),
                C = s("875978"),
                T = s("70845"),
                N = s("95045"),
                E = s("359132"),
                _ = s("933629"),
                I = s("350134"),
                A = s("845579"),
                F = s("982108"),
                M = s("42203"),
                O = s("957255"),
                j = s("27618"),
                y = s("471671"),
                R = s("738107"),
                w = s("594098"),
                b = s("505684"),
                L = s("109264"),
                D = s("93427"),
                P = s("956089"),
                U = s("811305"),
                k = s("888400"),
                H = s("339792"),
                B = s("680986"),
                G = s("612278"),
                W = s("430475"),
                z = s("994810"),
                V = s("512630"),
                Y = s("578198"),
                Z = s("136460"),
                q = s("601016"),
                K = s("810758"),
                X = s("251432"),
                Q = s("390083"),
                J = s("49111"),
                $ = s("719347"),
                ee = s("782340"),
                et = s("260177"),
                es = s("632215");
            let en = 72,
                ea = 72;
            var el = a.memo(function(e) {
                let {
                    threadId: t,
                    goToThread: s,
                    observePostVisibilityAnalytics: l,
                    overrideMedia: r,
                    className: o,
                    containerWidth: d
                } = e, {
                    channel: f,
                    isOpen: g,
                    messageCount: p,
                    firstMessage: x,
                    content: v,
                    media: C
                } = function(e) {
                    let {
                        threadId: t,
                        overrideMedia: s
                    } = e, n = (0, h.useStateFromStores)([M.default], () => M.default.getChannel(t));
                    u(null != n, "the thread should not be null here, a store must have missed an update");
                    let a = (0, h.useStateFromStores)([F.default], () => F.default.getCurrentSidebarChannelId(n.parent_id) === n.id),
                        {
                            firstMessage: l
                        } = (0, G.useFirstForumPostMessage)(n),
                        {
                            content: i,
                            firstMedia: r
                        } = (0, B.useForumPostFirstMessageMarkup)({
                            firstMessage: l
                        }),
                        {
                            messageCountText: o
                        } = (0, B.useMessageCount)(n);
                    return {
                        channel: n,
                        isOpen: a,
                        messageCount: o,
                        firstMessage: l,
                        content: i,
                        media: null != s ? s : r
                    }
                }({
                    threadId: t,
                    overrideMedia: r
                }), {
                    ref: T,
                    height: N
                } = (0, S.default)(), E = (0, Y.useForumPostComposerStore)(e => e.setCardHeight);
                a.useEffect(() => {
                    null != N && E(t, N)
                }, [N, E, t]), a.useEffect(() => {
                    null == l || l(T.current, t)
                }, [T, l, t]);
                let _ = a.useRef(null),
                    {
                        handleLeftClick: I,
                        handleRightClick: A
                    } = (0, Q.default)({
                        facepileRef: _,
                        goToThread: s,
                        channel: f
                    }),
                    {
                        role: O,
                        onFocus: j,
                        ...y
                    } = (0, c.useListItem)(t),
                    {
                        isFocused: R,
                        handleFocus: w,
                        handleBlur: b
                    } = (0, K.default)(j);
                return (0, n.jsxs)("div", {
                    ref: T,
                    "data-item-id": t,
                    onClick: I,
                    onContextMenu: A,
                    className: i(et.container, o, {
                        [et.isOpen]: g
                    }),
                    children: [(0, n.jsx)(m.Clickable, {
                        onClick: I,
                        focusProps: {
                            ringTarget: T
                        },
                        onContextMenu: A,
                        "aria-label": ee.default.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: f.name,
                            count: p
                        }),
                        className: et.focusTarget,
                        onFocus: w,
                        onBlur: b,
                        ...y
                    }), (0, n.jsxs)("div", {
                        className: et.left,
                        children: [(0, n.jsx)(m.HeadingLevel, {
                            children: (0, n.jsx)(ei, {
                                channel: f,
                                firstMessage: x,
                                content: v,
                                hasMediaAttachment: null != C,
                                containerWidth: d
                            })
                        }), (0, n.jsx)(m.FocusBlock, {
                            enabled: !R,
                            children: (0, n.jsx)(eo, {
                                channel: f,
                                firstMessage: x,
                                facepileRef: _
                            })
                        })]
                    }), (null == x ? void 0 : x.blocked) || null == C ? null : (0, n.jsx)(eg, {
                        channel: f,
                        firstMedia: C
                    })]
                })
            });

            function ei(e) {
                let {
                    channel: t,
                    firstMessage: s,
                    content: a,
                    hasMediaAttachment: l,
                    containerWidth: r
                } = e, {
                    isNew: u,
                    hasUnreads: o
                } = (0, B.useForumPostReadStates)(t), d = er(t), {
                    postTitleRef: c,
                    isNewBadgeOverflow: h
                } = (0, X.useNewBadgeOverflowAware)(u, 24, r);
                return (0, n.jsxs)("div", {
                    className: et.body,
                    children: [(0, n.jsx)(q.default, {
                        channel: t
                    }), (0, n.jsx)("div", {
                        className: i(et.header, {
                            [et.withNewBadgeOverflow]: h
                        }),
                        children: (0, n.jsxs)("div", {
                            className: et.headerText,
                            children: [(0, n.jsx)(m.Heading, {
                                variant: "heading-lg/semibold",
                                color: o ? "header-primary" : "text-muted",
                                lineClamp: 2,
                                className: et.postTitleText,
                                children: (0, n.jsxs)("span", {
                                    ref: c,
                                    children: [d, u && (0, n.jsx)("span", {
                                        className: et.newBadgeWrapper,
                                        children: (0, n.jsx)(P.TextBadge, {
                                            className: et.newBadge,
                                            color: f.default.unsafe_rawColors.BRAND_260.css,
                                            text: ee.default.Messages.NEW
                                        })
                                    })]
                                })
                            }), u && h && (0, n.jsx)(P.TextBadge, {
                                className: et.newBadge,
                                color: f.default.unsafe_rawColors.BRAND_260.css,
                                text: ee.default.Messages.NEW
                            })]
                        })
                    }), (0, n.jsx)("div", {
                        className: et.message,
                        children: (0, n.jsx)(eu, {
                            channel: t,
                            message: s,
                            content: a,
                            hasMediaAttachment: l,
                            hasUnreads: o
                        })
                    })]
                })
            }

            function er(e) {
                let t = (0, h.useStateFromStores)([z.default], () => z.default.getHasSearchResults(e.parent_id)),
                    s = (0, h.useStateFromStores)([z.default], () => z.default.getSearchQuery(e.parent_id)),
                    n = a.useMemo(() => (0, p.createASTHighlighter)(t && null != s ? s : ""), [t, s]),
                    l = a.useMemo(() => (0, N.default)({
                        content: e.name,
                        embeds: []
                    }, {
                        postProcessor: n
                    }).content, [e.name, n]);
                return l
            }
            let eu = a.memo(function(e) {
                let {
                    message: t,
                    channel: s,
                    content: a,
                    hasMediaAttachment: l,
                    hasUnreads: r
                } = e, u = (0, h.useStateFromStores)([j.default], () => null != t && j.default.isBlocked(t.author.id)), o = (0, h.useStateFromStores)([W.default], () => W.default.isLoading(s.id)), d = (0, h.useStateFromStores)([O.default], () => O.default.can(J.Permissions.MANAGE_MESSAGES, s)), c = A.RenderSpoilers.useSetting(), f = null;
                if (u) f = (0, n.jsx)(m.Text, {
                    className: et.blockedMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: ee.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
                });
                else {
                    let {
                        contentPlaceholder: e,
                        renderedContent: s
                    } = null == t ? {
                        contentPlaceholder: null,
                        renderedContent: null
                    } : (0, D.renderSingleLineMessage)(t, a, u, i(et.messageContent, es.inlineFormat, es.smallFontSize), {
                        iconClass: et.messageContentIcon,
                        iconSize: $.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                    });
                    f = null != s ? (0, n.jsx)(m.Text, {
                        variant: "text-sm/semibold",
                        color: r ? "header-secondary" : "text-muted",
                        children: s
                    }) : l ? null : (0, n.jsx)(m.Text, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: r ? "header-secondary" : "text-muted",
                        className: et.messageContent,
                        children: null == t ? o ? null : ee.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : e
                    })
                }
                return (0, n.jsxs)(b.ObscuredDisplayContext.Provider, {
                    value: (0, T.default)(c, d),
                    children: [!u && (0, n.jsx)(Z.default, {
                        channel: s,
                        message: t,
                        renderColon: null != f,
                        hasUnreads: r
                    }), (0, n.jsx)(m.FocusBlock, {
                        className: et.messageFocusBlock,
                        children: f
                    })]
                })
            });

            function eo(e) {
                let {
                    channel: t,
                    facepileRef: s,
                    firstMessage: a
                } = e, l = (0, B.useTypingUserIds)(t), i = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
                return (0, n.jsxs)("div", {
                    className: et.footer,
                    children: [i || null == a ? null : (0, n.jsx)(ec, {
                        firstMessage: a,
                        channel: t
                    }), null == a ? null : (0, n.jsx)(eh, {
                        firstMessage: a,
                        channel: t
                    }), (0, n.jsx)(ed, {
                        channel: t,
                        iconSize: 14
                    }), (0, n.jsx)("span", {
                        className: et.bullet,
                        children: "•"
                    }), l.length > 0 ? (0, n.jsxs)("div", {
                        className: et.typing,
                        children: [(0, n.jsx)(em, {
                            channel: t,
                            userIds: l,
                            facepileRef: s
                        }), (0, n.jsx)("div", {
                            className: et.dots,
                            children: (0, n.jsx)(m.Dots, {
                                themed: !0,
                                dotRadius: 2
                            })
                        }), (0, n.jsx)(g.default, {
                            channel: t,
                            className: et.typingUsers,
                            renderDots: !1
                        })]
                    }) : (0, n.jsx)(ef, {
                        channel: t
                    })]
                })
            }

            function ed(e) {
                let {
                    channel: t,
                    iconSize: s,
                    showReadState: a = !1
                } = e, {
                    messageCountText: l,
                    unreadCount: r
                } = (0, B.useMessageCount)(t);
                return (0, n.jsxs)("div", {
                    className: i(et.messageCountBox, {
                        [et.hasRead]: a && null == r
                    }),
                    children: [(0, n.jsx)("span", {
                        className: et.messageCountIcon,
                        children: (0, n.jsx)(L.default, {
                            width: s,
                            height: s
                        })
                    }), "number" == typeof l ? (0, n.jsx)(R.default, {
                        value: l,
                        digitWidth: 9,
                        className: et.messageCountText
                    }) : (0, n.jsx)("div", {
                        className: et.messageCountText,
                        children: l
                    }), null == r ? null : (0, n.jsxs)(m.Text, {
                        className: et.newMessageCount,
                        variant: "text-sm/semibold",
                        color: "text-brand",
                        children: ["(", ee.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
                            count: r
                        }), ")"]
                    })]
                })
            }

            function ec(e) {
                let {
                    firstMessage: t,
                    channel: s
                } = e, a = (0, h.useStateFromStores)([M.default], () => M.default.getChannel(s.parent_id)), l = (0, B.useDefaultReactionEmoji)(a), {
                    disableReactionCreates: i,
                    isLurking: r,
                    isPendingMember: u
                } = (0, E.default)(s);
                return null == l || i ? null : (0, n.jsx)(I.Reaction, {
                    className: et.updateReactionButton,
                    message: t,
                    readOnly: s.isArchivedLockedThread(),
                    useChatFontScaling: !1,
                    isLurking: r,
                    isPendingMember: u,
                    emoji: l,
                    hideCount: !0,
                    count: 0,
                    burst_count: 0,
                    me: !1,
                    me_burst: !1,
                    type: C.ReactionTypes.NORMAL,
                    emojiSize: "reaction"
                })
            }

            function eh(e) {
                var t;
                let {
                    firstMessage: s,
                    channel: a
                } = e, l = (0, B.useMostUsedReaction)(s), {
                    disableReactionUpdates: i,
                    isLurking: r,
                    isPendingMember: u
                } = (0, E.default)(a);
                return null == l ? null : (0, n.jsx)(I.Reaction, {
                    className: et.updateReactionButton,
                    message: s,
                    readOnly: i || a.isArchivedLockedThread(),
                    isLurking: r,
                    isPendingMember: u,
                    useChatFontScaling: !1,
                    type: l.burst_count >= l.count ? C.ReactionTypes.BURST : C.ReactionTypes.NORMAL,
                    emojiSize: "reaction",
                    ...l
                }, "".concat(null !== (t = l.emoji.id) && void 0 !== t ? t : 0, ":").concat(l.emoji.name))
            }

            function ef(e) {
                var t;
                let {
                    channel: s
                } = e, {
                    sortOrder: a
                } = (0, H.useForumChannelStore)(s.parent_id), l = (0, B.useLastActiveTimestamp)(s, a), i = null === (t = s.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, r = null == i ? null : ee.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: (0, k.dateFormat)(d(i), "LLLL")
                });
                return (0, n.jsx)(m.Tooltip, {
                    text: r,
                    tooltipClassName: et.timestampTooltip,
                    children: e => (0, n.jsx)(m.Text, {
                        className: et.activityText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        ...e,
                        children: l
                    })
                })
            }

            function em(e) {
                let {
                    channel: t,
                    userIds: s,
                    facepileRef: a
                } = e, l = (0, B.useFacepileUsers)(t, s);
                return (0, n.jsx)("div", {
                    ref: a,
                    children: (0, n.jsx)(U.default, {
                        className: et.facepile,
                        showDefaultAvatarsForNullUsers: !0,
                        guildId: t.guild_id,
                        users: l,
                        max: 5,
                        size: 16,
                        hideMoreUsers: !0,
                        showUserPopout: !0
                    })
                })
            }

            function eg(e) {
                let t, s, {
                        channel: a,
                        firstMedia: l
                    } = e,
                    r = (0, h.useStateFromStores)([y.default], () => y.default.isFocused()),
                    u = (0, x.isAnimatedImageUrl)(l.src),
                    o = A.GifAutoPlay.useSetting(),
                    [d, c] = (0, v.useShouldObscure)({
                        media: l,
                        channel: a
                    }),
                    f = (0, v.getObscuredAlt)(c),
                    {
                        src: g,
                        width: S,
                        height: p,
                        alt: C
                    } = l;
                return p > S ? s = ea : t = en, (0, n.jsx)(m.FocusBlock, {
                    enabled: !0,
                    children: (0, n.jsxs)("div", {
                        className: et.bodyMedia,
                        onClick: e => e.stopPropagation(),
                        children: [g.startsWith("data:") ? (0, n.jsx)(w.default, {
                            src: g,
                            maxHeight: t,
                            maxWidth: s,
                            width: S,
                            height: p,
                            alt: null != C && d ? f : C,
                            className: et.thumbnailContainer,
                            imageClassName: i({
                                [et.obscured]: d,
                                [et.thumbnailOverride]: !0
                            })
                        }) : (0, _.renderImageComponent)({
                            src: g,
                            maxHeight: t,
                            maxWidth: s,
                            width: S,
                            height: p,
                            alt: null != C && d ? f : C,
                            autoPlay: o,
                            animated: u && !d && r,
                            containerClassName: et.thumbnailContainer,
                            imageClassName: i({
                                [et.obscured]: d
                            })
                        }), d && (0, n.jsx)(V.default, {
                            iconClassname: et.obscuredTag,
                            obscureReason: c
                        })]
                    })
                })
            }
        },
        578198: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ForumPostComposerStoreProvider: function() {
                    return h
                },
                useForumPostComposerStore: function() {
                    return f
                },
                useForumPostComposerStoreApi: function() {
                    return m
                },
                createForumPostComposerStore: function() {
                    return g
                }
            });
            var n = s("308503"),
                a = s("949041"),
                l = s("295426"),
                i = s("149022"),
                r = s("42203"),
                u = s("474643"),
                o = s("404607"),
                d = s("867965");
            class c {
                constructor(e, t, s) {
                    var n, a, c;
                    this.channelId = e, this.set = t, this.get = s, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = !1, this.guidelinesOpen = !1, this.onboardingExpanded = !1, this.submitting = !1, this.formOpen = !1, this.name = "", this.textAreaState = (0, i.createState)(""), this.hasClickedForm = !1, this.titleFocused = !1, this.bodyFocused = !1, this.setEditorHeight = e => {
                        this.set({
                            editorHeight: e
                        })
                    }, this.setEditorAdditionRowHeight = e => {
                        this.set({
                            editorAdditionRowHeight: e
                        })
                    }, this.setCardHeight = (e, t) => {
                        let {
                            listViewCardHeights: s,
                            cardHeightVersion: n
                        } = this.get();
                        s[e] !== t && (s[e] = t, this.set({
                            cardHeightVersion: n + 1
                        }))
                    }, this.setNameError = e => {
                        this.set({
                            nameError: e
                        })
                    }, this.setMessageError = e => {
                        this.set({
                            messageError: e
                        })
                    }, this.toggleAppliedTag = e => {
                        let {
                            appliedTags: t
                        } = this.get();
                        (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({
                            appliedTags: t
                        }), l.default.changeThreadSettings(this.channelId, {
                            appliedTags: t
                        })
                    }, this.setPopoutOpen = e => {
                        this.set({
                            popoutOpen: e
                        })
                    }, this.setGuidelinesOpen = e => {
                        this.set({
                            guidelinesOpen: e
                        })
                    }, this.setSubmitting = e => {
                        this.set({
                            submitting: e
                        })
                    }, this.setFormOpen = e => {
                        this.set({
                            formOpen: e
                        }), o.default.clearForumSearch(this.channelId)
                    }, this.setOnboardingExpanded = e => {
                        this.set({
                            onboardingExpanded: e
                        })
                    }, this.setTitleFocused = e => {
                        this.set({
                            titleFocused: e
                        })
                    }, this.setBodyFocused = e => {
                        this.set({
                            bodyFocused: e
                        })
                    }, this.setName = e => {
                        this.set({
                            name: e
                        }), l.default.changeThreadSettings(this.channelId, {
                            name: e
                        })
                    }, this.setTextAreaState = e => {
                        this.set({
                            textAreaState: e
                        }), l.default.saveDraft(this.channelId, e.textValue, u.DraftType.FirstThreadMessage)
                    }, this.setHasClickedForm = e => {
                        this.set({
                            hasClickedForm: e
                        })
                    }, this.resetFormState = () => {
                        let e = r.default.getChannel(this.channelId),
                            t = null == e ? "" : null == e.template ? "" : e.template.trim();
                        this.set({
                            name: "",
                            textAreaState: (0, i.createState)(t),
                            appliedTags: new Set,
                            hasClickedForm: !1
                        }), o.default.clearForumSearch(this.channelId)
                    }, this.setFormOpenFromUserAction = () => {
                        if (this.hasClickedForm) return;
                        let e = r.default.getChannel(this.channelId);
                        null != e && (0, d.trackForumCreateNewPostStarted)({
                            guildId: e.guild_id,
                            channelId: this.channelId
                        }), this.set({
                            hasClickedForm: !0,
                            formOpen: !0
                        }), o.default.clearForumSearch(this.channelId)
                    };
                    let h = r.default.getChannel(e);
                    if (null == h) return;
                    let f = null !== (n = u.default.getThreadSettings(h.id)) && void 0 !== n ? n : {},
                        m = null == h.template ? "" : h.template.trim(),
                        g = u.default.getDraft(h.id, u.DraftType.FirstThreadMessage),
                        S = (0, i.createState)(null != g && "" !== g.trim() ? g : m);
                    this.name = null !== (a = f.name) && void 0 !== a ? a : "", c = new Set(f.appliedTags), this.appliedTags = void 0 !== c ? c : new Set, this.formOpen = this.name.length > 0, this.textAreaState = S
                }
            }
            let {
                Provider: h,
                useStore: f,
                useStoreApi: m
            } = (0, a.default)();

            function g(e) {
                return (0, n.default)((t, s) => new c(e.id, t, s))
            }
        },
        136460: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                i = s("77078"),
                r = s("232259"),
                u = s("680986"),
                o = s("782340"),
                d = s("893974"),
                c = e => {
                    var t, s;
                    let {
                        message: a,
                        channel: c,
                        renderColon: h,
                        hasUnreads: f
                    } = e, {
                        user: m,
                        author: g
                    } = (0, u.useForumPostAuthor)(c), S = null !== (s = null !== (t = null == g ? void 0 : g.nick) && void 0 !== t ? t : null == m ? void 0 : m.username) && void 0 !== s ? s : "", p = (0, r.useUsernameHook)(null == a ? void 0 : a.author, c.id, c.guild_id, !0, o.default.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({
                        name: S
                    }))(null != g ? g : void 0)((0, n.jsx)(n.Fragment, {
                        children: S
                    }), c.id);
                    return (0, n.jsxs)(i.Text, {
                        tag: "span",
                        className: l(d.author, {
                            [d.hasUnreads]: f
                        }),
                        variant: "text-sm/semibold",
                        children: [p, !0 === h ? ": " : null]
                    })
                }
        },
        601016: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PIN_ICON_SIZE: function() {
                    return C
                },
                useTagsRowHooks: function() {
                    return T
                },
                IncreasedActivityTagsRow: function() {
                    return N
                },
                default: function() {
                    return E
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("669491"),
                u = s("77078"),
                o = s("120027"),
                d = s("566998"),
                c = s("956089"),
                h = s("339792"),
                f = s("680986"),
                m = s("90625"),
                g = s("724210"),
                S = s("782340"),
                p = s("260177"),
                x = s("552175"),
                v = s("772870");
            let C = 16;

            function T(e) {
                let {
                    channel: t,
                    isNew: s
                } = e, n = (0, f.useAppliedTags)(t), a = n.slice(void 0, 3), l = n.slice(3), i = n.length > 3 ? n.length - 3 : 0, r = t.hasFlag(g.ChannelFlags.PINNED), u = a.length > 0 || r || s, o = n.length > 0;
                return {
                    shownTags: a,
                    remainingTags: l,
                    moreTagsCount: i,
                    isPinned: r,
                    shouldRenderTagsRow: u,
                    forumPostContainsTags: o
                }
            }

            function N(e) {
                let {
                    channel: t,
                    isNew: s,
                    tagsClassName: l,
                    className: r
                } = e, {
                    shownTags: c,
                    remainingTags: f,
                    moreTagsCount: g,
                    isPinned: p,
                    shouldRenderTagsRow: N
                } = T({
                    channel: t,
                    isNew: s
                }), {
                    tagFilter: E
                } = (0, h.useForumChannelStore)(t.id);
                return N ? (0, n.jsxs)("div", {
                    className: i(v.increasedActivityTags, r),
                    children: [p && (0, n.jsx)("div", {
                        className: x.pinIcon,
                        children: (0, n.jsx)(u.Tooltip, {
                            text: S.default.Messages.PINNED_POST,
                            children: e => (0, n.jsx)(d.default, {
                                ...e,
                                width: C,
                                height: C,
                                color: "white"
                            })
                        })
                    }), c.map((e, t) => (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)(m.IncreasedActivityForumTagPill, {
                            tag: e,
                            size: m.default.Sizes.SMALL,
                            className: i(l, {
                                [v.tagFiltered]: E.has(e.id)
                            })
                        }), (t < c.length - 1 || g > 0) && (0, n.jsx)(o.default, {
                            height: 4,
                            width: 4,
                            "aria-hidden": "true",
                            className: v.increasedActivityDotIcon
                        }, e.id.concat(t.toString()))]
                    }, e.id)), g > 0 ? (0, n.jsx)(m.IncreasedActivityForumTagOverflow, {
                        tags: f,
                        count: g,
                        size: m.default.Sizes.SMALL
                    }) : null]
                }) : null
            }

            function E(e) {
                let {
                    channel: t,
                    isNew: s,
                    tagsClassName: a,
                    className: l
                } = e, {
                    shownTags: o,
                    remainingTags: f,
                    moreTagsCount: g,
                    isPinned: x,
                    shouldRenderTagsRow: N
                } = T({
                    channel: t,
                    isNew: s
                }), {
                    tagFilter: E
                } = (0, h.useForumChannelStore)(t.id);
                return N ? (0, n.jsxs)("div", {
                    className: i(v.tags, l),
                    children: [s ? (0, n.jsx)(c.TextBadge, {
                        className: i(p.newBadge, p.inTagsRow),
                        color: r.default.unsafe_rawColors.BRAND_260.css,
                        text: S.default.Messages.NEW
                    }) : null, x && (0, n.jsx)("div", {
                        className: v.pinIcon,
                        children: (0, n.jsx)(u.Tooltip, {
                            text: S.default.Messages.PINNED_POST,
                            children: e => (0, n.jsx)(d.default, {
                                ...e,
                                width: C,
                                height: C,
                                color: "white"
                            })
                        })
                    }), o.map(e => (0, n.jsx)(m.default, {
                        tag: e,
                        size: m.default.Sizes.SMALL,
                        className: i(a, {
                            [v.tagFiltered]: E.has(e.id)
                        })
                    }, e.id)), g > 0 ? (0, n.jsx)(m.ForumTagOverflow, {
                        tags: f,
                        count: g,
                        size: m.default.Sizes.SMALL
                    }) : null]
                }) : null
            }
        },
        810758: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("884691"),
                a = e => {
                    let [t, s] = n.useState(!1), a = n.useCallback(t => {
                        e(t), s(!0)
                    }, [e, s]);
                    return {
                        isFocused: t,
                        handleFocus: a,
                        handleBlur: () => {
                            s(!1)
                        }
                    }
                }
        },
        251432: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useNewBadgeOverflowAware: function() {
                    return a
                }
            });
            var n = s("884691");

            function a(e, t, s) {
                let a = n.useRef(null),
                    [l, i] = n.useState(!1),
                    r = n.useCallback(() => {
                        if (e && null !== a.current) {
                            var s;
                            i((null === (s = a.current) || void 0 === s ? void 0 : s.offsetHeight) > 2.5 * t)
                        }
                    }, [i, e, t]);
                return n.useLayoutEffect(() => {
                    r()
                }, [r, e, s]), {
                    postTitleRef: a,
                    isNewBadgeOverflow: l
                }
            }
        },
        390083: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("118810"),
                l = s("272030"),
                i = e => {
                    let {
                        facepileRef: t,
                        goToThread: i,
                        channel: r
                    } = e;
                    return {
                        handleLeftClick: e => {
                            var s;
                            !((0, a.isElement)(e.target) && (null === (s = t.current) || void 0 === s ? void 0 : s.contains(e.target))) && i(r, e.shiftKey)
                        },
                        handleRightClick: e => (0, l.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("994827").then(s.bind(s, "994827"));
                            return t => (0, n.jsx)(e, {
                                ...t,
                                channel: r
                            })
                        })
                    }
                }
        },
        359132: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var n = s("446674"),
                a = s("406043"),
                l = s("267567"),
                i = s("300322"),
                r = s("26989"),
                u = s("88093"),
                o = s("957255"),
                d = s("583022"),
                c = s("49111");

            function h(e) {
                let t = (0, n.useStateFromStores)([u.default], () => (null == e ? void 0 : e.guild_id) == null || u.default.canChatInGuild(e.guild_id), [e]),
                    s = (0, n.useStateFromStores)([l.default], () => (null == e ? void 0 : e.guild_id) != null && l.default.isLurking(e.guild_id), [e]),
                    h = (0, n.useStateFromStores)([r.default], () => (null == e ? void 0 : e.guild_id) != null && r.default.isCurrentUserGuest(e.guild_id), [e]),
                    f = (0, n.useStateFromStores)([o.default], () => t && o.default.can(c.Permissions.ADD_REACTIONS, e), [t, e]),
                    [, m] = (0, a.useCurrentUserCommunicationDisabled)(null == e ? void 0 : e.guild_id),
                    g = (0, i.useIsActiveChannelOrUnarchivableThread)(e);
                if (null == e) return {
                    disableReactionReads: !0,
                    disableReactionCreates: !0,
                    disableReactionUpdates: !0,
                    isLurking: !1,
                    isGuest: !1,
                    isPendingMember: !1
                };
                let S = (0, d.default)({
                    channel: e,
                    canChat: t,
                    renderReactions: !0,
                    canAddNewReactions: f,
                    isLurking: s,
                    isGuest: h,
                    communicationDisabled: m,
                    isActiveChannelOrUnarchivableThread: g
                });
                return {
                    ...S,
                    isLurking: s,
                    isGuest: h,
                    isPendingMember: !1
                }
            }
        },
        65626: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s("446674"),
                a = s("271938"),
                l = s("880731"),
                i = s("943551");

            function r(e, t) {
                return e === t || (null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) && (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier) && !0
            }

            function u(e) {
                let t = (0, n.useStateFromStores)([l.default], () => !!l.default.isEnabled() && l.default.combosEnabled);
                return (0, n.useStateFromStores)([i.default, a.default], () => t ? i.default.getUserCombo(a.default.getId(), e) : void 0, [e, t], r)
            }
        },
        630485: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("77078"),
                l = s("449918"),
                i = s("119035"),
                r = s("65626"),
                u = s("782340"),
                o = s("936345");

            function d(e) {
                let {
                    channelId: t
                } = e, s = (0, r.default)(t), d = null != s && (s.value > 0 || (null == s ? void 0 : s.multiplier) > 1);
                if (!d) return null;
                let {
                    multiplier: c
                } = s, {
                    color: h
                } = (0, i.getComboStyles)(c);
                return (0, n.jsxs)("div", {
                    className: o.container,
                    children: [(0, n.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        children: u.default.Messages.POGGERMODE_COMBO_BAR
                    }), (0, n.jsx)(a.Progress, {
                        foregroundColor: (0, l.getColor)(h),
                        className: o.progress,
                        size: a.Progress.Sizes.LARGE,
                        percent: 100 * (0, i.getComboPercentage)(s),
                        animate: !0
                    })]
                })
            }
        },
        478025: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("446674"),
                a = s("913144");
            let l = {};
            class i extends n.default.PersistedStore {
                initialize(e) {
                    Object.assign(l, e)
                }
                getState() {
                    return l
                }
                shouldShowEducation(e) {
                    return !0 !== l[e]
                }
            }
            i.displayName = "ActivityInviteEducationStore", i.persistKey = "ActivityInviteEducationExperimentStore";
            var r = new i(a.default, {
                ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
                    return l[e.key] = e.value, !0
                }
            })
        }
    }
]);