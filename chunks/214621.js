            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("446674"),
                o = n("77078"),
                u = n("70845"),
                d = n("95045"),
                c = n("845579"),
                E = n("957255"),
                f = n("27618"),
                _ = n("505684"),
                h = n("93427"),
                C = n("389495"),
                T = n("49111"),
                I = n("719347"),
                S = n("782340"),
                N = n("863452"),
                A = n("632215");
            let p = s.memo(function(e) {
                let {
                    channel: t
                } = e, {
                    loaded: n,
                    error: i,
                    message: p
                } = (0, C.useMessageRequestPreview)(t), m = (0, r.useStateFromStores)([f.default], () => null != p && f.default.isBlocked(p.author.id), [p]), g = (0, r.useStateFromStores)([E.default], () => E.default.can(T.Permissions.MANAGE_MESSAGES, t)), R = c.RenderSpoilers.useSetting(), {
                    content: O
                } = s.useMemo(() => (null == p ? void 0 : p.content) != null && "" !== p.content ? (0, d.default)(p, {
                    formatInline: !0,
                    noStyleAndInteraction: !0
                }) : {
                    content: null
                }, [p]), L = null;
                if (i) L = (0, a.jsx)(o.Text, {
                    className: N.messageReplacement,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: S.default.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
                });
                else if (n) {
                    if (null != p && m) L = (0, a.jsx)(o.Text, {
                        className: N.messageReplacement,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: S.default.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
                    });
                    else if (null != p) {
                        let {
                            contentPlaceholder: e,
                            renderedContent: t
                        } = (0, h.renderSingleLineMessage)(p, O, m, l(N.messageContent, A.inlineFormat, A.smallFontSize), {
                            iconClass: N.messageContentIcon,
                            iconSize: I.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                        });
                        L = null != t ? (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: N.messageContent,
                            children: t
                        }) : (0, a.jsx)(o.Text, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: N.messageReplacement,
                            children: e
                        })
                    } else L = (0, a.jsx)(o.Text, {
                        className: N.messageReplacement,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: S.default.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
                    })
                } else L = null;
                return (0, a.jsx)(_.ObscuredDisplayContext.Provider, {
                    value: (0, u.default)(R, g),
                    children: (0, a.jsx)(o.FocusBlock, {
                        className: N.messageFocusBlock,
                        children: L
                    })
                })
            });
            var m = p