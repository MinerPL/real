a("222007");
e.exports = function(e) {
  let t = e.regex,
    a = ["absolute_url", "asset|0", "asset_version", "attribute", "block", "constant", "controller|0", "country_timezones", "csrf_token", "cycle", "date", "dump", "expression", "form|0", "form_end", "form_errors", "form_help", "form_label", "form_rest", "form_row", "form_start", "form_widget", "html_classes", "include", "is_granted", "logout_path", "logout_url", "max", "min", "parent", "path|0", "random", "range", "relative_path", "render", "render_esi", "source", "template_from_string", "url|0"],
    n = ["apply", "autoescape", "block", "cache", "deprecated", "do", "embed", "extends", "filter", "flush", "for", "form_theme", "from", "if", "import", "include", "macro", "sandbox", "set", "stopwatch", "trans", "trans_default_domain", "transchoice", "use", "verbatim", "with"];
  n = n.concat(n.map(e => "end".concat(e)));
  let i = {
      scope: "string",
      variants: [{
        begin: /'/,
        end: /'/
      }, {
        begin: /"/,
        end: /"/
      }]
    },
    r = {
      scope: "number",
      match: /\d+/
    },
    o = {
      beginKeywords: a.join(" "),
      keywords: {
        name: a
      },
      relevance: 0,
      contains: [{
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        contains: [i, r]
      }]
    },
    s = {
      match: /\|(?=[A-Za-z_]+:?)/,
      beginScope: "punctuation",
      relevance: 0,
      contains: [{
        match: /[A-Za-z_]+:?/,
        keywords: ["abs", "abbr_class", "abbr_method", "batch", "capitalize", "column", "convert_encoding", "country_name", "currency_name", "currency_symbol", "data_uri", "date", "date_modify", "default", "escape", "file_excerpt", "file_link", "file_relative", "filter", "first", "format", "format_args", "format_args_as_text", "format_currency", "format_date", "format_datetime", "format_file", "format_file_from_text", "format_number", "format_time", "html_to_markdown", "humanize", "inky_to_html", "inline_css", "join", "json_encode", "keys", "language_name", "last", "length", "locale_name", "lower", "map", "markdown", "markdown_to_html", "merge", "nl2br", "number_format", "raw", "reduce", "replace", "reverse", "round", "slice", "slug", "sort", "spaceless", "split", "striptags", "timezone_name", "title", "trans", "transchoice", "trim", "u|0", "upper", "url_encode", "yaml_dump", "yaml_encode"]
      }]
    },
    l = (e, a) => {
      let {
        relevance: n
      } = a;
      return {
        beginScope: {
          1: "template-tag",
          3: "name"
        },
        relevance: n || 2,
        endScope: "template-tag",
        begin: [/\{%/, /\s*/, t.either(...e)],
        end: /%\}/,
        keywords: "in",
        contains: [s, o, i, r]
      }
    },
    c = l(n, {
      relevance: 2
    }),
    _ = l([/[a-z_]+/], {
      relevance: 1
    });
  return {
    name: "Twig",
    aliases: ["craftcms"],
    case_insensitive: !0,
    subLanguage: "xml",
    contains: [e.COMMENT(/\{#/, /#\}/), c, _, {
      className: "template-variable",
      begin: /\{\{/,
      end: /\}\}/,
      contains: ["self", s, o, i, r]
    }]
  }
}