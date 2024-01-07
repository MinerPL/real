            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(r("884691"));
            t.default = function(e) {
                var t = e.fill,
                    r = e.width,
                    a = e.height,
                    i = e.style,
                    u = function(e, t) {
                        var r = {};
                        for (var n in e) {
                            if (!(t.indexOf(n) >= 0)) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }(e, ["fill", "width", "height", "style"]);
                return o.default.createElement("svg", n({
                    viewBox: "0 0 24 24",
                    style: n({
                        fill: void 0 === t ? "currentColor" : t,
                        width: void 0 === r ? 24 : r,
                        height: void 0 === a ? 24 : a
                    }, void 0 === i ? {} : i)
                }, u), o.default.createElement("path", {
                    d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
                }))
            }