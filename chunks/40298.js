            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var a = n("713289"),
                i = n("504435"),
                r = {
                    ordinalNumber: (0, i.default)({
                        matchPattern: /^\d+/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(t) {
                            return parseInt(t, 10)
                        }
                    }),
                    era: (0, a.default)({
                        matchPatterns: {
                            narrow: /^([bB]|[aA]|คศ)/i,
                            abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
                            wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, a.default)({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^q[1234]/i,
                            wide: /^ไตรมาส(ที่)? ?[1234]/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(t) {
                            return t + 1
                        }
                    }),
                    month: (0, a.default)({
                        matchPatterns: {
                            narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
                            abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
                            wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i],
                            any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: (0, a.default)({
                        matchPatterns: {
                            narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
                            short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
                            abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
                            wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
                            any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: (0, a.default)({
                        matchPatterns: {
                            any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^ก่อนเที่ยง/i,
                                pm: /^หลังเที่ยง/i,
                                midnight: /^เที่ยงคืน/i,
                                noon: /^เที่ยง/i,
                                morning: /เช้า/i,
                                afternoon: /บ่าย/i,
                                evening: /เย็น/i,
                                night: /กลางคืน/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }