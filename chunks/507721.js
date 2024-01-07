            "use strict";

            function r(e, t, n) {
                let r, a;
                for (let o of e.fields) {
                    let e = o.localName;
                    if (o.oneof) {
                        let i = n[o.oneof];
                        if ((null == i ? void 0 : i.oneofKind) == void 0) continue;
                        if (r = i[e], (a = t[o.oneof]).oneofKind = i.oneofKind, void 0 == r) {
                            delete a[e];
                            continue
                        }
                    } else if (r = n[e], a = t, void 0 == r) continue;
                    switch (o.repeat && (a[e].length = r.length), o.kind) {
                        case "scalar":
                        case "enum":
                            if (o.repeat)
                                for (let t = 0; t < r.length; t++) a[e][t] = r[t];
                            else a[e] = r;
                            break;
                        case "message":
                            let i = o.T();
                            if (o.repeat)
                                for (let t = 0; t < r.length; t++) a[e][t] = i.create(r[t]);
                            else void 0 === a[e] ? a[e] = i.create(r) : i.mergePartial(a[e], r);
                            break;
                        case "map":
                            switch (o.V.kind) {
                                case "scalar":
                                case "enum":
                                    Object.assign(a[e], r);
                                    break;
                                case "message":
                                    let s = o.V.T();
                                    for (let t of Object.keys(r)) a[e][t] = s.create(r[t])
                            }
                    }
                }
            }
            n.r(t), n.d(t, {
                reflectionMergePartial: function() {
                    return r
                }
            }), n("222007")