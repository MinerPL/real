t.exports = function(t) {
  for (var e, s = t.length; s--;)
    if (255 === (e = t.readUInt8(s))) t.writeUInt8(0, s);
    else {
      e++, t.writeUInt8(e, s);
      break
    }
}