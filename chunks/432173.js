            "use strict";
            n.r(t), n.d(t, {
                getReactionEmojiName: function() {
                    return o
                },
                getAccessibleEmojiDisplayName: function() {
                    return d
                },
                toReactionEmoji: function() {
                    return u
                },
                emojiEquals: function() {
                    return l
                },
                getBurstAnalyticsSection: function() {
                    return f
                },
                shouldApplyReaction: function() {
                    return _
                }
            }), n("781738");
            var s = n("867805"),
                i = n("271938"),
                r = n("49111"),
                a = n("782340");

            function o(e) {
                return null == e.id ? s.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }

            function d(e, t, n, s) {
                var i, r, d;
                let u;
                u = s ? e ? a.default.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : a.default.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? a.default.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : a.default.Messages.REACT_WITH_COUNT_A11Y_LABEL;
                let l = u.format({
                    reactions: t,
                    emojiName: null !== (d = null === (r = o(n)) || void 0 === r ? void 0 : null === (i = r.replace(/[:_]/g, " ")) || void 0 === i ? void 0 : i.trim()) && void 0 !== d ? d : ""
                });
                return l
            }

            function u(e) {
                var t, n, s;
                return {
                    id: null !== (t = e.id) && void 0 !== t ? t : null,
                    name: null !== (s = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== s ? s : "",
                    animated: !!e.animated
                }
            }

            function l(e, t) {
                if (null != t.id) {
                    let n = null != e.id ? "".concat(e.id) : e.id;
                    return "".concat(t.id) === n
                }
                return null == e.id && t.name === e.name
            }

            function f(e) {
                if (e.isThread()) return r.AnalyticsSections.THREAD_TEXT_AREA;
                if (e.isForumPost()) return r.AnalyticsSections.FORUM_CHANNEL_TEXT_AREA;
                if (e.isGuildVocal()) return r.AnalyticsSections.TEXT_IN_VOICE;
                return r.AnalyticsSections.CHANNEL_TEXT_AREA
            }

            function _(e) {
                let {
                    userId: t,
                    optimistic: n
                } = e, s = i.default.getId() === t;
                return (!n || !!s) && !0
            }