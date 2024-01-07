            "use strict";
            t.r(r), t.d(r, {
                getLocalName: function() {
                    return o
                },
                isElement: function() {
                    return n
                },
                isHTMLTableCaptionElement: function() {
                    return l
                },
                isHTMLInputElement: function() {
                    return i
                },
                isHTMLOptGroupElement: function() {
                    return s
                },
                isHTMLSelectElement: function() {
                    return u
                },
                isHTMLTableElement: function() {
                    return d
                },
                isHTMLTextAreaElement: function() {
                    return c
                },
                safeWindow: function() {
                    return p
                },
                isHTMLFieldSetElement: function() {
                    return m
                },
                isHTMLLegendElement: function() {
                    return f
                },
                isHTMLSlotElement: function() {
                    return b
                },
                isSVGSVGElement: function() {
                    return v
                },
                isSVGTitleElement: function() {
                    return h
                },
                queryIdRefs: function() {
                    return C
                },
                hasAnyConcreteRoles: function() {
                    return q
                }
            }), t("70102");
            var a = t("98244");

            function o(e) {
                var r;
                return null !== (r = e.localName) && void 0 !== r ? r : e.tagName.toLowerCase()
            }

            function n(e) {
                return null !== e && e.nodeType === e.ELEMENT_NODE
            }

            function l(e) {
                return n(e) && "caption" === o(e)
            }

            function i(e) {
                return n(e) && "input" === o(e)
            }

            function s(e) {
                return n(e) && "optgroup" === o(e)
            }

            function u(e) {
                return n(e) && "select" === o(e)
            }

            function d(e) {
                return n(e) && "table" === o(e)
            }

            function c(e) {
                return n(e) && "textarea" === o(e)
            }

            function p(e) {
                var r = (null === e.ownerDocument ? e : e.ownerDocument).defaultView;
                if (null === r) throw TypeError("no window available");
                return r
            }

            function m(e) {
                return n(e) && "fieldset" === o(e)
            }

            function f(e) {
                return n(e) && "legend" === o(e)
            }

            function b(e) {
                return n(e) && "slot" === o(e)
            }

            function v(e) {
                return n(e) && "svg" === o(e)
            }

            function h(e) {
                var r;
                return n(r = e) && void 0 !== r.ownerSVGElement && "title" === o(e)
            }

            function C(e, r) {
                return n(e) && e.hasAttribute(r) ? e.getAttribute(r).split(" ").map(function(r) {
                    return e.ownerDocument.getElementById(r)
                }).filter(function(e) {
                    return null !== e
                }) : []
            }

            function q(e, r) {
                return !!n(e) && -1 !== r.indexOf((0, a.default)(e))
            }