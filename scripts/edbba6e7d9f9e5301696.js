(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87952"], {
        408854: function(e, t, s) {
            "use strict";
            e.exports = s.p + "88f099e036a0d7620597.png"
        },
        378913: function(e, t, s) {
            "use strict";
            e.exports = s.p + "906a38cbd45d6780304c.svg"
        },
        356002: function(e, t, s) {
            "use strict";
            e.exports = s.p + "682f1b679b5bdb117165.webm"
        },
        197492: function(e, t, s) {
            "use strict";
            e.exports = s.p + "87590a81cf78665e23ea.webm"
        },
        143416: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var n = s("37983"),
                a = s("884691"),
                i = s("730290"),
                l = s("446674"),
                r = s("872717"),
                o = s("43982"),
                d = s("393414"),
                u = s("271938"),
                c = s("145131"),
                f = s("124969"),
                E = s("49111"),
                _ = s("782340"),
                N = s("200363"),
                h = s("926622");
            l.default.initialize();
            let g = {
                HANDOFF: "handoff",
                DONE: "done",
                FAILED: "failed"
            };

            function O() {
                try {
                    window.close()
                } catch (e) {}
            }
            class p extends a.PureComponent {
                componentDidMount() {
                    let {
                        stage: e,
                        key: t
                    } = this.state;
                    e === g.DONE ? O() : u.default.isAuthenticated() ? r.default.post({
                        url: E.Endpoints.HANDOFF,
                        body: {
                            key: t
                        },
                        oldFormErrors: !0
                    }).then(e => this.handoff(e.body.handoff_token), () => this.handoff()) : this.handoff()
                }
                handoff(e) {
                    o.default.requestRedirect(E.RPCCommands.BROWSER_HANDOFF, {
                        handoffToken: e,
                        fingerprint: u.default.getFingerprint()
                    }).then(this.done, this.failed)
                }
                renderDone() {
                    return (0, n.jsxs)(f.default, {
                        children: [(0, n.jsx)(f.Image, {
                            src: s("203472"),
                            className: h.marginBottom20
                        }), (0, n.jsx)(f.Title, {
                            className: h.marginBottom8,
                            children: _.default.Messages.BROWSER_HANDOFF_DONE_TITLE
                        }), (0, n.jsx)(f.SubTitle, {
                            className: h.marginBottom40,
                            children: _.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
                        }), (0, n.jsx)(f.Button, {
                            onClick: this.handleOpenApp,
                            children: _.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                renderFailed() {
                    return (0, n.jsxs)(f.default, {
                        children: [(0, n.jsx)(f.Image, {
                            src: s("203472"),
                            className: h.marginBottom20
                        }), (0, n.jsx)(f.Title, {
                            className: h.marginBottom8,
                            children: _.default.Messages.BROWSER_HANDOFF_FAILED_TITLE
                        }), (0, n.jsx)(f.SubTitle, {
                            className: h.marginBottom40,
                            children: _.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE
                        }), (0, n.jsx)(f.Button, {
                            onClick: this.handleOpenApp,
                            children: _.default.Messages.CONTINUE_TO_WEBAPP
                        })]
                    })
                }
                renderHandoff() {
                    return (0, n.jsxs)(f.default, {
                        children: [(0, n.jsx)(f.AuthSpinner, {}), (0, n.jsx)(f.Title, {
                            className: h.marginBottom8,
                            children: _.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE
                        }), (0, n.jsx)(f.SubTitle, {
                            children: _.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION
                        })]
                    })
                }
                render() {
                    let e;
                    let {
                        stage: t
                    } = this.state;
                    switch (t) {
                        case g.DONE:
                            e = this.renderDone();
                            break;
                        case g.FAILED:
                            e = this.renderFailed();
                            break;
                        case g.HANDOFF:
                        default:
                            e = this.renderHandoff()
                    }
                    return (0, n.jsx)(c.default, {
                        justify: c.default.Justify.CENTER,
                        align: c.default.Align.CENTER,
                        className: N.wrapper,
                        children: e
                    })
                }
                constructor(e) {
                    var t;
                    super(e), this.done = () => {
                        O(), this.setState({
                            stage: g.DONE
                        })
                    }, this.failed = () => {
                        this.setState({
                            stage: g.FAILED
                        }), O()
                    }, this.handleOpenApp = () => {
                        (0, d.transitionTo)(E.Routes.ME)
                    };
                    let {
                        search: s
                    } = e.location, n = null != s && "" !== s ? (0, i.parse)(s) : {};
                    this.state = {
                        key: null !== (t = n.key) && void 0 !== t ? t : "",
                        stage: "true" === n.done ? g.DONE : g.HANDOFF
                    }
                }
            }
        },
        843962: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var n = s("697218"),
                a = s("315102"),
                i = s("449008"),
                l = s("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    s = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(n.default.getUser).filter(i.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, s);
                    case l.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        11291: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useHalloween2023Enabled: function() {
                    return i
                },
                isHalloween2023Enabled: function() {
                    return l
                },
                subscribeToHalloweenExperiment: function() {
                    return r
                }
            });
            var n = s("862205");
            let a = (0, n.createExperiment)({
                    kind: "user",
                    id: "2023-10_halloween_2023",
                    label: "Halloween assets 2023",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Halloween assets enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = () => {
                    let {
                        enabled: e
                    } = a.useExperiment({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                l = () => {
                    let {
                        enabled: e
                    } = a.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return e
                },
                r = e => a.subscribe({
                    location: "subscribe"
                }, e)
        },
        684581: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("11291"),
                a = s("782340"),
                i = s("356002"),
                l = s("197492");
            let r = {
                ringtone: {
                    name: "call_ringing_halloween",
                    filename: "call_ringing_halloween.mp3"
                },
                soundSettingsLabel: () => a.default.Messages.SOUND_INCOMING_RING_HALLOWEEN + " \uD83C\uDF83",
                subscribeToEligibility: n.subscribeToHalloweenExperiment,
                isEligible: n.isHalloween2023Enabled,
                useIsEligible: n.useHalloween2023Enabled,
                getAppSpinnerSources: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return {
                        webmDark: i,
                        webmLight: l
                    }
                },
                getLoadingTips: () => {
                    let e = Date.now();
                    if (!(e < 16976484e5) && !(e > 16990308e5)) return [a.default.Messages.HALLOWEEN_LOADING_TEXT_1, a.default.Messages.HALLOWEEN_LOADING_TEXT_2, a.default.Messages.HALLOWEEN_LOADING_TEXT_3, a.default.Messages.HALLOWEEN_LOADING_TEXT_4, a.default.Messages.HALLOWEEN_LOADING_TEXT_5, a.default.Messages.HALLOWEEN_LOADING_TEXT_6, a.default.Messages.HALLOWEEN_LOADING_TEXT_7, a.default.Messages.HALLOWEEN_LOADING_TEXT_8, a.default.Messages.HALLOWEEN_LOADING_TEXT_9]
                }
            };
            var o = r
        }
    }
]);