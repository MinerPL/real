            "use strict";
            n.r(t), n.d(t, {
                getClassificationRelativeIncidentTime: function() {
                    return o
                },
                getAttachmentFilename: function() {
                    return u
                },
                parseMessageEmbedForProps: function() {
                    return d
                },
                isFlaggedContentEmpty: function() {
                    return c
                }
            }), n("808653");
            var a = n("866227"),
                s = n.n(a),
                l = n("908539"),
                i = n("170213"),
                r = n("894488");

            function o(e) {
                return s().to(s(e))
            }

            function u(e) {
                var t, n;
                return null != e.width && e.width > 0 && null != e.height && e.height > 0 ? "".concat(r.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
            }

            function d(e) {
                var t, n, a, s;
                if (null == e.fields) return;
                let l = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
                return {
                    header: null !== (t = l[i.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
                    icon: l[i.SafetySystemNotificationEmbedKeys.ICON_TYPE],
                    body: null !== (n = l[i.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
                    ctas: (null !== (a = l[i.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== a ? a : "").split(",").filter(e => "" !== e),
                    timestamp: parseFloat(null !== (s = l[i.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== s ? s : 0),
                    theme: l[i.SafetySystemNotificationEmbedKeys.THEME],
                    learn_more_link: l[i.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
                    classification_id: l[i.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
                }
            }

            function c(e) {
                if (e.type === l.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
                return !0
            }
            n("782340")