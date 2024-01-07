            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return r
                }
            });
            var n = a("818985"),
                r = {
                    date: (0, n.default)({
                        formats: {
                            full: "EEEE, dd MMMM yyyy",
                            long: "dd MMMM yyyy",
                            medium: "dd MMM yyyy",
                            short: "dd/MM/yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, n.default)({
                        formats: {
                            full: "HH:mm:ss zzzz",
                            long: "HH:mm:ss z",
                            medium: "HH:mm:ss",
                            short: "H:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, n.default)({
                        formats: {
                            any: "{{date}} {{time}}"
                        },
                        defaultWidth: "any"
                    })
                }