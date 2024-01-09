            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("819855"),
                r = n("77078"),
                u = n("828986"),
                o = n("519841"),
                d = n("787336"),
                c = n("508229"),
                f = n("660478"),
                h = n("697218"),
                p = n("590514"),
                m = n("249561"),
                E = n("49111"),
                C = n("782340");
            let S = [];

            function g(e) {
                let {
                    channel: t,
                    onJump: g
                } = e, {
                    messages: _,
                    loading: I
                } = (0, s.useStateFromStoresObject)([c.default], () => {
                    let e = c.default.getPinnedMessages(t.id),
                        n = null != e ? e.messages : S;
                    return {
                        messages: n,
                        loading: null == n || null != e && e.loading
                    }
                }), T = (0, s.useStateFromStores)([f.default], () => f.default.hasUnreadPins(t.id)), v = (0, s.useStateFromStores)([h.default], () => {
                    if (!t.isPrivate()) return null;
                    let e = h.default.getUser(t.getRecipientId());
                    return null != e ? e.username : null
                });
                return l.useEffect(() => {
                    o.AttachmentLinkRefreshExperiment.getCurrentConfig({
                        location: "pins"
                    }).enabled && _.some(d.messageHasExpiredAttachmentUrl) && u.default.fetchPins(t.id, !0)
                }, []), l.useEffect(() => {
                    T && u.default.ackPins(t.id)
                }, [T, t.id]), (0, a.jsx)(r.Dialog, {
                    "aria-label": C.default.Messages.PINNED_MESSAGES,
                    children: (0, a.jsx)(p.default, {
                        onFetch: function() {
                            u.default.ackPins(t.id), u.default.fetchPins(t.id)
                        },
                        channel: t,
                        messages: _,
                        loading: I,
                        analyticsName: "Channel Pins",
                        onCloseMessage: function(e, n) {
                            null != e && (n.shiftKey ? u.default.unpinMessage(t, e.id) : m.default.confirmUnpin(t, e))
                        },
                        onJump: g,
                        getProTip: function() {
                            return t.isPrivate() ? t.type === E.ChannelTypes.DM ? C.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_DM.format({
                                other: v
                            }) : C.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_GROUP_DM : C.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_CHANNEL
                        },
                        renderHeader: () => (0, a.jsx)(p.Header, {
                            title: C.default.Messages.PINNED_MESSAGES
                        }),
                        renderEmptyState: function(e) {
                            let l = C.default.Messages.NO_PINS_IN_CHANNEL;
                            t.isPrivate() && (l = C.default.Messages.NO_PINS_IN_DM);
                            let s = (0, i.isThemeLight)(e) ? n("615184") : n("992507");
                            return (0, a.jsx)(p.EmptyStateCenter, {
                                msg: l,
                                image: s
                            }, "emptystate")
                        },
                        listName: "pins"
                    })
                })
            }