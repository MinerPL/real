            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            }), a("222007");
            var s = a("95410"),
                n = a("689988");
            let l = "formGuidelinesStorageKey";
            class r extends n.default {
                _initialize() {
                    let e = s.default.get(l);
                    null != e && (this.seenForumGuidelines = new Set(e))
                }
                _terminate() {
                    s.default.set(l, this.seenForumGuidelines)
                }
                markAsSeen(e) {
                    this.seenForumGuidelines.add(e), s.default.set(l, this.seenForumGuidelines)
                }
                hasSeen(e) {
                    return this.seenForumGuidelines.has(e)
                }
                constructor(...e) {
                    super(...e), this.seenForumGuidelines = new Set
                }
            }
            var i = new r