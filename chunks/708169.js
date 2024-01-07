            "use strict";
            n.r(t), n.d(t, {
                FullScreenLayers: function() {
                    return v
                },
                useFullScreenLayerStore: function() {
                    return S
                },
                openFullScreenLayer: function() {
                    return A
                },
                closeFullScreenLayer: function() {
                    return R
                }
            }), n("222007");
            var r, i, l = n("37983"),
                u = n("884691"),
                o = n("995008"),
                a = n.n(o),
                s = n("324134"),
                c = n("308503"),
                d = n("769846"),
                f = n("77078"),
                E = n("485328"),
                _ = n("159885"),
                I = n("983782"),
                T = n("275495");
            let p = (0, _.cssValueToNumber)(d.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (i = r || (r = {}))[i.ENTERING = 1] = "ENTERING", i[i.ENTERED = 2] = "ENTERED", i[i.EXITING = 3] = "EXITING", i[i.EXITED = 4] = "EXITED";
            let S = (0, c.default)(e => ({
                fullScreenLayers: [],
                addLayer: t => e(e => {
                    let {
                        fullScreenLayers: n
                    } = e;
                    return {
                        fullScreenLayers: [...n, t]
                    }
                })
            }));

            function N(e) {
                let {
                    item: t
                } = e, n = u.useRef(null);
                return (0, f.useFocusLock)(n), u.useEffect(() => (E.default.disable(), E.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                R(e)
                            }
                        }
                    }
                }(t.key)), () => {
                    E.default.disableTemp()
                }), [t.key]), (0, l.jsx)(t.LayerComponent, {
                    children: (0, l.jsxs)("div", {
                        className: T.root,
                        ref: n,
                        children: [(0, l.jsx)("div", {
                            className: T.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: () => R(t.key)
                        })]
                    })
                })
            }
            let C = {
                    enter: T.enter,
                    enterActive: T.enterActive,
                    enterDone: T.enterDone,
                    exit: T.exit,
                    exitActive: T.exitActive,
                    exitDone: T.exitDone
                },
                h = {
                    enter: T.enterReducedMotion,
                    enterActive: T.enterActiveReducedMotion,
                    enterDone: T.enterDoneReducedMotion,
                    exit: T.exitReducedMotion,
                    exitActive: T.exitActiveReducedMotion,
                    exitDone: T.exitDoneReducedMotion
                };

            function v() {
                let {
                    reducedMotion: e
                } = u.useContext(f.AccessibilityPreferencesContext), t = e.enabled, n = t ? h : C, r = S(e => e.fullScreenLayers);
                return (0, l.jsx)(s.TransitionGroup, {
                    children: r.map(e => (0, l.jsx)(s.CSSTransition, {
                        classNames: n,
                        timeout: p,
                        onEntered: () => {
                            S.setState({
                                fullScreenLayers: r.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: 2
                                } : t)
                            })
                        },
                        unmountOnExit: !0,
                        children: (0, l.jsx)(N, {
                            item: e
                        })
                    }, e.key))
                })
            }

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: n,
                        Layer: r
                    } = t,
                    i = null != n ? n : a();
                return S.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: i,
                        transitionState: 1,
                        LayerComponent: null != r ? r : I.default,
                        render: e
                    }]
                })), i
            }

            function R(e) {
                S.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }