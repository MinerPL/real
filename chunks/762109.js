            var r, a;
            e = n.nmd(e), n("781738"), r = this, a = function(e) {
                "use strict";
                var t = {
                        1: "௧",
                        2: "௨",
                        3: "௩",
                        4: "௪",
                        5: "௫",
                        6: "௬",
                        7: "௭",
                        8: "௮",
                        9: "௯",
                        0: "௦"
                    },
                    n = {
                        "௧": "1",
                        "௨": "2",
                        "௩": "3",
                        "௪": "4",
                        "௫": "5",
                        "௬": "6",
                        "௭": "7",
                        "௮": "8",
                        "௯": "9",
                        "௦": "0"
                    };
                return e.defineLocale("ta", {
                    months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                    weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                    weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, HH:mm",
                        LLLL: "dddd, D MMMM YYYY, HH:mm"
                    },
                    calendar: {
                        sameDay: "[இன்று] LT",
                        nextDay: "[நாளை] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[நேற்று] LT",
                        lastWeek: "[கடந்த வாரம்] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s இல்",
                        past: "%s முன்",
                        s: "ஒரு சில விநாடிகள்",
                        ss: "%d விநாடிகள்",
                        m: "ஒரு நிமிடம்",
                        mm: "%d நிமிடங்கள்",
                        h: "ஒரு மணி நேரம்",
                        hh: "%d மணி நேரம்",
                        d: "ஒரு நாள்",
                        dd: "%d நாட்கள்",
                        M: "ஒரு மாதம்",
                        MM: "%d மாதங்கள்",
                        y: "ஒரு வருடம்",
                        yy: "%d ஆண்டுகள்"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}வது/,
                    ordinal: function(e) {
                        return e + "வது"
                    },
                    preparse: function(e) {
                        return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                    meridiem: function(e, t, n) {
                        if (e < 2) return " யாமம்";
                        if (e < 6) return " வைகறை";
                        if (e < 10) return " காலை";
                        else if (e < 14) return " நண்பகல்";
                        else if (e < 18) return " எற்பாடு";
                        else if (e < 22) return " மாலை";
                        else return " யாமம்"
                    },
                    meridiemHour: function(e, t) {
                        if (12 === e && (e = 0), "யாமம்" === t) return e < 2 ? e : e + 12;
                        if ("வைகறை" === t || "காலை" === t) return e;
                        if ("நண்பகல்" === t) return e >= 10 ? e : e + 12;
                        else return e + 12
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)