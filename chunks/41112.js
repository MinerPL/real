            "use strict";
            t.exports = function(t) {
                return !!t && !!t.ownerDocument && (t.ownerDocument.defaultView ? t instanceof t.ownerDocument.defaultView.HTMLElement || !1 : t instanceof HTMLElement)
            }