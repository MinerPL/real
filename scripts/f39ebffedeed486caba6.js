(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62687"], {
        358806: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DOMRectReadOnly: function() {
                    return u
                }
            });
            var n = r("26098"),
                u = function() {
                    function e(e, t, r, u) {
                        return this.x = e, this.y = t, this.width = r, this.height = u, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, (0, n.freeze)(this)
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            x: this.x,
                            y: this.y,
                            top: this.top,
                            right: this.right,
                            bottom: this.bottom,
                            left: this.left,
                            width: this.width,
                            height: this.height
                        }
                    }, e.fromRect = function(t) {
                        return new e(t.x, t.y, t.width, t.height)
                    }, e
                }()
        },
        654269: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObservation: function() {
                    return o
                }
            });
            var n = r("252089"),
                u = r("334935"),
                a = r("467980"),
                o = function() {
                    function e(e, t) {
                        this.target = e, this.observedBox = t || n.ResizeObserverBoxOptions.CONTENT_BOX, this.lastReportedSize = {
                            inlineSize: 0,
                            blockSize: 0
                        }
                    }
                    return e.prototype.isActive = function() {
                        var e, t = (0, u.calculateBoxSize)(this.target, this.observedBox, !0);
                        if (e = this.target, !(0, a.isSVG)(e) && !(0, a.isReplacedElement)(e) && "inline" === getComputedStyle(e).display) this.lastReportedSize = t;
                        return this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize || !1
                    }, e
                }()
        },
        693935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserver: function() {
                    return a
                }
            });
            var n = r("994853"),
                u = r("467980"),
                a = function() {
                    function e(e) {
                        if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                        if ("function" != typeof e) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                        n.ResizeObserverController.connect(this, e)
                    }
                    return e.prototype.observe = function(e, t) {
                        if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!(0, u.isElement)(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        n.ResizeObserverController.observe(this, e, t)
                    }, e.prototype.unobserve = function(e) {
                        if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!(0, u.isElement)(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        n.ResizeObserverController.unobserve(this, e)
                    }, e.prototype.disconnect = function() {
                        n.ResizeObserverController.disconnect(this)
                    }, e.toString = function() {
                        return "function ResizeObserver () { [polyfill code] }"
                    }, e
                }()
        },
        252089: function(e, t, r) {
            "use strict";
            var n, u;
            r.r(t), r.d(t, {
                ResizeObserverBoxOptions: function() {
                    return n
                }
            }), (u = n || (n = {})).BORDER_BOX = "border-box", u.CONTENT_BOX = "content-box", u.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
        },
        994853: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserverController: function() {
                    return l
                }
            });
            var n = r("917712"),
                u = r("654269"),
                a = r("170489"),
                o = r("243546"),
                i = new WeakMap,
                s = function(e, t) {
                    for (var r = 0; r < e.length; r += 1)
                        if (e[r].target === t) return r;
                    return -1
                },
                l = function() {
                    function e() {}
                    return e.connect = function(e, t) {
                        var r = new a.ResizeObserverDetail(e, t);
                        i.set(e, r)
                    }, e.observe = function(e, t, r) {
                        var a = i.get(e),
                            l = 0 === a.observationTargets.length;
                        0 > s(a.observationTargets, t) && (l && o.resizeObservers.push(a), a.observationTargets.push(new u.ResizeObservation(t, r && r.box)), (0, n.updateCount)(1), n.scheduler.schedule())
                    }, e.unobserve = function(e, t) {
                        var r = i.get(e),
                            u = s(r.observationTargets, t),
                            a = 1 === r.observationTargets.length;
                        u >= 0 && (a && o.resizeObservers.splice(o.resizeObservers.indexOf(r), 1), r.observationTargets.splice(u, 1), (0, n.updateCount)(-1))
                    }, e.disconnect = function(e) {
                        var t = this,
                            r = i.get(e);
                        r.observationTargets.slice().forEach(function(r) {
                            return t.unobserve(e, r.target)
                        }), r.activeTargets.splice(0, r.activeTargets.length)
                    }, e
                }()
        },
        170489: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserverDetail: function() {
                    return n
                }
            });
            var n = function(e, t) {
                this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t
            }
        },
        987291: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserverEntry: function() {
                    return a
                }
            });
            var n = r("334935"),
                u = r("26098"),
                a = function(e) {
                    var t = (0, n.calculateBoxSizes)(e);
                    this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = (0, u.freeze)([t.borderBoxSize]), this.contentBoxSize = (0, u.freeze)([t.contentBoxSize]), this.devicePixelContentBoxSize = (0, u.freeze)([t.devicePixelContentBoxSize])
                }
        },
        235583: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserverSize: function() {
                    return u
                }
            });
            var n = r("26098"),
                u = function(e, t) {
                    this.inlineSize = e, this.blockSize = t, (0, n.freeze)(this)
                }
        },
        211974: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                broadcastActiveObservations: function() {
                    return i
                }
            });
            var n = r("243546"),
                u = r("987291"),
                a = r("909639"),
                o = r("334935"),
                i = function() {
                    var e = 1 / 0,
                        t = [];
                    n.resizeObservers.forEach(function(r) {
                        if (0 !== r.activeTargets.length) {
                            var n = [];
                            r.activeTargets.forEach(function(t) {
                                var r = new u.ResizeObserverEntry(t.target),
                                    i = (0, a.calculateDepthForNode)(t.target);
                                n.push(r), t.lastReportedSize = (0, o.calculateBoxSize)(t.target, t.observedBox), i < e && (e = i)
                            }), t.push(function() {
                                r.callback.call(r.observer, n, r.observer)
                            }), r.activeTargets.splice(0, r.activeTargets.length)
                        }
                    });
                    for (var r = 0; r < t.length; r++)(0, t[r])();
                    return e
                }
        },
        334935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                calculateBoxSize: function() {
                    return C
                },
                calculateBoxSizes: function() {
                    return p
                }
            });
            var n = r("252089"),
                u = r("235583"),
                a = r("358806"),
                o = r("467980"),
                i = r("26098"),
                s = r("344502"),
                l = new WeakMap,
                c = /auto|scroll/,
                d = /^tb|vertical/,
                f = /msie|trident/i.test(s.global.navigator && s.global.navigator.userAgent),
                D = function(e) {
                    return parseFloat(e || "0")
                },
                h = function(e, t, r) {
                    return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = !1), new u.ResizeObserverSize((r ? t : e) || 0, (r ? e : t) || 0)
                },
                v = (0, i.freeze)({
                    devicePixelContentBoxSize: h(),
                    borderBoxSize: h(),
                    contentBoxSize: h(),
                    contentRect: new a.DOMRectReadOnly(0, 0, 0, 0)
                }),
                p = function(e, t) {
                    if (void 0 === t && (t = !1), l.has(e) && !t) return l.get(e);
                    if ((0, o.isHidden)(e)) return l.set(e, v), v;
                    var r = getComputedStyle(e),
                        n = (0, o.isSVG)(e) && e.ownerSVGElement && e.getBBox(),
                        u = !f && "border-box" === r.boxSizing,
                        s = d.test(r.writingMode || ""),
                        p = !n && c.test(r.overflowY || ""),
                        C = !n && c.test(r.overflowX || ""),
                        g = n ? 0 : D(r.paddingTop),
                        B = n ? 0 : D(r.paddingRight),
                        E = n ? 0 : D(r.paddingBottom),
                        m = n ? 0 : D(r.paddingLeft),
                        A = n ? 0 : D(r.borderTopWidth),
                        F = n ? 0 : D(r.borderRightWidth),
                        b = n ? 0 : D(r.borderBottomWidth),
                        y = n ? 0 : D(r.borderLeftWidth),
                        w = m + B,
                        O = g + E,
                        x = y + F,
                        k = A + b,
                        P = C ? e.offsetHeight - k - e.clientHeight : 0,
                        R = p ? e.offsetWidth - x - e.clientWidth : 0,
                        S = n ? n.width : D(r.width) - (u ? w + x : 0) - R,
                        T = n ? n.height : D(r.height) - (u ? O + k : 0) - P,
                        j = S + w + R + x,
                        N = T + O + P + k,
                        M = (0, i.freeze)({
                            devicePixelContentBoxSize: h(Math.round(S * devicePixelRatio), Math.round(T * devicePixelRatio), s),
                            borderBoxSize: h(j, N, s),
                            contentBoxSize: h(S, T, s),
                            contentRect: new a.DOMRectReadOnly(m, g, S, T)
                        });
                    return l.set(e, M), M
                },
                C = function(e, t, r) {
                    var u = p(e, r),
                        a = u.borderBoxSize,
                        o = u.contentBoxSize,
                        i = u.devicePixelContentBoxSize;
                    switch (t) {
                        case n.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                            return i;
                        case n.ResizeObserverBoxOptions.BORDER_BOX:
                            return a;
                        default:
                            return o
                    }
                }
        },
        909639: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                calculateDepthForNode: function() {
                    return u
                }
            });
            var n = r("467980"),
                u = function(e) {
                    if ((0, n.isHidden)(e)) return 1 / 0;
                    for (var t = 0, r = e.parentNode; r;) t += 1, r = r.parentNode;
                    return t
                }
        },
        196134: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                deliverResizeLoopError: function() {
                    return u
                }
            });
            var n = "ResizeObserver loop completed with undelivered notifications.",
                u = function() {
                    var e;
                    "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
                        message: n
                    }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = n), window.dispatchEvent(e)
                }
        },
        650536: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                gatherActiveObservationsAtDepth: function() {
                    return a
                }
            });
            var n = r("243546"),
                u = r("909639"),
                a = function(e) {
                    n.resizeObservers.forEach(function(t) {
                        t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(r) {
                            r.isActive() && ((0, u.calculateDepthForNode)(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r))
                        })
                    })
                }
        },
        763985: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasActiveObservations: function() {
                    return u
                }
            });
            var n = r("243546"),
                u = function() {
                    return n.resizeObservers.some(function(e) {
                        return e.activeTargets.length > 0
                    })
                }
        },
        360668: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasSkippedObservations: function() {
                    return u
                }
            });
            var n = r("243546"),
                u = function() {
                    return n.resizeObservers.some(function(e) {
                        return e.skippedTargets.length > 0
                    })
                }
        },
        871477: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserver: function() {
                    return n.ResizeObserver
                }
            });
            var n = r("693935");
            r("987291"), r("235583")
        },
        467980: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isSVG: function() {
                    return n
                },
                isHidden: function() {
                    return u
                },
                isElement: function() {
                    return a
                },
                isReplacedElement: function() {
                    return o
                }
            });
            var n = function(e) {
                    return e instanceof SVGElement && "getBBox" in e
                },
                u = function(e) {
                    if (n(e)) {
                        var t = e.getBBox(),
                            r = t.width,
                            u = t.height;
                        return !r && !u
                    }
                    var a = e.offsetWidth,
                        o = e.offsetHeight;
                    return !(a || o || e.getClientRects().length)
                },
                a = function(e) {
                    if (e instanceof Element) return !0;
                    var t, r = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
                    return !!(r && e instanceof r.Element)
                },
                o = function(e) {
                    switch (e.tagName) {
                        case "INPUT":
                            if ("image" !== e.type) break;
                        case "VIDEO":
                        case "AUDIO":
                        case "EMBED":
                        case "OBJECT":
                        case "CANVAS":
                        case "IFRAME":
                        case "IMG":
                            return !0
                    }
                    return !1
                }
        },
        26098: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                freeze: function() {
                    return n
                }
            });
            var n = function(e) {
                return Object.freeze(e)
            }
        },
        344502: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                global: function() {
                    return n
                }
            });
            var n = "undefined" != typeof window ? window : {}
        },
        812587: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                process: function() {
                    return s
                }
            });
            var n = r("763985"),
                u = r("360668"),
                a = r("196134"),
                o = r("211974"),
                i = r("650536"),
                s = function() {
                    var e = 0;
                    for ((0, i.gatherActiveObservationsAtDepth)(e);
                        (0, n.hasActiveObservations)();) e = (0, o.broadcastActiveObservations)(), (0, i.gatherActiveObservationsAtDepth)(e);
                    return (0, u.hasSkippedObservations)() && (0, a.deliverResizeLoopError)(), e > 0
                }
        },
        194530: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                queueMicroTask: function() {
                    return a
                }
            });
            var n, u = [],
                a = function(e) {
                    if (!n) {
                        var t = 0,
                            r = document.createTextNode("");
                        new MutationObserver(function() {
                            return u.splice(0).forEach(function(e) {
                                return e()
                            })
                        }).observe(r, {
                            characterData: !0
                        }), n = function() {
                            r.textContent = "".concat(t ? t-- : t++)
                        }
                    }
                    u.push(e), n()
                }
        },
        118141: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                queueResizeObserver: function() {
                    return u
                }
            });
            var n = r("194530"),
                u = function(e) {
                    (0, n.queueMicroTask)(function() {
                        requestAnimationFrame(e)
                    })
                }
        },
        243546: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                resizeObservers: function() {
                    return n
                }
            });
            var n = []
        },
        917712: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                scheduler: function() {
                    return d
                },
                updateCount: function() {
                    return f
                }
            });
            var n = r("812587"),
                u = r("344502"),
                a = r("118141"),
                o = 0,
                i = {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                },
                s = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                l = function(e) {
                    return void 0 === e && (e = 0), Date.now() + e
                },
                c = !1,
                d = new(function() {
                    function e() {
                        var e = this;
                        this.stopped = !0, this.listener = function() {
                            return e.schedule()
                        }
                    }
                    return e.prototype.run = function(e) {
                        var t = this;
                        if (void 0 === e && (e = 250), !c) {
                            c = !0;
                            var r = l(e);
                            (0, a.queueResizeObserver)(function() {
                                var u = !1;
                                try {
                                    u = (0, n.process)()
                                } finally {
                                    if (c = !1, e = r - l(), !o) return;
                                    u ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
                                }
                            })
                        }
                    }, e.prototype.schedule = function() {
                        this.stop(), this.run()
                    }, e.prototype.observe = function() {
                        var e = this,
                            t = function() {
                                return e.observer && e.observer.observe(document.body, i)
                            };
                        document.body ? t() : u.global.addEventListener("DOMContentLoaded", t)
                    }, e.prototype.start = function() {
                        var e = this;
                        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), s.forEach(function(t) {
                            return u.global.addEventListener(t, e.listener, !0)
                        }))
                    }, e.prototype.stop = function() {
                        var e = this;
                        !this.stopped && (this.observer && this.observer.disconnect(), s.forEach(function(t) {
                            return u.global.removeEventListener(t, e.listener, !0)
                        }), this.stopped = !0)
                    }, e
                }()),
                f = function(e) {
                    !o && e > 0 && d.start(), (o += e) || d.stop()
                }
        },
        165826: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            for (var n = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), u = {
                    alt: "altKey",
                    control: "ctrlKey",
                    meta: "metaKey",
                    shift: "shiftKey"
                }, a = {
                    add: "+",
                    break: "pause",
                    cmd: "meta",
                    command: "meta",
                    ctl: "control",
                    ctrl: "control",
                    del: "delete",
                    down: "arrowdown",
                    esc: "escape",
                    ins: "insert",
                    left: "arrowleft",
                    mod: n ? "meta" : "control",
                    opt: "alt",
                    option: "alt",
                    return: "enter",
                    right: "arrowright",
                    space: " ",
                    spacebar: " ",
                    up: "arrowup",
                    win: "meta",
                    windows: "meta"
                }, o = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    control: 17,
                    alt: 18,
                    pause: 19,
                    capslock: 20,
                    escape: 27,
                    " ": 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    insert: 45,
                    delete: 46,
                    meta: 91,
                    numlock: 144,
                    scrolllock: 145,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                }, i = 1; i < 20; i++) o["f" + i] = 111 + i;

            function s(e, t, r) {
                t && !("byKey" in t) && (r = t, t = null), !Array.isArray(e) && (e = [e]);
                var n = e.map(function(e) {
                        return l(e, t)
                    }),
                    u = function(e) {
                        return n.some(function(t) {
                            return c(t, e)
                        })
                    };
                return null == r ? u : u(r)
            }

            function l(e, t) {
                var r = t && t.byKey,
                    n = {},
                    a = (e = e.replace("++", "+add")).split("+"),
                    o = a.length;
                for (var i in u) n[u[i]] = !1;
                var s = !0,
                    l = !1,
                    c = void 0;
                try {
                    for (var D, h = a[Symbol.iterator](); !(s = (D = h.next()).done); s = !0) {
                        var v = D.value,
                            p = v.endsWith("?") && v.length > 1;
                        p && (v = v.slice(0, -1));
                        var C = f(v),
                            g = u[C];
                        (1 === o || !g) && (r ? n.key = C : n.which = d(v)), g && (n[g] = !p || null)
                    }
                } catch (e) {
                    l = !0, c = e
                } finally {
                    try {
                        !s && h.return && h.return()
                    } finally {
                        if (l) throw c
                    }
                }
                return n
            }

            function c(e, t) {
                for (var r in e) {
                    var n = e[r],
                        u = void 0;
                    if (null != n) {
                        if ((null != (u = "key" === r && null != t.key ? t.key.toLowerCase() : "which" === r ? 91 === n && 93 === t.which ? 91 : t.which : t[r]) || !1 !== n) && u !== n) return !1
                    }
                }
                return !0
            }

            function d(e) {
                return o[e = f(e)] || e.toUpperCase().charCodeAt(0)
            }

            function f(e) {
                return e = a[e = e.toLowerCase()] || e
            }
            t.default = s, t.isHotkey = s, t.isCodeHotkey = function(e, t) {
                return s(e, t)
            }, t.isKeyHotkey = function(e, t) {
                return s(e, {
                    byKey: !0
                }, t)
            }, t.parseHotkey = l, t.compareHotkey = c, t.toKeyCode = d, t.toKeyName = f
        },
        87682: function(e, t, r) {
            var n = r("390493");
            "use strict";

            function u(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
            }

            function a(e, t) {
                for (var r, n = "", u = 0, a = -1, o = 0, i = 0; i <= e.length; ++i) {
                    if (i < e.length) r = e.charCodeAt(i);
                    else if (47 === r) break;
                    else r = 47;
                    if (47 === r) {
                        if (a === i - 1 || 1 === o);
                        else if (a !== i - 1 && 2 === o) {
                            if (n.length < 2 || 2 !== u || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) {
                                if (n.length > 2) {
                                    var s = n.lastIndexOf("/");
                                    if (s !== n.length - 1) {
                                        -1 === s ? (n = "", u = 0) : u = (n = n.slice(0, s)).length - 1 - n.lastIndexOf("/"), a = i, o = 0;
                                        continue
                                    }
                                } else if (2 === n.length || 1 === n.length) {
                                    n = "", u = 0, a = i, o = 0;
                                    continue
                                }
                            }
                            t && (n.length > 0 ? n += "/.." : n = "..", u = 2)
                        } else n.length > 0 ? n += "/" + e.slice(a + 1, i) : n = e.slice(a + 1, i), u = i - a - 1;
                        a = i, o = 0
                    } else 46 === r && -1 !== o ? ++o : o = -1
                }
                return n
            }
            var o = {
                resolve: function() {
                    for (var e, t, r = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) i >= 0 ? t = arguments[i] : (void 0 === e && (e = n.cwd()), t = e), u(t), 0 !== t.length && (r = t + "/" + r, o = 47 === t.charCodeAt(0));
                    if (r = a(r, !o), o) return r.length > 0 ? "/" + r : "/";
                    if (r.length > 0) return r;
                    return "."
                },
                normalize: function(e) {
                    if (u(e), 0 === e.length) return ".";
                    var t = 47 === e.charCodeAt(0),
                        r = 47 === e.charCodeAt(e.length - 1);
                    return (0 === (e = a(e, !t)).length && !t && (e = "."), e.length > 0 && r && (e += "/"), t) ? "/" + e : e
                },
                isAbsolute: function(e) {
                    return u(e), e.length > 0 && 47 === e.charCodeAt(0)
                },
                join: function() {
                    if (0 == arguments.length) return ".";
                    for (var e, t = 0; t < arguments.length; ++t) {
                        var r = arguments[t];
                        u(r), r.length > 0 && (void 0 === e ? e = r : e += "/" + r)
                    }
                    return void 0 === e ? "." : o.normalize(e)
                },
                relative: function(e, t) {
                    if (u(e), u(t), e === t) return "";
                    if (e = o.resolve(e), e === (t = o.resolve(t))) return "";
                    for (var r = 1; r < e.length && 47 === e.charCodeAt(r); ++r);
                    for (var n = e.length, a = n - r, i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
                    for (var s = t.length - i, l = a < s ? a : s, c = -1, d = 0; d <= l; ++d) {
                        if (d === l) {
                            if (s > l) {
                                if (47 === t.charCodeAt(i + d)) return t.slice(i + d + 1);
                                if (0 === d) return t.slice(i + d)
                            } else a > l && (47 === e.charCodeAt(r + d) ? c = d : 0 === d && (c = 0));
                            break
                        }
                        var f = e.charCodeAt(r + d);
                        if (f !== t.charCodeAt(i + d)) break;
                        47 === f && (c = d)
                    }
                    var D = "";
                    for (d = r + c + 1; d <= n; ++d)(d === n || 47 === e.charCodeAt(d)) && (0 === D.length ? D += ".." : D += "/..");
                    return D.length > 0 ? D + t.slice(i + c) : (i += c, 47 === t.charCodeAt(i) && ++i, t.slice(i))
                },
                _makeLong: function(e) {
                    return e
                },
                dirname: function(e) {
                    if (u(e), 0 === e.length) return ".";
                    for (var t = e.charCodeAt(0), r = 47 === t, n = -1, a = !0, o = e.length - 1; o >= 1; --o)
                        if (47 === (t = e.charCodeAt(o))) {
                            if (!a) {
                                n = o;
                                break
                            }
                        } else a = !1;
                    return -1 === n ? r ? "/" : "." : r && 1 === n ? "//" : e.slice(0, n)
                },
                basename: function(e, t) {
                    if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
                    u(e);
                    var r, n = 0,
                        a = -1,
                        o = !0;
                    if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                        if (t.length === e.length && t === e) return "";
                        var i = t.length - 1,
                            s = -1;
                        for (r = e.length - 1; r >= 0; --r) {
                            var l = e.charCodeAt(r);
                            if (47 === l) {
                                if (!o) {
                                    n = r + 1;
                                    break
                                }
                            } else - 1 === s && (o = !1, s = r + 1), i >= 0 && (l === t.charCodeAt(i) ? -1 == --i && (a = r) : (i = -1, a = s))
                        }
                        return n === a ? a = s : -1 === a && (a = e.length), e.slice(n, a)
                    }
                    for (r = e.length - 1; r >= 0; --r)
                        if (47 === e.charCodeAt(r)) {
                            if (!o) {
                                n = r + 1;
                                break
                            }
                        } else - 1 === a && (o = !1, a = r + 1);
                    return -1 === a ? "" : e.slice(n, a)
                },
                extname: function(e) {
                    u(e);
                    for (var t = -1, r = 0, n = -1, a = !0, o = 0, i = e.length - 1; i >= 0; --i) {
                        var s = e.charCodeAt(i);
                        if (47 === s) {
                            if (!a) {
                                r = i + 1;
                                break
                            }
                            continue
                        } - 1 === n && (a = !1, n = i + 1), 46 === s ? -1 === t ? t = i : 1 !== o && (o = 1) : -1 !== t && (o = -1)
                    }
                    return -1 === t || -1 === n || 0 === o || 1 === o && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
                },
                format: function(e) {
                    var t, r, n;
                    if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    return r = (t = e).dir || t.root, n = t.base || (t.name || "") + (t.ext || ""), r ? r === t.root ? r + n : r + "/" + n : n
                },
                parse: function(e) {
                    u(e);
                    var t, r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (0 === e.length) return r;
                    var n = e.charCodeAt(0),
                        a = 47 === n;
                    a ? (r.root = "/", t = 1) : t = 0;
                    for (var o = -1, i = 0, s = -1, l = !0, c = e.length - 1, d = 0; c >= t; --c) {
                        if (47 === (n = e.charCodeAt(c))) {
                            if (!l) {
                                i = c + 1;
                                break
                            }
                            continue
                        } - 1 === s && (l = !1, s = c + 1), 46 === n ? -1 === o ? o = c : 1 !== d && (d = 1) : -1 !== o && (d = -1)
                    }
                    return -1 === o || -1 === s || 0 === d || 1 === d && o === s - 1 && o === i + 1 ? -1 !== s && (0 === i && a ? r.base = r.name = e.slice(1, s) : r.base = r.name = e.slice(i, s)) : (0 === i && a ? (r.name = e.slice(1, o), r.base = e.slice(1, s)) : (r.name = e.slice(i, o), r.base = e.slice(i, s)), r.ext = e.slice(o, s)), i > 0 ? r.dir = e.slice(0, i - 1) : a && (r.dir = "/"), r
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            o.posix = o, e.exports = o
        },
        390266: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("604676");

            function u(e) {
                return e === Object(e) && 0 !== Object.keys(e).length
            }
            var a = function(e, t) {
                var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
                if (u(t) && "function" == typeof t.behavior) return t.behavior(r ? (0, n.default)(e, t) : []);
                if (r) {
                    var a, o = !1 === (a = t) ? {
                        block: "end",
                        inline: "nearest"
                    } : u(a) ? a : {
                        block: "start",
                        inline: "nearest"
                    };
                    return function(e, t) {
                        void 0 === t && (t = "auto");
                        var r = "scrollBehavior" in document.body.style;
                        e.forEach(function(e) {
                            var n = e.el,
                                u = e.top,
                                a = e.left;
                            n.scroll && r ? n.scroll({
                                top: u,
                                left: a,
                                behavior: t
                            }) : (n.scrollTop = u, n.scrollLeft = a)
                        })
                    }((0, n.default)(e, o), o.behavior)
                }
            }
        },
        278419: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Editable: function() {
                    return tf
                },
                ReactEditor: function() {
                    return em
                },
                Slate: function() {
                    return tA
                },
                useFocused: function() {
                    return tB
                },
                useSelected: function() {
                    return eV
                },
                useSlateStatic: function() {
                    return ej
                },
                withReact: function() {
                    return tx
                }
            });
            var n = r("717837"),
                u = r.n(n),
                a = r("478098"),
                o = r.n(a),
                i = r("229042"),
                s = r.n(i),
                l = r("884691"),
                c = r.n(l),
                d = r("390266"),
                f = r("987295"),
                D = r("871477"),
                h = r("165826"),
                v = r("817736"),
                p = r.n(v);

            function C(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e, t) {
                if (null == e) return {};
                var r, n, u = function(e, t) {
                    if (null == e) return {};
                    var r, n, u = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && (u[r] = e[r]);
                    return u
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        if (r = a[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                    }
                }
                return u
            }
            var B = 0;
            class E {
                constructor() {
                    this.id = "".concat(B++)
                }
            }
            var m = new WeakMap,
                A = new WeakMap,
                F = new WeakMap,
                b = new WeakMap,
                y = new WeakMap,
                w = new WeakMap,
                O = new WeakMap,
                x = new WeakMap,
                k = new WeakMap,
                P = new WeakMap,
                R = new WeakMap,
                S = new WeakMap,
                T = new WeakMap,
                j = new WeakMap,
                N = new WeakMap,
                M = new WeakMap,
                z = new WeakMap,
                W = new WeakMap,
                _ = new WeakMap,
                L = new WeakMap,
                I = new WeakMap,
                q = Symbol("placeholder"),
                V = Symbol("mark-placeholder"),
                H = globalThis.Text,
                K = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
                U = e => X(e) && 8 === e.nodeType,
                $ = e => X(e) && 1 === e.nodeType,
                X = e => {
                    var t = K(e);
                    return !!t && e instanceof t.Node
                },
                J = e => {
                    var t = e && e.anchorNode && K(e.anchorNode);
                    return !!t && e instanceof t.Selection
                },
                Y = e => X(e) && 3 === e.nodeType,
                G = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
                Z = e => {
                    var [t, r] = e;
                    if ($(t) && t.childNodes.length) {
                        var n = r === t.childNodes.length,
                            u = n ? r - 1 : r;
                        for ([t, u] = ee(t, u, n ? "backward" : "forward"), n = u < r; $(t) && t.childNodes.length;) {
                            var a = n ? t.childNodes.length - 1 : 0;
                            t = et(t, a, n ? "backward" : "forward")
                        }
                        r = n && null != t.textContent ? t.textContent.length : 0
                    }
                    return [t, r]
                },
                Q = e => {
                    for (var t = e && e.parentNode; t;) {
                        if ("[object ShadowRoot]" === t.toString()) return !0;
                        t = t.parentNode
                    }
                    return !1
                },
                ee = (e, t, r) => {
                    for (var {
                            childNodes: n
                        } = e, u = n[t], a = t, o = !1, i = !1;
                        (U(u) || $(u) && 0 === u.childNodes.length || $(u) && "false" === u.getAttribute("contenteditable")) && (!o || !i);) {
                        ;
                        if (a >= n.length) {
                            o = !0, a = t - 1, r = "backward";
                            continue
                        }
                        if (a < 0) {
                            i = !0, a = t + 1, r = "forward";
                            continue
                        }
                        u = n[a], t = a, a += "forward" === r ? 1 : -1
                    }
                    return [u, t]
                },
                et = (e, t, r) => {
                    var [n] = ee(e, t, r);
                    return n
                },
                er = e => {
                    var t = "";
                    if (Y(e) && e.nodeValue) return e.nodeValue;
                    if ($(e)) {
                        for (var r of Array.from(e.childNodes)) t += er(r);
                        var n = getComputedStyle(e).getPropertyValue("display");
                        ("block" === n || "list" === n || "BR" === e.tagName) && (t += "\n")
                    }
                    return t
                },
                en = /data-slate-fragment="(.+?)"/m,
                eu = e => {
                    var [, t] = e.getData("text/html").match(en) || [];
                    return t
                },
                ea = (e, t, r) => {
                    var {
                        target: n
                    } = t;
                    if ($(n) && n.matches('[contentEditable="false"]')) return !1;
                    var {
                        document: u
                    } = em.getWindow(e);
                    if (u.contains(n)) return em.hasDOMNode(e, n, {
                        editable: !0
                    });
                    var a = r.find(e => {
                        var {
                            addedNodes: t,
                            removedNodes: r
                        } = e;
                        for (var u of t)
                            if (u === n || u.contains(n)) return !0;
                        for (var a of r)
                            if (a === n || a.contains(n)) return !0
                    });
                    return !!a && a !== t && ea(e, a, r)
                },
                eo = parseInt(c.version.split(".")[0], 10) >= 17,
                ei = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                es = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
                el = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
                ec = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                ed = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                ef = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
                eD = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
                eh = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
                ev = el && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
                ep = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
                eC = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
                eg = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
                eB = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
                eE = (!eh || !ev) && !ef && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
                em = {
                    isComposing: e => !!S.get(e),
                    getWindow(e) {
                        var t = F.get(e);
                        if (!t) throw Error("Unable to find a host window element for this editor");
                        return t
                    },
                    findKey(e, t) {
                        var r = x.get(t);
                        return !r && (r = new E, x.set(t, r)), r
                    },
                    findPath(e, t) {
                        for (var r = [], n = t;;) {
                            var u = A.get(n);
                            if (null == u) {
                                if (f.Editor.isEditor(n)) return r;
                                break
                            }
                            var a = m.get(n);
                            if (null == a) break;
                            r.unshift(a), n = u
                        }
                        throw Error("Unable to find the path for Slate node: ".concat(f.Scrubber.stringify(t)))
                    },
                    findDocumentOrShadowRoot(e) {
                        var t = em.toDOMNode(e, e),
                            r = t.getRootNode();
                        return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : t.ownerDocument
                    },
                    isFocused: e => !!R.get(e),
                    isReadOnly: e => !!P.get(e),
                    blur(e) {
                        var t = em.toDOMNode(e, e),
                            r = em.findDocumentOrShadowRoot(e);
                        R.set(e, !1), r.activeElement === t && t.blur()
                    },
                    focus(e) {
                        var t = em.toDOMNode(e, e),
                            r = em.findDocumentOrShadowRoot(e);
                        R.set(e, !0), r.activeElement !== t && t.focus({
                            preventScroll: !0
                        })
                    },
                    deselect(e) {
                        var {
                            selection: t
                        } = e, r = em.findDocumentOrShadowRoot(e).getSelection();
                        r && r.rangeCount > 0 && r.removeAllRanges(), t && f.Transforms.deselect(e)
                    },
                    hasDOMNode(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                editable: u = !1
                            } = n,
                            a = em.toDOMNode(e, e);
                        try {
                            r = $(t) ? t : t.parentElement
                        } catch (e) {
                            if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
                        }
                        return !!r && r.closest("[data-slate-editor]") === a && (!u || !!r.isContentEditable || "boolean" == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === a || !!r.getAttribute("data-slate-zero-width"))
                    },
                    insertData(e, t) {
                        e.insertData(t)
                    },
                    insertFragmentData: (e, t) => e.insertFragmentData(t),
                    insertTextData: (e, t) => e.insertTextData(t),
                    setFragmentData(e, t, r) {
                        e.setFragmentData(t, r)
                    },
                    toDOMNode(e, t) {
                        var r = k.get(e),
                            n = f.Editor.isEditor(t) ? b.get(e) : null == r ? void 0 : r.get(em.findKey(e, t));
                        if (!n) throw Error("Cannot resolve a DOM node from Slate node: ".concat(f.Scrubber.stringify(t)));
                        return n
                    },
                    toDOMPoint(e, t) {
                        var [r] = f.Editor.node(e, t.path), n = em.toDOMNode(e, r);
                        f.Editor.void(e, {
                            at: t
                        }) && (t = {
                            path: t.path,
                            offset: 0
                        });
                        for (var u = Array.from(n.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), a = 0, o = 0; o < u.length; o++) {
                            var i = u[o],
                                s = i.childNodes[0];
                            if (null != s && null != s.textContent) {
                                var {
                                    length: l
                                } = s.textContent, c = i.getAttribute("data-slate-length"), d = a + (null == c ? l : parseInt(c, 10)), D = u[o + 1];
                                if (t.offset === d && null != D && D.hasAttribute("data-slate-mark-placeholder")) {
                                    var h, v, p = D.childNodes[0];
                                    h = [p instanceof H ? p : D, null !== (v = D.textContent) && void 0 !== v && v.startsWith("\uFEFF") ? 1 : 0];
                                    break
                                }
                                if (t.offset <= d) {
                                    h = [s, Math.min(l, Math.max(0, t.offset - a))];
                                    break
                                }
                                a = d
                            }
                        }
                        if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(f.Scrubber.stringify(t)));
                        return h
                    },
                    toDOMRange(e, t) {
                        var {
                            anchor: r,
                            focus: n
                        } = t, u = f.Range.isBackward(t), a = em.toDOMPoint(e, r), o = f.Range.isCollapsed(t) ? a : em.toDOMPoint(e, n), i = em.getWindow(e).document.createRange(), [s, l] = u ? o : a, [c, d] = u ? a : o, D = !!($(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"), h = !!($(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
                        return i.setStart(s, D ? 1 : l), i.setEnd(c, h ? 1 : d), i
                    },
                    toSlateNode(e, t) {
                        var r = $(t) ? t : t.parentElement;
                        r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
                        var n = r ? w.get(r) : null;
                        if (!n) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
                        return n
                    },
                    findEventRange(e, t) {
                        "nativeEvent" in t && (t = t.nativeEvent);
                        var r, {
                            clientX: n,
                            clientY: u,
                            target: a
                        } = t;
                        if (null == n || null == u) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        var o = em.toSlateNode(e, t.target),
                            i = em.findPath(e, o);
                        if (f.Element.isElement(o) && f.Editor.isVoid(e, o)) {
                            var s = a.getBoundingClientRect(),
                                l = e.isInline(o) ? n - s.left < s.left + s.width - n : u - s.top < s.top + s.height - u,
                                c = f.Editor.point(e, i, {
                                    edge: l ? "start" : "end"
                                }),
                                d = l ? f.Editor.before(e, c) : f.Editor.after(e, c);
                            if (d) return f.Editor.range(e, d)
                        }
                        var {
                            document: D
                        } = em.getWindow(e);
                        if (D.caretRangeFromPoint) r = D.caretRangeFromPoint(n, u);
                        else {
                            var h = D.caretPositionFromPoint(n, u);
                            h && ((r = D.createRange()).setStart(h.offsetNode, h.offset), r.setEnd(h.offsetNode, h.offset))
                        }
                        if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        return em.toSlateRange(e, r, {
                            exactMatch: !1,
                            suppressThrow: !1
                        })
                    },
                    toSlatePoint(e, t, r) {
                        var {
                            exactMatch: n,
                            suppressThrow: u
                        } = r, [a, o] = n ? t : Z(t), i = a.parentNode, s = null, l = 0;
                        if (i) {
                            var c, d, D = em.toDOMNode(e, e),
                                h = i.closest('[data-slate-void="true"]'),
                                v = h && D.contains(h) ? h : null,
                                p = i.closest("[data-slate-leaf]"),
                                C = null;
                            if (p) {
                                if (s = p.closest('[data-slate-node="text"]')) {
                                    var g = em.getWindow(e).document.createRange();
                                    g.setStart(s, 0), g.setEnd(a, o);
                                    var B = g.cloneContents();
                                    [...Array.prototype.slice.call(B.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(B.querySelectorAll("[contenteditable=false]"))].forEach(e => {
                                        if (el && !n && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                                            e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                            return
                                        }
                                        e.parentNode.removeChild(e)
                                    }), l = B.textContent.length, C = s
                                }
                            } else if (v) {
                                for (var E = v.querySelectorAll("[data-slate-leaf]"), m = 0; m < E.length; m++) {
                                    var A = E[m];
                                    if (em.hasDOMNode(e, A)) {
                                        p = A;
                                        break
                                    }
                                }
                                p ? (s = p.closest('[data-slate-node="text"]'), l = (C = p).textContent.length, C.querySelectorAll("[data-slate-zero-width]").forEach(e => {
                                    l -= e.textContent.length
                                })) : l = 1
                            }
                            C && l === C.textContent.length && el && "z" === C.getAttribute("data-slate-zero-width") && null !== (c = C.textContent) && void 0 !== c && c.startsWith("\uFEFF") && (i.hasAttribute("data-slate-zero-width") || ec && null !== (d = C.textContent) && void 0 !== d && d.endsWith("\n\n")) && l--
                        }
                        if (el && !s && !n) {
                            var F = i.hasAttribute("data-slate-node") ? i : i.closest("[data-slate-node]");
                            if (F && em.hasDOMNode(e, F, {
                                    editable: !0
                                })) {
                                var b = em.toSlateNode(e, F),
                                    {
                                        path: y,
                                        offset: w
                                    } = f.Editor.start(e, em.findPath(e, b));
                                return !F.querySelector("[data-slate-leaf]") && (w = o), {
                                    path: y,
                                    offset: w
                                }
                            }
                        }
                        if (!s) {
                            if (u) return null;
                            throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                        }
                        var O = em.toSlateNode(e, s);
                        return {
                            path: em.findPath(e, O),
                            offset: l
                        }
                    },
                    toSlateRange(e, t, r) {
                        var n, u, a, o, i, s, {
                            exactMatch: l,
                            suppressThrow: c
                        } = r;
                        if ((J(t) ? t.anchorNode : t.startContainer) && (J(t) ? (n = t.anchorNode, u = t.anchorOffset, a = t.focusNode, o = t.focusOffset, i = eD && Q(n) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (n = t.startContainer, u = t.startOffset, a = t.endContainer, o = t.endOffset, i = t.collapsed)), null == n || null == a || null == u || null == o) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                        "getAttribute" in a && "false" === a.getAttribute("contenteditable") && (a = n, o = (null === (s = n.textContent) || void 0 === s ? void 0 : s.length) || 0);
                        var d = em.toSlatePoint(e, [n, u], {
                            exactMatch: l,
                            suppressThrow: c
                        });
                        if (!d) return null;
                        var D = i ? d : em.toSlatePoint(e, [a, o], {
                            exactMatch: l,
                            suppressThrow: c
                        });
                        if (!D) return null;
                        if (ec && !i && n !== a) {
                            var h = f.Editor.isEnd(e, d, d.path),
                                v = f.Editor.isStart(e, D, D.path);
                            h && (d = f.Editor.after(e, d) || d), v && (D = f.Editor.before(e, D) || D)
                        }
                        var p = {
                            anchor: d,
                            focus: D
                        };
                        return f.Range.isExpanded(p) && f.Range.isForward(p) && $(a) && f.Editor.void(e, {
                            at: p.focus,
                            mode: "highest"
                        }) && (p = f.Editor.unhangRange(e, p, {
                            voids: !0
                        })), p
                    },
                    hasRange(e, t) {
                        var {
                            anchor: r,
                            focus: n
                        } = t;
                        return f.Editor.hasPath(e, r.path) && f.Editor.hasPath(e, n.path)
                    },
                    hasTarget: (e, t) => X(t) && em.hasDOMNode(e, t),
                    hasEditableTarget: (e, t) => X(t) && em.hasDOMNode(e, t, {
                        editable: !0
                    }),
                    hasSelectableTarget: (e, t) => em.hasEditableTarget(e, t) || em.isTargetInsideNonReadonlyVoid(e, t),
                    isTargetInsideNonReadonlyVoid(e, t) {
                        if (P.get(e)) return !1;
                        var r = em.hasTarget(e, t) && em.toSlateNode(e, t);
                        return f.Element.isElement(r) && f.Editor.isVoid(e, r)
                    },
                    androidScheduleFlush(e) {
                        var t;
                        null === (t = N.get(e)) || void 0 === t || t()
                    },
                    androidPendingDiffs: e => W.get(e)
                },
                eA = ["anchor", "focus"],
                eF = ["anchor", "focus"],
                eb = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(r => t.hasOwnProperty(r) && e[r] === t[r]),
                ey = (e, t) => {
                    var r = g(e, eA),
                        n = g(t, eF);
                    return e[q] === t[q] && eb(r, n)
                },
                ew = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            u = t[r];
                        if (!f.Range.equals(n, u) || !ey(n, u)) return !1
                    }
                    return !0
                },
                eO = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            u = t[r];
                        if (n.anchor.offset !== u.anchor.offset || n.focus.offset !== u.focus.offset || !ey(n, u)) return !1
                    }
                    return !0
                },
                ex = eB ? l.useLayoutEffect : l.useEffect,
                ek = e => {
                    var {
                        isLast: t,
                        leaf: r,
                        parent: n,
                        text: u
                    } = e, a = ej(), o = em.findPath(a, u), i = f.Path.parent(o), s = !0 === r[V];
                    return a.isVoid(n) ? c.createElement(eS, {
                        length: f.Node.string(n).length
                    }) : "" !== r.text || n.children[n.children.length - 1] !== u || a.isInline(n) || "" !== f.Editor.string(a, i) ? "" === r.text ? c.createElement(eS, {
                        isMarkPlaceholder: s
                    }) : t && "\n" === r.text.slice(-1) ? c.createElement(eP, {
                        isTrailing: !0,
                        text: r.text
                    }) : c.createElement(eP, {
                        text: r.text
                    }) : c.createElement(eS, {
                        isLineBreak: !0,
                        isMarkPlaceholder: s
                    })
                },
                eP = e => {
                    var {
                        text: t,
                        isTrailing: r = !1
                    } = e, n = (0, l.useRef)(null), u = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""), [a] = (0, l.useState)(u);
                    return ex(() => {
                        var e = u();
                        n.current && n.current.textContent !== e && (n.current.textContent = e)
                    }), c.createElement(eR, {
                        ref: n
                    }, a)
                },
                eR = (0, l.memo)((0, l.forwardRef)((e, t) => c.createElement("span", {
                    "data-slate-string": !0,
                    ref: t
                }, e.children))),
                eS = e => {
                    var {
                        length: t = 0,
                        isLineBreak: r = !1,
                        isMarkPlaceholder: n = !1
                    } = e, u = {
                        "data-slate-zero-width": r ? "n" : "z",
                        "data-slate-length": t
                    };
                    return n && (u["data-slate-mark-placeholder"] = !0), c.createElement("span", Object.assign({}, u), el && r ? null : "\uFEFF", r ? c.createElement("br", null) : null)
                },
                eT = (0, l.createContext)(null),
                ej = () => {
                    var e = (0, l.useContext)(eT);
                    if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
                    return e
                },
                eN = c.memo(e => {
                    var {
                        leaf: t,
                        isLast: r,
                        text: n,
                        parent: u,
                        renderPlaceholder: a,
                        renderLeaf: o = e => c.createElement(eM, Object.assign({}, e))
                    } = e, i = (0, l.useRef)(null), s = (0, l.useRef)(null), d = ej(), f = (0, l.useRef)(null);
                    (0, l.useEffect)(() => () => {
                        f.current && f.current.disconnect()
                    }, []), (0, l.useEffect)(() => {
                        var e = null == s ? void 0 : s.current;
                        if (e ? y.set(d, e) : y.delete(d), f.current) f.current.disconnect(), e && f.current.observe(e);
                        else if (e) {
                            var t = window.ResizeObserver || D.ResizeObserver;
                            f.current = new t(() => {
                                var e = I.get(d);
                                null == e || e()
                            }), f.current.observe(e)
                        }
                        if (!e && i.current) {
                            var r = I.get(d);
                            null == r || r()
                        }
                        return i.current = s.current, () => {
                            y.delete(d)
                        }
                    }, [s, t]);
                    var h = c.createElement(ek, {
                        isLast: r,
                        leaf: t,
                        parent: u,
                        text: n
                    });
                    if (t[q]) {
                        var v = {
                            children: t.placeholder,
                            attributes: {
                                "data-slate-placeholder": !0,
                                style: {
                                    position: "absolute",
                                    pointerEvents: "none",
                                    width: "100%",
                                    maxWidth: "100%",
                                    display: "block",
                                    opacity: "0.333",
                                    userSelect: "none",
                                    textDecoration: "none"
                                },
                                contentEditable: !1,
                                ref: s
                            }
                        };
                        h = c.createElement(c.Fragment, null, a(v), h)
                    }
                    return o({
                        attributes: {
                            "data-slate-leaf": !0
                        },
                        children: h,
                        leaf: t,
                        text: n
                    })
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && f.Text.equals(t.leaf, e.leaf) && t.leaf[q] === e.leaf[q]),
                eM = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return c.createElement("span", Object.assign({}, t), r)
                },
                ez = c.memo(e => {
                    for (var {
                            decorations: t,
                            isLast: r,
                            parent: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            text: o
                        } = e, i = ej(), s = (0, l.useRef)(null), d = f.Text.decorations(o, t), D = em.findKey(i, o), h = [], v = 0; v < d.length; v++) {
                        var p = d[v];
                        h.push(c.createElement(eN, {
                            isLast: r && v === d.length - 1,
                            key: "".concat(D.id, "-").concat(v),
                            renderPlaceholder: u,
                            leaf: p,
                            text: o,
                            parent: n,
                            renderLeaf: a
                        }))
                    }
                    var C = (0, l.useCallback)(e => {
                        var t = k.get(i);
                        e ? (null == t || t.set(D, e), O.set(o, e), w.set(e, o)) : (null == t || t.delete(D), O.delete(o), s.current && w.delete(s.current)), s.current = e
                    }, [s, i, D, o]);
                    return c.createElement("span", {
                        "data-slate-node": "text",
                        ref: C
                    }, h)
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eO(t.decorations, e.decorations)),
                eW = c.memo(e => {
                    var {
                        decorations: t,
                        element: r,
                        renderElement: n = e => c.createElement(e_, Object.assign({}, e)),
                        renderPlaceholder: a,
                        renderLeaf: o,
                        selection: i
                    } = e, s = ej(), d = eU(), D = s.isInline(r), h = em.findKey(s, r), v = (0, l.useCallback)(e => {
                        var t = k.get(s);
                        e ? (null == t || t.set(h, e), O.set(r, e), w.set(e, r)) : (null == t || t.delete(h), O.delete(r))
                    }, [s, h, r]), p = eH({
                        decorations: t,
                        node: r,
                        renderElement: n,
                        renderPlaceholder: a,
                        renderLeaf: o,
                        selection: i
                    }), C = {
                        "data-slate-node": "element",
                        ref: v
                    };
                    if (D && (C["data-slate-inline"] = !0), !D && f.Editor.hasInlines(s, r)) {
                        var g = u(f.Node.string(r));
                        "rtl" === g && (C.dir = g)
                    }
                    if (f.Editor.isVoid(s, r)) {
                        C["data-slate-void"] = !0, !d && D && (C.contentEditable = !1);
                        var [
                            [B]
                        ] = f.Node.texts(r);
                        p = c.createElement(D ? "span" : "div", {
                            "data-slate-spacer": !0,
                            style: {
                                height: "0",
                                color: "transparent",
                                outline: "none",
                                position: "absolute"
                            }
                        }, c.createElement(ez, {
                            renderPlaceholder: a,
                            decorations: [],
                            isLast: !1,
                            parent: r,
                            text: B
                        })), m.set(B, 0), A.set(B, r)
                    }
                    return n({
                        attributes: C,
                        children: p,
                        element: r
                    })
                }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && ew(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && f.Range.equals(e.selection, t.selection))),
                e_ = e => {
                    var {
                        attributes: t,
                        children: r,
                        element: n
                    } = e, u = ej().isInline(n) ? "span" : "div";
                    return c.createElement(u, Object.assign({}, t, {
                        style: {
                            position: "relative"
                        }
                    }), r)
                },
                eL = (0, l.createContext)(() => []),
                eI = () => (0, l.useContext)(eL),
                eq = (0, l.createContext)(!1),
                eV = () => (0, l.useContext)(eq),
                eH = e => {
                    for (var {
                            decorations: t,
                            node: r,
                            renderElement: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            selection: o
                        } = e, i = eI(), s = ej(), l = em.findPath(s, r), d = [], D = f.Element.isElement(r) && !s.isInline(r) && f.Editor.hasInlines(s, r), h = 0; h < r.children.length; h++) {
                        var v = l.concat(h),
                            p = r.children[h],
                            C = em.findKey(s, p),
                            g = f.Editor.range(s, v),
                            B = o && f.Range.intersection(g, o),
                            E = i([p, v]);
                        for (var F of t) {
                            var b = f.Range.intersection(F, g);
                            b && E.push(b)
                        }
                        f.Element.isElement(p) ? d.push(c.createElement(eq.Provider, {
                            key: "provider-".concat(C.id),
                            value: !!B
                        }, c.createElement(eW, {
                            decorations: E,
                            element: p,
                            key: C.id,
                            renderElement: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            selection: B
                        }))) : d.push(c.createElement(ez, {
                            decorations: E,
                            key: C.id,
                            isLast: D && h === r.children.length - 1,
                            parent: r,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            text: p
                        })), m.set(p, h), A.set(p, r)
                    }
                    return d
                },
                eK = (0, l.createContext)(!1),
                eU = () => (0, l.useContext)(eK),
                e$ = (0, l.createContext)(null),
                eX = () => {
                    var e = (0, l.useContext)(e$);
                    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                    var {
                        editor: t
                    } = e;
                    return t
                },
                eJ = {
                    bold: "mod+b",
                    compose: ["down", "left", "right", "up", "backspace", "enter"],
                    moveBackward: "left",
                    moveForward: "right",
                    moveWordBackward: "ctrl+left",
                    moveWordForward: "ctrl+right",
                    deleteBackward: "shift?+backspace",
                    deleteForward: "shift?+delete",
                    extendBackward: "shift+left",
                    extendForward: "shift+right",
                    italic: "mod+i",
                    insertSoftBreak: "shift+enter",
                    splitBlock: "enter",
                    undo: "mod+z"
                },
                eY = {
                    moveLineBackward: "opt+up",
                    moveLineForward: "opt+down",
                    moveWordBackward: "opt+left",
                    moveWordForward: "opt+right",
                    deleteBackward: ["ctrl+backspace", "ctrl+h"],
                    deleteForward: ["ctrl+delete", "ctrl+d"],
                    deleteLineBackward: "cmd+shift?+backspace",
                    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
                    deleteWordBackward: "opt+shift?+backspace",
                    deleteWordForward: "opt+shift?+delete",
                    extendLineBackward: "opt+shift+up",
                    extendLineForward: "opt+shift+down",
                    redo: "cmd+shift+z",
                    transposeCharacter: "ctrl+t"
                },
                eG = {
                    deleteWordBackward: "ctrl+shift?+backspace",
                    deleteWordForward: "ctrl+shift?+delete",
                    redo: ["ctrl+y", "ctrl+shift+z"]
                },
                eZ = e => {
                    var t = eJ[e],
                        r = eY[e],
                        n = eG[e],
                        u = t && (0, h.isKeyHotkey)(t),
                        a = r && (0, h.isKeyHotkey)(r),
                        o = n && (0, h.isKeyHotkey)(n);
                    return e => !!(u && u(e) || es && a && a(e) || !es && o && o(e)) || !1
                },
                eQ = {
                    isBold: eZ("bold"),
                    isCompose: eZ("compose"),
                    isMoveBackward: eZ("moveBackward"),
                    isMoveForward: eZ("moveForward"),
                    isDeleteBackward: eZ("deleteBackward"),
                    isDeleteForward: eZ("deleteForward"),
                    isDeleteLineBackward: eZ("deleteLineBackward"),
                    isDeleteLineForward: eZ("deleteLineForward"),
                    isDeleteWordBackward: eZ("deleteWordBackward"),
                    isDeleteWordForward: eZ("deleteWordForward"),
                    isExtendBackward: eZ("extendBackward"),
                    isExtendForward: eZ("extendForward"),
                    isExtendLineBackward: eZ("extendLineBackward"),
                    isExtendLineForward: eZ("extendLineForward"),
                    isItalic: eZ("italic"),
                    isMoveLineBackward: eZ("moveLineBackward"),
                    isMoveLineForward: eZ("moveLineForward"),
                    isMoveWordBackward: eZ("moveWordBackward"),
                    isMoveWordForward: eZ("moveWordForward"),
                    isRedo: eZ("redo"),
                    isSoftBreak: eZ("insertSoftBreak"),
                    isSplitBlock: eZ("splitBlock"),
                    isTransposeCharacter: eZ("transposeCharacter"),
                    isUndo: eZ("undo")
                },
                e0 = (e, t) => {
                    var r = [],
                        n = () => {
                            r = []
                        };
                    return {
                        registerMutations: n => {
                            if (t.current) {
                                var u = n.filter(t => ea(e, t, n));
                                r.push(...u)
                            }
                        },
                        restoreDOM: function() {
                            r.length > 0 && (r.reverse().forEach(e => {
                                "characterData" !== e.type && (e.removedNodes.forEach(t => {
                                    e.target.insertBefore(t, e.nextSibling)
                                }), e.addedNodes.forEach(t => {
                                    e.target.removeChild(t)
                                }))
                            }), n())
                        },
                        clear: n
                    }
                },
                e1 = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                };
            class e3 extends l.Component {
                observe() {
                    var e, {
                        node: t
                    } = this.props;
                    if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e1)
                }
                componentDidMount() {
                    var {
                        receivedUserInput: e
                    } = this.props, t = this.context;
                    this.manager = e0(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
                }
                getSnapshotBeforeUpdate() {
                    var e, t, r, n, u = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
                    return null != u && u.length && (null === (n = this.manager) || void 0 === n || n.registerMutations(u)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (r = this.manager) || void 0 === r || r.restoreDOM(), null
                }
                componentDidUpdate() {
                    var e;
                    null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
                }
                render() {
                    return this.props.children
                }
                constructor() {
                    super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
                }
            }
            e3.contextType = eT;
            var e2 = el ? e3 : e => {
                var {
                    children: t
                } = e;
                return c.createElement(c.Fragment, null, t)
            };

            function e7(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
            }

            function e4(e, t) {
                var {
                    start: r,
                    end: n,
                    text: u
                } = t, a = e.slice(r, n), o = function(e, t) {
                    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
                        if (e.charAt(n) !== t.charAt(n)) return n;
                    return r
                }(a, u), i = Math.min(a.length - o, u.length - o), s = function(e, t, r) {
                    for (var n = Math.min(e.length, t.length, r), u = 0; u < n; u++)
                        if (e.charAt(e.length - u - 1) !== t.charAt(t.length - u - 1)) return u;
                    return n
                }(a, u, i), l = {
                    start: r + o,
                    end: n - s,
                    text: u.slice(o, u.length - s)
                };
                return l.start === l.end && 0 === l.text.length ? null : l
            }

            function e8(e, t) {
                var {
                    path: r,
                    offset: n
                } = t;
                if (!f.Editor.hasPath(e, r)) return null;
                var u = f.Node.get(e, r);
                if (!f.Text.isText(u)) return null;
                var a = f.Editor.above(e, {
                    match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
                    at: r
                });
                if (!a) return null;
                for (; n > u.text.length;) {
                    var o = f.Editor.next(e, {
                        at: r,
                        match: f.Text.isText
                    });
                    if (!o || !f.Path.isDescendant(o[1], a[1])) return null;
                    n -= u.text.length, u = o[0], r = o[1]
                }
                return {
                    path: r,
                    offset: n
                }
            }

            function e9(e, t) {
                var r = e8(e, t.anchor);
                if (!r) return null;
                if (f.Range.isCollapsed(t)) return {
                    anchor: r,
                    focus: r
                };
                var n = e8(e, t.focus);
                return n ? {
                    anchor: r,
                    focus: n
                } : null
            }

            function e5(e, t, r) {
                var n = W.get(e),
                    u = null == n ? void 0 : n.find(e => {
                        var {
                            path: r
                        } = e;
                        return f.Path.equals(r, t.path)
                    });
                if (!u || t.offset <= u.diff.start) return f.Point.transform(t, r, {
                    affinity: "backward"
                });
                var {
                    diff: a
                } = u;
                if (t.offset <= a.start + a.text.length) {
                    var o = {
                            path: t.path,
                            offset: a.start
                        },
                        i = f.Point.transform(o, r, {
                            affinity: "backward"
                        });
                    return i ? {
                        path: i.path,
                        offset: i.offset + t.offset - a.start
                    } : null
                }
                var s = {
                        path: t.path,
                        offset: t.offset - a.text.length + a.end - a.start
                    },
                    l = f.Point.transform(s, r, {
                        affinity: "backward"
                    });
                return l ? "split_node" === r.type && f.Path.equals(r.path, t.path) && s.offset < r.position && a.start < r.position ? l : {
                    path: l.path,
                    offset: l.offset + a.text.length - a.end + a.start
                } : null
            }

            function e6(e, t, r) {
                var n = e5(e, t.anchor, r);
                if (!n) return null;
                if (f.Range.isCollapsed(t)) return {
                    anchor: n,
                    focus: n
                };
                var u = e5(e, t.focus, r);
                return u ? {
                    anchor: n,
                    focus: u
                } : null
            }

            function te(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(r), !0).forEach(function(t) {
                        C(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tr = function() {},
                tn = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer",
                tu = ["node"];

            function ta(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var to = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                },
                ti = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
                ts = ["text"];

            function tl(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tl(Object(r), !0).forEach(function(t) {
                        C(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tl(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var td = e => c.createElement(c.Fragment, null, eH(e)),
                tf = e => {
                    var t, r, n, a, i, d, D = (0, l.useCallback)(e => c.createElement(tD, Object.assign({}, e)), []),
                        {
                            autoFocus: h,
                            decorate: v = th,
                            onDOMBeforeInput: p,
                            placeholder: B,
                            readOnly: E = !1,
                            renderElement: m,
                            renderLeaf: A,
                            renderPlaceholder: x = D,
                            scrollSelectionIntoView: k = tv,
                            style: j = {},
                            as: H = "div",
                            disableDefaultStyles: U = !1
                        } = e,
                        Y = g(e, ti),
                        Z = eX(),
                        [Q, ee] = (0, l.useState)(!1),
                        et = (0, l.useRef)(null),
                        er = (0, l.useRef)([]);
                    var {
                        onUserInput: en,
                        receivedUserInput: eu
                    } = (t = ej(), r = (0, l.useRef)(!1), n = (0, l.useRef)(0), a = (0, l.useCallback)(() => {
                        if (!r.current) {
                            r.current = !0;
                            var e = em.getWindow(t);
                            e.cancelAnimationFrame(n.current), n.current = e.requestAnimationFrame(() => {
                                r.current = !1
                            })
                        }
                    }, []), (0, l.useEffect)(() => () => cancelAnimationFrame(n.current), []), {
                        receivedUserInput: r,
                        onUserInput: a
                    }), [, eo] = (0, l.useReducer)(e => e + 1, 0);
                    I.set(Z, eo), P.set(Z, E);
                    var es = (0, l.useMemo)(() => ({
                        isDraggingInternally: !1,
                        isUpdatingSelection: !1,
                        latestElement: null,
                        hasMarkPlaceholder: !1
                    }), []);
                    (0, l.useEffect)(() => {
                        et.current && h && et.current.focus()
                    }, [h]);
                    var ef = (0, l.useCallback)(s(() => {
                            if ((el || !em.isComposing(Z)) && (!es.isUpdatingSelection || null != ev && ev.isFlushing()) && !es.isDraggingInternally) {
                                var e = em.findDocumentOrShadowRoot(Z),
                                    {
                                        activeElement: t
                                    } = e,
                                    r = em.toDOMNode(Z, Z),
                                    n = e.getSelection();
                                if (t === r ? (es.latestElement = t, R.set(Z, !0)) : R.delete(Z), !n) return f.Transforms.deselect(Z);
                                var {
                                    anchorNode: u,
                                    focusNode: a
                                } = n, o = em.hasEditableTarget(Z, u) || em.isTargetInsideNonReadonlyVoid(Z, u), i = em.hasEditableTarget(Z, a) || em.isTargetInsideNonReadonlyVoid(Z, a);
                                if (o && i) {
                                    var s = em.toSlateRange(Z, n, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    s && (em.isComposing(Z) || null != ev && ev.hasPendingChanges() || null != ev && ev.isFlushing() ? null == ev || ev.handleUserSelect(s) : f.Transforms.select(Z, s))
                                }
                                E && (!o || !i) && f.Transforms.deselect(Z)
                            }
                        }, 100), [E]),
                        eh = (0, l.useMemo)(() => o(ef, 0), [ef]),
                        ev = function(e) {
                            var t, {
                                    node: r
                                } = e,
                                n = g(e, tu);
                            if (!el) return null;
                            var u = ej();
                            var a = (t = (0, l.useRef)(!1), (0, l.useEffect)(() => (t.current = !0, () => {
                                    t.current = !1
                                }), []), t.current),
                                [o] = (0, l.useState)(() => (function(e) {
                                    var {
                                        editor: t,
                                        scheduleOnDOMSelectionChange: r,
                                        onDOMSelectionChange: n
                                    } = e, u = !1, a = null, o = null, i = null, s = 0, l = !1, c = () => {
                                        var e = L.get(t);
                                        if (L.delete(t), e) {
                                            var {
                                                selection: r
                                            } = t, n = e9(t, e);
                                            n && (!r || !f.Range.equals(n, r)) && f.Transforms.select(t, n)
                                        }
                                    }, d = () => {
                                        var e = _.get(t);
                                        if (_.delete(t), e) {
                                            if (e.at) {
                                                var r = f.Point.isPoint(e.at) ? e8(t, e.at) : e9(t, e.at);
                                                if (!r) return;
                                                var n = f.Editor.range(t, r);
                                                (!t.selection || !f.Range.equals(t.selection, n)) && f.Transforms.select(t, r)
                                            }
                                            e.run()
                                        }
                                    }, D = () => {
                                        if (o && (clearTimeout(o), o = null), i && (clearTimeout(i), i = null), !g() && !C()) {
                                            c();
                                            return
                                        }!u && (u = !0, setTimeout(() => u = !1)), C() && (u = "action");
                                        var e = t.selection && f.Editor.rangeRef(t, t.selection, {
                                            affinity: "forward"
                                        });
                                        z.set(t, t.marks), tr("flush", _.get(t), W.get(t));
                                        for (var a = g(); s = null === (D = W.get(t)) || void 0 === D ? void 0 : D[0];) {
                                            var s, D, h, v = M.get(t);
                                            void 0 !== v && (M.delete(t), t.marks = v), v && !1 === l && (l = null);
                                            var p = function(e) {
                                                var {
                                                    path: t,
                                                    diff: r
                                                } = e;
                                                return {
                                                    anchor: {
                                                        path: t,
                                                        offset: r.start
                                                    },
                                                    focus: {
                                                        path: t,
                                                        offset: r.end
                                                    }
                                                }
                                            }(s);
                                            (!t.selection || !f.Range.equals(t.selection, p)) && f.Transforms.select(t, p), s.diff.text ? f.Editor.insertText(t, s.diff.text) : f.Editor.deleteFragment(t), W.set(t, null === (h = W.get(t)) || void 0 === h ? void 0 : h.filter(e => {
                                                var {
                                                    id: t
                                                } = e;
                                                return t !== s.id
                                            })), ! function(e, t) {
                                                var {
                                                    path: r,
                                                    diff: n
                                                } = t;
                                                if (!f.Editor.hasPath(e, r)) return !1;
                                                var u = f.Node.get(e, r);
                                                if (!f.Text.isText(u)) return !1;
                                                if (n.start !== u.text.length || 0 === n.text.length) return u.text.slice(n.start, n.start + n.text.length) === n.text;
                                                var a = f.Path.next(r);
                                                if (!f.Editor.hasPath(e, a)) return !1;
                                                var o = f.Node.get(e, a);
                                                return f.Text.isText(o) && o.text.startsWith(n.text)
                                            }(t, s) && (a = !1, _.delete(t), z.delete(t), u = "action", L.delete(t), r.cancel(), n.cancel(), null == e || e.unref())
                                        }
                                        var B = null == e ? void 0 : e.unref();
                                        if (B && !L.get(t) && (!t.selection || !f.Range.equals(B, t.selection)) && f.Transforms.select(t, B), C()) {
                                            d();
                                            return
                                        }
                                        a && r(), r.flush(), n.flush(), c();
                                        var E = z.get(t);
                                        z.delete(t), void 0 !== E && (t.marks = E, t.onChange())
                                    }, h = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                            r = y.get(t);
                                        if (r) {
                                            if (g() || e) {
                                                r.style.display = "none";
                                                return
                                            }
                                            r.style.removeProperty("display")
                                        }
                                    }, v = (e, r) => {
                                        var n, u, a, o, i, l, c, d, D, v = null !== (D = W.get(t)) && void 0 !== D ? D : [];
                                        W.set(t, v);
                                        var p = f.Node.leaf(t, e),
                                            C = v.findIndex(t => f.Path.equals(t.path, e));
                                        if (C < 0) {
                                            e4(p.text, r) && v.push({
                                                path: e,
                                                diff: r,
                                                id: s++
                                            }), h();
                                            return
                                        }
                                        var g = (n = p.text, u = v[C].diff, a = r, o = Math.min(u.start, a.start), i = Math.max(0, Math.min(u.start + u.text.length, a.end) - a.start), l = e7(n, u, a), c = Math.max(a.start + a.text.length, u.start + u.text.length + (u.start + u.text.length > a.start ? a.text.length : 0) - i), d = l.slice(o, c), e4(n, {
                                            start: o,
                                            end: Math.max(u.end, a.end - u.text.length + (u.end - u.start)),
                                            text: d
                                        }));
                                        if (!g) {
                                            v.splice(C, 1), h();
                                            return
                                        }
                                        v[C] = tt(tt({}, v[C]), {}, {
                                            diff: g
                                        })
                                    }, p = function(e) {
                                        var {
                                            at: u
                                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        l = !1, L.delete(t), r.cancel(), n.cancel(), C() && D(), _.set(t, {
                                            at: u,
                                            run: e
                                        }), i = setTimeout(D)
                                    }, C = () => !!_.get(t), g = () => {
                                        var e;
                                        return !!(null !== (e = W.get(t)) && void 0 !== e && e.length)
                                    }, B = e => {
                                        L.set(t, e), o && (clearTimeout(o), o = null);
                                        var {
                                            selection: r
                                        } = t;
                                        if (e) {
                                            var n = !r || !f.Path.equals(r.anchor.path, e.anchor.path),
                                                u = !r || !f.Path.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                            (n && l || u) && (l = !1), (n || g()) && (o = setTimeout(D, 200))
                                        }
                                    }, E = () => {
                                        !C() && (i = setTimeout(D))
                                    };
                                    return {
                                        flush: D,
                                        scheduleFlush: E,
                                        hasPendingDiffs: g,
                                        hasPendingAction: C,
                                        hasPendingChanges: () => C() || g(),
                                        isFlushing: () => u,
                                        handleUserSelect: B,
                                        handleCompositionEnd: e => {
                                            a && clearTimeout(a), a = setTimeout(() => {
                                                S.set(t, !1), D()
                                            }, 25)
                                        },
                                        handleCompositionStart: e => {
                                            S.set(t, !0), a && (clearTimeout(a), a = null)
                                        },
                                        handleDOMBeforeInput: e => {
                                            o && (clearTimeout(o), o = null);
                                            var {
                                                inputType: r
                                            } = e, n = null, u = e.dataTransfer || e.data || void 0;
                                            !1 !== l && "insertText" !== r && "insertCompositionText" !== r && (l = !1);
                                            var [a] = e.getTargetRanges();
                                            a && (n = em.toSlateRange(t, a, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            }));
                                            var i = em.getWindow(t).getSelection();
                                            if (!n && i && (a = i, n = em.toSlateRange(t, i, {
                                                    exactMatch: !1,
                                                    suppressThrow: !0
                                                })), n = null !== (P = n) && void 0 !== P ? P : t.selection) {
                                                var s = !0;
                                                if (r.startsWith("delete")) {
                                                    if (f.Range.isExpanded(n)) {
                                                        var [c, d] = f.Range.edges(n);
                                                        if (f.Node.leaf(t, c.path).text.length === c.offset && 0 === d.offset) {
                                                            var D = f.Editor.next(t, {
                                                                at: c.path,
                                                                match: f.Text.isText
                                                            });
                                                            D && f.Path.equals(D[1], d.path) && (n = {
                                                                anchor: d,
                                                                focus: d
                                                            })
                                                        }
                                                    }
                                                    var h = r.endsWith("Backward") ? "backward" : "forward",
                                                        [C, g] = f.Range.edges(n),
                                                        [m, A] = f.Editor.leaf(t, C.path),
                                                        F = {
                                                            text: "",
                                                            start: C.offset,
                                                            end: g.offset
                                                        },
                                                        b = W.get(t),
                                                        y = null == b ? void 0 : b.find(e => f.Path.equals(e.path, A)),
                                                        w = y ? [y.diff, F] : [F];
                                                    if (0 === e7(m.text, ...w).length && (s = !1), f.Range.isExpanded(n)) {
                                                        if (s && f.Path.equals(n.anchor.path, n.focus.path)) {
                                                            var O = {
                                                                path: n.anchor.path,
                                                                offset: C.offset
                                                            };
                                                            return B(f.Editor.range(t, O, O)), v(n.anchor.path, {
                                                                text: "",
                                                                end: g.offset,
                                                                start: C.offset
                                                            })
                                                        }
                                                        return p(() => f.Editor.deleteFragment(t, {
                                                            direction: h
                                                        }), {
                                                            at: n
                                                        })
                                                    }
                                                }
                                                switch (r) {
                                                    case "deleteByComposition":
                                                    case "deleteByCut":
                                                    case "deleteByDrag":
                                                        return p(() => f.Editor.deleteFragment(t), {
                                                            at: n
                                                        });
                                                    case "deleteContent":
                                                    case "deleteContentForward":
                                                        var {
                                                            anchor: x
                                                        } = n;
                                                        if (s && f.Range.isCollapsed(n)) {
                                                            var k = f.Node.leaf(t, x.path);
                                                            if (x.offset < k.text.length) return v(x.path, {
                                                                text: "",
                                                                start: x.offset,
                                                                end: x.offset + 1
                                                            })
                                                        }
                                                        return p(() => f.Editor.deleteForward(t), {
                                                            at: n
                                                        });
                                                    case "deleteContentBackward":
                                                        var P, R, {
                                                                anchor: S
                                                            } = n,
                                                            T = J(a) ? a.isCollapsed : !!(null !== (R = a) && void 0 !== R && R.collapsed);
                                                        if (s && T && f.Range.isCollapsed(n) && S.offset > 0) return v(S.path, {
                                                            text: "",
                                                            start: S.offset - 1,
                                                            end: S.offset
                                                        });
                                                        return p(() => f.Editor.deleteBackward(t), {
                                                            at: n
                                                        });
                                                    case "deleteEntireSoftLine":
                                                        return p(() => {
                                                            f.Editor.deleteBackward(t, {
                                                                unit: "line"
                                                            }), f.Editor.deleteForward(t, {
                                                                unit: "line"
                                                            })
                                                        }, {
                                                            at: n
                                                        });
                                                    case "deleteHardLineBackward":
                                                        return p(() => f.Editor.deleteBackward(t, {
                                                            unit: "block"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteSoftLineBackward":
                                                        return p(() => f.Editor.deleteBackward(t, {
                                                            unit: "line"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteHardLineForward":
                                                        return p(() => f.Editor.deleteForward(t, {
                                                            unit: "block"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteSoftLineForward":
                                                        return p(() => f.Editor.deleteForward(t, {
                                                            unit: "line"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteWordBackward":
                                                        return p(() => f.Editor.deleteBackward(t, {
                                                            unit: "word"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteWordForward":
                                                        return p(() => f.Editor.deleteForward(t, {
                                                            unit: "word"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "insertLineBreak":
                                                        return p(() => f.Editor.insertSoftBreak(t), {
                                                            at: n
                                                        });
                                                    case "insertParagraph":
                                                        return p(() => f.Editor.insertBreak(t), {
                                                            at: n
                                                        });
                                                    case "insertCompositionText":
                                                    case "deleteCompositionText":
                                                    case "insertFromComposition":
                                                    case "insertFromDrop":
                                                    case "insertFromPaste":
                                                    case "insertFromYank":
                                                    case "insertReplacementText":
                                                    case "insertText":
                                                        if (tn(u)) return p(() => em.insertData(t, u), {
                                                            at: n
                                                        });
                                                        var j = null != u ? u : "";
                                                        if (M.get(t) && (j = j.replace("\uFEFF", "")), "insertText" === r && /.*\n.*\n$/.test(j) && (j = j.slice(0, -1)), j.includes("\n")) return p(() => {
                                                            var e = j.split("\n");
                                                            e.forEach((r, n) => {
                                                                r && f.Editor.insertText(t, r), n !== e.length - 1 && f.Editor.insertSoftBreak(t)
                                                            })
                                                        }, {
                                                            at: n
                                                        });
                                                        if (f.Path.equals(n.anchor.path, n.focus.path)) {
                                                            var [N, z] = f.Range.edges(n), _ = {
                                                                start: N.offset,
                                                                end: z.offset,
                                                                text: j
                                                            };
                                                            if (j && l && "insertCompositionText" === r) {
                                                                var L = l.start + l.text.search(/\S|$/);
                                                                _.start + _.text.search(/\S|$/) === L + 1 && _.end === l.start + l.text.length ? (_.start -= 1, l = null, E()) : l = !1
                                                            } else l = "insertText" === r && (null === l ? _ : !!(l && f.Range.isCollapsed(n)) && l.end + l.text.length === N.offset && tt(tt({}, l), {}, {
                                                                text: l.text + j
                                                            }));
                                                            if (s) {
                                                                v(N.path, _);
                                                                return
                                                            }
                                                        }
                                                        return p(() => f.Editor.insertText(t, j), {
                                                            at: n
                                                        })
                                                }
                                            }
                                        },
                                        handleKeyDown: e => {
                                            !g() && (h(!0), setTimeout(h))
                                        },
                                        handleDomMutations: e => {
                                            if (!(g() || C()) && e.some(r => ea(t, r, e))) {
                                                var r;
                                                null === (r = I.get(t)) || void 0 === r || r()
                                            }
                                        },
                                        handleInput: () => {
                                            (C() || !g()) && D()
                                        }
                                    }
                                })(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? ta(Object(r), !0).forEach(function(t) {
                                            C(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ta(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }({
                                    editor: u
                                }, n)));
                            return ! function(e, t, r) {
                                var [n] = (0, l.useState)(() => new MutationObserver(t));
                                ex(() => {
                                    n.takeRecords()
                                }), (0, l.useEffect)(() => {
                                    if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                    return n.observe(e.current, r), () => n.disconnect()
                                }, [])
                            }(r, o.handleDomMutations, to), N.set(u, o.scheduleFlush), a && o.flush(), o
                        }({
                            node: et,
                            onDOMSelectionChange: ef,
                            scheduleOnDOMSelectionChange: eh
                        });
                    ex(() => {
                        et.current && (e = K(et.current)) ? (F.set(Z, e), b.set(Z, et.current), O.set(Z, et.current), w.set(et.current, Z)) : O.delete(Z);
                        var e, {
                                selection: t
                            } = Z,
                            r = em.findDocumentOrShadowRoot(Z).getSelection();
                        if (!(!r || !em.isFocused(Z) || null != ev && ev.hasPendingAction())) {
                            var n = e => {
                                    var n = "None" !== r.type;
                                    if (t || n) {
                                        var u = b.get(Z),
                                            a = !1;
                                        if (u.contains(r.anchorNode) && u.contains(r.focusNode) && (a = !0), n && a && t && !e) {
                                            var o = em.toSlateRange(Z, r, {
                                                exactMatch: !0,
                                                suppressThrow: !0
                                            });
                                            if (o && f.Range.equals(o, t)) {
                                                if (!es.hasMarkPlaceholder) return;
                                                var i, {
                                                    anchorNode: s
                                                } = r;
                                                if (null != s && null !== (i = s.parentElement) && void 0 !== i && i.hasAttribute("data-slate-mark-placeholder")) return
                                            }
                                        }
                                        if (t && !em.hasRange(Z, t)) {
                                            Z.selection = em.toSlateRange(Z, r, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            });
                                            return
                                        }
                                        es.isUpdatingSelection = !0;
                                        var l = t && em.toDOMRange(Z, t);
                                        return l ? (f.Range.isBackward(t) ? r.setBaseAndExtent(l.endContainer, l.endOffset, l.startContainer, l.startOffset) : r.setBaseAndExtent(l.startContainer, l.startOffset, l.endContainer, l.endOffset), k(Z, l)) : r.removeAllRanges(), l
                                    }
                                },
                                u = n(),
                                a = (null == ev ? void 0 : ev.isFlushing()) === "action";
                            if (!el || !a) {
                                setTimeout(() => {
                                    u && ec && em.toDOMNode(Z, Z).focus(), es.isUpdatingSelection = !1
                                });
                                return
                            }
                            var o = null,
                                i = requestAnimationFrame(() => {
                                    if (a) {
                                        var e = e => {
                                            try {
                                                em.toDOMNode(Z, Z).focus(), n(e)
                                            } catch (e) {}
                                        };
                                        e(), o = setTimeout(() => {
                                            e(!0), es.isUpdatingSelection = !1
                                        })
                                    }
                                });
                            return () => {
                                cancelAnimationFrame(i), o && clearTimeout(o)
                            }
                        }
                    });
                    var eA = (0, l.useCallback)(e => {
                            if (en(), !E && em.hasEditableTarget(Z, e.target) && !tC(e, p)) {
                                if (ev) return ev.handleDOMBeforeInput(e);
                                eh.flush(), ef.flush();
                                var {
                                    selection: t
                                } = Z, {
                                    inputType: r
                                } = e, n = e.dataTransfer || e.data || void 0, u = "insertCompositionText" === r || "deleteCompositionText" === r;
                                if (u && em.isComposing(Z)) return;
                                var a = !1;
                                if ("insertText" === r && t && f.Range.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                                    a = !0, Z.marks && (a = !1);
                                    var {
                                        anchor: o
                                    } = t, [i, s] = em.toDOMPoint(Z, o), l = null === (D = i.parentElement) || void 0 === D ? void 0 : D.closest("a"), c = em.getWindow(Z);
                                    if (a && l && em.hasDOMNode(Z, l)) {
                                        var d, D, h, v, C = null == c ? void 0 : c.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                                        C === i && (null === (v = C.textContent) || void 0 === v ? void 0 : v.length) === s && (a = !1)
                                    }
                                    if (a && i.parentElement && (null == c ? void 0 : null === (h = c.getComputedStyle(i.parentElement)) || void 0 === h ? void 0 : h.whiteSpace) === "pre") {
                                        var g = f.Editor.above(Z, {
                                            at: o.path,
                                            match: e => f.Element.isElement(e) && f.Editor.isBlock(Z, e)
                                        });
                                        g && f.Node.string(g[0]).includes("	") && (a = !1)
                                    }
                                }
                                if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                                    var [B] = e.getTargetRanges();
                                    if (B) {
                                        var m = em.toSlateRange(Z, B, {
                                            exactMatch: !1,
                                            suppressThrow: !1
                                        });
                                        if (!t || !f.Range.equals(t, m)) {
                                            a = !1;
                                            var A = !u && Z.selection && f.Editor.rangeRef(Z, Z.selection);
                                            f.Transforms.select(Z, m), A && T.set(Z, A)
                                        }
                                    }
                                }
                                if (!u) {
                                    if (!a && e.preventDefault(), t && f.Range.isExpanded(t) && r.startsWith("delete")) {
                                        var F = r.endsWith("Backward") ? "backward" : "forward";
                                        f.Editor.deleteFragment(Z, {
                                            direction: F
                                        });
                                        return
                                    }
                                    switch (r) {
                                        case "deleteByComposition":
                                        case "deleteByCut":
                                        case "deleteByDrag":
                                            f.Editor.deleteFragment(Z);
                                            break;
                                        case "deleteContent":
                                        case "deleteContentForward":
                                            f.Editor.deleteForward(Z);
                                            break;
                                        case "deleteContentBackward":
                                            f.Editor.deleteBackward(Z);
                                            break;
                                        case "deleteEntireSoftLine":
                                            f.Editor.deleteBackward(Z, {
                                                unit: "line"
                                            }), f.Editor.deleteForward(Z, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteHardLineBackward":
                                            f.Editor.deleteBackward(Z, {
                                                unit: "block"
                                            });
                                            break;
                                        case "deleteSoftLineBackward":
                                            f.Editor.deleteBackward(Z, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteHardLineForward":
                                            f.Editor.deleteForward(Z, {
                                                unit: "block"
                                            });
                                            break;
                                        case "deleteSoftLineForward":
                                            f.Editor.deleteForward(Z, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteWordBackward":
                                            f.Editor.deleteBackward(Z, {
                                                unit: "word"
                                            });
                                            break;
                                        case "deleteWordForward":
                                            f.Editor.deleteForward(Z, {
                                                unit: "word"
                                            });
                                            break;
                                        case "insertLineBreak":
                                            f.Editor.insertSoftBreak(Z);
                                            break;
                                        case "insertParagraph":
                                            f.Editor.insertBreak(Z);
                                            break;
                                        case "insertFromComposition":
                                        case "insertFromDrop":
                                        case "insertFromPaste":
                                        case "insertFromYank":
                                        case "insertReplacementText":
                                        case "insertText":
                                            "insertFromComposition" === r && em.isComposing(Z) && (ee(!1), S.set(Z, !1)), (null == n ? void 0 : n.constructor.name) === "DataTransfer" ? em.insertData(Z, n) : "string" == typeof n && (a ? er.current.push(() => f.Editor.insertText(Z, n)) : f.Editor.insertText(Z, n))
                                    }
                                    var b = null === (d = T.get(Z)) || void 0 === d ? void 0 : d.unref();
                                    T.delete(Z), b && (!Z.selection || !f.Range.equals(Z.selection, b)) && f.Transforms.select(Z, b)
                                }
                            }
                        }, [E, p]),
                        eF = (0, l.useCallback)(e => {
                            null == e ? (ef.cancel(), eh.cancel(), b.delete(Z), O.delete(Z), et.current && eE && et.current.removeEventListener("beforeinput", eA)) : eE && e.addEventListener("beforeinput", eA), et.current = e
                        }, [et, eA, ef, eh]);
                    ex(() => {
                        var e = em.getWindow(Z);
                        return e.document.addEventListener("selectionchange", eh), () => {
                            e.document.removeEventListener("selectionchange", eh)
                        }
                    }, [eh]);
                    var eb = v([Z, []]);
                    if (B && 1 === Z.children.length && 1 === Array.from(f.Node.texts(Z)).length && "" === f.Node.string(Z) && !Q) {
                        var ey = f.Editor.start(Z, []);
                        eb.push({
                            [q]: !0,
                            placeholder: B,
                            anchor: ey,
                            focus: ey
                        })
                    }
                    var {
                        marks: ew
                    } = Z;
                    if (es.hasMarkPlaceholder = !1, Z.selection && f.Range.isCollapsed(Z.selection) && ew) {
                        var {
                            anchor: eO
                        } = Z.selection, ek = f.Node.leaf(Z, eO.path), eP = g(ek, ts);
                        if (!f.Text.equals(ek, ew, {
                                loose: !0
                            })) {
                            es.hasMarkPlaceholder = !0;
                            var eR = Object.fromEntries(Object.keys(eP).map(e => [e, null]));
                            eb.push(tc(tc(tc({
                                [V]: !0
                            }, eR), ew), {}, {
                                anchor: eO,
                                focus: eO
                            }))
                        }
                    }(0, l.useEffect)(() => {
                        setTimeout(() => {
                            var {
                                selection: e
                            } = Z;
                            if (e) {
                                var {
                                    anchor: t
                                } = e, r = f.Node.leaf(Z, t.path);
                                if (ew && !f.Text.equals(r, ew, {
                                        loose: !0
                                    })) {
                                    M.set(Z, ew);
                                    return
                                }
                            }
                            M.delete(Z)
                        })
                    });
                    var eS = null === (i = y.get(Z)) || void 0 === i ? void 0 : null === (d = i.getBoundingClientRect()) || void 0 === d ? void 0 : d.height;
                    return c.createElement(eK.Provider, {
                        value: E
                    }, c.createElement(eL.Provider, {
                        value: v
                    }, c.createElement(e2, {
                        node: et,
                        receivedUserInput: eu
                    }, c.createElement(H, Object.assign({
                        role: E ? void 0 : "textbox",
                        "aria-multiline": !E || void 0
                    }, Y, {
                        spellCheck: (!!eE || !eB) && Y.spellCheck,
                        autoCorrect: eE || !eB ? Y.autoCorrect : "false",
                        autoCapitalize: eE || !eB ? Y.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !E,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: eF,
                        style: tc(tc({}, U ? {} : tc({
                            position: "relative",
                            outline: "none",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }, eS ? {
                            minHeight: eS
                        } : {})), j),
                        onBeforeInput: (0, l.useCallback)(e => {
                            if (!eE && !E && !tp(e, Y.onBeforeInput) && em.hasSelectableTarget(Z, e.target) && (e.preventDefault(), !em.isComposing(Z))) {
                                var t = e.data;
                                f.Editor.insertText(Z, t)
                            }
                        }, [E]),
                        onInput: (0, l.useCallback)(e => {
                            if (!tp(e, Y.onInput)) {
                                if (ev) {
                                    ev.handleInput();
                                    return
                                }
                                for (var t of er.current) t();
                                er.current = []
                            }
                        }, []),
                        onBlur: (0, l.useCallback)(e => {
                            if (E || es.isUpdatingSelection || !em.hasSelectableTarget(Z, e.target) || tp(e, Y.onBlur)) return;
                            var t = em.findDocumentOrShadowRoot(Z);
                            if (es.latestElement === t.activeElement) return;
                            var {
                                relatedTarget: r
                            } = e;
                            if (r !== em.toDOMNode(Z, Z)) {
                                if (!($(r) && r.hasAttribute("data-slate-spacer"))) {
                                    if (null != r && X(r) && em.hasDOMNode(Z, r)) {
                                        var n = em.toSlateNode(Z, r);
                                        if (f.Element.isElement(n) && !Z.isVoid(n)) return
                                    }
                                    if (ed) {
                                        var u = t.getSelection();
                                        null == u || u.removeAllRanges()
                                    }
                                    R.delete(Z)
                                }
                            }
                        }, [E, Y.onBlur]),
                        onClick: (0, l.useCallback)(e => {
                            if (em.hasTarget(Z, e.target) && !tp(e, Y.onClick) && X(e.target)) {
                                var t = em.toSlateNode(Z, e.target),
                                    r = em.findPath(Z, t);
                                if (!!f.Editor.hasPath(Z, r) && f.Node.get(Z, r) === t) {
                                    if (3 === e.detail && r.length >= 1) {
                                        var n = r;
                                        if (!(f.Element.isElement(t) && f.Editor.isBlock(Z, t))) {
                                            var u, a = f.Editor.above(Z, {
                                                match: e => f.Element.isElement(e) && f.Editor.isBlock(Z, e),
                                                at: r
                                            });
                                            n = null !== (u = null == a ? void 0 : a[1]) && void 0 !== u ? u : r.slice(0, 1)
                                        }
                                        var o = f.Editor.range(Z, n);
                                        f.Transforms.select(Z, o);
                                        return
                                    }
                                    if (!E) {
                                        var i = f.Editor.start(Z, r),
                                            s = f.Editor.end(Z, r),
                                            l = f.Editor.void(Z, {
                                                at: i
                                            }),
                                            c = f.Editor.void(Z, {
                                                at: s
                                            });
                                        if (l && c && f.Path.equals(l[1], c[1])) {
                                            var d = f.Editor.range(Z, i);
                                            f.Transforms.select(Z, d)
                                        }
                                    }
                                }
                            }
                        }, [E, Y.onClick]),
                        onCompositionEnd: (0, l.useCallback)(e => {
                            if (em.hasSelectableTarget(Z, e.target) && (em.isComposing(Z) && (ee(!1), S.set(Z, !1)), null == ev || ev.handleCompositionEnd(e), !tp(e, Y.onCompositionEnd) && !el && !ed && !ep && !ei && !eg && !eC && e.data)) {
                                var t = M.get(Z);
                                M.delete(Z), void 0 !== t && (z.set(Z, Z.marks), Z.marks = t), f.Editor.insertText(Z, e.data);
                                var r = z.get(Z);
                                z.delete(Z), void 0 !== r && (Z.marks = r)
                            }
                        }, [Y.onCompositionEnd]),
                        onCompositionUpdate: (0, l.useCallback)(e => {
                            em.hasSelectableTarget(Z, e.target) && !tp(e, Y.onCompositionUpdate) && !em.isComposing(Z) && (ee(!0), S.set(Z, !0))
                        }, [Y.onCompositionUpdate]),
                        onCompositionStart: (0, l.useCallback)(e => {
                            if (em.hasSelectableTarget(Z, e.target) && (null == ev || ev.handleCompositionStart(e), !tp(e, Y.onCompositionStart) && !el)) {
                                ee(!0);
                                var {
                                    selection: t
                                } = Z;
                                if (t) {
                                    if (f.Range.isExpanded(t)) {
                                        f.Editor.deleteFragment(Z);
                                        return
                                    }
                                    var r = f.Editor.above(Z, {
                                        match: e => f.Element.isElement(e) && f.Editor.isInline(Z, e),
                                        mode: "highest"
                                    });
                                    if (r) {
                                        var [, n] = r;
                                        if (f.Editor.isEnd(Z, t.anchor, n)) {
                                            var u = f.Editor.after(Z, n);
                                            f.Transforms.setSelection(Z, {
                                                anchor: u,
                                                focus: u
                                            })
                                        }
                                    }
                                }
                            }
                        }, [Y.onCompositionStart]),
                        onCopy: (0, l.useCallback)(e => {
                            em.hasSelectableTarget(Z, e.target) && !tp(e, Y.onCopy) && (e.preventDefault(), em.setFragmentData(Z, e.clipboardData, "copy"))
                        }, [Y.onCopy]),
                        onCut: (0, l.useCallback)(e => {
                            if (!E && em.hasSelectableTarget(Z, e.target) && !tp(e, Y.onCut)) {
                                e.preventDefault(), em.setFragmentData(Z, e.clipboardData, "cut");
                                var {
                                    selection: t
                                } = Z;
                                if (t) {
                                    if (f.Range.isExpanded(t)) f.Editor.deleteFragment(Z);
                                    else {
                                        var r = f.Node.parent(Z, t.anchor.path);
                                        f.Editor.isVoid(Z, r) && f.Transforms.delete(Z)
                                    }
                                }
                            }
                        }, [E, Y.onCut]),
                        onDragOver: (0, l.useCallback)(e => {
                            if (em.hasTarget(Z, e.target) && !tp(e, Y.onDragOver)) {
                                var t = em.toSlateNode(Z, e.target);
                                f.Element.isElement(t) && f.Editor.isVoid(Z, t) && e.preventDefault()
                            }
                        }, [Y.onDragOver]),
                        onDragStart: (0, l.useCallback)(e => {
                            if (!E && em.hasTarget(Z, e.target) && !tp(e, Y.onDragStart)) {
                                var t = em.toSlateNode(Z, e.target),
                                    r = em.findPath(Z, t);
                                if (f.Element.isElement(t) && f.Editor.isVoid(Z, t) || f.Editor.void(Z, {
                                        at: r,
                                        voids: !0
                                    })) {
                                    var n = f.Editor.range(Z, r);
                                    f.Transforms.select(Z, n)
                                }
                                es.isDraggingInternally = !0, em.setFragmentData(Z, e.dataTransfer, "drag")
                            }
                        }, [E, Y.onDragStart]),
                        onDrop: (0, l.useCallback)(e => {
                            if (!E && em.hasTarget(Z, e.target) && !tp(e, Y.onDrop)) {
                                e.preventDefault();
                                var t = Z.selection,
                                    r = em.findEventRange(Z, e),
                                    n = e.dataTransfer;
                                f.Transforms.select(Z, r), es.isDraggingInternally && t && !f.Range.equals(t, r) && !f.Editor.void(Z, {
                                    at: r,
                                    voids: !0
                                }) && f.Transforms.delete(Z, {
                                    at: t
                                }), em.insertData(Z, n), !em.isFocused(Z) && em.focus(Z)
                            }
                            es.isDraggingInternally = !1
                        }, [E, Y.onDrop]),
                        onDragEnd: (0, l.useCallback)(e => {
                            !E && es.isDraggingInternally && Y.onDragEnd && em.hasTarget(Z, e.target) && Y.onDragEnd(e), es.isDraggingInternally = !1
                        }, [E, Y.onDragEnd]),
                        onFocus: (0, l.useCallback)(e => {
                            if (!E && !es.isUpdatingSelection && em.hasEditableTarget(Z, e.target) && !tp(e, Y.onFocus)) {
                                var t = em.toDOMNode(Z, Z),
                                    r = em.findDocumentOrShadowRoot(Z);
                                if (es.latestElement = r.activeElement, ec && e.target !== t) {
                                    t.focus();
                                    return
                                }
                                R.set(Z, !0)
                            }
                        }, [E, Y.onFocus]),
                        onKeyDown: (0, l.useCallback)(e => {
                            if (!E && em.hasEditableTarget(Z, e.target)) {
                                null == ev || ev.handleKeyDown(e);
                                var {
                                    nativeEvent: t
                                } = e;
                                if (em.isComposing(Z) && !1 === t.isComposing && (S.set(Z, !1), ee(!1)), !(tp(e, Y.onKeyDown) || em.isComposing(Z))) {
                                    var {
                                        selection: r
                                    } = Z, n = Z.children[null !== r ? r.focus.path[0] : 0], a = "rtl" === u(f.Node.string(n));
                                    if (eQ.isRedo(t)) {
                                        e.preventDefault();
                                        "function" == typeof Z.redo && Z.redo();
                                        return
                                    }
                                    if (eQ.isUndo(t)) {
                                        e.preventDefault();
                                        "function" == typeof Z.undo && Z.undo();
                                        return
                                    }
                                    if (eQ.isMoveLineBackward(t)) {
                                        e.preventDefault(), f.Transforms.move(Z, {
                                            unit: "line",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (eQ.isMoveLineForward(t)) {
                                        e.preventDefault(), f.Transforms.move(Z, {
                                            unit: "line"
                                        });
                                        return
                                    }
                                    if (eQ.isExtendLineBackward(t)) {
                                        e.preventDefault(), f.Transforms.move(Z, {
                                            unit: "line",
                                            edge: "focus",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (eQ.isExtendLineForward(t)) {
                                        e.preventDefault(), f.Transforms.move(Z, {
                                            unit: "line",
                                            edge: "focus"
                                        });
                                        return
                                    }
                                    if (eQ.isMoveBackward(t)) {
                                        e.preventDefault(), r && f.Range.isCollapsed(r) ? f.Transforms.move(Z, {
                                            reverse: !a
                                        }) : f.Transforms.collapse(Z, {
                                            edge: "start"
                                        });
                                        return
                                    }
                                    if (eQ.isMoveForward(t)) {
                                        e.preventDefault(), r && f.Range.isCollapsed(r) ? f.Transforms.move(Z, {
                                            reverse: a
                                        }) : f.Transforms.collapse(Z, {
                                            edge: "end"
                                        });
                                        return
                                    }
                                    if (eQ.isMoveWordBackward(t)) {
                                        e.preventDefault(), r && f.Range.isExpanded(r) && f.Transforms.collapse(Z, {
                                            edge: "focus"
                                        }), f.Transforms.move(Z, {
                                            unit: "word",
                                            reverse: !a
                                        });
                                        return
                                    }
                                    if (eQ.isMoveWordForward(t)) {
                                        e.preventDefault(), r && f.Range.isExpanded(r) && f.Transforms.collapse(Z, {
                                            edge: "focus"
                                        }), f.Transforms.move(Z, {
                                            unit: "word",
                                            reverse: a
                                        });
                                        return
                                    }
                                    if (eE) {
                                        if ((eD || ed) && r && (eQ.isDeleteBackward(t) || eQ.isDeleteForward(t)) && f.Range.isCollapsed(r)) {
                                            var o = f.Node.parent(Z, r.anchor.path);
                                            if (f.Element.isElement(o) && f.Editor.isVoid(Z, o) && (f.Editor.isInline(Z, o) || f.Editor.isBlock(Z, o))) {
                                                e.preventDefault(), f.Editor.deleteBackward(Z, {
                                                    unit: "block"
                                                });
                                                return
                                            }
                                        }
                                    } else {
                                        if (eQ.isBold(t) || eQ.isItalic(t) || eQ.isTransposeCharacter(t)) {
                                            e.preventDefault();
                                            return
                                        }
                                        if (eQ.isSoftBreak(t)) {
                                            e.preventDefault(), f.Editor.insertSoftBreak(Z);
                                            return
                                        }
                                        if (eQ.isSplitBlock(t)) {
                                            e.preventDefault(), f.Editor.insertBreak(Z);
                                            return
                                        }
                                        if (eQ.isDeleteBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Z);
                                            return
                                        }
                                        if (eQ.isDeleteForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Z);
                                            return
                                        }
                                        if (eQ.isDeleteLineBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Z, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (eQ.isDeleteLineForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Z, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (eQ.isDeleteWordBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Z, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                        if (eQ.isDeleteWordForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Z, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                    }
                                }
                            }
                        }, [E, Y.onKeyDown]),
                        onPaste: (0, l.useCallback)(e => {
                            !E && em.hasEditableTarget(Z, e.target) && !tp(e, Y.onPaste) && (!eE || G(e.nativeEvent) || ed) && (e.preventDefault(), em.insertData(Z, e.clipboardData))
                        }, [E, Y.onPaste])
                    }), c.createElement(td, {
                        decorations: eb,
                        node: Z,
                        renderElement: m,
                        renderPlaceholder: x,
                        renderLeaf: A,
                        selection: Z.selection
                    })))))
                },
                tD = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return c.createElement("span", Object.assign({}, t), r, el && c.createElement("br", null))
                },
                th = () => [],
                tv = (e, t) => {
                    if (t.getBoundingClientRect && (!e.selection || e.selection && f.Range.isCollapsed(e.selection))) {
                        var r = t.startContainer.parentElement;
                        r.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, d.default)(r, {
                            scrollMode: "if-needed"
                        }), delete r.getBoundingClientRect
                    }
                },
                tp = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped()
                },
                tC = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.defaultPrevented
                },
                tg = (0, l.createContext)(!1),
                tB = () => (0, l.useContext)(tg),
                tE = (0, l.createContext)({}),
                tm = ["editor", "children", "onChange", "value"],
                tA = e => {
                    var t, r, n, u, {
                            editor: a,
                            children: o,
                            onChange: i,
                            value: s
                        } = e,
                        d = g(e, tm),
                        D = (0, l.useRef)(!1),
                        [h, v] = c.useState(() => {
                            if (!f.Node.isNodeList(s)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(f.Scrubber.stringify(s)));
                            if (!f.Editor.isEditor(a)) throw Error("[Slate] editor is invalid! You passed: ".concat(f.Scrubber.stringify(a)));
                            return a.children = s, Object.assign(a, d), {
                                v: 0,
                                editor: a
                            }
                        });
                    var {
                        selectorContext: p,
                        onChange: C
                    } = (t = a, r = (0, l.useRef)([]).current, n = (0, l.useRef)({
                        editor: t
                    }).current, u = (0, l.useCallback)(e => {
                        n.editor = e, r.forEach(t => t(e))
                    }, []), {
                        selectorContext: (0, l.useMemo)(() => ({
                            getSlate: () => n.editor,
                            addEventListener: e => (r.push(e), () => {
                                r.splice(r.indexOf(e), 1)
                            })
                        }), [r, n]),
                        onChange: u
                    }), B = (0, l.useCallback)(() => {
                        i && i(a.children), v(e => ({
                            v: e.v + 1,
                            editor: a
                        })), C(a)
                    }, [i]);
                    (0, l.useEffect)(() => (j.set(a, B), () => {
                        j.set(a, () => {}), D.current = !0
                    }), [B]);
                    var [E, m] = (0, l.useState)(em.isFocused(a));
                    return (0, l.useEffect)(() => {
                        m(em.isFocused(a))
                    }), ex(() => {
                        var e = () => m(em.isFocused(a));
                        return eo ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
                        }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
                            document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
                        })
                    }, []), c.createElement(tE.Provider, {
                        value: p
                    }, c.createElement(e$.Provider, {
                        value: h
                    }, c.createElement(eT.Provider, {
                        value: h.editor
                    }, c.createElement(tg.Provider, {
                        value: E
                    }, o))))
                },
                tF = (e, t) => {
                    var r = (t.top + t.bottom) / 2;
                    return e.top <= r && e.bottom >= r
                },
                tb = (e, t, r) => {
                    var n = em.toDOMRange(e, t).getBoundingClientRect(),
                        u = em.toDOMRange(e, r).getBoundingClientRect();
                    return tF(n, u) && tF(u, n)
                },
                ty = (e, t) => {
                    var r = f.Editor.range(e, f.Range.end(t)),
                        n = Array.from(f.Editor.positions(e, {
                            at: t
                        })),
                        u = 0,
                        a = n.length,
                        o = Math.floor(a / 2);
                    if (tb(e, f.Editor.range(e, n[u]), r)) return f.Editor.range(e, n[u], r);
                    if (n.length < 2) return f.Editor.range(e, n[n.length - 1], r);
                    for (; o !== n.length && o !== u;) tb(e, f.Editor.range(e, n[o]), r) ? a = o : u = o, o = Math.floor((u + a) / 2);
                    return f.Editor.range(e, n[a], r)
                };

            function tw(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tO(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tw(Object(r), !0).forEach(function(t) {
                        C(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tx = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                        {
                            apply: r,
                            onChange: n,
                            deleteBackward: u,
                            addMark: a,
                            removeMark: o
                        } = e;
                    return k.set(e, new WeakMap), e.addMark = (t, r) => {
                        var n, u;
                        null === (n = N.get(e)) || void 0 === n || n(), !M.get(e) && null !== (u = W.get(e)) && void 0 !== u && u.length && M.set(e, null), z.delete(e), a(t, r)
                    }, e.removeMark = t => {
                        var r;
                        !M.get(e) && null !== (r = W.get(e)) && void 0 !== r && r.length && M.set(e, null), z.delete(e), o(t)
                    }, e.deleteBackward = t => {
                        if ("line" !== t) return u(t);
                        if (e.selection && f.Range.isCollapsed(e.selection)) {
                            var r = f.Editor.above(e, {
                                match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
                                at: e.selection
                            });
                            if (r) {
                                var [, n] = r, a = f.Editor.range(e, n, e.selection.anchor), o = ty(e, a);
                                !f.Range.isCollapsed(o) && f.Transforms.delete(e, {
                                    at: o
                                })
                            }
                        }
                    }, e.apply = t => {
                        var n, u = [],
                            a = W.get(e);
                        if (null != a && a.length) {
                            var o = a.map(e => (function(e, t) {
                                var {
                                    path: r,
                                    diff: n,
                                    id: u
                                } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!f.Path.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset <= n.start) return {
                                            diff: {
                                                start: t.text.length + n.start,
                                                end: t.text.length + n.end,
                                                text: n.text
                                            },
                                            id: u,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start,
                                                end: n.end + t.text.length,
                                                text: n.text
                                            }, id: u, path: r
                                        };
                                    case "remove_text":
                                        if (!f.Path.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset + t.text.length <= n.start) return {
                                            diff: {
                                                start: n.start - t.text.length,
                                                end: n.end - t.text.length,
                                                text: n.text
                                            },
                                            id: u,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start,
                                                end: n.end - t.text.length,
                                                text: n.text
                                            }, id: u, path: r
                                        };
                                    case "split_node":
                                        if (!f.Path.equals(t.path, r) || t.position >= n.end) return {
                                            diff: n,
                                            id: u,
                                            path: f.Path.transform(r, t, {
                                                affinity: "backward"
                                            })
                                        };
                                        if (t.position > n.start) return {
                                            diff: {
                                                start: n.start,
                                                end: Math.min(t.position, n.end),
                                                text: n.text
                                            },
                                            id: u,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start - t.position,
                                                end: n.end - t.position,
                                                text: n.text
                                            }, id: u, path: f.Path.transform(r, t, {
                                                affinity: "forward"
                                            })
                                        };
                                    case "merge_node":
                                        if (!f.Path.equals(t.path, r)) return {
                                            diff: n,
                                            id: u,
                                            path: f.Path.transform(r, t)
                                        };
                                        return {
                                            diff: {
                                                start: n.start + t.position,
                                                end: n.end + t.position,
                                                text: n.text
                                            }, id: u, path: f.Path.transform(r, t)
                                        }
                                }
                                var a = f.Path.transform(r, t);
                                return a ? {
                                    diff: n,
                                    path: a,
                                    id: u
                                } : null
                            })(e, t)).filter(Boolean);
                            W.set(e, o)
                        }
                        var i = L.get(e);
                        i && L.set(e, e6(e, i, t));
                        var s = _.get(e);
                        if (null != s && s.at) {
                            var l = f.Point.isPoint(null == s ? void 0 : s.at) ? e5(e, s.at, t) : e6(e, s.at, t);
                            _.set(e, l ? tO(tO({}, s), {}, {
                                at: l
                            }) : null)
                        }
                        switch (t.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                            case "split_node":
                                u.push(...tk(e, t.path));
                                break;
                            case "set_selection":
                                null === (n = T.get(e)) || void 0 === n || n.unref(), T.delete(e);
                                break;
                            case "insert_node":
                            case "remove_node":
                                u.push(...tk(e, f.Path.parent(t.path)));
                                break;
                            case "merge_node":
                                u.push(...tk(e, f.Path.previous(t.path)));
                                break;
                            case "move_node":
                                u.push(...tk(e, f.Path.common(f.Path.parent(t.path), f.Path.parent(t.newPath))))
                        }
                        for (var [c, d] of(r(t), u)) {
                            var [D] = f.Editor.node(e, c);
                            x.set(D, d)
                        }
                    }, e.setFragmentData = r => {
                        var {
                            selection: n
                        } = e;
                        if (!!n) {
                            var [u, a] = f.Range.edges(n), o = f.Editor.void(e, {
                                at: u.path
                            }), i = f.Editor.void(e, {
                                at: a.path
                            });
                            if (!f.Range.isCollapsed(n) || o) {
                                var s = em.toDOMRange(e, n),
                                    l = s.cloneContents(),
                                    c = l.childNodes[0];
                                if (l.childNodes.forEach(e => {
                                        e.textContent && "" !== e.textContent.trim() && (c = e)
                                    }), i) {
                                    var [d] = i, D = s.cloneRange(), h = em.toDOMNode(e, d);
                                    D.setEndAfter(h), l = D.cloneContents()
                                }
                                if (o && (c = l.querySelector("[data-slate-spacer]")), Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
                                        var t = "n" === e.getAttribute("data-slate-zero-width");
                                        e.textContent = t ? "\n" : ""
                                    }), Y(c)) {
                                    var v = c.ownerDocument.createElement("span");
                                    v.style.whiteSpace = "pre", v.appendChild(c), l.appendChild(v), c = v
                                }
                                var p = JSON.stringify(e.getFragment()),
                                    C = window.btoa(encodeURIComponent(p));
                                c.setAttribute("data-slate-fragment", C), r.setData("application/".concat(t), C);
                                var g = l.ownerDocument.createElement("div");
                                return g.appendChild(l), g.setAttribute("hidden", "true"), l.ownerDocument.body.appendChild(g), r.setData("text/html", g.innerHTML), r.setData("text/plain", er(g)), l.ownerDocument.body.removeChild(g), r
                            }
                        }
                    }, e.insertData = t => {
                        !e.insertFragmentData(t) && e.insertTextData(t)
                    }, e.insertFragmentData = r => {
                        var n = r.getData("application/".concat(t)) || eu(r);
                        if (n) {
                            var u = JSON.parse(decodeURIComponent(window.atob(n)));
                            return e.insertFragment(u), !0
                        }
                        return !1
                    }, e.insertTextData = t => {
                        var r = t.getData("text/plain");
                        if (r) {
                            var n = r.split(/\r\n|\r|\n/),
                                u = !1;
                            for (var a of n) u && f.Transforms.splitNodes(e, {
                                always: !0
                            }), e.insertText(a), u = !0;
                            return !0
                        }
                        return !1
                    }, e.onChange = t => {
                        p.unstable_batchedUpdates(() => {
                            var r = j.get(e);
                            r && r(), n(t)
                        })
                    }, e
                },
                tk = (e, t) => {
                    var r = [];
                    for (var [n, u] of f.Editor.levels(e, {
                            at: t
                        })) {
                        var a = em.findKey(e, n);
                        r.push([u, a])
                    }
                    return r
                }
        },
        987295: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Editor: function() {
                    return Z
                },
                Element: function() {
                    return U
                },
                Node: function() {
                    return en
                },
                Path: function() {
                    return ei
                },
                Point: function() {
                    return ed
                },
                Range: function() {
                    return ev
                },
                Scrubber: function() {
                    return eg
                },
                Text: function() {
                    return eb
                },
                Transforms: function() {
                    return e_
                },
                createEditor: function() {
                    return C
                }
            });
            var n, u, a = r("156336"),
                o = r("746140");

            function i(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var s = new WeakMap,
                l = new WeakMap,
                c = new WeakMap,
                d = new WeakMap,
                f = new WeakMap,
                D = new WeakMap,
                h = new WeakMap;

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var C = () => {
                var e = {
                    children: [],
                    operations: [],
                    selection: null,
                    marks: null,
                    isInline: () => !1,
                    isVoid: () => !1,
                    markableVoid: () => !1,
                    onChange: () => {},
                    apply: t => {
                        for (var r of Z.pathRefs(e)) es.transform(r, t);
                        for (var n of Z.pointRefs(e)) ef.transform(n, t);
                        for (var u of Z.rangeRefs(e)) ep.transform(u, t);
                        var a, o, i = s.get(e) || [],
                            d = l.get(e) || new Set,
                            f = e => {
                                if (e) {
                                    var t = e.join(",");
                                    !o.has(t) && (o.add(t), a.push(e))
                                }
                            };
                        if (ei.operationCanTransformPath(t))
                            for (var D of (a = [], o = new Set, i)) f(ei.transform(D, t));
                        else a = i, o = d;
                        for (var h of e.getDirtyPaths(t)) f(h);
                        s.set(e, a), l.set(e, o), e_.transform(e, t), e.operations.push(t), Z.normalize(e, {
                            operation: t
                        }), "set_selection" === t.type && (e.marks = null), !c.get(e) && (c.set(e, !0), Promise.resolve().then(() => {
                            c.set(e, !1), e.onChange({
                                operation: t
                            }), e.operations = []
                        }))
                    },
                    addMark: (t, r) => {
                        var {
                            selection: n,
                            markableVoid: u
                        } = e;
                        if (n) {
                            var a = (t, r) => {
                                    if (!eb.isText(t)) return !1;
                                    var [n, u] = Z.parent(e, r);
                                    return !e.isVoid(n) || e.markableVoid(n)
                                },
                                o = ev.isExpanded(n),
                                i = !1;
                            if (!o) {
                                var [s, l] = Z.node(e, n);
                                if (s && a(s, l)) {
                                    var [d] = Z.parent(e, l);
                                    i = d && e.markableVoid(d)
                                }
                            }
                            if (o || i) e_.setNodes(e, {
                                [t]: r
                            }, {
                                match: a,
                                split: !0,
                                voids: !0
                            });
                            else {
                                var f = p(p({}, Z.marks(e) || {}), {}, {
                                    [t]: r
                                });
                                e.marks = f, !c.get(e) && e.onChange()
                            }
                        }
                    },
                    deleteBackward: t => {
                        var {
                            selection: r
                        } = e;
                        r && ev.isCollapsed(r) && e_.delete(e, {
                            unit: t,
                            reverse: !0
                        })
                    },
                    deleteForward: t => {
                        var {
                            selection: r
                        } = e;
                        r && ev.isCollapsed(r) && e_.delete(e, {
                            unit: t
                        })
                    },
                    deleteFragment: t => {
                        var {
                            selection: r
                        } = e;
                        r && ev.isExpanded(r) && e_.delete(e, {
                            reverse: "backward" === t
                        })
                    },
                    getFragment: () => {
                        var {
                            selection: t
                        } = e;
                        return t ? en.fragment(e, t) : []
                    },
                    insertBreak: () => {
                        e_.splitNodes(e, {
                            always: !0
                        })
                    },
                    insertSoftBreak: () => {
                        e_.splitNodes(e, {
                            always: !0
                        })
                    },
                    insertFragment: t => {
                        e_.insertFragment(e, t)
                    },
                    insertNode: t => {
                        e_.insertNodes(e, t)
                    },
                    insertText: t => {
                        var {
                            selection: r,
                            marks: n
                        } = e;
                        if (r) {
                            if (n) {
                                var u = p({
                                    text: t
                                }, n);
                                e_.insertNodes(e, u)
                            } else e_.insertText(e, t);
                            e.marks = null
                        }
                    },
                    normalizeNode: t => {
                        var [r, n] = t;
                        if (!eb.isText(r)) {
                            if (U.isElement(r) && 0 === r.children.length) {
                                e_.insertNodes(e, {
                                    text: ""
                                }, {
                                    at: n.concat(0),
                                    voids: !0
                                });
                                return
                            }
                            for (var u = !Z.isEditor(r) && U.isElement(r) && (e.isInline(r) || 0 === r.children.length || eb.isText(r.children[0]) || e.isInline(r.children[0])), a = 0, o = 0; o < r.children.length; o++, a++) {
                                var i = en.get(e, n);
                                if (!eb.isText(i)) {
                                    var s = r.children[o],
                                        l = i.children[a - 1],
                                        c = o === r.children.length - 1;
                                    if ((eb.isText(s) || U.isElement(s) && e.isInline(s)) !== u) e_.removeNodes(e, {
                                        at: n.concat(a),
                                        voids: !0
                                    }), a--;
                                    else if (U.isElement(s)) {
                                        if (e.isInline(s)) {
                                            if (null != l && eb.isText(l)) {
                                                if (c) {
                                                    var d = {
                                                        text: ""
                                                    };
                                                    e_.insertNodes(e, d, {
                                                        at: n.concat(a + 1),
                                                        voids: !0
                                                    }), a++
                                                }
                                            } else {
                                                var f = {
                                                    text: ""
                                                };
                                                e_.insertNodes(e, f, {
                                                    at: n.concat(a),
                                                    voids: !0
                                                }), a++
                                            }
                                        }
                                    } else null != l && eb.isText(l) && (eb.equals(s, l, {
                                        loose: !0
                                    }) ? (e_.mergeNodes(e, {
                                        at: n.concat(a),
                                        voids: !0
                                    }), a--) : "" === l.text ? (e_.removeNodes(e, {
                                        at: n.concat(a - 1),
                                        voids: !0
                                    }), a--) : "" === s.text && (e_.removeNodes(e, {
                                        at: n.concat(a),
                                        voids: !0
                                    }), a--))
                                }
                            }
                        }
                    },
                    removeMark: t => {
                        var {
                            selection: r
                        } = e;
                        if (r) {
                            var n = (t, r) => {
                                    if (!eb.isText(t)) return !1;
                                    var [n, u] = Z.parent(e, r);
                                    return !e.isVoid(n) || e.markableVoid(n)
                                },
                                u = ev.isExpanded(r),
                                a = !1;
                            if (!u) {
                                var [o, i] = Z.node(e, r);
                                if (o && n(o, i)) {
                                    var [s] = Z.parent(e, i);
                                    a = s && e.markableVoid(s)
                                }
                            }
                            if (u || a) e_.unsetNodes(e, t, {
                                match: n,
                                split: !0,
                                voids: !0
                            });
                            else {
                                var l = p({}, Z.marks(e) || {});
                                delete l[t], e.marks = l, !c.get(e) && e.onChange()
                            }
                        }
                    },
                    getDirtyPaths: e => {
                        switch (e.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                                var {
                                    path: t
                                } = e;
                                return ei.levels(t);
                            case "insert_node":
                                var {
                                    node: r, path: n
                                } = e;
                                return [...ei.levels(n), ...eb.isText(r) ? [] : Array.from(en.nodes(r), e => {
                                    var [, t] = e;
                                    return n.concat(t)
                                })];
                            case "merge_node":
                                var {
                                    path: u
                                } = e;
                                return [...ei.ancestors(u), ei.previous(u)];
                            case "move_node":
                                var {
                                    path: a, newPath: o
                                } = e;
                                if (ei.equals(a, o)) return [];
                                var i = [],
                                    s = [];
                                for (var l of ei.ancestors(a)) {
                                    var c = ei.transform(l, e);
                                    i.push(c)
                                }
                                for (var d of ei.ancestors(o)) {
                                    var f = ei.transform(d, e);
                                    s.push(f)
                                }
                                var D = s[s.length - 1],
                                    h = o[o.length - 1];
                                return [...i, ...s, D.concat(h)];
                            case "remove_node":
                                var {
                                    path: v
                                } = e;
                                return [...ei.ancestors(v)];
                            case "split_node":
                                var {
                                    path: p
                                } = e;
                                return [...ei.levels(p), ei.next(p)];
                            default:
                                return []
                        }
                    },
                    shouldNormalize: e => {
                        var {
                            iteration: t,
                            initialDirtyPathsLength: r
                        } = e, n = 42 * r;
                        if (t > n) throw Error("Could not completely normalize the editor after ".concat(n, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
                        return !0
                    }
                };
                return e
            };

            function g(e, t) {
                if (null == e) return {};
                var r, n, u = function(e, t) {
                    if (null == e) return {};
                    var r, n, u = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && (u[r] = e[r]);
                    return u
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        if (r = a[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                    }
                }
                return u
            }
            var B = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !t,
                        n = t ? w(e) : e,
                        a = u.None,
                        o = u.None,
                        i = 0,
                        s = null,
                        l = null;
                    for (var c of n) {
                        var d = c.codePointAt(0);
                        if (!d) break;
                        var f = W(c, d);
                        if ([a, o] = r ? [o, f] : [f, a], function(e, t) {
                                return (e & t) != 0
                            }(a, u.ZWJ) && function(e, t) {
                                return (e & t) != 0
                            }(o, u.ExtPict) && !(s = r ? q(e.substring(0, i)) : q(e.substring(0, e.length - i))) || function(e, t) {
                                return (e & t) != 0
                            }(a, u.RI) && function(e, t) {
                                return (e & t) != 0
                            }(o, u.RI) && !(l = null !== l ? !l : !!r || H(e.substring(0, e.length - i))) || a !== u.None && o !== u.None && function(e, t) {
                                return -1 === L.findIndex(r => (e & r[0]) != 0 && (t & r[1]) != 0)
                            }(a, o)) break;
                        i += c.length
                    }
                    return i || 1
                },
                E = /\s/,
                m = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                A = /['\u2018\u2019]/,
                F = function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0, n = !1; e.length > 0;) {
                        var u = B(e, t),
                            [a, o] = b(e, u, t);
                        if (y(a, o, t)) n = !0, r += u;
                        else if (n) break;
                        else r += u;
                        e = o
                    }
                    return r
                },
                b = (e, t, r) => {
                    if (r) {
                        var n = e.length - t;
                        return [e.slice(n, e.length), e.slice(0, n)]
                    }
                    return [e.slice(0, t), e.slice(t)]
                },
                y = function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (E.test(t)) return !1;
                    if (A.test(t)) {
                        var u = B(r, n),
                            [a, o] = b(r, u, n);
                        if (e(a, o, n)) return !0
                    }
                    return !m.test(t) && !0
                },
                w = function*(e) {
                    for (var t = e.length - 1, r = 0; r < e.length; r++) {
                        var n = e.charAt(t - r);
                        if (x(n.charCodeAt(0))) {
                            var u = e.charAt(t - r - 1);
                            if (O(u.charCodeAt(0))) {
                                yield u + n, r++;
                                continue
                            }
                        }
                        yield n
                    }
                },
                O = e => e >= 55296 && e <= 56319,
                x = e => e >= 56320 && e <= 57343;
            (n = u || (u = {}))[n.None = 0] = "None", n[n.Extend = 1] = "Extend", n[n.ZWJ = 2] = "ZWJ", n[n.RI = 4] = "RI", n[n.Prepend = 8] = "Prepend", n[n.SpacingMark = 16] = "SpacingMark", n[n.L = 32] = "L", n[n.V = 64] = "V", n[n.T = 128] = "T", n[n.LV = 256] = "LV", n[n.LVT = 512] = "LVT", n[n.ExtPict = 1024] = "ExtPict", n[n.Any = 2048] = "Any";
            var k = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
                P = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
                R = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
                S = /^[\u1100-\u115F\uA960-\uA97C]$/,
                T = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
                j = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
                N = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
                M = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
                z = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
                W = (e, t) => {
                    var r = u.Any;
                    return -1 !== e.search(k) && (r |= u.Extend), 8205 === t && (r |= u.ZWJ), t >= 127462 && t <= 127487 && (r |= u.RI), -1 !== e.search(P) && (r |= u.Prepend), -1 !== e.search(R) && (r |= u.SpacingMark), -1 !== e.search(S) && (r |= u.L), -1 !== e.search(T) && (r |= u.V), -1 !== e.search(j) && (r |= u.T), -1 !== e.search(N) && (r |= u.LV), -1 !== e.search(M) && (r |= u.LVT), -1 !== e.search(z) && (r |= u.ExtPict), r
                };

            function _(e, t) {
                return (e & t) != 0
            }
            var L = [
                    [u.L, u.L | u.V | u.LV | u.LVT],
                    [u.LV | u.V, u.V | u.T],
                    [u.LVT | u.T, u.T],
                    [u.Any, u.Extend | u.ZWJ],
                    [u.Any, u.SpacingMark],
                    [u.Prepend, u.Any],
                    [u.ZWJ, u.ExtPict],
                    [u.RI, u.RI]
                ],
                I = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
                q = e => -1 !== e.search(I),
                V = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
                H = e => {
                    var t = e.match(V);
                    return null !== t && t[0].length / 2 % 2 == 1
                },
                K = e => (0, a.isPlainObject)(e) && en.isNodeList(e.children) && !Z.isEditor(e),
                U = {
                    isAncestor: e => (0, a.isPlainObject)(e) && en.isNodeList(e.children),
                    isElement: K,
                    isElementList: e => Array.isArray(e) && e.every(e => U.isElement(e)),
                    isElementProps: e => void 0 !== e.children,
                    isElementType: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
                        return K(e) && e[r] === t
                    },
                    matches(e, t) {
                        for (var r in t)
                            if ("children" !== r && e[r] !== t[r]) return !1;
                        return !0
                    }
                },
                $ = ["text"],
                X = ["text"];

            function J(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var G = new WeakMap,
                Z = {
                    above(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                voids: r = !1,
                                mode: n = "lowest",
                                at: u = e.selection,
                                match: a
                            } = t;
                        if (u) {
                            var o = Z.path(e, u);
                            for (var [i, s] of Z.levels(e, {
                                    at: o,
                                    voids: r,
                                    match: a,
                                    reverse: "lowest" === n
                                }))
                                if (!eb.isText(i)) {
                                    if (ev.isRange(u)) {
                                        if (ei.isAncestor(s, u.anchor.path) && ei.isAncestor(s, u.focus.path)) return [i, s]
                                    } else if (!ei.equals(o, s)) return [i, s]
                                }
                        }
                    },
                    addMark(e, t, r) {
                        e.addMark(t, r)
                    },
                    after(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            u = Z.point(e, t, {
                                edge: "end"
                            }),
                            a = Z.end(e, []),
                            {
                                distance: o = 1
                            } = n,
                            i = 0;
                        for (var s of Z.positions(e, Y(Y({}, n), {}, {
                                at: {
                                    anchor: u,
                                    focus: a
                                }
                            }))) {
                            if (i > o) break;
                            0 !== i && (r = s), i++
                        }
                        return r
                    },
                    before(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            u = Z.start(e, []),
                            a = Z.point(e, t, {
                                edge: "start"
                            }),
                            {
                                distance: o = 1
                            } = n,
                            i = 0;
                        for (var s of Z.positions(e, Y(Y({}, n), {}, {
                                at: {
                                    anchor: u,
                                    focus: a
                                },
                                reverse: !0
                            }))) {
                            if (i > o) break;
                            0 !== i && (r = s), i++
                        }
                        return r
                    },
                    deleteBackward(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: r = "character"
                            } = t;
                        e.deleteBackward(r)
                    },
                    deleteForward(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: r = "character"
                            } = t;
                        e.deleteForward(r)
                    },
                    deleteFragment(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                direction: r = "forward"
                            } = t;
                        e.deleteFragment(r)
                    },
                    edges: (e, t) => [Z.start(e, t), Z.end(e, t)],
                    end: (e, t) => Z.point(e, t, {
                        edge: "end"
                    }),
                    first(e, t) {
                        var r = Z.path(e, t, {
                            edge: "start"
                        });
                        return Z.node(e, r)
                    },
                    fragment(e, t) {
                        var r = Z.range(e, t);
                        return en.fragment(e, r)
                    },
                    hasBlocks: (e, t) => t.children.some(t => U.isElement(t) && Z.isBlock(e, t)),
                    hasInlines: (e, t) => t.children.some(t => eb.isText(t) || Z.isInline(e, t)),
                    hasTexts: (e, t) => t.children.every(e => eb.isText(e)),
                    insertBreak(e) {
                        e.insertBreak()
                    },
                    insertSoftBreak(e) {
                        e.insertSoftBreak()
                    },
                    insertFragment(e, t) {
                        e.insertFragment(t)
                    },
                    insertNode(e, t) {
                        e.insertNode(t)
                    },
                    insertText(e, t) {
                        e.insertText(t)
                    },
                    isBlock: (e, t) => !e.isInline(t),
                    isEditor(e) {
                        var t = G.get(e);
                        if (void 0 !== t) return t;
                        if (!(0, a.isPlainObject)(e)) return !1;
                        var r = "function" == typeof e.addMark && "function" == typeof e.apply && "function" == typeof e.deleteBackward && "function" == typeof e.deleteForward && "function" == typeof e.deleteFragment && "function" == typeof e.insertBreak && "function" == typeof e.insertSoftBreak && "function" == typeof e.insertFragment && "function" == typeof e.insertNode && "function" == typeof e.insertText && "function" == typeof e.isInline && "function" == typeof e.isVoid && "function" == typeof e.normalizeNode && "function" == typeof e.onChange && "function" == typeof e.removeMark && "function" == typeof e.getDirtyPaths && (null === e.marks || (0, a.isPlainObject)(e.marks)) && (null === e.selection || ev.isRange(e.selection)) && en.isNodeList(e.children) && eo.isOperationList(e.operations);
                        return G.set(e, r), r
                    },
                    isEnd(e, t, r) {
                        var n = Z.end(e, r);
                        return ed.equals(t, n)
                    },
                    isEdge: (e, t, r) => Z.isStart(e, t, r) || Z.isEnd(e, t, r),
                    isEmpty(e, t) {
                        var {
                            children: r
                        } = t, [n] = r;
                        return 0 === r.length || 1 === r.length && eb.isText(n) && "" === n.text && !e.isVoid(t)
                    },
                    isInline: (e, t) => e.isInline(t),
                    isNormalizing(e) {
                        var t = d.get(e);
                        return void 0 === t || t
                    },
                    isStart(e, t, r) {
                        if (0 !== t.offset) return !1;
                        var n = Z.start(e, r);
                        return ed.equals(t, n)
                    },
                    isVoid: (e, t) => e.isVoid(t),
                    last(e, t) {
                        var r = Z.path(e, t, {
                            edge: "end"
                        });
                        return Z.node(e, r)
                    },
                    leaf(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = Z.path(e, t, r);
                        return [en.leaf(e, n), n]
                    },
                    * levels(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: r = e.selection,
                                reverse: n = !1,
                                voids: u = !1
                            } = t,
                            {
                                match: a
                            } = t;
                        if (null == a && (a = () => !0), r) {
                            var o = [],
                                i = Z.path(e, r);
                            for (var [s, l] of en.levels(e, i))
                                if (a(s, l) && (o.push([s, l]), !u && U.isElement(s) && Z.isVoid(e, s))) break;
                            n && o.reverse(), yield* o
                        }
                    },
                    marks(e) {
                        var {
                            marks: t,
                            selection: r
                        } = e;
                        if (!r) return null;
                        if (t) return t;
                        if (ev.isExpanded(r)) {
                            var [n] = Z.nodes(e, {
                                match: eb.isText
                            });
                            if (!n) return {};
                            var [u] = n;
                            return g(u, $)
                        }
                        var {
                            anchor: a
                        } = r, {
                            path: o
                        } = a, [i] = Z.leaf(e, o);
                        if (0 === a.offset) {
                            var s = Z.previous(e, {
                                at: o,
                                match: eb.isText
                            });
                            if (!Z.above(e, {
                                    match: t => U.isElement(t) && Z.isVoid(e, t) && e.markableVoid(t)
                                })) {
                                var l = Z.above(e, {
                                    match: t => U.isElement(t) && Z.isBlock(e, t)
                                });
                                if (s && l) {
                                    var [c, d] = s, [, f] = l;
                                    ei.isAncestor(f, d) && (i = c)
                                }
                            }
                        }
                        return g(i, X)
                    },
                    next(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: r = "lowest",
                                voids: n = !1
                            } = t,
                            {
                                match: u,
                                at: a = e.selection
                            } = t;
                        if (!!a) {
                            var o = Z.after(e, a, {
                                voids: n
                            });
                            if (o) {
                                var [, i] = Z.last(e, []), s = [o.path, i];
                                if (ei.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                                if (null == u) {
                                    if (ei.isPath(a)) {
                                        var [l] = Z.parent(e, a);
                                        u = e => l.children.includes(e)
                                    } else u = () => !0
                                }
                                var [c] = Z.nodes(e, {
                                    at: s,
                                    match: u,
                                    mode: r,
                                    voids: n
                                });
                                return c
                            }
                        }
                    },
                    node(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = Z.path(e, t, r);
                        return [en.get(e, n), n]
                    },
                    * nodes(e) {
                        var t, r, n, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: a = e.selection,
                                mode: o = "all",
                                universal: i = !1,
                                reverse: s = !1,
                                voids: l = !1
                            } = u,
                            {
                                match: c
                            } = u;
                        if (!c && (c = () => !0), a) {
                            if (Q.isSpan(a)) t = a[0], r = a[1];
                            else {
                                var d = Z.path(e, a, {
                                        edge: "start"
                                    }),
                                    f = Z.path(e, a, {
                                        edge: "end"
                                    });
                                t = s ? f : d, r = s ? d : f
                            }
                            var D = en.nodes(e, {
                                    reverse: s,
                                    from: t,
                                    to: r,
                                    pass: t => {
                                        var [r] = t;
                                        return !l && U.isElement(r) && Z.isVoid(e, r)
                                    }
                                }),
                                h = [];
                            for (var [v, p] of D) {
                                var C = n && 0 === ei.compare(p, n[1]);
                                if ("highest" !== o || !C) {
                                    if (!c(v, p)) {
                                        if (i && !C && eb.isText(v)) return;
                                        continue
                                    }
                                    if ("lowest" === o && C) {
                                        n = [v, p];
                                        continue
                                    }
                                    var g = "lowest" === o ? n : [v, p];
                                    g && (i ? h.push(g) : yield g), n = [v, p]
                                }
                            }
                            "lowest" === o && n && (i ? h.push(n) : yield n), i && (yield* h)
                        }
                    },
                    normalize(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                force: r = !1,
                                operation: n
                            } = t,
                            u = e => s.get(e) || [],
                            a = e => l.get(e) || new Set,
                            o = e => {
                                var t = u(e).pop(),
                                    r = t.join(",");
                                return a(e).delete(r), t
                            };
                        if (!!Z.isNormalizing(e)) {
                            if (r) {
                                var i = Array.from(en.nodes(e), e => {
                                        var [, t] = e;
                                        return t
                                    }),
                                    c = new Set(i.map(e => e.join(",")));
                                s.set(e, i), l.set(e, c)
                            }
                            0 !== u(e).length && Z.withoutNormalizing(e, () => {
                                for (var t of u(e))
                                    if (en.has(e, t)) {
                                        var r = Z.node(e, t),
                                            [a, i] = r;
                                        U.isElement(a) && 0 === a.children.length && e.normalizeNode(r, {
                                            operation: n
                                        })
                                    } for (var s = u(e), l = s.length, c = 0; 0 !== s.length;) {
                                    if (!e.shouldNormalize({
                                            dirtyPaths: s,
                                            iteration: c,
                                            initialDirtyPathsLength: l,
                                            operation: n
                                        })) return;
                                    var d = o(e);
                                    if (en.has(e, d)) {
                                        var f = Z.node(e, d);
                                        e.normalizeNode(f, {
                                            operation: n
                                        })
                                    }
                                    c++, s = u(e)
                                }
                            })
                        }
                    },
                    parent(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = Z.path(e, t, r),
                            u = ei.parent(n);
                        return Z.node(e, u)
                    },
                    path(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                depth: n,
                                edge: u
                            } = r;
                        if (ei.isPath(t)) {
                            if ("start" === u) {
                                var [, a] = en.first(e, t);
                                t = a
                            } else if ("end" === u) {
                                var [, o] = en.last(e, t);
                                t = o
                            }
                        }
                        return ev.isRange(t) && (t = "start" === u ? ev.start(t) : "end" === u ? ev.end(t) : ei.common(t.anchor.path, t.focus.path)), ed.isPoint(t) && (t = t.path), null != n && (t = t.slice(0, n)), t
                    },
                    hasPath: (e, t) => en.has(e, t),
                    pathRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            u = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = u;
                                    return Z.pathRefs(e).delete(u), u.current = null, t
                                }
                            };
                        return Z.pathRefs(e).add(u), u
                    },
                    pathRefs(e) {
                        var t = f.get(e);
                        return !t && (t = new Set, f.set(e, t)), t
                    },
                    point(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                edge: n = "start"
                            } = r;
                        if (ei.isPath(t)) {
                            if ("end" === n) {
                                var u, [, a] = en.last(e, t);
                                u = a
                            } else {
                                var [, o] = en.first(e, t);
                                u = o
                            }
                            var i = en.get(e, u);
                            if (!eb.isText(i)) throw Error("Cannot get the ".concat(n, " point in the node at path [").concat(t, "] because it has no ").concat(n, " text node."));
                            return {
                                path: u,
                                offset: "end" === n ? i.text.length : 0
                            }
                        }
                        if (ev.isRange(t)) {
                            var [s, l] = ev.edges(t);
                            return "start" === n ? s : l
                        }
                        return t
                    },
                    pointRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            u = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = u;
                                    return Z.pointRefs(e).delete(u), u.current = null, t
                                }
                            };
                        return Z.pointRefs(e).add(u), u
                    },
                    pointRefs(e) {
                        var t = D.get(e);
                        return !t && (t = new Set, D.set(e, t)), t
                    },
                    * positions(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: r = e.selection,
                                unit: n = "offset",
                                reverse: u = !1,
                                voids: a = !1
                            } = t;
                        if (r) {
                            var o = Z.range(e, r),
                                [i, s] = ev.edges(o),
                                l = u ? s : i,
                                c = !1,
                                d = "",
                                f = 0,
                                D = 0,
                                h = 0;
                            for (var [v, p] of Z.nodes(e, {
                                    at: r,
                                    reverse: u,
                                    voids: a
                                })) {
                                if (U.isElement(v)) {
                                    if (!a && e.isVoid(v)) {
                                        yield Z.start(e, p);
                                        continue
                                    }
                                    if (e.isInline(v)) continue;
                                    if (Z.hasInlines(e, v)) {
                                        var C = ei.isAncestor(p, s.path) ? s : Z.end(e, p),
                                            g = ei.isAncestor(p, i.path) ? i : Z.start(e, p);
                                        d = Z.string(e, {
                                            anchor: g,
                                            focus: C
                                        }, {
                                            voids: a
                                        }), c = !0
                                    }
                                }
                                if (eb.isText(v)) {
                                    var E = ei.equals(p, l.path);
                                    for (E ? (D = u ? l.offset : v.text.length - l.offset, h = l.offset) : (D = v.text.length, h = u ? D : 0), (E || c || "offset" === n) && (yield {
                                            path: p,
                                            offset: h
                                        }, c = !1);;) {
                                        if (0 === f) {
                                            if ("" === d) break;
                                            f = function(e, t, r) {
                                                if ("character" === t) return B(e, r);
                                                if ("word" === t) return F(e, r);
                                                if ("line" === t || "block" === t) return e.length;
                                                return 1
                                            }(d, n, u), d = b(d, f, u)[1]
                                        }
                                        if (h = u ? h - f : h + f, (D -= f) < 0) {
                                            f = -D;
                                            break
                                        }
                                        f = 0, yield {
                                            path: p,
                                            offset: h
                                        }
                                    }
                                }
                            }
                        }
                    },
                    previous(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: r = "lowest",
                                voids: n = !1
                            } = t,
                            {
                                match: u,
                                at: a = e.selection
                            } = t;
                        if (!!a) {
                            var o = Z.before(e, a, {
                                voids: n
                            });
                            if (o) {
                                var [, i] = Z.first(e, []), s = [o.path, i];
                                if (ei.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                                if (null == u) {
                                    if (ei.isPath(a)) {
                                        var [l] = Z.parent(e, a);
                                        u = e => l.children.includes(e)
                                    } else u = () => !0
                                }
                                var [c] = Z.nodes(e, {
                                    reverse: !0,
                                    at: s,
                                    match: u,
                                    mode: r,
                                    voids: n
                                });
                                return c
                            }
                        }
                    },
                    range: (e, t, r) => ev.isRange(t) && !r ? t : {
                        anchor: Z.start(e, t),
                        focus: Z.end(e, r || t)
                    },
                    rangeRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            u = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = u;
                                    return Z.rangeRefs(e).delete(u), u.current = null, t
                                }
                            };
                        return Z.rangeRefs(e).add(u), u
                    },
                    rangeRefs(e) {
                        var t = h.get(e);
                        return !t && (t = new Set, h.set(e, t)), t
                    },
                    removeMark(e, t) {
                        e.removeMark(t)
                    },
                    setNormalizing(e, t) {
                        d.set(e, t)
                    },
                    start: (e, t) => Z.point(e, t, {
                        edge: "start"
                    }),
                    string(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: n = !1
                            } = r,
                            u = Z.range(e, t),
                            [a, o] = ev.edges(u),
                            i = "";
                        for (var [s, l] of Z.nodes(e, {
                                at: u,
                                match: eb.isText,
                                voids: n
                            })) {
                            var c = s.text;
                            ei.equals(l, o.path) && (c = c.slice(0, o.offset)), ei.equals(l, a.path) && (c = c.slice(a.offset)), i += c
                        }
                        return i
                    },
                    unhangRange(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: n = !1
                            } = r,
                            [u, a] = ev.edges(t);
                        if (0 !== u.offset || 0 !== a.offset || ev.isCollapsed(t) || ei.hasPrevious(a.path)) return t;
                        var o = Z.above(e, {
                                at: a,
                                match: t => U.isElement(t) && Z.isBlock(e, t),
                                voids: n
                            }),
                            i = o ? o[1] : [],
                            s = {
                                anchor: Z.start(e, u),
                                focus: a
                            },
                            l = !0;
                        for (var [c, d] of Z.nodes(e, {
                                at: s,
                                match: eb.isText,
                                reverse: !0,
                                voids: n
                            })) {
                            if (l) {
                                l = !1;
                                continue
                            }
                            if ("" !== c.text || ei.isBefore(d, i)) {
                                a = {
                                    path: d,
                                    offset: c.text.length
                                };
                                break
                            }
                        }
                        return {
                            anchor: u,
                            focus: a
                        }
                    },
                    void(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Z.above(e, Y(Y({}, t), {}, {
                            match: t => U.isElement(t) && Z.isVoid(e, t)
                        }))
                    },
                    withoutNormalizing(e, t) {
                        var r = Z.isNormalizing(e);
                        Z.setNormalizing(e, !1);
                        try {
                            t()
                        } finally {
                            Z.setNormalizing(e, r)
                        }
                        Z.normalize(e)
                    }
                },
                Q = {
                    isSpan: e => Array.isArray(e) && 2 === e.length && e.every(ei.isPath)
                },
                ee = ["children"],
                et = ["text"],
                er = new WeakMap,
                en = {
                    ancestor(e, t) {
                        var r = en.get(e, t);
                        if (eb.isText(r)) throw Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(eg.stringify(r)));
                        return r
                    },
                    * ancestors(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var n of ei.ancestors(t, r)) {
                            var u = [en.ancestor(e, n), n];
                            yield u
                        }
                    },
                    child(e, t) {
                        if (eb.isText(e)) throw Error("Cannot get the child of a text node: ".concat(eg.stringify(e)));
                        var r = e.children[t];
                        if (null == r) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(eg.stringify(e)));
                        return r
                    },
                    * children(e, t) {
                        for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                                reverse: n = !1
                            } = r, u = en.ancestor(e, t), {
                                children: a
                            } = u, o = n ? a.length - 1 : 0; n ? o >= 0 : o < a.length;) {
                            var i = en.child(u, o),
                                s = t.concat(o);
                            yield [i, s], o = n ? o - 1 : o + 1
                        }
                    },
                    common(e, t, r) {
                        var n = ei.common(t, r);
                        return [en.get(e, n), n]
                    },
                    descendant(e, t) {
                        var r = en.get(e, t);
                        if (Z.isEditor(r)) throw Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(eg.stringify(r)));
                        return r
                    },
                    * descendants(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of en.nodes(e, t)) 0 !== n.length && (yield [r, n])
                    },
                    * elements(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of en.nodes(e, t)) U.isElement(r) && (yield [r, n])
                    },
                    extractProps(e) {
                        if (U.isAncestor(e)) {
                            var t = g(e, ee);
                            return t
                        }
                        var t = g(e, et);
                        return t
                    },
                    first(e, t) {
                        for (var r = t.slice(), n = en.get(e, r); n && !eb.isText(n) && 0 !== n.children.length;) {
                            ;
                            n = n.children[0], r.push(0)
                        }
                        return [n, r]
                    },
                    fragment(e, t) {
                        if (eb.isText(e)) throw Error("Cannot get a fragment starting from a root text node: ".concat(eg.stringify(e)));
                        return (0, o.produce)({
                            children: e.children
                        }, e => {
                            var [r, n] = ev.edges(t);
                            for (var [, u] of en.nodes(e, {
                                    reverse: !0,
                                    pass: e => {
                                        var [, r] = e;
                                        return !ev.includes(t, r)
                                    }
                                })) {
                                if (!ev.includes(t, u)) {
                                    var a = en.parent(e, u),
                                        o = u[u.length - 1];
                                    a.children.splice(o, 1)
                                }
                                if (ei.equals(u, n.path)) {
                                    var i = en.leaf(e, u);
                                    i.text = i.text.slice(0, n.offset)
                                }
                                if (ei.equals(u, r.path)) {
                                    var s = en.leaf(e, u);
                                    s.text = s.text.slice(r.offset)
                                }
                            }
                            Z.isEditor(e) && (e.selection = null)
                        }).children
                    },
                    get(e, t) {
                        for (var r = e, n = 0; n < t.length; n++) {
                            var u = t[n];
                            if (eb.isText(r) || !r.children[u]) throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(eg.stringify(e)));
                            r = r.children[u]
                        }
                        return r
                    },
                    has(e, t) {
                        for (var r = e, n = 0; n < t.length; n++) {
                            var u = t[n];
                            if (eb.isText(r) || !r.children[u]) return !1;
                            r = r.children[u]
                        }
                        return !0
                    },
                    isNode: e => eb.isText(e) || U.isElement(e) || Z.isEditor(e),
                    isNodeList(e) {
                        if (!Array.isArray(e)) return !1;
                        var t = er.get(e);
                        if (void 0 !== t) return t;
                        var r = e.every(e => en.isNode(e));
                        return er.set(e, r), r
                    },
                    last(e, t) {
                        for (var r = t.slice(), n = en.get(e, r); n && !eb.isText(n) && 0 !== n.children.length;) {
                            ;
                            var u = n.children.length - 1;
                            n = n.children[u], r.push(u)
                        }
                        return [n, r]
                    },
                    leaf(e, t) {
                        var r = en.get(e, t);
                        if (!eb.isText(r)) throw Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(eg.stringify(r)));
                        return r
                    },
                    * levels(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var n of ei.levels(t, r)) {
                            var u = en.get(e, n);
                            yield [u, n]
                        }
                    },
                    matches: (e, t) => U.isElement(e) && U.isElementProps(t) && U.matches(e, t) || eb.isText(e) && eb.isTextProps(t) && eb.matches(e, t),
                    * nodes(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                pass: r,
                                reverse: n = !1
                            } = t, {
                                from: u = [],
                                to: a
                            } = t, o = new Set, i = [], s = e; !(a && (n ? ei.isBefore(i, a) : ei.isAfter(i, a)));) {
                            ;
                            if (!o.has(s) && (yield [s, i]), !o.has(s) && !eb.isText(s) && 0 !== s.children.length && (null == r || !1 === r([s, i]))) {
                                o.add(s);
                                var l = n ? s.children.length - 1 : 0;
                                ei.isAncestor(i, u) && (l = u[i.length]), i = i.concat(l), s = en.get(e, i);
                                continue
                            }
                            if (0 === i.length) break;
                            if (!n) {
                                var c = ei.next(i);
                                if (en.has(e, c)) {
                                    i = c, s = en.get(e, i);
                                    continue
                                }
                            }
                            if (n && 0 !== i[i.length - 1]) {
                                i = ei.previous(i), s = en.get(e, i);
                                continue
                            }
                            i = ei.parent(i), s = en.get(e, i), o.add(s)
                        }
                    },
                    parent(e, t) {
                        var r = ei.parent(t),
                            n = en.get(e, r);
                        if (eb.isText(n)) throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
                        return n
                    },
                    string: e => eb.isText(e) ? e.text : e.children.map(en.string).join(""),
                    * texts(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of en.nodes(e, t)) eb.isText(r) && (yield [r, n])
                    }
                };

            function eu(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ea(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eu(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eu(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eo = {
                    isNodeOperation: e => eo.isOperation(e) && e.type.endsWith("_node"),
                    isOperation(e) {
                        if (!(0, a.isPlainObject)(e)) return !1;
                        switch (e.type) {
                            case "insert_node":
                            case "remove_node":
                                return ei.isPath(e.path) && en.isNode(e.node);
                            case "insert_text":
                            case "remove_text":
                                return "number" == typeof e.offset && "string" == typeof e.text && ei.isPath(e.path);
                            case "merge_node":
                                return "number" == typeof e.position && ei.isPath(e.path) && (0, a.isPlainObject)(e.properties);
                            case "move_node":
                                return ei.isPath(e.path) && ei.isPath(e.newPath);
                            case "set_node":
                                return ei.isPath(e.path) && (0, a.isPlainObject)(e.properties) && (0, a.isPlainObject)(e.newProperties);
                            case "set_selection":
                                return null === e.properties && ev.isRange(e.newProperties) || null === e.newProperties && ev.isRange(e.properties) || (0, a.isPlainObject)(e.properties) && (0, a.isPlainObject)(e.newProperties);
                            case "split_node":
                                return ei.isPath(e.path) && "number" == typeof e.position && (0, a.isPlainObject)(e.properties);
                            default:
                                return !1
                        }
                    },
                    isOperationList: e => Array.isArray(e) && e.every(e => eo.isOperation(e)),
                    isSelectionOperation: e => eo.isOperation(e) && e.type.endsWith("_selection"),
                    isTextOperation: e => eo.isOperation(e) && e.type.endsWith("_text"),
                    inverse(e) {
                        switch (e.type) {
                            case "insert_node":
                                return ea(ea({}, e), {}, {
                                    type: "remove_node"
                                });
                            case "insert_text":
                                return ea(ea({}, e), {}, {
                                    type: "remove_text"
                                });
                            case "merge_node":
                                return ea(ea({}, e), {}, {
                                    type: "split_node",
                                    path: ei.previous(e.path)
                                });
                            case "move_node":
                                var {
                                    newPath: t, path: r
                                } = e;
                                if (ei.equals(t, r)) return e;
                                if (ei.isSibling(r, t)) return ea(ea({}, e), {}, {
                                    path: t,
                                    newPath: r
                                });
                                var n = ei.transform(r, e),
                                    u = ei.transform(ei.next(r), e);
                                return ea(ea({}, e), {}, {
                                    path: n,
                                    newPath: u
                                });
                            case "remove_node":
                                return ea(ea({}, e), {}, {
                                    type: "insert_node"
                                });
                            case "remove_text":
                                return ea(ea({}, e), {}, {
                                    type: "insert_text"
                                });
                            case "set_node":
                                var {
                                    properties: a, newProperties: o
                                } = e;
                                return ea(ea({}, e), {}, {
                                    properties: o,
                                    newProperties: a
                                });
                            case "set_selection":
                                var {
                                    properties: i, newProperties: s
                                } = e;
                                if (null == i) return ea(ea({}, e), {}, {
                                    properties: s,
                                    newProperties: null
                                });
                                if (null == s) return ea(ea({}, e), {}, {
                                    properties: null,
                                    newProperties: i
                                });
                                else return ea(ea({}, e), {}, {
                                    properties: s,
                                    newProperties: i
                                });
                            case "split_node":
                                return ea(ea({}, e), {}, {
                                    type: "merge_node",
                                    path: ei.next(e.path)
                                })
                        }
                    }
                },
                ei = {
                    ancestors(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: r = !1
                            } = t,
                            n = ei.levels(e, t);
                        return n = r ? n.slice(1) : n.slice(0, -1)
                    },
                    common(e, t) {
                        for (var r = [], n = 0; n < e.length && n < t.length; n++) {
                            var u = e[n];
                            if (u !== t[n]) break;
                            r.push(u)
                        }
                        return r
                    },
                    compare(e, t) {
                        for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
                            if (e[n] < t[n]) return -1;
                            if (e[n] > t[n]) return 1
                        }
                        return 0
                    },
                    endsAfter(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            u = t.slice(0, r),
                            a = e[r],
                            o = t[r];
                        return ei.equals(n, u) && a > o
                    },
                    endsAt(e, t) {
                        var r = e.length,
                            n = e.slice(0, r),
                            u = t.slice(0, r);
                        return ei.equals(n, u)
                    },
                    endsBefore(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            u = t.slice(0, r),
                            a = e[r],
                            o = t[r];
                        return ei.equals(n, u) && a < o
                    },
                    equals: (e, t) => e.length === t.length && e.every((e, r) => e === t[r]),
                    hasPrevious: e => e[e.length - 1] > 0,
                    isAfter: (e, t) => 1 === ei.compare(e, t),
                    isAncestor: (e, t) => e.length < t.length && 0 === ei.compare(e, t),
                    isBefore: (e, t) => -1 === ei.compare(e, t),
                    isChild: (e, t) => e.length === t.length + 1 && 0 === ei.compare(e, t),
                    isCommon: (e, t) => e.length <= t.length && 0 === ei.compare(e, t),
                    isDescendant: (e, t) => e.length > t.length && 0 === ei.compare(e, t),
                    isParent: (e, t) => e.length + 1 === t.length && 0 === ei.compare(e, t),
                    isPath: e => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
                    isSibling(e, t) {
                        if (e.length !== t.length) return !1;
                        var r = e.slice(0, -1),
                            n = t.slice(0, -1);
                        return e[e.length - 1] !== t[t.length - 1] && ei.equals(r, n)
                    },
                    levels(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                reverse: r = !1
                            } = t, n = [], u = 0; u <= e.length; u++) n.push(e.slice(0, u));
                        return r && n.reverse(), n
                    },
                    next(e) {
                        if (0 === e.length) throw Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
                        var t = e[e.length - 1];
                        return e.slice(0, -1).concat(t + 1)
                    },
                    operationCanTransformPath(e) {
                        switch (e.type) {
                            case "insert_node":
                            case "remove_node":
                            case "merge_node":
                            case "split_node":
                            case "move_node":
                                return !0;
                            default:
                                return !1
                        }
                    },
                    parent(e) {
                        if (0 === e.length) throw Error("Cannot get the parent path of the root path [".concat(e, "]."));
                        return e.slice(0, -1)
                    },
                    previous(e) {
                        if (0 === e.length) throw Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
                        var t = e[e.length - 1];
                        if (t <= 0) throw Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
                        return e.slice(0, -1).concat(t - 1)
                    },
                    relative(e, t) {
                        if (!ei.isAncestor(t, e) && !ei.equals(e, t)) throw Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
                        return e.slice(t.length)
                    },
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e) return null;
                        var n = [...e],
                            {
                                affinity: u = "forward"
                            } = r;
                        if (0 === e.length) return n;
                        switch (t.type) {
                            case "insert_node":
                                var {
                                    path: a
                                } = t;
                                (ei.equals(a, n) || ei.endsBefore(a, n) || ei.isAncestor(a, n)) && (n[a.length - 1] += 1);
                                break;
                            case "remove_node":
                                var {
                                    path: o
                                } = t;
                                if (ei.equals(o, n) || ei.isAncestor(o, n)) return null;
                                ei.endsBefore(o, n) && (n[o.length - 1] -= 1);
                                break;
                            case "merge_node":
                                var {
                                    path: i, position: s
                                } = t;
                                ei.equals(i, n) || ei.endsBefore(i, n) ? n[i.length - 1] -= 1 : ei.isAncestor(i, n) && (n[i.length - 1] -= 1, n[i.length] += s);
                                break;
                            case "split_node":
                                var {
                                    path: l, position: c
                                } = t;
                                if (ei.equals(l, n)) {
                                    if ("forward" === u) n[n.length - 1] += 1;
                                    else if ("backward" !== u) return null
                                } else ei.endsBefore(l, n) ? n[l.length - 1] += 1 : ei.isAncestor(l, n) && e[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
                                break;
                            case "move_node":
                                var {
                                    path: d, newPath: f
                                } = t;
                                if (ei.equals(d, f)) break;
                                if (ei.isAncestor(d, n) || ei.equals(d, n)) {
                                    var D = f.slice();
                                    return ei.endsBefore(d, f) && d.length < f.length && (D[d.length - 1] -= 1), D.concat(n.slice(d.length))
                                }
                                ei.isSibling(d, f) && (ei.isAncestor(f, n) || ei.equals(f, n)) ? ei.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : ei.endsBefore(f, n) || ei.equals(f, n) || ei.isAncestor(f, n) ? (ei.endsBefore(d, n) && (n[d.length - 1] -= 1), n[f.length - 1] += 1) : ei.endsBefore(d, n) && (ei.equals(f, n) && (n[f.length - 1] += 1), n[d.length - 1] -= 1)
                        }
                        return n
                    }
                },
                es = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var u = ei.transform(r, t, {
                                affinity: n
                            });
                            e.current = u, null == u && e.unref()
                        }
                    }
                };

            function el(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ec(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? el(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : el(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ed = {
                    compare(e, t) {
                        var r = ei.compare(e.path, t.path);
                        if (0 === r) return e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0;
                        return r
                    },
                    isAfter: (e, t) => 1 === ed.compare(e, t),
                    isBefore: (e, t) => -1 === ed.compare(e, t),
                    equals: (e, t) => e.offset === t.offset && ei.equals(e.path, t.path),
                    isPoint: e => (0, a.isPlainObject)(e) && "number" == typeof e.offset && ei.isPath(e.path),
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, o.produce)(e, e => {
                            if (null === e) return null;
                            var {
                                affinity: n = "forward"
                            } = r, {
                                path: u,
                                offset: a
                            } = e;
                            switch (t.type) {
                                case "insert_node":
                                case "move_node":
                                    e.path = ei.transform(u, t, r);
                                    break;
                                case "insert_text":
                                    ei.equals(t.path, u) && (t.offset < a || t.offset === a && "forward" === n) && (e.offset += t.text.length);
                                    break;
                                case "merge_node":
                                    ei.equals(t.path, u) && (e.offset += t.position), e.path = ei.transform(u, t, r);
                                    break;
                                case "remove_text":
                                    ei.equals(t.path, u) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                                    break;
                                case "remove_node":
                                    if (ei.equals(t.path, u) || ei.isAncestor(t.path, u)) return null;
                                    e.path = ei.transform(u, t, r);
                                    break;
                                case "split_node":
                                    if (ei.equals(t.path, u)) {
                                        if (t.position === a && null == n) return null;
                                        (t.position < a || t.position === a && "forward" === n) && (e.offset -= t.position, e.path = ei.transform(u, t, ec(ec({}, r), {}, {
                                            affinity: "forward"
                                        })))
                                    } else e.path = ei.transform(u, t, r)
                            }
                        })
                    }
                },
                ef = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var u = ed.transform(r, t, {
                                affinity: n
                            });
                            e.current = u, null == u && e.unref()
                        }
                    }
                },
                eD = ["anchor", "focus"];

            function eh(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var ev = {
                    edges(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: r = !1
                            } = t,
                            {
                                anchor: n,
                                focus: u
                            } = e;
                        return ev.isBackward(e) === r ? [n, u] : [u, n]
                    },
                    end(e) {
                        var [, t] = ev.edges(e);
                        return t
                    },
                    equals: (e, t) => ed.equals(e.anchor, t.anchor) && ed.equals(e.focus, t.focus),
                    includes(e, t) {
                        if (ev.isRange(t)) {
                            if (ev.includes(e, t.anchor) || ev.includes(e, t.focus)) return !0;
                            var [r, n] = ev.edges(e), [u, a] = ev.edges(t);
                            return ed.isBefore(r, u) && ed.isAfter(n, a)
                        }
                        var [o, i] = ev.edges(e), s = !1, l = !1;
                        return ed.isPoint(t) ? (s = ed.compare(t, o) >= 0, l = 0 >= ed.compare(t, i)) : (s = ei.compare(t, o.path) >= 0, l = 0 >= ei.compare(t, i.path)), s && l
                    },
                    intersection(e, t) {
                        var r = g(e, eD),
                            [n, u] = ev.edges(e),
                            [a, o] = ev.edges(t),
                            s = ed.isBefore(n, a) ? a : n,
                            l = ed.isBefore(u, o) ? u : o;
                        return ed.isBefore(l, s) ? null : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? eh(Object(r), !0).forEach(function(t) {
                                    i(e, t, r[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eh(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            anchor: s,
                            focus: l
                        }, r)
                    },
                    isBackward(e) {
                        var {
                            anchor: t,
                            focus: r
                        } = e;
                        return ed.isAfter(t, r)
                    },
                    isCollapsed(e) {
                        var {
                            anchor: t,
                            focus: r
                        } = e;
                        return ed.equals(t, r)
                    },
                    isExpanded: e => !ev.isCollapsed(e),
                    isForward: e => !ev.isBackward(e),
                    isRange: e => (0, a.isPlainObject)(e) && ed.isPoint(e.anchor) && ed.isPoint(e.focus),
                    * points(e) {
                        yield [e.anchor, "anchor"], yield [e.focus, "focus"]
                    },
                    start(e) {
                        var [t] = ev.edges(e);
                        return t
                    },
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, o.produce)(e, e => {
                            if (null === e) return null;
                            var n, u, {
                                affinity: a = "inward"
                            } = r;
                            if ("inward" === a) {
                                var o = ev.isCollapsed(e);
                                ev.isForward(e) ? (n = "forward", u = o ? n : "backward") : (n = "backward", u = o ? n : "forward")
                            } else "outward" === a ? ev.isForward(e) ? (n = "backward", u = "forward") : (n = "forward", u = "backward") : (n = a, u = a);
                            var i = ed.transform(e.anchor, t, {
                                    affinity: n
                                }),
                                s = ed.transform(e.focus, t, {
                                    affinity: u
                                });
                            if (!i || !s) return null;
                            e.anchor = i, e.focus = s
                        })
                    }
                },
                ep = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var u = ev.transform(r, t, {
                                affinity: n
                            });
                            e.current = u, null == u && e.unref()
                        }
                    }
                },
                eC = void 0,
                eg = {
                    setScrubber(e) {
                        eC = e
                    },
                    stringify: e => JSON.stringify(e, eC)
                },
                eB = (e, t) => {
                    for (var r in e) {
                        var n = e[r],
                            u = t[r];
                        if ((0, a.isPlainObject)(n) && (0, a.isPlainObject)(u)) {
                            if (!eB(n, u)) return !1
                        } else if (Array.isArray(n) && Array.isArray(u)) {
                            if (n.length !== u.length) return !1;
                            for (var o = 0; o < n.length; o++)
                                if (n[o] !== u[o]) return !1
                        } else if (n !== u) return !1
                    }
                    for (var i in t)
                        if (void 0 === e[i] && void 0 !== t[i]) return !1;
                    return !0
                },
                eE = ["text"],
                em = ["anchor", "focus"];

            function eA(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eF(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eA(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eA(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eb = {
                equals(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            loose: n = !1
                        } = r;

                    function u(e) {
                        return g(e, eE)
                    }
                    return eB(n ? g(e, eE) : e, n ? g(t, eE) : t)
                },
                isText: e => (0, a.isPlainObject)(e) && "string" == typeof e.text,
                isTextList: e => Array.isArray(e) && e.every(e => eb.isText(e)),
                isTextProps: e => void 0 !== e.text,
                matches(e, t) {
                    for (var r in t)
                        if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r])) return !1;
                    return !0
                },
                decorations(e, t) {
                    var r = [eF({}, e)];
                    for (var n of t) {
                        var u = g(n, em),
                            [a, o] = ev.edges(n),
                            i = [],
                            s = 0,
                            l = a.offset,
                            c = o.offset;
                        for (var d of r) {
                            var {
                                length: f
                            } = d.text, D = s;
                            if (s += f, l <= D && s <= c) {
                                Object.assign(d, u), i.push(d);
                                continue
                            }
                            if (l !== c && (l === s || c === D) || l > s || c < D || c === D && 0 !== D) {
                                i.push(d);
                                continue
                            }
                            var h = d,
                                v = void 0,
                                p = void 0;
                            if (c < s) {
                                var C = c - D;
                                p = eF(eF({}, h), {}, {
                                    text: h.text.slice(C)
                                }), h = eF(eF({}, h), {}, {
                                    text: h.text.slice(0, C)
                                })
                            }
                            if (l > D) {
                                var B = l - D;
                                v = eF(eF({}, h), {}, {
                                    text: h.text.slice(0, B)
                                }), h = eF(eF({}, h), {}, {
                                    text: h.text.slice(B)
                                })
                            }
                            Object.assign(h, u), v && i.push(v), i.push(h), p && i.push(p)
                        }
                        r = i
                    }
                    return r
                }
            };

            function ey(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ew(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ey(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eO = (e, t, r) => {
                    switch (r.type) {
                        case "insert_node":
                            var {
                                path: n, node: u
                            } = r, a = en.parent(e, n), o = n[n.length - 1];
                            if (o > a.children.length) throw Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
                            if (a.children.splice(o, 0, u), t)
                                for (var [i, s] of ev.points(t)) t[s] = ed.transform(i, r);
                            break;
                        case "insert_text":
                            var {
                                path: l, offset: c, text: d
                            } = r;
                            if (0 === d.length) break;
                            var f = en.leaf(e, l),
                                D = f.text.slice(0, c),
                                h = f.text.slice(c);
                            if (f.text = D + d + h, t)
                                for (var [v, p] of ev.points(t)) t[p] = ed.transform(v, r);
                            break;
                        case "merge_node":
                            var {
                                path: C
                            } = r, g = en.get(e, C), B = ei.previous(C), E = en.get(e, B), m = en.parent(e, C), A = C[C.length - 1];
                            if (eb.isText(g) && eb.isText(E)) E.text += g.text;
                            else if (eb.isText(g) || eb.isText(E)) throw Error('Cannot apply a "merge_node" operation at path ['.concat(C, "] to nodes of different interfaces: ").concat(eg.stringify(g), " ").concat(eg.stringify(E)));
                            else E.children.push(...g.children);
                            if (m.children.splice(A, 1), t)
                                for (var [F, b] of ev.points(t)) t[b] = ed.transform(F, r);
                            break;
                        case "move_node":
                            var {
                                path: y, newPath: w
                            } = r;
                            if (ei.isAncestor(y, w)) throw Error("Cannot move a path [".concat(y, "] to new path [").concat(w, "] because the destination is inside itself."));
                            var O = en.get(e, y),
                                x = en.parent(e, y),
                                k = y[y.length - 1];
                            x.children.splice(k, 1);
                            var P = ei.transform(y, r),
                                R = en.get(e, ei.parent(P)),
                                S = P[P.length - 1];
                            if (R.children.splice(S, 0, O), t)
                                for (var [T, j] of ev.points(t)) t[j] = ed.transform(T, r);
                            break;
                        case "remove_node":
                            var {
                                path: N
                            } = r, M = N[N.length - 1];
                            if (en.parent(e, N).children.splice(M, 1), t)
                                for (var [z, W] of ev.points(t)) {
                                    var _ = ed.transform(z, r);
                                    if (null != t && null != _) t[W] = _;
                                    else {
                                        var L = void 0,
                                            I = void 0;
                                        for (var [q, V] of en.texts(e))
                                            if (-1 === ei.compare(V, N)) L = [q, V];
                                            else {
                                                I = [q, V];
                                                break
                                            } var H = !1;
                                        L && I && (H = ei.equals(I[1], N) ? !ei.hasPrevious(I[1]) : ei.common(L[1], N).length < ei.common(I[1], N).length), L && !H ? (z.path = L[1], z.offset = L[0].text.length) : I ? (z.path = I[1], z.offset = 0) : t = null
                                    }
                                }
                            break;
                        case "remove_text":
                            var {
                                path: K, offset: U, text: $
                            } = r;
                            if (0 === $.length) break;
                            var X = en.leaf(e, K),
                                J = X.text.slice(0, U),
                                Y = X.text.slice(U + $.length);
                            if (X.text = J + Y, t)
                                for (var [G, Z] of ev.points(t)) t[Z] = ed.transform(G, r);
                            break;
                        case "set_node":
                            var {
                                path: Q, properties: ee, newProperties: et
                            } = r;
                            if (0 === Q.length) throw Error("Cannot set properties on the root node!");
                            var er = en.get(e, Q);
                            for (var eu in et) {
                                if ("children" === eu || "text" === eu) throw Error('Cannot set the "'.concat(eu, '" property of nodes!'));
                                var ea = et[eu];
                                null == ea ? delete er[eu] : er[eu] = ea
                            }
                            for (var eo in ee) !et.hasOwnProperty(eo) && delete er[eo];
                            break;
                        case "set_selection":
                            var {
                                newProperties: es
                            } = r;
                            if (null == es) t = es;
                            else {
                                if (null == t) {
                                    if (!ev.isRange(es)) throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(eg.stringify(es), " when there is no current selection."));
                                    t = ew({}, es)
                                }
                                for (var el in es) {
                                    var ec = es[el];
                                    if (null == ec) {
                                        if ("anchor" === el || "focus" === el) throw Error('Cannot remove the "'.concat(el, '" selection property'));
                                        delete t[el]
                                    } else t[el] = ec
                                }
                            }
                            break;
                        case "split_node":
                            var ef, {
                                path: eD,
                                position: eh,
                                properties: ep
                            } = r;
                            if (0 === eD.length) throw Error('Cannot apply a "split_node" operation at path ['.concat(eD, "] because the root node cannot be split."));
                            var eC = en.get(e, eD),
                                eB = en.parent(e, eD),
                                eE = eD[eD.length - 1];
                            if (eb.isText(eC)) {
                                var em = eC.text.slice(0, eh),
                                    eA = eC.text.slice(eh);
                                eC.text = em, ef = ew(ew({}, ep), {}, {
                                    text: eA
                                })
                            } else {
                                var eF = eC.children.slice(0, eh),
                                    ey = eC.children.slice(eh);
                                eC.children = eF, ef = ew(ew({}, ep), {}, {
                                    children: ey
                                })
                            }
                            if (eB.children.splice(eE + 1, 0, ef), t)
                                for (var [eO, ex] of ev.points(t)) t[ex] = ed.transform(eO, r)
                    }
                    return t
                },
                ex = ["text"],
                ek = ["children"];

            function eP(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eR(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eP(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eP(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eS = (e, t) => {
                    if (U.isElement(t)) return !!Z.isVoid(e, t) || 1 === t.children.length && eS(e, t.children[0]);
                    if (Z.isEditor(t)) return !1;
                    return !0
                },
                eT = (e, t) => {
                    if (ev.isCollapsed(t)) return t.anchor;
                    var [, r] = ev.edges(t), n = Z.pointRef(e, r);
                    return e_.delete(e, {
                        at: t
                    }), n.unref()
                },
                ej = (e, t) => {
                    var [r] = Z.node(e, t);
                    return e => e === r
                };

            function eN(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eM(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eN(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eN(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function ez(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eW(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ez(Object(r), !0).forEach(function(t) {
                        i(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ez(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var e_ = eW(eW(eW(eW({}, {
                transform(e, t) {
                    e.children = (0, o.createDraft)(e.children);
                    var r = e.selection && (0, o.createDraft)(e.selection);
                    try {
                        r = eO(e, r, t)
                    } finally {
                        e.children = (0, o.finishDraft)(e.children), r ? e.selection = (0, o.isDraft)(r) ? (0, o.finishDraft)(r) : r : e.selection = null
                    }
                }
            }), {
                insertNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Z.withoutNormalizing(e, () => {
                        var {
                            hanging: n = !1,
                            voids: u = !1,
                            mode: a = "lowest"
                        } = r, {
                            at: o,
                            match: i,
                            select: s
                        } = r;
                        if (en.isNode(t) && (t = [t]), 0 !== t.length) {
                            var [l] = t;
                            if (!o && (o = e.selection ? e.selection : e.children.length > 0 ? Z.end(e, []) : [0], s = !0), null == s && (s = !1), ev.isRange(o)) {
                                if (!n && (o = Z.unhangRange(e, o, {
                                        voids: u
                                    })), ev.isCollapsed(o)) o = o.anchor;
                                else {
                                    var [, c] = ev.edges(o), d = Z.pointRef(e, c);
                                    e_.delete(e, {
                                        at: o
                                    }), o = d.unref()
                                }
                            }
                            if (ed.isPoint(o)) {
                                null == i && (i = eb.isText(l) ? e => eb.isText(e) : e.isInline(l) ? t => eb.isText(t) || Z.isInline(e, t) : t => U.isElement(t) && Z.isBlock(e, t));
                                var [f] = Z.nodes(e, {
                                    at: o.path,
                                    match: i,
                                    mode: a,
                                    voids: u
                                });
                                if (!f) return;
                                var [, D] = f, h = Z.pathRef(e, D), v = Z.isEnd(e, o, D);
                                e_.splitNodes(e, {
                                    at: o,
                                    match: i,
                                    mode: a,
                                    voids: u
                                });
                                var p = h.unref();
                                o = v ? ei.next(p) : p
                            }
                            var C = ei.parent(o),
                                g = o[o.length - 1];
                            if (!(!u && Z.void(e, {
                                    at: C
                                }))) {
                                for (var B of t) {
                                    var E = C.concat(g);
                                    g++, e.apply({
                                        type: "insert_node",
                                        path: E,
                                        node: B
                                    }), o = ei.next(o)
                                }
                                if (o = ei.previous(o), s) {
                                    var m = Z.end(e, o);
                                    m && e_.select(e, m)
                                }
                            }
                        }
                    })
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Z.withoutNormalizing(e, () => {
                        var {
                            at: r = e.selection,
                            mode: n = "lowest",
                            voids: u = !1
                        } = t, {
                            match: a
                        } = t;
                        if (null == a && (a = ei.isPath(r) ? ej(e, r) : t => U.isElement(t) && Z.isBlock(e, t)), r)
                            for (var o of Array.from(Z.nodes(e, {
                                    at: r,
                                    match: a,
                                    mode: n,
                                    voids: u
                                }), t => {
                                    var [, r] = t;
                                    return Z.pathRef(e, r)
                                })) {
                                var i = o.unref();
                                if (i.length < 2) throw Error("Cannot lift node at a path [".concat(i, "] because it has a depth of less than `2`."));
                                var [s, l] = Z.node(e, ei.parent(i)), c = i[i.length - 1], {
                                    length: d
                                } = s.children;
                                if (1 === d) {
                                    var f = ei.next(l);
                                    e_.moveNodes(e, {
                                        at: i,
                                        to: f,
                                        voids: u
                                    }), e_.removeNodes(e, {
                                        at: l,
                                        voids: u
                                    })
                                } else if (0 === c) e_.moveNodes(e, {
                                    at: i,
                                    to: l,
                                    voids: u
                                });
                                else if (c === d - 1) {
                                    var D = ei.next(l);
                                    e_.moveNodes(e, {
                                        at: i,
                                        to: D,
                                        voids: u
                                    })
                                } else {
                                    var h = ei.next(i),
                                        v = ei.next(l);
                                    e_.splitNodes(e, {
                                        at: h,
                                        voids: u
                                    }), e_.moveNodes(e, {
                                        at: i,
                                        to: v,
                                        voids: u
                                    })
                                }
                            }
                    })
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Z.withoutNormalizing(e, () => {
                        var r, n, {
                                match: u,
                                at: a = e.selection
                            } = t,
                            {
                                hanging: o = !1,
                                voids: i = !1,
                                mode: s = "lowest"
                            } = t;
                        if (!a) return;
                        if (null == u) {
                            if (ei.isPath(a)) {
                                var [l] = Z.parent(e, a);
                                u = e => l.children.includes(e)
                            } else u = t => U.isElement(t) && Z.isBlock(e, t)
                        }
                        if (!o && ev.isRange(a) && (a = Z.unhangRange(e, a, {
                                voids: i
                            })), ev.isRange(a)) {
                            if (ev.isCollapsed(a)) a = a.anchor;
                            else {
                                var [, c] = ev.edges(a), d = Z.pointRef(e, c);
                                e_.delete(e, {
                                    at: a
                                }), a = d.unref(), null == t.at && e_.select(e, a)
                            }
                        }
                        var [f] = Z.nodes(e, {
                            at: a,
                            match: u,
                            voids: i,
                            mode: s
                        }), D = Z.previous(e, {
                            at: a,
                            match: u,
                            voids: i,
                            mode: s
                        });
                        if (!!f && !!D) {
                            var [h, v] = f, [p, C] = D;
                            if (0 !== v.length && 0 !== C.length) {
                                var B = ei.next(C),
                                    E = ei.common(v, C),
                                    m = ei.isSibling(v, C),
                                    A = Array.from(Z.levels(e, {
                                        at: v
                                    }), e => {
                                        var [t] = e;
                                        return t
                                    }).slice(E.length).slice(0, -1),
                                    F = Z.above(e, {
                                        at: v,
                                        mode: "highest",
                                        match: t => A.includes(t) && eS(e, t)
                                    }),
                                    b = F && Z.pathRef(e, F[1]);
                                if (eb.isText(h) && eb.isText(p)) {
                                    var y = g(h, ex);
                                    n = p.text.length, r = y
                                } else if (U.isElement(h) && U.isElement(p)) {
                                    var y = g(h, ek);
                                    n = p.children.length, r = y
                                } else throw Error("Cannot merge the node at path [".concat(v, "] with the previous sibling because it is not the same kind: ").concat(eg.stringify(h), " ").concat(eg.stringify(p)));
                                !m && e_.moveNodes(e, {
                                    at: v,
                                    to: B,
                                    voids: i
                                }), b && e_.removeNodes(e, {
                                    at: b.current,
                                    voids: i
                                }), U.isElement(p) && Z.isEmpty(e, p) || eb.isText(p) && "" === p.text && 0 !== C[C.length - 1] ? e_.removeNodes(e, {
                                    at: C,
                                    voids: i
                                }) : e.apply({
                                    type: "merge_node",
                                    path: B,
                                    position: n,
                                    properties: r
                                }), b && b.unref()
                            }
                        }
                    })
                },
                moveNodes(e, t) {
                    Z.withoutNormalizing(e, () => {
                        var {
                            to: r,
                            at: n = e.selection,
                            mode: u = "lowest",
                            voids: a = !1
                        } = t, {
                            match: o
                        } = t;
                        if (n) {
                            null == o && (o = ei.isPath(n) ? ej(e, n) : t => U.isElement(t) && Z.isBlock(e, t));
                            var i = Z.pathRef(e, r);
                            for (var s of Array.from(Z.nodes(e, {
                                    at: n,
                                    match: o,
                                    mode: u,
                                    voids: a
                                }), t => {
                                    var [, r] = t;
                                    return Z.pathRef(e, r)
                                })) {
                                var l = s.unref(),
                                    c = i.current;
                                0 !== l.length && e.apply({
                                    type: "move_node",
                                    path: l,
                                    newPath: c
                                }), i.current && ei.isSibling(c, l) && ei.isAfter(c, l) && (i.current = ei.next(i.current))
                            }
                            i.unref()
                        }
                    })
                },
                removeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Z.withoutNormalizing(e, () => {
                        var {
                            hanging: r = !1,
                            voids: n = !1,
                            mode: u = "lowest"
                        } = t, {
                            at: a = e.selection,
                            match: o
                        } = t;
                        if (a)
                            for (var i of (null == o && (o = ei.isPath(a) ? ej(e, a) : t => U.isElement(t) && Z.isBlock(e, t)), !r && ev.isRange(a) && (a = Z.unhangRange(e, a, {
                                    voids: n
                                })), Array.from(Z.nodes(e, {
                                    at: a,
                                    match: o,
                                    mode: u,
                                    voids: n
                                }), t => {
                                    var [, r] = t;
                                    return Z.pathRef(e, r)
                                }))) {
                                var s = i.unref();
                                if (s) {
                                    var [l] = Z.node(e, s);
                                    e.apply({
                                        type: "remove_node",
                                        path: s,
                                        node: l
                                    })
                                }
                            }
                    })
                },
                setNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Z.withoutNormalizing(e, () => {
                        var {
                            match: n,
                            at: u = e.selection,
                            compare: a,
                            merge: o
                        } = r, {
                            hanging: i = !1,
                            mode: s = "lowest",
                            split: l = !1,
                            voids: c = !1
                        } = r;
                        if (u) {
                            if (null == n && (n = ei.isPath(u) ? ej(e, u) : t => U.isElement(t) && Z.isBlock(e, t)), !i && ev.isRange(u) && (u = Z.unhangRange(e, u, {
                                    voids: c
                                })), l && ev.isRange(u)) {
                                if (ev.isCollapsed(u) && Z.leaf(e, u.anchor)[0].text.length > 0) return;
                                var d = Z.rangeRef(e, u, {
                                        affinity: "inward"
                                    }),
                                    [f, D] = ev.edges(u),
                                    h = "lowest" === s ? "lowest" : "highest",
                                    v = Z.isEnd(e, D, D.path);
                                e_.splitNodes(e, {
                                    at: D,
                                    match: n,
                                    mode: h,
                                    voids: c,
                                    always: !v
                                });
                                var p = Z.isStart(e, f, f.path);
                                e_.splitNodes(e, {
                                    at: f,
                                    match: n,
                                    mode: h,
                                    voids: c,
                                    always: !p
                                }), u = d.unref(), null == r.at && e_.select(e, u)
                            }
                            for (var [C, g] of(!a && (a = (e, t) => e !== t), Z.nodes(e, {
                                    at: u,
                                    match: n,
                                    mode: s,
                                    voids: c
                                }))) {
                                var B = {},
                                    E = {};
                                if (0 !== g.length) {
                                    var m = !1;
                                    for (var A in t) "children" !== A && "text" !== A && a(t[A], C[A]) && (m = !0, C.hasOwnProperty(A) && (B[A] = C[A]), o ? null != t[A] && (E[A] = o(C[A], t[A])) : null != t[A] && (E[A] = t[A]));
                                    m && e.apply({
                                        type: "set_node",
                                        path: g,
                                        properties: B,
                                        newProperties: E
                                    })
                                }
                            }
                        }
                    })
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Z.withoutNormalizing(e, () => {
                        var r, n, {
                                mode: u = "lowest",
                                voids: a = !1
                            } = t,
                            {
                                match: o,
                                at: i = e.selection,
                                height: s = 0,
                                always: l = !1
                            } = t;
                        if (null == o && (o = t => U.isElement(t) && Z.isBlock(e, t)), ev.isRange(i) && (i = eT(e, i)), ei.isPath(i)) {
                            var c = i,
                                d = Z.point(e, c),
                                [f] = Z.parent(e, c);
                            o = e => e === f, s = d.path.length - c.length + 1, i = d, l = !0
                        }
                        if (i) {
                            var D = Z.pointRef(e, i, {
                                affinity: "backward"
                            });
                            try {
                                var [h] = Z.nodes(e, {
                                    at: i,
                                    match: o,
                                    mode: u,
                                    voids: a
                                });
                                if (!h) return;
                                var v = Z.void(e, {
                                    at: i,
                                    mode: "highest"
                                });
                                if (!a && v) {
                                    var [p, C] = v;
                                    if (U.isElement(p) && e.isInline(p)) {
                                        var g = Z.after(e, C);
                                        if (!g) {
                                            var B = ei.next(C);
                                            e_.insertNodes(e, {
                                                text: ""
                                            }, {
                                                at: B,
                                                voids: a
                                            }), g = Z.point(e, B)
                                        }
                                        i = g, l = !0
                                    }
                                    s = i.path.length - C.length + 1, l = !0
                                }
                                r = Z.pointRef(e, i);
                                var E = i.path.length - s,
                                    [, m] = h,
                                    A = i.path.slice(0, E),
                                    F = 0 === s ? i.offset : i.path[E] + 0;
                                for (var [b, y] of Z.levels(e, {
                                        at: A,
                                        reverse: !0,
                                        voids: a
                                    })) {
                                    var w = !1;
                                    if (y.length < m.length || 0 === y.length || !a && U.isElement(b) && Z.isVoid(e, b)) break;
                                    var O = D.current,
                                        x = Z.isEnd(e, O, y);
                                    if (l || !D || !Z.isEdge(e, O, y)) {
                                        w = !0;
                                        var k = en.extractProps(b);
                                        e.apply({
                                            type: "split_node",
                                            path: y,
                                            position: F,
                                            properties: k
                                        })
                                    }
                                    F = y[y.length - 1] + (w || x ? 1 : 0)
                                }
                                if (null == t.at) {
                                    var P = r.current || Z.end(e, []);
                                    e_.select(e, P)
                                }
                            } finally {
                                D.unref(), null === (n = r) || void 0 === n || n.unref()
                            }
                        }
                    })
                },
                unsetNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    !Array.isArray(t) && (t = [t]);
                    var n = {};
                    for (var u of t) n[u] = null;
                    e_.setNodes(e, n, r)
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Z.withoutNormalizing(e, () => {
                        var {
                            mode: r = "lowest",
                            split: n = !1,
                            voids: u = !1
                        } = t, {
                            at: a = e.selection,
                            match: o
                        } = t;
                        if (a) {
                            null == o && (o = ei.isPath(a) ? ej(e, a) : t => U.isElement(t) && Z.isBlock(e, t)), ei.isPath(a) && (a = Z.range(e, a));
                            var i = ev.isRange(a) ? Z.rangeRef(e, a) : null,
                                s = Array.from(Z.nodes(e, {
                                    at: a,
                                    match: o,
                                    mode: r,
                                    voids: u
                                }), t => {
                                    var [, r] = t;
                                    return Z.pathRef(e, r)
                                }).reverse();
                            for (var l of s) ! function(t) {
                                var r = t.unref(),
                                    [a] = Z.node(e, r),
                                    o = Z.range(e, r);
                                n && i && (o = ev.intersection(i.current, o)), e_.liftNodes(e, {
                                    at: o,
                                    match: e => U.isAncestor(a) && a.children.includes(e),
                                    voids: u
                                })
                            }(l);
                            i && i.unref()
                        }
                    })
                },
                wrapNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Z.withoutNormalizing(e, () => {
                        var {
                            mode: n = "lowest",
                            split: u = !1,
                            voids: a = !1
                        } = r, {
                            match: o,
                            at: i = e.selection
                        } = r;
                        if (i) {
                            if (null == o && (o = ei.isPath(i) ? ej(e, i) : e.isInline(t) ? t => U.isElement(t) && Z.isInline(e, t) || eb.isText(t) : t => U.isElement(t) && Z.isBlock(e, t)), u && ev.isRange(i)) {
                                var [s, l] = ev.edges(i), c = Z.rangeRef(e, i, {
                                    affinity: "inward"
                                });
                                e_.splitNodes(e, {
                                    at: l,
                                    match: o,
                                    voids: a
                                }), e_.splitNodes(e, {
                                    at: s,
                                    match: o,
                                    voids: a
                                }), i = c.unref(), null == r.at && e_.select(e, i)
                            }
                            for (var [, d] of Array.from(Z.nodes(e, {
                                    at: i,
                                    match: e.isInline(t) ? t => U.isElement(t) && Z.isBlock(e, t) : e => Z.isEditor(e),
                                    mode: "lowest",
                                    voids: a
                                }))) {
                                var f = ev.isRange(i) ? ev.intersection(i, Z.range(e, d)) : i;
                                if (f) {
                                    var D = Array.from(Z.nodes(e, {
                                        at: f,
                                        match: o,
                                        mode: n,
                                        voids: a
                                    }));
                                    if (D.length > 0 && "continue" === function() {
                                            var [r] = D, n = D[D.length - 1], [, u] = r, [, o] = n;
                                            if (0 === u.length && 0 === o.length) return "continue";
                                            var i = ei.equals(u, o) ? ei.parent(u) : ei.common(u, o),
                                                s = Z.range(e, u, o),
                                                [l] = Z.node(e, i),
                                                c = i.length + 1,
                                                d = ei.next(o.slice(0, c)),
                                                f = eR(eR({}, t), {}, {
                                                    children: []
                                                });
                                            e_.insertNodes(e, f, {
                                                at: d,
                                                voids: a
                                            }), e_.moveNodes(e, {
                                                at: s,
                                                match: e => U.isAncestor(l) && l.children.includes(e),
                                                to: d.concat(0),
                                                voids: a
                                            })
                                        }()) continue
                                }
                            }
                        }
                    })
                }
            }), {
                collapse(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            edge: r = "anchor"
                        } = t,
                        {
                            selection: n
                        } = e;
                    if (!!n) {
                        if ("anchor" === r) e_.select(e, n.anchor);
                        else if ("focus" === r) e_.select(e, n.focus);
                        else if ("start" === r) {
                            var [u] = ev.edges(n);
                            e_.select(e, u)
                        } else if ("end" === r) {
                            var [, a] = ev.edges(n);
                            e_.select(e, a)
                        }
                    }
                },
                deselect(e) {
                    var {
                        selection: t
                    } = e;
                    t && e.apply({
                        type: "set_selection",
                        properties: t,
                        newProperties: null
                    })
                },
                move(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            selection: r
                        } = e,
                        {
                            distance: n = 1,
                            unit: u = "character",
                            reverse: a = !1
                        } = t,
                        {
                            edge: o = null
                        } = t;
                    if (r) {
                        "start" === o && (o = ev.isBackward(r) ? "focus" : "anchor"), "end" === o && (o = ev.isBackward(r) ? "anchor" : "focus");
                        var {
                            anchor: i,
                            focus: s
                        } = r, l = {
                            distance: n,
                            unit: u
                        }, c = {};
                        if (null == o || "anchor" === o) {
                            var d = a ? Z.before(e, i, l) : Z.after(e, i, l);
                            d && (c.anchor = d)
                        }
                        if (null == o || "focus" === o) {
                            var f = a ? Z.before(e, s, l) : Z.after(e, s, l);
                            f && (c.focus = f)
                        }
                        e_.setSelection(e, c)
                    }
                },
                select(e, t) {
                    var {
                        selection: r
                    } = e;
                    if (t = Z.range(e, t), r) {
                        e_.setSelection(e, t);
                        return
                    }
                    if (!ev.isRange(t)) throw Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(eg.stringify(t)));
                    e.apply({
                        type: "set_selection",
                        properties: r,
                        newProperties: t
                    })
                },
                setPoint(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            selection: n
                        } = e,
                        {
                            edge: u = "both"
                        } = r;
                    if (n) {
                        "start" === u && (u = ev.isBackward(n) ? "focus" : "anchor"), "end" === u && (u = ev.isBackward(n) ? "anchor" : "focus");
                        var {
                            anchor: a,
                            focus: o
                        } = n, i = "anchor" === u ? a : o;
                        e_.setSelection(e, {
                            ["anchor" === u ? "anchor" : "focus"]: eM(eM({}, i), t)
                        })
                    }
                },
                setSelection(e, t) {
                    var {
                        selection: r
                    } = e, n = {}, u = {};
                    if (r) {
                        for (var a in t)("anchor" === a && null != t.anchor && !ed.equals(t.anchor, r.anchor) || "focus" === a && null != t.focus && !ed.equals(t.focus, r.focus) || "anchor" !== a && "focus" !== a && t[a] !== r[a]) && (n[a] = r[a], u[a] = t[a]);
                        Object.keys(n).length > 0 && e.apply({
                            type: "set_selection",
                            properties: n,
                            newProperties: u
                        })
                    }
                }
            }), {
                delete(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Z.withoutNormalizing(e, () => {
                        var r, {
                                reverse: n = !1,
                                unit: u = "character",
                                distance: a = 1,
                                voids: o = !1
                            } = t,
                            {
                                at: i = e.selection,
                                hanging: s = !1
                            } = t;
                        if (!!i) {
                            var l = !1;
                            if (ev.isRange(i) && ev.isCollapsed(i) && (l = !0, i = i.anchor), ed.isPoint(i)) {
                                var c = Z.void(e, {
                                    at: i,
                                    mode: "highest"
                                });
                                if (!o && c) {
                                    var [, d] = c;
                                    i = d
                                } else {
                                    var f = {
                                            unit: u,
                                            distance: a
                                        },
                                        D = n ? Z.before(e, i, f) || Z.start(e, []) : Z.after(e, i, f) || Z.end(e, []);
                                    i = {
                                        anchor: i,
                                        focus: D
                                    }, s = !0
                                }
                            }
                            if (ei.isPath(i)) {
                                e_.removeNodes(e, {
                                    at: i,
                                    voids: o
                                });
                                return
                            }
                            if (!ev.isCollapsed(i)) {
                                if (!s) {
                                    var [, h] = ev.edges(i), v = Z.end(e, []);
                                    !ed.equals(h, v) && (i = Z.unhangRange(e, i, {
                                        voids: o
                                    }))
                                }
                                var [p, C] = ev.edges(i), g = Z.above(e, {
                                    match: t => U.isElement(t) && Z.isBlock(e, t),
                                    at: p,
                                    voids: o
                                }), B = Z.above(e, {
                                    match: t => U.isElement(t) && Z.isBlock(e, t),
                                    at: C,
                                    voids: o
                                }), E = g && B && !ei.equals(g[1], B[1]), m = ei.equals(p.path, C.path), A = o ? null : Z.void(e, {
                                    at: p,
                                    mode: "highest"
                                }), F = o ? null : Z.void(e, {
                                    at: C,
                                    mode: "highest"
                                });
                                if (A) {
                                    var b = Z.before(e, p);
                                    b && g && ei.isAncestor(g[1], b.path) && (p = b)
                                }
                                if (F) {
                                    var y = Z.after(e, C);
                                    y && B && ei.isAncestor(B[1], y.path) && (C = y)
                                }
                                var w = [];
                                for (var O of Z.nodes(e, {
                                        at: i,
                                        voids: o
                                    })) {
                                    var [x, k] = O;
                                    (!r || 0 !== ei.compare(k, r)) && (!o && U.isElement(x) && Z.isVoid(e, x) || !ei.isCommon(k, p.path) && !ei.isCommon(k, C.path)) && (w.push(O), r = k)
                                }
                                var P = Array.from(w, t => {
                                        var [, r] = t;
                                        return Z.pathRef(e, r)
                                    }),
                                    R = Z.pointRef(e, p),
                                    S = Z.pointRef(e, C),
                                    T = "";
                                if (!m && !A) {
                                    var j = R.current,
                                        [N] = Z.leaf(e, j),
                                        {
                                            path: M
                                        } = j,
                                        {
                                            offset: z
                                        } = p,
                                        W = N.text.slice(z);
                                    W.length > 0 && (e.apply({
                                        type: "remove_text",
                                        path: M,
                                        offset: z,
                                        text: W
                                    }), T = W)
                                }
                                if (P.reverse().map(e => e.unref()).filter(e => null !== e).forEach(t => e_.removeNodes(e, {
                                        at: t,
                                        voids: o
                                    })), !F) {
                                    var _ = S.current,
                                        [L] = Z.leaf(e, _),
                                        {
                                            path: I
                                        } = _,
                                        q = m ? p.offset : 0,
                                        V = L.text.slice(q, C.offset);
                                    V.length > 0 && (e.apply({
                                        type: "remove_text",
                                        path: I,
                                        offset: q,
                                        text: V
                                    }), T = V)
                                }!m && E && S.current && R.current && e_.mergeNodes(e, {
                                    at: S.current,
                                    hanging: !0,
                                    voids: o
                                }), l && n && "character" === u && T.length > 1 && T.match(/[\u0E00-\u0E7F]+/) && e_.insertText(e, T.slice(0, T.length - a));
                                var H = R.unref(),
                                    K = S.unref(),
                                    $ = n ? H || K : K || H;
                                null == t.at && $ && e_.select(e, $)
                            }
                        }
                    })
                },
                insertFragment(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Z.withoutNormalizing(e, () => {
                        var n, {
                                hanging: u = !1,
                                voids: a = !1
                            } = r,
                            {
                                at: o = e.selection
                            } = r;
                        if (!t.length) return;
                        if (!!o) {
                            if (ev.isRange(o)) {
                                if (!u && (o = Z.unhangRange(e, o, {
                                        voids: a
                                    })), ev.isCollapsed(o)) o = o.anchor;
                                else {
                                    var [, i] = ev.edges(o);
                                    if (!a && Z.void(e, {
                                            at: i
                                        })) return;
                                    var s = Z.pointRef(e, i);
                                    e_.delete(e, {
                                        at: o
                                    }), o = s.unref()
                                }
                            } else ei.isPath(o) && (o = Z.start(e, o));
                            if (!(!a && Z.void(e, {
                                    at: o
                                }))) {
                                var l = Z.above(e, {
                                    at: o,
                                    match: t => U.isElement(t) && Z.isInline(e, t),
                                    mode: "highest",
                                    voids: a
                                });
                                if (l) {
                                    var [, c] = l;
                                    Z.isEnd(e, o, c) ? o = Z.after(e, c) : Z.isStart(e, o, c) && (o = Z.before(e, c))
                                }
                                var [, d] = Z.above(e, {
                                    match: t => U.isElement(t) && Z.isBlock(e, t),
                                    at: o,
                                    voids: a
                                }), f = Z.isStart(e, o, d), D = Z.isEnd(e, o, d), h = f && D, v = !f || f && D, p = !D, [, C] = en.first({
                                    children: t
                                }, []), [, g] = en.last({
                                    children: t
                                }, []), B = [], E = t => {
                                    var [r, n] = t;
                                    return 0 !== n.length && (!!h || !(v && ei.isAncestor(n, C) && U.isElement(r) && !e.isVoid(r) && !e.isInline(r) || p && ei.isAncestor(n, g) && U.isElement(r) && !e.isVoid(r) && !e.isInline(r)) && !0)
                                };
                                for (var m of en.nodes({
                                        children: t
                                    }, {
                                        pass: E
                                    })) E(m) && B.push(m);
                                var A = [],
                                    F = [],
                                    b = [],
                                    y = !0,
                                    w = !1;
                                for (var [O] of B) U.isElement(O) && !e.isInline(O) ? (y = !1, w = !0, F.push(O)) : y ? A.push(O) : b.push(O);
                                var [x] = Z.nodes(e, {
                                    at: o,
                                    match: t => eb.isText(t) || Z.isInline(e, t),
                                    mode: "highest",
                                    voids: a
                                }), [, k] = x, P = Z.isStart(e, o, k), R = Z.isEnd(e, o, k), S = Z.pathRef(e, D && !b.length ? ei.next(d) : d), T = Z.pathRef(e, R ? ei.next(k) : k);
                                e_.splitNodes(e, {
                                    at: o,
                                    match: t => w ? U.isElement(t) && Z.isBlock(e, t) : eb.isText(t) || Z.isInline(e, t),
                                    mode: w ? "lowest" : "highest",
                                    always: w && (!f || A.length > 0) && (!D || b.length > 0),
                                    voids: a
                                });
                                var j = Z.pathRef(e, !P || P && R ? ei.next(k) : k);
                                if (e_.insertNodes(e, A, {
                                        at: j.current,
                                        match: t => eb.isText(t) || Z.isInline(e, t),
                                        mode: "highest",
                                        voids: a
                                    }), h && !A.length && F.length && !b.length && e_.delete(e, {
                                        at: d,
                                        voids: a
                                    }), e_.insertNodes(e, F, {
                                        at: S.current,
                                        match: t => U.isElement(t) && Z.isBlock(e, t),
                                        mode: "lowest",
                                        voids: a
                                    }), e_.insertNodes(e, b, {
                                        at: T.current,
                                        match: t => eb.isText(t) || Z.isInline(e, t),
                                        mode: "highest",
                                        voids: a
                                    }), !r.at && (b.length > 0 && T.current ? n = ei.previous(T.current) : F.length > 0 && S.current ? n = ei.previous(S.current) : j.current && (n = ei.previous(j.current)), n)) {
                                    var N = Z.end(e, n);
                                    e_.select(e, N)
                                }
                                j.unref(), S.unref(), T.unref()
                            }
                        }
                    })
                },
                insertText(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Z.withoutNormalizing(e, () => {
                        var {
                            voids: n = !1
                        } = r, {
                            at: u = e.selection
                        } = r;
                        if (!!u) {
                            if (ei.isPath(u) && (u = Z.range(e, u)), ev.isRange(u)) {
                                if (ev.isCollapsed(u)) u = u.anchor;
                                else {
                                    var a = ev.end(u);
                                    if (!n && Z.void(e, {
                                            at: a
                                        })) return;
                                    var o = ev.start(u),
                                        i = Z.pointRef(e, o),
                                        s = Z.pointRef(e, a);
                                    e_.delete(e, {
                                        at: u,
                                        voids: n
                                    });
                                    var l = i.unref(),
                                        c = s.unref();
                                    u = l || c, e_.setSelection(e, {
                                        anchor: u,
                                        focus: u
                                    })
                                }
                            }
                            if (!(!n && Z.void(e, {
                                    at: u
                                }))) {
                                var {
                                    path: d,
                                    offset: f
                                } = u;
                                t.length > 0 && e.apply({
                                    type: "insert_text",
                                    path: d,
                                    offset: f,
                                    text: t
                                })
                            }
                        }
                    })
                }
            })
        },
        604676: function(e, t, r) {
            "use strict";

            function n(e) {
                return "object" == typeof e && null != e && 1 === e.nodeType
            }

            function u(e, t) {
                return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
            }

            function a(e, t) {
                if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                    var r, n, a = getComputedStyle(e, null);
                    return u(a.overflowY, t) || u(a.overflowX, t) || !!(n = function(e) {
                        if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                        try {
                            return e.ownerDocument.defaultView.frameElement
                        } catch (e) {
                            return null
                        }
                    }(r = e)) && (n.clientHeight < r.scrollHeight || n.clientWidth < r.scrollWidth)
                }
                return !1
            }

            function o(e, t, r, n, u, a, o, i) {
                return a < e && o > t || a > e && o < t ? 0 : a <= e && i <= r || o >= t && i >= r ? a - e - n : o > t && i < r || a < e && i > r ? o - t + u : 0
            }
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var i = function(e, t) {
                var r = window,
                    u = t.scrollMode,
                    i = t.block,
                    s = t.inline,
                    l = t.boundary,
                    c = t.skipOverflowHiddenElements,
                    d = "function" == typeof l ? l : function(e) {
                        return e !== l
                    };
                if (!n(e)) throw TypeError("Invalid target");
                for (var f, D, h = document.scrollingElement || document.documentElement, v = [], p = e; n(p) && d(p);) {
                    if ((p = null == (D = (f = p).parentElement) ? f.getRootNode().host || null : D) === h) {
                        v.push(p);
                        break
                    }
                    null != p && p === document.body && a(p) && !a(document.documentElement) || null != p && a(p, c) && v.push(p)
                }
                for (var C = r.visualViewport ? r.visualViewport.width : innerWidth, g = r.visualViewport ? r.visualViewport.height : innerHeight, B = window.scrollX || pageXOffset, E = window.scrollY || pageYOffset, m = e.getBoundingClientRect(), A = m.height, F = m.width, b = m.top, y = m.right, w = m.bottom, O = m.left, x = "start" === i || "nearest" === i ? b : "end" === i ? w : b + A / 2, k = "center" === s ? O + F / 2 : "end" === s ? y : O, P = [], R = 0; R < v.length; R++) {
                    var S = v[R],
                        T = S.getBoundingClientRect(),
                        j = T.height,
                        N = T.width,
                        M = T.top,
                        z = T.right,
                        W = T.bottom,
                        _ = T.left;
                    if ("if-needed" === u && b >= 0 && O >= 0 && w <= g && y <= C && b >= M && w <= W && O >= _ && y <= z) break;
                    var L = getComputedStyle(S),
                        I = parseInt(L.borderLeftWidth, 10),
                        q = parseInt(L.borderTopWidth, 10),
                        V = parseInt(L.borderRightWidth, 10),
                        H = parseInt(L.borderBottomWidth, 10),
                        K = 0,
                        U = 0,
                        $ = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - I - V : 0,
                        X = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - q - H : 0,
                        J = "offsetWidth" in S ? 0 === S.offsetWidth ? 0 : N / S.offsetWidth : 0,
                        Y = "offsetHeight" in S ? 0 === S.offsetHeight ? 0 : j / S.offsetHeight : 0;
                    if (h === S) K = "start" === i ? x : "end" === i ? x - g : "nearest" === i ? o(E, E + g, g, q, H, E + x, E + x + A, A) : x - g / 2, U = "start" === s ? k : "center" === s ? k - C / 2 : "end" === s ? k - C : o(B, B + C, C, I, V, B + k, B + k + F, F), K = Math.max(0, K + E), U = Math.max(0, U + B);
                    else {
                        K = "start" === i ? x - M - q : "end" === i ? x - W + H + X : "nearest" === i ? o(M, W, j, q, H + X, x, x + A, A) : x - (M + j / 2) + X / 2, U = "start" === s ? k - _ - I : "center" === s ? k - (_ + N / 2) + $ / 2 : "end" === s ? k - z + V + $ : o(_, z, N, I, V + $, k, k + F, F);
                        var G = S.scrollLeft,
                            Z = S.scrollTop;
                        x += Z - (K = Math.max(0, Math.min(Z + K / Y, S.scrollHeight - j / Y + X))), k += G - (U = Math.max(0, Math.min(G + U / J, S.scrollWidth - N / J + $)))
                    }
                    P.push({
                        el: S,
                        top: K,
                        left: U
                    })
                }
                return P
            }
        },
        746140: function(e, t, r) {
            "use strict";

            function n(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(e) {
                    return "'" + e + "'"
                }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function u(e) {
                return !!e && !!e[q]
            }

            function a(e) {
                var t;
                return !!e && (function(e) {
                    if (!e || "object" != typeof e) return !1;
                    var t = Object.getPrototypeOf(e);
                    if (null === t) return !0;
                    var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                    return r === Object || "function" == typeof r && Function.toString.call(r) === V
                }(e) || Array.isArray(e) || !!e[I] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[I]) || c(e) || d(e))
            }

            function o(e, t, r) {
                void 0 === r && (r = !1), 0 === i(e) ? (r ? Object.keys : H)(e).forEach(function(n) {
                    r && "symbol" == typeof n || t(n, e[n], e)
                }) : e.forEach(function(r, n) {
                    return t(n, r, e)
                })
            }

            function i(e) {
                var t = e[q];
                return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : c(e) ? 2 : d(e) ? 3 : 0
            }

            function s(e, t) {
                return 2 === i(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }
            r.r(t), r.d(t, {
                createDraft: function() {
                    return G
                },
                finishDraft: function() {
                    return Z
                },
                isDraft: function() {
                    return u
                },
                produce: function() {
                    return Y
                }
            });

            function l(e, t, r) {
                var n = i(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
            }

            function c(e) {
                return z && e instanceof Map
            }

            function d(e) {
                return W && e instanceof Set
            }

            function f(e) {
                return e.o || e.t
            }

            function D(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = K(e);
                delete t[q];
                for (var r = H(t), n = 0; n < r.length; n++) {
                    var u = r[n],
                        a = t[u];
                    !1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[u] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: a.enumerable,
                        value: e[u]
                    })
                }
                return Object.create(Object.getPrototypeOf(e), t)
            }

            function h(e, t) {
                return void 0 === t && (t = !1), p(e) || u(e) || !a(e) || (i(e) > 1 && (e.set = e.add = e.clear = e.delete = v), Object.freeze(e), t && o(e, function(e, t) {
                    return h(t, !0)
                }, !0)), e
            }

            function v() {
                n(2)
            }

            function p(e) {
                return null == e || "object" != typeof e || Object.isFrozen(e)
            }

            function C(e) {
                var t = U[e];
                return t || n(18, e), t
            }

            function g() {
                return N
            }

            function B(e, t) {
                t && (C("Patches"), e.u = [], e.s = [], e.v = t)
            }

            function E(e) {
                m(e), e.p.forEach(F), e.p = null
            }

            function m(e) {
                e === N && (N = e.l)
            }

            function A(e) {
                return N = {
                    p: [],
                    l: N,
                    h: e,
                    m: !0,
                    _: 0
                }
            }

            function F(e) {
                var t = e[q];
                0 === t.i || 1 === t.i ? t.j() : t.g = !0
            }

            function b(e, t) {
                t._ = t.p.length;
                var r = t.p[0],
                    u = void 0 !== e && e !== r;
                return t.h.O || C("ES5").S(t, e, u), u ? (r[q].P && (E(t), n(4)), a(e) && (e = y(t, e), t.l || O(t, e)), t.u && C("Patches").M(r[q].t, e, t.u, t.s)) : e = y(t, r, []), E(t), t.u && t.v(t.u, t.s), e !== L ? e : void 0
            }

            function y(e, t, r) {
                if (p(t)) return t;
                var n = t[q];
                if (!n) return o(t, function(u, a) {
                    return w(e, n, t, u, a, r)
                }, !0), t;
                if (n.A !== e) return t;
                if (!n.P) return O(e, n.t, !0), n.t;
                if (!n.I) {
                    n.I = !0, n.A._--;
                    var u = 4 === n.i || 5 === n.i ? n.o = D(n.k) : n.o,
                        a = u,
                        i = !1;
                    3 === n.i && (a = new Set(u), u.clear(), i = !0), o(a, function(t, a) {
                        return w(e, n, u, t, a, r, i)
                    }), O(e, u, !1), r && e.u && C("Patches").N(n, r, e.u, e.s)
                }
                return n.o
            }

            function w(e, t, r, n, o, i, c) {
                if (u(o)) {
                    var d = y(e, o, i && t && 3 !== t.i && !s(t.R, n) ? i.concat(n) : void 0);
                    if (l(r, n, d), !u(d)) return;
                    e.m = !1
                } else c && r.add(o);
                if (a(o) && !p(o)) {
                    if (!e.h.D && e._ < 1) return;
                    y(e, o), t && t.A.l || O(e, o)
                }
            }

            function O(e, t, r) {
                void 0 === r && (r = !1), !e.l && e.h.D && e.m && h(t, r)
            }

            function x(e, t) {
                var r = e[q];
                return (r ? f(r) : e)[t]
            }

            function k(e, t) {
                if (t in e)
                    for (var r = Object.getPrototypeOf(e); r;) {
                        var n = Object.getOwnPropertyDescriptor(r, t);
                        if (n) return n;
                        r = Object.getPrototypeOf(r)
                    }
            }

            function P(e) {
                e.P || (e.P = !0, e.l && P(e.l))
            }

            function R(e) {
                e.o || (e.o = D(e.t))
            }

            function S(e, t, r) {
                var n, u, a, o, i, s, l, f, D, h = c(t) ? C("MapSet").F(t, r) : d(t) ? C("MapSet").T(t, r) : e.O ? (n = t, u = r, i = o = {
                    i: (a = Array.isArray(n)) ? 1 : 0,
                    A: u ? u.A : N,
                    P: !1,
                    I: !1,
                    R: {},
                    l: u,
                    t: n,
                    k: null,
                    o: null,
                    j: null,
                    C: !1
                }, s = $, a && (i = [o], s = X), f = (l = Proxy.revocable(i, s)).revoke, D = l.proxy, o.k = D, o.j = f, D) : C("ES5").J(t, r);
                return (r ? r.A : N).p.push(h), h
            }

            function T(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e)
                }
                return D(e)
            }
            var j, N, M = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                z = "undefined" != typeof Map,
                W = "undefined" != typeof Set,
                _ = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                L = M ? Symbol.for("immer-nothing") : ((j = {})["immer-nothing"] = !0, j),
                I = M ? Symbol.for("immer-draftable") : "__$immer_draftable",
                q = M ? Symbol.for("immer-state") : "__$immer_state",
                V = "" + Object.prototype.constructor,
                H = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : Object.getOwnPropertyNames,
                K = Object.getOwnPropertyDescriptors || function(e) {
                    var t = {};
                    return H(e).forEach(function(r) {
                        t[r] = Object.getOwnPropertyDescriptor(e, r)
                    }), t
                },
                U = {},
                $ = {
                    get: function(e, t) {
                        if (t === q) return e;
                        var r, n, u, o = f(e);
                        if (!s(o, t)) {
                            ;
                            return r = e, (u = k(o, t)) ? "value" in u ? u.value : null === (n = u.get) || void 0 === n ? void 0 : n.call(r.k) : void 0
                        }
                        var i = o[t];
                        return e.I || !a(i) ? i : i === x(e.t, t) ? (R(e), e.o[t] = S(e.A.h, i, e)) : i
                    },
                    has: function(e, t) {
                        return t in f(e)
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(f(e))
                    },
                    set: function(e, t, r) {
                        var n = k(f(e), t);
                        if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
                        if (!e.P) {
                            var u, a, o = x(f(e), t),
                                i = null == o ? void 0 : o[q];
                            if (i && i.t === r) return e.o[t] = r, e.R[t] = !1, !0;
                            if (((u = r) === (a = o) ? 0 !== u || 1 / u == 1 / a : u != u && a != a) && (void 0 !== r || s(e.t, t))) return !0;
                            R(e), P(e)
                        }
                        return e.o[t] === r && (void 0 !== r || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0
                    },
                    deleteProperty: function(e, t) {
                        return void 0 !== x(e.t, t) || t in e.t ? (e.R[t] = !1, R(e), P(e)) : delete e.R[t], e.o && delete e.o[t], !0
                    },
                    getOwnPropertyDescriptor: function(e, t) {
                        var r = f(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return n ? {
                            writable: !0,
                            configurable: 1 !== e.i || "length" !== t,
                            enumerable: n.enumerable,
                            value: r[t]
                        } : n
                    },
                    defineProperty: function() {
                        n(11)
                    },
                    getPrototypeOf: function(e) {
                        return Object.getPrototypeOf(e.t)
                    },
                    setPrototypeOf: function() {
                        n(12)
                    }
                },
                X = {};
            o($, function(e, t) {
                X[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), X.deleteProperty = function(e, t) {
                return X.set.call(this, e, t, void 0)
            }, X.set = function(e, t, r) {
                return $.set.call(this, e[0], t, r, e[0])
            };
            var J = new(function() {
                    function e(e) {
                        var t = this;
                        this.O = _, this.D = !0, this.produce = function(e, r, u) {
                            if ("function" == typeof e && "function" != typeof r) {
                                var o, i = r;
                                return r = e,
                                    function(e) {
                                        var n = this;
                                        void 0 === e && (e = i);
                                        for (var u = arguments.length, a = Array(u > 1 ? u - 1 : 0), o = 1; o < u; o++) a[o - 1] = arguments[o];
                                        return t.produce(e, function(e) {
                                            var t;
                                            return (t = r).call.apply(t, [n, e].concat(a))
                                        })
                                    }
                            }
                            if ("function" != typeof r && n(6), void 0 !== u && "function" != typeof u && n(7), a(e)) {
                                var s = A(t),
                                    l = S(t, e, void 0),
                                    c = !0;
                                try {
                                    o = r(l), c = !1
                                } finally {
                                    c ? E(s) : m(s)
                                }
                                return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(e) {
                                    return B(s, u), b(e, s)
                                }, function(e) {
                                    throw E(s), e
                                }) : (B(s, u), b(o, s))
                            }
                            if (!e || "object" != typeof e) {
                                if (void 0 === (o = r(e)) && (o = e), o === L && (o = void 0), t.D && h(o, !0), u) {
                                    var d = [],
                                        f = [];
                                    C("Patches").M(e, o, d, f), u(d, f)
                                }
                                return o
                            }
                            n(21, e)
                        }, this.produceWithPatches = function(e, r) {
                            if ("function" == typeof e) return function(r) {
                                for (var n = arguments.length, u = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) u[a - 1] = arguments[a];
                                return t.produceWithPatches(r, function(t) {
                                    return e.apply(void 0, [t].concat(u))
                                })
                            };
                            var n, u, a = t.produce(e, r, function(e, t) {
                                n = e, u = t
                            });
                            return "undefined" != typeof Promise && a instanceof Promise ? a.then(function(e) {
                                return [e, n, u]
                            }) : [a, n, u]
                        }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
                    }
                    var t = e.prototype;
                    return t.createDraft = function(e) {
                        a(e) || n(8), u(e) && (u(t = e) || n(22, t), e = function e(t) {
                            if (!a(t)) return t;
                            var r, n = t[q],
                                u = i(t);
                            if (n) {
                                if (!n.P && (n.i < 4 || !C("ES5").K(n))) return n.t;
                                n.I = !0, r = T(t, u), n.I = !1
                            } else r = T(t, u);
                            return o(r, function(t, u) {
                                var a, o;
                                n && (a = n.t, o = t, (2 === i(a) ? a.get(o) : a[o]) === u) || l(r, t, e(u))
                            }), 3 === u ? new Set(r) : r
                        }(t));
                        var t, r = A(this),
                            s = S(this, e, void 0);
                        return s[q].C = !0, m(r), s
                    }, t.finishDraft = function(e, t) {
                        var r = (e && e[q]).A;
                        return B(r, t), b(void 0, r)
                    }, t.setAutoFreeze = function(e) {
                        this.D = e
                    }, t.setUseProxies = function(e) {
                        e && !_ && n(20), this.O = e
                    }, t.applyPatches = function(e, t) {
                        for (r = t.length - 1; r >= 0; r--) {
                            var r, n = t[r];
                            if (0 === n.path.length && "replace" === n.op) {
                                e = n.value;
                                break
                            }
                        }
                        r > -1 && (t = t.slice(r + 1));
                        var a = C("Patches").$;
                        return u(e) ? a(e, t) : this.produce(e, function(e) {
                            return a(e, t)
                        })
                    }, e
                }()),
                Y = J.produce,
                G = (J.produceWithPatches.bind(J), J.setAutoFreeze.bind(J), J.setUseProxies.bind(J), J.applyPatches.bind(J), J.createDraft.bind(J)),
                Z = J.finishDraft.bind(J)
        },
        156336: function(e, t, r) {
            "use strict";

            function n(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function u(e) {
                var t, r;
                return !1 !== n(e) && (void 0 === (t = e.constructor) || !1 !== n(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf") && !0)
            }
            r.r(t), r.d(t, {
                isPlainObject: function() {
                    return u
                }
            })
        }
    }
]);