            "use strict";
            var r = {
                linear: function(t, n, e, r) {
                    return (e - n) * t / r + n
                },
                easeInQuad: function(t, n, e, r) {
                    return (e - n) * (t /= r) * t + n
                },
                easeOutQuad: function(t, n, e, r) {
                    return -(e - n) * (t /= r) * (t - 2) + n
                },
                easeInOutQuad: function(t, n, e, r) {
                    var u = e - n;
                    return (t /= r / 2) < 1 ? u / 2 * t * t + n : -u / 2 * (--t * (t - 2) - 1) + n
                },
                easeInCubic: function(t, n, e, r) {
                    return (e - n) * (t /= r) * t * t + n
                },
                easeOutCubic: function(t, n, e, r) {
                    return (e - n) * ((t = t / r - 1) * t * t + 1) + n
                },
                easeInOutCubic: function(t, n, e, r) {
                    var u = e - n;
                    return (t /= r / 2) < 1 ? u / 2 * t * t * t + n : u / 2 * ((t -= 2) * t * t + 2) + n
                },
                easeInQuart: function(t, n, e, r) {
                    return (e - n) * (t /= r) * t * t * t + n
                },
                easeOutQuart: function(t, n, e, r) {
                    return -(e - n) * ((t = t / r - 1) * t * t * t - 1) + n
                },
                easeInOutQuart: function(t, n, e, r) {
                    var u = e - n;
                    return (t /= r / 2) < 1 ? u / 2 * t * t * t * t + n : -u / 2 * ((t -= 2) * t * t * t - 2) + n
                },
                easeInQuint: function(t, n, e, r) {
                    return (e - n) * (t /= r) * t * t * t * t + n
                },
                easeOutQuint: function(t, n, e, r) {
                    return (e - n) * ((t = t / r - 1) * t * t * t * t + 1) + n
                },
                easeInOutQuint: function(t, n, e, r) {
                    var u = e - n;
                    return (t /= r / 2) < 1 ? u / 2 * t * t * t * t * t + n : u / 2 * ((t -= 2) * t * t * t * t + 2) + n
                },
                easeInSine: function(t, n, e, r) {
                    var u = e - n;
                    return -u * Math.cos(t / r * (Math.PI / 2)) + u + n
                },
                easeOutSine: function(t, n, e, r) {
                    return (e - n) * Math.sin(t / r * (Math.PI / 2)) + n
                },
                easeInOutSine: function(t, n, e, r) {
                    return -(e - n) / 2 * (Math.cos(Math.PI * t / r) - 1) + n
                },
                easeInExpo: function(t, n, e, r) {
                    return 0 == t ? n : (e - n) * Math.pow(2, 10 * (t / r - 1)) + n
                },
                easeOutExpo: function(t, n, e, r) {
                    var u = e - n;
                    return t == r ? n + u : u * (-Math.pow(2, -10 * t / r) + 1) + n
                },
                easeInOutExpo: function(t, n, e, r) {
                    var u = e - n;
                    return 0 === t ? n : t === r ? n + u : (t /= r / 2) < 1 ? u / 2 * Math.pow(2, 10 * (t - 1)) + n : u / 2 * (-Math.pow(2, -10 * --t) + 2) + n
                },
                easeInCirc: function(t, n, e, r) {
                    return -(e - n) * (Math.sqrt(1 - (t /= r) * t) - 1) + n
                },
                easeOutCirc: function(t, n, e, r) {
                    return (e - n) * Math.sqrt(1 - (t = t / r - 1) * t) + n
                },
                easeInOutCirc: function(t, n, e, r) {
                    var u = e - n;
                    return (t /= r / 2) < 1 ? -u / 2 * (Math.sqrt(1 - t * t) - 1) + n : u / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
                },
                easeInElastic: function(t, n, e, r) {
                    var u, o, i, a = e - n;
                    return (i = 1.70158, o = 0, u = a, 0 === t) ? n : 1 == (t /= r) ? n + a : (!o && (o = .3 * r), u < Math.abs(a) ? (u = a, i = o / 4) : i = o / (2 * Math.PI) * Math.asin(a / u), -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o)) + n)
                },
                easeOutElastic: function(t, n, e, r) {
                    var u, o, i, a = e - n;
                    return (i = 1.70158, o = 0, u = a, 0 === t) ? n : 1 == (t /= r) ? n + a : (!o && (o = .3 * r), u < Math.abs(a) ? (u = a, i = o / 4) : i = o / (2 * Math.PI) * Math.asin(a / u), u * Math.pow(2, -10 * t) * Math.sin((t * r - i) * (2 * Math.PI) / o) + a + n)
                },
                easeInOutElastic: function(t, n, e, r) {
                    var u, o, i, a = e - n;
                    return (i = 1.70158, o = 0, u = a, 0 === t) ? n : 2 == (t /= r / 2) ? n + a : (!o && (o = r * (.3 * 1.5)), u < Math.abs(a) ? (u = a, i = o / 4) : i = o / (2 * Math.PI) * Math.asin(a / u), t < 1) ? -.5 * (u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o)) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o) * .5 + a + n
                },
                easeInBack: function(t, n, e, r, u) {
                    return void 0 === u && (u = 1.70158), (e - n) * (t /= r) * t * ((u + 1) * t - u) + n
                },
                easeOutBack: function(t, n, e, r, u) {
                    return void 0 === u && (u = 1.70158), (e - n) * ((t = t / r - 1) * t * ((u + 1) * t + u) + 1) + n
                },
                easeInOutBack: function(t, n, e, r, u) {
                    var o = e - n;
                    return (void 0 === u && (u = 1.70158), (t /= r / 2) < 1) ? o / 2 * (t * t * (((u *= 1.525) + 1) * t - u)) + n : o / 2 * ((t -= 2) * t * (((u *= 1.525) + 1) * t + u) + 2) + n
                },
                easeInBounce: function(t, n, e, u) {
                    var o, i = e - n;
                    return o = r.easeOutBounce(u - t, 0, i, u), i - o + n
                },
                easeOutBounce: function(t, n, e, r) {
                    var u = e - n;
                    if ((t /= r) < 1 / 2.75) return u * (7.5625 * t * t) + n;
                    if (t < 2 / 2.75) return u * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n;
                    if (t < 2.5 / 2.75) return u * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n;
                    else return u * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
                },
                easeInOutBounce: function(t, n, e, u) {
                    var o, i = e - n;
                    return t < u / 2 ? .5 * (o = r.easeInBounce(2 * t, 0, i, u)) + n : .5 * (o = r.easeOutBounce(2 * t - u, 0, i, u)) + .5 * i + n
                }
            };
            t.exports = r