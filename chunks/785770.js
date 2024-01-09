            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestSidebarState: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("582713"),
                l = n("982108");

            function i() {
                let e = (0, a.useStateFromStores)([l.default], () => l.default.getSidebarState(l.MESSAGE_REQUESTS_BASE_CHANNEL_ID)),
                    t = (null == e ? void 0 : e.type) === s.SidebarType.VIEW_MESSAGE_REQUEST ? e : null,
                    n = null == t ? void 0 : t.channelId,
                    i = (null == t ? void 0 : t.details) != null && t.details.type === s.SidebarOpenDetailsType.MESSAGE_REQUEST && t.details.hasSingleMessageRequest;
                return {
                    channelId: n,
                    hasSingleMessageRequest: i
                }
            }