            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("913144"),
                l = n("892313"),
                r = n("61928"),
                o = n("697218"),
                u = n("708169"),
                d = n("668596"),
                c = n("197881"),
                E = n("177632"),
                f = n("49111"),
                _ = n("843455");
            let h = "AGREEMENTS_MODAL_KEY";
            var C = {
                init() {
                    i.default.subscribe("CONNECTION_OPEN", this.handleRequiredAction), i.default.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction), i.default.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate), i.default.subscribe("LOGOUT", this.handleLogout)
                },
                handleRequiredAction(e) {
                    let t = e.requiredAction;
                    !c.ProcessArgs.isDisallowPopupsSet() && (null == o.default.getCurrentUser() ? ((0, u.closeFullScreenLayer)("verification"), (0, s.hasModalOpen)(h) && (0, s.closeModal)(h)) : t === f.UserRequiredActions.REQUIRE_CAPTCHA || t === f.UserRequiredActions.REQUIRE_VERIFIED_EMAIL || t === f.UserRequiredActions.REQUIRE_VERIFIED_PHONE || t === f.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === f.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === f.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || l.default.isEmailReverification(t) ? (0, u.openFullScreenLayer)(() => (0, a.jsx)(r.default, {}), {
                        layerKey: "verification",
                        Layer: d.default
                    }) : t === f.UserRequiredActions.AGREEMENTS ? (0, s.openModal)(e => (0, a.jsx)(E.default, {
                        ...e
                    }), {
                        modalKey: h,
                        onCloseRequest: _.NOOP_NULL
                    }) : null == t && ((0, u.closeFullScreenLayer)("verification"), (0, s.hasModalOpen)(h) && (0, s.closeModal)(h)))
                },
                handleLogout() {
                    (0, u.closeFullScreenLayer)("verification")
                },
                handleCurrentUserUpdate(e) {
                    let {
                        user: t
                    } = e;
                    t.verified && (0, s.closeModal)(r.EMAIL_VERIFICATION_MODAL_KEY)
                }
            }