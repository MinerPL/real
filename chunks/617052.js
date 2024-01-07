            var r, a;
            e = n.nmd(e), r = this, a = function(e) {
                return e.defineLocale("ml", {
                    months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                    monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                    weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                    weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm -നു",
                        LTS: "A h:mm:ss -നു",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm -നു",
                        LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                    },
                    calendar: {
                        sameDay: "[ഇന്ന്] LT",
                        nextDay: "[നാളെ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ഇന്നലെ] LT",
                        lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s കഴിഞ്ഞ്",
                        past: "%s മുൻപ്",
                        s: "അൽപ നിമിഷങ്ങൾ",
                        ss: "%d സെക്കൻഡ്",
                        m: "ഒരു മിനിറ്റ്",
                        mm: "%d മിനിറ്റ്",
                        h: "ഒരു മണിക്കൂർ",
                        hh: "%d മണിക്കൂർ",
                        d: "ഒരു ദിവസം",
                        dd: "%d ദിവസം",
                        M: "ഒരു മാസം",
                        MM: "%d മാസം",
                        y: "ഒരു വർഷം",
                        yy: "%d വർഷം"
                    },
                    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t) ? e + 12 : e
                    },
                    meridiem: function(e, t, n) {
                        if (e < 4) return "രാത്രി";
                        if (e < 12) return "രാവിലെ";
                        if (e < 17) return "ഉച്ച കഴിഞ്ഞ്";
                        else if (e < 20) return "വൈകുന്നേരം";
                        else return "രാത്രി"
                    }
                })
            }, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)