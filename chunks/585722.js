            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("424973");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("913144"),
                r = n("404118"),
                u = n("282928"),
                o = n("402752"),
                d = n("474643"),
                c = n("49111"),
                _ = n("782340");
            let E = new Map,
                f = [];

            function h(e, t) {
                var n, i;
                return null !== (i = null === (n = p(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : f
            }

            function p(e) {
                var t;
                return null !== (t = E.get(e)) && void 0 !== t ? t : new Map
            }

            function T(e, t, n) {
                let i = p(e);
                i.set(t, n), E.set(e, i)
            }
            class C extends l.default.Store {
                getFirstUpload(e, t) {
                    let n = h(e, t);
                    return n.length > 0 ? n[0] : null
                }
                hasAdditionalUploads(e, t) {
                    var n;
                    return (null !== (n = h(e, t).length) && void 0 !== n ? n : 0) > 1
                }
                getUploads(e, t) {
                    return h(e, t)
                }
                getUploadCount(e, t) {
                    var n;
                    return null !== (n = h(e, t).length) && void 0 !== n ? n : 0
                }
                getUpload(e, t, n) {
                    return h(e, n).find(e => e.id === t)
                }
                findUpload(e, t, n) {
                    return h(e, t).find(n)
                }
            }
            C.displayName = "UploadAttachmentStore";
            var m = new C(s.default, {
                UPLOAD_ATTACHMENT_POP_FILE: function(e) {
                    let {
                        channelId: t
                    } = e, n = [...h(t, d.DraftType.ChannelMessage)];
                    n.shift(), T(t, d.DraftType.ChannelMessage, n)
                },
                UPLOAD_ATTACHMENT_ADD_FILES: e => {
                    let {
                        files: t,
                        channelId: n,
                        showLargeMessageDialog: i,
                        draftType: l
                    } = e, s = [...h(n, l)];
                    if (s.length + t.length > c.MAX_UPLOAD_COUNT && l !== d.DraftType.SlashCommand && l !== d.DraftType.ApplicationLauncherCommand) {
                        r.default.show({
                            title: _.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                            body: _.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                                limit: c.MAX_UPLOAD_COUNT
                            })
                        });
                        return
                    }
                    a.forEach(t, e => {
                        let t = new u.CloudUpload(e, n, i, s.length);
                        t.upload(), s.push(t)
                    }), T(n, l, s)
                },
                UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
                    let {
                        channelId: t,
                        id: n,
                        filename: i,
                        description: a,
                        spoiler: l,
                        thumbnail: s,
                        draftType: r
                    } = e, u = [...h(t, r)], o = u.map(e => (e.id === n && (void 0 !== i && (e.filename = i), void 0 !== l && (e.spoiler = l), void 0 !== a && (e.description = a), void 0 !== s && (e.isThumbnail = s)), e));
                    T(t, r, o)
                },
                UPLOAD_ATTACHMENT_REMOVE_FILE: function(e) {
                    let {
                        channelId: t,
                        id: n,
                        draftType: i
                    } = e, a = [...h(t, i)], l = a.findIndex(e => (0, o.doesImageMatchUpload)({
                        uri: n,
                        filename: n
                    }, e));
                    if (l > -1) {
                        let e = a.splice(l, 1)[0];
                        e.cancel(), T(t, i, a)
                    }
                },
                UPLOAD_ATTACHMENT_REMOVE_FILES: function(e) {
                    let {
                        channelId: t,
                        attachmentIds: n,
                        draftType: i
                    } = e, a = [...h(t, i)];
                    n.forEach(e => {
                        let t = a.findIndex(t => e === t.id);
                        if (t > -1) {
                            let e = a.splice(t, 1)[0];
                            e.cancel()
                        }
                    }), T(t, i, a)
                },
                UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function(e) {
                    let {
                        channelId: t,
                        draftType: n
                    } = e;
                    T(t, n, [])
                },
                UPLOAD_ATTACHMENT_SET_UPLOADS: function(e) {
                    let {
                        channelId: t,
                        uploads: n,
                        draftType: i
                    } = e;
                    T(t, i, n)
                },
                UPLOAD_ATTACHMENT_SET_FILE: function(e) {
                    let {
                        channelId: t,
                        id: n,
                        file: i,
                        draftType: a
                    } = e, l = [...h(t, a)], s = l.filter(e => e.id !== n), r = new u.CloudUpload(i, t);
                    r.upload(), s.push(r), T(t, a, s)
                },
                SIDEBAR_CLOSE: function(e) {
                    let {
                        baseChannelId: t
                    } = e;
                    T(t, d.DraftType.FirstThreadMessage, [])
                }
            })