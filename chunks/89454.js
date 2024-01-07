            var r, a;
            e = n.nmd(e), n("781738"), r = this, a = function(e) {
                return e.defineLocale("ug-cn", {
                    months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                    monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                    weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                    weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                    weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                        LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                        LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
                    },
                    meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t) ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
                    },
                    meridiem: function(e, t, n) {
                        var r = 100 * e + t;
                        if (r < 600) return "يېرىم كېچە";
                        if (r < 900) return "سەھەر";
                        if (r < 1130) return "چۈشتىن بۇرۇن";
                        else if (r < 1230) return "چۈش";
                        else if (r < 1800) return "چۈشتىن كېيىن";
                        else return "كەچ"
                    },
                    calendar: {
                        sameDay: "[بۈگۈن سائەت] LT",
                        nextDay: "[ئەتە سائەت] LT",
                        nextWeek: "[كېلەركى] dddd [سائەت] LT",
                        lastDay: "[تۆنۈگۈن] LT",
                        lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s كېيىن",
                        past: "%s بۇرۇن",
                        s: "نەچچە سېكونت",
                        ss: "%d سېكونت",
                        m: "بىر مىنۇت",
                        mm: "%d مىنۇت",
                        h: "بىر سائەت",
                        hh: "%d سائەت",
                        d: "بىر كۈن",
                        dd: "%d كۈن",
                        M: "بىر ئاي",
                        MM: "%d ئاي",
                        y: "بىر يىل",
                        yy: "%d يىل"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "-كۈنى";
                            case "w":
                            case "W":
                                return e + "-ھەپتە";
                            default:
                                return e
                        }
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)