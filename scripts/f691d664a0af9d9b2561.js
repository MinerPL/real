(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81264"], {
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return s
                }
            });
            var r = n("913144");

            function l(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("920040"),
                l = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("77078"),
                i = n("782340"),
                u = n("430230");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: d,
                        isLoading: c,
                        maxLength: h,
                        transitionState: f,
                        helpMessage: p,
                        retryPrompt: g,
                        retrySuccessMessage: m
                    } = this.props, {
                        code: C,
                        errorMessage: v,
                        retrySuccess: E
                    } = this.state, y = l.Children.count(a) > 0 ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, x = null != g ? (0, r.jsxs)(o.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(o.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, {
                                children: g
                            })
                        })]
                    }) : null, _ = E ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }) : null;
                    return (0, r.jsx)(o.ModalRoot, {
                        transitionState: f,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(o.ModalContent, {
                                children: [null != p ? (0, r.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: p
                                }) : null, y, _, (0, r.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != h ? h : 10,
                                        value: C,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : v
                                    }) : null, x]
                                })]
                            }), (0, r.jsxs)(o.ModalFooter, {
                                children: [(0, r.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === C.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, r.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: i.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : i.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : i.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        704426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallRightIcon: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M20.707 12.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 1 0-1.414 1.414L17.586 11H4a1 1 0 1 0 0 2h13.586l-3.293 3.293a1 1 0 0 0 1.414 1.414l5-5Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return s
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("77078"),
                a = n("845579"),
                s = n("662255"),
                o = n("306160");

            function i(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: i,
                    shiftId: u,
                    showIconFirst: d
                } = e, c = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !o.SUPPORTS_COPY) return null;
                let h = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(l.MenuItem, {
                    id: h,
                    label: n,
                    action: function(e) {
                        let n = null != u && e.shiftKey ? u : t;
                        (0, o.copy)(n), null == i || i()
                    },
                    icon: s.default,
                    showIconFirst: d
                }, h)
            }
        },
        893455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                s = n("592407"),
                o = n("479756"),
                i = n("507950"),
                u = n("957255"),
                d = n("538137"),
                c = n("49111"),
                h = n("782340");

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.GuildSettingsSections.ROLES,
                    f = (0, l.useStateFromStores)([u.default], () => u.default.canImpersonateRole(e, t));
                return f ? (0, r.jsx)(a.MenuItem, {
                    id: "view-as-role",
                    label: h.default.Messages.VIEW_AS_ROLE,
                    icon: d.default,
                    action: () => {
                        s.default.close(), (0, o.startImpersonating)(e.id, {
                            type: i.ImpersonateType.ROLES,
                            roles: {
                                [t.id]: t
                            },
                            returnToSection: n
                        })
                    }
                }, "view-as-role") : null
            }
        },
        178521: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("77078"),
                a = n("272030"),
                s = n("861370"),
                o = n("893455"),
                i = n("49111"),
                u = n("782340");

            function d(e) {
                let {
                    role: t,
                    guild: n,
                    onSelect: d
                } = e, c = [], h = (0, o.default)(n, t, i.GuildSettingsSections.INTEGRATIONS);
                null != h && c.push(h);
                let f = (0, s.default)({
                    id: t.id,
                    label: u.default.Messages.COPY_ID_ROLE
                });
                return (null != f && c.push(f), 0 === c.length) ? null : (0, r.jsx)(l.Menu, {
                    navId: "guild-integrations-permission-role-context",
                    "aria-label": u.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
                    onClose: a.closeContextMenu,
                    onSelect: d,
                    children: c
                })
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return v
                },
                updateImpersonating: function() {
                    return E
                },
                stopImpersonating: function() {
                    return y
                },
                updateImpersonatedChannels: function() {
                    return _
                },
                updateImpersonatedRoles: function() {
                    return T
                },
                updateImpersonatedData: function() {
                    return I
                }
            });
            var r = n("913144"),
                l = n("716241"),
                a = n("393414"),
                s = n("42203"),
                o = n("923959"),
                i = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                h = n("282109"),
                f = n("599110"),
                p = n("38654"),
                g = n("507950"),
                m = n("49111"),
                C = n("724210");

            function v(e, t) {
                f.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === g.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), x(e)
            }

            function E(e, t) {
                let n = p.default.getData(e);
                null != n && n.type === t.type && (f.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === g.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), x(e))
            }

            function y(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function x(e) {
                let t = c.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    r = null != t && (0, C.isStaticChannelRoute)(t);
                if (!r && !d.default.can(m.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(m.Routes.CHANNEL(e, t.id))
                }
            }

            function _(e, t, n) {
                let r = new Set(h.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), E(e, {
                    type: g.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function T(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = i.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let l = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            a = l.filter(e => !n.includes(e));
                        return a.length > 0 && _(e, a, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), E(e, {
                    type: g.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function I(e, t) {
                E(e, {
                    type: g.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        895393: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == r || r.removeAllRanges(), null == r || r.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
                let a = document.execCommand("copy");
                return t.removeChild(l), a
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
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
            var r = n("377849"),
                l = n.n(r),
                a = n("666038");
            class s extends a.default {
                static createFromServer(e) {
                    var t;
                    return new s({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: l(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = l(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = l(this.createdAt);
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
        246053: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Directions: function() {
                    return l
                },
                default: function() {
                    return c
                }
            });
            var r, l, a = n("920040");
            n("773670");
            var s = n("575482"),
                o = n.n(s),
                i = n("75196"),
                u = n("557765");
            (r = l || (l = {})).LEFT = "LEFT", r.RIGHT = "RIGHT", r.UP = "UP", r.DOWN = "DOWN", r.UP_LEFT = "UP_LEFT", r.DOWN_RIGHT = "DOWN_RIGHT";
            let d = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = "currentColor",
                    direction: s,
                    foreground: d,
                    className: c,
                    title: h,
                    ...f
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, i.default)(f),
                    width: t,
                    height: n,
                    className: o(c, function(e) {
                        switch (e) {
                            case l.LEFT:
                                return u.left;
                            case l.RIGHT:
                                return u.right;
                            case l.UP:
                                return null;
                            case l.DOWN:
                                return u.down;
                            case l.UP_LEFT:
                                return u.upLeft;
                            case l.DOWN_RIGHT:
                                return u.downRight;
                            default:
                                throw Error("Invalid Direction ".concat(e))
                        }
                    }(s)),
                    viewBox: "0 0 24 24",
                    children: [null != h ? (0, a.jsx)("title", {
                        children: h
                    }) : null, (0, a.jsx)("polygon", {
                        className: d,
                        fill: r,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                })
            };
            d.Directions = l;
            var c = d
        },
        538137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("704426"),
                s = n("246053"),
                o = (0, l.replaceIcon)(function(e) {
                    return (0, r.jsx)(s.default, {
                        ...e,
                        direction: s.default.Directions.RIGHT
                    })
                }, a.ArrowSmallRightIcon)
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("35647"),
                s = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return s
                },
                copy: function() {
                    return o
                }
            });
            var r = n("895393"),
                l = n("773336"),
                a = n("50885");
            let s = (() => {
                if (l.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!s && (l.isPlatformEmbedded ? (a.default.copy(e), !0) : r.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var r = n("427964"),
                l = n.n(r);
            let a = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, l;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("697218"),
                s = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, o = e.updateModalProps, l = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == r) {
                    null == i || i();
                    return
                }
                let d = r(p, c, s);

                function c() {
                    null == i || i()
                }

                function h(e) {
                    l(d), n(e)
                }

                function f(e) {
                    l(d), a(e)
                }

                function p(e) {
                    return o(d, p, c, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: h,
                        reject: f,
                        code: e,
                        mfaCodeHandler: g,
                        isModalOpen: !0
                    })
                }

                function g(e) {
                    let {
                        res: t
                    } = e;
                    o(d, p, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: l,
                    mfaCodeHandler: a = i,
                    isModalOpen: s = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, i;
                    if (l = e, i = s, l.body && 60008 === l.body.code || i && 429 === l.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...o
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: l = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(l) ? i : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return i
                }
            });
            var r = n("920040");
            n("773670");
            var l = n("551042"),
                a = n("920636");
            let s = (e, t, n) => function(l) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function o(e, t, n) {
                return (0, l.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, r) {
                return (0, l.updateModal)(e, s(t, n, r))
            }
        }
    }
]);