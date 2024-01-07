            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("759843"),
                a = n("382825"),
                l = n("872717"),
                s = n("913144"),
                r = n("535013"),
                u = n("605250"),
                o = n("599110"),
                d = n("840707"),
                c = n("49111");
            let _ = new u.default("ConnectedAccounts");

            function E(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return l.default.post({
                    url: c.Endpoints.CONNECTIONS_CALLBACK(e),
                    body: {
                        ...t,
                        insecure: n,
                        friend_sync: c.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                    },
                    oldFormErrors: !0
                })
            }
            var f = {
                fetch: () => l.default.get({
                    url: c.Endpoints.CONNECTIONS,
                    oldFormErrors: !0
                }).then(e => s.default.dispatch({
                    type: "USER_CONNECTIONS_UPDATE",
                    local: !0,
                    accounts: e.body
                }), () => s.default.dispatch({
                    type: "USER_CONNECTIONS_UPDATE",
                    local: !0,
                    accounts: []
                })),
                authorize(e) {
                    let t, {
                        location: n,
                        twoWayLinkType: i,
                        userCode: s
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return o.default.track(c.AnalyticEvents.CONNECTED_ACCOUNT_INITIATED, {
                        platform_type: e,
                        location: n
                    }), t = i === a.TwoWayLinkType.DEVICE_CODE && null != s ? c.Endpoints.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, s) : null != i ? c.Endpoints.CONNECTIONS_AUTHORIZE_LINK(e, i) : c.Endpoints.CONNECTIONS_AUTHORIZE(e), l.default.get({
                        url: t,
                        oldFormErrors: !0
                    })
                },
                callback: E,
                connect(e, t, n, a, l) {
                    var s;
                    return d.default.put({
                        url: c.Endpoints.CONNECTION(e, t),
                        body: {
                            name: n,
                            friend_sync: null !== (s = null == l ? void 0 : l.friend_sync) && void 0 !== s ? s : c.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                        },
                        context: {
                            location: a
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                            properties: {
                                name: n,
                                friend_sync: c.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                            }
                        }
                    })
                },
                disconnect: (e, t) => l.default.delete({
                    url: c.Endpoints.CONNECTION(e, t),
                    oldFormErrors: !0
                }),
                refresh: (e, t) => l.default.post({
                    url: c.Endpoints.CONNECTION_REFRESH(e, t),
                    oldFormErrors: !0
                }),
                submitPinCode: (e, t) => l.default.get({
                    url: c.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return o.default.track(c.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        previous_step: "PIN code entry",
                        current_step: "PIN success",
                        session_id: n.state,
                        platform_type: t
                    }), E(t, {
                        ...n,
                        from_continuation: !0
                    }, !0)
                }),
                setVisibility(e, t, n) {
                    return this.update(e, t, {
                        visibility: 1 === n
                    })
                },
                setMetadataVisibility(e, t, n) {
                    return this.update(e, t, {
                        metadata_visibility: 1 === n
                    })
                },
                setFriendSync(e, t, n) {
                    return this.update(e, t, {
                        friend_sync: n
                    })
                },
                setShowActivity(e, t, n) {
                    return this.update(e, t, {
                        show_activity: n
                    })
                },
                update: (e, t, n) => d.default.patch({
                    url: c.Endpoints.CONNECTION(e, t),
                    body: n,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                        properties: {
                            ...n
                        }
                    }
                }),
                joinServer(e, t) {
                    s.default.dispatch({
                        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                        integrationId: e,
                        joining: !0
                    }), l.default.post({
                        url: c.Endpoints.INTEGRATION_JOIN(e),
                        oldFormErrors: !0
                    }, n => {
                        s.default.dispatch({
                            type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                            integrationId: e,
                            joining: !1
                        }), !n.ok && (s.default.dispatch({
                            type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR",
                            integrationId: e,
                            error: n.hasErr ? void 0 : n.body.message
                        }), null == t || t())
                    })
                },
                async refreshAccessToken(e, t) {
                    try {
                        let {
                            body: {
                                access_token: n
                            }
                        } = await l.default.get({
                            url: c.Endpoints.CONNECTION_ACCESS_TOKEN(e, t),
                            oldFormErrors: !0
                        });
                        return s.default.dispatch({
                            type: "USER_CONNECTION_UPDATE",
                            platformType: e,
                            id: t,
                            accessToken: n
                        }), n
                    } catch (n) {
                        throw n.body.code === c.AbortCodes.CONNECTION_REVOKED && s.default.dispatch({
                            type: "USER_CONNECTION_UPDATE",
                            platformType: e,
                            id: t,
                            revoked: !0
                        }), n
                    }
                },
                linkDispatchAuthCallback: (e, t) => l.default.post({
                    url: c.Endpoints.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
                    body: {
                        ...t
                    },
                    oldFormErrors: !0
                }),
                async completeTwoWayLink(e, t, n, i, a) {
                    if (null == t) {
                        _.error("Two-way link: missing authorize location");
                        return
                    }
                    let {
                        code: l,
                        error: s,
                        errorDescription: u
                    } = (0, r.getCallbackParamsFromURL)(t);
                    if (null != s) {
                        _.error("Two-way link: missing authorize code", {
                            error: s,
                            errorDescription: u
                        });
                        return
                    }
                    return await E(e, {
                        code: n,
                        state: i,
                        two_way_link_code: l,
                        token_redirect_uri: a
                    })
                }
            }