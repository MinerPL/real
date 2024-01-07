            "use strict";
            e.r(a), e.d(a, {
                default: function() {
                    return n
                }
            });
            var t = e("818985"),
                n = {
                    date: (0, t.default)({
                        formats: {
                            full: "EEEE, d MMMM yyyy",
                            long: "d MMMM yyyy",
                            medium: "d MMM yyyy",
                            short: "dd.MM.yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, t.default)({
                        formats: {
                            full: "HH:mm:ss zzzz",
                            long: "HH:mm:ss z",
                            medium: "HH:mm:ss",
                            short: "HH:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, t.default)({
                        formats: {
                            full: "{{date}} 'la' {{time}}",
                            long: "{{date}} 'la' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }