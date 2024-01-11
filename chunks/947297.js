            "use strict";
            r.r(t), r.d(t, {
                XBOX_APPLICATION_ID_PREFIX: function() {
                    return l
                },
                default: function() {
                    return n
                }
            });
            var n, i = r("376556"),
                s = r("653047");
            let l = "xbox:";
            n = class extends s.default {
                getIconURL() {
                    return i.default.get("xbox").icon.lightPNG
                }
                constructor(e) {
                    super(e), this.id = "".concat(l).concat(e.name), this.name = e.name
                }
            }