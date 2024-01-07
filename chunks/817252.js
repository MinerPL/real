            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("222007"), n("424973");
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("627445"),
                d = n.n(u),
                c = n("917351"),
                f = n.n(c),
                h = n("458960"),
                C = n("446674"),
                p = n("266491"),
                m = n("77078"),
                E = n("493765"),
                g = n("175980"),
                I = n("485328"),
                S = n("206230"),
                _ = n("659500"),
                N = n("709681"),
                T = n("828184"),
                A = n("49111"),
                L = n("782340"),
                v = n("812931");
            (a = l || (l = {})).UP = "UP", a.DOWN = "DOWN", a.LEFT = "LEFT", a.RIGHT = "RIGHT";
            let x = {
                    UP: f.throttle(() => (0, N.playSound)("ddr-up"), 100),
                    DOWN: f.throttle(() => (0, N.playSound)("ddr-down"), 100),
                    LEFT: f.throttle(() => (0, N.playSound)("ddr-left"), 100),
                    RIGHT: f.throttle(() => (0, N.playSound)("ddr-right"), 100)
                },
                R = f((0, E.getDefaultLayoutContent)()).groupBy(e => e.group).value();

            function M(e) {
                switch (e.keyCode) {
                    case A.KeyboardKeys.ARROW_UP:
                        return "UP";
                    case A.KeyboardKeys.ARROW_DOWN:
                        return "DOWN";
                    case A.KeyboardKeys.ARROW_LEFT:
                        return "LEFT";
                    case A.KeyboardKeys.ARROW_RIGHT:
                        return "RIGHT";
                    default:
                        return null
                }
            }
            let O = 1e3 / 60;

            function y() {
                let e = [E.KeybindGroup.MESSAGE, E.KeybindGroup.NAVIGATION, E.KeybindGroup.VOICE_AND_VIDEO, E.KeybindGroup.CHAT, E.KeybindGroup.MISCELLANEOUS];
                return (0, s.jsx)("div", {
                    className: v.keyboardShortcutList,
                    children: e.map((t, n) => {
                        let l = n === e.length - 1,
                            a = R[t],
                            i = (0, E.getNameForKeybindGroup)(t),
                            r = (0, E.getDescriptionForKeybindGroup)(t);
                        return (0, s.jsxs)("div", {
                            className: o(v.keyboardShortcutListGroup, {
                                [v.firstGroup]: 0 === n
                            }),
                            children: [(0, s.jsxs)("div", {
                                className: o(v.keybindGroup),
                                children: [(0, s.jsx)(m.Heading, {
                                    variant: "heading-md/semibold",
                                    children: i
                                }), null != r && (0, s.jsx)(m.Text, {
                                    className: v.keybindGroupDescription,
                                    variant: "text-sm/normal",
                                    children: r
                                })]
                            }, t), a.map((e, t) => {
                                var n;
                                return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1 ? null : (0, s.jsxs)("div", {
                                    className: o(v.keybindGroup),
                                    children: [(0, s.jsx)("div", {
                                        className: v.keybindDescription,
                                        children: e.description
                                    }), (0, s.jsx)("div", {
                                        className: "keybind-shortcuts",
                                        children: e.binds.map(e => (0, s.jsx)(m.KeyCombo, {
                                            className: v.keybindKey,
                                            shortcut: e
                                        }, e))
                                    })]
                                }, t)
                            }), !l && (0, s.jsx)(m.FormDivider, {
                                className: v.keybindGroupDivider
                            })]
                        }, t)
                    })
                })
            }
            class D extends i.PureComponent {
                componentDidMount() {
                    this.lastInputedKeys = [], _.ComponentDispatch.subscribe(A.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), _.ComponentDispatch.subscribe(A.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
                        capture: !0
                    }), window.addEventListener("keyup", this.handleKeyUp, {
                        capture: !0
                    })
                }
                componentWillUnmount() {
                    _.ComponentDispatch.unsubscribe(A.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), _.ComponentDispatch.unsubscribe(A.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
                        capture: !0
                    }), window.removeEventListener("keyup", this.handleKeyUp, {
                        capture: !0
                    })
                }
                render() {
                    let {
                        UP: e,
                        DOWN: t,
                        LEFT: n,
                        RIGHT: l
                    } = this.state;
                    return (0, s.jsxs)(h.default.div, {
                        className: v.keyboardShortcutsModal,
                        style: this.getStyles(),
                        children: [(0, s.jsxs)(m.H, {
                            className: v.modalTitle,
                            children: [(0, s.jsx)("div", {
                                className: v.content,
                                children: L.default.Messages.KEYBIND_DESCRIPTION_MODAL_TITLE
                            }), (0, s.jsx)(m.KeyCombo, {
                                shortcut: "mod+/"
                            })]
                        }), (0, s.jsx)("div", {
                            className: v.modalSubtitle,
                            children: L.default.Messages.KEYBIND_DESCRIPTION_MODAL_SUBTITLE
                        }), (0, s.jsxs)("div", {
                            className: v.ddrArrows,
                            children: [(0, s.jsx)(b, {
                                arrow: "LEFT",
                                isActive: n,
                                className: v.left,
                                children: "left"
                            }), (0, s.jsx)(b, {
                                arrow: "DOWN",
                                isActive: t,
                                className: v.down,
                                children: "down"
                            }), (0, s.jsx)(b, {
                                arrow: "UP",
                                isActive: e,
                                className: v.up,
                                children: "up"
                            }), (0, s.jsx)(b, {
                                arrow: "RIGHT",
                                isActive: l,
                                className: v.right,
                                children: "right"
                            })]
                        }), (0, s.jsx)(m.AdvancedScrollerAuto, {
                            ref: this.scrollerRef,
                            fade: !0,
                            children: (0, s.jsx)(m.HeadingLevel, {
                                children: (0, s.jsx)(y, {})
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        UP: !1,
                        DOWN: !1,
                        LEFT: !1,
                        RIGHT: !1,
                        opacity: new h.default.Value(1),
                        scaleX: new h.default.Value(1),
                        scaleY: new h.default.Value(0),
                        animating: !1
                    }, this.scrollerRef = i.createRef(), this.lastInputedKeys = [], this.scrollPageUp = () => {
                        let e = this.scrollerRef.current;
                        d(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
                            animate: !0
                        })
                    }, this.scrollPageDown = () => {
                        let e = this.scrollerRef.current;
                        d(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
                            animate: !0
                        })
                    }, this.arrowUp = e => {
                        let {
                            direction: t
                        } = e;
                        this.setState({
                            [t]: !1
                        })
                    }, this.arrowDown = e => {
                        let {
                            direction: t
                        } = e;
                        x[t](), this.setState({
                            [t]: !0
                        })
                    }, this.componentWillLeave = e => {
                        this.setState({
                            animating: !0
                        }), this.state.opacity.setValue(1), this.state.scaleX.setValue(.5), this.state.scaleY.setValue(1), h.default.sequence([h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            delay: 300,
                            toValue: .7,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * O
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * O
                        }), h.default.timing(this.state.scaleY, {
                            delay: 100,
                            toValue: .005,
                            duration: 8 * O,
                            easing: h.default.Easing.in(h.default.Easing.ease)
                        }), h.default.parallel([h.default.timing(this.state.scaleX, {
                            toValue: 1,
                            duration: 10 * O,
                            easing: h.default.Easing.out(h.default.Easing.ease)
                        }), h.default.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 12 * O
                        })])]).start(e)
                    }, this.toggleOpacity = () => {
                        1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1)
                    }, this.getStyles = () => ({
                        opacity: this.state.opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        }),
                        transform: [{
                            scaleX: this.state.scaleX.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 2]
                            })
                        }, {
                            scaleY: this.state.scaleY.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })
                        }]
                    }), this.handleKeyDown = e => {
                        if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === A.KeyboardKeys.H && this.lastInputedKeys[1] === A.KeyboardKeys.H && this.lastInputedKeys[2] === A.KeyboardKeys.ARROW_RIGHT && this.lastInputedKeys[3] === A.KeyboardKeys.N && this.lastInputedKeys[4] === A.KeyboardKeys.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
                        let t = M(e);
                        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
                            direction: t
                        }))
                    }, this.handleKeyUp = e => {
                        if (this.props.keyboardModeEnabled) return;
                        let t = M(e);
                        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({
                            direction: t
                        }))
                    }, this.onArrowClick = e => {
                        this.arrowDown({
                            direction: e
                        })
                    }
                }
            }

            function b(e) {
                let {
                    isActive: t,
                    arrow: n,
                    className: l,
                    children: a
                } = e, [r, u] = i.useState(t), d = i.useCallback(() => {
                    x[n](), u(!0)
                }, [n]);
                return i.useEffect(() => {
                    if (r) {
                        let e = setTimeout(() => u(!1), 500);
                        return () => clearTimeout(e)
                    }
                }, [r]), (0, s.jsx)(m.Clickable, {
                    onClick: d,
                    className: o(v.arrow, l, {
                        [v.active]: t || r
                    }),
                    children: a
                })
            }

            function j(e) {
                let {
                    transitionState: t,
                    onClose: n
                } = e, [l, a] = i.useState(!1), r = i.useMemo(() => __OVERLAY__ ? (0, g.getOverlayLayoutContent)() : (0, E.getDefaultLayoutContent)(), []), u = (0, C.useStateFromStores)([S.default], () => S.default.keyboardModeEnabled);
                return (0, s.jsx)(m.ModalRoot, {
                    className: o(v.noBackground, {
                        [v.noShadow]: l
                    }),
                    size: m.ModalSize.DYNAMIC,
                    "aria-label": L.default.Messages.KEYBINDS,
                    transitionState: t,
                    children: (0, s.jsx)(p.default, {
                        component: "div",
                        children: l ? (0, s.jsx)(T.default, {
                            onClose: n
                        }, "raging-demo") : (0, s.jsx)(D, {
                            content: r,
                            keyboardModeEnabled: u,
                            activateRagingDemon: function() {
                                I.default.disable(), a(!0)
                            }
                        }, "modal")
                    })
                })
            }