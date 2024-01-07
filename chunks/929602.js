            "use strict";
            t.r(i), t.d(i, {
                default: function() {
                    return n
                }
            });
            var a = t("818985"),
                n = {
                    date: (0, a.default)({
                        formats: {
                            full: "EEEE d MMMM y",
                            long: "d MMMM y",
                            medium: "d MMM y",
                            short: "dd/MM/y"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, a.default)({
                        formats: {
                            full: "HH:mm:ss zzzz",
                            long: "HH:mm:ss z",
                            medium: "HH:mm:ss",
                            short: "HH:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, a.default)({
                        formats: {
                            full: "{{date}} '\xe0' {{time}}",
                            long: "{{date}} '\xe0' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }