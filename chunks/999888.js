            "use strict";
            n.r(t), n.d(t, {
                isDragTrigger: function() {
                    return u
                },
                default: function() {
                    return d
                }
            }), n("70102"), n("222007");
            var i = n("263293"),
                r = n("141094"),
                s = n("702843");
            let a = {
                DROP: [" ", "Enter"],
                CANCEL_DRAG: ["Escape"]
            };

            function o(e) {
                e.preventDefault(), e.stopImmediatePropagation()
            }

            function l(e, t) {
                return t.includes(e.key)
            }

            function u(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return !!n && !1 === e.isTrusted || (null === (t = e.key) || void 0 === t ? void 0 : t.toLowerCase()) === "d" && (e.metaKey || e.ctrlKey) && !e.altKey
            }
            class c {
                setup() {
                    var e;
                    if (c.isSetUp) throw Error("Cannot have two Keyboard backends at the same time.");
                    c.isSetUp = !0, this._handlingFirstEvent = !0, null === (e = this.context.window) || void 0 === e || e.addEventListener("keydown", this.handleGlobalKeyDown, {
                        capture: !0
                    })
                }
                teardown() {
                    var e;
                    c.isSetUp = !1, null === (e = this.context.window) || void 0 === e || e.removeEventListener("keydown", this.handleGlobalKeyDown, {
                        capture: !0
                    }), this.endDrag()
                }
                setDndMode(e) {
                    var t;
                    null === (t = this.options) || void 0 === t || t.onDndModeChanged(e)
                }
                profile() {
                    return {
                        sourcePreviewNodes: this.sourcePreviewNodes.size,
                        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                        sourceNodes: this.sourceNodes.size
                    }
                }
                connectDragSource(e, t) {
                    let n = this.handleDragStart.bind(this, e);
                    return this.sourceNodes.set(e, t), t.addEventListener("keydown", n), () => {
                        this.sourceNodes.delete(e), t.removeEventListener("keydown", n)
                    }
                }
                connectDragPreview(e, t, n) {
                    return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t), () => {
                        this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e)
                    }
                }
                connectDropTarget(e, t) {
                    return this.targetNodes.set(e, t), t.addEventListener("keydown", this.handleDrop), t.tabIndex = Math.max(-1, t.tabIndex), () => {
                        this.targetNodes.delete(e), t.removeEventListener("keydown", this.handleDrop)
                    }
                }
                endDrag(e) {
                    var t;
                    null != e && o(e), null === (t = this._navigator) || void 0 === t || t.disconnect(), this._previewer.clear(), this.monitor.isDragging() && this.actions.endDrag(), this.setDndMode(!1)
                }
                constructor(e, t, n) {
                    this._handlingFirstEvent = !1, this.handleGlobalKeyDown = e => {
                        this.monitor.isDragging() && l(e, a.CANCEL_DRAG) && (this.endDrag(e), this._announcer.announceCancel())
                    }, this.getSourceClientOffset = e => (function(e) {
                        if (null == e) return {
                            x: 0,
                            y: 0
                        };
                        let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
                        if (null == t) return {
                            x: 0,
                            y: 0
                        };
                        let {
                            top: n,
                            left: i
                        } = t.getBoundingClientRect();
                        return {
                            x: i,
                            y: n
                        }
                    })(this.sourceNodes.get(e)), this.handleDragStart = (e, t) => {
                        var n;
                        if (!u(t, this._handlingFirstEvent)) return;
                        if (this._handlingFirstEvent = !1, !this.monitor.canDragSource(e)) return;
                        if (this.monitor.isDragging()) {
                            this.actions.publishDragSource();
                            return
                        }
                        o(t);
                        let i = this.sourceNodes.get(e);
                        null != i && (this._navigator = new s.DropTargetNavigator(i, this.targetNodes, this.manager, this._previewer, this._announcer), this._previewer.createDragPreview(null !== (n = this.sourcePreviewNodes.get(e)) && void 0 !== n ? n : i), this.actions.beginDrag([e], {
                            clientOffset: this.getSourceClientOffset(e),
                            getSourceClientOffset: this.getSourceClientOffset,
                            publishSource: !1
                        }), this._previewer.render(this.monitor), this.setDndMode(!0), this._announcer.announceDrag(i, e))
                    }, this.handleDrop = e => {
                        l(e, a.DROP) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop())
                    }, this.manager = e, this.actions = e.getActions(), this.monitor = e.getMonitor(), this.context = t, this.options = n, this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this._previewer = new r.default(t.document), this._announcer = new i.default(null == n ? void 0 : n.announcer)
                }
            }
            var d = (e, t, n) => new c(e, t, n)