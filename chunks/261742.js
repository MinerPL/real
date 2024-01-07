            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i = {
                makeMemoizer: function(e) {
                    let s = new Map;
                    return n => {
                        let i = s.get(n);
                        return void 0 === i && (i = e(n), s.set(n, i)), i
                    }
                }
            }