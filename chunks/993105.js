            "use strict";
            n.r(t), n.d(t, {
                formatSize: function() {
                    return s
                },
                formatKbSize: function() {
                    return a
                }
            });
            var i = n("782340");
            let r = {
                useKibibytes: !1,
                showDecimalForGB: !0,
                useSpace: !0
            };

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                    n = t.useKibibytes ? 1024 : 1e3,
                    s = t.useKibibytes ? 1024 : 1e3,
                    a = Math.ceil(e / n);
                if (a < s) return t.useSpace ? i.default.Messages.FILE_SIZE_MB.format({
                    size: a
                }) : i.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                    size: a
                });
                let o = a / s;
                return o = t.showDecimalForGB ? Math.round(10 * o) / 10 : Math.round(o), t.useSpace ? i.default.Messages.FILE_SIZE_GB.format({
                    size: o
                }) : i.default.Messages.FILE_SIZE_GB_NO_SPACE.format({
                    size: o
                })
            }

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                    n = t.useKibibytes ? 1024 : 1e3,
                    a = t.useKibibytes ? 1024 : 1e3,
                    o = e / n,
                    l = o / a;
                return l >= 1 ? s(o, t) : t.useSpace ? i.default.Messages.FILE_SIZE_KB.format({
                    size: Math.ceil(o)
                }) : i.default.Messages.FILE_SIZE_KB_NO_SPACE.format({
                    size: Math.ceil(o)
                })
            }