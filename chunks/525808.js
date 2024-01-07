            "use strict";
            n.r(t), n.d(t, {
                sortEffectLayers: function() {
                    return r
                }
            });
            let r = e => e.sort((e, t) => {
                var n, r;
                return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (r = t.zIndex) && void 0 !== r ? r : 0)
            })