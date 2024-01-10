            "use strict";
            n.r(t), n.d(t, {
                makeEmptyTitleError: function() {
                    return u
                },
                makeEmptyMessageError: function() {
                    return d
                },
                makeAutomodViolationError: function() {
                    return c
                },
                renderError: function() {
                    return f
                }
            });
            var a, l, s = n("600798"),
                i = n("782340");

            function r(e, t) {
                return {
                    type: e,
                    message: null != t ? t : null
                }
            }

            function o(e) {
                return r(0, e)
            }

            function u() {
                return r(0, i.default.Messages.FORM_THREAD_NAME_REQUIRED_ERROR)
            }

            function d() {
                return r(0, i.default.Messages.FORM_THREAD_STARTER_MESSAGE_REQUIRED_ERROR)
            }

            function c(e, t) {
                return r(1, (0, s.getAutomodErrorMessageFromErrorResponse)(e, null == t ? void 0 : t.id))
            }

            function f(e, t) {
                var n;
                return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 ? null : null !== (n = e.message) && void 0 !== n ? n : null
            }(a = l || (l = {}))[a.EmptyContent = 0] = "EmptyContent", a[a.AutomodViolation = 1] = "AutomodViolation"