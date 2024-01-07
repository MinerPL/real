            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var r = n("872717"),
                l = n("95410"),
                i = n("913144"),
                o = n("211895"),
                s = n("26092"),
                u = n("599110"),
                a = n("315102"),
                d = n("730622"),
                c = n("49111"),
                h = n("191349"),
                f = n("782340"),
                _ = {
                    open() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, o.default)(t, e, n)
                    },
                    init: function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: t,
                            subsection: e,
                            ...n
                        })
                    },
                    close() {
                        let t = s.default.onClose;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != t && t()
                    },
                    setSection(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: t,
                            subsection: e,
                            ...n
                        })
                    },
                    clearSubsection(t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: t
                        })
                    },
                    clearScrollPosition(t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: t
                        })
                    },
                    updateAccount(t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: t
                        })
                    },
                    submitComplete() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(t, e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: o,
                            emailToken: s,
                            password: _,
                            avatar: p,
                            newPassword: E,
                            discriminator: I
                        } = t, {
                            close: S
                        } = e;
                        return (0, d.default)(t => {
                            let e = {
                                    username: n,
                                    email: o,
                                    email_token: s,
                                    password: _,
                                    avatar: p,
                                    new_password: E,
                                    ...t,
                                    discriminator: null != I && "" !== I ? I : void 0
                                },
                                i = l.default.get(c.DEVICE_TOKEN),
                                u = (0, h.getDevicePushProvider)();
                            null != u && null != i && (e.push_provider = u, e.push_token = i);
                            let a = l.default.get(c.DEVICE_VOIP_TOKEN);
                            return null != h.DEVICE_PUSH_VOIP_PROVIDER && null != a && (e.push_voip_provider = h.DEVICE_PUSH_VOIP_PROVIDER, e.push_voip_token = a), r.default.patch({
                                url: c.Endpoints.ME,
                                oldFormErrors: !0,
                                body: e
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => i.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(t => {
                            let e = t.body,
                                n = e.token;
                            return u.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, a.isAnimatedIconHash)(e.avatar)
                            }), delete e.token, i.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: e.id
                            }), i.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: e
                            }), null != E && i.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: e,
                                newPassword: E
                            }), null != _ && null != E && i.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: e.id
                            }), S ? this.close() : this.submitComplete(), t
                        }, t => (i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: t.body
                        }), t))
                    }
                }