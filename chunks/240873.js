            "use strict";
            n.r(t), n.d(t, {
                sanitizeEmbed: function() {
                    return m
                },
                mergeEmbedsOnURL: function() {
                    return S
                },
                isEmbedInline: function() {
                    return I
                },
                hasClydeAiThoughtsEmbed: function() {
                    return g
                },
                isClydeAiThoughtsEmbed: function() {
                    return A
                },
                isServerShopArticleEmbed: function() {
                    return N
                },
                getMaxEmbedMediaSize: function() {
                    return O
                }
            }), n("222007"), n("702976"), n("424973");
            var i = n("917351"),
                a = n.n(i),
                l = n("866227"),
                s = n.n(l),
                r = n("509043"),
                u = n("299039"),
                o = n("49111"),
                d = n("108067");
            let c = /sketchfab/i,
                _ = /^https:\/\/sketchfab\.com/i,
                E = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
                f = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
                h = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                p = new Set([o.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, o.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, o.MessageEmbedTypes.RICH, o.MessageEmbedTypes.SAFETY_POLICY_NOTICE, o.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, o.MessageEmbedTypes.VOICE_CHANNEL]);

            function T(e) {
                let {
                    width: t,
                    height: n
                } = e;
                return t > 0 && n > 0
            }

            function C(e) {
                let {
                    url: t,
                    proxy_url: n,
                    width: i,
                    height: a
                } = e;
                return {
                    url: t,
                    proxyURL: n,
                    width: i,
                    height: a
                }
            }

            function m(e, t, n) {
                let i = {
                    id: a.uniqueId("embed_"),
                    url: n.url,
                    type: n.type,
                    rawTitle: n.title,
                    rawDescription: n.description,
                    referenceId: n.reference_id,
                    flags: n.flags,
                    contentScanVersion: n.content_scan_version
                };
                if (null != n.footer && (i.footer = {
                        text: n.footer.text,
                        iconURL: n.footer.icon_url,
                        iconProxyURL: n.footer.proxy_icon_url
                    }), null != n.author && null != n.author.name && (i.author = {
                        name: n.author.name,
                        url: n.author.url,
                        iconURL: n.author.icon_url,
                        iconProxyURL: n.author.proxy_icon_url
                    }), null != n.provider && null != n.provider.name && (i.provider = {
                        name: n.provider.name,
                        url: n.provider.url
                    }), null != n.timestamp && (i.timestamp = s(new Date(n.timestamp))), null != n.color && (i.color = (0, r.int2hsl)(n.color, !0)), null != n.thumbnail && T(n.thumbnail)) switch (i.type) {
                    case o.MessageEmbedTypes.ARTICLE:
                    case o.MessageEmbedTypes.IMAGE:
                        i.image = C(n.thumbnail);
                        break;
                    default:
                        i.thumbnail = C(n.thumbnail)
                }
                if (null != n.image && T(n.image) && (i.image = C(n.image)), null != n.video && (null == i.thumbnail && null != n.video.proxy_url && T(n.video) && (i.thumbnail = {
                        width: n.video.width,
                        height: n.video.height,
                        url: "".concat(n.video.proxy_url, "?format=jpeg")
                    }), null != i.thumbnail && T(n.video) && function(e, t, n) {
                        if (null != t && c.test(t.name) || _.test(n.url)) return !1;
                        let i = null != n.proxy_url || /^https:/i.test(n.url);
                        return 1492472454139 > u.default.extractTimestamp(e) && (i = i && null != t && E.test(t.name)), i
                    }(t, n.provider, n.video) && (i.video = C(n.video))), p.has(i.type)) {
                    var l;
                    let e = null !== (l = n.fields) && void 0 !== l ? l : [];
                    i.fields = e.map(e => {
                        let {
                            name: t,
                            value: n,
                            inline: i
                        } = e;
                        return {
                            rawName: t,
                            rawValue: n,
                            inline: i
                        }
                    })
                } else i.fields = [];
                return i
            }

            function S(e) {
                let t = new Map,
                    n = [];
                return e.forEach(e => {
                    if (null == e.url) {
                        n.push(e);
                        return
                    }
                    let i = t.get(e.url);
                    if (null == i) {
                        n.push(e), t.set(e.url, e);
                        return
                    }
                    null != e.image && (null == i.images && (i.images = [], null != i.image && i.images.push(i.image)), i.images.push(e.image))
                }), n
            }

            function I(e) {
                let {
                    image: t,
                    video: n,
                    type: i,
                    author: a,
                    rawTitle: l
                } = e;
                return (null != t || null != n) && (i === o.MessageEmbedTypes.GIFV || i !== o.MessageEmbedTypes.RICH && null == a && null == l)
            }

            function g(e) {
                if (!e.author.isClyde() || 0 === e.embeds.length) return !1;
                for (let t of e.embeds)
                    if (A(t)) return !0;
                return !1
            }

            function A(e) {
                let t = null != e.fields && 3 === e.fields.length && "Thought" === e.fields[0].rawName && "Tool" === e.fields[1].rawName && "Result" === e.fields[2].rawName;
                return e.type === o.MessageEmbedTypes.RICH && (e.rawTitle === d.ClydeAIConstants.THOUGHT_EMBED_TITLE || t)
            }

            function N(e) {
                return e.type === o.MessageEmbedTypes.ARTICLE && null != e.url && (h.test(e.url) || f.test(e.url))
            }

            function O(e, t, n) {
                var i;
                return null != t && null != n ? {
                    maxMediaWidth: t,
                    maxMediaHeight: n
                } : (null === (i = e.provider) || void 0 === i ? void 0 : i.name) === "TikTok" ? {
                    maxMediaWidth: 400,
                    maxMediaHeight: 450
                } : {
                    maxMediaWidth: 400,
                    maxMediaHeight: 300
                }
            }