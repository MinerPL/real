            "use strict";
            n.r(t), n.d(t, {
                localeToNumber: function() {
                    return r
                },
                numberToLocale: function() {
                    return o
                },
                default: function() {
                    return u
                }
            }), n("781738");
            var a = n("64273"),
                i = {
                    locale: {
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
                    number: {
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
                    }
                };

            function r(e) {
                return Number(e.toString().replace(/[१२३४५६७८९०]/g, function(e) {
                    return i.number[e]
                }))
            }

            function o(e) {
                return e.toString().replace(/\d/g, function(e) {
                    return i.locale[e]
                })
            }
            var u = {
                ordinalNumber: function(e, t) {
                    return o(Number(e))
                },
                era: (0, a.default)({
                    values: {
                        narrow: ["ईसा-पूर्व", "ईस्वी"],
                        abbreviated: ["ईसा-पूर्व", "ईस्वी"],
                        wide: ["ईसा-पूर्व", "ईसवी सन"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: (0, a.default)({
                    values: {
                        narrow: ["1", "2", "3", "4"],
                        abbreviated: ["ति1", "ति2", "ति3", "ति4"],
                        wide: ["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return e - 1
                    }
                }),
                month: (0, a.default)({
                    values: {
                        narrow: ["ज", "फ़", "मा", "अ", "मई", "जू", "जु", "अग", "सि", "अक्टू", "न", "दि"],
                        abbreviated: ["जन", "फ़र", "मार्च", "अप्रैल", "मई", "जून", "जुल", "अग", "सित", "अक्टू", "नव", "दिस"],
                        wide: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"]
                    },
                    defaultWidth: "wide"
                }),
                day: (0, a.default)({
                    values: {
                        narrow: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
                        short: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
                        abbreviated: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
                        wide: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: (0, a.default)({
                    values: {
                        narrow: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        },
                        abbreviated: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        },
                        wide: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        }
                    },
                    defaultWidth: "wide",
                    formattingValues: {
                        narrow: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        },
                        abbreviated: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        },
                        wide: {
                            am: "पूर्वाह्न",
                            pm: "अपराह्न",
                            midnight: "मध्यरात्रि",
                            noon: "दोपहर",
                            morning: "सुबह",
                            afternoon: "दोपहर",
                            evening: "शाम",
                            night: "रात"
                        }
                    },
                    defaultFormattingWidth: "wide"
                })
            }