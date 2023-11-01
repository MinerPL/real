(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9509"], {
        48174: function(e, t, n) {
            "use strict";

            function u(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return u.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var u = n("14716"),
                r = n("745510"),
                o = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("884691");

            function r() {
                let [, e] = (0, u.useState)({});
                return (0, u.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var u = n("884691");
            let r = {};

            function o(e) {
                let t = (0, u.useRef)(r);
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
            var u = n("884691"),
                r = n("48174");
            let o = [];

            function a(e, t) {
                let n = (0, u.useRef)(),
                    a = (0, u.useRef)(o);
                return a.current === o ? (n.current = e(), a.current = t) : !(0, r.default)(t, a.current) && (n.current = e(), a.current = t), n.current
            }
        },
        462392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getActionInfo: function() {
                    return M
                }
            });
            var u = n("679653"),
                r = n("42203"),
                o = n("27618"),
                a = n("697218"),
                l = n("593195"),
                A = n("631236"),
                s = n("491401"),
                i = n("381546"),
                c = n("143460"),
                d = n("903639"),
                _ = n("782340");
            let T = e => {
                    if (e === c.AutomodActionType.QUARANTINE_USER) return !1;
                    return !0
                },
                I = e => {
                    switch (e) {
                        case c.AutomodActionType.BLOCK_MESSAGE:
                        case c.AutomodActionType.FLAG_TO_CHANNEL:
                        case c.AutomodActionType.USER_COMMUNICATION_DISABLED:
                        case c.AutomodActionType.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                },
                O = e => {
                    switch (e) {
                        case c.AutomodActionType.BLOCK_MESSAGE:
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case c.AutomodActionType.FLAG_TO_CHANNEL:
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case c.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case c.AutomodActionType.QUARANTINE_USER:
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.AutomodTriggerType.KEYWORD;
                    switch (e) {
                        case c.AutomodActionType.BLOCK_MESSAGE:
                            switch (t) {
                                case c.AutomodTriggerType.MENTION_SPAM:
                                    return _.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case c.AutomodTriggerType.ML_SPAM:
                                    return _.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return _.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case c.AutomodActionType.FLAG_TO_CHANNEL:
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case c.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case c.AutomodActionType.QUARANTINE_USER:
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                N = (e, t) => {
                    var n, l, A;
                    switch (e) {
                        case c.AutomodActionType.QUARANTINE_USER:
                        case c.AutomodActionType.BLOCK_MESSAGE:
                            return null;
                        case c.AutomodActionType.FLAG_TO_CHANNEL: {
                            let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == e) return null;
                            let l = r.default.getChannel(e);
                            if (null == l) return null;
                            let A = (0, u.computeChannelName)(l, a.default, o.default);
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: A
                            })
                        }
                        case c.AutomodActionType.USER_COMMUNICATION_DISABLED: {
                            let e = null !== (A = null == t ? void 0 : null === (l = t.metadata) || void 0 === l ? void 0 : l.durationSeconds) && void 0 !== A ? A : 0,
                                n = (0, d.getFriendlyDurationString)(e);
                            if (null == n) return null;
                            return _.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: n
                            })
                        }
                    }
                },
                E = e => {
                    switch (e) {
                        case c.AutomodActionType.BLOCK_MESSAGE:
                            return i.default;
                        case c.AutomodActionType.FLAG_TO_CHANNEL:
                            return l.default;
                        case c.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return s.default;
                        case c.AutomodActionType.QUARANTINE_USER:
                            return A.default
                    }
                };

            function M(e, t, n) {
                var u, r, o, a;
                return I(e) ? {
                    headerText: null !== (u = O(e)) && void 0 !== u ? u : "",
                    descriptionText: null !== (r = S(e, n)) && void 0 !== r ? r : "",
                    helperText: null !== (o = N(e, t)) && void 0 !== o ? o : null,
                    icon: null !== (a = E(e)) && void 0 !== a ? a : i.default,
                    isEditable: T(e)
                } : null
            }
        },
        489118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var u = n("37983"),
                r = n("884691"),
                o = n("77078"),
                a = n("476765"),
                l = n("462392"),
                A = n("903639"),
                s = n("782340"),
                i = n("387018");
            let c = e => {
                var t;
                let {
                    duration: n,
                    onSelectDuration: r
                } = e, a = (0, A.getDisableCommunicationDurationOptions)(), l = a.find(e => e.value === n);
                return (0, u.jsx)(o.FormItem, {
                    className: i.durationSelector,
                    required: !0,
                    children: (0, u.jsx)(o.SearchableSelect, {
                        value: null !== (t = null == l ? void 0 : l.value) && void 0 !== t ? t : A.DisableCommunicationDuration.DURATION_60_SEC,
                        options: a,
                        onChange: e => {
                            let t = a.find(t => t.value === e);
                            null != t && r(t.value)
                        },
                        placeholder: s.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
                    })
                })
            };

            function d(e) {
                let {
                    action: t,
                    triggerType: n,
                    isEdit: d,
                    onUpdateDuration: _,
                    onClose: T,
                    transitionState: I
                } = e, O = (0, a.useUID)(), [S, N] = r.useState(() => null != t.metadata.durationSeconds && t.metadata.durationSeconds > 0 ? t.metadata.durationSeconds : A.DisableCommunicationDuration.DURATION_60_SEC), E = (0, l.getActionInfo)(t.type, t, n);
                if (null == E) return null;
                let {
                    headerText: M
                } = E;
                return (0, u.jsxs)(o.ModalRoot, {
                    transitionState: I,
                    "aria-labelledby": O,
                    size: o.ModalSize.SMALL,
                    children: [(0, u.jsxs)(o.ModalContent, {
                        className: i.actionContentContainer,
                        children: [(0, u.jsx)(o.Heading, {
                            id: O,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: i.header,
                            children: M
                        }), (0, u.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: s.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
                        }), (0, u.jsx)(c, {
                            duration: S,
                            onSelectDuration: e => {
                                N(e)
                            }
                        })]
                    }), (0, u.jsxs)(o.ModalFooter, {
                        children: [(0, u.jsx)(o.Button, {
                            onClick: () => {
                                _(S)
                            },
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.SMALL,
                            children: d ? s.default.Messages.EDIT : s.default.Messages.SAVE
                        }), (0, u.jsx)(o.Button, {
                            onClick: () => {
                                T()
                            },
                            color: o.Button.Colors.TRANSPARENT,
                            look: o.Button.Looks.LINK,
                            children: s.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);