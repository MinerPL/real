            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, r = n("773179"),
                s = n.n(r);

            function a(e, t, n, i) {
                null != t && e.splice(s.sortedIndexBy(e, t, i), 1), null != n && e.splice(s.sortedIndexBy(e, n, i), 0, n)
            }
            let o = [];
            i = class {
                get version() {
                    return this._version
                }
                indexes() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!e && this.dirty) {
                        let e = {};
                        for (let [t, n] of Object.entries(this.valueIndexes)) e[t] = [...n];
                        this.valueIndexes = e, this.dirty = !1
                    }
                    return this.valueIndexes
                }
                keys() {
                    return this.valueMap.keys()
                }
                values(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null == e ? this.valueArray : null !== (t = this.indexes(n)[e]) && void 0 !== t ? t : o
                }
                size(e) {
                    var t, n;
                    return null == e ? this.valueArray.length : null !== (n = null === (t = this.valueIndexes[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0
                }
                clear() {
                    this.valueMap.clear(), this.valueArray = [], this.valueIndexes = {}
                }
                has(e) {
                    return this.valueMap.has(e)
                }
                get(e) {
                    return this.valueMap.get(e)
                }
                set(e, t) {
                    let n = this.get(e);
                    return !(null == n && null == t || null != n && null != t && this.isEqual(n, t)) && (null != t ? this.valueMap.set(e, t) : this.valueMap.delete(e), a(this.valueArray, n, t, this.sortBy), null != n && this.indexBy(n).forEach(e => a(this.getIndex(e), n, null, this.sortBy)), null != t && this.indexBy(t).forEach(e => a(this.getIndex(e), null, t, this.sortBy)), this.dirty = !0, this._version++, !0)
                }
                delete(e) {
                    return this.set(e, null)
                }
                getIndex(e) {
                    let t = this.valueIndexes[e];
                    return null == t && (t = [], this.valueIndexes[e] = t), t
                }
                constructor(e, t, n = (e, t) => e === t) {
                    this.valueMap = new Map, this.valueArray = [], this.valueIndexes = {}, this.dirty = !1, this._version = 0, this.indexBy = e, this.sortBy = t, this.isEqual = n
                }
            }