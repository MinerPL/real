            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            }), l("70102");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("316693"),
                o = l("200900"),
                d = l("77078"),
                u = l("822997"),
                c = l("350625"),
                f = l("468759"),
                m = l("752736"),
                I = l("926622");
            class N extends a.PureComponent {
                getOverwriteValue(e) {
                    let {
                        allow: t,
                        deny: l
                    } = this.props;
                    if (null == t || null == l) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
                    return r.default.has(t, e) ? u.PermissionOverrideType.ALLOW : r.default.has(l, e) ? u.PermissionOverrideType.DENY : u.PermissionOverrideType.PASSTHROUGH
                }
                getPermissionValue(e, t) {
                    return r.default.has(t, e)
                }
                handleChange(e, t) {
                    let {
                        onChange: l
                    } = this.props;
                    l(e, t)
                }
                renderDisabledIndicator(e) {
                    return (0, n.jsx)(d.Tooltip, {
                        text: e,
                        position: "top",
                        color: d.Tooltip.Colors.RED,
                        children: e => (0, n.jsx)("span", {
                            ...e,
                            children: (0, n.jsx)(f.default, {
                                className: m.icon,
                                width: 18,
                                height: 18
                            })
                        })
                    })
                }
                renderComponent(e) {
                    let {
                        title: t,
                        description: l,
                        helpdeskArticleId: a,
                        flag: s
                    } = e, {
                        permissions: r,
                        locked: u,
                        permissionRender: f
                    } = this.props, I = null == f ? void 0 : f(s), N = !!(u || I), T = "string" == typeof I ? this.renderDisabledIndicator(I) : null, E = i({
                        [m.title]: null != T
                    });
                    return null == r ? (0, n.jsxs)(c.default, {
                        disabled: N,
                        value: this.getOverwriteValue(s),
                        onChange: e => this.handleChange(s, e),
                        note: (0, o.renderDescription)(l),
                        helpdeskArticleId: a,
                        children: [T, (0, n.jsx)("span", {
                            className: E,
                            children: t
                        })]
                    }, String(s)) : (0, n.jsxs)(d.FormSwitch, {
                        disabled: N,
                        value: this.getPermissionValue(s, r),
                        onChange: e => this.handleChange(s, e),
                        note: (0, o.renderDescription)(l),
                        children: [T, (0, n.jsx)("span", {
                            className: E,
                            children: t
                        })]
                    }, String(s))
                }
                render() {
                    let {
                        spec: e,
                        className: t
                    } = this.props;
                    return (0, n.jsx)(d.FormSection, {
                        className: t,
                        children: (0, n.jsxs)(d.HeadingLevel, {
                            component: (0, n.jsx)(d.FormTitle, {
                                tag: d.FormTitleTags.H5,
                                className: null != e.description ? I.marginBottom8 : I.marginBottom20,
                                children: e.title
                            }),
                            children: [null != e.description && (0, n.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: I.marginBottom20,
                                children: e.description
                            }), e.permissions.map(this.renderComponent, this)]
                        })
                    })
                }
            }
            var T = N