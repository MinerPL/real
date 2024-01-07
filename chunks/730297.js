            "use strict";
            r.r(e), r.d(e, {
                isAvatarDecorationRecord: function() {
                    return u
                },
                default: function() {
                    return n
                }
            });
            var n, i = r("265586"),
                o = r("200410");
            let u = t => t instanceof n;
            n = class t extends o.default {
                static fromServer(e) {
                    return new t({
                        ...super.fromServer(e),
                        ...e
                    })
                }
                constructor(t) {
                    super(t), this.type = i.CollectiblesItemType.AVATAR_DECORATION, this.asset = t.asset, this.label = t.label
                }
            }