            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("208021"),
                i = n("982108"),
                l = n("599110"),
                r = n("659500"),
                o = n("785770"),
                u = n("24927"),
                d = n("410688"),
                c = n("49111");

            function E(e) {
                let {
                    index: t,
                    className: n,
                    channel: E,
                    user: f,
                    hasSingleMessageRequest: _
                } = e, {
                    channelId: h
                } = (0, o.useMessageRequestSidebarState)();
                return (0, a.jsx)(u.default, {
                    index: t,
                    className: n,
                    isFocused: h === E.id,
                    channel: E,
                    user: f,
                    onClick: e => {
                        e.stopPropagation(), s.default.openPrivateChannelAsSidebar({
                            channelId: E.id,
                            baseChannelId: i.MESSAGE_REQUESTS_BASE_CHANNEL_ID,
                            hasSingleMessageRequest: _
                        }), l.default.track(c.AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                            is_spam: !1,
                            channel_id: E.id,
                            other_user_id: f.id
                        }), setTimeout(() => {
                            r.ComponentDispatch.dispatch(c.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                                channelId: E.id
                            })
                        }, 0)
                    },
                    children: e => (0, a.jsx)(d.PendingMessageRequestRowItem, {
                        active: e,
                        user: f,
                        channel: E
                    })
                })
            }