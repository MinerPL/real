            "use strict";

            function r(e) {
                return e.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase()
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738")