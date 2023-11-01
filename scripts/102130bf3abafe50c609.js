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
            var r = n("37983"),
                l = n("884691"),
                a = n("414456"),
                s = n.n(a),
                o = n("77078"),
                i = n("782340"),
                u = n("347129");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: d,
                        isLoading: c,
                        maxLength: p,
                        transitionState: h,
                        helpMessage: f,
                        retryPrompt: m,
                        retrySuccessMessage: g
                    } = this.props, {
                        code: E,
                        errorMessage: y,
                        retrySuccess: _
                    } = this.state, C = l.Children.count(a) > 0 ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, x = null != m ? (0, r.jsxs)(o.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(o.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, {
                                children: m
                            })
                        })]
                    }) : null, v = _ ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: g
                        })
                    }) : null;
                    return (0, r.jsx)(o.ModalRoot, {
                        transitionState: h,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(o.ModalContent, {
                                children: [null != f ? (0, r.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: f
                                }) : null, C, v, (0, r.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: E,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : y
                                    }) : null, x]
                                })]
                            }), (0, r.jsxs)(o.ModalFooter, {
                                children: [(0, r.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === E.length,
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
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
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
                let p = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(l.MenuItem, {
                    id: p,
                    label: n,
                    action: function(e) {
                        let n = null != u && e.shiftKey ? u : t;
                        (0, o.copy)(n), null == i || i()
                    },
                    icon: s.default,
                    showIconFirst: d
                }, p)
            }
        },
        893455: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                s = n("592407"),
                o = n("479756"),
                i = n("507950"),
                u = n("957255"),
                d = n("538137"),
                c = n("49111"),
                p = n("782340");

            function h(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.GuildSettingsSections.ROLES,
                    h = (0, l.useStateFromStores)([u.default], () => u.default.canImpersonateRole(e, t));
                return h ? (0, r.jsx)(a.MenuItem, {
                    id: "view-as-role",
                    label: p.default.Messages.VIEW_AS_ROLE,
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
            var r = n("37983");
            n("884691");
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
                } = e, c = [], p = (0, o.default)(n, t, i.GuildSettingsSections.INTEGRATIONS);
                null != p && c.push(p);
                let h = (0, s.default)({
                    id: t.id,
                    label: u.default.Messages.COPY_ID_ROLE
                });
                return (null != h && c.push(h), 0 === c.length) ? null : (0, r.jsx)(l.Menu, {
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
                    return y
                },
                updateImpersonating: function() {
                    return _
                },
                stopImpersonating: function() {
                    return C
                },
                updateImpersonatedChannels: function() {
                    return v
                },
                updateImpersonatedRoles: function() {
                    return A
                },
                updateImpersonatedData: function() {
                    return S
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
                p = n("282109"),
                h = n("599110"),
                f = n("38654"),
                m = n("507950"),
                g = n("49111"),
                E = n("724210");

            function y(e, t) {
                h.default.track(g.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === m.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), x(e)
            }

            function _(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (h.default.track(g.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === m.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), x(e))
            }

            function C(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function x(e) {
                let t = c.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    r = null != t && (0, E.isStaticChannelRoute)(t);
                if (!r && !d.default.can(g.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(g.Routes.CHANNEL(e, t.id))
                }
            }

            function v(e, t, n) {
                let r = new Set(p.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), _(e, {
                    type: m.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function A(e, t) {
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
                        return a.length > 0 && v(e, a, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), _(e, {
                    type: m.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function S(e, t) {
                _(e, {
                    type: m.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("866227"),
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
            var r = n("281071"),
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
            var r = n("917351"),
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
                let d = r(f, c, s);

                function c() {
                    null == i || i()
                }

                function p(e) {
                    l(d), n(e)
                }

                function h(e) {
                    l(d), a(e)
                }

                function f(e) {
                    return o(d, f, c, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: p,
                        reject: h,
                        code: e,
                        mfaCodeHandler: m,
                        isModalOpen: !0
                    })
                }

                function m(e) {
                    let {
                        res: t
                    } = e;
                    o(d, f, c, {
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
            var r = n("37983");
            n("884691");
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