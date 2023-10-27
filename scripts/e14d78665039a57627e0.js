(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56826"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("575482"),
                i = n.n(l),
                s = n("865768"),
                u = n.n(s),
                o = n("117064"),
                d = n("498225"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                m = n("62843"),
                E = n("315102"),
                p = n("402671"),
                _ = n("866190"),
                I = n("115279");
            class T extends a.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: r,
                            animated: a,
                            shouldAnimate: l,
                            isFocused: i,
                            isInteracting: s,
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
                            animated: i && !0 === a && (!0 === l || o || !0 === s),
                            size: e
                        })
                    }
                    if (null != r) return p.default.getURL(r)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: l,
                        className: s,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: m,
                        ...E
                    } = this.props, p = this.getSrc();
                    return null == p || "" === p ? (0, r.jsx)("span", {
                        className: i("emoji", "emoji-text"),
                        children: n
                    }) : (l && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...E,
                        key: this.key,
                        src: p,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: i("emoji", s, {
                            jumboable: "jumbo" === u
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
            T.defaultProps = {
                isInteracting: !1
            };
            let C = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    l = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == r) return;
                            let a = r[1];
                            if (e.intersectionRatio >= .7) {
                                var l, i;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function i(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), l.observe(t))
                }

                function s(e) {
                    let r = u.findDOMNode(e);
                    l.unobserve(r);
                    let a = n.findIndex(t => {
                        let [n, r] = t;
                        return r === e
                    }); - 1 !== a && (n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends a.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && i(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? i(this) : s(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: l,
                                ...i
                            } = this.props;
                        return (0, r.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...i,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && l
                            })
                        })
                    }
                }
            }(T);

            function v(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, _.useIsWindowFocused)();
                return (0, r.jsx)(C, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("575482"),
                l = n.n(a),
                i = n("498225"),
                s = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                h = n("685054");

            function m(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let E = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: a,
                    botVerified: i,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: E,
                    showStreamerModeTooltip: p
                } = e;
                return (0, r.jsxs)("div", {
                    className: l(h.info, d),
                    children: [(0, r.jsx)(s.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: p,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: l(h.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: l(h.infoSpacing, u),
                        children: n
                    }) : void 0, null != a && (0, r.jsx)(o.default, {
                        type: a,
                        className: l(h.infoSpacing, E),
                        verified: i
                    })]
                })
            };
            var p = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: a,
                    forceUsername: l,
                    showAccountIdentifier: s,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...h
                } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), _ = p || t || n.isNonUserBot(), I = n.toString(), T = c.default.getName(n), C = l ? I : null != a ? a : T, v = n.isPomelo() || f;
                if (v || C !== I) {
                    let e = C === I && v && l ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : C,
                        t = s && e !== "@".concat(I) ? c.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(E, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: p && e !== T,
                        ...h
                    })
                }
                return (0, r.jsx)(d.default, {
                    name: C,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: _ || C !== I ? null : null != o ? o : n.discriminator,
                    ...h
                })
            }
        },
        625665: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DoorPremiumIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2 10a9 9 0 0 1 9-9h2a9 9 0 0 1 9 9v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8Zm3.88-5.175A4 4 0 0 0 4 8.217v9.502a1 1 0 0 0 1.243.97l5.713-1.428A1.379 1.379 0 0 0 12 15.924V8.217c0-3.142-3.456-5.057-6.12-3.392ZM10 11a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm7.683-2.524c-.235-.635-1.131-.635-1.366 0l-.178.481a2 2 0 0 1-1.182 1.182l-.481.178c-.635.235-.635 1.131 0 1.366l.481.178a2 2 0 0 1 1.182 1.182l.178.481c.235.635 1.131.635 1.366 0l.178-.481a2 2 0 0 1 1.182-1.182l.481-.178c.634-.235.634-1.131 0-1.366l-.481-.178a2 2 0 0 1-1.182-1.182l-.178-.481ZM16 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20Zm1.867-5.246a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Zm5.02-5.236c-.133.425.359.65.674.335l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63Zm4.674 4.335c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Zm-3.132 3.526a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1Zm3.937 9.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: s
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var r = n("773670"),
                a = n("599110");
            let l = () => r.useContext(a.AnalyticsContext)
        },
        619335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var r = n("274870"),
                a = n("116320"),
                l = n("617559"),
                i = n("213523"),
                s = n("593195"),
                u = n("361777"),
                o = n("497757"),
                d = n("774223"),
                c = n("991497"),
                f = n("393621"),
                h = n("905999"),
                m = n("660074"),
                E = n("990745"),
                p = n("190986"),
                _ = n("721618"),
                I = n("733160"),
                T = n("990864"),
                C = n("274652"),
                v = n("922744"),
                g = n("155207"),
                S = n("745183"),
                M = n("368121"),
                R = n("944633"),
                N = n("228427"),
                A = n("959097"),
                L = n("656038"),
                x = n("49111");

            function O(e, t) {
                switch (e.type) {
                    case x.ChannelTypes.DM:
                        return a.default;
                    case x.ChannelTypes.GROUP_DM:
                        let n = (0, r.getIsBroadcastingGDM)(e.id);
                        return n ? d.default : g.default;
                    case x.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return C.default;
                        if ((0, L.default)(e)) return T.default;
                        else return I.default;
                    case x.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return i.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, L.default)(e)) return u.default;
                        else return s.default;
                    case x.ChannelTypes.GUILD_FORUM:
                        let O = e.isMediaChannel();
                        if (e.isNSFW()) return O ? _.default : h.default;
                        if ((0, L.default)(e)) return O ? p.default : f.default;
                        else return O ? E.default : c.default;
                    case x.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return _.default;
                        if ((0, L.default)(e)) return p.default;
                        else return E.default;
                    case x.ChannelTypes.GUILD_STAGE_VOICE:
                        return N.default;
                    case x.ChannelTypes.GUILD_VOICE:
                        if ((0, L.default)(e)) return R.default;
                        return M.default;
                    case x.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case x.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return v.default;
                        if (e.isForumPost()) return m.default;
                        else return A.default;
                    case x.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return v.default;
                        return S.default;
                    case x.ChannelTypes.GUILD_DIRECTORY:
                        return l.default;
                    default:
                        return null
                }
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("773670");
            let a = r.createContext(void 0);
            var l = a
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return m
                },
                canGuildUseRoleIcons: function() {
                    return E
                }
            });
            var r = n("867805"),
                a = n("407063"),
                l = n("315102"),
                i = n("773336"),
                s = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, i.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()))),
                h = (e, t) => {
                    let {
                        id: n,
                        icon: r
                    } = e;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let i = l.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(r, ".").concat(i, "?").concat(c).concat(f) : "".concat(o).concat(s.Endpoints.ROLE_ICON(n, r), "?").concat(c)
                },
                m = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                E = (e, t) => {
                    var n;
                    let r = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("990746"),
                a = n("913144"),
                l = n("479756"),
                i = n("38654"),
                s = n("9294"),
                u = n("26989"),
                o = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : o.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    i = !u.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: i,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return a.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    a.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, h = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                a.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, m = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                a.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, E = async (e, t) => {
                await r.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (i.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return a.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var _ = {
                fetchVerificationForm: f,
                updateVerificationForm: h,
                updateVerificationFormDescription: m,
                enableVerificationForm: E,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return i
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return o
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return h
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return m
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return E
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return _
                }
            });
            var r, a = n("567054");
            a.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([a.VerificationFormFieldTypes.TERMS]),
                i = new Set([a.VerificationFormFieldTypes.MULTIPLE_CHOICE, a.VerificationFormFieldTypes.TEXT_INPUT, a.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                u = 16,
                o = 300,
                d = 300,
                c = 8,
                f = 150,
                h = 150,
                m = 1e3,
                E = 300,
                p = "Membership Gating",
                _ = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return a
                }
            }), r = n("453265").default;
            let a = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return o
                }
            });
            var r = n("710835"),
                a = n("659500"),
                l = n("49111");
            let i = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, r.default)(e => i),
                u = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                o = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && a.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("551042"),
                l = n("599110"),
                i = n("50926"),
                s = n("347977"),
                u = n("394294"),
                o = n("49111");
            let d = () => {
                    l.default.track(o.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(o.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await i.default.submitVerificationForm(e, t)
                    };
                    (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, a.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, a.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return h
                }
            });
            var r = n("703275"),
                a = n.n(r),
                l = n("990746"),
                i = n("913144"),
                s = n("851387"),
                u = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await l.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                u.default.shouldFetch(e) && await d(e)
            }
            let f = new a({
                maxAge: 1e4
            });

            function h(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = "".concat(e, "-").concat(t);
                if (!n || null == f.get(r)) {
                    var a, i;
                    return f.set(r, !0), a = e, i = t, l.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(a, i)
                    }).then(e => (s.default.requestMembersById(a, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("498225"),
                a = n("913144");
            let l = {},
                i = {};
            class s extends r.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? l[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = i[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            s.displayName = "GuildRoleMemberCountStore";
            var u = new s(a.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    l[t] = n, i[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: r
                    } = e, a = l[t];
                    if (null == a) return !1;
                    a[n] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: r
                    } = e, a = l[t];
                    if (null == a || null == a[n]) return !1;
                    let i = Object.keys(r).length;
                    a[n] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, r = l[t];
                    if (null == r || null == r[n]) return !1;
                    r[n] = r[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, r = l[t];
                    if (null == r || null == r[n]) return !1;
                    r[n] = Math.max(r[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == l[t] && (l[t] = {}), l[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete l[t.id], delete i[t.id]
                }
            })
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                },
                PaymentPortalBody: function() {
                    return E
                },
                PaymentPortalFooter: function() {
                    return p
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("575482"),
                i = n.n(l),
                s = n("161179"),
                u = n.n(s),
                o = n("865768"),
                d = n.n(o),
                c = n("77078"),
                f = n("642906"),
                h = n("442750");

            function m(e) {
                var t, n, l, s, o, d;
                let {
                    header: m,
                    isLargeModal: E,
                    stepProps: p
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...r
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: r
                    }
                }(e), {
                    step: _,
                    stepConfigs: I,
                    setBodyNode: T,
                    setFooterNode: C,
                    setModalOverlayNode: v,
                    setReadySlideId: g
                } = (0, f.usePaymentContext)(), S = I.find(e => e.key === _);
                a.useEffect(() => {
                    v(null)
                }, [_, v]), u(null != S, "Unknown step for current payment flow.");
                let M = null !== (o = null == S ? void 0 : null === (t = S.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    R = null == S ? void 0 : null === (n = S.options) || void 0 === n ? void 0 : n.bodyClassName,
                    N = void 0 !== E && E ? h.sliderBodyLarge : null == S ? void 0 : null === (l = S.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null === (d = null == S ? void 0 : null === (s = S.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? m : null, S.renderStep(p), null == _ || M ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c.ModalContent, {
                            className: i(h.body, R),
                            children: (0, r.jsx)(c.Slides, {
                                activeSlide: _,
                                centered: !1,
                                onSlideReady: e => g(e),
                                children: I.filter(e => null != e.key).map(e => (0, r.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, r.jsx)("form", {
                                        className: i(h.sliderBody, N),
                                        ref: e => T(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, r.jsx)("div", {
                            ref: e => C(e)
                        }), (0, r.jsx)("div", {
                            ref: e => v(e)
                        })]
                    })]
                })
            }

            function E(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function p(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("744196"),
                l = n("719375");

            function i(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, i = (0, a.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return i ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("773670"),
                a = n("744196"),
                l = n("526887"),
                i = n("719375");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = r.useContext(l.ConfettiCannonContext), t = (0, a.default)([i.default], () => i.default.getState()), n = r.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = r.useMemo(() => ({
                    fire: (r, a, l) => {
                        var i, s;
                        let u = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(u);
                        e(r, a, o, (null !== (i = null == l ? void 0 : l.count) && void 0 !== i ? i : u.confettiCount) * (null !== (s = null == l ? void 0 : l.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return m
                },
                maybeFetchPremiumLikelihood: function() {
                    return p
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return _
                }
            });
            var r = n("773670"),
                a = n("744196"),
                l = n("990746"),
                i = n("913144"),
                s = n("775433"),
                u = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                h = n("49111");
            let m = "nonSubscriber";
            async function E() {
                try {
                    i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [m]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = c.default.shouldFetchPremiumLikelihood(), a = u.default.getCurrentUser();
                I(a, r, t, n)
            }

            function _(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, a.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), i = (0, a.default)([u.default], () => u.default.getCurrentUser());
                r.useEffect(() => {
                    I(i, l, t, n)
                }, [i, l, t, n])
            }

            function I(e, t, n, r) {
                null != e && !(0, d.isPremium)(e) && n && (t && E(), r && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("498225"),
                a = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                i = l;
            class s extends r.default.Store {
                initialize() {
                    i = l
                }
                getState() {
                    return i
                }
                shouldFetchPremiumLikelihood() {
                    return !i.isFetching && !i.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var u = new s(a.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    i.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    i.premiumLikelihood = t, i.fetched = !0, i.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    i.isFetching = !1
                },
                LOGOUT: function() {
                    i.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = a
        },
        134947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackThreadBrowserTab: function() {
                    return T
                },
                useActiveThreads: function() {
                    return C
                },
                useActiveGuildThreads: function() {
                    return v
                },
                useArchivedThreads: function() {
                    return g
                }
            });
            var r = n("773670"),
                a = n("427964"),
                l = n.n(a),
                i = n("498225"),
                s = n("404607"),
                u = n("42203"),
                o = n("957255"),
                d = n("660478"),
                c = n("449008"),
                f = n("299039"),
                h = n("689275"),
                m = n("821343"),
                E = n("755624"),
                p = n("263024"),
                _ = n("487269"),
                I = n("809924");

            function T() {
                r.useEffect(() => {
                    (0, _.trackThreadBrowserTab)()
                }, [])
            }

            function C(e) {
                let t = function(e) {
                        let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => l(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => o.default.can(I.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return r.useMemo(() => l(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [n, a] = (0, i.useStateFromStores)([E.default], () => l.partition(t, e => E.default.hasJoined(e)), [t], i.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: n,
                    unjoinedThreadIds: a
                }
            }

            function v(e) {
                let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => l(h.default.getThreadsForGuild(e)).values().map(e => l.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return u.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => o.default.can(I.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return r.useMemo(() => l(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
            }

            function g(e, t, n) {
                let {
                    canLoadMore: a,
                    loading: d,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, i.useStateFromStoresObject)([m.default], () => ({
                    loading: m.default.isLoading(e.id, t, n),
                    isInitialLoad: m.default.isInitialLoad,
                    canLoadMore: m.default.canLoadMore,
                    nextOffset: m.default.nextOffset
                })), h = r.useCallback(() => {
                    o.default.can(I.Permissions.READ_MESSAGE_HISTORY, e) && p.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
                }, [e, t, n, c]);
                r.useEffect(() => {
                    f && h()
                }, [e.id, t, n, f]), r.useEffect(() => {
                    s.default.resort(e.id)
                }, [e.id]);
                let E = (0, i.useStateFromStoresArray)([m.default, u.default, o.default], () => l(m.default.getThreads(e.id, t, n)).filter(e => {
                    let t = u.default.getChannel(e);
                    return null != t && o.default.can(I.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: E,
                    canLoadMore: a,
                    loading: d || f,
                    loadMore: h
                }
            }
        },
        557872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("575482"),
                i = n.n(l),
                s = n("77078"),
                u = n("134947"),
                o = n("913979"),
                d = n("684992");

            function c(e) {
                let {
                    guildId: t,
                    goToThread: n
                } = e, l = (0, u.useActiveGuildThreads)(t), c = a.useCallback(e => {
                    let t = l[e.row];
                    return (0, r.jsx)(o.default, {
                        threadId: t,
                        goToThread: n,
                        showChannelName: !0
                    }, "".concat(e.section, "-").concat(e.row))
                }, [l, n]);
                return (0, r.jsx)(s.List, {
                    className: i(d.list, d.activeThreadsList),
                    fade: !0,
                    sections: [l.length],
                    renderSection: () => null,
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: c,
                    chunkSize: 20
                })
            }
        },
        469755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("77078"),
                l = n("945330"),
                i = n("959097"),
                s = n("557872"),
                u = n("967241"),
                o = n("648564"),
                d = n("782340"),
                c = n("702959");

            function f(e) {
                let {
                    guildId: t,
                    onClose: n,
                    transitionState: f
                } = e;
                return (0, r.jsx)(a.ModalRoot, {
                    className: c.modal,
                    transitionState: f,
                    "aria-label": d.default.Messages.THREADS,
                    size: a.ModalSize.DYNAMIC,
                    children: (0, r.jsxs)("div", {
                        className: c.container,
                        children: [(0, r.jsxs)("div", {
                            className: c.header,
                            children: [(0, r.jsx)(i.default, {
                                className: c.threadIcon
                            }), (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                className: c.title,
                                children: d.default.Messages.ALL_ACTIVE_THREADS
                            }), (0, r.jsx)("div", {
                                className: c.spacer
                            }), (0, r.jsx)(a.Clickable, {
                                className: c.closeIcon,
                                onClick: n,
                                "aria-label": d.default.Messages.CLOSE,
                                children: (0, r.jsx)(l.default, {})
                            })]
                        }), (0, r.jsx)(s.default, {
                            guildId: t,
                            goToThread: (e, t) => {
                                n(), (0, u.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
                            }
                        })]
                    })
                })
            }
        },
        913979: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("498225"),
                i = n("77078"),
                s = n("272030"),
                u = n("42203"),
                o = n("124948"),
                d = n("697218"),
                c = n("811305"),
                f = n("800843"),
                h = n("442184"),
                m = n("648564"),
                E = n("159278"),
                p = a.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: a,
                        showChannelName: o
                    } = e, d = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
                    return (0, r.jsxs)(i.Clickable, {
                        className: E.container,
                        onClick: e => a(d, e.shiftKey),
                        onContextMenu: e => (0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("994827").then(n.bind(n, "994827"));
                            return t => (0, r.jsx)(e, {
                                ...t,
                                channel: d
                            })
                        }),
                        children: [(0, r.jsxs)("div", {
                            className: E.left,
                            children: [(0, r.jsxs)(i.Heading, {
                                className: E.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, r.jsx)("span", {
                                    className: E.threadName,
                                    children: d.name
                                }), o && null != c ? (0, r.jsx)("span", {
                                    className: E.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, h.default)(d)]
                        }), (0, r.jsx)(_, {
                            channel: d
                        })]
                    })
                });

            function _(e) {
                var t, n;
                let {
                    channel: i
                } = e, s = (0, l.useStateFromStores)([f.default], () => null !== (t = f.default.getMemberIdsPreview(i.id)) && void 0 !== t ? t : []), u = (0, l.useStateFromStores)([f.default], () => null !== (n = f.default.getMemberCount(i.id)) && void 0 !== n ? n : 0), h = (0, l.useStateFromStoresArray)([d.default], () => s.map(e => d.default.getUser(e)));
                return (a.useEffect(() => {
                    s.filter((e, t) => null == h[t]).forEach(e => {
                        o.default.requestMember(i.guild_id, e)
                    })
                }, []), 0 === s.length) ? null : (0, r.jsx)(c.default, {
                    className: E.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: i.guild_id,
                    users: h,
                    count: u,
                    max: m.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
        },
        442184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("498225"),
                i = n("77078"),
                s = n("308289"),
                u = n("750560"),
                o = n("619335"),
                d = n("95045"),
                c = n("574073"),
                f = n("26989"),
                h = n("660478"),
                m = n("27618"),
                E = n("697218"),
                p = n("959097"),
                _ = n("708062"),
                I = n("299039"),
                T = n("158998"),
                C = n("610730"),
                v = n("487269"),
                g = n("719347"),
                S = n("782340"),
                M = n("159278");

            function R(e) {
                return e.isActiveThread() ? (0, r.jsx)(N, {
                    channel: e
                }) : (0, r.jsx)(x, {
                    channel: e
                })
            }

            function N(e) {
                let {
                    channel: t
                } = e, n = (0, l.useStateFromStores)([C.default], () => C.default.getMostRecentMessage(t.id));
                return null == n ? (0, r.jsx)(A, {
                    channel: t
                }) : (0, r.jsx)(L, {
                    channel: t,
                    message: n
                })
            }

            function A(e) {
                let {
                    channel: t
                } = e, n = (0, v.useLastMessageTimestamp)(t);
                return (0, r.jsxs)(i.Text, {
                    className: M.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [S.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, v.getTimestampString)(n)]
                })
            }

            function L(e) {
                var t;
                let {
                    channel: n,
                    message: o
                } = e;
                (0, u.useSubscribeGuildMembers)({
                    [n.guild_id]: [o.author.id]
                });
                let f = (0, l.useStateFromStores)([E.default], () => null !== (t = E.default.getUser(o.author.id)) && void 0 !== t ? t : o.author),
                    {
                        nick: h,
                        colorString: p
                    } = (0, c.default)(o),
                    T = (0, l.useStateFromStores)([m.default], () => m.default.isBlocked(o.author.id)),
                    C = a.useMemo(() => {
                        let e = null != o.content && "" !== o.content ? (0, d.default)(o, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: n,
                                icon: a
                            } = (0, _.renderSingleLineMessage)(o, e, T, M.messageContent, {
                                iconClass: M.messageContentIcon,
                                iconSize: g.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, r.jsxs)(r.Fragment, {
                            children: [null != n ? n : (0, r.jsx)("span", {
                                children: t
                            }), a]
                        })
                    }, [o, T]);
                return (0, r.jsxs)(i.Text, {
                    className: M.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, r.jsx)(s.default, {
                        className: M.avatar,
                        user: f,
                        size: i.AvatarSizes.SIZE_16
                    }), (0, r.jsx)(i.NameWithRole, {
                        name: h,
                        color: p,
                        className: M.authorName
                    }), ":\xa0", C, "\xa0 • \xa0", (0, v.getTimestampString)(I.default.extractTimestamp(o.id))]
                })
            }

            function x(e) {
                var t, n, a;
                let {
                    channel: d
                } = e, c = (0, l.useStateFromStores)([h.default], () => h.default.lastMessageId(d.id)), m = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : I.default.extractTimestamp(c);
                (0, u.useSubscribeGuildMembers)({
                    [d.guild_id]: [d.ownerId]
                });
                let _ = (0, l.useStateFromStores)([E.default], () => E.default.getUser(d.ownerId)),
                    C = (0, l.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
                    g = null !== (a = (0, o.default)(d)) && void 0 !== a ? a : p.default;
                return (0, r.jsx)(i.Text, {
                    className: M.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == _ ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: M.noAvatarIcon,
                            children: (0, r.jsx)(g, {
                                width: 10,
                                height: 10
                            })
                        }), S.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, v.getTimestampString)(m)
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.default, {
                            className: M.avatar,
                            user: _,
                            size: i.AvatarSizes.SIZE_16
                        }), S.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var n, a;
                                return (0, r.jsx)(i.NameWithRole, {
                                    className: M.startedByName,
                                    color: null !== (n = null == C ? void 0 : C.colorString) && void 0 !== n ? n : void 0,
                                    name: null !== (a = null == C ? void 0 : C.nick) && void 0 !== a ? a : T.default.getName(_)
                                }, t)
                            }
                        }), (0, r.jsx)("span", {
                            className: M.bullet,
                            children: "•"
                        }), S.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, v.getTimestampString)(m)
                        })]
                    })
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return g
                },
                openThreadSidebarForCreating: function() {
                    return S
                },
                closeThreadSidebar: function() {
                    return M
                },
                closeAndClearThreadSidebar: function() {
                    return R
                }
            });
            var r = n("161179"),
                a = n.n(r),
                l = n("427964"),
                i = n.n(l),
                s = n("913144"),
                u = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                h = n("144491"),
                m = n("845579"),
                E = n("474643"),
                p = n("18494"),
                _ = n("800762"),
                I = n("659500"),
                T = n("648564"),
                C = n("49111"),
                v = n("724210");

            function g(e, t, n) {
                o.MainWindowDispatch.dispatch(C.ComponentActions.POPOUT_CLOSE);
                let r = !i.isEmpty(_.default.getVoiceStatesForChannel(e.id));
                if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
                    s.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let l = p.default.getChannelId();
                e.parent_id !== l && !(0, v.isGuildHomeChannel)(l) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(C.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, v.isGuildHomeChannel)(l) ? v.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? T.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    I.ComponentDispatch.dispatch(C.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function S(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(C.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(C.ComponentActions.POPOUT_CLOSE), p.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
                let r = E.default.getDraft(e.id, E.DraftType.FirstThreadMessage);
                if ("" === r) {
                    let t = E.default.getDraft(e.id, E.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", E.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, E.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    s.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function M(e, t) {
                (0, f.transitionTo)(C.Routes.CHANNEL(e, (0, v.isGuildHomeChannel)(t) ? v.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function R(e) {
                s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: E.DraftType.FirstThreadMessage
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: E.DraftType.ThreadSettings
                })
            }
        },
        79798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("575482"),
                l = n.n(a),
                i = n("414055"),
                s = n("486952"),
                u = n("988268"),
                o = n("782340"),
                d = n("181163");
            let c = e => {
                let t, {
                        invertColor: n = !1,
                        type: a = u.BotTagTypes.BOT,
                        className: c,
                        verified: f,
                        hideIcon: h = !1,
                        useRemSizes: m = !1,
                        children: E = []
                    } = e,
                    p = null,
                    _ = o.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (a) {
                    case u.BotTagTypes.SYSTEM_DM:
                    case u.BotTagTypes.OFFICIAL:
                        f = !0, _ = o.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, p = o.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case u.BotTagTypes.SERVER:
                        p = o.default.Messages.BOT_TAG_SERVER;
                        break;
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        p = o.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case u.BotTagTypes.STAFF_ONLY_DM:
                        p = o.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case u.BotTagTypes.AI:
                        f = !0, _ = o.default.Messages.AI_GENERATED_TOOLTIP, p = o.default.Messages.AI_TAG;
                        break;
                    case u.BotTagTypes.REMIX:
                        f = !1, p = o.default.Messages.REMIXING_TAG;
                        break;
                    case u.BotTagTypes.BOT:
                    default:
                        p = o.default.Messages.BOT_TAG_BOT
                }
                let I = a === u.BotTagTypes.ORIGINAL_POSTER,
                    T = a === u.BotTagTypes.REMIX,
                    C = null;
                f && (C = (0, r.jsx)(i.Tooltip, {
                    text: _,
                    align: "center",
                    position: "top",
                    children: e => (0, r.jsx)(s.default, {
                        ...e,
                        className: d.botTagVerified
                    })
                })), t = a === u.BotTagTypes.AI ? d.botTagAI : n ? d.botTagInvert : d.botTagRegular;
                let v = e => (0, r.jsxs)("span", {
                    ...e,
                    className: l(c, t, m ? d.rem : d.px, {
                        [d.botTagOP]: I,
                        [d.botTagRemix]: T
                    }),
                    children: [h ? null : C, E, (0, r.jsx)("span", {
                        className: d.botText,
                        children: p
                    })]
                });
                switch (a) {
                    case u.BotTagTypes.REMIX:
                        return (0, r.jsx)(i.Tooltip, {
                            text: o.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => v(e)
                        });
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        return (0, r.jsx)(i.Tooltip, {
                            text: o.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => v(e)
                        });
                    default:
                        return v()
                }
            };
            c.Types = u.BotTagTypes;
            var f = c
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("77078"),
                i = n("393414"),
                s = n("49111"),
                u = a.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: u,
                        onClick: o,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, h = a.useCallback(e => {
                        !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, i.transitionTo)(n), null == o || o()), null == d || d(e))
                    }, [n, d, o]), m = a.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, i.transitionTo)(n), null == o || o())
                    }, [n, o]), E = (0, r.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: m,
                        onKeyPress: h,
                        ...f,
                        children: u
                    });
                    return (0, r.jsx)(l.FocusRing, {
                        ...c,
                        children: E
                    })
                })
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return s.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("575482"),
                l = n.n(a),
                i = n("79798"),
                s = n("988268"),
                u = n("93888"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: a,
                        nameColor: s,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: h,
                        botVerified: m = !1,
                        style: E,
                        useRemSizes: p = !1,
                        usernameIcon: _
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: l(o, u.nameTag),
                        style: E,
                        children: [(0, r.jsxs)("span", {
                            className: l(u.username, c),
                            style: null != s ? {
                                color: s
                            } : void 0,
                            children: [_, t]
                        }), null != n ? (0, r.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, r.jsx)(i.default, {
                            type: d,
                            invertColor: a,
                            className: l(h, u.bot),
                            verified: m,
                            useRemSizes: p
                        }) : null]
                    })
                }
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("920040");

            function a(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, a = n ? t : 1, l = n ? 1 : t;
                return (0, r.jsx)("span", {
                    style: {
                        display: "block",
                        width: a,
                        minWidth: a,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("773670")
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return a
                }
            });
            var r = n("773670");
            let a = r.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                l = n("926001"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon)
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("575482"),
                l = n.n(a),
                i = n("384737"),
                s = n("448052"),
                u = n("748802"),
                o = n("260792"),
                d = n("77078"),
                c = n("75196"),
                f = n("246604");
            let h = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                m = e => {
                    let {
                        direction: t = h.DOWN,
                        width: n = 24,
                        height: a = 24,
                        color: m = "currentColor",
                        transition: E = f.transition,
                        className: p,
                        foreground: _,
                        expanded: I,
                        ...T
                    } = e, {
                        enabled: C
                    } = (0, d.useRedesignIconContext)(), v = t;
                    if (!0 === I ? v = h.DOWN : !1 === I && (v = h.RIGHT), C) {
                        let e = {
                            [h.UP]: o.ChevronSmallUpIcon,
                            [h.DOWN]: i.ChevronSmallDownIcon,
                            [h.LEFT]: s.ChevronSmallLeftIcon,
                            [h.RIGHT]: u.ChevronSmallRightIcon
                        } [v];
                        return (0, r.jsx)(e, {
                            ...T,
                            className: p,
                            width: n,
                            height: a,
                            color: m,
                            colorClass: _
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: l(p, E, v),
                        width: n,
                        height: a,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(T),
                        children: (0, r.jsx)("path", {
                            className: _,
                            fill: "none",
                            stroke: m,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            m.Directions = h;
            var E = m
        },
        774223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                l = n("625665"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: l,
                        foreground: s,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(u),
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                        })
                    })
                }, l.DoorPremiumIcon)
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("912557"),
                l = n("469563"),
                i = n("163725"),
                s = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foregroundColor: i = a.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: o,
                        ...d
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("rect", {
                            fill: i,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, r.jsx)("path", {
                            fill: l,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, i.EyeSlashIcon)
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                l = n("578478"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: a
                        })
                    })
                }, l.ImageIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                l = n("811513"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            className: l,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, r.jsx)("path", {
                            className: l,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, r.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, r.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, l.GroupIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("469563"),
                l = n("876726"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: l,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: a
                        })
                    })
                }, l.PlayIcon)
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return I
                },
                default: function() {
                    return g
                }
            });
            var r = n("920040"),
                a = n("773670"),
                l = n("575482"),
                i = n.n(l),
                s = n("161179"),
                u = n.n(s),
                o = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                h = n("697218"),
                m = n("368121"),
                E = n("523096"),
                p = n("587974"),
                _ = n("320017");
            let I = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function T(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }

            function C(e) {
                return (0, r.jsx)("div", {
                    className: _.moreUsers,
                    children: e
                })
            }
            class v extends a.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: a,
                        extraDetail: l
                    } = this.props, i = [], s = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(s), o = 0;
                    for (; o < s && o < e.length;) {
                        var d;
                        let t = null == u && null == l && o === e.length - 1,
                            s = n(e[o], t, o);
                        i.push(t ? (0, r.jsx)("div", {
                            className: _.avatarContainer,
                            children: s
                        }, T(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, r.jsx)(p.default, {
                            className: _.avatarContainerMasked,
                            height: a,
                            width: a,
                            mask: p.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, T(e[o], o))), o++
                    }
                    return null != l ? i.push(l) : null != u && i.push(u), i
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: i,
                        users: s
                    } = this.props, u = Math.min(e, s.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(a.Fragment, {
                                children: i("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, r.jsx)(a.Fragment, {
                                    children: i("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < s.length) {
                            let e = Math.min(s.length - u, 99);
                            return (0, r.jsx)(a.Fragment, {
                                children: i("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(m.default, {
                        foreground: _.foreground,
                        className: _.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: a,
                        showUserPopout: l,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, m = n.find(e => null != e && e.id === f), E = s && null == h.default.getUser(f);
                    return (0, r.jsx)(o.Popout, {
                        position: "right",
                        preload: null == m ? void 0 : () => (0, d.default)(m.id, m.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(c.default, {
                            ...this.props,
                            user: E && null != m ? m : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: i(e, _.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.SIZE_24;
                                switch (e) {
                                    case I.SIZE_16:
                                        return _.size16;
                                    case I.SIZE_24:
                                        return _.size24;
                                    case I.SIZE_32:
                                        return _.size32;
                                    case I.SIZE_56:
                                        return _.size56;
                                    default:
                                        return _.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = a.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: a,
                            guildId: l,
                            size: i
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: _.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % E.default.DEFAULT_AVATARS.length,
                                    t = E.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: _.avatar
                                })
                            }
                        }
                        let s = (0, r.jsx)("img", {
                            src: e.getAvatarURL(l, i),
                            alt: e.username,
                            className: _.avatar
                        }, e.id);
                        return a ? (0, r.jsx)(o.Clickable, {
                            className: _.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            v.defaultProps = {
                max: 10,
                renderMoreUsers: C,
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: I.SIZE_24
            };
            var g = v
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return i
                },
                copy: function() {
                    return s
                }
            });
            var r = n("895393"),
                a = n("773336"),
                l = n("50885");
            let i = (() => {
                if (a.isPlatformEmbedded) return null != l.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function s(e) {
                return !!i && (a.isPlatformEmbedded ? (l.default.copy(e), !0) : r.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var r = n("773670"),
                a = n("498225"),
                l = n("244201"),
                i = n("471671");

            function s() {
                let {
                    windowId: e
                } = r.useContext(l.default);
                return (0, a.useStateFromStores)([i.default], () => i.default.isFocused(e), [e])
            }
        }
    }
]);