            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            }), s("70102"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("89253");
            class o extends n.Component {
                renderIcon(e) {
                    if (null != e.overrideIcon) return e.overrideIcon(r.icon);
                    if (null != e.icon && null != e.iconClass) {
                        let t = e.icon;
                        return (0, a.jsx)(t, {
                            className: i(r.icon, e.iconClass)
                        })
                    }
                    throw Error("Missing overrideIcon or iconName and iconClass")
                }
                render() {
                    return (0, a.jsx)("div", {
                        className: r.features,
                        style: {
                            gridTemplateColumns: Array(this.props.columns).fill("1fr").join(" ")
                        },
                        children: this.props.features.map(this.renderFeature)
                    })
                }
                constructor(...e) {
                    super(...e), this.renderFeature = (e, t) => (0, a.jsxs)("div", {
                        className: r.feature,
                        children: [this.renderIcon(e), (0, a.jsxs)("div", {
                            children: [null != e.title ? (0, a.jsx)("div", {
                                className: r.title,
                                children: e.title
                            }) : null, (0, a.jsx)("div", {
                                className: null == e.title ? r.descriptionStandalone : r.description,
                                children: e.description
                            })]
                        })]
                    }, t)
                }
            }
            var d = o