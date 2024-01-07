            "use strict";
            n.r(t), n.d(t, {
                createNativeDragSource: function() {
                    return a
                },
                matchNativeItemType: function() {
                    return i
                }
            });
            var r = n("703366"),
                o = n("584561");

            function a(e, t) {
                var n = new o.NativeDragSource(r.nativeTypesConfig[e]);
                return n.loadDataTransfer(t), n
            }

            function i(e) {
                if (!e) return null;
                var t = Array.prototype.slice.call(e.types || []);
                return Object.keys(r.nativeTypesConfig).filter(function(e) {
                    return r.nativeTypesConfig[e].matchesTypes.some(function(e) {
                        return t.indexOf(e) > -1
                    })
                })[0] || null
            }