            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s, i = n("666038"),
                r = n("766274");
            s = class e extends i.default {
                static createFromServer(t) {
                    return new e({
                        ...t,
                        user: new r.default(t.user)
                    })
                }
                constructor(e) {
                    var t;
                    super(), this.id = e.id, this.name = e.name, this.type = e.type, this.user = e.user, this.displayName = null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                }
            }