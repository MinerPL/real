            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("819855"),
                r = s("841098"),
                o = s("449918"),
                d = s("832132"),
                u = s("818643"),
                c = s("608684"),
                E = s("49111"),
                _ = s("575282");
            let T = E.Color.PRIMARY_400,
                I = E.Color.PRIMARY_500;

            function S(e) {
                let {
                    enabled: t,
                    imageClassName: s,
                    iconWrapperClassName: n,
                    ...E
                } = e, S = (0, r.default)(), N = (0, i.isThemeDark)(S) ? T : I, g = {
                    height: 18,
                    width: 18,
                    color: (0, o.getColor)(N)
                };
                return (0, a.jsx)(c.default, {
                    className: l({
                        [_.avatarUploader]: t,
                        [_.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: l(s, _.avatarUploaderInnerSquare, {
                        [_.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != E.image && "" !== E.image ? (0, a.jsx)(d.default, {
                        ...g
                    }) : (0, a.jsx)(u.default, {
                        ...g
                    }),
                    iconClassName: l(_.avatarUploadIcon, _.hideDefaultIcon),
                    iconWrapperClassName: n,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0,
                    ...E
                })
            }