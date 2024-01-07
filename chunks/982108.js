            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
                    return T
                },
                isViewChannelSidebar: function() {
                    return O
                },
                default: function() {
                    return L
                }
            });
            var i = n("394846"),
                a = n("446674"),
                l = n("913144"),
                s = n("582713"),
                r = n("659500"),
                u = n("42203"),
                o = n("957255"),
                d = n("744983"),
                c = n("18494"),
                _ = n("162771"),
                E = n("697218"),
                f = n("49111"),
                h = n("724210"),
                p = n("843455");
            let T = "message_requests",
                C = !1,
                m = !1,
                S = !0,
                I = !1,
                g = {},
                A = {};

            function N(e) {
                if (null == e) return null;
                if ((0, h.isStaticChannelRoute)(e)) {
                    let t = _.default.getGuildId();
                    if (null == t) return null;
                    e = (0, h.buildGuildStaticChannelId)(e, t)
                }
                return e
            }

            function O(e) {
                return [s.SidebarType.VIEW_CHANNEL, s.SidebarType.VIEW_THREAD, s.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
            }

            function R(e) {
                let t = !1;
                I && (I = !1, t = !0);
                let n = N(c.default.getChannelId());
                return null != n && n in g && (delete g[n], t = !0), t && e ? e : !e
            }

            function y() {
                let e = !1;
                for (let t in g) {
                    let n = g[t];
                    if (n.type === s.SidebarType.VIEW_THREAD || n.type === s.SidebarType.VIEW_CHANNEL) {
                        let i = u.default.getChannel(n.channelId);
                        (null == i || !o.default.can(p.Permissions.VIEW_CHANNEL, i)) && (delete g[t], e = !0)
                    }
                }
                return e
            }

            function v() {
                if (I === d.default.isActive()) return !1;
                I = d.default.isActive()
            }
            class M extends a.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n, i, a, l;
                        C = null !== (t = e.isMembersOpen) && void 0 !== t && t, m = null !== (n = e.isSummariesOpen) && void 0 !== n && n, S = null === (i = e.isProfileOpen) || void 0 === i || i, g = null !== (a = e.sidebars) && void 0 !== a ? a : {}, A = null !== (l = e.guildSidebars) && void 0 !== l ? l : {}
                    }
                    this.syncWith([d.default], v), this.syncWith([o.default], y)
                }
                getState() {
                    return {
                        isMembersOpen: C,
                        isSummariesOpen: m,
                        isProfileOpen: S,
                        sidebars: g,
                        guildSidebars: A
                    }
                }
                getSection(e, t) {
                    return I ? f.ChannelSections.SEARCH : null != (e = N(e)) && null != g[e] ? f.ChannelSections.SIDEBAR_CHAT : t && S ? f.ChannelSections.PROFILE : m ? f.ChannelSections.SUMMARIES : C ? f.ChannelSections.MEMBERS : f.ChannelSections.NONE
                }
                getSidebarState(e) {
                    return null == (e = N(e)) ? void 0 : g[e]
                }
                getGuildSidebarState(e) {
                    return null == e ? void 0 : A[e]
                }
                getCurrentSidebarChannelId(e) {
                    if (null == (e = N(e)) || I) return null;
                    let t = g[e];
                    return null == t ? null : t.type === s.SidebarType.VIEW_THREAD || t.type === s.SidebarType.VIEW_CHANNEL ? t.channelId : null
                }
                getCurrentSidebarMessageId(e) {
                    var t;
                    if (null == (e = N(e)) || I) return null;
                    let n = g[e];
                    return null == n ? null : n.type === s.SidebarType.VIEW_THREAD || n.type === s.SidebarType.VIEW_CHANNEL ? null === (t = n.details) || void 0 === t ? void 0 : t.initialMessageId : null
                }
            }
            M.displayName = "ChannelSectionStore", M.persistKey = "ChannelSectionStore2";
            var L = new M(l.default, {
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    m && (m = R(m)), C = R(C)
                },
                PROFILE_PANEL_TOGGLE_SECTION: function() {
                    !S && r.ComponentDispatch.dispatch(f.ComponentActions.SEARCH_RESULTS_CLOSE), S = R(S)
                },
                CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
                    C && (C = R(C)), m = R(m)
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    let {
                        sidebarType: t,
                        baseChannelId: n,
                        channelId: i,
                        details: a
                    } = e;
                    I = !1;
                    let l = N(n);
                    return null != l && (g[l] = {
                        type: t,
                        channelId: i,
                        details: a
                    }, !0)
                },
                SIDEBAR_VIEW_GUILD: function(e) {
                    let {
                        sidebarType: t,
                        guildId: n,
                        baseChannelId: i,
                        details: a
                    } = e;
                    I = !1;
                    let l = N(i);
                    return null != l && (A[n] = {
                        type: t,
                        baseChannelId: l,
                        guildId: n,
                        details: a
                    }, !0)
                },
                SIDEBAR_CREATE_THREAD: function(e) {
                    let {
                        parentChannelId: t,
                        parentMessageId: n,
                        location: i
                    } = e;
                    I = !1;
                    let a = N(t);
                    null != a && (g[a] = {
                        type: s.SidebarType.CREATE_THREAD,
                        parentChannelId: t,
                        parentMessageId: n,
                        location: i
                    })
                },
                SIDEBAR_CLOSE: function(e) {
                    let {
                        baseChannelId: t
                    } = e, n = N(t);
                    null != n && delete g[n]
                },
                SIDEBAR_CLOSE_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return null != A[t] && (delete A[t], !0)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.id in g) return delete g[t.id], !0;
                    let n = !1;
                    for (let e in g) {
                        let i = g[e];
                        null != i && i.type === s.SidebarType.VIEW_CHANNEL && i.channelId === t.id && (delete g[e], n = !0)
                    }
                    return n
                },
                CHANNEL_SELECT: function() {
                    i.isMobile && C && (C = !1, m = !1)
                },
                THREAD_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    if (n.ownerId === (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    let i = g[n.parent_id];
                    null != i && i.type === s.SidebarType.CREATE_THREAD && i.parentMessageId === n.id && (g[n.parent_id] = {
                        type: s.SidebarType.VIEW_THREAD,
                        channelId: n.id
                    })
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = g[t.parent_id];
                    if (null == n || n.type !== s.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
                    delete g[t.parent_id]
                }
            })