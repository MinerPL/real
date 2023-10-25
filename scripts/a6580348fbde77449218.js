(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89503"], {
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
                    return r.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var l = n("732427"),
                r = n("866490"),
                u = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("773670");

            function r() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("773670");
            let r = {};

            function u(e) {
                let t = (0, l.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("773670"),
                r = n("962429");
            let u = [];

            function o(e, t) {
                let n = (0, l.useRef)(),
                    o = (0, l.useRef)(u);
                return o.current === u ? (n.current = e(), o.current = t) : !(0, r.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        345728: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelsTextIcon: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("912557"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M10.986 3.164a1 1 0 1 0-1.972-.328L8.153 8H4a1 1 0 0 0 0 2h3.82l-.667 4H3a1 1 0 1 0 0 2h3.82l-.806 4.835a1 1 0 1 0 1.972.33L8.847 16h4.973l-.806 4.835a1 1 0 1 0 1.972.33L15.847 16H20a1 1 0 0 0 0-2h-3.82l.667-4H21a1 1 0 1 0 0-2h-3.82l.806-4.836a1 1 0 1 0-1.972-.328L15.153 8H10.18l.806-4.836ZM14.153 14l.666-4H9.848l-.667 4h4.973Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        646074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatXIcon: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("912557"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M15.293 15.293a1 1 0 0 1 1.414 0L19 17.586l2.293-2.293a1 1 0 0 1 1.414 1.414L20.414 19l2.293 2.293a1 1 0 0 1-1.414 1.414L19 20.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 19l-2.293-2.293a1 1 0 0 1 0-1.414Zm3.353-.89-.525-.524a3 3 0 1 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .707l-.525.526c-.46.46-.74 1.032-.838 1.628-.042.25-.231.464-.485.478-.184.01-.37.015-.556.015H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.985 2.985 0 0 0-1.628.838l-.525.525a.5.5 0 0 1-.708 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("912557"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        926496: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClockTimeoutIcon: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("912557"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c.08 0 .135-.08.111-.157-.22-.715-.166-1.53.285-2.315l2.21-3.851c.174-.302-.067-.724-.313-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.379a.5.5 0 0 0 .146.353l2.561 2.56c.08.08.223.078.28-.02l.368-.64c1.163-2.028 4.127-2.028 5.29 0l.311.54c.218.381.771.311.853-.12.125-.665.191-1.35.191-2.052 0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11Zm6.09-8.373c.394-.688 1.426-.688 1.82 0l3.96 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.464 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        462392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getActionInfo: function() {
                    return O
                }
            });
            var l = n("679653"),
                r = n("42203"),
                u = n("27618"),
                o = n("697218"),
                a = n("593195"),
                i = n("631236"),
                s = n("491401"),
                c = n("381546"),
                d = n("143460"),
                A = n("903639"),
                C = n("782340");
            let f = e => {
                    if (e === d.AutomodActionType.QUARANTINE_USER) return !1;
                    return !0
                },
                L = e => {
                    switch (e) {
                        case d.AutomodActionType.BLOCK_MESSAGE:
                        case d.AutomodActionType.FLAG_TO_CHANNEL:
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
                        case d.AutomodActionType.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                },
                _ = e => {
                    switch (e) {
                        case d.AutomodActionType.BLOCK_MESSAGE:
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case d.AutomodActionType.FLAG_TO_CHANNEL:
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case d.AutomodActionType.QUARANTINE_USER:
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                I = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.AutomodTriggerType.KEYWORD;
                    switch (e) {
                        case d.AutomodActionType.BLOCK_MESSAGE:
                            switch (t) {
                                case d.AutomodTriggerType.MENTION_SPAM:
                                    return C.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case d.AutomodTriggerType.ML_SPAM:
                                    return C.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return C.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case d.AutomodActionType.FLAG_TO_CHANNEL:
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case d.AutomodActionType.QUARANTINE_USER:
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                T = (e, t) => {
                    var n, a, i;
                    switch (e) {
                        case d.AutomodActionType.QUARANTINE_USER:
                        case d.AutomodActionType.BLOCK_MESSAGE:
                            return null;
                        case d.AutomodActionType.FLAG_TO_CHANNEL: {
                            let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == e) return null;
                            let a = r.default.getChannel(e);
                            if (null == a) return null;
                            let i = (0, l.computeChannelName)(a, o.default, u.default);
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: i
                            })
                        }
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED: {
                            let e = null !== (i = null == t ? void 0 : null === (a = t.metadata) || void 0 === a ? void 0 : a.durationSeconds) && void 0 !== i ? i : 0,
                                n = (0, A.getFriendlyDurationString)(e);
                            if (null == n) return null;
                            return C.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: n
                            })
                        }
                    }
                },
                N = e => {
                    switch (e) {
                        case d.AutomodActionType.BLOCK_MESSAGE:
                            return c.default;
                        case d.AutomodActionType.FLAG_TO_CHANNEL:
                            return a.default;
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return s.default;
                        case d.AutomodActionType.QUARANTINE_USER:
                            return i.default
                    }
                };

            function O(e, t, n) {
                var l, r, u, o;
                return L(e) ? {
                    headerText: null !== (l = _(e)) && void 0 !== l ? l : "",
                    descriptionText: null !== (r = I(e, n)) && void 0 !== r ? r : "",
                    helperText: null !== (u = T(e, t)) && void 0 !== u ? u : null,
                    icon: null !== (o = N(e)) && void 0 !== o ? o : c.default,
                    isEditable: f(e)
                } : null
            }
        },
        489118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("920040"),
                r = n("773670"),
                u = n("77078"),
                o = n("476765"),
                a = n("462392"),
                i = n("903639"),
                s = n("782340"),
                c = n("950138");
            let d = e => {
                var t;
                let {
                    duration: n,
                    onSelectDuration: r
                } = e, o = (0, i.getDisableCommunicationDurationOptions)(), a = o.find(e => e.value === n);
                return (0, l.jsx)(u.FormItem, {
                    className: c.durationSelector,
                    required: !0,
                    children: (0, l.jsx)(u.SearchableSelect, {
                        value: null !== (t = null == a ? void 0 : a.value) && void 0 !== t ? t : i.DisableCommunicationDuration.DURATION_60_SEC,
                        options: o,
                        onChange: e => {
                            let t = o.find(t => t.value === e);
                            null != t && r(t.value)
                        },
                        placeholder: s.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
                    })
                })
            };

            function A(e) {
                let {
                    action: t,
                    triggerType: n,
                    isEdit: A,
                    onUpdateDuration: C,
                    onClose: f,
                    transitionState: L
                } = e, _ = (0, o.useUID)(), [I, T] = r.useState(() => null != t.metadata.durationSeconds && t.metadata.durationSeconds > 0 ? t.metadata.durationSeconds : i.DisableCommunicationDuration.DURATION_60_SEC), N = (0, a.getActionInfo)(t.type, t, n);
                if (null == N) return null;
                let {
                    headerText: O
                } = N;
                return (0, l.jsxs)(u.ModalRoot, {
                    transitionState: L,
                    "aria-labelledby": _,
                    size: u.ModalSize.SMALL,
                    children: [(0, l.jsxs)(u.ModalContent, {
                        className: c.actionContentContainer,
                        children: [(0, l.jsx)(u.Heading, {
                            id: _,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: c.header,
                            children: O
                        }), (0, l.jsx)(u.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: s.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
                        }), (0, l.jsx)(d, {
                            duration: I,
                            onSelectDuration: e => {
                                T(e)
                            }
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            onClick: () => {
                                C(I)
                            },
                            color: u.Button.Colors.BRAND,
                            size: u.Button.Sizes.SMALL,
                            children: A ? s.default.Messages.EDIT : s.default.Messages.SAVE
                        }), (0, l.jsx)(u.Button, {
                            onClick: () => {
                                f()
                            },
                            color: u.Button.Colors.TRANSPARENT,
                            look: u.Button.Looks.LINK,
                            children: s.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return i
                }
            });
            var l = n("552473"),
                r = n.n(l),
                u = n("365444");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                a = () => (0, u.useLazyValue)(() => o()),
                i = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        593195: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("469563"),
                u = n("345728"),
                o = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: u,
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        className: u,
                        ...(0, o.default)(i),
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                        })
                    })
                }, u.ChannelsTextIcon)
        },
        631236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("469563"),
                u = n("646074"),
                o = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, o.default)(u),
                        width: t,
                        height: n,
                        fill: "None",
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            d: "M4.25947 16.5917C3.14082 14.7059 2.74905 12.4766 3.15775 10.3224C3.56644 8.16824 4.74748 6.23734 6.47909 4.89231C8.2107 3.54728 10.3738 2.88064 12.5621 3.01758C14.7504 3.15452 16.8135 4.08562 18.3639 5.63603C19.9144 7.18644 20.8455 9.24952 20.9824 11.4379C21.1194 13.6262 20.4527 15.7893 19.1077 17.5209C17.7627 19.2525 15.8318 20.4335 13.6776 20.8422C11.5234 21.2509 9.29412 20.8592 7.40833 19.7405L7.40835 19.7405L4.29862 20.6289C4.16996 20.6657 4.03381 20.6674 3.90428 20.6338C3.77475 20.6003 3.65655 20.5327 3.56194 20.4381C3.46732 20.3434 3.39973 20.2252 3.36616 20.0957C3.3326 19.9662 3.33429 19.83 3.37105 19.7014L4.25954 16.5916L4.25947 16.5917Z",
                            stroke: r,
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.30605 8.30602C7.89802 8.71404 7.89802 9.37558 8.30605 9.78361L10.5224 12L8.30606 14.2164C7.89803 14.6244 7.89803 15.2859 8.30606 15.694C8.71409 16.102 9.37563 16.102 9.78365 15.694L12 13.4776L14.2164 15.694C14.6244 16.102 15.286 16.102 15.694 15.694C16.102 15.2859 16.102 14.6244 15.694 14.2164L13.4776 12L15.694 9.78361C16.102 9.37558 16.102 8.71404 15.694 8.30602C15.286 7.89799 14.6244 7.89799 14.2164 8.30602L12 10.5224L9.78364 8.30602C9.37562 7.89799 8.71408 7.89799 8.30605 8.30602Z",
                            fill: r
                        })]
                    })
                }, u.ChatXIcon)
        },
        491401: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("469563"),
                u = n("926496"),
                o = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: r = 24,
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, o.default)(u),
                        width: r,
                        height: n,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)("path", {
                            d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                            fill: t
                        }), (0, l.jsx)("path", {
                            d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                            fill: t
                        })]
                    })
                }, u.ClockTimeoutIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var r = n("469563"),
                u = n("505088"),
                o = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        backgroundColor: a,
                        ...i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, o.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, l.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, u.CircleXIcon)
        }
    }
]);