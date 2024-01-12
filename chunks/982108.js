            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
                    return v
                },
                isViewChannelSidebar: function() {
                    return A
                },
                default: function() {
                    return P
                }
            });
            var s = n("394846"),
                i = n("446674"),
                r = n("913144"),
                a = n("582713"),
                o = n("659500"),
                d = n("42203"),
                u = n("957255"),
                l = n("744983"),
                f = n("18494"),
                _ = n("162771"),
                c = n("697218"),
                g = n("49111"),
                m = n("724210"),
                h = n("843455");
            let v = "message_requests",
                E = !1,
                p = !1,
                y = !0,
                T = !1,
                C = {},
                S = {};

            function I(e) {
                if (null == e) return null;
                if ((0, m.isStaticChannelRoute)(e)) {
                    let t = _.default.getGuildId();
                    if (null == t) return null;
                    e = (0, m.buildGuildStaticChannelId)(e, t)
                }
                return e
            }

            function A(e) {
                return [a.SidebarType.VIEW_CHANNEL, a.SidebarType.VIEW_THREAD, a.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
            }

            function D(e) {
                let t = !1;
                T && (T = !1, t = !0);
                let n = I(f.default.getChannelId());
                return null != n && n in C && (delete C[n], t = !0), t && e ? e : !e
            }

            function N() {
                let e = !1;
                for (let t in C) {
                    let n = C[t];
                    if (n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL) {
                        let s = d.default.getChannel(n.channelId);
                        (null == s || !u.default.can(h.Permissions.VIEW_CHANNEL, s)) && (delete C[t], e = !0)
                    }
                }
                return e
            }

            function O() {
                if (T === l.default.isActive()) return !1;
                T = l.default.isActive()
            }
            class b extends i.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n, s, i, r;
                        E = null !== (t = e.isMembersOpen) && void 0 !== t && t, p = null !== (n = e.isSummariesOpen) && void 0 !== n && n, y = null === (s = e.isProfileOpen) || void 0 === s || s, C = null !== (i = e.sidebars) && void 0 !== i ? i : {}, S = null !== (r = e.guildSidebars) && void 0 !== r ? r : {}
                    }
                    this.syncWith([l.default], O), this.syncWith([u.default], N)
                }
                getState() {
                    return {
                        isMembersOpen: E,
                        isSummariesOpen: p,
                        isProfileOpen: y,
                        sidebars: C,
                        guildSidebars: S
                    }
                }
                getSection(e, t) {
                    return T ? g.ChannelSections.SEARCH : null != (e = I(e)) && null != C[e] ? g.ChannelSections.SIDEBAR_CHAT : t && y ? g.ChannelSections.PROFILE : p ? g.ChannelSections.SUMMARIES : E ? g.ChannelSections.MEMBERS : g.ChannelSections.NONE
                }
                getSidebarState(e) {
                    return null == (e = I(e)) ? void 0 : C[e]
                }
                getGuildSidebarState(e) {
                    return null == e ? void 0 : S[e]
                }
                getCurrentSidebarChannelId(e) {
                    if (null == (e = I(e)) || T) return null;
                    let t = C[e];
                    return null == t ? null : t.type === a.SidebarType.VIEW_THREAD || t.type === a.SidebarType.VIEW_CHANNEL ? t.channelId : null
                }
                getCurrentSidebarMessageId(e) {
                    var t;
                    if (null == (e = I(e)) || T) return null;
                    let n = C[e];
                    return null == n ? null : n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL ? null === (t = n.details) || void 0 === t ? void 0 : t.initialMessageId : null
                }
            }
            b.displayName = "ChannelSectionStore", b.persistKey = "ChannelSectionStore2";
            var P = new b(r.default, {
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    p && (p = D(p)), E = D(E)
                },
                PROFILE_PANEL_TOGGLE_SECTION: function() {
                    !y && o.ComponentDispatch.dispatch(g.ComponentActions.SEARCH_RESULTS_CLOSE), y = D(y)
                },
                CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
                    E && (E = D(E)), p = D(p)
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    let {
                        sidebarType: t,
                        baseChannelId: n,
                        channelId: s,
                        details: i
                    } = e;
                    T = !1;
                    let r = I(n);
                    return null != r && (C[r] = {
                        type: t,
                        channelId: s,
                        details: i
                    }, !0)
                },
                SIDEBAR_VIEW_GUILD: function(e) {
                    let {
                        sidebarType: t,
                        guildId: n,
                        baseChannelId: s,
                        details: i
                    } = e;
                    T = !1;
                    let r = I(s);
                    return null != r && (S[n] = {
                        type: t,
                        baseChannelId: r,
                        guildId: n,
                        details: i
                    }, !0)
                },
                SIDEBAR_CREATE_THREAD: function(e) {
                    let {
                        parentChannelId: t,
                        parentMessageId: n,
                        location: s
                    } = e;
                    T = !1;
                    let i = I(t);
                    null != i && (C[i] = {
                        type: a.SidebarType.CREATE_THREAD,
                        parentChannelId: t,
                        parentMessageId: n,
                        location: s
                    })
                },
                SIDEBAR_CLOSE: function(e) {
                    let {
                        baseChannelId: t
                    } = e, n = I(t);
                    null != n && delete C[n]
                },
                SIDEBAR_CLOSE_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return null != S[t] && (delete S[t], !0)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.id in C) return delete C[t.id], !0;
                    let n = !1;
                    for (let e in C) {
                        let s = C[e];
                        null != s && s.type === a.SidebarType.VIEW_CHANNEL && s.channelId === t.id && (delete C[e], n = !0)
                    }
                    return n
                },
                CHANNEL_SELECT: function() {
                    s.isMobile && E && (E = !1, p = !1)
                },
                THREAD_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    if (n.ownerId === (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    let s = C[n.parent_id];
                    null != s && s.type === a.SidebarType.CREATE_THREAD && s.parentMessageId === n.id && (C[n.parent_id] = {
                        type: a.SidebarType.VIEW_THREAD,
                        channelId: n.id
                    })
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = C[t.parent_id];
                    if (null == n || n.type !== a.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
                    delete C[t.parent_id]
                }
            })