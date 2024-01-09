            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007"), n("860677");
            var a = n("446674"),
                s = n("913144"),
                l = n("377253");
            let i = Object.freeze([]),
                r = {},
                o = {},
                u = {},
                d = {},
                c = {};

            function f(e, t) {}

            function h() {
                c = {}
            }

            function C(e, t) {
                let n = r[e];
                return null != n && (r[e] = n.filter(e => e.id !== t), delete o[t], delete u[t], n.length !== r[e].length)
            }

            function p(e, t) {
                let n = r[e];
                if (null == n) return !1;
                r[e] = n.map(e => e.id === t.id ? {
                    ...e,
                    ...t
                } : e);
                let a = u[t.id];
                null != a && null != d[a.id] && (d[a.id] = {
                    ...d[a.id],
                    ...t
                })
            }
            class m extends a.default.Store {
                initialize() {
                    this.waitFor(l.default)
                }
                getFiles(e) {
                    var t;
                    return null !== (t = r[e]) && void 0 !== t ? t : i
                }
                getMessageForFile(e) {
                    return u[e]
                }
                getUploaderFileForMessageId(e) {
                    return d[e]
                }
                getUploadAttachments(e) {
                    if (null != e) return c[e]
                }
            }
            m.displayName = "UploadStore";
            var E = new m(s.default, {
                CONNECTION_OPEN: function() {
                    c = {}
                },
                LOGOUT: function() {
                    c = {}
                },
                UPLOAD_START: function(e) {
                    var t;
                    let {
                        channelId: n,
                        file: a,
                        uploader: s,
                        message: l
                    } = e;
                    if (s._aborted || s._errored) return;
                    let c = null !== (t = r[n]) && void 0 !== t ? t : i;
                    o[a.id] = s, r[n] = [...c, a], u[a.id] = l;
                    let {
                        items: f
                    } = a;
                    null != f && (d[l.id] = {
                        ...a,
                        items: f
                    }), l.nonce
                },
                UPLOAD_COMPRESSION_PROGRESS: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e;
                    p(t, n)
                },
                UPLOAD_PROGRESS: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e;
                    p(t, n)
                },
                UPLOAD_COMPLETE: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e;
                    return C(t, n.id)
                },
                UPLOAD_FAIL: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e;
                    return C(t, n.id)
                },
                UPLOAD_CANCEL_REQUEST: function(e) {
                    let {
                        file: t
                    } = e, n = o[t.id];
                    if (null == n) return !1;
                    setImmediate(() => {
                        var e;
                        return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n)
                    })
                },
                UPLOAD_ITEM_CANCEL_REQUEST: function(e) {
                    let {
                        file: t,
                        itemId: n
                    } = e, a = o[t.id];
                    if (null == a) return !1;
                    setImmediate(() => a.cancelItem(n))
                },
                UPLOAD_FILE_UPDATE: function(e) {
                    let {
                        channelId: t,
                        file: n
                    } = e, a = u[n.id];
                    null != a && a.nonce, p(t, n)
                },
                UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
                    let {
                        file: t,
                        messageId: n
                    } = e;
                    d[n] = t
                }
            })