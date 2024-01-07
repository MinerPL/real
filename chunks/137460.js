            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            }), s("222007"), s("781738");
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("417809");
            let r = /[^0-9]/g;
            class o extends n.PureComponent {
                componentDidUpdate(e) {
                    let t = this._inputRef;
                    e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart)
                }
                render() {
                    return (0, a.jsx)(l.TextInput, {
                        ...this.props,
                        inputMode: "numeric",
                        onChange: this.handleChange,
                        inputRef: this.setRef
                    })
                }
                constructor(...e) {
                    super(...e), this.selectionStart = 0, this.setRef = e => {
                        let {
                            inputRef: t
                        } = this.props;
                        this._inputRef = e, null != t && t(e)
                    }, this.handleChange = (e, t) => {
                        let {
                            value: s,
                            onChange: a
                        } = this.props, n = this._inputRef;
                        if (e === s || null == n || null == s) return;
                        let l = (0, i.formatExpiration)(e),
                            o = n.selectionStart;
                        l === s && l.length <= 3 && s.includes("/") && !e.includes("/") ? l = l.replace(r, "") : l === s && e.includes("/") && !s.includes("/") && (l += "/"), l.length > e.length && (o += l.length - e.length), this.selectionStart = o, null != a && a(l, t)
                    }
                }
            }
            var d = o