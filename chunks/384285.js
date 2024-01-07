            a("222007");
            e.exports = function(e) {
                let t = e.regex,
                    a = /[dualxmsipngr]{0,12}/,
                    n = {
                        $pattern: /[\w.]+/,
                        keyword: "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
                    },
                    i = {
                        className: "subst",
                        begin: "[$@]\\{",
                        end: "\\}",
                        keywords: n
                    },
                    r = {
                        begin: /->\{/,
                        end: /\}/
                    },
                    o = {
                        variants: [{
                            begin: /\$\d/
                        }, {
                            begin: t.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])")
                        }, {
                            begin: /[$%@][^\s\w{]/,
                            relevance: 0
                        }]
                    },
                    s = [e.BACKSLASH_ESCAPE, i, o],
                    l = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
                    c = function(e, n) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\\1",
                            r = "\\1" === i ? i : t.concat(i, n);
                        return t.concat(t.concat("(?:", e, ")"), n, /(?:\\.|[^\\\/])*?/, r, /(?:\\.|[^\\\/])*?/, i, a)
                    },
                    _ = (e, n, i) => t.concat(t.concat("(?:", e, ")"), n, /(?:\\.|[^\\\/])*?/, i, a),
                    d = [o, e.HASH_COMMENT_MODE, e.COMMENT(/^=\w/, /=cut/, {
                        endsWithParent: !0
                    }), r, {
                        className: "string",
                        contains: s,
                        variants: [{
                            begin: "q[qwxr]?\\s*\\(",
                            end: "\\)",
                            relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*\\[",
                            end: "\\]",
                            relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*\\{",
                            end: "\\}",
                            relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*\\|",
                            end: "\\|",
                            relevance: 5
                        }, {
                            begin: "q[qwxr]?\\s*<",
                            end: ">",
                            relevance: 5
                        }, {
                            begin: "qw\\s+q",
                            end: "q",
                            relevance: 5
                        }, {
                            begin: "'",
                            end: "'",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: '"',
                            end: '"'
                        }, {
                            begin: "`",
                            end: "`",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: /\{\w+\}/,
                            relevance: 0
                        }, {
                            begin: "-?\\w+\\s*=>",
                            relevance: 0
                        }]
                    }, {
                        className: "number",
                        begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                        relevance: 0
                    }, {
                        begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                        keywords: "split return print reverse grep",
                        relevance: 0,
                        contains: [e.HASH_COMMENT_MODE, {
                            className: "regexp",
                            variants: [{
                                begin: c("s|tr|y", t.either(...l, {
                                    capture: !0
                                }))
                            }, {
                                begin: c("s|tr|y", "\\(", "\\)")
                            }, {
                                begin: c("s|tr|y", "\\[", "\\]")
                            }, {
                                begin: c("s|tr|y", "\\{", "\\}")
                            }],
                            relevance: 2
                        }, {
                            className: "regexp",
                            variants: [{
                                begin: /(m|qr)\/\//,
                                relevance: 0
                            }, {
                                begin: _("(?:m|qr)?", /\//, /\//)
                            }, {
                                begin: _("m|qr", t.either(...l, {
                                    capture: !0
                                }), /\1/)
                            }, {
                                begin: _("m|qr", /\(/, /\)/)
                            }, {
                                begin: _("m|qr", /\[/, /\]/)
                            }, {
                                begin: _("m|qr", /\{/, /\}/)
                            }]
                        }]
                    }, {
                        className: "function",
                        beginKeywords: "sub",
                        end: "(\\s*\\(.*?\\))?[;{]",
                        excludeEnd: !0,
                        relevance: 5,
                        contains: [e.TITLE_MODE]
                    }, {
                        begin: "-\\w\\b",
                        relevance: 0
                    }, {
                        begin: "^__DATA__$",
                        end: "^__END__$",
                        subLanguage: "mojolicious",
                        contains: [{
                            begin: "^@@.*",
                            end: "$",
                            className: "comment"
                        }]
                    }];
                return i.contains = d, r.contains = d, {
                    name: "Perl",
                    aliases: ["pl", "pm"],
                    keywords: n,
                    contains: d
                }
            }