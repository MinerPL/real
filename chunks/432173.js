            "use strict";
            n.r(t), n.d(t, {
                getReactionEmojiName: function() {
                    return r
                },
                getAccessibleEmojiDisplayName: function() {
                    return u
                },
                toReactionEmoji: function() {
                    return o
                },
                emojiEquals: function() {
                    return d
                },
                getBurstAnalyticsSection: function() {
                    return c
                },
                shouldApplyReaction: function() {
                    return _
                }
            }), n("781738");
            var i = n("867805"),
                a = n("271938"),
                l = n("49111"),
                s = n("782340");

            function r(e) {
                return null == e.id ? i.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }

            function u(e, t, n, i) {
                var a, l, u;
                let o;
                o = i ? e ? s.default.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : s.default.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? s.default.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : s.default.Messages.REACT_WITH_COUNT_A11Y_LABEL;
                let d = o.format({
                    reactions: t,
                    emojiName: null !== (u = null === (l = r(n)) || void 0 === l ? void 0 : null === (a = l.replace(/[:_]/g, " ")) || void 0 === a ? void 0 : a.trim()) && void 0 !== u ? u : ""
                });
                return d
            }

            function o(e) {
                var t, n, i;
                return {
                    id: null !== (t = e.id) && void 0 !== t ? t : null,
                    name: null !== (i = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== i ? i : "",
                    animated: !!e.animated
                }
            }

            function d(e, t) {
                if (null != t.id) {
                    let n = null != e.id ? "".concat(e.id) : e.id;
                    return "".concat(t.id) === n
                }
                return null == e.id && t.name === e.name
            }

            function c(e) {
                if (e.isThread()) return l.AnalyticsSections.THREAD_TEXT_AREA;
                if (e.isForumPost()) return l.AnalyticsSections.FORUM_CHANNEL_TEXT_AREA;
                if (e.isGuildVocal()) return l.AnalyticsSections.TEXT_IN_VOICE;
                return l.AnalyticsSections.CHANNEL_TEXT_AREA
            }

            function _(e) {
                let {
                    userId: t,
                    optimistic: n
                } = e, i = a.default.getId() === t;
                return (!n || !!i) && !0
            }