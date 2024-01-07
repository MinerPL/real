            "use strict";
            n.r(e), n.d(e, {
                startEmbeddedActivity: function() {
                    return v
                },
                launchEmbeddedActivity: function() {
                    return L
                },
                stopEmbeddedActivity: function() {
                    return O
                },
                disconnectEmbeddedActivity: function() {
                    return F
                },
                fetchDeveloperApplications: function() {
                    return M
                },
                uploadImageAttachment: function() {
                    return P
                },
                fetchShelf: function() {
                    return U
                },
                sendEmbeddedActivityInvite: function() {
                    return b
                },
                sendEmbeddedActivityInviteUser: function() {
                    return G
                },
                dismissNewActivityIndicator: function() {
                    return w
                },
                validateTestMode: function() {
                    return V
                },
                updateActivityPanelMode: function() {
                    return Y
                },
                updateFocusedActivityLayout: function() {
                    return H
                }
            }), n("222007");
            var a = n("759843"),
                i = n("872717"),
                l = n("913144"),
                r = n("450911"),
                u = n("255397"),
                d = n("970728"),
                o = n("819689"),
                c = n("599417"),
                s = n("299285"),
                E = n("191145"),
                p = n("752598"),
                A = n("653047"),
                f = n("271938"),
                I = n("42203"),
                _ = n("18494"),
                T = n("697218"),
                C = n("449008"),
                y = n("840707"),
                h = n("427953"),
                N = n("191225"),
                D = n("458184"),
                S = n("420444"),
                m = n("49111"),
                g = n("91366");

            function v(t, e, n) {
                let a = N.default.getSelfEmbeddedActivityForChannel(t);
                null != a && O({
                    channelId: t,
                    applicationId: a.application_id
                }), l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_OPEN",
                    channelId: t,
                    embeddedActivity: e,
                    analyticsLocations: n
                });
                let {
                    application_id: i
                } = e, r = (0, S.default)(t);
                r ? (u.default.selectParticipant(t, i), u.default.updateLayout(t, m.ChannelLayouts.NO_CHAT)) : (0, D.default)(t)
            }
            async function L(t) {
                var e, n;
                let i = I.default.getChannel(t),
                    r = null !== (e = null == i ? void 0 : i.getGuildId()) && void 0 !== e ? e : void 0;
                if (null == r && !(null !== (n = null == i ? void 0 : i.isPrivate()) && void 0 !== n && n)) return;
                let u = N.default.getSelfEmbeddedActivityForChannel(t);
                if (null === u) return;
                let d = f.default.getSessionId();
                try {
                    l.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                            embeddedActivity: u
                        }),
                        function(t, e) {
                            let n = I.default.getChannel(t),
                                a = N.default.getEmbeddedActivitiesForChannel(t).some(t => t.application_id === e);
                            if (a) return !1;
                            let i = (0, h.isActivitiesInTextEnabled)(n, "EmbeddedActivitiesActionCreators#isActivityInTextStart");
                            return !!((null == n ? void 0 : n.type) === m.ChannelTypes.GUILD_TEXT && i || null != n && n.isPrivate() && i && null == _.default.getVoiceChannelId()) || !1
                        }(t, u.application_id) ? await (0, p.executePrimaryEntryPointInteraction)({
                            applicationId: u.application_id,
                            channelId: t,
                            guildId: r
                        }) : await y.default.post({
                            url: m.Endpoints.ACTIVITY_CHANNEL_LAUNCH(t, u.application_id),
                            body: {
                                session_id: d,
                                guild_id: null != r ? r : void 0
                            },
                            trackedActionData: {
                                event: a.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                                properties: {
                                    guild_id: r,
                                    channel_id: t,
                                    application_id: u.application_id,
                                    session_id: d
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        }), l.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS"
                        })
                } catch (e) {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                        guildId: r,
                        applicationId: u.application_id,
                        error: new c.default(e)
                    }), O({
                        channelId: t,
                        applicationId: u.application_id,
                        showFeedback: !1
                    })
                }
            }

            function O(t) {
                var e;
                let {
                    channelId: n,
                    applicationId: a,
                    showFeedback: i = !0
                } = t;
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_CLOSE",
                    channelId: n,
                    applicationId: a,
                    showFeedback: i
                });
                let r = E.default.getSelectedParticipantId(n),
                    d = null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.id,
                    o = N.default.getEmbeddedActivitiesForChannel(n).find(t => t.application_id === a);
                null != o && null != d && "" !== d && r === a && u.default.selectParticipant(n, null)
            }

            function F(t, e) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISCONNECT",
                    channelId: t,
                    applicationId: e
                })
            }
            async function M() {
                try {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                    });
                    let t = await i.default.get({
                            url: m.Endpoints.APPLICATIONS,
                            query: {
                                with_team_applications: !0
                            },
                            oldFormErrors: !0
                        }),
                        e = t.body.map(t => A.default.createFromServer(t));
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
                        items: e
                    })
                } catch (t) {
                    l.default.dispatch({
                        type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
                    })
                }
            }
            async function P(t, e, n) {
                try {
                    l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                    });
                    let a = await i.default.post({
                        url: m.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(t),
                        query: {
                            channel_id: e
                        },
                        attachments: [{
                            name: "file",
                            file: n
                        }]
                    });
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                        attachment: a.body.attachment
                    }), a.body.attachment
                } catch (t) {
                    return l.default.dispatch({
                        type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                    }), new c.default(t)
                }
            }
            let R = (t, e, n) => {
                let {
                    guildId: a
                } = n;
                (a === t || null == a && null == t) && e()
            };
            async function U(t) {
                var e, n, i;
                let {
                    guildId: r,
                    force: u = !1
                } = t, d = N.default.getShelfActivities(r), o = d.map(t => s.default.getApplication(t.application_id)).filter(C.isNotNullish);
                if (!u && !N.default.shouldFetchShelf(r)) {
                    if (null === (e = N.default.getShelfFetchStatus(r)) || void 0 === e ? void 0 : e.isFetching) {
                        let t, e;
                        let n = new Promise(e => {
                                t = R.bind(null, r, e), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t)
                            }),
                            a = new Promise(t => {
                                e = R.bind(null, r, t), l.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e)
                            });
                        await Promise.race([n, a]), null != t && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", t), t = null), null != e && (l.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", e), e = null)
                    }
                    return {
                        activityConfigs: d,
                        applications: o
                    }
                }
                try {
                    l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                        guildId: r
                    });
                    let t = void 0 !== r && "" !== r,
                        e = t ? {
                            guild_id: r
                        } : void 0,
                        u = await y.default.get({
                            url: m.Endpoints.ACTIVITY_SHELF,
                            query: e,
                            trackedActionData: {
                                event: a.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                properties: {
                                    guild_id: r
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        }),
                        d = null !== (n = u.body.activities) && void 0 !== n ? n : [],
                        o = null !== (i = u.body.applications) && void 0 !== i ? i : [];
                    return l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                        guildId: r,
                        activities: d,
                        applications: o
                    }), o.length > 0 && l.default.dispatch({
                        type: "APPLICATIONS_FETCH_SUCCESS",
                        applications: o
                    }), {
                        activityConfigs: d,
                        applications: o.map(t => A.default.createFromServer(t))
                    }
                } catch (t) {
                    return l.default.dispatch({
                        type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                        guildId: r
                    }), {
                        activityConfigs: d,
                        applications: o
                    }
                }
            }
            async function b(t) {
                let {
                    activityChannelId: e,
                    invitedChannelId: n,
                    applicationId: a,
                    location: i
                } = t, l = await d.default.createInvite(e, {
                    target_type: g.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: a
                }, i);
                null != I.default.getChannel(n) && o.default.sendInvite(n, l.code, i, null)
            }
            async function G(t) {
                let {
                    channelId: e,
                    applicationId: n,
                    userId: a,
                    location: i
                } = t, l = await d.default.createInvite(e, {
                    target_type: g.InviteTargetTypes.EMBEDDED_APPLICATION,
                    target_application_id: n
                }, i);
                r.default.ensurePrivateChannel(a).then(t => {
                    null != I.default.getChannel(t) && o.default.sendInvite(t, l.code, i, null)
                })
            }

            function w() {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
                })
            }
            async function V(t) {
                let e = m.Endpoints.ACTIVITY_TEST_MODE(t);
                try {
                    return await i.default.get({
                        url: e,
                        oldFormErrors: !0
                    }), !0
                } catch (t) {
                    return !1
                }
            }

            function Y(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
                    activityPanelMode: t
                })
            }

            function H(t) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
                    focusedActivityLayout: t
                })
            }