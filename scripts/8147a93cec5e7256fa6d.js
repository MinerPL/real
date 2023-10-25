(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75519"], {
        242412: function(e, t, s) {
            "use strict";
            e.exports = s.p + "29306de8953471954035.svg"
        },
        846770: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9cf8c36deaa3dc7b8d65.svg"
        },
        69927: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setPageTitleNotificationCount: function() {
                    return d
                },
                flashPageTitle: function() {
                    return c
                },
                usePageTitle: function() {
                    return R
                },
                AppPageTitle: function() {
                    return E
                },
                usePageTitleManager: function() {
                    return _
                }
            });
            var a = s("773670"),
                l = s("710835"),
                n = s("773336");
            let u = {
                    base: n.isPlatformEmbedded ? void 0 : "Discord"
                },
                r = 0,
                o = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                i = (0, l.default)(() => ({
                    titles: [u],
                    notificationCount: void 0,
                    flashQueue: []
                }));

            function d(e) {
                i.setState({
                    notificationCount: e
                })
            }

            function c(e) {
                let t = {
                    ...o,
                    ...e,
                    id: r++
                };
                return t.count = Math.max(t.count, t.messages.length), i.setState(e => ({
                    flashQueue: [...e.flashQueue, t]
                })), () => f(t.id)
            }

            function f(e) {
                i.setState(t => ({
                    flashQueue: t.flashQueue.filter(t => t.id !== e)
                }))
            }

            function R(e) {
                a.useEffect(() => {
                    var t;
                    return t = e, i.setState(e => ({
                        titles: [t, ...e.titles]
                    })), () => {
                        i.setState(e => ({
                            titles: e.titles.filter(e => e !== t)
                        }))
                    }
                }, [...Object.values(e)])
            }

            function E(e) {
                return R(e), null
            }

            function _() {
                let {
                    skipsSettingDefaultPageTitle: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a.useEffect(() => {
                    function e() {
                        i.setState({
                            flashQueue: []
                        })
                    }
                    return document.addEventListener("focusin", e, {
                        capture: !0
                    }), () => document.removeEventListener("focusin", e, {
                        capture: !0
                    })
                }, []);
                let t = function() {
                    let [e, t] = i(e => {
                        let {
                            flashQueue: t
                        } = e, s = (function(e) {
                            let t, s, a;
                            for (let l of e.titles) {
                                if (null != t && null != s) break;
                                t = null != t ? t : l.base, s = null != s ? s : l.location, a = null != a ? a : l.subsection
                            }
                            return [t, a, s]
                        })(e).filter(e => null != e).join(" | "), a = function(e) {
                            let {
                                notificationCount: t
                            } = e;
                            return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                        }(e);
                        return ["".concat(a).concat(s), t[0]]
                    }), [s, l] = a.useState(!1), n = a.useRef(0), u = null == t ? void 0 : t.messages[n.current % t.messages.length];
                    return a.useEffect(() => {
                        if (null == t) {
                            n.current = 0, l(!1);
                            return
                        }
                        if (document.hasFocus() && t.onlyWhenBlurred) {
                            f(t.id), l(!1);
                            return
                        }
                        let e = setInterval(() => {
                            if (n.current >= t.count) {
                                f(t.id), l(!1);
                                return
                            }
                            l(e => !e || (n.current += 1, !1))
                        }, t.interval);
                        return () => clearInterval(e)
                    }, [t]), s ? u : e
                }();
                a.useEffect(() => {
                    let s = t === u.base;
                    (!e || !s) && (document.title = t)
                }, [e, t])
            }
        },
        621133: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("706530"),
                l = s("782340");

            function n(e, t) {
                let s = [{
                    value: a.StreamIssueReportReasons.BLACK_SCREEN,
                    label: t ? l.default.Messages.STREAM_REPORT_ENDED_BLACK : l.default.Messages.STREAM_REPORT_BLACK
                }, {
                    value: a.StreamIssueReportReasons.BLURRY,
                    label: t ? l.default.Messages.STREAM_REPORT_ENDED_BLURRY : l.default.Messages.STREAM_REPORT_BLURRY
                }, {
                    value: a.StreamIssueReportReasons.LAGGING,
                    label: t ? l.default.Messages.STREAM_REPORT_ENDED_LAGGING : l.default.Messages.STREAM_REPORT_LAGGING
                }, {
                    value: a.StreamIssueReportReasons.OUT_OF_SYNC,
                    label: t ? l.default.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC : l.default.Messages.STREAM_REPORT_OUT_OF_SYNC
                }, {
                    value: a.StreamIssueReportReasons.AUDIO_MISSING,
                    label: t ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING : l.default.Messages.STREAM_REPORT_AUDIO_MISSING
                }, {
                    value: a.StreamIssueReportReasons.AUDIO_POOR,
                    label: t ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_POOR : l.default.Messages.STREAM_REPORT_AUDIO_POOR
                }, {
                    value: a.StreamIssueReportReasons.STREAM_STOPPED,
                    label: l.default.Messages.STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY
                }, {
                    value: a.StreamIssueReportReasons.OTHER,
                    label: l.default.Messages.CALL_FEEDBACK_OPTION_OTHER
                }];
                return s
            }
        },
        435285: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var a = s("599110"),
                l = s("49111");

            function n(e) {
                let {
                    problem: t,
                    stream: s,
                    feedback: n,
                    streamApplication: u,
                    analyticsData: r,
                    location: o,
                    rating: i = null
                } = e;
                a.default.track(l.AnalyticEvents.STREAM_REPORT_PROBLEM, {
                    reason: t,
                    streamer_user_id: s.ownerId,
                    stream_channel_id: s.channelId,
                    guild_id: s.guildId,
                    application_id: null != u ? u.id : null,
                    application_name: null != u ? u.name : null,
                    location: o,
                    rating: i,
                    feedback: n,
                    ...r
                })
            }
        },
        385042: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("773670"),
                l = s("69927"),
                n = s("773336"),
                u = s("782340");

            function r() {
                return a.useEffect(() => {
                    !n.isPlatformEmbedded && (0, l.flashPageTitle)({
                        messages: [u.default.Messages.GO_LIVE_HEY, u.default.Messages.GO_LIVE_LOOK, u.default.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }, []), null
            }
        },
        485857: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("920040"),
                l = s("773670"),
                n = s("77078"),
                u = s("145131"),
                r = s("621133"),
                o = s("435285"),
                i = s("385042"),
                d = s("782340"),
                c = s("615548"),
                f = s("711480");
            class R extends l.PureComponent {
                render() {
                    let {
                        isStreamer: e,
                        transitionState: t,
                        onClose: s
                    } = this.props, {
                        problem: l
                    } = this.state;
                    return (0, a.jsxs)(n.ModalRoot, {
                        transitionState: t,
                        size: n.ModalSize.SMALL,
                        "aria-label": d.default.Messages.STREAM_REPORT_A_PROBLEM,
                        children: [(0, a.jsx)(i.default, {}), (0, a.jsxs)(n.ModalHeader, {
                            separator: !1,
                            children: [(0, a.jsx)(n.ModalCloseButton, {
                                className: f.closeButton,
                                onClick: s
                            }), (0, a.jsx)(n.FormTitle, {
                                tag: "h2",
                                className: f.title,
                                children: d.default.Messages.STREAM_REPORT_A_PROBLEM
                            })]
                        }), (0, a.jsxs)(n.ModalContent, {
                            className: f.content,
                            children: [(0, a.jsx)(n.Text, {
                                variant: "text-sm/normal",
                                children: d.default.Messages.STREAM_REPORT_PROBLEM_BODY
                            }), (0, a.jsx)(n.FormItem, {
                                title: d.default.Messages.STREAM_REPORT_LABEL,
                                children: (0, a.jsx)(n.SingleSelect, {
                                    placeholder: d.default.Messages.STREAM_REPORT_PLACEHOLDER,
                                    options: (0, r.default)(e, !1),
                                    onChange: this.handleChanged,
                                    value: l,
                                    maxVisibleItems: 4
                                })
                            }), (0, a.jsx)("div", {
                                className: c.art
                            })]
                        }), (0, a.jsxs)(n.ModalFooter, {
                            className: f.footer,
                            children: [(0, a.jsx)(n.Button, {
                                color: n.Button.Colors.BRAND,
                                disabled: null == l,
                                onClick: this.handleSubmit,
                                children: d.default.Messages.STREAM_REPORT_SUBMIT
                            }), (0, a.jsx)(u.default, {
                                children: (0, a.jsx)(n.Button, {
                                    look: n.Button.Looks.LINK,
                                    color: n.Button.Colors.PRIMARY,
                                    size: n.Button.Sizes.NONE,
                                    onClick: s,
                                    children: d.default.Messages.CANCEL
                                })
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        problem: null
                    }, this.handleChanged = e => {
                        this.setState({
                            problem: null != e ? e : null
                        })
                    }, this.handleSubmit = () => {
                        let {
                            stream: e,
                            streamApplication: t,
                            analyticsData: l,
                            onClose: u
                        } = this.props, {
                            problem: r
                        } = this.state;
                        (0, o.default)({
                            problem: r,
                            stream: e,
                            feedback: "",
                            streamApplication: t,
                            analyticsData: l,
                            location: "Stream"
                        }), u(), (0, n.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("874600").then(s.bind(s, "874600"));
                            return t => (0, a.jsx)(e, {
                                body: d.default.Messages.STREAM_REPORTED_BODY,
                                ...t
                            })
                        })
                    }
                }
            }
            var E = R
        }
    }
]);