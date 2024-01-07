            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var a, n = s("666038"),
                l = s("766274");
            a = class extends n.default {
                constructor(e) {
                    super(), this.id = e.id, this.name = e.name, this.managed = e.managed, this.roles = e.roles, this.requiredColons = e.requiredColons, this.user = new l.default(e.user), this.animated = e.animated, this.available = e.available
                }
            }