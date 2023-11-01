(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76951"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), r.test(e)) ? "rtl" : a.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = RegExp("^[^" + s + "]*[" + i + "]"),
                a = RegExp("^[^" + i + "]*[" + s + "]")
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
                r = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable,
                l = (e, t, n) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                u = (e, t) => {
                    for (var n in t || (t = {})) r.call(t, n) && l(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) a.call(t, n) && l(e, n, t[n]);
                    return e
                };
            let o = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => o(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => o(t)(e)
                        }
                    }
                },
                d = (e, t) => (n, i, s) => {
                    let r, a, l = u({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => u(u({}, t), e)
                    }, t);
                    (l.blacklist || l.whitelist) && console.warn("The ".concat(l.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        h = new Set;
                    try {
                        r = l.getStorage()
                    } catch (e) {}
                    if (!r) return e(function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(l.name, "', the given storage is currently unavailable.")), n(...t)
                    }, i, s);
                    !r.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(l.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let f = o(l.serialize),
                        S = () => {
                            let e;
                            let t = l.partialize(u({}, i()));
                            l.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = l.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), l.blacklist && l.blacklist.forEach(e => delete t[e]);
                            let n = f({
                                state: t,
                                version: l.version
                            }).then(e => r.setItem(l.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        E = s.setState;
                    s.setState = (e, t) => {
                        E(e, t), S()
                    };
                    let _ = e(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n(...t), S()
                        }, i, s),
                        m = () => {
                            var e;
                            if (!r) return;
                            d = !1, c.forEach(e => e(i()));
                            let t = (null == (e = l.onRehydrateStorage) ? void 0 : e.call(l, i())) || void 0;
                            return o(r.getItem.bind(r))(l.name).then(e => {
                                if (e) return l.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === l.version) return e.state;
                                    if (l.migrate) return l.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(a = l.merge(e, null != (t = i()) ? t : _), !0), S()
                            }).then(() => {
                                null == t || t(a, void 0), d = !0, h.forEach(e => e(a))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            l = u(u({}, l), e), e.getStorage && (r = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == r ? void 0 : r.removeItem) || e.call(r, l.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (h.add(e), () => {
                            h.delete(e)
                        })
                    }, m(), a || _
                }
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983"),
                s = n("884691"),
                r = n("414456"),
                a = n.n(r),
                l = n("817736"),
                u = n.n(l),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                h = n("845579"),
                f = n("901165"),
                S = n("62843"),
                E = n("315102"),
                _ = n("402671"),
                m = n("866190"),
                I = n("115279");
            class T extends s.PureComponent {
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
                            shouldAnimate: r,
                            isFocused: a,
                            isInteracting: l,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = I.EMOJI_SIZE_MAP[u];
                        return E.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === s && (!0 === r || o || !0 === l),
                            size: e
                        })
                    }
                    if (null != i) return _.default.getURL(i)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: r,
                        className: l,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: h,
                        autoplay: f,
                        isInteracting: S,
                        ...E
                    } = this.props, _ = this.getSrc();
                    return null == _ || "" === _ ? (0, i.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (r && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, s.createElement)("img", {
                        ...E,
                        key: this.key,
                        src: _,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", l, {
                            jumboable: "jumbo" === u
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
            T.defaultProps = {
                isInteracting: !1
            };
            let p = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    r = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == i) return;
                            let s = i[1];
                            if (e.intersectionRatio >= .7) {
                                var r, a;
                                if (-1 !== t.indexOf(s)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                                n ? t.unshift(s) : t.push(s), s.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(s); - 1 !== e && (t.splice(e, 1), s.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function a(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), r.observe(t))
                }

                function l(e) {
                    let i = u.findDOMNode(e);
                    r.unobserve(i);
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
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? a(this) : l(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && l(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: s,
                                allowAnimatedEmoji: r,
                                ...a
                            } = this.props;
                        return (0, i.jsx)(S.MessagesInteractionContext.Consumer, {
                            children: t => (0, i.jsx)(e, {
                                ...a,
                                autoplay: s || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && r
                            })
                        })
                    }
                }
            }(T);

            function O(e) {
                let t = h.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    s = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, m.useIsWindowFocused)();
                return (0, i.jsx)(p, {
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
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                r = n.n(s),
                a = n("446674"),
                l = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                h = n("782340"),
                f = n("892802");

            function S(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let E = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: s,
                    botVerified: a,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: S,
                    botClass: E,
                    showStreamerModeTooltip: _
                } = e;
                return (0, i.jsxs)("div", {
                    className: r(f.info, d),
                    children: [(0, i.jsx)(l.Tooltip, {
                        text: h.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: _,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: r(f.username, c),
                            style: null != S ? {
                                color: S
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: r(f.infoSpacing, u),
                        children: n
                    }) : void 0, null != s && (0, i.jsx)(o.default, {
                        type: s,
                        className: r(f.infoSpacing, E),
                        verified: a
                    })]
                })
            };
            var _ = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: s,
                    forceUsername: r,
                    showAccountIdentifier: l,
                    overrideDiscriminator: o,
                    forcePomelo: h,
                    ...f
                } = e, _ = (0, a.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), m = _ || t || n.isNonUserBot(), I = n.toString(), T = c.default.getName(n), p = r ? I : null != s ? s : T, O = n.isPomelo() || h;
                if (O || p !== I) {
                    let e = p === I && O && r ? c.default.getUserTag(n, {
                            forcePomelo: h
                        }) : p,
                        t = l && e !== "@".concat(I) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(E, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: S(n),
                        showStreamerModeTooltip: _ && e !== T,
                        ...f
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: p,
                    botType: S(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: m || p !== I ? null : null != o ? o : n.discriminator,
                    ...f
                })
            }
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return a
                },
                getApplicationResolution: function() {
                    return h
                },
                ApplicationStreamFPS: function() {
                    return l
                },
                ApplicationStreamPresets: function() {
                    return u
                },
                getApplicationFramerate: function() {
                    return f
                },
                ApplicationStreamPresetValues: function() {
                    return S
                },
                ApplicationStreamSettingRequirements: function() {
                    return E
                },
                ApplicationStreamResolutionButtons: function() {
                    return m
                },
                GoLiveDeviceResolutionButtons: function() {
                    return I
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return p
                },
                ApplicationStreamFPSButtons: function() {
                    return O
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return F
                }
            });
            var i, s, r, a, l, u, o = n("49111"),
                d = n("646718"),
                c = n("782340");

            function h(e) {
                switch (e) {
                    case a.RESOLUTION_480:
                        return a.RESOLUTION_480;
                    case a.RESOLUTION_720:
                        return a.RESOLUTION_720;
                    case a.RESOLUTION_1080:
                        return a.RESOLUTION_1080;
                    case a.RESOLUTION_SOURCE:
                        return a.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function f(e) {
                switch (e) {
                    case l.FPS_5:
                        return l.FPS_5;
                    case l.FPS_15:
                        return l.FPS_15;
                    case l.FPS_30:
                        return l.FPS_30;
                    case l.FPS_60:
                        return l.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = a || (a = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (s = l || (l = {}))[s.FPS_5 = 5] = "FPS_5", s[s.FPS_15 = 15] = "FPS_15", s[s.FPS_30 = 30] = "FPS_30", s[s.FPS_60 = 60] = "FPS_60", (r = u || (u = {}))[r.PRESET_VIDEO = 1] = "PRESET_VIDEO", r[r.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", r[r.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let S = {
                    [u.PRESET_DOCUMENTS]: [{
                        resolution: a.RESOLUTION_SOURCE,
                        fps: l.FPS_15
                    }, {
                        resolution: a.RESOLUTION_SOURCE,
                        fps: l.FPS_5
                    }],
                    [u.PRESET_VIDEO]: [{
                        resolution: a.RESOLUTION_1440,
                        fps: l.FPS_60
                    }, {
                        resolution: a.RESOLUTION_1080,
                        fps: l.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: l.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: l.FPS_30
                    }],
                    [u.PRESET_CUSTOM]: []
                },
                E = [{
                    resolution: a.RESOLUTION_SOURCE,
                    fps: l.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: l.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: l.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: l.FPS_5,
                    preset: u.PRESET_DOCUMENTS
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: l.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: l.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: l.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: l.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: l.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: l.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: l.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: l.FPS_30
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: l.FPS_15
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: l.FPS_5
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: l.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: l.FPS_30
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: l.FPS_15
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: l.FPS_5
                }];

            function _(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let m = [_(a.RESOLUTION_720), _(a.RESOLUTION_1080), _(a.RESOLUTION_1440), _(a.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                I = [_(a.RESOLUTION_720), _(a.RESOLUTION_1080), _(a.RESOLUTION_1440)],
                T = e => "".concat(e, "p"),
                p = [_(a.RESOLUTION_480, () => T(a.RESOLUTION_480)), _(a.RESOLUTION_720, () => T(a.RESOLUTION_720)), _(a.RESOLUTION_1080, () => T(a.RESOLUTION_1080)), _(a.RESOLUTION_1440, () => T(a.RESOLUTION_1440)), _(a.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                O = [_(l.FPS_15), _(l.FPS_30), _(l.FPS_60)],
                F = [_(l.FPS_15, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: l.FPS_15
                })), _(l.FPS_30, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: l.FPS_30
                })), _(l.FPS_60, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: l.FPS_60
                }))]
        },
        969715: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnfeatureItemConfirmationModal: function() {
                    return S
                },
                FeatureItemConfirmationModal: function() {
                    return E
                },
                FeatureMessageConfirmationModal: function() {
                    return _
                },
                FeatureForumPostConfirmationModal: function() {
                    return m
                }
            });
            var i = n("37983"),
                s = n("884691"),
                r = n("866227"),
                a = n.n(r),
                l = n("611221"),
                u = n("77078"),
                o = n("599417"),
                d = n("699473"),
                c = n("713810"),
                h = n("782340"),
                f = n("690187");

            function S(e) {
                let {
                    featureableItem: t,
                    header: n,
                    body: r,
                    ...a
                } = e, [l, d] = s.useState(null), [f, S] = s.useState(!1);
                return (0, i.jsxs)(u.ConfirmModal, {
                    header: n,
                    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
                    confirmButtonColor: u.Button.Colors.RED,
                    cancelText: h.default.Messages.CANCEL,
                    loading: f,
                    onConfirm: async () => {
                        try {
                            S(!0), await (0, c.unfeatureGuildFeedItem)(t), S(!1)
                        } catch (e) {
                            throw d(new o.default(e)), S(!1), e
                        }
                    },
                    ...a,
                    children: [(0, i.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: r
                    }), null != l && (0, i.jsx)(u.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: l.message
                    })]
                })
            }

            function E(e) {
                let {
                    featureableItem: t,
                    expiresSeconds: n,
                    header: r,
                    children: l,
                    options: d,
                    ...S
                } = e, [E, _] = s.useState(null), [m, I] = s.useState(!1);
                return (0, i.jsxs)(u.ConfirmModal, {
                    header: r,
                    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: h.default.Messages.CANCEL,
                    confirmButtonColor: u.Button.Colors.BRAND,
                    loading: m,
                    onConfirm: async () => {
                        try {
                            let e = a().add(n, "second").toDate();
                            I(!0), await (0, c.featureGuildFeedItem)(t, e, d)
                        } catch (e) {
                            throw _(new o.default(e)), e
                        } finally {
                            I(!1)
                        }
                    },
                    ...S,
                    children: [null != E && (0, i.jsx)(u.Text, {
                        className: f.featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: E.message
                    }), l]
                })
            }

            function _(e) {
                let {
                    message: t,
                    guildId: n,
                    channel: s,
                    expiresSeconds: r,
                    timePeriod: a,
                    options: o,
                    ...c
                } = e;
                return (0, i.jsxs)(E, {
                    ...c,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: l.GuildFeedItemTypes.MESSAGE
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: r,
                    options: o,
                    children: [(0, i.jsx)(u.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: a
                        })
                    }), (0, i.jsx)("div", {
                        className: f.featureModalMessage,
                        children: (0, i.jsx)(d.default, {
                            channel: s,
                            message: t,
                            disableInteraction: !0
                        })
                    })]
                })
            }

            function m(e) {
                let {
                    thread: t,
                    guildId: n,
                    expiresSeconds: s,
                    timePeriod: r,
                    options: a,
                    ...o
                } = e;
                return (0, i.jsx)(E, {
                    ...o,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: l.GuildFeedItemTypes.FORUM_POST
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: s,
                    options: a,
                    children: (0, i.jsx)(u.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
                            threadName: t.name,
                            timePeriod: r
                        })
                    })
                })
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("65597"),
                r = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, s.default)([r.default], () => r.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                s = n("65597"),
                r = n("526887"),
                a = n("880731");

            function l() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(r.ConfettiCannonContext), t = (0, s.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), l = i.useMemo(() => ({
                    fire: (i, s, r) => {
                        var a, l;
                        let u = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            o = n(u);
                        e(i, s, o, (null !== (a = null == r ? void 0 : r.count) && void 0 !== a ? a : u.confettiCount) * (null !== (l = null == r ? void 0 : r.countMultiplier) && void 0 !== l ? l : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return l
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("803182"),
                s = n("308503"),
                r = n("49111");

            function a(e) {
                let t = (0, i.matchPath)(null != e ? e : "", {
                    path: r.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === r.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, i.matchPath)(null != e ? e : "", {
                    path: r.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var l = (0, s.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = a(t);
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
                    } = a(t);
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
                    return l
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var i = n("299039"),
                s = n("648564"),
                r = n("782340");
            let a = e => i.default.compare("992549565104128000", e) > -1,
                l = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = a(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                u = (e, t, n) => {
                    let i = l(e, n);
                    return "0" === i ? r.default.Messages.SEE_THREAD : t.format({
                        count: i
                    })
                },
                o = (e, t) => u(e, r.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        938237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                markAnalyticsFeedItemSeen: function() {
                    return s
                },
                markAnalyticsFeedItemUnseen: function() {
                    return r
                },
                flushAnalyticsFeedItems: function() {
                    return a
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

            function r(e, t, n) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function a(e, t) {
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
                    return r
                },
                ForceFlushType: function() {
                    return a
                },
                AnalyticsFeedItemSeenManager: function() {
                    return c
                }
            });
            var i, s, r, a, l = n("627445"),
                u = n.n(l),
                o = n("913144");
            (i = r || (r = {})).GUILD_HOME = "guild_home", i.FORUM_CHANNEL = "forum_channel", (s = a || (a = {}))[s.IMMEDIATE = 0] = "IMMEDIATE", s[s.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", s[s.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
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
                    return u(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
                }
                constructor() {
                    this.seenIntervals = []
                }
            }
            class c {
                maybeFlushSeenItems(e) {
                    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || e === a.IMMEDIATE_WITH_COOLDOWN && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                    let t = this.createFlushSeenItemsFunction(e);
                    return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), e === a.IMMEDIATE || e === a.IMMEDIATE_WITH_COOLDOWN) ? new Promise(async e => {
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
                        o.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), o.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), o.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this)
                    }, this.terminate = () => {
                        var e;
                        o.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), o.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), o.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(a.IMMEDIATE)
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
                        let r = this.getTrackedFeedItem(s),
                            a = r.maybeMarkSeen(i);
                        null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, s, a)
                    }, this.handleFeedItemUnseen = e => {
                        var t;
                        let n = e.id,
                            i = e.timestampMillis,
                            s = e.feedItemId;
                        if (n !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(s);
                        let r = this.getTrackedFeedItem(s),
                            a = r.maybeMarkUnseen(i);
                        null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, s, a), this.maybeFlushSeenItems()
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
                        "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(a.IMMEDIATE))
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
                    return o
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return h
                },
                getMobileDownloadLink: function() {
                    return f
                }
            });
            var i = n("597755"),
                s = n.n(i),
                r = n("815157"),
                a = n("271938"),
                l = n("49111");
            let u = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = null != n ? "&format=".concat(n) : "";
                return "".concat(l.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(i)
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? u : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [u]: "Linux"
                })[d(e)]
            }

            function h() {
                let e = d(),
                    t = e === u ? "tar.gz" : null;
                return o(e, !1, t)
            }

            function f(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, r.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    case "Android":
                        return (0, r.default)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);