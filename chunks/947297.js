            "use strict";
            n.r(t), n.d(t, {
                XBOX_APPLICATION_ID_PREFIX: function() {
                    return i
                },
                default: function() {
                    return l
                }
            });
            var l, a = n("376556"),
                s = n("653047");
            let i = "xbox:";
            l = class extends s.default {
                getIconURL() {
                    return a.default.get("xbox").icon.lightPNG
                }
                constructor(e) {
                    super(e), this.id = "".concat(i).concat(e.name), this.name = e.name
                }
            }