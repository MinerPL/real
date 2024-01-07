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
                l = n("152584"),
                r = n("316272"),
                o = n("335189"),
                u = n("473591"),
                d = n("929423"),
                c = n("783142"),
                E = n("697218"),
                f = n("719923"),
                _ = n("75015");
            class h extends r.default {
                _initialize() {
                    i.default.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
                }
                _terminate() {
                    i.default.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal)
                }
                maybeOpenProfilePreviewModal(e) {
                    let {
                        imageSrc: t,
                        file: i,
                        uploadType: r,
                        guildId: h,
                        isTryItOutFlow: C
                    } = e, T = u.default.isEditingClydeProfile(), I = T ? o.setPendingAvatar : null != h ? d.setPendingAvatar : l.setPendingAvatar, S = T ? o.setPendingBanner : null != h ? d.setPendingBanner : c.setPendingBanner, N = E.default.getCurrentUser();
                    if (r === _.UploadTypes.AVATAR) {
                        if (C) {
                            (0, c.setTryItOutAvatar)(t);
                            return
                        }
                        let e = f.default.canUseAnimatedAvatar(N);
                        if (e || "image/gif" !== i.type || T) {
                            I(t);
                            return
                        }(0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("745544").then(n.bind(n, "745544"));
                            return n => (0, a.jsx)(e, {
                                avatarSrc: t,
                                onSubscribe: () => I(t),
                                ...n
                            })
                        })
                    } else if (r === _.UploadTypes.BANNER) {
                        if (C) {
                            (0, c.setTryItOutBanner)(t);
                            return
                        }
                        let e = f.default.canUsePremiumProfileCustomization(N);
                        if (e || T) {
                            S(t);
                            return
                        }(0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("745544").then(n.bind(n, "745544"));
                            return n => (0, a.jsx)(e, {
                                bannerSrc: t,
                                onSubscribe: () => S(t),
                                ...n
                            })
                        })
                    }
                }
            }
            var C = new h