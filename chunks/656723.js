            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("702976");
            var n = s("568734"),
                a = s("871388"),
                l = s("49111");

            function i(e, t, s, i) {
                let r = null == t ? void 0 : t.application_id;
                if (null == e || null == t || !(0, a.default)(t, l.ActivityFlags.JOIN) || null == r) return !1;
                let o = i.getApplication(r);
                return !(null == o || (0, n.hasFlag)(o.flags, l.ApplicationFlags.EMBEDDED)) && s.shouldShowEducation(r)
            }