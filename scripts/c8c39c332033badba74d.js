(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["35762"], {
        458389: function(e, t, n) {
            var i = n("594140"),
                r = n("564414"),
                l = n("725502"),
                s = n("591350"),
                a = n("476540"),
                o = n("381178"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = l(e),
                    c = !n && r(e),
                    d = !n && !c && s(e),
                    f = !n && !c && !d && o(e),
                    E = n || c || d || f,
                    _ = E ? i(e.length, String) : [],
                    h = _.length;
                for (var m in e)(t || u.call(e, m)) && !(E && ("length" == m || d && ("offset" == m || "parent" == m) || f && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || a(m, h))) && _.push(m);
                return _
            }
        },
        562132: function(e, t, n) {
            var i = n("33426"),
                r = n("136047"),
                l = n("270879"),
                s = {};
            s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return l(e) && r(e.length) && !!s[i(e)]
            }
        },
        205873: function(e, t, n) {
            var i = n("733228"),
                r = n("541349"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!i(e)) return r(e);
                var t = [];
                for (var n in Object(e)) l.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        733228: function(e, t, n) {
            var i = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || i)
            }
        },
        541349: function(e, t, n) {
            var i = n("761197")(Object.keys, Object);
            e.exports = i
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var i = n("447414"),
                r = "object" == typeof t && t && !t.nodeType && t,
                l = r && "object" == typeof e && e && !e.nodeType && e,
                s = l && l.exports === r && i.process,
                a = function() {
                    try {
                        var e = l && l.require && l.require("util").types;
                        if (e) return e;
                        return s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            e.exports = a
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var i = n("690516"),
                r = n("221386"),
                l = "object" == typeof t && t && !t.nodeType && t,
                s = l && "object" == typeof e && e && !e.nodeType && e,
                a = s && s.exports === l ? i.Buffer : void 0,
                o = a ? a.isBuffer : void 0;
            e.exports = o || r
        },
        381178: function(e, t, n) {
            var i = n("562132"),
                r = n("492692"),
                l = n("276440"),
                s = l && l.isTypedArray,
                a = s ? r(s) : i;
            e.exports = a
        },
        466731: function(e, t, n) {
            var i = n("458389"),
                r = n("205873"),
                l = n("603108");
            e.exports = function(e) {
                return l(e) ? i(e) : r(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        288661: function(e, t, n) {
            "use strict";
            var i = n("817736");
            t.createRoot = i.createRoot, t.hydrateRoot = i.hydrateRoot
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return s
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("782340"),
                u = n("347129");
            class c extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: c,
                        isLoading: d,
                        maxLength: f,
                        transitionState: E,
                        helpMessage: _,
                        retryPrompt: h,
                        retrySuccessMessage: m
                    } = this.props, {
                        code: I,
                        errorMessage: p,
                        retrySuccess: N
                    } = this.state, g = r.Children.count(l) > 0 ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, S = null != h ? (0, i.jsxs)(a.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(a.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(a.Anchor, {
                                children: h
                            })
                        })]
                    }) : null, A = N ? (0, i.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }) : null;
                    return (0, i.jsx)(a.ModalRoot, {
                        transitionState: E,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(a.ModalContent, {
                                children: [null != _ ? (0, i.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: _
                                }) : null, g, A, (0, i.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: I,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != c ? c : p
                                    }) : null, S]
                                })]
                            }), (0, i.jsxs)(a.ModalFooter, {
                                children: [(0, i.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === I.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, i.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: a
                    })]
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: a
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: a
                    })
                })
            }
        },
        912758: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StopIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("rect", {
                        width: t,
                        height: n,
                        x: "3",
                        y: "3",
                        fill: "string" == typeof s ? s : s.css,
                        rx: "3",
                        className: a
                    })
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("872717"),
                r = n("49111"),
                l = n("782340");
            class s extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = r || (r = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        246511: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                InspectedExpressionChangeSource: function() {
                    return i
                },
                PickerContextMenuDataTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", l[l.MOUSE_EVENT = 1] = "MOUSE_EVENT", (s = r || (r = {})).EMOJI = "emoji", s.STICKER = "sticker", s.PACK_ICON = "pack-icon"
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                s = n("38654"),
                a = n("9294"),
                o = n("26989"),
                u = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = c.default.getCurrentUser(),
                    s = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, h = async (e, t) => {
                await i.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, m = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var I = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: _,
                enableVerificationForm: h,
                submitVerificationForm: m
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return h
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return m
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return I
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                s = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                o = 16,
                u = 300,
                c = 300,
                d = 8,
                f = 150,
                E = 150,
                _ = 1e3,
                h = 300,
                m = "Membership Gating",
                I = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, i.default)(e => s),
                o = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                s = n("50926"),
                a = n("347977"),
                o = n("394294"),
                u = n("49111");
            let c = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let l = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return a
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return o
                }
            });
            var i = n("316693"),
                r = n("923510"),
                l = n("49111");
            let s = l.Permissions.VIEW_CHANNEL,
                a = i.default.combine(s, l.Permissions.CONNECT),
                o = i.default.combine(s, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return p
                },
                updateImpersonating: function() {
                    return N
                },
                stopImpersonating: function() {
                    return g
                },
                updateImpersonatedChannels: function() {
                    return A
                },
                updateImpersonatedRoles: function() {
                    return v
                },
                updateImpersonatedData: function() {
                    return T
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                s = n("42203"),
                a = n("923959"),
                o = n("26989"),
                u = n("305961"),
                c = n("957255"),
                d = n("18494"),
                f = n("282109"),
                E = n("599110"),
                _ = n("38654"),
                h = n("507950"),
                m = n("49111"),
                I = n("724210");

            function p(e, t) {
                E.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === h.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), S(e)
            }

            function N(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (E.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === h.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), S(e))
            }

            function g(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function S(e) {
                let t = d.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    i = null != t && (0, I.isStaticChannelRoute)(t);
                if (!i && !c.default.can(m.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(m.Routes.CHANNEL(e, t.id))
                }
            }

            function A(e, t, n) {
                let i = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), N(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function v(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && A(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), N(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function T(e, t) {
                N(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return s
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = i.parse(n),
                    a = (0, r.getFirstQueryStringValue)(s[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return d
                },
                useInventoryGuildSettingsExperiment: function() {
                    return E
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                s = n("719923"),
                a = n("782340");
            let o = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l,
                        autoUnfurlReactionTooltip: a
                    } = n, o = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: o ? i : l,
                        autoUnfurlReactionTooltip: a
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : u({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                d = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), s = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d,
                        autoUnfurlReactionTooltip: f
                    } = u({
                        user: r,
                        config: s
                    }), E = a && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                PaymentPortalBody: function() {
                    return h
                },
                PaymentPortalFooter: function() {
                    return m
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("627445"),
                o = n.n(a),
                u = n("817736"),
                c = n.n(u),
                d = n("77078"),
                f = n("642906"),
                E = n("990893");

            function _(e) {
                var t, n, l, a, u, c;
                let {
                    header: _,
                    isLargeModal: h,
                    stepProps: m
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: I,
                    stepConfigs: p,
                    setBodyNode: N,
                    setFooterNode: g,
                    setModalOverlayNode: S,
                    setReadySlideId: A
                } = (0, f.usePaymentContext)(), v = p.find(e => e.key === I);
                r.useEffect(() => {
                    S(null)
                }, [I, S]), o(null != v, "Unknown step for current payment flow.");
                let T = null !== (u = null == v ? void 0 : null === (t = v.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    C = null == v ? void 0 : null === (n = v.options) || void 0 === n ? void 0 : n.bodyClassName,
                    O = void 0 !== h && h ? E.sliderBodyLarge : null == v ? void 0 : null === (l = v.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (c = null == v ? void 0 : null === (a = v.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === c || c ? _ : null, v.renderStep(m), null == I || T ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(d.ModalContent, {
                            className: s(E.body, C),
                            children: (0, i.jsx)(d.Slides, {
                                activeSlide: I,
                                centered: !1,
                                onSlideReady: e => A(e),
                                children: p.filter(e => null != e.key).map(e => (0, i.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: s(E.sliderBody, O),
                                        ref: e => N(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => g(e)
                        }), (0, i.jsx)("div", {
                            ref: e => S(e)
                        })]
                    })]
                })
            }

            function h(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function m(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return h
                },
                getManageResourcePermissions: function() {
                    return m
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return I
                }
            });
            var i = n("884691"),
                r = n("316693"),
                l = n("446674"),
                s = n("252931"),
                a = n("813006");
            n("923959");
            var o = n("957255"),
                u = n("697218");
            n("991170");
            var c = n("270161"),
                d = n("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                E = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var r;
                        return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
                    }
                    return !1
                },
                _ = e => {
                    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
                    let t = c.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = c.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = c.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, d.Permissions.CREATE_EVENTS), r.default.combine(t, d.Permissions.MANAGE_EVENTS)]
                },
                h = e => {
                    let [t, n] = e instanceof a.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e), [r, s, c, h] = (0, l.useStateFromStoresArray)([o.default], () => [o.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), o.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), o.default.can(t, e), o.default.can(n, e)]), m = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), I = i.useCallback(e => E(e, m, s, r), [r, s, m]), p = i.useCallback(e => E(e, m, h, c), [h, c, m]);
                    return null == e ? f : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: c,
                        canManageAllExpressions: s,
                        canManageAllEvents: h,
                        canManageGuildExpression: I,
                        canManageGuildEvent: p
                    }
                },
                m = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
                        [i, r] = e instanceof a.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e),
                        l = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        s = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        c = t.can(i, e),
                        h = t.can(r, e),
                        m = n.getCurrentUser();
                    return null == e ? f : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: c,
                        canManageAllExpressions: s,
                        canManageAllEvents: h,
                        canManageGuildExpression: e => E(e, m, s, l),
                        canManageGuildEvent: e => E(e, m, h, c)
                    }
                },
                I = e => {
                    let t = (0, l.useStateFromStores)([o.default], () => o.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, s.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && n
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return m
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return I
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                s = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function h() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                p(r, i, t, n)
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    p(s, l, t, n)
                }, [s, l, t, n])
            }

            function p(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && h(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = l;
            class a extends i.default.Store {
                initialize() {
                    s = l
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = r
        },
        664113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                s = n("460029"),
                a = n("129722"),
                o = n("723961"),
                u = n("782340"),
                c = n("341479"),
                d = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: r = !1,
                        onChange: d
                    } = e, {
                        file: f
                    } = (0, a.useAudioTrimmerStore)();
                    return (0, i.jsx)(l.FormSection, {
                        className: c.section,
                        title: u.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
                        children: (0, i.jsxs)("div", {
                            className: c.fakeInput,
                            children: [null != t && (0, i.jsx)(o.default, {
                                sound: t,
                                volume: n,
                                disabled: r
                            }), null == t && null != f && (0, i.jsx)(s.default, {
                                className: c.audioTrimmer,
                                volume: n,
                                disabled: r,
                                onChange: d
                            })]
                        })
                    })
                })
        },
        460029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("132755"),
                u = n("78404"),
                c = n("812809"),
                d = n("129722"),
                f = n("278175"),
                E = n("859971"),
                _ = n("846325"),
                h = n("193326");
            let m = {
                startPositionMs: 0,
                endPositionMs: 2e4,
                playheadPositionMs: 0
            };
            var I = r.memo(function(e) {
                var t;
                let {
                    className: n,
                    volume: l,
                    disabled: I = !1,
                    onChange: p
                } = e, {
                    audio: N
                } = (0, d.useAudioTrimmerStore)(), [g, S] = r.useState(!1), [A, v] = r.useState(m), {
                    playheadPositionMs: T,
                    endPositionMs: C,
                    startPositionMs: O
                } = A, L = null != N, D = C - O, R = D > 1e3 * _.MAX_SOUND_LENGTH_SECONDS;
                r.useEffect(() => {
                    null != N && v({
                        playheadPositionMs: 0,
                        endPositionMs: 1e3 * N.duration,
                        startPositionMs: 0
                    })
                }, [N]);
                let M = r.useCallback(e => {
                        null != N && (N.pause(), null != e && (N.currentTime = e), S(!1))
                    }, [N]),
                    b = r.useCallback(() => {
                        if (null != N) {
                            if (g) {
                                M();
                                return
                            }
                            T >= C ? N.currentTime = (0, E.toSeconds)(O) : N.currentTime = (0, E.toSeconds)(T), N.volume = (0, c.default)(l), N.play(), S(!0)
                        }
                    }, [N, C, M, T, g, O, l]),
                    U = r.useCallback(e => {
                        v(e), null == p || p({
                            startMs: e.startPositionMs,
                            endMs: e.endPositionMs
                        })
                    }, [p]),
                    y = r.useCallback(e => {
                        null != N && (N.currentTime = e)
                    }, [N]);
                return (0, i.jsxs)("div", {
                    className: s(h.container, {
                        [h.initialized]: L,
                        [h.disabled]: !L || I
                    }, n),
                    children: [(0, i.jsxs)("div", {
                        className: h.playButtonContainer,
                        children: [(0, i.jsx)(a.Clickable, {
                            className: h.playButton,
                            onClick: L ? b : void 0,
                            children: g ? (0, i.jsx)(u.default, {
                                className: h.playButtonIcon
                            }) : (0, i.jsx)(o.default, {
                                className: h.playButtonIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: h.durationContainer,
                            children: (0, i.jsx)(a.Text, {
                                className: h.duration,
                                variant: "text-xs/normal",
                                color: R ? "text-warning" : "text-positive",
                                children: (t = D, "".concat((0, E.toSeconds)(t).toFixed(2), "s"))
                            })
                        })]
                    }), (0, i.jsx)(f.default, {
                        playing: g,
                        onPlaybackChange: y,
                        onPausePlayback: M,
                        onChangePosition: U,
                        disabled: I
                    })]
                })
            })
        },
        89050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                defaultWaveformConfig: function() {
                    return i
                },
                getWaveformId: function() {
                    return r
                },
                getAudioFileId: function() {
                    return l
                },
                SUPPORTED_AUDIO_FILE_TYPES: function() {
                    return s
                }
            });
            let i = {
                    waveformBlockWidth: 2,
                    waveformBarWidth: .5,
                    fineTuningDelay: 500,
                    fineTuningScale: 10,
                    loudnessThreshold: .3
                },
                r = (e, t) => {
                    let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
                    return "".concat(n, "-").concat(JSON.stringify(t))
                },
                l = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
                s = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])
        },
        129722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAudioTrimmerStore: function() {
                    return a
                }
            });
            var i = n("308503"),
                r = n("16470"),
                l = n("859971");
            let s = (0, i.default)(e => ({
                audio: null,
                file: null,
                loading: !1,
                loadAudioFromFile: async t => {
                    if (e({
                            file: t,
                            audio: null,
                            loading: null != t
                        }), null == t) return;
                    let n = await (0, l.loadAudioFromFile)(t);
                    null != n && e({
                        audio: n,
                        loading: !1
                    })
                },
                maxVolume: 1,
                setMaxVolume: t => {
                    e({
                        maxVolume: t
                    })
                }
            }));

            function a() {
                return s(e => ({
                    audio: e.audio,
                    file: e.file,
                    loading: e.loading,
                    loadAudioFromFile: e.loadAudioFromFile,
                    maxVolume: e.maxVolume,
                    setMaxVolume: e.setMaxVolume
                }), r.default)
            }
        },
        278175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("461380"),
                c = n("129722"),
                d = n("859971"),
                f = n("184692"),
                E = n("89050"),
                _ = n("721013");
            (i = r || (r = {}))[i.START = 0] = "START", i[i.PLAYHEAD = 1] = "PLAYHEAD", i[i.END = 2] = "END";
            var h = s.memo(function(e) {
                let {
                    playing: t,
                    onPausePlayback: n,
                    onPlaybackChange: i,
                    onChangePosition: a,
                    disabled: h = !1
                } = e, m = {
                    ...E.defaultWaveformConfig
                }, {
                    audio: I
                } = (0, c.useAudioTrimmerStore)(), p = null != I, N = s.useRef(null), g = s.useRef(null), S = s.useRef(null), [A, v] = s.useState(0), [T, C] = s.useState(0), [O, L] = s.useState(0), [D, R] = s.useState(!1), [M, b] = s.useState(!1), [U, y] = s.useState(!1), [P, x] = s.useState(0), [w, F] = s.useState(-1), V = s.useMemo(() => P / m.fineTuningScale, [m.fineTuningScale, P]);
                s.useEffect(() => {
                    if (null == I) return;
                    let e = 1e3 * I.duration;
                    v(0), C(0), L(e), x(e)
                }, [I]);
                let B = s.useCallback((e, t) => {
                        if (n(), 0 === e.button) switch (t) {
                            case r.START:
                                R(!0);
                                break;
                            case r.PLAYHEAD:
                                b(!0);
                                break;
                            case r.END:
                                y(!0)
                        }
                    }, [n]),
                    G = s.useCallback(e => {
                        switch (e) {
                            case r.START:
                                R(!1);
                                break;
                            case r.PLAYHEAD:
                                b(!1);
                                break;
                            case r.END:
                                y(!1)
                        }
                        F(-1)
                    }, []),
                    j = s.useCallback(e => {
                        if (null == I || !D) return;
                        let t = parseInt(e.target.value),
                            n = t > O ? O : t;
                        i((0, d.toSeconds)(n)), v(n), C(n)
                    }, [I, i, O, D]),
                    k = s.useCallback(e => {
                        if (null == I || !M) return;
                        let t = parseInt(e.target.value);
                        t < A ? (i((0, d.toSeconds)(A)), C(A)) : t > O ? (i((0, d.toSeconds)(O)), C(O)) : (i((0, d.toSeconds)(t)), C(t))
                    }, [I, i, O, M, A]),
                    H = s.useCallback(e => {
                        if (null == I || !U) return;
                        let t = parseInt(e.target.value),
                            n = t > A ? t : A;
                        i((0, d.toSeconds)(A)), C(A), L(n)
                    }, [I, i, U, A]);
                return s.useEffect(() => {
                    null != a && p && a({
                        startPositionMs: A,
                        endPositionMs: O,
                        playheadPositionMs: T
                    })
                }, [A, O, a, p, T]), s.useEffect(() => {
                    let e;
                    if (null != I) return t && (e = setInterval(() => {
                        I.currentTime < (0, d.toSeconds)(O) ? I.currentTime >= (0, d.toSeconds)(T) && C(1e3 * I.currentTime) : (n((0, d.toSeconds)(A)), C(A))
                    }, 16)), () => {
                        clearInterval(e)
                    }
                }, [I, O, n, T, t, A]), s.useEffect(() => {
                    if (m.fineTuningDelay <= 0) return;
                    let e = setTimeout(() => {
                        D && A == A && -1 === w ? F(A) : U && O == O && -1 === w ? F(O) : M && T == T && -1 === w && F(T)
                    }, m.fineTuningDelay);
                    return () => {
                        clearTimeout(e)
                    }
                }, [m.fineTuningDelay, U, O, w, M, T, D, A]), (0, l.jsxs)("div", {
                    className: o(_.timeline, {
                        [_.initialized]: p
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: _.rangeHandleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: _.rangeHandleFrame,
                            children: [(0, l.jsx)("input", {
                                ref: N,
                                className: o(_.rangeHandle, _.rangeHandleStart),
                                type: "range",
                                min: (0, d.getMinValue)(w, V, P),
                                max: (0, d.getMaxValue)(w, V, P),
                                value: A,
                                onChange: j,
                                onMouseDown: e => B(e, r.START),
                                onMouseUp: () => G(r.START),
                                disabled: !p || h
                            }), (0, l.jsx)("input", {
                                ref: S,
                                className: o(_.rangeHandle, _.rangeHandleEnd),
                                type: "range",
                                min: (0, d.getMinValue)(w, V, P),
                                max: (0, d.getMaxValue)(w, V, P),
                                value: O,
                                onChange: H,
                                onMouseDown: e => B(e, r.END),
                                onMouseUp: () => G(r.END),
                                disabled: !p || h
                            })]
                        }), (0, l.jsx)("div", {
                            className: _.handlePlayheadTrack,
                            children: (0, l.jsx)("input", {
                                ref: g,
                                className: o(_.rangeHandle, _.rangeHandlePlayhead),
                                type: "range",
                                min: (0, d.getMinValue)(w, V, P),
                                max: (0, d.getMaxValue)(w, V, P),
                                value: T,
                                onChange: k,
                                onMouseDown: e => B(e, r.PLAYHEAD),
                                onMouseUp: () => G(r.PLAYHEAD),
                                disabled: !p || h
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: _.handleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: o(_.handleFrame, {
                                [_.startDragging]: D,
                                [_.endDragging]: U
                            }),
                            style: {
                                left: "".concat((0, d.getStartHandleValue)(A, w, V, P), "%"),
                                right: "".concat((0, d.getEndHandleValue)(O, w, V, P), "%")
                            },
                            children: [(0, l.jsx)("div", {
                                className: o(_.handleIconFrame, _.handleIconFrameStart),
                                children: (0, l.jsx)("div", {
                                    className: o(_.handleIconContainer, _.start),
                                    children: (0, l.jsx)(u.default, {
                                        direction: u.default.Directions.RIGHT,
                                        className: _.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: o(_.handleIconFrame, _.handleIconFrameEnd),
                                children: (0, l.jsx)("div", {
                                    className: o(_.handleIconContainer, _.end),
                                    children: (0, l.jsx)(u.default, {
                                        direction: u.default.Directions.LEFT,
                                        className: _.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: _.playheadTrack,
                            children: (0, l.jsx)("div", {
                                className: o(_.playhead, {
                                    [_.dragging]: M || D || U || t
                                }),
                                style: {
                                    left: "".concat((0, d.getStartHandleValue)(T, w, V, P), "%")
                                }
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: _.waveformContainer,
                        children: (0, l.jsx)(f.default, {
                            fineTuning: w,
                            fineTuningResolution: V,
                            duration: P
                        })
                    })]
                })
            })
        },
        859971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMinValue: function() {
                    return l
                },
                toSeconds: function() {
                    return s
                },
                getMaxValue: function() {
                    return a
                },
                getStartHandleValue: function() {
                    return o
                },
                getEndHandleValue: function() {
                    return u
                },
                loadAudioFromFile: function() {
                    return c
                },
                loadAudioFileFromUrl: function() {
                    return d
                }
            });
            var i = n("89050"),
                r = n("782340");
            let l = (e, t, n) => -1 === e ? 0 : e - t * e / n;

            function s(e) {
                return e / 1e3
            }
            let a = (e, t, n) => -1 === e ? n : e + t * (n - e) / n,
                o = (e, t, n, i) => {
                    let r = 0;
                    return (r = t >= 0 && n > 0 ? (e - (t - n * t / i)) * 100 / n : 100 * e / i).toFixed(4)
                },
                u = (e, t, n, i) => {
                    let r = 0;
                    return (r = t >= 0 && n > 0 ? -((e - (t + n * (i - t) / i)) * 100) / n : -100 * e / i + 100).toFixed(4)
                };
            async function c(e) {
                var t;
                if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !i.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)) throw Error(r.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
                    fileType: e.type
                }));
                let n = URL.createObjectURL(e),
                    l = new Audio(n);
                return await (t = l, new Promise(e => {
                    let n = () => {
                        e(), t.removeEventListener("canplaythrough", n)
                    };
                    t.addEventListener("canplaythrough", n), t.load()
                })), l
            }
            async function d(e, t) {
                let n = await fetch(e),
                    i = await n.blob();
                return new File([i], t, {
                    type: "audio/mp3"
                })
            }
        },
        102432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDataUrlFromFile: function() {
                    return u
                },
                uploadFileReadPromise: function() {
                    return c
                },
                trimAndEncodeAudio: function() {
                    return f
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("305122"),
                s = n("108391");
            let a = new AudioContext({
                sampleRate: Math.min(new AudioContext().sampleRate, 48e3)
            });
            async function o(e) {
                let t = await e.arrayBuffer(),
                    n = t instanceof ArrayBuffer;
                if (!n) throw Error("Unexpected file type");
                return a.decodeAudioData(t)
            }
            async function u(e) {
                var t;
                let n = await (t = t => {
                    t.readAsDataURL(e)
                }, new Promise((e, n) => {
                    let i = new FileReader,
                        r = () => {
                            i.removeEventListener("load", r), i.removeEventListener("error", n), e(i.result)
                        };
                    i.addEventListener("load", r), i.addEventListener("error", n), t(i)
                }));
                if ("string" != typeof n) throw Error("Unexpected file type");
                return n
            }
            async function c(e) {
                let {
                    readPromise: t,
                    guildId: n,
                    name: i,
                    volume: r,
                    emojiId: s,
                    emojiName: a
                } = e;
                return (0, l.uploadSound)({
                    guildId: n,
                    name: i,
                    sound: await t,
                    volume: r,
                    emojiId: s,
                    emojiName: a
                })
            }
            async function d(e) {
                let t = [],
                    n = function(e) {
                        let {
                            numberOfChannels: t
                        } = e, n = [];
                        for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
                        return n
                    }(e),
                    i = function(e) {
                        if (1 === e.length) return e[0];
                        if (2 === e.length) {
                            let t = e[0],
                                n = e[1],
                                i = [];
                            for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
                            let r = new Float32Array(i.length);
                            return r.set(i), r
                        }
                        throw Error("Only handles up to 2 channels")
                    }(n),
                    l = new AudioData({
                        format: "f32",
                        sampleRate: e.sampleRate,
                        numberOfFrames: e.length,
                        numberOfChannels: e.numberOfChannels,
                        timestamp: 1e6 * e.duration,
                        data: i
                    }),
                    a = new AudioEncoder({
                        output: function(n) {
                            r(null != n.duration, "Chunk duration must not be null");
                            let i = n.duration / 1e6 * e.sampleRate,
                                l = new Uint8Array(n.byteLength);
                            n.copyTo(l), t.push({
                                buffer: l,
                                numSamples: i
                            })
                        },
                        error: e => {
                            throw Error("Audio encoding error: ".concat(e.message))
                        }
                    });
                a.configure({
                    codec: "opus",
                    sampleRate: e.sampleRate,
                    numberOfChannels: e.numberOfChannels
                }), a.encode(l), await a.flush();
                let o = (0, s.default)(t, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0
                });
                return new Blob([o], {
                    type: "audio/ogg"
                })
            }
            async function f(e, t) {
                let n = await o(e),
                    i = function(e, t) {
                        let {
                            startMs: n,
                            endMs: i
                        } = t, {
                            sampleRate: r,
                            numberOfChannels: l,
                            duration: s
                        } = e, o = 1e3 * s, u = Math.min(i, o);
                        if (0 === n && u === o) return e;
                        let c = Math.floor(n / o * e.length),
                            d = Math.floor(u / o * e.length),
                            f = a.createBuffer(l, d - c, r);
                        for (let t = 0; t < l; t++) {
                            let n = f.getChannelData(t),
                                i = e.getChannelData(t),
                                r = 0;
                            for (let e = c; e <= d; e++) n[r] = i[e], r++
                        }
                        return f
                    }(n, t),
                    r = await d(i);
                return new File([r], "sound.ogg", {
                    type: "audio/ogg"
                })
            }
        },
        184692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("129722"),
                s = n("527246"),
                a = r.memo(function(e) {
                    let {
                        fineTuning: t,
                        fineTuningResolution: n,
                        duration: r
                    } = e, {
                        file: a,
                        audio: o
                    } = (0, l.useAudioTrimmerStore)();
                    return (0, i.jsx)(s.default, {
                        file: a,
                        audio: o,
                        waveformSettings: {
                            fineTuning: t,
                            fineTuningResolution: n,
                            duration: r
                        }
                    })
                })
        },
        527246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("917351"),
                o = n("819855"),
                u = n("77078"),
                c = n("841098"),
                d = n("449918"),
                f = n("302185"),
                E = n("89050"),
                _ = n("843455"),
                h = n("353295"),
                m = r.memo(function(e) {
                    let {
                        file: t,
                        audio: n,
                        className: l,
                        waveformSettings: m
                    } = e, [I, p] = r.useState({
                        width: 0,
                        height: 0
                    }), N = r.useRef(null), g = r.useMemo(() => {
                        var e;
                        let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
                        return {
                            fineTuning: -1,
                            fineTuningResolution: t / E.defaultWaveformConfig.fineTuningScale,
                            duration: t,
                            ...null != m ? m : {}
                        }
                    }, [n, m]), S = (0, f.useAudioBufferData)(t), A = (0, f.useAudioWaveformData)(S, N.current, g), v = (0, c.default)(), T = (0, d.useColorValue)((0, o.isThemeDark)(v) ? _.Color.PRIMARY_300 : _.Color.PRIMARY_700), C = null == S || null == A, O = 0 === I.width || 0 === I.height, L = (O || C) && null != t, D = r.useCallback(() => {
                        null != N.current && p({
                            width: N.current.offsetWidth,
                            height: N.current.offsetHeight
                        })
                    }, []);
                    return r.useEffect(() => {
                        if (null != N.current) {
                            let e = new ResizeObserver((0, a.debounce)(D, 50));
                            return e.observe(N.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [D]), r.useEffect(() => {
                        if (null == N.current) return;
                        let e = N.current,
                            t = e.getContext("2d");
                        if (null == t) return;
                        let {
                            width: n,
                            height: i
                        } = e;
                        if (0 !== I.width && 0 !== I.height && null != A && A.length > 0) {
                            let e = n / A.length,
                                r = -(e * (E.defaultWaveformConfig.waveformBarWidth - 1));
                            t.clearRect(0, 0, n, i), t.fillStyle = T.hex;
                            for (let n = 0; n < A.length; n++) {
                                let l = A[n] * i,
                                    s = n * e + r,
                                    a = i / 2 - l / 2;
                                t.fillRect(s, a, e - r, l)
                            }
                        }
                    }, [T, I, v, A]), (0, i.jsxs)("div", {
                        className: s(h.container, l),
                        children: [(0, i.jsx)("canvas", {
                            className: h.waveformCanvas,
                            ref: N,
                            width: 4 * I.width,
                            height: 4 * I.height
                        }), L && (0, i.jsx)("div", {
                            className: h.loading,
                            children: (0, i.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.SPINNING_CIRCLE
                            })
                        })]
                    })
                })
        },
        302185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAudioBufferData: function() {
                    return c
                },
                useAudioWaveformData: function() {
                    return f
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("129722"),
                s = n("89050");
            let a = new Worker(new URL(n.p + n.u("21401"), n.b)),
                o = new AudioContext;
            async function u(e) {
                let t = await e.arrayBuffer(),
                    n = await o.decodeAudioData(t);
                return n.getChannelData(0)
            }

            function c(e) {
                let [t, n] = i.useState(null), [r, l] = i.useState(null);
                return i.useEffect(() => {
                    if (null == e) return;
                    let t = (0, s.getAudioFileId)(e);
                    t !== r && (l(t), n(null), u(e).then(n))
                }, [r, e]), t
            }
            let d = {
                ...s.defaultWaveformConfig
            };

            function f(e, t, n) {
                let [o, u] = i.useState(null), [c, f] = i.useState(null), [E, _] = i.useState(1), {
                    setMaxVolume: h
                } = (0, l.useAudioTrimmerStore)(), m = i.useCallback((e, t) => {
                    var i, l, s, o, u;
                    f(null), (i = e, l = t.offsetWidth, s = n, o = d, u = _, new Promise(e => {
                        let t = (0, r.v4)(),
                            n = i => {
                                let {
                                    data: {
                                        waveform: r,
                                        id: l,
                                        normalizedVolumeMultipler: s
                                    }
                                } = i;
                                t === l && (e(r), u(s)), null == a || a.removeEventListener("message", n)
                            };
                        null == a || a.addEventListener("message", n), null == a || a.postMessage({
                            id: t,
                            options: s,
                            config: o,
                            width: l,
                            rawBufferData: i
                        })
                    })).then(f)
                }, [n]);
                return i.useEffect(() => {
                    if (null == e || null == t) return;
                    let i = (0, s.getWaveformId)(e, n);
                    o !== i && (u(i), m(e, t))
                }, [e, m, t, n, o]), i.useEffect(() => {
                    h(E)
                }, [E, h]), c
            }
        },
        723961: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                s = n("132755"),
                a = n("78404"),
                o = n("520497"),
                u = n("812809"),
                c = n("129722"),
                d = n("859971"),
                f = n("527246"),
                E = n("782340"),
                _ = n("803336"),
                h = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: h
                    } = e, [m, I] = r.useState(!1), p = r.useRef(null), {
                        file: N,
                        audio: g,
                        loadAudioFromFile: S
                    } = (0, c.useAudioTrimmerStore)(), A = r.useMemo(() => (0, o.default)(t.soundId), [t]);
                    return r.useEffect(() => {
                        null == p.current && (p.current = (0, d.loadAudioFileFromUrl)(A, t.name).then(S))
                    }, [A, S, t.name]), (0, i.jsxs)("div", {
                        className: _.previewContainer,
                        children: [(0, i.jsx)(l.Clickable, {
                            onClick: h ? void 0 : function() {
                                null != g && (g.paused ? (g.volume = (0, u.default)(n), g.currentTime = 0, g.play(), I(!0), g.addEventListener("ended", () => I(!1), {
                                    once: !0
                                })) : (g.pause(), I(!1)))
                            },
                            className: _.playButton,
                            "aria-label": m ? E.default.Messages.STOP : E.default.Messages.PLAY,
                            children: m ? (0, i.jsx)(a.default, {
                                className: _.playIcon
                            }) : (0, i.jsx)(s.default, {
                                className: _.playIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: _.waveformContainer,
                            children: (0, i.jsx)(f.default, {
                                className: _.waveform,
                                file: N,
                                audio: g
                            })
                        })]
                    })
                })
        },
        108391: function(e, t, n) {
            "use strict";
            var i, r, l, s;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            (l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.CONTINUATION = 1] = "CONTINUATION", l[l.BEGINNING_OF_STREAM = 2] = "BEGINNING_OF_STREAM", l[l.END_OF_STREAM = 4] = "END_OF_STREAM";
            class a {
                appendBytes(e) {
                    if (this._offset + e.length > this._buffer.length) {
                        let t = this._offset + e.length,
                            n = Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))),
                            i = new Uint8Array(n);
                        i.set(this._buffer.subarray(0, this._offset)), this._buffer = i
                    }
                    this._buffer.set(e, this._offset), this._offset += e.length
                }
                addPage(e) {
                    if (e.segments.length > 255) throw Error("Too many segments: ".concat(e.segments.length, " exceeds limit of ").concat(255));
                    for (let [t, n] of e.segments.entries())
                        if (n.length > 255) throw Error("Segment at index ".concat(t, " too large (length ").concat(n.length, " exceeds ").concat(255, ")"));
                    let t = e.segments.reduce((e, t) => e + t.length, 0),
                        n = 27 + e.segments.length + t;
                    if (n > 65307) throw Error("Page too large (size ".concat(n, " exceeds ").concat(65307, ")"));
                    let r = this._offset,
                        l = 0;
                    switch (e.pageType) {
                        case i.CONTINUATION:
                            l = 1;
                            break;
                        case i.BEGINNING_OF_STREAM:
                            l = 2;
                            break;
                        case i.END_OF_STREAM:
                            l = 4
                    }
                    this.appendBytes([79, 103, 103, 83, 0, l, 255 & e.granulePosition, e.granulePosition >> 8 & 255, e.granulePosition >> 16 & 255, e.granulePosition >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 1, 255 & this._pageSequenceNumber, this._pageSequenceNumber >> 8 & 255, this._pageSequenceNumber >> 16 & 255, this._pageSequenceNumber >> 24 & 255]);
                    let s = this._offset;
                    for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]), this.appendBytes(e.segments.map(e => e.length)), e.segments)) this.appendBytes(t);
                    let a = function(e) {
                        return e.reduce((e, t) => e << 8 >>> 0 ^ u[e >>> 24 ^ t], 0) >>> 0
                    }(this._buffer.subarray(r, this._offset));
                    this._buffer.set([255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255], s), this._pageSequenceNumber++
                }
                finalize(e) {
                    this.addPage({
                        pageType: i.END_OF_STREAM,
                        granulePosition: e,
                        segments: []
                    });
                    let t = this._buffer,
                        n = this._offset;
                    return this._buffer = new Uint8Array(4096), this._offset = 0, this._pageSequenceNumber = 0, t.subarray(0, n)
                }
                constructor() {
                    this._buffer = new Uint8Array(4096), this._pageSequenceNumber = 0, this._offset = 0
                }
            }

            function o(e, t) {
                let n = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, t.channelCount, 0, 15, 255 & t.inputSampleRate, t.inputSampleRate >> 8 & 255, t.inputSampleRate >> 16 & 255, t.inputSampleRate >> 24 & 255, 255 & t.outputGain, t.outputGain >> 8 & 255, t.channelMappingFamily]),
                    r = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
                    l = new a;
                l.addPage({
                    pageType: i.BEGINNING_OF_STREAM,
                    granulePosition: 0,
                    segments: [n]
                });
                let s = 0;
                for (let t of (l.addPage({
                        pageType: i.NONE,
                        granulePosition: s,
                        segments: [r]
                    }), e)) {
                    let e = function(e) {
                        let t = Math.floor(e.length / 255),
                            n = [];
                        for (let i = 0; i <= t; i++) {
                            let r = 0 === i ? 0 : 255 * i,
                                l = i === t ? e.length : (i + 1) * 255;
                            n.push(e.slice(r, l))
                        }
                        return n
                    }(t.buffer);
                    s += t.numSamples, l.addPage({
                        pageType: i.NONE,
                        granulePosition: s,
                        segments: e
                    })
                }
                return l.finalize(s)
            }(s = r || (r = {}))[s.ZERO = 0] = "ZERO";
            let u = function() {
                let e = new Uint32Array(256);
                for (let t = 256; t > 0; t--) {
                    let n = t << 24;
                    for (let e = 8; e > 0; e--) n = 2147483648 & n ? 79764919 ^ n << 1 : n << 1;
                    e[t] = n
                }
                return e
            }()
        },
        823749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("627445"),
                c = n.n(u),
                d = n("77078"),
                f = n("599417"),
                E = n("208548"),
                _ = n("104945"),
                h = n("599110"),
                m = n("305122"),
                I = n("664113"),
                p = n("129722"),
                N = n("102432"),
                g = n("876189"),
                S = n("846325"),
                A = n("49111"),
                v = n("782340"),
                T = n("921389");
            (i = r || (r = {})).READY = "ready", i.ENCODING_FAILED = "encoding-failed", i.ENCODING = "encoding", i.UPLOADING = "uploading";
            let C = [{
                name: "audio",
                extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
            }];

            function O(e) {
                var t, n, i, a;
                let {
                    guildId: u,
                    sourceFile: O,
                    existingSound: L,
                    onClose: D,
                    transitionState: R,
                    showGuildPicker: M = !1
                } = e, [b, U] = s.useState(null !== (n = null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : null == L ? void 0 : L.name) && void 0 !== n ? n : ""), [y, P] = s.useState(null !== (i = null == L ? void 0 : L.volume) && void 0 !== i ? i : 1), [x, w] = s.useState(null == L ? void 0 : L.emojiId), [F, V] = s.useState(null == L ? void 0 : L.emojiName), {
                    file: B,
                    loadAudioFromFile: G,
                    maxVolume: j,
                    setMaxVolume: k
                } = (0, p.useAudioTrimmerStore)(), [H, W] = s.useState(!1), [K, Y] = s.useState(null), [z, q] = s.useState(null), [Z, X] = s.useState(r.READY), [J, Q] = s.useState(u);
                async function $(e) {
                    try {
                        await G(null != e ? e : null), X(r.READY), Y(null)
                    } catch (e) {
                        ee(e)
                    }
                }

                function ee(e) {
                    if (e instanceof f.default) Y(e);
                    else if (e instanceof Error) {
                        let t = {
                            status: 500,
                            body: {
                                message: e.message
                            }
                        };
                        Y(new f.default(t))
                    } else Y(new f.default(e))
                }
                s.useEffect(() => {
                    async function e(e) {
                        try {
                            await G(e), X(r.READY), Y(null)
                        } catch (e) {
                            ee(e)
                        }
                    }(null == O ? void 0 : O.file) != null && e(O.file)
                }, [null == O ? void 0 : O.file, G]);
                let et = function(e) {
                        switch (e) {
                            case r.ENCODING:
                                return v.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
                            case r.ENCODING_FAILED:
                                return v.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
                            case r.UPLOADING:
                                return v.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
                        }
                        return null
                    }(Z),
                    en = Z === r.UPLOADING || Z === r.ENCODING,
                    ei = null != L,
                    er = b.length >= 2 && (ei || null != B) && null != J && function(e) {
                        if (null == e) return !0;
                        let t = (e.endMs - e.startMs) / 1e3;
                        return t > 0 && t <= S.MAX_SOUND_LENGTH_SECONDS
                    }(z),
                    el = s.useCallback(async (e, t) => {
                        X(r.ENCODING);
                        try {
                            let n = await (0, N.trimAndEncodeAudio)(e, t);
                            return X(r.READY), n
                        } catch (e) {
                            throw X(r.ENCODING_FAILED), e
                        }
                    }, []),
                    es = s.useCallback(async () => {
                        if (null == B) return;
                        c(null != J, "Cannot submit soundboard sound with no guildId");
                        let e = B;
                        if (null != z) {
                            let t = await el(B, z);
                            if (null == t) return;
                            e = t
                        }
                        let t = (0, N.getDataUrlFromFile)(e);
                        X(r.UPLOADING);
                        try {
                            await (0, N.uploadFileReadPromise)({
                                readPromise: t,
                                guildId: J,
                                name: b,
                                volume: y,
                                emojiId: x,
                                emojiName: F
                            }), X(r.READY)
                        } catch (e) {
                            throw new f.default(e)
                        }
                    }, [B, J, b, el, z, y, x, F]),
                    ea = s.useCallback(async () => {
                        c(null != J, "Cannot submit soundboard sound with no guildId"), W(!0), Y(null);
                        try {
                            ei ? await (0, m.updateSound)({
                                guildId: J,
                                soundId: L.soundId,
                                name: b,
                                volume: y,
                                emojiId: x,
                                emojiName: F
                            }) : await es(), D()
                        } catch (e) {
                            ee(e)
                        } finally {
                            X(r.READY), W(!1), P(1), k(1)
                        }
                    }, [ei, D, J, L, b, y, x, F, es, k]);
                s.useEffect(() => {
                    G(null), h.default.track(A.AnalyticEvents.OPEN_MODAL, {
                        type: "Soundboard Upload Sound",
                        guild_id: J
                    })
                }, []), s.useEffect(() => {
                    P(Math.min(y, j))
                }, [y, P, j]);
                let eo = (0, l.jsx)(E.default, {
                    guildId: J,
                    emojiId: x,
                    emojiName: F,
                    setEmojiId: w,
                    setEmojiName: V,
                    error: null == K ? void 0 : K.getFirstFieldErrorMessage("emoji"),
                    isRequiredField: !1
                });
                return (0, l.jsxs)(d.ModalRoot, {
                    transitionState: R,
                    children: [(0, l.jsx)(d.ModalCloseButton, {
                        onClick: D,
                        className: T.modalClose
                    }), (0, l.jsx)(d.ModalHeader, {
                        className: T.headerContainer,
                        separator: !1,
                        children: (0, l.jsx)(d.Heading, {
                            className: T.header,
                            variant: "heading-xl/extrabold",
                            children: ei ? v.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
                        })
                    }), (0, l.jsxs)(d.ModalContent, {
                        className: T.content,
                        children: [null != K && !K.hasFieldErrors() && (0, l.jsx)(d.FormErrorBlock, {
                            className: T.section,
                            children: K.message
                        }), M ? (0, l.jsx)(d.FormItem, {
                            required: !0,
                            className: T.section,
                            title: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                            children: (0, l.jsx)(g.default, {
                                value: J,
                                onChange: Q
                            })
                        }) : null, (ei || null != B) && (0, l.jsx)(I.default, {
                            sound: L,
                            volume: y,
                            disabled: en,
                            onChange: q
                        }), ei || null != O ? null : (0, l.jsx)(d.FormItem, {
                            required: !0,
                            error: null == K ? void 0 : K.getFirstFieldErrorMessage("sound"),
                            className: T.section,
                            title: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                            children: (0, l.jsx)(_.default, {
                                filename: null !== (a = null == B ? void 0 : B.name) && void 0 !== a ? a : "",
                                buttonText: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                                placeholder: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                                onFileSelect: $,
                                filters: C
                            })
                        }), (0, l.jsxs)("div", {
                            className: T.multiInput,
                            children: [(0, l.jsx)(d.FormItem, {
                                required: !0,
                                error: null == K ? void 0 : K.getFirstFieldErrorMessage("name"),
                                className: o(T.section, T.halfInput),
                                title: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                children: (0, l.jsx)(d.TextInput, {
                                    placeholder: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                    value: b,
                                    onChange: U,
                                    maxLength: S.MAX_LENGTH_SOUND_NAME
                                })
                            }), eo]
                        }), (0, l.jsx)(d.FormItem, {
                            error: null == K ? void 0 : K.getFirstFieldErrorMessage("volume"),
                            className: T.section,
                            title: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                            children: (0, l.jsx)(d.Slider, {
                                initialValue: y,
                                onValueChange: e => P(e),
                                minValue: 0,
                                maxValue: j
                            })
                        })]
                    }), (0, l.jsxs)(d.ModalFooter, {
                        children: [(0, l.jsx)(d.Button, {
                            disabled: !er,
                            submitting: H,
                            size: d.Button.Sizes.SMALL,
                            onClick: ea,
                            children: ei ? v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
                        }), (0, l.jsx)(d.Button, {
                            disabled: H,
                            onClick: D,
                            size: d.Button.Sizes.SMALL,
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.PRIMARY,
                            children: v.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
                        }), null != et && (0, l.jsx)("div", {
                            className: T.soundStateHint,
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: et
                            })
                        })]
                    })]
                })
            }
        },
        876189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("446674"),
                o = n("77078"),
                u = n("817963"),
                c = n("305961"),
                d = n("957255"),
                f = n("677099"),
                E = n("697218"),
                _ = n("109024"),
                h = n("368121"),
                m = n("427459"),
                I = n("305122"),
                p = n("235004"),
                N = n("846325"),
                g = n("782340"),
                S = n("151355");

            function A(e) {
                let {
                    availableSlots: t,
                    className: n
                } = e;
                return (0, i.jsxs)(o.Text, {
                    className: s(S.suffixNode, n),
                    variant: "text-sm/medium",
                    color: "text-primary",
                    children: [(0, i.jsx)(h.default, {
                        className: S.speakerIcon
                    }), g.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
                        slots: t
                    })]
                })
            }

            function v(e) {
                let {
                    value: t,
                    className: n,
                    onChange: l
                } = e, h = (0, a.useStateFromStoresObject)([f.default, d.default, E.default, c.default], () => {
                    let e = {};
                    for (let t of f.default.getFlattenedGuildIds()) {
                        let n = c.default.getGuild(t);
                        if (null == n) continue;
                        let i = (0, u.getManageResourcePermissions)(n, d.default, E.default);
                        i.canCreateExpressions && (e[n.id] = n)
                    }
                    return e
                }), v = (0, a.useStateFromStoresObject)([p.default], () => {
                    let e = {};
                    for (let [n, i] of Object.entries(h)) {
                        var t;
                        let r = (0, m.getAvailableSoundboardSoundCount)(null !== (t = p.default.getSoundsForGuild(n)) && void 0 !== t ? t : N.EMPTY_SOUND_LIST, i.premiumTier);
                        e[n] = r
                    }
                    return e
                }, [h]);
                r.useEffect(() => {
                    (0, I.maybeFetchSoundboardSounds)()
                }, []);
                let T = r.useMemo(() => Object.values(h).map(e => {
                        let {
                            name: t,
                            id: n
                        } = e;
                        return {
                            label: t,
                            value: n,
                            disabled: v[n] <= 0
                        }
                    }), [h, v]),
                    C = r.useCallback(e => null == e || "" === e.value ? null : (0, i.jsx)(_.default, {
                        className: s(S.guildSelectOptionIcon, {
                            [S.disabledOption]: e.disabled
                        }),
                        guild: h[e.value],
                        size: _.default.Sizes.SMOL,
                        active: !0
                    }), [h]),
                    O = r.useCallback(e => {
                        let t = null == e ? void 0 : e.value;
                        return null == t || "" === t ? null : (0, i.jsx)(A, {
                            className: s({
                                [S.disabledOption]: null == e ? void 0 : e.disabled
                            }),
                            availableSlots: v[t]
                        })
                    }, [v]),
                    L = r.useCallback(e => (0, i.jsx)("div", {
                        className: s({
                            [S.disabledOption]: e.disabled
                        }),
                        children: e.label
                    }), []),
                    D = r.useCallback(e => {
                        !(v[e] <= 0) && l(e)
                    }, [v, l]),
                    R = (() => {
                        let e = v[null != t ? t : ""];
                        return null == e || e > 0 ? t : void 0
                    })();
                return (0, i.jsx)(o.SearchableSelect, {
                    className: n,
                    onChange: D,
                    value: R,
                    multi: !1,
                    options: T,
                    renderOptionPrefix: C,
                    renderOptionSuffix: O,
                    renderOptionLabel: L,
                    placeholder: 0 === T.length ? g.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : g.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
                })
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var l = r
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return c
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var i, r, l = n("991170"),
                s = n("719923"),
                a = n("4233"),
                o = n("24373"),
                u = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let c = (e, t, n) => {
                    if (null == t) return r.NONSENDABLE;
                    let i = s.default.canUseStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = a.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? r.SENDABLE : null == n.guild_id || l.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? r.SENDABLE : r.SENDABLE_WITH_PREMIUM : r.NONSENDABLE : r.SENDABLE_WITH_BOOSTED_GUILD;
                    return r.NONSENDABLE
                },
                d = (e, t, n) => c(e, t, n) === r.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                s = n("913144"),
                a = n("80507"),
                o = n("374363"),
                u = n("364685"),
                c = n("49111"),
                d = n("397336");
            let f = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let E = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    u.default.isLoaded && E.compute()
                },
                h = () => {
                    _()
                };

            function m() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class I extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (f = e), this.syncWith([u.default], h), this.syncWith([o.default], m)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            I.displayName = "StickersPersistedStore", I.persistKey = "StickersPersistedStoreV2";
            var p = new I(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), _()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class s extends l.default {
                static createFromServer(e) {
                    var t;
                    return new s({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                s = n("49111");
            let a = {},
                o = {},
                u = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = a[e],
                    o = null != r ? {
                        state: s.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(o), a = {
                    ...a,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class f extends i.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            f.displayName = "InviteStore";
            var E = new f(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: s.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, i;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = s.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = s.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, i;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, c(e.code, e => {
                        e.state = s.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                s = n("913144"),
                a = n("816454");
            let o = new Map;

            function u(e) {
                let t = o.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return o.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(s.default, {
                WINDOW_INIT: function(e) {
                    r(!o.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = e;
                    return o.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (o.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (o.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (o.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return o.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = d
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return m
                },
                default: function() {
                    return p
                }
            });
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("458960"),
                c = n("77078"),
                d = n("252744"),
                f = n("145131"),
                E = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let _ = {
                    [r.DEFAULT]: E.shineDefault,
                    [r.SMALL]: E.shineSmall
                },
                h = {
                    [r.DEFAULT]: E.shineInnerDefault,
                    [r.SMALL]: E.shineInnerSmall
                };
            class m extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        ...i,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, l.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: _[t],
                            children: (0, l.jsx)("div", {
                                className: h[t]
                            })
                        })
                    })
                }
            }
            m.defaultProps = {
                shineSize: r.DEFAULT
            };
            let I = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: a,
                    pauseAnimation: u,
                    shineSize: f = r.DEFAULT,
                    shinePaused: _,
                    buttonShineClassName: h,
                    onlyShineOnHover: I,
                    ...p
                } = e, N = s.createRef(), g = (0, d.default)(N), S = !i && !a && !0 !== u && (!I || g);
                return (0, l.jsxs)(c.Button, {
                    buttonRef: N,
                    ...p,
                    className: o(E.shinyButton, n),
                    disabled: i,
                    submitting: a,
                    children: [t, S ? (0, l.jsx)(m, {
                        shinePaused: _,
                        className: o(E.buttonShine, I ? E.onlyShineOnHover : void 0, h),
                        shineSize: f
                    }) : null]
                })
            };
            I.ShineSizes = r;
            var p = I
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("384737"),
                a = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let E = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                _ = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: _ = "currentColor",
                        transition: h = f.transition,
                        className: m,
                        foreground: I,
                        expanded: p,
                        ...N
                    } = e, {
                        enabled: g
                    } = (0, c.useRedesignIconContext)(), S = t;
                    if (!0 === p ? S = E.DOWN : !1 === p && (S = E.RIGHT), g) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: s.ChevronSmallDownIcon,
                            [E.LEFT]: a.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [S];
                        return (0, i.jsx)(e, {
                            ...N,
                            className: m,
                            width: n,
                            height: r,
                            color: _,
                            colorClass: I
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: l(m, h, S),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(N),
                        children: (0, i.jsx)("path", {
                            className: I,
                            fill: "none",
                            stroke: _,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            _.Directions = E;
            var h = _
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("998460"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("202909"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("876726"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, l.PlayIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("424823"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon)
        },
        78404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("912758"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M12.6667 2.00195H3.33333C2.6 2.00195 2 2.60195 2 3.33529V12.6686C2 13.402 2.6 14.002 3.33333 14.002H12.6667C13.4 14.002 14 13.402 14 12.6686V3.33529C14 2.60195 13.4 2.00195 12.6667 2.00195Z"
                        })
                    })
                }, l.StopIcon)
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("276825"),
                s = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: r
                        })
                    })
                }, l.CheckmarkSmallIcon)
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let l = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("697218"),
                s = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, a = e.updateModalProps, r = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == i) {
                    null == o || o();
                    return
                }
                let c = i(_, d, s);

                function d() {
                    null == o || o()
                }

                function f(e) {
                    r(c), n(e)
                }

                function E(e) {
                    r(c), l(e)
                }

                function _(e) {
                    return a(c, _, d, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: E,
                        code: e,
                        mfaCodeHandler: h,
                        isModalOpen: !0
                    })
                }

                function h(e) {
                    let {
                        res: t
                    } = e;
                    a(c, _, d, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: l = o,
                    isModalOpen: s = !1,
                    ...a
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, o;
                    if (r = e, o = s, r.body && 60008 === r.body.code || o && 429 === r.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...a
                    });
                    i(e)
                })
            }

            function c(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(r) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        563680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFullScreenNode: function() {
                    return r
                },
                requestFullScreen: function() {
                    return l
                },
                exitFullScreen: function() {
                    return s
                },
                isFullScreen: function() {
                    return a
                },
                FULLSCREEN_CHANGE_EVENT: function() {
                    return o
                },
                subscribeDocumentToFullScreenChange: function() {
                    return u
                }
            });
            var i = n("605250");

            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.find(e => null != e && function(e) {
                    return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen
                }(e))
            }

            function l(e) {
                "function" == typeof e.requestFullscreen ? e.requestFullscreen() : "function" == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : "function" == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : "function" == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : "function" == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new(0, i.default)("FullScreenUtils").warn("Fullscreen API is not supported.")
            }

            function s(e, t) {
                let n = null != t ? t : document;
                a(null, n) && ("function" == typeof n.exitFullscreen ? n.exitFullscreen() : "function" == typeof n.webkitExitFullscreen ? n.webkitExitFullscreen() : "function" == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : "function" == typeof n.mozCancelFullScreen ? n.mozCancelFullScreen() : "function" == typeof n.msExitFullscreen ? n.msExitFullscreen() : new(0, i.default)("FullScreenUtils").warn("Fullscreen API is not supported."))
            }

            function a(e, t) {
                let n = null != t ? t : document;
                return !!(null != n.fullscreenElement || null != n.mozFullScreenElement || null != n.webkitFullscreenElement || null != n.msFullscreenElement || null != e && e.webkitDisplayingFullscreen)
            }
            let o = (() => {
                if ("undefined" != typeof document) {
                    let e = document.createElement("video");
                    if ("function" == typeof e.requestFullscreen);
                    else if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
                    else if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
                    else if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
                    else if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange"
                } else console.warn("FullScreenUtils has been imported in a non-web environment");
                return "fullscreenchange"
            })();

            function u(e, t) {
                return e.addEventListener(o, t), e.addEventListener("webkitfullscreenchange", t), () => {
                    e.removeEventListener(o, t), e.removeEventListener("webkitfullscreenchange", t)
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("920636");
            let s = (e, t, n) => function(r) {
                return (0, i.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function a(e, t, n) {
                return (0, r.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, i) {
                return (0, r.updateModal)(e, s(t, n, i))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("817736"),
                r = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class s {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = l) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let s = (0, r.v4)(),
                a = new Map,
                o = new Map;
            class u extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = o.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);