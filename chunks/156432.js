e.exports = function(e) {
  let t = e.regex,
    a = {
      className: "variable",
      variants: [{
        begin: /\$\d+/
      }, {
        begin: /\$\{\w+\}/
      }, {
        begin: t.concat(/[$@]/, e.UNDERSCORE_IDENT_RE)
      }]
    },
    n = {
      endsWithParent: !0,
      keywords: {
        $pattern: /[a-z_]{2,}|\/dev\/poll/,
        literal: ["on", "off", "yes", "no", "true", "false", "none", "blocked", "debug", "info", "notice", "warn", "error", "crit", "select", "break", "last", "permanent", "redirect", "kqueue", "rtsig", "epoll", "poll", "/dev/poll"]
      },
      relevance: 0,
      illegal: "=>",
      contains: [e.HASH_COMMENT_MODE, {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE, a],
        variants: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /'/,
          end: /'/
        }]
      }, {
        begin: "([a-z]+):/",
        end: "\\s",
        endsWithParent: !0,
        excludeEnd: !0,
        contains: [a]
      }, {
        className: "regexp",
        contains: [e.BACKSLASH_ESCAPE, a],
        variants: [{
          begin: "\\s\\^",
          end: "\\s|\\{|;",
          returnEnd: !0
        }, {
          begin: "~\\*?\\s+",
          end: "\\s|\\{|;",
          returnEnd: !0
        }, {
          begin: "\\*(\\.[a-z\\-]+)+"
        }, {
          begin: "([a-z\\-]+\\.)+\\*"
        }]
      }, {
        className: "number",
        begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
      }, {
        className: "number",
        begin: "\\b\\d+[kKmMgGdshdwy]?\\b",
        relevance: 0
      }, a]
    };
  return {
    name: "Nginx config",
    aliases: ["nginxconf"],
    contains: [e.HASH_COMMENT_MODE, {
      beginKeywords: "upstream location",
      end: /;|\{/,
      contains: n.contains,
      keywords: {
        section: "upstream location"
      }
    }, {
      className: "section",
      begin: t.concat(e.UNDERSCORE_IDENT_RE + t.lookahead(/\s+\{/)),
      relevance: 0
    }, {
      begin: t.lookahead(e.UNDERSCORE_IDENT_RE + "\\s"),
      end: ";|\\{",
      contains: [{
        className: "attribute",
        begin: e.UNDERSCORE_IDENT_RE,
        starts: n
      }],
      relevance: 0
    }],
    illegal: "[^\\s\\}\\{]"
  }
}