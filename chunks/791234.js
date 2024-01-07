            "use strict";
            n.r(t), n.d(t, {
                getEmbedColor: function() {
                    return p
                },
                ForumPostMediaTypes: function() {
                    return l
                },
                useForumPostMediaThumbnail: function() {
                    return x
                },
                useForumPostMediaProperties: function() {
                    return _
                },
                useFindFirstMediaProperties: function() {
                    return S
                },
                useFirstMediaIsEmbed: function() {
                    return N
                },
                shouldShowAddMediaToOriginalPostModal: function() {
                    return M
                },
                messageContainsGifOrVideo: function() {
                    return T
                }
            }), n("702976"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("808653");
            var l, a, s = n("884691"),
                i = n("651693"),
                r = n("610730"),
                o = n("845579"),
                u = n("42203"),
                d = n("377253"),
                c = n("697218"),
                m = n("568734"),
                f = n("449008"),
                h = n("49111");

            function p(e, t) {
                if (null == e || null == e.embeds[0]) return;
                let {
                    color: n
                } = e.embeds[0];
                return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
            }

            function g(e) {
                if (null == e) return !1;
                let {
                    filename: t,
                    height: n,
                    width: l
                } = e;
                return (0, i.isImageFile)(t) && null != n && n > 0 && null != l && l > 0
            }

            function E(e) {
                return null != e && null != e && (0, i.isVideoFile)(e.filename) && null != e.proxy_url
            }

            function v(e) {
                return g(e) || E(e)
            }(a = l || (l = {})).EMBED = "embed", a.ATTACHMENT = "attachment";

            function C(e) {
                let t = o.InlineAttachmentMedia.useSetting();
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.InlineAttachmentMedia.getSetting();
                    if (!t) return [];
                    let n = null == e ? void 0 : e.attachments;
                    return null == e || null == n ? [] : n.filter(v).map(e => {
                        let {
                            proxy_url: t,
                            url: n,
                            description: l,
                            spoiler: a,
                            flags: s,
                            width: r,
                            height: o,
                            filename: u,
                            content_scan_version: d
                        } = e;
                        if (null == r || null == o) return null;
                        let c = (0, i.isVideoFile)(u),
                            f = null != e.flags && (0, m.hasFlag)(e.flags, h.MessageAttachmentFlags.IS_THUMBNAIL),
                            p = null != t ? t : n;
                        if (c) {
                            let e = new URL(t);
                            e.searchParams.append("format", "jpeg"), p = e.toString()
                        }
                        return {
                            src: p,
                            width: r,
                            height: o,
                            spoiler: null != a && a,
                            flags: s,
                            contentScanVersion: d,
                            alt: l,
                            isVideo: c,
                            isThumbnail: f,
                            type: "attachment"
                        }
                    }).filter(f.isNotNullish)
                }(e, t)
            }

            function I(e, t) {
                let n = o.InlineEmbedMedia.useSetting(),
                    l = o.RenderEmbeds.useSetting();
                if (null == e) return [];
                let a = e.embeds;
                return n && l && null != a ? a.map(e => {
                    var n;
                    let l = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
                    if (null == l && null != e.images && (l = e.images[0]), null != l && null != l.url) {
                        let {
                            height: n,
                            proxyURL: a,
                            url: s,
                            width: r
                        } = l, o = null != a && (0, i.isVideoUrl)(a);
                        return {
                            src: null != a && "" !== a ? a : s,
                            height: n,
                            width: r,
                            spoiler: t,
                            flags: e.flags,
                            contentScanVersion: e.contentScanVersion,
                            isVideo: o,
                            type: "embed"
                        }
                    }
                }).filter(f.isNotNullish) : []
            }

            function x(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = _(e, n);
                return s.useMemo(() => {
                    if (null == t) return [];
                    if (!t.isMediaChannel()) return l;
                    {
                        let e = l.find(e => e.isThumbnail);
                        return null != e ? [e] : l
                    }
                }, [t, l])
            }

            function _(e, t) {
                let n = C(e),
                    l = I(e, t);
                return [...n, ...l]
            }

            function S(e, t) {
                var n, l;
                let a = C(e),
                    s = I(e, t);
                return null !== (l = null !== (n = a[0]) && void 0 !== n ? n : s[0]) && void 0 !== l ? l : null
            }

            function N(e, t) {
                let n = C(e),
                    l = I(e, t);
                return null == n[0] && null != l[0]
            }

            function M(e, t) {
                var n;
                let l = u.default.getChannel(t);
                if (null == l) return !1;
                let a = d.default.getMessage(l.id, l.id);
                return null != a && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && l.isForumPost() && l.ownerId === (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === r.default.getCount(l.id) && (0 === a.attachments.length || null == a.attachments.find(e => g(e) || E(e)))
            }

            function T(e) {
                return e.reduce((e, t) => ({
                    containsVideo: e.containsVideo || t.isVideo,
                    containsGif: e.containsGif || (0, i.isAnimatedImageUrl)(t.src)
                }), {
                    containsVideo: !1,
                    containsGif: !1
                })
            }