            "use strict";
            n.r(e), n.d(e, {
                Transaction: function() {
                    return o
                }
            }), n("808653");
            var r = n("103787"),
                i = n("369590"),
                a = n("89620"),
                s = n("693479");
            class o extends s.Span {
                __init() {
                    this._measurements = {}
                }
                __init2() {
                    this._contexts = {}
                }
                __init3() {
                    this._frozenDynamicSamplingContext = void 0
                }
                get name() {
                    return this._name
                }
                set name(t) {
                    this.setName(t)
                }
                setName(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "custom";
                    this._name = t, this.metadata.source = e
                }
                initSpanRecorder() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                    !this.spanRecorder && (this.spanRecorder = new s.SpanRecorder(t)), this.spanRecorder.add(this)
                }
                setContext(t, e) {
                    null === e ? delete this._contexts[t] : this._contexts[t] = e
                }
                setMeasurement(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    this._measurements[t] = {
                        value: e,
                        unit: n
                    }
                }
                setMetadata(t) {
                    this.metadata = {
                        ...this.metadata,
                        ...t
                    }
                }
                finish(t) {
                    if (void 0 !== this.endTimestamp) return;
                    !this.name && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(t);
                    let e = this._hub.getClient();
                    if (e && e.emit && e.emit("finishTransaction", this), !0 !== this.sampled) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "transaction");
                        return
                    }
                    let n = this.spanRecorder ? this.spanRecorder.spans.filter(t => t !== this && t.endTimestamp) : [];
                    this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce((t, e) => t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t).endTimestamp);
                    let i = this.metadata,
                        a = {
                            contexts: {
                                ...this._contexts,
                                trace: this.getTraceContext()
                            },
                            spans: n,
                            start_timestamp: this.startTimestamp,
                            tags: this.tags,
                            timestamp: this.endTimestamp,
                            transaction: this.name,
                            type: "transaction",
                            sdkProcessingMetadata: {
                                ...i,
                                dynamicSamplingContext: this.getDynamicSamplingContext()
                            },
                            ...i.source && {
                                transaction_info: {
                                    source: i.source
                                }
                            }
                        },
                        s = Object.keys(this._measurements).length > 0;
                    return s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), a.measurements = this._measurements), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Finishing ".concat(this.op, " transaction: ").concat(this.name, ".")), this._hub.captureEvent(a)
                }
                toContext() {
                    let t = super.toContext();
                    return (0, r.dropUndefinedKeys)({
                        ...t,
                        name: this.name,
                        trimEnd: this._trimEnd
                    })
                }
                updateWithContext(t) {
                    return super.updateWithContext(t), this.name = t.name || "", this._trimEnd = t.trimEnd, this
                }
                getDynamicSamplingContext() {
                    if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
                    let t = this._hub || (0, i.getCurrentHub)(),
                        e = t.getClient();
                    if (!e) return {};
                    let n = t.getScope(),
                        r = (0, a.getDynamicSamplingContextFromClient)(this.traceId, e, n),
                        s = this.metadata.sampleRate;
                    void 0 !== s && (r.sample_rate = "".concat(s));
                    let o = this.metadata.source;
                    return o && "url" !== o && (r.transaction = this.name), void 0 !== this.sampled && (r.sampled = String(this.sampled)), r
                }
                setHub(t) {
                    this._hub = t
                }
                constructor(t, e) {
                    super(t), o.prototype.__init.call(this), o.prototype.__init2.call(this), o.prototype.__init3.call(this), this._hub = e || (0, i.getCurrentHub)(), this._name = t.name || "", this.metadata = {
                        source: "custom",
                        ...t.metadata,
                        spanMetadata: {}
                    }, this._trimEnd = t.trimEnd, this.transaction = this;
                    let n = this.metadata.dynamicSamplingContext;
                    n && (this._frozenDynamicSamplingContext = {
                        ...n
                    })
                }
            }