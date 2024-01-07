            "use strict";
            n.r(t), n.d(t, {
                getUploadPayload: function() {
                    return u
                },
                default: function() {
                    return o
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("917351"),
                s = n.n(l),
                r = n("66175");

            function u(e) {
                var t, n;
                let i = e.item.file;
                return a(null != i, "file data must not be empty"), {
                    filename: i.name,
                    file_size: i.size,
                    id: s.uniqueId(),
                    is_clip: null != e.clip,
                    title: null === (t = e.clip) || void 0 === t ? void 0 : t.name,
                    application_id: null === (n = e.clip) || void 0 === n ? void 0 : n.applicationId,
                    clip_created_at: null != e.clip ? (0, r.getClipCreatedAt)(e.clip.id) : void 0,
                    clip_participant_ids: null != e.clip ? (0, r.getClipParticipantIds)(e.clip.users) : void 0
                }
            }
            var o = {
                getUploadPayload: u
            }