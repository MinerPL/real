            "use strict";
            n.r(i), n.d(i, {
                default: function() {
                    return a
                }
            });
            var e = n("818985"),
                a = {
                    date: (0, e.default)({
                        formats: {
                            full: "EEEE, do MMMM y 'р.'",
                            long: "do MMMM y 'р.'",
                            medium: "d MMM y 'р.'",
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
                            full: "{{date}} 'о' {{time}}",
                            long: "{{date}} 'о' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }