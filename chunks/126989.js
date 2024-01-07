            e.exports = function(e) {
                let t = e.regex,
                    a = e.COMMENT(/;/, /$/),
                    n = {
                        scope: "attribute",
                        match: t.concat(/^[a-zA-Z][a-zA-Z0-9-]*/, /(?=\s*=)/)
                    };
                return {
                    name: "Augmented Backus-Naur Form",
                    illegal: /[!@#$^&',?+~`|:]/,
                    keywords: ["ALPHA", "BIT", "CHAR", "CR", "CRLF", "CTL", "DIGIT", "DQUOTE", "HEXDIG", "HTAB", "LF", "LWSP", "OCTET", "SP", "VCHAR", "WSP"],
                    contains: [{
                        scope: "operator",
                        match: /=\/?/
                    }, n, a, {
                        scope: "symbol",
                        match: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+)?/
                    }, {
                        scope: "symbol",
                        match: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+)?/
                    }, {
                        scope: "symbol",
                        match: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+)?/
                    }, {
                        scope: "symbol",
                        match: /%[si](?=".*")/
                    }, e.QUOTE_STRING_MODE, e.NUMBER_MODE]
                }
            }