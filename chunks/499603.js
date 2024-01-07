            "use strict";

            function r(e, t, n) {
                this.locales = e, this.formats = t, this.pluralFn = n
            }

            function a(e) {
                this.id = e
            }

            function o(e, t, n, r, a) {
                this.id = e, this.useOrdinal = t, this.offset = n, this.options = r, this.pluralFn = a
            }

            function i(e, t, n, r) {
                this.id = e, this.offset = t, this.numberFormat = n, this.string = r
            }

            function s(e, t) {
                this.id = e, this.options = t
            }
            n("70102"), n("424973"), n("781738"), t.default = r, r.prototype.compile = function(e) {
                return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, this.compileMessage(e)
            }, r.prototype.compileMessage = function(e) {
                if (!(e && "messageFormatPattern" === e.type)) throw Error('Message AST is not of type: "messageFormatPattern"');
                var t, n, r, a = e.elements,
                    o = [];
                for (t = 0, n = a.length; t < n; t += 1) switch ((r = a[t]).type) {
                    case "messageTextElement":
                        o.push(this.compileMessageText(r));
                        break;
                    case "argumentElement":
                        o.push(this.compileArgument(r));
                        break;
                    default:
                        throw Error("Message element does not have a valid type")
                }
                return o
            }, r.prototype.compileMessageText = function(e) {
                return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (!this.pluralNumberFormat && (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new i(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, "#")
            }, r.prototype.compileArgument = function(e) {
                var t = e.format;
                if (!t) return new a(e.id);
                var n, r = this.formats,
                    i = this.locales,
                    u = this.pluralFn;
                switch (t.type) {
                    case "numberFormat":
                        return n = r.number[t.style], {
                            id: e.id,
                            format: new Intl.NumberFormat(i, n).format
                        };
                    case "dateFormat":
                        return n = r.date[t.style], {
                            id: e.id,
                            format: new Intl.DateTimeFormat(i, n).format
                        };
                    case "timeFormat":
                        return n = r.time[t.style], {
                            id: e.id,
                            format: new Intl.DateTimeFormat(i, n).format
                        };
                    case "pluralFormat":
                        return n = this.compileOptions(e), new o(e.id, t.ordinal, t.offset, n, u);
                    case "selectFormat":
                        return n = this.compileOptions(e), new s(e.id, n);
                    default:
                        throw Error("Message element does not have a valid format type")
                }
            }, r.prototype.compileOptions = function(e) {
                var t, n, r, a = e.format,
                    o = a.options,
                    i = {};
                for (this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === a.type ? e : null, t = 0, n = o.length; t < n; t += 1) i[(r = o[t]).selector] = this.compileMessage(r.value);
                return this.currentPlural = this.pluralStack.pop(), i
            }, a.prototype.format = function(e) {
                return e ? "string" == typeof e ? e : String(e) : ""
            }, o.prototype.getOption = function(e) {
                var t = this.options;
                return t["=" + e] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other
            }, i.prototype.format = function(e) {
                var t = this.numberFormat.format(e - this.offset);
                return this.string.replace(/(^|[^\\])#/g, "$1" + t).replace(/\\#/g, "#")
            }, s.prototype.getOption = function(e) {
                var t = this.options;
                return t[e] || t.other
            }