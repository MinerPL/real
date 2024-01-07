            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return a
                }
            });
            var e = i("818985"),
                a = {
                    date: (0, e.default)({
                        formats: {
                            full: "EEEE, 'ng\xe0y' d MMMM 'năm' y",
                            long: "'ng\xe0y' d MMMM 'năm' y",
                            medium: "d MMM 'năm' y",
                            short: "dd/MM/y"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, e.default)({
                        formats: {
                            full: "HH:mm:ss zzzz",
                            long: "HH:mm:ss z",
                            medium: "HH:mm:ss",
                            short: "HH:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, e.default)({
                        formats: {
                            full: "{{date}} {{time}}",
                            long: "{{date}} {{time}}",
                            medium: "{{date}} {{time}}",
                            short: "{{date}} {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }