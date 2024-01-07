            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var i, a, l = n("872717"),
                s = n("819855"),
                r = n("913144"),
                u = n("774146"),
                o = n("132774"),
                d = n("258158"),
                c = n("823348"),
                _ = n("697218"),
                E = n("284609"),
                f = n("158998"),
                h = n("404118"),
                p = n("272030"),
                T = n("49111"),
                C = n("782340");

            function m(e) {
                (0, p.closeContextMenu)(), h.default.show(e)
            }

            function S(e, t, n) {
                let {
                    status: i,
                    body: a
                } = e, l = a && a.code;
                switch (i) {
                    case 429:
                        0 === t && m({
                            title: C.default.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                            body: C.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                            confirmText: C.default.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                        });
                        break;
                    case 403:
                        if (l === T.AbortCodes.EMAIL_VERIFICATION_REQUIRED) {
                            m({
                                title: C.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                                body: C.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                                confirmText: C.default.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                                onConfirm: () => {
                                    u.openClaimAccountModal()
                                }
                            });
                            break
                        }
                    default:
                        if (l === T.AbortCodes.USER_QUARANTINED)(0, p.closeContextMenu)(), (0, d.default)();
                        else if ((0, c.isLimitedAccessErrorCode)(i, l)) break;
                        else if (0 === t) {
                            let e = null != n ? (0, E.humanizeAbortCode)(l || 0, n) : C.default.Messages.POMELO_ADD_FRIEND_ERROR;
                            m({
                                title: C.default.Messages.FRIEND_REQUEST_FAILED_HEADER,
                                body: e,
                                confirmText: C.default.Messages.OKAY
                            })
                        }
                }
                throw e
            }(a = i || (i = {}))[a.SHOW_ALWAYS = 0] = "SHOW_ALWAYS", a[a.SHOW_ONLY_IF_ACTION_NEEDED = 1] = "SHOW_ONLY_IF_ACTION_NEEDED";
            let I = {
                sendRequest(e) {
                    let {
                        discordTag: t,
                        context: n,
                        captchaPayload: i,
                        errorUxConfig: a = 0
                    } = e, [s, r] = t.split("#");
                    return l.default.post({
                        url: T.Endpoints.USER_RELATIONSHIPS(),
                        body: {
                            username: s,
                            discriminator: parseInt(r),
                            ...i
                        },
                        context: n,
                        oldFormErrors: !0
                    }).catch(e => {
                        S(e, a, t)
                    })
                },
                addRelationship(e, t) {
                    let {
                        userId: n,
                        context: i,
                        type: a,
                        friendToken: s,
                        fromFriendSuggestion: r,
                        captchaPayload: u
                    } = e, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, d = _.default.getUser(n);
                    return l.default.put({
                        url: T.Endpoints.USER_RELATIONSHIP(n),
                        body: {
                            type: a,
                            friend_token: s,
                            from_friend_suggestion: r,
                            ...u
                        },
                        context: i,
                        oldFormErrors: !0
                    }).then(() => {
                        null == t || t()
                    }).catch(e => {
                        S(e, o, f.default.getUserTag(d))
                    })
                },
                acceptFriendRequest: e => I.addRelationship(e, function() {
                    s.AccessibilityAnnouncer.announce(C.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
                }),
                cancelFriendRequest: (e, t) => I.removeRelationship(e, t, function() {
                    s.AccessibilityAnnouncer.announce(C.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
                }),
                removeFriend(e, t) {
                    I.removeRelationship(e, t, function() {
                        s.AccessibilityAnnouncer.announce(C.default.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
                    })
                },
                unblockUser(e, t) {
                    I.removeRelationship(e, t, function() {
                        s.AccessibilityAnnouncer.announce(C.default.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
                    })
                },
                removeRelationship: (e, t, n) => l.default.delete({
                    url: T.Endpoints.USER_RELATIONSHIP(e),
                    context: t,
                    oldFormErrors: !0
                }).then(() => {
                    null == n || n()
                }).catch(() => {
                    s.AccessibilityAnnouncer.announce(C.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                }),
                updateRelationship: (e, t) => l.default.patch({
                    url: T.Endpoints.USER_RELATIONSHIP(e),
                    body: {
                        nickname: t
                    }
                }),
                fetchRelationships() {
                    l.default.get({
                        url: T.Endpoints.USER_RELATIONSHIPS(),
                        oldFormErrors: !0
                    }).then(e => r.default.dispatch({
                        type: "LOAD_RELATIONSHIPS_SUCCESS",
                        relationships: e.body
                    }), () => r.default.dispatch({
                        type: "LOAD_RELATIONSHIPS_FAILURE"
                    }))
                },
                confirmClearPendingRelationships(e) {
                    (0, o.default)(e)
                },
                clearPendingRelationships: () => l.default.delete({
                    url: T.Endpoints.USER_RELATIONSHIPS(),
                    query: {
                        relationship_type: T.RelationshipTypes.PENDING_INCOMING
                    }
                }).then(() => {
                    r.default.dispatch({
                        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
                    })
                }).catch(() => {
                    s.AccessibilityAnnouncer.announce(C.default.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                })
            };
            var g = I