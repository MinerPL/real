            "use strict";
            n.r(t), n.d(t, {
                UploadErrorCodes: function() {
                    return r
                },
                default: function() {
                    return l
                }
            });
            var i, r, s = n("782340");
            (i = r || (r = {}))[i.GENERAL = 0] = "GENERAL", i[i.NO_FILE = 1] = "NO_FILE", i[i.PROGRESS = 2] = "PROGRESS", i[i.UPLOAD = 3] = "UPLOAD", i[i.READ = 4] = "READ";
            var l = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }