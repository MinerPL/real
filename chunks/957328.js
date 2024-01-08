            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("917351"),
                o = n.n(r),
                u = n("458960"),
                d = n("446674"),
                c = n("95410"),
                E = n("77078"),
                f = n("167359"),
                _ = n("206230"),
                h = n("619443"),
                C = n("488284"),
                I = n("870696"),
                T = n("168851"),
                S = n("50647"),
                N = n("15435"),
                A = n("637888"),
                m = n("773336"),
                p = n("709681"),
                g = n("50885"),
                R = n("49111"),
                O = n("782340"),
                L = n("923075");
            class v extends s.PureComponent {
                createSound() {
                    let {
                        soundpack: e
                    } = this.props, t = (0, p.createSoundForPack)("discodo", e);
                    return t.volume = 1, t
                }
                componentDidMount() {
                    this.setProblemsTimeout()
                }
                componentDidUpdate(e, t) {
                    let {
                        ready: n,
                        hide: a,
                        problems: s,
                        opacity: i
                    } = this.state, {
                        connected: l,
                        soundpack: r,
                        reducedMotion: o
                    } = this.props, d = l && n && !a && !s;
                    if (e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== l || d) {
                        if (l && null != this.videoRef) {
                            let e = Math.max(Math.ceil((this.videoRef.duration - this.videoRef.currentTime) * 1e3), 600);
                            clearTimeout(this._noProblemsTimeout), c.default.get(R.DISCODO_STORAGE_KEY) && this._connectedSound.play(), o ? this.setState({
                                problems: !1,
                                hide: l
                            }) : this._noProblemsTimeout = setTimeout(() => {
                                this.setState({
                                    problems: !1,
                                    hide: l
                                })
                            }, e)
                        } else this.setState({
                            problems: !1,
                            hide: l
                        })
                    } else t.hide !== a ? (a ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
                        shouldRender: !0
                    }), u.default.timing(i, {
                        toValue: a ? 0 : 1,
                        duration: 200
                    }).start(() => this.setState({
                        shouldRender: !a
                    }))) : t.problems !== s && s && f.default.checkIncidents()
                }
                componentWillUnmount() {
                    this.clearProblemsTimeout(), clearTimeout(this._noProblemsTimeout)
                }
                render() {
                    let {
                        connected: e,
                        incident: t
                    } = this.props;
                    if (!this.state.shouldRender) return null;
                    {
                        let n = this._loadingText,
                            s = null;
                        return null != this._eventLoadingText && (n = this._eventLoadingText), null != t && (n = t.name, s = t.incident_updates[0].body), (0, a.jsxs)(u.default.div, {
                            className: L.container,
                            style: {
                                opacity: this.state.opacity
                            },
                            children: [(0, a.jsxs)("div", {
                                className: L.content,
                                children: [(0, a.jsx)(A.default, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: this.state.ready ? L.ready : ""
                                }), (0, a.jsxs)("div", {
                                    className: L.text,
                                    children: [null != t ? null : (0, a.jsx)("div", {
                                        className: L.tipTitle,
                                        children: O.default.Messages.LOADING_DID_YOU_KNOW
                                    }), (0, a.jsx)("div", {
                                        className: null != t ? L.title : L.tip,
                                        children: n
                                    }), (0, a.jsx)("div", {
                                        className: L.body,
                                        children: s
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: l(L.problems, {
                                    [L.slideIn]: this.state.problems
                                }),
                                children: [(0, a.jsx)("div", {
                                    className: L.problemsText,
                                    children: O.default.Messages.CONNECTING_PROBLEMS_CTA
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsxs)(E.Anchor, {
                                        className: L.twitterLink,
                                        href: R.Links.TWITTER_SUPPORT,
                                        target: "_blank",
                                        children: [(0, a.jsx)(N.default, {
                                            className: L.icon
                                        }), O.default.Messages.TWEET_US]
                                    }), (0, a.jsxs)(E.Anchor, {
                                        className: L.statusLink,
                                        href: R.Links.STATUS,
                                        target: "_blank",
                                        children: [(0, a.jsx)(S.default, {
                                            className: L.icon
                                        }), O.default.Messages.SERVER_STATUS]
                                    })]
                                })]
                            })]
                        })
                    }
                }
                constructor(e) {
                    super(e), this.videoRef = null, this._noProblemsTimeout = null, this._problemsTimeout = null, this._connectedSound = this.createSound(), this._loadingText = function() {
                        let e = [O.default.Messages.ACCESSIBILITY_LOADING_TIP_1, O.default.Messages.ACCESSIBILITY_LOADING_TIP_2, O.default.Messages.ACCESSIBILITY_LOADING_TIP_3, O.default.Messages.ACCESSIBILITY_LOADING_TIP_4, O.default.Messages.ACCESSIBILITY_LOADING_TIP_5, O.default.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
                            tabHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "tab",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.ACCESSIBILITY_LOADING_TIP_7, O.default.Messages.ACCESSIBILITY_LOADING_TIP_8, O.default.Messages.ACCESSIBILITY_LOADING_TIP_9, O.default.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
                            F6Hook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "f6",
                                className: L.keybind
                            }, t),
                            tabHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "tab",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.LOADING_LINE_1, O.default.Messages.LOADING_LINE_2, O.default.Messages.LOADING_LINE_4, O.default.Messages.LOADING_LINE_5, O.default.Messages.LOADING_LINE_6, O.default.Messages.LOADING_LINE_7, O.default.Messages.LOADING_LINE_8, O.default.Messages.LOADING_LINE_9, O.default.Messages.LOADING_LINE_10, O.default.Messages.LOADING_LINE_11, O.default.Messages.LOADING_LINE_12, O.default.Messages.LOADING_LINE_13, O.default.Messages.LOADING_LINE_14, O.default.Messages.LOADING_LINE_15, O.default.Messages.LOADING_TIP_1, O.default.Messages.LOADING_TIP_2, O.default.Messages.LOADING_TIP_3, O.default.Messages.LOADING_TIP_4, O.default.Messages.LOADING_TIP_5, O.default.Messages.LOADING_TIP_6, O.default.Messages.LOADING_TIP_7, O.default.Messages.LOADING_TIP_8, O.default.Messages.LOADING_TIP_9, O.default.Messages.LOADING_TIP_10, O.default.Messages.LOADING_TIP_11, O.default.Messages.LOADING_TIP_12, O.default.Messages.LOADING_TIP_13, O.default.Messages.LOADING_TIP_14, O.default.Messages.LOADING_TIP_15, O.default.Messages.LOADING_TIP_16, O.default.Messages.LOADING_TIP_17, O.default.Messages.LOADING_TIP_18, O.default.Messages.LOADING_TIP_19, O.default.Messages.LOADING_TIP_20, O.default.Messages.LOADING_TIP_21, O.default.Messages.LOADING_TIP_22, O.default.Messages.LOADING_TIP_23, O.default.Messages.LOADING_TIP_24, O.default.Messages.LOADING_TIP_25, O.default.Messages.LOADING_TIP_26, O.default.Messages.LOADING_TIP_27.format({
                            asterisks: "**"
                        }), O.default.Messages.LOADING_KEYBIND_TIP_1.format({
                            quickSwitcherHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "mod+k",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.LOADING_KEYBIND_TIP_2.format({
                            markUnreadHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "alt+click",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.LOADING_KEYBIND_TIP_3.format({
                            markServerUnreadHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "shift+esc",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.LOADING_KEYBIND_TIP_4.format({
                            navigateUnreadHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "shift+alt+up",
                                className: L.keybind
                            }, t),
                            downHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "down",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.LOADING_KEYBIND_TIP_5.format({
                            keyboardShortcutsHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "mod+/",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.LOADING_KEYBIND_TIP_6.format({
                            messageNewlineHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "shift+return",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.LOADING_KEYBIND_TIP_7.format({
                            shiftHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "shift",
                                className: L.keybind
                            }, t)
                        }), O.default.Messages.LOADING_KEYBIND_TIP_8.format({
                            upHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                shortcut: "up",
                                className: L.keybind
                            }, t)
                        })];
                        return e[o.random(e.length - 1)]
                    }(), this._eventLoadingText = function() {
                        let e = C.default.getLoadingTips();
                        if (null != e && e.length > 0) return e[o.random(e.length - 1)]
                    }(), this.handleReady = () => {
                        this.setState({
                            ready: !0
                        }), (0, m.isDesktop)() && (g.default.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), g.default.send("UPDATE_OPEN_ON_STARTUP"))
                    }, this.setVideoRef = e => {
                        this.videoRef = e
                    }, this.setProblemsTimeout = () => {
                        null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
                            problems: !0
                        }), 1e4))
                    }, this.clearProblemsTimeout = () => {
                        clearTimeout(this._problemsTimeout), this._problemsTimeout = null
                    };
                    let {
                        connected: t
                    } = e;
                    this.state = {
                        ready: t,
                        hide: t,
                        problems: !1,
                        shouldRender: !t,
                        opacity: new u.default.Value(t ? 0 : 1)
                    }, this._connectedSound.volume = 1
                }
            }
            var M = d.default.connectStores([h.default, T.default, I.default, _.default], () => ({
                isTryingToConnect: h.default.isTryingToConnect(),
                connected: h.default.isConnected(),
                incident: T.default.getIncident(),
                soundpack: I.default.getSoundpack(),
                reducedMotion: _.default.useReducedMotion
            }))(e => {
                let {
                    isTryingToConnect: t,
                    connected: n,
                    incident: s,
                    soundpack: i,
                    reducedMotion: l
                } = e;
                return t ? (0, a.jsx)(v, {
                    reducedMotion: l,
                    soundpack: i,
                    connected: n,
                    incident: s
                }) : null
            })