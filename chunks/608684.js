            "use strict";
            t.r(a), t.d(a, {
                ImageUploaderIcon: function() {
                    return h
                },
                default: function() {
                    return g
                }
            }), t("222007");
            var l = t("37983"),
                i = t("884691"),
                n = t("414456"),
                r = t.n(n),
                s = t("627445"),
                o = t.n(s),
                u = t("77078"),
                d = t("159885"),
                c = t("694187"),
                f = t("49111"),
                m = t("782340"),
                v = t("911686");

            function h(e) {
                let {
                    className: a,
                    icon: t = null
                } = e;
                return (0, l.jsx)("div", {
                    className: r(v.imageUploaderIcon, a),
                    children: t
                })
            }
            class p extends i.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let a, t, i, n;
                    let {
                        image: s,
                        hint: o,
                        name: p,
                        makeURL: g,
                        disabled: I,
                        onChange: x,
                        showIcon: S,
                        showIconDisabled: A,
                        className: U,
                        imageClassName: N,
                        iconClassName: E,
                        iconWrapperClassName: T,
                        icon: j,
                        hideSize: y,
                        imageStyle: C,
                        showRemoveButton: P,
                        maxFileSizeBytes: b,
                        onFileSizeError: M,
                        onOpenImageSelectModal: R,
                        "aria-label": _
                    } = this.props;
                    if (null != (a = null != s && /^data:/.test(s) ? s : g(s)) ? t = 'url("'.concat(a, '")') : null != p && (i = (0, l.jsx)("div", {
                            className: v.imageUploaderAcronym,
                            children: (0, d.getAcronym)(p)
                        })), I) return (0, l.jsx)("div", {
                        className: r(v.imageUploader, v.disabled, U),
                        children: (0, l.jsxs)("div", {
                            className: r(v.imageUploaderInner, N),
                            style: {
                                ...C,
                                backgroundImage: t
                            },
                            children: [i, A && (0, l.jsx)("div", {
                                className: r(v.imageUploaderIcon, v.imageUploaderIconDisabled, E),
                                children: j
                            })]
                        })
                    });
                    null != s ? n = (0, l.jsx)(u.Anchor, {
                        className: v.removeButton,
                        onClick: this.handleRemove,
                        children: m.default.Messages.REMOVE
                    }) : !y && (n = (0, l.jsx)("small", {
                        className: v.sizeInfo,
                        children: m.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let k = null !== (e = null != _ ? _ : o) && void 0 !== e ? e : m.default.Messages.CHANGE_AVATAR;
                    return (0, l.jsxs)("div", {
                        className: r(v.imageUploader, U),
                        children: [(0, l.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, l.jsxs)("div", {
                                className: S ? r(v.imageUploaderIconWrapper, T) : void 0,
                                children: [(0, l.jsxs)("div", {
                                    className: r(v.imageUploaderInner, N),
                                    style: {
                                        ...C,
                                        backgroundImage: t
                                    },
                                    children: [(0, l.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: i
                                    }), null != R ? (0, l.jsx)(u.Clickable, {
                                        className: v.imageUploaderFileInput,
                                        "aria-label": k,
                                        onClick: R
                                    }) : (0, l.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: x,
                                        className: v.imageUploaderFileInput,
                                        "aria-label": k,
                                        tabIndex: 0,
                                        maxFileSizeBytes: b,
                                        onFileSizeError: M
                                    })]
                                }), null != o && (0, l.jsx)("div", {
                                    className: v.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), S && (0, l.jsx)(h, {
                                    className: E,
                                    icon: j
                                })]
                            })
                        }), P ? n : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = i.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            p.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var g = p