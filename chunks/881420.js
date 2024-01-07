            e.exports = function(e) {
                let t = {
                    variants: [{
                        match: [/(struct|enum|interface)/, /\s+/, e.IDENT_RE]
                    }, {
                        match: [/extends/, /\s*\(/, e.IDENT_RE, /\s*\)/]
                    }],
                    scope: {
                        1: "keyword",
                        3: "title.class"
                    }
                };
                return {
                    name: "Cap’n Proto",
                    aliases: ["capnp"],
                    keywords: {
                        keyword: ["struct", "enum", "interface", "union", "group", "import", "using", "const", "annotation", "extends", "in", "of", "on", "as", "with", "from", "fixed"],
                        type: ["Void", "Bool", "Int8", "Int16", "Int32", "Int64", "UInt8", "UInt16", "UInt32", "UInt64", "Float32", "Float64", "Text", "Data", "AnyPointer", "AnyStruct", "Capability", "List"],
                        literal: ["true", "false"]
                    },
                    contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.HASH_COMMENT_MODE, {
                        className: "meta",
                        begin: /@0x[\w\d]{16};/,
                        illegal: /\n/
                    }, {
                        className: "symbol",
                        begin: /@\d+\b/
                    }, t]
                }
            }