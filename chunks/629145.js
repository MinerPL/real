            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Q
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("446674"),
                u = s("669491"),
                c = s("77078"),
                S = s("79112"),
                E = s("145079"),
                f = s("583227"),
                m = s("426902"),
                T = s("861370"),
                _ = s("956967"),
                g = s("878720"),
                h = s("553257"),
                I = s("167209"),
                N = s("217513"),
                p = s("289918"),
                C = s("590006"),
                A = s("106435"),
                O = s("790618"),
                x = s("697218"),
                M = s("433487"),
                R = s("423487"),
                v = s("306160"),
                L = s("158998"),
                D = s("50885"),
                P = s("845579"),
                j = s("760947"),
                b = s("49111"),
                U = s("482931"),
                y = s("935583"),
                B = s("590456"),
                F = s("782340"),
                G = s("594129");
            let k = D.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

            function w(e) {
                var t, l;
                let {
                    className: r,
                    user: o
                } = e, d = n.useRef(null), S = (0, h.usePomeloEligibility)(), E = (0, I.useIsEligibleForPomelo)(), f = (0, _.useGuildAutomodProfileQuarantineErrors)(), m = null !== (l = null == f ? void 0 : null === (t = f.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : null, T = null != d.current && d.current.scrollWidth > d.current.clientWidth, g = !o.isClaimed(), N = S && !o.isPomelo() && !o.hasVerifiedEmailOrPhone() || g, p = N ? F.default.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
                return (0, a.jsxs)("div", {
                    className: i(G.field, r),
                    children: [(0, a.jsx)("div", {
                        className: G.constrainedRow,
                        children: (0, a.jsxs)("div", {
                            className: G.usernameRow,
                            children: [(0, a.jsx)(c.FormTitle, {
                                className: G.fieldTitle,
                                children: F.default.Messages.USER_SETTINGS_LABEL_USERNAME
                            }), (0, a.jsxs)("div", {
                                className: G.usernameInnerRow,
                                ref: d,
                                children: [(0, a.jsx)(c.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: o.username
                                }), !o.isPomelo() && (0, a.jsxs)(c.Text, {
                                    tag: "span",
                                    color: "header-secondary",
                                    variant: "text-md/normal",
                                    children: ["#", o.discriminator]
                                })]
                            })]
                        })
                    }), E && (0, a.jsx)("div", {
                        className: G.pomeloWarning,
                        children: (0, a.jsx)(c.Tooltip, {
                            text: F.default.Messages.ACTION_NEEDED,
                            children: e => (0, a.jsx)(R.default, {
                                ...e,
                                color: u.default.colors.STATUS_WARNING.css
                            })
                        })
                    }), null != m && (0, a.jsx)("div", {
                        className: G.pomeloWarning,
                        children: (0, a.jsx)(c.Tooltip, {
                            text: m,
                            "aria-label": !1,
                            children: e => (0, a.jsx)(R.default, {
                                ...e,
                                color: u.default.colors.STATUS_WARNING.css
                            })
                        })
                    }), (0, a.jsx)(c.Tooltip, {
                        text: p,
                        children: e => (0, a.jsx)(c.Button, {
                            ...e,
                            disabled: N,
                            size: c.Button.Sizes.SMALL,
                            className: G.fieldButton,
                            color: c.Button.Colors.PRIMARY,
                            "aria-label": F.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
                            onClick: () => (0, c.openModalLazy)(async () => {
                                if (E) {
                                    let {
                                        default: e
                                    } = await s.el("892845").then(s.bind(s, "892845"));
                                    return t => (0, a.jsx)(e, {
                                        source: y.PomeloEntrypoints.USER_SETTINGS_EDIT,
                                        ...t
                                    })
                                } {
                                    let {
                                        default: e
                                    } = await s.el("385559").then(s.bind(s, "385559"));
                                    return t => (0, a.jsx)(e, {
                                        ...t
                                    })
                                }
                            }),
                            children: T ? F.default.Messages.DISAPPROVAL : F.default.Messages.EDIT
                        })
                    })]
                })
            }

            function H(e) {
                var t, s;
                let {
                    user: n,
                    className: l
                } = e, r = (0, _.useGuildAutomodProfileQuarantineErrors)(), o = null !== (s = null == r ? void 0 : null === (t = r.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : null, d = L.default.getGlobalName(n);
                return (0, a.jsxs)("div", {
                    className: i(G.field, l),
                    children: [(0, a.jsx)("div", {
                        className: G.constrainedRow,
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(c.FormTitle, {
                                className: G.fieldTitle,
                                children: F.default.Messages.DISPLAY_NAME
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(c.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: null == d ? F.default.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : d
                                })
                            })]
                        })
                    }), null != o && (0, a.jsx)("div", {
                        className: G.pomeloWarning,
                        children: (0, a.jsx)(c.Tooltip, {
                            text: o,
                            "aria-label": !1,
                            children: e => (0, a.jsx)(R.default, {
                                ...e,
                                color: u.default.colors.STATUS_WARNING.css
                            })
                        })
                    }), (0, a.jsx)(c.Button, {
                        className: G.fieldButton,
                        size: c.Button.Sizes.SMALL,
                        color: c.Button.Colors.PRIMARY,
                        "aria-label": F.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
                        onClick: z,
                        children: F.default.Messages.EDIT
                    })]
                })
            }

            function V(e) {
                let {
                    text: t,
                    censor: s,
                    revealLabel: l,
                    hideLabel: i
                } = e, [r, o] = n.useState(!1), d = r ? t : s(t);
                return (0, a.jsxs)(a.Fragment, {
                    children: [d, (0, a.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        size: c.Button.Sizes.MIN,
                        color: c.Button.Colors.LINK,
                        "aria-label": r ? i : l,
                        onClick: () => o(!r),
                        children: r ? F.default.Messages.HIDE : F.default.Messages.REVEAL
                    })]
                })
            }

            function Y(e) {
                let t, {
                    className: n,
                    user: l
                } = e;
                if (l.isClaimed()) {
                    if (null == l.email) t = {
                        buttonText: F.default.Messages.ADD,
                        buttonAriaLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
                        buttonColor: c.Button.Colors.PRIMARY,
                        valueMessage: F.default.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
                        handleClick: () => (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("867693").then(s.bind(s, "867693"));
                            return t => (0, a.jsx)(e, {
                                ...t
                            })
                        })
                    };
                    else {
                        let {
                            email: e
                        } = l;
                        t = {
                            buttonText: F.default.Messages.EDIT,
                            buttonAriaLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
                            buttonColor: c.Button.Colors.PRIMARY,
                            valueMessage: (0, a.jsx)(V, {
                                text: e,
                                censor: j.censorEmail,
                                revealLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
                                hideLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
                            }),
                            handleClick: () => (0, c.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("867693").then(s.bind(s, "867693"));
                                return t => (0, a.jsx)(e, {
                                    ...t
                                })
                            })
                        }
                    }
                } else t = {
                    buttonText: F.default.Messages.CLAIM_ACCOUNT_SHORT,
                    buttonAriaLabel: F.default.Messages.CLAIM_ACCOUNT_SHORT,
                    buttonColor: c.Button.Colors.BRAND,
                    valueMessage: F.default.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
                    handleClick: () => m.default.openClaimAccountModal()
                };
                return (0, a.jsxs)("div", {
                    className: i(G.field, n),
                    children: [(0, a.jsx)("div", {
                        className: G.constrainedRow,
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(c.FormTitle, {
                                className: G.fieldTitle,
                                children: F.default.Messages.USER_SETTINGS_LABEL_EMAIL
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(c.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: t.valueMessage
                                })
                            })]
                        })
                    }), (0, a.jsx)(c.Button, {
                        className: G.fieldButton,
                        size: c.Button.Sizes.SMALL,
                        color: c.Button.Colors.PRIMARY,
                        "aria-label": t.buttonAriaLabel,
                        onClick: t.handleClick,
                        children: t.buttonText
                    })]
                })
            }

            function W(e) {
                let t, {
                    className: n,
                    user: l
                } = e;
                if (!l.isClaimed()) return null;
                let {
                    phone: r,
                    email: o
                } = l, d = null != r;
                return t = d ? (0, a.jsx)(V, {
                    text: r,
                    censor: j.censorPhone,
                    revealLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
                    hideLabel: F.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
                }) : F.default.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER, (0, a.jsxs)("div", {
                    className: i(G.field, n),
                    children: [(0, a.jsx)("div", {
                        className: G.constrainedRow,
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(c.FormTitle, {
                                className: G.fieldTitle,
                                children: F.default.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(c.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: t
                                })
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: G.fieldButtonList,
                        children: [d && null != o ? (0, a.jsx)(c.Button, {
                            className: i(G.fieldButton, G.removeButton),
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            "aria-label": F.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
                            onClick: function() {
                                (0, c.openModal)(e => (0, a.jsx)(f.default, {
                                    ...e,
                                    title: F.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
                                    children: l.hasFlag(b.UserFlags.MFA_SMS) ? F.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
                                    actionText: F.default.Messages.REMOVE,
                                    handleSubmit: e => g.default.removePhone(e, g.ChangePhoneReason.USER_SETTINGS_UPDATE)
                                }))
                            },
                            children: F.default.Messages.REMOVE
                        }) : null, (0, a.jsx)(c.Button, {
                            className: G.fieldButton,
                            size: c.Button.Sizes.SMALL,
                            color: c.Button.Colors.PRIMARY,
                            "aria-label": d ? F.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : F.default.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
                            onClick: function() {
                                (0, c.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await s.el("601745").then(s.bind(s, "601745"));
                                    return t => (0, a.jsx)(e, {
                                        reason: g.ChangePhoneReason.USER_SETTINGS_UPDATE,
                                        ...t
                                    })
                                }, {
                                    modalKey: U.PHONE_VERIFICATION_MODAL_KEY
                                })
                            },
                            children: d ? F.default.Messages.EDIT : F.default.Messages.ADD
                        })]
                    })]
                })
            }

            function K(e) {
                let {
                    user: t
                } = e, s = (0, T.default)({
                    id: t.id,
                    label: F.default.Messages.COPY_ID_USER
                }), n = P.DeveloperMode.useSetting();
                return n && v.SUPPORTS_COPY ? (0, a.jsx)(c.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(c.Menu, {
                            onClose: t,
                            onSelect: void 0,
                            navId: "copy-id",
                            "aria-label": F.default.Messages.USER_MORE_ACTIONS_MENU_LABEL,
                            children: s
                        })
                    },
                    children: e => (0, a.jsx)(c.Clickable, {
                        ...e,
                        className: G.overflowMenuButton,
                        "aria-label": F.default.Messages.ACTIONS,
                        children: (0, a.jsx)(M.default, {
                            className: G.overflowMenuIcon,
                            height: 24,
                            width: 24
                        })
                    })
                }) : null
            }

            function z() {
                S.default.setSection(b.UserSettingsSections.PROFILE_CUSTOMIZATION)
            }

            function Q() {
                var e;
                let t = (0, d.useStateFromStores)([x.default], () => {
                        let e = x.default.getCurrentUser();
                        return o(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
                    }),
                    s = (0, N.default)(t.id),
                    n = P.StatusSetting.useSetting(),
                    l = (0, d.useStateFromStores)([O.default], () => O.default.getErrors()),
                    i = null == l ? void 0 : null === (e = l.avatar) || void 0 === e ? void 0 : e[0],
                    {
                        avatarSrc: r,
                        avatarDecorationSrc: u
                    } = (0, A.default)({
                        user: t,
                        size: c.AvatarSizes.SIZE_80
                    });
                return (0, a.jsxs)("div", {
                    className: G.accountProfileCard,
                    children: [(0, a.jsx)(p.default, {
                        displayProfile: s,
                        user: t,
                        allowEdit: !1,
                        guildId: void 0,
                        profileType: B.UserProfileTypes.SETTINGS
                    }), (0, a.jsxs)("div", {
                        className: G.userInfo,
                        children: [(0, a.jsx)(k, {
                            className: G.avatar,
                            src: r,
                            avatarDecoration: u,
                            status: n,
                            size: c.AvatarSizes.SIZE_80,
                            "aria-label": t.username
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsxs)("div", {
                                className: G.profileCardUsernameRow,
                                children: [(0, a.jsx)(E.default, {
                                    user: t,
                                    className: G.userTag,
                                    discriminatorClass: G.discriminator
                                }), (0, a.jsx)(K, {
                                    user: t
                                })]
                            }), (0, a.jsx)(C.default, {
                                className: G.badgeList,
                                user: t,
                                size: C.BadgeSizes.SIZE_22
                            })]
                        }), (0, a.jsx)(c.Button, {
                            onClick: z,
                            size: c.Button.Sizes.SMALL,
                            children: F.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE
                        })]
                    }), (0, a.jsxs)("div", {
                        className: G.background,
                        children: [null != i ? (0, a.jsx)(c.Text, {
                            className: G.avatarError,
                            variant: "text-xs/normal",
                            color: "text-danger",
                            children: i
                        }) : null, (0, a.jsxs)("div", {
                            className: G.fieldList,
                            children: [(0, a.jsx)(H, {
                                className: G.fieldSpacerBottom,
                                user: t
                            }), (0, a.jsx)(w, {
                                user: t
                            }), (0, a.jsx)(Y, {
                                className: G.fieldSpacer,
                                user: t
                            }), (0, a.jsx)(W, {
                                className: G.fieldSpacer,
                                user: t
                            })]
                        })]
                    })]
                })
            }