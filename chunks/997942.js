            "use strict";
            n.r(t), n.d(t, {
                validateClipMetadata: function() {
                    return s
                }
            }), n("222007"), n("808653");
            var i = n("80028");
            let a = [e => {
                    let t = {
                        ...e,
                        version: 1,
                        applicationName: e.gameName,
                        applicationId: void 0
                    };
                    return delete t.gameName, t
                }, e => {
                    let t = {
                        ...e,
                        version: 2,
                        name: e.name.startsWith("Clip - ") ? void 0 : e.name
                    };
                    return t
                }, e => {
                    let t = {
                        ...e,
                        version: 3,
                        name: "" === e.name ? void 0 : e.name
                    };
                    return t
                }],
                l = null;
            async function s(e) {
                var t;
                let s = (await n.el("990599").then(n.t.bind(n, "990599", 23))).default;
                let u = (t = s, null != l ? l : l = t.object({
                    id: t.string().required(),
                    version: t.number().positive().integer().min(0).max(i.CURRENT_CLIP_METADATA_VERSION).optional(),
                    name: t.string().when("version", {
                        is: t.number().less(3),
                        then: t.string().allow("")
                    }),
                    gameName: t.string().when("version", {
                        is: t.number().greater(0).required(),
                        then: t.forbidden(),
                        otherwise: t.required()
                    }),
                    applicationName: t.string().when("version", {
                        is: t.number().greater(0).required(),
                        then: t.required(),
                        otherwise: t.forbidden()
                    }),
                    applicationId: t.string(),
                    users: t.array().items(t.string()).required(),
                    filepath: t.string().required(),
                    length: t.number().required(),
                    thumbnail: t.string().required().allow(""),
                    editMetadata: t.object().keys({
                        start: t.number(),
                        end: t.number(),
                        applicationAudio: t.boolean(),
                        voiceAudio: t.boolean()
                    }),
                    clipMethod: t.string().allow("auto", "manual").required()
                }).required());
                try {
                    s.assert(e, u);
                    return null == e.version && (e.version = 0), a.slice(e.version).reduce((e, t) => t(e), e)
                } catch (e) {
                    return null
                }
            }