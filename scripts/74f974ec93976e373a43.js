(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18299"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                i = n("817736"),
                o = n.n(i),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                E = n("901165"),
                h = n("62843"),
                I = n("315102"),
                p = n("402671"),
                m = n("866190"),
                v = n("115279");
            class g extends s.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: l,
                            animated: s,
                            shouldAnimate: a,
                            isFocused: r,
                            isInteracting: i,
                            size: o = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = v.EMOJI_SIZE_MAP[o];
                        return I.default.getEmojiURL({
                            id: n,
                            animated: r && !0 === s && (!0 === a || u || !0 === i),
                            size: e
                        })
                    }
                    if (null != l) return p.default.getURL(l)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: a,
                        className: i,
                        size: o = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: E,
                        isInteracting: h,
                        ...I
                    } = this.props, p = this.getSrc();
                    return null == p || "" === p ? (0, l.jsx)("span", {
                        className: r("emoji", "emoji-text"),
                        children: n
                    }) : (a && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, s.createElement)("img", {
                        ...I,
                        key: this.key,
                        src: p,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: r("emoji", i, {
                            jumboable: "jumbo" === o
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            g.defaultProps = {
                isInteracting: !1
            };
            let T = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, l.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    a = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let l = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == l) return;
                            let s = l[1];
                            if (e.intersectionRatio >= .7) {
                                var a, r;
                                if (-1 !== t.indexOf(s)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.top));
                                n ? t.unshift(s) : t.push(s), s.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(s); - 1 !== e && (t.splice(e, 1), s.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function r(e) {
                    let t = o.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), a.observe(t))
                }

                function i(e) {
                    let l = o.findDOMNode(e);
                    a.unobserve(l);
                    let s = n.findIndex(t => {
                        let [n, l] = t;
                        return l === e
                    }); - 1 !== s && (n.splice(s, 1), -1 !== (s = t.indexOf(e)) && (t.splice(s, 1), s < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends s.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? r(this) : i(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && i(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: s,
                                allowAnimatedEmoji: a,
                                ...r
                            } = this.props;
                        return (0, l.jsx)(h.MessagesInteractionContext.Consumer, {
                            children: t => (0, l.jsx)(e, {
                                ...r,
                                autoplay: s || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                            })
                        })
                    }
                }
            }(g);

            function _(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    s = __OVERLAY__ ? (0, d.useStateFromStores)([E.default], () => E.default.isInstanceFocused()) : (0, m.useIsWindowFocused)();
                return (0, l.jsx)(T, {
                    ...e,
                    ...n,
                    isFocused: s
                })
            }
        },
        512027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2022-11_default_to_server_vanity_v2",
                label: "Default To Server Vanity v2",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        652453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RawInviteCopyInputConnected: function() {
                    return S
                },
                InviteCopyInput: function() {
                    return x
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                i = n("498574"),
                o = n("446674"),
                u = n("862337"),
                d = n("77078"),
                c = n("162771"),
                f = n("102985"),
                E = n("599110"),
                h = n("306160"),
                I = n("568734"),
                p = n("354023"),
                m = n("865699"),
                v = n("91366"),
                g = n("49111"),
                T = n("782340"),
                _ = n("435808"),
                N = n("905518"),
                C = n("173791"),
                A = n("926622");
            let S = o.default.connectStores([f.default], () => ({
                    hideValue: f.default.hideInstantInvites
                }))(e => {
                    let {
                        value: t,
                        autoFocus: n,
                        hideValue: a,
                        onCopy: i,
                        disabled: o
                    } = e, [c, f] = s.useState(!1), [E, I] = s.useState(!1), p = s.useMemo(() => new u.DelayedCall(1e3, () => I(!1)), [I]);
                    return s.useEffect(() => () => {
                        p.cancel()
                    }, [p]), (0, l.jsxs)("div", {
                        className: r(N.input, C.flexJustifyBetween, C.flexCenter, {
                            [N.success]: E,
                            [N.focused]: c
                        }),
                        children: [(0, l.jsx)(d.TextInput, {
                            className: _.copyInput,
                            name: "invite",
                            value: a ? T.default.Messages.INSTANT_INVITE_HIDDEN : t,
                            editable: !1,
                            inputClassName: _.noBorder,
                            autoFocus: n,
                            onFocus: () => n ? f(!0) : null,
                            onBlur: () => n ? f(!1) : null,
                            spellCheck: "false",
                            onClick: e => e.currentTarget.select(),
                            "aria-label": T.default.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: o
                        }), h.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: E ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                            className: _.copyButton,
                            onClick: () => {
                                I(!0), p.delay(), i(t)
                            },
                            disabled: o,
                            children: E ? T.default.Messages.INVITE_COPIED : T.default.Messages.COPY
                        }) : null]
                    })
                }),
                x = e => {
                    let {
                        guild: t,
                        noInvitesAvailable: n,
                        showFriends: a,
                        onClose: o,
                        modalState: u,
                        isGuestInviteCreationToggleEnabled: f,
                        inviteFlags: N,
                        setInviteFlags: C,
                        showGuestInviteToggleForCurrentVoiceChannel: x,
                        copyValue: M,
                        changePage: y,
                        inviteChannel: b,
                        source: O,
                        code: R,
                        guildScheduledEvent: L,
                        disabled: P
                    } = e, {
                        maxAge: D,
                        maxUses: F,
                        networkError: U,
                        showVanityURL: j
                    } = u, V = s.useCallback(() => {
                        (0, h.copy)(M), E.default.track(g.AnalyticEvents.COPY_INSTANT_INVITE, {
                            server: c.default.getGuildId(),
                            channel: null == b ? void 0 : b.id,
                            channel_type: null == b ? void 0 : b.type,
                            location: O,
                            code: R,
                            guild_scheduled_event_id: null == L ? void 0 : L.id
                        })
                    }, [M, b, O, R, L]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(S, {
                            value: M,
                            autoFocus: a,
                            onCopy: V,
                            disabled: P
                        }), f ? (0, l.jsx)("div", {
                            className: _.temporaryMembershipContainerBackground,
                            children: (0, l.jsx)(d.FormSwitch, {
                                className: _.temporaryMembershipContainer,
                                value: (0, I.hasFlag)(N, i.GuildInviteFlags.IS_GUEST_INVITE),
                                onChange: e => C((0, I.setFlag)(N, i.GuildInviteFlags.IS_GUEST_INVITE, e)),
                                note: T.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: P,
                                hideBorder: !0,
                                children: x ? T.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : T.default.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, n || j ? null : (0, l.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: r(A.marginTop8, _.footerText),
                            children: [(0, p.maxAgeString)(D, F), " ", a ? (0, l.jsx)(d.Anchor, {
                                onClick: () => y(v.InstantInviteModalPages.SETTINGS),
                                children: T.default.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !n && a && j ? (0, l.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: r(A.marginTop8, _.footerText),
                            children: [T.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
                                onClick: () => y(v.InstantInviteModalPages.SETTINGS),
                                children: T.default.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != U ? (0, l.jsx)(m.InviteErrorMessage, {
                            guild: t,
                            error: U,
                            onClose: o
                        }) : null]
                    })
                }
        },
        865699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteErrorMessage: function() {
                    return c
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("77078"),
                r = n("592407"),
                i = n("957255"),
                o = n("49111"),
                u = n("782340"),
                d = n("435808");

            function c(e) {
                let {
                    guild: t,
                    error: n,
                    onClose: c
                } = e, f = t.id, E = s.useCallback(() => {
                    c(), r.default.open(f, o.GuildSettingsSections.INSTANT_INVITES)
                }, [f, c]), h = s.useCallback(e => (0, l.jsx)(a.Clickable, {
                    className: d.errorLink,
                    onClick: E,
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), [E]), I = s.useCallback(e => (0, l.jsx)(a.Anchor, {
                    href: o.MarketingURLs.INVITES_HELP,
                    target: "_blank",
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), []), p = n.code !== o.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : i.default.can(o.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: h,
                    inviteHelpHook: I
                }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
                return (0, l.jsx)(a.Text, {
                    className: d.errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: p
                })
            }
        },
        287850: function(e, t, n) {
            "use strict";
            let l, s, a;
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var r, i, o = n("866227"),
                u = n.n(o),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                E = n("21121"),
                h = n("934306"),
                I = n("288518"),
                p = n("486503"),
                m = n("233069"),
                v = n("42203"),
                g = n("305961"),
                T = n("660478"),
                _ = n("282109"),
                N = n("697218"),
                C = n("299039"),
                A = n("724210");
            (r = i || (i = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
            let S = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? i.FAVORITE : i.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function x(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let l = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        s = e.isMessageRequestTimestamp;
                    if (null != s) {
                        let e = u(s).valueOf(),
                            t = C.default.fromTimestamp(e);
                        return C.default.compare(l, t) > 0 ? l : t
                    }
                    return l
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: _.default.isMessagesFavorite(e.id) && (0, E.isInMainTabsExperiment)(),
                    isRequest: I.default.isMessageRequest(e.id) || p.default.isSpam(e.id)
                }
            }

            function M() {
                S.clear(), Object.values(v.default.getMutablePrivateChannels()).forEach(e => {
                    S.set(e.id, x(e))
                }), (0, E.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && _.default.getAddedToMessages().forEach(e => {
                    let t = v.default.getChannel(e);
                    null != t && (0, m.isGuildTextChannelType)(t.type) && S.set(t.id, x(t))
                })
            }

            function y() {
                let e = v.default.getMutablePrivateChannels();
                for (let t in e) S.set(t, x(e[t]))
            }
            let b = (l = [], s = [], a = [], () => {
                let e = S.values(i.FAVORITE),
                    t = S.values(i.DEFAULT);
                return (l !== e || s !== t) && (a = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return a.push(t)
                }), l = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return a.push(t)
                }), s = t), a
            });
            class O extends d.default.Store {
                initialize() {
                    this.waitFor(v.default, g.default, N.default, I.default, _.default), this.syncWith([_.default, I.default], M)
                }
                getPrivateChannelIds() {
                    return b()
                }
                getSortedChannels() {
                    return [S.values(i.FAVORITE), S.values(i.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return S.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: l
                        } = t;
                        e[n] = l
                    }), e
                }
            }
            O.displayName = "PrivateChannelSortStore";
            var R = new O(f.default, {
                CONNECTION_OPEN: M,
                CONNECTION_OPEN_SUPPLEMENTAL: M,
                OVERLAY_INITIALIZE: M,
                CACHE_LOADED: y,
                CACHE_LOADED_LAZY: y,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, m.isPrivate)(e.type) || S.has(e.id)) && S.set(e.id, x(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, m.isPrivate)(t.type) || t.id === A.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    S.set(t.id, x(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return S.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!S.has(t)) return !1;
                    let l = v.default.getChannel(t);
                    return null != l && S.set(t, x(l, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return S.delete(t)
                }
            })
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return s
                }
            });
            var l = n("884691");
            let s = l.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return r
                },
                copy: function() {
                    return i
                }
            });
            var l = n("281071"),
                s = n("773336"),
                a = n("50885");
            let r = (() => {
                if (s.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function i(e) {
                return !!r && (s.isPlatformEmbedded ? (a.default.copy(e), !0) : l.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return i
                }
            });
            var l = n("884691"),
                s = n("446674"),
                a = n("244201"),
                r = n("471671");

            function i() {
                let {
                    windowId: e
                } = l.useContext(a.default);
                return (0, s.useStateFromStores)([r.default], () => r.default.isFocused(e), [e])
            }
        },
        498574: function(e, t, n) {
            "use strict";
            var l, s;
            n.r(t), n.d(t, {
                GuildInviteFlags: function() {
                    return l
                }
            }), (s = l || (l = {}))[s.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", s[s.IS_VIEWED = 2] = "IS_VIEWED", s[s.IS_ENHANCED = 4] = "IS_ENHANCED"
        },
        281071: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    l = window.getSelection(),
                    s = document.createElement("textarea");
                s.value = e, s.contentEditable = "true", s.style.visibility = "none", t.appendChild(s), n.selectNodeContents(s), null == l || l.removeAllRanges(), null == l || l.addRange(n), s.focus(), s.setSelectionRange(0, e.length);
                let a = document.execCommand("copy");
                return t.removeChild(s), a
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            })
        }
    }
]);