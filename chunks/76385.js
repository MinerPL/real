            "use strict";
            n.r(t), n.d(t, {
                NON_TOKEN_TYPE: function() {
                    return l
                },
                Token: function() {
                    return o
                },
                default: function() {
                    return i
                }
            }), n("222007"), n("702976"), n("424973");
            let r = /.+/g,
                l = "NON_TOKEN";

            function a(e, t, n) {
                if (null == t) return null;
                for (let r = 0; r < t.length; r++) {
                    let l;
                    let a = t[r],
                        u = s(e.match(a.regex), n);
                    if (null != u) {
                        let {
                            cache: e
                        } = a;
                        if (null != e && null != (l = e.get(u[0])) && ((l = new o(l)).start = u.index), null == l) {
                            if (l = new o(u, a.type), null != a.validator && !a.validator(l)) continue;
                            null != e && !(null == e ? void 0 : e.has(u[0])) && e.set(u[0], l)
                        }
                        return l
                    }
                }
                return null
            }

            function s(e, t) {
                if (null == e) return null;
                let n = [...e];
                return n.index = t, n
            }
            class u {
                reset(e) {
                    this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : l
                }
                addRule(e) {
                    let t;
                    let {
                        type: n,
                        follows: r,
                        validator: l
                    } = e, {
                        regex: a
                    } = e;
                    if ("^" !== a.source.charAt(0) && (a = new RegExp("^".concat(a.source), a.flags)), null != l && (t = new Map), null == r) {
                        this._rules.push({
                            regex: a,
                            type: n,
                            validator: l,
                            cache: t
                        });
                        return
                    }
                    r.forEach(e => {
                        null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                            regex: a,
                            type: n,
                            validator: l,
                            cache: t
                        })
                    })
                }
                tokenize(e) {
                    let t, n = e,
                        l = "",
                        a = 0,
                        u = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, a + l.length);
                        null != e ? (null != l && "" !== l && u.push(new o(s(l.match(r), a), this._nonTokenType)), t = e, u.push(e), a += t.length + l.length, n = n.substring(t.length), l = "") : (l += n[0], n = n.substring(1))
                    }
                    return null != l && "" !== l && u.push(new o(s(l.match(r), a), this._nonTokenType)), u
                }
                clearCache() {
                    for (let e in this._rules.forEach(e => {
                            var t;
                            return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                        }), this._followers) {
                        let t = this._followers[e];
                        t.forEach(e => {
                            var t;
                            return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                        })
                    }
                }
                _getMatch(e, t, n) {
                    let r;
                    let l = null != t ? t.type : null;
                    return (null == t ? void 0 : t.end) === n && (r = a(e, this._followers[String(l)], n)), null == r && (r = a(e, this._rules, n)), r
                }
                constructor(e = [], t) {
                    this._rules = [], this._followers = {}, this._nonTokenType = l, this.reset(t), e.forEach(e => this.addRule(e))
                }
            }
            class o {
                get end() {
                    return this.start + this.length
                }
                get length() {
                    return this.match[0].length
                }
                valueOf() {
                    return this.match[0]
                }
                getFullMatch() {
                    return this.match[0]
                }
                getMatch() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.match[e]
                }
                setData(e, t) {
                    null == this._data && (this._data = new Map), this._data.set(e, t)
                }
                getData(e) {
                    if (null != this._data) return this._data.get(e)
                }
                constructor(e, t) {
                    if (e instanceof o) this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data);
                    else if (null != e) {
                        var n;
                        this.match = [...e], this.start = "string" == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0, this.type = t
                    } else this.match = [], this.start = 0, this.type = t
                }
            }
            u.NON_TOKEN_TYPE = l, u.Token = o;
            var i = u