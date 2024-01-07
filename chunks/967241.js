            "use strict";
            i.r(t), i.d(t, {
                openThreadSidebarForViewing: function() {
                    return A
                },
                openThreadSidebarForCreating: function() {
                    return v
                },
                closeThreadSidebar: function() {
                    return O
                },
                closeAndClearThreadSidebar: function() {
                    return y
                }
            });
            var a = i("627445"),
                s = i.n(a),
                r = i("917351"),
                n = i.n(r),
                l = i("913144"),
                o = i("295426"),
                d = i("244201"),
                c = i("716241"),
                h = i("565298"),
                u = i("393414"),
                f = i("144491"),
                _ = i("845579"),
                p = i("474643"),
                C = i("18494"),
                m = i("800762"),
                g = i("659500"),
                E = i("648564"),
                T = i("49111"),
                S = i("724210");

            function A(e, t, i) {
                d.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let a = !n.isEmpty(m.default.getVoiceStatesForChannel(e.id));
                if (t || !_.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    l.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != i ? (0, f.transitionToThread)(e, i) : (0, f.transitionToChannel)(e.id);
                    return
                }
                s(null != e.parent_id, "all threads must have parents");
                let r = C.default.getChannelId();
                e.parent_id !== r && !(0, S.isGuildHomeChannel)(r) && (0, f.transitionToChannel)(e.parent_id), (0, u.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, h.getGuildIdForGenericRedirect)(e), (0, S.isGuildHomeChannel)(r) ? S.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? E.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    g.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function v(e, t, i) {
                s(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), s(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: i,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), d.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), C.default.getChannelId() !== e.id && (0, f.transitionToChannel)(e.id);
                let a = p.default.getDraft(e.id, p.DraftType.FirstThreadMessage);
                if ("" === a) {
                    let t = p.default.getDraft(e.id, p.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", p.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, p.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    l.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: i
                    })
                }, 0)
            }

            function O(e, t) {
                (0, u.transitionTo)(T.Routes.CHANNEL(e, (0, S.isGuildHomeChannel)(t) ? S.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function y(e) {
                l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.FirstThreadMessage
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.ThreadSettings
                })
            }