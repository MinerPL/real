            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, i = n("666038");
            r = class t extends i.default {
                static createFromServer(e) {
                    return new t({
                        collectedCount: e.collected_count
                    })
                }
                constructor(t) {
                    super(), this.collectedCount = t.collectedCount
                }
            }