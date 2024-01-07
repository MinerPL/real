            "use strict";
            n.r(t), n.d(t, {
                useContextMenuModerateRoles: function() {
                    return E
                },
                openMemberProfile: function() {
                    return _
                },
                useContextMenuModerateUser: function() {
                    return p
                },
                useHighestRole: function() {
                    return h
                },
                SearchState: function() {
                    return l
                },
                getSearchState: function() {
                    return S
                }
            });
            var i, l, r = n("884691"),
                s = n("65597"),
                a = n("685665"),
                u = n("401642"),
                o = n("305961"),
                d = n("697218"),
                c = n("441823"),
                f = n("49111");

            function E(e, t) {
                let {
                    analyticsLocations: n
                } = (0, a.default)();
                return r.useCallback(i => {
                    if (null == e) return;
                    let l = d.default.getUser(e.userId);
                    null != l && (i.stopPropagation(), (0, c.openModerateRoleContextMenu)(i, {
                        user: l,
                        guildId: e.guildId,
                        analyticsLocations: n,
                        onCloseContextMenu: t
                    }))
                }, [e, n, t])
            }
            let _ = e => {
                let {
                    guildId: t,
                    userId: n
                } = e;
                (0, u.openUserProfileModal)({
                    userId: n,
                    guildId: t,
                    analyticsLocation: {
                        section: f.AnalyticsSections.MEMBER_SAFETY_PAGE,
                        object: f.AnalyticsObjects.ACTIONED_BY_USER
                    }
                })
            };

            function p(e, t) {
                let {
                    analyticsLocations: n
                } = (0, a.default)();
                return r.useCallback(i => {
                    if (null == e) return;
                    let l = d.default.getUser(e.userId);
                    null != l && (i.stopPropagation(), (0, c.openModerateUserContextMenu)(i, {
                        user: l,
                        guildId: e.guildId,
                        analyticsLocations: n,
                        onCloseContextMenu: t
                    }))
                }, [e, t, n])
            }

            function h(e) {
                return (0, s.default)([o.default], () => {
                    var t;
                    if (null == e) return null;
                    let n = o.default.getGuild(e.guildId);
                    return null == n || null == e.highestRoleId ? null : null !== (t = n.roles[e.highestRoleId]) && void 0 !== t ? t : null
                }, [e])
            }

            function S(e, t, n) {
                return t ? 0 : e ? 1 : n <= 0 ? 2 : 3
            }(i = l || (l = {}))[i.LOADING = 0] = "LOADING", i[i.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", i[i.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", i[i.SUCCESS_FULL = 3] = "SUCCESS_FULL"