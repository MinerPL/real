            e.exports = function(e) {
                let t = {
                        begin: /\(/,
                        end: /\)/,
                        relevance: 0
                    },
                    a = {
                        begin: /\[/,
                        end: /\]/
                    },
                    n = {
                        className: "comment",
                        begin: /%/,
                        end: /$/,
                        contains: [e.PHRASAL_WORDS_MODE]
                    },
                    i = {
                        className: "string",
                        begin: /`/,
                        end: /`/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    r = [{
                        begin: /[a-z][A-Za-z0-9_]*/,
                        relevance: 0
                    }, {
                        className: "symbol",
                        variants: [{
                            begin: /[A-Z][a-zA-Z0-9_]*/
                        }, {
                            begin: /_[A-Za-z0-9_]*/
                        }],
                        relevance: 0
                    }, t, {
                        begin: /:-/
                    }, a, n, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, i, {
                        className: "string",
                        begin: /0'(\\'|.)/
                    }, {
                        className: "string",
                        begin: /0'\\s/
                    }, e.C_NUMBER_MODE];
                return t.contains = r, a.contains = r, {
                    name: "Prolog",
                    contains: r.concat([{
                        begin: /\.$/
                    }])
                }
            }