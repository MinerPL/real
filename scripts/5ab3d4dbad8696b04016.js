(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["98784"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return r
                },
                unsubscribeMembers: function() {
                    return a
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return u
                }
            });
            var i = n("913144"),
                l = n("696605");

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function u(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: r,
                    rowHeight: a
                } = e;

                function u(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
                }
                let s = [];

                function d(e) {
                    let t = e + (l.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let E = u(.5 * r),
                    _ = u(i, -E),
                    c = u(i + r, E);
                for (_ > 0 && (_ = Math.max(d(0), _)), _ = Math.floor(_ / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; _ <= c;) _ = d(_);
                o(t, n, s)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return l
                },
                popLayer: function() {
                    return r
                },
                popAllLayers: function() {
                    return a
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function r() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        327037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchCurrentUser: function() {
                    return _
                },
                acceptAgreements: function() {
                    return c
                },
                setFlag: function() {
                    return T
                },
                getUser: function() {
                    return I
                },
                fetchProfile: function() {
                    return S
                },
                fetchMutualFriends: function() {
                    return f
                }
            });
            var i = n("161179"),
                l = n.n(i),
                r = n("307391"),
                a = n("990746"),
                o = n("913144"),
                u = n("766274"),
                s = n("697218"),
                d = n("49111");
            let E = new r.default("UserProfileModalActionCreators");

            function _() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        withAnalyticsToken: t = !1
                    } = e;
                return a.default.get({
                    url: d.Endpoints.ME,
                    query: {
                        with_analytics_token: t
                    },
                    oldFormErrors: !0
                }).then(e => (o.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }), new u.default(e.body)))
            }

            function c() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return a.default.patch({
                    url: d.Endpoints.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then(() => !0, () => !1)
            }

            function T(e, t) {
                let n = s.default.getCurrentUser();
                l(null != n, "setFlag: user cannot be undefined");
                let i = t ? n.flags | e : n.flags & ~e;
                return a.default.patch({
                    url: d.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: i
                    }
                })
            }

            function I(e) {
                let t = s.default.getUser(e);
                return null != t ? Promise.resolve(t) : a.default.get({
                    url: d.Endpoints.USER(e),
                    oldFormErrors: !0
                }).then(t => (o.default.dispatch({
                    type: "USER_UPDATE",
                    user: t.body
                }), s.default.getUser(e)))
            }
            async function S(e) {
                let {
                    friendToken: t,
                    withMutualGuilds: n,
                    withMutualFriendsCount: i,
                    guildId: l,
                    connectionsRoleId: r
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = arguments.length > 2 ? arguments[2] : void 0;
                o.default.dispatch({
                    type: "USER_PROFILE_FETCH_START",
                    userId: e
                });
                try {
                    let s = await a.default.get({
                        url: d.Endpoints.USER_PROFILE(e),
                        query: {
                            friend_token: t,
                            with_mutual_guilds: n,
                            with_mutual_friends_count: i,
                            guild_id: l,
                            connections_role_id: r
                        },
                        oldFormErrors: !0
                    });
                    return null == u || u(s.body, l), o.default.dispatch({
                        type: "USER_UPDATE",
                        user: s.body.user
                    }), o.default.dispatch({
                        type: "USER_PROFILE_FETCH_SUCCESS",
                        ...s.body
                    }), null != l && null != s.body.guild_member && o.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildId: l,
                        guildMember: s.body.guild_member
                    }), s.body
                } catch (t) {
                    throw null != t && (null == t ? void 0 : t.body) != null && E.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), o.default.dispatch({
                        type: "USER_PROFILE_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
            async function f(e) {
                o.default.dispatch({
                    type: "MUTUAL_FRIENDS_FETCH_START",
                    userId: e
                });
                try {
                    let t = await a.default.get({
                        url: d.Endpoints.USER_RELATIONSHIPS(e),
                        oldFormErrors: !0
                    });
                    o.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                        userId: e,
                        mutualFriends: t.body
                    })
                } catch (t) {
                    throw (null == t ? void 0 : t.body) != null && E.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), o.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return f
                },
                saveAccountRequest: function() {
                    return A
                },
                saveAccountChanges: function() {
                    return N
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return C
                },
                setPendingAvatar: function() {
                    return O
                },
                setPendingGlobalNameName: function() {
                    return R
                },
                setPendingAvatarDecoration: function() {
                    return m
                },
                setPendingProfileEffectID: function() {
                    return U
                },
                clearErrors: function() {
                    return L
                },
                resetPendingAccountChanges: function() {
                    return g
                },
                resetAllPending: function() {
                    return h
                },
                resetAndCloseUserProfileForm: function() {
                    return M
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("990746"),
                l = n("173333"),
                r = n("819855"),
                a = n("913144"),
                o = n("393414"),
                u = n("599110"),
                s = n("315102"),
                d = n("730622"),
                E = n("437822"),
                _ = n("49111"),
                c = n("191349"),
                T = n("782340");

            function I() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function f(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    l = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => i.default.post({
                    url: l,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    E.default.logoutInternal(), (0, o.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function A(e) {
                let t = await i.default.patch({
                        url: _.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, a.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && a.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return a.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function N(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: r,
                    password: o,
                    avatar: E,
                    avatarDecoration: I,
                    newPassword: S,
                    globalName: f
                } = e;
                return a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let a = {
                        username: t,
                        email: i,
                        email_token: r,
                        password: o,
                        avatar: E,
                        discriminator: n,
                        global_name: f,
                        new_password: S,
                        ...e
                    };
                    null === I && (a.avatar_decoration_id = null), null != I && (a.avatar_decoration_id = I.id, a.avatar_decoration_sku_id = I.skuId);
                    let u = l.default.get(_.DEVICE_TOKEN),
                        s = (0, c.getDevicePushProvider)();
                    null != s && null != u && (a.push_provider = s, a.push_token = u);
                    let d = l.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != d && (a.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = d), A(a)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => a.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return u.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function p() {
                return i.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return i.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function O(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? r.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function R(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function m(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function U(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function L() {
                a.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function h() {
                a.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function M() {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("990746"),
                l = n("173333"),
                r = n("913144"),
                a = n("211895"),
                o = n("26092"),
                u = n("599110"),
                s = n("315102"),
                d = n("730622"),
                E = n("49111"),
                _ = n("191349"),
                c = n("782340"),
                T = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, a.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = o.default.onClose;
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: a,
                            emailToken: o,
                            password: T,
                            avatar: I,
                            newPassword: S,
                            discriminator: f
                        } = e, {
                            close: A
                        } = t;
                        return (0, d.default)(e => {
                            let t = {
                                    username: n,
                                    email: a,
                                    email_token: o,
                                    password: T,
                                    avatar: I,
                                    new_password: S,
                                    ...e,
                                    discriminator: null != f && "" !== f ? f : void 0
                                },
                                r = l.default.get(E.DEVICE_TOKEN),
                                u = (0, _.getDevicePushProvider)();
                            null != u && null != r && (t.push_provider = u, t.push_token = r);
                            let s = l.default.get(E.DEVICE_VOIP_TOKEN);
                            return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
                                url: E.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: c.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => r.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, r.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), r.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != S && r.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: S
                            }), null != T && null != S && r.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), A ? this.close() : this.submitComplete(), e
                        }, e => (r.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        901582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("462567"),
                a = n("599110"),
                o = n("117362"),
                u = n("49111");
            class s extends l.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: l,
                        page: r,
                        object: o,
                        objectType: u,
                        children: s
                    } = this.props, d = this.mergeLocation(e.location, this.getLocation(r, l, o, u)), E = this.getContext(d, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, i.jsx)(a.AnalyticsContext.Provider, {
                        value: E,
                        children: s
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, i.jsx)(a.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, o.cachedFunction)((e, t, n, i) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != n && (l.object = n), null != i && (l.objectType = i), l
                    }), this.mergeLocation = (0, o.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, o.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, r.v4)())
                }
            }
            s.Pages = u.AnalyticsPages, s.Sections = u.AnalyticsSections, s.Objects = u.AnalyticsObjects, s.ObjectTypes = u.AnalyticsObjectTypes, s.defaultProps = {
                root: !1
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("575482"),
                a = n.n(r),
                o = n("77078"),
                u = n("782340"),
                s = n("430230");
            class d extends l.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: E,
                        maxLength: _,
                        transitionState: c,
                        helpMessage: T,
                        retryPrompt: I,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: f,
                        errorMessage: A,
                        retrySuccess: N
                    } = this.state, p = l.Children.count(r) > 0 ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, C = null != I ? (0, i.jsxs)(o.Text, {
                        className: a(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                            className: a(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(o.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, O = N ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, i.jsx)(o.ModalRoot, {
                        transitionState: c,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(o.ModalContent, {
                                children: [null != T ? (0, i.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: T
                                }) : null, p, O, (0, i.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: f,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != d ? d : A
                                    }) : null, C]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                children: [(0, i.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: E || 0 === f.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, i.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            var E = d
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("901582");

            function r(e, t) {
                return function(n) {
                    return (0, i.jsx)(l.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("685665");

            function r(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: r
                    } = (0, l.default)(t);
                    return (0, i.jsx)(r, {
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var i = n("773670"),
                l = n("599110");
            let r = () => i.useContext(l.AnalyticsContext)
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("920040");
            var i = n("773670"),
                l = n("427964"),
                r = n.n(l);
            n("708001");
            var a = n("666020");

            function o(e) {
                i.useEffect(() => (r.forEach(e, (e, t) => (0, a.subscribeMembers)(t, e)), () => {
                    r.forEach(e, (e, t) => (0, a.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), (i = l || (l = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, l, r = l
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("605250"),
                l = n("802493");
            let r = new i.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = l.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return r.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (r.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (r.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    l.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    l.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    l.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let r = l.default.stickersTransaction(i);
                    for (let i of (r.putAll(e, t), n)) r.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("845579"),
                a = n("662255"),
                o = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: s,
                    showIconFirst: d
                } = e, E = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !E || !o.SUPPORTS_COPY) return null;
                let _ = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(l.MenuItem, {
                    id: _,
                    label: n,
                    action: function(e) {
                        let n = null != s && e.shiftKey ? s : t;
                        (0, o.copy)(n), null == u || u()
                    },
                    icon: a.default,
                    showIconFirst: d
                }, _)
            }
        },
        700179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canToggleCommunicationDisableOnUser: function() {
                    return s
                },
                default: function() {
                    return d
                }
            });
            var i = n("498225"),
                l = n("305961"),
                r = n("957255"),
                a = n("697218"),
                o = n("991170"),
                u = n("49111");

            function s(e, t) {
                let [n, i, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, l.default, r.default], d = i.getGuild(e), E = n.getUser(t);
                if (null == d || null == E || E.isNonUserBot()) return !1;
                let _ = d.isOwner(E) || o.default.can({
                    permission: u.Permissions.ADMINISTRATOR,
                    user: E,
                    context: d
                });
                return !_ && s.canManageUser(u.Permissions.MODERATE_MEMBERS, E, d)
            }

            function d(e, t) {
                return (0, i.useStateFromStores)([a.default, l.default, r.default], () => s(e, t, [a.default, l.default, r.default]), [e, t])
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return o
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return E
                }
            });
            var i = n("498225"),
                l = n("26989"),
                r = n("697218"),
                a = n("509");

            function o(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function u(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function s(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, a.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, i.useStateFromStores)([l.default], () => u(e, t, l.default), [t, e]);
                return s(n)
            }

            function E(e, t) {
                let n = u(e, t, l.default);
                return s(n)
            }
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return E
                },
                canSeeGuildHome: function() {
                    return _
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return c
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return T
                },
                GuildHomeBadgeExperiment: function() {
                    return I
                },
                GuildHomeFeedbackExperiment: function() {
                    return S
                },
                GuildHomeDeprecationExperiment: function() {
                    return f
                }
            });
            var i = n("498225"),
                l = n("203288"),
                r = n("862205"),
                a = n("21121"),
                o = n("923959"),
                u = n("305961"),
                s = n("49111");

            function d(e, t, n) {
                let i = t.getChannels(e)[o.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: i
                    } = t;
                    return !n.isChannelGated(e, i.id)
                });
                return i.length > 5
            }

            function E(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, i.useStateFromStores)([o.default, l.default], () => null != e && d(e.id, o.default, l.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function _(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, a.isInMainTabsExperiment)()) return !1;
                let t = u.default.getGuild(e);
                return !!(null != t && d(e, o.default, l.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let c = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                T = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                I = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, r.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, r.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let S = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                f = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return E
                },
                setPendingAvatar: function() {
                    return _
                },
                setPendingBanner: function() {
                    return c
                },
                setPendingBio: function() {
                    return T
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return f
                },
                resetPendingMemberChanges: function() {
                    return A
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return O
                }
            });
            var i = n("990746"),
                l = n("913144"),
                r = n("54239"),
                a = n("49111");
            async function o(e, t) {
                let {
                    nick: n,
                    avatar: r
                } = t;
                if (null == e) throw Error("Need guildId");
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: a.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: r
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function u(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, r.popLayer)()
            }

            function E() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function c(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function T(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function A() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function O(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, l, r, a, o, u, s, d, E;
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var _ = n("498225"),
                c = n("913144"),
                T = n("49111");
            let I = T.FormStates.CLOSED,
                S = {},
                f = !1;

            function A() {
                I = T.FormStates.CLOSED, S = {}, s = null, d = void 0, E = []
            }

            function N() {
                p(), C(), S = {}, I = T.FormStates.OPEN
            }

            function p() {
                i = void 0, o = void 0
            }

            function C() {
                l = void 0, r = void 0, a = void 0, u = void 0
            }
            class O extends _.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== a || void 0 !== o || void 0 !== u
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return r
                }
                getPendingNickname() {
                    return o
                }
                getPendingPronouns() {
                    return a
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: l,
                        pendingBio: r,
                        pendingPronouns: a,
                        pendingNickname: o,
                        pendingThemeColors: u
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return E
                }
                getIsDisableSubmit() {
                    return f
                }
            }
            O.displayName = "GuildIdentitySettingsStore";
            var R = new O(c.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, I = T.FormStates.OPEN, S = {}, d = e.source, E = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: A,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), A()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = T.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== T.FormStates.SUBMITTING) return !1;
                    I = T.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = T.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    f = t
                }
            })
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return T
                },
                useTrackMemberFilterRolesUsed: function() {
                    return I
                },
                MemberSafetyFlagType: function() {
                    return r
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return S
                },
                ModerationActionType: function() {
                    return a
                },
                useTrackModerationAction: function() {
                    return f
                }
            });
            var i, l, r, a, o = n("773670"),
                u = n("812204"),
                s = n("716241"),
                d = n("271938"),
                E = n("599110"),
                _ = n("49111");

            function c(e, t, n) {
                var i;
                let l = {
                    ...t,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                E.default.track(e, l)
            }

            function T(e) {
                let t = o.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        c(_.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function I(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        c(_.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled";

            function S(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        c(_.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function f(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: l
                } = t, r = o.useCallback(t => {
                    let r = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != l ? l : void 0
                    };
                    c(_.AnalyticEvents.MODERATION_ACTION, r)
                }, [e, n, i, l]);
                return r
            }(l = a || (a = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return A
                },
                updateImpersonating: function() {
                    return N
                },
                stopImpersonating: function() {
                    return p
                },
                updateImpersonatedChannels: function() {
                    return O
                },
                updateImpersonatedRoles: function() {
                    return R
                },
                updateImpersonatedData: function() {
                    return m
                }
            });
            var i = n("913144"),
                l = n("716241"),
                r = n("393414"),
                a = n("42203"),
                o = n("923959"),
                u = n("26989"),
                s = n("305961"),
                d = n("957255"),
                E = n("18494"),
                _ = n("282109"),
                c = n("599110"),
                T = n("38654"),
                I = n("507950"),
                S = n("49111"),
                f = n("724210");

            function A(e, t) {
                c.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function N(e, t) {
                let n = T.default.getData(e);
                null != n && n.type === t.type && (c.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, l.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function p(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = E.default.getChannelId(e),
                    n = a.default.getChannel(t),
                    i = null != t && (0, f.isStaticChannelRoute)(t);
                if (!i && !d.default.can(S.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, r.transitionTo)(S.Routes.CHANNEL(e, t.id))
                }
            }

            function O(e, t, n) {
                let i = new Set(_.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), N(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function R(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let l = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            r = l.filter(e => !n.includes(e));
                        return r.length > 0 && O(e, r, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), N(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function m(e, t) {
                N(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return E
                },
                useInventoryGuildSettingsExperiment: function() {
                    return c
                }
            });
            var i = n("744196"),
                l = n("862205"),
                r = n("697218"),
                a = n("719923"),
                o = n("782340");
            let u = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r
                    } = n, o = a.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: o ? i : r
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : s({
                        user: t,
                        config: u.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                E = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), a = u.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: E
                    } = s({
                        user: l,
                        config: a
                    }), _ = o && E && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                _ = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                c = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = _.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return u
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return d
                },
                setNewPendingAvatarDecoration: function() {
                    return E
                },
                setNewPendingProfileEffectID: function() {
                    return _
                },
                getProfilePreviewField: function() {
                    return c
                },
                showRemoveAvatar: function() {
                    return T
                },
                showRemoveBanner: function() {
                    return I
                }
            });
            var i = n("773670"),
                l = n("152584"),
                r = n("234251"),
                a = n("783142"),
                o = n("26989");

            function u(e) {
                return i.useMemo(() => {
                    let t = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let r = t[l],
                            a = null === (i = r[e]) || void 0 === i ? void 0 : i.avatar;
                        null != a && (null == n[a] && (n[a] = []), n[a].push(l))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, a.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, l.setPendingAvatar)(e === t ? void 0 : e)
            }

            function E(e, t) {
                if ((0, r.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, l.setPendingAvatarDecoration)(void 0);
                    return
                }(0, l.setPendingAvatarDecoration)(e)
            }

            function _(e, t) {
                if (e === t) {
                    (0, l.setPendingProfileEffectID)(void 0);
                    return
                }(0, l.setPendingProfileEffectID)(e)
            }

            function c(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("773670"),
                l = n("79112"),
                r = n("685665"),
                a = n("929423");
            n("424562");
            var o = n("49111"),
                u = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: d,
                    openWithoutBackstack: E = !1
                } = e, {
                    analyticsLocations: _
                } = (0, r.default)(), c = (0, i.useCallback)(() => {
                    null != t && (0, a.initGuildIdentitySettings)(t, null != d ? d : _), l.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? u.ProfileCustomizationSubsection.GUILD : u.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: d,
                        openWithoutBackstack: E
                    })
                }, [t, n, s, d, E, _]);
                return c
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return a
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var i, l, r = n("773336");
            let a = null;

            function o() {
                return (0, r.isAndroid)(), null
            }(i = l || (l = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var r = l
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return l
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return E
                }
            });
            var i, l, r = n("991170"),
                a = n("719923"),
                o = n("4233"),
                u = n("24373"),
                s = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = a.default.canUseStickersEverywhere(t);
                    if ((0, u.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = o.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || r.default.can({
                        permission: s.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM : l.NONSENDABLE : l.SENDABLE_WITH_BOOSTED_GUILD;
                    return l.NONSENDABLE
                },
                E = (e, t, n) => d(e, t, n) === l.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("427964"),
                l = n.n(i),
                r = n("498225"),
                a = n("913144"),
                o = n("80507"),
                u = n("374363"),
                s = n("364685"),
                d = n("49111"),
                E = n("397336");
            let _ = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let c = new o.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => s.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                T = () => {
                    s.default.isLoaded && c.compute()
                },
                I = () => {
                    T()
                };

            function S() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                c.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), _.pendingUsages)
            }
            class f extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (_ = e), this.syncWith([s.default], I), this.syncWith([u.default], S)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return c
                }
            }
            f.displayName = "StickersPersistedStore", f.persistKey = "StickersPersistedStoreV2";
            var A = new f(a.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        c.track(e), _.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), T()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== E.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    _.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            });
            var i, l, r = n("379279"),
                a = n("498225"),
                o = n("913144"),
                u = n("802493"),
                s = n("595525"),
                d = n("212084"),
                E = n("867805"),
                _ = n("267567"),
                c = n("813006"),
                T = n("778689"),
                I = n("305961"),
                S = n("161585"),
                f = n("24373"),
                A = n("49111");
            (i = l || (l = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let N = 2,
                p = new Map,
                C = new Map,
                O = null,
                R = [],
                m = null,
                U = !1,
                L = new Map,
                g = (e, t) => {
                    L = new Map(L.set(e, t))
                },
                h = 1e3 * A.Durations.HOUR,
                M = () => {
                    if (0 !== N) return;
                    let e = u.default.database();
                    if (null == e) return;
                    N = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => r.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (T.default.isMember(e) && !L.has(e)) {
                                for (let t of n) D(t, !0, I.default.getGuild(e));
                                g(e, n)
                            }
                    }
                },
                D = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    C.set(e.id, e), t && P(e, n)
                },
                P = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == O) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: S.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, f.isStandardSticker)(e)) {
                        let t = R.find(t => t.id === e.pack_id),
                            l = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: S.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && l.push({
                            type: S.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), O.set(e.id, l)
                    } else if ((0, f.isGuildSticker)(e) && null != n) {
                        let l = E.default.getByName(n),
                            r = {
                                type: S.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [i, r];
                        if (null != t) {
                            let e = (t instanceof(0, c.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: S.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == l) {
                            O.set(e.id, a);
                            return
                        }
                        a.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: l.surrogates
                        }), l.forEachDiversity(e => a.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), O.set(e.id, a)
                    }
                },
                G = (e, t, n) => {
                    p.set(e.id, e);
                    let i = [...R];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), R = i
                    }(t || n) && e.stickers.forEach(e => D(e))
                },
                v = () => {
                    L.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => P(e, n))
                    }), R.forEach(e => {
                        e.stickers.forEach(e => P(e))
                    })
                };

            function y(e) {
                null != e.stickers && (e.stickers.forEach(t => D(t, !0, e)), g(e.id, e.stickers))
            }
            class b extends a.default.Store {
                initialize() {
                    this.waitFor(u.default, T.default, I.default)
                }
                get isLoaded() {
                    return 0 !== N
                }
                get stickerMetadata() {
                    return M(), null == O && (O = new Map, v()), O
                }
                get hasLoadedStickerPacks() {
                    return null != m && m + h > Date.now()
                }
                get isFetchingStickerPacks() {
                    return U
                }
                getStickerById(e) {
                    return !C.has(e) && M(), C.get(e)
                }
                getStickerPack(e) {
                    return p.get(e)
                }
                getPremiumPacks() {
                    return R
                }
                isPremiumPack(e) {
                    return R.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return L
                }
                getAllStickersIterator() {
                    return M(), C.values()
                }
                getAllGuildStickers() {
                    return M(), L
                }
                getStickersByGuildId(e) {
                    return M(), L.get(e)
                }
            }
            b.displayName = "StickersStore";
            var k = new b(o.default, {
                BACKGROUND_SYNC: () => {
                    O = null, C = new Map, L = new Map, N = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    O = null, C = new Map, L = new Map, t.forEach(y), N = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !_.default.isLurking(t.id) && (y(t), 1 === N && null == t.stickers && null != t.stickerUpdates && (N = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = L.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != O && O.delete(e.id), C.delete(e.id)
                    }), L.delete(n.id), L = new Map(L)
                },
                LOGOUT: () => {
                    N = 0, R = [], C.clear(), p.clear(), O = null, L.clear(), L = new Map(L), U = !1, m = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    U = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => G(e, !0)), m = Date.now(), U = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    G(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => D(e)), g(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: l
                    } = e, r = null !== (t = L.get(i)) && void 0 !== t ? t : [];
                    g(i, [...null !== (n = r.filter(e => e.id !== l.id)) && void 0 !== n ? n : [], l]), D(l)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    D(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, l = e => {
                        let t;
                        let n = C.get(e.id);
                        return null != n && (0, f.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, r = null !== (t = L.get(n)) && void 0 !== t ? t : [], a = r.filter(e => null == i.find(t => t.id === e.id));
                    a.forEach(e => {
                        C.delete(e.id), null != O && O.delete(e.id)
                    });
                    let o = i.map(e => l(e));
                    o.forEach(e => D(e)), g(n, o)
                }
            })
        },
        467940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("498225"),
                a = n("77078"),
                o = n("272030"),
                u = n("838446"),
                s = n("158534"),
                d = n("997289"),
                E = n("812204"),
                _ = n("685665"),
                c = n("861370"),
                T = n("230947"),
                I = n("130037"),
                S = n("26989"),
                f = n("800762"),
                A = n("300925"),
                N = n("489836"),
                p = n("421602"),
                C = n("459870"),
                O = n("325882"),
                R = n("625187"),
                m = n("806179"),
                U = n("97508"),
                L = n("49111"),
                g = n("782340"),
                h = (0, s.default)((0, u.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        guildId: u,
                        channelId: s,
                        context: L,
                        onSelect: h,
                        moderationAlertId: M,
                        analyticsLocation: D,
                        analyticsLocations: P,
                        onCloseContextMenu: G
                    } = e, {
                        analyticsLocations: v
                    } = (0, _.default)(E.default.CONTEXT_MENU), y = (0, d.useAnalyticsContext)(), b = null !== (t = null == P ? void 0 : P[0]) && void 0 !== t ? t : v[0], k = (0, I.useTrackModerationAction)(u, {
                        location: b,
                        targetUserId: n.id
                    }), B = (0, r.useStateFromStores)([f.default], () => {
                        var e;
                        return null !== (e = f.default.getUserVoiceChannelId(u, n.id)) && void 0 !== e ? e : void 0
                    }, [u, n.id]), F = l.useCallback(() => {
                        k(I.ModerationActionType.COPY_ID)
                    }, [k]), w = (0, r.useStateFromStores)([S.default], () => S.default.isMember(u, n.id), [u, n.id]), H = (0, m.default)(n.id, u), V = (0, p.default)(n.id, L), x = (0, T.default)({
                        guildId: u,
                        userId: n.id,
                        analyticsLocation: null != D ? D : y.location,
                        analyticsLocations: [b],
                        context: L
                    }), Y = (0, N.default)(n, b), K = (0, A.default)(n, u, null != s ? s : B, b), W = (0, O.default)(s, M), j = (0, R.default)(n, u), q = (0, U.default)(n.id, u, !1, b), X = (0, c.default)({
                        id: n.id,
                        label: g.default.Messages.COPY_ID_USER,
                        onSuccess: F
                    }), J = (0, C.default)(n, u), Q = !!(null == n ? void 0 : n.isNonUserBot());
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: () => {
                            (0, o.closeContextMenu)(), null == G || G()
                        },
                        "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: h,
                        children: [!Q && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [H, V]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [x, Y]
                            }), w && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(a.MenuGroup, {
                                    children: K
                                }), (0, i.jsxs)(a.MenuGroup, {
                                    children: [q, J]
                                })]
                            }), null != M ? W : null, null != j ? (0, i.jsx)(a.MenuGroup, {
                                children: j
                            }) : null]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: X
                        })]
                    })
                }, {
                    object: L.AnalyticsObjects.CONTEXT_MENU
                }), [E.default.CONTEXT_MENU, E.default.GUILD_MODERATION_USER_MENU])
        },
        489836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("77078"),
                a = n("736964"),
                o = n("27618"),
                u = n("697218"),
                s = n("49111"),
                d = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: n
                    } = e,
                    E = (0, l.useStateFromStores)([u.default], () => {
                        var e;
                        return (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n
                    }, [n]),
                    _ = (0, l.useStateFromStores)([o.default], () => o.default.isBlocked(n), [n]);
                if (E) return null;

                function c() {
                    a.default.addRelationship({
                        userId: n,
                        context: {
                            location: t
                        },
                        type: s.RelationshipTypes.BLOCKED
                    })
                }
                return (0, i.jsx)(r.MenuItem, {
                    id: "block",
                    label: _ ? d.default.Messages.UNBLOCK : d.default.Messages.BLOCK,
                    action: () => _ ? a.default.unblockUser(n, {
                        location: t
                    }) : (0, r.openModal)(t => (0, i.jsx)(r.ConfirmModal, {
                        header: d.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                            name: e.username
                        }),
                        confirmText: d.default.Messages.BLOCK,
                        cancelText: d.default.Messages.CANCEL,
                        onConfirm: c,
                        ...t,
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: d.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                name: e.username
                            })
                        })
                    }))
                })
            }
        },
        325882: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("77078"),
                a = n("228944"),
                o = n("201131"),
                u = n("702873"),
                s = n("42203"),
                d = n("377253"),
                E = n("957255"),
                _ = n("49111"),
                c = n("782340");

            function T(e, t) {
                let n = (0, l.useStateFromStores)([E.default], () => null != e && E.default.canWithPartialContext(_.Permissions.MANAGE_MESSAGES, {
                        channelId: e
                    }), [e]),
                    T = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
                    I = (0, l.useStateFromStores)([d.default], () => null != e && null != t ? d.default.getMessage(e, t) : null),
                    S = (0, o.useAutomodAlertActions)(null != I ? I : null);
                if (null == T || null == I) return null;
                let f = null != S && S.actions.hasOwnProperty(a.AutomodAlertActionType.SET_COMPLETED) ? a.AutomodAlertActionType.UNSET_COMPLETED : a.AutomodAlertActionType.SET_COMPLETED,
                    A = f === a.AutomodAlertActionType.SET_COMPLETED ? c.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : c.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                return n && null != t ? (0, i.jsx)(r.MenuItem, {
                    id: "mark-automod-alert-completed",
                    label: A,
                    action: () => {
                        (0, u.executeAlertAction)(t, T, f)
                    }
                }, "mark-automod-alert-completed") : null
            }
        },
        625187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("77078"),
                a = n("305961"),
                o = n("697218"),
                u = n("782340");

            function s(e, t) {
                let s = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    d = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(t));
                return null == d || null == s || e.id === d.ownerId || e.bot || !d.isOwnerWithRequiredMfaLevel(s) ? null : (0, i.jsx)(r.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: u.default.Messages.TRANSFER_OWNERSHIP,
                    action: () => (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("878551").then(n.bind(n, "878551"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guild: d,
                            fromUser: s,
                            toUser: e
                        })
                    })
                })
            }
        },
        806179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("77078"),
                a = n("244201"),
                o = n("401642"),
                u = n("599110"),
                s = n("49111"),
                d = n("782340");

            function E(e, t, n) {
                let E = l.useContext(u.AnalyticsContext),
                    _ = (0, a.useWindowDispatch)();
                return (0, i.jsx)(r.MenuItem, {
                    id: "user-profile",
                    label: d.default.Messages.PROFILE,
                    action: () => {
                        (0, o.openUserProfileModal)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != n ? n : void 0,
                            analyticsLocation: E.location
                        }), _.dispatch(s.ComponentActions.POPOUT_CLOSE)
                    }
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return c
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return A
                },
                setPendingAccentColor: function() {
                    return N
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return C
                },
                setTryItOutAvatarDecoration: function() {
                    return O
                },
                setTryItOutBanner: function() {
                    return R
                },
                setTryItOutThemeColors: function() {
                    return m
                }
            });
            var i = n("990746"),
                l = n("913144"),
                r = n("448993"),
                a = n("884351"),
                o = n("845579"),
                u = n("697218"),
                s = n("599110"),
                d = n("49111"),
                E = n("646718");

            function _(e) {
                s.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: E.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function c(e, t) {
                var n, s;
                let E = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == E) return;
                let _ = o.UseLegacyChatInput.getSetting();
                null != e.bio && _ && (e.bio = a.default.parse(void 0, e.bio).content);
                try {
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: E
                    });
                    let n = await i.default.patch({
                        url: null != t ? d.Endpoints.GUILD_PROFILE(t, d.ME) : d.Endpoints.USER_PROFILE(d.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: E,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new r.APIError(n);
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new r.APIError(t);
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function T() {
                l.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function A(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), _(E.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function O(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), _(E.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), _(E.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), _(E.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return u
                },
                closeUserProfileModal: function() {
                    return s
                }
            });
            var i = n("913144"),
                l = n("327037"),
                r = n("697218"),
                a = n("506885"),
                o = n("49111");

            function u(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: u = o.ME,
                    channelId: s,
                    friendToken: d,
                    autoFocusNote: E,
                    analyticsLocation: _
                } = e, c = r.default.getUser(t), T = u !== o.ME ? u : void 0;
                if (null == c) return (0, l.fetchProfile)(t, {
                    friendToken: d,
                    guildId: T
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: u,
                        channelId: s,
                        friendToken: d,
                        autoFocusNote: E,
                        analyticsLocation: _
                    })
                });
                (0, a.default)(t, c.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: d,
                    guildId: T
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: u,
                    channelId: s,
                    friendToken: d,
                    autoFocusNote: E,
                    analyticsLocation: _
                })
            }

            function s() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                l = n("54239"),
                r = n("49111");

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, l.pushLayer)(r.Layers.USER_SETTINGS)
            }
        },
        781782: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodActionType: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.BLOCK_MESSAGE = 1] = "BLOCK_MESSAGE", l[l.FLAG_TO_CHANNEL = 2] = "FLAG_TO_CHANNEL", l[l.USER_COMMUNICATION_DISABLED = 3] = "USER_COMMUNICATION_DISABLED", l[l.QUARANTINE_USER = 4] = "QUARANTINE_USER"
        },
        336388: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodBlockProfileUpdateMessageEmbedKeys: function() {
                    return i
                }
            }), (l = i || (i = {})).NICKNAME_UPDATE = "nickname_update", l.NICKNAME_RESET = "nickname_reset"
        },
        742689: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodEventType: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.MESSAGE_SEND = 1] = "MESSAGE_SEND", l[l.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE"
        },
        413273: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodMessageEmbedKeys: function() {
                    return i
                }
            }), (l = i || (i = {})).RULE_NAME = "rule_name", l.CHANNEL_ID = "channel_id", l.DECISION_ID = "decision_id", l.KEYWORD = "keyword", l.KEYWORD_MATCHED_CONTENT = "keyword_matched_content", l.FLAGGED_MESSAGE_ID = "flagged_message_id", l.TIMEOUT_DURATION = "timeout_duration", l.QUARANTINE_USER = "quarantine_user", l.QUARANTINE_USER_ACTION = "quarantine_user_action", l.DECISION_REASON = "decision_reason", l.ALERT_ACTIONS_EXECUTION = "alert_actions_execution", l.QUARANTINE_EVENT = "quarantine_event", l.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type", l.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"
        },
        320480: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodNotificationEmbedKeys: function() {
                    return i
                }
            }), (l = i || (i = {})).JOIN_ATTEMPTS = "join_attempts", l.RAID_DATETIME = "raid_datetime", l.DMS_SENT = "dms_sent", l.RAID_TYPE = "raid_type", l.RESOLVED_REASON = "resolved_reason"
        },
        323205: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodQuarantineEventMessageEmbedKeys: function() {
                    return i
                }
            }), (l = i || (i = {})).MESSAGE_SEND = "message_send", l.GUILD_JOIN = "guild_join", l.USERNAME_UPDATE = "username_update"
        },
        647767: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodQuarantineUserActionMessageEmbedKeys: function() {
                    return i
                }
            }), (l = i || (i = {})).BLOCK_PROFILE_UPDATE = "block_profile_update", l.QUARANTINE_USER = "quarantine_user", l.BLOCK_GUEST_JOIN = "block_guest_join"
        },
        513586: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodQuarantineUserMessageEmbedKeys: function() {
                    return i
                }
            }), (l = i || (i = {})).BIO = "bio", l.USERNAME = "username", l.NICKNAME = "nickname", l.GLOBAL_NAME = "display_name"
        },
        405938: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AutomodTriggerType: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.KEYWORD = 1] = "KEYWORD", l[l.SPAM_LINK = 2] = "SPAM_LINK", l[l.ML_SPAM = 3] = "ML_SPAM", l[l.DEFAULT_KEYWORD_LIST = 4] = "DEFAULT_KEYWORD_LIST", l[l.MENTION_SPAM = 5] = "MENTION_SPAM", l[l.USER_PROFILE = 6] = "USER_PROFILE", l[l.SERVER_POLICY = 7] = "SERVER_POLICY"
        },
        895393: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    i = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == i || i.removeAllRanges(), null == i || i.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
                let r = document.execCommand("copy");
                return t.removeChild(l), r
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("377849"),
                l = n.n(i),
                r = n("666038");
            class a extends r.default {
                static createFromServer(e) {
                    var t;
                    return new a({
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
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("427964"),
                l = n.n(i),
                r = n("498225"),
                a = n("913144"),
                o = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                d = null,
                E = null,
                _ = {},
                c = {},
                T = {},
                I = null,
                S = null,
                f = !1,
                A = !1,
                N = null,
                p = null,
                C = null,
                O = [],
                R = null,
                m = null;

            function U(e) {
                var t, n, i, l, r, a;
                let d = o.default.getCurrentUser();
                if (null == d) return L();
                E = null !== (t = e.section) && void 0 !== t ? t : E, R = null !== (n = e.section) && void 0 !== n ? n : E, null != e.subsection && null != E && (_[E] = e.subsection), null != e.scrollPosition && null != E && (c[E] = e.scrollPosition), A = !!e.openWithoutBackstack, s = u.FormStates.OPEN, T = {}, S = {
                    ...I = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: d.id,
                            username: d.username,
                            discriminator: d.discriminator,
                            email: d.email,
                            avatar: d.avatar,
                            password: "",
                            newPassword: null,
                            claimed: d.isClaimed()
                        }
                    }
                }, p = null !== (i = e.onClose) && void 0 !== i ? i : null, C = null !== (l = e.analyticsLocation) && void 0 !== l ? l : null, O = null !== (r = e.analyticsLocations) && void 0 !== r ? r : [], m = null !== (a = e.impressionSource) && void 0 !== a ? a : null
            }

            function L() {
                s = u.FormStates.CLOSED, f = !1, I = null, R = null, S = null, d = null, E = null, _ = {}, c = {}, p = null, C = null, O = [], m = null
            }

            function g() {
                s = u.FormStates.OPEN, T = {}
            }
            class h extends r.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != S && null != I && (!!this.isOpen() || N === u.DrawerTabTypes.USER_SETTINGS) && !l.isEqual(S, I)
                }
                isOpen() {
                    return f
                }
                getPreviousSection() {
                    return d
                }
                getSection() {
                    return E
                }
                getSubsection() {
                    return null != E ? _[E] : null
                }
                getScrollPosition() {
                    return null != E ? c[E] : null
                }
                shouldOpenWithoutBackstack() {
                    return A
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: E,
                        subsection: null != E ? _[E] : null,
                        scrollPosition: null != E ? c[E] : null,
                        settings: S,
                        errors: T,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: C,
                        analyticsLocations: O,
                        initialSection: R,
                        impressionSource: m
                    }
                }
                get onClose() {
                    return p
                }
            }
            h.displayName = "UserSettingsModalStore";
            var M = new h(a.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    f = !0, U(e)
                },
                USER_SETTINGS_MODAL_INIT: U,
                USER_SETTINGS_MODAL_CLOSE: L,
                LOGOUT: L,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== u.FormStates.SUBMITTING) return !1;
                    s = u.FormStates.OPEN, E = u.UserSettingsSections.ACCOUNT, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    d = E, E = e.section, C = null, O = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (_[E] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != E && delete _[E]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != E && delete c[E]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == S && (S = {});
                    let n = S[u.UserSettingsSections.ACCOUNT];
                    S[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: g,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    g(), null != e && (S = {
                        ...I = {
                            [u.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return N = e.tab, null == E && N === u.DrawerTabTypes.USER_SETTINGS && U({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("35647"),
                a = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, r.IdIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return o
                }
            });
            var i = n("895393"),
                l = n("773336"),
                r = n("50885");
            let a = (() => {
                if (l.isPlatformEmbedded) return null != r.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!a && (l.isPlatformEmbedded ? (r.default.copy(e), !0) : i.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var i = n("427964"),
                l = n.n(i);
            let r = e => "function" == typeof e ? e() : e;
            l.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("697218"),
                a = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, o = e.updateModalProps, l = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: a = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == i) {
                    null == u || u();
                    return
                }
                let d = i(T, E, a);

                function E() {
                    null == u || u()
                }

                function _(e) {
                    l(d), n(e)
                }

                function c(e) {
                    l(d), r(e)
                }

                function T(e) {
                    return o(d, T, E, {
                        ...a,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: _,
                        reject: c,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    o(d, T, E, {
                        ...a,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: l,
                    mfaCodeHandler: r = u,
                    isModalOpen: a = !1,
                    ...o
                } = e;
                return t(null != l ? {
                    code: l
                } : {}).then(n, e => {
                    var l, u;
                    if (l = e, u = a, l.body && 60008 === l.body.code || u && 429 === l.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...o
                    });
                    i(e)
                })
            }

            function d(e, t) {
                var n, i;
                let {
                    checkEnabled: l = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, a.resolveThunk)(l) ? u : s)({
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
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("551042"),
                r = n("920636");
            let a = (e, t, n) => function(l) {
                return (0, i.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...l
                })
            };

            function o(e, t, n) {
                return (0, l.openModal)(a(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, i) {
                return (0, l.updateModal)(e, a(t, n, i))
            }
        }
    }
]);