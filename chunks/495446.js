            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return R
                }
            });
            var t = a("37983");
            a("884691");
            var l = a("414456"),
                i = a.n(l),
                r = a("77078"),
                d = a("26991"),
                n = a("414943"),
                o = a("283167"),
                c = a("868246"),
                u = a("447621"),
                E = a("782340"),
                S = a("627819"),
                R = e => {
                    let {
                        guild: s,
                        guildMetadata: a,
                        headerId: l
                    } = e, R = c.default.getPrimaryCategories().map(e => {
                        let {
                            categoryId: s,
                            name: a
                        } = e;
                        return {
                            value: s,
                            label: a
                        }
                    });
                    return (0, t.jsxs)("div", {
                        className: S.container,
                        children: [(0, t.jsxs)("div", {
                            className: S.content,
                            children: [(0, t.jsx)("div", {
                                className: i(S.stepImage, S.tagImage)
                            }), (0, t.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                className: S.header,
                                id: l,
                                children: E.default.Messages.SERVER_DISCOVERY_CATEGORY
                            }), (0, t.jsx)(r.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: S.headerCaption,
                                children: E.default.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
                            })]
                        }), (0, t.jsxs)(r.FormSection, {
                            className: S.form,
                            children: [(0, t.jsx)(r.FormTitle, {
                                required: !0,
                                children: E.default.Messages.SERVER_DISCOVERY_CATEGORY
                            }), (0, t.jsx)(r.FormText, {
                                type: r.FormTextTypes.DESCRIPTION,
                                className: S.description,
                                children: E.default.Messages.SERVER_DISCOVERY_CATEGORY_INPUT_SUBLABEL
                            }), (0, t.jsx)(n.default, {
                                value: a.primaryCategoryId === u.DEFAULT_DISCOVERY_CATEGORY_ID ? null : a.primaryCategoryId,
                                placeholder: E.default.Messages.SELECT,
                                searchable: !0,
                                clearable: !1,
                                options: R,
                                onChange: e => {
                                    var a;
                                    (null == s ? void 0 : s.id) != null && o.updateGuildPrimaryCategory(null == s ? void 0 : s.id, null !== (a = null == e ? void 0 : e.value) && void 0 !== a ? a : u.DEFAULT_DISCOVERY_CATEGORY_ID)
                                },
                                maxMenuHeight: 250
                            })]
                        }), (0, t.jsxs)(r.FormSection, {
                            className: S.form,
                            children: [(0, t.jsx)(r.FormTitle, {
                                children: E.default.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_LABEL
                            }), (0, t.jsx)(r.FormText, {
                                type: r.FormTextTypes.DESCRIPTION,
                                className: S.description,
                                children: E.default.Messages.SERVER_DISCOVERY_SUBCATEGORY_INPUT_SUBLABEL
                            }), (0, t.jsx)(d.default, {
                                guild: s,
                                guildMetadata: a,
                                menuPlacement: n.default.MenuPlacements.TOP
                            })]
                        })]
                    })
                }