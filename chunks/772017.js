            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("424973");
            var s = n("995008"),
                o = n.n(s),
                l = n("913144"),
                a = n("693051"),
                i = n("153498"),
                d = n("76493"),
                r = n("91731"),
                u = n("49111"),
                c = {
                    push(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o("modal"),
                            s = arguments.length > 3 ? arguments[3] : void 0,
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.AppContext.APP;
                        return (0, i.pushModal)({
                            key: n,
                            modal: (0, r.default)(e, {}, t, n),
                            ...s
                        }), l.default.dispatch({
                            type: "MODAL_PUSH",
                            modal: e,
                            props: t,
                            key: n,
                            appContext: a
                        }), n
                    },
                    pushLazy(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o("modal"),
                            s = arguments.length > 3 ? arguments[3] : void 0,
                            l = (0, a.getRootNavigationRef)();
                        return null != l && l.isReady() ? (e instanceof Promise ? e.then(e => {
                            let {
                                default: t
                            } = e;
                            return t
                        }) : e()).then(e => this.push(e, t, n, s)) : new Promise(o => d.default.enqueue(() => o(this.pushLazy(e, t, n, s))))
                    },
                    updateAnimation(e, t) {
                        l.default.dispatch({
                            type: "MODAL_UPDATE",
                            key: e,
                            props: {},
                            partial: !0,
                            animation: t
                        })
                    },
                    pop() {
                        (0, i.popModal)(), l.default.dispatch({
                            type: "MODAL_POP"
                        })
                    },
                    popWithKey(e, t) {
                        (0, i.popModal)(e, t), l.default.dispatch({
                            type: "MODAL_POP",
                            key: e,
                            onExited: t
                        })
                    },
                    popAll() {
                        (0, i.popAllModals)(), l.default.dispatch({
                            type: "MODAL_POP_ALL"
                        }), l.default.dispatch({
                            type: "CHANNEL_SETTINGS_CLOSE"
                        }), l.default.dispatch({
                            type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "GUILD_SETTINGS_CLOSE"
                        }), l.default.dispatch({
                            type: "HIDE_ACTION_SHEET"
                        }), l.default.dispatch({
                            type: "DISPLAYED_INVITE_CLEAR"
                        }), l.default.dispatch({
                            type: "DRAWER_CLOSE",
                            animated: !0
                        }), l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "QUICKSWITCHER_HIDE"
                        }), l.default.dispatch({
                            type: "MENTION_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "SEARCH_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "CONNECTIONS_GRID_MODAL_HIDE"
                        })
                    }
                }