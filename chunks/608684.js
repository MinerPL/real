            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return I
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                u = n.n(r),
                o = n("77078"),
                d = n("159885"),
                c = n("694187"),
                E = n("49111"),
                f = n("782340"),
                _ = n("911686");

            function I(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, l.jsx)("div", {
                    className: i(_.imageUploaderIcon, t),
                    children: n
                })
            }
            class h extends a.PureComponent {
                handleExternalFileChange(e) {
                    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, a, s;
                    let {
                        image: r,
                        hint: u,
                        name: h,
                        makeURL: T,
                        disabled: N,
                        onChange: v,
                        showIcon: m,
                        showIconDisabled: S,
                        className: g,
                        imageClassName: C,
                        iconClassName: p,
                        iconWrapperClassName: x,
                        icon: R,
                        hideSize: A,
                        imageStyle: O,
                        showRemoveButton: L,
                        maxFileSizeBytes: M,
                        onFileSizeError: D,
                        onOpenImageSelectModal: y,
                        "aria-label": U
                    } = this.props;
                    if (null != (t = null != r && /^data:/.test(r) ? r : T(r)) ? n = 'url("'.concat(t, '")') : null != h && (a = (0, l.jsx)("div", {
                            className: _.imageUploaderAcronym,
                            children: (0, d.getAcronym)(h)
                        })), N) return (0, l.jsx)("div", {
                        className: i(_.imageUploader, _.disabled, g),
                        children: (0, l.jsxs)("div", {
                            className: i(_.imageUploaderInner, C),
                            style: {
                                ...O,
                                backgroundImage: n
                            },
                            children: [a, S && (0, l.jsx)("div", {
                                className: i(_.imageUploaderIcon, _.imageUploaderIconDisabled, p),
                                children: R
                            })]
                        })
                    });
                    null != r ? s = (0, l.jsx)(o.Anchor, {
                        className: _.removeButton,
                        onClick: this.handleRemove,
                        children: f.default.Messages.REMOVE
                    }) : !A && (s = (0, l.jsx)("small", {
                        className: _.sizeInfo,
                        children: f.default.Messages.MINIMUM_SIZE.format({
                            size: E.AVATAR_SIZE
                        })
                    }));
                    let V = null !== (e = null != U ? U : u) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
                    return (0, l.jsxs)("div", {
                        className: i(_.imageUploader, g),
                        children: [(0, l.jsx)(o.FocusRing, {
                            within: !0,
                            children: (0, l.jsxs)("div", {
                                className: m ? i(_.imageUploaderIconWrapper, x) : void 0,
                                children: [(0, l.jsxs)("div", {
                                    className: i(_.imageUploaderInner, C),
                                    style: {
                                        ...O,
                                        backgroundImage: n
                                    },
                                    children: [(0, l.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: a
                                    }), null != y ? (0, l.jsx)(o.Clickable, {
                                        className: _.imageUploaderFileInput,
                                        "aria-label": V,
                                        onClick: y
                                    }) : (0, l.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: v,
                                        className: _.imageUploaderFileInput,
                                        "aria-label": V,
                                        tabIndex: 0,
                                        maxFileSizeBytes: M,
                                        onFileSizeError: D
                                    })]
                                }), null != u && (0, l.jsx)("div", {
                                    className: _.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: u
                                }), m && (0, l.jsx)(I, {
                                    className: p,
                                    icon: R
                                })]
                            })
                        }), L ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = a.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            h.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var T = h