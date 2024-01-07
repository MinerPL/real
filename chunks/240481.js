            "use strict";
            n.r(t), n.d(t, {
                shortenAndLocalizeNumber: function() {
                    return r
                },
                humanizeValue: function() {
                    return s
                },
                parseInteger: function() {
                    return a
                }
            });
            var i = n("782340");

            function r(e) {
                if (e < 1e6) return i.default.Messages.NUMBER_ABBREVIATION_FULL.format({
                    value: e
                });
                let t = (e / 1e6).toFixed(1);
                return i.default.Messages.NUMBER_ABBREVIATION_MILLIONS.format({
                    value: t
                })
            }

            function s(e, t) {
                if (e < 1e3) return i.default.Messages.NUMBER_ABBREVIATION_FULL.format({
                    value: Math.floor(e)
                });
                if (e < 1e6) return i.default.Messages.NUMBER_ABBREVIATION_THOUSANDS.format({
                    value: Math.floor(e / 1e3)
                });
                let n = new Intl.NumberFormat(t, {
                    maximumFractionDigits: 1
                }).format(Math.floor(10 * e / 1e6) / 10);
                return i.default.Messages.NUMBER_ABBREVIATION_MILLIONS.format({
                    value: n
                })
            }

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
                if (null == e) return t;
                let n = parseInt(e);
                return Number.isNaN(n) ? t : n
            }