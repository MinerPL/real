(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83032"], {
        940374: function(e, a, s) {
            "use strict";
            e.exports = s.p + "0899245413a3d10c32c6.svg"
        },
        64567: function(e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return h
                }
            });
            var t, l, n = s("37983"),
                i = s("884691"),
                o = s("414456"),
                r = s.n(o),
                c = s("775560"),
                d = s("77078"),
                u = s("86678"),
                _ = s("858619"),
                I = s("694187"),
                E = s("923959"),
                L = s("476765"),
                O = s("818643"),
                A = s("315102"),
                B = s("103603"),
                p = s("958706"),
                v = s("782340"),
                D = s("22686"),
                f = s("940374");
            (t = l || (l = {})).TAB_ID_FILE_UPLOAD = "tab-id-role-icon-file-upload", t.TAB_ID_EMOJI = "tab-id-role-icon-emoji";

            function N() {
                return [{
                    name: v.default.Messages.IMAGES,
                    extensions: ["jpg", "jpeg", "png"]
                }]
            }
            async function m(e) {
                let a = (0, A.getEmojiURL)({
                        id: e.id,
                        animated: !1,
                        size: 48,
                        forcePNG: !0
                    }),
                    s = await fetch(a),
                    t = await s.blob(),
                    l = await (0, B.readFileAsBase64)(t);
                return l
            }
            var h = function(e) {
                let {
                    guildId: a,
                    onUploadIcon: s,
                    onSelectUnicodeEmoji: t,
                    onClose: o,
                    transitionState: A
                } = e, B = (0, L.useUID)(), h = E.default.getDefaultChannel(a), [j, x] = i.useState(l.TAB_ID_FILE_UPLOAD), [M, T] = i.useState(!1), g = (0, c.useLazyValue)(N);
                return i.useEffect(() => {
                    T(!1)
                }, [j]), (0, n.jsx)(d.ModalRoot, {
                    transitionState: A,
                    "aria-labelledby": B,
                    size: d.ModalSize.MEDIUM,
                    className: D.modalRoot,
                    children: (0, n.jsxs)("div", {
                        className: D.contentWrapper,
                        children: [(0, n.jsx)("nav", {
                            className: r(D.nav, {
                                [D.navUploadSelected]: j === l.TAB_ID_FILE_UPLOAD
                            }),
                            children: (0, n.jsxs)("div", {
                                className: D.navList,
                                role: "tablist",
                                "aria-label": "Expression Picker",
                                children: [(0, n.jsx)("div", {
                                    className: D.navItem,
                                    role: "tab",
                                    "aria-controls": l.TAB_ID_FILE_UPLOAD,
                                    "aria-selected": j === l.TAB_ID_FILE_UPLOAD,
                                    children: (0, n.jsx)(d.Button, {
                                        onClick: () => {
                                            x(l.TAB_ID_FILE_UPLOAD)
                                        },
                                        "aria-current": "page",
                                        className: r(D.navButton, {
                                            [D.navButtonActive]: j === l.TAB_ID_FILE_UPLOAD
                                        }),
                                        look: d.Button.Looks.BLANK,
                                        size: d.Button.Sizes.NONE,
                                        children: v.default.Messages.ROLE_ICON_TAB_UPLOAD_IMAGE
                                    })
                                }), (0, n.jsx)("div", {
                                    className: D.navItem,
                                    role: "tab",
                                    "aria-controls": l.TAB_ID_EMOJI,
                                    "aria-selected": j === l.TAB_ID_EMOJI,
                                    children: (0, n.jsx)(d.Button, {
                                        onClick: () => {
                                            x(l.TAB_ID_EMOJI)
                                        },
                                        "aria-current": "page",
                                        className: r(D.navButton, {
                                            [D.navButtonActive]: j === l.TAB_ID_EMOJI
                                        }),
                                        look: d.Button.Looks.BLANK,
                                        size: d.Button.Sizes.NONE,
                                        children: v.default.Messages.ROLE_ICON_TAB_EMOJI
                                    })
                                })]
                            })
                        }), j === l.TAB_ID_FILE_UPLOAD ? (0, n.jsx)(d.ModalContent, {
                            children: (0, n.jsxs)("div", {
                                className: D.uploadContainer,
                                children: [(0, n.jsxs)("div", {
                                    className: D.uploadIconOuterContainer,
                                    children: [(0, n.jsx)("img", {
                                        src: f,
                                        alt: "sparkles"
                                    }), (0, n.jsx)("div", {
                                        className: D.uploadIconInnerContainer,
                                        children: (0, n.jsx)(O.default, {
                                            className: D.uploadIcon
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: D.uploadInfo,
                                    children: v.default.Messages.ROLE_ICON_UPLOAD_FILES_INFO
                                }), (0, n.jsxs)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    children: [v.default.Messages.ROLE_ICON_UPLOAD_BROWSE_FILES, (0, n.jsx)(I.default, {
                                        onChange: e => {
                                            T(!1), s(e), o()
                                        },
                                        onFileSizeError: () => {
                                            T(!0)
                                        },
                                        maxFileSizeBytes: 256e3,
                                        multiple: !1,
                                        filters: g
                                    })]
                                }), M ? (0, n.jsx)(d.Text, {
                                    className: D.uploadError,
                                    color: "text-danger",
                                    variant: "text-sm/normal",
                                    children: v.default.Messages.ROLE_ICON_UPLOAD_FILE_TOO_BIG
                                }) : null]
                            })
                        }) : null, j === l.TAB_ID_EMOJI ? (0, n.jsx)(u.default, {
                            hasTabWrapper: !0,
                            closePopout: () => o(),
                            onSelectEmoji: async e => {
                                var a, l;
                                if ((null == e ? void 0 : e.id) != null) {
                                    if ((null == e ? void 0 : e.type) === _.EmojiTypes.GUILD) {
                                        let a = await m(e);
                                        s(a)
                                    }
                                } else if ((null == e ? void 0 : e.surrogates) != null) {
                                    let s = null !== (l = null === (a = e.defaultDiversityChild) || void 0 === a ? void 0 : a.surrogates) && void 0 !== l ? l : e.surrogates;
                                    t(s)
                                }
                                o()
                            },
                            pickerIntention: p.EmojiIntention.COMMUNITY_CONTENT,
                            channel: h
                        }) : null]
                    })
                })
            }
        }
    }
]);