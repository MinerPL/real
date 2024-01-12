            "use strict";
            n.r(t), n.d(t, {
                getClassificationRelativeIncidentTime: function() {
                    return u
                },
                getAttachmentFilename: function() {
                    return d
                },
                parseMessageEmbedForProps: function() {
                    return c
                },
                isFlaggedContentEmpty: function() {
                    return f
                }
            }), n("808653");
            var a = n("866227"),
                s = n.n(a),
                l = n("651693"),
                i = n("908539"),
                r = n("170213"),
                o = n("894488");

            function u(e) {
                return s().to(s(e))
            }

            function d(e) {
                var t, n;
                return (0, l.isImageFile)(e.filename) ? "".concat(o.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
            }

            function c(e) {
                var t, n, a, s;
                if (null == e.fields) return;
                let l = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
                return {
                    header: null !== (t = l[r.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
                    icon: l[r.SafetySystemNotificationEmbedKeys.ICON_TYPE],
                    body: null !== (n = l[r.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
                    ctas: (null !== (a = l[r.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== a ? a : "").split(",").filter(e => "" !== e),
                    timestamp: parseFloat(null !== (s = l[r.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== s ? s : 0),
                    theme: l[r.SafetySystemNotificationEmbedKeys.THEME],
                    learn_more_link: l[r.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
                    classification_id: l[r.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
                }
            }

            function f(e) {
                if (e.type === i.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
                return !0
            }
            n("782340")