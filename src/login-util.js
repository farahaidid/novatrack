(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "+u5n": function (t, n, e) {
            "use strict";

            function o() {
                var t, n = navigator.userAgent,
                    e = ""; - 1 != n.indexOf("MSIE") && /MSIE (\d+\.\d+);/.test(n) || -1 != n.toLowerCase().indexOf("trident") && /Trident.*rv[ :]*(\d+\.\d+)/.test(n) || document.documentMode ? e = "IE" : /OPR\/(\d+\.\d+)/i.test(n) ? e = "OPERA" : /Opera[/\s](\d+\.\d+)/.test(n) ? (e = "OPERA", t = n.replace(/^.*Version\/([\d.]+).*$/i, "$1")) : /Firefox[/\s](\d+\.\d+)/.test(n) || "undefined" != typeof InstallTrigger ? e = "FF" : n.indexOf("Chrome") > -1 && -1 == n.indexOf("Edge") ? (e = "CHROME", t = n.replace(/^.*Chrome\/([\d.]+).*$/i, "$1")) : window.chrome && -1 == n.indexOf("Edge") ? (e = "CHROME", n.indexOf("rowser") > -1 && (t = n.replace(/^.*rowser\/([\d.]+).*$/i, "$1") || "")) : (/Android/i.test(n) ? (e = "Android", t = n.replace(/^.*Version\/([\d.]+).*$/i, "$1")) : /BlackBerry\/(\d+\.\d+)/i.test(n) ? e = "BlackBerry" : Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? (e = "SAFARI", t = n.replace(/^.*Safari\/([\d.]+).*$/i, "$1")) : /Opera Mini\/(\d+\.\d+)/i.test(n) || window.opera ? e = "OperaMini" : /IEMobile\/(\d+\.\d+)/i.test(n) ? e = "IEMobile" : window.StyleMedia || n.indexOf("Edge") > -1 ? e = "EDGE" : /NokiaBrowser\/(\d+\.\d+)/i.test(n) ? (e = "NokiaBrowser", t = n.replace(/^.*NokiaBrowser\/([\d.]+).*$/i, "$1")) : e = "N/A", t = t || "N/A"), t = "" + (t || Number(RegExp.$1));
                var o = "unknown",
                    i = [{
                        s: "Win10",
                        r: /(Windows 10.0|Windows NT 10.0)/
                    }, {
                        s: "Win8.1",
                        r: /(Windows 8.1|Windows NT 6.3)/
                    }, {
                        s: "Win8",
                        r: /(Windows 8|Windows NT 6.2)/
                    }, {
                        s: "Win7",
                        r: /(Windows 7|Windows NT 6.1)/
                    }, {
                        s: "WinVista",
                        r: /Windows NT 6.0/
                    }, {
                        s: "WinServer2003",
                        r: /Windows NT 5.2/
                    }, {
                        s: "WinXP",
                        r: /(Windows NT 5.1|Windows XP)/
                    }, {
                        s: "Win2000",
                        r: /(Windows NT 5.0|Windows 2000)/
                    }, {
                        s: "WinME",
                        r: /(Win 9x 4.90|Windows ME)/
                    }, {
                        s: "Win98",
                        r: /(Windows 98|Win98)/
                    }, {
                        s: "Win95",
                        r: /(Windows 95|Win95|Windows_95)/
                    }, {
                        s: "WinNT 4.0",
                        r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
                    }, {
                        s: "WinCE",
                        r: /Windows CE/
                    }, {
                        s: "Win3.11",
                        r: /Win16/
                    }, {
                        s: "Android",
                        r: /Android/
                    }, {
                        s: "OpenBSD",
                        r: /OpenBSD/
                    }, {
                        s: "SunOS",
                        r: /SunOS/
                    }, {
                        s: "Linux",
                        r: /(Linux|X11)/
                    }, {
                        s: "iOS",
                        r: /(iPhone|iPad|iPod)/
                    }, {
                        s: "BlackBerry",
                        r: /(BB)/
                    }, {
                        s: "MacOSX",
                        r: /Mac OS X/
                    }, {
                        s: "MacOS",
                        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                    }, {
                        s: "QNX",
                        r: /QNX/
                    }, {
                        s: "UNIX",
                        r: /UNIX/
                    }, {
                        s: "Nokia",
                        r: /Nokia/
                    }, {
                        s: "BeOS",
                        r: /BeOS/
                    }, {
                        s: "OS/2",
                        r: /OS\/2/
                    }, {
                        s: "Search Bot",
                        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                    }];
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var r = i[a];
                        if (r.r.test(n)) {
                            o = r.s;
                            break
                        }
                    } return {
                    browser: e,
                    version: t,
                    userSystem: o
                }
            }
            e.d(n, "a", (function () {
                return o
            }))
        },
        "/FwV": function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return i
            })), e.d(n, "b", (function () {
                return a
            }));
            var o = e("0Zvi");

            function i() {
                var t;
                return navigator.userAgent.indexOf(" MSIE ") > -1 || navigator.userAgent.indexOf(" Trident/") > -1 ? (t = (t = navigator.userAgent.replace(/^.*MSIE\s([\d.]+).*$/i, "$1")).split("."), -1 === navigator.userAgent.indexOf(" MSIE ") && navigator.userAgent.indexOf(" Trident/7.") > -1 || !!(parseInt(t[0], 10) && parseInt(t[0], 10) >= 9)) : navigator.userAgent.indexOf(" Firefox/") > -1 ? (t = (t = navigator.userAgent.replace(/^.*Firefox\/([\d.]+).*$/i, "$1")).split("."), parseInt(t[0], 10) >= 17) : navigator.userAgent.indexOf("Chrome") > -1 ? (t = (t = navigator.userAgent.replace(/^.*Chrome\/([\d.]+).*$/i, "$1")).split("."), parseInt(t[0], 10) >= 25) : !(navigator.userAgent.indexOf("Opera") > -1) || (t = (t = navigator.userAgent.replace(/^.*Version\/([\d.]+).*$/i, "$1")).split("."), parseInt(t[0], 10) >= 10)
            }

            function a() {
                Object(o.b)((function () {
                    void 0 !== window.stop ? window.stop() : void 0 !== document.execCommand && document.execCommand("Stop", !1), document.body.innerHTML = "<div id='reset_body' class='login-gradient-bg'><center><table height='100%' style='position: relative; top: 150px; text-align: center; width: 650px;'><tr style='height: 35px;''><td></td></tr><tr><td valign='middle'><span style='color: #222222; font-size: 24px;'>" + WialonHosting.LoginTranslations.browser_not_supported + "</span></td></tr><tr style='height: 45px;''><td></td></tr><tr><td style='position: relative'><ul style = 'margin: 0; padding: 0; text-align: left; width: 200px; position: absolute; left: 50%; margin-left: -100px; color: #222222;'><li style='line-height: 45px; list-style-type: none;'><a href='https://www.google.ru/intl/ru/chrome/browser/' target='_blank' style='text-decoration: none; color: #222222; font-size: 14px; text-align: left;'><img src='/img/br_chrome.png'><span style='position: relative; top: -10px; left: 10px;'>Google Chrome 29+</span></a></li><li style='line-height: 45px; list-style-type: none;'><a href='http://www.mozilla.com' target='_blank' style='text-decoration: none; color: #222222; font-size: 14px; text-align: left;'><img src='/img/br_firefox.png'><span style='position: relative; top: -10px; left: 10px;'>Mozilla Firefox 21+</span></a></li><li style='line-height: 45px; list-style-type: none;'><a href='http://www.microsoft.com/windows/downloads/ie' target='_blank' style='text-decoration: none; color: #222222; font-size: 14px; text-align: left;'><img src='/img/br_ie.png'><span style='position: relative; top: -10px; left: 10px;'>Internet Explorer 11+</span></a></li><li style='line-height: 45px; list-style-type: none;'><a href='http://opera.com' target='_blank' style='text-decoration: none; color: #222222; font-size: 14px; text-align: left;'><img src='/img/br_opera.png'><span style='position: relative; top: -10px; left: 10px;'>Opera 10.0+</span></a></li></ul></td></tr></table></center></div>"
                }))
            }
        },
        "/QZC": function (t, n, e) {
            "use strict";
            var o = e("1gTz"),
                i = e("sWoc"),
                a = e("ZHf0"),
                r = e("txeg");
            window.WialonLoginPage = {
                translation: {},
                applyTranslationAliases: function (t) {
                    t = Object.assign({}, t);
                    return [
                        ["password", "passwd"],
                        ["remember", "remem_pc"],
                        ["forgot_password", "forgot_passwd"],
                        ["reset_password_enter_credentials", "reset_passwd_text"],
                        ["reset_password", "reset_passwd_button"],
                        ["back", "back_link"],
                        ["back_to_login", "reset_back_link"],
                        ["email_sent_to", "reset_password_email_sent_to"],
                        ["password_was_reset", "reset_password_was_reset"],
                        ["verification_code", "two_factor_verification_code"],
                        ["verification_code_colon", "two_factor_verification_code_colon"],
                        ["incorrect_code", "two_factor_invalid_code"],
                        ["two_factor_code_sent_to_email_full", "two_factor_sent_to_email_full"],
                        ["two_factor_code_sent_to_phone_full", "two_factor_sent_to_phone_full"],
                        ["two_factor_code_sent_to_email", "two_factor_sent_to_email"],
                        ["two_factor_code_sent_to_phone", "two_factor_sent_to_phone"],
                        ["resend_code", "two_factor_code_was_not_received"]
                    ].forEach((function (n) {
                        var e = n[0],
                            o = n[1];
                        t[o] = t[e]
                    })), t
                },
                onTranslationChange: function (t) {
                    var n = this.applyTranslationAliases(t.login_form);
                    for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (this.translation[e] = n[e]);
                    WialonHosting.blocking.DEFAULT_TEXT = n.loading_short, this.onTranslationUpdate()
                },
                oauthRequestHandler: null,
                authRequestId: 0,
                useOperateAs: !1,
                blocking: WialonHosting.blocking.toggleable({
                    doNotWait: !0
                }),
                finished: !1,
                finishCallbacks: [],
                toggleLoading: function (t, n) {
                    WialonLoginPage.blocking.toggle(t, n), WialonHosting.IS_CMS && WialonHosting.overlay.getElement().classList[t ? "add" : "remove"]("solid-overlay")
                },
                finish: function () {
                    this.finished = !0, WialonLoginPage.toggleLoading(!1), document.body.classList.remove("login"), this.finishCallbacks && (this.finishCallbacks.forEach((function (t) {
                        t()
                    })), this.finishCallbacks = null)
                },
                onFinish: function (t) {
                    this.finished ? t() : this.finishCallbacks.push(t)
                },
                cleanupForms: function () {},
                firstPageSwitch: !0,
                switchPage: function (t) {
                    this.firstPageSwitch ? this.firstPageSwitch = !1 : WialonHosting._context.junk.loginSkin && WialonHosting._context.junk.loginSkin.randomizeBackground();
                    var n;
                    [{
                        id: "login_body"
                    }, {
                        id: "reset_body"
                    }, {
                        id: "monitoring_body"
                    }, {
                        id: "two_factor_body",
                        className: "login-two-factor"
                    }].forEach((function (e) {
                        var o = e.id,
                            i = e.className;
                        document.getElementById(o).style.display = t === o ? "block" : "none", t === o && (n = e), i && document.body.classList.remove(i)
                    })), n && n.className && document.body.classList.add(n.className), WialonHosting.alerts.hide()
                },
                removeLoginPages: function () {
                    var t = document.getElementById("login_body");
                    t && t.parentNode && t.parentNode.removeChild(t), t = null;
                    var n = document.getElementById("reset_body");
                    n && n.parentNode && n.parentNode.removeChild(n), n = null;
                    var e = document.getElementById("two_factor_body");
                    e && e.parentNode && e.parentNode.removeChild(e), e = null
                },
                getUserPasswordInputs: function () {
                    var t = document.getElementById("user"),
                        n = document.getElementById("passw"),
                        e = [];
                    return t && e.push(t), n && e.push(n), e
                },
                showAlertCounter: 0,
                showAlert: function (t) {
                    var n = t.html,
                        e = t.phrase,
                        o = t.errorCode,
                        i = t.status || "error",
                        a = t.errorInputs,
                        r = t.invalidInputClassName;
                    r || (r = "invalid-input"), o && (e = "error_" + o), e && (n = this.translation[e]);
                    var s = {
                        status: i,
                        html: n,
                        data: new WialonLoginPage.Translatable({
                            phrase: e
                        })
                    };
                    if ("success" === i && (s.autoHideTimeout = 15e3), a) {
                        var l = ++this.showAlertCounter,
                            c = [];
                        a.forEach((function (t) {
                            t._loginPageShowAlertId = l, t.classList.add(r), c.push(WialonHosting.Dom.onInteracted(t, {
                                filterNonUserInteractions: !0
                            }, (function () {
                                WialonHosting.alerts.hide()
                            })))
                        })), s.onStartHide = function () {
                            for (a.forEach((function (t) {
                                    t._loginPageShowAlertId === l && t.classList.remove(r)
                                })); c.length;) c.pop().cancel()
                        }
                    }
                    WialonHosting.alerts.show(s)
                },
                hideAlert: function () {
                    WialonHosting.alerts.hide()
                },
                showLoginError: function (t) {
                    var n = {
                        text: null,
                        skipLogin: !0
                    };
                    t.html ? n.text = t.html : t.phrase && (n.text = this.translation[t.phrase], n.customAttributes = {
                        "data-translation": t.phrase
                    }), n.text ? onLoginErrorExt(n) : WialonHosting.Log.captureException(new Error("showLoginError:notext"), {
                        extra: t
                    })
                },
                onTranslationUpdate: function () {
                    var t, n = WialonHosting.alerts.getData();
                    if (n && n instanceof WialonLoginPage.Translatable) {
                        var e = n.phrase;
                        (t = this.translation[e]) && WialonHosting.alerts.forceSetContent({
                            html: t
                        })
                    }
                    var o = document.querySelectorAll("[data-login-translation-phrase]");
                    if (o)
                        for (var i = 0; i < o.length; i++) {
                            var a = o[i];
                            if (a && a.getAttribute && (t = this.translation[a.getAttribute("data-login-translation-phrase")]))
                                if ("INPUT" === (a.tagName + "").toUpperCase()) switch ((a.getAttribute("type") + "").toLowerCase()) {
                                    case "button":
                                    case "submit":
                                        a.value = t;
                                        break;
                                    default:
                                        a.placeholder = t
                                } else a.innerHTML = t
                        }
                },
                _responseType: "hash",
                _submitButtonReenableTimeout: null,
                setSubmitButtonEnabled: function (t) {
                    var n = this,
                        e = document.getElementById("submit");
                    if (e) {
                        var o = t && "object" == typeof t && t.delayed;
                        o || (e.disabled = !t), null !== this._submitButtonReenableTimeout && (clearTimeout(this._submitButtonReenableTimeout), this._submitButtonReenableTimeout = null), t ? o && (this._submitButtonReenableTimeout = setTimeout((function () {
                            n._submitButtonReenableTimeout = null, e.disabled = !1
                        }), 500)) : this._submitButtonReenableTimeout = setTimeout((function () {
                            n._submitButtonReenableTimeout = null, e.disabled = !1
                        }), 1e4)
                    }
                },
                onAuthorize: function (t) {
                    Object(a.a)(t)
                },
                handleUserPasswordAuthSuccess: function (t) {
                    var n = t.result;
                    if (n && n.isAuthorized && n.loginParams) {
                        var e = document.getElementById("store_cookie");
                        e && e.checked && n.token && Object(r.e)({
                            token: n.token
                        });
                        var o = Object.assign({}, n.loginParams, {
                            use_operate_as: WialonLoginPage.useOperateAs ? "1" : null
                        });
                        return WialonLoginPage.onAuthorize(o), !0
                    }
                    return !1
                },
                handleUserPasswordAuth: function (t) {
                    var n = t.error,
                        e = t.result,
                        o = t.credentials;
                    if (n) {
                        switch (n.type) {
                            case "stale":
                                return;
                            case "errorCode":
                                switch (this.setSubmitButtonEnabled({
                                    delayed: !0
                                }), n.phase) {
                                    case "oauthLogin":
                                        return void onLoginErrorExt({
                                            errorCode: n.errorCode,
                                            inputError: 8 === n.errorCode,
                                            blockForm: n.isExpired,
                                            reloadTimeout: n.isExpired,
                                            reloadNow: n.isExpired,
                                            skipLogin: n.errorCode,
                                            errorInputs: WialonLoginPage.getUserPasswordInputs()
                                        });
                                    case "sdkLogin":
                                        return void(isFinite(n.errorCode) ? WialonLoginPage.showAlert({
                                            errorCode: n.errorCode,
                                            errorInputs: WialonLoginPage.getUserPasswordInputs()
                                        }) : WialonHosting.Log.error("login:doUserPasswordAuth:sdk", {
                                            error: n
                                        }))
                                }
                                return void WialonLoginPage.setSubmitButtonEnabled(!0)
                        }
                        WialonHosting.Log.error("login:doUserPasswordAuth:error", {
                            error: n
                        })
                    } else {
                        WialonLoginPage.handleUserPasswordAuthSuccess({
                            error: n,
                            result: e
                        }) || (e.isTwoFactorRequired ? WialonLoginPage.showTwoFactorCodePrompt({
                            credentials: o,
                            twoFactorParams: e._twoFactorParams
                        }) : WialonHosting.Log.error("login:doUserPasswordAuth:unknown", {
                            result: e
                        }))
                    }
                },
                doUserPasswordAuth: function () {
                    var t = document.getElementById("submit");
                    if (t && !t.disabled) {
                        var n = document.getElementById("user").value,
                            e = document.getElementById("passw").value,
                            o = WialonLoginUtil.get_operate_as();
                        this.setSubmitButtonEnabled(!1);
                        var i = {
                            user: n,
                            password: e,
                            operateAs: o,
                            responseType: WialonLoginPage._responseType
                        };
                        this.userPasswordAuth({
                            credentials: i
                        }, (function (t, n) {
                            WialonLoginPage.handleUserPasswordAuth({
                                credentials: i,
                                error: t,
                                result: n
                            })
                        }))
                    }
                },
                handleOAuthLogin: function (t, n) {
                    var e = t.credentials,
                        o = t.params,
                        a = e.operateAs,
                        s = o.access_token,
                        l = o.access_hash,
                        c = {};
                    if ("string" == typeof a && a.length && (c.operateAs = a), void 0 !== l && 32 == l.length) c.authHash = l;
                    else {
                        if (void 0 === s || 72 != s.length) {
                            var d = parseInt(o.svc_error, 10) || 8;
                            return void n({
                                type: "errorCode",
                                phase: "oauthLogin",
                                errorCode: d,
                                isExpired: 1011 === d
                            })
                        }
                        c.token = s;
                        var u = document.getElementById("store_cookie");
                        u && u.checked && (c.remember = "1")
                    }
                    Object(i.a)({
                        token: c.token,
                        authHash: c.authHash,
                        operateAs: c.operate_as,
                        context: WialonHosting._context,
                        withoutSdk: !1
                    }, (function (t) {
                        if (t) n({
                            type: "errorCode",
                            phase: "sdkLogin",
                            errorCode: parseInt(t.code, 10),
                            originalError: t
                        });
                        else {
                            delete c.authHash, "1" !== c.remember && delete c.token, c.sid = sdk.s.getId(), WialonLoginPage.useOperateAs && (c.use_operate_as = 1);
                            var e = document.getElementById("store_cookie");
                            e && e.checked && c.token && Object(r.e)({
                                token: c.token
                            }), n(null, {
                                isAuthorized: !0,
                                loginParams: c
                            })
                        }
                    }))
                },
                userPasswordAuth: function (t, n) {
                    this._userPasswordAuth || (this._userPasswordAuth = new o.c({
                        context: WialonHosting._context
                    })), this._userPasswordAuth.auth({
                        user: t.credentials.user,
                        password: t.credentials.password,
                        authType: t.credentials.responseType
                    }, n)
                },
                doUserPasswordLogin: function () {
                    this.useOperateAs = !1, this.doUserPasswordAuth()
                },
                onShowLoginPage: function () {
                    this.setSubmitButtonEnabled(!0)
                },
                onUserPasswordChange: function () {
                    var t = document.getElementById("user"),
                        n = document.getElementById("passw");
                    t && n && (t.classList.remove("empty-input"), n.classList.remove("empty-input"))
                },
                onOperateAsClick: function () {
                    var t = document.getElementById("user"),
                        n = document.getElementById("passw"),
                        e = t.value,
                        o = n.value;
                    if (!e.length || !o.length) {
                        var i = [];
                        return e.length || i.push(t), o.length || i.push(n), void WialonLoginPage.showAlert({
                            phrase: "operate_as_fields_error",
                            errorInputs: i
                        })
                    }
                    this.useOperateAs = !0, this.doUserPasswordAuth()
                }
            }, WialonLoginPage.Translatable = function (t) {
                this.phrase = t.phrase
            }, WialonLoginPage.ButtonLocker = function (t) {
                var n = t.elements,
                    e = t.timeout || 1e4,
                    o = 0;
                this.enable = function () {
                    o && (clearTimeout(o), o = 0), n.forEach((function (t) {
                        t.disabled = !1
                    }))
                }, this.disable = function () {
                    o && clearTimeout(o), n.forEach((function (t) {
                        t.disabled = !0
                    })), o = setTimeout((function () {
                        o = 0, n.forEach((function (t) {
                            t.disabled = !1
                        }))
                    }), e)
                }
            }, window.addEventListener("message", (function (t) {
                if (!t || !t.data || "string" != typeof t.data) return;
                if (!/^loginauth:/.test(t.data)) return;
                var n = t.data.slice("loginauth:".length);
                try {
                    n = JSON.parse(n)
                } catch (t) {
                    return void WialonHosting.Log.error("oauthPostMessage", t.data)
                }! function (t) {
                    if (!WialonLoginPage.oauthRequestHandler) return;
                    if (parseInt(t.request_id, 10) !== WialonLoginPage.oauthRequestHandler.requestId) return;
                    var n = WialonLoginPage.oauthRequestHandler;
                    WialonLoginPage.oauthRequestHandler = null, n.callback(null, t)
                }(n)
            }))
        },
        "0Zvi": function (t, n, e) {
            "use strict";

            function o(t, n) {
                var e = !1;

                function o() {
                    e || ("complete" === document.readyState || n && n.allowInteractive && "interactive" === document.readyState) && (e = !0, t())
                }
                "complete" === document.readyState || n && n.allowInteractive && "interactive" === document.readyState ? t() : (document.addEventListener("readystatechange", o), document.addEventListener("DOMContentLoaded", o))
            }

            function i(t) {
                return o(t, {
                    allowInteractive: !0
                })
            }
            e.d(n, "a", (function () {
                return o
            })), e.d(n, "b", (function () {
                return i
            }))
        },
        "0zev": function (t, n, e) {
            "use strict";
            var o = e("cAa7"),
                i = e("LnTl"),
                a = e("jPtB"),
                r = e("0Zvi");
            var s = e("AFqa"),
                l = e("9DEA"),
                c = e("3o/7"),
                d = function (t) {
                    var n = {};
                    return t ? (function (t) {
                        if (!t) return;
                        t.background && (n["preloader-box-background"] = t.background);
                        t.textColor && (n["preloader-text-color"] = t.textColor);
                        t.boxShadow && (n["preloader-box-shadow"] = t.boxShadow);
                        t.boxBorder && (n["preloader-box-border"] = t.boxBorder)
                    }(t.login && t.login.preloader), n) : n
                };
            var u = e("CaSX");

            function g(t, n) {
                var e = t.context,
                    s = t.majorSkin,
                    f = t.majorSkinData,
                    m = t.minorSkin,
                    h = t.minorSkinData,
                    b = t.baseCssUrl;
                "function" != typeof n && (n = function () {});
                var _ = e.junk.loginSkin;
                _ || (_ = {
                    removePrevSkin: null,
                    _loadLoginSkin: function (t, n) {
                        var o, a, r = t.majorSkin,
                            s = t.minorSkin;
                        "function" != typeof n && (n = function () {});
                        var l = new i.a;
                        r && (l.increment(), p(r, (function (t, e) {
                            t ? n(t) : (o = e, l.decrement())
                        })));
                        s && (l.increment(), p(s, (function (t, n) {
                            if (t) return console.error(t), void l.decrement();
                            a = n, l.decrement()
                        })));
                        l.onFinish((function () {
                            g({
                                context: e,
                                majorSkin: r,
                                majorSkinData: o,
                                minorSkin: s,
                                minorSkinData: a
                            }, n)
                        }))
                    },
                    variables: {},
                    variablesPubSub: new o.a,
                    randomizeBackground: function () {},
                    removeRandomBackgroundWaiting: null
                }, e.junk.loginSkin = _);
                var v, w = _.removePrevSkin,
                    y = !0;
                WialonHosting.IS_MONITORING && (function () {
                    e.junk.shownVideoAsBackground && (e.junk.shownVideoAsBackground.remove(), e.junk.shownVideoAsBackground = null);
                    var t = h && h.login && h.login.videos && {
                        videos: h.login.videos,
                        path: "/zskins/" + m
                    };
                    t || (t = f && f.login && f.login.videos && {
                        videos: f.login.videos,
                        path: "/zskins/" + s
                    });
                    t && Array.isArray(t.videos) && t.videos.length && (y = !1, e.junk.shownVideoAsBackground = function (t) {
                        var n, e, o = t.context,
                            i = t.path,
                            a = t.videos,
                            s = !1;
                        return e = o.phase.watch((function (t) {
                            switch (t) {
                                case "loading":
                                case "system":
                                    l()
                            }
                        })), s ? (e.cancel(), e = null, {
                            remove: function () {}
                        }) : (a.length && Object(r.b)((function () {
                            if (!s) {
                                var t = Math.random() * a.length | 0,
                                    e = a[t];
                                if (e && Array.isArray(e.src)) {
                                    var o = document.getElementById("video_trailer");
                                    o && (n = document.createElement("video"), e.thumbnail && n.setAttribute("poster", i + "/" + e.thumbnail), n.setAttribute("autoplay", ""), n.setAttribute("muted", ""), n.setAttribute("loop", ""), n.muted = !0, e.src.forEach((function (t) {
                                        if ("string" == typeof t) {
                                            var e = document.createElement("source");
                                            e.setAttribute("src", i + "/" + t);
                                            var o = /\.(mp4|webm)$/i.exec(t);
                                            o && e.setAttribute("type", "video/" + o[1].toLowerCase()), n.appendChild(e)
                                        }
                                    })), o.appendChild(n), n.play().catch((function () {})))
                                }
                            }
                        })), {
                            remove: l
                        });

                        function l() {
                            s || (s = !0, e && (e.cancel(), e = null), n && (n.parentNode.removeChild(n), n = null))
                        }
                    }({
                        context: e,
                        path: t.path,
                        videos: t.videos
                    }))
                }(), function () {
                    if (!y) return;
                    var t = h && h.login && h.login.randBackgrounds && {
                        bgs: h.login.randBackgrounds,
                        path: "/zskins/" + m
                    };
                    t || (t = f && f.login && f.login.randBackgrounds && {
                        bgs: f.login.randBackgrounds,
                        path: "/zskins/" + s
                    });
                    if (t && Array.isArray(t.bgs) && t.bgs.length) {
                        var n = t.bgs,
                            o = -1;
                        if (_.randomizeBackground = function () {
                                var e = Math.random() * n.length | 0;
                                e === o && (e = (e + 1) % n.length), o = e, document.body.style.backgroundImage = 'url("' + t.path + "/" + n[e] + '")', document.body.style.backgroundPosition = "bottom center", document.body.style.backgroundRepeat = "no-repeat", document.body.style.backgroundSize = "cover"
                            }, _.randomizeBackground(), !_.removeRandomBackgroundWaiting) {
                            var i = !1;
                            _.removeRandomBackgroundWaiting = e.phase.watch((function (t) {
                                switch (t) {
                                    case "system":
                                        a(), i = !0, _.removeRandomBackgroundWaiting && (_.removeRandomBackgroundWaiting.cancel(), _.removeRandomBackgroundWaiting = null)
                                }
                            })), i && (_.removeRandomBackgroundWaiting.cancel(), _.removeRandomBackgroundWaiting = null)
                        }
                    } else a();

                    function a() {
                        _.randomizeBackground = function () {}, document.body.style.backgroundImage = "", document.body.style.backgroundPosition = "", document.body.style.backgroundRepeat = "", document.body.style.backgroundSize = ""
                    }
                }()), v = s ? "/zskins/" + s : "/dskin", b || (b = v + "/css/base.css"), _.skinPath = v, _.baseCssUrl = b;
                var k = WialonLoginUtil.addCssLink(b);
                WialonLoginUtil.onCssLinksLoaded((function () {
                    if (k) {
                        s ? (document.body.classList.add("with-skin"), document.body.classList.remove("without-skin")) : (document.body.classList.add("without-skin"), document.body.classList.remove("with-skin"));
                        var t = Object(c.a)({
                            configs: [{
                                config: l.a,
                                cssPath: null,
                                skinPath: "/"
                            }, {
                                config: f,
                                cssPath: b,
                                skinPath: v + "/"
                            }, {
                                config: h,
                                cssPath: "/zskins/" + m + "/css/base.css",
                                skinPath: "/zskins/" + m + "/"
                            }],
                            siteType: e.siteParams.type,
                            createLoginVariables: d
                        });
                        u.c._useImgPreloader(t.login.preloader.img), u.c._useLightImgPreloader(t.login.preloader.lightImg), u.c._setOverlaySplashBackground(t.login.preloader.overlaySplashBackground);
                        var o = t.loginVariables;
                        _.variables = o, _.variablesPubSub.notify([{
                            variables: o
                        }]), e.junk.systemSkin ? (w && (w(), w = null), n()) : Object(a.a)({
                            context: e,
                            variables: o
                        }).then((function () {
                            k ? (w && (w(), w = null), n()) : n({
                                type: "removed"
                            })
                        }), (function (t) {
                            k ? (w && (w(), w = null), n(t)) : n({
                                type: "removed"
                            })
                        }))
                    } else n({
                        type: "removed"
                    })
                })), _.removePrevSkin = function () {
                    k && (w && (w(), w = null), k.remove())
                }
            }

            function p(t, n) {
                var e = Object(s.b)("/zskins/" + t + "/skin.json");
                WialonHosting.Http.doHttpRequest({
                    url: e,
                    dataType: "json"
                }, (function (t, e) {
                    if (t) n(t);
                    else {
                        var o = {
                            loginVariables: e.loginVariables,
                            login: e.login
                        };
                        n(null, o)
                    }
                }))
            }
            e.d(n, "a", (function () {
                return g
            })), e.d(n, "b", (function () {
                return p
            }))
        },
        "1gTz": function (t, n, e) {
            "use strict";
            e.d(n, "c", (function () {
                return l
            })), e.d(n, "a", (function () {
                return r
            })), e.d(n, "b", (function () {
                return s
            }));
            var o = e("LsrW"),
                i = e("sWoc"),
                a = e("OzQr"),
                r = "hash",
                s = "token";

            function l(t) {
                var n, e = t.context,
                    s = 0,
                    l = [function () {
                        g()
                    }],
                    c = [],
                    d = Object(o.e)() || WialonHosting.WHITE_LABEL_SDK_URL || WialonHosting.CustomOptions.sdk_url,
                    u = document.location.protocol + "//" + document.location.host + "/post_message.html";

                function g() {
                    c.forEach((function (t) {
                        t()
                    })), c = []
                }! function () {
                    var t = document.createElement("iframe");

                    function e(t) {
                        if (t && t.data && "string" == typeof t.data && /^loginauth:/.test(t.data)) {
                            var e = t.data.slice("loginauth:".length);
                            try {
                                e = JSON.parse(e)
                            } catch (t) {
                                return void WialonHosting.Log.error("oauthPostMessage", t.data)
                            }! function (t) {
                                if (!n) return;
                                if (parseInt(t.request_id, 10) !== n.requestId) return;
                                var e = n;
                                n = null, e.callback(null, t)
                            }(e)
                        }
                    }
                    t.id = "null_frame", t.setAttribute("name", "null_frame"), t.style.display = "none", document.body.appendChild(t), l.push((function () {
                        document.body.removeChild(t)
                    })), window.addEventListener("message", e), l.push((function () {
                        window.removeEventListener("message", e)
                    }))
                }(), this.auth = function (t, o) {
                    var l = t.user,
                        p = t.password,
                        f = t.sendCodeTo,
                        m = t.authType,
                        h = t.operateAs;
                    m || (m = r);
                    var b = {
                        user: l,
                        password: p,
                        responseType: m,
                        operateAs: h
                    };
                    ! function t(o, r) {
                        var l = o.credentials,
                            d = o.url,
                            p = o.formParams;
                        n && n.callback({
                            type: "stale"
                        });
                        n = {
                            requestId: ++s,
                            callback: function (n, o) {
                                if (n) return void r(n);
                                if (o.hash && o.p && !o.hasOwnProperty("svc_error")) return void r(null, {
                                    isTwoFactorRequired: !0,
                                    sentTo: Object(a.b)(o.auth_type),
                                    useCode: function (n, i) {
                                        t({
                                            url: e.sdkParams.sdkUrl + "/oauth/authorize.html",
                                            credentials: l,
                                            formParams: {
                                                hash: o.hash,
                                                p: o.p,
                                                remote_hash: n,
                                                response_type: p.response_type
                                            }
                                        }, i)
                                    },
                                    resendCode: function (n, e) {
                                        t({
                                            url: "oauth.html",
                                            credentials: l,
                                            formParams: Object.assign({}, p, {
                                                send_code_to: Object(a.c)(n)
                                            })
                                        }, e)
                                    },
                                    _twoFactorParams: o
                                });
                                ! function (t, n) {
                                    var o = t.credentials,
                                        a = t.params,
                                        r = o.operateAs,
                                        s = a.access_token,
                                        l = a.access_hash,
                                        c = {};
                                    "string" == typeof r && r.length && (c.operateAs = r);
                                    if (void 0 !== l && 32 == l.length) c.authHash = l;
                                    else {
                                        if (void 0 === s || 72 != s.length) {
                                            var d = parseInt(a.svc_error, 10) || 8;
                                            return void n({
                                                type: "errorCode",
                                                phase: "oauthLogin",
                                                errorCode: d,
                                                isExpired: 1011 === d
                                            })
                                        }
                                        c.token = s
                                    }
                                    Object(i.a)({
                                        token: c.token,
                                        authHash: c.authHash,
                                        operateAs: c.operate_as,
                                        context: e,
                                        withoutSdk: !0
                                    }, (function (t, e) {
                                        t ? n({
                                            type: "errorCode",
                                            phase: "sdkLogin",
                                            errorCode: parseInt(t.code, 10),
                                            originalError: t
                                        }) : (delete c.authHash, "1" !== c.remember && delete c.token, c.sid = e.sid, n(null, {
                                            isAuthorized: !0,
                                            loginParams: c,
                                            token: s
                                        }))
                                    }))
                                }({
                                    credentials: l,
                                    params: o
                                }, r)
                            }
                        };
                        g();
                        var f = document.createElement("form");
                        f.setAttribute("target", "null_frame");
                        f.setAttribute("method", "post");
                        f.setAttribute("action", d);
                        for (var m = 0, h = Object.entries(p); m < h.length; m++) {
                            var b = h[m],
                                _ = b[0],
                                v = b[1];
                            w(_, v)
                        }
                        w("redirect_uri", u);
                        w("request_id", n.requestId);

                        function w(t, n) {
                            if (n) {
                                var e = document.createElement("input");
                                e.setAttribute("type", "hidden"), e.setAttribute("name", t), e.setAttribute("value", n), f.appendChild(e)
                            }
                        }
                        f.style.position = "absolute";
                        f.style.left = "-99999px";
                        f.style.top = "-99999px";
                        document.body.appendChild(f);
                        c.push((function () {
                            f.parentNode.removeChild(f)
                        }));
                        f.submit()
                    }({
                        url: "oauth.html",
                        formParams: {
                            client_id: WialonHosting.CustomOptions.client_id,
                            access_type: "-1",
                            activation_time: "0",
                            duration: "2592000",
                            flags: "7",
                            response_type: m,
                            wialon_sdk_url: d,
                            sign: WialonHosting.CustomOptions.sign,
                            login: l,
                            passw: p,
                            send_code_to: f
                        },
                        credentials: b
                    }, o)
                }, this.isDestroyed = function () {
                    return !l
                }, this.destroy = function () {
                    l.forEach((function (t) {
                        t()
                    })), l = null
                }
            }
        },
        "3dev": function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return l
            }));
            var o = e("bPFM"),
                i = e("cAa7"),
                a = e("AFqa"),
                r = e("LsrW"),
                s = e("C90t");

            function l() {
                var t = WialonHosting.CustomOptions.site_type,
                    n = WialonHosting.CustomOptions.site_name || "",
                    e = null;
                "cms_manager" === t && (e = "cms_manager"), Object(r.e)() && (n = "", e = "");
                var l = WialonHosting.CustomOptions.skin;
                "string" != typeof l && (l = ""), l = l.trim();
                var c = Object(s.b)(document.location.href, "frontend") || WialonHosting.CustomOptions.frontend_dev_server || "";
                c = c.replace(/\/$/, "");
                var d = new Set,
                    u = !1;
                switch (l) {
                    case "":
                    case "default_arctic":
                    case "default_night":
                    case "default_urban":
                    case "default_motion":
                    case "default_animation":
                        u = !0
                }
                var g = WialonHosting.CustomOptions.skin_login_data,
                    p = !1;
                if (u) {
                    var f = localStorage.getItem("wh_skin");
                    switch (f) {
                        case "":
                        case "default_arctic":
                        case "default_night":
                        case "default_urban":
                        case "default_motion":
                        case "default_animation":
                            f !== l && (g = null, p = !0), l = f
                    }
                }
                return {
                    lang: WialonHosting.CustomOptions.http_lang || "en",
                    phase: new o.a(null),
                    codeParams: {
                        webpackUrl: c
                    },
                    siteParams: {
                        commonName: WialonHosting.CustomOptions.site_name,
                        type: t
                    },
                    sdkParams: {
                        sdkUrl: WialonHosting.WHITE_LABEL_SDK_URL || WialonHosting.CustomOptions.sdk_url,
                        whiteLabelSdkUrl: WialonHosting.WHITE_LABEL_SDK_URL,
                        sdkJsUrl: WialonHosting.SDKJS_URL,
                        apiFlags: parseInt(WialonHosting.CustomOptions.app_flags) || 0,
                        appName: WialonHosting.CustomOptions.app_name || "",
                        siteName: n,
                        checkService: e,
                        _librariesToLoad: d,
                        loadLibrary: function (t) {
                            d.add(t)
                        }
                    },
                    skins: {
                        isDefaultSkin: u,
                        isSkinSelectedByUser: p,
                        majorSkin: l,
                        minorSkin: WialonHosting.CustomOptions.site_name,
                        majorSkinData: g,
                        minorSkinData: WialonHosting.CustomOptions.skin_site_login_data,
                        initialMinorSkin: WialonHosting.CustomOptions.site_name,
                        initialMinorSkinNotExists: WialonHosting.CustomOptions.skin_site_login_data_not_exists,
                        changeSkinPubSub: new i.a,
                        skinData: new o.a(null),
                        firstSystemCssLinkAdded: new o.a(!1),
                        cssLinkAddedPubSub: new i.a,
                        updateCssHref: function (t) {
                            return Object(a.b)(t)
                        },
                        _customVariables: {},
                        _customVariablesChangedPubsub: new i.a,
                        setCustomCssVariable: function (t, n) {
                            this._customVariables[t] = n, this._customVariablesChangedPubsub.notify([])
                        }
                    },
                    plugins: null,
                    _pluginsWaiters: [],
                    onPluginsAvailable: function (t) {
                        this.plugins ? t() : this._pluginsWaiters.push(t)
                    },
                    junk: {
                        cssWithVariables: null,
                        changeSkin: null,
                        cssVariables: null,
                        loginSkin: null,
                        mainLayoutElement: null
                    }
                }
            }
        },
        "3o/7": function (t, n, e) {
            "use strict";
            var o = e("bn/O"),
                i = e("cMNc"),
                a = e("AFqa");
            n.a = function (t) {
                var n = t.configs,
                    e = t.siteType,
                    o = t.createLoginVariables,
                    c = t.createVariables,
                    d = {};
                return n.forEach((function (t) {
                    var n = t.config,
                        u = t.cssPath,
                        g = t.skinPath;
                    if (n) {
                        if ((n = Object.assign({}, n)).login = Object.assign({}, n.login), e) {
                            var p = n.login && n.login[e];
                            p && s(n.login, p, !0)
                        }
                        g && r.forEach((function (t) {
                            var e, o = n;
                            if (t.every((function (t) {
                                    return e = o, !!(o = o[t])
                                })), o) {
                                var r = Object(i.c)(g, o);
                                r = Object(a.b)(r), e[t[t.length - 1]] = r
                            }
                        })), o && (n.loginVariables = Object.assign({}, n.loginVariables, o(n))), c && (n.variables = Object.assign({}, n.variables, c(n))), u && (n.loginVariables = l({
                            cssPath: u,
                            variables: n.loginVariables
                        }), n.variables = l({
                            cssPath: u,
                            variables: n.variables
                        })), s(d, n)
                    }
                })), d
            };
            var r = [
                ["login", "preloader", "img"],
                ["logo", "mapFloatingLogo", "img"]
            ];

            function s(t, n, e) {
                Object(o.a)(n, (function (n, o) {
                    o && "object" == typeof o && !Array.isArray(o) ? (e ? t[n] = Object.assign({}, t[n]) : t[n] || (t[n] = {}), s(t[n], o)) : void 0 !== o && (t[n] = o)
                }))
            }

            function l(t) {
                var n = t.cssPath,
                    e = t.variables;
                return e = Object.assign({}, e), Object(o.a)(e, (function (t, o) {
                    e[t] = Object(i.b)(o, (function (t) {
                        return Object(i.a)(t) ? (t = Object(i.c)(n, t), t = Object(a.b)(t)) : null
                    }))
                })), e
            }
        },
        "7PVo": function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return r
            }));
            var o = e("q4NX"),
                i = e("LsrW"),
                a = e("txeg");

            function r(t) {
                var n = t.context,
                    e = t.blockingOperation,
                    r = t.translation,
                    s = t.onFinish;
                Object(i.i)();
                var l = Object(o.a)({
                    context: n,
                    blockingOperation: e,
                    translation: r.login_form,
                    onFinish: function (t) {
                        var n = t.operateAs;
                        Object(a.d)() && Object(a.f)(n), s({
                            operateAs: n
                        })
                    }
                });
                return {
                    destroy: function () {
                        l.destroy()
                    }
                }
            }
        },
        "8+eO": function (t, n, e) {
            "use strict";

            function o(t) {
                var n;
                return window.requestAnimationFrame && window.cancelAnimationFrame ? (n = requestAnimationFrame(t), {
                    cancel: function () {
                        n && (cancelAnimationFrame(n), n = null)
                    }
                }) : (n = setTimeout(t, 15), {
                    cancel: function () {
                        n && (clearTimeout(n), n = null)
                    }
                })
            }

            function i(t) {
                var n = 0,
                    e = [];
                return function i() {
                    if (n < 0) return;
                    "loop" === t[n] && (n = 0);
                    if (n >= t.length) {
                        var a = e;
                        return e = null, void a.forEach((function (t) {
                            t()
                        }))
                    }
                    var r = t[n];
                    n++;
                    "function" == typeof r ? o((function () {
                        n < 0 || s(r())
                    })) : "number" == typeof r.timeout ? setTimeout((function () {
                        n < 0 || ("function" == typeof r.fun ? s(r.fun()) : i())
                    }), r.timeout) : WialonHosting.Log.error("Render:sequence", {
                        def: r
                    });

                    function s(t) {
                        t && "function" == typeof t.onFinish ? t.onFinish((function () {
                            i()
                        })) : i()
                    }
                }(), {
                    onFinish: function (t) {
                        e ? e.push(t) : t()
                    },
                    cancel: function () {
                        n = -1
                    }
                }
            }
            e.d(n, "a", (function () {
                return o
            })), e.d(n, "b", (function () {
                return i
            }))
        },
        "9DEA": function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return o
            }));
            var o = {
                loginVariables: {
                    "login-logo-bg": "var(--login-logo-bg-url) center center no-repeat",
                    "login-logo-bg-url": "url(/dskin/images/login/logo_bg.svg)"
                },
                login: {
                    preloader: {
                        overlaySplashBackground: "white",
                        background: "white",
                        textColor: "black",
                        boxShadow: "none",
                        boxBorder: "1px solid #e2e2e2",
                        lightImg: "/static/skin/preloader/preloader-light.svg"
                    },
                    monitoring: {
                        preloader: {
                            img: "/static/skin/preloader/preloader.svg"
                        }
                    },
                    cms_manager: {
                        preloader: {
                            img: "/static/skin/preloader/cms-preloader.svg"
                        }
                    }
                }
            }
        },
        AFqa: function (t, n, e) {
            "use strict";

            function o() {
                if (WialonHosting.IS_LOCAL) return [];
                if (WialonHosting.CustomOptions.s_gr) return [{
                    name: "s_gr",
                    value: WialonHosting.CustomOptions.s_gr
                }];
                var t;
                if ("undefined" != typeof wialon && (t = wialon.core.Session.getInstance().getId().slice(0, 2))) return [{
                    name: "s_gr",
                    value: t.slice(0, 2)
                }];
                if (t = WialonLoginUtil.get_url_parameter("sid")) return [{
                    name: "s_gr",
                    value: t.slice(0, 2)
                }];
                var n = WialonLoginUtil.get_url_parameter("authHash");
                if (n) return [{
                    name: "s_gr",
                    value: n.slice(0, 2)
                }];
                var e = WialonLoginUtil.get_url_parameter("token");
                return e ? [{
                    name: "s_gr_token",
                    value: e
                }] : []
            }

            function i() {
                var t = o();
                return t.length ? t.map((function (t) {
                    return t.name + "=" + encodeURIComponent(t.value)
                })).join("&") : null
            }

            function a(t) {
                return o().forEach((function (n) {
                    t = WialonLoginUtil.replace_url_parameter(t, n.name, n.value)
                })), t
            }

            function r(t) {
                return o().forEach((function (n) {
                    t[n.name] = n.value
                })), t
            }

            function s() {
                return "develop" === WialonHosting.CMS_BRANCH ? 3 : /^\d+-6$/.test(WialonHosting.CMS_GROUP) ? 2 : 1
            }
            e.d(n, "c", (function () {
                return i
            })), e.d(n, "b", (function () {
                return a
            })), e.d(n, "a", (function () {
                return r
            })), e.d(n, "d", (function () {
                return s
            }))
        },
        "C+fK": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var Util_dom_on_ready_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0Zvi"),
                _cms_groups_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AFqa"),
                _i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XSds"),
                _skins_skins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("GyZG"),
                MAIN_SCRIPTS = WialonHosting.CustomOptions.main_scripts,
                CMS_SCRIPTS = WialonHosting.CustomOptions.cms_scripts,
                WIALONJS_SCRIPT = WialonHosting.CustomOptions.wialonjs_script;
            window.WialonHosting || (window.WialonHosting = {});
            var siteType = WialonHosting.CustomOptions.site_type,
                siteBranch = WialonHosting.Url.getParameter(document.location.href, "frontendBranch") || WialonHosting.CustomOptions.frontend_branch,
                webpackUrl = WialonHosting.Url.getParameter(document.location.href, "frontend") || WialonHosting.CustomOptions.frontend_dev_server,
                LOGIN_EXT_SCRIPTS = WialonHosting.CustomOptions.ext_script || "",
                OPTIONAL_SCRIPTS = WialonHosting.CustomOptions.optional_scripts || "";
            WialonHosting.SDKJS_URL = WialonHosting.Url.getParameter(document.location.href, "sdkjs") || WIALONJS_SCRIPT || WialonHosting.CustomOptions.wialon_sdk_url, WialonHosting.IS_DEV = !!webpackUrl, WialonHosting.FRONTEND_DEV_SERVER = webpackUrl, window.__whWebpackMapUrl = function (t) {
                return Object(_cms_groups_js__WEBPACK_IMPORTED_MODULE_1__.b)(t)
            };
            var mainPageCodeLoading = !1,
                mainPageCodeLoaded = !1,
                mainScriptsLoading = !1,
                cmsScriptsLoading = !1,
                loginExtScriptsLoading = !1,
                optionalScriptsLoading = !1,
                loadMainPageCodeListeners = [],
                loadMainPageCodeCounter = 0,
                lessJsLoadListeners = [];
            WialonLoginPage.loadMainPageCode = function (_ref, callback) {
                var context = _ref.context;
                if (mainPageCodeLoaded) callback(null);
                else {
                    var listener = {
                        loadId: loadMainPageCodeCounter,
                        callback: callback
                    };
                    if (loadMainPageCodeListeners.push(listener), !mainPageCodeLoading) {
                        mainPageCodeLoading = !0;
                        var startLoadingTime = WialonHosting.getRelativeMsTime(),
                            loadId = ++loadMainPageCodeCounter;
                        listener.loadId = loadId;
                        var scriptsLoaded = !1,
                            skinLoaded = !1,
                            translation = null,
                            translationApplied = !1,
                            isCmsManager = WialonHosting.IS_CMS;
                        Object(_skins_skins_js__WEBPACK_IMPORTED_MODULE_3__.a)({
                            context: context,
                            majorSkin: isCmsManager ? null : context.skins.majorSkin,
                            minorSkin: isCmsManager ? null : context.skins.minorSkin
                        }).then((function () {
                            onSkinMaybeLoaded()
                        }), (function (t) {
                            WialonHosting.Log.warn("skins:loadSkin", t), onSkinMaybeLoaded()
                        })), loadHtmlResources(), Object(_i18n_js__WEBPACK_IMPORTED_MODULE_2__.a)({
                            siteType: context.siteParams.type,
                            lang: context.lang
                        }, (function (t, n) {
                            t ? WialonHosting.Log.error("scripts_loader:translation", {
                                error: t
                            }) : (translation = n, window.WebCMS && "function" == typeof WebCMS.apply_translations && !translationApplied && (translationApplied = !0, WebCMS.apply_translations(context.lang, n)), checkStart())
                        }))
                    }
                }

                function onSkinMaybeLoaded() {
                    skinLoaded = !0, checkStart()
                }

                function loadHtmlResources() {
                    WialonHosting.Http.doHttpRequest({
                        url: Object(_cms_groups_js__WEBPACK_IMPORTED_MODULE_1__.b)("/html_resources.html"),
                        dataType: "utf8"
                    }, (function (error, data) {
                        error ? WialonHosting.Log.error("scripts_loader:html_resources", {
                            error: error
                        }) : WialonHosting.Dom.onInteractive((function () {
                            var div = document.createElement("div");
                            div.innerHTML = data;
                            for (var elements = [], el = div.firstElementChild, scripts = []; el;) {
                                if ("string" == typeof el.tagName && "SCRIPT" === el.tagName.toUpperCase()) scripts.push(el.innerHTML);
                                else {
                                    if ("function" == typeof el.querySelectorAll)
                                        for (var scriptElements = el.querySelectorAll("script"), i = 0; i < scriptElements.length; i++) {
                                            var scriptEl = scriptElements[i];
                                            scripts.push(scriptEl.innerHTML), scriptEl.parentNode.removeChild(scriptEl)
                                        }
                                    elements.push(el)
                                }
                                el = el.nextElementSibling
                            }
                            elements.forEach((function (t) {
                                document.body.appendChild(t)
                            })), scripts.forEach((function (script) {
                                try {
                                    eval(script)
                                } catch (t) {
                                    WialonHosting.Log.error("scripts_loader:html_resources:eval", {
                                        error: t
                                    })
                                }
                            })), loadScripts()
                        }))
                    }))
                }

                function loadScripts() {
                    webpackUrl ? WialonHosting.Http.doHttpRequest(webpackUrl + "/entry.manifest.json", (function (t, n) {
                        if (n = (n = !t && (n && n[siteBranch || "stable"] || n.dev)) && n[siteType], Array.isArray(n.files) || (n = null), !n) return console.log("no entry manifest", t), void startScriptsLoad();
                        MAIN_SCRIPTS = n.files.map((function (t) {
                            return webpackUrl + "/" + t
                        })).join(","), CMS_SCRIPTS = Array.isArray(n.afterFiles) ? n.afterFiles.map((function (t) {
                            return webpackUrl + "/" + t
                        })).join(",") : "", startScriptsLoad()
                    })) : startScriptsLoad()
                }

                function startScriptsLoad() {
                    WialonLoginPage.loadMainScripts((function (t) {
                        if (t) return WialonHosting.Log.error("scripts_loader:main", t), void notifyListeners(t);
                        WialonLoginPage.loadCmsScripts((function (t) {
                            if (t) return WialonHosting.Log.error("scripts_loader:cms", t), void notifyListeners(t);
                            WialonHosting._context.skins.firstSystemCssLinkAdded.set(!0), translation && !translationApplied && (translationApplied = !0, WebCMS.apply_translations(context.lang, translation)), scriptsLoaded = !0, checkStart()
                        })), WialonLoginPage.loadOptionalScripts()
                    }))
                }

                function checkStart() {
                    if (skinLoaded && scriptsLoaded && translation) {
                        var t = lessJsLoadListeners;
                        lessJsLoadListeners = null, t.forEach((function (t) {
                            t(null)
                        })), mainPageCodeLoaded = !0;
                        var n = WialonHosting.getRelativeMsTime() - startLoadingTime | 0;
                        WialonHosting.Log.measurement("scripts_load_time", n, {
                            oncePerHour: !0
                        }), notifyListeners(null)
                    }
                }

                function notifyListeners(t) {
                    loadId !== loadMainPageCodeCounter && (mainPageCodeLoading = !1);
                    var n = loadMainPageCodeListeners;
                    loadMainPageCodeListeners = [], n.forEach((function (n) {
                        n.loadId === loadId ? n.callback(t) : loadMainPageCodeListeners.push(n)
                    }))
                }
            }, WialonLoginPage.loadMainScripts = function (t) {
                mainScriptsLoading || (mainScriptsLoading = !0, WialonLoginPage.loadOurScripts(MAIN_SCRIPTS ? MAIN_SCRIPTS.split(",") : [], t))
            }, WialonLoginPage.loadCmsScripts = function (t) {
                if (!cmsScriptsLoading) {
                    cmsScriptsLoading = !0;
                    var n = [];
                    CMS_SCRIPTS && (n = n.concat(CMS_SCRIPTS.split(","))), WialonLoginPage.loadOurScripts(n, (function (n) {
                        function e(n) {
                            n.loadEntryCode(t)
                        }

                        function o(n) {
                            WialonHosting.Log.error("dynamicImport:MAIN", n), t(n)
                        }
                        n ? t(n) : WialonHosting.IS_MONITORING ? __webpack_require__.e(8).then(__webpack_require__.bind(null, "3poM")).then(e, o) : __webpack_require__.e(9).then(__webpack_require__.bind(null, "wUc4")).then(e, o)
                    }))
                }
            }, WialonLoginPage.loadOurScripts = function (t, n) {
                var e = t.length,
                    o = [];
                e ? t.forEach((function (t) {
                    WialonLoginPage.loadScript(Object(_cms_groups_js__WEBPACK_IMPORTED_MODULE_1__.b)(t), (function (t) {
                        e--, t && o.push(t), 0 === e && n(o.length ? o : null)
                    }))
                })) : n(null)
            }, WialonLoginPage.loadLoginExtScripts = function () {
                if (!loginExtScriptsLoading) {
                    loginExtScriptsLoading = !0;
                    for (var t = LOGIN_EXT_SCRIPTS.split(","), n = 0; n < t.length; n++) "string" == typeof t[n] && t[n].length && WialonLoginPage.loadScript(t[n])
                }
            }, WialonLoginPage.loadOptionalScripts = function () {
                if (!optionalScriptsLoading) {
                    optionalScriptsLoading = !0;
                    for (var t = OPTIONAL_SCRIPTS.split(","), n = 0; n < t.length; n++) "string" == typeof t[n] && t[n].length && WialonLoginPage.loadScript(t[n])
                }
            }, WialonLoginPage.loadScript = function (t, n) {
                Object(Util_dom_on_ready_js__WEBPACK_IMPORTED_MODULE_0__.b)((function () {
                    var e = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("script");
                    n && o.addEventListener("load", (function () {
                        n(null)
                    })), o.setAttribute("type", "text/javascript"), o.setAttribute("charset", "UTF-8"), o.setAttribute("async", ""), o.setAttribute("defer", ""), o.setAttribute("src", t), e.appendChild(o)
                }))
            }, WialonHosting.IS_DEV && __webpack_require__.e(10).then(__webpack_require__.bind(null, "umqW"))
        },
        CaSX: function (t, n, e) {
            "use strict";
            var o = e("xluH"),
                i = WialonHosting.Dom.consumeTemplates({
                    html: '<div data-template-id="blocking" data-add-classes="css.BlockingContainer">\n\t<div data-add-classes="css.Blocking" data-element="blockingPanelEl">\n\t\t<div data-add-classes="css.BlockingTitle" data-element="titleEl" dir="auto"></div>\n\t\t<div data-add-classes="css.BlockingPreloader" data-element="preloaderEl"></div>\n\t</div>\n</div>',
                    returnObj: !0
                }),
                a = e("D0V7"),
                r = e.n(a),
                s = e("J/y9"),
                l = e("pyWF"),
                c = e("AFqa");
            e.d(n, "c", (function () {
                return f
            })), e.d(n, "a", (function () {
                return m
            })), e.d(n, "b", (function () {
                return d
            }));
            var d = "SPLASH",
                u = 100,
                g = 150,
                p = 500,
                f = new m({
                    overlay: o.b,
                    blockingZIndex: 1e4
                });

            function m(t) {
                var n = t.overlay,
                    e = t.parentNode,
                    o = t.blockingZIndex,
                    a = t.settings;
                e || (e = document.body);
                var f = this,
                    m = i.blocking(),
                    h = Object(s.a)(m, {
                        css: r.a
                    }),
                    b = h.titleEl,
                    _ = 0,
                    v = "",
                    w = null,
                    y = {},
                    k = 0,
                    L = [],
                    x = new SimplePubSub,
                    W = !1,
                    S = 0,
                    A = null,
                    C = null,
                    E = "white",
                    I = !1;
                m.classList.add(r.a.heavy);
                var H = !1,
                    P = !1,
                    O = null;
                var T = new l.a({
                        toggled: !0,
                        elements: [{
                            element: h.blockingPanelEl
                        }],
                        properties: [{
                            name: "opacity",
                            valueOn: "1",
                            valueOff: "0"
                        }],
                        duration: {
                            on: u,
                            off: g
                        },
                        onBeforeToggle: function (t) {
                            t.toggle && !m.parentNode && e.appendChild(m), P = !0
                        },
                        onAnimationStart: function () {
                            v ? b.innerText = v : w ? b.innerHTML = w : b.innerText = ""
                        },
                        onAfterToggle: function (t) {
                            !t.toggle && m.parentNode && m.parentNode.removeChild(m), P = !1, O && (O(), O = null)
                        }
                    }),
                    U = !1;
                this.getBlocksSet = function () {
                    return y
                };
                var N = 0;

                function j() {
                    function t() {
                        for (T.toggle(!1); L.length;) L.shift()();
                        x.notify()
                    }
                    N >= o && _ > 0 ? (S && (clearTimeout(S), S = 0), T.toggle(!0, {
                        withoutAnimation: U
                    })) : (S || (W ? S = setTimeout((function () {
                        S = 0, t()
                    }), p) : t()), W = !1), U && (U = !1)
                }

                function F(t) {
                    A = t, D()
                }

                function D() {
                    var t = C && A;

                    function n() {
                        h.preloaderEl.innerHTML = "";
                        var t = I ? C : A;
                        t = Object(c.b)(t);
                        var n = document.createElement("img");
                        n.src = t, h.preloaderEl.appendChild(n)
                    }
                    H ? P ? O = n : n() : (t && (H = !0), n())
                }
                n.watchZIndex((function (t) {
                        N = t, j()
                    })), this.startBlockingOperation = function (t) {
                        "string" == typeof t && (WialonHosting.Log.warn("[deprecated] use {text} instead"), t = {
                            text: t
                        });
                        var e = t || {},
                            i = e.text,
                            a = e.html,
                            r = e.name,
                            s = e.backgroundColor,
                            l = e.withoutOverlayOnAnimation;
                        i || a || (i = WialonHosting.blocking.DEFAULT_TEXT), r ? y[r] = !0 : (r = ++k, y[r] = new Error), _++, v = i, w = a, s && (W = !0);
                        var c = s;
                        c === d && (c = function () {
                            return E
                        });
                        var u = n.startOverlaying({
                                zIndex: o,
                                doNotWait: t && t.doNotWait,
                                backgroundColor: c,
                                withoutOnAnimation: l
                            }),
                            g = !1;
                        return j(), {
                            finish: function (t) {
                                g ? t && t.onFinish && (f.isBusy() ? L.push(t.onFinish) : t.onFinish()) : (t && t.onFinish && L.push(t.onFinish), delete y[r], g = !0, _--, u.finish(), j())
                            },
                            n: _
                        }
                    }, this.isBusy = function () {
                        return _ > 0
                    }, this.watchBlockingFinish = function (t, n) {
                        return x.watch(t, n)
                    }, this.toggleable = function (t) {
                        var n = null;
                        return {
                            toggle: function (e, o) {
                                e ? n || (n = f.startBlockingOperation(t)) : n && (n.finish(o), n = null)
                            }
                        }
                    }, this.toggleLightMode = function (t) {
                        I = t, m.classList.remove(t ? r.a.heavy : r.a.light), m.classList.add(t ? r.a.light : r.a.heavy), D()
                    }, this._useImgPreloader = F, this._useLightImgPreloader = function (t) {
                        C = t, D()
                    }, this._setOverlaySplashBackground = function (t) {
                        E = t
                    }, this._getSettings = function () {
                        return {
                            preloaderImgUrl: A,
                            splashBackgroundColor: E
                        }
                    }, this._setSettings = function (t) {
                        t.preloaderImgUrl && F(t.preloaderImgUrl), E = t.splashBackgroundColor
                    },
                    function () {
                        a && this._setSettings(a)
                    }.call(this)
            }
            window.WialonHosting || (window.WialonHosting = {}), WialonHosting.blocking = f, WialonHosting.blocking.DEFAULT_TEXT = WialonHosting.LoginTranslations.loading_short
        },
        CcTO: function (t, n, e) {
            t.exports = {
                LoginAsHelpWindowContent: "LoginAsHelpWindowContent-1HdOE",
                LoginAsBody: "LoginAsBody-1wS4E",
                LoginAsBodyControls: "LoginAsBodyControls-2yRki",
                LoginAsTypeSelect: "LoginAsTypeSelect-2HEJU",
                LoginAsSearch: "LoginAsSearch-1oYxZ",
                LoginAsUsers: "LoginAsUsers-qZb52",
                LoginAsUsersTable: "LoginAsUsersTable-JaCSb",
                LoginAsContinueAs: "LoginAsContinueAs-VgS8K",
                LoginAsUserRow: "LoginAsUserRow-1s1Iy",
                NoUsers: "NoUsers-19SaC"
            }
        },
        D0V7: function (t, n, e) {
            t.exports = {
                Overlay: "Overlay-1ohWe",
                BlockingContainer: "BlockingContainer-2q1Di",
                heavy: "heavy-3p2hv",
                Blocking: "Blocking-3FPqY",
                BlockingTitle: "BlockingTitle-3n_GX",
                light: "light-2cxyV",
                BlockingPreloader: "BlockingPreloader-3J794",
                BlockingPreloaderContent: "BlockingPreloaderContent-21LC7"
            }
        },
        D0sG: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return i
            })), e.d(n, "c", (function () {
                return a
            })), e.d(n, "b", (function () {
                return r
            }));
            var o = null;

            function i() {
                o = sessionStorage.getItem("wh_reload_login"), window.addEventListener("beforeunload", (function () {
                    var t = window.wialon && wialon.core && wialon.core.Session && wialon.core.Session.getInstance(),
                        n = t && t.getId(),
                        e = t && t.getCurrUser(),
                        o = e && t.getAuthUser() !== e.getName();
                    n && !o && sessionStorage.setItem("wh_reload_login", n)
                }))
            }

            function a(t) {
                t ? sessionStorage.setItem("wh_reload_login", t) : sessionStorage.removeItem("wh_reload_login")
            }

            function r(t) {
                return o === t
            }
        },
        GLyu: function (t, n) {
            WialonHosting.Dom.onComplete((function () {
                var t = document.createElement("style");
                t.appendChild(document.createTextNode("body.login-two-factor #two_factor_code_input {\n\twidth: 100%;\n}\n\nbody.login-two-factor #two_factor_resend_code.disabled {\n\topacity: 0.5;\n}\n\nbody.login-two-factor .two-factor-resend-code-tr > th {\n\tfont-weight: normal;\n}\nbody.login-two-factor .two-factor-resend-code-tr > .td {\n\tpadding-top: 15px;\n}\n\nbody.login-two-factor .two-factor-resend-code-td > div {\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n}\nbody.login-two-factor .two-factor-resend-code-td > div > input {\n\twidth: 100%;\n}\n\n/* Both SMS and Email are available */\n\nbody.login-two-factor .two-factor-resend-code-td.sms-email > div {\n\twidth: 50%;\n}\nbody.login-two-factor .two-factor-resend-code-td.sms-email > div.sms-div {\n\tpadding-right: 3px;\n}\nbody.login-two-factor .two-factor-resend-code-td.sms-email > div.email-div {\n\tpadding-left: 3px;\n}\n\n/* Only Email is available */\n\nbody.login-two-factor .two-factor-resend-code-td.email > div.sms-div {\n\tdisplay: none;\n}\nbody.login-two-factor .two-factor-resend-code-td.email > div.email-div {\n\twidth: 100%;\n}")), document.head.appendChild(t)
            }), {
                allowInteractive: !0
            })
        },
        GyZG: function (t, n, e) {
            "use strict";
            (function (t) {
                e.d(n, "a", (function () {
                    return f
                }));
                var o = e("cMNc"),
                    i = e("jPtB"),
                    a = e("AFqa"),
                    r = e("kjYQ"),
                    s = e("UyLW"),
                    l = e("LqmG"),
                    c = e("Pk0M"),
                    d = e.n(c),
                    u = e("cAa7"),
                    g = e("3o/7"),
                    p = {
                        type: "cancelled"
                    };

                function f(t, n) {
                    var c = t.context,
                        d = t.majorSkin,
                        f = t.minorSkin;
                    "function" != typeof n && (n = function () {});
                    var h = c.junk.systemSkin;
                    if (!h) {
                        var b = document.createElement("style");
                        b.setAttribute("data-grep-hint", "d57344b7"), h = {
                            majorSkin: {
                                name: void 0,
                                variables: null,
                                defaultVariables: s.c,
                                loading: null
                            },
                            minorSkin: {
                                name: null,
                                variables: null,
                                defaultVariables: {},
                                loading: null
                            },
                            combinedVariables: null,
                            customLessStyleEl: b,
                            updatesPubSub: new u.a,
                            debouncer: Object(r.a)(25)
                        }, c.junk.systemSkin = h;
                        var _, v = function () {
                            var t = (document.head || document.querySelector("head")).querySelector("link[data-system-link]");
                            t ? t.parentNode.insertBefore(b, t) : WialonHosting.Log.error("skins:noFirstSystemLink")
                        };
                        if (c.skins.cssLinkAddedPubSub.watch((function (t) {
                                t.linkElement.setAttribute("data-system-link", "")
                            })), c.skins.firstSystemCssLinkAdded.get()) v();
                        else _ = c.skins.firstSystemCssLinkAdded.watch((function (t) {
                            t && (v(), _.cancel())
                        }), {
                            updates: !0
                        });
                        if (Object(i.b)() && c.skins.cssLinkAddedPubSub.watch((function () {
                                W(h.combinedVariables)
                            })), c.skins._customVariablesChangedPubsub.watch((function () {
                                L()
                            })), WialonHosting.IS_MONITORING) {
                            var w = (d || "default") + "/" + (f || "default");
                            w += "/" + (c.skins.isSkinSelectedByUser ? "1" : "0"), WialonHosting.Log.measurement("skin", w, {
                                oncePerDay: !0
                            })
                        }
                        0
                    }
                    return Promise.all([k(h.majorSkin, d).then(null, y), k(h.minorSkin, f).then(null, y)]);

                    function y(t) {
                        return t === p ? Promise.resolve() : (WialonHosting.Log.warn("skins:updateSkin:rejected", t), Promise.resolve())
                    }

                    function k(t, n) {
                        if (t.name === n) return Promise.resolve();
                        if (t.loading && (t.loading.cancel(), t.loading = null), t === h.minorSkin && n === c.skins.initialMinorSkin && c.skins.initialMinorSkinNotExists && (n = null), !n) {
                            t.name = n, t.variables = {};
                            var i = h.updatesPubSub.once();
                            return h.debouncer(L), i
                        }
                        t.name = n;
                        var a, r = !1;
                        return t.loading = {
                            cancel: function () {
                                r || (r = !0, a && (a.cancel(), a = null))
                            }
                        }, new Promise((function (i, c) {
                            function d(t) {
                                r ? c(p) : i(t)
                            }

                            function u(t) {
                                c(r || t === p ? p : t)
                            }
                            r && u(p), a = Object(l.a)({
                                skin: n,
                                withCustomLess: !0
                            }, (function (i, a) {
                                if (r) u(p);
                                else if (i) {
                                    if (t === h.majorSkin) {
                                        WialonHosting.Log.error("skin:loadMajorSkin", i);
                                        var l = {};
                                        for (var c in s.b) Object.prototype.hasOwnProperty.call(s.b, c) && (l[c] = "");
                                        t.variables = l;
                                        var g = h.updatesPubSub.once();
                                        return h.debouncer(L), void g.then(d, u)
                                    }
                                    u(i)
                                } else {
                                    t._rawData = a && a.data;
                                    var f = Object.assign({}, a && a.data && a.data.variables);
                                    for (var m in f) Object.prototype.hasOwnProperty.call(f, m) && (f[m] = Object(o.b)(f[m], (function (t) {
                                        return Object(o.a)(t) ? t = Object(o.c)("/zskins/" + n + "/", t) : null
                                    })));
                                    t.variables = Object.assign({}, f),
                                        function (t) {
                                            if (!t) return void(h.customLessStyleEl.innerHTML = "");
                                            e.e(11).then(e.t.bind(null, "H5Sr", 7)).then((function (n) {
                                                n.render(t, {
                                                    compress: !1
                                                }).then((function (t) {
                                                    t && t.css && (h.customLessStyleEl.innerHTML = "", h.customLessStyleEl.appendChild(document.createTextNode(t.css)))
                                                }))
                                            })).catch((function (t) {
                                                WialonHosting.Log.warn("skin:custom.less:lessError", t)
                                            }))
                                        }(a && !a.customLessError && a.customLess);
                                    var b = h.updatesPubSub.once();
                                    h.debouncer(L), b.then(d, u)
                                }
                            }))
                        }))
                    }

                    function L() {
                        x(), W(h.combinedVariables), h.updatesPubSub.notify([])
                    }

                    function x() {
                        var t = c.junk.loginSkin && c.junk.loginSkin.variables,
                            n = Object.assign({}, c.skins._customVariables, t, h.majorSkin.defaultVariables, h.minorSkin.defaultVariables, h.majorSkin.variables, h.minorSkin.variables),
                            e = Object(g.a)({
                                configs: [{
                                    config: s.a,
                                    cssPath: null,
                                    skinPath: "/"
                                }, {
                                    config: h.majorSkin._rawData,
                                    cssPath: c.junk.loginSkin.baseCssUrl,
                                    skinPath: c.junk.loginSkin.skinPath + "/"
                                }, {
                                    config: h.minorSkin._rawData,
                                    cssPath: "/zskins/" + f + "/css/base.css",
                                    skinPath: "/zskins/" + f + "/"
                                }],
                                siteType: c.siteParams.type
                            });
                        for (var i in c.skins.combinedData = e, n) Object.prototype.hasOwnProperty.call(n, i) && (n[i] = Object(o.b)(n[i], (function (t) {
                            return Object(o.a)(t) ? t = Object(a.b)(t) : null
                        })));
                        h.combinedVariables = n
                    }

                    function W(t) {
                        Object(i.a)({
                            context: c,
                            variables: m(t)
                        })
                    }
                }

                function m(t) {
                    var n = {};
                    for (var e in t)
                        if (Object.prototype.hasOwnProperty.call(t, e)) {
                            var o = t[e];
                            n[e] = o;
                            var i = d.a[e];
                            if (i)
                                for (var a in i)
                                    if (Object.prototype.hasOwnProperty.call(i, a)) {
                                        var r = s(i[a], o);
                                        r && (n[a] = r)
                                    }
                        } return n;

                    function s(t, n) {
                        switch (t.type) {
                            case "div":
                                var e = /^(\d+)px$/.exec(n);
                                if (!e) return WialonHosting.Log.error("skins:modifier:div:!px", {
                                    value: n
                                }), null;
                                var o = parseInt(e[1], 10);
                                return o /= t.value, (o = Math.round(10 * o) / 10) + "px";
                            default:
                                WialonHosting.Log.error("skins:unknownModifier", {
                                    type: t.type
                                })
                        }
                        return null
                    }
                }
            }).call(this, e("3UD+")(t))
        },
        HBif: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return i
            }));
            var o = e("LYox");

            function i(t) {
                var n = t.element,
                    e = t.translation;

                function i(t) {
                    var n, o = t.split(":");
                    if (o.length > 1 && (t = o[0], n = o[1]), "string" == typeof e[t]) {
                        var i = e[t];
                        return "colon" === n && (i += ":"), i
                    }
                    return WialonHosting.Log.warn(new Error("i18n:noTranslation"), {
                        phrase: t
                    }), ""
                }

                function a(t, e) {
                    if ("function" == typeof n.getAttribute) {
                        var i = n.getAttribute(t);
                        i && e(n, i)
                    }
                    Object(o.a)(n.children, (function (n) {
                        if ("function" == typeof n.getAttribute) {
                            var o = n.getAttribute(t);
                            o && e(n, o)
                        }
                    }));
                    var a = n.querySelectorAll(":not([data-translate-not]) [" + t + "]");
                    Object(o.a)(a, (function (n) {
                        e(n, n.getAttribute(t))
                    }))
                }
                n && (a("data-translate-phrase", (function (t, n) {
                    t.innerHTML = i(n)
                })), a("data-translate-placeholder", (function (t, n) {
                    t.setAttribute("placeholder", i(n))
                })), a("data-translate-value", (function (t, n) {
                    t.setAttribute("value", i(n))
                })))
            }
        },
        HoQB: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return i
            }));
            var o = e("AjHC");

            function i(t) {
                Object(o.a)((function () {
                    sdk.s.updateSessionProperty({
                        propName: "skip_nonactive_items",
                        propValue: WialonHosting.IS_MONITORING ? 1 : 0
                    });
                    var t = ["avl_resource", "avl_route", "avl_unit", "avl_unit_group", "user"];
                    WialonHosting.IS_CMS && t.push("avl_retranslator"), t.forEach((function (t) {
                        sdk.s.updateDataFlags([{
                            type: "type",
                            data: t,
                            flags: 4294967295,
                            mode: 2
                        }])
                    })), sdk.r.remoteCall("render/remove_layer", {
                        layerName: "messages"
                    }), (sessionStorage.getItem("trackLayers") || "").split(",").forEach((function (t) {
                        sdk.r.remoteCall("render/remove_layer", {
                            layerName: t
                        })
                    })), sessionStorage.removeItem("trackLayers"), sdk.r.remoteCall("report/cleanup_result", {}), sdk.r.remoteCall("events/update_units", {
                        mode: "clear"
                    })
                }), (function () {
                    t(null)
                }))
            }
        },
        "J/y9": function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return r
            }));
            var o = e("LYox"),
                i = "b7c1caa8_",
                a = 0;

            function r(t, n) {
                var e, o = [],
                    i = {
                        postCalls: o
                    };
                return Array.isArray(t) ? (e = {}, t.forEach((function (t) {
                    s(t, n, e, i)
                }))) : e = s(t, n, null, i), o.forEach((function (t) {
                    t()
                })), e
            }

            function s(t, n, e, r) {
                e || (e = {});
                var s, l, c = r.postCalls;

                function d(n, e) {
                    if (t.getAttribute) {
                        var i = t.getAttribute(n);
                        i && e(t, i)
                    }
                    Object(o.a)(t.querySelectorAll("[" + n + "]"), (function (t) {
                        e(t, t.getAttribute(n))
                    }))
                }

                function u(t, e) {
                    d(t, (function (t, o) {
                        if ("function" == typeof n[o]) {
                            var i = n[o];
                            t.addEventListener(e, i), s.push((function () {
                                t.removeEventListener(e, i)
                            }))
                        }
                    }))
                }
                return e._cancels ? s = e._cancels : (s = [], e._cancels = s), e.cancel = function () {
                    if (s) {
                        var t = s;
                        s = null, t.forEach((function (t) {
                            t()
                        }))
                    }
                }, d("data-element", (function (t, n) {
                    e[n] = t
                })), d("data-element-list", (function (t, n) {
                    n && n.split(",").forEach((function (n) {
                        var o = e[n];
                        Array.isArray(o) || (e[n] = o = []), o.push(t)
                    }))
                })), d("data-gen-id", (function (t, n) {
                    var o = i + ++a;
                    t.id = o, e[n] = o
                })), d("data-gen-name", (function (t, n) {
                    var o = e[n];
                    o || (o = i + ++a, e[n] = o), t.setAttribute("name", o)
                })), d("data-label-for-gen-id", (function (t, n) {
                    t.setAttribute("for", e[n])
                })), d("data-help-tip", (function (t, n) {
                    var i = t.getAttribute("data-element"),
                        a = new WialonHosting.Controls.HelpTip({
                            tipKey: n
                        }).getElement();
                    a.style.display = t.style.display, Object(o.a)(t.classList, (function (t) {
                        a.classList.add(t)
                    })), t.parentNode.insertBefore(a, t), t.parentNode.removeChild(t), i && (e[i] = a)
                })), d("data-place-svg-icon", (function (t, n) {
                    var e = WialonHosting.SvgIcons[n]();
                    t.appendChild(e)
                })), d("data-show", (function (t, o) {
                    var i = /^el\.(.+)$/.exec(o);
                    i ? (o = i[1], c.push((function () {
                        var i = e[o];
                        if (i && i.addEventListener) {
                            var a = t.getAttribute("data-onshow"),
                                r = n && n[a],
                                l = function (n) {
                                    t.style.display = i.checked ? "" : "none", n && r && r({
                                        shown: i.checked
                                    })
                                };
                            l(), i.addEventListener("change", l), s.push((function () {
                                i.removeEventListener("change", l)
                            }))
                        } else WialonHosting.Log.error(new Error("dom:binding:data-show:noElement"), {
                            key: o
                        }), t.style.display = "none"
                    }))) : t.style.display = n && n[o] ? "" : "none"
                })), n && (d("data-text", (function (t, e) {
                    var o = n[e];
                    o && (t.innerText = o)
                })), d("data-html", (function (t, e) {
                    var o = n[e];
                    o && (t.innerHTML = o)
                })), d("data-img-src", (function (t, e) {
                    var o = n[e];
                    o || (o = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), t.src = o
                })), d("data-add-classes", (function (t, e) {
                    function o(e) {
                        var o;
                        e.indexOf(".") >= 0 ? o = e.split(".").reduce((function (t, n) {
                            return t && t[n]
                        }), n) : o = n[e];
                        Array.isArray(o) ? o.forEach((function (n) {
                            t.classList.add(n)
                        })) : "string" == typeof o ? t.classList.add(o) : WialonHosting.Log.warn(new Error("data-add-classes bad value by key: " + e))
                    }
                    e.indexOf(" ") >= 0 ? e.split(" ").forEach((function (t) {
                        o(t)
                    })) : o(e)
                })), d("data-select-options", (function (t, e) {
                    var o = n[e];
                    if (Array.isArray(o)) {
                        var i = document.createDocumentFragment();
                        o.forEach((function (t) {
                            var n = document.createElement("option");
                            n.setAttribute("value", t.val), n.innerHTML = t.html, i.appendChild(n)
                        })), t.appendChild(i)
                    }
                })), d("data-colspan", (function (t) {
                    var e = t.getAttribute("data-colspan"),
                        o = n[e];
                    o && t.setAttribute("colspan", o)
                })), l = "id", d("data-id", (function (t, e) {
                    var o = n[e];
                    o && (t[l] = o)
                })), function (t, e) {
                    d(t, (function (t, o) {
                        var i = n[o];
                        i && t.setAttribute(e, i)
                    }))
                }("data-label-for", "for"), u("data-onclick", "click"), u("data-onmouseup", "mouseup"), u("data-onchange", "change"), u("data-onfocus", "focus"), u("data-onblur", "blur"), u("data-onkeydown", "keydown"), u("data-keypress", "keypress"), d("data-onedit", (function (t, e) {
                    var o = n[e];
                    "function" == typeof o && (t.addEventListener("keyup", o), t.addEventListener("change", o), s.push((function () {
                        t.removeEventListener("keyup", o), t.removeEventListener("change", o)
                    })))
                }))), e
            }
        },
        LYox: function (t, n, e) {
            "use strict";
            n.a = function (t, n) {
                if (!t) return;
                var e = t.length;
                if ("number" != typeof e || e <= 0 || !isFinite(e)) return;
                for (var o = 0; o < e; o++) n(t[o], o)
            }
        },
        LnTl: function (t, n, e) {
            "use strict";

            function o(t) {
                var n = t && t.counter || 0,
                    e = [];
                this.increment = function () {
                    n++
                }, this.decrement = function () {
                    if (0 === --n)
                        for (; e.length;) e.shift()()
                }, this.onFinish = function (t) {
                    0 !== n ? e.push(t) : setTimeout((function () {
                        0 === n ? t() : e.push(t)
                    }), 0)
                }
            }

            function i(t, n) {
                var e = new o;
                t.forEach((function (t) {
                    e.increment();
                    var n = !1;
                    t((function () {
                        n || (n = !0, e.decrement())
                    }))
                })), e.onFinish(n)
            }
            e.d(n, "a", (function () {
                return o
            })), e.d(n, "b", (function () {
                return i
            }))
        },
        LqmG: function (t, n, e) {
            "use strict";
            var o = e("mVds"),
                i = e("AFqa"),
                a = e("C90t");
            n.a = function (t, n) {
                var r, s = t.skin,
                    l = t.withCustomLess,
                    c = !1,
                    d = !1;
                u(), WialonHosting.IS_DEV && e.e(10).then(e.bind(null, "+yqk")).then((function (t) {
                    c || (r = t.watchFile({
                        category: "skins",
                        path: s + "/skin.json"
                    }, (function () {
                        u()
                    })))
                }));
                return {
                    cancel: function () {
                        c || (c = !0, r && r.cancel())
                    }
                };

                function u() {
                    if (!d) {
                        d = !0;
                        var t = Object(i.b)("/zskins/" + s + "/skin.json");
                        t = Object(a.c)(t, "r", "" + Date.now()), Object(o.a)({
                            url: t,
                            errorIfNot200: !0
                        }, (function (t, e) {
                            if (d = !1, !c) {
                                switch (s) {
                                    case "_one":
                                    case "almaks":
                                    case "cmiplin":
                                    case "natokon":
                                    case "natsatuk":
                                    case "skytag":
                                    case "hilltronic":
                                        !t && e && e.variables && !e.variables["logo-background"] && (e.variables["logo-background"] = 'url("images/logo/logo.png") no-repeat center center')
                                }
                                if (l)
                                    if (t) n(t);
                                    else if (e && e.withCustomLess) {
                                    var a = Object(i.b)("/zskins/" + s + "/custom.less");
                                    Object(o.a)({
                                        url: a,
                                        dataType: "utf8",
                                        errorIfNot200: !0
                                    }, (function (t, o) {
                                        n(null, {
                                            data: e,
                                            customLess: !t && o,
                                            customLessError: t
                                        })
                                    }))
                                } else n(null, {
                                    data: e,
                                    customLess: null,
                                    customLessError: null
                                });
                                else n(t, e)
                            }
                        }))
                    }
                }
            }
        },
        LsrW: function (t, n, e) {
            "use strict";
            e.d(n, "e", (function () {
                return l
            })), e.d(n, "c", (function () {
                return a
            })), e.d(n, "a", (function () {
                return r
            })), e.d(n, "d", (function () {
                return s
            })), e.d(n, "f", (function () {
                return c
            })), e.d(n, "g", (function () {
                return d
            })), e.d(n, "h", (function () {
                return u
            })), e.d(n, "i", (function () {
                return g
            })), e.d(n, "b", (function () {
                return p
            })), e.d(n, "j", (function () {
                return f
            }));
            var o = e("C90t"),
                i = e("Q+aG"),
                a = m("sid", /^[0-9a-zA-Z]{32}$/),
                r = m("authHash", /^[0-9a-zA-Z]{32}$/),
                s = m("token", /^[0-9a-zA-Z_\-]+$/);
            m("operate_as", /^.+$/);

            function l() {
                var t = Object(o.b)(document.location.href, "wialon_sdk_url");
                return t ? t.replace(/\/$/, "") : null
            }

            function c() {
                return "1" === Object(o.b)(document.location.href, "remember")
            }

            function d() {
                return "1" === Object(o.b)(document.location.href, "use_operate_as")
            }

            function u() {
                WialonLoginUtil.DO_NOT_HIDE_SID || Object(i.a)("sid"), Object(i.b)(["sid", "authHash", "token", "remember"])
            }

            function g() {
                Object(i.b)(["operate_as", "use_operate_as"])
            }

            function p() {
                var t = Object(o.b)(document.location.href, "user"),
                    n = Object(o.b)(document.location.href, "code");
                return t && n ? {
                    user: t,
                    code: n
                } : null
            }

            function f() {
                Object(i.b)(["user", "code"])
            }

            function m(t, n) {
                return function () {
                    var e = Object(o.b)(document.location.href, t);
                    return e && n.test(e) ? e : null
                }
            }
        },
        OzQr: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return o
            })), e.d(n, "b", (function () {
                return i
            })), e.d(n, "c", (function () {
                return a
            }));
            var o = {
                EMAIL: "email",
                PHONE: "phone"
            };

            function i(t) {
                var n;
                switch (parseInt(t, 10)) {
                    case 1:
                        n = o.EMAIL;
                        break;
                    case 2:
                        n = o.PHONE;
                        break;
                    default:
                        n = o.EMAIL, WialonHosting.Log.error("2factor:auth_type", t)
                }
                return n
            }

            function a(t) {
                switch (t) {
                    case o.EMAIL:
                        return 1;
                    case o.PHONE:
                        return 2;
                    default:
                        return WialonHosting.Log.error(new Error("twoFactorSentToToAuthType " + t)), 1
                }
            }
        },
        Pk0M: function (t, n) {
            t.exports = {}
        },
        "Q+aG": function (t, n, e) {
            "use strict";
            e.d(n, "c", (function () {
                return i
            })), e.d(n, "a", (function () {
                return a
            })), e.d(n, "b", (function () {
                return r
            }));
            var o = e("C90t");

            function i(t, n) {
                if ("undefined" != typeof history && history && "function" == typeof history.replaceState) {
                    var e = Object(o.c)(document.location.search, t, n);
                    "?" === e && (e = ""), history.replaceState(null, "", e)
                }
            }

            function a(t) {
                if ("undefined" != typeof history && history && "function" == typeof history.replaceState) {
                    var n = new RegExp("([\\?&])" + t + "=[^&]+(&?)"),
                        e = document.location.search.replace(n, (function (t, n, e) {
                            return "?" === n && "&" === e ? "?" : e ? "&" : ""
                        }));
                    "&" !== e && "?" !== e && e.length || (e = "/"), history.replaceState(null, "", e)
                }
            }

            function r(t) {
                t.forEach((function (t) {
                    a(t)
                }))
            }
        },
        QEdS: function (t, n) {
            WialonHosting.alerts = new function () {
                var t = this,
                    n = null,
                    e = null,
                    o = null,
                    i = null,
                    a = null,
                    r = null,
                    s = 400,
                    l = 1e3,
                    c = 200,
                    d = 300,
                    u = 1,
                    g = .8,
                    p = {
                        SHOWN: "shown",
                        HIDDEN: "hidden",
                        SHOWING: "showing",
                        SWAP_SHOWING: "swap_showing",
                        HIDING: "hiding",
                        SWAP_HIDING: "hiding_to_show"
                    },
                    f = 0,
                    m = {
                        type: p.HIDDEN,
                        startTime: 0,
                        onStartHideListeners: [],
                        initNextFrameWaiter: null,
                        autoHideTimeoutId: 0,
                        animationCancel: null,
                        cancel: function () {
                            for (this.animationCancel && (this.animationCancel(), this.animationCancel = null), this.autoHideTimeoutId && (clearTimeout(this.autoHideTimeoutId), this.autoHideTimeoutId = 0); m.onStartHideListeners.length;) m.onStartHideListeners.shift()()
                        }
                    },
                    h = "none",
                    b = "translateY(20px)";

                function _(e, o, i) {
                    var a = e.html,
                        r = e.contentElement,
                        u = e.autoHideTimeout,
                        g = e.data,
                        h = e.onStartHide;
                    i || (i = ++f);
                    var b = {
                        close: function () {
                            i === f && t.hide()
                        }
                    };

                    function k() {
                        i === f && (m.onStartHideListeners = [], m.initNextFrameWaiter = null, _(e, o, i))
                    }
                    if (m.cancel(), h && m.onStartHideListeners.push(h), !n) return y(), m.initNextFrameWaiter = WialonHosting.Render.nextFrame(k), b;
                    if (m.initNextFrameWaiter) return m.initNextFrameWaiter.cancel(), m.initNextFrameWaiter = WialonHosting.Render.nextFrame(k), b;
                    if ("none" === n.style.display) return n.style.display = "", m.initNextFrameWaiter = WialonHosting.Render.nextFrame(k), b;
                    switch (m.type) {
                        case p.SHOWN:
                        case p.SHOWING:
                        case p.SWAP_SHOWING:
                            v({
                                hideStateType: p.SWAP_HIDING,
                                totalHideDuration: d
                            }, (function () {
                                i === f && w({
                                    showStateType: p.SWAP_SHOWING,
                                    totalShowDuration: c,
                                    html: a,
                                    contentElement: r,
                                    status: o,
                                    data: g
                                }, (function () {
                                    i === f && u && (m.autoHideTimeoutId = setTimeout((function () {
                                        t.hide()
                                    }), u))
                                }))
                            }));
                            break;
                        case p.HIDDEN:
                        case p.HIDING:
                        case p.SWAP_HIDING:
                            ! function (t) {
                                var n = l;
                                m.type === p.SWAP_HIDING ? n = p.SWAP_HIDE_DURATION : m.type === p.HIDDEN && (n = 0);
                                var e = Date.now() - m.startTime;
                                e < 0 ? e = 0 : e > n && (e = n);
                                var o, i = n - e;
                                m.animationCancel = function () {
                                    o && (clearTimeout(o), o = 0)
                                }, o = setTimeout((function () {
                                    o = 0, t()
                                }), i)
                            }((function () {
                                w({
                                    showStateType: p.SHOWING,
                                    totalShowDuration: s,
                                    html: a,
                                    contentElement: r,
                                    status: o,
                                    data: g
                                }, (function () {
                                    u && (m.autoHideTimeoutId = setTimeout((function () {
                                        t.hide()
                                    }), u))
                                }))
                            }));
                            break;
                        default:
                            WialonHosting.Log.error("alerts:animation:unknownState", {
                                type: m.type
                            })
                    }
                    return b
                }

                function v(t, e) {
                    var o = t.totalHideDuration,
                        i = t.hideStateType,
                        a = s,
                        r = 0;
                    if (m.type === p.SWAP_SHOWING ? a = c : m.type === p.SHOWN && (a = 0, r = 1), !r) {
                        var l = Date.now() - m.startTime;
                        l < 0 ? l = 0 : l > a && (l = a), r = l / a
                    }
                    var d = o * r;
                    m.type = i, m.startTime = Date.now(), n.style.transition = "opacity " + (d * g | 0) + "ms, transform " + d + "ms";
                    var u = WialonHosting.Render.nextFrame((function () {
                            u = null, n.style.opacity = "0", n.style.transform = b, f = setTimeout((function () {
                                f = 0, m.type = p.HIDDEN, m.startTime = Date.now(), e()
                            }), d)
                        })),
                        f = 0;
                    m.animationCancel = function () {
                        u && (u.cancel(), u = null), f && (clearTimeout(f), f = 0)
                    }
                }

                function w(t, i) {
                    var s, l, c = t.showStateType,
                        d = t.totalShowDuration,
                        g = t.html,
                        f = t.contentElement,
                        b = t.status,
                        _ = t.data;
                    f ? (a.innerHTML = "", a.appendChild(f)) : a.innerHTML = g, n.classList.remove(o), o = "status-" + b, n.classList.add(o), WialonHosting.Text.containsRTL(a.textContent) && e.classList.add("rtl"), r = _, m.type = c, m.startTime = Date.now(), m.animationCancel = function () {
                        s && (s.cancel(), s = null), l && (clearTimeout(l), l = 0)
                    }, n.style.transition = "opacity " + (d * u | 0) + "ms, transform " + d + "ms", s = WialonHosting.Render.nextFrame((function () {
                        s = null, n.style.opacity = "1", n.style.transform = h, l = setTimeout((function () {
                            l = 0, m.type = p.SHOWN, m.startTime = Date.now(), i && i()
                        }), d)
                    }))
                }

                function y() {
                    n || ((n = document.createElement("div")).className = "x-alert", (e = document.createElement("div")).className = "content", (i = document.createElement("div")).className = "alert-img", (a = document.createElement("div")).className = "alert-text", a.setAttribute("dir", "auto"), e.appendChild(i), e.appendChild(a), n.appendChild(e), e.addEventListener("touchstart", (function (n) {
                        n && n.preventDefault && n.preventDefault(), t.hide()
                    })), e.addEventListener("mousedown", (function (n) {
                        n && n.preventDefault && n.preventDefault(), t.hide()
                    })), n.style.opacity = "0", n.style.transform = b, document.body.appendChild(n))
                }
                this.show = function (t) {
                    return _(t, t.status || "normal")
                }, this.error = function (t) {
                    return _(t, "error")
                }, this.success = function (t) {
                    return _(t, "success")
                }, this.warning = function (t) {
                    return _(t, "warning")
                }, this.info = function (t) {
                    return _(t, "info")
                }, this.hide = function () {
                    if (f++, n && !m.initNextFrameWaiter) switch (m.type) {
                        case p.SHOWN:
                        case p.SHOWING:
                        case p.SWAP_SHOWING:
                            m.cancel(), v({
                                hideStateType: p.HIDING,
                                totalHideDuration: l
                            }, (function () {
                                m.type = p.HIDDEN, m.type.startTime = Date.now(), n.style.display = "none"
                            }));
                            break;
                        case p.HIDDEN:
                        case p.HIDING:
                        case p.SWAP_HIDING:
                            break;
                        default:
                            WialonHosting.Log.error("alerts:animation:unknownState", {
                                type: m.type
                            })
                    }
                }, this.forceSetContent = function (t) {
                    a && (a.innerHTML = t.html)
                }, this.getData = function () {
                    return r
                }
            }
        },
        RJTk: function (t, n, e) {
            "use strict";

            function o(t, n, e) {
                Object.defineProperty(t, n, {
                    get: function () {
                        return WialonHosting.IS_DEV, e
                    },
                    set: function (t) {
                        WialonHosting.IS_DEV, e = t
                    }
                })
            }
            e.d(n, "a", (function () {
                return o
            }))
        },
        Rt1T: function (t, n, e) {
            "use strict";
            e("GLyu"), e("udyI");
            var o = e("AFqa");
            WialonHosting.Dom.onInteractive((function () {
                var t = document.createElement("style"),
                    n = "";
                Object(o.c)() && (n = Object(o.c)());
                var e = '.x-alert > .content:hover::after { background: url("/static/skin/misc/close.svg?' + n + '"); } ';
                e += '.x-alert.status-error .alert-img { background-image: url("/img/error.svg?' + n + '"); }', e += '.x-alert.status-success .alert-img {\tbackground-image: url("/img/confirm.svg?' + n + '"); }', e += '.x-alert.status-warning .alert-img {\tbackground-image: url("/img/warning.svg?' + n + '"); }', e += '.x-alert.status-info .alert-img {\tbackground-image: url("/img/information.svg?' + n + '"); }', t.innerHTML = e, document.head.appendChild(t)
            }));
            WialonHosting.Dom.onInteractive((function () {
                var t = document.createElement("style");
                t.appendChild(document.createTextNode('\n.x-alert {\n\tposition: fixed;\n\tbottom: 86px;\n\tleft: 0;\n\twidth: 100%;\n\ttext-align: center;\n\n\tz-index: 10002; /* over blocking cover and mobile appstore button */\n\n\tpointer-events: none;\n}\n\n.x-alert > .content {\n\tposition: relative;\n\n\tdisplay: inline-flex;\n\tbackground: white;\n\ttext-align: left;\n\tpadding: 12px 15px;\n\tborder-radius: 4px;\n\n\tmin-width: 250px;\n\tmax-width: 500px;\n\n\tbox-sizing: border-box;\n\n\tborder: 1px solid black;\n\n\tcursor: pointer;\n\n\tpointer-events: auto;\n}\n\n.x-alert > .rtl {\n\tflex-direction: row-reverse;\n}\n\n.x-alert > .rtl > .alert-img {\n\tmargin-left: 10px;\n\tmargin-right: 0;\n}\n\n.x-alert > .rtl:hover::after {\n\tleft: 1px;\n}\n\n.x-alert > .content:hover::after {\n\tcontent: "";\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 1px;\n\tright: 1px;\n\tbackground-size: contain;\n\twidth: 16px;\n\theight: 16px;\n}\n\n@media screen and (max-width: 560px) {\n\t.x-alert > .content {\n\t\tmin-width: 89.3%;\n\t\tmax-width: 89.3%;\n\t}\n}\n\n.alert-img {\n\tbackground-repeat: no-repeat;\n\tmin-width: 18px;\n\tmin-height: 18px;\n\tmargin-right: 10px;\n}\n\n.content > .alert-text {\n\talign-self: center;\n\tjustify-self: start;\n}\n\n.x-alert.status-error {\n\tcolor: red;\n}\n\n.x-alert.status-error > .content {\n\tborder-color: red;\n\tbackground-color: #ffefeb;\n}\n\n.x-alert.status-success {\n\tcolor: #157E19;\n}\n\n.x-alert.status-success > .content {\n\tborder-color: #4caf50;\n\tbackground: #f2fff4;\n}\n\n.x-alert.status-warning {\n\tcolor: #E15E00;\n}\n\n.x-alert.status-warning > .content {\n\tborder-color: #FF9100;\n\tbackground-color: #FFF9F2;\n}\n\n.x-alert.status-info {\n\tcolor: #000;\n}\n\n.x-alert.status-info > .content {\n\tborder-color: #3399FF;\n\tbackground-color: #FFF;\n}')), document.head.appendChild(t)
            }));
            WialonHosting.Dom.onInteractive((function () {
                var t = document.createElement("style");
                t.setAttribute("data-grep-hint", "7477adec"), t.appendChild(document.createTextNode("\n* {\n\tmargin: 0;\n\tpadding: 0;\n}\nhtml, body {\n\theight: 100%;\n}\n\nbody {\n  margin: 0 0;\n  font-family: Arial, Tahoma;\n  font-size: 12px;\n}\n\nlabel {\n\tcursor: pointer;\n}\n\nselect {\n  font-size: 12px;\n  padding: 0px;\n  margin: 0px;\n}\n\ntextarea {\n  font-size: 12px;\n  padding: 0px;\n  margin: 0px;\n}\n\ntable, th, td {\n  border: 0px;\n  font-family: Arial, Tahoma;\n  font-size: 12px;\n}\n\nimg {\n  border: 0px;\n}\n\n#login_body input[type='text'],\n#login_body input[type='password'],\n#reset_body input[type='text'],\n#two_factor_body input[type='text'] {\n\tpadding: 1px 5px 1px 5px;\n\theight: 22px;\n\tbox-sizing: border-box;\n}\n#login_body select {\n\theight: 22px;\n\tbox-sizing: border-box;\n}\n\nbody.login input.empty-input {\n  border-color: red;\n}\nbody.login input.invalid-input {\n  border-color: red;\n}\nbody.login input.invalid-input:hover {\n  border-color: red;\n}\n\n#reset_body input[type='submit'] {\n\tpadding: 2px 0 2px 0;\n}\n\ninput, input:hover, input:focus, button, button:hover, button:focus, select, select:hover, select:focus {\n\toutline: none;\n}\n\ninput, button {\n  font-size: 12px;\n  padding: 0px;\n  margin: 0px;\n  vertical-align: middle;\n}\n\ninput[type='button'], button {\n  cursor: pointer;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  white-space: pre;\n}\n\n#two_factor_body input.invalid-code {\n  color: red;\n}\n\n.TB_overlayBG {\n\tposition: fixed;\n\tz-index: 1200;\n\ttop: 0px;\n\tleft: 0px;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: #000;\n\tfilter: alpha(opacity=35);\n\t-moz-opacity: 0.35;\n\topacity: 0.35;\n}\n\n.initial-progress {\n\tposition: absolute;\n\tcolor: gray;\n\tborder-radius: 4px;\n\twidth: 320px;\n\theight: 160px;\n\tleft: 50%;\n\ttop: 50%;\n\tposition: absolute;\n\t-moz-transform: translate(-50%, -50%); /* Firefox */\n\t-ms-transform: translate(-50%, -50%); /* IE */\n\t-webkit-transform: translate(-50%, -50%); /* Safari, Chrome, iOS */\n\t-o-transform: translate(-50%, -50%); /* Opera */\n\ttransform: translate(-50%, -50%);\n\tline-height: 130px;\n\topacity: 1;\n\tfilter:alpha(opacity=100);\n\tz-index: 10001;\n}\n\n.is_overlay{ display: block; width: 100%; height: 100%; }\n#video_trailer {\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n  overflow: hidden;\n  display: block;\n  z-index: -1;\n}\n\n#video_trailer > video {\n  position: fixed;\n    min-width: 100%;\n    min-height: 100%;\n    z-index: -100;\n    background-size: cover;\n    object-fit: cover;\n}\n\n.login-video {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    background-size: cover;\n}\n\n.login div.logo-data-reset > table > tbody > tr:not(:last-child) > th,\n.login div.logo-data-reset > table > tbody > tr:not(:last-child) > td {\n  padding-bottom: 3px;\n}\n\n.login div.logo-data-reset input {\n  margin: 0;\n}\n\nbody.login.without-skin div.logo-data-reset {\n  padding: 40px 0;\n  height: initial;\n}\nbody.login.with-skin div.logo-data-reset {\n  padding-bottom: 40px;\n}\n\n@media all and (max-height: 640px) and (max-width: 480px) {\n  body.login div.login-gradient-bg {\n    min-height: 320px;\n    height: 100%;\n  }\n  body div.login-pading {\n    padding-top: 20px;\n    padding-left: initial;\n    padding-right: initial;\n    width: 400px;\n    margin-left: 15px;\n  }\n  body.login div.logo-enter {\n    position: absolute;\n    padding-top: 0px;\n    right: 65px;\n    bottom: 35px;\n    top: initial;\n  }\n  body .wh-banner {\n    display: none;\n  }\n}\n@media screen and (max-width: 319px) and (orientation: portrait) {\n  body .wh-banner {\n    display: none;\n  }\n}\n@media screen and (max-width: 767px) and (orientation: portrait) {\n  body.login input[type='text'],\n  body.login input[type='password'],\n  body.login select {\n    width: 100% !important;\n  }\n  body div.login-pading {\n    width: 90% !important;\n    padding: 0  !important;\n    margin-left: 5%;\n  }\n  body.without-skin.login div.login-bg,\n  body.login div.login-bg {\n    border-radius: 0px;\n    margin: 0  !important;\n    width: 100%;\n    height: 100%;\n    left: 50%;\n    top: 50%;\n    position: absolute;\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    background-size: 100% 100%;\n  }\n  body.login div.logo-img {\n    background-size: 60%;\n    background-position-y: 20px;\n    max-width: 320px;\n    margin: 0 auto;\n  }\n  body div.appstore-buttons {\n    display: none;\n  }\n  body .wh-banner {\n    display: none;\n  }\n}\n@media screen and (max-width: 500px) and (orientation: landscape) {\n  body.login div.logo-img {\n    background-size: 50%;\n    background-position-y: 20px;\n    width: 90%;\n  }\n  body div.login-pading {\n    width: 90% !important;\n    padding: 0  !important;\n    margin-left: 5%;\n  }\n  body div.appstore-buttons {\n    display: none;\n  }\n  body div.logo-error {\n    padding-top: 0 !important;\n  }\n  body.login div.logo-data {\n    padding-top: 0px;\n  }\n  body.without-skin.login div.login-bg,\n  body.login div.login-bg {\n    border-radius: 6px;\n    margin: 0  !important;\n    width: 100%;\n    height: 100%;\n    left: 50%;\n    top: 50%;\n    position: absolute;\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    background-size: 100% 100%;\n  }\n  body .wh-banner {\n    display: none;\n  }\n}\n@media all and (max-width: 550px) {\n  body .wh-banner {\n    display: none;\n  }\n}\n@media all and (max-width: 480px) {\n  /* 480px*/\n  body.login div.logo-enter {\n    text-align: center;\n    position: initial;\n    right: initial;\n    bottom: initial;\n  }\n  body div.login-pading {\n    width: 360px;\n  }\n  body .wh-banner {\n    display: none;\n  }\n}\n@media all and (max-width: 370px) {\n  /* 480px*/\n  body .wh-banner {\n    display: none;\n  }\n}\n\n@media only screen and (max-height: 860px) {\n  .without-skin #login_body .wh-banner {\n    top: 503px;\n  }\n  .without-skin #login_body .wh-banner.without-appstore-buttons {\n    top: 422px;\n  }\n  .without-skin.login div.login-bg {\n    margin-top: -300px;\n  }\n}")), (document.head || document.querySelector("head")).appendChild(t)
            }))
        },
        "TI/g": function (t, n) {
            var e;
            e = WialonHosting.CustomOptions.cookie_policy, WialonLoginPage.onFinish((function () {
                if ("undefined" != typeof sdk && sdk && sdk.u) {
                    if (WialonLoginUtil.isOwnLogin() && !(parseInt(sdk.u.getCustomProperty("i_agree_with_cookie_policy", "0"), 10) > 0)) {
                        var t = function (t) {
                            if (!(t = t.trim()) || "0" === t) return null;
                            var n = {
                                langs: {},
                                url: "https://gurtam.com/{lang}/cookie-policy"
                            };
                            return "1" === t ? (n.langs.en = !0, n) : (t.split(";").forEach((function (t) {
                                /^https?:/.test(t) ? n.url = t : n.langs[t] = !0
                            })), n)
                        }(e);
                        if (t) {
                            var n = WialonHosting.Language.getLanguage();
                            if (t.langs[n]) {
                                var o, i, a = (o = WialonLoginPage.translation.cookie_policy, i = (i = t.url).replace(/{lang}/g, n), o = o.replace(/~(.+?)~/g, (function (t, n) {
                                        return '<a href="' + i + '" target="_blank">' + n + "</a>"
                                    }))),
                                    r = document.createElement("div");
                                r.className = "x-cookie-policy" + (WialonHosting.Text.containsRTL(a) ? " rtl" : "");
                                var s = document.createElement("div"),
                                    l = document.createElement("div");
                                s.className = "text", s.innerHTML = a, r.appendChild(s), r.appendChild(l);
                                var c = document.createElement("button");
                                l.appendChild(c), c.innerHTML = WialonLoginPage.translation.ok, c.addEventListener("click", (function () {
                                    r.parentNode && r.parentNode.removeChild(r), sdk.u.updateCustomProperty("i_agree_with_cookie_policy", "1")
                                })), document.body.appendChild(r)
                            }
                        }
                    }
                } else WialonHosting.Log.error("cookie_policy:nouser")
            }))
        },
        TxjN: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return c
            }));
            var o = e("HBif"),
                i = e("CcTO"),
                a = e.n(i),
                r = {};

            function s() {
                WebCMS.register_module({
                    getType: function () {
                        return "user_switch_body"
                    },
                    translation: r,
                    on_translation_applied: function () {
                        WialonHosting.i18n.wrapTranslationWithSprintf(r)
                    }
                })
            }
            window.WebCMS || (window.WebCMS = {}), "function" != typeof WebCMS.register_module ? (Array.isArray(WebCMS._onLoaded) || (WebCMS._onLoaded = []), WebCMS._onLoaded.push(s)) : s();
            var l = 0;

            function c(t) {
                var n = t.withoutInNewWindow,
                    e = t.continueAs,
                    i = t.onContinueAs,
                    s = t.authUser,
                    c = t.onAuthUser,
                    d = t.onOperateAs,
                    u = t.usersProvider,
                    g = WialonHosting.Dom.instantiateTemplate("login:login_as", "body");
                Object(o.a)({
                    element: g,
                    translation: r
                });
                var p, f = "user_switch_body_" + ++l,
                    m = !1,
                    h = new SimplePubSub,
                    b = null,
                    _ = WialonHosting.Dom.binding(g, {
                        onFilterTypeSelectChange: function () {
                            W(), h.notify([p])
                        },
                        onContinueAs: i
                    });
                _.searchControlContainerEl.id = f + "_search", e && (g.classList.add("with-continue-as"), _.continueAsTextEl.innerHTML = r.continue_as(e)), _.tableContainerEl.id = f + "_ft", _.tableContainerEl.classList.add(f + "_ft");
                var v = !0;
                var w = new function () {
                        this.getType = function () {
                            return f
                        }, this.destroy = function () {
                            WebCMS.get_module("search_control").detach_module(f, f)
                        }, this.update_list_filter = S
                    },
                    y = 0,
                    k = function () {
                        return !0
                    },
                    L = !0,
                    x = !1;

                function W() {
                    p = [], s && p.push({
                            id: f + "_row_" + ++y,
                            userName: s,
                            user: null,
                            account: null,
                            item: null,
                            isAccount: !1,
                            self: !0
                        }), x = !0, u.getItems().forEach((function (t) {
                            switch (_.filterTypeSelectEl.value) {
                                case "user_name":
                                    if (null === k(t.user.getName())) return;
                                    break;
                                case "account_name":
                                    if (L) break;
                                    if (!t.account || null === k(t.account.getName())) return
                            }
                            var n = t.account && t.account.getCreatorId() === t.user.getId();
                            n && (x = !1), p.push({
                                id: f + "_row_" + ++y,
                                userName: t.userName,
                                user: t.user,
                                account: t.account,
                                item: t,
                                isAccount: n
                            })
                        })),
                        function (t) {
                            var n = !!t.length;
                            n !== v && ((v = n) ? (_.noUsersContainerEl.style.display = "none", _.tableContainerEl.style.display = "", b.onResize()) : (_.tableContainerEl.style.display = "none", _.noUsersContainerEl.style.display = ""))
                        }(p)
                }

                function S(t) {
                    /^\**$/.test(t) ? (k = function () {
                        return !0
                    }, L = !0) : (k = WebCMSUtil.mask_comparator(t), L = !1), W(), h.notify([p])
                }
                this.getElement = function () {
                    return g
                }, this.onShown = function () {
                    if (!m) {
                        m = !0, WebCMS.get_module("search_control").attach_to_module(w, f + "_search", null, {
                            placeholder: !0
                        }), p || W();
                        var t = x,
                            e = (b = new WialonHosting.Common.FastTable({
                                colsModel: (t ? [] : [{
                                    col_group_width: "18px"
                                }]).concat([{
                                    col_group_width: "50%"
                                }, {
                                    col_group_width: "50%"
                                }, {
                                    col_group_width: "28px"
                                }]),
                                watchList: function (t) {
                                    return p || W(), t(p), h.watch(t)
                                },
                                elementId: f + "_table",
                                fastTableOptions: {
                                    parentClass: f + "_ft",
                                    rowHeight: 25,
                                    noMinHeight: !0
                                },
                                getTableRowData: function (e) {
                                    var o = e.id,
                                        i = WialonHosting.Dom.instantiateTemplate("login:login_as", "user_row");
                                    i.id = o, i.classList.add(a.a.LoginAsUserRow);
                                    var s = WialonHosting.Dom.binding(i, {
                                        onRowClick: function () {
                                            e.self ? c() : d({
                                                data: e.item,
                                                inNewWindow: !1
                                            })
                                        },
                                        onOpenInNewTabClick: function (t) {
                                            n || e.self || (t.stopPropagation(), e.self ? c() : d({
                                                data: e.item,
                                                inNewWindow: !0
                                            }))
                                        }
                                    });
                                    if (t) s.accountTdEl.parentNode.removeChild(s.accountTdEl);
                                    else if (e.isAccount) {
                                        var l = document.createElement("span");
                                        l.className = "icon-person", s.accountTdEl.appendChild(l)
                                    }
                                    var u = e.userName;
                                    if (s.userNameEl.innerHTML = u, s.userNameTdEl.setAttribute("data-tooltip-track-children", o + "_name"), s.userNameTdEl.setAttribute("data-tooltip", "innerEl"), e.self) i.classList.add("current-user");
                                    else {
                                        var g = e.account && e.account.getName() || "";
                                        s.accountNameEl.innerHTML = g, s.accountNameTdEl.setAttribute("data-tooltip-track-children", o + "_accname"), s.accountNameTdEl.setAttribute("data-tooltip", "innerEl")
                                    }
                                    return n || e.self || (s.inNewTabTdEl.classList.add("login-as-new-win"), s.inNewTabTdEl.setAttribute("data-tooltip-text", r.new_win)), {
                                        id: o,
                                        html: i
                                    }
                                }
                            })).getElement();
                        e.classList.add("list-table"), e.classList.add("x-user-switch-body-table"), _.tableContainerEl.appendChild(e), b.onShown(), jQuery(_.tableContainerEl).attr("title", "x").Tooltip({
                            showUrl: !1,
                            track_children: !0,
                            bodyHandler: function (t, n) {
                                var e = n && n.target;
                                if (!e) return "";
                                var o = null;
                                if ("innerEl" === e.getAttribute("data-tooltip")) {
                                    var i = e.firstElementChild;
                                    if (!i) return "";
                                    var a = i.style.display;
                                    i.style.display = "inline-block";
                                    var r = e.getBoundingClientRect(),
                                        s = i.getBoundingClientRect();
                                    return i.style.display = a, s.width >= r.width ? i.textContent : ""
                                }
                                return WebBaseUtil.some_element_parent_node(e, (function (t) {
                                    return t !== _.tableContainerEl && !!(o = t.getAttribute("data-tooltip-text"))
                                })), o || ""
                            }
                        })
                    }
                }, this.onResize = function () {
                    b && b.onResize()
                }, this.destroy = function () {
                    w && (w.destroy(), w = null), b && (b.destroy(), b = null), jQuery(_.tableContainerEl).remove()
                }
            }
        },
        UyLW: function (t, n, e) {
            "use strict";
            e.d(n, "c", (function () {
                return a
            })), e.d(n, "b", (function () {
                return i
            })), e.d(n, "a", (function () {
                return r
            }));
            var o = e("9DEA"),
                i = {
                    "logo-background": !0
                },
                a = {
                    "color-danger": "#f44336",
                    "color-warning": "#ff9100",
                    "login-background": "#9c9da1",
                    "login-padding": "40px 65px 0 60px",
                    "login-inputs-width": "197px",
                    "login-logo-width": "329px",
                    "login-logo-height": "52px",
                    "login-logo-position": "static",
                    "login-logo-top": "0",
                    "login-logo-left": "0",
                    "login-logo-margin": "0",
                    "restore-info-width": "100%",
                    "restore-info-padding": "15px 0 0 0",
                    "restore-fields-margin": "10px 0 0 0",
                    "restore-fields-width": "100%",
                    "restore-button-margin": "20px 0 0 0",
                    "login-fields-width": "100%",
                    "login-fields-padding": "23px 0 0 0",
                    "login-field-container-padding": "0 0 0 82px",
                    "login-error-padding": "10px 0 0 0",
                    "login-cookie-checkbox-padding": "10px 0 0 0",
                    "login-action-links-margin": "10px 0 0 0",
                    "login-enter-button-padding": "50px 0 0 0",
                    "login-return-link-padding": "30px 0 0 0",
                    "login-return-link-align": "right",
                    "login-copyright-margin": "0",
                    "selected-background": "#f6f6f6",
                    "disabled-input-color": "#909090 !important",
                    "placeholder-color": "#aaaaaa",
                    "top-background": "none",
                    "logo-padding": "0 10px",
                    "logo-background": "url(/static/skin/monitoring/logo.svg) no-repeat center center",
                    "logo-width": "154px",
                    "logo-height": "32px",
                    "tooltip-header-name-font-size": "16px",
                    "tooltip-font-size": "11px",
                    "unit-extra-info-padding-small": "5px",
                    "unit-extra-info-padding": "10px",
                    "unit-extra-info-padding-big": "20px",
                    "unit-extra-info-border-color": "#D4D2D3",
                    "unit-extra-info-background-color": "white",
                    "items-tooltip-padding-extra-small": "3px",
                    "items-tooltip-padding-small": "5px",
                    "items-tooltip-padding-medium": "8px",
                    "items-tooltip-padding": "10px",
                    "items-tooltip-padding-big": "20px",
                    "items-tooltip-border-color": "#D4D2D3",
                    "items-tooltip-background-color": "white",
                    "modal-background": "#cecece",
                    "list-table-head-background": "#ebebeb",
                    "list-table-background": "#f6f6f6",
                    "list-table-color": "#000",
                    "list-table-separator-color": "#d0cecf",
                    "list-table-group-background": "#ebebeb",
                    "list-table-tab_button-color": "#066397",
                    "list-table-tab_button-border": "1px solid #b4b4b4",
                    "list-table-tab_button-background": "#fff",
                    "list-table-tab_button-active-color": "#fff",
                    "list-table-tab_button-active-border": "1px solid #3399FF",
                    "list-table-tab_button-active-background": "#3399FF",
                    "list-table-tab_button-hover-color": "#066397",
                    "list-table-tab_button-hover-border": "1px solid #066397",
                    "list-table-tab_button-hover-background": "#f6f6f6",
                    "messages-actions-background": "#ebebeb",
                    "messages-actions-bottom-right-radius": "5px",
                    "messages-actions-checked": "#616161",
                    "messages-actions-unchecked": "#A7A6A6",
                    "schedule-header-background": "#ebebeb",
                    "check-group-cell-background": "#ebebeb",
                    "check-group-cell-selected-color": "#a5a5a5",
                    "checkbox-accordion-background": "#ebebeb",
                    "accordion-border-width": "1px 0 0 0",
                    "accordion-border-style": "solid",
                    "accordion-border-color": "#9c9da1",
                    "accordion-normal-background": "#d0cecf",
                    "accordion-hover-background": "#9c9da1",
                    "accordion-active-background": "#9c9da1",
                    "accordion-normal-color": "#000",
                    "accordion-hover-color": "#000",
                    "accordion-active-color": "#fff",
                    "table-dark-strip-background": "#ebebeb",
                    "logpanel-spacing": "15px",
                    "notify-name-font-weight": "normal",
                    "notify-name-color": "#066397",
                    "notify-text-padding": "0 7px 0 23px !important",
                    "notify-text-align": "left",
                    "notify-text-font-size": "10px",
                    "notifications-border-color": "#9c9da1",
                    "tabs-loading-background": "url(/webbase_sdk/jquery/tabs/loading.gif) no-repeat 0 50%",
                    "unit-cmds-response-msg-text-padding": "0 5px 0 21px !important",
                    "unit-cmds-response-text-align": "left",
                    "panel-separator-border": "1px solid #b9b9b9",
                    "panel-top-background": "#797979",
                    "panel-bottom-background": "#9c9da1",
                    "panel-left-background": "#d0cecf",
                    "panel-left-sub-background": "#f6f6f6",
                    "panel-left-color": "#000",
                    "panel-top-color": "#fff",
                    "panel-bottom-color": "#fff",
                    "panel-bottom-opacity": "0.4",
                    "panel-bottom-circle": "#05F4F9",
                    "panel-top-border-width": "1px",
                    "panel-top-border-style": "solid",
                    "panel-top-border-color": "#9C9DA1",
                    "panel-left-border-width": "1px",
                    "panel-left-border-style": "solid",
                    "panel-left-border-color": "#9C9DA1",
                    "panel-center-border-width": "1px",
                    "panel-center-border-style": "solid",
                    "panel-center-border-color": "#9C9DA1",
                    "panel-bottom-border-width": "1px",
                    "panel-bottom-border-style": "solid",
                    "panel-bottom-border-color": "#9C9DA1",
                    "panel-border-top-left-radius": "0px",
                    "panel-border-top-right-radius": "0px",
                    "panel-border-bottom-right-radius": "0px",
                    "panel-border-bottom-left-radius": "0px",
                    "horizontal-bar-item-color": "#fff",
                    "horizontal-bar-item-background": "transparent",
                    "horizontal-bar-item-hover-color": "#fff",
                    "horizontal-bar-item-hover-background": "#555",
                    "horizontal-bar-item-active-color": "#fff",
                    "horizontal-bar-item-active-background": "#555",
                    "horizontal-bar-item-icons-color": "#FFFFFF",
                    "horizontal-bar-item-icons-opacity": "0.6",
                    "horizontal-bar-item-icons-hover-color": "#FFFFFF",
                    "horizontal-bar-item-layer-active-circle-color": "#05F4F9",
                    "cms-quick-user-switch-icon-in": 'url("/user_name/cms-login.png")',
                    "cms-quick-user-switch-icon-out": 'url("/user_name/cms-logout.png")',
                    "cms-quick-user-switch-icon-in-hover": 'url("/user_name/cms-login.png")',
                    "cms-quick-user-switch-icon-out-hover": 'url("/user_name/cms-logout.png")',
                    "expand-menu-item-background": "#fafafa",
                    "expand-menu-item-color": "#646466",
                    "expand-menu-item-hover-active-background": "#DADADC",
                    "expand-menu-item-hover-active-color": "#646464",
                    "expand-menu-border": "1px solid #9c9da1",
                    "wizard-dialog-header-background": "#cecece",
                    "wizard-dialog-header-font-size": "16px",
                    "wizard-dialog-header-font-weight": "bold",
                    "wizard-dialog-header-color": "#000",
                    "wizard-dialog-background": "#f6f6f6",
                    "wizard-dialog-border": "1px solid #9c9da1",
                    "wizard-dialog-margin": "0 5px 5px",
                    "wizard-dialog-hr-color": "#9c9da1",
                    "wizard-dialog-close-background": 'url("/wizard_dlg/close.png") no-repeat center',
                    "tab-color": "#252525",
                    "tab-hover-active-color": "#000",
                    "vtab-active-color": "#000",
                    "tab-font-size": "12px",
                    "tab-font-weight": "bold",
                    "help-window-header-background": "#e0e0e0",
                    "help-window-header-font-weight": "bold",
                    "help-window-header-color": "#000",
                    "help-window-collapser-header-background": "#e0e0e0",
                    "help-window-collapser-header-color": "#464646",
                    "report-collapser-header-background": "#ebebeb",
                    "report-collapser-header-border": "1px solid #cbcbcb",
                    "help-window-color": "#464646",
                    "help-window-background": "#f6f6f6",
                    "button-background": "#fff",
                    "button-hover-background": "#F6F6F6",
                    "button-border": "1px solid #b4b4b4",
                    "button-hover-border": "1px solid #066397",
                    "button-color": "#066397",
                    "button-border-radius": "2px",
                    "button-hover-color": "#066397",
                    "button-shadow": "none",
                    "button-hover-shadow": "none",
                    "link-button-color": "#066397",
                    "link-button-hover-color": "#3474a0",
                    "link-button-success-color": "#4caf50",
                    "link-button-error-color": "#f44336",
                    "button-disabled-color": "#B4B4B4",
                    "button-disabled-border": "1px solid #b4b4b4",
                    "button-disabled-background": "#fff",
                    "button-disabled-shadow": "none",
                    "execute-button-background": "#3399FF",
                    "execute-button-color": "#fff",
                    "execute-button-shadow": "none",
                    "execute-button-border": "1px solid #3399FF",
                    "execute-button-hover-background": "#1E73C7",
                    "execute-button-hover-color": "#fff",
                    "execute-button-hover-shadow": "none",
                    "execute-button-hover-border": "1px solid #1E73C7",
                    "fast-button-color": "#066397",
                    "fast-button-background": "#fff",
                    "fast-button-border-color": "1px solid #b4b4b4",
                    "fast-button-border-color-hover": "1px solid #b4b4b4",
                    "fast-button-background-hover": "#eaeaea",
                    "input-padding": "1px 5px 1px 5px",
                    "input-background": "#ffff00",
                    "input-border-color": "#B4B4B4",
                    "input-color": "#464646",
                    "input-disabled-background": "#004444",
                    "input-disabled-border-color": "#004444",
                    "input-disabled-color": "#004444",
                    "input-text-invalid-text": "#ff0000",
                    "input-text-password-border-hover": "1px solid #066397",
                    "select-padding": "0px 18px 0px 5px",
                    "select-border-color": "#B4B4B4",
                    "select-hover-border": "1px solid #066397",
                    "horizontal-bar-smart-search-input-color": "#fff",
                    "horizontal-bar-smart-search-input-color-hover": "#fff",
                    "featured-dot-background": "#3399FF",
                    "calendar-background": "#fff",
                    "calendar-main-text-color": "#000",
                    "calendar-main-text-hover-color": "#066397",
                    "calendar-main-text-hover-background": "#d0cecf",
                    "calendar-weekend-text-color": "#ff0d4d",
                    "calendar-othermonth-text-color": "#9c9da1",
                    "calendar-othermonth-weekend-text-color": "#fc82a3",
                    "calendar-weeknumber-text-color": "#9c9da1",
                    "calendar-border-color": "#d0cecf",
                    "calendar-today-color": "#0066cc",
                    "calendar-restore-data-color": "#FF9900",
                    "report-result-grouping-arrow-separator": "#d0cecf",
                    "report-result-grouping-arrow-checked": "#066397",
                    "report-result-grouping-arrow-background": "#FFFFFF",
                    "report-result-accordion-row-text-color": "#000",
                    "report-result-accordion-row-background": "#f6f6f6",
                    "report-result-accordion-row-background-selected": "#ebebeb",
                    "report-result-accordion-row-border": "#d0cecf",
                    "report-result-modebar-active-fill": "#1e73c7",
                    "report-result-modebar-inactive-fill": "rgba(180, 180, 180, 1)",
                    "report-dialog-title-background-color": "#ebebeb",
                    "button-background-add-to-group": "url(/items_prop_pages/right.png) no-repeat center",
                    "button-background-del-to-group": "url(/items_prop_pages/left.png) no-repeat center",
                    "ol-button-color": "#737373",
                    "ol-button-color-active": "#555555",
                    "ol-button-background": "#ffffff",
                    "ol-button-background-hover": "#ffffff",
                    "ol-zoombar-background": "#737373",
                    "ol-layers-btn-color": "#c0c0c0",
                    "ol-layers-btn-active-color": "#555555",
                    "ol-maps-color": "#646466",
                    "ol-maps-selected-background": "#dadadc",
                    "loginas-list-background-color": "rgba(246,246,246,1)",
                    "icon-green-color": "#4caf50",
                    "icon-red-color": "#f44336",
                    "icon-blue-color": "#2196f3",
                    "icon-yelow-color": "#ffeb3b",
                    "icon-orange-color": "#ff9100",
                    "icon-grey-dark-color": "#616161",
                    "icon-grey-light-color": "#bdbdbd",
                    "icon-grey-middle-color": "#b4b4b4",
                    "icon-grey-tele-color": "#c9c9c9",
                    "icon-hover-color": "#2196f3",
                    "grouped-units-marker-color": "#ff204d",
                    "grouped-zones-marker-color": "#0036ff",
                    "tabs-background": "url(/static/skin/misc/tabs.png) no-repeat",
                    "img-flexigrid-fhbg-gif": "url(/static/skin/flexigrid/fhbg.gif)",
                    "img-flexigrid-ddn-png": "url(/static/skin/flexigrid/ddn.png)",
                    "img-flexigrid-wbg-gif": "url(/static/skin/flexigrid/wbg.gif)",
                    "img-flexigrid-uup-png": "url(/static/skin/flexigrid/uup.png)",
                    "img-flexigrid-bg-gif": "url(/static/skin/flexigrid/bg.gif)",
                    "img-flexigrid-line-gif": "url(/static/skin/flexigrid/line.gif)",
                    "img-flexigrid-prev-gif": "url(/static/skin/flexigrid/prev.gif)",
                    "img-flexigrid-next-gif": "url(/static/skin/flexigrid/next.gif)",
                    "img-flexigrid-magnifier-png": "url(/static/skin/flexigrid/magnifier.png)",
                    "img-flexigrid-load-png": "url(/static/skin/flexigrid/load.png)",
                    "img-flexigrid-load-gif": "url(/static/skin/flexigrid/load.gif)",
                    "img-flexigrid-wait-gif": "url(/static/skin/flexigrid/wait.gif)",
                    "img-misc-ddn": "url(/static/skin/misc/ddn.svg)",
                    "img-menu-separator": "url(/static/skin/misc/separator.png)",
                    "img-mode-header": "url(/static/skin/misc/header.png)",
                    "img-progressbar-gif": "url(/static/skin/misc/progressbar.gif)"
                },
                r = Object.assign({
                    variables: a,
                    logo: {
                        mapFloatingLogo: {
                            img: "/img/logo-small.svg",
                            title: "Powered by Wialon"
                        }
                    }
                }, o.a)
        },
        XSds: function (t, n, e) {
            "use strict";
            e.d(n, "b", (function () {
                return u
            })), e.d(n, "a", (function () {
                return c
            }));
            var o = e("0Zvi"),
                i = e("AFqa"),
                a = e("mVds"),
                r = new Map,
                s = new Map,
                l = new Map;

            function c(t, n) {
                var e = t.siteType,
                    r = t.altSiteType,
                    c = t.lang;
                switch (function () {
                    if ("function" == typeof window.__wh_consume_translation) return;
                    if (WialonHosting.CustomOptions.lang_paths_json) {
                        var t = WialonHosting.CustomOptions.lang_paths_json.login;
                        g(WialonHosting.CustomOptions.http_lang, t), l.set("login_" + WialonHosting.CustomOptions.http_lang, t), l.set(WialonHosting.CustomOptions.site_type + "_" + WialonHosting.CustomOptions.http_lang, WialonHosting.CustomOptions.lang_paths_json.site)
                    }
                    window.__wh_consume_translation = d, Array.isArray(window.__wh_translations_to_consume) && (window.__wh_translations_to_consume.forEach((function (t) {
                        d(t)
                    })), window.__wh_translations_to_consume = null)
                }(), e) {
                    case "monitoring":
                    case "cms_manager":
                        e = "cms"
                }
                switch (r) {
                    case "monitoring":
                    case "cms_manager":
                        r = "cms"
                }
                var u = e + "_" + c,
                    p = s.get(u);
                if (p || (p = {
                        translation: null,
                        waiters: [],
                        pendingRequest: !1
                    }, s.set(u, p)), p.translation) n(null, p.translation);
                else if (p.waiters.push(n), !p.pendingRequest) {
                    if (p.pendingRequest = !0, WialonHosting.FRONTEND_DEV_SERVER) return void h(WialonHosting.FRONTEND_DEV_SERVER + "/lang/" + e + "_" + c + ".js");
                    var f = l.get(u);
                    if (f) return void h(f);
                    var m = r || e;
                    Object(a.a)({
                        url: Object(i.b)("/login_phrases.html?lang=" + c + "&site_type=" + m),
                        dataType: "json",
                        timeout: 0
                    }, (function (t, n) {
                        if (t) return p.pendingRequest = !1, void(p.waiters && (p.waiters.forEach((function (n) {
                            return n({
                                type: "login_phrases.html",
                                error: t
                            })
                        })), p.waiters = null));
                        g(c, n.login), l.set("login_" + c, n.login), l.set(m + "_" + c, n.site), h("login" === e ? n.login : n.site)
                    }))
                }

                function h(t) {
                    Object(o.b)((function () {
                        var n = document.createElement("script");
                        n.src = Object(i.b)(t), n.addEventListener("load", (function () {
                            n.parentNode.removeChild(n)
                        })), (document.head || document.querySelector("head")).appendChild(n)
                    }))
                }
            }

            function d(t) {
                var n = t.name,
                    e = t.lang,
                    o = t.translation;
                if (n && e && o) {
                    a(e);
                    var i = r.get(e);
                    i && a(i)
                }

                function a(t) {
                    var e = n + "_" + t,
                        i = s.get(e);
                    i ? (i.translation = o, i.waiters && (i.waiters.forEach((function (t) {
                        return t(null, o)
                    })), i.waiters = null)) : s.set(e, {
                        translation: o,
                        waiters: null
                    })
                }
            }

            function u() {
                var t = WialonHosting.CustomOptions.langs.map((function (t) {
                    return {
                        name: t.name,
                        key: t.param
                    }
                }));
                return t.sort((function (t, n) {
                    var e = t.nameA,
                        o = n.nameB;
                    return e < o ? -1 : e > o ? 1 : 0
                })), t
            }

            function g(t, n) {
                var e = /\/login_([^_]+)_/.exec(n);
                if (e) {
                    var o = e[1];
                    o !== t && r.set(o, t)
                }
            }
        },
        ZHf0: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return a
            }));
            var o = e("C90t"),
                i = e("D0sG");

            function a(t) {
                Object(i.c)(t.sid), document.location = Object(o.d)(document.location.href, Object.assign({
                    user: null,
                    code: null
                }, t))
            }
        },
        bPFM: function (t, n, e) {
            "use strict";
            var o = e("cAa7");
            n.a = function (t) {
                var n = new o.a;
                this.get = function () {
                    return t
                }, this.set = function (e) {
                    if (e !== t) {
                        var o = t;
                        t = e, n.notify([t, o])
                    }
                }, this.watch = n.watchingFunction((function () {
                    return [t, null]
                }))
            }
        },
        "bn/O": function (t, n, e) {
            "use strict";
            n.a = function (t, n) {
                if (!t) return;
                for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n(e, t[e])
            }
        },
        cMNc: function (t, n, e) {
            "use strict";

            function o(t, n) {
                return t = t.replace(/(url\(['"]?)(.*?)(['"]?\))/g, (function (t, e, o, i) {
                    return (o = n(o)) ? e + o + i : t
                }))
            }

            function i(t) {
                return !(!t || "string" != typeof t) && !/^#|^data:|^https?:/i.test(t)
            }

            function a(t, n) {
                if ("/" === n[0]) return n;
                var e = 0;
                n = n.replace(/^(\.\.\/)+/, (function (t) {
                    return e = t.length / 3 | 0, ""
                }));
                var o = t.lastIndexOf("?");
                if (o < 0 && (o = t.length), (o = t.lastIndexOf("/", o)) < 0) return n;
                for (; e > 0;) {
                    e--;
                    var i = t.lastIndexOf("/", o - 1);
                    if (i < 0) return n;
                    o = i
                }
                return t.slice(0, o + 1) + n
            }
            e.d(n, "b", (function () {
                return o
            })), e.d(n, "a", (function () {
                return i
            })), e.d(n, "c", (function () {
                return a
            }))
        },
        exv3: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return o
            })), e.d(n, "b", (function () {
                return i
            }));
            var o, i, a = e("cAa7");
            if ("boolean" == typeof document.hidden) {
                var r = !document.hidden,
                    s = new a.a;
                document.addEventListener("visibilitychange", (function () {
                    var t = !document.hidden;
                    t !== r && (r = t, s.notify([t]))
                })), o = function () {
                    return r
                }, i = function (t) {
                    return t(r), s.watch(t)
                }
            } else o = function () {
                return !0
            }, i = function (t) {
                return t(!0), {
                    cancel: function () {}
                }
            }
        },
        "f3/j": function (t, n, e) {
            t.exports = {
                LoginAsWindow: "LoginAsWindow-VRrdf",
                LoginAsWindowTitle: "LoginAsWindowTitle-1dm6n",
                LoginAsWindowBody: "LoginAsWindowBody-2gUcQ"
            }
        },
        hBGF: function (t, n, e) {
            "use strict";
            var o = e("C90t"),
                i = e("HBif"),
                a = '<div id="reset_body" class="login-gradient-bg" style="display: none;">\n\t<div class="login-bg">\n\t\t<div class="login-pading">\n\t\t\t<div class="logo-img ' + WialonHosting.CustomOptions.reset_logo_class + '" style="' + WialonHosting.CustomOptions.reset_logo_style + '">' + WialonHosting.CustomOptions.reset_login_title + '</div>\n\t\t\t<div class="logo-info" id="reset_password_text_div">\n\t\t\t\t' + WialonHosting.LoginTranslations.reset_enter_login + '\n\t\t\t</div>\n\t\t\t<div class="logo-data-reset" id="logo_data">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th id="reset_user_td" data-translate-phrase="user:colon"></th>\n\t\t\t\t\t\t<td><input type="text" name="reset_user" id="reset_user" value="" data-translate-placeholder="user"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th id="reset_email_td" data-translate-phrase="email:colon"></th>\n\t\t\t\t\t\t<td><input type="text" name="reset_email" id="reset_email" value="" data-translate-placeholder="email"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class="logo-reset" id="logo_reset">\n\t\t\t\t<input id="reset_submit" type="submit" onclick="WialonLoginPage.ResetPassword.onResetPassword();return false;" data-translate-value="reset_password">\n\t\t\t</div>\n\t\t\t<div class="logo-action-reset">\n\t\t\t\t<a href="#" id="reset_back_link" onclick="onShowLoginPage(true); return false;" data-translate-phrase="reset_back_link"></a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>';
            ! function () {
                WialonHosting.Dom.onInteractive((function () {
                    var t = document.createElement("div");
                    t.innerHTML = a, document.body.appendChild(t.firstElementChild)
                }));
                var t = !1;
                WialonLoginPage.showResetPage = function () {
                    WialonLoginPage.switchPage("reset_body"), document.body.classList.add("login"), Object(i.a)({
                        element: document.getElementById("reset_body"),
                        translation: WialonLoginPage.translation
                    });
                    var n = document.getElementById("user"),
                        e = document.getElementById("reset_user"),
                        o = document.getElementById("reset_email"),
                        a = !1;

                    function r(t) {
                        13 === (t && t.keyCode && t.which) && WialonLoginPage.ResetPassword.onResetPassword()
                    }
                    n && (e.value = n.value, e.value && (o.focus(), a = !0)), a || e.focus(), t || (t = !0, e.addEventListener("keyup", r), o.addEventListener("keyup", (function (t) {
                        WialonLoginPage.ResetPassword.valid_email(), r(t)
                    })))
                }, WialonLoginPage.ResetPassword = {
                    valid_email: function () {
                        var t = document.getElementById("reset_email"),
                            n = WialonHosting.Validation.isValidEmail(t.value);
                        t.style.color = n ? "" : "red"
                    },
                    getUserEmailInputs: function () {
                        var t = [],
                            n = document.getElementById("reset_user"),
                            e = document.getElementById("reset_email");
                        return n && t.push(n), e && t.push(e), t
                    },
                    onResetPassword: function () {
                        var t = document.getElementById("reset_submit");
                        if (t && !t.disabled) {
                            var n = document.getElementById("reset_user").value,
                                e = document.getElementById("reset_email").value;
                            if (n && e) {
                                t.disabled = !0;
                                var i = Object(o.a)() + "/";
                                WialonPasswordResetApi.resetPasswordRequest(n, e, "", i, (function (n) {
                                    if (t.disabled = !1, n) {
                                        var o = /^([A-Z_]+)/.exec(n.reason);
                                        switch (o = o && o[1]) {
                                            case "PASSWORD_IMMUTABLE":
                                                WialonLoginPage.showAlert({
                                                    phrase: "reset_password_immutable"
                                                });
                                                break;
                                            case "REQUEST_TOO_OFTEN":
                                                WialonLoginPage.showAlert({
                                                    phrase: "reset_password_exceeded"
                                                });
                                                break;
                                            default:
                                                WialonLoginPage.showAlert({
                                                    errorCode: n.error,
                                                    errorInputs: WialonLoginPage.ResetPassword.getUserEmailInputs()
                                                })
                                        }
                                    } else {
                                        var i = WialonLoginPage.translation.reset_password_email_sent_to + e + ".";
                                        WialonLoginPage.showAlert({
                                            html: i,
                                            status: "success"
                                        })
                                    }
                                }))
                            } else WialonLoginPage.showAlert({
                                errorCode: 11,
                                errorInputs: WialonLoginPage.ResetPassword.getUserEmailInputs()
                            })
                        }
                    },
                    onPerformPassword: function (t, n) {
                        WialonPasswordResetApi.resetPasswordPerform(t, n, (function (t, n) {
                            if (window.history.pushState) {
                                var e = {},
                                    o = WialonLoginUtil.get_url_parameter("wialon_sdk_url");
                                o && (e.wialon_sdk_url = o), window.history.pushState("", "", WialonLoginUtil.extend_url(window.location.protocol + "//" + window.location.host, e))
                            }
                            if (t) WialonLoginPage.showAlert({
                                errorCode: t
                            });
                            else {
                                WialonLoginPage.hideAlert(), document.getElementById("logo_reset").style.display = "none", document.getElementById("reset_password_text_div").style.display = "none";
                                var i = WialonLoginPage.translation.reset_password_was_reset;
                                document.getElementById("logo_data").innerHTML = "<br/><br/><span style='color: green; font-size: 14px;'>" + i + ": <b>" + n.newPassword + "</b></span><br/>"
                            }
                        }))
                    }
                }
            }()
        },
        hP2n: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return i
            }));
            var o = e("0Zvi");

            function i() {
                var t;
                WialonHosting.CustomOptions.metricCounters && (WialonHosting.IS_MONITORING ? t = "GTM-PMGGDP" : WialonHosting.IS_CMS && (t = "GTM-NT2GV8"), Object(o.a)((function () {
                    setTimeout((function () {
                        if (function (t, n, e, o, i) {
                                t[o] = t[o] || [], t[o].push({
                                    "gtm.start": (new Date).getTime(),
                                    event: "gtm.js"
                                });
                                var a = n.getElementsByTagName(e)[0],
                                    r = n.createElement(e);
                                r.async = !0, r.src = "//www.googletagmanager.com/gtm.js?id=" + i, a.parentNode.insertBefore(r, a)
                            }(window, document, "script", "dataLayer", t), WialonHosting.IS_MONITORING) {
                            window._gaq = window._gaq || [], window._gaq.push(["_setAccount", "UA-41838389-1"]), window._gaq.push(["_setDomainName", "wialon.com"]), window._gaq.push(["_setAllowLinker", !0]), window._gaq.push(["_trackPageview"]);
                            var n = document.createElement("script");
                            n.type = "text/javascript", n.async = !0, n.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                            var e = document.getElementsByTagName("script")[0];
                            e.parentNode.insertBefore(n, e)
                        }
                    }), 0)
                })))
            }
        },
        jPtB: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return a
            })), e.d(n, "b", (function () {
                return i
            }));
            var o = null;

            function i() {
                if (null === o) try {
                    o = window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)")
                } catch (t) {
                    o = !1
                }
                return !o
            }

            function a(t) {
                var n = t.context,
                    i = t.variables;
                if (null === o) try {
                    o = window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)")
                } catch (t) {
                    o = !1
                }
                if (o) {
                    var a = n.junk.cssVariables;
                    a || (a = {
                        styleEl: null
                    }, n.junk.cssVariables = a, a.styleEl = document.createElement("style"), document.head.appendChild(a.styleEl));
                    var r = ":root {\n";
                    for (var s in i)
                        if (Object.prototype.hasOwnProperty.call(i, s)) {
                            var l = i[s];
                            if ("string" != typeof l || !l) continue;
                            r += "--" + s + ": " + l + ";\n"
                        } return r += "}\n", a.styleEl.innerHTML = "", a.styleEl.appendChild(document.createTextNode(r)), Promise.resolve()
                }
                return e.e(11).then(e.bind(null, "vjCF")).then((function (t) {
                    return t.default({
                        onlyLegacy: !0,
                        include: "[data-include-css-ponyfill]",
                        variables: i
                    }), Promise.resolve()
                }))
            }
        },
        kjYQ: function (t, n, e) {
            "use strict";
            n.a = function (t) {
                var n = null;
                return function (e) {
                    e ? n = null === n || (clearTimeout(n), e) ? setTimeout((function () {
                        n = null, e()
                    }), t) : null : null !== n && (clearTimeout(n), n = null)
                }
            }
        },
        kwuG: function (t, n, e) {
            "use strict";
            n.a = function (t, n, e) {
                var i = "__wialon_sdk_jsonp_" + ++o,
                    a = null,
                    r = !1;
                window[i] = function (t) {
                    r || (l(), e(null, t))
                }, a = setTimeout((function () {
                    a = null, l(), e(5)
                }), 1e4);
                var s = document.createElement("script");

                function l() {
                    r || (r = !0, s.parentNode && document.head.removeChild(s), null !== a && (clearTimeout(a), a = null), window[i] && (window[i] = function () {}, setTimeout((function () {
                        delete window[i]
                    }), 3e4)))
                }
                s.src = t + (t.indexOf("?") >= 0 ? "&" : "?") + n + "=" + i, document.head.appendChild(s)
            };
            var o = 0
        },
        mqyU: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return s
            }));
            var o = e("LsrW"),
                i = e("txeg"),
                a = e("sWoc"),
                r = {
                    NO_CREDENTIALS: "no-credentials-for-auto-login",
                    AUTH_ERROR: "auth-error"
                };

            function s(t, n) {
                var e, s = t.context,
                    l = WialonLoginUtil.get_operate_as(),
                    c = Object(o.c)(),
                    d = Object(o.d)(),
                    u = Object(o.f)();
                if (c) return WialonLoginUtil.set_sid(c), Object(o.h)(), Object(a.a)({
                    sid: c,
                    operateAs: l,
                    context: s
                }, p), !0;
                var g = Object(o.a)();
                return g ? (Object(o.h)(), Object(a.a)({
                    authHash: g,
                    operateAs: l,
                    context: s
                }, p), !0) : d && "string" == typeof d ? (e = d, l || d !== Object(i.b)() || (l = Object(i.c)()), Object(o.h)(), Object(a.a)({
                    token: d,
                    operateAs: l,
                    context: s
                }, p), !0) : (c = WialonLoginUtil.get_sid()) ? (document.location = WialonLoginUtil.extend_url(document.location.href, {
                    sid: c
                }), !0) : (d = Object(i.b)()) && "string" == typeof d ? (e = d, document.location = WialonLoginUtil.extend_url(document.location.href, {
                    token: d
                }), !0) : (n({
                    type: r.NO_CREDENTIALS
                }), !1);

                function p(t) {
                    if (t) WialonLoginUtil.remove_sid(), e && Object(i.b)() === e && Object(i.a)(), Object(o.h)(), Object(o.i)(), n({
                        type: r.AUTH_ERROR,
                        error: t,
                        sdkCode: t.code
                    });
                    else {
                        e && u && Object(i.e)({
                            token: d,
                            operateAs: l
                        });
                        var a = wialon.core.Session.getInstance();
                        a.getHiddenLogin() ? (WialonLoginUtil.get_session().set_do_not_hide_sid(!0), WialonLoginUtil.DO_NOT_HIDE_SID = !0) : WialonLoginUtil.DO_NOT_HIDE_SID = WialonLoginUtil.DO_NOT_HIDE_SID || WialonLoginUtil.get_session().get_do_not_hide_sid(), WialonLoginUtil.set_sid(a.getId()), WialonLoginUtil.set_operate_as(l);
                        for (var s = a.getCurrUser(), c = [], g = 0; g < 8; g++) {
                            var p = 35 * Math.random() | 0;
                            p <= 25 ? c.push(String.fromCharCode(97 + p)) : c.push(String.fromCharCode(48 + p - 25))
                        }
                        WialonHosting.Log.setUserContext({
                            id: s && s.getId(),
                            username: s && s.getName && s.getName(),
                            auth_user: "function" == typeof a.getAuthUser && a.getAuthUser(),
                            account_id: s && s.getAccountId && s.getAccountId(),
                            session_id: c.join("")
                        }), n(null, {
                            session: a
                        })
                    }
                }
            }
        },
        pyWF: function (t, n, e) {
            "use strict";
            var o = e("8+eO"),
                i = e("++JW");
            n.a = function (t) {
                var n = t.toggled,
                    e = t.elements,
                    a = t.properties,
                    r = t.duration,
                    s = t.timingFunction,
                    l = t.onBeforeToggle,
                    c = t.onAnimationStart,
                    d = t.onPropertiesSet,
                    u = t.onAfterToggle,
                    g = "string" == typeof s ? {
                        on: s,
                        off: s
                    } : s || {},
                    p = g.on,
                    f = g.off,
                    m = "number" == typeof r ? {
                        on: r,
                        off: r
                    } : r || {},
                    h = m.on,
                    b = m.off,
                    _ = 0,
                    v = null;
                n = !!n, this.toggle = function (t, r) {
                    if (n !== (t = void 0 === t ? !n : !!t)) {
                        n = t, l && l({
                            toggle: t
                        });
                        var s = r || {},
                            g = s.withoutAnimation,
                            m = s.data;
                        if (g) return v && (v.cancel(), v = null, _ = 0), e.forEach((function (n) {
                            var e = n.element,
                                o = n.parentNode;
                            if (o && !e.parentNode) {
                                if (!t) return;
                                o.appendChild(e)
                            }
                        })), W(), t || S(), void(u && u({
                            toggle: t
                        }));
                        var w = [],
                            y = t ? h : b,
                            k = t ? p : f,
                            L = Object(i.a)();
                        e.forEach((function (n) {
                            var e = n.element,
                                o = n.parentNode;
                            if (o && !e.parentNode) {
                                if (!t) return;
                                o.appendChild(e)
                            }
                            var i = window.getComputedStyle(e);
                            a.forEach((function (t) {
                                var n = t.name,
                                    o = i.getPropertyValue(n);
                                w.push({
                                    element: e,
                                    name: n,
                                    value: o
                                })
                            }))
                        })), v && (v.cancel(), y = Math.min(y, L - _)), _ = L, e.forEach((function (t) {
                            t.element.style.transition = ""
                        })), c && c();
                        var x = Object(o.b)([function () {
                            w.forEach((function (t) {
                                var n = t.element,
                                    e = t.name,
                                    o = t.value;
                                n.style.setProperty(e, o)
                            }))
                        }, function () {
                            var n = a.map((function (t) {
                                return t.name + " " + y + "ms"
                            })).join(",");
                            e.forEach((function (e) {
                                var o = e.element;
                                (t || o.parentNode) && (o.style.transition = n, o.style.transitionTimingFunction = k)
                            }))
                        }, function () {
                            W()
                        }, {
                            timeout: y
                        }]);
                        v = x, x.onFinish((function () {
                            v === x && (t || S(), v = null, _ = 0, u && u({
                                toggle: t
                            }))
                        }))
                    }

                    function W() {
                        e.forEach((function (n) {
                            var e = n.element;
                            (t || e.parentNode) && a.forEach((function (n) {
                                var o = n.name,
                                    i = n.valueOn,
                                    a = n.valueOff,
                                    r = t ? i : a;
                                "function" == typeof r && (r = r({
                                    data: m
                                })), e.style.setProperty(o, r)
                            }))
                        })), d && d()
                    }

                    function S() {
                        e.forEach((function (t) {
                            var n = t.element,
                                e = t.parentNode;
                            n.parentNode && e && n.parentNode.removeChild(n)
                        }))
                    }
                }, this.destroy = function () {
                    v && (v.cancel(), v = null), _ = 0
                }
            }
        },
        q4NX: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return u
            }));
            var o = e("HBif"),
                i = e("sWoc"),
                a = e("TxjN"),
                r = e("f3/j"),
                s = e.n(r),
                l = e("CcTO"),
                c = e.n(l),
                d = '<div data-template-id="dialog" class="help-window ' + s.a.LoginAsWindow + '">\n\t<div class="help-title ' + s.a.LoginAsWindowTitle + '">\n\t\t<table class="caption"><tbody>\n\t\t\t<tr>\n\t\t\t\t<td class="title" dir="auto" data-translate-phrase="login_as"></td>\n\t\t\t</tr>\n\t\t</tbody></table>\n\t</div>\n\t<div class="help-window-content ' + s.a.LoginAsWindowBody + '"></div>\n</div>\n\n<div data-template-id="body" class="user-switch-window-content-container ' + c.a.LoginAsBody + '">\n\t<div class="user-switch-controls-container ' + c.a.LoginAsBodyControls + '">\n\t\t<select class="user-switch-search-type-select ' + c.a.LoginAsTypeSelect + '" data-element="filterTypeSelectEl" data-onchange="onFilterTypeSelectChange">\n\t\t\t<option value="user_name" data-translate-phrase="user"></option>\n\t\t\t<option value="account_name" data-translate-phrase="account"></option>\n\t\t</select>\n\t\t<div data-element="searchControlContainerEl" class="' + c.a.LoginAsSearch + '"></div>\n\t</div>\n\n\t<div class="user-list-container ' + c.a.LoginAsUsers + '" data-element="userListContainerEl">\n\t\t<div data-element="tableContainerEl" class="user_switch_wrapper ' + c.a.LoginAsUsersTable + '"></div>\n\t\t<div data-element="noUsersContainerEl" class="' + c.a.NoUsers + '" style="display:none"><span data-translate-phrase="no_users_available"></span></div>\n\t</div>\n\n\t<div class="continue-as vertical-align-hack-container ' + c.a.LoginAsContinueAs + '" data-onclick="onContinueAs"><span data-element="continueAsTextEl"></span></div>\n</div>\n\n<table><tbody>\n\t<tr data-template-id="user_row" data-onclick="onRowClick">\n\t\t<td class="user-name-account-icon-td" data-element="accountTdEl"></td>\n\t\t<td data-element="userNameTdEl" class="user-name-td">\n\t\t\t<div dir="auto" data-element="userNameEl"></div>\n\t\t</td>\n\t\t<td data-element="accountNameTdEl" class="account-name-td">\n\t\t\t<div dir="auto" data-element="accountNameEl"></div>\n\t\t</td>\n\t\t<td data-onclick="onOpenInNewTabClick" data-element="inNewTabTdEl"></td>\n\t</tr>\n</tbody></table>';

            function u(t) {
                var n = t.context,
                    e = t.blockingOperation,
                    r = t.translation,
                    s = t.onFinish,
                    l = new WialonHosting.UserSwitch.SearchItemsUsersProvider({
                        ignoreUsersByName: [sdk.s.getAuthUser(), sdk.u.getName()]
                    }),
                    c = !1,
                    d = !1;
                return l.fetchItems((function (t) {
                    t && WialonHosting.Log.error("login:login_as:searchItems", t), u()
                })), WialonLoginPage.loadMainPageCode({
                    context: n
                }, (function (t) {
                    t || (c = !0, u())
                })), {
                    destroy: function () {
                        d || (d = !0, document.body.classList.remove("login-operate-as"))
                    }
                };

                function u() {
                    if (c && l.isFetched() && !d) {
                        var t;
                        e.finish(), document.body.classList.add("login-operate-as");
                        var u = new a.a({
                            usersProvider: l,
                            withoutInNewWindow: !0,
                            continueAs: sdk.u.getName(),
                            onOperateAs: function (e) {
                                var o = e.data.user,
                                    a = e.data.userName;
                                WialonLoginUtil.check_operate_as_access(o, (function (e) {
                                    if (!e) {
                                        var o = sdk.s.getId();
                                        WialonLoginUtil.did_operate_as({
                                            origin: "login_page",
                                            user_name: a
                                        }), Object(i.a)({
                                            sid: o,
                                            operateAs: a,
                                            context: n
                                        }, (function (n) {
                                            n ? WialonHosting.Log.error("login:as:auth", n) : (u.destroy(), t.parentNode && t.parentNode.removeChild(t), s({
                                                operateAs: a
                                            }))
                                        }))
                                    }
                                }))
                            },
                            onContinueAs: function () {
                                WialonLoginUtil.did_operate_as({
                                    origin: "login_page",
                                    user_name: sdk.u.getName(),
                                    root: !0
                                }), u.destroy(), t.parentNode && t.parentNode.removeChild(t), s({
                                    operateAs: null
                                })
                            }
                        });
                        t = WialonHosting.Dom.instantiateTemplate("login:login_as", "dialog"), document.body.appendChild(t), t.querySelector(".help-window-content").appendChild(u.getElement()), Object(o.a)({
                            element: t,
                            translation: r
                        }), u.onShown(), window.addEventListener("resize", (function () {
                            u.onResize()
                        }))
                    }
                }
            }
            WialonHosting.Dom.consumeTemplates({
                html: d,
                module: "login:login_as"
            }), WialonHosting.UserSwitch || (WialonHosting.UserSwitch = {}), WialonHosting.UserSwitch.SearchItemsUsersProvider = function (t) {
                var n, e = t && t.ignoreUsersByName && WialonHosting.Util.makeSet(t.ignoreUsersByName);
                this.fetchItems = function (t) {
                    var o = !1;

                    function i() {
                        o || (o = !0, t.apply(this, arguments))
                    }
                    sdk.r.startBatch("users_provider");
                    var a = wialon.item.Item.dataFlag.base | wialon.item.Item.dataFlag.billingProps;
                    sdk.s.searchItems({
                        itemsType: "user",
                        propName: "sys_name",
                        propValueMask: "*",
                        sortType: "sys_name"
                    }, !0, a, 0, 0, (function (t, o) {
                        !t && o && Array.isArray(o.items) ? (n = [], o.items.forEach((function (t) {
                            wialon.util.Number.and(t.getUserAccess(), wialon.item.User.accessFlag.operateAs) && (e && e[t.getName()] || n.push({
                                self: !1,
                                userName: t.getName(),
                                user: t,
                                account: null
                            }))
                        }))) : i({
                            code: t,
                            data: o
                        })
                    }));
                    var r = wialon.item.Item.dataFlag.base | wialon.item.Item.dataFlag.billingProps,
                        s = {};
                    sdk.s.searchItems({
                        itemsType: "avl_resource",
                        propName: "id",
                        propValueMask: "*",
                        sortType: "sys_name"
                    }, !0, r, 0, 0, (function (t, n) {
                        !t && n && Array.isArray(n.items) ? n.items.forEach((function (t) {
                            s[t.getId()] = t
                        })) : i({
                            code: t,
                            data: n
                        })
                    })), sdk.r.finishBatch((function (t) {
                        t ? i(t) : (n.forEach((function (t) {
                            t.user && (t.account = s[t.user.getAccountId()])
                        })), i(null))
                    }), "users_provider")
                }, this.getItems = function () {
                    return n || []
                }, this.isFetched = function () {
                    return !!n
                }
            }
        },
        sWoc: function (t, n, e) {
            "use strict";
            var o = e("kwuG"),
                i = e("exv3"),
                a = (e("AFqa"), function () {
                    ! function () {
                        var t = wialon.core.Session.prototype,
                            n = wialon.item.Item.prototype,
                            e = wialon.item.Unit.prototype,
                            o = wialon.item.User.prototype,
                            i = wialon.item.Resource.prototype;

                        function a(t) {
                            switch (t) {
                                case "command":
                                    return "CommandDefinition"
                            }
                            return t[0].toUpperCase() + t.slice(1)
                        }

                        function r(t) {
                            n[t + "PropItemAsync"] = function (n) {
                                var e = n.type,
                                    o = n.data,
                                    i = this,
                                    r = t;
                                return "profileField" === e && (r = "update"), r += a(e), new Promise((function (t, n) {
                                    var a = i[r];

                                    function s(e, o, i) {
                                        e ? n({
                                            error: e,
                                            data: o
                                        }) : t(o || i.result[1])
                                    }
                                    a ? "profileField" === e ? a.call(i, o.n, o.v, s) : a.call(i, o, s) : n(new Error("Unknown propitem: " + e))
                                }))
                            }
                        }

                        function s(t, n) {
                            return new Promise((function (e, o) {
                                try {
                                    t((function (i, a) {
                                        i ? o({
                                            error: i,
                                            data: a,
                                            _fun: t,
                                            errorMeta: n
                                        }) : e(a)
                                    }))
                                } catch (t) {
                                    o(t)
                                }
                            }))
                        }
                        t.searchItemAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.searchItem(t.id, t.dataFlags, e)
                            }))
                        }, t.searchItemsAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.searchItems(t.spec, t.force, t.flags, t.from, t.to, e)
                            }))
                        }, t.createUnitAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.createUnit(t.creator, t.name, t.hwTypeId, t.dataFlags, e)
                            }))
                        }, t.createResourceAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.createResource(t.creator, t.name, t.dataFlags, 1, e)
                            }))
                        }, t.createUserAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.createUser(t.creator, t.name, t.password, t.dataFlags || 1, e)
                            }))
                        }, t.getHwTypesAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.getHwTypes(t, e)
                            }))
                        }, r("create"), r("update"), n.deletePropItemAsync = function (t) {
                            var n = this,
                                e = t.type,
                                o = t.id;
                            return s((function (t) {
                                var i = "delete";
                                "profileField" === e && (i = "update"), i += a(e);
                                var r = n[i];
                                r ? "profileField" === e ? r.call(n, o, "", t) : r.call(n, o, t) : t(new Error("Unknown propitem: " + e))
                            }))
                        }, n.setPropItemImageAsync = function (t) {
                            var n = this,
                                e = t.type,
                                o = t.id,
                                i = t.data;
                            return s((function (t) {
                                var r = "set";
                                r += a(e);
                                var s = n[r += "Image"];
                                s ? s.call(n, {
                                    id: o
                                }, i, t) : t(new Error("Unknown propitem: " + e))
                            }))
                        }, wialon.item.Unit.getHwParamsAsync = function (t) {
                            return s((function (n) {
                                wialon.item.Unit.getHwParams(t.itemId, t.hwTypeId, 0, n)
                            })).then((function (t) {
                                return Array.isArray(t) ? t : []
                            }))
                        }, e.updateHwParamsAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.updateHwParams(t.hwTypeId, t.params, t.fileInputs || [], e)
                            }))
                        }, e.updateDeviceSettingsAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.updateDeviceSettings(t.hwTypeId, t.hwUniqueId, e)
                            }))
                        }, e.updateFuelConsRatesAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.updateFuelConsRates(t.idlingSummer, t.idlingWinter, t.consSummer, t.consWinter, t.winterMonthFrom, t.winterDayFrom, t.winterMonthTo, t.winterDayTo, e)
                            }))
                        }, e.updateTripDetectorAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.updateTripDetector(t.type, t.gpsCorrection, t.minSat, t.minMovingSpeed, t.minStayTime, t.maxMessagesDistance, t.minTripTime, t.minTripDistance, e)
                            }))
                        }, e.updateFuelSettingAsync = function (t, n) {
                            var e = this,
                                o = {
                                    calcTypes: this.updateFuelCalcTypes,
                                    fuelLevelParams: this.updateFuelLevelParams,
                                    fuelConsMath: this.updateFuelConsMath,
                                    fuelConsImpulse: function (t, n) {
                                        this.updateFuelConsImpulse(t.maxImpulses, t.skipZero, n)
                                    },
                                    fuelConsRates: function (t, n) {
                                        this.updateFuelConsRates(t.idlingSummer, t.idlingWinter, t.consSummer, t.consWinter, t.winterMonthFrom, t.winterDayFrom, t.winterMonthTo, t.winterDayTo, n)
                                    }
                                } [t];
                            return o ? s((function (t) {
                                o.call(e, n, (function () {
                                    t.apply(this, arguments)
                                }))
                            })) : Promise.reject(new Error("unknown fuel setting: " + t))
                        }, e.getCounterValue = function (t) {
                            switch (t) {
                                case "counterCalcFlags":
                                    return this.getCalcFlags();
                                case "engineHoursCounter":
                                    return this.getEngineHoursCounter();
                                case "trafficCounter":
                                    return this.getTrafficCounter();
                                case "mileageCounter":
                                    return this.getMileageCounter();
                                default:
                                    throw new Error("unknown counter: " + t)
                            }
                        }, e.updateCounterValueAsync = function (t, n) {
                            var e = this;
                            return s((function (o) {
                                switch (t) {
                                    case "counterCalcFlags":
                                        return e.updateCalcFlags(n, o);
                                    case "engineHoursCounter":
                                        return e.updateEngineHoursCounter(n, o);
                                    case "trafficCounter":
                                        return e.updateTrafficCounter(n, 0, o);
                                    case "mileageCounter":
                                        return e.updateMileageCounter(n, o);
                                    default:
                                        throw new Error("unknown counter: " + t)
                                }
                            }))
                        }, e.updateMessagesFilterAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.updateMessagesFilter(t.enabled, t.skipInvalid, t.minSats, t.maxHdop, t.maxSpeed, t.lbsCorrection, e)
                            }))
                        }, ["updateName", "updateAccessPassword", "updatePhoneNumber", "updatePhoneNumber2", "updateUniqueId2", "updateReportSettings", "updateDriverActivitySettings", "updateDriveRankSettings"].forEach((function (t) {
                            e[t + "Async"] = function (n) {
                                var e = this;
                                return s((function (o) {
                                    e[t](n, o)
                                }))
                            }
                        })), ["getReportSettings", "getDriverActivitySettings", "getFuelSettings", "getTripDetector", "getMessagesFilter", "getDriveRankSettings"].forEach((function (t) {
                            e[t + "Async"] = function () {
                                var n = this;
                                return s((function (e) {
                                    n[t](e)
                                }), t)
                            }
                        })), n.updateCustomPropertyAsync = function (t, n) {
                            var e = this;
                            return s((function (o) {
                                e.updateCustomProperty(t, n, o)
                            }))
                        }, n.updateIconLibraryAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.updateIconLibrary(t.lib, t.url, e)
                            }))
                        }, n.addLogRecordAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.addLogRecord(t.action, t.newValue, t.oldValue, e)
                            }))
                        }, ["updateIcon"].forEach((function (t) {
                            n[t + "Async"] = function (n) {
                                var e = this;
                                return s((function (o) {
                                    e[t](n, o)
                                }))
                            }
                        })), o.updateUserFlagsAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.updateUserFlags(t.flags, t.mask, e)
                            }))
                        }, o.updateItemAccessAsync = function (t) {
                            var n = this;
                            return s((function (e) {
                                n.updateItemAccess(t.item, t.accessMask, e)
                            }))
                        }, ["getLocale"].forEach((function (t) {
                            o[t + "Async"] = function () {
                                var n = this;
                                return s((function (e) {
                                    n[t](e)
                                }))
                            }
                        })), ["updateLocale", "updateHostsMask"].forEach((function (t) {
                            o[t + "Async"] = function (n) {
                                var e = this;
                                return s((function (o) {
                                    e[t](n, o)
                                }))
                            }
                        })), ["restoreIcons"].forEach((function (t) {
                            i[t + "Async"] = function (n) {
                                var e = this;
                                return s((function (o) {
                                    e[t](n, o)
                                }))
                            }
                        }))
                    }()
                });
            var r = !1,
                s = !1,
                l = [];

            function c(t, n) {
                if ("function" == typeof t && (n = t, t = {}), s) n(null);
                else if (l.push(n), !r) {
                    r = !0;
                    var o, c = t,
                        u = c.context;
                    c.loginParams, u.sdkParams.sdkJsUrl;
                    e.e(7).then(e.t.bind(null, "KmDj", 7)).catch((function (t) {
                        console.error(t), WialonHosting.Log.error("dynamicImport:sdkjs", t)
                    })), o = setInterval((function () {
                        if (window.qx && window.qx.$$loader.scriptLoaded) {
                            clearInterval(o), o = 0, a(), d(u);
                            var t = wialon.core.Session.getInstance();
                            Object(i.b)((function (n) {
                                n ? t.setEvtPollInterval(2) : t.setEvtPollInterval(15)
                            })), WialonHosting.Features.toggleFeature("twoFactorAuth", !!wialon.item.User.authParamsType), WialonHosting.Util || (WialonHosting.Util = {}), WialonHosting.Util.stringCompare = function (t, n) {
                                if (t === n) return 0;
                                var e = [t, n];
                                return wialon.util.Helper.sortItems(e, (function (t) {
                                    return t
                                })), e[0] === t ? -1 : 1
                            }, s = !0, l.forEach((function (t) {
                                t(null)
                            })), l = null
                        }
                    }), 50)
                }
            }

            function d(t) {
                var n, e, o = t.sdkParams,
                    i = o.sdkUrl,
                    a = o.whiteLabelSdkUrl,
                    r = o.apiFlags,
                    s = o.appName,
                    l = o.siteName,
                    c = "1" === WialonLoginUtil.get_url_parameter("not_check_login_services"),
                    d = wialon.core.Session.getInstance();
                if (WialonHosting.CMS_BRANCH && !c) {
                    var u = parseFloat(d.getJsVersion());
                    WialonHosting.IS_CMS && u >= 1.51 ? (n = l || "", e = "cms_manager") : e = l || ""
                } else e = "";
                d.initSession(a || i, s, r, e, void 0, {
                    apiPath: a ? "/api" : null,
                    ignoreBaseUrl: !!a,
                    whiteLabel: !!a,
                    gisUrl: i,
                    loginSiteName: n,
                    logger: {
                        warn: function (t) {
                            if (t) switch (t.type) {
                                case "position_validation":
                                    var n = p(t.unit);
                                    if (!n) break;
                                    var e = "";
                                    t.pos && (e += "x=" + t.pos.x + ",y=" + t.pos.y), WialonHosting.Log.forceAddLog("wh1210:invalid_pos:" + n + (e ? ":" + e : ""));
                                    break;
                                case "position_deletion":
                                    var o = p(t.unit);
                                    if (!o) break;
                                    WialonHosting.Log.forceAddLog("wh1210:pos_del:" + o)
                            }
                        }
                    }
                }), t.sdkParams.loadLibrary = function (t) {
                    d.loadLibrary(t)
                };
                var g = t.sdkParams._librariesToLoad;

                function p(t) {
                    return t ? "function" != typeof t.getId ? null : "uid=" + t.getId() : null
                }
                g && (g.forEach((function (t) {
                    d.loadLibrary(t)
                })), g = null)
            }
            var u = e("D0sG");

            function g(t, n) {
                var e = t.token,
                    i = t.authHash,
                    a = t.sid,
                    r = t.operateAs,
                    s = t.context,
                    l = t.withoutSdk;
                e || i || a ? (l ? function (t, n) {
                    n(null)
                } : c)({
                    context: s,
                    loginParams: {
                        sid: a,
                        authHash: i,
                        token: e
                    }
                }, (function (t) {
                    t ? n(t) : (function (t) {
                        var n = t.context;
                        window.wialon && window.wialon.core && window.wialon.core.Session && wialon.core.Session.getInstance().getCurrUser() && (wialon.core.Session.destroyInstance(), d(n))
                    }({
                        context: s
                    }), e ? function (t, n) {
                        var e = t.token,
                            i = t.operateAs,
                            a = t.withoutSdk,
                            r = t.context;
                        if (a) {
                            var s = {
                                token: e,
                                operateAs: i,
                                appName: r.sdkParams.appName,
                                siteName: r.sdkParams.siteName || "",
                                checkService: r.sdkParams.checkService || ""
                            };
                            return void Object(o.a)(WialonHosting.API_URL + "?svc=token/login&params=" + encodeURIComponent(JSON.stringify(s)), "callback", (function (t, e) {
                                t ? n({
                                    type: "auth",
                                    method: "token/login",
                                    code: 5
                                }) : e ? e.error ? n({
                                    type: "auth",
                                    method: "token/login",
                                    code: e.error
                                }) : n(null, {
                                    sessionData: e
                                }) : n({
                                    type: "auth",
                                    method: "token/login",
                                    code: 5
                                })
                            }))
                        }
                        var l = wialon.core.Session.getInstance();
                        l.loginToken(e, i || "", (function (t) {
                            t ? n({
                                type: "auth",
                                method: "token/login",
                                code: t
                            }) : n(null, {
                                session: l
                            })
                        }))
                    }({
                        token: e,
                        operateAs: r,
                        withoutSdk: l,
                        context: s
                    }, g) : i ? function (t, n) {
                        var e = t.authHash,
                            i = t.operateAs,
                            a = t.withoutSdk,
                            r = t.context;
                        if (a) {
                            var s = {
                                authHash: e,
                                operateAs: i,
                                appName: r.sdkParams.appName,
                                siteName: r.sdkParams.siteName || "",
                                checkService: r.sdkParams.checkService || ""
                            };
                            return void Object(o.a)(WialonHosting.API_URL + "?svc=core/use_auth_hash&params=" + encodeURIComponent(JSON.stringify(s)), "callback", (function (t, e) {
                                t ? n({
                                    type: "auth",
                                    method: "core/use_auth_hash",
                                    code: 5
                                }) : e ? e.error ? n({
                                    type: "auth",
                                    method: "core/use_auth_hash",
                                    code: e.error
                                }) : n(null, {
                                    sessionData: e
                                }) : n({
                                    type: "auth",
                                    method: "core/use_auth_hash",
                                    code: 5
                                })
                            }))
                        }
                        var l = wialon.core.Session.getInstance();
                        l.loginAuthHash(e, i || "", (function (t) {
                            t ? n({
                                type: "auth",
                                method: "core/use_auth_hash",
                                code: t
                            }) : n(null, {
                                session: l
                            })
                        }))
                    }({
                        authHash: i,
                        operateAs: r,
                        withoutSdk: l,
                        context: s
                    }, g) : a && function (t, n) {
                        var e = t.sid,
                            o = t.operateAs;
                        t.withoutSdk && WialonHosting.Log.error(new Error("auth:loginBySid:withoutSdk"));
                        var i = wialon.core.Session.getInstance(),
                            a = WialonHosting.Util.tryParseJson(sessionStorage.getItem("wh_session_data"));
                        sessionStorage.removeItem("wh_session_data");
                        var r = Object(u.b)(e) && !o;
                        if (Object(u.c)(null), a && a.eid === e) return i.parseSessionData(a), void n(null, {
                            session: i
                        });
                        i.duplicate(e, o || "", !0, (function (t) {
                            t ? n({
                                type: "auth",
                                method: "core/duplicate",
                                code: t
                            }) : n(null, {
                                session: i
                            })
                        }), r)
                    }({
                        sid: a,
                        operateAs: r,
                        withoutSdk: l,
                        context: s
                    }, g))
                })) : n("no token, no authHash, no sid");

                function g(t, e) {
                    if (t) n(t);
                    else if (l) {
                        try {
                            sessionStorage.setItem("wh_session_data", JSON.stringify(e.sessionData))
                        } catch (t) {}
                        n(null, {
                            sid: e.sessionData.eid,
                            sessionData: e.sessionData
                        })
                    } else window.sdk || (window.sdk = {}), sdk.s = wialon.core.Session.getInstance(), sdk.r = wialon.core.Remote.getInstance(), sdk.u = sdk.s.getCurrUser(), n(null, {
                        sid: sdk.s.getId(),
                        session: e.session
                    })
                }
            }
            e.d(n, "a", (function () {
                return g
            }))
        },
        txeg: function (t, n, e) {
            "use strict";

            function o() {
                return localStorage.getItem("wwt")
            }

            function i() {
                return localStorage.getItem("wwt_operateAs")
            }

            function a() {
                var t = window.wialon && wialon && wialon.core && wialon.core.Session && wialon.core.Session.getInstance();
                if (!t) return !1;
                var n = t.getToken();
                if (!(n = n && n.th) || "string" != typeof n || 72 !== n.length) return !1;
                var e = o();
                return !(!e || "string" != typeof e || 72 !== e.length) && n.slice(32) === e.slice(32)
            }

            function r(t) {
                var n = t.token,
                    e = t.operateAs;
                localStorage.setItem("wwt", n), e ? localStorage.setItem("wwt_operateAs", e) : localStorage.removeItem("wwt_operateAs")
            }

            function s(t) {
                t ? localStorage.setItem("wwt_operateAs", t) : localStorage.removeItem("wwt_operateAs")
            }

            function l() {
                localStorage.removeItem("wwt"), localStorage.removeItem("wwt_operateAs")
            }
            e.d(n, "b", (function () {
                return o
            })), e.d(n, "c", (function () {
                return i
            })), e.d(n, "d", (function () {
                return a
            })), e.d(n, "e", (function () {
                return r
            })), e.d(n, "f", (function () {
                return s
            })), e.d(n, "a", (function () {
                return l
            }))
        },
        udyI: function (t, n) {
            if (WialonHosting.CustomOptions.cookiePolicy) {
                WialonHosting.Dom.onInteractive((function () {
                    var t = document.createElement("style");
                    t.appendChild(document.createTextNode(".x-cookie-policy {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: center;\n\t\talign-items: flex-start;\n\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tpadding: 15px;\n\n\t\tcolor: white;\n\t\tbackground: rgba(0, 0, 0, 0.6);\n\n\t\tfont-size: 16px;\n\n\t\tz-index: 10001; /* over blocking cover */\n\t}\n\t.x-cookie-policy.rtl {\n\t\tflex-direction: row-reverse;\n\t}\n\t.x-cookie-policy a,\n\t.x-cookie-policy a:link,\n\t.x-cookie-policy a:visited {\n\t\tcolor: #6EB6FF;\n\t\tfont-size: inherit;\n\t}\n\t.x-cookie-policy a:hover {\n\t\ttext-decoration: underline;\n\t}\n\t.login .x-cookie-policy a {\n\t\tcolor: #6EB6FF;\n\t}\n\t.x-cookie-policy .text {\n\t\tline-height: 22px;\n\t\tpadding-right: 10px;\n\t}\n\t.x-cookie-policy.rtl .text {\n\t\tpadding-right: 0;\n\t\tpadding-left: 10px;\n\t}\n\t.x-cookie-policy button,\n\t.x-cookie-policy button:hover {\n\t\tbox-sizing: border-box;\n\t\tpadding-left: 24px;\n\t\tpadding-right: 24px;\n\t\theight: 22px;\n\t\toutline: none;\n\t\tborder: none;\n\t\tcolor: black;\n\t\tborder-radius: 2px;\n\t}\n\t.x-cookie-policy button {\n\t\tbackground: white;\n\t}\n\t.x-cookie-policy button:hover {\n\t\tbackground: #ebebeb;\n\t}\n\n\t@media screen and (max-width: 767px) and (min-height: 330px) and (orientation: portrait),\n\t       screen and (max-width: 500px) and (min-height: 330px) and (orientation: landscape)\n\t{\n\t\t.x-cookie-policy {\n\t\t\tflex-direction: column;\n\t\t}\n\n\t\t.x-cookie-policy .text {\n\t\t\tpadding-right: 0;\n\t\t\tpadding-bottom: 10px;\n\t\t}\n\t\t.x-cookie-policy.rtl .text {\n\t\t\tpadding-left: 0;\n\t\t}\n\t}")), document.head.appendChild(t)
                }))
            }
        },
        "v//r": function (t, n, e) {
            "use strict";
            var o = e("HBif"),
                i = '<div id="two_factor_body" class="login-gradient-bg" style="display: none;">\n\t<div class="login-bg">\n\t\t<div class="login-pading">\n\t\t\t' + WialonHosting.CustomOptions.login_logo_html + '\n\t\t\t<div class="logo-info" id="two_factor_text_div" dir="auto"></div>\n\t\t\t<div class="logo-data-reset">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th dir="auto" data-translate-phrase="two_factor_verification_code_colon"></th>\n\t\t\t\t\t\t<td><input type="text" name="two_factor_code" id="two_factor_code_input" value="" data-translate-placeholder="two_factor_verification_code" dir="auto"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class="two-factor-resend-code-tr">\n\t\t\t\t\t\t<th class="td" dir="auto"><span id="two_factor_resend_code" class="a" data-translate-phrase="two_factor_code_was_not_received"></span></th>\n\t\t\t\t\t\t<td id="two_factor_resend_code_buttons_container" class="td two-factor-resend-code-td"><div class="sms-div"><input id="two_factor_resend_sms_button" type="button" data-translate-value="sms"></div><div class="email-div"><input id="two_factor_resend_email_button" type="button" data-translate-value="email"></div></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class="logo-reset">\n\t\t\t\t<input id="two_factor_submit" type="button" onclick="WialonLoginPage.doTwoFactorLogin();return false;" data-translate-value="enter">\n\t\t\t</div>\n\t\t\t<div class="logo-action-reset">\n\t\t\t\t<a href="#" onclick="onShowLoginPage(true); return false;" id="two_factor_back" data-translate-phrase="reset_back_link">reset_back_link</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>';
            ! function () {
                WialonHosting.Dom.onInteractive((function () {
                    var t = document.createElement("div");
                    t.innerHTML = i, document.body.appendChild(t.firstElementChild)
                }));
                var t = [],
                    n = !1,
                    e = null;
                WialonLoginPage.AUTH_TYPE = {
                    EMAIL: 1,
                    SMS: 2
                }, WialonLoginPage.onTwoFactorTranslationChange = function () {
                    var t = document.getElementById("two_factor_text_div");
                    if (t) switch (t.getAttribute("data-sent-to")) {
                        case "email":
                            t.innerHTML = WialonLoginPage.translation.two_factor_sent_to_email_full;
                            break;
                        case "phone":
                            t.innerHTML = WialonLoginPage.translation.two_factor_sent_to_phone_full;
                            break;
                        default:
                            t.innerHTML = ""
                    }
                }, WialonLoginPage.updateTwoFactorDestination = function (t) {
                    var n = t && t.withAlert,
                        e = null,
                        o = document.getElementById("two_factor_text_div");
                    switch (parseInt(WialonLoginPage._currentTwoFactorLogin.auth_type, 10)) {
                        case WialonLoginPage.AUTH_TYPE.EMAIL:
                            o.setAttribute("data-sent-to", "email"), e = "two_factor_sent_to_email";
                            break;
                        case WialonLoginPage.AUTH_TYPE.SMS:
                            o.setAttribute("data-sent-to", "phone"), e = "two_factor_sent_to_phone";
                            break;
                        default:
                            WialonHosting.Log.error("2factor:auth_type", WialonLoginPage._currentTwoFactorLogin.auth_type)
                    }
                    n && e && WialonLoginPage.showAlert({
                        phrase: e,
                        status: "success"
                    }), WialonLoginPage.onTwoFactorTranslationChange()
                }, WialonLoginPage.showTwoFactorCodePrompt = function (t) {
                    var i = 3e4,
                        a = t.credentials,
                        r = t.twoFactorParams;
                    Object(o.a)({
                        element: document.getElementById("two_factor_body"),
                        translation: WialonLoginPage.translation
                    }), e && e.cancel(), WialonLoginPage.switchPage("two_factor_body");
                    var s = document.getElementById("two_factor_resend_code_buttons_container"),
                        l = document.getElementById("two_factor_resend_code"),
                        c = 2 === parseInt(r.auth_type, 10);
                    WialonLoginPage._currentTwoFactorCredentials = a, WialonLoginPage._currentTwoFactorLogin = r, WialonLoginPage.updateTwoFactorDestination(), s.classList.remove("sms-email"), s.classList.remove("email"), s.classList.add(c ? "sms-email" : "email"), s.style.visibility = "hidden";
                    var d = 0;

                    function u() {
                        l.classList.add("inactive"), l.classList.add("disabled"), d && clearTimeout(d), d = setTimeout((function () {
                            d = 0, l.classList.remove("inactive"), l.classList.remove("disabled")
                        }), i)
                    }
                    u();
                    var g = document.getElementById("two_factor_code_input");
                    g.value = "", g.focus(), v.call(g);
                    var p = document.getElementById("two_factor_resend_sms_button"),
                        f = document.getElementById("two_factor_resend_email_button");

                    function m() {
                        l.classList.contains("disabled") || (l.classList.add("inactive"), s.style.visibility = "")
                    }
                    n || (n = !0, g.addEventListener("keyup", (function (t) {
                        if (v.call(this), !t) {
                            if (!window.event) return;
                            t = window.event
                        }
                        13 === (t.keyCode || t.which) && (t.target && t.target.blur && t.target.blur(), WialonLoginPage.doTwoFactorLogin())
                    })), g.addEventListener("change", v), WialonLoginPage.twoFactorSubmitButtonsControl = new WialonLoginPage.ButtonLocker({
                        elements: [document.getElementById("two_factor_submit"), p, f]
                    })), l.addEventListener("click", m);
                    var h = _({
                            authType: WialonLoginPage.AUTH_TYPE.SMS
                        }),
                        b = _({
                            authType: WialonLoginPage.AUTH_TYPE.EMAIL
                        });

                    function _(t) {
                        var n = t.authType;
                        return function () {
                            WialonLoginPage.twoFactorSubmitButtonsControl.disable(), WialonLoginPage.userPasswordAuth({
                                credentials: a,
                                sendCodeTo: n
                            }, (function (t, n) {
                                if (WialonLoginPage.twoFactorSubmitButtonsControl.enable(), u(), s.style.visibility = "hidden", !WialonLoginPage.handleUserPasswordAuthSuccess({
                                        error: t,
                                        result: n
                                    })) {
                                    if (n && n.isTwoFactorRequired) return WialonLoginPage._currentTwoFactorLogin = n._twoFactorParams, WialonLoginPage.updateTwoFactorDestination({
                                        withAlert: !0
                                    }), g.value = "", g.classList.remove("invalid-code"), void g.focus();
                                    onShowLoginPage(!0), WialonLoginPage.handleUserPasswordAuth({
                                        credentials: WialonLoginPage._currentTwoFactorCredentials,
                                        error: t,
                                        result: n
                                    })
                                }
                            }))
                        }
                    }

                    function v() {
                        this.classList.remove("invalid-code"), this.classList.remove("empty-input")
                    }
                    p.addEventListener("click", h), f.addEventListener("click", b), e = {
                        cancel: function () {
                            l.removeEventListener("click", m), p.removeEventListener("click", h), f.removeEventListener("click", b), d && (clearTimeout(d), d = 0)
                        }
                    }
                }, WialonLoginPage.twoFactorLogin = function (n, e) {
                    var o = n.code,
                        i = n.twoFactorParams,
                        a = n.responseType;
                    WialonLoginPage.oauthRequestHandler && WialonLoginPage.oauthRequestHandler.callback({
                        type: "stale"
                    }), WialonLoginPage.oauthRequestHandler = {
                        requestId: ++this.authRequestId,
                        callback: function (n, o) {
                            if (t.forEach((function (t) {
                                    t()
                                })), t = [], n) return void e(n);
                            if (7 === parseInt(o.svc_error, 10)) return void e({
                                type: "invalidCode"
                            });
                            WialonLoginPage.handleOAuthLogin({
                                credentials: WialonLoginPage._currentTwoFactorCredentials,
                                params: o
                            }, e)
                        }
                    };
                    var r = document.createElement("form");

                    function s(t, n) {
                        var e = document.createElement("input");
                        e.setAttribute("type", "hidden"), e.setAttribute("name", t), e.setAttribute("value", n), r.appendChild(e)
                    }
                    r.setAttribute("target", "null_frame"), r.setAttribute("method", "post"), r.setAttribute("action", wialonSDKUrl + "/oauth/authorize.html"), s("hash", i.hash), s("p", i.p), s("redirect_uri", document.location.protocol + "//" + document.location.host + "/post_message.html"), s("response_type", a), s("remote_hash", o), s("request_id", WialonLoginPage.oauthRequestHandler.requestId), r.style.position = "absolute", r.style.left = "-99999px", r.style.top = "-99999px", document.body.appendChild(r), t.push((function () {
                        r.parentNode.removeChild(r)
                    })), r.submit()
                }, WialonLoginPage.doTwoFactorLogin = function () {
                    var n = document.getElementById("two_factor_code_input");
                    if (n) {
                        var e = n.value;
                        if (!e) return WialonLoginPage.showAlert({
                            phrase: WialonLoginPage.useOperateAs ? "operate_as_fields_error" : "two_factor_invalid_code"
                        }), void n.classList.add("empty-input");
                        var o = {
                            code: e,
                            twoFactorParams: WialonLoginPage._currentTwoFactorLogin,
                            responseType: WialonLoginPage._responseType
                        };
                        WialonLoginPage.twoFactorSubmitButtonsControl.disable(), this.twoFactorLogin(o, (function (n, e) {
                            t.forEach((function (t) {
                                t()
                            })), t = [], WialonLoginPage.twoFactorSubmitButtonsControl.enable();
                            var o = document.getElementById("two_factor_code_input");
                            if (n && "invalidCode" === n.type) return o.classList.add("invalid-code"), void WialonLoginPage.showAlert({
                                phrase: "two_factor_invalid_code",
                                errorInputs: [o]
                            });
                            WialonLoginPage.handleUserPasswordAuthSuccess({
                                error: n,
                                result: e
                            }) || (onShowLoginPage(!0), WialonLoginPage.handleUserPasswordAuth({
                                credentials: WialonLoginPage._currentTwoFactorCredentials,
                                error: n,
                                result: e
                            }))
                        }))
                    }
                }
            }()
        },
        vRfB: function (t, n, e) {
            "use strict";
            var o = e("+u5n"),
                i = e("RJTk"),
                a = e("kwuG"),
                r = e("XSds"),
                s = WialonHosting.CustomOptions.use_wialon_sdk_url,
                l = WialonHosting.CustomOptions.sdk_url;
            WialonHosting.API_URL = WialonHosting.WHITE_LABEL_SDK_URL ? WialonHosting.WHITE_LABEL_SDK_URL + "/api" : l + "/wialon/ajax.html", WialonHosting.SDK_URL = WialonHosting.WHITE_LABEL_SDK_URL || l, WialonHosting.SDK_FLAGS = parseInt(WialonHosting.CustomOptions.app_flags, 10) || 0;
            var c = WialonHosting.CustomOptions.app_name,
                d = WialonHosting.CustomOptions.app_flags,
                u = WialonHosting.CustomOptions.site_name,
                g = WialonHosting.CMS_BRANCH,
                p = WialonHosting.CMS_GROUP,
                f = WialonHosting.IS_LOCAL,
                m = f,
                h = /виалон/i.test(g),
                b = 1 == parseInt(WialonHosting.CustomOptions.white_label, 10),
                _ = Object(o.a)(),
                v = _.browser,
                w = _.version,
                y = _.userSystem;
            Object(i.a)(window, "browser", v), Object(i.a)(window, "version", w), Object(i.a)(window, "userSystem", y);
            var k = Object(r.b)();
            k = k.map((function (t) {
                return {
                    name: t.name,
                    param: t.key
                }
            })), Object(i.a)(window, "langs", k);

            function L(t) {
                var n = t.text,
                    e = t.blockForm,
                    o = t.reloadTimeout,
                    i = t.reloadLink,
                    a = t.reloadNow,
                    r = t.reloadCode,
                    s = t.skipLogin,
                    l = t.customAttributes,
                    c = t.errorCode,
                    d = t.errorInputs;
                !s && WialonHosting.IS_MONITORING && onShowLoginPage(!0), c && (n = x(c)), i && (n = n.replace("<a ", "<a onclick='document.location=document.location; return false;'"));
                var u = [];
                if (l)
                    for (var g in l) l.hasOwnProperty(g) && u.push(g + "='" + l[g] + "'");
                var p = "<span dir='auto'" + (u.length ? " " + u.join(" ") : "") + ">" + n + "</span>",
                    f = {};
                if (c ? f.errorCode = c : f.html = p, d && (f.errorInputs = d), WialonLoginPage.showAlert(f), e) {
                    var m = document.getElementById("passw"),
                        h = document.getElementById("user"),
                        b = document.getElementById("lang"),
                        _ = document.getElementById("submit"),
                        v = document.getElementById("store_cookie");
                    m && m.setAttribute("disabled", ""), h && h.setAttribute("disabled", ""), b && b.setAttribute("disabled", ""), _ && _.setAttribute("disabled", ""), v && v.setAttribute("disabled", "")
                }
                if (o && setTimeout((function () {
                        document.location.reload()
                    }), 1e4), a) {
                    var w = WialonLoginUtil.getRequiredUrlParameters();
                    r && (w.svc_error = r), document.location = WialonLoginUtil.extend_url(window.location.protocol + "//" + window.location.host, w)
                }
            }! function () {
                var t = {
                    resetPasswordRequest: function (t, n, e, o, i) {
                        for (var r = document.cookie.split("; "), s = "en", l = 0; l < r.length; l++) {
                            var c = r[l].split("=");
                            if (2 == c.length && "lang" == c[0]) {
                                s = c[1];
                                break
                            }
                        }
                        var d = {
                            user: t,
                            email: n,
                            emailFrom: e,
                            url: o,
                            lang: s
                        };
                        Object(a.a)(WialonHosting.API_URL + "?svc=core/reset_password_request&params=" + encodeURIComponent(JSON.stringify(d)), "callback", (function (t, n) {
                            t ? i(t) : n ? n.error ? i(n) : i(0) : i(5)
                        }))
                    },
                    resetPasswordPerform: function (t, n, e) {
                        var o = {
                            user: t,
                            code: n
                        };
                        Object(a.a)(WialonHosting.API_URL + "?svc=core/reset_password_perform&params=" + encodeURIComponent(JSON.stringify(o)), "callback", (function (t, n) {
                            t ? e(t) : n ? n.error ? e(n.error, n) : e(0, n) : e(5)
                        }))
                    }
                };
                window.WialonPasswordResetApi = t, window.WialonHosting || (window.WialonHosting = {}), WialonHosting.Language || (WialonHosting.Language = {});
                var n = WialonHosting.CustomOptions.http_lang || "en",
                    e = new SimplePubSub;
                WialonHosting.Language._onLanguageChange = function (t) {
                    if (t !== n) {
                        var o = n;
                        n = t, e.notify([t, o], null)
                    }
                }, WialonHosting.Language.getLanguage = function () {
                    return n
                }, WialonHosting.Language.watchLanguage = function (t, o) {
                    return t(n, null), e.watch(t, o)
                }
            }();

            function x(t) {
                if (0 == t) return "";
                var n = WialonLoginPage.translation["error_" + t];
                return n || WialonLoginPage.translation.error_6
            }
            window.wialonUseSDKUrl = s, window.wialonSDKUrl = l, window.wialonAppName = c, window.wialonAppFlags = d, window.wialonSiteService = u, window.cmsBranch = g, window.cmsGroup = p, window.isLocal = f, window.IS_WIALON_LOCAL = m, window.IS_WIALON_RU = h, window.isWhiteLabel = b, window.wialonLoadInterval = 0, window.sdk = {}, window.auth_process = !1, window.session_token = "", window.onLoginErrorExt = L, window.onLoginError = function (t, n, e, o, i, a, r, s) {
                return L({
                    text: t,
                    inputError: n,
                    blockForm: e,
                    reloadTimeout: o,
                    reloadLink: i,
                    reloadNow: a,
                    reloadCode: r,
                    skipLogin: s
                })
            }, window.requestGet = function (t, n, e, o) {
                o = null == o || o;
                var i = window.XMLHttpRequest ? new XMLHttpRequest : ActiveXObject("Microsoft.XMLHTTP");
                if (i) {
                    var a = "";
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (a += r + "=" + n[r] + "&");
                    i.onreadystatechange = function () {
                        4 == i.readyState && 200 == i.status && e(i.responseText)
                    }, a = a.substr(0, a.length - 1), i.open("GET", t + "?" + a, o), window.XMLHttpRequest ? i.send(null) : i.send()
                }
            }, window.del_storage_item = function (t) {
                var n = window.localStorage;
                n && t && n.removeItem(t)
            }, window.set_storage_item = function (t, n) {
                var e = window.localStorage;
                e && t && e.setItem(t, escape(n))
            }, window.get_storage_item = function (t) {
                var n = window.localStorage;
                if (n && t && t in n) return unescape(n.getItem(t))
            }, window.get_storage_items = function (t) {
                var n = {},
                    e = window.localStorage;
                if (!e || !Object.keys(e).length || !t) return null;
                for (var o in e) o.match(t) && (n[o] = unescape(e[o]));
                return n
            }, window.getErrorText = x, window.escapeHTML = function (t) {
                return String(t).replace(/[']/g, (function (t) {
                    switch (t) {
                        case "'":
                            return "&#39;"
                    }
                    return t
                }))
            }, window.saveLangToProp = function () {
                var t = wialon.core.Session.getInstance(),
                    n = t.getCurrUser(),
                    e = "function" == typeof t.getHiddenLogin && t.getHiddenLogin();
                if (n) {
                    var o = n.getCustomProperty("language", ""),
                        i = new RegExp("lang=[a-z]{2}").exec(document.cookie);
                    if (i && i.length) {
                        var a = i[0].slice(-2);
                        a && a !== o && !e && n.updateCustomProperty("language", a)
                    }
                }
            }
        },
        xUyU: function (t, n, e) {
            "use strict";
            e("IEVc"), e("QEdS");
            var o = e("++JW"),
                i = 10;
            var a = e("cMNc"),
                r = e("0Zvi"),
                s = e("AFqa"),
                l = e("txeg");
            var c = e("Q+aG"),
                d = e("8+eO"),
                u = e("C90t");
            ! function () {
                if (window.localStorage) {
                    var t = [];
                    for (var n in localStorage) /^http.*adfurlcms(\d*)\/pack\.css\s*/.test(n) && t.push(n);
                    for (var e in localStorage) /^lessjscache:/.test(e) && t.push(e);
                    t.forEach((function (t) {
                        localStorage.removeItem(t)
                    }))
                }
            }(), window.WialonLoginUtil || (window.WialonLoginUtil = {}), WialonHosting.LoginTranslations || (WialonHosting.LoginTranslations = {}), WialonLoginUtil.translation = {
                access_denied: WialonHosting.LoginTranslations.access_denied,
                loading_progress: WialonHosting.LoginTranslations.loading_progress,
                operate_as_confirm: WialonHosting.LoginTranslations.operate_as_confirm
            }, WialonLoginUtil.get_url_parameter = function (t) {
                return Object(u.b)(document.location.search, t)
            }, WialonLoginUtil.DO_NOT_HIDE_SID = WialonLoginUtil.DO_NOT_HIDE_SID || "1" === WialonLoginUtil.get_url_parameter("dnhs"), WialonLoginUtil.replace_url_parameter = WialonHosting.Url.replaceParameter, WialonLoginUtil.extend_url = function (t, n) {
                for (var e in n)
                    if (n.hasOwnProperty(e)) {
                        var o = n[e];
                        o = o || "number" == typeof o ? "" + o : null, t = WialonLoginUtil.replace_url_parameter(t, e, o)
                    } return t
            }, WialonLoginUtil.set_url_parameter = function (t, n) {
                if ("undefined" != typeof history && history && history.replaceState) {
                    var e = WialonLoginUtil.replace_url_parameter(t, n);
                    e && history.replaceState(null, "", e)
                }
            }, WialonLoginUtil.remove_url_parameter = function (t, n) {
                if ((n && n.force || "sid" !== t || !WialonLoginUtil.DO_NOT_HIDE_SID) && "undefined" != typeof history && history && history.replaceState) {
                    var e = new RegExp("([\\?&])" + t + "=[^&]+(&?)"),
                        o = document.location.search.replace(e, (function (t, n, e) {
                            return "?" === n && "&" === e ? "?" : e ? "&" : ""
                        }));
                    "&" !== o && "?" !== o && o.length || (o = "/"), history.replaceState(null, "", o)
                }
            }, WialonLoginUtil.get_operate_as = function () {
                var t = /[?&]operate_as=([^&]+)/.exec(document.location.search);
                if (t) {
                    Object(c.a)("operate_as");
                    var n = decodeURIComponent(t[1]);
                    return WialonLoginUtil.get_session().set_operate_as(n), n
                }
                var e = WialonLoginUtil.get_session().get_operate_as();
                return "string" == typeof e ? e : get_storage_item("wwt") && get_storage_item("wwt_operateAs") || null
            }, WialonLoginUtil.set_operate_as = function (t) {
                WialonLoginUtil.get_session().set_operate_as(t), Object(c.a)("operate_as")
            }, WialonLoginUtil.confirm_operate_as = function (t) {
                return confirm(sprintf(WialonLoginUtil.translation.operate_as_confirm, t))
            }, WialonLoginUtil.check_operate_as_access = function (t, n) {
                var e = WialonHosting.blocking.startBlockingOperation({
                    html: WialonLoginUtil.translation.loading_progress
                });
                wialon.core.Session.getInstance().searchItem(t.getId(), wialon.item.Item.dataFlag.base, (function (t, o) {
                    e.finish(), t ? (WialonHosting.alerts.warning({
                        html: WebCMS.get_error_text(t),
                        autoHideTimeout: 1e4
                    }), n({
                        error: t
                    })) : o && o.getUserAccess ? 2097152 & o.getUserAccess() ? n(null) : (WialonHosting.alerts.warning({
                        html: WialonLoginUtil.translation.access_denied,
                        autoHideTimeout: 1e4
                    }), n("!0x200000")) : (WialonHosting.alerts.warning({
                        html: WialonLoginUtil.translation.access_denied,
                        autoHideTimeout: 1e4
                    }), n("no_user"))
                }))
            }, WialonLoginUtil.did_operate_as = function (t) {
                var n = t.origin,
                    e = t.root;
                if (n) {
                    var o = "loginas/" + n + "/" + (t.user_name || t.user && t.user.getName()) + (e ? "/root" : ""),
                        i = "undefined" != typeof WebCMS && WebCMS && WebCMS.get_module("log_trader");
                    i && i.add_log_data(o)
                }
            }, WialonLoginUtil.do_operate_as = function (t) {
                t || (t = {});
                var n = t.new_window,
                    e = t.user,
                    o = t.user_name,
                    i = t.skip_access_checks,
                    a = t.site,
                    r = t.siteProtocol;
                if (e || o && i) {
                    var s;
                    if (e && (o = e.getName()), WialonLoginUtil.did_operate_as(t), a && a === document.location.host && (a = null), n) return s = a ? WialonLoginUtil.createOperateAsUrl({
                        protocol: r,
                        host: a,
                        name: o,
                        sid: sdk.s.getId()
                    }) : WialonLoginUtil.replace_operate_as_for_current_location(o), void window.open(s, "_blank", "");
                    i || 2097152 & e.getUserAccess() ? i ? l() : WialonLoginUtil.confirm_operate_as(o) && WialonLoginUtil.check_operate_as_access(e, (function (t) {
                        t || l()
                    })) : WialonHosting.alerts.warning({
                        html: WialonLoginUtil.translation.access_denied,
                        autoHideTimeout: 1e4
                    })
                }

                function l() {
                    if (a) {
                        var t = WialonLoginUtil.createOperateAsUrl({
                            protocol: r,
                            host: a,
                            name: o,
                            sid: sdk.s.getId()
                        });
                        document.location.href = t
                    } else o != sessionStorage.getItem("wialon_operate_as") && sessionStorage.setItem("newSession", 1), WialonLoginUtil.get_session().set_operate_as(o), document.location.reload()
                }
            }, WialonLoginUtil.do_operate_as_root = function (t) {
                var n = sdk.s.getAuthUser();
                sessionStorage.setItem("newSession", 1), WialonLoginUtil.get_session().set_operate_as("");
                var e = WialonLoginUtil.replace_operate_as_for_current_location(null);
                WialonLoginUtil.did_operate_as(Object.assign({}, t, {
                    root: !0,
                    user_name: n
                })), document.location.href = e
            }, WialonLoginUtil.createOperateAsUrl = function (t) {
                return (t.protocol || "http") + "://" + t.host + "/?operate_as=" + encodeURIComponent(t.name) + "&sid=" + encodeURIComponent(t.sid)
            }, WialonLoginUtil.replace_operate_as_for_current_location = function (t) {
                return document.location.protocol + "//" + document.location.host + document.location.pathname + WialonLoginUtil.replace_url_parameter("operate_as", t)
            }, WialonLoginUtil.do_logout = function () {
                var t = Object(l.d)();

                function n() {
                    sdk.s.logout(e)
                }

                function e() {
                    WialonLoginUtil.remove_sid(), t && Object(l.a)(), document.location.reload()
                }
                t ? sdk.s.updateToken("delete", {
                    h: Object(l.b)()
                }, (function () {
                    n()
                })) : n()
            }, WialonLoginUtil.get_sid = function () {
                var t = WialonLoginUtil.get_session().get_sid();
                return t && WialonLoginUtil.DO_NOT_HIDE_SID && WialonLoginUtil.set_url_parameter("sid", t), t
            }, WialonLoginUtil.set_sid = function (t) {
                WialonLoginUtil.DO_NOT_HIDE_SID && WialonLoginUtil.set_url_parameter("sid", t), WialonLoginUtil.get_session().set_sid(t)
            }, WialonLoginUtil.remove_sid = function () {
                Object(c.a)("sid"), WialonLoginUtil.get_session().remove_sid(), WialonLoginUtil.get_session().remove_operate_as()
            }, WialonLoginUtil.isOwnLogin = function () {
                return ("function" != typeof sdk.s.getHiddenLogin || !sdk.s.getHiddenLogin()) && !WialonLoginUtil.get_session().get_operate_as()
            }, WialonLoginUtil._session = null, WialonLoginUtil.get_session = function () {
                if (WialonLoginUtil._session) return WialonLoginUtil._session;
                var t = {
                    get_sid: function () {
                        return sessionStorage.getItem("wialon_sid") || null
                    },
                    set_sid: function (t) {
                        sessionStorage.setItem("wialon_sid", t)
                    },
                    remove_sid: function () {
                        sessionStorage.removeItem("wialon_sid")
                    },
                    get_user_name: function () {
                        return sessionStorage.getItem("wialon_user") || null
                    },
                    set_user_name: function (t) {
                        sessionStorage.setItem("wialon_user", t)
                    },
                    remove_user_name: function () {
                        sessionStorage.removeItem("wialon_user")
                    },
                    get_operate_as: function () {
                        var t = sessionStorage.getItem("wialon_operate_as");
                        return "string" == typeof t ? t : null
                    },
                    set_operate_as: function (t) {
                        t || (t = ""), sessionStorage.setItem("wialon_operate_as", t)
                    },
                    remove_operate_as: function () {
                        sessionStorage.removeItem("wialon_operate_as")
                    },
                    get_do_not_hide_sid: function () {
                        return !!sessionStorage.getItem("wialon_do_not_hide_sid")
                    },
                    set_do_not_hide_sid: function (t) {
                        t ? sessionStorage.setItem("wialon_do_not_hide_sid", "1") : sessionStorage.removeItem("wialon_do_not_hide_sid")
                    }
                };
                return WialonLoginUtil._session = t, t
            }, WialonLoginUtil.getRequiredUrlParameters = function () {
                var t = {},
                    n = WialonLoginUtil.get_url_parameter("wialon_sdk_url");
                n && (t.wialon_sdk_url = n);
                var e = WialonLoginUtil.get_url_parameter("use_local_wialon_sdk");
                e && (t.use_local_wialon_sdk = e);
                var o = WialonLoginUtil.get_url_parameter("not_check_login_services");
                return o && (t.not_check_login_services = o), t
            };
            var g = 0,
                p = [];

            function f(t) {
                if (0 === --g) {
                    var n = p;
                    p = [], n.forEach((function (n) {
                        n(t)
                    }))
                }
            }
            WialonLoginUtil.addCssLink = function (t, n) {
                var e, o = (n || {}).grepHint;
                o || (o = "a722bd68");
                var i = !1,
                    r = !1,
                    l = {
                        remove: function () {
                            i || (i = !0, e && e.parentNode.removeChild(e), r || (r = !0, f(null)))
                        }
                    };
                return t ? (g++, t = Object(s.b)(t), WialonHosting.Http.doHttpRequest({
                    url: t,
                    dataType: "text"
                }, (function (n, l) {
                    if (!i) {
                        if (n) return r = !0, f(n), void console.error(n);
                        var c = Object(a.b)(l, (function (n) {
                            return Object(a.a)(n) ? (n = Object(a.c)(t, n), n = Object(s.b)(n)) : null
                        }));
                        WialonHosting.Dom.onInteractive((function () {
                            i || ((e = document.createElement("style")).setAttribute("data-include-css-ponyfill", ""), e.setAttribute("data-grep-hint", o), e.innerHTML = c, document.head.appendChild(e), r = !0, f(null))
                        }))
                    }
                })), l) : (WialonHosting.Log.error(new Error("addCssLink:noCssUrl")), l)
            }, WialonLoginUtil.onCssLinksLoaded = function (t) {
                0 !== g ? p.push(t) : t(null)
            };
            var m = {};
            WialonHosting.Dom || (WialonHosting.Dom = {}), WialonHosting.Dom._templates = m, WialonHosting.Dom.consumeTemplates = function (t) {
                var n = t.domId,
                    e = t.html,
                    o = t.module,
                    i = t.returnObj,
                    a = !1;
                if (e || "interactive" === document.readyState || "complete" === document.readyState) return s();

                function r() {
                    "interactive" !== document.readyState && "complete" !== document.readyState || s()
                }

                function s() {
                    if (!a) {
                        var r;
                        if (a = !0, e)(r = document.createElement("div")).innerHTML = e;
                        else if (!(r = document.getElementById(n))) return void WialonHosting.Log.warn("domtemplates:noelement", t);
                        if (!i && !o) {
                            var s = r.querySelector("[data-module-id]");
                            if (!s) return WialonHosting.Log.error("consumeTemplates:noModuleId"), void f();
                            o = s.getAttribute("data-module-id")
                        }
                        for (var l = !i && (m[o] || (m[o] = {})), c = {}, d = r.querySelectorAll("[data-template-id]"), u = 0; u < d.length; u++) {
                            var g = d[u];
                            if (g && g.getAttribute) {
                                var p = g.getAttribute("data-template-id");
                                p && (g.removeAttribute("data-template-id"), i ? function (t) {
                                    c[p] = function (n) {
                                        var e = t.cloneNode(!0);
                                        if (n && n.asFragment) {
                                            for (var o = document.createDocumentFragment(), i = e.firstChild; i;) {
                                                var a = i;
                                                i = i.nextSibling, o.appendChild(a)
                                            }
                                            return o
                                        }
                                        return e
                                    }
                                }(g) : l[p] = g)
                            }
                        }
                        return f(), c
                    }

                    function f() {
                        e || r.parentNode.removeChild(r)
                    }
                }
                window.addEventListener("readystatechange", r), window.addEventListener("DOMContentLoaded", r)
            }, WialonHosting.Dom.instantiateTemplate = function (t, n, e) {
                var o = m[t];
                if (!o) return WialonHosting.Log.error("domtemplates:nomodule", {
                    module: t,
                    id: n
                }), null;
                var i = o[n];
                if (!i || !i.cloneNode) return WialonHosting.Log.error("domtemplates:notemplate", {
                    module: t,
                    id: n
                }), null;
                var a = i.cloneNode(!0);
                if (a.removeAttribute("id"), e && e.contentAsFragment) {
                    for (var r = document.createDocumentFragment(), s = a.firstChild; s;) {
                        var l = s;
                        s = s.nextSibling, r.appendChild(l)
                    }
                    return r
                }
                return a
            }, WialonHosting.Dom.executeInVisibleContext = function (t, n) {
                for (var e = []; t;) t.style && "none" === t.style.display && (e.push(t), t.style.display = ""), t = t.parentNode;
                n(), e.forEach((function (t) {
                    t.style.display = "none"
                }))
            }, WialonHosting.Dom.onComplete = r.a, WialonHosting.Dom.onInteractive = r.b, WialonHosting.Dom.onInteracted = function (t, n, e) {
                "function" == typeof n && (e = n, n = {});
                var a = n.filterNonUserInteractions,
                    r = 0,
                    s = 0;

                function l(t) {
                    if (a) {
                        if (s) return;
                        r = t.timeStamp || Object(o.a)(), s = setTimeout((function () {
                            s = 0, g(), e(t)
                        }), i)
                    } else g(), e(t)
                }

                function c(t) {
                    r && ((t.timeStamp || Object(o.a)()) - r < i && s && (clearTimeout(s), s = 0))
                }

                function d(t) {
                    s || (g(), e(t))
                }

                function u(t) {
                    g(), e(t)
                }
                return t.addEventListener("focus", l), a && t.addEventListener("blur", c), t.addEventListener("change", d), t.addEventListener("keydown", d), t.addEventListener("click", u), {
                    cancel: function () {
                        g()
                    }
                };

                function g() {
                    s && (clearTimeout(s), s = 0), t.removeEventListener("focus", l), a && t.removeEventListener("blur", c), t.removeEventListener("change", d), t.removeEventListener("keydown", d), t.removeEventListener("click", u)
                }
            }, WialonHosting.Util || (WialonHosting.Util = {}), WialonHosting.Util.makeSet = function (t) {
                if (!t) return {};
                if (Array.isArray(t)) {
                    var n = {};
                    return t.forEach((function (t) {
                        n[t] = !0
                    })), n
                }
                return "object" == typeof t ? t : {}
            }, WialonHosting.Render || (WialonHosting.Render = {}), WialonHosting.Render.nextFrame = d.a, WialonHosting.Browser || (WialonHosting.Browser = {}), WialonHosting.CustomOptions || (WialonHosting.CustomOptions = {})
        },
        xluH: function (t, n, e) {
            "use strict";
            e.d(n, "b", (function () {
                return g
            })), e.d(n, "a", (function () {
                return p
            }));
            var o = e("D0V7"),
                i = e.n(o),
                a = e("cAa7"),
                r = e("pyWF"),
                s = 100,
                l = 250,
                c = "rgba(0,0,0,0.35)",
                d = 200,
                u = 250,
                g = new p;

            function p(t) {
                var n = (t || {}).parentNode;
                n || (n = document.body);
                var e = document.createElement("div");
                e.setAttribute("data-test", "overlay"), e.classList.add(i.a.Overlay), e.style.pointerEvents = "none";
                var o = document.createElement("div");
                o.classList.add(i.a.Overlay);
                var g = new a.a,
                    p = [],
                    f = !1;
                e.style.backgroundColor = "transparent";
                var m = !1,
                    h = {
                        zIndex: 0,
                        invisibleZIndex: 0,
                        showWithoutAnimation: !1,
                        backgroundColor: c
                    },
                    b = Object.assign({}, h),
                    _ = new r.a({
                        elements: [{
                            element: e,
                            parentNode: n
                        }],
                        properties: [{
                            name: "background-color",
                            valueOn: function (t) {
                                var n = t.data.backgroundColor;
                                return "function" == typeof n && (n = n()), n
                            },
                            valueOff: "transparent"
                        }],
                        duration: {
                            on: d,
                            off: u
                        },
                        onAnimationStart: function () {
                            m = !0
                        },
                        onPropertiesSet: function () {
                            m = !1
                        }
                    });

                function v() {
                    if (f) {
                        var t = 0;
                        p.forEach((function (n) {
                            var e = n.zIndex;
                            e > t && (t = e)
                        })), b.zIndex = t, b.invisibleZIndex = t
                    }
                    if (h.invisibleZIndex !== b.invisibleZIndex && (b.invisibleZIndex ? b.invisibleZIndex && !h.invisibleZIndex && n.appendChild(o) : n.removeChild(o), o.style.zIndex = b.invisibleZIndex), h.zIndex !== b.zIndex && (b.zIndex ? b.zIndex && !h.zIndex ? (e.style.zIndex = b.zIndex, _.toggle(!0, {
                            withoutAnimation: b.showWithoutAnimation,
                            data: {
                                backgroundColor: b.backgroundColor
                            }
                        })) : e.style.zIndex = b.zIndex : (_.toggle(!1), b.backgroundColor = c)), b.showWithoutAnimation && (b.showWithoutAnimation = !1), !m && b.zIndex && h.backgroundColor !== b.backgroundColor) {
                        var i = b.backgroundColor;
                        "function" == typeof i && (i = i()), e.style.backgroundColor = i
                    }
                    h.zIndex !== b.zIndex && g.notify([b.zIndex]), f = !1, h = b, b = Object.assign({}, h)
                }
                this.getElement = function () {
                    return e
                }, this.watchZIndex = g.watchingFunction((function () {
                    return [h.zIndex]
                })), this.startOverlaying = function (t) {
                    var n = t || {},
                        e = n.name,
                        o = n.zIndex,
                        i = n.doNotWait,
                        a = n.doNotWaitRemove,
                        r = n.backgroundColor,
                        c = n.withoutOnAnimation;
                    "number" != typeof o && (o = 1e4);
                    var d = {
                        name: e || new Error,
                        zIndex: o
                    };
                    p.push(d), b.invisibleZIndex = Math.max(b.invisibleZIndex, o), r && (b.backgroundColor = r), i && (b.zIndex = Math.max(b.zIndex, o), b.showWithoutAnimation = !0), v();
                    var u = !1;
                    return i || setTimeout((function () {
                        u || (b.zIndex = Math.max(b.zIndex, o), c && (b.showWithoutAnimation = !0), v())
                    }), s), {
                        finish: function () {
                            function t() {
                                var t = p.indexOf(d);
                                p.splice(t, 1), f = !0, v()
                            }
                            u || (u = !0, a ? t() : setTimeout((function () {
                                t()
                            }), l))
                        }
                    }
                }, this.forceHideOverlay = function (t) {
                    e.style.display = t ? "none" : "", o.style.display = t ? "none" : ""
                }, this.destroy = function () {
                    _.destroy(), g.destroy(), e.parentNode && e.parentNode.removeChild(e), o.parentNode && o.parentNode.removeChild(o)
                }
            }
            window.WialonHosting || (window.WialonHosting = {}), WialonHosting.overlay = g
        },
        yIco: function (t, n, e) {
            "use strict";
            e.d(n, "a", (function () {
                return a
            }));
            var o = e("AFqa"),
                i = (e("xluH"), e("CaSX"), ".cover {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  background: black;\n  opacity: 0.35;\n  filter:alpha(opacity=35);\n}\n\n.cover.solid-overlay {\n  background: #a6a6a6;\n  opacity: 1;\n  -moz-opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.cover-invisible {\n  opacity: 0;\n}\n.cover-invisible > .cover {\n  opacity: 0;\n}\n\n.initial-progress {\n  width: 320px;\n  height: 160px;\n  left: 50%;\n  top: 50%;\n  position: absolute;\n  -moz-transform: translate(-50%, -50%); /* Firefox */\n  -ms-transform: translate(-50%, -50%); /* IE */\n  -webkit-transform: translate(-50%, -50%); /* Safari, Chrome, iOS */\n  -o-transform: translate(-50%, -50%); /* Opera */\n  transform: translate(-50%, -50%);\n  line-height: 130px;\n  color: #808080;\n  border-radius: 4px;\n  opacity: 1;\n  filter:alpha(opacity=100);\n  z-index: 10001;\n}\n\n.initial-progress > .loading-text-container {\n\tdisplay: block;\n\tpadding: 0.5rem 1rem;\n\tbox-sizing: border-box;\n\theight: 85px;\n}\n.initial-progress > .loading-text-container::before {\n\tcontent: '';\n\tdisplay: inline-block;\n\theight: 100%;\n\tvertical-align: bottom;\n}\n.initial-progress > .loading-text-container > .loading-text {\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tfont-weight: bold;\n}");

            function a() {
                WialonHosting.Dom.onInteractive((function () {
                    var t = document.createElement("style");
                    t.setAttribute("data-grep-hint", "97dbd262"), t.appendChild(document.createTextNode(i + "\n" + function (t) {
                        if (!/^url\(/.test(t)) {
                            var n = Object(o.c)();
                            n && (t += "?" + n), t = "url(" + t + ")"
                        }
                        return ".initial-progress { background: #fff " + t + " center 85px no-repeat; }"
                    }("/xskin/images/progressbar/progressbar01.gif"))), document.head.appendChild(t)
                }))
            }
        }
    }
]);