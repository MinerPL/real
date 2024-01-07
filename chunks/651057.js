            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var r = n("872717"),
                i = n("913144"),
                l = n("568734"),
                u = n("299285"),
                o = n("49111"),
                a = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: l,
                            teamId: u
                        } = e, a = await r.default.post({
                            url: o.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: l,
                                guild_id: n,
                                team_id: u
                            }
                        }), s = a.body;
                        return null != n && null != l && i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: s
                        }), s
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await r.default.get({
                            url: o.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), u = l.body;
                        return i.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: u
                        }), u
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, l = await r.default.post({
                            url: o.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), u = l.body;
                        return i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let r = u.default.getApplication(e),
                                    i = (0, l.hasFlag)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, o.ApplicationFlags.EMBEDDED),
                                    a = i && (null == r ? void 0 : null === (t = r.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != r && !a) && !u.default.isFetchingApplication(e) && !u.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            i.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await r.default.get({
                                    url: o.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw i.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            i.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return i.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), r.default.get({
                            url: o.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (i.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }