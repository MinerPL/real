            "use strict";
            n.r(t), n.d(t, {
                reduce: function() {
                    return c
                }
            }), n("424973");
            var r = n("234160"),
                o = n("714413"),
                a = n("579934"),
                i = n("930056"),
                s = n("125692");

            function c() {
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.NONE;
                var e = arguments.length > 1 ? arguments[1] : void 0;
                switch (e.type) {
                    case r.HOVER:
                        break;
                    case o.ADD_SOURCE:
                    case o.ADD_TARGET:
                    case o.REMOVE_TARGET:
                    case o.REMOVE_SOURCE:
                        return i.NONE;
                    case r.BEGIN_DRAG:
                    case r.PUBLISH_DRAG_SOURCE:
                    case r.END_DRAG:
                    case r.DROP:
                    default:
                        return i.ALL
                }
                var t = e.payload,
                    n = t.targetIds,
                    c = void 0 === n ? [] : n,
                    l = t.prevTargetIds,
                    u = void 0 === l ? [] : l,
                    d = (0, s.xor)(c, u);
                if (!(d.length > 0 || !(0, a.areArraysEqual)(c, u))) return i.NONE;
                var p = u[u.length - 1],
                    f = c[c.length - 1];
                return p !== f && (p && d.push(p), f && d.push(f)), d
            }