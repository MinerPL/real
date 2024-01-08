            "use strict";
            n.r(t), n.d(t, {
                XBOX_APPLICATION_ID_PREFIX: function() {
                    return l
                },
                default: function() {
                    return s
                }
            });
            var s, r = n("376556"),
                i = n("653047");
            let l = "xbox:";
            s = class extends i.default {
                getIconURL() {
                    return r.default.get("xbox").icon.lightPNG
                }
                constructor(e) {
                    super(e), this.id = "".concat(l).concat(e.name), this.name = e.name
                }
            }