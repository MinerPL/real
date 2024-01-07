            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = function(e) {
                    var t = e.onClick,
                        r = e.label,
                        n = e.children,
                        i = e.active,
                        u = (0, a.default)({
                            default: {
                                button: {
                                    backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                                    border: "1px solid #878787",
                                    borderRadius: "2px",
                                    height: "20px",
                                    boxShadow: "0 1px 0 0 #EAEAEA",
                                    fontSize: "14px",
                                    color: "#000",
                                    lineHeight: "20px",
                                    textAlign: "center",
                                    marginBottom: "10px",
                                    cursor: "pointer"
                                }
                            },
                            active: {
                                button: {
                                    boxShadow: "0 0 0 1px #878787"
                                }
                            }
                        }, {
                            active: i
                        });
                    return o.createElement("div", {
                        style: u.button,
                        onClick: t
                    }, r || n)
                }