            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return _
                },
                openThreadSidebarForCreating: function() {
                    return x
                },
                closeThreadSidebar: function() {
                    return T
                },
                closeAndClearThreadSidebar: function() {
                    return L
                }
            });
            var l = n("627445"),
                a = n.n(l),
                r = n("917351"),
                i = n.n(r),
                s = n("913144"),
                u = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                h = n("144491"),
                p = n("845579"),
                C = n("474643"),
                m = n("18494"),
                v = n("800762"),
                g = n("659500"),
                S = n("648564"),
                E = n("49111"),
                I = n("724210");

            function _(e, t, n) {
                o.MainWindowDispatch.dispatch(E.ComponentActions.POPOUT_CLOSE);
                let l = !i.isEmpty(v.default.getVoiceStatesForChannel(e.id));
                if (t || !p.UseThreadSidebar.getSetting() || __OVERLAY__ || l) {
                    s.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let r = m.default.getChannelId();
                e.parent_id !== r && !(0, I.isGuildHomeChannel)(r) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(E.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, I.isGuildHomeChannel)(r) ? I.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? S.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    g.ComponentDispatch.dispatch(E.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function x(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(E.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(E.ComponentActions.POPOUT_CLOSE), m.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
                let l = C.default.getDraft(e.id, C.DraftType.FirstThreadMessage);
                if ("" === l) {
                    let t = C.default.getDraft(e.id, C.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", C.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, C.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    s.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function T(e, t) {
                (0, f.transitionTo)(E.Routes.CHANNEL(e, (0, I.isGuildHomeChannel)(t) ? I.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function L(e) {
                s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: C.DraftType.FirstThreadMessage
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: C.DraftType.ThreadSettings
                })
            }