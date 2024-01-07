            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
            var i = n("627445"),
                a = n.n(i),
                u = n("469520"),
                r = n.n(u);
            async function o(e) {
                let t;
                let n = r.createFile(!1),
                    i = new Promise(e => {
                        n.onReady = e
                    }),
                    u = await e.arrayBuffer();
                for (let e of (u.fileStart = 0, n.appendBuffer(u), n.flush(), await i, a(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
                let o = e.slice(0, t, e.type),
                    s = e.slice(t + 4, t + 8 + 16, e.type);
                return new Blob([o, new Uint8Array([0, 0, 0, 24]), s], {
                    type: e.type
                })
            }