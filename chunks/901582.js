            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i, l, u = n("37983"),
                a = n("884691"),
                r = n("748820"),
                d = n("599110"),
                s = n("117362"),
                o = n("49111");
            (i = class extends a.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: i,
                        page: l,
                        object: a,
                        objectType: r,
                        children: s
                    } = this.props, o = this.mergeLocation(e.location, this.getLocation(l, i, a, r)), c = this.getContext(o, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, u.jsx)(d.AnalyticsContext.Provider, {
                        value: c,
                        children: s
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, u.jsx)(d.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, s.cachedFunction)((e, t, n, i) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != n && (l.object = n), null != i && (l.objectType = i), l
                    }), this.mergeLocation = (0, s.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, s.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, r.v4)())
                }
            }).Pages = o.AnalyticsPages, i.Sections = o.AnalyticsSections, i.Objects = o.AnalyticsObjects, i.ObjectTypes = o.AnalyticsObjectTypes, i.defaultProps = {
                root: !1
            }, l = i