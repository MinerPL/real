            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return p
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return T
                },
                saveAccountRequest: function() {
                    return h
                },
                saveAccountChanges: function() {
                    return I
                },
                getHarvestStatus: function() {
                    return A
                },
                requestHarvest: function() {
                    return g
                },
                setPendingAvatar: function() {
                    return N
                },
                setPendingGlobalNameName: function() {
                    return C
                },
                setPendingAvatarDecoration: function() {
                    return m
                },
                setPendingProfileEffectId: function() {
                    return v
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return O
                },
                resetAllPending: function() {
                    return U
                },
                resetAndCloseUserProfileForm: function() {
                    return y
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                o = n("913144"),
                a = n("393414"),
                u = n("599110"),
                s = n("315102"),
                d = n("730622"),
                c = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function p() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function T(e, t) {
                let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    r = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => i.default.post({
                    url: r,
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
                    c.default.logoutInternal(), (0, a.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function h(e) {
                let t = await i.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, o.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return o.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function I(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: a,
                    avatar: c,
                    avatarDecoration: p,
                    newPassword: S,
                    globalName: T
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: l,
                        password: a,
                        avatar: c,
                        discriminator: n,
                        global_name: T,
                        new_password: S,
                        ...e
                    };
                    null === p && (o.avatar_decoration_id = null), null != p && (o.avatar_decoration_id = p.id, o.avatar_decoration_sku_id = p.skuId);
                    let u = r.default.get(f.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != u && (o.push_provider = s, o.push_token = u);
                    let d = r.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != d && (o.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = d), h(o)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => o.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return u.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function A() {
                return i.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function g() {
                return i.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function C(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function m(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function v(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function R() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function O() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function U() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function y() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }