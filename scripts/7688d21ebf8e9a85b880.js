(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14511"], {
        500643: function(e, t, s) {
            "use strict";
            e.exports = s.p + "0ef6e411a4cff4edee75.svg"
        },
        250084: function(e, t, s) {
            "use strict";
            e.exports = s.p + "767bdb3f0a521329fa8e.svg"
        },
        528507: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useIsPhoneVerificationLevel: function() {
                    return u
                },
                useCurrentUserVerificationStatus: function() {
                    return d
                }
            });
            var l = s("498225"),
                n = s("305961"),
                i = s("697218"),
                r = s("526253"),
                a = s("49111");

            function u(e) {
                let {
                    guildId: t
                } = e, s = (0, l.useStateFromStores)([r.default], () => r.default.get(t)), i = null == s ? void 0 : s.guild, u = (0, l.useStateFromStores)([n.default], () => {
                    var e;
                    let s = null === (e = n.default.getGuild(t)) || void 0 === e ? void 0 : e.verificationLevel,
                        l = null == i ? void 0 : i.verification_level;
                    return (null != s ? s : l) === a.VerificationLevels.VERY_HIGH
                }, [t, i]);
                return u
            }

            function d(e) {
                let {
                    guildId: t
                } = e, s = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser()), n = u({
                    guildId: t
                }), r = (null == s ? void 0 : s.isPhoneVerified()) || (null == s ? void 0 : s.isStaff()), a = (null == s ? void 0 : s.verified) || r;
                return {
                    isPhoneVerificationLevel: n,
                    isCurrentUserVerified: !!(n ? r : a)
                }
            }
        },
        267235: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return z
                }
            });
            var l, n, i = s("920040"),
                r = s("773670"),
                a = s("575482"),
                u = s.n(a),
                d = s("498225"),
                o = s("77078"),
                I = s("437822"),
                c = s("152584"),
                m = s("206230"),
                E = s("385976"),
                f = s("813006"),
                M = s("525065"),
                R = s("26989"),
                F = s("305961"),
                _ = s("697218"),
                N = s("145131"),
                C = s("109024"),
                T = s("491605"),
                A = s("599110"),
                O = s("315102"),
                h = s("50926"),
                x = s("526253"),
                g = s("520141"),
                v = s("567054"),
                j = s("409464"),
                V = s("347977"),
                S = s("179487"),
                L = s("394294"),
                p = s("49111"),
                B = s("782340"),
                b = s("58302"),
                P = s("500643"),
                y = s("284434"),
                U = s("315956"),
                w = s("250084");
            (l = n || (n = {}))[l.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", l[l.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", l[l.VERIFICATION_FORM = 2] = "VERIFICATION_FORM";
            let D = e => {
                    let {
                        headerId: t,
                        email: s,
                        password: l,
                        setEmail: n,
                        setPassword: r,
                        emailError: a,
                        passwordError: u
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: b.content,
                        children: [(0, i.jsx)("div", {
                            className: b.applicationIconContainer,
                            children: (0, i.jsx)("img", {
                                alt: B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,
                                src: P,
                                className: b.applicationIcon
                            })
                        }), (0, i.jsx)(o.Heading, {
                            id: t,
                            variant: "heading-xl/semibold",
                            className: b.header,
                            children: B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE
                        }), (0, i.jsx)("hr", {
                            className: b.divider
                        }), (0, i.jsx)(o.FormItem, {
                            title: B.default.Messages.FORM_LABEL_EMAIL,
                            className: b.formItem,
                            children: (0, i.jsx)(o.TextInput, {
                                value: s,
                                error: a,
                                onChange: n,
                                autoFocus: !0
                            })
                        }), (0, i.jsx)(o.FormItem, {
                            title: B.default.Messages.FORM_LABEL_PASSWORD,
                            className: b.formItem,
                            children: (0, i.jsx)(o.TextInput, {
                                type: "password",
                                value: l,
                                error: u,
                                onChange: r
                            })
                        })]
                    })
                },
                H = e => {
                    let {
                        headerId: t,
                        email: s
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: b.content,
                        children: [(0, i.jsx)("img", {
                            alt: B.default.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,
                            src: w,
                            className: b.applicationIcon
                        }), (0, i.jsx)(o.Heading, {
                            id: t,
                            variant: "heading-xl/semibold",
                            className: b.header,
                            children: B.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({
                                email: s
                            })
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: B.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE
                        }), (0, i.jsx)(o.Button, {
                            className: b.resendButton,
                            size: o.Button.Sizes.NONE,
                            look: o.Button.Looks.LINK,
                            onClick: () => I.default.verifyResend(),
                            children: B.default.Messages.MEMBER_VERIFICATION_EMAIL_RESEND
                        })]
                    })
                },
                q = e => {
                    var t;
                    let {
                        guildId: s,
                        formState: l,
                        updateFormState: n,
                        isPreview: r = !1
                    } = e, a = (0, d.useStateFromStores)([x.default], () => x.default.get(s));
                    if (null == a) return null;
                    let u = null !== (t = null != l ? l : null == a ? void 0 : a.formFields) && void 0 !== t ? t : [],
                        o = r ? S.PreviewFormRenderer : S.ApplicantFormRenderer;
                    return (0, i.jsx)(o, {
                        guildId: s,
                        formFields: u,
                        updateFormFields: n
                    })
                },
                k = () => s.el("170206").then(s.t.bind(s, "170206", 19)).then(e => {
                    let {
                        default: t
                    } = e;
                    return t
                }),
                Y = e => {
                    let {
                        headerId: t,
                        guildId: s,
                        formState: l,
                        updateFormState: n,
                        useReducedMotion: r,
                        isPreview: a = !1
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: b.content,
                        children: [(0, i.jsxs)("div", {
                            className: b.animationAndSparklesContainer,
                            children: [(0, i.jsx)("img", {
                                alt: B.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                                src: U,
                                className: u(b.sparkleIcon, b.sparkleBottom)
                            }), (0, i.jsx)(T.default, {
                                importData: k,
                                shouldAnimate: !r,
                                className: b.animation
                            }), (0, i.jsx)("img", {
                                alt: B.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                                src: y,
                                className: u(b.sparkleIcon, b.sparkleTop)
                            })]
                        }), (0, i.jsx)(o.Heading, {
                            id: t,
                            variant: "heading-xl/semibold",
                            className: b.header,
                            children: B.default.Messages.MEMBER_VERIFICATION_MODAL_TITLE
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: b.subheader,
                            children: B.default.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE
                        }), (0, i.jsx)("hr", {
                            className: b.divider
                        }), (0, i.jsx)(q, {
                            guildId: s,
                            formState: l,
                            updateFormState: n,
                            isPreview: a
                        })]
                    })
                };
            var z = e => {
                var t;
                let {
                    headerId: s,
                    guildId: l,
                    onClose: a,
                    onComplete: I,
                    inviteCode: T,
                    isPreview: S = !1
                } = e, P = (0, V.useMemberVerificationFormNoticeStore)(e => e.hasUnsubmittedChanges), y = (0, d.useStateFromStores)([F.default], () => F.default.getGuild(l)), U = (0, d.useStateFromStores)([x.default], () => x.default.get(l)), w = (0, d.useStateFromStores)([_.default], () => _.default.getCurrentUser()), q = !(null == w ? void 0 : w.isClaimed()), k = null == w ? void 0 : w.verified, z = null == w ? void 0 : w.isPhoneVerified(), G = (0, d.useStateFromStores)([E.default], () => E.default.getGuildEmoji(l)), {
                    storeMemberCount: W,
                    storeOnlineCount: K
                } = (0, d.useStateFromStoresObject)([M.default], () => ({
                    storeMemberCount: M.default.getMemberCount(l),
                    storeOnlineCount: M.default.getOnlineCount(l)
                })), [J, X] = r.useState(null !== (t = null == U ? void 0 : U.formFields) && void 0 !== t ? t : []), [Q, Z] = r.useState(!1), [$, ee] = r.useState(null), [et, es] = r.useState(q ? n.CLAIM_ACCOUNT : n.VERIFICATION_FORM), [el, en] = r.useState(""), [ei, er] = r.useState(""), [ea, eu] = r.useState(null), [ed, eo] = r.useState(null), eI = (0, g.useIsMemberVerificationManualApproval)(l), ec = null == U ? void 0 : U.guild, em = r.useMemo(() => null != y ? y : null != ec ? new f.default(ec) : null, [y, ec]), {
                    emojisToRender: eE,
                    remainingEmojis: ef,
                    numGuildEmoji: eM
                } = r.useMemo(() => {
                    var e;
                    let t = null !== (e = 0 === G.length ? null == ec ? void 0 : ec.emojis : G) && void 0 !== e ? e : [],
                        s = [...t].reverse(),
                        l = 0,
                        n = s.length;
                    return n > 12 && null != s && (l = Math.min(n - (s = s.slice(0, 11)).length, 99)), {
                        emojisToRender: s,
                        remainingEmojis: l,
                        numGuildEmoji: n
                    }
                }, [ec, G]), eR = null != W ? W : null == ec ? void 0 : ec.approximate_member_count, eF = null != K ? K : null == ec ? void 0 : ec.approximate_presence_count;
                r.useEffect(() => ((0, V.setHasUnsubmittedChanges)(!1), () => {
                    (0, V.setHasUnsubmittedChanges)(!1)
                }), []), r.useEffect(() => {
                    h.default.fetchVerificationForm(l, T)
                }, [l, T]), r.useEffect(() => {
                    null != U && X(U.formFields)
                }, [U]), r.useEffect(() => {
                    null != w && w.isClaimed() && es(n.VERIFICATION_FORM)
                }, [w]), r.useEffect(() => {
                    et === n.EMAIL_CONFIRMATION && k && es(n.VERIFICATION_FORM)
                }, [et, k]), r.useEffect(() => {
                    null != l && A.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: L.MEMBER_VERIFICATION_TYPE,
                        guild_id: l
                    })
                }, [l]), r.useEffect(() => {
                    let e = J.some(e => e.field_type !== v.VerificationFormFieldTypes.TERMS && (0, j.isValidFormResponse)(e));
                    e && !P ? (0, V.setHasUnsubmittedChanges)(!0) : !e && P && (0, V.setHasUnsubmittedChanges)(!1)
                }, [J, P]);
                let e_ = r.useMemo(() => {
                        let e = ((null == em ? void 0 : em.verificationLevel) !== p.VerificationLevels.VERY_HIGH || (null == w ? void 0 : w.isStaff())) && k || z;
                        return !e || J.some(e => !(0, j.isValidFormResponse)(e))
                    }, [J, em, z, k, w]),
                    eN = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion);
                if (null == em) return null;
                let eC = async () => {
                    Z(!0), eu(null), eo(null);
                    try {
                        await (0, c.saveAccountRequest)({
                            email: el,
                            password: ei
                        }), Z(!1), es(n.EMAIL_CONFIRMATION)
                    } catch (s) {
                        var e, t;
                        eu(null == s ? void 0 : null === (e = s.body) || void 0 === e ? void 0 : e.email), eo(null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.password)
                    } finally {
                        Z(!1)
                    }
                }, eT = async () => {
                    var e, t;
                    Z(!0), ee(null);
                    let s = null != w ? R.default.getMember(l, w.id) : null;
                    if (null != s && !s.isPending) {
                        null == a || a(!0);
                        return
                    }
                    try {
                        await (null == I ? void 0 : I({
                            ...null != U ? U : x.NO_MEMBER_VERIFICATION_FORM,
                            formFields: J
                        })), null == a || a(!0)
                    } catch (l) {
                        let s = null == l ? void 0 : l.body;
                        (null == s ? void 0 : null === (e = s.errors) || void 0 === e ? void 0 : e.version) != null || (null == s ? void 0 : null === (t = s.errors) || void 0 === t ? void 0 : t.form_fields) != null ? ee(B.default.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR) : ee(null == s ? void 0 : s.message), Z(!1)
                    }
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(N.default, {
                        direction: N.default.Direction.VERTICAL,
                        justify: N.default.Justify.BETWEEN,
                        className: b.guildSidebar,
                        shrink: 0,
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(C.default, {
                                guild: em,
                                active: !0,
                                className: u(b.guildIcon, {
                                    [b.guildIconNoIcon]: null == em.icon
                                })
                            }), (0, i.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                className: b.guildName,
                                children: null == em ? void 0 : em.name
                            }), (0, i.jsx)(o.Text, {
                                className: b.guildDescription,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: null == U ? void 0 : U.description
                            }), null != eE && eE.length > 0 ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("hr", {
                                    className: b.divider
                                }), (0, i.jsx)(o.FormTitle, {
                                    children: B.default.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({
                                        emojis: eM
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: b.emojisContainer,
                                    children: [eE.map(e => {
                                        let t = O.default.getEmojiURL({
                                            id: e.id,
                                            animated: !1,
                                            size: 24
                                        });
                                        return (0, i.jsx)(o.Tooltip, {
                                            text: ":".concat(e.name, ":"),
                                            children: e => (0, i.jsx)("img", {
                                                ...e,
                                                width: 24,
                                                height: 24,
                                                src: t,
                                                className: b.emoji,
                                                alt: ""
                                            })
                                        }, e.id)
                                    }), null != ef && ef > 0 ? (0, i.jsx)(o.Heading, {
                                        variant: "heading-deprecated-12/semibold",
                                        className: b.emoji,
                                        color: "header-secondary",
                                        children: "+".concat(ef)
                                    }) : null]
                                })]
                            }) : null]
                        }), (0, i.jsxs)("div", {
                            children: [null != eF && (0, i.jsxs)(N.default, {
                                align: N.default.Align.CENTER,
                                className: b.onlineCount,
                                children: [(0, i.jsx)("div", {
                                    className: b.dotOnline
                                }), (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    children: B.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
                                        membersOnline: eF
                                    })
                                })]
                            }), null != eR && (0, i.jsxs)(N.default, {
                                align: N.default.Align.CENTER,
                                children: [(0, i.jsx)("div", {
                                    className: b.dotMembers
                                }), (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    children: B.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
                                        members: eR
                                    })
                                })]
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: b.modal,
                        children: [(0, i.jsx)(o.ModalContent, {
                            className: b.modalContent,
                            children: (0, i.jsx)(o.Sequencer, {
                                className: u(b.sequencer, {
                                    [b.centerContent]: et !== n.VERIFICATION_FORM
                                }),
                                steps: [n.CLAIM_ACCOUNT, n.EMAIL_CONFIRMATION, n.VERIFICATION_FORM],
                                step: et,
                                children: (() => {
                                    switch (et) {
                                        case n.CLAIM_ACCOUNT:
                                            return (0, i.jsx)(D, {
                                                headerId: s,
                                                email: el,
                                                password: ei,
                                                setEmail: en,
                                                setPassword: er,
                                                emailError: ea,
                                                passwordError: ed
                                            });
                                        case n.EMAIL_CONFIRMATION:
                                            return (0, i.jsx)(H, {
                                                headerId: s,
                                                email: el
                                            });
                                        case n.VERIFICATION_FORM:
                                            return (0, i.jsx)(Y, {
                                                headerId: s,
                                                guildId: l,
                                                formState: J,
                                                updateFormState: X,
                                                isPreview: S,
                                                useReducedMotion: eN
                                            })
                                    }
                                })()
                            })
                        }), (() => {
                            switch (et) {
                                case n.CLAIM_ACCOUNT:
                                    return (0, i.jsxs)(o.ModalFooter, {
                                        className: b.footer,
                                        children: [(0, i.jsx)(o.Button, {
                                            className: b.submitButton,
                                            type: "submit",
                                            submitting: Q,
                                            onClick: eC,
                                            disabled: 0 === el.length || 0 === ei.length,
                                            children: B.default.Messages.NEXT
                                        }), (0, i.jsx)(o.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-secondary",
                                            children: B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO
                                        })]
                                    });
                                case n.EMAIL_CONFIRMATION:
                                    return null;
                                case n.VERIFICATION_FORM:
                                    return (0, i.jsxs)(o.ModalFooter, {
                                        className: b.footer,
                                        children: [(0, i.jsx)(o.Button, {
                                            className: b.submitButton,
                                            type: "submit",
                                            submitting: Q,
                                            onClick: eT,
                                            color: o.Button.Colors.GREEN,
                                            disabled: null == I || e_,
                                            children: B.default.Messages.SUBMIT
                                        }), null != $ && (0, i.jsx)(o.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-danger",
                                            children: $
                                        }), null == $ && eI && (0, i.jsx)(o.Text, {
                                            color: "header-secondary",
                                            variant: "text-xs/normal",
                                            children: B.default.Messages.MEMBER_VERIFICATION_WARNING
                                        })]
                                    })
                            }
                        })()]
                    })]
                })
            }
        },
        705081: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PreviewEmailRequirementFormField: function() {
                    return c
                },
                EmailRequirementFormField: function() {
                    return m
                }
            });
            var l = s("920040"),
                n = s("773670"),
                i = s("77078"),
                r = s("437822"),
                a = s("556081"),
                u = s("272460"),
                d = s("782340"),
                o = s("241246");

            function I() {
                let [e, t] = n.useState(!1), [s, a] = n.useState(!1), [u, I] = n.useState(!1);
                n.useEffect(() => {
                    let e;
                    return s && (e = setTimeout(() => {
                        a(!1)
                    }, 2e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [s]);
                let c = async () => {
                    if (!e) {
                        t(!0);
                        try {
                            await r.default.verifyResend(), a(!0), I(!0)
                        } catch (e) {} finally {
                            t(!1)
                        }
                    }
                };
                return s ? (0, l.jsx)(i.Text, {
                    className: o.verifyConfirmText,
                    variant: "text-sm/normal",
                    color: "text-positive",
                    children: d.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT
                }) : (0, l.jsx)(i.Button, {
                    size: i.Button.Sizes.SMALL,
                    submitting: e,
                    onClick: c,
                    children: u ? d.default.Messages.RESEND_EMAIL_SHORT : d.default.Messages.VERIFY
                })
            }

            function c() {
                return (0, l.jsx)(u.RequirementWithActionRenderer, {
                    icon: a.default,
                    text: d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,
                    footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                    meetsRequirement: !1,
                    children: (0, l.jsx)(i.Tooltip, {
                        text: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
                        children: e => (0, l.jsx)(i.Button, {
                            ...e,
                            size: i.Button.Sizes.SMALL,
                            disabled: !0,
                            children: d.default.Messages.VERIFY
                        })
                    })
                })
            }

            function m(e) {
                let {
                    isUserVerified: t
                } = e, s = t ? d.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED : d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL;
                return (0, l.jsx)(u.RequirementWithActionRenderer, {
                    icon: a.default,
                    text: s,
                    footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                    meetsRequirement: t,
                    children: (0, l.jsx)(I, {})
                })
            }
        },
        762164: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PreviewPhoneRequirementFormField: function() {
                    return o
                },
                PhoneRequirementFormField: function() {
                    return I
                }
            });
            var l = s("920040");
            s("773670");
            var n = s("77078"),
                i = s("878720"),
                r = s("216947"),
                a = s("272460"),
                u = s("482931"),
                d = s("782340");

            function o() {
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(a.RequirementWithActionRenderer, {
                        icon: r.default,
                        text: d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
                        footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                        meetsRequirement: !1,
                        children: (0, l.jsx)(n.Tooltip, {
                            text: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
                            children: e => (0, l.jsx)(n.Button, {
                                ...e,
                                size: n.Button.Sizes.SMALL,
                                disabled: !0,
                                children: d.default.Messages.VERIFY
                            })
                        })
                    })
                })
            }

            function I(e) {
                let {
                    isUserVerified: t
                } = e, o = t ? d.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED : d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(a.RequirementWithActionRenderer, {
                        icon: r.default,
                        text: o,
                        footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                        meetsRequirement: t,
                        children: (0, l.jsx)(n.Button, {
                            size: n.Button.Sizes.SMALL,
                            onClick: () => {
                                (0, n.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await s.el("601745").then(s.bind(s, "601745"));
                                    return t => (0, l.jsx)(e, {
                                        reason: i.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                                        ...t
                                    })
                                }, {
                                    modalKey: u.PHONE_VERIFICATION_MODAL_KEY
                                })
                            },
                            children: d.default.Messages.VERIFY
                        })
                    })
                })
            }
        },
        179487: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PreviewFormRenderer: function() {
                    return R
                },
                ApplicantFormRenderer: function() {
                    return F
                }
            });
            var l = s("920040"),
                n = s("773670"),
                i = s("498225"),
                r = s("305961"),
                a = s("697218"),
                u = s("567054"),
                d = s("528507"),
                o = s("705081"),
                I = s("472850"),
                c = s("199901"),
                m = s("762164"),
                E = s("772970"),
                f = s("621115");

            function M(e) {
                let {
                    guildId: t,
                    formFields: s,
                    updateFormFields: n
                } = e, a = (0, i.useStateFromStores)([r.default], () => {
                    var e;
                    return null === (e = r.default.getGuild(t)) || void 0 === e ? void 0 : e.rulesChannelId
                }), d = (e, t) => {
                    let l = s[e];
                    n([...s.slice(0, e), {
                        ...l,
                        response: t
                    }, ...s.slice(e + 1)])
                }, o = (e, t) => {
                    let l = s[e];
                    n([...s.slice(0, e), {
                        ...l,
                        response: t
                    }, ...s.slice(e + 1)])
                }, m = (e, t) => {
                    let {
                        value: l
                    } = t, i = s[e];
                    n([...s.slice(0, e), {
                        ...i,
                        response: l
                    }, ...s.slice(e + 1)])
                }, M = (e, t) => {
                    switch (e.field_type) {
                        case u.VerificationFormFieldTypes.TERMS:
                            return (0, l.jsx)(E.TermsFormField, {
                                channelId: a,
                                formField: e,
                                onChange: (e, s) => d(t, s)
                            }, t);
                        case u.VerificationFormFieldTypes.TEXT_INPUT:
                            return (0, l.jsx)(f.TextInputFormField, {
                                formField: e,
                                onChange: e => o(t, e)
                            }, t);
                        case u.VerificationFormFieldTypes.PARAGRAPH:
                            return (0, l.jsx)(c.ParagraphFormField, {
                                formField: e,
                                onChange: e => o(t, e)
                            }, t);
                        case u.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                            return (0, l.jsx)(I.MultipleChoiceFormField, {
                                formField: e,
                                onChange: e => m(t, e)
                            }, t)
                    }
                };
                return (0, l.jsx)(l.Fragment, {
                    children: s.map((e, t) => M(e, t))
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    formFields: s,
                    updateFormFields: n
                } = e, r = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()), u = (0, d.useIsPhoneVerificationLevel)({
                    guildId: t
                }), I = u ? m.PreviewPhoneRequirementFormField : o.PreviewEmailRequirementFormField;
                return null == r ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(I, {}), (0, l.jsx)(M, {
                        guildId: t,
                        formFields: s,
                        updateFormFields: n
                    })]
                })
            }

            function F(e) {
                let {
                    guildId: t,
                    formFields: s,
                    updateFormFields: r
                } = e, u = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()), {
                    isPhoneVerificationLevel: I,
                    isCurrentUserVerified: c
                } = (0, d.useCurrentUserVerificationStatus)({
                    guildId: t
                }), E = n.useRef(c), f = I ? m.PhoneRequirementFormField : o.EmailRequirementFormField;
                return null == u ? null : (0, l.jsxs)(l.Fragment, {
                    children: [!E.current && (0, l.jsx)(f, {
                        isUserVerified: c
                    }), (0, l.jsx)(M, {
                        guildId: t,
                        formFields: s,
                        updateFormFields: r
                    })]
                })
            }
        }
    }
]);