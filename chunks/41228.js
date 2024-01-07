            "use strict";
            t.r(i), t.d(i, {
                default: function() {
                    return a
                }
            });
            var e = t("818985"),
                a = {
                    date: (0, e.default)({
                        formats: {
                            full: "EEEE, d MMMM y 'г.'",
                            long: "d MMMM y 'г.'",
                            medium: "d MMM y 'г.'",
                            short: "dd.MM.y"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, e.default)({
                        formats: {
                            full: "H:mm:ss zzzz",
                            long: "H:mm:ss z",
                            medium: "H:mm:ss",
                            short: "H:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, e.default)({
                        formats: {
                            any: "{{date}}, {{time}}"
                        },
                        defaultWidth: "any"
                    })
                }