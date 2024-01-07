            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, a = n("666038"),
                l = n("766274");
            i = class e extends a.default {
                static createFromServer(t) {
                    return new e({
                        ...t,
                        user: new l.default(t.user)
                    })
                }
                constructor(e) {
                    var t;
                    super(), this.id = e.id, this.name = e.name, this.type = e.type, this.user = e.user, this.displayName = null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                }
            }