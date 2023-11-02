(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44670"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), a.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                a = RegExp("^[^" + s + "]*[" + i + "]"),
                l = RegExp("^[^" + i + "]*[" + s + "]")
        },
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return d
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var i = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                r = (e, t, n) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                o = (e, t) => {
                    for (var n in t || (t = {})) a.call(t, n) && r(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) l.call(t, n) && r(e, n, t[n]);
                    return e
                };
            let u = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => u(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => u(t)(e)
                        }
                    }
                },
                d = (e, t) => (n, i, s) => {
                    let a, l, r = o({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => o(o({}, t), e)
                    }, t);
                    (r.blacklist || r.whitelist) && console.warn("The ".concat(r.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        h = new Set;
                    try {
                        a = r.getStorage()
                    } catch (e) {}
                    if (!a) return e(function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(r.name, "', the given storage is currently unavailable.")), n(...t)
                    }, i, s);
                    !a.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(r.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let m = u(r.serialize),
                        f = () => {
                            let e;
                            let t = r.partialize(o({}, i()));
                            r.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = r.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), r.blacklist && r.blacklist.forEach(e => delete t[e]);
                            let n = m({
                                state: t,
                                version: r.version
                            }).then(e => a.setItem(r.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        p = s.setState;
                    s.setState = (e, t) => {
                        p(e, t), f()
                    };
                    let I = e(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n(...t), f()
                        }, i, s),
                        E = () => {
                            var e;
                            if (!a) return;
                            d = !1, c.forEach(e => e(i()));
                            let t = (null == (e = r.onRehydrateStorage) ? void 0 : e.call(r, i())) || void 0;
                            return u(a.getItem.bind(a))(r.name).then(e => {
                                if (e) return r.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === r.version) return e.state;
                                    if (r.migrate) return r.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(l = r.merge(e, null != (t = i()) ? t : I), !0), f()
                            }).then(() => {
                                null == t || t(l, void 0), d = !0, h.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            r = o(o({}, r), e), e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == a ? void 0 : a.removeItem) || e.call(a, r.name)
                        },
                        rehydrate: () => E(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (h.add(e), () => {
                            h.delete(e)
                        })
                    }, E(), l || I
                }
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983"),
                s = n("884691"),
                a = n("414456"),
                l = n.n(a),
                r = n("817736"),
                o = n.n(r),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                h = n("845579"),
                m = n("901165"),
                f = n("62843"),
                p = n("315102"),
                I = n("402671"),
                E = n("866190"),
                _ = n("115279");
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
                            emojiName: i,
                            animated: s,
                            shouldAnimate: a,
                            isFocused: l,
                            isInteracting: r,
                            size: o = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = _.EMOJI_SIZE_MAP[o];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: l && !0 === s && (!0 === a || u || !0 === r),
                            size: e
                        })
                    }
                    if (null != i) return I.default.getURL(i)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: a,
                        className: r,
                        size: o = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: h,
                        autoplay: m,
                        isInteracting: f,
                        ...p
                    } = this.props, I = this.getSrc();
                    return null == I || "" === I ? (0, i.jsx)("span", {
                        className: l("emoji", "emoji-text"),
                        children: n
                    }) : (a && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, s.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: I,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: l("emoji", r, {
                            jumboable: "jumbo" === o
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != h && "" !== h ? {
                            "data-id": h
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
            let v = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    a = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == i) return;
                            let s = i[1];
                            if (e.intersectionRatio >= .7) {
                                var a, l;
                                if (-1 !== t.indexOf(s)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.top));
                                n ? t.unshift(s) : t.push(s), s.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(s); - 1 !== e && (t.splice(e, 1), s.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function l(e) {
                    let t = o.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), a.observe(t))
                }

                function r(e) {
                    let i = o.findDOMNode(e);
                    a.unobserve(i);
                    let s = n.findIndex(t => {
                        let [n, i] = t;
                        return i === e
                    }); - 1 !== s && (n.splice(s, 1), -1 !== (s = t.indexOf(e)) && (t.splice(s, 1), s < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends s.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && l(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? l(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: s,
                                allowAnimatedEmoji: a,
                                ...l
                            } = this.props;
                        return (0, i.jsx)(f.MessagesInteractionContext.Consumer, {
                            children: t => (0, i.jsx)(e, {
                                ...l,
                                autoplay: s || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                            })
                        })
                    }
                }
            }(g);

            function M(e) {
                let t = h.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    s = __OVERLAY__ ? (0, d.useStateFromStores)([m.default], () => m.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, i.jsx)(v, {
                    ...e,
                    ...n,
                    isFocused: s
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                l = n("446674"),
                r = n("77078"),
                o = n("102985"),
                u = n("79798"),
                d = n("754474"),
                c = n("158998"),
                h = n("782340"),
                m = n("892802");

            function f(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let p = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: s,
                    botVerified: l,
                    discriminatorClass: o,
                    className: d,
                    usernameClass: c,
                    color: f,
                    botClass: p,
                    showStreamerModeTooltip: I
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(m.info, d),
                    children: [(0, i.jsx)(r.Tooltip, {
                        text: h.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: I,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: a(m.username, c),
                            style: null != f ? {
                                color: f
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: a(m.infoSpacing, o),
                        children: n
                    }) : void 0, null != s && (0, i.jsx)(u.default, {
                        type: s,
                        className: a(m.infoSpacing, p),
                        verified: l
                    })]
                })
            };
            var I = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: s,
                    forceUsername: a,
                    showAccountIdentifier: r,
                    overrideDiscriminator: u,
                    forcePomelo: h,
                    ...m
                } = e, I = (0, l.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), E = I || t || n.isNonUserBot(), _ = n.toString(), g = c.default.getName(n), v = a ? _ : null != s ? s : g, M = n.isPomelo() || h;
                if (M || v !== _) {
                    let e = v === _ && M && a ? c.default.getUserTag(n, {
                            forcePomelo: h
                        }) : v,
                        t = r && e !== "@".concat(_) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(p, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: f(n),
                        showStreamerModeTooltip: I && e !== g,
                        ...m
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: v,
                    botType: f(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: E || v !== _ ? null : null != u ? u : n.discriminator,
                    ...m
                })
            }
        },
        969715: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnfeatureItemConfirmationModal: function() {
                    return f
                },
                FeatureItemConfirmationModal: function() {
                    return p
                },
                FeatureMessageConfirmationModal: function() {
                    return I
                },
                FeatureForumPostConfirmationModal: function() {
                    return E
                }
            });
            var i = n("37983"),
                s = n("884691"),
                a = n("866227"),
                l = n.n(a),
                r = n("611221"),
                o = n("77078"),
                u = n("599417"),
                d = n("699473"),
                c = n("713810"),
                h = n("782340"),
                m = n("690187");

            function f(e) {
                let {
                    featureableItem: t,
                    header: n,
                    body: a,
                    ...l
                } = e, [r, d] = s.useState(null), [m, f] = s.useState(!1);
                return (0, i.jsxs)(o.ConfirmModal, {
                    header: n,
                    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
                    confirmButtonColor: o.Button.Colors.RED,
                    cancelText: h.default.Messages.CANCEL,
                    loading: m,
                    onConfirm: async () => {
                        try {
                            f(!0), await (0, c.unfeatureGuildFeedItem)(t), f(!1)
                        } catch (e) {
                            throw d(new u.default(e)), f(!1), e
                        }
                    },
                    ...l,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: a
                    }), null != r && (0, i.jsx)(o.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: r.message
                    })]
                })
            }

            function p(e) {
                let {
                    featureableItem: t,
                    expiresSeconds: n,
                    header: a,
                    children: r,
                    options: d,
                    ...f
                } = e, [p, I] = s.useState(null), [E, _] = s.useState(!1);
                return (0, i.jsxs)(o.ConfirmModal, {
                    header: a,
                    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: h.default.Messages.CANCEL,
                    confirmButtonColor: o.Button.Colors.BRAND,
                    loading: E,
                    onConfirm: async () => {
                        try {
                            let e = l().add(n, "second").toDate();
                            _(!0), await (0, c.featureGuildFeedItem)(t, e, d)
                        } catch (e) {
                            throw I(new u.default(e)), e
                        } finally {
                            _(!1)
                        }
                    },
                    ...f,
                    children: [null != p && (0, i.jsx)(o.Text, {
                        className: m.featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: p.message
                    }), r]
                })
            }

            function I(e) {
                let {
                    message: t,
                    guildId: n,
                    channel: s,
                    expiresSeconds: a,
                    timePeriod: l,
                    options: u,
                    ...c
                } = e;
                return (0, i.jsxs)(p, {
                    ...c,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: r.GuildFeedItemTypes.MESSAGE
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: a,
                    options: u,
                    children: [(0, i.jsx)(o.Text, {
                        className: m.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: l
                        })
                    }), (0, i.jsx)("div", {
                        className: m.featureModalMessage,
                        children: (0, i.jsx)(d.default, {
                            channel: s,
                            message: t,
                            disableInteraction: !0
                        })
                    })]
                })
            }

            function E(e) {
                let {
                    thread: t,
                    guildId: n,
                    expiresSeconds: s,
                    timePeriod: a,
                    options: l,
                    ...u
                } = e;
                return (0, i.jsx)(p, {
                    ...u,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: r.GuildFeedItemTypes.FORUM_POST
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: s,
                    options: l,
                    children: (0, i.jsx)(o.Text, {
                        className: m.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
                            threadName: t.name,
                            timePeriod: a
                        })
                    })
                })
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("65597"),
                a = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, s.default)([a.default], () => a.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691"),
                s = n("65597"),
                a = n("526887"),
                l = n("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(a.ConfettiCannonContext), t = (0, s.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = i.useMemo(() => ({
                    fire: (i, s, a) => {
                        var l, r;
                        let o = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            u = n(o);
                        e(i, s, u, (null !== (l = null == a ? void 0 : a.count) && void 0 !== l ? l : o.confettiCount) * (null !== (r = null == a ? void 0 : a.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("803182"),
                s = n("308503"),
                a = n("49111");

            function l(e) {
                let t = (0, i.matchPath)(null != e ? e : "", {
                    path: a.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === a.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, i.matchPath)(null != e ? e : "", {
                    path: a.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var r = (0, s.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = l(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: i
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = l(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: i,
                        basePath: t
                    })
                }
            }))
        },
        69890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return r
                },
                formatMessageCountLabel: function() {
                    return u
                }
            });
            var i = n("299039"),
                s = n("648564"),
                a = n("782340");
            let l = e => i.default.compare("992549565104128000", e) > -1,
                r = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = l(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                o = (e, t, n) => {
                    let i = r(e, n);
                    return "0" === i ? a.default.Messages.SEE_THREAD : t.format({
                        count: i
                    })
                },
                u = (e, t) => o(e, a.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        938237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                markAnalyticsFeedItemSeen: function() {
                    return s
                },
                markAnalyticsFeedItemUnseen: function() {
                    return a
                },
                flushAnalyticsFeedItems: function() {
                    return l
                }
            });
            var i = n("913144");

            function s(e, t, n) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function a(e, t, n) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        395118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsFeedTypes: function() {
                    return a
                },
                ForceFlushType: function() {
                    return l
                },
                AnalyticsFeedItemSeenManager: function() {
                    return c
                }
            });
            var i, s, a, l, r = n("627445"),
                o = n.n(r),
                u = n("913144");
            (i = a || (a = {})).GUILD_HOME = "guild_home", i.FORUM_CHANNEL = "forum_channel", (s = l || (l = {}))[s.IMMEDIATE = 0] = "IMMEDIATE", s[s.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", s[s.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
            class d {
                maybeMarkSeen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
                        startTimeMillis: e
                    }), !0)
                }
                maybeMarkUnseen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
                }
                isVisible() {
                    let e = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null
                }
                computeSeenTimeDestructive(e) {
                    let t = 0,
                        n = [];
                    for (let i of this.seenIntervals) {
                        if (null != i.endTimeMillis) {
                            t += i.endTimeMillis - i.startTimeMillis;
                            continue
                        }
                        if (e) {
                            let e = Date.now();
                            t += e - i.startTimeMillis, n.push({
                                startTimeMillis: e
                            });
                            continue
                        }
                        n.push(i)
                    }
                    return o(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
                }
                constructor() {
                    this.seenIntervals = []
                }
            }
            class c {
                maybeFlushSeenItems(e) {
                    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || e === l.IMMEDIATE_WITH_COOLDOWN && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                    let t = this.createFlushSeenItemsFunction(e);
                    return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), e === l.IMMEDIATE || e === l.IMMEDIATE_WITH_COOLDOWN) ? new Promise(async e => {
                        await t(), e()
                    }) : new Promise(e => {
                        setTimeout(async () => {
                            await t(), e()
                        }, 100)
                    })
                }
                constructor({
                    id: e,
                    windowId: t,
                    isPaused: n
                }) {
                    this.initialize = () => {
                        var e;
                        u.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), u.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), u.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), u.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), u.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), u.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), u.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this)
                    }, this.terminate = () => {
                        var e;
                        u.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), u.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), u.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), u.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), u.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), u.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), u.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(l.IMMEDIATE)
                    }, this.handleFeedItemFlush = e => {
                        let {
                            id: t,
                            force: n
                        } = e;
                        this._id === t && this.maybeFlushSeenItems(n)
                    }, this.handleFeedItemSeen = e => {
                        var t;
                        let n = e.id,
                            i = e.timestampMillis,
                            s = e.feedItemId;
                        if (n !== this._id) return;
                        if (this._paused) {
                            this._pausedFeedItemIds.add(s);
                            return
                        }
                        let a = this.getTrackedFeedItem(s),
                            l = a.maybeMarkSeen(i);
                        null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, s, l)
                    }, this.handleFeedItemUnseen = e => {
                        var t;
                        let n = e.id,
                            i = e.timestampMillis,
                            s = e.feedItemId;
                        if (n !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(s);
                        let a = this.getTrackedFeedItem(s),
                            l = a.maybeMarkUnseen(i);
                        null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, s, l), this.maybeFlushSeenItems()
                    }, this.getTrackedFeedItem = e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d), this.trackedFeedItems[e]), this.getVisibleFeedItemIds = () => {
                        let e = Object.keys(this.trackedFeedItems);
                        return new Set(e.filter(e => {
                            var t;
                            return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                        }))
                    }, this.handleDrawerClose = () => {
                        this._isReactNavigationFocused && this.resume()
                    }, this.handleDrawerOpen = () => {
                        this._isReactNavigationFocused && this.pause()
                    }, this.handleAppStateUpdate = e => {
                        let {
                            state: t
                        } = e;
                        "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(l.IMMEDIATE))
                    }, this.clearPausedFeedItemIds = () => {
                        this._pausedFeedItemIds = new Set, this._paused = !1
                    }, this.pause = () => {
                        if (this._paused) return;
                        let e = this.getVisibleFeedItemIds();
                        e.forEach(e => {
                            this.handleFeedItemUnseen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_UNSEEN"
                            })
                        }), this._paused = !0, this._pausedFeedItemIds = e
                    }, this.resume = () => {
                        this._paused && (this._paused = !1, this._pausedFeedItemIds.forEach(e => {
                            this.handleFeedItemSeen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_SEEN"
                            })
                        }), this.clearPausedFeedItemIds())
                    }, this.handleReactNavigationFocus = (e, t) => {
                        this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause()
                    }, this.handleWindowFocus = e => {
                        this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
                    }, this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != n && n, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
                }
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return h
                },
                getMobileDownloadLink: function() {
                    return m
                }
            });
            var i = n("597755"),
                s = n.n(i),
                a = n("815157"),
                l = n("271938"),
                r = n("49111");
            let o = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = null != n ? "&format=".concat(n) : "";
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(i)
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function h() {
                let e = d(),
                    t = e === o ? "tar.gz" : null;
                return u(e, !1, t)
            }

            function m(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, a.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, a.generateAttemptId)()
                        });
                    case "Android":
                        return (0, a.default)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, a.generateAttemptId)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);