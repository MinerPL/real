(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3050"], {
        689223: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0678b217e47589207930.mp4"
        },
        429777: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3d23b8d31086b7901261.png"
        },
        430857: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d3456e390fa9fdbbc0c4.webm"
        },
        743506: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a, l, u = n("37983"),
                s = n("884691"),
                r = n("77078"),
                o = n("851387"),
                i = n("130037"),
                c = n("772280"),
                d = n("58608"),
                E = n("387111"),
                _ = n("49111"),
                f = n("782340"),
                A = n("676702");
            (l = a || (a = {}))[l.INITIAL = 0] = "INITIAL", l[l.OTHER_REASON = 1] = "OTHER_REASON";

            function M() {
                return [{
                    value: 0,
                    label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * _.Durations.HOUR,
                    label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * _.Durations.HOUR,
                    label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * _.Durations.HOUR,
                    label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * _.Durations.DAY,
                    label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * _.Durations.DAY,
                    label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * _.Durations.DAY,
                    label: f.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            let S = M()[1].value;

            function N(e) {
                let {
                    guildId: t,
                    user: a,
                    location: l,
                    userIds: N,
                    onBanMultiple: O,
                    transitionState: I,
                    onClose: T,
                    canBulkBan: R = !1
                } = e, [m, g] = s.useState(S), [C, v] = s.useState(""), [L, h] = s.useState(0), [p, D] = s.useState(!1), b = (0, i.useTrackModerationAction)(t, {
                    location: l,
                    targetUserId: null == a ? void 0 : a.id,
                    targets: N
                }), k = s.useCallback(() => {
                    if (null != O) {
                        let e = null != N && (null == N ? void 0 : N.size) > 0 && R;
                        if (!e || p) return;
                        if ("" === C.trim() && !p) {
                            D(!0);
                            return
                        }
                        O(t, [...N], m, C)
                    } else {
                        if (null == a) return;
                        o.default.banUser(t, null == a ? void 0 : a.id, m, C)
                    }
                    b(i.ModerationActionType.BAN), T()
                }, [O, b, T, N, R, p, C, t, m, a]), B = s.useCallback(e => {
                    g(e)
                }, []), x = s.useCallback(e => {
                    let {
                        value: t
                    } = e;
                    v(t), D(!1)
                }, []), y = s.useCallback(e => {
                    v(e), p && D(!1)
                }, [p]), H = s.useCallback(() => {
                    v(""), h(1)
                }, []), P = s.useCallback(() => {
                    h(0)
                }, []), U = [{
                    name: f.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                    value: f.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                }, {
                    name: f.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                    value: f.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                }, {
                    name: f.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                    value: f.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
                }], F = null != O && null != N ? f.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                    count: null == N ? void 0 : N.size
                }) : null == a ? "" : f.default.Messages.BAN_CONFIRM_TITLE.format({
                    username: "@".concat(E.default.getName(t, null, a))
                });
                return (0, u.jsxs)(r.ModalRoot, {
                    transitionState: I,
                    children: [(0, u.jsx)(r.ModalHeader, {
                        separator: !1,
                        children: (0, u.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: F
                        })
                    }), (0, u.jsxs)(r.ModalContent, {
                        className: A.modalContent,
                        children: [(0, u.jsxs)(d.default, {
                            autoPlay: !0,
                            loop: !0,
                            className: A.spacing,
                            width: 400,
                            children: [(0, u.jsx)("source", {
                                src: n("430857"),
                                type: "video/webm"
                            }), (0, u.jsx)("source", {
                                src: n("689223"),
                                type: "video/mp4"
                            }), (0, u.jsx)("img", {
                                alt: "",
                                src: n("429777")
                            })]
                        }), (0, u.jsxs)(r.FormItem, {
                            title: f.default.Messages.FORM_LABEL_REASON_BAN,
                            className: A.spacing,
                            children: [p && (0, u.jsx)(r.FormErrorBlock, {
                                className: A.error,
                                children: f.default.Messages.BAN_REASON_REQUIRED_ERROR
                            }), (0, u.jsx)(r.Sequencer, {
                                steps: [0, 1],
                                step: L,
                                children: (e => {
                                    switch (L) {
                                        case 0:
                                            return (0, u.jsxs)(u.Fragment, {
                                                children: [(0, u.jsx)(r.RadioGroup, {
                                                    value: C,
                                                    options: e,
                                                    onChange: x,
                                                    radioItemClassName: A.radioItemStyles
                                                }), (0, u.jsxs)(r.Clickable, {
                                                    onClick: H,
                                                    className: A.banReasonOtherClickable,
                                                    children: [(0, u.jsx)(r.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: f.default.Messages.OTHER
                                                    }), (0, u.jsx)(c.default, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case 1:
                                            return (0, u.jsx)(r.TextArea, {
                                                maxLength: _.MAX_REASON_LENGTH,
                                                onChange: y,
                                                value: C,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                })(U)
                            })]
                        }), (0, u.jsx)(r.FormItem, {
                            title: f.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: A.spacing,
                            children: (0, u.jsx)(r.SingleSelect, {
                                options: M(),
                                value: m,
                                onChange: B
                            })
                        })]
                    }), (() => {
                        switch (L) {
                            case 0:
                                return (0, u.jsxs)(r.ModalFooter, {
                                    className: A.footer,
                                    children: [(0, u.jsx)(r.Button, {
                                        type: "button",
                                        look: r.Button.Looks.LINK,
                                        color: r.Button.Colors.PRIMARY,
                                        onClick: T,
                                        children: f.default.Messages.CANCEL
                                    }), (0, u.jsx)(r.Button, {
                                        type: "submit",
                                        color: r.Button.Colors.RED,
                                        size: r.Button.Sizes.SMALL,
                                        onClick: k,
                                        children: f.default.Messages.BAN
                                    })]
                                });
                            case 1:
                                return (0, u.jsxs)(r.ModalFooter, {
                                    className: A.footerStepped,
                                    children: [(0, u.jsx)(r.Button, {
                                        className: A.cancel,
                                        innerClassName: A.cancel,
                                        type: "button",
                                        look: r.Button.Looks.LINK,
                                        color: r.Button.Colors.PRIMARY,
                                        size: r.Button.Sizes.SMALL,
                                        onClick: P,
                                        children: f.default.Messages.BACK
                                    }), (0, u.jsx)(r.Button, {
                                        type: "submit",
                                        color: r.Button.Colors.RED,
                                        size: r.Button.Sizes.SMALL,
                                        onClick: k,
                                        children: f.default.Messages.BAN
                                    })]
                                })
                        }
                    })()]
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a, l = n("872717"),
                u = n("49111"),
                s = n("782340");
            a = class extends l.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: u.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: u.Links.STATUS
                    }))
                }
            }
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return f
                },
                useTrackMemberFilterRolesUsed: function() {
                    return A
                },
                MemberSafetyFlagType: function() {
                    return u
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return M
                },
                ModerationActionType: function() {
                    return s
                },
                useTrackModerationAction: function() {
                    return S
                },
                trackMembersPageViewed: function() {
                    return N
                }
            });
            var a, l, u, s, r = n("884691"),
                o = n("812204"),
                i = n("716241"),
                c = n("271938"),
                d = n("599110"),
                E = n("49111");

            function _(e, t, n) {
                var a;
                let l = {
                    ...t,
                    ...(0, i.collectGuildAnalyticsMetadata)(null !== (a = t.guild_id) && void 0 !== a ? a : n)
                };
                d.default.track(e, l)
            }

            function f(e) {
                let t = r.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        _(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function A(e) {
                let t = r.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        _(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(a = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", a.COMMUNICATION_DISABLED = "communication_disabled";

            function M(e) {
                let t = r.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        _(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function S(e, t) {
                let {
                    location: n,
                    targetUserId: a,
                    targets: l
                } = t, u = r.useCallback(t => {
                    let u = {
                        action_type: t,
                        mod_user_id: c.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != a ? a : void 0,
                        targets: null != l ? l : void 0
                    };
                    _(E.AnalyticEvents.MODERATION_ACTION, u)
                }, [e, n, a, l]);
                return u
            }

            function N(e, t) {
                _(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(l = s || (s = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"
        },
        719347: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return u
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return s
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return r
                },
                MediaLayoutType: function() {
                    return a
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return o
                }
            });
            let u = 550,
                s = 350,
                r = 40;
            (l = a || (a = {})).STATIC = "STATIC", l.RESPONSIVE = "RESPONSIVE", l.MOSAIC = "MOSAIC";
            let o = 20
        },
        58608: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983"),
                l = n("884691"),
                u = n("118810"),
                s = n("446674"),
                r = n("206230"),
                o = n("719347");
            let i = e => {
                let {
                    externalRef: t,
                    autoPlay: n,
                    playOnHover: i,
                    responsive: c,
                    mediaLayoutType: d,
                    ...E
                } = e, _ = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), f = l.useRef(null);

                function A() {
                    var e;
                    i && (null == f || null === (e = f.current) || void 0 === e || e.play())
                }

                function M() {
                    var e;
                    i && (null == f || null === (e = f.current) || void 0 === e || e.pause())
                }
                return l.useLayoutEffect(() => () => {
                    let {
                        current: e
                    } = f;
                    null != e && function(e) {
                        e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                            (0, u.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, u.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                        });
                        try {
                            e.load()
                        } catch (e) {}
                    }(e)
                }, []), l.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(f.current)) : null != t && (t.current = f.current), () => {
                    "function" == typeof t ? t(null) : null != t && (t.current = null)
                }), [t, f]), (0, a.jsx)("video", {
                    ref: f,
                    autoPlay: !_ && !i && n,
                    onMouseEnter: A,
                    onMouseLeave: M,
                    onFocus: A,
                    onBlur: M,
                    style: d === o.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : c ? function() {
                        return {
                            maxWidth: E.width,
                            maxHeight: E.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...E
                })
            };
            var c = l.forwardRef((e, t) => (0, a.jsx)(i, {
                ...e,
                externalRef: t
            }))
        },
        387111: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return i
                },
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                l = n("42203"),
                u = n("26989"),
                s = n("27618"),
                r = n("158998"),
                o = n("782340");

            function i(e, t, n) {
                if (null == n) return null;
                if (null != e) return u.default.getNick(e, n.id);
                if (null != t) {
                    let e = l.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return s.default.getNickname(n.id)
                }
                return null
            }

            function c(e, t, n) {
                var a;
                return null == n ? o.default.Messages.UNKNOWN_USER : null !== (a = i(e, t, n)) && void 0 !== a ? a : r.default.getName(n)
            }
            var d = {
                getNickname: i,
                getName: c,
                useName: function(e, t, n) {
                    return (0, a.useStateFromStores)([u.default, l.default, s.default], () => c(e, t, n))
                }
            }
        }
    }
]);