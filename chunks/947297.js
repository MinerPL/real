            "use strict";
            n.r(t), n.d(t, {
                XBOX_APPLICATION_ID_PREFIX: function() {
                    return l
                },
                default: function() {
                    return i
                }
            });
            var i, s = n("376556"),
                r = n("653047");
            let l = "xbox:";
            i = class extends r.default {
                getIconURL() {
                    return s.default.get("xbox").icon.lightPNG
                }
                constructor(e) {
                    super(e), this.id = "".concat(l).concat(e.name), this.name = e.name
                }
            }