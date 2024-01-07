            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            }), l("222007");
            var n = l("42887");

            function a() {
                let e = n.default.getVideoDevices(),
                    t = Object.entries(e).map(e => {
                        let [t, l] = e;
                        return {
                            id: "camera:" + l.id,
                            name: l.name,
                            url: ""
                        }
                    });
                return t
            }