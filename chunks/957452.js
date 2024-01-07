            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var a = n("64273"),
                i = {
                    ordinalNumber: function(t, e) {
                        return String(t)
                    },
                    era: (0, a.default)({
                        values: {
                            narrow: ["B", "คศ"],
                            abbreviated: ["BC", "ค.ศ."],
                            wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, a.default)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                            wide: ["ไตรมาสแรก", "ไตรมาสที่สอง", "ไตรมาสที่สาม", "ไตรมาสที่สี่"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(t) {
                            return t - 1
                        }
                    }),
                    month: (0, a.default)({
                        values: {
                            narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                            abbreviated: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                            wide: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
                        },
                        defaultWidth: "wide"
                    }),
                    day: (0, a.default)({
                        values: {
                            narrow: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                            short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                            abbreviated: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                            wide: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, a.default)({
                        values: {
                            narrow: {
                                am: "ก่อนเที่ยง",
                                pm: "หลังเที่ยง",
                                midnight: "เที่ยงคืน",
                                noon: "เที่ยง",
                                morning: "เช้า",
                                afternoon: "บ่าย",
                                evening: "เย็น",
                                night: "กลางคืน"
                            },
                            abbreviated: {
                                am: "ก่อนเที่ยง",
                                pm: "หลังเที่ยง",
                                midnight: "เที่ยงคืน",
                                noon: "เที่ยง",
                                morning: "เช้า",
                                afternoon: "บ่าย",
                                evening: "เย็น",
                                night: "กลางคืน"
                            },
                            wide: {
                                am: "ก่อนเที่ยง",
                                pm: "หลังเที่ยง",
                                midnight: "เที่ยงคืน",
                                noon: "เที่ยง",
                                morning: "เช้า",
                                afternoon: "บ่าย",
                                evening: "เย็น",
                                night: "กลางคืน"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "ก่อนเที่ยง",
                                pm: "หลังเที่ยง",
                                midnight: "เที่ยงคืน",
                                noon: "เที่ยง",
                                morning: "ตอนเช้า",
                                afternoon: "ตอนกลางวัน",
                                evening: "ตอนเย็น",
                                night: "ตอนกลางคืน"
                            },
                            abbreviated: {
                                am: "ก่อนเที่ยง",
                                pm: "หลังเที่ยง",
                                midnight: "เที่ยงคืน",
                                noon: "เที่ยง",
                                morning: "ตอนเช้า",
                                afternoon: "ตอนกลางวัน",
                                evening: "ตอนเย็น",
                                night: "ตอนกลางคืน"
                            },
                            wide: {
                                am: "ก่อนเที่ยง",
                                pm: "หลังเที่ยง",
                                midnight: "เที่ยงคืน",
                                noon: "เที่ยง",
                                morning: "ตอนเช้า",
                                afternoon: "ตอนกลางวัน",
                                evening: "ตอนเย็น",
                                night: "ตอนกลางคืน"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                }