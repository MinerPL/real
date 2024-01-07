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
                    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                }))
            }