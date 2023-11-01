(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58309"], {
        540105: function(e, n, t) {
            "use strict";
            e.exports = t.p + "abb68ef84648ccf3be81.svg"
        },
        87657: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return l
                }
            });
            var r = t("37983"),
                s = t("884691"),
                a = t("77078"),
                i = t("390236"),
                l = s.memo(function(e) {
                    var n, t, l, u;
                    let {
                        user: c,
                        size: o = a.AvatarSizes.SIZE_32,
                        animate: d = !1,
                        "aria-hidden": E = !1,
                        ...f
                    } = e, S = s.useContext(i.default);
                    return (0, r.jsx)(a.Avatar, {
                        src: (n = c, t = (0, a.getAvatarSize)(o), l = d, u = S, n.getAvatarURL(u, t, l)),
                        size: o,
                        "aria-label": E ? void 0 : c.username,
                        "aria-hidden": E,
                        ...f
                    })
                })
        },
        246511: function(e, n, t) {
            "use strict";
            var r, s, a, i;
            t.r(n), t.d(n, {
                InspectedExpressionChangeSource: function() {
                    return r
                },
                PickerContextMenuDataTypes: function() {
                    return s
                }
            }), (a = r || (r = {}))[a.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", a[a.MOUSE_EVENT = 1] = "MOUSE_EVENT", (i = s || (s = {})).EMOJI = "emoji", i.STICKER = "sticker", i.PACK_ICON = "pack-icon"
        },
        270161: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return i
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return l
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return u
                }
            });
            var r = t("316693"),
                s = t("923510"),
                a = t("49111");
            let i = a.Permissions.VIEW_CHANNEL,
                l = r.default.combine(i, a.Permissions.CONNECT),
                u = r.default.combine(i, s.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                useManageResourcePermissions: function() {
                    return m
                },
                getManageResourcePermissions: function() {
                    return N
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return _
                }
            });
            var r = t("884691"),
                s = t("316693"),
                a = t("446674"),
                i = t("252931"),
                l = t("813006");
            t("923959");
            var u = t("957255"),
                c = t("697218");
            t("991170");
            var o = t("270161"),
                d = t("843455");
            let E = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                f = (e, n, t, r) => {
                    if (null == e) return !1;
                    if (t) return !0;
                    if ("creator_id" in e) return r && null != n && e.creator_id === n.id;
                    if ("userId" in e) return r && null != n && e.userId === n.id;
                    if ("user" in e) {
                        var s;
                        return r && null != n && (null === (s = e.user) || void 0 === s ? void 0 : s.id) === n.id
                    }
                    return !1
                },
                S = e => {
                    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
                    let n = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? n = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (n = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [s.default.combine(n, d.Permissions.CREATE_EVENTS), s.default.combine(n, d.Permissions.MANAGE_EVENTS)]
                },
                m = e => {
                    let [n, t] = e instanceof l.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : S(e), [s, i, o, m] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(n, e), u.default.can(t, e)]), N = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), _ = r.useCallback(e => f(e, N, i, s), [s, i, N]), I = r.useCallback(e => f(e, N, m, o), [m, o, N]);
                    return null == e ? E : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: o,
                        canManageAllExpressions: i,
                        canManageAllEvents: m,
                        canManageGuildExpression: _,
                        canManageGuildEvent: I
                    }
                },
                N = function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default,
                        [r, s] = e instanceof l.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : S(e),
                        a = n.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        i = n.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        o = n.can(r, e),
                        m = n.can(s, e),
                        N = t.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: a,
                        canCreateGuildEvent: o,
                        canManageAllExpressions: i,
                        canManageAllEvents: m,
                        canManageGuildExpression: e => f(e, N, i, a),
                        canManageGuildEvent: e => f(e, N, m, o)
                    }
                },
                _ = e => {
                    let n = (0, a.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: t
                        } = (0, i.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return n && t
                }
        },
        41170: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                getStickerAltText: function() {
                    return x
                },
                default: function() {
                    return O
                }
            });
            var r = t("37983"),
                s = t("884691"),
                a = t("414456"),
                i = t.n(a),
                l = t("627445"),
                u = t.n(l),
                c = t("301165"),
                o = t("446674"),
                d = t("290381"),
                E = t("77078"),
                f = t("206230"),
                S = t("407063"),
                m = t("54560"),
                N = t("983782"),
                _ = t("866190"),
                I = t("256860"),
                A = t("161585"),
                v = t("24373"),
                R = t("782340"),
                g = t("787309");
            let p = e => e.preventDefault(),
                C = {
                    tension: 1100,
                    friction: 40
                },
                T = {
                    tension: 1600,
                    friction: 60
                };

            function h(e, n) {
                return s.cloneElement(e, {
                    "data-type": "sticker",
                    "data-id": n
                })
            }

            function x(e) {
                let n = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
                return R.default.Messages.STICKER_A11Y_LABEL.format({
                    stickerName: n
                })
            }
            let G = e => {
                    let {
                        children: n,
                        hasError: t,
                        isLoading: s,
                        maskAsset: a,
                        size: l,
                        withLoadingIndicator: u = !0
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i(g.assetWrapper, {
                            [g.assetWrapperMasked]: t || a
                        }),
                        style: {
                            height: l,
                            width: l
                        },
                        children: [t ? (0, r.jsxs)("div", {
                            className: g.error,
                            children: [(0, r.jsx)(m.default, {
                                className: g.errorIcon
                            }), l >= 33 && (0, r.jsx)(E.Text, {
                                className: g.errorText,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: R.default.Messages.STICKER_ASSET_LOAD_ERROR
                            })]
                        }) : n, u && s && (0, r.jsx)("div", {
                            className: g.loadingIndicator
                        })]
                    })
                },
                L = e => {
                    let {
                        shouldAnimate: n,
                        size: a,
                        sticker: i,
                        fileUri: l,
                        assetData: c,
                        isFocused: o,
                        className: d,
                        maskAsset: E,
                        positionRef: f,
                        withLoadingIndicator: m,
                        onError: N
                    } = e, _ = s.useRef(null), I = s.useRef(null), [A, p] = s.useState(!0), [C, T] = s.useState(!1), L = s.useRef(!1);
                    L.current = n && o;
                    let M = null == l ? (0, v.getStickerAssetUrl)(i) : l;
                    return (u(null != M, "Unable to determine sticker asset URL. Sticker ID: ".concat(i.id)), s.useEffect(() => {
                        if (null == _.current || null == M) return;
                        let e = Math.min(2, (0, S.getDevicePixelRatio)());
                        _.current.width = a * e, _.current.height = a * e;
                        let n = !1,
                            r = async () => {
                                let {
                                    default: e
                                } = await t.el("619596").then(t.bind(t, "619596"));
                                null != _.current && (I.current = new e({
                                    canvas: _.current,
                                    animationId: i.id,
                                    assetUrl: M,
                                    assetData: c,
                                    onInitialDraw: () => {
                                        !n && p(!1)
                                    },
                                    onError: () => {
                                        !n && (p(!1), T(!0), null == N || N())
                                    }
                                }), L.current && I.current.setState(!0))
                            };
                        return r(), () => {
                            var e;
                            null === (e = I.current) || void 0 === e || e.drop(), I.current = null, n = !0
                        }
                    }, [M, a, i.id, c, N]), s.useEffect(() => {
                        var e;
                        let t;
                        !n && (t = 0), null === (e = I.current) || void 0 === e || e.setState(n && o, t)
                    }, [i, n, o]), null == M) ? null : (0, r.jsx)("div", {
                        role: "img",
                        className: d,
                        "aria-label": C ? R.default.Messages.ERROR_LOADING_STICKER : x(i),
                        ref: f,
                        children: (0, r.jsx)(G, {
                            hasError: C,
                            isLoading: A,
                            maskAsset: E,
                            size: a,
                            withLoadingIndicator: m,
                            children: h((0, r.jsx)("canvas", {
                                className: g.lottieCanvas,
                                ref: _
                            }), i.id)
                        })
                    })
                },
                M = e => {
                    let {
                        shouldAnimate: n,
                        sticker: t,
                        isFocused: a,
                        size: l,
                        className: u,
                        maskAsset: c,
                        positionRef: o,
                        withLoadingIndicator: E,
                        fileUri: f
                    } = e, [S, m] = s.useState(!1), [N, _] = s.useState(!0), [I, A] = s.useState(!1), R = s.useRef(null), C = s.useRef(null), T = null != f ? f : (0, v.getStickerAssetUrl)(t, {
                        isPreview: !n || !S || !a,
                        size: l
                    }), L = s.useCallback(() => {
                        _(!1)
                    }, []), M = s.useCallback(() => {
                        A(!0)
                    }, []);
                    return (s.useEffect(() => {
                        if (null != R.current) {
                            let {
                                isVisible: e
                            } = R.current;
                            m(e)
                        }
                    }, []), s.useLayoutEffect(() => {
                        var e;
                        (null === (e = C.current) || void 0 === e ? void 0 : e.complete) === !0 && _(!1)
                    }, []), null == T) ? null : (0, r.jsx)(d.VisibilitySensor, {
                        ref: R,
                        onChange: m,
                        threshold: .7,
                        children: (0, r.jsx)("div", {
                            className: i(u, g.pngImageWrapper),
                            ref: o,
                            children: (0, r.jsx)(G, {
                                hasError: I,
                                isLoading: N,
                                maskAsset: c,
                                size: l,
                                withLoadingIndicator: E,
                                children: h((0, r.jsx)("img", {
                                    className: g.pngImage,
                                    alt: x(t),
                                    src: T,
                                    draggable: !1,
                                    onError: M,
                                    onLoad: L,
                                    onContextMenu: p,
                                    ref: C
                                }), t.id)
                            })
                        })
                    })
                },
                P = e => {
                    let {
                        disableAnimation: n,
                        enlargeScaleFactor: t,
                        enlargeWithName: a,
                        isInteracting: i,
                        positionRef: l,
                        size: u,
                        sticker: d
                    } = e, S = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), m = s.useRef(null), _ = {
                        transform: "scale(".concat(S ? 1 : 1 / t, ")"),
                        opacity: 0
                    }, I = (0, c.useTransition)(i, {
                        ref: m,
                        from: _,
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: _,
                        config: C
                    }), A = s.useRef(null), v = (0, c.useSpring)({
                        ref: A,
                        transform: i || S ? "translateY(0)" : "translateY(-25px)",
                        opacity: i ? 1 : 0,
                        config: T
                    });
                    return (0, c.useChain)(i ? [m, A] : [A, m], i ? [0, .0625] : [0, 0]), I((e, s) => s && (0, r.jsx)(N.AppReferencePositionLayer, {
                        className: g.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        reference: l,
                        children: () => (0, r.jsxs)("div", {
                            className: g.overlayWrapper,
                            children: [(0, r.jsx)(c.animated.div, {
                                className: g.overlayStickerWrapper,
                                style: e,
                                children: (0, r.jsx)(k, {
                                    className: g.overlaySticker,
                                    disableAnimation: n,
                                    enlargeOnInteraction: !1,
                                    isInteracting: i,
                                    maskAsset: !1,
                                    sticker: d,
                                    size: Math.round(u * t),
                                    withLoadingIndicator: !1
                                })
                            }), a && (0, r.jsx)(c.animated.div, {
                                className: g.overlayLabelWrapper,
                                style: v,
                                children: (0, r.jsx)(E.Text, {
                                    variant: "text-sm/medium",
                                    className: g.overlayLabel,
                                    children: d.name
                                })
                            })]
                        })
                    }))
                },
                k = e => {
                    let {
                        isInteracting: n = !1,
                        disableAnimation: t = !1,
                        enlargeOnInteraction: a = !1,
                        enlargeWithName: i = !0,
                        enlargeScaleFactor: l = 1.55,
                        maskAsset: u = !1,
                        size: c,
                        sticker: o,
                        className: d,
                        withLoadingIndicator: E,
                        assetData: f,
                        fileUri: S,
                        onError: m
                    } = e, N = (0, _.useIsWindowFocused)(), v = (0, I.useShouldAnimateSticker)(n) && !t, R = s.useRef(null);
                    if (null == o) return null;
                    let g = o.format_type === A.StickerFormat.LOTTIE ? L : M;
                    return (0, r.jsxs)(s.Fragment, {
                        children: [(0, r.jsx)(g, {
                            shouldAnimate: v,
                            isFocused: N,
                            size: c,
                            sticker: o,
                            className: d,
                            maskAsset: u,
                            positionRef: R,
                            withLoadingIndicator: E,
                            assetData: f,
                            fileUri: S,
                            onError: m
                        }), a && (0, r.jsx)(P, {
                            disableAnimation: t,
                            enlargeScaleFactor: l,
                            enlargeWithName: i,
                            isInteracting: n,
                            positionRef: R,
                            size: c,
                            sticker: o
                        })]
                    }, "".concat(o.id, ",").concat(c))
                };
            var O = k
        }
    }
]);