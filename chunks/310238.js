            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var i = n("627445"),
                a = n.n(i),
                l = n("469520"),
                s = n.n(l);
            async function u(e) {
                let t;
                let n = s.createFile(!1),
                    i = new Promise(e => {
                        n.onReady = e
                    }),
                    l = await e.arrayBuffer();
                for (let e of (l.fileStart = 0, n.appendBuffer(l), n.flush(), await i, a(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
                let u = e.slice(0, t, e.type),
                    d = e.slice(t + 4, t + 8 + 16, e.type);
                return new Blob([u, new Uint8Array([0, 0, 0, 24]), d], {
                    type: e.type
                })
            }