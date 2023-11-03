(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26574"], {
        48174: function(e, t, n) {
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
        775560: function(e, t, n) {
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
            var l = n("14716"),
                r = n("745510"),
                u = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691");

            function r() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691");
            let r = {};

            function u(e) {
                let t = (0, l.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                r = n("48174");
            let u = [];

            function a(e, t) {
                let n = (0, l.useRef)(),
                    a = (0, l.useRef)(u);
                return a.current === u ? (n.current = e(), a.current = t) : !(0, r.default)(t, a.current) && (n.current = e(), a.current = t), n.current
            }
        },
        646074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatXIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.295 15.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 1.414L20.416 19l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414L17.588 19l-2.293-2.293a1 1 0 0 1 0-1.414Z",
                        className: o
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "m18.648 14.404-.525-.525a3 3 0 0 0-4.242 4.242l.525.525a.5.5 0 0 1 0 .708l-.525.525c-.46.46-.74 1.032-.839 1.628-.041.25-.23.464-.484.478-.184.01-.37.015-.556.015h-9.8c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2.002 12c0-5.523 4.477-10 10-10s10 4.477 10 10c0 .187-.005.372-.015.556-.014.254-.227.443-.478.485a2.986 2.986 0 0 0-1.628.838l-.526.525a.5.5 0 0 1-.707 0Z",
                        className: o
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: o = "",
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...c
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: i
                    })]
                })
            }
        },
        698210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClockWarningIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 23c.08 0 .135-.08.111-.157-.22-.715-.166-1.53.285-2.315l2.21-3.851c.174-.302-.067-.724-.313-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.379a.5.5 0 0 0 .146.353l2.561 2.56c.08.08.223.078.28-.02l.368-.64c1.163-2.028 4.127-2.028 5.29 0l.311.54c.218.381.771.311.853-.12.125-.665.191-1.35.191-2.052 0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11Z",
                        className: o
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M18.09 14.627c.394-.688 1.426-.688 1.82 0l3.96 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.464 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        346800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TextIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M10.986 3.164a1 1 0 1 0-1.972-.328L8.153 8H4a1 1 0 0 0 0 2h3.82l-.667 4H3a1 1 0 1 0 0 2h3.82l-.806 4.836a1 1 0 0 0 1.972.328L8.847 16h4.973l-.806 4.836a1 1 0 0 0 1.972.328L15.847 16H20a1 1 0 1 0 0-2h-3.82l.667-4H21a1 1 0 1 0 0-2h-3.82l.806-4.836a1 1 0 1 0-1.972-.328L15.153 8H10.18l.806-4.836ZM14.153 14l.666-4H9.848l-.667 4h4.973Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        462392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getActionInfo: function() {
                    return h
                }
            });
            var l = n("679653"),
                r = n("42203"),
                u = n("27618"),
                a = n("697218"),
                o = n("593195"),
                s = n("631236"),
                i = n("491401"),
                c = n("381546"),
                d = n("143460"),
                A = n("903639"),
                f = n("782340");
            let L = e => {
                    if (e === d.AutomodActionType.QUARANTINE_USER) return !1;
                    return !0
                },
                C = e => {
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
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case d.AutomodActionType.FLAG_TO_CHANNEL:
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case d.AutomodActionType.QUARANTINE_USER:
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                N = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.AutomodTriggerType.KEYWORD;
                    switch (e) {
                        case d.AutomodActionType.BLOCK_MESSAGE:
                            switch (t) {
                                case d.AutomodTriggerType.MENTION_SPAM:
                                    return f.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case d.AutomodTriggerType.ML_SPAM:
                                    return f.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return f.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case d.AutomodActionType.FLAG_TO_CHANNEL:
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case d.AutomodActionType.QUARANTINE_USER:
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                T = (e, t) => {
                    var n, o, s;
                    switch (e) {
                        case d.AutomodActionType.QUARANTINE_USER:
                        case d.AutomodActionType.BLOCK_MESSAGE:
                            return null;
                        case d.AutomodActionType.FLAG_TO_CHANNEL: {
                            let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == e) return null;
                            let o = r.default.getChannel(e);
                            if (null == o) return null;
                            let s = (0, l.computeChannelName)(o, a.default, u.default);
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: s
                            })
                        }
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED: {
                            let e = null !== (s = null == t ? void 0 : null === (o = t.metadata) || void 0 === o ? void 0 : o.durationSeconds) && void 0 !== s ? s : 0,
                                n = (0, A.getFriendlyDurationString)(e);
                            if (null == n) return null;
                            return f.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: n
                            })
                        }
                    }
                },
                I = e => {
                    switch (e) {
                        case d.AutomodActionType.BLOCK_MESSAGE:
                            return c.default;
                        case d.AutomodActionType.FLAG_TO_CHANNEL:
                            return o.default;
                        case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return i.default;
                        case d.AutomodActionType.QUARANTINE_USER:
                            return s.default
                    }
                };

            function h(e, t, n) {
                var l, r, u, a;
                return C(e) ? {
                    headerText: null !== (l = _(e)) && void 0 !== l ? l : "",
                    descriptionText: null !== (r = N(e, n)) && void 0 !== r ? r : "",
                    helperText: null !== (u = T(e, t)) && void 0 !== u ? u : null,
                    icon: null !== (a = I(e)) && void 0 !== a ? a : c.default,
                    isEditable: L(e)
                } : null
            }
        },
        998730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                r = n("884691"),
                u = n("446674"),
                a = n("77078"),
                o = n("679653"),
                s = n("42203"),
                i = n("923959"),
                c = n("27618"),
                d = n("697218"),
                A = n("476765"),
                f = n("462392"),
                L = n("782340"),
                C = n("643286");
            let _ = e => {
                let {
                    guildId: t,
                    channel: n,
                    onSelectChannel: r
                } = e, s = (0, u.useStateFromStoresArray)([i.default], () => i.default.getChannels(t)[i.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isGuildVocal() && !t.isThread() && !t.isForumLikeChannel()
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t
                }), [t]);
                return (0, l.jsx)(a.FormItem, {
                    className: C.channelSelector,
                    required: !0,
                    children: (0, l.jsx)(a.SearchableSelect, {
                        value: null == n ? void 0 : n.id,
                        options: s.map(e => ({
                            value: e.id,
                            label: (0, o.computeChannelName)(e, d.default, c.default, !0)
                        })),
                        onChange: e => {
                            let t = s.find(t => t.id === e);
                            r(null != t ? t : void 0)
                        },
                        placeholder: L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
                    })
                })
            };

            function N(e) {
                let {
                    action: t,
                    triggerType: n,
                    guildId: o,
                    isEdit: i,
                    onEditChannel: c,
                    onClose: d,
                    transitionState: N
                } = e, T = (0, A.useUID)(), [I, h] = r.useState(t.metadata.channelId), [O, E] = r.useState(null), M = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(I), [I]), S = (0, f.getActionInfo)(t.type, t, n);
                if (null == S) return null;
                let {
                    headerText: g
                } = S;
                return (0, l.jsxs)(a.ModalRoot, {
                    transitionState: N,
                    "aria-labelledby": T,
                    size: a.ModalSize.SMALL,
                    children: [(0, l.jsxs)(a.ModalContent, {
                        className: C.actionContentContainer,
                        children: [(0, l.jsx)(a.Heading, {
                            id: T,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: C.header,
                            children: g
                        }), (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
                        }), (0, l.jsx)(_, {
                            guildId: o,
                            channel: M,
                            onSelectChannel: e => {
                                null != e && h(e.id)
                            }
                        }), null != O ? (0, l.jsx)(a.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: O
                        }) : (0, l.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
                        })]
                    }), (0, l.jsxs)(a.ModalFooter, {
                        children: [(0, l.jsx)(a.Button, {
                            onClick: () => {
                                if (null == I) {
                                    E(L.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
                                    return
                                }
                                c(I)
                            },
                            color: a.Button.Colors.BRAND,
                            size: a.Button.Sizes.SMALL,
                            children: i ? L.default.Messages.EDIT : L.default.Messages.SAVE
                        }), (0, l.jsx)(a.Button, {
                            onClick: () => {
                                d()
                            },
                            color: a.Button.Colors.TRANSPARENT,
                            look: a.Button.Looks.LINK,
                            children: L.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return s
                }
            });
            var l = n("995008"),
                r = n.n(l),
                u = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                o = () => (0, u.useLazyValue)(() => a()),
                s = e => {
                    let {
                        children: t
                    } = e;
                    return t(o())
                }
        },
        593195: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("346800"),
                a = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: u,
                        foreground: o,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        className: u,
                        ...(0, a.default)(s),
                        children: (0, l.jsx)("path", {
                            className: o,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                        })
                    })
                }, u.TextIcon)
        },
        631236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("646074"),
                a = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(u),
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
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("698210"),
                a = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: r = 24,
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(u),
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
                }, u.ClockWarningIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("505088"),
                a = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        backgroundColor: o,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
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