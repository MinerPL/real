            var r, a;
            e = n.nmd(e), r = this, a = function(e) {
                "use strict";

                function t(e, t, n, r) {
                    var a = {
                        s: ["thodde secondanim", "thodde second"],
                        ss: [e + " secondanim", e + " second"],
                        m: ["eka mintan", "ek minute"],
                        mm: [e + " mintanim", e + " mintam"],
                        h: ["eka horan", "ek hor"],
                        hh: [e + " horanim", e + " horam"],
                        d: ["eka disan", "ek dis"],
                        dd: [e + " disanim", e + " dis"],
                        M: ["eka mhoinean", "ek mhoino"],
                        MM: [e + " mhoineanim", e + " mhoine"],
                        y: ["eka vorsan", "ek voros"],
                        yy: [e + " vorsanim", e + " vorsam"]
                    };
                    return t ? a[n][0] : a[n][1]
                }
                return e.defineLocale("gom-latn", {
                    months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                    monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
                    weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                    weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "A h:mm [vazta]",
                        LTS: "A h:mm:ss [vazta]",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY A h:mm [vazta]",
                        LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                        llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                    },
                    calendar: {
                        sameDay: "[Aiz] LT",
                        nextDay: "[Faleam] LT",
                        nextWeek: "[Ieta to] dddd[,] LT",
                        lastDay: "[Kal] LT",
                        lastWeek: "[Fatlo] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s",
                        past: "%s adim",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                    ordinal: function(e, t) {
                        if ("D" === t) return e + "er";
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    },
                    meridiemParse: /rati|sokalli|donparam|sanje/,
                    meridiemHour: function(e, t) {
                        if (12 === e && (e = 0), "rati" === t) return e < 4 ? e : e + 12;
                        if ("sokalli" === t) return e;
                        if ("donparam" === t) return e > 12 ? e : e + 12;
                        else if ("sanje" === t) return e + 12
                    },
                    meridiem: function(e, t, n) {
                        if (e < 4) return "rati";
                        if (e < 12) return "sokalli";
                        if (e < 16) return "donparam";
                        else if (e < 20) return "sanje";
                        else return "rati"
                    }
                })
            }, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)