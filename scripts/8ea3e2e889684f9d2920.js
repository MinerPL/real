(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50183"], {
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
                    return l.default
                }
            });
            var u = n("14716"),
                r = n("745510"),
                l = n("315378")
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
                    return l
                }
            });
            var u = n("884691");
            let r = {};

            function l(e) {
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
            let l = [];

            function a(e, t) {
                let n = (0, u.useRef)(),
                    a = (0, u.useRef)(l);
                return a.current === l ? (n.current = e(), a.current = t) : !(0, r.default)(t, a.current) && (n.current = e(), a.current = t), n.current
            }
        },
        462392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getActionInfo: function() {
                    return L
                }
            });
            var u = n("679653"),
                r = n("42203"),
                l = n("27618"),
                a = n("697218"),
                o = n("593195"),
                A = n("631236"),
                s = n("491401"),
                _ = n("381546"),
                i = n("143460"),
                d = n("903639"),
                c = n("782340");
            let T = e => {
                    if (e === i.AutomodActionType.QUARANTINE_USER) return !1;
                    return !0
                },
                O = e => {
                    switch (e) {
                        case i.AutomodActionType.BLOCK_MESSAGE:
                        case i.AutomodActionType.FLAG_TO_CHANNEL:
                        case i.AutomodActionType.USER_COMMUNICATION_DISABLED:
                        case i.AutomodActionType.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                },
                N = e => {
                    switch (e) {
                        case i.AutomodActionType.BLOCK_MESSAGE:
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case i.AutomodActionType.FLAG_TO_CHANNEL:
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case i.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case i.AutomodActionType.QUARANTINE_USER:
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                E = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.AutomodTriggerType.KEYWORD;
                    switch (e) {
                        case i.AutomodActionType.BLOCK_MESSAGE:
                            switch (t) {
                                case i.AutomodTriggerType.MENTION_SPAM:
                                    return c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case i.AutomodTriggerType.ML_SPAM:
                                    return c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case i.AutomodActionType.FLAG_TO_CHANNEL:
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case i.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case i.AutomodActionType.QUARANTINE_USER:
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                I = (e, t) => {
                    var n, o, A;
                    switch (e) {
                        case i.AutomodActionType.QUARANTINE_USER:
                        case i.AutomodActionType.BLOCK_MESSAGE:
                            return null;
                        case i.AutomodActionType.FLAG_TO_CHANNEL: {
                            let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == e) return null;
                            let o = r.default.getChannel(e);
                            if (null == o) return null;
                            let A = (0, u.computeChannelName)(o, a.default, l.default);
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: A
                            })
                        }
                        case i.AutomodActionType.USER_COMMUNICATION_DISABLED: {
                            let e = null !== (A = null == t ? void 0 : null === (o = t.metadata) || void 0 === o ? void 0 : o.durationSeconds) && void 0 !== A ? A : 0,
                                n = (0, d.getFriendlyDurationString)(e);
                            if (null == n) return null;
                            return c.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: n
                            })
                        }
                    }
                },
                S = e => {
                    switch (e) {
                        case i.AutomodActionType.BLOCK_MESSAGE:
                            return _.default;
                        case i.AutomodActionType.FLAG_TO_CHANNEL:
                            return o.default;
                        case i.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return s.default;
                        case i.AutomodActionType.QUARANTINE_USER:
                            return A.default
                    }
                };

            function L(e, t, n) {
                var u, r, l, a;
                return O(e) ? {
                    headerText: null !== (u = N(e)) && void 0 !== u ? u : "",
                    descriptionText: null !== (r = E(e, n)) && void 0 !== r ? r : "",
                    helperText: null !== (l = I(e, t)) && void 0 !== l ? l : null,
                    icon: null !== (a = S(e)) && void 0 !== a ? a : _.default,
                    isEditable: T(e)
                } : null
            }
        },
        998730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var u = n("37983"),
                r = n("884691"),
                l = n("446674"),
                a = n("77078"),
                o = n("679653"),
                A = n("42203"),
                s = n("923959"),
                _ = n("27618"),
                i = n("697218"),
                d = n("476765"),
                c = n("462392"),
                T = n("782340"),
                O = n("643286");
            let N = e => {
                let {
                    guildId: t,
                    channel: n,
                    onSelectChannel: r
                } = e, A = (0, l.useStateFromStoresArray)([s.default], () => s.default.getChannels(t)[s.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
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
                return (0, u.jsx)(a.FormItem, {
                    className: O.channelSelector,
                    required: !0,
                    children: (0, u.jsx)(a.SearchableSelect, {
                        value: null == n ? void 0 : n.id,
                        options: A.map(e => ({
                            value: e.id,
                            label: (0, o.computeChannelName)(e, i.default, _.default, !0)
                        })),
                        onChange: e => {
                            let t = A.find(t => t.id === e);
                            r(null != t ? t : void 0)
                        },
                        placeholder: T.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
                    })
                })
            };

            function E(e) {
                let {
                    action: t,
                    triggerType: n,
                    guildId: o,
                    isEdit: s,
                    onEditChannel: _,
                    onClose: i,
                    transitionState: E
                } = e, I = (0, d.useUID)(), [S, L] = r.useState(t.metadata.channelId), [C, f] = r.useState(null), M = (0, l.useStateFromStores)([A.default], () => A.default.getChannel(S), [S]), U = (0, c.getActionInfo)(t.type, t, n);
                if (null == U) return null;
                let {
                    headerText: D
                } = U;
                return (0, u.jsxs)(a.ModalRoot, {
                    transitionState: E,
                    "aria-labelledby": I,
                    size: a.ModalSize.SMALL,
                    children: [(0, u.jsxs)(a.ModalContent, {
                        className: O.actionContentContainer,
                        children: [(0, u.jsx)(a.Heading, {
                            id: I,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: O.header,
                            children: D
                        }), (0, u.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: T.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
                        }), (0, u.jsx)(N, {
                            guildId: o,
                            channel: M,
                            onSelectChannel: e => {
                                null != e && L(e.id)
                            }
                        }), null != C ? (0, u.jsx)(a.Text, {
                            color: "text-danger",
                            variant: "text-sm/normal",
                            children: C
                        }) : (0, u.jsx)(a.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: T.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
                        })]
                    }), (0, u.jsxs)(a.ModalFooter, {
                        children: [(0, u.jsx)(a.Button, {
                            onClick: () => {
                                if (null == S) {
                                    f(T.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
                                    return
                                }
                                _(S)
                            },
                            color: a.Button.Colors.BRAND,
                            size: a.Button.Sizes.SMALL,
                            children: s ? T.default.Messages.EDIT : T.default.Messages.SAVE
                        }), (0, u.jsx)(a.Button, {
                            onClick: () => {
                                i()
                            },
                            color: a.Button.Colors.TRANSPARENT,
                            look: a.Button.Looks.LINK,
                            children: T.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);