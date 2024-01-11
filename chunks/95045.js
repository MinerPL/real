            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                renderAutomodMessageMarkup: function() {
                    return u
                }
            }), n("222007"), n("781738"), n("355025");
            var a = n("367376"),
                i = n("240873"),
                s = n("49111");
            let r = new Set([s.MessageEmbedTypes.IMAGE, s.MessageEmbedTypes.GIFV]),
                l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? a.default.parseInlineReply : a.default.parse;
                return function(e, t, n) {
                    var a, s;
                    let {
                        toAST: o = !1,
                        hideSimpleEmbedContent: u = !0,
                        formatInline: m = !1,
                        postProcessor: f
                    } = n, g = !1;
                    let p = e(t.content, !0, (a = t, s = n, {
                        allowLinks: null != a.webhookId || !!s.allowLinks,
                        allowEmojiLinks: null != a.webhookId,
                        channelId: a.channel_id,
                        messageId: a.id,
                        mentionChannels: a.mentionChannels,
                        isInteracting: !!s.isInteracting,
                        formatInline: !!s.formatInline,
                        noStyleAndInteraction: !!s.noStyleAndInteraction,
                        allowHeading: !!s.allowHeading,
                        allowList: !!s.allowList,
                        previewLinkTarget: !!s.previewLinkTarget,
                        disableAnimatedEmoji: !!s.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), u && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            a = t[0];
                        return ("link" === n.type || "attachmentLink" === n.type) && r.has(a.type) && (0, i.isEmbedInline)(a) ? [] : e
                    }(e, t.embeds)), !m && (e = function(e, t) {
                        return t ? c(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = c(e[0].content)), e)
                    }(e, n)), g = function(e, t) {
                        return t ? d(e) : "paragraph" === e[0].type && e[0].content instanceof Array && d(e[0].content)
                    }(e, n), m && (e = function e(t) {
                        return t.forEach(t => {
                            l.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != f && (e = f(e, n)), e));
                    return {
                        hasSpoilerEmbeds: g,
                        content: p
                    }
                }(n, e, t)
            }

            function u(e, t, n) {
                var i;
                return i = a.default.parseAutoModerationSystemMessage, i(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: n,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function c(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let n = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
                }), n > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function d(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
            }