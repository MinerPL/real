(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99618"], {
        719451: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                InviteResolvingHeader: function() {
                    return g
                },
                default: function() {
                    return v
                }
            }), l("70102");
            var n = l("37983"),
                s = l("884691"),
                a = l("446674"),
                u = l("77078"),
                r = l("770032"),
                i = l("653047"),
                o = l("233069"),
                c = l("813006"),
                d = l("766274"),
                f = l("697218"),
                E = l("953109"),
                _ = l("580357"),
                I = l("124969"),
                h = l("587974"),
                T = l("158998"),
                N = l("49111"),
                C = l("238055"),
                p = l("91366"),
                A = l("782340"),
                m = l("310042");
            let g = () => (0, n.jsxs)(s.Fragment, {
                    children: [(0, n.jsx)(I.Avatar, {
                        src: null,
                        size: u.AvatarSizes.DEPRECATED_SIZE_100,
                        className: m.avatar
                    }), (0, n.jsx)(I.SubTitle, {
                        children: A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                    }), (0, n.jsx)(I.Title, {
                        className: m.inviteResolvingGuildName,
                        children: A.default.Messages.LOADING
                    })]
                }),
                S = e => {
                    let {
                        guild: t,
                        user: l,
                        application: s,
                        compact: a
                    } = e;
                    if (null != s) return (0, n.jsx)(E.default, {
                        className: m.appIcon,
                        game: s,
                        size: m.appIconSize
                    });
                    if (null != l) return (0, n.jsx)(I.Avatar, {
                        src: null != l ? l.getAvatarURL(void 0, 80) : null,
                        size: u.AvatarSizes.SIZE_80,
                        className: a ? m.compactAvatar : m.avatar
                    });
                    if (null != t) return (0, n.jsx)(h.default, {
                        mask: h.default.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: m.guildIcon,
                        children: (0, n.jsx)(I.GuildIcon, {
                            guild: t,
                            size: I.GuildIcon.Sizes.LARGER,
                            animate: !0
                        })
                    });
                    else return null
                };
            var v = e => {
                var t;
                let l, s, E, {
                        invite: h,
                        disableUser: g = !1,
                        error: v,
                        flatActivityCount: R = !1,
                        isRegister: O = !1
                    } = e,
                    {
                        currentUser: U,
                        multiAccounts: M
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
                }) : A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), w && null == D && (l = (0, n.jsx)(I.GuildIcon, {
                    className: m.icon,
                    guild: L,
                    size: I.GuildIcon.Sizes.SMALL
                })), s = L.name, null != D && (s = D.name, E = (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(I.SubTitle, {
                        className: m.appIn,
                        children: A.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, n.jsxs)("div", {
                        className: m.guildContainer,
                        children: [(0, n.jsx)(I.GuildIcon, {
                            guild: L,
                            size: I.GuildIcon.Sizes.SMALL
                        }), (0, n.jsx)(u.Text, {
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
                    }), s = y.name, null != y.icon && (l = (0, n.jsx)(I.ChannelIcon, {
                        channel: y,
                        size: u.AvatarSizes.SIZE_32
                    }))) : (V = A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, s = e)
                } else if (null != x) {
                    let e = T.default.getFormattedName(x, !0);
                    s = A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), F = !0, E = null != v ? null : (0, n.jsx)(I.SubTitle, {
                        className: m.directInviteSubTitle,
                        children: O ? A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: e
                        }) : A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, n.jsxs)("div", {
                    className: m.container,
                    children: [(0, n.jsx)(S, {
                        application: D,
                        guild: L,
                        user: w ? x : null,
                        compact: F
                    }), null != v ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(I.SubTitle, {
                            children: A.default.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, n.jsx)(I.Title, {
                            children: v
                        })]
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(I.SubTitle, {
                            children: V
                        }), (0, n.jsxs)(I.Title, {
                            className: m.title,
                            children: [null != L ? (0, n.jsx)(_.default, {
                                guild: L,
                                className: m.guildBadge,
                                tooltipPosition: "left"
                            }) : null, l, s]
                        })]
                    }), E, null != D || F || (null == h ? void 0 : null === (t = h.guild) || void 0 === t ? void 0 : t.id) === C.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, n.jsx)(I.ActivityCount, {
                        className: m.activityCount,
                        online: h.approximate_presence_count,
                        total: h.approximate_member_count,
                        flat: R
                    }), M.length > 1 ? (0, n.jsx)(I.JoiningAs, {
                        user: U
                    }) : null]
                })
            }
        },
        238055: function(e, t, l) {
            "use strict";
            var n, s;
            l.r(t), l.d(t, {
                HubEmailConnectionSteps: function() {
                    return n
                },
                INVITE_ROUTING_HUB_GUILD_ID: function() {
                    return a
                }
            }), (s = n || (n = {})).STUDENT_PROMPT = "STUDENT_PROMPT", s.VERIFY_EMAIL = "VERIFY_EMAIL", s.VERIFY_PIN = "VERIFY_PIN", s.SELECT_SCHOOL = "SELECT_SCHOOL", s.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH", s.SUBMIT_SCHOOL = "SUBMIT_SCHOOL", s.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION", s.EMAIL_WAITLIST = "EMAIL_WAITLIST";
            let a = "884924873015689226"
        },
        694787: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
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
            var n = l("171718"),
                s = l("872717"),
                a = l("913144"),
                u = l("437822"),
                r = l("605250"),
                i = l("271938"),
                o = l("770032"),
                c = l("49111");
            let d = new r.default("MultiAccountActionCreators");

            function f() {
                let e = i.default.getId(),
                    t = o.default.getUsers();
                t.forEach(async t => {
                    let l, {
                            id: u
                        } = t,
                        r = n.default.getToken(u);
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
                        l = await s.default.get({
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
                        user: l.body
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
                let l = n.default.getToken(e);
                return null == l ? (d.log("Switching accounts failed because there was no token"), a.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: e
                }), Promise.resolve()) : u.default.switchAccountToken(l, t)
            }

            function _(e) {
                a.default.dispatch({
                    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
                    userId: e
                })
            }
        },
        927101: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useMultiAccountUsers: function() {
                    return i
                }
            });
            var n = l("884691"),
                s = l("446674"),
                a = l("913144"),
                u = l("694787"),
                r = l("770032");

            function i() {
                let e = (0, s.useStateFromStoresObject)([r.default], () => ({
                    isLoading: r.default.getIsValidatingUsers(),
                    multiAccountUsers: r.default.getUsers()
                }));
                return n.useEffect(() => {
                    a.default.wait(() => {
                        u.validateMultiAccountTokens()
                    })
                }, []), e
            }
        },
        165926: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                setNewUser: function() {
                    return s
                },
                setNewUserFlowCompleted: function() {
                    return a
                }
            });
            var n = l("913144");

            function s(e) {
                n.default.wait(() => n.default.dispatch({
                    type: "NUF_NEW_USER",
                    newUserType: e
                }))
            }

            function a() {
                n.default.wait(() => n.default.dispatch({
                    type: "NUF_COMPLETE"
                }))
            }
        },
        56235: function(e, t, l) {
            "use strict";
            var n, s;
            l.r(t), l.d(t, {
                NewUserTypes: function() {
                    return n
                }
            }), (s = n || (n = {}))[s.MARKETING_UNCLAIMED = 0] = "MARKETING_UNCLAIMED", s[s.INVITE_UNCLAIMED = 1] = "INVITE_UNCLAIMED", s[s.ORGANIC_REGISTERED = 2] = "ORGANIC_REGISTERED", s[s.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3] = "ORGANIC_REGISTERED_GUILD_TEMPLATE"
        },
        25033: function(e, t, l) {
            "use strict";
            let n;
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var s = l("446674"),
                a = l("913144"),
                u = l("988415");
            let r = (0, u.getDefaultCountryCode)();

            function i(e) {
                var t;
                let {
                    countryCode: l
                } = e;
                null != l && (r = null !== (t = (0, u.getCountryCodeByAlpha2)(l)) && void 0 !== t ? t : (0, u.getDefaultCountryCode)())
            }
            class o extends s.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (n = e.selectedCountryCode)
                }
                getUserAgnosticState() {
                    return {
                        selectedCountryCode: n
                    }
                }
                getCountryCode() {
                    return null != n ? n : r
                }
            }
            o.displayName = "PhoneStore", o.persistKey = "PhoneStore";
            var c = new o(a.default, {
                PHONE_SET_COUNTRY_CODE: function(e) {
                    let {
                        countryCode: t
                    } = e;
                    n = t
                },
                CONNECTION_OPEN: i,
                SET_LOCATION_METADATA: i
            })
        },
        189613: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            }), l("881410");
            var n, s = l("37983"),
                a = l("884691"),
                u = l("414456"),
                r = l.n(u),
                i = l("448105"),
                o = l.n(i),
                c = l("917351"),
                d = l.n(c),
                f = l("592861"),
                E = l("77078"),
                _ = l("988415"),
                I = l("145131"),
                h = l("782340"),
                T = l("803853"),
                N = l("212029");
            n = class extends a.PureComponent {
                renderItems() {
                    let {
                        query: e
                    } = this.state, t = f.default.flatMap((e, t) => {
                        let {
                            alpha2: l,
                            phoneCountryCodes: n,
                            name: a
                        } = e, u = (0, _.getI18NCountryName)(l);
                        return n.map(e => ({
                            key: "".concat(t, "-").concat(e),
                            name: a,
                            translatedName: u,
                            countryData: {
                                name: a,
                                alpha2: l,
                                code: e
                            },
                            children: (0, s.jsxs)(I.default, {
                                className: T.countryItem,
                                justify: I.default.Justify.CENTER,
                                align: I.default.Align.CENTER,
                                children: [(0, s.jsx)(I.default.Child, {
                                    className: T.countryName,
                                    children: u
                                }), (0, s.jsx)(I.default.Child, {
                                    className: T.countryCode,
                                    grow: 0,
                                    shrink: 0,
                                    children: e
                                })]
                            })
                        }))
                    }), l = d(t).filter(t => 0 === e.length || o(e.toLowerCase(), t.name.toLowerCase()) || o(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, a.createElement)(E.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })).value();
                    return 0 === l.length ? (0, s.jsx)(E.PopoutList.Empty, {
                        children: h.default.Messages.NONE
                    }) : (0, s.jsx)(E.ScrollerAuto, {
                        className: T.phoneFieldScroller,
                        children: l
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, s.jsxs)(E.PopoutList, {
                        className: r(T.phoneFieldPopout, N.elevationBorderLow, e),
                        children: [(0, s.jsx)(E.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: h.default.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, s.jsx)(E.PopoutList.Divider, {}), this.renderItems()]
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
                        var t, l;
                        null === (t = (l = this.props).onClick) || void 0 === t || t.call(l, e)
                    }, this.state = {
                        query: ""
                    }
                }
            }
        },
        232268: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("65597"),
                a = l("880731");

            function u(e) {
                let {
                    children: t,
                    confettiLocation: l
                } = e, u = (0, s.default)([a.default], () => a.default.isEnabled({
                    confettiLocation: l
                }));
                return u ? (0, n.jsx)(n.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("884691"),
                s = l("65597"),
                a = l("526887"),
                u = l("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = n.useContext(a.ConfettiCannonContext), t = (0, s.default)([u.default], () => u.default.getState()), l = n.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = n.useMemo(() => ({
                    fire: (n, s, a) => {
                        var u, r;
                        let i = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            o = l(i);
                        e(n, s, o, (null !== (u = null == a ? void 0 : a.count) && void 0 !== u ? u : i.confettiCount) * (null !== (r = null == a ? void 0 : a.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, l, t]);
                return r
            }
        },
        794538: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            }), l("222007"), l("424973");
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                u = l.n(a),
                r = l("145131"),
                i = l("616389");
            class o extends s.PureComponent {
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, n.jsx)("input", {
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
                            l = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
                        !t && !l && e.preventDefault();
                        let {
                            onKeyDown: n
                        } = this.props;
                        null == n || n(e)
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
                        codes: l
                    } = this.state, s = [];
                    for (let e = 0; e < l.length; e++) e === l.length / 2 && s.push((0, n.jsx)("div", {
                        className: i.spacer
                    }, "spacer")), s.push((0, n.jsx)(o, {
                        ref: t => this.setCodeBlockRef(e, t),
                        code: l[e],
                        autoFocus: 0 === e,
                        onChange: t => this.handleChange(e, t),
                        onKeyDown: t => this.handleKeyDown(e, t),
                        className: t
                    }, e));
                    return (0, n.jsx)(r.default, {
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
                    let l = this.getCodeOrFirstEmptyIndex();
                    if ("string" == typeof l) this.submit(l);
                    else {
                        let e = this._codeBlockRefs[l];
                        null == e || e.focus()
                    }
                }
                handleKeyDown(e, t) {
                    let {
                        codes: l
                    } = this.state;
                    if (8 === t.which && e > 0 && (null == l[e] || 0 === l[e].length)) {
                        let t = e - 1;
                        l[t] = "";
                        let n = this._codeBlockRefs[t];
                        null == n || n.focus()
                    }
                }
                getCodeOrFirstEmptyIndex() {
                    let {
                        codes: e
                    } = this.state, t = "";
                    for (let l = 0; l < e.length; l++) {
                        if (isNaN(parseInt(e[l]))) return l;
                        t += e[l]
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