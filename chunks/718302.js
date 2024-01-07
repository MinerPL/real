            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var r, l, n, a = s("884691"),
                i = s("49111");
            (n = r || (r = {})).ARROW_UP = "ARROW_UP", n.ARROW_DOWN = "ARROW_DOWN", n.ARROW_LEFT = "ARROW_LEFT", n.ARROW_RIGHT = "ARROW_RIGHT";
            l = class extends a.Component {
                componentDidMount() {
                    document.addEventListener("keydown", this.handleKeyDown, !0)
                }
                componentWillUnmount() {
                    document.removeEventListener("keydown", this.handleKeyDown, !0)
                }
                focusNext(e) {
                    let {
                        getItemGrid: t,
                        onFocus: s
                    } = this.props, {
                        focusedColumn: r,
                        focusedRow: l
                    } = this.state;
                    if (null == e) return;
                    let n = t();
                    if (null == n) return;
                    let a = this.getNext(n, r, l, e);
                    this.setState({
                        focusedColumn: a.column,
                        focusedRow: a.row
                    }, () => {
                        let e = this.calculateFocusedItem();
                        null != e && null != s && s(e)
                    })
                }
                getNext(e, t, s, r) {
                    let l, n, a, i;
                    if (null == t || null == s) n = 0, a = 0, l = {
                        column: 0,
                        row: 0
                    };
                    else switch (n = t, a = s, r) {
                        case "ARROW_UP":
                            l = {
                                column: n,
                                row: Math.max(a - 1, 0)
                            };
                            break;
                        case "ARROW_DOWN":
                            l = {
                                column: n,
                                row: Math.min(a + 1, e[n].length - 1)
                            };
                            break;
                        case "ARROW_LEFT":
                            l = this.wrapPosition(e, n, a, -1);
                            break;
                        case "ARROW_RIGHT":
                            l = this.wrapPosition(e, n, a, 1)
                    }
                    return null != l && (i = e[l.column][l.row]), (null == i || null == l) && (i = e[(l = {
                        column: n,
                        row: a
                    }).column][l.row]), {
                        column: l.column,
                        row: l.row,
                        id: i
                    }
                }
                calculateClosest(e, t) {
                    let s;
                    let r = this.props.getCoordsMap()[e];
                    if (null == r) return;
                    let l = Number.MAX_SAFE_INTEGER;
                    for (let e = 0; e < t.length; e++) {
                        let n = this.props.getCoordsMap()[t[e]];
                        if (null == n) continue;
                        let a = Math.abs(n.top - r.top);
                        if (a < l) l = a, s = e;
                        else break
                    }
                    return s
                }
                calculateFocusedItem() {
                    let {
                        getItemGrid: e
                    } = this.props, {
                        focusedRow: t,
                        focusedColumn: s
                    } = this.state, r = e();
                    return null == r || null == s || null == t || null == r[s] || null == r[s][t] ? null : r[s][t]
                }
                render() {
                    return this.props.children
                }
                constructor(...e) {
                    super(...e), this.state = {
                        focusedColumn: null,
                        focusedRow: null
                    }, this.handleKeyDown = e => {
                        let {
                            onSelect: t
                        } = this.props;
                        switch (e.keyCode) {
                            case i.KeyboardKeys.ARROW_DOWN:
                            case i.KeyboardKeys.ARROW_UP:
                            case i.KeyboardKeys.ARROW_LEFT:
                            case i.KeyboardKeys.ARROW_RIGHT:
                                this.focusNext(function(e) {
                                    switch (e) {
                                        case i.KeyboardKeys.ARROW_DOWN:
                                            return "ARROW_DOWN";
                                        case i.KeyboardKeys.ARROW_UP:
                                            return "ARROW_UP";
                                        case i.KeyboardKeys.ARROW_LEFT:
                                            return "ARROW_LEFT";
                                        case i.KeyboardKeys.ARROW_RIGHT:
                                            return "ARROW_RIGHT";
                                        default:
                                            return null
                                    }
                                }(e.keyCode));
                                break;
                            case i.KeyboardKeys.ENTER:
                                let s = this.calculateFocusedItem();
                                null != s && null != t && (e.preventDefault(), e.stopPropagation(), t(s))
                        }
                    }, this.wrapPosition = (e, t, s, r) => {
                        var l;
                        let n = e.length,
                            a = Math.max(s * n + t + r, 0) % n,
                            i = null !== (l = this.calculateClosest(e[t][s], e[a])) && void 0 !== l ? l : s,
                            o = 0;
                        return r < 0 && a > t && (o = -1), r > 0 && a < t && (o = 1), {
                            column: a,
                            row: i + o
                        }
                    }
                }
            }