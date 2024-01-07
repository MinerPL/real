            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var s = l("37983"),
                a = l("884691"),
                i = l("414456"),
                o = l.n(i),
                n = l("193865"),
                r = l("780571"),
                d = l("39331"),
                u = l("596368"),
                c = l("227439"),
                C = l("877671"),
                E = a.memo(function(e) {
                    var t, l, a;
                    let {
                        message: i,
                        channel: E,
                        compact: m,
                        className: I,
                        isGroupStart: T,
                        hideSimpleEmbedContent: L = !0,
                        disableInteraction: f
                    } = e, p = (0, n.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), A = (0, n.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == E ? void 0 : E.guild_id) && void 0 !== l ? l : "", (null !== (a = i.editedTimestamp) && void 0 !== a ? a : i.timestamp).valueOf()), {
                        content: _
                    } = (0, d.default)(i, {
                        hideSimpleEmbedContent: L,
                        allowList: p.showListsAndHeaders || A.showListsAndHeaders,
                        allowHeading: p.showListsAndHeaders || A.showListsAndHeaders,
                        allowLinks: p.showMaskedLinks || A.showMaskedLinks,
                        previewLinkTarget: p.showMaskedLinks || A.showMaskedLinks
                    });
                    return (0, s.jsx)(r.default, {
                        compact: m,
                        className: o(I, {
                            [C.message]: !0,
                            [C.cozyMessage]: !m,
                            [C.groupStart]: T
                        }),
                        childrenHeader: (0, c.default)({
                            ...e,
                            channel: E,
                            guildId: void 0
                        }),
                        childrenMessageContent: (0, u.default)(e, _),
                        disableInteraction: f
                    })
                })