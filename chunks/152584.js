            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return T
                },
                disableAccount: function() {
                    return p
                },
                saveAccountRequest: function() {
                    return S
                },
                saveAccountChanges: function() {
                    return N
                },
                getHarvestStatus: function() {
                    return C
                },
                requestHarvest: function() {
                    return h
                },
                setPendingAvatar: function() {
                    return v
                },
                setPendingGlobalNameName: function() {
                    return A
                },
                setPendingAvatarDecoration: function() {
                    return R
                },
                setPendingProfileEffectId: function() {
                    return L
                },
                clearErrors: function() {
                    return g
                },
                resetPendingAccountChanges: function() {
                    return m
                },
                resetAllPending: function() {
                    return P
                },
                resetAndCloseUserProfileForm: function() {
                    return U
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var r = n("872717"),
                i = n("95410"),
                l = n("819855"),
                u = n("913144"),
                o = n("393414"),
                a = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function I() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function p(e, t) {
                let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    i = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => r.default.post({
                    url: i,
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
                    d.default.logoutInternal(), (0, o.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function S(e) {
                let t = await r.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, u.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && u.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function N(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: r,
                    emailToken: l,
                    password: o,
                    avatar: d,
                    avatarDecoration: I,
                    newPassword: T,
                    globalName: p
                } = e;
                return u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let u = {
                        username: t,
                        email: r,
                        email_token: l,
                        password: o,
                        avatar: d,
                        discriminator: n,
                        global_name: p,
                        new_password: T,
                        ...e
                    };
                    null === I && (u.avatar_decoration_id = null), null != I && (u.avatar_decoration_id = I.id, u.avatar_decoration_sku_id = I.skuId);
                    let a = i.default.get(f.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != a && (u.push_provider = s, u.push_token = a);
                    let c = i.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (u.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = c), S(u)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => u.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return a.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), u.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function C() {
                return r.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function h() {
                return r.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function v(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function A(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function R(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function L(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function g() {
                u.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function P() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function U() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }