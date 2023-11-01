(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73579"], {
        719451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteResolvingHeader: function() {
                    return g
                },
                default: function() {
                    return O
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("446674"),
                s = n("77078"),
                r = n("770032"),
                i = n("653047"),
                o = n("233069"),
                c = n("813006"),
                d = n("766274"),
                E = n("697218"),
                _ = n("953109"),
                I = n("580357"),
                f = n("124969"),
                T = n("587974"),
                N = n("158998"),
                A = n("49111"),
                C = n("238055"),
                m = n("91366"),
                S = n("782340"),
                p = n("310042");
            let g = () => (0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsx)(f.Avatar, {
                        src: null,
                        size: s.AvatarSizes.DEPRECATED_SIZE_100,
                        className: p.avatar
                    }), (0, l.jsx)(f.SubTitle, {
                        children: S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                    }), (0, l.jsx)(f.Title, {
                        className: p.inviteResolvingGuildName,
                        children: S.default.Messages.LOADING
                    })]
                }),
                h = e => {
                    let {
                        guild: t,
                        user: n,
                        application: a,
                        compact: u
                    } = e;
                    if (null != a) return (0, l.jsx)(_.default, {
                        className: p.appIcon,
                        game: a,
                        size: p.appIconSize
                    });
                    if (null != n) return (0, l.jsx)(f.Avatar, {
                        src: null != n ? n.getAvatarURL(void 0, 80) : null,
                        size: s.AvatarSizes.SIZE_80,
                        className: u ? p.compactAvatar : p.avatar
                    });
                    if (null != t) return (0, l.jsx)(T.default, {
                        mask: T.default.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: p.guildIcon,
                        children: (0, l.jsx)(f.GuildIcon, {
                            guild: t,
                            size: f.GuildIcon.Sizes.LARGER,
                            animate: !0
                        })
                    });
                    else return null
                };
            var O = e => {
                var t;
                let n, a, _, {
                        invite: T,
                        disableUser: g = !1,
                        error: O,
                        flatActivityCount: M = !1,
                        isRegister: U = !1
                    } = e,
                    {
                        currentUser: L,
                        multiAccounts: v
                    } = (0, u.useStateFromStoresObject)([r.default, E.default], () => ({
                        currentUser: E.default.getCurrentUser(),
                        multiAccounts: r.default.getUsers()
                    }));
                if (null == T) return null;
                let R = null != T.guild ? new c.default(T.guild) : null,
                    D = null != T.channel ? (0, o.createChannelRecordFromInvite)(T.channel) : null,
                    y = null != T.target_application ? new i.default(T.target_application) : null,
                    x = g || null == T.inviter ? null : new d.default(T.inviter),
                    V = null != T.approximate_member_count && T.approximate_member_count > 100 || null != R && R.hasFeature(A.GuildFeatures.COMMUNITY),
                    j = !V && null != x,
                    G = null,
                    F = !1;
                if (null != R) G = null == x ? S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                    username: N.default.getFormattedName(x)
                }), T.target_type === m.InviteTargetTypes.STREAM && null != T.target_user && (G = S.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: N.default.getFormattedName(T.target_user)
                })), T.target_type === m.InviteTargetTypes.EMBEDDED_APPLICATION && null != T.target_application && (G = null != x ? S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                    username: N.default.getFormattedName(x)
                }) : S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), j && null == y && (n = (0, l.jsx)(f.GuildIcon, {
                    className: p.icon,
                    guild: R,
                    size: f.GuildIcon.Sizes.SMALL
                })), a = R.name, null != y && (a = y.name, _ = (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(f.SubTitle, {
                        className: p.appIn,
                        children: S.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, l.jsxs)("div", {
                        className: p.guildContainer,
                        children: [(0, l.jsx)(f.GuildIcon, {
                            guild: R,
                            size: f.GuildIcon.Sizes.SMALL
                        }), (0, l.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-lg/normal",
                            color: "header-primary",
                            className: p.appGuildName,
                            children: R.name
                        })]
                    })]
                }));
                else if (null != D) {
                    if (null == x) throw Error("no inviter in group DM invite");
                    let e = N.default.getFormattedName(x);
                    null != D.name && "" !== D.name ? (G = S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: e
                    }), a = D.name, null != D.icon && (n = (0, l.jsx)(f.ChannelIcon, {
                        channel: D,
                        size: s.AvatarSizes.SIZE_32
                    }))) : (G = S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
                } else if (null != x) {
                    let e = N.default.getFormattedName(x, !0);
                    a = S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), F = !0, _ = null != O ? null : (0, l.jsx)(f.SubTitle, {
                        className: p.directInviteSubTitle,
                        children: U ? S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: e
                        }) : S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: p.container,
                    children: [(0, l.jsx)(h, {
                        application: y,
                        guild: R,
                        user: j ? x : null,
                        compact: F
                    }), null != O ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(f.SubTitle, {
                            children: S.default.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, l.jsx)(f.Title, {
                            children: O
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(f.SubTitle, {
                            children: G
                        }), (0, l.jsxs)(f.Title, {
                            className: p.title,
                            children: [null != R ? (0, l.jsx)(I.default, {
                                guild: R,
                                className: p.guildBadge,
                                tooltipPosition: "left"
                            }) : null, n, a]
                        })]
                    }), _, null != y || F || (null == T ? void 0 : null === (t = T.guild) || void 0 === t ? void 0 : t.id) === C.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(f.ActivityCount, {
                        className: p.activityCount,
                        online: T.approximate_presence_count,
                        total: T.approximate_member_count,
                        flat: M
                    }), v.length > 1 ? (0, l.jsx)(f.JoiningAs, {
                        user: L
                    }) : null]
                })
            }
        },
        238055: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                HubEmailConnectionSteps: function() {
                    return l
                },
                INVITE_ROUTING_HUB_GUILD_ID: function() {
                    return u
                }
            }), (a = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT", a.VERIFY_EMAIL = "VERIFY_EMAIL", a.VERIFY_PIN = "VERIFY_PIN", a.SELECT_SCHOOL = "SELECT_SCHOOL", a.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH", a.SUBMIT_SCHOOL = "SUBMIT_SCHOOL", a.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION", a.EMAIL_WAITLIST = "EMAIL_WAITLIST";
            let u = "884924873015689226"
        },
        672630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("748820"),
                a = n("872717"),
                u = n("49111"),
                s = {
                    generateNonce: function() {
                        return (0, l.v4)()
                    },
                    createHandoffToken: async function e(e) {
                        let {
                            body: {
                                handoff_token: t
                            }
                        } = await a.default.post({
                            url: u.Endpoints.HANDOFF,
                            body: {
                                key: e
                            },
                            oldFormErrors: !0,
                            retries: 1
                        });
                        if (null != t) return t;
                        throw Error("Missing handoff token!")
                    }
                }
        },
        694787: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateMultiAccountTokens: function() {
                    return E
                },
                switchAccount: function() {
                    return _
                },
                removeAccount: function() {
                    return I
                }
            });
            var l = n("171718"),
                a = n("872717"),
                u = n("913144"),
                s = n("437822"),
                r = n("605250"),
                i = n("271938"),
                o = n("770032"),
                c = n("49111");
            let d = new r.default("MultiAccountActionCreators");

            function E() {
                let e = i.default.getId(),
                    t = o.default.getUsers();
                t.forEach(async t => {
                    let n, {
                            id: s
                        } = t,
                        r = l.default.getToken(s);
                    if (null == r || "" === r) {
                        u.default.dispatch({
                            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                            userId: s
                        });
                        return
                    }
                    u.default.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                        userId: s
                    });
                    try {
                        n = await a.default.get({
                            url: c.Endpoints.ME,
                            headers: {
                                authorization: r
                            },
                            retries: 3
                        })
                    } catch (t) {
                        let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                        u.default.dispatch({
                            type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                            userId: s
                        });
                        return
                    }
                    u.default.dispatch({
                        type: e === s ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                        user: n.body
                    }), u.default.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                        userId: s
                    })
                })
            }

            function _(e, t) {
                d.log("Switching account to ".concat(e), {
                    switchSynchronously: t
                });
                let n = l.default.getToken(e);
                return null == n ? (d.log("Switching accounts failed because there was no token"), u.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: e
                }), Promise.resolve()) : s.default.switchAccountToken(n, t)
            }

            function I(e) {
                u.default.dispatch({
                    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
                    userId: e
                })
            }
        },
        927101: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMultiAccountUsers: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("446674"),
                u = n("913144"),
                s = n("694787"),
                r = n("770032");

            function i() {
                let e = (0, a.useStateFromStoresObject)([r.default], () => ({
                    isLoading: r.default.getIsValidatingUsers(),
                    multiAccountUsers: r.default.getUsers()
                }));
                return l.useEffect(() => {
                    u.default.wait(() => {
                        s.validateMultiAccountTokens()
                    })
                }, []), e
            }
        },
        165926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setNewUser: function() {
                    return a
                },
                setNewUserFlowCompleted: function() {
                    return u
                }
            });
            var l = n("913144");

            function a(e) {
                l.default.wait(() => l.default.dispatch({
                    type: "NUF_NEW_USER",
                    newUserType: e
                }))
            }

            function u() {
                l.default.wait(() => l.default.dispatch({
                    type: "NUF_COMPLETE"
                }))
            }
        },
        56235: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                NewUserTypes: function() {
                    return l
                }
            }), (a = l || (l = {}))[a.MARKETING_UNCLAIMED = 0] = "MARKETING_UNCLAIMED", a[a.INVITE_UNCLAIMED = 1] = "INVITE_UNCLAIMED", a[a.ORGANIC_REGISTERED = 2] = "ORGANIC_REGISTERED", a[a.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3] = "ORGANIC_REGISTERED_GUILD_TEMPLATE"
        },
        25033: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("446674"),
                u = n("913144"),
                s = n("988415");
            let r = (0, s.getDefaultCountryCode)();

            function i(e) {
                var t;
                let {
                    countryCode: n
                } = e;
                null != n && (r = null !== (t = (0, s.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, s.getDefaultCountryCode)())
            }
            class o extends a.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (l = e.selectedCountryCode)
                }
                getUserAgnosticState() {
                    return {
                        selectedCountryCode: l
                    }
                }
                getCountryCode() {
                    return null != l ? l : r
                }
            }
            o.displayName = "PhoneStore", o.persistKey = "PhoneStore";
            var c = new o(u.default, {
                PHONE_SET_COUNTRY_CODE: function(e) {
                    let {
                        countryCode: t
                    } = e;
                    l = t
                },
                CONNECTION_OPEN: i,
                SET_LOCATION_METADATA: i
            })
        },
        189613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                s = n.n(u),
                r = n("448105"),
                i = n.n(r),
                o = n("917351"),
                c = n.n(o),
                d = n("592861"),
                E = n("77078"),
                _ = n("988415"),
                I = n("145131"),
                f = n("782340"),
                T = n("803853"),
                N = n("212029");
            class A extends a.PureComponent {
                renderItems() {
                    let {
                        query: e
                    } = this.state, t = d.default.flatMap((e, t) => {
                        let {
                            alpha2: n,
                            phoneCountryCodes: a,
                            name: u
                        } = e, s = (0, _.getI18NCountryName)(n);
                        return a.map(e => ({
                            key: "".concat(t, "-").concat(e),
                            name: u,
                            translatedName: s,
                            countryData: {
                                name: u,
                                alpha2: n,
                                code: e
                            },
                            children: (0, l.jsxs)(I.default, {
                                className: T.countryItem,
                                justify: I.default.Justify.CENTER,
                                align: I.default.Align.CENTER,
                                children: [(0, l.jsx)(I.default.Child, {
                                    className: T.countryName,
                                    children: s
                                }), (0, l.jsx)(I.default.Child, {
                                    className: T.countryCode,
                                    grow: 0,
                                    shrink: 0,
                                    children: e
                                })]
                            })
                        }))
                    }), n = c(t).filter(t => 0 === e.length || i(e.toLowerCase(), t.name.toLowerCase()) || i(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, a.createElement)(E.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })).value();
                    return 0 === n.length ? (0, l.jsx)(E.PopoutList.Empty, {
                        children: f.default.Messages.NONE
                    }) : (0, l.jsx)(E.ScrollerAuto, {
                        className: T.phoneFieldScroller,
                        children: n
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, l.jsxs)(E.PopoutList, {
                        className: s(T.phoneFieldPopout, N.elevationBorderLow, e),
                        children: [(0, l.jsx)(E.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: f.default.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, l.jsx)(E.PopoutList.Divider, {}), this.renderItems()]
                    })
                }
                constructor(e) {
                    super(e), this.onChangeQuery = e => {
                        this.setState({
                            query: e
                        })
                    }, this.onClearQuery = () => {
                        this.setState({
                            query: ""
                        })
                    }, this.onClick = e => {
                        var t, n;
                        null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e)
                    }, this.state = {
                        query: ""
                    }
                }
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                u = n("880731");

            function s(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, s = (0, a.default)([u.default], () => u.default.isEnabled({
                    confettiLocation: n
                }));
                return s ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("65597"),
                u = n("526887"),
                s = n("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(u.ConfettiCannonContext), t = (0, a.default)([s.default], () => s.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = l.useMemo(() => ({
                    fire: (l, a, u) => {
                        var s, r;
                        let i = (null == u ? void 0 : u.settings) != null ? {
                                ...t,
                                ...u.settings
                            } : t,
                            o = n(i);
                        e(l, a, o, (null !== (s = null == u ? void 0 : u.count) && void 0 !== s ? s : i.confettiCount) * (null !== (r = null == u ? void 0 : u.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == u ? void 0 : u.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        }
    }
]);