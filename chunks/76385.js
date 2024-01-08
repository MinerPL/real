            "use strict";
            n.r(t), n.d(t, {
                NON_TOKEN_TYPE: function() {
                    return r
                },
                Token: function() {
                    return i
                },
                default: function() {
                    return s
                }
            }), n("222007"), n("702976"), n("424973");
            let l = /.+/g,
                r = "NON_TOKEN";

            function a(e, t, n) {
                if (null == t) return null;
                for (let l = 0; l < t.length; l++) {
                    let r;
                    let a = t[l],
                        u = o(e.match(a.regex), n);
                    if (null != u) {
                        let {
                            cache: e
                        } = a;
                        if (null != e && null != (r = e.get(u[0])) && ((r = new i(r)).start = u.index), null == r) {
                            if (r = new i(u, a.type), null != a.validator && !a.validator(r)) continue;
                            null != e && !(null == e ? void 0 : e.has(u[0])) && e.set(u[0], r)
                        }
                        return r
                    }
                }
                return null
            }

            function o(e, t) {
                if (null == e) return null;
                let n = [...e];
                return n.index = t, n
            }
            class u {
                reset(e) {
                    this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : r
                }
                addRule(e) {
                    let t;
                    let {
                        type: n,
                        follows: l,
                        validator: r
                    } = e, {
                        regex: a
                    } = e;
                    if ("^" !== a.source.charAt(0) && (a = new RegExp("^".concat(a.source), a.flags)), null != r && (t = new Map), null == l) {
                        this._rules.push({
                            regex: a,
                            type: n,
                            validator: r,
                            cache: t
                        });
                        return
                    }
                    l.forEach(e => {
                        null == this._followers[e] && (this._followers[e] = []), this._followers[e].push({
                            regex: a,
                            type: n,
                            validator: r,
                            cache: t
                        })
                    })
                }
                tokenize(e) {
                    let t, n = e,
                        r = "",
                        a = 0,
                        u = [];
                    for (; n.length > 0;) {
                        let e = this._getMatch(n, t, a + r.length);
                        null != e ? (null != r && "" !== r && u.push(new i(o(r.match(l), a), this._nonTokenType)), t = e, u.push(e), a += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
                    }
                    return null != r && "" !== r && u.push(new i(o(r.match(l), a), this._nonTokenType)), u
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
                    let l;
                    let r = null != t ? t.type : null;
                    return (null == t ? void 0 : t.end) === n && (l = a(e, this._followers[String(r)], n)), null == l && (l = a(e, this._rules, n)), l
                }
                constructor(e = [], t) {
                    this._rules = [], this._followers = {}, this._nonTokenType = r, this.reset(t), e.forEach(e => this.addRule(e))
                }
            }
            class i {
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
                    if (e instanceof i) this.match = [...e.match], this.start = e.start, this.type = e.type, null != e._data && (this._data = e._data);
                    else if (null != e) {
                        var n;
                        this.match = [...e], this.start = "string" == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0, this.type = t
                    } else this.match = [], this.start = 0, this.type = t
                }
            }
            u.NON_TOKEN_TYPE = r, u.Token = i;
            var s = u