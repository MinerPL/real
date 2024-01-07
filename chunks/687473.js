            "use strict";
            e.exports = function e(t) {
                if (!(this instanceof e)) return new e(t);
                this.err = null, this.value = null;
                try {
                    this.value = JSON.parse(t)
                } catch (e) {
                    this.err = e
                }
            }