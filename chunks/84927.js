            var a = /\s/;
            e.exports = function(e) {
                for (var t = e.length; t-- && a.test(e.charAt(t)););
                return t
            }