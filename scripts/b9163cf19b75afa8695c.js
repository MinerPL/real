(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53067"], {
        962429: function(e, t, n) {
            "use strict";

            function l(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        365444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return l.default
                },
                useStableMemo: function() {
                    return s.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var l = n("732427"),
                s = n("866490"),
                a = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("773670");

            function s() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("773670");
            let s = {};

            function a(e) {
                let t = (0, l.useRef)(s);
                return t.current === s && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("773670"),
                s = n("962429");
            let a = [];

            function u(e, t) {
                let n = (0, l.useRef)(),
                    u = (0, l.useRef)(a);
                return u.current === a ? (n.current = e(), u.current = t) : !(0, s.default)(t, u.current) && (n.current = e(), u.current = t), n.current
            }
        },
        158574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("377849"),
                s = n.n(l),
                a = n("851387"),
                u = {
                    async setCommunicationDisabledDuration(e, t, n, l, u) {
                        let r = null != n ? s().add(n, "s").toISOString() : null;
                        await a.default.setCommunicationDisabledUntil({
                            guildId: e,
                            userId: t,
                            communicationDisabledUntilTimestamp: r,
                            duration: n,
                            reason: l,
                            location: u
                        })
                    }
                }
        },
        750331: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("920040"),
                s = n("773670"),
                a = n("498225"),
                u = n("77078"),
                r = n("158574"),
                i = n("685665"),
                o = n("697218"),
                c = n("91551"),
                d = n("476765"),
                f = n("945330"),
                h = n("599110"),
                N = n("406043"),
                _ = n("903639"),
                C = n("49111"),
                I = n("782340"),
                E = n("629543");

            function M(e) {
                var t, n;
                let {
                    guildId: M,
                    userId: U,
                    anaylticsLocations: O,
                    transitionState: m,
                    onClose: S
                } = e, T = (0, d.useUID)(), {
                    analyticsLocations: D
                } = (0, i.default)(), p = null !== (n = null !== (t = null == O ? void 0 : O[0]) && void 0 !== t ? t : null == D ? void 0 : D[0]) && void 0 !== n ? n : null, A = (0, a.useStateFromStores)([o.default], () => o.default.getUser(U), [U]), [v, g] = (0, N.default)(U, M), [L, R] = s.useState(!1), x = s.useCallback(async () => {
                    if (null != A) {
                        R(!0);
                        try {
                            await r.default.setCommunicationDisabledDuration(M, U, null, null, p), (0, u.showToast)((0, u.createToast)(I.default.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, u.ToastType.SUCCESS)), S()
                        } catch (e) {
                            (0, u.showToast)((0, u.createToast)(I.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, u.ToastType.FAILURE))
                        } finally {
                            R(!1)
                        }
                    }
                }, [M, A, U, S, p]), b = s.useCallback(() => {
                    !g && S()
                }, [g, S]);
                return (s.useEffect(() => {
                    null != A && h.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: _.SET_COMMUNICATION_DISABLED_MODAL_NAME,
                        guild_id: M,
                        other_user_id: A.id
                    })
                }, []), s.useEffect(() => {
                    (null == A || null == M) && S()
                }), null == A || null == M) ? null : (0, l.jsxs)(u.ModalRoot, {
                    transitionState: m,
                    "aria-labelledby": T,
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: E.header,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: I.default.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
                        }), (0, l.jsx)(u.Clickable, {
                            onClick: S,
                            className: E.closeButton,
                            "aria-label": I.default.Messages.CLOSE,
                            children: (0, l.jsx)(f.default, {
                                className: E.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        children: [(0, l.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: I.default.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
                                username: A.username,
                                countdown: e => null == v ? null : (0, l.jsx)(c.default, {
                                    className: E.countdown,
                                    deadline: new Date(v),
                                    onInterval: b,
                                    showUnits: !0,
                                    stopAtOneSec: !0
                                })
                            })
                        }), (0, l.jsx)(u.Text, {
                            className: E.cta,
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            children: I.default.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
                                link: _.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK
                            })
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            color: u.Button.Colors.RED,
                            onClick: x,
                            submitting: L,
                            children: I.default.Messages.REMOVE_TIME_OUT
                        }), (0, l.jsx)(u.Button, {
                            type: "button",
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: S,
                            children: I.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        91551: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040"),
                s = n("773670"),
                a = n("427964"),
                u = n.n(a),
                r = n("888400"),
                i = n("782340");
            let o = () => [i.default.Messages.COUNTDOWN_UNITS_SECONDS, i.default.Messages.COUNTDOWN_UNITS_MINUTES, i.default.Messages.COUNTDOWN_UNITS_HOURS, i.default.Messages.COUNTDOWN_UNITS_DAYS];
            class c extends s.PureComponent {
                componentDidMount() {
                    let {
                        intervalDuration: e,
                        onInterval: t
                    } = this.props;
                    this._interval = setInterval(() => {
                        this.forceUpdate(), null == t || t()
                    }, e)
                }
                componentWillUnmount() {
                    null != this._interval && clearInterval(this._interval)
                }
                defaultRender(e) {
                    let {
                        showDays: t,
                        showUnits: n,
                        className: s
                    } = this.props, a = [e.days, e.hours, e.minutes, e.seconds], r = o();
                    if (0 === e.days) a.shift();
                    else if (!t) {
                        let e = a.shift();
                        a[0] += 24 * e
                    }
                    let i = u(a).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, l.jsxs)("span", {
                        children: [e, n ? r[a.length - t - 1] : null]
                    }, t)]).flatten().value();
                    return (0, l.jsx)("span", {
                        className: s,
                        children: i
                    })
                }
                render() {
                    let {
                        deadline: e,
                        children: t,
                        className: n,
                        stopAtOneSec: s
                    } = this.props;
                    if (e === 1 / 0) return (0, l.jsx)("span", {
                        className: n,
                        "aria-label": i.default.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    let a = (0, r.diffAsUnits)(Date.now(), e, s);
                    return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a)
                }
            }
            c.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            var d = c
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return u
                },
                useUID: function() {
                    return r
                },
                UID: function() {
                    return i
                }
            });
            var l = n("552473"),
                s = n.n(l),
                a = n("365444");
            let u = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return s(e)
                },
                r = () => (0, a.useLazyValue)(() => u()),
                i = e => {
                    let {
                        children: t
                    } = e;
                    return t(r())
                }
        }
    }
]);