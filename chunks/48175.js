            "use strict";
            A.r(t), A.d(t, {
                GuildProductEditModalContent: function() {
                    return eA
                },
                default: function() {
                    return ea
                }
            }), A("222007");
            var a, l, n = A("37983"),
                r = A("884691"),
                s = A("414456"),
                o = A.n(s),
                i = A("627445"),
                u = A.n(i),
                d = A("171210"),
                c = A("65597"),
                f = A("266491"),
                C = A("77078"),
                g = A("851387"),
                h = A("45299"),
                T = A("206230"),
                m = A("228100"),
                p = A("741515"),
                U = A("435032"),
                I = A("465869"),
                v = A("424960"),
                E = A("845579"),
                x = A("305961"),
                N = A("181114"),
                q = A("965397"),
                O = A("191814"),
                R = A("476765"),
                L = A("578706"),
                D = A("153160"),
                P = A("271560"),
                V = A("866190"),
                j = A("949435"),
                b = A("565559"),
                S = A("757515"),
                M = A("740259"),
                F = A("492724"),
                _ = A("155539"),
                G = A("959875"),
                K = A("669297"),
                B = A("836312"),
                W = A("795785"),
                X = A("850861"),
                z = A("570114"),
                y = A("307785"),
                Q = A("49111"),
                Z = A("988268"),
                H = A("782340"),
                w = A("496848");
            let k = (0, R.uid)(),
                Y = (0, R.uid)(),
                J = (0, R.uid)();

            function $(e) {
                let {
                    text: t,
                    onChange: A,
                    value: a,
                    disabled: l,
                    warning: r
                } = e, s = (0, R.useUID)(), i = l ? "text-muted" : "text-normal";
                return (0, n.jsxs)("label", {
                    className: o(w.benefitToggleContainer, {
                        [w.disabled]: l
                    }),
                    htmlFor: s,
                    children: [(0, n.jsx)(C.Text, {
                        variant: "text-sm/medium",
                        color: i,
                        children: t
                    }), null != r && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(O.default, {
                            size: 4,
                            horizontal: !0
                        }), r]
                    }), (0, n.jsx)(O.default, {
                        size: 16,
                        horizontal: !0
                    }), (0, n.jsx)(C.Switch, {
                        onChange: A,
                        checked: a,
                        disabled: l,
                        id: s
                    })]
                })
            }

            function ee(e, t) {
                return e.filter(e => {
                    let {
                        value: A,
                        label: a
                    } = e;
                    return A.toString().includes(t) || a.includes(t)
                })
            }

            function et(e) {
                let {
                    guildId: t,
                    selectedPriceTier: A,
                    setPriceTier: a
                } = e, {
                    priceTiers: l
                } = (0, p.usePriceTiers)(t, Q.PriceTierTypes.GUILD_PRODUCTS), s = r.useMemo(() => (null != l ? l : null != A ? [A] : []).map(e => ({
                    value: e,
                    label: (0, D.formatPrice)(e, Q.CurrencyCodes.USD)
                })), [l, A]);
                return (0, n.jsx)(C.SearchableSelect, {
                    value: A,
                    placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
                    maxVisibleItems: 5,
                    options: s,
                    onChange: a,
                    filter: ee,
                    "aria-required": !0
                })
            }

            function eA(e) {
                var t, a, l, s, o, i, p, v;
                let {
                    guildId: R,
                    productId: ee,
                    transitionState: eA,
                    onClose: el
                } = e, [en, er] = r.useState(ee), es = (0, c.default)([b.default], () => null == en ? null : b.default.getGuildProduct(en), [en]), eo = (null == es ? void 0 : es.published) === !0, {
                    application: ei
                } = (0, m.default)(R, Z.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), eu = M.PRODUCT_IMAGE_PRESETS[0], ed = (0, c.default)([T.default], () => T.default.useReducedMotion), ec = E.GifAutoPlay.useSetting(), ef = (0, V.useIsWindowFocused)(), eC = r.useCallback(() => {
                    var e;
                    return (null == es ? void 0 : null === (e = es.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? eu.data : (0, P.getAssetURL)(es.image_asset.application_id, es.image_asset, 600, ef && ec ? void 0 : "webp")
                }, [eu, es, ef, ec]), {
                    shouldRestrictUpdatingCreatorMonetizationSettings: eg
                } = (0, I.useShouldRestrictUpdatingCreatorMonetizationSettings)(R);
                r.useEffect(() => {
                    eg && (el(), (0, K.openErrorDialog)(H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
                }, [eg, el]);
                let [eh, eT] = r.useState(null !== (l = null == es ? void 0 : es.name) && void 0 !== l ? l : ""), [em, ep] = r.useState(null !== (s = null == es ? void 0 : es.description) && void 0 !== s ? s : ""), [eU, eI] = r.useState(null !== (o = null == es ? void 0 : es.price_tier) && void 0 !== o ? o : void 0), [ev, eE] = r.useState(eC), [ex, eN] = r.useState(null !== (i = null == es ? void 0 : null === (t = es.image_asset) || void 0 === t ? void 0 : t.filename) && void 0 !== i ? i : eu.name), [eq, eO] = r.useState(!1), [eR, eL] = r.useState(), eD = r.useMemo(() => null != eU ? (0, D.formatPrice)(eU, Q.CurrencyCodes.USD) : void 0, [eU]), [eP, eV] = r.useState(!0), {
                    changesSaving: ej,
                    saveError: eb,
                    saveProductWithAttachments: eS,
                    hasUnsavedAttachmentChanges: eM,
                    cancelUnusedUploads: eF
                } = (0, j.useGuildProductAttachmentManagerContext)(), e_ = (null == es ? void 0 : es.attachments) != null && (null == es ? void 0 : es.attachments.length) > 0, eG = null != eb ? eb : eR, eK = null != ej && "published" in ej, eB = null != ej && !eK, eW = null !== (p = null == es ? void 0 : es.role_id) && void 0 !== p ? p : null, [eX, ez] = r.useState(), ey = null != eX || null != eW, eQ = (0, c.default)([x.default], () => {
                    if (null != eW && null !== eX) {
                        let e = x.default.getGuild(R);
                        return null == e ? void 0 : e.roles[eW]
                    }
                    return null != eX ? eX : void 0
                }, [eX, eW, R]), eZ = "";
                ey && eP ? eZ = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : ey ? eZ = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eP && (eZ = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
                let eH = () => {
                        eV(!1), eF()
                    },
                    [ew, ek] = r.useState(),
                    {
                        changes: eY,
                        hasUnsavedChanges: eJ,
                        canSaveForDraft: e$,
                        canSaveForPublished: e0,
                        canPublishOrUnpublish: e1
                    } = r.useMemo(() => (0, S.computeProductChanges)({
                        guildProductListing: es,
                        name: eh,
                        priceTier: eU,
                        description: em,
                        image: ev,
                        imageName: ex,
                        isImageChanged: eq,
                        newRoleParams: eX,
                        hasSavedAttachments: e_,
                        hasUnsavedAttachmentChanges: eM
                    }), [es, eh, eU, em, ev, ex, eq, eX, e_, eM]),
                    e6 = r.useMemo(() => eJ || null == ew || "publish" === ew || null != eG ? null : (0, n.jsx)(q.default, {
                        className: w.successNotice,
                        children: (0, n.jsx)(h.default, {
                            message: (0, n.jsxs)("div", {
                                className: w.successNoticeMessage,
                                children: [(0, n.jsx)(L.default, {
                                    color: d.default.BUTTON_POSITIVE_BACKGROUND,
                                    backgroundColor: d.default.WHITE
                                }), (0, n.jsx)(C.Text, {
                                    variant: "text-md/medium",
                                    children: "draft" === ew ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : "update_publish" === ew ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
                                })]
                            }),
                            onReset: () => ek(void 0),
                            onResetText: H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
                        })
                    }), [eG, eJ, ew]),
                    e3 = r.useCallback(() => {
                        eJ ? (0, G.default)({
                            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
                            body: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                            cta: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                            closeLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                            onConfirm: () => {
                                el()
                            }
                        }) : el()
                    }, [el, eJ]);
                r.useEffect(() => {
                    (0, C.updateModal)(y.GUILD_PRODUCT_EDIT_MODAL_KEY, e => (0, n.jsx)(ea, {
                        guildId: R,
                        productId: en,
                        ...e
                    }), e3)
                }, [R, e3, en]);
                let e9 = async e => {
                    let t = (0, S.describeProductChangeValidation)({
                        newRoleParams: eX
                    });
                    if (eL(t), null != t) return;
                    let A = await eS(e);
                    if (eO(!1), null != A) {
                        if (null != e.name && eT(A.name), null != e.description && ep(A.description), null != eX) {
                            let e = A.role_id;
                            u(null != e, "Cannot update role without role ID"), await g.default.updateRole(R, e, eX)
                        }
                        ez(void 0), er(A.id), "published" in e && !0 === e.published && el()
                    }
                };
                r.useEffect(() => {
                    if (null != eG) {
                        var e;
                        (0, B.showPublishErrorDialog)(eG, R, null == ei ? void 0 : null === (e = ei.team) || void 0 === e ? void 0 : e.id)
                    }
                }, [eG, R, ei]), r.useEffect(() => {
                    eJ && ek(void 0)
                }, [eJ]);
                let e2 = r.useRef(null);
                return (0, n.jsxs)(C.ModalRoot, {
                    transitionState: eA,
                    size: C.ModalSize.DYNAMIC,
                    className: w.modalRoot,
                    "aria-labelledby": k,
                    children: [(0, n.jsxs)(C.ModalHeader, {
                        className: w.modalHeader,
                        separator: !1,
                        children: [(0, n.jsxs)("div", {
                            className: w.headerText,
                            children: [(0, n.jsx)(C.Heading, {
                                id: k,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
                            }), (0, n.jsx)(C.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
                            })]
                        }), (0, n.jsx)(C.ModalCloseButton, {
                            onClick: e3,
                            className: w.modalCloseButton
                        })]
                    }), (0, n.jsxs)(C.ModalContent, {
                        className: w.modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(C.ScrollerThin, {
                            children: (0, n.jsxs)("div", {
                                className: w.productFieldsSection,
                                ref: e2,
                                children: [(0, n.jsx)(C.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
                                    tag: "label",
                                    htmlFor: Y,
                                    error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("name"),
                                    children: (0, n.jsx)(C.TextArea, {
                                        value: eh,
                                        onChange: eT,
                                        id: Y,
                                        maxLength: 100,
                                        placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: eh.length > 0,
                                        showRemainingCharacterCount: eh.length > 0,
                                        required: !0,
                                        className: eh.length > 0 ? w.nameArea : void 0
                                    })
                                }), (0, n.jsx)(C.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
                                    tag: "label",
                                    error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("description"),
                                    htmlFor: J,
                                    children: (0, n.jsx)(U.default, {
                                        id: J,
                                        className: w.descriptionArea,
                                        value: em,
                                        onChange: ep,
                                        maxLength: 1500,
                                        placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
                                        showCharacterCount: em.length > 0,
                                        parentModalKey: y.GUILD_PRODUCT_EDIT_MODAL_KEY,
                                        required: !0
                                    })
                                }), (0, n.jsx)(C.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
                                    tag: "label",
                                    error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("price_tier"),
                                    children: (0, n.jsx)(et, {
                                        guildId: R,
                                        selectedPriceTier: eU,
                                        setPriceTier: eI
                                    })
                                }), (0, n.jsxs)(C.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
                                    tag: "label",
                                    error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("image"),
                                    titleClassName: w.thumbnailLabel,
                                    children: [(0, n.jsx)(C.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
                                    }), (0, n.jsx)(O.default, {
                                        size: 10
                                    }), (0, n.jsx)(W.default, {
                                        presetImages: M.PRODUCT_IMAGE_PRESETS,
                                        radioGroupAriaLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
                                        image: ev,
                                        imageName: ex,
                                        savedImageName: null == es ? void 0 : null === (a = es.image_asset) || void 0 === a ? void 0 : a.filename,
                                        onChange: (e, t) => {
                                            if (null != e) {
                                                var A;
                                                eE(e), eN(t), eO(e.startsWith("data:") || t !== (null == es ? void 0 : null === (A = es.image_asset) || void 0 === A ? void 0 : A.filename))
                                            }
                                        }
                                    })]
                                }), eP ? (0, n.jsx)(C.FormItem, {
                                    title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
                                    error: null == eG ? void 0 : eG.getFirstFieldErrorMessage("attachments"),
                                    children: (0, n.jsx)(_.AttachmentsUploadComponent, {
                                        onFileAdded: () => {
                                            var e;
                                            null === (e = e2.current) || void 0 === e || e.scrollIntoView({
                                                behavior: "smooth",
                                                block: "end"
                                            })
                                        }
                                    })
                                }) : null, ey ? (0, n.jsx)(z.default, {
                                    error: null !== (v = null == eG ? void 0 : eG.getFirstFieldErrorMessage(S.ROLE_FIELD_NAME)) && void 0 !== v ? v : void 0,
                                    newRoleParams: eX,
                                    setNewRoleParams: ez,
                                    guildId: R,
                                    listingRoleId: eW,
                                    productId: en
                                }) : null]
                            })
                        }), (0, n.jsx)("div", {
                            className: w.horizontalSeparator
                        }), (0, n.jsx)(C.ScrollerThin, {
                            children: (0, n.jsxs)("div", {
                                className: w.productPreview,
                                children: [(0, n.jsx)(X.default, {
                                    disabled: !e1,
                                    disabledTooltip: eo ? H.default.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : H.default.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
                                    published: eo,
                                    onClick: () => {
                                        u(e1, "Attempting to publish/unpublish when not allowed"), ek(eo ? "unpublish" : "publish"), e9({
                                            ...eY,
                                            published: !eo
                                        })
                                    },
                                    submitting: eK
                                }), (0, n.jsx)("div", {
                                    className: w.verticalSeparator
                                }), (0, n.jsx)(C.Heading, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: w.previewHeading,
                                    children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
                                }), (0, n.jsx)(O.default, {
                                    size: 4
                                }), (0, n.jsx)(C.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
                                }), (0, n.jsx)(O.default, {
                                    size: 16
                                }), (0, n.jsx)(F.default, {
                                    imageUrl: ev,
                                    name: "" === eh ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eh,
                                    description: "" === em ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : em,
                                    formattedPrice: eD,
                                    role: eQ,
                                    productType: eZ,
                                    ctaComponent: (0, n.jsx)(N.default, {
                                        shineSize: N.default.ShineSizes.SMALL,
                                        pauseAnimation: ed || !ef,
                                        className: w.productPreviewCtaButton,
                                        children: H.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
                                    }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190
                                })]
                            })
                        })]
                    }), (0, n.jsx)(C.ModalFooter, {
                        children: (0, n.jsxs)("div", {
                            className: w.footerActionButtons,
                            children: [(0, n.jsxs)("div", {
                                className: w.footerActionLeftButtons,
                                children: [(0, n.jsx)($, {
                                    text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
                                    value: ey,
                                    onChange: e => {
                                        e ? ez((0, z.getInitialNewRoleParams)()) : ez(void 0)
                                    },
                                    warning: null === eX ? (0, n.jsx)(z.WarningIcon, {}) : void 0,
                                    disabled: null != eW
                                }), (0, n.jsx)($, {
                                    text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
                                    value: eP,
                                    onChange: e => {
                                        e ? eV(!0) : eM ? (0, C.openModalLazy)(async () => {
                                            let {
                                                ConfirmModal: e
                                            } = await A.el("77078").then(A.bind(A, "77078"));
                                            return t => (0, n.jsx)(e, {
                                                ...t,
                                                header: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                                                confirmText: H.default.Messages.REMOVE,
                                                cancelText: H.default.Messages.CANCEL,
                                                onConfirm: eH,
                                                children: (0, n.jsx)(C.Text, {
                                                    variant: "text-md/normal",
                                                    children: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                                                })
                                            })
                                        }) : eH()
                                    },
                                    disabled: e_
                                })]
                            }), (0, n.jsx)("div", {
                                className: w.footerActionRightButtons,
                                children: eo ? (0, n.jsx)(C.Button, {
                                    color: C.Button.Colors.PRIMARY,
                                    disabled: !e0,
                                    submitting: eB,
                                    onClick: () => {
                                        u(e0, "cannot save changes for published product without adding all fields"), ek("update_publish"), e9(eY)
                                    },
                                    children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
                                }) : (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)(C.Button, {
                                        color: C.Button.Colors.PRIMARY,
                                        disabled: !e$,
                                        submitting: eB,
                                        onClick: () => {
                                            u(e$, "cannot save changes without name or price tier"), ek("draft"), e9(eY)
                                        },
                                        children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
                                    })
                                })
                            })]
                        })
                    }), (0, n.jsx)(f.default, {
                        component: "div",
                        className: w.successNoticeContainer,
                        children: e6
                    })]
                })
            }

            function ea(e) {
                var t;
                return (0, n.jsx)(j.GuildProductAttachmentManagerContextProvider, {
                    guildId: e.guildId,
                    editSkuId: null !== (t = e.productId) && void 0 !== t ? t : void 0,
                    onFileSizeError: () => (0, v.default)(y.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES),
                    children: (0, n.jsx)(eA, {
                        ...e
                    })
                })
            }(l = a || (a = {})).DRAFT = "draft", l.PUBLISH = "publish", l.UPDATE_PUBLISH = "update_publish", l.UNPUBLISH = "unpublish"