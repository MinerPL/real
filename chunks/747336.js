            "use strict";
            r("424973"), r("70102");
            let i = r("571405").Reporter,
                n = r("13020").EncoderBuffer,
                o = r("13020").DecoderBuffer,
                a = r("463483"),
                s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
                f = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);

            function Node(t, e, r) {
                let i = {};
                this._baseState = i, i.name = r, i.enc = t, i.parent = e || null, i.children = null, i.tag = null, i.args = null, i.reverseArgs = null, i.choice = null, i.optional = !1, i.any = !1, i.obj = !1, i.use = null, i.useDecoder = null, i.key = null, i.default = null, i.explicit = null, i.implicit = null, i.contains = null, !i.parent && (i.children = [], this._wrap())
            }
            t.exports = Node;
            let h = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
            Node.prototype.clone = function() {
                let t = this._baseState,
                    e = {};
                h.forEach(function(r) {
                    e[r] = t[r]
                });
                let r = new this.constructor(e.parent);
                return r._baseState = e, r
            }, Node.prototype._wrap = function() {
                let t = this._baseState;
                f.forEach(function(e) {
                    this[e] = function() {
                        let r = new this.constructor(this);
                        return t.children.push(r), r[e].apply(r, arguments)
                    }
                }, this)
            }, Node.prototype._init = function(t) {
                let e = this._baseState;
                a(null === e.parent), t.call(this), e.children = e.children.filter(function(t) {
                    return t._baseState.parent === this
                }, this), a.equal(e.children.length, 1, "Root node can have only one child")
            }, Node.prototype._useArgs = function(t) {
                let e = this._baseState,
                    r = t.filter(function(t) {
                        return t instanceof this.constructor
                    }, this);
                t = t.filter(function(t) {
                    return !(t instanceof this.constructor)
                }, this), 0 !== r.length && (a(null === e.children), e.children = r, r.forEach(function(t) {
                    t._baseState.parent = this
                }, this)), 0 !== t.length && (a(null === e.args), e.args = t, e.reverseArgs = t.map(function(t) {
                    if ("object" != typeof t || t.constructor !== Object) return t;
                    let e = {};
                    return Object.keys(t).forEach(function(r) {
                        r == (0 | r) && (r |= 0);
                        let i = t[r];
                        e[i] = r
                    }), e
                }))
            }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(t) {
                Node.prototype[t] = function() {
                    let e = this._baseState;
                    throw Error(t + " not implemented for encoding: " + e.enc)
                }
            }), s.forEach(function(t) {
                Node.prototype[t] = function() {
                    let e = this._baseState,
                        r = Array.prototype.slice.call(arguments);
                    return a(null === e.tag), e.tag = t, this._useArgs(r), this
                }
            }), Node.prototype.use = function(t) {
                a(t);
                let e = this._baseState;
                return a(null === e.use), e.use = t, this
            }, Node.prototype.optional = function() {
                let t = this._baseState;
                return t.optional = !0, this
            }, Node.prototype.def = function(t) {
                let e = this._baseState;
                return a(null === e.default), e.default = t, e.optional = !0, this
            }, Node.prototype.explicit = function(t) {
                let e = this._baseState;
                return a(null === e.explicit && null === e.implicit), e.explicit = t, this
            }, Node.prototype.implicit = function(t) {
                let e = this._baseState;
                return a(null === e.explicit && null === e.implicit), e.implicit = t, this
            }, Node.prototype.obj = function() {
                let t = this._baseState,
                    e = Array.prototype.slice.call(arguments);
                return t.obj = !0, 0 !== e.length && this._useArgs(e), this
            }, Node.prototype.key = function(t) {
                let e = this._baseState;
                return a(null === e.key), e.key = t, this
            }, Node.prototype.any = function() {
                let t = this._baseState;
                return t.any = !0, this
            }, Node.prototype.choice = function(t) {
                let e = this._baseState;
                return a(null === e.choice), e.choice = t, this._useArgs(Object.keys(t).map(function(e) {
                    return t[e]
                })), this
            }, Node.prototype.contains = function(t) {
                let e = this._baseState;
                return a(null === e.use), e.contains = t, this
            }, Node.prototype._decode = function(t, e) {
                let r;
                let i = this._baseState;
                if (null === i.parent) return t.wrapResult(i.children[0]._decode(t, e));
                let n = i.default,
                    a = !0,
                    s = null;
                if (null !== i.key && (s = t.enterKey(i.key)), i.optional) {
                    let r = null;
                    if (null !== i.explicit ? r = i.explicit : null !== i.implicit ? r = i.implicit : null !== i.tag && (r = i.tag), null !== r || i.any) {
                        if (a = this._peekTag(t, r, i.any), t.isError(a)) return a
                    } else {
                        let r = t.save();
                        try {
                            null === i.choice ? this._decodeGeneric(i.tag, t, e) : this._decodeChoice(t, e), a = !0
                        } catch (t) {
                            a = !1
                        }
                        t.restore(r)
                    }
                }
                if (i.obj && a && (r = t.enterObject()), a) {
                    if (null !== i.explicit) {
                        let e = this._decodeTag(t, i.explicit);
                        if (t.isError(e)) return e;
                        t = e
                    }
                    let r = t.offset;
                    if (null === i.use && null === i.choice) {
                        let e;
                        i.any && (e = t.save());
                        let r = this._decodeTag(t, null !== i.implicit ? i.implicit : i.tag, i.any);
                        if (t.isError(r)) return r;
                        i.any ? n = t.raw(e) : t = r
                    }
                    if (e && e.track && null !== i.tag && e.track(t.path(), r, t.length, "tagged"), e && e.track && null !== i.tag && e.track(t.path(), t.offset, t.length, "content"), i.any || (n = null === i.choice ? this._decodeGeneric(i.tag, t, e) : this._decodeChoice(t, e)), t.isError(n)) return n;
                    if (!i.any && null === i.choice && null !== i.children && i.children.forEach(function(r) {
                            r._decode(t, e)
                        }), i.contains && ("octstr" === i.tag || "bitstr" === i.tag)) {
                        let r = new o(n);
                        n = this._getUse(i.contains, t._reporterState.obj)._decode(r, e)
                    }
                }
                return i.obj && a && (n = t.leaveObject(r)), null !== i.key && (null !== n || !0 === a) ? t.leaveKey(s, i.key, n) : null !== s && t.exitKey(s), n
            }, Node.prototype._decodeGeneric = function(t, e, r) {
                let i = this._baseState;
                if ("seq" === t || "set" === t) return null;
                if ("seqof" === t || "setof" === t) return this._decodeList(e, t, i.args[0], r);
                if (/str$/.test(t)) return this._decodeStr(e, t, r);
                if ("objid" === t && i.args) return this._decodeObjid(e, i.args[0], i.args[1], r);
                else if ("objid" === t) return this._decodeObjid(e, null, null, r);
                else if ("gentime" === t || "utctime" === t) return this._decodeTime(e, t, r);
                else if ("null_" === t) return this._decodeNull(e, r);
                else if ("bool" === t) return this._decodeBool(e, r);
                else if ("objDesc" === t) return this._decodeStr(e, t, r);
                else if ("int" === t || "enum" === t) return this._decodeInt(e, i.args && i.args[0], r);
                return null !== i.use ? this._getUse(i.use, e._reporterState.obj)._decode(e, r) : e.error("unknown tag: " + t)
            }, Node.prototype._getUse = function(t, e) {
                let r = this._baseState;
                return r.useDecoder = this._use(t, e), a(null === r.useDecoder._baseState.parent), r.useDecoder = r.useDecoder._baseState.children[0], r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(), r.useDecoder._baseState.implicit = r.implicit), r.useDecoder
            }, Node.prototype._decodeChoice = function(t, e) {
                let r = this._baseState,
                    i = null,
                    n = !1;
                return (Object.keys(r.choice).some(function(o) {
                    let a = t.save(),
                        s = r.choice[o];
                    try {
                        let r = s._decode(t, e);
                        if (t.isError(r)) return !1;
                        i = {
                            type: o,
                            value: r
                        }, n = !0
                    } catch (e) {
                        return t.restore(a), !1
                    }
                    return !0
                }, this), n) ? i : t.error("Choice not matched")
            }, Node.prototype._createEncoderBuffer = function(t) {
                return new n(t, this.reporter)
            }, Node.prototype._encode = function(t, e, r) {
                let i = this._baseState;
                if (null !== i.default && i.default === t) return;
                let n = this._encodeValue(t, e, r);
                if (void 0 !== n) {
                    if (!this._skipDefault(n, e, r)) return n
                }
            }, Node.prototype._encodeValue = function(t, e, r) {
                let n = this._baseState;
                if (null === n.parent) return n.children[0]._encode(t, e || new i);
                let o = null;
                if (this.reporter = e, n.optional && void 0 === t) {
                    if (null === n.default) return;
                    t = n.default
                }
                let a = null,
                    s = !1;
                if (n.any) o = this._createEncoderBuffer(t);
                else if (n.choice) o = this._encodeChoice(t, e);
                else if (n.contains) a = this._getUse(n.contains, r)._encode(t, e), s = !0;
                else if (n.children) a = n.children.map(function(r) {
                    if ("null_" === r._baseState.tag) return r._encode(null, e, t);
                    if (null === r._baseState.key) return e.error("Child should have a key");
                    let i = e.enterKey(r._baseState.key);
                    if ("object" != typeof t) return e.error("Child expected, but input is not object");
                    let n = r._encode(t[r._baseState.key], e, t);
                    return e.leaveKey(i), n
                }, this).filter(function(t) {
                    return t
                }), a = this._createEncoderBuffer(a);
                else if ("seqof" === n.tag || "setof" === n.tag) {
                    if (!(n.args && 1 === n.args.length)) return e.error("Too many args for : " + n.tag);
                    if (!Array.isArray(t)) return e.error("seqof/setof, but data is not Array");
                    let r = this.clone();
                    r._baseState.implicit = null, a = this._createEncoderBuffer(t.map(function(r) {
                        let i = this._baseState;
                        return this._getUse(i.args[0], t)._encode(r, e)
                    }, r))
                } else null !== n.use ? o = this._getUse(n.use, r)._encode(t, e) : (a = this._encodePrimitive(n.tag, t), s = !0);
                if (!n.any && null === n.choice) {
                    let t = null !== n.implicit ? n.implicit : n.tag,
                        r = null === n.implicit ? "universal" : "context";
                    null === t ? null === n.use && e.error("Tag could be omitted only for .use()") : null === n.use && (o = this._encodeComposite(t, s, r, a))
                }
                return null !== n.explicit && (o = this._encodeComposite(n.explicit, !1, "context", o)), o
            }, Node.prototype._encodeChoice = function(t, e) {
                let r = this._baseState,
                    i = r.choice[t.type];
                return !i && a(!1, t.type + " not found in " + JSON.stringify(Object.keys(r.choice))), i._encode(t.value, e)
            }, Node.prototype._encodePrimitive = function(t, e) {
                let r = this._baseState;
                if (/str$/.test(t)) return this._encodeStr(e, t);
                if ("objid" === t && r.args) return this._encodeObjid(e, r.reverseArgs[0], r.args[1]);
                if ("objid" === t) return this._encodeObjid(e, null, null);
                else if ("gentime" === t || "utctime" === t) return this._encodeTime(e, t);
                else if ("null_" === t) return this._encodeNull();
                else if ("int" === t || "enum" === t) return this._encodeInt(e, r.args && r.reverseArgs[0]);
                else if ("bool" === t) return this._encodeBool(e);
                else if ("objDesc" === t) return this._encodeStr(e, t);
                else throw Error("Unsupported tag: " + t)
            }, Node.prototype._isNumstr = function(t) {
                return /^[0-9 ]*$/.test(t)
            }, Node.prototype._isPrintstr = function(t) {
                return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(t)
            }