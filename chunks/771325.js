            "use strict";
            n.r(t), n.d(t, {
                handleOpenSelectImageModal: function() {
                    return _
                },
                showFileSizeErrorModal: function() {
                    return E
                },
                getPreviewAvatar: function() {
                    return T
                },
                getPreviewNickname: function() {
                    return I
                },
                getPreviewDisplayName: function() {
                    return p
                },
                isColorDark: function() {
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("509043"),
                l = n("77078"),
                s = n("336522"),
                a = n("473591"),
                o = n("315102"),
                u = n("254490"),
                d = n("737403"),
                c = n("453252"),
                m = n("75015"),
                f = n("782340");

            function _(e, t, r, s) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: l
                    } = await n.el("420333").then(n.bind(n, "420333")), o = a.default.isEditingClydeProfile();
                    return n => (0, i.jsx)(l, {
                        filters: s,
                        maxFileSizeBytes: c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                        imageSpecifications: e === m.UploadTypes.BANNER && f.default.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
                        onComplete: (n, i) => (0, d.maybeOpenProfilePreviewModal)({
                            imageSrc: n,
                            file: i,
                            uploadType: e,
                            guildId: t,
                            isTryItOutFlow: r
                        }),
                        uploadType: e,
                        showUpsellHeader: !o,
                        ...n
                    })
                })
            }

            function E() {
                (0, s.openUploadError)({
                    title: f.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: f.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, u.sizeString)(c.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
                    })
                })
            }

            function T(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != e) return e;
                let {
                    size: r = 80,
                    canAnimate: l = !0
                } = i, s = null === e;
                return s && null == t ? o.default.getDefaultAvatarURL(n.id, n.discriminator) : s || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, l) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, l)
            }

            function I(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function p(e, t) {
                return "" === e ? null : null != e ? e : t
            }

            function P(e) {
                let t = null != e ? (0, r.getDarkness)(e) : 1;
                return t > .25
            }