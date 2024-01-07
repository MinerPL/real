            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Z
                }
            }), s("222007");
            var a, n, l, i, r = s("37983"),
                o = s("884691"),
                d = s("917351"),
                u = s("446674"),
                c = s("669491"),
                S = s("77078"),
                E = s("54239"),
                f = s("206230"),
                m = s("491605"),
                T = s("16594"),
                _ = s("772280"),
                g = s("300113"),
                h = s("659500"),
                I = s("709681"),
                N = s("356702"),
                p = s("106413"),
                C = s("28007"),
                A = s("880731"),
                O = s("250024"),
                x = s("798592"),
                M = s("39141"),
                R = s("49111"),
                v = s("782340"),
                L = s("926608");
            let D = {
                    enabled: !0,
                    combosEnabled: !0,
                    screenshakeEnabled: !1,
                    confettiEnabled: !1
                },
                P = (0, d.range)(0, 11),
                j = (0, d.range)(0, 2.25, .25),
                b = (0, d.range)(1, 11),
                U = (0, d.range)(1, 26);
            (l = a || (a = {}))[l.CONFETTI = 0] = "CONFETTI", l[l.SHAKE = 1] = "SHAKE", (i = n || (n = {}))[i.USER_SETTINGS = 0] = "USER_SETTINGS", i[i.ACHIEVEMENT_LIST = 1] = "ACHIEVEMENT_LIST";
            let y = () => [{
                    location: M.ConfettiLocation.CHAT_INPUT,
                    title: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED,
                    description: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
                }, {
                    location: M.ConfettiLocation.REACTION,
                    title: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED,
                    description: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_REACTION_ENABLED_DESCRIPTION
                }, {
                    location: M.ConfettiLocation.MEMBER_USER,
                    title: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED,
                    description: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_MEMBER_USER_ENABLED_DESCRIPTION
                }, {
                    location: M.ConfettiLocation.CALL_TILE,
                    title: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED,
                    description: v.default.Messages.POGGERMODE_CONFETTI_LOCATION_CALL_TILE_ENABLED_DESCRIPTION
                }],
                B = () => [{
                    location: M.ShakeLocation.CHAT_INPUT,
                    title: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED,
                    description: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_CHAT_INPUT_ENABLED_DESCRIPTION
                }, {
                    location: M.ShakeLocation.VOICE_USER,
                    title: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED,
                    description: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_VOICE_USER_ENABLED_DESCRIPTION
                }, {
                    location: M.ShakeLocation.MENTION,
                    title: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED,
                    description: v.default.Messages.POGGERMODE_SCREENSHAKE_LOCATION_MENTION_ENABLED_DESCRIPTION
                }];

            function F(e) {
                let {
                    disabled: t,
                    locations: s,
                    settingsLocations: a,
                    onChange: n
                } = e, l = s.map(e => (0, r.jsx)(S.FormSwitch, {
                    disabled: t,
                    value: a[e.location],
                    note: e.description,
                    onChange: t => n({
                        ...a,
                        [e.location]: t
                    }),
                    children: e.title
                }, e.location));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(S.FormTitle, {
                        children: v.default.Messages.POGGERMODE_LOCATIONS
                    }), l]
                })
            }

            function G(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(S.Text, {
                    className: L.sliderDescription,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: t
                })
            }

            function k(e) {
                let {
                    settings: {
                        enabled: t,
                        warningSeen: s
                    },
                    updateSettings: a
                } = e, n = (0, u.useStateFromStores)([f.default], () => f.default.useReducedMotion);
                return (0, r.jsx)(S.FormSwitch, {
                    value: t,
                    note: v.default.Messages.POGGERMODE_ENABLE_DESCRIPTION,
                    onChange: e => {
                        !e && (0, N.unlockAchievement)(p.PoggermodeAchievementId.DISABLE_POGGERMODE), e && (!s || n) ? (0, S.openModal)(e => (0, r.jsx)(S.ConfirmModal, {
                            header: n ? v.default.Messages.POGGERMODE_WARNING_TITLE_REDUCED_MOTION : v.default.Messages.POGGERMODE_WARNING_TITLE,
                            confirmText: v.default.Messages.ENABLE,
                            cancelText: v.default.Messages.CANCEL,
                            onConfirm: () => a(n ? D : {
                                enabled: !0,
                                warningSeen: !0
                            }),
                            ...e,
                            children: (0, r.jsx)(S.Text, {
                                variant: "text-md/normal",
                                children: n ? v.default.Messages.POGGERMODE_WARNING_BODY_REDUCED_MOTION : v.default.Messages.POGGERMODE_WARNING_BODY
                            })
                        })) : a({
                            enabled: e
                        })
                    },
                    children: v.default.Messages.POGGERMODE_ENABLE
                })
            }

            function w(e) {
                let {
                    settings: {
                        enabled: t,
                        confettiEnabled: s,
                        confettiCount: a,
                        confettiSize: n,
                        confettiEnabledLocations: l
                    },
                    updateSettings: i
                } = e, o = !t || !s;
                return (0, r.jsxs)(S.FormSection, {
                    tag: S.FormTitleTags.H1,
                    title: v.default.Messages.POGGERMODE_CONFETTI_CUSTOMIZATION,
                    children: [(0, r.jsx)(S.FormSwitch, {
                        disabled: !t,
                        value: s,
                        note: v.default.Messages.POGGERMODE_CONFETTI_ENABLED_DESCRIPTION,
                        onChange: e => i({
                            confettiEnabled: e
                        }, 0),
                        children: v.default.Messages.POGGERMODE_CONFETTI_ENABLED
                    }), (0, r.jsxs)(S.FormItem, {
                        disabled: o,
                        title: v.default.Messages.POGGERMODE_CONFETTI_COUNT,
                        className: L.formItem,
                        children: [(0, r.jsx)(G, {
                            children: v.default.Messages.POGGERMODE_CONFETTI_COUNT_DESCRIPTION
                        }), (0, r.jsx)(S.Slider, {
                            disabled: o,
                            markers: b,
                            stickToMarkers: !0,
                            minValue: b[0],
                            maxValue: b[b.length - 1],
                            initialValue: a,
                            onValueChange: e => i({
                                confettiCount: e
                            }, 0),
                            onValueRender: e => "".concat(e)
                        })]
                    }), (0, r.jsxs)(S.FormItem, {
                        disabled: o,
                        title: v.default.Messages.POGGERMODE_CONFETTI_SIZE,
                        className: L.formItem,
                        children: [(0, r.jsx)(G, {
                            children: v.default.Messages.POGGERMODE_CONFETTI_SIZE_DESCRIPTION
                        }), (0, r.jsx)(S.Slider, {
                            disabled: o,
                            markers: U,
                            stickToMarkers: !0,
                            minValue: U[0],
                            maxValue: U[U.length - 1],
                            initialValue: n,
                            onValueChange: e => i({
                                confettiSize: e
                            }, 0),
                            onValueRender: e => "".concat(e)
                        })]
                    }), (0, r.jsx)(F, {
                        disabled: o,
                        locations: y(),
                        settingsLocations: l,
                        onChange: e => i({
                            confettiEnabledLocations: e
                        }, 0)
                    })]
                })
            }

            function H(e) {
                let {
                    settings: {
                        enabled: t,
                        combosEnabled: s,
                        comboSoundsEnabled: a,
                        combosRequiredCount: n
                    },
                    updateSettings: l
                } = e, i = !t || !s;
                return (0, r.jsxs)(S.FormSection, {
                    tag: S.FormTitleTags.H1,
                    title: v.default.Messages.POGGERMODE_COMBOS_CUSTOMIZATION,
                    children: [(0, r.jsx)(S.FormSwitch, {
                        disabled: !t,
                        value: s,
                        note: v.default.Messages.POGGERMODE_COMBOS_ENABLED_DESCRIPTION,
                        onChange: e => l({
                            combosEnabled: e
                        }),
                        children: v.default.Messages.POGGERMODE_COMBOS_ENABLED
                    }), (0, r.jsx)(S.FormSwitch, {
                        disabled: !t,
                        value: a,
                        note: v.default.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED_DESCRIPTION,
                        onChange: e => l({
                            comboSoundsEnabled: e
                        }),
                        children: v.default.Messages.POGGERMODE_COMBO_SOUNDS_ENABLED
                    }), (0, r.jsxs)(S.FormItem, {
                        disabled: i,
                        title: v.default.Messages.POGGERMODE_COMBOS_REQUIRED,
                        className: L.formItem,
                        children: [(0, r.jsx)(G, {
                            children: v.default.Messages.POGGERMODE_COMBOS_REQUIRED_DESCRIPTION
                        }), (0, r.jsx)(S.Slider, {
                            disabled: i,
                            markers: P,
                            stickToMarkers: !0,
                            minValue: P[0],
                            maxValue: P[P.length - 1],
                            initialValue: n,
                            onValueChange: e => l({
                                combosRequiredCount: e
                            }),
                            onValueRender: e => "".concat(e)
                        })]
                    }), (0, r.jsx)(S.FormDivider, {
                        className: L.divider
                    })]
                })
            }

            function V(e) {
                let {
                    settings: {
                        enabled: t,
                        screenshakeEnabled: s,
                        shakeIntensity: a,
                        screenshakeEnabledLocations: n
                    },
                    updateSettings: l
                } = e, i = (0, u.useStateFromStores)([f.default], () => f.default.useReducedMotion), o = !t || !s || i, d = (e, t) => {
                    null != e.shakeIntensity && e.shakeIntensity > a && (0, N.unlockAchievement)(p.PoggermodeAchievementId.MORE), l(e, t)
                };
                return (0, r.jsxs)(S.FormSection, {
                    tag: S.FormTitleTags.H1,
                    title: v.default.Messages.POGGERMODE_SCREENSHAKE_CUSTOMIZATION,
                    children: [(0, r.jsx)(S.FormSwitch, {
                        disabled: !t || i,
                        tooltipNote: i ? v.default.Messages.POGGERMODE_SCREENSHAKE_DISABLED_REDUCED_MOTION : null,
                        value: s && !i,
                        note: v.default.Messages.POGGERMODE_SCREENSHAKE_ENABLED_DESCRIPTION,
                        onChange: e => l({
                            screenshakeEnabled: e
                        }, 1),
                        children: v.default.Messages.POGGERMODE_SCREENSHAKE_ENABLED
                    }), (0, r.jsxs)(S.FormItem, {
                        disabled: o,
                        title: v.default.Messages.POGGERMODE_SCREENSHAKE,
                        className: L.formItem,
                        children: [(0, r.jsx)(G, {
                            children: v.default.Messages.POGGERMODE_SCREENSHAKE_DESCRIPTION
                        }), (0, r.jsx)(S.Slider, {
                            disabled: o,
                            markers: j,
                            equidistant: !0,
                            stickToMarkers: !0,
                            minValue: j[0],
                            maxValue: j[j.length - 1],
                            initialValue: a,
                            onValueChange: e => d({
                                shakeIntensity: e
                            }, 1),
                            onMarkerRender: e => e === j[j.length - 1] ? v.default.Messages.POGGERMODE_SCREENSHAKE_MAX : "".concat(100 * e, "%")
                        })]
                    }), (0, r.jsx)(F, {
                        disabled: o,
                        locations: B(),
                        settingsLocations: n,
                        onChange: e => l({
                            screenshakeEnabledLocations: e
                        }, 1)
                    })]
                })
            }

            function Y(e) {
                let {
                    updateSettings: t
                } = e;
                return (0, r.jsx)(S.FormSection, {
                    tag: S.FormTitleTags.H1,
                    title: v.default.Messages.POGGERMODE_SETTINGS_CUSTOMIZATION,
                    children: (0, r.jsxs)(S.FormItem, {
                        className: L.formItem,
                        children: [(0, r.jsx)(S.FormText, {
                            className: L.formItem,
                            children: v.default.Messages.POGGERMODE_HIDE_SETTINGS_DESCRIPTION
                        }), (0, r.jsx)(S.Button, {
                            className: L.hideButton,
                            size: S.Button.Sizes.SMALL,
                            onClick: () => {
                                t({
                                    enabled: !1,
                                    settingsVisible: !1
                                }), (0, E.popLayer)()
                            },
                            children: v.default.Messages.POGGERMODE_HIDE_SETTINGS
                        })]
                    })
                })
            }

            function W(e) {
                let {
                    onChangePage: t
                } = e;
                return (0, r.jsxs)(S.FormSection, {
                    children: [(0, r.jsxs)(S.Clickable, {
                        onClick: () => t(1),
                        className: L.achievementContainer,
                        children: [(0, r.jsx)("div", {
                            className: L.achievementIconContainer,
                            children: (0, r.jsx)(g.default, {
                                color: c.default.unsafe_rawColors.ORANGE_345.css
                            })
                        }), (0, r.jsxs)("div", {
                            className: L.achievementTextContainer,
                            children: [(0, r.jsx)(S.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: v.default.Messages.POGGERMODE_ACHIEVEMENT_TITLE
                            }), (0, r.jsx)(S.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: v.default.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
                            })]
                        }), (0, r.jsx)(_.default, {
                            width: 16,
                            className: L.rightCaretIcon
                        })]
                    }), (0, r.jsx)(S.FormDivider, {
                        className: L.divider
                    })]
                })
            }
            let K = () => s.el("185720").then(s.t.bind(s, "185720", 19)).then(e => {
                let {
                    default: t
                } = e;
                return t
            });

            function z(e) {
                let {
                    onChangePage: t,
                    setShowEnableAnimation: s
                } = e, a = (0, u.useStateFromStoresObject)([A.default], () => A.default.getState()), [n, l] = o.useState({
                    x: 0,
                    y: 0
                }), i = (0, x.default)();

                function d(e, t, s, a) {
                    return (null != t ? t : e) && (null != a ? a : s)
                }
                let c = e => {
                        if (e.enabled && !1 === a.enabled) {
                            var t;
                            s(!0), (0, I.playSound)("poggermode_enabled"), h.ComponentDispatch.dispatch(R.ComponentActions.SHAKE_APP, {
                                duration: 2e3,
                                intensity: null !== (t = e.shakeIntensity) && void 0 !== t ? t : a.shakeIntensity
                            })
                        }
                    },
                    E = (e, t) => {
                        if (c(e), (0, C.updatePoggermodeSettings)(e), null == t) return;
                        let s = d(a.confettiEnabled, e.confettiEnabled, a.enabled, e.enabled);
                        0 === t && s && i.fire(n.x, n.y, {
                            settings: e
                        });
                        let l = d(a.screenshakeEnabled, e.screenshakeEnabled, a.enabled, e.enabled);
                        if (1 === t && l) {
                            var r;
                            h.ComponentDispatch.dispatch(R.ComponentActions.SHAKE_APP, {
                                duration: 1e3,
                                intensity: null !== (r = e.shakeIntensity) && void 0 !== r ? r : a.shakeIntensity
                            })
                        }
                    },
                    f = e => {
                        l({
                            x: e.clientX,
                            y: e.clientY
                        })
                    };
                return o.useEffect(() => (window.addEventListener("mousemove", f), () => window.removeEventListener("mousemove", f)), []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(S.Heading, {
                        variant: "heading-lg/semibold",
                        className: L.title,
                        children: v.default.Messages.POGGERMODE
                    }), (0, r.jsx)(k, {
                        settings: a,
                        updateSettings: E
                    }), (0, r.jsx)(W, {
                        onChangePage: t
                    }), (0, r.jsx)(H, {
                        settings: a,
                        updateSettings: E
                    }), (0, r.jsx)(V, {
                        settings: a,
                        updateSettings: E
                    }), (0, r.jsx)(w, {
                        settings: a,
                        updateSettings: E
                    }), (0, r.jsx)(Y, {
                        updateSettings: E
                    })]
                })
            }
            let Q = (e, t, s) => {
                    let a = e => () => {
                        t(e)
                    };
                    switch (e) {
                        case 0:
                            return (0, r.jsx)(z, {
                                onChangePage: a(1),
                                setShowEnableAnimation: s
                            });
                        case 1:
                            return (0, r.jsx)(O.default, {
                                onBackClick: a(0)
                            });
                        default:
                            return null
                    }
                },
                q = e => 0 === e ? T.SlideDirection.LEFT : T.SlideDirection.RIGHT;

            function Z() {
                let [e, t] = o.useState(0), [s, a] = o.useState(q(e)), [n, l] = o.useState(!1), i = (0, u.useStateFromStores)([f.default], () => f.default.useReducedMotion), d = n && !i;
                return o.useEffect(() => {
                    let t = setTimeout(() => {
                        a(q(e))
                    }, 500);
                    return () => clearTimeout(t)
                }, [e]), o.useEffect(() => {
                    Math.random() > .99 && (0, N.unlockAchievement)(p.PoggermodeAchievementId.VISITOR_100)
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(T.default, {
                        className: L.slideAnimator,
                        step: e,
                        direction: s,
                        children: Q(e, t, l)
                    }), (0, r.jsx)("div", {
                        className: d ? L.enableAnimationOverlayVisible : L.enableAnimationOverlayHidden,
                        children: (0, r.jsx)(m.default, {
                            className: L.enableAnimation,
                            importData: K,
                            shouldAnimate: d,
                            autoplay: !1,
                            resetOnPlay: !0,
                            loop: !1,
                            onComplete: () => l(!1)
                        })
                    })]
                })
            }