            "use strict";
            n.r(t), n.d(t, {
                FIRST_BLOCK_PATH: function() {
                    return l
                },
                FIRST_TEXT_PATH: function() {
                    return i
                },
                FIRST_TEXT_POINT: function() {
                    return r
                },
                WHITESPACE_RE: function() {
                    return o
                },
                SELECTABLE_VOIDS: function() {
                    return s
                }
            });
            let l = [0],
                i = [0, 0],
                r = {
                    path: [0, 0],
                    offset: 0
                },
                o = /(\t|\s)/,
                s = ["applicationCommandOption"]