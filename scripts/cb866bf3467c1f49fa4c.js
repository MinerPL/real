(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96843"], {
        719451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteResolvingHeader: function() {
                    return g
                },
                default: function() {
                    return v
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("446674"),
                u = n("77078"),
                r = n("770032"),
                i = n("653047"),
                o = n("233069"),
                c = n("813006"),
                d = n("766274"),
                f = n("697218"),
                E = n("953109"),
                _ = n("580357"),
                I = n("124969"),
                h = n("587974"),
                T = n("158998"),
                N = n("49111"),
                C = n("238055"),
                p = n("91366"),
                A = n("782340"),
                m = n("310042");
            let g = () => (0, l.jsxs)(s.Fragment, {
                    children: [(0, l.jsx)(I.Avatar, {
                        src: null,
                        size: u.AvatarSizes.DEPRECATED_SIZE_100,
                        className: m.avatar
                    }), (0, l.jsx)(I.SubTitle, {
                        children: A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                    }), (0, l.jsx)(I.Title, {
                        className: m.inviteResolvingGuildName,
                        children: A.default.Messages.LOADING
                    })]
                }),
                S = e => {
                    let {
                        guild: t,
                        user: n,
                        application: s,
                        compact: a
                    } = e;
                    if (null != s) return (0, l.jsx)(E.default, {
                        className: m.appIcon,
                        game: s,
                        size: m.appIconSize
                    });
                    if (null != n) return (0, l.jsx)(I.Avatar, {
                        src: null != n ? n.getAvatarURL(void 0, 80) : null,
                        size: u.AvatarSizes.SIZE_80,
                        className: a ? m.compactAvatar : m.avatar
                    });
                    if (null != t) return (0, l.jsx)(h.default, {
                        mask: h.default.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: m.guildIcon,
                        children: (0, l.jsx)(I.GuildIcon, {
                            guild: t,
                            size: I.GuildIcon.Sizes.LARGER,
                            animate: !0
                        })
                    });
                    else return null
                };
            var v = e => {
                var t;
                let n, s, E, {
                        invite: h,
                        disableUser: g = !1,
                        error: v,
                        flatActivityCount: O = !1,
                        isRegister: R = !1
                    } = e,
                    {
                        currentUser: M,
                        multiAccounts: U
                    } = (0, a.useStateFromStoresObject)([r.default, f.default], () => ({
                        currentUser: f.default.getCurrentUser(),
                        multiAccounts: r.default.getUsers()
                    }));
                if (null == h) return null;
                let L = null != h.guild ? new c.default(h.guild) : null,
                    y = null != h.channel ? (0, o.createChannelRecordFromInvite)(h.channel) : null,
                    D = null != h.target_application ? new i.default(h.target_application) : null,
                    x = g || null == h.inviter ? null : new d.default(h.inviter),
                    j = null != h.approximate_member_count && h.approximate_member_count > 100 || null != L && L.hasFeature(N.GuildFeatures.COMMUNITY),
                    w = !j && null != x,
                    V = null,
                    F = !1;
                if (null != L) V = null == x ? A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : A.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                    username: T.default.getFormattedName(x)
                }), h.target_type === p.InviteTargetTypes.STREAM && null != h.target_user && (V = A.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: T.default.getFormattedName(h.target_user)
                })), h.target_type === p.InviteTargetTypes.EMBEDDED_APPLICATION && null != h.target_application && (V = null != x ? A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                    username: T.default.getFormattedName(x)
                }) : A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), w && null == D && (n = (0, l.jsx)(I.GuildIcon, {
                    className: m.icon,
                    guild: L,
                    size: I.GuildIcon.Sizes.SMALL
                })), s = L.name, null != D && (s = D.name, E = (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(I.SubTitle, {
                        className: m.appIn,
                        children: A.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, l.jsxs)("div", {
                        className: m.guildContainer,
                        children: [(0, l.jsx)(I.GuildIcon, {
                            guild: L,
                            size: I.GuildIcon.Sizes.SMALL
                        }), (0, l.jsx)(u.Text, {
                            tag: "span",
                            variant: "text-lg/normal",
                            color: "header-primary",
                            className: m.appGuildName,
                            children: L.name
                        })]
                    })]
                }));
                else if (null != y) {
                    if (null == x) throw Error("no inviter in group DM invite");
                    let e = T.default.getFormattedName(x);
                    null != y.name && "" !== y.name ? (V = A.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: e
                    }), s = y.name, null != y.icon && (n = (0, l.jsx)(I.ChannelIcon, {
                        channel: y,
                        size: u.AvatarSizes.SIZE_32
                    }))) : (V = A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, s = e)
                } else if (null != x) {
                    let e = T.default.getFormattedName(x, !0);
                    s = A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), F = !0, E = null != v ? null : (0, l.jsx)(I.SubTitle, {
                        className: m.directInviteSubTitle,
                        children: R ? A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: e
                        }) : A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: m.container,
                    children: [(0, l.jsx)(S, {
                        application: D,
                        guild: L,
                        user: w ? x : null,
                        compact: F
                    }), null != v ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(I.SubTitle, {
                            children: A.default.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, l.jsx)(I.Title, {
                            children: v
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(I.SubTitle, {
                            children: V
                        }), (0, l.jsxs)(I.Title, {
                            className: m.title,
                            children: [null != L ? (0, l.jsx)(_.default, {
                                guild: L,
                                className: m.guildBadge,
                                tooltipPosition: "left"
                            }) : null, n, s]
                        })]
                    }), E, null != D || F || (null == h ? void 0 : null === (t = h.guild) || void 0 === t ? void 0 : t.id) === C.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(I.ActivityCount, {
                        className: m.activityCount,
                        online: h.approximate_presence_count,
                        total: h.approximate_member_count,
                        flat: O
                    }), U.length > 1 ? (0, l.jsx)(I.JoiningAs, {
                        user: M
                    }) : null]
                })
            }
        },
        238055: function(e, t, n) {
            "use strict";
            var l, s;
            n.r(t), n.d(t, {
                HubEmailConnectionSteps: function() {
                    return l
                },
                INVITE_ROUTING_HUB_GUILD_ID: function() {
                    return a
                }
            }), (s = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT", s.VERIFY_EMAIL = "VERIFY_EMAIL", s.VERIFY_PIN = "VERIFY_PIN", s.SELECT_SCHOOL = "SELECT_SCHOOL", s.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH", s.SUBMIT_SCHOOL = "SUBMIT_SCHOOL", s.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION", s.EMAIL_WAITLIST = "EMAIL_WAITLIST";
            let a = "884924873015689226"
        },
        672630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("748820"),
                s = n("872717"),
                a = n("49111"),
                u = {
                    generateNonce: function() {
                        return (0, l.v4)()
                    },
                    createHandoffToken: async function e(e) {
                        let {
                            body: {
                                handoff_token: t
                            }
                        } = await s.default.post({
                            url: a.Endpoints.HANDOFF,
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
                    return f
                },
                switchAccount: function() {
                    return E
                },
                removeAccount: function() {
                    return _
                }
            });
            var l = n("171718"),
                s = n("872717"),
                a = n("913144"),
                u = n("437822"),
                r = n("605250"),
                i = n("271938"),
                o = n("770032"),
                c = n("49111");
            let d = new r.default("MultiAccountActionCreators");

            function f() {
                let e = i.default.getId(),
                    t = o.default.getUsers();
                t.forEach(async t => {
                    let n, {
                            id: u
                        } = t,
                        r = l.default.getToken(u);
                    if (null == r || "" === r) {
                        a.default.dispatch({
                            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                            userId: u
                        });
                        return
                    }
                    a.default.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                        userId: u
                    });
                    try {
                        n = await s.default.get({
                            url: c.Endpoints.ME,
                            headers: {
                                authorization: r
                            },
                            retries: 3
                        })
                    } catch (t) {
                        let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                        a.default.dispatch({
                            type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                            userId: u
                        });
                        return
                    }
                    a.default.dispatch({
                        type: e === u ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                        user: n.body
                    }), a.default.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                        userId: u
                    })
                })
            }

            function E(e, t) {
                d.log("Switching account to ".concat(e), {
                    switchSynchronously: t
                });
                let n = l.default.getToken(e);
                return null == n ? (d.log("Switching accounts failed because there was no token"), a.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: e
                }), Promise.resolve()) : u.default.switchAccountToken(n, t)
            }

            function _(e) {
                a.default.dispatch({
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
                s = n("446674"),
                a = n("913144"),
                u = n("694787"),
                r = n("770032");

            function i() {
                let e = (0, s.useStateFromStoresObject)([r.default], () => ({
                    isLoading: r.default.getIsValidatingUsers(),
                    multiAccountUsers: r.default.getUsers()
                }));
                return l.useEffect(() => {
                    a.default.wait(() => {
                        u.validateMultiAccountTokens()
                    })
                }, []), e
            }
        },
        165926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setNewUser: function() {
                    return s
                },
                setNewUserFlowCompleted: function() {
                    return a
                }
            });
            var l = n("913144");

            function s(e) {
                l.default.wait(() => l.default.dispatch({
                    type: "NUF_NEW_USER",
                    newUserType: e
                }))
            }

            function a() {
                l.default.wait(() => l.default.dispatch({
                    type: "NUF_COMPLETE"
                }))
            }
        },
        56235: function(e, t, n) {
            "use strict";
            var l, s;
            n.r(t), n.d(t, {
                NewUserTypes: function() {
                    return l
                }
            }), (s = l || (l = {}))[s.MARKETING_UNCLAIMED = 0] = "MARKETING_UNCLAIMED", s[s.INVITE_UNCLAIMED = 1] = "INVITE_UNCLAIMED", s[s.ORGANIC_REGISTERED = 2] = "ORGANIC_REGISTERED", s[s.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3] = "ORGANIC_REGISTERED_GUILD_TEMPLATE"
        },
        25033: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("446674"),
                a = n("913144"),
                u = n("988415");
            let r = (0, u.getDefaultCountryCode)();

            function i(e) {
                var t;
                let {
                    countryCode: n
                } = e;
                null != n && (r = null !== (t = (0, u.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, u.getDefaultCountryCode)())
            }
            class o extends s.default.DeviceSettingsStore {
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
            var c = new o(a.default, {
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
                    return N
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                u = n.n(a),
                r = n("448105"),
                i = n.n(r),
                o = n("917351"),
                c = n.n(o),
                d = n("592861"),
                f = n("77078"),
                E = n("988415"),
                _ = n("145131"),
                I = n("782340"),
                h = n("803853"),
                T = n("212029");
            class N extends s.PureComponent {
                renderItems() {
                    let {
                        query: e
                    } = this.state, t = d.default.flatMap((e, t) => {
                        let {
                            alpha2: n,
                            phoneCountryCodes: s,
                            name: a
                        } = e, u = (0, E.getI18NCountryName)(n);
                        return s.map(e => ({
                            key: "".concat(t, "-").concat(e),
                            name: a,
                            translatedName: u,
                            countryData: {
                                name: a,
                                alpha2: n,
                                code: e
                            },
                            children: (0, l.jsxs)(_.default, {
                                className: h.countryItem,
                                justify: _.default.Justify.CENTER,
                                align: _.default.Align.CENTER,
                                children: [(0, l.jsx)(_.default.Child, {
                                    className: h.countryName,
                                    children: u
                                }), (0, l.jsx)(_.default.Child, {
                                    className: h.countryCode,
                                    grow: 0,
                                    shrink: 0,
                                    children: e
                                })]
                            })
                        }))
                    }), n = c(t).filter(t => 0 === e.length || i(e.toLowerCase(), t.name.toLowerCase()) || i(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, s.createElement)(f.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })).value();
                    return 0 === n.length ? (0, l.jsx)(f.PopoutList.Empty, {
                        children: I.default.Messages.NONE
                    }) : (0, l.jsx)(f.ScrollerAuto, {
                        className: h.phoneFieldScroller,
                        children: n
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, l.jsxs)(f.PopoutList, {
                        className: u(h.phoneFieldPopout, T.elevationBorderLow, e),
                        children: [(0, l.jsx)(f.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: I.default.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, l.jsx)(f.PopoutList.Divider, {}), this.renderItems()]
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
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("65597"),
                a = n("880731");

            function u(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, u = (0, s.default)([a.default], () => a.default.isEnabled({
                    confettiLocation: n
                }));
                return u ? (0, l.jsx)(l.Fragment, {
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
                s = n("65597"),
                a = n("526887"),
                u = n("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(a.ConfettiCannonContext), t = (0, s.default)([u.default], () => u.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = l.useMemo(() => ({
                    fire: (l, s, a) => {
                        var u, r;
                        let i = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            o = n(i);
                        e(l, s, o, (null !== (u = null == a ? void 0 : a.count) && void 0 !== u ? u : i.confettiCount) * (null !== (r = null == a ? void 0 : a.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        },
        794538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                u = n.n(a),
                r = n("145131"),
                i = n("616389");
            class o extends s.PureComponent {
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, l.jsx)("input", {
                        ref: this.setCodeBlockRef,
                        className: u(i.input, e),
                        maxLength: 1,
                        value: null != this.props.code ? this.props.code : void 0,
                        autoFocus: this.props.autoFocus,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange
                    })
                }
                focus() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.focus()
                }
                blur() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.blur()
                }
                constructor(...e) {
                    super(...e), this.setCodeBlockRef = e => {
                        this._codeBlockRef = e
                    }, this.handleKeyDown = e => {
                        let t = 8 === e.which || 37 === e.which || 39 === e.which,
                            n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
                        !t && !n && e.preventDefault();
                        let {
                            onKeyDown: l
                        } = this.props;
                        null == l || l(e)
                    }, this.handleChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        null == t || t(e.currentTarget.value)
                    }
                }
            }
            o.defaultProps = {
                autoFocus: !1
            };
            class c extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        inputClassName: t
                    } = this.props, {
                        codes: n
                    } = this.state, s = [];
                    for (let e = 0; e < n.length; e++) e === n.length / 2 && s.push((0, l.jsx)("div", {
                        className: i.spacer
                    }, "spacer")), s.push((0, l.jsx)(o, {
                        ref: t => this.setCodeBlockRef(e, t),
                        code: n[e],
                        autoFocus: 0 === e,
                        onChange: t => this.handleChange(e, t),
                        onKeyDown: t => this.handleKeyDown(e, t),
                        className: t
                    }, e));
                    return (0, l.jsx)(r.default, {
                        align: r.default.Align.CENTER,
                        justify: r.default.Justify.CENTER,
                        className: e,
                        children: s
                    })
                }
                setCodeBlockRef(e, t) {
                    this._codeBlockRefs[e] = t
                }
                handleChange(e, t) {
                    this.state.codes[e] = t;
                    let n = this.getCodeOrFirstEmptyIndex();
                    if ("string" == typeof n) this.submit(n);
                    else {
                        let e = this._codeBlockRefs[n];
                        null == e || e.focus()
                    }
                }
                handleKeyDown(e, t) {
                    let {
                        codes: n
                    } = this.state;
                    if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
                        let t = e - 1;
                        n[t] = "";
                        let l = this._codeBlockRefs[t];
                        null == l || l.focus()
                    }
                }
                getCodeOrFirstEmptyIndex() {
                    let {
                        codes: e
                    } = this.state, t = "";
                    for (let n = 0; n < e.length; n++) {
                        if (isNaN(parseInt(e[n]))) return n;
                        t += e[n]
                    }
                    return t
                }
                submit(e) {
                    let {
                        onSubmit: t
                    } = this.props;
                    null == t || t(e)
                }
                constructor(e) {
                    super(e), this._codeBlockRefs = Array(this.props.count), this.state = {
                        codes: Array(e.count)
                    }
                }
            }
            c.defaultProps = {
                count: 6
            };
            var d = c
        }
    }
]);