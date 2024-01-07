            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var a = n("818985"),
                i = {
                    date: (0, a.default)({
                        formats: {
                            full: "y'年'M'月'd'日' EEEE",
                            long: "y'年'M'月'd'日'",
                            medium: "yyyy-MM-dd",
                            short: "yy-MM-dd"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, a.default)({
                        formats: {
                            full: "zzzz a h:mm:ss",
                            long: "z a h:mm:ss",
                            medium: "a h:mm:ss",
                            short: "a h:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, a.default)({
                        formats: {
                            full: "{{date}} {{time}}",
                            long: "{{date}} {{time}}",
                            medium: "{{date}} {{time}}",
                            short: "{{date}} {{time}}"
                        },
                        defaultWidth: "full"
                    })
                }