            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("151426"),
                l = n("77078"),
                r = n("402309"),
                o = n("599110"),
                u = n("991170"),
                d = n("580362"),
                c = n("49111"),
                E = n("994428"),
                f = n("695838"),
                _ = n("69741");

            function h(e) {
                var t;
                let h = (0, r.useCanCurrentUserViewDisableUnsafeGuildSettingsNotice)(e),
                    C = _.MODERATOR_PERMISSIONS.some(t => (null == e ? void 0 : e.id) !== f.FAVORITES_RAW_GUILD_ID && u.default.canEveryone(t, e)),
                    I = (null == e ? void 0 : e.defaultMessageNotifications) === c.UserNotificationSettings.ALL_MESSAGES,
                    T = (0, d.useIsContentDismissed)(i.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""),
                    S = h && (C || I) && !T,
                    N = s.useCallback(() => {
                        var t;
                        (0, d.markContentAsDismissed)(i.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", !0, E.ContentDismissActionType.DISMISS)
                    }, [e]),
                    A = s.useRef(!1);
                s.useEffect(() => {
                    if (S && !A.current) {
                        var t;
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("675454").then(n.bind(n, "675454"));
                            return n => (0, a.jsx)(t, {
                                guild: e,
                                canEveryoneModerate: C,
                                isDefaultNotificationsAllMessages: I,
                                ...n
                            })
                        }, {
                            onCloseCallback: N
                        }), o.default.track(c.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                            type: i.DismissibleGuildContent[i.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                            guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
                        }), A.current = !0
                    }
                }, [C, e, N, I, S])
            }