(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78412"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("920040"),
                s = n("773670"),
                l = n("575482"),
                a = n.n(l),
                r = n("865768"),
                u = n.n(r),
                o = n("117064"),
                d = n("498225"),
                c = n("407063"),
                _ = n("845579"),
                E = n("901165"),
                S = n("62843"),
                h = n("315102"),
                f = n("402671"),
                I = n("866190"),
                m = n("115279");
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
                            shouldAnimate: l,
                            isFocused: a,
                            isInteracting: r,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = m.EMOJI_SIZE_MAP[u];
                        return h.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === s && (!0 === l || o || !0 === r),
                            size: e
                        })
                    }
                    if (null != i) return f.default.getURL(i)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: l,
                        className: r,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: _,
                        autoplay: E,
                        isInteracting: S,
                        ...h
                    } = this.props, f = this.getSrc();
                    return null == f || "" === f ? (0, i.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (l && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, s.createElement)("img", {
                        ...h,
                        key: this.key,
                        src: f,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", r, {
                            jumboable: "jumbo" === u
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != _ && "" !== _ ? {
                            "data-id": _
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
            let O = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    l = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == i) return;
                            let s = i[1];
                            if (e.intersectionRatio >= .7) {
                                var l, a;
                                if (-1 !== t.indexOf(s)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
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
                    (0, o.isElement)(t) && (n.push([t, e]), l.observe(t))
                }

                function r(e) {
                    let i = u.findDOMNode(e);
                    l.unobserve(i);
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
                        n !== t && (n ? a(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: s,
                                allowAnimatedEmoji: l,
                                ...a
                            } = this.props;
                        return (0, i.jsx)(S.MessagesInteractionContext.Consumer, {
                            children: t => (0, i.jsx)(e, {
                                ...a,
                                autoplay: s || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && l
                            })
                        })
                    }
                }
            }(T);

            function p(e) {
                let t = _.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    s = __OVERLAY__ ? (0, d.useStateFromStores)([E.default], () => E.default.isInstanceFocused()) : (0, I.useIsWindowFocused)();
                return (0, i.jsx)(O, {
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
                    return f
                }
            });
            var i = n("920040");
            n("773670");
            var s = n("575482"),
                l = n.n(s),
                a = n("498225"),
                r = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                _ = n("782340"),
                E = n("685054");

            function S(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let h = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: s,
                    botVerified: a,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: S,
                    botClass: h,
                    showStreamerModeTooltip: f
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(E.info, d),
                    children: [(0, i.jsx)(r.Tooltip, {
                        text: _.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: f,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: l(E.username, c),
                            style: null != S ? {
                                color: S
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: l(E.infoSpacing, u),
                        children: n
                    }) : void 0, null != s && (0, i.jsx)(o.default, {
                        type: s,
                        className: l(E.infoSpacing, h),
                        verified: a
                    })]
                })
            };
            var f = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: s,
                    forceUsername: l,
                    showAccountIdentifier: r,
                    overrideDiscriminator: o,
                    forcePomelo: _,
                    ...E
                } = e, f = (0, a.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), I = f || t || n.isNonUserBot(), m = n.toString(), T = c.default.getName(n), O = l ? m : null != s ? s : T, p = n.isPomelo() || _;
                if (p || O !== m) {
                    let e = O === m && p && l ? c.default.getUserTag(n, {
                            forcePomelo: _
                        }) : O,
                        t = r && e !== "@".concat(m) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(h, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: S(n),
                        showStreamerModeTooltip: f && e !== T,
                        ...E
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: O,
                    botType: S(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: I || O !== m ? null : null != o ? o : n.discriminator,
                    ...E
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
                    return _
                },
                ApplicationStreamFPS: function() {
                    return r
                },
                ApplicationStreamPresets: function() {
                    return u
                },
                getApplicationFramerate: function() {
                    return E
                },
                ApplicationStreamPresetValues: function() {
                    return S
                },
                ApplicationStreamSettingRequirements: function() {
                    return h
                },
                ApplicationStreamResolutionButtons: function() {
                    return I
                },
                GoLiveDeviceResolutionButtons: function() {
                    return m
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return O
                },
                ApplicationStreamFPSButtons: function() {
                    return p
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return F
                }
            });
            var i, s, l, a, r, u, o = n("49111"),
                d = n("646718"),
                c = n("782340");

            function _(e) {
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

            function E(e) {
                switch (e) {
                    case r.FPS_5:
                        return r.FPS_5;
                    case r.FPS_15:
                        return r.FPS_15;
                    case r.FPS_30:
                        return r.FPS_30;
                    case r.FPS_60:
                        return r.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = a || (a = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (s = r || (r = {}))[s.FPS_5 = 5] = "FPS_5", s[s.FPS_15 = 15] = "FPS_15", s[s.FPS_30 = 30] = "FPS_30", s[s.FPS_60 = 60] = "FPS_60", (l = u || (u = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let S = {
                    [u.PRESET_DOCUMENTS]: [{
                        resolution: a.RESOLUTION_SOURCE,
                        fps: r.FPS_15
                    }, {
                        resolution: a.RESOLUTION_SOURCE,
                        fps: r.FPS_5
                    }],
                    [u.PRESET_VIDEO]: [{
                        resolution: a.RESOLUTION_1440,
                        fps: r.FPS_60
                    }, {
                        resolution: a.RESOLUTION_1080,
                        fps: r.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: r.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: r.FPS_30
                    }],
                    [u.PRESET_CUSTOM]: []
                },
                h = [{
                    resolution: a.RESOLUTION_SOURCE,
                    fps: r.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: r.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: r.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: r.FPS_5,
                    preset: u.PRESET_DOCUMENTS
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: r.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: r.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: r.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: r.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: r.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: r.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: r.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: r.FPS_30
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: r.FPS_15
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: r.FPS_5
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: r.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: r.FPS_30
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: r.FPS_15
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: r.FPS_5
                }];

            function f(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let I = [f(a.RESOLUTION_720), f(a.RESOLUTION_1080), f(a.RESOLUTION_1440), f(a.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                m = [f(a.RESOLUTION_720), f(a.RESOLUTION_1080), f(a.RESOLUTION_1440)],
                T = e => "".concat(e, "p"),
                O = [f(a.RESOLUTION_480, () => T(a.RESOLUTION_480)), f(a.RESOLUTION_720, () => T(a.RESOLUTION_720)), f(a.RESOLUTION_1080, () => T(a.RESOLUTION_1080)), f(a.RESOLUTION_1440, () => T(a.RESOLUTION_1440)), f(a.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                p = [f(r.FPS_15), f(r.FPS_30), f(r.FPS_60)],
                F = [f(r.FPS_15, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: r.FPS_15
                })), f(r.FPS_30, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: r.FPS_30
                })), f(r.FPS_60, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: r.FPS_60
                }))]
        },
        969715: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnfeatureItemConfirmationModal: function() {
                    return S
                },
                FeatureItemConfirmationModal: function() {
                    return h
                },
                FeatureMessageConfirmationModal: function() {
                    return f
                },
                FeatureForumPostConfirmationModal: function() {
                    return I
                }
            });
            var i = n("920040"),
                s = n("773670"),
                l = n("377849"),
                a = n.n(l),
                r = n("402924"),
                u = n("77078"),
                o = n("599417"),
                d = n("699473"),
                c = n("713810"),
                _ = n("782340"),
                E = n("234042");

            function S(e) {
                let {
                    featureableItem: t,
                    header: n,
                    body: l,
                    ...a
                } = e, [r, d] = s.useState(null), [E, S] = s.useState(!1);
                return (0, i.jsxs)(u.ConfirmModal, {
                    header: n,
                    confirmText: _.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
                    confirmButtonColor: u.Button.Colors.RED,
                    cancelText: _.default.Messages.CANCEL,
                    loading: E,
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
                        children: l
                    }), null != r && (0, i.jsx)(u.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: r.message
                    })]
                })
            }

            function h(e) {
                let {
                    featureableItem: t,
                    expiresSeconds: n,
                    header: l,
                    children: r,
                    options: d,
                    ...S
                } = e, [h, f] = s.useState(null), [I, m] = s.useState(!1);
                return (0, i.jsxs)(u.ConfirmModal, {
                    header: l,
                    confirmText: _.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: _.default.Messages.CANCEL,
                    confirmButtonColor: u.Button.Colors.BRAND,
                    loading: I,
                    onConfirm: async () => {
                        try {
                            let e = a().add(n, "second").toDate();
                            m(!0), await (0, c.featureGuildFeedItem)(t, e, d)
                        } catch (e) {
                            throw f(new o.default(e)), e
                        } finally {
                            m(!1)
                        }
                    },
                    ...S,
                    children: [null != h && (0, i.jsx)(u.Text, {
                        className: E.featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: h.message
                    }), r]
                })
            }

            function f(e) {
                let {
                    message: t,
                    guildId: n,
                    channel: s,
                    expiresSeconds: l,
                    timePeriod: a,
                    options: o,
                    ...c
                } = e;
                return (0, i.jsxs)(h, {
                    ...c,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: r.GuildFeedItemTypes.MESSAGE
                    },
                    header: _.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: l,
                    options: o,
                    children: [(0, i.jsx)(u.Text, {
                        className: E.featureModalText,
                        variant: "text-md/normal",
                        children: _.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: a
                        })
                    }), (0, i.jsx)("div", {
                        className: E.featureModalMessage,
                        children: (0, i.jsx)(d.default, {
                            channel: s,
                            message: t,
                            disableInteraction: !0
                        })
                    })]
                })
            }

            function I(e) {
                let {
                    thread: t,
                    guildId: n,
                    expiresSeconds: s,
                    timePeriod: l,
                    options: a,
                    ...o
                } = e;
                return (0, i.jsx)(h, {
                    ...o,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: r.GuildFeedItemTypes.FORUM_POST
                    },
                    header: _.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: s,
                    options: a,
                    children: (0, i.jsx)(u.Text, {
                        className: E.featureModalText,
                        variant: "text-md/normal",
                        children: _.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
                            threadName: t.name,
                            timePeriod: l
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
            var i = n("920040");
            n("773670");
            var s = n("744196"),
                l = n("719375");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, s.default)([l.default], () => l.default.isEnabled({
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
                    return r
                }
            });
            var i = n("773670"),
                s = n("744196"),
                l = n("526887"),
                a = n("719375");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, s.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = i.useMemo(() => ({
                    fire: (i, s, l) => {
                        var a, r;
                        let u = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(u);
                        e(i, s, o, (null !== (a = null == l ? void 0 : l.count) && void 0 !== a ? a : u.confettiCount) * (null !== (r = null == l ? void 0 : l.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == l ? void 0 : l.sprite
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
            var i = n("830841"),
                s = n("710835"),
                l = n("49111");

            function a(e) {
                let t = (0, i.matchPath)(null != e ? e : "", {
                    path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === l.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, i.matchPath)(null != e ? e : "", {
                    path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId")
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
                    return r
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var i = n("299039"),
                s = n("648564"),
                l = n("782340");
            let a = e => i.default.compare("992549565104128000", e) > -1,
                r = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = a(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                u = (e, t, n) => {
                    let i = r(e, n);
                    return "0" === i ? l.default.Messages.SEE_THREAD : t.format({
                        count: i
                    })
                },
                o = (e, t) => u(e, l.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return r.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var s = n("575482"),
                l = n.n(s),
                a = n("79798"),
                r = n("988268"),
                u = n("93888"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: s,
                        nameColor: r,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: _,
                        botClass: E,
                        botVerified: S = !1,
                        style: h,
                        useRemSizes: f = !1,
                        usernameIcon: I
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: l(o, u.nameTag),
                        style: h,
                        children: [(0, i.jsxs)("span", {
                            className: l(u.username, c),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [I, t]
                        }), null != n ? (0, i.jsxs)("span", {
                            className: null != _ ? _ : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, i.jsx)(a.default, {
                            type: d,
                            invertColor: s,
                            className: l(E, u.bot),
                            verified: S,
                            useRemSizes: f
                        }) : null]
                    })
                }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return s
                }
            });
            var i = n("773670");
            let s = i.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        938237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                markAnalyticsFeedItemSeen: function() {
                    return s
                },
                markAnalyticsFeedItemUnseen: function() {
                    return l
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

            function l(e, t, n) {
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
                    return l
                },
                ForceFlushType: function() {
                    return a
                },
                AnalyticsFeedItemSeenManager: function() {
                    return c
                }
            });
            var i, s, l, a, r = n("161179"),
                u = n.n(r),
                o = n("913144");
            (i = l || (l = {})).GUILD_HOME = "guild_home", i.FORUM_CHANNEL = "forum_channel", (s = a || (a = {}))[s.IMMEDIATE = 0] = "IMMEDIATE", s[s.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", s[s.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
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
                        let l = this.getTrackedFeedItem(s),
                            a = l.maybeMarkSeen(i);
                        null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, s, a)
                    }, this.handleFeedItemUnseen = e => {
                        var t;
                        let n = e.id,
                            i = e.timestampMillis,
                            s = e.feedItemId;
                        if (n !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(s);
                        let l = this.getTrackedFeedItem(s),
                            a = l.maybeMarkUnseen(i);
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
                    return _
                },
                getMobileDownloadLink: function() {
                    return E
                }
            });
            var i = n("892445"),
                s = n.n(i),
                l = n("568235"),
                a = n("271938"),
                r = n("49111");
            let u = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = null != n ? "&format=".concat(n) : "";
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(i)
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

            function _() {
                let e = d(),
                    t = e === u ? "tar.gz" : null;
                return o(e, !1, t)
            }

            function E(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: a.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);