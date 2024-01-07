            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("522632"),
                l = n("77078"),
                r = n("393414");
            class o extends s.PureComponent {
                componentDidUpdate(e) {
                    let {
                        resetCurrentPage: t
                    } = this.props;
                    !e.resetCurrentPage && t && this.setState({
                        currentPage: 1
                    })
                }
                render() {
                    let {
                        totalCount: e,
                        pageSize: t,
                        maxVisiblePages: n,
                        children: s
                    } = this.props, {
                        currentPage: i
                    } = this.state, r = (0, a.jsx)(l.Paginator, {
                        totalCount: e,
                        pageSize: t,
                        currentPage: i,
                        maxVisiblePages: n,
                        onPageChange: this.handlePageChange
                    });
                    return s({
                        controller: r
                    })
                }
                constructor(e) {
                    super(e), this.handlePageChange = e => {
                        let {
                            onPageChange: t
                        } = this.props;
                        this.setState({
                            currentPage: e
                        }), null != t && t(e)
                    };
                    let t = (0, r.getHistory)(),
                        n = t.location.search,
                        a = null != n && n.length > 0 && n.startsWith("?"),
                        {
                            offset: s
                        } = a ? i.parse(n) : {},
                        l = null != s ? Math.floor(parseInt(s, 10) / e.pageSize) + 1 : 1;
                    this.state = {
                        currentPage: l
                    }
                }
            }
            var u = o