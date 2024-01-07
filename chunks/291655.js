            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("193865"),
                u = n("780571"),
                o = n("39331"),
                d = n("596368"),
                c = n("227439"),
                f = n("877671"),
                E = l.memo(function(e) {
                    var t, n, l;
                    let {
                        message: r,
                        channel: E,
                        compact: _,
                        className: p,
                        isGroupStart: h,
                        hideSimpleEmbedContent: S = !0,
                        disableInteraction: m
                    } = e, M = (0, a.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()), L = (0, a.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == E ? void 0 : E.guild_id) && void 0 !== n ? n : "", (null !== (l = r.editedTimestamp) && void 0 !== l ? l : r.timestamp).valueOf()), {
                        content: A
                    } = (0, o.default)(r, {
                        hideSimpleEmbedContent: S,
                        allowList: M.showListsAndHeaders || L.showListsAndHeaders,
                        allowHeading: M.showListsAndHeaders || L.showListsAndHeaders,
                        allowLinks: M.showMaskedLinks || L.showMaskedLinks,
                        previewLinkTarget: M.showMaskedLinks || L.showMaskedLinks
                    });
                    return (0, i.jsx)(u.default, {
                        compact: _,
                        className: s(p, {
                            [f.message]: !0,
                            [f.cozyMessage]: !_,
                            [f.groupStart]: h
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: E,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, d.default)(e, A),
                        disableInteraction: m
                    })
                })