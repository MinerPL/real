            t = n.nmd(t), n("781738"), n("424973"), n("843762"), (function() {
                "use strict";
                var r = {
                        function: !0,
                        object: !0
                    },
                    i = r[typeof window] && window || this,
                    o = r[typeof e] && e,
                    a = r[typeof t] && t && !t.nodeType && t,
                    u = o && a && "object" == typeof n.g && n.g;
                u && (u.global === u || u.window === u || u.self === u) && (i = u);
                var s = 9007199254740991,
                    c = /\bOpera/,
                    l = Object.prototype,
                    f = l.hasOwnProperty,
                    h = l.toString;

                function p(t) {
                    return (t = String(t)).charAt(0).toUpperCase() + t.slice(1)
                }

                function d(t) {
                    return t = b(t), /^(?:webOS|i(?:OS|P))/.test(t) ? t : p(t)
                }

                function v(t, e) {
                    for (var n in t) f.call(t, n) && e(t[n], n, t)
                }

                function y(t) {
                    return null == t ? p(t) : h.call(t).slice(8, -1)
                }

                function m(t) {
                    return String(t).replace(/([ -])(?!$)/g, "$1?")
                }

                function g(t, e) {
                    var n = null;
                    return ! function(t, e) {
                        var n = -1,
                            r = t ? t.length : 0;
                        if ("number" == typeof r && r > -1 && r <= s)
                            for (; ++n < r;) e(t[n], n, t);
                        else v(t, e)
                    }(t, function(r, i) {
                        n = e(n, r, i, t)
                    }), n
                }

                function b(t) {
                    return String(t).replace(/^ +| +$/g, "")
                }
                var _ = function t(e) {
                    var n, r, o, a, u, s = i,
                        l = e && "object" == typeof e && "String" != y(e);
                    l && (s = e, e = null);
                    var f = s.navigator || {},
                        p = f.userAgent || "";
                    e || (e = p);
                    var _ = l ? !!f.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(h.toString()),
                        x = "Object",
                        w = l ? x : "ScriptBridgingProxyObject",
                        O = l ? x : "Environment",
                        k = l && s.java ? "JavaPackage" : y(s.java),
                        S = l ? x : "RuntimeObject",
                        E = /\bJava/.test(k) && s.java,
                        P = E && y(s.environment) == O,
                        C = s.document || {},
                        A = s.operamini || s.opera,
                        j = c.test(j = l && A ? A["[[Class]]"] : y(A)) ? j : A = null,
                        R = e,
                        T = [],
                        M = null,
                        L = e == p,
                        V = L && A && "function" == typeof A.version && A.version(),
                        F = function(t) {
                            return g(t, function(t, n) {
                                return t || RegExp("\\b" + (n.pattern || m(n)) + "\\b", "i").exec(e) && (n.label || n)
                            })
                        }([{
                            label: "EdgeHTML",
                            pattern: "Edge"
                        }, "Trident", {
                            label: "WebKit",
                            pattern: "AppleWebKit"
                        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                        I = function(t) {
                            return g(t, function(t, n) {
                                return t || RegExp("\\b" + (n.pattern || m(n)) + "\\b", "i").exec(e) && (n.label || n)
                            })
                        }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                            label: "Microsoft Edge",
                            pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                            label: "Samsung Internet",
                            pattern: "SamsungBrowser"
                        }, "SeaMonkey", {
                            label: "Silk",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Sleipnir", "SlimBrowser", {
                            label: "SRWare Iron",
                            pattern: "Iron"
                        }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                            label: "Yandex Browser",
                            pattern: "YaBrowser"
                        }, {
                            label: "UC Browser",
                            pattern: "UCBrowser"
                        }, "Opera Mini", {
                            label: "Opera Mini",
                            pattern: "OPiOS"
                        }, "Opera", {
                            label: "Opera",
                            pattern: "OPR"
                        }, "Chromium", "Chrome", {
                            label: "Chrome",
                            pattern: "(?:HeadlessChrome)"
                        }, {
                            label: "Chrome Mobile",
                            pattern: "(?:CriOS|CrMo)"
                        }, {
                            label: "Firefox",
                            pattern: "(?:Firefox|Minefield)"
                        }, {
                            label: "Firefox for iOS",
                            pattern: "FxiOS"
                        }, {
                            label: "IE",
                            pattern: "IEMobile"
                        }, {
                            label: "IE",
                            pattern: "MSIE"
                        }, "Safari"]),
                        N = U([{
                            label: "BlackBerry",
                            pattern: "BB10"
                        }, "BlackBerry", {
                            label: "Galaxy S",
                            pattern: "GT-I9000"
                        }, {
                            label: "Galaxy S2",
                            pattern: "GT-I9100"
                        }, {
                            label: "Galaxy S3",
                            pattern: "GT-I9300"
                        }, {
                            label: "Galaxy S4",
                            pattern: "GT-I9500"
                        }, {
                            label: "Galaxy S5",
                            pattern: "SM-G900"
                        }, {
                            label: "Galaxy S6",
                            pattern: "SM-G920"
                        }, {
                            label: "Galaxy S6 Edge",
                            pattern: "SM-G925"
                        }, {
                            label: "Galaxy S7",
                            pattern: "SM-G930"
                        }, {
                            label: "Galaxy S7 Edge",
                            pattern: "SM-G935"
                        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                            label: "Kindle Fire",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                            label: "Wii U",
                            pattern: "WiiU"
                        }, "Wii", "Xbox One", {
                            label: "Xbox 360",
                            pattern: "Xbox"
                        }, "Xoom"]),
                        z = function(t) {
                            return g(t, function(t, n, r) {
                                return t || (n[N] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)] || RegExp("\\b" + m(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) && r
                            })
                        }({
                            Apple: {
                                iPad: 1,
                                iPhone: 1,
                                iPod: 1
                            },
                            Alcatel: {},
                            Archos: {},
                            Amazon: {
                                Kindle: 1,
                                "Kindle Fire": 1
                            },
                            Asus: {
                                Transformer: 1
                            },
                            "Barnes & Noble": {
                                Nook: 1
                            },
                            BlackBerry: {
                                PlayBook: 1
                            },
                            Google: {
                                "Google TV": 1,
                                Nexus: 1
                            },
                            HP: {
                                TouchPad: 1
                            },
                            HTC: {},
                            Huawei: {},
                            Lenovo: {},
                            LG: {},
                            Microsoft: {
                                Xbox: 1,
                                "Xbox One": 1
                            },
                            Motorola: {
                                Xoom: 1
                            },
                            Nintendo: {
                                "Wii U": 1,
                                Wii: 1
                            },
                            Nokia: {
                                Lumia: 1
                            },
                            Oppo: {},
                            Samsung: {
                                "Galaxy S": 1,
                                "Galaxy S2": 1,
                                "Galaxy S3": 1,
                                "Galaxy S4": 1
                            },
                            Sony: {
                                PlayStation: 1,
                                "PlayStation Vita": 1
                            },
                            Xiaomi: {
                                Mi: 1,
                                Redmi: 1
                            }
                        }),
                        B = function(t) {
                            return g(t, function(t, n) {
                                var r, i, o, a, u = n.pattern || m(n);
                                if (!t && (t = RegExp("\\b" + u + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e))) {
                                    ;
                                    r = t, i = u, o = n.label || n, a = {
                                        "10.0": "10",
                                        "6.4": "10 Technical Preview",
                                        "6.3": "8.1",
                                        "6.2": "8",
                                        "6.1": "Server 2008 R2 / 7",
                                        "6.0": "Server 2008 / Vista",
                                        "5.2": "Server 2003 / XP 64-bit",
                                        "5.1": "XP",
                                        "5.01": "2000 SP1",
                                        "5.0": "2000",
                                        "4.0": "NT",
                                        "4.90": "ME"
                                    }, i && o && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (a = a[/[\d.]+$/.exec(r)]) && (r = "Windows " + a), r = String(r), i && o && (r = r.replace(RegExp(i, "i"), o)), t = r = d(r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                                }
                                return t
                            })
                        }(["Windows Phone", "KaiOS", "Android", "CentOS", {
                            label: "Chrome OS",
                            pattern: "CrOS"
                        }, "Debian", {
                            label: "DragonFly BSD",
                            pattern: "DragonFly"
                        }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

                    function U(t) {
                        return g(t, function(t, n) {
                            var r = n.pattern || m(n);
                            return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), n = n.label || n, t = d(t[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
                        })
                    }

                    function W(t) {
                        return g(t, function(t, n) {
                            return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
                        })
                    }
                    if (F && (F = [F]), /\bAndroid\b/.test(B) && !N && (a = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e)) && (N = b(a[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), z && !N ? N = U([z]) : z && N && (N = N.replace(RegExp("^(" + m(z) + ")[-_.\\s]", "i"), z + " ").replace(RegExp("^(" + m(z) + ")[-_.]?(\\w)", "i"), z + " $2")), (a = /\bGoogle TV\b/.exec(N)) && (N = a[0]), /\bSimulator\b/i.test(e) && (N = (N ? N + " " : "") + "Simulator"), "Opera Mini" == I && /\bOPiOS\b/.test(e) && T.push("running in Turbo/Uncompressed mode"), "IE" == I && /\blike iPhone OS\b/.test(e) ? (z = (a = t(e.replace(/like iPhone OS/, ""))).manufacturer, N = a.product) : /^iP/.test(N) ? (I || (I = "Safari"), B = "iOS" + ((a = / OS ([\d_]+)/i.exec(e)) ? " " + a[1].replace(/_/g, ".") : "")) : "Konqueror" == I && /^Linux\b/i.test(B) ? B = "Kubuntu" : z && "Google" != z && (/Chrome/.test(I) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(N)) || /\bAndroid\b/.test(B) && /^Chrome/.test(I) && /\bVersion\//i.test(e) ? (I = "Android Browser", B = /\bAndroid\b/.test(B) ? B : "Android") : "Silk" == I ? (!/\bMobi/i.test(e) && (B = "Android", T.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && T.unshift("accelerated")) : "UC Browser" == I && /\bUCWEB\b/.test(e) ? T.push("speed mode") : "PaleMoon" == I && (a = /\bFirefox\/([\d.]+)\b/.exec(e)) ? T.push("identifying as Firefox " + a[1]) : "Firefox" == I && (a = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (B || (B = "Firefox OS"), N || (N = a[1])) : !I || (a = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(I)) ? (I && !N && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(a + "/") + 8)) && (I = null), (a = N || z || B) && (N || z || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(B)) && (I = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(B) ? B : a) + " Browser")) : "Electron" == I && (a = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && T.push("Chromium " + a), !V && (V = W(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", m(I), "(?:Firefox|Minefield|NetFront)"])), (a = "iCab" == F && parseFloat(V) > 3 && "WebKit" || /\bOpera\b/.test(I) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(e) && ("Mac OS" == B ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(I) && "NetFront") && (F = [a]), "IE" == I && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (I += " Mobile", B = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x"), T.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (I = "IE Mobile", B = "Windows Phone 8.x", T.unshift("desktop mode"), V || (V = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != I && "Trident" == F && (a = /\brv:([\d.]+)/.exec(e)) && (I && T.push("identifying as " + I + (V ? " " + V : "")), I = "IE", V = a[1]), L) {
                        ;
                        if (r = "global", o = null != (n = s) ? typeof n[r] : "number", /^(?:boolean|number|string|undefined)$/.test(o) || "object" == o && !n[r]) y(a = s.runtime) == w ? (I = "Adobe AIR", B = a.flash.system.Capabilities.os) : y(a = s.phantom) == S ? (I = "PhantomJS", V = (a = a.version || null) && a.major + "." + a.minor + "." + a.patch) : "number" == typeof C.documentMode && (a = /\bTrident\/(\d+)/i.exec(e)) ? (V = [V, C.documentMode], (a = +a[1] + 4) != V[1] && (T.push("IE " + V[1] + " mode"), F && (F[1] = ""), V[1] = a), V = "IE" == I ? String(V[1].toFixed(1)) : V[0]) : "number" == typeof C.documentMode && /^(?:Chrome|Firefox)\b/.test(I) && (T.push("masking as " + I + " " + V), I = "IE", V = "11.0", F = ["Trident"], B = "Windows");
                        else if (E && (R = (a = E.lang.System).getProperty("os.arch"), B = B || a.getProperty("os.name") + " " + a.getProperty("os.version")), P) {
                            try {
                                V = s.require("ringo/engine").version.join("."), I = "RingoJS"
                            } catch (t) {
                                (a = s.system) && a.global.system == s.system && (I = "Narwhal", B || (B = a[0].os || null))
                            }!I && (I = "Rhino")
                        } else "object" == typeof s.process && !s.process.browser && (a = s.process) && ("object" == typeof a.versions && ("string" == typeof a.versions.electron ? (T.push("Node " + a.versions.node), I = "Electron", V = a.versions.electron) : "string" == typeof a.versions.nw && (T.push("Chromium " + V, "Node " + a.versions.node), I = "NW.js", V = a.versions.nw)), !I && (I = "Node.js", R = a.arch, B = a.platform, V = (V = /[\d.]+/.exec(a.version)) ? V[0] : null));
                        B = B && d(B)
                    }
                    if (V && (a = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(V) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (L && f.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (M = /b/i.test(a) ? "beta" : "alpha", V = V.replace(RegExp(a + "\\+?$"), "") + ("beta" == M ? E ? "b" : "β" : E ? "a" : "α") + (/\d+\+?/.exec(a) || "")), "Fennec" == I || "Firefox" == I && /\b(?:Android|Firefox OS|KaiOS)\b/.test(B)) I = "Firefox Mobile";
                    else if ("Maxthon" == I && V) V = V.replace(/\.[\d.]+/, ".x");
                    else if (/\bXbox\b/i.test(N)) "Xbox 360" == N && (B = null), "Xbox 360" == N && /\bIEMobile\b/.test(e) && T.unshift("mobile mode");
                    else if ((/^(?:Chrome|IE|Opera)$/.test(I) || I && !N && !/Browser|Mobi/.test(I)) && ("Windows CE" == B || /Mobi/i.test(e))) I += " Mobile";
                    else if ("IE" == I && L) try {
                        null === s.external && T.unshift("platform preview")
                    } catch (t) {
                        T.unshift("embedded")
                    } else(/\bBlackBerry\b/.test(N) || /\bBB10\b/.test(e)) && (a = (RegExp(N.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || V) ? (B = ((a = [a, /BB10/.test(e)])[1] ? (N = null, z = "BlackBerry") : "Device Software") + " " + a[0], V = null) : this != v && "Wii" != N && (L && A || /Opera/.test(I) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == I && /\bOS X (?:\d+\.){2,}/.test(B) || "IE" == I && (B && !/^Win/.test(B) && V > 5.5 || /\bWindows XP\b/.test(B) && V > 8 || 8 == V && !/\bTrident\b/.test(e))) && !c.test(a = t.call(v, e.replace(c, "") + ";")) && a.name && (a = "ing as " + a.name + ((a = a.version) ? " " + a : ""), c.test(I) ? (/\bIE\b/.test(a) && "Mac OS" == B && (B = null), a = "identify" + a) : (a = "mask" + a, I = j ? d(j.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(a) && (B = null), !L && (V = null)), F = ["Presto"], T.push(a));
                    (a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a], "Safari" == I && "+" == a[1].slice(-1) ? (I = "WebKit Nightly", M = "alpha", V = a[1].slice(0, -1)) : (V == a[1] || V == (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (V = null), a[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == a[0] && 537.36 == a[2] && parseFloat(a[1]) >= 28 && "WebKit" == F && (F = ["Blink"]), L && (_ || a[1]) ? (F && (F[1] = "like Chrome"), a = a[1] || ((a = a[0]) < 530 ? 1 : a < 532 ? 2 : a < 532.05 ? 3 : a < 533 ? 4 : a < 534.03 ? 5 : a < 534.07 ? 6 : a < 534.1 ? 7 : a < 534.13 ? 8 : a < 534.16 ? 9 : a < 534.24 ? 10 : a < 534.3 ? 11 : a < 535.01 ? 12 : a < 535.02 ? "13+" : a < 535.07 ? 15 : a < 535.11 ? 16 : a < 535.19 ? 17 : a < 536.05 ? 18 : a < 536.1 ? 19 : a < 537.01 ? 20 : a < 537.11 ? "21+" : a < 537.13 ? 23 : a < 537.18 ? 24 : a < 537.24 ? 25 : a < 537.36 ? 26 : "Blink" != F ? "27" : "28")) : (F && (F[1] = "like Safari"), a = (a = a[0]) < 400 ? 1 : a < 500 ? 2 : a < 526 ? 3 : a < 533 ? 4 : a < 534 ? "4+" : a < 535 ? 5 : a < 537 ? 6 : a < 538 ? 7 : a < 601 ? 8 : a < 602 ? 9 : a < 604 ? 10 : a < 606 ? 11 : a < 608 ? 12 : "12"), F && (F[1] += " " + (a += "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")), "Safari" == I && (!V || parseInt(V) > 45) ? V = a : "Chrome" == I && /\bHeadlessChrome/i.test(e) && T.unshift("headless")), "Opera" == I && (a = /\bzbov|zvav$/.exec(B)) ? (I += " ", T.unshift("desktop mode"), "zvav" == a ? (I += "Mini", V = null) : I += "Mobile", B = B.replace(RegExp(" *" + a + "$"), "")) : "Safari" == I && /\bChrome\b/.exec(F && F[1]) ? (T.unshift("desktop mode"), I = "Chrome Mobile", V = null, /\bOS X\b/.test(B) ? (z = "Apple", B = "iOS 4.3+") : B = null) : /\bSRWare Iron\b/.test(I) && !V && (V = W("Chrome")), V && 0 == V.indexOf(a = /[\d.]+$/.exec(B)) && e.indexOf("/" + a + "-") > -1 && (B = b(B.replace(a, ""))), B && -1 != B.indexOf(I) && !RegExp(I + " OS").test(B) && (B = B.replace(RegExp(" *" + m(I) + " *"), "")), F && !/\b(?:Avant|Nook)\b/.test(I) && (/Browser|Lunascape|Maxthon/.test(I) || "Safari" != I && /^iOS/.test(B) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(I) && F[1]) && (a = F[F.length - 1]) && T.push(a), T.length && (T = ["(" + T.join("; ") + ")"]), z && N && 0 > N.indexOf(z) && T.push("on " + z), N && T.push((/^on /.test(T[T.length - 1]) ? "" : "on ") + N), B && (u = (a = / ([\d.+]+)$/.exec(B)) && "/" == B.charAt(B.length - a[0].length - 1), B = {
                        architecture: 32,
                        family: a && !u ? B.replace(a[0], "") : B,
                        version: a ? a[1] : null,
                        toString: function() {
                            var t = this.version;
                            return this.family + (t && !u ? " " + t : "") + (64 == this.architecture ? " 64-bit" : "")
                        }
                    }), (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(R)) && !/\bi686\b/i.test(R) ? (B && (B.architecture = 64, B.family = B.family.replace(RegExp(" *" + a), "")), I && (/\bWOW64\b/i.test(e) || L && /\w(?:86|32)$/.test(f.cpuClass || f.platform) && !/\bWin64; x64\b/i.test(e)) && T.unshift("32-bit")) : B && /^OS X/.test(B.family) && "Chrome" == I && parseFloat(V) >= 39 && (B.architecture = 64), e || (e = null);
                    var q = {};
                    return q.description = e, q.layout = F && F[0], q.manufacturer = z, q.name = I, q.prerelease = M, q.product = N, q.ua = e, q.version = I && V, q.os = B || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function() {
                            return "null"
                        }
                    }, q.parse = t, q.toString = function() {
                        return this.description || ""
                    }, q.version && T.unshift(V), q.name && T.unshift(I), B && I && !(B == String(B).split(" ")[0] && (B == I.split(" ")[0] || N)) && T.push(N ? "(" + B + ")" : "on " + B), T.length && (q.description = T.join(" ")), q
                }();
                "function" == typeof define && "object" == typeof define.amd && define.amd ? (i.platform = _, define(function() {
                    return _
                })) : o && a ? v(_, function(t, e) {
                    o[e] = t
                }) : i.platform = _
            }).call(this)