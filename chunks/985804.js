            "use strict";
            r("222007");
            var n = r("884691"),
                i = r("348262"),
                o = (0, r("646601").Map)({
                    "header-one": {
                        element: "h1"
                    },
                    "header-two": {
                        element: "h2"
                    },
                    "header-three": {
                        element: "h3"
                    },
                    "header-four": {
                        element: "h4"
                    },
                    "header-five": {
                        element: "h5"
                    },
                    "header-six": {
                        element: "h6"
                    },
                    section: {
                        element: "section"
                    },
                    article: {
                        element: "article"
                    },
                    "unordered-list-item": {
                        element: "li",
                        wrapper: n.createElement("ul", {
                            className: i("public/DraftStyleDefault/ul")
                        })
                    },
                    "ordered-list-item": {
                        element: "li",
                        wrapper: n.createElement("ol", {
                            className: i("public/DraftStyleDefault/ol")
                        })
                    },
                    blockquote: {
                        element: "blockquote"
                    },
                    atomic: {
                        element: "figure"
                    },
                    "code-block": {
                        element: "pre",
                        wrapper: n.createElement("pre", {
                            className: i("public/DraftStyleDefault/pre")
                        })
                    },
                    unstyled: {
                        element: "div",
                        aliasedElements: ["p"]
                    }
                });
            t.exports = o