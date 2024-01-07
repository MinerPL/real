            t.exports = function(t) {
                for (var e, r = t.length; r--;)
                    if (255 === (e = t.readUInt8(r))) t.writeUInt8(0, r);
                    else {
                        e++, t.writeUInt8(e, r);
                        break
                    }
            }