            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return h
                }
            });
            var e = i("713289"),
                a = i("504435"),
                h = {
                    ordinalNumber: (0, a.default)({
                        matchPattern: /^(\d+)/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(t) {
                            return parseInt(t, 10)
                        }
                    }),
                    era: (0, e.default)({
                        matchPatterns: {
                            narrow: /^(tcn|scn)/i,
                            abbreviated: /^(trước CN|sau CN)/i,
                            wide: /^(trước Công Nguyên|sau Công Nguyên)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^t/i, /^s/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: (0, e.default)({
                        matchPatterns: {
                            narrow: /^([1234]|i{1,3}v?)/i,
                            abbreviated: /^q([1234]|i{1,3}v?)/i,
                            wide: /^quý ([1234]|i{1,3}v?)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(t) {
                            return t + 1
                        }
                    }),
                    month: (0, e.default)({
                        matchPatterns: {
                            narrow: /^(0?[2-9]|10|11|12|0?1)/i,
                            abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
                            wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
                            abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i],
                            wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i]
                        },
                        defaultParseWidth: "wide"
                    }),
                    day: (0, e.default)({
                        matchPatterns: {
                            narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
                            short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
                            abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
                            wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
                            short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
                            abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
                            wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
                        },
                        defaultParseWidth: "wide"
                    }),
                    dayPeriod: (0, e.default)({
                        matchPatterns: {
                            narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
                            abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
                            wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: {
                                am: /^(a|sa)/i,
                                pm: /^(p|ch[^i]*)/i,
                                midnight: /nửa đêm/i,
                                noon: /trưa/i,
                                morning: /sáng/i,
                                afternoon: /chiều/i,
                                evening: /tối/i,
                                night: /^đêm/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                }