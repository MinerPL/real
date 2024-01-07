            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            }), r("222007");
            var l = r("884691"),
                i = r("509043"),
                o = r("446674"),
                n = r("841098"),
                s = r("206230"),
                a = r("388491"),
                u = r("528438");
            let d = ["--profile-gradient-primary-color", "--profile-gradient-secondary-color", "--profile-gradient-button-color", "--profile-gradient-overlay-color", "--profile-body-background-color", "--profile-body-divider-color", "--profile-avatar-border-color", "--profile-message-input-border-color", "--profile-note-background-color", "--profile-body-background-hover", "--account-profile-modal-list-item-hover", "--profile-role-pill-background-color", "--profile-role-pill-border-color"];

            function c(e, t, r) {
                var l;
                null == e || null === (l = e.current) || void 0 === l || l.style.setProperty(t, null != r ? r : null)
            }

            function f(e, t) {
                let {
                    themeElementRef: r,
                    pendingThemeColors: f,
                    isPreview: E,
                    useDefaultClientTheme: p
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [P, T] = (0, u.default)(e, t, {
                    pendingThemeColors: f,
                    isPreview: E
                }), [_, O, C] = (0, o.useStateFromStoresArray)([s.default], () => [s.default.desaturateUserColors, s.default.saturation, s.default.syncProfileThemeWithUserTheme]), S = (0, n.default)(), L = l.useCallback(() => C || p ? S : (0, a.getProfileTheme)(P), [p, C, S, P]), [I, h] = l.useState(L()), y = (0, a.useProfileThemeValues)(I), U = (0, a.useDividerColor)(I, P), m = (0, a.useMessageInputBorderColor)(I, T), A = l.useCallback((e, t) => (0, i.int2hsl)(e, _, null, t), [_]);
                l.useEffect(() => {
                    h(L())
                }, [P, C, S, p, L]);
                let v = (0, a.useAvatarBorderColor)(I, P, C),
                    g = null != v ? (0, i.int2hsl)(v, !1, _ ? O : null) : null,
                    R = e => d.forEach(t => {
                        e.style.removeProperty(t)
                    });
                return l.useEffect(() => {
                    if (null != P && null != T && null != I && null != v && null != U && null != m) {
                        let e = C && I !== S ? null == y ? void 0 : y.overlaySyncedWithUserTheme : null == y ? void 0 : y.overlay;
                        c(r, "--profile-gradient-primary-color", A(P)), c(r, "--profile-gradient-secondary-color", A(T)), c(r, "--profile-gradient-button-color", A((0, a.calculateButtonColor)(P))), c(r, "--profile-gradient-overlay-color", e), c(r, "--profile-body-background-color", null == y ? void 0 : y.sectionBox), c(r, "--profile-body-background-hover", null == y ? void 0 : y.profileBodyBackgroundHover), c(r, "--profile-body-divider-color", A(U, null == y ? void 0 : y.dividerOpacity)), c(r, "--profile-avatar-border-color", A(v)), c(r, "--profile-message-input-border-color", A(m)), c(r, "--profile-note-background-color", null == y ? void 0 : y.noteBackgroundColor), c(r, "--profile-role-pill-background-color", null == y ? void 0 : y.rolePillBackgroundColor), c(r, "--profile-role-pill-border-color", null == y ? void 0 : y.rolePillBorderColor)
                    } else(null == r ? void 0 : r.current) != null && R(null == r ? void 0 : r.current)
                }, [P, T, v, I, S, r, A, C, U, null == y ? void 0 : y.overlaySyncedWithUserTheme, null == y ? void 0 : y.overlay, null == y ? void 0 : y.sectionBox, null == y ? void 0 : y.profileBodyBackgroundHover, null == y ? void 0 : y.dividerOpacity, null == y ? void 0 : y.noteBackgroundColor, null == y ? void 0 : y.rolePillBackgroundColor, null == y ? void 0 : y.rolePillBorderColor, m]), {
                    profileTheme: null != I ? I : S,
                    primaryProfileColor: P,
                    avatarBorderColor: g
                }
            }