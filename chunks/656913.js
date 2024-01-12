            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("819855"),
                i = l("841098"),
                u = l("449918"),
                d = l("832132"),
                o = l("818643"),
                c = l("608684"),
                E = l("49111"),
                f = l("575282");
            let _ = E.Color.PRIMARY_400,
                I = E.Color.PRIMARY_500;

            function T(e) {
                let {
                    enabled: t,
                    imageClassName: l,
                    iconWrapperClassName: a,
                    ...E
                } = e, T = (0, i.default)(), N = (0, r.isThemeDark)(T) ? _ : I, h = {
                    height: 18,
                    width: 18,
                    color: (0, u.getColor)(N)
                };
                return (0, n.jsx)(c.default, {
                    className: s({
                        [f.avatarUploader]: t,
                        [f.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: s(l, f.avatarUploaderInnerSquare, {
                        [f.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != E.image && "" !== E.image ? (0, n.jsx)(d.default, {
                        ...h
                    }) : (0, n.jsx)(o.default, {
                        ...h
                    }),
                    iconClassName: s(f.avatarUploadIcon, f.hideDefaultIcon),
                    iconWrapperClassName: a,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0,
                    ...E
                })
            }