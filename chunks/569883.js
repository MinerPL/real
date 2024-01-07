            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l, r = n("666038");
            l = class e extends r.default {
                static createFromServer(t) {
                    return new e({
                        collectedCount: t.collected_count
                    })
                }
                constructor(e) {
                    super(), this.collectedCount = e.collectedCount
                }
            }