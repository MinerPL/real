            var r, a;
            e = n.nmd(e), n("781738"), r = this, a = function(e) {
                "use strict";
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    n = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    };

                function r(e, t, n, r) {
                    var a = "";
                    if (t) switch (n) {
                        case "s":
                            a = "काही सेकंद";
                            break;
                        case "ss":
                            a = "%d सेकंद";
                            break;
                        case "m":
                            a = "एक मिनिट";
                            break;
                        case "mm":
                            a = "%d मिनिटे";
                            break;
                        case "h":
                            a = "एक तास";
                            break;
                        case "hh":
                            a = "%d तास";
                            break;
                        case "d":
                            a = "एक दिवस";
                            break;
                        case "dd":
                            a = "%d दिवस";
                            break;
                        case "M":
                            a = "एक महिना";
                            break;
                        case "MM":
                            a = "%d महिने";
                            break;
                        case "y":
                            a = "एक वर्ष";
                            break;
                        case "yy":
                            a = "%d वर्षे"
                    } else switch (n) {
                        case "s":
                            a = "काही सेकंदां";
                            break;
                        case "ss":
                            a = "%d सेकंदां";
                            break;
                        case "m":
                            a = "एका मिनिटा";
                            break;
                        case "mm":
                            a = "%d मिनिटां";
                            break;
                        case "h":
                            a = "एका तासा";
                            break;
                        case "hh":
                            a = "%d तासां";
                            break;
                        case "d":
                            a = "एका दिवसा";
                            break;
                        case "dd":
                            a = "%d दिवसां";
                            break;
                        case "M":
                            a = "एका महिन्या";
                            break;
                        case "MM":
                            a = "%d महिन्यां";
                            break;
                        case "y":
                            a = "एका वर्षा";
                            break;
                        case "yy":
                            a = "%d वर्षां"
                    }
                    return a.replace(/%d/i, e)
                }
                return e.defineLocale("mr", {
                    months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm वाजता",
                        LTS: "A h:mm:ss वाजता",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm वाजता",
                        LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[उद्या] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[मागील] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमध्ये",
                        past: "%sपूर्वी",
                        s: r,
                        ss: r,
                        m: r,
                        mm: r,
                        h: r,
                        hh: r,
                        d: r,
                        dd: r,
                        M: r,
                        MM: r,
                        y: r,
                        yy: r
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                    meridiemHour: function(e, t) {
                        if (12 === e && (e = 0), "रात्री" === t) return e < 4 ? e : e + 12;
                        if ("सकाळी" === t) return e;
                        if ("दुपारी" === t) return e >= 10 ? e : e + 12;
                        else if ("सायंकाळी" === t) return e + 12
                    },
                    meridiem: function(e, t, n) {
                        if (e < 4) return "रात्री";
                        if (e < 10) return "सकाळी";
                        if (e < 17) return "दुपारी";
                        else if (e < 20) return "सायंकाळी";
                        else return "रात्री"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)