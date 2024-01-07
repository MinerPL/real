            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007"), n("424973");
            var s, i = n("44170"),
                a = n("773336"),
                u = n("50885"),
                o = n("13798"),
                d = n("49111");
            let r = [],
                l = (e, t, n) => {
                    let s = (0, a.isWindows)() ? 0 : 1;
                    (e !== d.KeyboardDeviceTypes.MOUSE_BUTTON || n !== s) && r.forEach(s => s._handleEvent(e, t, n))
                };
            s = class extends i.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (r = r.filter(e => e !== this)).length && u.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, o.toString)(this.combo)
                }
                _handleEvent(e, t, n) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [s, i] = t;
                        return !(s === e && i === n)
                    }) : (this.combo.push([e, n, (0, o.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], r.push(this), 1 === r.length && u.default.setOnInputEventCallback(l)
                }
            }