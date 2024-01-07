            e.exports = function(e) {
                let t = ["exports", "register", "file", "shl", "array", "record", "property", "for", "mod", "while", "set", "ally", "label", "uses", "raise", "not", "stored", "class", "safecall", "var", "interface", "or", "private", "static", "exit", "index", "inherited", "to", "else", "stdcall", "override", "shr", "asm", "far", "resourcestring", "finalization", "packed", "virtual", "out", "and", "protected", "library", "do", "xorwrite", "goto", "near", "function", "end", "div", "overload", "object", "unit", "begin", "string", "on", "inline", "repeat", "until", "destructor", "write", "message", "program", "with", "read", "initialization", "except", "default", "nil", "if", "case", "cdecl", "in", "downto", "threadvar", "of", "try", "pascal", "const", "external", "constructor", "type", "public", "then", "implementation", "finally", "published", "procedure", "absolute", "reintroduce", "operator", "as", "is", "abstract", "alias", "assembler", "bitpacked", "break", "continue", "cppdecl", "cvar", "enumerator", "experimental", "platform", "deprecated", "unimplemented", "dynamic", "export", "far16", "forward", "generic", "helper", "implements", "interrupt", "iochecks", "local", "name", "nodefault", "noreturn", "nostackframe", "oldfpccall", "otherwise", "saveregisters", "softfloat", "specialize", "strict", "unaligned", "varargs"],
                    a = [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, {
                        relevance: 0
                    }), e.COMMENT(/\(\*/, /\*\)/, {
                        relevance: 10
                    })],
                    n = {
                        className: "meta",
                        variants: [{
                            begin: /\{\$/,
                            end: /\}/
                        }, {
                            begin: /\(\*\$/,
                            end: /\*\)/
                        }]
                    },
                    i = {
                        className: "string",
                        begin: /'/,
                        end: /'/,
                        contains: [{
                            begin: /''/
                        }]
                    },
                    r = {
                        className: "string",
                        begin: /(#\d+)+/
                    },
                    o = {
                        begin: e.IDENT_RE + "\\s*=\\s*class\\s*\\(",
                        returnBegin: !0,
                        contains: [e.TITLE_MODE]
                    },
                    s = {
                        className: "function",
                        beginKeywords: "function constructor destructor procedure",
                        end: /[:;]/,
                        keywords: "function constructor|10 destructor|10 procedure|10",
                        contains: [e.TITLE_MODE, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: t,
                            contains: [i, r, n].concat(a)
                        }, n].concat(a)
                    };
                return {
                    name: "Delphi",
                    aliases: ["dpr", "dfm", "pas", "pascal"],
                    case_insensitive: !0,
                    keywords: t,
                    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
                    contains: [i, r, e.NUMBER_MODE, {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: "\\$[0-9A-Fa-f]+"
                        }, {
                            begin: "&[0-7]+"
                        }, {
                            begin: "%[01]+"
                        }]
                    }, o, s, n].concat(a)
                }
            }