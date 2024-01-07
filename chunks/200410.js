            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return n
                }
            });
            var n, i = r("666038");
            n = class t extends i.default {
                static fromServer(e) {
                    let {
                        sku_id: r,
                        ...n
                    } = e;
                    return new t({
                        ...n,
                        skuId: r
                    })
                }
                constructor(t) {
                    super(), this.id = t.id, this.skuId = t.skuId
                }
            }