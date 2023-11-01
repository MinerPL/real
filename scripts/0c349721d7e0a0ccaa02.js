(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67578"], {
        361345: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7a280f89e607805835b8.png"
        },
        627771: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1998dcf226b71188b1bb.png"
        },
        202023: function(e, t, n) {
            "use strict";
            e.exports = n.p + "41fc6b68fd6791249f24.png"
        },
        626964: function(e, t, n) {
            "use strict";
            e.exports = n.p + "967ea9a6f0917ccea479.png"
        },
        937549: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5cf339c022ee100316f1.png"
        },
        674303: function(e, t, n) {
            "use strict";
            e.exports = n.p + "969507450abcd9cdd0f8.png"
        },
        475577: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c19dbbb190412b96403e.png"
        },
        365127: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6ca564c0842e4bf922a9.png"
        },
        711737: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d886ddab54ac6aa53568.png"
        },
        361784: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6ecfa3eb0eb955e3006a.png"
        },
        134647: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9d40ac01a4c79449fa1c.png"
        },
        856931: function(e, t, n) {
            "use strict";
            e.exports = n.p + "48956fccb1adf21b366d.png"
        },
        160864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                a = n.n(i),
                o = n("77078"),
                l = n("716849"),
                u = n("552917"),
                c = n("109036"),
                d = n("336522"),
                _ = n("782340"),
                f = n("831839"),
                E = n("4184");

            function p() {
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("div", {
                        className: a(E.sparkleWhite, f.sparkleOne)
                    }), (0, s.jsx)("div", {
                        className: a(E.sparkleWhite, f.sparkleTwo)
                    }), (0, s.jsx)("div", {
                        className: a(E.lightWhite, f.lightOne)
                    }), (0, s.jsx)("div", {
                        className: a(E.lightWhite, f.lightTwo)
                    }), (0, s.jsx)("div", {
                        className: a(E.crossWhite, f.crossOne)
                    }), (0, s.jsx)("div", {
                        className: a(E.crossWhite, f.crossTwo)
                    }), (0, s.jsx)("div", {
                        className: a(E.popWhite, f.popOne)
                    })]
                })
            }
            class R extends r.Component {
                componentDidMount() {
                    let e = this.elementDOMRef.current;
                    null != e && (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1), e.addEventListener("dragover", this.handleDragOverZone, !1), e.addEventListener("dragleave", this.handleDragLeaveZone, !1), e.addEventListener("drop", this.handleDrop, !1))
                }
                componentWillUnmount() {
                    let e = this.elementDOMRef.current;
                    null != e && (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1), e.removeEventListener("dragover", this.handleDragOverZone, !1), e.removeEventListener("dragleave", this.handleDragLeaveZone, !1), e.removeEventListener("drop", this.handleDrop, !1)), clearTimeout(this.dragOverTimeout)
                }
                render() {
                    let {
                        title: e,
                        description: t,
                        icons: n,
                        style: r,
                        className: i
                    } = this.props;
                    return (0, s.jsx)("div", {
                        ref: this.elementDOMRef,
                        className: a(i, f.uploadArea, {
                            [f.droppable]: this.state.isDragging,
                            [f.uploadModalIn]: this.state.isOverZone
                        }),
                        style: r,
                        children: (0, s.jsxs)("div", {
                            className: f.uploadDropModal,
                            children: [this.state.isDragging && (0, s.jsx)(p, {}), (0, s.jsx)("div", {
                                className: f.bgScale
                            }), (0, s.jsxs)("div", {
                                className: f.inner,
                                children: [(0, s.jsx)(c.default, {
                                    icons: n
                                }), (0, s.jsx)("div", {
                                    className: f.title,
                                    children: e
                                }), (0, s.jsx)("div", {
                                    className: f.instructions,
                                    children: (0, s.jsx)("pre", {
                                        children: t
                                    })
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        isDragging: !1,
                        isOverZone: !1
                    }, this.dragOverTimeout = null, this.elementDOMRef = r.createRef(), this.isAllDropFiles = e => {
                        for (let n = 0; n < e.length; n++) try {
                            var t;
                            let s = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
                            if (s && !s.isFile) return !1
                        } catch (e) {
                            continue
                        }
                        return !0
                    }, this.preventUnwantedDrop = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            s = e.dataTransfer;
                        if (null == s) return !0;
                        let r = Array.isArray(s.types) && -1 !== s.types.indexOf("text/uri-list") && -1 === s.types.indexOf("application/json"),
                            i = null != s.items && !t.isAllDropFiles(s.items);
                        return !r && !i || (e.stopPropagation(), e.preventDefault(), s.effectAllowed = "none", s.dropEffect = "none", n && (t.setState({
                            isDragging: !1
                        }), (0, d.openUploadError)({
                            title: _.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
                            help: _.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
                            icons: t.props.icons
                        })), !1)
                    }, this.handleDragOver = e => {
                        var t, n, s;
                        if (!this.preventUnwantedDrop(e)) return !1;
                        let r = e.dataTransfer;
                        if (null == r) return;
                        r.dropEffect = "copy";
                        let i = (0, o.hasModalOpen)(d.UPLOAD_ERROR_MODAL_KEY);
                        if (i && (0, o.closeModal)(d.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging) {
                            (0, l.maybeFetchPremiumLikelihood)(u.default);
                            let e = null === (s = this.elementDOMRef.current) || void 0 === s ? void 0 : s.ownerDocument.defaultView,
                                t = null != e && r.types instanceof e.DOMStringList && r.types.contains("application/x-moz-file");
                            (t || -1 !== r.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
                                isDragging: !0
                            })
                        }
                        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({
                                isDragging: !1
                            }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
                        }, 1e3)
                    }, this.handleDragOverZone = () => {
                        this.setState({
                            isOverZone: !0
                        })
                    }, this.handleDragLeaveZone = () => {
                        this.setState({
                            isOverZone: !1
                        })
                    }, this.handleDragLeave = e => {
                        this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
                    }, this.clearDragging = () => {
                        var e, t;
                        this.setState({
                            isDragging: !1,
                            isOverZone: !1
                        }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
                    }, this.handleDrop = e => {
                        if (!this.preventUnwantedDrop(e, !0)) return !1;
                        let t = e.dataTransfer;
                        if (null == t) return !0;
                        this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
                    }
                }
            }
            var L = R
        },
        594203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ResizeOrientation: function() {
                    return i
                },
                default: function() {
                    return c
                }
            });
            var s, r, i, a, o = n("884691"),
                l = n("917351");

            function u(e) {
                return e === i.HORIZONTAL_LEFT || e === i.HORIZONTAL_RIGHT ? a.HORIZONTAL : a.VERTICAL
            }(s = i || (i = {}))[s.VERTICAL_TOP = 0] = "VERTICAL_TOP", s[s.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", s[s.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", s[s.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (r = a || (a = {}))[r.VERTICAL = 0] = "VERTICAL", r[r.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: s,
                    minDimension: r,
                    onElementResize: c,
                    onElementResizeEnd: d,
                    throttleDuration: _ = 300,
                    orientation: f,
                    usePointerEvents: E = !1
                } = e, [p, R] = o.useState(!1), L = o.useRef(0), I = o.useRef(null == t ? 0 : t);
                return o.useLayoutEffect(() => {
                    if (!p || null == n.current) return;

                    function e(e) {
                        let t = u(f) === a.HORIZONTAL ? e.screenX : e.screenY,
                            n = f === i.VERTICAL_TOP || f === i.HORIZONTAL_LEFT,
                            o = (t - L.current) * (n ? -1 : 1),
                            c = I.current + o;
                        return (0, l.clamp)(c, null != r ? r : 0, null != s ? s : c)
                    }
                    let t = (0, l.throttle)(c, _),
                        o = s => {
                            if (null == n.current) return null;
                            let r = e(s),
                                i = u(f) === a.HORIZONTAL ? "width" : "height";
                            n.current.style[i] = "".concat(r, "px"), t(r)
                        },
                        g = t => {
                            R(!1);
                            let n = e(t);
                            c(n), null == d || d(n)
                        },
                        P = E ? "pointerup" : "mouseup",
                        O = E ? "pointermove" : "mousemove",
                        U = n.current.ownerDocument;
                    return U.addEventListener(P, g), U.addEventListener(O, o), () => {
                        U.removeEventListener(P, g), U.removeEventListener(O, o), t.cancel()
                    }
                }, [p, c, r, s, f, n, _, d, E]), o.useCallback(e => {
                    let t = u(f) === a.HORIZONTAL;
                    null != n.current && (I.current = t ? n.current.offsetWidth : n.current.offsetHeight), L.current = t ? e.screenX : e.screenY, R(!0)
                }, [f, n])
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("884691");
            let r = s.createContext(void 0);
            var i = r
        },
        944305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                customRoleIconUpsellPerks: function() {
                    return m
                },
                guildBannerUpsellPerks: function() {
                    return C
                },
                animatedGuildBannerUpsellPerks: function() {
                    return G
                },
                vanityUrlUpsellPerks: function() {
                    return x
                },
                guildInviteUpsellPerks: function() {
                    return w
                },
                guildBoostingPerks: function() {
                    return b
                },
                premiumProgressBarUpsellPerks: function() {
                    return K
                }
            });
            var s = n("669491"),
                r = n("245307"),
                i = n("571658"),
                a = n("118503"),
                o = n("110006"),
                l = n("682344"),
                u = n("238521"),
                c = n("394832"),
                d = n("290581"),
                _ = n("595086"),
                f = n("885541"),
                E = n("49111");
            n("646718");
            var p = n("782340");
            let R = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.default,
                    description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
                }),
                L = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
                    return {
                        color: e,
                        icon: o.default,
                        description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
                    }
                },
                I = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.default,
                    description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
                }),
                g = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: o.default,
                    description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
                }),
                P = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                    icon: l.default,
                    description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
                }),
                O = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
                    return {
                        color: e,
                        icon: _.default,
                        description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
                    }
                },
                U = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                        n = 0,
                        r = 0;
                    switch (e) {
                        case E.BoostedGuildTiers.TIER_1:
                            n = 15, r = 100;
                            break;
                        case E.BoostedGuildTiers.TIER_2:
                            n = 30, r = 150;
                            break;
                        case E.BoostedGuildTiers.TIER_3:
                            n = 60, r = 250
                    }
                    return {
                        color: t,
                        icon: _.default,
                        description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                            numStickers: n,
                            numEmojis: r
                        })
                    }
                },
                h = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                    icon: d.default,
                    description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
                }),
                M = () => ({
                    icon: r.default,
                    description: p.default.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
                }),
                v = () => ({
                    icon: a.default,
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_PINK.css,
                    description: p.default.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
                }),
                T = () => ({
                    icon: l.default,
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
                    description: p.default.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
                }),
                D = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                    icon: i.default,
                    description: p.default.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
                }),
                S = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
                    return {
                        color: s.default.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                        icon: i.default,
                        description: e
                    }
                },
                A = () => ({
                    color: s.default.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                    icon: f.default,
                    description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
                }),
                N = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
                    return {
                        color: e,
                        icon: c.default,
                        description: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
                    }
                };

            function m() {
                return [P(), I(), O(), S()]
            }

            function C() {
                return [P(), U(E.BoostedGuildTiers.TIER_2), N(), S()]
            }

            function G() {
                return [U(E.BoostedGuildTiers.TIER_3, s.default.unsafe_rawColors.PREMIUM_PERK_GREEN.css), A(), h(), S()]
            }

            function x() {
                return [h(), g(), U(E.BoostedGuildTiers.TIER_3), S()]
            }

            function w() {
                return [R(), O(), L(), S()]
            }

            function b() {
                return [O(), S()]
            }

            function K() {
                return [v(), T(), M(), D()]
            }
        },
        379532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("292687"),
                a = n("974889"),
                o = n("599110"),
                l = n("49111");

            function u(e, t) {
                let u = null != t ? t : "".concat(l.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL);
                null != e.targetBoostedGuildTier && (u += " - Tier ".concat(e.targetBoostedGuildTier));
                o.default.track(l.AnalyticEvents.OPEN_MODAL, {
                    type: u,
                    location: e.analyticsSourceLocation
                });
                let {
                    openInPopoutEnabled: c,
                    ...d
                } = e, _ = i.default.getWindowOpen(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && null != c && c;
                _ && (0, a.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let f = _ ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("874642").then(n.bind(n, "874642"));
                    return t => (0, s.jsx)(e, {
                        ...d,
                        ...t
                    })
                }, {
                    onCloseCallback: () => {
                        o.default.track(l.AnalyticEvents.MODAL_DISMISSED, {
                            type: u,
                            location: e.analyticsSourceLocation
                        })
                    },
                    contextKey: f
                })
            }
        }
    }
]);