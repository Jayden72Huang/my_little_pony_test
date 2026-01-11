
import {Buffer} from "node:buffer";
globalThis.Buffer = Buffer;

import {AsyncLocalStorage} from "node:async_hooks";
globalThis.AsyncLocalStorage = AsyncLocalStorage;


const defaultDefineProperty = Object.defineProperty;
Object.defineProperty = function(o, p, a) {
  if(p=== '__import_unsupported' && Boolean(globalThis.__import_unsupported)) {
    return;
  }
  return defaultDefineProperty(o, p, a);
};

  
  
  globalThis.openNextDebug = false;globalThis.openNextVersion = "3.9.7";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@opennextjs/aws/dist/utils/error.js
function isOpenNextError(e) {
  try {
    return "__openNextInternal" in e;
  } catch {
    return false;
  }
}
var init_error = __esm({
  "node_modules/@opennextjs/aws/dist/utils/error.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/adapters/logger.js
function debug(...args) {
  if (globalThis.openNextDebug) {
    console.log(...args);
  }
}
function warn(...args) {
  console.warn(...args);
}
function error(...args) {
  if (args.some((arg) => isDownplayedErrorLog(arg))) {
    return debug(...args);
  }
  if (args.some((arg) => isOpenNextError(arg))) {
    const error2 = args.find((arg) => isOpenNextError(arg));
    if (error2.logLevel < getOpenNextErrorLogLevel()) {
      return;
    }
    if (error2.logLevel === 0) {
      return console.log(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    if (error2.logLevel === 1) {
      return warn(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    return console.error(...args);
  }
  console.error(...args);
}
function getOpenNextErrorLogLevel() {
  const strLevel = process.env.OPEN_NEXT_ERROR_LOG_LEVEL ?? "1";
  switch (strLevel.toLowerCase()) {
    case "debug":
    case "0":
      return 0;
    case "error":
    case "2":
      return 2;
    default:
      return 1;
  }
}
var DOWNPLAYED_ERROR_LOGS, isDownplayedErrorLog;
var init_logger = __esm({
  "node_modules/@opennextjs/aws/dist/adapters/logger.js"() {
    init_error();
    DOWNPLAYED_ERROR_LOGS = [
      {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
        errorName: "NoSuchKey"
      }
    ];
    isDownplayedErrorLog = (errorLog) => DOWNPLAYED_ERROR_LOGS.some((downplayedInput) => downplayedInput.clientName === errorLog?.clientName && downplayedInput.commandName === errorLog?.commandName && (downplayedInput.errorName === errorLog?.error?.name || downplayedInput.errorName === errorLog?.error?.Code));
  }
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseCookie = parseCookie;
    exports.parse = parseCookie;
    exports.stringifyCookie = stringifyCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    exports.parseSetCookie = parseSetCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var maxAgeRegExp = /^-?\d+$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parseCookie(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = eqIndex(str, index, len);
        if (eqIdx === -1)
          break;
        const endIdx = endIndex(str, index, len);
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const key = valueSlice(str, index, eqIdx);
        if (obj[key] === void 0) {
          obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function stringifyCookie(cookie, options) {
      const enc = options?.encode || encodeURIComponent;
      const cookieStrings = [];
      for (const name of Object.keys(cookie)) {
        const val = cookie[name];
        if (val === void 0)
          continue;
        if (!cookieNameRegExp.test(name)) {
          throw new TypeError(`cookie name is invalid: ${name}`);
        }
        const value = enc(val);
        if (!cookieValueRegExp.test(value)) {
          throw new TypeError(`cookie val is invalid: ${val}`);
        }
        cookieStrings.push(`${name}=${value}`);
      }
      return cookieStrings.join("; ");
    }
    function stringifySetCookie(_name, _val, _opts) {
      const cookie = typeof _name === "object" ? _name : { ..._opts, name: _name, value: String(_val) };
      const options = typeof _val === "object" ? _val : _opts;
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(cookie.name)) {
        throw new TypeError(`argument name is invalid: ${cookie.name}`);
      }
      const value = cookie.value ? enc(cookie.value) : "";
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${cookie.value}`);
      }
      let str = cookie.name + "=" + value;
      if (cookie.maxAge !== void 0) {
        if (!Number.isInteger(cookie.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
        }
        str += "; Max-Age=" + cookie.maxAge;
      }
      if (cookie.domain) {
        if (!domainValueRegExp.test(cookie.domain)) {
          throw new TypeError(`option domain is invalid: ${cookie.domain}`);
        }
        str += "; Domain=" + cookie.domain;
      }
      if (cookie.path) {
        if (!pathValueRegExp.test(cookie.path)) {
          throw new TypeError(`option path is invalid: ${cookie.path}`);
        }
        str += "; Path=" + cookie.path;
      }
      if (cookie.expires) {
        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${cookie.expires}`);
        }
        str += "; Expires=" + cookie.expires.toUTCString();
      }
      if (cookie.httpOnly) {
        str += "; HttpOnly";
      }
      if (cookie.secure) {
        str += "; Secure";
      }
      if (cookie.partitioned) {
        str += "; Partitioned";
      }
      if (cookie.priority) {
        const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${cookie.priority}`);
        }
      }
      if (cookie.sameSite) {
        const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
        }
      }
      return str;
    }
    function parseSetCookie(str, options) {
      const dec = options?.decode || decode;
      const len = str.length;
      const endIdx = endIndex(str, 0, len);
      const eqIdx = eqIndex(str, 0, endIdx);
      const setCookie = eqIdx === -1 ? { name: "", value: dec(valueSlice(str, 0, endIdx)) } : {
        name: valueSlice(str, 0, eqIdx),
        value: dec(valueSlice(str, eqIdx + 1, endIdx))
      };
      let index = endIdx + 1;
      while (index < len) {
        const endIdx2 = endIndex(str, index, len);
        const eqIdx2 = eqIndex(str, index, endIdx2);
        const attr = eqIdx2 === -1 ? valueSlice(str, index, endIdx2) : valueSlice(str, index, eqIdx2);
        const val = eqIdx2 === -1 ? void 0 : valueSlice(str, eqIdx2 + 1, endIdx2);
        switch (attr.toLowerCase()) {
          case "httponly":
            setCookie.httpOnly = true;
            break;
          case "secure":
            setCookie.secure = true;
            break;
          case "partitioned":
            setCookie.partitioned = true;
            break;
          case "domain":
            setCookie.domain = val;
            break;
          case "path":
            setCookie.path = val;
            break;
          case "max-age":
            if (val && maxAgeRegExp.test(val))
              setCookie.maxAge = Number(val);
            break;
          case "expires":
            if (!val)
              break;
            const date = new Date(val);
            if (Number.isFinite(date.valueOf()))
              setCookie.expires = date;
            break;
          case "priority":
            if (!val)
              break;
            const priority = val.toLowerCase();
            if (priority === "low" || priority === "medium" || priority === "high") {
              setCookie.priority = priority;
            }
            break;
          case "samesite":
            if (!val)
              break;
            const sameSite = val.toLowerCase();
            if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
              setCookie.sameSite = sameSite;
            }
            break;
        }
        index = endIdx2 + 1;
      }
      return setCookie;
    }
    function endIndex(str, min, len) {
      const index = str.indexOf(";", min);
      return index === -1 ? len : index;
    }
    function eqIndex(str, min, max) {
      const index = str.indexOf("=", min);
      return index < max ? index : -1;
    }
    function valueSlice(str, min, max) {
      let start = min;
      let end = max;
      do {
        const code = str.charCodeAt(start);
        if (code !== 32 && code !== 9)
          break;
      } while (++start < end);
      while (end > start) {
        const code = str.charCodeAt(end - 1);
        if (code !== 32 && code !== 9)
          break;
        end--;
      }
      return str.slice(start, end);
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// node_modules/@opennextjs/aws/dist/http/util.js
function parseSetCookieHeader(cookies) {
  if (!cookies) {
    return [];
  }
  if (typeof cookies === "string") {
    return cookies.split(/(?<!Expires=\w+),/i).map((c) => c.trim());
  }
  return cookies;
}
function getQueryFromIterator(it) {
  const query = {};
  for (const [key, value] of it) {
    if (key in query) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    } else {
      query[key] = value;
    }
  }
  return query;
}
var init_util = __esm({
  "node_modules/@opennextjs/aws/dist/http/util.js"() {
    init_logger();
  }
});

// node_modules/@opennextjs/aws/dist/overrides/converters/utils.js
function getQueryFromSearchParams(searchParams) {
  return getQueryFromIterator(searchParams.entries());
}
var init_utils = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/converters/utils.js"() {
    init_util();
  }
});

// node_modules/@opennextjs/aws/dist/overrides/converters/edge.js
var edge_exports = {};
__export(edge_exports, {
  default: () => edge_default
});
import { Buffer as Buffer2 } from "node:buffer";
var import_cookie, NULL_BODY_STATUSES, converter, edge_default;
var init_edge = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/converters/edge.js"() {
    import_cookie = __toESM(require_dist(), 1);
    init_util();
    init_utils();
    NULL_BODY_STATUSES = /* @__PURE__ */ new Set([101, 103, 204, 205, 304]);
    converter = {
      convertFrom: async (event) => {
        const url = new URL(event.url);
        const searchParams = url.searchParams;
        const query = getQueryFromSearchParams(searchParams);
        const headers = {};
        event.headers.forEach((value, key) => {
          headers[key] = value;
        });
        const rawPath = url.pathname;
        const method = event.method;
        const shouldHaveBody = method !== "GET" && method !== "HEAD";
        const body = shouldHaveBody ? Buffer2.from(await event.arrayBuffer()) : void 0;
        const cookieHeader = event.headers.get("cookie");
        const cookies = cookieHeader ? import_cookie.default.parse(cookieHeader) : {};
        return {
          type: "core",
          method,
          rawPath,
          url: event.url,
          body,
          headers,
          remoteAddress: event.headers.get("x-forwarded-for") ?? "::1",
          query,
          cookies
        };
      },
      convertTo: async (result) => {
        if ("internalEvent" in result) {
          const request = new Request(result.internalEvent.url, {
            body: result.internalEvent.body,
            method: result.internalEvent.method,
            headers: {
              ...result.internalEvent.headers,
              "x-forwarded-host": result.internalEvent.headers.host
            }
          });
          if (globalThis.__dangerous_ON_edge_converter_returns_request === true) {
            return request;
          }
          const cfCache = (result.isISR || result.internalEvent.rawPath.startsWith("/_next/image")) && process.env.DISABLE_CACHE !== "true" ? { cacheEverything: true } : {};
          return fetch(request, {
            // This is a hack to make sure that the response is cached by Cloudflare
            // See https://developers.cloudflare.com/workers/examples/cache-using-fetch/#caching-html-resources
            // @ts-expect-error - This is a Cloudflare specific option
            cf: cfCache
          });
        }
        const headers = new Headers();
        for (const [key, value] of Object.entries(result.headers)) {
          if (key === "set-cookie" && typeof value === "string") {
            const cookies = parseSetCookieHeader(value);
            for (const cookie of cookies) {
              headers.append(key, cookie);
            }
            continue;
          }
          if (Array.isArray(value)) {
            for (const v of value) {
              headers.append(key, v);
            }
          } else {
            headers.set(key, value);
          }
        }
        const body = NULL_BODY_STATUSES.has(result.statusCode) ? null : result.body;
        return new Response(body, {
          status: result.statusCode,
          headers
        });
      },
      name: "edge"
    };
    edge_default = converter;
  }
});

// node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js
var cloudflare_edge_exports = {};
__export(cloudflare_edge_exports, {
  default: () => cloudflare_edge_default
});
var cfPropNameMapping, handler, cloudflare_edge_default;
var init_cloudflare_edge = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js"() {
    cfPropNameMapping = {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: [encodeURIComponent, "x-open-next-city"],
      country: "x-open-next-country",
      regionCode: "x-open-next-region",
      latitude: "x-open-next-latitude",
      longitude: "x-open-next-longitude"
    };
    handler = async (handler3, converter2) => async (request, env, ctx) => {
      globalThis.process = process;
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
      const internalEvent = await converter2.convertFrom(request);
      const cfProperties = request.cf;
      for (const [propName, mapping] of Object.entries(cfPropNameMapping)) {
        const propValue = cfProperties?.[propName];
        if (propValue != null) {
          const [encode, headerName] = Array.isArray(mapping) ? mapping : [null, mapping];
          internalEvent.headers[headerName] = encode ? encode(propValue) : propValue;
        }
      }
      const response = await handler3(internalEvent, {
        waitUntil: ctx.waitUntil.bind(ctx)
      });
      const result = await converter2.convertTo(response);
      return result;
    };
    cloudflare_edge_default = {
      wrapper: handler,
      name: "cloudflare-edge",
      supportStreaming: true,
      edgeRuntime: true
    };
  }
});

// node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js
var pattern_env_exports = {};
__export(pattern_env_exports, {
  default: () => pattern_env_default
});
function initializeOnce() {
  if (initialized)
    return;
  cachedOrigins = JSON.parse(process.env.OPEN_NEXT_ORIGIN ?? "{}");
  const functions = globalThis.openNextConfig.functions ?? {};
  for (const key in functions) {
    if (key !== "default") {
      const value = functions[key];
      const regexes = [];
      for (const pattern of value.patterns) {
        const regexPattern = `/${pattern.replace(/\*\*/g, "(.*)").replace(/\*/g, "([^/]*)").replace(/\//g, "\\/").replace(/\?/g, ".")}`;
        regexes.push(new RegExp(regexPattern));
      }
      cachedPatterns.push({
        key,
        patterns: value.patterns,
        regexes
      });
    }
  }
  initialized = true;
}
var cachedOrigins, cachedPatterns, initialized, envLoader, pattern_env_default;
var init_pattern_env = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js"() {
    init_logger();
    cachedPatterns = [];
    initialized = false;
    envLoader = {
      name: "env",
      resolve: async (_path) => {
        try {
          initializeOnce();
          for (const { key, patterns, regexes } of cachedPatterns) {
            for (const regex of regexes) {
              if (regex.test(_path)) {
                debug("Using origin", key, patterns);
                return cachedOrigins[key];
              }
            }
          }
          if (_path.startsWith("/_next/image") && cachedOrigins.imageOptimizer) {
            debug("Using origin", "imageOptimizer", _path);
            return cachedOrigins.imageOptimizer;
          }
          if (cachedOrigins.default) {
            debug("Using default origin", cachedOrigins.default, _path);
            return cachedOrigins.default;
          }
          return false;
        } catch (e) {
          error("Error while resolving origin", e);
          return false;
        }
      }
    };
    pattern_env_default = envLoader;
  }
});

// node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js
var dummy_exports = {};
__export(dummy_exports, {
  default: () => dummy_default
});
var resolver, dummy_default;
var init_dummy = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js"() {
    resolver = {
      name: "dummy"
    };
    dummy_default = resolver;
  }
});

// node_modules/@opennextjs/aws/dist/utils/stream.js
import { ReadableStream } from "node:stream/web";
function toReadableStream(value, isBase64) {
  return new ReadableStream({
    pull(controller) {
      controller.enqueue(Buffer.from(value, isBase64 ? "base64" : "utf8"));
      controller.close();
    }
  }, { highWaterMark: 0 });
}
function emptyReadableStream() {
  if (process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE === "true") {
    return new ReadableStream({
      pull(controller) {
        maybeSomethingBuffer ??= Buffer.from("SOMETHING");
        controller.enqueue(maybeSomethingBuffer);
        controller.close();
      }
    }, { highWaterMark: 0 });
  }
  return new ReadableStream({
    start(controller) {
      controller.close();
    }
  });
}
var maybeSomethingBuffer;
var init_stream = __esm({
  "node_modules/@opennextjs/aws/dist/utils/stream.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js
var fetch_exports = {};
__export(fetch_exports, {
  default: () => fetch_default
});
var fetchProxy, fetch_default;
var init_fetch = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js"() {
    init_stream();
    fetchProxy = {
      name: "fetch-proxy",
      // @ts-ignore
      proxy: async (internalEvent) => {
        const { url, headers: eventHeaders, method, body } = internalEvent;
        const headers = Object.fromEntries(Object.entries(eventHeaders).filter(([key]) => key.toLowerCase() !== "cf-connecting-ip"));
        const response = await fetch(url, {
          method,
          headers,
          body
        });
        const responseHeaders = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });
        return {
          type: "core",
          headers: responseHeaders,
          statusCode: response.status,
          isBase64Encoded: true,
          body: response.body ?? emptyReadableStream()
        };
      }
    };
    fetch_default = fetchProxy;
  }
});

// .next/server/edge-runtime-webpack.js
var require_edge_runtime_webpack = __commonJS({
  ".next/server/edge-runtime-webpack.js"() {
    "use strict";
    (() => {
      "use strict";
      var e = {}, r = {};
      function t(o) {
        var n = r[o];
        if (void 0 !== n) return n.exports;
        var i = r[o] = { exports: {} }, a = true;
        try {
          e[o](i, i.exports, t), a = false;
        } finally {
          a && delete r[o];
        }
        return i.exports;
      }
      t.m = e, t.amdO = {}, (() => {
        var e2 = [];
        t.O = (r2, o, n, i) => {
          if (o) {
            i = i || 0;
            for (var a = e2.length; a > 0 && e2[a - 1][2] > i; a--) e2[a] = e2[a - 1];
            e2[a] = [o, n, i];
            return;
          }
          for (var l = 1 / 0, a = 0; a < e2.length; a++) {
            for (var [o, n, i] = e2[a], u = true, f = 0; f < o.length; f++) (false & i || l >= i) && Object.keys(t.O).every((e3) => t.O[e3](o[f])) ? o.splice(f--, 1) : (u = false, i < l && (l = i));
            if (u) {
              e2.splice(a--, 1);
              var s = n();
              void 0 !== s && (r2 = s);
            }
          }
          return r2;
        };
      })(), t.n = (e2) => {
        var r2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return t.d(r2, { a: r2 }), r2;
      }, t.d = (e2, r2) => {
        for (var o in r2) t.o(r2, o) && !t.o(e2, o) && Object.defineProperty(e2, o, { enumerable: true, get: r2[o] });
      }, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), t.o = (e2, r2) => Object.prototype.hasOwnProperty.call(e2, r2), t.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, (() => {
        var e2 = { 149: 0 };
        t.O.j = (r3) => 0 === e2[r3];
        var r2 = (r3, o2) => {
          var n, i, [a, l, u] = o2, f = 0;
          if (a.some((r4) => 0 !== e2[r4])) {
            for (n in l) t.o(l, n) && (t.m[n] = l[n]);
            if (u) var s = u(t);
          }
          for (r3 && r3(o2); f < a.length; f++) i = a[f], t.o(e2, i) && e2[i] && e2[i][0](), e2[i] = 0;
          return t.O(s);
        }, o = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        o.forEach(r2.bind(null, 0)), o.push = r2.bind(null, o.push.bind(o));
      })();
    })();
  }
});

// node-built-in-modules:node:async_hooks
var node_async_hooks_exports = {};
import * as node_async_hooks_star from "node:async_hooks";
var init_node_async_hooks = __esm({
  "node-built-in-modules:node:async_hooks"() {
    __reExport(node_async_hooks_exports, node_async_hooks_star);
  }
});

// node-built-in-modules:node:buffer
var node_buffer_exports = {};
import * as node_buffer_star from "node:buffer";
var init_node_buffer = __esm({
  "node-built-in-modules:node:buffer"() {
    __reExport(node_buffer_exports, node_buffer_star);
  }
});

// .next/server/middleware.js
var require_middleware = __commonJS({
  ".next/server/middleware.js"() {
    "use strict";
    (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[751], { 521: (e) => {
      "use strict";
      e.exports = (init_node_async_hooks(), __toCommonJS(node_async_hooks_exports));
    }, 356: (e) => {
      "use strict";
      e.exports = (init_node_buffer(), __toCommonJS(node_buffer_exports));
    }, 268: (e, t, r) => {
      "use strict";
      function n(e2, t2, r2) {
        if (r2 || 2 == arguments.length) for (var n2, a2 = 0, i2 = t2.length; a2 < i2; a2++) !n2 && a2 in t2 || (n2 || (n2 = Array.prototype.slice.call(t2, 0, a2)), n2[a2] = t2[a2]);
        return e2.concat(n2 || Array.prototype.slice.call(t2));
      }
      r.r(t), r.d(t, { LookupSupportedLocales: () => h, ResolveLocale: () => f, match: () => g }), Object.create, Object.create;
      var a, i = ("function" == typeof SuppressedError && SuppressedError, { supplemental: { languageMatching: { "written-new": [{ paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } }, { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } }, { $cnsar: { _value: "HK+MO" } }, { $americas: { _value: "019" } }, { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } }, { no: { _desired: "nb", _distance: "1" } }, { bs: { _desired: "hr", _distance: "4" } }, { bs: { _desired: "sh", _distance: "4" } }, { hr: { _desired: "sh", _distance: "4" } }, { sr: { _desired: "sh", _distance: "4" } }, { aa: { _desired: "ssy", _distance: "4" } }, { de: { _desired: "gsw", _distance: "4", _oneway: "true" } }, { de: { _desired: "lb", _distance: "4", _oneway: "true" } }, { no: { _desired: "da", _distance: "8" } }, { nb: { _desired: "da", _distance: "8" } }, { ru: { _desired: "ab", _distance: "30", _oneway: "true" } }, { en: { _desired: "ach", _distance: "30", _oneway: "true" } }, { nl: { _desired: "af", _distance: "20", _oneway: "true" } }, { en: { _desired: "ak", _distance: "30", _oneway: "true" } }, { en: { _desired: "am", _distance: "30", _oneway: "true" } }, { es: { _desired: "ay", _distance: "20", _oneway: "true" } }, { ru: { _desired: "az", _distance: "30", _oneway: "true" } }, { ur: { _desired: "bal", _distance: "20", _oneway: "true" } }, { ru: { _desired: "be", _distance: "20", _oneway: "true" } }, { en: { _desired: "bem", _distance: "30", _oneway: "true" } }, { hi: { _desired: "bh", _distance: "30", _oneway: "true" } }, { en: { _desired: "bn", _distance: "30", _oneway: "true" } }, { zh: { _desired: "bo", _distance: "20", _oneway: "true" } }, { fr: { _desired: "br", _distance: "20", _oneway: "true" } }, { es: { _desired: "ca", _distance: "20", _oneway: "true" } }, { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } }, { en: { _desired: "chr", _distance: "20", _oneway: "true" } }, { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } }, { fr: { _desired: "co", _distance: "20", _oneway: "true" } }, { fr: { _desired: "crs", _distance: "20", _oneway: "true" } }, { sk: { _desired: "cs", _distance: "20" } }, { en: { _desired: "cy", _distance: "20", _oneway: "true" } }, { en: { _desired: "ee", _distance: "30", _oneway: "true" } }, { en: { _desired: "eo", _distance: "30", _oneway: "true" } }, { es: { _desired: "eu", _distance: "20", _oneway: "true" } }, { da: { _desired: "fo", _distance: "20", _oneway: "true" } }, { nl: { _desired: "fy", _distance: "20", _oneway: "true" } }, { en: { _desired: "ga", _distance: "20", _oneway: "true" } }, { en: { _desired: "gaa", _distance: "30", _oneway: "true" } }, { en: { _desired: "gd", _distance: "20", _oneway: "true" } }, { es: { _desired: "gl", _distance: "20", _oneway: "true" } }, { es: { _desired: "gn", _distance: "20", _oneway: "true" } }, { hi: { _desired: "gu", _distance: "30", _oneway: "true" } }, { en: { _desired: "ha", _distance: "30", _oneway: "true" } }, { en: { _desired: "haw", _distance: "20", _oneway: "true" } }, { fr: { _desired: "ht", _distance: "20", _oneway: "true" } }, { ru: { _desired: "hy", _distance: "30", _oneway: "true" } }, { en: { _desired: "ia", _distance: "30", _oneway: "true" } }, { en: { _desired: "ig", _distance: "30", _oneway: "true" } }, { en: { _desired: "is", _distance: "20", _oneway: "true" } }, { id: { _desired: "jv", _distance: "20", _oneway: "true" } }, { en: { _desired: "ka", _distance: "30", _oneway: "true" } }, { fr: { _desired: "kg", _distance: "30", _oneway: "true" } }, { ru: { _desired: "kk", _distance: "30", _oneway: "true" } }, { en: { _desired: "km", _distance: "30", _oneway: "true" } }, { en: { _desired: "kn", _distance: "30", _oneway: "true" } }, { en: { _desired: "kri", _distance: "30", _oneway: "true" } }, { tr: { _desired: "ku", _distance: "30", _oneway: "true" } }, { ru: { _desired: "ky", _distance: "30", _oneway: "true" } }, { it: { _desired: "la", _distance: "20", _oneway: "true" } }, { en: { _desired: "lg", _distance: "30", _oneway: "true" } }, { fr: { _desired: "ln", _distance: "30", _oneway: "true" } }, { en: { _desired: "lo", _distance: "30", _oneway: "true" } }, { en: { _desired: "loz", _distance: "30", _oneway: "true" } }, { fr: { _desired: "lua", _distance: "30", _oneway: "true" } }, { hi: { _desired: "mai", _distance: "20", _oneway: "true" } }, { en: { _desired: "mfe", _distance: "30", _oneway: "true" } }, { fr: { _desired: "mg", _distance: "30", _oneway: "true" } }, { en: { _desired: "mi", _distance: "20", _oneway: "true" } }, { en: { _desired: "ml", _distance: "30", _oneway: "true" } }, { ru: { _desired: "mn", _distance: "30", _oneway: "true" } }, { hi: { _desired: "mr", _distance: "30", _oneway: "true" } }, { id: { _desired: "ms", _distance: "30", _oneway: "true" } }, { en: { _desired: "mt", _distance: "30", _oneway: "true" } }, { en: { _desired: "my", _distance: "30", _oneway: "true" } }, { en: { _desired: "ne", _distance: "30", _oneway: "true" } }, { nb: { _desired: "nn", _distance: "20" } }, { no: { _desired: "nn", _distance: "20" } }, { en: { _desired: "nso", _distance: "30", _oneway: "true" } }, { en: { _desired: "ny", _distance: "30", _oneway: "true" } }, { en: { _desired: "nyn", _distance: "30", _oneway: "true" } }, { fr: { _desired: "oc", _distance: "20", _oneway: "true" } }, { en: { _desired: "om", _distance: "30", _oneway: "true" } }, { en: { _desired: "or", _distance: "30", _oneway: "true" } }, { en: { _desired: "pa", _distance: "30", _oneway: "true" } }, { en: { _desired: "pcm", _distance: "20", _oneway: "true" } }, { en: { _desired: "ps", _distance: "30", _oneway: "true" } }, { es: { _desired: "qu", _distance: "30", _oneway: "true" } }, { de: { _desired: "rm", _distance: "20", _oneway: "true" } }, { en: { _desired: "rn", _distance: "30", _oneway: "true" } }, { fr: { _desired: "rw", _distance: "30", _oneway: "true" } }, { hi: { _desired: "sa", _distance: "30", _oneway: "true" } }, { en: { _desired: "sd", _distance: "30", _oneway: "true" } }, { en: { _desired: "si", _distance: "30", _oneway: "true" } }, { en: { _desired: "sn", _distance: "30", _oneway: "true" } }, { en: { _desired: "so", _distance: "30", _oneway: "true" } }, { en: { _desired: "sq", _distance: "30", _oneway: "true" } }, { en: { _desired: "st", _distance: "30", _oneway: "true" } }, { id: { _desired: "su", _distance: "20", _oneway: "true" } }, { en: { _desired: "sw", _distance: "30", _oneway: "true" } }, { en: { _desired: "ta", _distance: "30", _oneway: "true" } }, { en: { _desired: "te", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tg", _distance: "30", _oneway: "true" } }, { en: { _desired: "ti", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tk", _distance: "30", _oneway: "true" } }, { en: { _desired: "tlh", _distance: "30", _oneway: "true" } }, { en: { _desired: "tn", _distance: "30", _oneway: "true" } }, { en: { _desired: "to", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tt", _distance: "30", _oneway: "true" } }, { en: { _desired: "tum", _distance: "30", _oneway: "true" } }, { zh: { _desired: "ug", _distance: "20", _oneway: "true" } }, { ru: { _desired: "uk", _distance: "20", _oneway: "true" } }, { en: { _desired: "ur", _distance: "30", _oneway: "true" } }, { ru: { _desired: "uz", _distance: "30", _oneway: "true" } }, { fr: { _desired: "wo", _distance: "30", _oneway: "true" } }, { en: { _desired: "xh", _distance: "30", _oneway: "true" } }, { en: { _desired: "yi", _distance: "30", _oneway: "true" } }, { en: { _desired: "yo", _distance: "30", _oneway: "true" } }, { zh: { _desired: "za", _distance: "20", _oneway: "true" } }, { en: { _desired: "zu", _distance: "30", _oneway: "true" } }, { ar: { _desired: "aao", _distance: "10", _oneway: "true" } }, { ar: { _desired: "abh", _distance: "10", _oneway: "true" } }, { ar: { _desired: "abv", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acm", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acq", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acw", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acx", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acy", _distance: "10", _oneway: "true" } }, { ar: { _desired: "adf", _distance: "10", _oneway: "true" } }, { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } }, { ar: { _desired: "aec", _distance: "10", _oneway: "true" } }, { ar: { _desired: "afb", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } }, { ar: { _desired: "apc", _distance: "10", _oneway: "true" } }, { ar: { _desired: "apd", _distance: "10", _oneway: "true" } }, { ar: { _desired: "arq", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ars", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ary", _distance: "10", _oneway: "true" } }, { ar: { _desired: "arz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "auz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "avl", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } }, { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "pga", _distance: "10", _oneway: "true" } }, { ar: { _desired: "shu", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } }, { az: { _desired: "azb", _distance: "10", _oneway: "true" } }, { et: { _desired: "vro", _distance: "10", _oneway: "true" } }, { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fub", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fue", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fui", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gui", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gun", _distance: "10", _oneway: "true" } }, { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } }, { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } }, { kln: { _desired: "enb", _distance: "10", _oneway: "true" } }, { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } }, { kln: { _desired: "niq", _distance: "10", _oneway: "true" } }, { kln: { _desired: "oki", _distance: "10", _oneway: "true" } }, { kln: { _desired: "pko", _distance: "10", _oneway: "true" } }, { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } }, { kln: { _desired: "tec", _distance: "10", _oneway: "true" } }, { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } }, { kok: { _desired: "gom", _distance: "10", _oneway: "true" } }, { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } }, { luy: { _desired: "ida", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lko", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lks", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lri", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lto", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lts", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } }, { luy: { _desired: "nle", _distance: "10", _oneway: "true" } }, { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } }, { luy: { _desired: "rag", _distance: "10", _oneway: "true" } }, { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } }, { mg: { _desired: "msh", _distance: "10", _oneway: "true" } }, { mg: { _desired: "skg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } }, { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "txy", _distance: "10", _oneway: "true" } }, { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } }, { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } }, { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } }, { ms: { _desired: "btj", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bve", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } }, { ms: { _desired: "coa", _distance: "10", _oneway: "true" } }, { ms: { _desired: "dup", _distance: "10", _oneway: "true" } }, { ms: { _desired: "hji", _distance: "10", _oneway: "true" } }, { ms: { _desired: "id", _distance: "10", _oneway: "true" } }, { ms: { _desired: "jak", _distance: "10", _oneway: "true" } }, { ms: { _desired: "jax", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } }, { ms: { _desired: "lce", _distance: "10", _oneway: "true" } }, { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } }, { ms: { _desired: "liw", _distance: "10", _oneway: "true" } }, { ms: { _desired: "max", _distance: "10", _oneway: "true" } }, { ms: { _desired: "meo", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } }, { ms: { _desired: "min", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } }, { ms: { _desired: "msi", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mui", _distance: "10", _oneway: "true" } }, { ms: { _desired: "orn", _distance: "10", _oneway: "true" } }, { ms: { _desired: "ors", _distance: "10", _oneway: "true" } }, { ms: { _desired: "pel", _distance: "10", _oneway: "true" } }, { ms: { _desired: "pse", _distance: "10", _oneway: "true" } }, { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } }, { ms: { _desired: "urk", _distance: "10", _oneway: "true" } }, { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } }, { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } }, { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } }, { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } }, { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } }, { ne: { _desired: "dty", _distance: "10", _oneway: "true" } }, { om: { _desired: "gax", _distance: "10", _oneway: "true" } }, { om: { _desired: "hae", _distance: "10", _oneway: "true" } }, { om: { _desired: "orc", _distance: "10", _oneway: "true" } }, { or: { _desired: "spv", _distance: "10", _oneway: "true" } }, { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } }, { ps: { _desired: "pst", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qub", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qud", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quf", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qug", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quk", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qul", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qup", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qur", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qus", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quw", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qux", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quy", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qva", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qve", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qws", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sro", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aae", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aat", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aln", _distance: "10", _oneway: "true" } }, { syr: { _desired: "aii", _distance: "10", _oneway: "true" } }, { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } }, { yi: { _desired: "yih", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } }, { zh: { _desired: "czh", _distance: "10", _oneway: "true" } }, { zh: { _desired: "czo", _distance: "10", _oneway: "true" } }, { zh: { _desired: "gan", _distance: "10", _oneway: "true" } }, { zh: { _desired: "hak", _distance: "10", _oneway: "true" } }, { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } }, { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } }, { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } }, { zh: { _desired: "nan", _distance: "10", _oneway: "true" } }, { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } }, { zh: { _desired: "yue", _distance: "10", _oneway: "true" } }, { "*": { _desired: "*", _distance: "80" } }, { "en-Latn": { _desired: "am-Ethi", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "az-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "bn-Beng", _distance: "10", _oneway: "true" } }, { "zh-Hans": { _desired: "bo-Tibt", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "hy-Armn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ka-Geor", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "km-Khmr", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "kn-Knda", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "lo-Laoo", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ml-Mlym", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "my-Mymr", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ne-Deva", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "or-Orya", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "pa-Guru", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ps-Arab", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "sd-Arab", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "si-Sinh", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ta-Taml", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "te-Telu", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ti-Ethi", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "tk-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ur-Arab", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "uz-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "yi-Hebr", _distance: "10", _oneway: "true" } }, { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } }, { "zh-Hans": { _desired: "za-Latn", _distance: "10", _oneway: "true" } }, { "zh-Hans": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } }, { "zh-Hant": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } }, { "ar-Arab": { _desired: "ar-Latn", _distance: "20", _oneway: "true" } }, { "bn-Beng": { _desired: "bn-Latn", _distance: "20", _oneway: "true" } }, { "gu-Gujr": { _desired: "gu-Latn", _distance: "20", _oneway: "true" } }, { "hi-Deva": { _desired: "hi-Latn", _distance: "20", _oneway: "true" } }, { "kn-Knda": { _desired: "kn-Latn", _distance: "20", _oneway: "true" } }, { "ml-Mlym": { _desired: "ml-Latn", _distance: "20", _oneway: "true" } }, { "mr-Deva": { _desired: "mr-Latn", _distance: "20", _oneway: "true" } }, { "ta-Taml": { _desired: "ta-Latn", _distance: "20", _oneway: "true" } }, { "te-Telu": { _desired: "te-Latn", _distance: "20", _oneway: "true" } }, { "zh-Hans": { _desired: "zh-Latn", _distance: "20", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Latn", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hani", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hrkt", _distance: "5", _oneway: "true" } }, { "ja-Hrkt": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } }, { "ja-Hrkt": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Hani", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Hang", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } }, { "ko-Hang": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } }, { "*-*": { _desired: "*-*", _distance: "50" } }, { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } }, { "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" } }, { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } }, { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } }, { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } }, { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } }, { "en-*-*": { _desired: "en-*-*", _distance: "5" } }, { "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" } }, { "es-*-$!americas": { _desired: "es-*-$!americas", _distance: "4" } }, { "es-*-*": { _desired: "es-*-*", _distance: "5" } }, { "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" } }, { "pt-*-$!americas": { _desired: "pt-*-$!americas", _distance: "4" } }, { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } }, { "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" } }, { "zh-Hant-$!cnsar": { _desired: "zh-Hant-$!cnsar", _distance: "4" } }, { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } }, { "*-*-*": { _desired: "*-*-*", _distance: "4" } }] } } }), o = { "001": ["001", "001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "EU", "EZ", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "QO", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "UN", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], "002": ["002", "002-status-grouping", "011", "014", "015", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EA", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IC", "IO", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"], "003": ["003", "013", "021", "029", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ", "CA", "CR", "CU", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PM", "PR", "SV", "SX", "TC", "TT", "US", "VC", "VG", "VI"], "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"], "009": ["009", "053", "054", "057", "061", "AC", "AQ", "AS", "AU", "CC", "CK", "CP", "CX", "DG", "FJ", "FM", "GU", "HM", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "QO", "SB", "TA", "TK", "TO", "TV", "UM", "VU", "WF", "WS"], "011": ["011", "BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SL", "SN", "TG"], "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"], "014": ["014", "BI", "DJ", "ER", "ET", "IO", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "SS", "TF", "TZ", "UG", "YT", "ZM", "ZW"], "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"], "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"], "018": ["018", "BW", "LS", "NA", "SZ", "ZA"], "019": ["003", "005", "013", "019", "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"], "021": ["021", "BM", "CA", "GL", "PM", "US"], "029": ["029", "AG", "AI", "AW", "BB", "BL", "BQ", "BS", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"], "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"], "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"], "039": ["039", "AD", "AL", "BA", "ES", "GI", "GR", "HR", "IT", "ME", "MK", "MT", "PT", "RS", "SI", "SM", "VA", "XK"], "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"], "054": ["054", "FJ", "NC", "PG", "SB", "VU"], "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"], "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"], 142: ["030", "034", "035", "142", "143", "145", "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"], 143: ["143", "KG", "KZ", "TJ", "TM", "UZ"], 145: ["145", "AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE"], 150: ["039", "150", "151", "154", "155", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CQ", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK"], 151: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"], 154: ["154", "AX", "CQ", "DK", "EE", "FI", "FO", "GB", "GG", "IE", "IM", "IS", "JE", "LT", "LV", "NO", "SE", "SJ"], 155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"], 202: ["011", "014", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TZ", "UG", "YT", "ZA", "ZM", "ZW"], 419: ["005", "013", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BO", "BQ", "BR", "BS", "BV", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "UY", "VC", "VE", "VG", "VI"], EU: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"], EZ: ["AT", "BE", "CY", "DE", "EE", "ES", "EZ", "FI", "FR", "GR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"], QO: ["AC", "AQ", "CP", "DG", "QO", "TA"], UN: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UN", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"] }, s = /-u(?:-[0-9a-z]{2,8})+/gi;
      function d(e2, t2, r2) {
        if (void 0 === r2 && (r2 = Error), !e2) throw new r2(t2);
      }
      function l(e2, t2, r2) {
        var a2 = t2.split("-"), i2 = a2[0], s2 = a2[1], d2 = a2[2], l2 = true;
        if (d2 && "$" === d2[0]) {
          var u2 = "!" !== d2[1], c2 = (u2 ? r2[d2.slice(1)] : r2[d2.slice(2)]).map(function(e3) {
            return o[e3] || [e3];
          }).reduce(function(e3, t3) {
            return n(n([], e3, true), t3, true);
          }, []);
          l2 && (l2 = !(c2.indexOf(e2.region || "") > 1 != u2));
        } else l2 && (l2 = !e2.region || "*" === d2 || d2 === e2.region);
        return l2 && (l2 = !e2.script || "*" === s2 || s2 === e2.script), l2 && (l2 = !e2.language || "*" === i2 || i2 === e2.language), l2;
      }
      function u(e2) {
        return [e2.language, e2.script, e2.region].filter(Boolean).join("-");
      }
      function c(e2, t2, r2) {
        for (var n2 = 0, a2 = r2.matches; n2 < a2.length; n2++) {
          var i2 = a2[n2], o2 = l(e2, i2.desired, r2.matchVariables) && l(t2, i2.supported, r2.matchVariables);
          if (i2.oneway || o2 || (o2 = l(e2, i2.supported, r2.matchVariables) && l(t2, i2.desired, r2.matchVariables)), o2) {
            var s2 = 10 * i2.distance;
            if (r2.paradigmLocales.indexOf(u(e2)) > -1 != r2.paradigmLocales.indexOf(u(t2)) > -1) return s2 - 1;
            return s2;
          }
        }
        throw Error("No matching distance found");
      }
      function p(e2) {
        return Intl.getCanonicalLocales(e2)[0];
      }
      function _(e2, t2) {
        for (var r2 = t2; ; ) {
          if (e2.indexOf(r2) > -1) return r2;
          var n2 = r2.lastIndexOf("-");
          if (!~n2) return;
          n2 >= 2 && "-" === r2[n2 - 2] && (n2 -= 2), r2 = r2.slice(0, n2);
        }
      }
      function f(e2, t2, r2, o2, l2, u2) {
        "lookup" === r2.localeMatcher ? h2 = function(e3, t3, r3) {
          for (var n2 = { locale: "" }, a2 = 0; a2 < t3.length; a2++) {
            var i2 = t3[a2], o3 = i2.replace(s, ""), d2 = _(e3, o3);
            if (d2) return n2.locale = d2, i2 !== o3 && (n2.extension = i2.slice(o3.length, i2.length)), n2;
          }
          return n2.locale = r3(), n2;
        }(Array.from(e2), t2, u2) : (m = Array.from(e2), w = [], b = t2.reduce(function(e3, t3) {
          var r3 = t3.replace(s, "");
          return w.push(r3), e3[r3] = t3, e3;
        }, {}), (void 0 === x && (x = 838), S = 1 / 0, C = { matchedDesiredLocale: "", distances: {} }, w.forEach(function(e3, t3) {
          C.distances[e3] || (C.distances[e3] = {}), m.forEach(function(r3) {
            var o3, s2, d2, l3, u3, p2, _2 = (o3 = new Intl.Locale(e3).maximize(), s2 = new Intl.Locale(r3).maximize(), d2 = { language: o3.language, script: o3.script || "", region: o3.region || "" }, l3 = { language: s2.language, script: s2.script || "", region: s2.region || "" }, u3 = 0, p2 = function() {
              var e4, t4;
              if (!a) {
                var r4 = null === (t4 = null === (e4 = i.supplemental.languageMatching["written-new"][0]) || void 0 === e4 ? void 0 : e4.paradigmLocales) || void 0 === t4 ? void 0 : t4._locales.split(" "), o4 = i.supplemental.languageMatching["written-new"].slice(1, 5);
                a = { matches: i.supplemental.languageMatching["written-new"].slice(5).map(function(e5) {
                  var t5 = Object.keys(e5)[0], r5 = e5[t5];
                  return { supported: t5, desired: r5._desired, distance: +r5._distance, oneway: "true" === r5.oneway };
                }, {}), matchVariables: o4.reduce(function(e5, t5) {
                  var r5 = Object.keys(t5)[0], n2 = t5[r5];
                  return e5[r5.slice(1)] = n2._value.split("+"), e5;
                }, {}), paradigmLocales: n(n([], r4, true), r4.map(function(e5) {
                  return new Intl.Locale(e5.replace(/_/g, "-")).maximize().toString();
                }), true) };
              }
              return a;
            }(), d2.language !== l3.language && (u3 += c({ language: o3.language, script: "", region: "" }, { language: s2.language, script: "", region: "" }, p2)), d2.script !== l3.script && (u3 += c({ language: o3.language, script: d2.script, region: "" }, { language: s2.language, script: d2.script, region: "" }, p2)), d2.region !== l3.region && (u3 += c(d2, l3, p2)), u3 + 0 + 40 * t3);
            C.distances[e3][r3] = _2, _2 < S && (S = _2, C.matchedDesiredLocale = e3, C.matchedSupportedLocale = r3);
          });
        }), S >= x && (C.matchedDesiredLocale = void 0, C.matchedSupportedLocale = void 0), C).matchedSupportedLocale && C.matchedDesiredLocale && (v = C.matchedSupportedLocale, y = b[C.matchedDesiredLocale].slice(C.matchedDesiredLocale.length) || void 0), h2 = v ? { locale: v, extension: y } : { locale: u2() }), null == h2 && (h2 = { locale: u2(), extension: "" });
        var f2, h2, g2, m, v, y, w, b, x, S, C, P = h2.locale, T = l2[P], E = { locale: "en", dataLocale: P };
        g2 = h2.extension ? function(e3) {
          d(e3 === e3.toLowerCase(), "Expected extension to be lowercase"), d("-u-" === e3.slice(0, 3), "Expected extension to be a Unicode locale extension");
          for (var t3, r3 = [], n2 = [], a2 = e3.length, i2 = 3; i2 < a2; ) {
            var o3 = e3.indexOf("-", i2), s2 = void 0;
            s2 = -1 === o3 ? a2 - i2 : o3 - i2;
            var l3 = e3.slice(i2, i2 + s2);
            d(s2 >= 2, "Expected a subtag to have at least 2 characters"), void 0 === t3 && 2 != s2 ? -1 === r3.indexOf(l3) && r3.push(l3) : 2 === s2 ? (t3 = { key: l3, value: "" }, void 0 === n2.find(function(e4) {
              return e4.key === (null == t3 ? void 0 : t3.key);
            }) && n2.push(t3)) : (null == t3 ? void 0 : t3.value) === "" ? t3.value = l3 : (d(void 0 !== t3, "Expected keyword to be defined"), t3.value += "-" + l3), i2 += s2 + 1;
          }
          return { attributes: r3, keywords: n2 };
        }(h2.extension).keywords : [];
        for (var R = [], O = function(e3) {
          var t3, n2, a2 = null !== (f2 = null == T ? void 0 : T[e3]) && void 0 !== f2 ? f2 : [];
          d(Array.isArray(a2), "keyLocaleData for ".concat(e3, " must be an array"));
          var i2 = a2[0];
          d(void 0 === i2 || "string" == typeof i2, "value must be a string or undefined");
          var o3 = void 0, s2 = g2.find(function(t4) {
            return t4.key === e3;
          });
          if (s2) {
            var l3 = s2.value;
            "" !== l3 ? a2.indexOf(l3) > -1 && (o3 = { key: e3, value: i2 = l3 }) : a2.indexOf("true") > -1 && (o3 = { key: e3, value: i2 = "true" });
          }
          var u3 = r2[e3];
          d(null == u3 || "string" == typeof u3, "optionsValue must be a string or undefined"), "string" == typeof u3 && (t3 = e3.toLowerCase(), n2 = u3.toLowerCase(), d(void 0 !== t3, "ukey must be defined"), "" === (u3 = n2) && (u3 = "true")), u3 !== i2 && a2.indexOf(u3) > -1 && (i2 = u3, o3 = void 0), o3 && R.push(o3), E[e3] = i2;
        }, M = 0; M < o2.length; M++) O(o2[M]);
        return R.length > 0 && (P = function(e3, t3, r3) {
          d(-1 === e3.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
          for (var n2 = "-u", a2 = 0; a2 < t3.length; a2++) {
            var i2 = t3[a2];
            n2 += "-".concat(i2);
          }
          for (var o3 = 0; o3 < r3.length; o3++) {
            var s2 = r3[o3], l3 = s2.key, u3 = s2.value;
            n2 += "-".concat(l3), "" !== u3 && (n2 += "-".concat(u3));
          }
          if ("-u" === n2) return p(e3);
          var c2 = e3.indexOf("-x-");
          return p(-1 === c2 ? e3 + n2 : e3.slice(0, c2) + n2 + e3.slice(c2));
        }(P, [], R)), E.locale = P, E;
      }
      function h(e2, t2) {
        for (var r2 = [], n2 = 0; n2 < t2.length; n2++) {
          var a2 = _(e2, t2[n2].replace(s, ""));
          a2 && r2.push(a2);
        }
        return r2;
      }
      function g(e2, t2, r2, n2) {
        return f(t2, Intl.getCanonicalLocales(e2), { localeMatcher: (null == n2 ? void 0 : n2.algorithm) || "best fit" }, [], {}, function() {
          return r2;
        }).locale;
      }
    }, 209: (e, t, r) => {
      "use strict";
      var n = r(610), a = r(635), i = r(678), o = r(262);
      function s(e2) {
        if (!(this instanceof s)) return new s(e2);
        this.request = e2;
      }
      e.exports = s, e.exports.Negotiator = s, s.prototype.charset = function(e2) {
        var t2 = this.charsets(e2);
        return t2 && t2[0];
      }, s.prototype.charsets = function(e2) {
        return n(this.request.headers["accept-charset"], e2);
      }, s.prototype.encoding = function(e2, t2) {
        var r2 = this.encodings(e2, t2);
        return r2 && r2[0];
      }, s.prototype.encodings = function(e2, t2) {
        return a(this.request.headers["accept-encoding"], e2, (t2 || {}).preferred);
      }, s.prototype.language = function(e2) {
        var t2 = this.languages(e2);
        return t2 && t2[0];
      }, s.prototype.languages = function(e2) {
        return i(this.request.headers["accept-language"], e2);
      }, s.prototype.mediaType = function(e2) {
        var t2 = this.mediaTypes(e2);
        return t2 && t2[0];
      }, s.prototype.mediaTypes = function(e2) {
        return o(this.request.headers.accept, e2);
      }, s.prototype.preferredCharset = s.prototype.charset, s.prototype.preferredCharsets = s.prototype.charsets, s.prototype.preferredEncoding = s.prototype.encoding, s.prototype.preferredEncodings = s.prototype.encodings, s.prototype.preferredLanguage = s.prototype.language, s.prototype.preferredLanguages = s.prototype.languages, s.prototype.preferredMediaType = s.prototype.mediaType, s.prototype.preferredMediaTypes = s.prototype.mediaTypes;
    }, 610: (e) => {
      "use strict";
      e.exports = r, e.exports.preferredCharsets = r;
      var t = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
      function r(e2, r2) {
        var o = function(e3) {
          for (var r3 = e3.split(","), n2 = 0, a2 = 0; n2 < r3.length; n2++) {
            var i2 = function(e4, r4) {
              var n3 = t.exec(e4);
              if (!n3) return null;
              var a3 = n3[1], i3 = 1;
              if (n3[2]) for (var o2 = n3[2].split(";"), s2 = 0; s2 < o2.length; s2++) {
                var d = o2[s2].trim().split("=");
                if ("q" === d[0]) {
                  i3 = parseFloat(d[1]);
                  break;
                }
              }
              return { charset: a3, q: i3, i: r4 };
            }(r3[n2].trim(), n2);
            i2 && (r3[a2++] = i2);
          }
          return r3.length = a2, r3;
        }(void 0 === e2 ? "*" : e2 || "");
        if (!r2) return o.filter(i).sort(n).map(a);
        var s = r2.map(function(e3, t2) {
          return function(e4, t3, r3) {
            for (var n2 = { o: -1, q: 0, s: 0 }, a2 = 0; a2 < t3.length; a2++) {
              var i2 = function(e5, t4, r4) {
                var n3 = 0;
                if (t4.charset.toLowerCase() === e5.toLowerCase()) n3 |= 1;
                else if ("*" !== t4.charset) return null;
                return { i: r4, o: t4.i, q: t4.q, s: n3 };
              }(e4, t3[a2], r3);
              i2 && 0 > (n2.s - i2.s || n2.q - i2.q || n2.o - i2.o) && (n2 = i2);
            }
            return n2;
          }(e3, o, t2);
        });
        return s.filter(i).sort(n).map(function(e3) {
          return r2[s.indexOf(e3)];
        });
      }
      function n(e2, t2) {
        return t2.q - e2.q || t2.s - e2.s || e2.o - t2.o || e2.i - t2.i || 0;
      }
      function a(e2) {
        return e2.charset;
      }
      function i(e2) {
        return e2.q > 0;
      }
    }, 635: (e) => {
      "use strict";
      e.exports = n, e.exports.preferredEncodings = n;
      var t = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
      function r(e2, t2, r2) {
        var n2 = 0;
        if (t2.encoding.toLowerCase() === e2.toLowerCase()) n2 |= 1;
        else if ("*" !== t2.encoding) return null;
        return { encoding: e2, i: r2, o: t2.i, q: t2.q, s: n2 };
      }
      function n(e2, n2, s) {
        var d = function(e3) {
          for (var n3 = e3.split(","), a2 = false, i2 = 1, o2 = 0, s2 = 0; o2 < n3.length; o2++) {
            var d2 = function(e4, r2) {
              var n4 = t.exec(e4);
              if (!n4) return null;
              var a3 = n4[1], i3 = 1;
              if (n4[2]) for (var o3 = n4[2].split(";"), s3 = 0; s3 < o3.length; s3++) {
                var d3 = o3[s3].trim().split("=");
                if ("q" === d3[0]) {
                  i3 = parseFloat(d3[1]);
                  break;
                }
              }
              return { encoding: a3, q: i3, i: r2 };
            }(n3[o2].trim(), o2);
            d2 && (n3[s2++] = d2, a2 = a2 || r("identity", d2), i2 = Math.min(i2, d2.q || 1));
          }
          return a2 || (n3[s2++] = { encoding: "identity", q: i2, i: o2 }), n3.length = s2, n3;
        }(e2 || ""), l = s ? function(e3, t2) {
          if (e3.q !== t2.q) return t2.q - e3.q;
          var r2 = s.indexOf(e3.encoding), n3 = s.indexOf(t2.encoding);
          return -1 === r2 && -1 === n3 ? t2.s - e3.s || e3.o - t2.o || e3.i - t2.i : -1 !== r2 && -1 !== n3 ? r2 - n3 : -1 === r2 ? 1 : -1;
        } : a;
        if (!n2) return d.filter(o).sort(l).map(i);
        var u = n2.map(function(e3, t2) {
          return function(e4, t3, n3) {
            for (var a2 = { encoding: e4, o: -1, q: 0, s: 0 }, i2 = 0; i2 < t3.length; i2++) {
              var o2 = r(e4, t3[i2], n3);
              o2 && 0 > (a2.s - o2.s || a2.q - o2.q || a2.o - o2.o) && (a2 = o2);
            }
            return a2;
          }(e3, d, t2);
        });
        return u.filter(o).sort(l).map(function(e3) {
          return n2[u.indexOf(e3)];
        });
      }
      function a(e2, t2) {
        return t2.q - e2.q || t2.s - e2.s || e2.o - t2.o || e2.i - t2.i;
      }
      function i(e2) {
        return e2.encoding;
      }
      function o(e2) {
        return e2.q > 0;
      }
    }, 678: (e) => {
      "use strict";
      e.exports = n, e.exports.preferredLanguages = n;
      var t = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
      function r(e2, r2) {
        var n2 = t.exec(e2);
        if (!n2) return null;
        var a2 = n2[1], i2 = n2[2], o2 = a2;
        i2 && (o2 += "-" + i2);
        var s = 1;
        if (n2[3]) for (var d = n2[3].split(";"), l = 0; l < d.length; l++) {
          var u = d[l].split("=");
          "q" === u[0] && (s = parseFloat(u[1]));
        }
        return { prefix: a2, suffix: i2, q: s, i: r2, full: o2 };
      }
      function n(e2, t2) {
        var n2 = function(e3) {
          for (var t3 = e3.split(","), n3 = 0, a2 = 0; n3 < t3.length; n3++) {
            var i2 = r(t3[n3].trim(), n3);
            i2 && (t3[a2++] = i2);
          }
          return t3.length = a2, t3;
        }(void 0 === e2 ? "*" : e2 || "");
        if (!t2) return n2.filter(o).sort(a).map(i);
        var s = t2.map(function(e3, t3) {
          return function(e4, t4, n3) {
            for (var a2 = { o: -1, q: 0, s: 0 }, i2 = 0; i2 < t4.length; i2++) {
              var o2 = function(e5, t5, n4) {
                var a3 = r(e5);
                if (!a3) return null;
                var i3 = 0;
                if (t5.full.toLowerCase() === a3.full.toLowerCase()) i3 |= 4;
                else if (t5.prefix.toLowerCase() === a3.full.toLowerCase()) i3 |= 2;
                else if (t5.full.toLowerCase() === a3.prefix.toLowerCase()) i3 |= 1;
                else if ("*" !== t5.full) return null;
                return { i: n4, o: t5.i, q: t5.q, s: i3 };
              }(e4, t4[i2], n3);
              o2 && 0 > (a2.s - o2.s || a2.q - o2.q || a2.o - o2.o) && (a2 = o2);
            }
            return a2;
          }(e3, n2, t3);
        });
        return s.filter(o).sort(a).map(function(e3) {
          return t2[s.indexOf(e3)];
        });
      }
      function a(e2, t2) {
        return t2.q - e2.q || t2.s - e2.s || e2.o - t2.o || e2.i - t2.i || 0;
      }
      function i(e2) {
        return e2.full;
      }
      function o(e2) {
        return e2.q > 0;
      }
    }, 262: (e) => {
      "use strict";
      e.exports = n, e.exports.preferredMediaTypes = n;
      var t = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
      function r(e2, r2) {
        var n2 = t.exec(e2);
        if (!n2) return null;
        var a2 = /* @__PURE__ */ Object.create(null), i2 = 1, o2 = n2[2], l = n2[1];
        if (n2[3]) for (var u = function(e3) {
          for (var t2 = e3.split(";"), r3 = 1, n3 = 0; r3 < t2.length; r3++) s(t2[n3]) % 2 == 0 ? t2[++n3] = t2[r3] : t2[n3] += ";" + t2[r3];
          t2.length = n3 + 1;
          for (var r3 = 0; r3 < t2.length; r3++) t2[r3] = t2[r3].trim();
          return t2;
        }(n2[3]).map(d), c = 0; c < u.length; c++) {
          var p = u[c], _ = p[0].toLowerCase(), f = p[1], h = f && '"' === f[0] && '"' === f[f.length - 1] ? f.slice(1, -1) : f;
          if ("q" === _) {
            i2 = parseFloat(h);
            break;
          }
          a2[_] = h;
        }
        return { type: l, subtype: o2, params: a2, q: i2, i: r2 };
      }
      function n(e2, t2) {
        var n2 = function(e3) {
          for (var t3 = function(e4) {
            for (var t4 = e4.split(","), r2 = 1, n4 = 0; r2 < t4.length; r2++) s(t4[n4]) % 2 == 0 ? t4[++n4] = t4[r2] : t4[n4] += "," + t4[r2];
            return t4.length = n4 + 1, t4;
          }(e3), n3 = 0, a2 = 0; n3 < t3.length; n3++) {
            var i2 = r(t3[n3].trim(), n3);
            i2 && (t3[a2++] = i2);
          }
          return t3.length = a2, t3;
        }(void 0 === e2 ? "*/*" : e2 || "");
        if (!t2) return n2.filter(o).sort(a).map(i);
        var d2 = t2.map(function(e3, t3) {
          return function(e4, t4, n3) {
            for (var a2 = { o: -1, q: 0, s: 0 }, i2 = 0; i2 < t4.length; i2++) {
              var o2 = function(e5, t5, n4) {
                var a3 = r(e5), i3 = 0;
                if (!a3) return null;
                if (t5.type.toLowerCase() == a3.type.toLowerCase()) i3 |= 4;
                else if ("*" != t5.type) return null;
                if (t5.subtype.toLowerCase() == a3.subtype.toLowerCase()) i3 |= 2;
                else if ("*" != t5.subtype) return null;
                var o3 = Object.keys(t5.params);
                if (o3.length > 0) {
                  if (!o3.every(function(e6) {
                    return "*" == t5.params[e6] || (t5.params[e6] || "").toLowerCase() == (a3.params[e6] || "").toLowerCase();
                  })) return null;
                  i3 |= 1;
                }
                return { i: n4, o: t5.i, q: t5.q, s: i3 };
              }(e4, t4[i2], n3);
              o2 && 0 > (a2.s - o2.s || a2.q - o2.q || a2.o - o2.o) && (a2 = o2);
            }
            return a2;
          }(e3, n2, t3);
        });
        return d2.filter(o).sort(a).map(function(e3) {
          return t2[d2.indexOf(e3)];
        });
      }
      function a(e2, t2) {
        return t2.q - e2.q || t2.s - e2.s || e2.o - t2.o || e2.i - t2.i || 0;
      }
      function i(e2) {
        return e2.type + "/" + e2.subtype;
      }
      function o(e2) {
        return e2.q > 0;
      }
      function s(e2) {
        for (var t2 = 0, r2 = 0; -1 !== (r2 = e2.indexOf('"', r2)); ) t2++, r2++;
        return t2;
      }
      function d(e2) {
        var t2, r2, n2 = e2.indexOf("=");
        return -1 === n2 ? t2 = e2 : (t2 = e2.slice(0, n2), r2 = e2.slice(n2 + 1)), [t2, r2];
      }
    }, 230: (e, t, r) => {
      "use strict";
      var n = r(119);
      t.A = n.default;
    }, 922: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      var n = r(315), a = r(668);
      t.default = function(e2) {
        var t2;
        let { localizedPathnames: r2, request: i, resolvedLocale: o, routing: s } = e2, d = i.nextUrl.clone(), l = a.getHost(i.headers);
        function u(e3, t3) {
          return e3.pathname = n.normalizeTrailingSlash(e3.pathname), i.nextUrl.basePath && ((e3 = new URL(e3)).pathname = a.applyBasePath(e3.pathname, i.nextUrl.basePath)), "<".concat(e3.toString(), '>; rel="alternate"; hreflang="').concat(t3, '"');
        }
        function c(e3, t3) {
          return r2 && "object" == typeof r2 ? a.formatTemplatePathname(e3, r2[o], r2[t3]) : e3;
        }
        l && (d.port = "", d.host = l), d.protocol = null !== (t2 = i.headers.get("x-forwarded-proto")) && void 0 !== t2 ? t2 : d.protocol, d.pathname = a.getNormalizedPathname(d.pathname, s.locales, s.localePrefix);
        let p = a.getLocalePrefixes(s.locales, s.localePrefix, false).flatMap((e3) => {
          let t3, [n2, i2] = e3;
          function o2(e4) {
            return "/" === e4 ? i2 : i2 + e4;
          }
          if (s.domains) return s.domains.filter((e4) => a.isLocaleSupportedOnDomain(n2, e4)).map((e4) => ((t3 = new URL(d)).port = "", t3.host = e4.domain, t3.pathname = c(d.pathname, n2), n2 === e4.defaultLocale && "always" !== s.localePrefix.mode || (t3.pathname = o2(t3.pathname)), u(t3, n2)));
          {
            let e4;
            e4 = r2 && "object" == typeof r2 ? c(d.pathname, n2) : d.pathname, n2 === s.defaultLocale && "always" !== s.localePrefix.mode || (e4 = o2(e4)), t3 = new URL(e4, d);
          }
          return u(t3, n2);
        });
        if (!s.domains && ("always" !== s.localePrefix.mode || "/" === d.pathname)) {
          let e3 = new URL(c(d.pathname, s.defaultLocale), d);
          p.push(u(e3, "x-default"));
        }
        return p.join(", ");
      };
    }, 119: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      var n = r(702), a = r(637), i = r(375), o = r(315), s = r(922), d = r(969), l = r(632), u = r(668);
      t.default = function(e2, t2) {
        var r2, c, p;
        let _ = a.receiveRoutingConfig({ ...e2, alternateLinks: null !== (r2 = null == t2 ? void 0 : t2.alternateLinks) && void 0 !== r2 ? r2 : e2.alternateLinks, localeDetection: null !== (c = null == t2 ? void 0 : t2.localeDetection) && void 0 !== c ? c : e2.localeDetection, localeCookie: null !== (p = null == t2 ? void 0 : t2.localeCookie) && void 0 !== p ? p : e2.localeCookie });
        return function(e3) {
          var t3;
          let r3;
          try {
            r3 = decodeURI(e3.nextUrl.pathname);
          } catch (e4) {
            return n.NextResponse.next();
          }
          let a2 = u.sanitizePathname(r3), { domain: c2, locale: p2 } = d.default(_, e3.headers, e3.cookies, a2), f = c2 ? c2.defaultLocale === p2 : p2 === _.defaultLocale, h = (null === (t3 = _.domains) || void 0 === t3 ? void 0 : t3.filter((e4) => u.isLocaleSupportedOnDomain(p2, e4))) || [], g = null != _.domains && !c2;
          function m(t4) {
            let r4 = new URL(t4, e3.url);
            e3.nextUrl.basePath && (r4.pathname = u.applyBasePath(r4.pathname, e3.nextUrl.basePath));
            let a3 = new Headers(e3.headers);
            return a3.set(i.HEADER_LOCALE_NAME, p2), n.NextResponse.rewrite(r4, { request: { headers: a3 } });
          }
          function v(t4, r4) {
            var a3, i2;
            let s2 = new URL(t4, e3.url);
            if (s2.pathname = o.normalizeTrailingSlash(s2.pathname), h.length > 0 && !r4 && c2) {
              let e4 = u.getBestMatchingDomain(c2, p2, h);
              e4 && (r4 = e4.domain, e4.defaultLocale === p2 && "as-needed" === _.localePrefix.mode && (s2.pathname = u.getNormalizedPathname(s2.pathname, _.locales, _.localePrefix)));
            }
            return r4 && (s2.host = r4, e3.headers.get("x-forwarded-host") && (s2.protocol = null !== (a3 = e3.headers.get("x-forwarded-proto")) && void 0 !== a3 ? a3 : e3.nextUrl.protocol, s2.port = null !== (i2 = e3.headers.get("x-forwarded-port")) && void 0 !== i2 ? i2 : "")), e3.nextUrl.basePath && (s2.pathname = u.applyBasePath(s2.pathname, e3.nextUrl.basePath)), n.NextResponse.redirect(s2.toString());
          }
          let y = u.getNormalizedPathname(a2, _.locales, _.localePrefix), w = u.getPathnameMatch(a2, _.locales, _.localePrefix), b = null != w, x = "never" === _.localePrefix.mode || f && "as-needed" === _.localePrefix.mode, S, C, P = y, T = _.pathnames;
          if (T) {
            let t4;
            if ([t4, C] = u.getInternalTemplate(T, y, p2), C) {
              let r4 = T[C], n2 = "string" == typeof r4 ? r4 : r4[p2];
              if (o.matchesPathname(n2, y)) P = u.formatTemplatePathname(y, n2, C);
              else {
                let a3;
                a3 = t4 ? "string" == typeof r4 ? r4 : r4[t4] : C;
                let i2 = x ? void 0 : o.getLocalePrefix(p2, _.localePrefix), s2 = u.formatTemplatePathname(y, a3, n2);
                S = v(u.formatPathname(s2, i2, e3.nextUrl.search));
              }
            }
          }
          if (!S) {
            if ("/" !== P || b) {
              let t4 = u.formatPathname(P, u.getLocaleAsPrefix(p2), e3.nextUrl.search);
              if (b) {
                let r4 = u.formatPathname(y, w.prefix, e3.nextUrl.search);
                if ("never" === _.localePrefix.mode) S = v(u.formatPathname(y, void 0, e3.nextUrl.search));
                else if (w.exact) {
                  if (f && x) S = v(u.formatPathname(y, void 0, e3.nextUrl.search));
                  else if (_.domains) {
                    let e4 = u.getBestMatchingDomain(c2, w.locale, h);
                    S = (null == c2 ? void 0 : c2.domain) === (null == e4 ? void 0 : e4.domain) || g ? m(t4) : v(r4, null == e4 ? void 0 : e4.domain);
                  } else S = m(t4);
                } else S = v(r4);
              } else S = x ? m(t4) : v(u.formatPathname(y, o.getLocalePrefix(p2, _.localePrefix), e3.nextUrl.search));
            } else S = x ? m(u.formatPathname(P, u.getLocaleAsPrefix(p2), e3.nextUrl.search)) : v(u.formatPathname(y, o.getLocalePrefix(p2, _.localePrefix), e3.nextUrl.search));
          }
          return _.localeDetection && _.localeCookie && l.default(e3, S, p2, _.localeCookie), "never" !== _.localePrefix.mode && _.alternateLinks && _.locales.length > 1 && S.headers.set("Link", s.default({ routing: _, localizedPathnames: null != C && T ? T[C] : void 0, request: e3, resolvedLocale: p2 })), S;
        };
      };
    }, 969: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      var n = r(268), a = r(209), i = r(668), o = function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }(a);
      function s(e2, t2, r2) {
        let a2;
        let i2 = new o.default({ headers: { "accept-language": e2.get("accept-language") || void 0 } }).languages();
        try {
          let e3 = t2.slice().sort((e4, t3) => t3.length - e4.length);
          a2 = n.match(i2, e3, r2);
        } catch (e3) {
        }
        return a2;
      }
      function d(e2, t2) {
        if (e2.localeCookie && t2.has(e2.localeCookie.name)) {
          var r2;
          let n2 = null === (r2 = t2.get(e2.localeCookie.name)) || void 0 === r2 ? void 0 : r2.value;
          if (n2 && e2.locales.includes(n2)) return n2;
        }
      }
      function l(e2, t2, r2, n2) {
        var a2;
        let o2;
        return n2 && (o2 = null === (a2 = i.getPathnameMatch(n2, e2.locales, e2.localePrefix)) || void 0 === a2 ? void 0 : a2.locale), !o2 && e2.localeDetection && (o2 = d(e2, r2)), !o2 && e2.localeDetection && (o2 = s(t2, e2.locales, e2.defaultLocale)), o2 || (o2 = e2.defaultLocale), o2;
      }
      t.default = function(e2, t2, r2, n2) {
        return e2.domains ? function(e3, t3, r3, n3) {
          let a2;
          let o2 = function(e4, t4) {
            let r4 = i.getHost(e4);
            if (r4) return t4.find((e5) => e5.domain === r4);
          }(t3, e3.domains);
          if (!o2) return { locale: l(e3, t3, r3, n3) };
          if (n3) {
            var u;
            let t4 = null === (u = i.getPathnameMatch(n3, e3.locales, e3.localePrefix)) || void 0 === u ? void 0 : u.locale;
            if (t4) {
              if (!i.isLocaleSupportedOnDomain(t4, o2)) return { locale: t4, domain: o2 };
              a2 = t4;
            }
          }
          if (!a2 && e3.localeDetection) {
            let t4 = d(e3, r3);
            t4 && i.isLocaleSupportedOnDomain(t4, o2) && (a2 = t4);
          }
          if (!a2 && e3.localeDetection) {
            let r4 = s(t3, o2.locales || e3.locales, o2.defaultLocale);
            r4 && (a2 = r4);
          }
          return a2 || (a2 = o2.defaultLocale), { locale: a2, domain: o2 };
        }(e2, t2, r2, n2) : { locale: l(e2, t2, r2, n2) };
      }, t.getAcceptLanguageLocale = s;
    }, 632: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true }), t.default = function(e2, t2, r, n) {
        var a;
        let { name: i, ...o } = n;
        (null === (a = e2.cookies.get(i)) || void 0 === a ? void 0 : a.value) !== r && t2.cookies.set(i, r, { path: e2.nextUrl.basePath || void 0, ...o });
      };
    }, 668: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true });
      var n = r(315);
      function a(e2, t2) {
        let r2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a2 = e2.map((e3) => [e3, n.getLocalePrefix(e3, t2)]);
        return r2 && a2.sort((e3, t3) => t3[1].length - e3[1].length), a2;
      }
      function i(e2, t2) {
        let r2 = n.normalizeTrailingSlash(t2), a2 = n.normalizeTrailingSlash(e2), i2 = n.templateToRegex(a2).exec(r2);
        if (!i2) return;
        let o2 = {};
        for (let e3 = 1; e3 < i2.length; e3++) {
          var s2;
          let t3 = null === (s2 = a2.match(/\[([^\]]+)\]/g)) || void 0 === s2 ? void 0 : s2[e3 - 1].replace(/[[\]]/g, "");
          t3 && (o2[t3] = i2[e3]);
        }
        return o2;
      }
      function o(e2, t2) {
        if (!t2) return e2;
        let r2 = e2 = e2.replace(/\[\[/g, "[").replace(/\]\]/g, "]");
        return Object.entries(t2).forEach((e3) => {
          let [t3, n2] = e3;
          r2 = r2.replace("[".concat(t3, "]"), n2);
        }), r2;
      }
      function s(e2, t2) {
        return t2.defaultLocale === e2 || !t2.locales || t2.locales.includes(e2);
      }
      t.applyBasePath = function(e2, t2) {
        return n.normalizeTrailingSlash(t2 + e2);
      }, t.formatPathname = function(e2, t2, r2) {
        let a2 = e2;
        return t2 && (a2 = n.prefixPathname(t2, a2)), r2 && (a2 += r2), a2;
      }, t.formatPathnameTemplate = o, t.formatTemplatePathname = function(e2, t2, r2, a2) {
        let s2 = "";
        return s2 += o(r2, i(t2, e2)), s2 = n.normalizeTrailingSlash(s2);
      }, t.getBestMatchingDomain = function(e2, t2, r2) {
        let n2;
        return e2 && s(t2, e2) && (n2 = e2), n2 || (n2 = r2.find((e3) => e3.defaultLocale === t2)), n2 || (n2 = r2.find((e3) => {
          var r3;
          return null === (r3 = e3.locales) || void 0 === r3 ? void 0 : r3.includes(t2);
        })), n2 || null != (null == e2 ? void 0 : e2.locales) || (n2 = e2), n2 || (n2 = r2.find((e3) => !e3.locales)), n2;
      }, t.getHost = function(e2) {
        var t2, r2;
        return null !== (t2 = null !== (r2 = e2.get("x-forwarded-host")) && void 0 !== r2 ? r2 : e2.get("host")) && void 0 !== t2 ? t2 : void 0;
      }, t.getInternalTemplate = function(e2, t2, r2) {
        for (let a2 of n.getSortedPathnames(Object.keys(e2))) {
          let i2 = e2[a2];
          if ("string" == typeof i2) {
            if (n.matchesPathname(i2, t2)) return [void 0, a2];
          } else {
            let e3 = Object.entries(i2), o2 = e3.findIndex((e4) => {
              let [t3] = e4;
              return t3 === r2;
            });
            for (let [r3, i3] of (o2 > 0 && e3.unshift(e3.splice(o2, 1)[0]), e3)) if (n.matchesPathname(i3, t2)) return [r3, a2];
          }
        }
        for (let r3 of Object.keys(e2)) if (n.matchesPathname(r3, t2)) return [void 0, r3];
        return [void 0, void 0];
      }, t.getLocaleAsPrefix = function(e2) {
        return "/".concat(e2);
      }, t.getLocalePrefixes = a, t.getNormalizedPathname = function(e2, t2, r2) {
        e2.endsWith("/") || (e2 += "/");
        let i2 = a(t2, r2), o2 = RegExp("^(".concat(i2.map((e3) => {
          let [, t3] = e3;
          return t3.replaceAll("/", "\\/");
        }).join("|"), ")/(.*)"), "i"), s2 = e2.match(o2), d = s2 ? "/" + s2[2] : e2;
        return "/" !== d && (d = n.normalizeTrailingSlash(d)), d;
      }, t.getPathnameMatch = function(e2, t2, r2) {
        for (let [n2, i2] of a(t2, r2)) {
          let t3, r3;
          if (e2 === i2 || e2.startsWith(i2 + "/")) t3 = r3 = true;
          else {
            let n3 = e2.toLowerCase(), a2 = i2.toLowerCase();
            (n3 === a2 || n3.startsWith(a2 + "/")) && (t3 = false, r3 = true);
          }
          if (r3) return { locale: n2, prefix: i2, matchedPrefix: e2.slice(0, i2.length), exact: t3 };
        }
      }, t.getRouteParams = i, t.isLocaleSupportedOnDomain = s, t.sanitizePathname = function(e2) {
        return e2.replace(/\\/g, "%5C").replace(/\/+/g, "/");
      };
    }, 637: (e, t) => {
      "use strict";
      function r(e2) {
        return !(null != e2 && !e2) && { name: "NEXT_LOCALE", maxAge: 31536e3, sameSite: "lax", ..."object" == typeof e2 && e2 };
      }
      function n(e2) {
        return "object" == typeof e2 ? e2 : { mode: e2 || "always" };
      }
      Object.defineProperty(t, "__esModule", { value: true }), t.receiveLocaleCookie = r, t.receiveLocalePrefixConfig = n, t.receiveRoutingConfig = function(e2) {
        var t2, a;
        return { ...e2, localePrefix: n(e2.localePrefix), localeCookie: r(e2.localeCookie), localeDetection: null === (t2 = e2.localeDetection) || void 0 === t2 || t2, alternateLinks: null === (a = e2.alternateLinks) || void 0 === a || a };
      };
    }, 375: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true }), t.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE", t.LOCALE_SEGMENT_NAME = "locale";
    }, 315: (e, t) => {
      "use strict";
      function r(e2) {
        return ("object" == typeof e2 ? null == e2.host && null == e2.hostname : !/^[a-z]+:/i.test(e2)) && !function(e3) {
          let t2 = "object" == typeof e3 ? e3.pathname : e3;
          return null != t2 && !t2.startsWith("/");
        }(e2);
      }
      function n(e2, t2) {
        let r2;
        return "string" == typeof e2 ? r2 = a(t2, e2) : (r2 = { ...e2 }, e2.pathname && (r2.pathname = a(t2, e2.pathname))), r2;
      }
      function a(e2, t2) {
        let r2 = e2;
        return /^\/(\?.*)?$/.test(t2) && (t2 = t2.slice(1)), r2 += t2;
      }
      function i(e2, t2) {
        return t2 === e2 || t2.startsWith("".concat(e2, "/"));
      }
      function o(e2) {
        let t2 = function() {
          try {
            return "true" === process.env._next_intl_trailing_slash;
          } catch (e3) {
            return false;
          }
        }();
        if ("/" !== e2) {
          let r2 = e2.endsWith("/");
          t2 && !r2 ? e2 += "/" : !t2 && r2 && (e2 = e2.slice(0, -1));
        }
        return e2;
      }
      function s(e2) {
        return "/" + e2;
      }
      function d(e2) {
        let t2 = e2.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
        return new RegExp("^".concat(t2, "$"));
      }
      function l(e2) {
        return e2.includes("[[...");
      }
      function u(e2) {
        return e2.includes("[...");
      }
      function c(e2) {
        return e2.includes("[");
      }
      function p(e2, t2) {
        let r2 = e2.split("/"), n2 = t2.split("/"), a2 = Math.max(r2.length, n2.length);
        for (let e3 = 0; e3 < a2; e3++) {
          let t3 = r2[e3], a3 = n2[e3];
          if (!t3 && a3) return -1;
          if (t3 && !a3) return 1;
          if (t3 || a3) {
            if (!c(t3) && c(a3)) return -1;
            if (c(t3) && !c(a3)) return 1;
            if (!u(t3) && u(a3)) return -1;
            if (u(t3) && !u(a3)) return 1;
            if (!l(t3) && l(a3)) return -1;
            if (l(t3) && !l(a3)) return 1;
          }
        }
        return 0;
      }
      Object.defineProperty(t, "__esModule", { value: true }), t.getLocaleAsPrefix = s, t.getLocalePrefix = function(e2, t2) {
        var r2;
        return "never" !== t2.mode && (null === (r2 = t2.prefixes) || void 0 === r2 ? void 0 : r2[e2]) || s(e2);
      }, t.getSortedPathnames = function(e2) {
        return e2.sort(p);
      }, t.hasPathnamePrefixed = i, t.isLocalizableHref = r, t.isPromise = function(e2) {
        return "function" == typeof e2.then;
      }, t.localizeHref = function(e2, t2) {
        let a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t2, o2 = arguments.length > 3 ? arguments[3] : void 0, s2 = arguments.length > 4 ? arguments[4] : void 0;
        if (!r(e2)) return e2;
        let d2 = i(s2, o2);
        return (t2 !== a2 || d2) && null != s2 ? n(e2, s2) : e2;
      }, t.matchesPathname = function(e2, t2) {
        let r2 = o(e2), n2 = o(t2);
        return d(r2).test(n2);
      }, t.normalizeTrailingSlash = o, t.prefixHref = n, t.prefixPathname = a, t.templateToRegex = d, t.unprefixPathname = function(e2, t2) {
        return e2.replace(new RegExp("^".concat(t2)), "") || "/";
      };
    }, 555: (e) => {
      "use strict";
      var t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, i = {};
      function o(e2) {
        var t2;
        let r2 = ["path" in e2 && e2.path && `Path=${e2.path}`, "expires" in e2 && (e2.expires || 0 === e2.expires) && `Expires=${("number" == typeof e2.expires ? new Date(e2.expires) : e2.expires).toUTCString()}`, "maxAge" in e2 && "number" == typeof e2.maxAge && `Max-Age=${e2.maxAge}`, "domain" in e2 && e2.domain && `Domain=${e2.domain}`, "secure" in e2 && e2.secure && "Secure", "httpOnly" in e2 && e2.httpOnly && "HttpOnly", "sameSite" in e2 && e2.sameSite && `SameSite=${e2.sameSite}`, "partitioned" in e2 && e2.partitioned && "Partitioned", "priority" in e2 && e2.priority && `Priority=${e2.priority}`].filter(Boolean), n2 = `${e2.name}=${encodeURIComponent(null != (t2 = e2.value) ? t2 : "")}`;
        return 0 === r2.length ? n2 : `${n2}; ${r2.join("; ")}`;
      }
      function s(e2) {
        let t2 = /* @__PURE__ */ new Map();
        for (let r2 of e2.split(/; */)) {
          if (!r2) continue;
          let e3 = r2.indexOf("=");
          if (-1 === e3) {
            t2.set(r2, "true");
            continue;
          }
          let [n2, a2] = [r2.slice(0, e3), r2.slice(e3 + 1)];
          try {
            t2.set(n2, decodeURIComponent(null != a2 ? a2 : "true"));
          } catch {
          }
        }
        return t2;
      }
      function d(e2) {
        var t2, r2;
        if (!e2) return;
        let [[n2, a2], ...i2] = s(e2), { domain: o2, expires: d2, httponly: c2, maxage: p2, path: _, samesite: f, secure: h, partitioned: g, priority: m } = Object.fromEntries(i2.map(([e3, t3]) => [e3.toLowerCase(), t3]));
        return function(e3) {
          let t3 = {};
          for (let r3 in e3) e3[r3] && (t3[r3] = e3[r3]);
          return t3;
        }({ name: n2, value: decodeURIComponent(a2), domain: o2, ...d2 && { expires: new Date(d2) }, ...c2 && { httpOnly: true }, ..."string" == typeof p2 && { maxAge: Number(p2) }, path: _, ...f && { sameSite: l.includes(t2 = (t2 = f).toLowerCase()) ? t2 : void 0 }, ...h && { secure: true }, ...m && { priority: u.includes(r2 = (r2 = m).toLowerCase()) ? r2 : void 0 }, ...g && { partitioned: true } });
      }
      ((e2, r2) => {
        for (var n2 in r2) t(e2, n2, { get: r2[n2], enumerable: true });
      })(i, { RequestCookies: () => c, ResponseCookies: () => p, parseCookie: () => s, parseSetCookie: () => d, stringifyCookie: () => o }), e.exports = ((e2, i2, o2, s2) => {
        if (i2 && "object" == typeof i2 || "function" == typeof i2) for (let d2 of n(i2)) a.call(e2, d2) || d2 === o2 || t(e2, d2, { get: () => i2[d2], enumerable: !(s2 = r(i2, d2)) || s2.enumerable });
        return e2;
      })(t({}, "__esModule", { value: true }), i);
      var l = ["strict", "lax", "none"], u = ["low", "medium", "high"], c = class {
        constructor(e2) {
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          let t2 = e2.get("cookie");
          if (t2) for (let [e3, r2] of s(t2)) this._parsed.set(e3, { name: e3, value: r2 });
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed);
          if (!e2.length) return r2.map(([e3, t3]) => t3);
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter(([e3]) => e3 === n2).map(([e3, t3]) => t3);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2, n2 = this._parsed;
          return n2.set(t2, { name: t2, value: r2 }), this._headers.set("cookie", Array.from(n2).map(([e3, t3]) => o(t3)).join("; ")), this;
        }
        delete(e2) {
          let t2 = this._parsed, r2 = Array.isArray(e2) ? e2.map((e3) => t2.delete(e3)) : t2.delete(e2);
          return this._headers.set("cookie", Array.from(t2).map(([e3, t3]) => o(t3)).join("; ")), r2;
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map((e2) => `${e2.name}=${encodeURIComponent(e2.value)}`).join("; ");
        }
      }, p = class {
        constructor(e2) {
          var t2, r2, n2;
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          let a2 = null != (n2 = null != (r2 = null == (t2 = e2.getSetCookie) ? void 0 : t2.call(e2)) ? r2 : e2.get("set-cookie")) ? n2 : [];
          for (let e3 of Array.isArray(a2) ? a2 : function(e4) {
            if (!e4) return [];
            var t3, r3, n3, a3, i2, o2 = [], s2 = 0;
            function d2() {
              for (; s2 < e4.length && /\s/.test(e4.charAt(s2)); ) s2 += 1;
              return s2 < e4.length;
            }
            for (; s2 < e4.length; ) {
              for (t3 = s2, i2 = false; d2(); ) if ("," === (r3 = e4.charAt(s2))) {
                for (n3 = s2, s2 += 1, d2(), a3 = s2; s2 < e4.length && "=" !== (r3 = e4.charAt(s2)) && ";" !== r3 && "," !== r3; ) s2 += 1;
                s2 < e4.length && "=" === e4.charAt(s2) ? (i2 = true, s2 = a3, o2.push(e4.substring(t3, n3)), t3 = s2) : s2 = n3 + 1;
              } else s2 += 1;
              (!i2 || s2 >= e4.length) && o2.push(e4.substring(t3, e4.length));
            }
            return o2;
          }(a2)) {
            let t3 = d(e3);
            t3 && this._parsed.set(t3.name, t3);
          }
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed.values());
          if (!e2.length) return r2;
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter((e3) => e3.name === n2);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2, n2] = 1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2, a2 = this._parsed;
          return a2.set(t2, function(e3 = { name: "", value: "" }) {
            return "number" == typeof e3.expires && (e3.expires = new Date(e3.expires)), e3.maxAge && (e3.expires = new Date(Date.now() + 1e3 * e3.maxAge)), (null === e3.path || void 0 === e3.path) && (e3.path = "/"), e3;
          }({ name: t2, value: r2, ...n2 })), function(e3, t3) {
            for (let [, r3] of (t3.delete("set-cookie"), e3)) {
              let e4 = o(r3);
              t3.append("set-cookie", e4);
            }
          }(a2, this._headers), this;
        }
        delete(...e2) {
          let [t2, r2, n2] = "string" == typeof e2[0] ? [e2[0]] : [e2[0].name, e2[0].path, e2[0].domain];
          return this.set({ name: t2, path: r2, domain: n2, value: "", expires: /* @__PURE__ */ new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map(o).join("; ");
        }
      };
    }, 777: (e, t, r) => {
      (() => {
        "use strict";
        var t2 = { 491: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ContextAPI = void 0;
          let n2 = r2(223), a2 = r2(172), i2 = r2(930), o = "context", s = new n2.NoopContextManager();
          class d {
            constructor() {
            }
            static getInstance() {
              return this._instance || (this._instance = new d()), this._instance;
            }
            setGlobalContextManager(e3) {
              return (0, a2.registerGlobal)(o, e3, i2.DiagAPI.instance());
            }
            active() {
              return this._getContextManager().active();
            }
            with(e3, t4, r3, ...n3) {
              return this._getContextManager().with(e3, t4, r3, ...n3);
            }
            bind(e3, t4) {
              return this._getContextManager().bind(e3, t4);
            }
            _getContextManager() {
              return (0, a2.getGlobal)(o) || s;
            }
            disable() {
              this._getContextManager().disable(), (0, a2.unregisterGlobal)(o, i2.DiagAPI.instance());
            }
          }
          t3.ContextAPI = d;
        }, 930: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagAPI = void 0;
          let n2 = r2(56), a2 = r2(912), i2 = r2(957), o = r2(172);
          class s {
            constructor() {
              function e3(e4) {
                return function(...t5) {
                  let r3 = (0, o.getGlobal)("diag");
                  if (r3) return r3[e4](...t5);
                };
              }
              let t4 = this;
              t4.setLogger = (e4, r3 = { logLevel: i2.DiagLogLevel.INFO }) => {
                var n3, s2, d;
                if (e4 === t4) {
                  let e5 = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                  return t4.error(null !== (n3 = e5.stack) && void 0 !== n3 ? n3 : e5.message), false;
                }
                "number" == typeof r3 && (r3 = { logLevel: r3 });
                let l = (0, o.getGlobal)("diag"), u = (0, a2.createLogLevelDiagLogger)(null !== (s2 = r3.logLevel) && void 0 !== s2 ? s2 : i2.DiagLogLevel.INFO, e4);
                if (l && !r3.suppressOverrideMessage) {
                  let e5 = null !== (d = Error().stack) && void 0 !== d ? d : "<failed to generate stacktrace>";
                  l.warn(`Current logger will be overwritten from ${e5}`), u.warn(`Current logger will overwrite one already registered from ${e5}`);
                }
                return (0, o.registerGlobal)("diag", u, t4, true);
              }, t4.disable = () => {
                (0, o.unregisterGlobal)("diag", t4);
              }, t4.createComponentLogger = (e4) => new n2.DiagComponentLogger(e4), t4.verbose = e3("verbose"), t4.debug = e3("debug"), t4.info = e3("info"), t4.warn = e3("warn"), t4.error = e3("error");
            }
            static instance() {
              return this._instance || (this._instance = new s()), this._instance;
            }
          }
          t3.DiagAPI = s;
        }, 653: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.MetricsAPI = void 0;
          let n2 = r2(660), a2 = r2(172), i2 = r2(930), o = "metrics";
          class s {
            constructor() {
            }
            static getInstance() {
              return this._instance || (this._instance = new s()), this._instance;
            }
            setGlobalMeterProvider(e3) {
              return (0, a2.registerGlobal)(o, e3, i2.DiagAPI.instance());
            }
            getMeterProvider() {
              return (0, a2.getGlobal)(o) || n2.NOOP_METER_PROVIDER;
            }
            getMeter(e3, t4, r3) {
              return this.getMeterProvider().getMeter(e3, t4, r3);
            }
            disable() {
              (0, a2.unregisterGlobal)(o, i2.DiagAPI.instance());
            }
          }
          t3.MetricsAPI = s;
        }, 181: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.PropagationAPI = void 0;
          let n2 = r2(172), a2 = r2(874), i2 = r2(194), o = r2(277), s = r2(369), d = r2(930), l = "propagation", u = new a2.NoopTextMapPropagator();
          class c {
            constructor() {
              this.createBaggage = s.createBaggage, this.getBaggage = o.getBaggage, this.getActiveBaggage = o.getActiveBaggage, this.setBaggage = o.setBaggage, this.deleteBaggage = o.deleteBaggage;
            }
            static getInstance() {
              return this._instance || (this._instance = new c()), this._instance;
            }
            setGlobalPropagator(e3) {
              return (0, n2.registerGlobal)(l, e3, d.DiagAPI.instance());
            }
            inject(e3, t4, r3 = i2.defaultTextMapSetter) {
              return this._getGlobalPropagator().inject(e3, t4, r3);
            }
            extract(e3, t4, r3 = i2.defaultTextMapGetter) {
              return this._getGlobalPropagator().extract(e3, t4, r3);
            }
            fields() {
              return this._getGlobalPropagator().fields();
            }
            disable() {
              (0, n2.unregisterGlobal)(l, d.DiagAPI.instance());
            }
            _getGlobalPropagator() {
              return (0, n2.getGlobal)(l) || u;
            }
          }
          t3.PropagationAPI = c;
        }, 997: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceAPI = void 0;
          let n2 = r2(172), a2 = r2(846), i2 = r2(139), o = r2(607), s = r2(930), d = "trace";
          class l {
            constructor() {
              this._proxyTracerProvider = new a2.ProxyTracerProvider(), this.wrapSpanContext = i2.wrapSpanContext, this.isSpanContextValid = i2.isSpanContextValid, this.deleteSpan = o.deleteSpan, this.getSpan = o.getSpan, this.getActiveSpan = o.getActiveSpan, this.getSpanContext = o.getSpanContext, this.setSpan = o.setSpan, this.setSpanContext = o.setSpanContext;
            }
            static getInstance() {
              return this._instance || (this._instance = new l()), this._instance;
            }
            setGlobalTracerProvider(e3) {
              let t4 = (0, n2.registerGlobal)(d, this._proxyTracerProvider, s.DiagAPI.instance());
              return t4 && this._proxyTracerProvider.setDelegate(e3), t4;
            }
            getTracerProvider() {
              return (0, n2.getGlobal)(d) || this._proxyTracerProvider;
            }
            getTracer(e3, t4) {
              return this.getTracerProvider().getTracer(e3, t4);
            }
            disable() {
              (0, n2.unregisterGlobal)(d, s.DiagAPI.instance()), this._proxyTracerProvider = new a2.ProxyTracerProvider();
            }
          }
          t3.TraceAPI = l;
        }, 277: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.deleteBaggage = t3.setBaggage = t3.getActiveBaggage = t3.getBaggage = void 0;
          let n2 = r2(491), a2 = (0, r2(780).createContextKey)("OpenTelemetry Baggage Key");
          function i2(e3) {
            return e3.getValue(a2) || void 0;
          }
          t3.getBaggage = i2, t3.getActiveBaggage = function() {
            return i2(n2.ContextAPI.getInstance().active());
          }, t3.setBaggage = function(e3, t4) {
            return e3.setValue(a2, t4);
          }, t3.deleteBaggage = function(e3) {
            return e3.deleteValue(a2);
          };
        }, 993: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.BaggageImpl = void 0;
          class r2 {
            constructor(e3) {
              this._entries = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
            }
            getEntry(e3) {
              let t4 = this._entries.get(e3);
              if (t4) return Object.assign({}, t4);
            }
            getAllEntries() {
              return Array.from(this._entries.entries()).map(([e3, t4]) => [e3, t4]);
            }
            setEntry(e3, t4) {
              let n2 = new r2(this._entries);
              return n2._entries.set(e3, t4), n2;
            }
            removeEntry(e3) {
              let t4 = new r2(this._entries);
              return t4._entries.delete(e3), t4;
            }
            removeEntries(...e3) {
              let t4 = new r2(this._entries);
              for (let r3 of e3) t4._entries.delete(r3);
              return t4;
            }
            clear() {
              return new r2();
            }
          }
          t3.BaggageImpl = r2;
        }, 830: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.baggageEntryMetadataSymbol = void 0, t3.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        }, 369: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.baggageEntryMetadataFromString = t3.createBaggage = void 0;
          let n2 = r2(930), a2 = r2(993), i2 = r2(830), o = n2.DiagAPI.instance();
          t3.createBaggage = function(e3 = {}) {
            return new a2.BaggageImpl(new Map(Object.entries(e3)));
          }, t3.baggageEntryMetadataFromString = function(e3) {
            return "string" != typeof e3 && (o.error(`Cannot create baggage metadata from unknown type: ${typeof e3}`), e3 = ""), { __TYPE__: i2.baggageEntryMetadataSymbol, toString: () => e3 };
          };
        }, 67: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.context = void 0;
          let n2 = r2(491);
          t3.context = n2.ContextAPI.getInstance();
        }, 223: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopContextManager = void 0;
          let n2 = r2(780);
          class a2 {
            active() {
              return n2.ROOT_CONTEXT;
            }
            with(e3, t4, r3, ...n3) {
              return t4.call(r3, ...n3);
            }
            bind(e3, t4) {
              return t4;
            }
            enable() {
              return this;
            }
            disable() {
              return this;
            }
          }
          t3.NoopContextManager = a2;
        }, 780: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ROOT_CONTEXT = t3.createContextKey = void 0, t3.createContextKey = function(e3) {
            return Symbol.for(e3);
          };
          class r2 {
            constructor(e3) {
              let t4 = this;
              t4._currentContext = e3 ? new Map(e3) : /* @__PURE__ */ new Map(), t4.getValue = (e4) => t4._currentContext.get(e4), t4.setValue = (e4, n2) => {
                let a2 = new r2(t4._currentContext);
                return a2._currentContext.set(e4, n2), a2;
              }, t4.deleteValue = (e4) => {
                let n2 = new r2(t4._currentContext);
                return n2._currentContext.delete(e4), n2;
              };
            }
          }
          t3.ROOT_CONTEXT = new r2();
        }, 506: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.diag = void 0;
          let n2 = r2(930);
          t3.diag = n2.DiagAPI.instance();
        }, 56: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagComponentLogger = void 0;
          let n2 = r2(172);
          class a2 {
            constructor(e3) {
              this._namespace = e3.namespace || "DiagComponentLogger";
            }
            debug(...e3) {
              return i2("debug", this._namespace, e3);
            }
            error(...e3) {
              return i2("error", this._namespace, e3);
            }
            info(...e3) {
              return i2("info", this._namespace, e3);
            }
            warn(...e3) {
              return i2("warn", this._namespace, e3);
            }
            verbose(...e3) {
              return i2("verbose", this._namespace, e3);
            }
          }
          function i2(e3, t4, r3) {
            let a3 = (0, n2.getGlobal)("diag");
            if (a3) return r3.unshift(t4), a3[e3](...r3);
          }
          t3.DiagComponentLogger = a2;
        }, 972: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagConsoleLogger = void 0;
          let r2 = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
          class n2 {
            constructor() {
              for (let e3 = 0; e3 < r2.length; e3++) this[r2[e3].n] = /* @__PURE__ */ function(e4) {
                return function(...t4) {
                  if (console) {
                    let r3 = console[e4];
                    if ("function" != typeof r3 && (r3 = console.log), "function" == typeof r3) return r3.apply(console, t4);
                  }
                };
              }(r2[e3].c);
            }
          }
          t3.DiagConsoleLogger = n2;
        }, 912: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.createLogLevelDiagLogger = void 0;
          let n2 = r2(957);
          t3.createLogLevelDiagLogger = function(e3, t4) {
            function r3(r4, n3) {
              let a2 = t4[r4];
              return "function" == typeof a2 && e3 >= n3 ? a2.bind(t4) : function() {
              };
            }
            return e3 < n2.DiagLogLevel.NONE ? e3 = n2.DiagLogLevel.NONE : e3 > n2.DiagLogLevel.ALL && (e3 = n2.DiagLogLevel.ALL), t4 = t4 || {}, { error: r3("error", n2.DiagLogLevel.ERROR), warn: r3("warn", n2.DiagLogLevel.WARN), info: r3("info", n2.DiagLogLevel.INFO), debug: r3("debug", n2.DiagLogLevel.DEBUG), verbose: r3("verbose", n2.DiagLogLevel.VERBOSE) };
          };
        }, 957: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagLogLevel = void 0, function(e3) {
            e3[e3.NONE = 0] = "NONE", e3[e3.ERROR = 30] = "ERROR", e3[e3.WARN = 50] = "WARN", e3[e3.INFO = 60] = "INFO", e3[e3.DEBUG = 70] = "DEBUG", e3[e3.VERBOSE = 80] = "VERBOSE", e3[e3.ALL = 9999] = "ALL";
          }(t3.DiagLogLevel || (t3.DiagLogLevel = {}));
        }, 172: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.unregisterGlobal = t3.getGlobal = t3.registerGlobal = void 0;
          let n2 = r2(200), a2 = r2(521), i2 = r2(130), o = a2.VERSION.split(".")[0], s = Symbol.for(`opentelemetry.js.api.${o}`), d = n2._globalThis;
          t3.registerGlobal = function(e3, t4, r3, n3 = false) {
            var i3;
            let o2 = d[s] = null !== (i3 = d[s]) && void 0 !== i3 ? i3 : { version: a2.VERSION };
            if (!n3 && o2[e3]) {
              let t5 = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e3}`);
              return r3.error(t5.stack || t5.message), false;
            }
            if (o2.version !== a2.VERSION) {
              let t5 = Error(`@opentelemetry/api: Registration of version v${o2.version} for ${e3} does not match previously registered API v${a2.VERSION}`);
              return r3.error(t5.stack || t5.message), false;
            }
            return o2[e3] = t4, r3.debug(`@opentelemetry/api: Registered a global for ${e3} v${a2.VERSION}.`), true;
          }, t3.getGlobal = function(e3) {
            var t4, r3;
            let n3 = null === (t4 = d[s]) || void 0 === t4 ? void 0 : t4.version;
            if (n3 && (0, i2.isCompatible)(n3)) return null === (r3 = d[s]) || void 0 === r3 ? void 0 : r3[e3];
          }, t3.unregisterGlobal = function(e3, t4) {
            t4.debug(`@opentelemetry/api: Unregistering a global for ${e3} v${a2.VERSION}.`);
            let r3 = d[s];
            r3 && delete r3[e3];
          };
        }, 130: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.isCompatible = t3._makeCompatibilityCheck = void 0;
          let n2 = r2(521), a2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
          function i2(e3) {
            let t4 = /* @__PURE__ */ new Set([e3]), r3 = /* @__PURE__ */ new Set(), n3 = e3.match(a2);
            if (!n3) return () => false;
            let i3 = { major: +n3[1], minor: +n3[2], patch: +n3[3], prerelease: n3[4] };
            if (null != i3.prerelease) return function(t5) {
              return t5 === e3;
            };
            function o(e4) {
              return r3.add(e4), false;
            }
            return function(e4) {
              if (t4.has(e4)) return true;
              if (r3.has(e4)) return false;
              let n4 = e4.match(a2);
              if (!n4) return o(e4);
              let s = { major: +n4[1], minor: +n4[2], patch: +n4[3], prerelease: n4[4] };
              return null != s.prerelease || i3.major !== s.major ? o(e4) : 0 === i3.major ? i3.minor === s.minor && i3.patch <= s.patch ? (t4.add(e4), true) : o(e4) : i3.minor <= s.minor ? (t4.add(e4), true) : o(e4);
            };
          }
          t3._makeCompatibilityCheck = i2, t3.isCompatible = i2(n2.VERSION);
        }, 886: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.metrics = void 0;
          let n2 = r2(653);
          t3.metrics = n2.MetricsAPI.getInstance();
        }, 901: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ValueType = void 0, function(e3) {
            e3[e3.INT = 0] = "INT", e3[e3.DOUBLE = 1] = "DOUBLE";
          }(t3.ValueType || (t3.ValueType = {}));
        }, 102: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.createNoopMeter = t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t3.NOOP_OBSERVABLE_GAUGE_METRIC = t3.NOOP_OBSERVABLE_COUNTER_METRIC = t3.NOOP_UP_DOWN_COUNTER_METRIC = t3.NOOP_HISTOGRAM_METRIC = t3.NOOP_COUNTER_METRIC = t3.NOOP_METER = t3.NoopObservableUpDownCounterMetric = t3.NoopObservableGaugeMetric = t3.NoopObservableCounterMetric = t3.NoopObservableMetric = t3.NoopHistogramMetric = t3.NoopUpDownCounterMetric = t3.NoopCounterMetric = t3.NoopMetric = t3.NoopMeter = void 0;
          class r2 {
            constructor() {
            }
            createHistogram(e3, r3) {
              return t3.NOOP_HISTOGRAM_METRIC;
            }
            createCounter(e3, r3) {
              return t3.NOOP_COUNTER_METRIC;
            }
            createUpDownCounter(e3, r3) {
              return t3.NOOP_UP_DOWN_COUNTER_METRIC;
            }
            createObservableGauge(e3, r3) {
              return t3.NOOP_OBSERVABLE_GAUGE_METRIC;
            }
            createObservableCounter(e3, r3) {
              return t3.NOOP_OBSERVABLE_COUNTER_METRIC;
            }
            createObservableUpDownCounter(e3, r3) {
              return t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
            }
            addBatchObservableCallback(e3, t4) {
            }
            removeBatchObservableCallback(e3) {
            }
          }
          t3.NoopMeter = r2;
          class n2 {
          }
          t3.NoopMetric = n2;
          class a2 extends n2 {
            add(e3, t4) {
            }
          }
          t3.NoopCounterMetric = a2;
          class i2 extends n2 {
            add(e3, t4) {
            }
          }
          t3.NoopUpDownCounterMetric = i2;
          class o extends n2 {
            record(e3, t4) {
            }
          }
          t3.NoopHistogramMetric = o;
          class s {
            addCallback(e3) {
            }
            removeCallback(e3) {
            }
          }
          t3.NoopObservableMetric = s;
          class d extends s {
          }
          t3.NoopObservableCounterMetric = d;
          class l extends s {
          }
          t3.NoopObservableGaugeMetric = l;
          class u extends s {
          }
          t3.NoopObservableUpDownCounterMetric = u, t3.NOOP_METER = new r2(), t3.NOOP_COUNTER_METRIC = new a2(), t3.NOOP_HISTOGRAM_METRIC = new o(), t3.NOOP_UP_DOWN_COUNTER_METRIC = new i2(), t3.NOOP_OBSERVABLE_COUNTER_METRIC = new d(), t3.NOOP_OBSERVABLE_GAUGE_METRIC = new l(), t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new u(), t3.createNoopMeter = function() {
            return t3.NOOP_METER;
          };
        }, 660: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NOOP_METER_PROVIDER = t3.NoopMeterProvider = void 0;
          let n2 = r2(102);
          class a2 {
            getMeter(e3, t4, r3) {
              return n2.NOOP_METER;
            }
          }
          t3.NoopMeterProvider = a2, t3.NOOP_METER_PROVIDER = new a2();
        }, 200: function(e2, t3, r2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = r3), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
              return t4[r3];
            } });
          } : function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = r3), e3[n3] = t4[r3];
          }), a2 = this && this.__exportStar || function(e3, t4) {
            for (var r3 in e3) "default" === r3 || Object.prototype.hasOwnProperty.call(t4, r3) || n2(t4, e3, r3);
          };
          Object.defineProperty(t3, "__esModule", { value: true }), a2(r2(46), t3);
        }, 651: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3._globalThis = void 0, t3._globalThis = "object" == typeof globalThis ? globalThis : r.g;
        }, 46: function(e2, t3, r2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = r3), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
              return t4[r3];
            } });
          } : function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = r3), e3[n3] = t4[r3];
          }), a2 = this && this.__exportStar || function(e3, t4) {
            for (var r3 in e3) "default" === r3 || Object.prototype.hasOwnProperty.call(t4, r3) || n2(t4, e3, r3);
          };
          Object.defineProperty(t3, "__esModule", { value: true }), a2(r2(651), t3);
        }, 939: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.propagation = void 0;
          let n2 = r2(181);
          t3.propagation = n2.PropagationAPI.getInstance();
        }, 874: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTextMapPropagator = void 0;
          class r2 {
            inject(e3, t4) {
            }
            extract(e3, t4) {
              return e3;
            }
            fields() {
              return [];
            }
          }
          t3.NoopTextMapPropagator = r2;
        }, 194: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.defaultTextMapSetter = t3.defaultTextMapGetter = void 0, t3.defaultTextMapGetter = { get(e3, t4) {
            if (null != e3) return e3[t4];
          }, keys: (e3) => null == e3 ? [] : Object.keys(e3) }, t3.defaultTextMapSetter = { set(e3, t4, r2) {
            null != e3 && (e3[t4] = r2);
          } };
        }, 845: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.trace = void 0;
          let n2 = r2(997);
          t3.trace = n2.TraceAPI.getInstance();
        }, 403: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NonRecordingSpan = void 0;
          let n2 = r2(476);
          class a2 {
            constructor(e3 = n2.INVALID_SPAN_CONTEXT) {
              this._spanContext = e3;
            }
            spanContext() {
              return this._spanContext;
            }
            setAttribute(e3, t4) {
              return this;
            }
            setAttributes(e3) {
              return this;
            }
            addEvent(e3, t4) {
              return this;
            }
            setStatus(e3) {
              return this;
            }
            updateName(e3) {
              return this;
            }
            end(e3) {
            }
            isRecording() {
              return false;
            }
            recordException(e3, t4) {
            }
          }
          t3.NonRecordingSpan = a2;
        }, 614: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTracer = void 0;
          let n2 = r2(491), a2 = r2(607), i2 = r2(403), o = r2(139), s = n2.ContextAPI.getInstance();
          class d {
            startSpan(e3, t4, r3 = s.active()) {
              if (null == t4 ? void 0 : t4.root) return new i2.NonRecordingSpan();
              let n3 = r3 && (0, a2.getSpanContext)(r3);
              return "object" == typeof n3 && "string" == typeof n3.spanId && "string" == typeof n3.traceId && "number" == typeof n3.traceFlags && (0, o.isSpanContextValid)(n3) ? new i2.NonRecordingSpan(n3) : new i2.NonRecordingSpan();
            }
            startActiveSpan(e3, t4, r3, n3) {
              let i3, o2, d2;
              if (arguments.length < 2) return;
              2 == arguments.length ? d2 = t4 : 3 == arguments.length ? (i3 = t4, d2 = r3) : (i3 = t4, o2 = r3, d2 = n3);
              let l = null != o2 ? o2 : s.active(), u = this.startSpan(e3, i3, l), c = (0, a2.setSpan)(l, u);
              return s.with(c, d2, void 0, u);
            }
          }
          t3.NoopTracer = d;
        }, 124: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTracerProvider = void 0;
          let n2 = r2(614);
          class a2 {
            getTracer(e3, t4, r3) {
              return new n2.NoopTracer();
            }
          }
          t3.NoopTracerProvider = a2;
        }, 125: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ProxyTracer = void 0;
          let n2 = new (r2(614)).NoopTracer();
          class a2 {
            constructor(e3, t4, r3, n3) {
              this._provider = e3, this.name = t4, this.version = r3, this.options = n3;
            }
            startSpan(e3, t4, r3) {
              return this._getTracer().startSpan(e3, t4, r3);
            }
            startActiveSpan(e3, t4, r3, n3) {
              let a3 = this._getTracer();
              return Reflect.apply(a3.startActiveSpan, a3, arguments);
            }
            _getTracer() {
              if (this._delegate) return this._delegate;
              let e3 = this._provider.getDelegateTracer(this.name, this.version, this.options);
              return e3 ? (this._delegate = e3, this._delegate) : n2;
            }
          }
          t3.ProxyTracer = a2;
        }, 846: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ProxyTracerProvider = void 0;
          let n2 = r2(125), a2 = new (r2(124)).NoopTracerProvider();
          class i2 {
            getTracer(e3, t4, r3) {
              var a3;
              return null !== (a3 = this.getDelegateTracer(e3, t4, r3)) && void 0 !== a3 ? a3 : new n2.ProxyTracer(this, e3, t4, r3);
            }
            getDelegate() {
              var e3;
              return null !== (e3 = this._delegate) && void 0 !== e3 ? e3 : a2;
            }
            setDelegate(e3) {
              this._delegate = e3;
            }
            getDelegateTracer(e3, t4, r3) {
              var n3;
              return null === (n3 = this._delegate) || void 0 === n3 ? void 0 : n3.getTracer(e3, t4, r3);
            }
          }
          t3.ProxyTracerProvider = i2;
        }, 996: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.SamplingDecision = void 0, function(e3) {
            e3[e3.NOT_RECORD = 0] = "NOT_RECORD", e3[e3.RECORD = 1] = "RECORD", e3[e3.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
          }(t3.SamplingDecision || (t3.SamplingDecision = {}));
        }, 607: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.getSpanContext = t3.setSpanContext = t3.deleteSpan = t3.setSpan = t3.getActiveSpan = t3.getSpan = void 0;
          let n2 = r2(780), a2 = r2(403), i2 = r2(491), o = (0, n2.createContextKey)("OpenTelemetry Context Key SPAN");
          function s(e3) {
            return e3.getValue(o) || void 0;
          }
          function d(e3, t4) {
            return e3.setValue(o, t4);
          }
          t3.getSpan = s, t3.getActiveSpan = function() {
            return s(i2.ContextAPI.getInstance().active());
          }, t3.setSpan = d, t3.deleteSpan = function(e3) {
            return e3.deleteValue(o);
          }, t3.setSpanContext = function(e3, t4) {
            return d(e3, new a2.NonRecordingSpan(t4));
          }, t3.getSpanContext = function(e3) {
            var t4;
            return null === (t4 = s(e3)) || void 0 === t4 ? void 0 : t4.spanContext();
          };
        }, 325: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceStateImpl = void 0;
          let n2 = r2(564);
          class a2 {
            constructor(e3) {
              this._internalState = /* @__PURE__ */ new Map(), e3 && this._parse(e3);
            }
            set(e3, t4) {
              let r3 = this._clone();
              return r3._internalState.has(e3) && r3._internalState.delete(e3), r3._internalState.set(e3, t4), r3;
            }
            unset(e3) {
              let t4 = this._clone();
              return t4._internalState.delete(e3), t4;
            }
            get(e3) {
              return this._internalState.get(e3);
            }
            serialize() {
              return this._keys().reduce((e3, t4) => (e3.push(t4 + "=" + this.get(t4)), e3), []).join(",");
            }
            _parse(e3) {
              !(e3.length > 512) && (this._internalState = e3.split(",").reverse().reduce((e4, t4) => {
                let r3 = t4.trim(), a3 = r3.indexOf("=");
                if (-1 !== a3) {
                  let i2 = r3.slice(0, a3), o = r3.slice(a3 + 1, t4.length);
                  (0, n2.validateKey)(i2) && (0, n2.validateValue)(o) && e4.set(i2, o);
                }
                return e4;
              }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
            }
            _keys() {
              return Array.from(this._internalState.keys()).reverse();
            }
            _clone() {
              let e3 = new a2();
              return e3._internalState = new Map(this._internalState), e3;
            }
          }
          t3.TraceStateImpl = a2;
        }, 564: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.validateValue = t3.validateKey = void 0;
          let r2 = "[_0-9a-z-*/]", n2 = `[a-z]${r2}{0,255}`, a2 = `[a-z0-9]${r2}{0,240}@[a-z]${r2}{0,13}`, i2 = RegExp(`^(?:${n2}|${a2})$`), o = /^[ -~]{0,255}[!-~]$/, s = /,|=/;
          t3.validateKey = function(e3) {
            return i2.test(e3);
          }, t3.validateValue = function(e3) {
            return o.test(e3) && !s.test(e3);
          };
        }, 98: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.createTraceState = void 0;
          let n2 = r2(325);
          t3.createTraceState = function(e3) {
            return new n2.TraceStateImpl(e3);
          };
        }, 476: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.INVALID_SPAN_CONTEXT = t3.INVALID_TRACEID = t3.INVALID_SPANID = void 0;
          let n2 = r2(475);
          t3.INVALID_SPANID = "0000000000000000", t3.INVALID_TRACEID = "00000000000000000000000000000000", t3.INVALID_SPAN_CONTEXT = { traceId: t3.INVALID_TRACEID, spanId: t3.INVALID_SPANID, traceFlags: n2.TraceFlags.NONE };
        }, 357: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.SpanKind = void 0, function(e3) {
            e3[e3.INTERNAL = 0] = "INTERNAL", e3[e3.SERVER = 1] = "SERVER", e3[e3.CLIENT = 2] = "CLIENT", e3[e3.PRODUCER = 3] = "PRODUCER", e3[e3.CONSUMER = 4] = "CONSUMER";
          }(t3.SpanKind || (t3.SpanKind = {}));
        }, 139: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.wrapSpanContext = t3.isSpanContextValid = t3.isValidSpanId = t3.isValidTraceId = void 0;
          let n2 = r2(476), a2 = r2(403), i2 = /^([0-9a-f]{32})$/i, o = /^[0-9a-f]{16}$/i;
          function s(e3) {
            return i2.test(e3) && e3 !== n2.INVALID_TRACEID;
          }
          function d(e3) {
            return o.test(e3) && e3 !== n2.INVALID_SPANID;
          }
          t3.isValidTraceId = s, t3.isValidSpanId = d, t3.isSpanContextValid = function(e3) {
            return s(e3.traceId) && d(e3.spanId);
          }, t3.wrapSpanContext = function(e3) {
            return new a2.NonRecordingSpan(e3);
          };
        }, 847: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.SpanStatusCode = void 0, function(e3) {
            e3[e3.UNSET = 0] = "UNSET", e3[e3.OK = 1] = "OK", e3[e3.ERROR = 2] = "ERROR";
          }(t3.SpanStatusCode || (t3.SpanStatusCode = {}));
        }, 475: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceFlags = void 0, function(e3) {
            e3[e3.NONE = 0] = "NONE", e3[e3.SAMPLED = 1] = "SAMPLED";
          }(t3.TraceFlags || (t3.TraceFlags = {}));
        }, 521: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.VERSION = void 0, t3.VERSION = "1.6.0";
        } }, n = {};
        function a(e2) {
          var r2 = n[e2];
          if (void 0 !== r2) return r2.exports;
          var i2 = n[e2] = { exports: {} }, o = true;
          try {
            t2[e2].call(i2.exports, i2, i2.exports, a), o = false;
          } finally {
            o && delete n[e2];
          }
          return i2.exports;
        }
        a.ab = "//";
        var i = {};
        (() => {
          Object.defineProperty(i, "__esModule", { value: true }), i.trace = i.propagation = i.metrics = i.diag = i.context = i.INVALID_SPAN_CONTEXT = i.INVALID_TRACEID = i.INVALID_SPANID = i.isValidSpanId = i.isValidTraceId = i.isSpanContextValid = i.createTraceState = i.TraceFlags = i.SpanStatusCode = i.SpanKind = i.SamplingDecision = i.ProxyTracerProvider = i.ProxyTracer = i.defaultTextMapSetter = i.defaultTextMapGetter = i.ValueType = i.createNoopMeter = i.DiagLogLevel = i.DiagConsoleLogger = i.ROOT_CONTEXT = i.createContextKey = i.baggageEntryMetadataFromString = void 0;
          var e2 = a(369);
          Object.defineProperty(i, "baggageEntryMetadataFromString", { enumerable: true, get: function() {
            return e2.baggageEntryMetadataFromString;
          } });
          var t3 = a(780);
          Object.defineProperty(i, "createContextKey", { enumerable: true, get: function() {
            return t3.createContextKey;
          } }), Object.defineProperty(i, "ROOT_CONTEXT", { enumerable: true, get: function() {
            return t3.ROOT_CONTEXT;
          } });
          var r2 = a(972);
          Object.defineProperty(i, "DiagConsoleLogger", { enumerable: true, get: function() {
            return r2.DiagConsoleLogger;
          } });
          var n2 = a(957);
          Object.defineProperty(i, "DiagLogLevel", { enumerable: true, get: function() {
            return n2.DiagLogLevel;
          } });
          var o = a(102);
          Object.defineProperty(i, "createNoopMeter", { enumerable: true, get: function() {
            return o.createNoopMeter;
          } });
          var s = a(901);
          Object.defineProperty(i, "ValueType", { enumerable: true, get: function() {
            return s.ValueType;
          } });
          var d = a(194);
          Object.defineProperty(i, "defaultTextMapGetter", { enumerable: true, get: function() {
            return d.defaultTextMapGetter;
          } }), Object.defineProperty(i, "defaultTextMapSetter", { enumerable: true, get: function() {
            return d.defaultTextMapSetter;
          } });
          var l = a(125);
          Object.defineProperty(i, "ProxyTracer", { enumerable: true, get: function() {
            return l.ProxyTracer;
          } });
          var u = a(846);
          Object.defineProperty(i, "ProxyTracerProvider", { enumerable: true, get: function() {
            return u.ProxyTracerProvider;
          } });
          var c = a(996);
          Object.defineProperty(i, "SamplingDecision", { enumerable: true, get: function() {
            return c.SamplingDecision;
          } });
          var p = a(357);
          Object.defineProperty(i, "SpanKind", { enumerable: true, get: function() {
            return p.SpanKind;
          } });
          var _ = a(847);
          Object.defineProperty(i, "SpanStatusCode", { enumerable: true, get: function() {
            return _.SpanStatusCode;
          } });
          var f = a(475);
          Object.defineProperty(i, "TraceFlags", { enumerable: true, get: function() {
            return f.TraceFlags;
          } });
          var h = a(98);
          Object.defineProperty(i, "createTraceState", { enumerable: true, get: function() {
            return h.createTraceState;
          } });
          var g = a(139);
          Object.defineProperty(i, "isSpanContextValid", { enumerable: true, get: function() {
            return g.isSpanContextValid;
          } }), Object.defineProperty(i, "isValidTraceId", { enumerable: true, get: function() {
            return g.isValidTraceId;
          } }), Object.defineProperty(i, "isValidSpanId", { enumerable: true, get: function() {
            return g.isValidSpanId;
          } });
          var m = a(476);
          Object.defineProperty(i, "INVALID_SPANID", { enumerable: true, get: function() {
            return m.INVALID_SPANID;
          } }), Object.defineProperty(i, "INVALID_TRACEID", { enumerable: true, get: function() {
            return m.INVALID_TRACEID;
          } }), Object.defineProperty(i, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function() {
            return m.INVALID_SPAN_CONTEXT;
          } });
          let v = a(67);
          Object.defineProperty(i, "context", { enumerable: true, get: function() {
            return v.context;
          } });
          let y = a(506);
          Object.defineProperty(i, "diag", { enumerable: true, get: function() {
            return y.diag;
          } });
          let w = a(886);
          Object.defineProperty(i, "metrics", { enumerable: true, get: function() {
            return w.metrics;
          } });
          let b = a(939);
          Object.defineProperty(i, "propagation", { enumerable: true, get: function() {
            return b.propagation;
          } });
          let x = a(845);
          Object.defineProperty(i, "trace", { enumerable: true, get: function() {
            return x.trace;
          } }), i.default = { context: v.context, diag: y.diag, metrics: w.metrics, propagation: b.propagation, trace: x.trace };
        })(), e.exports = i;
      })();
    }, 503: (e) => {
      (() => {
        "use strict";
        "undefined" != typeof __nccwpck_require__ && (__nccwpck_require__.ab = "//");
        var t = {};
        (() => {
          t.parse = function(t2, r2) {
            if ("string" != typeof t2) throw TypeError("argument str must be a string");
            for (var a2 = {}, i = t2.split(n), o = (r2 || {}).decode || e2, s = 0; s < i.length; s++) {
              var d = i[s], l = d.indexOf("=");
              if (!(l < 0)) {
                var u = d.substr(0, l).trim(), c = d.substr(++l, d.length).trim();
                '"' == c[0] && (c = c.slice(1, -1)), void 0 == a2[u] && (a2[u] = function(e3, t3) {
                  try {
                    return t3(e3);
                  } catch (t4) {
                    return e3;
                  }
                }(c, o));
              }
            }
            return a2;
          }, t.serialize = function(e3, t2, n2) {
            var i = n2 || {}, o = i.encode || r;
            if ("function" != typeof o) throw TypeError("option encode is invalid");
            if (!a.test(e3)) throw TypeError("argument name is invalid");
            var s = o(t2);
            if (s && !a.test(s)) throw TypeError("argument val is invalid");
            var d = e3 + "=" + s;
            if (null != i.maxAge) {
              var l = i.maxAge - 0;
              if (isNaN(l) || !isFinite(l)) throw TypeError("option maxAge is invalid");
              d += "; Max-Age=" + Math.floor(l);
            }
            if (i.domain) {
              if (!a.test(i.domain)) throw TypeError("option domain is invalid");
              d += "; Domain=" + i.domain;
            }
            if (i.path) {
              if (!a.test(i.path)) throw TypeError("option path is invalid");
              d += "; Path=" + i.path;
            }
            if (i.expires) {
              if ("function" != typeof i.expires.toUTCString) throw TypeError("option expires is invalid");
              d += "; Expires=" + i.expires.toUTCString();
            }
            if (i.httpOnly && (d += "; HttpOnly"), i.secure && (d += "; Secure"), i.sameSite) switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
              case true:
              case "strict":
                d += "; SameSite=Strict";
                break;
              case "lax":
                d += "; SameSite=Lax";
                break;
              case "none":
                d += "; SameSite=None";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
            return d;
          };
          var e2 = decodeURIComponent, r = encodeURIComponent, n = /; */, a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        })(), e.exports = t;
      })();
    }, 541: (e) => {
      (() => {
        "use strict";
        var t = { 993: (e2) => {
          var t2 = Object.prototype.hasOwnProperty, r2 = "~";
          function n2() {
          }
          function a2(e3, t3, r3) {
            this.fn = e3, this.context = t3, this.once = r3 || false;
          }
          function i(e3, t3, n3, i2, o2) {
            if ("function" != typeof n3) throw TypeError("The listener must be a function");
            var s2 = new a2(n3, i2 || e3, o2), d = r2 ? r2 + t3 : t3;
            return e3._events[d] ? e3._events[d].fn ? e3._events[d] = [e3._events[d], s2] : e3._events[d].push(s2) : (e3._events[d] = s2, e3._eventsCount++), e3;
          }
          function o(e3, t3) {
            0 == --e3._eventsCount ? e3._events = new n2() : delete e3._events[t3];
          }
          function s() {
            this._events = new n2(), this._eventsCount = 0;
          }
          Object.create && (n2.prototype = /* @__PURE__ */ Object.create(null), new n2().__proto__ || (r2 = false)), s.prototype.eventNames = function() {
            var e3, n3, a3 = [];
            if (0 === this._eventsCount) return a3;
            for (n3 in e3 = this._events) t2.call(e3, n3) && a3.push(r2 ? n3.slice(1) : n3);
            return Object.getOwnPropertySymbols ? a3.concat(Object.getOwnPropertySymbols(e3)) : a3;
          }, s.prototype.listeners = function(e3) {
            var t3 = r2 ? r2 + e3 : e3, n3 = this._events[t3];
            if (!n3) return [];
            if (n3.fn) return [n3.fn];
            for (var a3 = 0, i2 = n3.length, o2 = Array(i2); a3 < i2; a3++) o2[a3] = n3[a3].fn;
            return o2;
          }, s.prototype.listenerCount = function(e3) {
            var t3 = r2 ? r2 + e3 : e3, n3 = this._events[t3];
            return n3 ? n3.fn ? 1 : n3.length : 0;
          }, s.prototype.emit = function(e3, t3, n3, a3, i2, o2) {
            var s2 = r2 ? r2 + e3 : e3;
            if (!this._events[s2]) return false;
            var d, l, u = this._events[s2], c = arguments.length;
            if (u.fn) {
              switch (u.once && this.removeListener(e3, u.fn, void 0, true), c) {
                case 1:
                  return u.fn.call(u.context), true;
                case 2:
                  return u.fn.call(u.context, t3), true;
                case 3:
                  return u.fn.call(u.context, t3, n3), true;
                case 4:
                  return u.fn.call(u.context, t3, n3, a3), true;
                case 5:
                  return u.fn.call(u.context, t3, n3, a3, i2), true;
                case 6:
                  return u.fn.call(u.context, t3, n3, a3, i2, o2), true;
              }
              for (l = 1, d = Array(c - 1); l < c; l++) d[l - 1] = arguments[l];
              u.fn.apply(u.context, d);
            } else {
              var p, _ = u.length;
              for (l = 0; l < _; l++) switch (u[l].once && this.removeListener(e3, u[l].fn, void 0, true), c) {
                case 1:
                  u[l].fn.call(u[l].context);
                  break;
                case 2:
                  u[l].fn.call(u[l].context, t3);
                  break;
                case 3:
                  u[l].fn.call(u[l].context, t3, n3);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t3, n3, a3);
                  break;
                default:
                  if (!d) for (p = 1, d = Array(c - 1); p < c; p++) d[p - 1] = arguments[p];
                  u[l].fn.apply(u[l].context, d);
              }
            }
            return true;
          }, s.prototype.on = function(e3, t3, r3) {
            return i(this, e3, t3, r3, false);
          }, s.prototype.once = function(e3, t3, r3) {
            return i(this, e3, t3, r3, true);
          }, s.prototype.removeListener = function(e3, t3, n3, a3) {
            var i2 = r2 ? r2 + e3 : e3;
            if (!this._events[i2]) return this;
            if (!t3) return o(this, i2), this;
            var s2 = this._events[i2];
            if (s2.fn) s2.fn !== t3 || a3 && !s2.once || n3 && s2.context !== n3 || o(this, i2);
            else {
              for (var d = 0, l = [], u = s2.length; d < u; d++) (s2[d].fn !== t3 || a3 && !s2[d].once || n3 && s2[d].context !== n3) && l.push(s2[d]);
              l.length ? this._events[i2] = 1 === l.length ? l[0] : l : o(this, i2);
            }
            return this;
          }, s.prototype.removeAllListeners = function(e3) {
            var t3;
            return e3 ? (t3 = r2 ? r2 + e3 : e3, this._events[t3] && o(this, t3)) : (this._events = new n2(), this._eventsCount = 0), this;
          }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r2, s.EventEmitter = s, e2.exports = s;
        }, 213: (e2) => {
          e2.exports = (e3, t2) => (t2 = t2 || (() => {
          }), e3.then((e4) => new Promise((e5) => {
            e5(t2());
          }).then(() => e4), (e4) => new Promise((e5) => {
            e5(t2());
          }).then(() => {
            throw e4;
          })));
        }, 574: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.default = function(e3, t3, r2) {
            let n2 = 0, a2 = e3.length;
            for (; a2 > 0; ) {
              let i = a2 / 2 | 0, o = n2 + i;
              0 >= r2(e3[o], t3) ? (n2 = ++o, a2 -= i + 1) : a2 = i;
            }
            return n2;
          };
        }, 821: (e2, t2, r2) => {
          Object.defineProperty(t2, "__esModule", { value: true });
          let n2 = r2(574);
          class a2 {
            constructor() {
              this._queue = [];
            }
            enqueue(e3, t3) {
              let r3 = { priority: (t3 = Object.assign({ priority: 0 }, t3)).priority, run: e3 };
              if (this.size && this._queue[this.size - 1].priority >= t3.priority) {
                this._queue.push(r3);
                return;
              }
              let a3 = n2.default(this._queue, r3, (e4, t4) => t4.priority - e4.priority);
              this._queue.splice(a3, 0, r3);
            }
            dequeue() {
              let e3 = this._queue.shift();
              return null == e3 ? void 0 : e3.run;
            }
            filter(e3) {
              return this._queue.filter((t3) => t3.priority === e3.priority).map((e4) => e4.run);
            }
            get size() {
              return this._queue.length;
            }
          }
          t2.default = a2;
        }, 816: (e2, t2, r2) => {
          let n2 = r2(213);
          class a2 extends Error {
            constructor(e3) {
              super(e3), this.name = "TimeoutError";
            }
          }
          let i = (e3, t3, r3) => new Promise((i2, o) => {
            if ("number" != typeof t3 || t3 < 0) throw TypeError("Expected `milliseconds` to be a positive number");
            if (t3 === 1 / 0) {
              i2(e3);
              return;
            }
            let s = setTimeout(() => {
              if ("function" == typeof r3) {
                try {
                  i2(r3());
                } catch (e4) {
                  o(e4);
                }
                return;
              }
              let n3 = "string" == typeof r3 ? r3 : `Promise timed out after ${t3} milliseconds`, s2 = r3 instanceof Error ? r3 : new a2(n3);
              "function" == typeof e3.cancel && e3.cancel(), o(s2);
            }, t3);
            n2(e3.then(i2, o), () => {
              clearTimeout(s);
            });
          });
          e2.exports = i, e2.exports.default = i, e2.exports.TimeoutError = a2;
        } }, r = {};
        function n(e2) {
          var a2 = r[e2];
          if (void 0 !== a2) return a2.exports;
          var i = r[e2] = { exports: {} }, o = true;
          try {
            t[e2](i, i.exports, n), o = false;
          } finally {
            o && delete r[e2];
          }
          return i.exports;
        }
        n.ab = "//";
        var a = {};
        (() => {
          Object.defineProperty(a, "__esModule", { value: true });
          let e2 = n(993), t2 = n(816), r2 = n(821), i = () => {
          }, o = new t2.TimeoutError();
          class s extends e2 {
            constructor(e3) {
              var t3, n2, a2, o2;
              if (super(), this._intervalCount = 0, this._intervalEnd = 0, this._pendingCount = 0, this._resolveEmpty = i, this._resolveIdle = i, !("number" == typeof (e3 = Object.assign({ carryoverConcurrencyCount: false, intervalCap: 1 / 0, interval: 0, concurrency: 1 / 0, autoStart: true, queueClass: r2.default }, e3)).intervalCap && e3.intervalCap >= 1)) throw TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null !== (n2 = null === (t3 = e3.intervalCap) || void 0 === t3 ? void 0 : t3.toString()) && void 0 !== n2 ? n2 : ""}\` (${typeof e3.intervalCap})`);
              if (void 0 === e3.interval || !(Number.isFinite(e3.interval) && e3.interval >= 0)) throw TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null !== (o2 = null === (a2 = e3.interval) || void 0 === a2 ? void 0 : a2.toString()) && void 0 !== o2 ? o2 : ""}\` (${typeof e3.interval})`);
              this._carryoverConcurrencyCount = e3.carryoverConcurrencyCount, this._isIntervalIgnored = e3.intervalCap === 1 / 0 || 0 === e3.interval, this._intervalCap = e3.intervalCap, this._interval = e3.interval, this._queue = new e3.queueClass(), this._queueClass = e3.queueClass, this.concurrency = e3.concurrency, this._timeout = e3.timeout, this._throwOnTimeout = true === e3.throwOnTimeout, this._isPaused = false === e3.autoStart;
            }
            get _doesIntervalAllowAnother() {
              return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
            }
            get _doesConcurrentAllowAnother() {
              return this._pendingCount < this._concurrency;
            }
            _next() {
              this._pendingCount--, this._tryToStartAnother(), this.emit("next");
            }
            _resolvePromises() {
              this._resolveEmpty(), this._resolveEmpty = i, 0 === this._pendingCount && (this._resolveIdle(), this._resolveIdle = i, this.emit("idle"));
            }
            _onResumeInterval() {
              this._onInterval(), this._initializeIntervalIfNeeded(), this._timeoutId = void 0;
            }
            _isIntervalPaused() {
              let e3 = Date.now();
              if (void 0 === this._intervalId) {
                let t3 = this._intervalEnd - e3;
                if (!(t3 < 0)) return void 0 === this._timeoutId && (this._timeoutId = setTimeout(() => {
                  this._onResumeInterval();
                }, t3)), true;
                this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
              }
              return false;
            }
            _tryToStartAnother() {
              if (0 === this._queue.size) return this._intervalId && clearInterval(this._intervalId), this._intervalId = void 0, this._resolvePromises(), false;
              if (!this._isPaused) {
                let e3 = !this._isIntervalPaused();
                if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                  let t3 = this._queue.dequeue();
                  return !!t3 && (this.emit("active"), t3(), e3 && this._initializeIntervalIfNeeded(), true);
                }
              }
              return false;
            }
            _initializeIntervalIfNeeded() {
              this._isIntervalIgnored || void 0 !== this._intervalId || (this._intervalId = setInterval(() => {
                this._onInterval();
              }, this._interval), this._intervalEnd = Date.now() + this._interval);
            }
            _onInterval() {
              0 === this._intervalCount && 0 === this._pendingCount && this._intervalId && (clearInterval(this._intervalId), this._intervalId = void 0), this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0, this._processQueue();
            }
            _processQueue() {
              for (; this._tryToStartAnother(); ) ;
            }
            get concurrency() {
              return this._concurrency;
            }
            set concurrency(e3) {
              if (!("number" == typeof e3 && e3 >= 1)) throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e3}\` (${typeof e3})`);
              this._concurrency = e3, this._processQueue();
            }
            async add(e3, r3 = {}) {
              return new Promise((n2, a2) => {
                let i2 = async () => {
                  this._pendingCount++, this._intervalCount++;
                  try {
                    let i3 = void 0 === this._timeout && void 0 === r3.timeout ? e3() : t2.default(Promise.resolve(e3()), void 0 === r3.timeout ? this._timeout : r3.timeout, () => {
                      (void 0 === r3.throwOnTimeout ? this._throwOnTimeout : r3.throwOnTimeout) && a2(o);
                    });
                    n2(await i3);
                  } catch (e4) {
                    a2(e4);
                  }
                  this._next();
                };
                this._queue.enqueue(i2, r3), this._tryToStartAnother(), this.emit("add");
              });
            }
            async addAll(e3, t3) {
              return Promise.all(e3.map(async (e4) => this.add(e4, t3)));
            }
            start() {
              return this._isPaused && (this._isPaused = false, this._processQueue()), this;
            }
            pause() {
              this._isPaused = true;
            }
            clear() {
              this._queue = new this._queueClass();
            }
            async onEmpty() {
              if (0 !== this._queue.size) return new Promise((e3) => {
                let t3 = this._resolveEmpty;
                this._resolveEmpty = () => {
                  t3(), e3();
                };
              });
            }
            async onIdle() {
              if (0 !== this._pendingCount || 0 !== this._queue.size) return new Promise((e3) => {
                let t3 = this._resolveIdle;
                this._resolveIdle = () => {
                  t3(), e3();
                };
              });
            }
            get size() {
              return this._queue.size;
            }
            sizeBy(e3) {
              return this._queue.filter(e3).length;
            }
            get pending() {
              return this._pendingCount;
            }
            get isPaused() {
              return this._isPaused;
            }
            get timeout() {
              return this._timeout;
            }
            set timeout(e3) {
              this._timeout = e3;
            }
          }
          a.default = s;
        })(), e.exports = a;
      })();
    }, 544: (e, t) => {
      "use strict";
      var r = { H: null, A: null };
      function n(e2) {
        var t2 = "https://react.dev/errors/" + e2;
        if (1 < arguments.length) {
          t2 += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var r2 = 2; r2 < arguments.length; r2++) t2 += "&args[]=" + encodeURIComponent(arguments[r2]);
        }
        return "Minified React error #" + e2 + "; visit " + t2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var a = Array.isArray, i = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), f = Symbol.iterator, h = Object.prototype.hasOwnProperty, g = Object.assign;
      function m(e2, t2, r2, n2, a2, o2) {
        return { $$typeof: i, type: e2, key: t2, ref: void 0 !== (r2 = o2.ref) ? r2 : null, props: o2 };
      }
      function v(e2) {
        return "object" == typeof e2 && null !== e2 && e2.$$typeof === i;
      }
      var y = /\/+/g;
      function w(e2, t2) {
        var r2, n2;
        return "object" == typeof e2 && null !== e2 && null != e2.key ? (r2 = "" + e2.key, n2 = { "=": "=0", ":": "=2" }, "$" + r2.replace(/[=:]/g, function(e3) {
          return n2[e3];
        })) : t2.toString(36);
      }
      function b() {
      }
      function x(e2, t2, r2) {
        if (null == e2) return e2;
        var s2 = [], d2 = 0;
        return !function e3(t3, r3, s3, d3, l2) {
          var u2, c2, p2, h2 = typeof t3;
          ("undefined" === h2 || "boolean" === h2) && (t3 = null);
          var g2 = false;
          if (null === t3) g2 = true;
          else switch (h2) {
            case "bigint":
            case "string":
            case "number":
              g2 = true;
              break;
            case "object":
              switch (t3.$$typeof) {
                case i:
                case o:
                  g2 = true;
                  break;
                case _:
                  return e3((g2 = t3._init)(t3._payload), r3, s3, d3, l2);
              }
          }
          if (g2) return l2 = l2(t3), g2 = "" === d3 ? "." + w(t3, 0) : d3, a(l2) ? (s3 = "", null != g2 && (s3 = g2.replace(y, "$&/") + "/"), e3(l2, r3, s3, "", function(e4) {
            return e4;
          })) : null != l2 && (v(l2) && (u2 = l2, c2 = s3 + (null == l2.key || t3 && t3.key === l2.key ? "" : ("" + l2.key).replace(y, "$&/") + "/") + g2, l2 = m(u2.type, c2, void 0, void 0, void 0, u2.props)), r3.push(l2)), 1;
          g2 = 0;
          var x2 = "" === d3 ? "." : d3 + ":";
          if (a(t3)) for (var S2 = 0; S2 < t3.length; S2++) h2 = x2 + w(d3 = t3[S2], S2), g2 += e3(d3, r3, s3, h2, l2);
          else if ("function" == typeof (S2 = null === (p2 = t3) || "object" != typeof p2 ? null : "function" == typeof (p2 = f && p2[f] || p2["@@iterator"]) ? p2 : null)) for (t3 = S2.call(t3), S2 = 0; !(d3 = t3.next()).done; ) h2 = x2 + w(d3 = d3.value, S2++), g2 += e3(d3, r3, s3, h2, l2);
          else if ("object" === h2) {
            if ("function" == typeof t3.then) return e3(function(e4) {
              switch (e4.status) {
                case "fulfilled":
                  return e4.value;
                case "rejected":
                  throw e4.reason;
                default:
                  switch ("string" == typeof e4.status ? e4.then(b, b) : (e4.status = "pending", e4.then(function(t4) {
                    "pending" === e4.status && (e4.status = "fulfilled", e4.value = t4);
                  }, function(t4) {
                    "pending" === e4.status && (e4.status = "rejected", e4.reason = t4);
                  })), e4.status) {
                    case "fulfilled":
                      return e4.value;
                    case "rejected":
                      throw e4.reason;
                  }
              }
              throw e4;
            }(t3), r3, s3, d3, l2);
            throw Error(n(31, "[object Object]" === (r3 = String(t3)) ? "object with keys {" + Object.keys(t3).join(", ") + "}" : r3));
          }
          return g2;
        }(e2, s2, "", "", function(e3) {
          return t2.call(r2, e3, d2++);
        }), s2;
      }
      function S(e2) {
        if (-1 === e2._status) {
          var t2 = e2._result;
          (t2 = t2()).then(function(t3) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 1, e2._result = t3);
          }, function(t3) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 2, e2._result = t3);
          }), -1 === e2._status && (e2._status = 0, e2._result = t2);
        }
        if (1 === e2._status) return e2._result.default;
        throw e2._result;
      }
      function C() {
        return /* @__PURE__ */ new WeakMap();
      }
      function P() {
        return { s: 0, v: void 0, o: null, p: null };
      }
      t.Children = { map: x, forEach: function(e2, t2, r2) {
        x(e2, function() {
          t2.apply(this, arguments);
        }, r2);
      }, count: function(e2) {
        var t2 = 0;
        return x(e2, function() {
          t2++;
        }), t2;
      }, toArray: function(e2) {
        return x(e2, function(e3) {
          return e3;
        }) || [];
      }, only: function(e2) {
        if (!v(e2)) throw Error(n(143));
        return e2;
      } }, t.Fragment = s, t.Profiler = l, t.StrictMode = d, t.Suspense = c, t.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, t.cache = function(e2) {
        return function() {
          var t2 = r.A;
          if (!t2) return e2.apply(null, arguments);
          var n2 = t2.getCacheForType(C);
          void 0 === (t2 = n2.get(e2)) && (t2 = P(), n2.set(e2, t2)), n2 = 0;
          for (var a2 = arguments.length; n2 < a2; n2++) {
            var i2 = arguments[n2];
            if ("function" == typeof i2 || "object" == typeof i2 && null !== i2) {
              var o2 = t2.o;
              null === o2 && (t2.o = o2 = /* @__PURE__ */ new WeakMap()), void 0 === (t2 = o2.get(i2)) && (t2 = P(), o2.set(i2, t2));
            } else null === (o2 = t2.p) && (t2.p = o2 = /* @__PURE__ */ new Map()), void 0 === (t2 = o2.get(i2)) && (t2 = P(), o2.set(i2, t2));
          }
          if (1 === t2.s) return t2.v;
          if (2 === t2.s) throw t2.v;
          try {
            var s2 = e2.apply(null, arguments);
            return (n2 = t2).s = 1, n2.v = s2;
          } catch (e3) {
            throw (s2 = t2).s = 2, s2.v = e3, e3;
          }
        };
      }, t.cloneElement = function(e2, t2, r2) {
        if (null == e2) throw Error(n(267, e2));
        var a2 = g({}, e2.props), i2 = e2.key, o2 = void 0;
        if (null != t2) for (s2 in void 0 !== t2.ref && (o2 = void 0), void 0 !== t2.key && (i2 = "" + t2.key), t2) h.call(t2, s2) && "key" !== s2 && "__self" !== s2 && "__source" !== s2 && ("ref" !== s2 || void 0 !== t2.ref) && (a2[s2] = t2[s2]);
        var s2 = arguments.length - 2;
        if (1 === s2) a2.children = r2;
        else if (1 < s2) {
          for (var d2 = Array(s2), l2 = 0; l2 < s2; l2++) d2[l2] = arguments[l2 + 2];
          a2.children = d2;
        }
        return m(e2.type, i2, void 0, void 0, o2, a2);
      }, t.createElement = function(e2, t2, r2) {
        var n2, a2 = {}, i2 = null;
        if (null != t2) for (n2 in void 0 !== t2.key && (i2 = "" + t2.key), t2) h.call(t2, n2) && "key" !== n2 && "__self" !== n2 && "__source" !== n2 && (a2[n2] = t2[n2]);
        var o2 = arguments.length - 2;
        if (1 === o2) a2.children = r2;
        else if (1 < o2) {
          for (var s2 = Array(o2), d2 = 0; d2 < o2; d2++) s2[d2] = arguments[d2 + 2];
          a2.children = s2;
        }
        if (e2 && e2.defaultProps) for (n2 in o2 = e2.defaultProps) void 0 === a2[n2] && (a2[n2] = o2[n2]);
        return m(e2, i2, void 0, void 0, null, a2);
      }, t.createRef = function() {
        return { current: null };
      }, t.forwardRef = function(e2) {
        return { $$typeof: u, render: e2 };
      }, t.isValidElement = v, t.lazy = function(e2) {
        return { $$typeof: _, _payload: { _status: -1, _result: e2 }, _init: S };
      }, t.memo = function(e2, t2) {
        return { $$typeof: p, type: e2, compare: void 0 === t2 ? null : t2 };
      }, t.use = function(e2) {
        return r.H.use(e2);
      }, t.useCallback = function(e2, t2) {
        return r.H.useCallback(e2, t2);
      }, t.useDebugValue = function() {
      }, t.useId = function() {
        return r.H.useId();
      }, t.useMemo = function(e2, t2) {
        return r.H.useMemo(e2, t2);
      }, t.version = "19.0.0-rc-66855b96-20241106";
    }, 886: (e, t, r) => {
      "use strict";
      e.exports = r(544);
    }, 113: (e, t, r) => {
      var n;
      (() => {
        var a = { 226: function(a2, i2) {
          !function(o2, s2) {
            "use strict";
            var d = "function", l = "undefined", u = "object", c = "string", p = "major", _ = "model", f = "name", h = "type", g = "vendor", m = "version", v = "architecture", y = "console", w = "mobile", b = "tablet", x = "smarttv", S = "wearable", C = "embedded", P = "Amazon", T = "Apple", E = "ASUS", R = "BlackBerry", O = "Browser", M = "Chrome", L = "Firefox", N = "Google", A = "Huawei", I = "Microsoft", k = "Motorola", q = "Opera", D = "Samsung", j = "Sharp", B = "Sony", U = "Xiaomi", G = "Zebra", V = "Facebook", H = "Chromium OS", $ = "Mac OS", z = function(e2, t2) {
              var r2 = {};
              for (var n2 in e2) t2[n2] && t2[n2].length % 2 == 0 ? r2[n2] = t2[n2].concat(e2[n2]) : r2[n2] = e2[n2];
              return r2;
            }, K = function(e2) {
              for (var t2 = {}, r2 = 0; r2 < e2.length; r2++) t2[e2[r2].toUpperCase()] = e2[r2];
              return t2;
            }, F = function(e2, t2) {
              return typeof e2 === c && -1 !== W(t2).indexOf(W(e2));
            }, W = function(e2) {
              return e2.toLowerCase();
            }, Z = function(e2, t2) {
              if (typeof e2 === c) return e2 = e2.replace(/^\s\s*/, ""), typeof t2 === l ? e2 : e2.substring(0, 350);
            }, X = function(e2, t2) {
              for (var r2, n2, a3, i3, o3, l2, c2 = 0; c2 < t2.length && !o3; ) {
                var p2 = t2[c2], _2 = t2[c2 + 1];
                for (r2 = n2 = 0; r2 < p2.length && !o3 && p2[r2]; ) if (o3 = p2[r2++].exec(e2)) for (a3 = 0; a3 < _2.length; a3++) l2 = o3[++n2], typeof (i3 = _2[a3]) === u && i3.length > 0 ? 2 === i3.length ? typeof i3[1] == d ? this[i3[0]] = i3[1].call(this, l2) : this[i3[0]] = i3[1] : 3 === i3.length ? typeof i3[1] !== d || i3[1].exec && i3[1].test ? this[i3[0]] = l2 ? l2.replace(i3[1], i3[2]) : void 0 : this[i3[0]] = l2 ? i3[1].call(this, l2, i3[2]) : void 0 : 4 === i3.length && (this[i3[0]] = l2 ? i3[3].call(this, l2.replace(i3[1], i3[2])) : void 0) : this[i3] = l2 || s2;
                c2 += 2;
              }
            }, Y = function(e2, t2) {
              for (var r2 in t2) if (typeof t2[r2] === u && t2[r2].length > 0) {
                for (var n2 = 0; n2 < t2[r2].length; n2++) if (F(t2[r2][n2], e2)) return "?" === r2 ? s2 : r2;
              } else if (F(t2[r2], e2)) return "?" === r2 ? s2 : r2;
              return e2;
            }, J = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Q = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [f, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [f, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [f, m], [/opios[\/ ]+([\w\.]+)/i], [m, [f, q + " Mini"]], [/\bopr\/([\w\.]+)/i], [m, [f, q]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [f, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [f, "UC" + O]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [m, [f, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [m, [f, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [f, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [f, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [f, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[f, /(.+)/, "$1 Secure " + O], m], [/\bfocus\/([\w\.]+)/i], [m, [f, L + " Focus"]], [/\bopt\/([\w\.]+)/i], [m, [f, q + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [f, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [f, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [f, q + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [f, "MIUI " + O]], [/fxios\/([-\w\.]+)/i], [m, [f, L]], [/\bqihu|(qi?ho?o?|360)browser/i], [[f, "360 " + O]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[f, /(.+)/, "$1 " + O], m], [/(comodo_dragon)\/([\w\.]+)/i], [[f, /_/g, " "], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [f, m], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [f], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[f, V], m], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [f, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [f, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [f, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [f, M + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[f, M + " WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [f, "Android " + O]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [f, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [f, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, f], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [f, [m, Y, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [f, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[f, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [f, L + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [f, m], [/(cobalt)\/([\w\.]+)/i], [f, [m, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[v, "amd64"]], [/(ia32(?=;))/i], [[v, W]], [/((?:i[346]|x)86)[;\)]/i], [[v, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[v, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[v, "armhf"]], [/windows (ce|mobile); ppc;/i], [[v, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[v, /ower/, "", W]], [/(sun4\w)[;\)]/i], [[v, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[v, W]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [_, [g, D], [h, b]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [_, [g, D], [h, w]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [_, [g, T], [h, w]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [_, [g, T], [h, b]], [/(macintosh);/i], [_, [g, T]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [_, [g, j], [h, w]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [_, [g, A], [h, b]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [_, [g, A], [h, w]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[_, /_/g, " "], [g, U], [h, w]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[_, /_/g, " "], [g, U], [h, b]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [_, [g, "OPPO"], [h, w]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [_, [g, "Vivo"], [h, w]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [_, [g, "Realme"], [h, w]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [_, [g, k], [h, w]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [_, [g, k], [h, b]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [_, [g, "LG"], [h, b]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [_, [g, "LG"], [h, w]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [_, [g, "Lenovo"], [h, b]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[_, /_/g, " "], [g, "Nokia"], [h, w]], [/(pixel c)\b/i], [_, [g, N], [h, b]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [_, [g, N], [h, w]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [_, [g, B], [h, w]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[_, "Xperia Tablet"], [g, B], [h, b]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [_, [g, "OnePlus"], [h, w]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [_, [g, P], [h, b]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[_, /(.+)/g, "Fire Phone $1"], [g, P], [h, w]], [/(playbook);[-\w\),; ]+(rim)/i], [_, g, [h, b]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [_, [g, R], [h, w]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [_, [g, E], [h, b]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [_, [g, E], [h, w]], [/(nexus 9)/i], [_, [g, "HTC"], [h, b]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [g, [_, /_/g, " "], [h, w]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [_, [g, "Acer"], [h, b]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [_, [g, "Meizu"], [h, w]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [g, _, [h, w]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [g, _, [h, b]], [/(surface duo)/i], [_, [g, I], [h, b]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [_, [g, "Fairphone"], [h, w]], [/(u304aa)/i], [_, [g, "AT&T"], [h, w]], [/\bsie-(\w*)/i], [_, [g, "Siemens"], [h, w]], [/\b(rct\w+) b/i], [_, [g, "RCA"], [h, b]], [/\b(venue[\d ]{2,7}) b/i], [_, [g, "Dell"], [h, b]], [/\b(q(?:mv|ta)\w+) b/i], [_, [g, "Verizon"], [h, b]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [_, [g, "Barnes & Noble"], [h, b]], [/\b(tm\d{3}\w+) b/i], [_, [g, "NuVision"], [h, b]], [/\b(k88) b/i], [_, [g, "ZTE"], [h, b]], [/\b(nx\d{3}j) b/i], [_, [g, "ZTE"], [h, w]], [/\b(gen\d{3}) b.+49h/i], [_, [g, "Swiss"], [h, w]], [/\b(zur\d{3}) b/i], [_, [g, "Swiss"], [h, b]], [/\b((zeki)?tb.*\b) b/i], [_, [g, "Zeki"], [h, b]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[g, "Dragon Touch"], _, [h, b]], [/\b(ns-?\w{0,9}) b/i], [_, [g, "Insignia"], [h, b]], [/\b((nxa|next)-?\w{0,9}) b/i], [_, [g, "NextBook"], [h, b]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[g, "Voice"], _, [h, w]], [/\b(lvtel\-)?(v1[12]) b/i], [[g, "LvTel"], _, [h, w]], [/\b(ph-1) /i], [_, [g, "Essential"], [h, w]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [_, [g, "Envizen"], [h, b]], [/\b(trio[-\w\. ]+) b/i], [_, [g, "MachSpeed"], [h, b]], [/\btu_(1491) b/i], [_, [g, "Rotor"], [h, b]], [/(shield[\w ]+) b/i], [_, [g, "Nvidia"], [h, b]], [/(sprint) (\w+)/i], [g, _, [h, w]], [/(kin\.[onetw]{3})/i], [[_, /\./g, " "], [g, I], [h, w]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [_, [g, G], [h, b]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [_, [g, G], [h, w]], [/smart-tv.+(samsung)/i], [g, [h, x]], [/hbbtv.+maple;(\d+)/i], [[_, /^/, "SmartTV"], [g, D], [h, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[g, "LG"], [h, x]], [/(apple) ?tv/i], [g, [_, T + " TV"], [h, x]], [/crkey/i], [[_, M + "cast"], [g, N], [h, x]], [/droid.+aft(\w)( bui|\))/i], [_, [g, P], [h, x]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [_, [g, j], [h, x]], [/(bravia[\w ]+)( bui|\))/i], [_, [g, B], [h, x]], [/(mitv-\w{5}) bui/i], [_, [g, U], [h, x]], [/Hbbtv.*(technisat) (.*);/i], [g, _, [h, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[g, Z], [_, Z], [h, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[h, x]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [g, _, [h, y]], [/droid.+; (shield) bui/i], [_, [g, "Nvidia"], [h, y]], [/(playstation [345portablevi]+)/i], [_, [g, B], [h, y]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [_, [g, I], [h, y]], [/((pebble))app/i], [g, _, [h, S]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [_, [g, T], [h, S]], [/droid.+; (glass) \d/i], [_, [g, N], [h, S]], [/droid.+; (wt63?0{2,3})\)/i], [_, [g, G], [h, S]], [/(quest( 2| pro)?)/i], [_, [g, V], [h, S]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [g, [h, C]], [/(aeobc)\b/i], [_, [g, P], [h, C]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [_, [h, w]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [_, [h, b]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[h, b]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[h, w]], [/(android[-\w\. ]{0,9});.+buil/i], [_, [g, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [f, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [f, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [f, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, f]], os: [[/microsoft (windows) (vista|xp)/i], [f, m], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [f, [m, Y, J]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[f, "Windows"], [m, Y, J]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [f, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[f, $], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, f], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [f, m], [/\(bb(10);/i], [m, [f, R]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [f, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [f, L + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [f, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [f, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [f, M + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[f, H], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [f, m], [/(sunos) ?([\w\.\d]*)/i], [[f, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [f, m]] }, ee = function(e2, t2) {
              if (typeof e2 === u && (t2 = e2, e2 = s2), !(this instanceof ee)) return new ee(e2, t2).getResult();
              var r2 = typeof o2 !== l && o2.navigator ? o2.navigator : s2, n2 = e2 || (r2 && r2.userAgent ? r2.userAgent : ""), a3 = r2 && r2.userAgentData ? r2.userAgentData : s2, i3 = t2 ? z(Q, t2) : Q, y2 = r2 && r2.userAgent == n2;
              return this.getBrowser = function() {
                var e3, t3 = {};
                return t3[f] = s2, t3[m] = s2, X.call(t3, n2, i3.browser), t3[p] = typeof (e3 = t3[m]) === c ? e3.replace(/[^\d\.]/g, "").split(".")[0] : s2, y2 && r2 && r2.brave && typeof r2.brave.isBrave == d && (t3[f] = "Brave"), t3;
              }, this.getCPU = function() {
                var e3 = {};
                return e3[v] = s2, X.call(e3, n2, i3.cpu), e3;
              }, this.getDevice = function() {
                var e3 = {};
                return e3[g] = s2, e3[_] = s2, e3[h] = s2, X.call(e3, n2, i3.device), y2 && !e3[h] && a3 && a3.mobile && (e3[h] = w), y2 && "Macintosh" == e3[_] && r2 && typeof r2.standalone !== l && r2.maxTouchPoints && r2.maxTouchPoints > 2 && (e3[_] = "iPad", e3[h] = b), e3;
              }, this.getEngine = function() {
                var e3 = {};
                return e3[f] = s2, e3[m] = s2, X.call(e3, n2, i3.engine), e3;
              }, this.getOS = function() {
                var e3 = {};
                return e3[f] = s2, e3[m] = s2, X.call(e3, n2, i3.os), y2 && !e3[f] && a3 && "Unknown" != a3.platform && (e3[f] = a3.platform.replace(/chrome os/i, H).replace(/macos/i, $)), e3;
              }, this.getResult = function() {
                return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
              }, this.getUA = function() {
                return n2;
              }, this.setUA = function(e3) {
                return n2 = typeof e3 === c && e3.length > 350 ? Z(e3, 350) : e3, this;
              }, this.setUA(n2), this;
            };
            ee.VERSION = "1.0.35", ee.BROWSER = K([f, m, p]), ee.CPU = K([v]), ee.DEVICE = K([_, g, h, y, w, x, b, S, C]), ee.ENGINE = ee.OS = K([f, m]), typeof i2 !== l ? (a2.exports && (i2 = a2.exports = ee), i2.UAParser = ee) : r.amdO ? void 0 !== (n = function() {
              return ee;
            }.call(t, r, t, e)) && (e.exports = n) : typeof o2 !== l && (o2.UAParser = ee);
            var et = typeof o2 !== l && (o2.jQuery || o2.Zepto);
            if (et && !et.ua) {
              var er = new ee();
              et.ua = er.getResult(), et.ua.get = function() {
                return er.getUA();
              }, et.ua.set = function(e2) {
                er.setUA(e2);
                var t2 = er.getResult();
                for (var r2 in t2) et.ua[r2] = t2[r2];
              };
            }
          }("object" == typeof window ? window : this);
        } }, i = {};
        function o(e2) {
          var t2 = i[e2];
          if (void 0 !== t2) return t2.exports;
          var r2 = i[e2] = { exports: {} }, n2 = true;
          try {
            a[e2].call(r2.exports, r2, r2.exports, o), n2 = false;
          } finally {
            n2 && delete i[e2];
          }
          return r2.exports;
        }
        o.ab = "//";
        var s = o(226);
        e.exports = s;
      })();
    }, 702: (e, t, r) => {
      "use strict";
      function n() {
        throw Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead');
      }
      r.r(t), r.d(t, { ImageResponse: () => n, NextRequest: () => a.J, NextResponse: () => i.R, URLPattern: () => u, connection: () => w, unstable_after: () => p, userAgent: () => l, userAgentFromString: () => d });
      var a = r(390), i = r(532), o = r(113), s = r.n(o);
      function d(e2) {
        return { ...s()(e2), isBot: void 0 !== e2 && /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e2) };
      }
      function l({ headers: e2 }) {
        return d(e2.get("user-agent") || void 0);
      }
      let u = "undefined" == typeof URLPattern ? void 0 : URLPattern;
      var c = r(590);
      function p(e2) {
        let t2 = c.J.getStore();
        if (!t2) throw Error("`unstable_after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");
        let { afterContext: r2 } = t2;
        if (!r2) throw Error("`unstable_after` must be explicitly enabled by setting `experimental.after: true` in your next.config.js.");
        return r2.after(e2);
      }
      var _ = r(553), f = r(886);
      class h extends Error {
        constructor(e2) {
          super("Dynamic server usage: " + e2), this.description = e2, this.digest = "DYNAMIC_SERVER_USAGE";
        }
      }
      class g extends Error {
        constructor(...e2) {
          super(...e2), this.code = "NEXT_STATIC_GEN_BAILOUT";
        }
      }
      let m = "function" == typeof f.unstable_postpone;
      function v(e2, t2) {
        return `Route ${e2} needs to bail out of prerendering at this point because it used ${t2}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      }
      if (false === function(e2) {
        return e2.includes("needs to bail out of prerendering at this point because it used") && e2.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
      }(v("%%%", "^^^"))) throw Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");
      function y() {
      }
      function w() {
        let e2 = c.J.getStore(), t2 = _.FP.getStore();
        if (e2) {
          var r2, n2, a2;
          if (e2.forceStatic) return Promise.resolve(void 0);
          if (t2) {
            if ("cache" === t2.type) throw Error(`Route ${e2.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
            if ("unstable-cache" === t2.type) throw Error(`Route ${e2.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            if ("after" === t2.phase) throw Error(`Route ${e2.route} used "connection" inside "unstable_after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "unstable_after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/unstable_after`);
          }
          if (e2.dynamicShouldError) throw new g(`Route ${e2.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
          if (t2) {
            if ("prerender" === t2.type) return function(e3, t3) {
              let r3 = new Promise((r4, n3) => {
                e3.addEventListener("abort", () => {
                  n3(Error(`During prerendering, ${t3} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t3} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`));
                }, { once: true });
              });
              return r3.catch(y), r3;
            }(t2.renderSignal, "`connection()`");
            "prerender-ppr" === t2.type ? (r2 = e2.route, n2 = "connection", a2 = t2.dynamicTracking, function() {
              if (!m) throw Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js");
            }(), a2 && a2.dynamicAccesses.push({ stack: a2.isDebugDynamicAccesses ? Error().stack : void 0, expression: n2 }), f.unstable_postpone(v(r2, n2))) : "prerender-legacy" === t2.type && function(e3, t3, r3) {
              let n3 = new h(`Route ${t3.route} couldn't be rendered statically because it used \`${e3}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
              throw r3.revalidate = 0, t3.dynamicUsageDescription = e3, t3.dynamicUsageStack = n3.stack, n3;
            }("connection", e2, t2);
          }
          t2 && "cache" !== t2.type && "unstable-cache" !== t2.type && ("prerender" === t2.type || "prerender-legacy" === t2.type) && (t2.revalidate = 0);
        }
        return Promise.resolve(void 0);
      }
      RegExp(`\\n\\s+at __next_metadata_boundary__[\\n\\s]`), RegExp(`\\n\\s+at __next_viewport_boundary__[\\n\\s]`), RegExp(`\\n\\s+at __next_outlet_boundary__[\\n\\s]`);
    }, 31: (e, t, r) => {
      "use strict";
      r.d(t, { AA: () => n, h: () => a, kz: () => i, r4: () => o });
      let n = "nxtP", a = "nxtI", i = "x-prerender-revalidate", o = "x-prerender-revalidate-if-generated", s = { shared: "shared", reactServerComponents: "rsc", serverSideRendering: "ssr", actionBrowser: "action-browser", api: "api", middleware: "middleware", instrument: "instrument", edgeAsset: "edge-asset", appPagesBrowser: "app-pages-browser" };
      ({ ...s, GROUP: { builtinReact: [s.reactServerComponents, s.actionBrowser], serverOnly: [s.reactServerComponents, s.actionBrowser, s.instrument, s.middleware], neutralTarget: [s.api], clientOnly: [s.serverSideRendering, s.appPagesBrowser], bundled: [s.reactServerComponents, s.actionBrowser, s.serverSideRendering, s.appPagesBrowser, s.shared, s.instrument], appPages: [s.reactServerComponents, s.serverSideRendering, s.appPagesBrowser, s.actionBrowser] } });
    }, 263: (e, t, r) => {
      "use strict";
      r.d(t, { CB: () => n, Yq: () => a, l_: () => i });
      class n extends Error {
        constructor({ page: e2 }) {
          super(`The middleware "${e2}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class a extends Error {
        constructor() {
          super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
        }
      }
      class i extends Error {
        constructor() {
          super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
        }
      }
    }, 269: (e, t, r) => {
      "use strict";
      function n(e2) {
        return e2.replace(/\/$/, "") || "/";
      }
      function a(e2) {
        let t2 = e2.indexOf("#"), r2 = e2.indexOf("?"), n2 = r2 > -1 && (t2 < 0 || r2 < t2);
        return n2 || t2 > -1 ? { pathname: e2.substring(0, n2 ? r2 : t2), query: n2 ? e2.substring(r2, t2 > -1 ? t2 : void 0) : "", hash: t2 > -1 ? e2.slice(t2) : "" } : { pathname: e2, query: "", hash: "" };
      }
      function i(e2, t2) {
        if (!e2.startsWith("/") || !t2) return e2;
        let { pathname: r2, query: n2, hash: i2 } = a(e2);
        return "" + t2 + r2 + n2 + i2;
      }
      function o(e2, t2) {
        if (!e2.startsWith("/") || !t2) return e2;
        let { pathname: r2, query: n2, hash: i2 } = a(e2);
        return "" + r2 + t2 + n2 + i2;
      }
      function s(e2, t2) {
        if ("string" != typeof e2) return false;
        let { pathname: r2 } = a(e2);
        return r2 === t2 || r2.startsWith(t2 + "/");
      }
      function d(e2, t2) {
        let r2;
        let n2 = e2.split("/");
        return (t2 || []).some((t3) => !!n2[1] && n2[1].toLowerCase() === t3.toLowerCase() && (r2 = t3, n2.splice(1, 1), e2 = n2.join("/") || "/", true)), { pathname: e2, detectedLocale: r2 };
      }
      r.d(t, { X: () => p });
      let l = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
      function u(e2, t2) {
        return new URL(String(e2).replace(l, "localhost"), t2 && String(t2).replace(l, "localhost"));
      }
      let c = Symbol("NextURLInternal");
      class p {
        constructor(e2, t2, r2) {
          let n2, a2;
          "object" == typeof t2 && "pathname" in t2 || "string" == typeof t2 ? (n2 = t2, a2 = r2 || {}) : a2 = r2 || t2 || {}, this[c] = { url: u(e2, n2 ?? a2.base), options: a2, basePath: "" }, this.analyze();
        }
        analyze() {
          var e2, t2, r2, n2, a2;
          let i2 = function(e3, t3) {
            var r3, n3;
            let { basePath: a3, i18n: i3, trailingSlash: o3 } = null != (r3 = t3.nextConfig) ? r3 : {}, l3 = { pathname: e3, trailingSlash: "/" !== e3 ? e3.endsWith("/") : o3 };
            a3 && s(l3.pathname, a3) && (l3.pathname = function(e4, t4) {
              if (!s(e4, t4)) return e4;
              let r4 = e4.slice(t4.length);
              return r4.startsWith("/") ? r4 : "/" + r4;
            }(l3.pathname, a3), l3.basePath = a3);
            let u2 = l3.pathname;
            if (l3.pathname.startsWith("/_next/data/") && l3.pathname.endsWith(".json")) {
              let e4 = l3.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"), r4 = e4[0];
              l3.buildId = r4, u2 = "index" !== e4[1] ? "/" + e4.slice(1).join("/") : "/", true === t3.parseData && (l3.pathname = u2);
            }
            if (i3) {
              let e4 = t3.i18nProvider ? t3.i18nProvider.analyze(l3.pathname) : d(l3.pathname, i3.locales);
              l3.locale = e4.detectedLocale, l3.pathname = null != (n3 = e4.pathname) ? n3 : l3.pathname, !e4.detectedLocale && l3.buildId && (e4 = t3.i18nProvider ? t3.i18nProvider.analyze(u2) : d(u2, i3.locales)).detectedLocale && (l3.locale = e4.detectedLocale);
            }
            return l3;
          }(this[c].url.pathname, { nextConfig: this[c].options.nextConfig, parseData: true, i18nProvider: this[c].options.i18nProvider }), o2 = function(e3, t3) {
            let r3;
            if ((null == t3 ? void 0 : t3.host) && !Array.isArray(t3.host)) r3 = t3.host.toString().split(":", 1)[0];
            else {
              if (!e3.hostname) return;
              r3 = e3.hostname;
            }
            return r3.toLowerCase();
          }(this[c].url, this[c].options.headers);
          this[c].domainLocale = this[c].options.i18nProvider ? this[c].options.i18nProvider.detectDomainLocale(o2) : function(e3, t3, r3) {
            if (e3) for (let i3 of (r3 && (r3 = r3.toLowerCase()), e3)) {
              var n3, a3;
              if (t3 === (null == (n3 = i3.domain) ? void 0 : n3.split(":", 1)[0].toLowerCase()) || r3 === i3.defaultLocale.toLowerCase() || (null == (a3 = i3.locales) ? void 0 : a3.some((e4) => e4.toLowerCase() === r3))) return i3;
            }
          }(null == (t2 = this[c].options.nextConfig) ? void 0 : null == (e2 = t2.i18n) ? void 0 : e2.domains, o2);
          let l2 = (null == (r2 = this[c].domainLocale) ? void 0 : r2.defaultLocale) || (null == (a2 = this[c].options.nextConfig) ? void 0 : null == (n2 = a2.i18n) ? void 0 : n2.defaultLocale);
          this[c].url.pathname = i2.pathname, this[c].defaultLocale = l2, this[c].basePath = i2.basePath ?? "", this[c].buildId = i2.buildId, this[c].locale = i2.locale ?? l2, this[c].trailingSlash = i2.trailingSlash;
        }
        formatPathname() {
          var e2;
          let t2;
          return t2 = function(e3, t3, r2, n2) {
            if (!t3 || t3 === r2) return e3;
            let a2 = e3.toLowerCase();
            return !n2 && (s(a2, "/api") || s(a2, "/" + t3.toLowerCase())) ? e3 : i(e3, "/" + t3);
          }((e2 = { basePath: this[c].basePath, buildId: this[c].buildId, defaultLocale: this[c].options.forceLocale ? void 0 : this[c].defaultLocale, locale: this[c].locale, pathname: this[c].url.pathname, trailingSlash: this[c].trailingSlash }).pathname, e2.locale, e2.buildId ? void 0 : e2.defaultLocale, e2.ignorePrefix), (e2.buildId || !e2.trailingSlash) && (t2 = n(t2)), e2.buildId && (t2 = o(i(t2, "/_next/data/" + e2.buildId), "/" === e2.pathname ? "index.json" : ".json")), t2 = i(t2, e2.basePath), !e2.buildId && e2.trailingSlash ? t2.endsWith("/") ? t2 : o(t2, "/") : n(t2);
        }
        formatSearch() {
          return this[c].url.search;
        }
        get buildId() {
          return this[c].buildId;
        }
        set buildId(e2) {
          this[c].buildId = e2;
        }
        get locale() {
          return this[c].locale ?? "";
        }
        set locale(e2) {
          var t2, r2;
          if (!this[c].locale || !(null == (r2 = this[c].options.nextConfig) ? void 0 : null == (t2 = r2.i18n) ? void 0 : t2.locales.includes(e2))) throw TypeError(`The NextURL configuration includes no locale "${e2}"`);
          this[c].locale = e2;
        }
        get defaultLocale() {
          return this[c].defaultLocale;
        }
        get domainLocale() {
          return this[c].domainLocale;
        }
        get searchParams() {
          return this[c].url.searchParams;
        }
        get host() {
          return this[c].url.host;
        }
        set host(e2) {
          this[c].url.host = e2;
        }
        get hostname() {
          return this[c].url.hostname;
        }
        set hostname(e2) {
          this[c].url.hostname = e2;
        }
        get port() {
          return this[c].url.port;
        }
        set port(e2) {
          this[c].url.port = e2;
        }
        get protocol() {
          return this[c].url.protocol;
        }
        set protocol(e2) {
          this[c].url.protocol = e2;
        }
        get href() {
          let e2 = this.formatPathname(), t2 = this.formatSearch();
          return `${this.protocol}//${this.host}${e2}${t2}${this.hash}`;
        }
        set href(e2) {
          this[c].url = u(e2), this.analyze();
        }
        get origin() {
          return this[c].url.origin;
        }
        get pathname() {
          return this[c].url.pathname;
        }
        set pathname(e2) {
          this[c].url.pathname = e2;
        }
        get hash() {
          return this[c].url.hash;
        }
        set hash(e2) {
          this[c].url.hash = e2;
        }
        get search() {
          return this[c].url.search;
        }
        set search(e2) {
          this[c].url.search = e2;
        }
        get password() {
          return this[c].url.password;
        }
        set password(e2) {
          this[c].url.password = e2;
        }
        get username() {
          return this[c].url.username;
        }
        set username(e2) {
          this[c].url.username = e2;
        }
        get basePath() {
          return this[c].basePath;
        }
        set basePath(e2) {
          this[c].basePath = e2.startsWith("/") ? e2 : `/${e2}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
        }
        clone() {
          return new p(String(this), this[c].options);
        }
      }
    }, 323: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => n });
      class n {
        static get(e2, t2, r2) {
          let n2 = Reflect.get(e2, t2, r2);
          return "function" == typeof n2 ? n2.bind(e2) : n2;
        }
        static set(e2, t2, r2, n2) {
          return Reflect.set(e2, t2, r2, n2);
        }
        static has(e2, t2) {
          return Reflect.has(e2, t2);
        }
        static deleteProperty(e2, t2) {
          return Reflect.deleteProperty(e2, t2);
        }
      }
    }, 308: (e, t, r) => {
      "use strict";
      r.d(t, { Ud: () => n.stringifyCookie, VO: () => n.ResponseCookies, tm: () => n.RequestCookies });
      var n = r(555);
    }, 390: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => d });
      var n = r(269), a = r(846), i = r(263), o = r(308);
      let s = Symbol("internal request");
      class d extends Request {
        constructor(e2, t2 = {}) {
          let r2 = "string" != typeof e2 && "url" in e2 ? e2.url : String(e2);
          (0, a.qU)(r2), e2 instanceof Request ? super(e2, t2) : super(r2, t2);
          let i2 = new n.X(r2, { headers: (0, a.Cu)(this.headers), nextConfig: t2.nextConfig });
          this[s] = { cookies: new o.tm(this.headers), nextUrl: i2, url: i2.toString() };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
        }
        get cookies() {
          return this[s].cookies;
        }
        get nextUrl() {
          return this[s].nextUrl;
        }
        get page() {
          throw new i.Yq();
        }
        get ua() {
          throw new i.l_();
        }
        get url() {
          return this[s].url;
        }
      }
    }, 532: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => u });
      var n = r(308), a = r(269), i = r(846), o = r(323);
      let s = Symbol("internal response"), d = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function l(e2, t2) {
        var r2;
        if (null == e2 ? void 0 : null == (r2 = e2.request) ? void 0 : r2.headers) {
          if (!(e2.request.headers instanceof Headers)) throw Error("request.headers must be an instance of Headers");
          let r3 = [];
          for (let [n2, a2] of e2.request.headers) t2.set("x-middleware-request-" + n2, a2), r3.push(n2);
          t2.set("x-middleware-override-headers", r3.join(","));
        }
      }
      class u extends Response {
        constructor(e2, t2 = {}) {
          super(e2, t2);
          let r2 = this.headers, d2 = new Proxy(new n.VO(r2), { get(e3, a2, i2) {
            switch (a2) {
              case "delete":
              case "set":
                return (...i3) => {
                  let o2 = Reflect.apply(e3[a2], e3, i3), s2 = new Headers(r2);
                  return o2 instanceof n.VO && r2.set("x-middleware-set-cookie", o2.getAll().map((e4) => (0, n.Ud)(e4)).join(",")), l(t2, s2), o2;
                };
              default:
                return o.l.get(e3, a2, i2);
            }
          } });
          this[s] = { cookies: d2, url: t2.url ? new a.X(t2.url, { headers: (0, i.Cu)(r2), nextConfig: t2.nextConfig }) : void 0 };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
        }
        get cookies() {
          return this[s].cookies;
        }
        static json(e2, t2) {
          let r2 = Response.json(e2, t2);
          return new u(r2.body, r2);
        }
        static redirect(e2, t2) {
          let r2 = "number" == typeof t2 ? t2 : (null == t2 ? void 0 : t2.status) ?? 307;
          if (!d.has(r2)) throw RangeError('Failed to execute "redirect" on "response": Invalid status code');
          let n2 = "object" == typeof t2 ? t2 : {}, a2 = new Headers(null == n2 ? void 0 : n2.headers);
          return a2.set("Location", (0, i.qU)(e2)), new u(null, { ...n2, headers: a2, status: r2 });
        }
        static rewrite(e2, t2) {
          let r2 = new Headers(null == t2 ? void 0 : t2.headers);
          return r2.set("x-middleware-rewrite", (0, i.qU)(e2)), l(t2, r2), new u(null, { ...t2, headers: r2 });
        }
        static next(e2) {
          let t2 = new Headers(null == e2 ? void 0 : e2.headers);
          return t2.set("x-middleware-next", "1"), l(e2, t2), new u(null, { ...e2, headers: t2 });
        }
      }
    }, 846: (e, t, r) => {
      "use strict";
      r.d(t, { Cu: () => o, RD: () => i, p$: () => a, qU: () => s, wN: () => d });
      var n = r(31);
      function a(e2) {
        let t2 = new Headers();
        for (let [r2, n2] of Object.entries(e2)) for (let e3 of Array.isArray(n2) ? n2 : [n2]) void 0 !== e3 && ("number" == typeof e3 && (e3 = e3.toString()), t2.append(r2, e3));
        return t2;
      }
      function i(e2) {
        var t2, r2, n2, a2, i2, o2 = [], s2 = 0;
        function d2() {
          for (; s2 < e2.length && /\s/.test(e2.charAt(s2)); ) s2 += 1;
          return s2 < e2.length;
        }
        for (; s2 < e2.length; ) {
          for (t2 = s2, i2 = false; d2(); ) if ("," === (r2 = e2.charAt(s2))) {
            for (n2 = s2, s2 += 1, d2(), a2 = s2; s2 < e2.length && "=" !== (r2 = e2.charAt(s2)) && ";" !== r2 && "," !== r2; ) s2 += 1;
            s2 < e2.length && "=" === e2.charAt(s2) ? (i2 = true, s2 = a2, o2.push(e2.substring(t2, n2)), t2 = s2) : s2 = n2 + 1;
          } else s2 += 1;
          (!i2 || s2 >= e2.length) && o2.push(e2.substring(t2, e2.length));
        }
        return o2;
      }
      function o(e2) {
        let t2 = {}, r2 = [];
        if (e2) for (let [n2, a2] of e2.entries()) "set-cookie" === n2.toLowerCase() ? (r2.push(...i(a2)), t2[n2] = 1 === r2.length ? r2[0] : r2) : t2[n2] = a2;
        return t2;
      }
      function s(e2) {
        try {
          return String(new URL(String(e2)));
        } catch (t2) {
          throw Error(`URL is malformed "${String(e2)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t2 });
        }
      }
      function d(e2, t2) {
        for (let r2 of [n.AA, n.h]) e2 !== r2 && e2.startsWith(r2) && t2(e2.substring(r2.length));
      }
    }, 152: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
        for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }(t, { getTestReqInfo: function() {
        return o;
      }, withRequest: function() {
        return i;
      } });
      let n = new (r(521)).AsyncLocalStorage();
      function a(e2, t2) {
        let r2 = t2.header(e2, "next-test-proxy-port");
        if (r2) return { url: t2.url(e2), proxyPort: Number(r2), testData: t2.header(e2, "next-test-data") || "" };
      }
      function i(e2, t2, r2) {
        let i2 = a(e2, t2);
        return i2 ? n.run(i2, r2) : r2();
      }
      function o(e2, t2) {
        return n.getStore() || (e2 && t2 ? a(e2, t2) : void 0);
      }
    }, 53: (e, t, r) => {
      "use strict";
      var n = r(356).Buffer;
      Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
        for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }(t, { handleFetch: function() {
        return s;
      }, interceptFetch: function() {
        return d;
      }, reader: function() {
        return i;
      } });
      let a = r(152), i = { url: (e2) => e2.url, header: (e2, t2) => e2.headers.get(t2) };
      async function o(e2, t2) {
        let { url: r2, method: a2, headers: i2, body: o2, cache: s2, credentials: d2, integrity: l, mode: u, redirect: c, referrer: p, referrerPolicy: _ } = t2;
        return { testData: e2, api: "fetch", request: { url: r2, method: a2, headers: [...Array.from(i2), ["next-test-stack", function() {
          let e3 = (Error().stack ?? "").split("\n");
          for (let t3 = 1; t3 < e3.length; t3++) if (e3[t3].length > 0) {
            e3 = e3.slice(t3);
            break;
          }
          return (e3 = (e3 = (e3 = e3.filter((e4) => !e4.includes("/next/dist/"))).slice(0, 5)).map((e4) => e4.replace("webpack-internal:///(rsc)/", "").trim())).join("    ");
        }()]], body: o2 ? n.from(await t2.arrayBuffer()).toString("base64") : null, cache: s2, credentials: d2, integrity: l, mode: u, redirect: c, referrer: p, referrerPolicy: _ } };
      }
      async function s(e2, t2) {
        let r2 = (0, a.getTestReqInfo)(t2, i);
        if (!r2) return e2(t2);
        let { testData: s2, proxyPort: d2 } = r2, l = await o(s2, t2), u = await e2(`http://localhost:${d2}`, { method: "POST", body: JSON.stringify(l), next: { internal: true } });
        if (!u.ok) throw Error(`Proxy request failed: ${u.status}`);
        let c = await u.json(), { api: p } = c;
        switch (p) {
          case "continue":
            return e2(t2);
          case "abort":
          case "unhandled":
            throw Error(`Proxy request aborted [${t2.method} ${t2.url}]`);
        }
        return function(e3) {
          let { status: t3, headers: r3, body: a2 } = e3.response;
          return new Response(a2 ? n.from(a2, "base64") : null, { status: t3, headers: new Headers(r3) });
        }(c);
      }
      function d(e2) {
        return r.g.fetch = function(t2, r2) {
          var n2;
          return (null == r2 ? void 0 : null == (n2 = r2.next) ? void 0 : n2.internal) ? e2(t2, r2) : s(e2, new Request(t2, r2));
        }, () => {
          r.g.fetch = e2;
        };
      }
    }, 384: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
        for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }(t, { interceptTestApis: function() {
        return i;
      }, wrapRequestHandler: function() {
        return o;
      } });
      let n = r(152), a = r(53);
      function i() {
        return (0, a.interceptFetch)(r.g.fetch);
      }
      function o(e2) {
        return (t2, r2) => (0, n.withRequest)(t2, a.reader, () => e2(t2, r2));
      }
    }, 590: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => n });
      let n = (0, r(58).xl)();
    }, 553: (e, t, r) => {
      "use strict";
      r.d(t, { XN: () => a, FP: () => n });
      let n = (0, r(58).xl)();
      function a(e2) {
        let t2 = n.getStore();
        if (t2) {
          if ("request" === t2.type) return t2;
          if ("prerender" === t2.type || "prerender-ppr" === t2.type || "prerender-legacy" === t2.type) throw Error(`\`${e2}\` cannot be called inside a prerender. This is a bug in Next.js.`);
          if ("cache" === t2.type) throw Error(`\`${e2}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);
          if ("unstable-cache" === t2.type) throw Error(`\`${e2}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
        }
        throw Error(`\`${e2}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`);
      }
    }, 686: (e, t, r) => {
      "use strict";
      let n;
      r.r(t), r.d(t, { default: () => eH });
      var a, i, o, s, d, l, u, c, p, _, f, h, g = {};
      async function m() {
        return "_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && await _ENTRIES.middleware_instrumentation;
      }
      r.r(g), r.d(g, { config: () => eB, default: () => ej });
      let v = null;
      async function y() {
        if ("phase-production-build" === process.env.NEXT_PHASE) return;
        v || (v = m());
        let e2 = await v;
        if (null == e2 ? void 0 : e2.register) try {
          await e2.register();
        } catch (e3) {
          throw e3.message = `An error occurred while loading instrumentation hook: ${e3.message}`, e3;
        }
      }
      async function w(...e2) {
        let t2 = await m();
        try {
          var r2;
          await (null == t2 ? void 0 : null == (r2 = t2.onRequestError) ? void 0 : r2.call(t2, ...e2));
        } catch (e3) {
          console.error("Error in instrumentation.onRequestError:", e3);
        }
      }
      let b = null;
      function x() {
        return b || (b = y()), b;
      }
      function S(e2) {
        return `The edge runtime does not support Node.js '${e2}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      process !== r.g.process && (process.env = r.g.process.env, r.g.process = process), Object.defineProperty(globalThis, "__import_unsupported", { value: function(e2) {
        let t2 = new Proxy(function() {
        }, { get(t3, r2) {
          if ("then" === r2) return {};
          throw Error(S(e2));
        }, construct() {
          throw Error(S(e2));
        }, apply(r2, n2, a2) {
          if ("function" == typeof a2[0]) return a2[0](t2);
          throw Error(S(e2));
        } });
        return new Proxy({}, { get: () => t2 });
      }, enumerable: false, configurable: false }), x();
      var C = r(263), P = r(846);
      let T = Symbol("response"), E = Symbol("passThrough"), R = Symbol("waitUntil");
      class O {
        constructor(e2, t2) {
          this[E] = false, this[R] = t2 ? { kind: "external", function: t2 } : { kind: "internal", promises: [] };
        }
        respondWith(e2) {
          this[T] || (this[T] = Promise.resolve(e2));
        }
        passThroughOnException() {
          this[E] = true;
        }
        waitUntil(e2) {
          if ("external" === this[R].kind) return (0, this[R].function)(e2);
          this[R].promises.push(e2);
        }
      }
      class M extends O {
        constructor(e2) {
          var t2;
          super(e2.request, null == (t2 = e2.context) ? void 0 : t2.waitUntil), this.sourcePage = e2.page;
        }
        get request() {
          throw new C.CB({ page: this.sourcePage });
        }
        respondWith() {
          throw new C.CB({ page: this.sourcePage });
        }
      }
      var L = r(390), N = r(532);
      function A(e2, t2) {
        let r2 = "string" == typeof t2 ? new URL(t2) : t2, n2 = new URL(e2, t2), a2 = r2.protocol + "//" + r2.host;
        return n2.protocol + "//" + n2.host === a2 ? n2.toString().replace(a2, "") : n2.toString();
      }
      var I = r(269);
      let k = "Next-Router-Prefetch", q = ["RSC", "Next-Router-State-Tree", k, "Next-HMR-Refresh", "Next-Router-Segment-Prefetch"], D = ["__nextFallback", "__nextLocale", "__nextInferredLocaleFromDefault", "__nextDefaultLocale", "__nextIsNotFound", "_rsc"], j = ["__nextDataReq"];
      var B = r(323);
      class U extends Error {
        constructor() {
          super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
        }
        static callable() {
          throw new U();
        }
      }
      class G extends Headers {
        constructor(e2) {
          super(), this.headers = new Proxy(e2, { get(t2, r2, n2) {
            if ("symbol" == typeof r2) return B.l.get(t2, r2, n2);
            let a2 = r2.toLowerCase(), i2 = Object.keys(e2).find((e3) => e3.toLowerCase() === a2);
            if (void 0 !== i2) return B.l.get(t2, i2, n2);
          }, set(t2, r2, n2, a2) {
            if ("symbol" == typeof r2) return B.l.set(t2, r2, n2, a2);
            let i2 = r2.toLowerCase(), o2 = Object.keys(e2).find((e3) => e3.toLowerCase() === i2);
            return B.l.set(t2, o2 ?? r2, n2, a2);
          }, has(t2, r2) {
            if ("symbol" == typeof r2) return B.l.has(t2, r2);
            let n2 = r2.toLowerCase(), a2 = Object.keys(e2).find((e3) => e3.toLowerCase() === n2);
            return void 0 !== a2 && B.l.has(t2, a2);
          }, deleteProperty(t2, r2) {
            if ("symbol" == typeof r2) return B.l.deleteProperty(t2, r2);
            let n2 = r2.toLowerCase(), a2 = Object.keys(e2).find((e3) => e3.toLowerCase() === n2);
            return void 0 === a2 || B.l.deleteProperty(t2, a2);
          } });
        }
        static seal(e2) {
          return new Proxy(e2, { get(e3, t2, r2) {
            switch (t2) {
              case "append":
              case "delete":
              case "set":
                return U.callable;
              default:
                return B.l.get(e3, t2, r2);
            }
          } });
        }
        merge(e2) {
          return Array.isArray(e2) ? e2.join(", ") : e2;
        }
        static from(e2) {
          return e2 instanceof Headers ? e2 : new G(e2);
        }
        append(e2, t2) {
          let r2 = this.headers[e2];
          "string" == typeof r2 ? this.headers[e2] = [r2, t2] : Array.isArray(r2) ? r2.push(t2) : this.headers[e2] = t2;
        }
        delete(e2) {
          delete this.headers[e2];
        }
        get(e2) {
          let t2 = this.headers[e2];
          return void 0 !== t2 ? this.merge(t2) : null;
        }
        has(e2) {
          return void 0 !== this.headers[e2];
        }
        set(e2, t2) {
          this.headers[e2] = t2;
        }
        forEach(e2, t2) {
          for (let [r2, n2] of this.entries()) e2.call(t2, n2, r2, this);
        }
        *entries() {
          for (let e2 of Object.keys(this.headers)) {
            let t2 = e2.toLowerCase(), r2 = this.get(t2);
            yield [t2, r2];
          }
        }
        *keys() {
          for (let e2 of Object.keys(this.headers)) {
            let t2 = e2.toLowerCase();
            yield t2;
          }
        }
        *values() {
          for (let e2 of Object.keys(this.headers)) {
            let t2 = this.get(e2);
            yield t2;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
      var V = r(308), H = r(590), $ = r(553);
      class z extends Error {
        constructor() {
          super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
        }
        static callable() {
          throw new z();
        }
      }
      class K {
        static seal(e2) {
          return new Proxy(e2, { get(e3, t2, r2) {
            switch (t2) {
              case "clear":
              case "delete":
              case "set":
                return z.callable;
              default:
                return B.l.get(e3, t2, r2);
            }
          } });
        }
      }
      let F = Symbol.for("next.mutated.cookies");
      class W {
        static wrap(e2, t2) {
          let r2 = new V.VO(new Headers());
          for (let t3 of e2.getAll()) r2.set(t3);
          let n2 = [], a2 = /* @__PURE__ */ new Set(), i2 = () => {
            let e3 = H.J.getStore();
            if (e3 && (e3.pathWasRevalidated = true), n2 = r2.getAll().filter((e4) => a2.has(e4.name)), t2) {
              let e4 = [];
              for (let t3 of n2) {
                let r3 = new V.VO(new Headers());
                r3.set(t3), e4.push(r3.toString());
              }
              t2(e4);
            }
          }, o2 = new Proxy(r2, { get(e3, t3, r3) {
            switch (t3) {
              case F:
                return n2;
              case "delete":
                return function(...t4) {
                  a2.add("string" == typeof t4[0] ? t4[0] : t4[0].name);
                  try {
                    return e3.delete(...t4), o2;
                  } finally {
                    i2();
                  }
                };
              case "set":
                return function(...t4) {
                  a2.add("string" == typeof t4[0] ? t4[0] : t4[0].name);
                  try {
                    return e3.set(...t4), o2;
                  } finally {
                    i2();
                  }
                };
              default:
                return B.l.get(e3, t3, r3);
            }
          } });
          return o2;
        }
      }
      function Z(e2) {
        if ("action" !== (0, $.XN)(e2).phase) throw new z();
      }
      var X = r(31);
      !function(e2) {
        e2.handleRequest = "BaseServer.handleRequest", e2.run = "BaseServer.run", e2.pipe = "BaseServer.pipe", e2.getStaticHTML = "BaseServer.getStaticHTML", e2.render = "BaseServer.render", e2.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents", e2.renderToResponse = "BaseServer.renderToResponse", e2.renderToHTML = "BaseServer.renderToHTML", e2.renderError = "BaseServer.renderError", e2.renderErrorToResponse = "BaseServer.renderErrorToResponse", e2.renderErrorToHTML = "BaseServer.renderErrorToHTML", e2.render404 = "BaseServer.render404";
      }(a || (a = {})), function(e2) {
        e2.loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents", e2.loadComponents = "LoadComponents.loadComponents";
      }(i || (i = {})), function(e2) {
        e2.getRequestHandler = "NextServer.getRequestHandler", e2.getServer = "NextServer.getServer", e2.getServerRequestHandler = "NextServer.getServerRequestHandler", e2.createServer = "createServer.createServer";
      }(o || (o = {})), function(e2) {
        e2.compression = "NextNodeServer.compression", e2.getBuildId = "NextNodeServer.getBuildId", e2.createComponentTree = "NextNodeServer.createComponentTree", e2.clientComponentLoading = "NextNodeServer.clientComponentLoading", e2.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule", e2.generateStaticRoutes = "NextNodeServer.generateStaticRoutes", e2.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes", e2.generatePublicRoutes = "NextNodeServer.generatePublicRoutes", e2.generateImageRoutes = "NextNodeServer.generateImageRoutes.route", e2.sendRenderResult = "NextNodeServer.sendRenderResult", e2.proxyRequest = "NextNodeServer.proxyRequest", e2.runApi = "NextNodeServer.runApi", e2.render = "NextNodeServer.render", e2.renderHTML = "NextNodeServer.renderHTML", e2.imageOptimizer = "NextNodeServer.imageOptimizer", e2.getPagePath = "NextNodeServer.getPagePath", e2.getRoutesManifest = "NextNodeServer.getRoutesManifest", e2.findPageComponents = "NextNodeServer.findPageComponents", e2.getFontManifest = "NextNodeServer.getFontManifest", e2.getServerComponentManifest = "NextNodeServer.getServerComponentManifest", e2.getRequestHandler = "NextNodeServer.getRequestHandler", e2.renderToHTML = "NextNodeServer.renderToHTML", e2.renderError = "NextNodeServer.renderError", e2.renderErrorToHTML = "NextNodeServer.renderErrorToHTML", e2.render404 = "NextNodeServer.render404", e2.startResponse = "NextNodeServer.startResponse", e2.route = "route", e2.onProxyReq = "onProxyReq", e2.apiResolver = "apiResolver", e2.internalFetch = "internalFetch";
      }(s || (s = {})), (d || (d = {})).startServer = "startServer.startServer", function(e2) {
        e2.getServerSideProps = "Render.getServerSideProps", e2.getStaticProps = "Render.getStaticProps", e2.renderToString = "Render.renderToString", e2.renderDocument = "Render.renderDocument", e2.createBodyResult = "Render.createBodyResult";
      }(l || (l = {})), function(e2) {
        e2.renderToString = "AppRender.renderToString", e2.renderToReadableStream = "AppRender.renderToReadableStream", e2.getBodyResult = "AppRender.getBodyResult", e2.fetch = "AppRender.fetch";
      }(u || (u = {})), (c || (c = {})).executeRoute = "Router.executeRoute", (p || (p = {})).runHandler = "Node.runHandler", (_ || (_ = {})).runHandler = "AppRouteRouteHandlers.runHandler", function(e2) {
        e2.generateMetadata = "ResolveMetadata.generateMetadata", e2.generateViewport = "ResolveMetadata.generateViewport";
      }(f || (f = {})), (h || (h = {})).execute = "Middleware.execute";
      let Y = ["Middleware.execute", "BaseServer.handleRequest", "Render.getServerSideProps", "Render.getStaticProps", "AppRender.fetch", "AppRender.getBodyResult", "Render.renderDocument", "Node.runHandler", "AppRouteRouteHandlers.runHandler", "ResolveMetadata.generateMetadata", "ResolveMetadata.generateViewport", "NextNodeServer.createComponentTree", "NextNodeServer.findPageComponents", "NextNodeServer.getLayoutOrPageModule", "NextNodeServer.startResponse", "NextNodeServer.clientComponentLoading"], J = ["NextNodeServer.findPageComponents", "NextNodeServer.createComponentTree", "NextNodeServer.clientComponentLoading"];
      function Q(e2) {
        return null !== e2 && "object" == typeof e2 && "then" in e2 && "function" == typeof e2.then;
      }
      let { context: ee, propagation: et, trace: er, SpanStatusCode: en, SpanKind: ea, ROOT_CONTEXT: ei } = n = r(777);
      class eo extends Error {
        constructor(e2, t2) {
          super(), this.bubble = e2, this.result = t2;
        }
      }
      let es = (e2, t2) => {
        (function(e3) {
          return "object" == typeof e3 && null !== e3 && e3 instanceof eo;
        })(t2) && t2.bubble ? e2.setAttribute("next.bubble", true) : (t2 && e2.recordException(t2), e2.setStatus({ code: en.ERROR, message: null == t2 ? void 0 : t2.message })), e2.end();
      }, ed = /* @__PURE__ */ new Map(), el = n.createContextKey("next.rootSpanId"), eu = 0, ec = () => eu++, ep = { set(e2, t2, r2) {
        e2.push({ key: t2, value: r2 });
      } };
      class e_ {
        getTracerInstance() {
          return er.getTracer("next.js", "0.0.1");
        }
        getContext() {
          return ee;
        }
        getTracePropagationData() {
          let e2 = ee.active(), t2 = [];
          return et.inject(e2, t2, ep), t2;
        }
        getActiveScopeSpan() {
          return er.getSpan(null == ee ? void 0 : ee.active());
        }
        withPropagatedContext(e2, t2, r2) {
          let n2 = ee.active();
          if (er.getSpanContext(n2)) return t2();
          let a2 = et.extract(n2, e2, r2);
          return ee.with(a2, t2);
        }
        trace(...e2) {
          var t2;
          let [r2, n2, a2] = e2, { fn: i2, options: o2 } = "function" == typeof n2 ? { fn: n2, options: {} } : { fn: a2, options: { ...n2 } }, s2 = o2.spanName ?? r2;
          if (!Y.includes(r2) && "1" !== process.env.NEXT_OTEL_VERBOSE || o2.hideSpan) return i2();
          let d2 = this.getSpanContext((null == o2 ? void 0 : o2.parentSpan) ?? this.getActiveScopeSpan()), l2 = false;
          d2 ? (null == (t2 = er.getSpanContext(d2)) ? void 0 : t2.isRemote) && (l2 = true) : (d2 = (null == ee ? void 0 : ee.active()) ?? ei, l2 = true);
          let u2 = ec();
          return o2.attributes = { "next.span_name": s2, "next.span_type": r2, ...o2.attributes }, ee.with(d2.setValue(el, u2), () => this.getTracerInstance().startActiveSpan(s2, o2, (e3) => {
            let t3 = "performance" in globalThis && "measure" in performance ? globalThis.performance.now() : void 0, n3 = () => {
              ed.delete(u2), t3 && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && J.includes(r2 || "") && performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(r2.split(".").pop() || "").replace(/[A-Z]/g, (e4) => "-" + e4.toLowerCase())}`, { start: t3, end: performance.now() });
            };
            l2 && ed.set(u2, new Map(Object.entries(o2.attributes ?? {})));
            try {
              if (i2.length > 1) return i2(e3, (t5) => es(e3, t5));
              let t4 = i2(e3);
              if (Q(t4)) return t4.then((t5) => (e3.end(), t5)).catch((t5) => {
                throw es(e3, t5), t5;
              }).finally(n3);
              return e3.end(), n3(), t4;
            } catch (t4) {
              throw es(e3, t4), n3(), t4;
            }
          }));
        }
        wrap(...e2) {
          let t2 = this, [r2, n2, a2] = 3 === e2.length ? e2 : [e2[0], {}, e2[1]];
          return Y.includes(r2) || "1" === process.env.NEXT_OTEL_VERBOSE ? function() {
            let e3 = n2;
            "function" == typeof e3 && "function" == typeof a2 && (e3 = e3.apply(this, arguments));
            let i2 = arguments.length - 1, o2 = arguments[i2];
            if ("function" != typeof o2) return t2.trace(r2, e3, () => a2.apply(this, arguments));
            {
              let n3 = t2.getContext().bind(ee.active(), o2);
              return t2.trace(r2, e3, (e4, t3) => (arguments[i2] = function(e5) {
                return null == t3 || t3(e5), n3.apply(this, arguments);
              }, a2.apply(this, arguments)));
            }
          } : a2;
        }
        startSpan(...e2) {
          let [t2, r2] = e2, n2 = this.getSpanContext((null == r2 ? void 0 : r2.parentSpan) ?? this.getActiveScopeSpan());
          return this.getTracerInstance().startSpan(t2, r2, n2);
        }
        getSpanContext(e2) {
          return e2 ? er.setSpan(ee.active(), e2) : void 0;
        }
        getRootSpanAttributes() {
          let e2 = ee.active().getValue(el);
          return ed.get(e2);
        }
        setRootSpanAttribute(e2, t2) {
          let r2 = ee.active().getValue(el), n2 = ed.get(r2);
          n2 && n2.set(e2, t2);
        }
      }
      let ef = (() => {
        let e2 = new e_();
        return () => e2;
      })(), eh = "__prerender_bypass";
      Symbol("__next_preview_data"), Symbol(eh);
      class eg {
        constructor(e2, t2, r2, n2) {
          var a2;
          let i2 = e2 && function(e3, t3) {
            let r3 = G.from(e3.headers);
            return { isOnDemandRevalidate: r3.get(X.kz) === t3.previewModeId, revalidateOnlyGenerated: r3.has(X.r4) };
          }(t2, e2).isOnDemandRevalidate, o2 = null == (a2 = r2.get(eh)) ? void 0 : a2.value;
          this.isEnabled = !!(!i2 && o2 && e2 && o2 === e2.previewModeId), this._previewModeId = null == e2 ? void 0 : e2.previewModeId, this._mutableCookies = n2;
        }
        enable() {
          if (!this._previewModeId) throw Error("Invariant: previewProps missing previewModeId this should never happen");
          this._mutableCookies.set({ name: eh, value: this._previewModeId, httpOnly: true, sameSite: "none", secure: true, path: "/" });
        }
        disable() {
          this._mutableCookies.set({ name: eh, value: "", httpOnly: true, sameSite: "none", secure: true, path: "/", expires: /* @__PURE__ */ new Date(0) });
        }
      }
      function em(e2, t2) {
        if ("x-middleware-set-cookie" in e2.headers && "string" == typeof e2.headers["x-middleware-set-cookie"]) {
          let r2 = e2.headers["x-middleware-set-cookie"], n2 = new Headers();
          for (let e3 of (0, P.RD)(r2)) n2.append("set-cookie", e3);
          for (let e3 of new V.VO(n2).getAll()) t2.set(e3);
        }
      }
      var ev = r(541), ey = r.n(ev);
      class ew extends Error {
        constructor(e2, t2) {
          super("Invariant: " + (e2.endsWith(".") ? e2 : e2 + ".") + " This is a bug in Next.js.", t2), this.name = "InvariantError";
        }
      }
      async function eb(e2, t2) {
        if (!e2) return t2();
        let r2 = ex(e2);
        try {
          return await t2();
        } finally {
          let t3 = function(e3, t4) {
            let r3 = new Set(e3.revalidatedTags), n2 = new Set(e3.pendingRevalidateWrites);
            return { revalidatedTags: t4.revalidatedTags.filter((e4) => !r3.has(e4)), pendingRevalidates: Object.fromEntries(Object.entries(t4.pendingRevalidates).filter(([t5]) => !(t5 in e3.pendingRevalidates))), pendingRevalidateWrites: t4.pendingRevalidateWrites.filter((e4) => !n2.has(e4)) };
          }(r2, ex(e2));
          await eS(e2, t3);
        }
      }
      function ex(e2) {
        return { revalidatedTags: e2.revalidatedTags ? [...e2.revalidatedTags] : [], pendingRevalidates: { ...e2.pendingRevalidates }, pendingRevalidateWrites: e2.pendingRevalidateWrites ? [...e2.pendingRevalidateWrites] : [] };
      }
      async function eS(e2, { revalidatedTags: t2, pendingRevalidates: r2, pendingRevalidateWrites: n2 }) {
        var a2;
        return Promise.all([null == (a2 = e2.incrementalCache) ? void 0 : a2.revalidateTag(t2), ...Object.values(r2), ...n2]);
      }
      let eC = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
      class eP {
        disable() {
          throw eC;
        }
        getStore() {
        }
        run() {
          throw eC;
        }
        exit() {
          throw eC;
        }
        enterWith() {
          throw eC;
        }
        static bind(e2) {
          return e2;
        }
      }
      let eT = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      class eE {
        constructor({ waitUntil: e2, onClose: t2, onTaskError: r2 }) {
          this.workUnitStores = /* @__PURE__ */ new Set(), this.waitUntil = e2, this.onClose = t2, this.onTaskError = r2, this.callbackQueue = new (ey())(), this.callbackQueue.pause();
        }
        after(e2) {
          if (Q(e2)) this.waitUntil || eR(), this.waitUntil(e2.catch((e3) => this.reportTaskError(e3)));
          else if ("function" == typeof e2) this.addCallback(e2);
          else throw Error("`unstable_after()`: Argument must be a promise or a function");
        }
        addCallback(e2) {
          var t2;
          if (this.waitUntil || eR(), !this.onClose) throw new ew("unstable_after: Missing `onClose` implementation");
          let r2 = $.FP.getStore();
          if (!r2) throw new ew("Missing workUnitStore in AfterContext.addCallback");
          this.workUnitStores.add(r2), this.runCallbacksOnClosePromise || (this.runCallbacksOnClosePromise = this.runCallbacksOnClose(), this.waitUntil(this.runCallbacksOnClosePromise));
          let n2 = (t2 = async () => {
            try {
              await e2();
            } catch (e3) {
              this.reportTaskError(e3);
            }
          }, eT ? eT.bind(t2) : eP.bind(t2));
          this.callbackQueue.add(n2);
        }
        async runCallbacksOnClose() {
          return await new Promise((e2) => this.onClose(e2)), this.runCallbacks();
        }
        async runCallbacks() {
          if (0 === this.callbackQueue.size) return;
          for (let e3 of this.workUnitStores) e3.phase = "after";
          let e2 = H.J.getStore();
          if (!e2) throw new ew("Missing workStore in AfterContext.runCallbacks");
          return eb(e2, () => (this.callbackQueue.start(), this.callbackQueue.onIdle()));
        }
        reportTaskError(e2) {
          if (console.error("An error occurred in a function passed to `unstable_after()`:", e2), this.onTaskError) try {
            null == this.onTaskError || this.onTaskError.call(this, e2);
          } catch (e3) {
            console.error(new ew("`onTaskError` threw while handling an error thrown from an `unstable_after` task", { cause: e3 }));
          }
        }
      }
      function eR() {
        throw Error("`unstable_after()` will not work correctly, because `waitUntil` is not available in the current environment.");
      }
      class eO {
        onClose(e2) {
          if (this.isClosed) throw Error("Cannot subscribe to a closed CloseController");
          this.target.addEventListener("close", e2), this.listeners++;
        }
        dispatchClose() {
          if (this.isClosed) throw Error("Cannot close a CloseController multiple times");
          this.listeners > 0 && this.target.dispatchEvent(new Event("close")), this.isClosed = true;
        }
        constructor() {
          this.target = new EventTarget(), this.listeners = 0, this.isClosed = false;
        }
      }
      function eM() {
        return { previewModeId: process.env.__NEXT_PREVIEW_MODE_ID, previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "", previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "" };
      }
      let eL = Symbol.for("@next/request-context"), eN = Symbol.for("@vercel/request-context");
      class eA extends L.J {
        constructor(e2) {
          super(e2.input, e2.init), this.sourcePage = e2.page;
        }
        get request() {
          throw new C.CB({ page: this.sourcePage });
        }
        respondWith() {
          throw new C.CB({ page: this.sourcePage });
        }
        waitUntil() {
          throw new C.CB({ page: this.sourcePage });
        }
      }
      let eI = { keys: (e2) => Array.from(e2.keys()), get: (e2, t2) => e2.get(t2) ?? void 0 }, ek = (e2, t2) => ef().withPropagatedContext(e2.headers, t2, eI), eq = false;
      async function eD(e2) {
        var t2;
        let n2, a2;
        !function() {
          if (!eq && (eq = true, "true" === process.env.NEXT_PRIVATE_TEST_PROXY)) {
            let { interceptTestApis: e3, wrapRequestHandler: t3 } = r(384);
            e3(), ek = t3(ek);
          }
        }(), await x();
        let i2 = void 0 !== self.__BUILD_MANIFEST;
        e2.request.url = e2.request.url.replace(/\.rsc($|\?)/, "$1");
        let o2 = new I.X(e2.request.url, { headers: e2.request.headers, nextConfig: e2.request.nextConfig });
        for (let e3 of [...o2.searchParams.keys()]) {
          let t3 = o2.searchParams.getAll(e3);
          (0, P.wN)(e3, (r2) => {
            for (let e4 of (o2.searchParams.delete(r2), t3)) o2.searchParams.append(r2, e4);
            o2.searchParams.delete(e3);
          });
        }
        let s2 = o2.buildId;
        o2.buildId = "";
        let d2 = e2.request.headers["x-nextjs-data"];
        d2 && "/index" === o2.pathname && (o2.pathname = "/");
        let l2 = (0, P.p$)(e2.request.headers), u2 = /* @__PURE__ */ new Map();
        if (!i2) for (let e3 of q) {
          let t3 = e3.toLowerCase(), r2 = l2.get(t3);
          r2 && (u2.set(t3, r2), l2.delete(t3));
        }
        let c2 = new eA({ page: e2.page, input: function(e3, t3) {
          let r2 = "string" == typeof e3, n3 = r2 ? new URL(e3) : e3;
          for (let e4 of D) n3.searchParams.delete(e4);
          if (t3) for (let e4 of j) n3.searchParams.delete(e4);
          return r2 ? n3.toString() : n3;
        }(o2, true).toString(), init: { body: e2.request.body, headers: l2, method: e2.request.method, nextConfig: e2.request.nextConfig, signal: e2.request.signal } });
        d2 && Object.defineProperty(c2, "__isData", { enumerable: false, value: true }), !globalThis.__incrementalCache && e2.IncrementalCache && (globalThis.__incrementalCache = new e2.IncrementalCache({ appDir: true, fetchCache: true, minimalMode: true, fetchCacheKeyPrefix: "", dev: false, requestHeaders: e2.request.headers, requestProtocol: "https", getPrerenderManifest: () => ({ version: -1, routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: eM() }) }));
        let p2 = e2.request.waitUntil ?? (null == (t2 = function() {
          let e3 = globalThis, t3 = e3[eL] ?? e3[eN];
          return null == t3 ? void 0 : t3.get();
        }()) ? void 0 : t2.waitUntil), _2 = new M({ request: c2, page: e2.page, context: p2 ? { waitUntil: p2 } : void 0 });
        if ((n2 = await ek(c2, () => {
          if ("/middleware" === e2.page || "/src/middleware" === e2.page) {
            var t3, r2;
            let n3, i3;
            let o3 = (null == (r2 = e2.request.nextConfig) ? void 0 : null == (t3 = r2.experimental) ? void 0 : t3.after) ?? false;
            return o3 && (n3 = _2.waitUntil.bind(_2), i3 = new eO()), ef().trace(h.execute, { spanName: `middleware ${c2.method} ${c2.nextUrl.pathname}`, attributes: { "http.target": c2.nextUrl.pathname, "http.method": c2.method } }, async () => {
              try {
                var t4, r3, d3, l3, u3;
                let p3 = eM(), f3 = (d3 = c2.nextUrl, l3 = void 0, u3 = (e3) => {
                  a2 = e3;
                }, function(e3, t5, r4, n4, a3, i4, o4, s3, d4, l4) {
                  function u4(e4) {
                    r4 && r4.setHeader("Set-Cookie", e4);
                  }
                  let c3 = {};
                  return { type: "request", phase: e3, implicitTags: a3 ?? [], url: { pathname: n4.pathname, search: n4.search ?? "" }, get headers() {
                    return c3.headers || (c3.headers = function(e4) {
                      let t6 = G.from(e4);
                      for (let e5 of q) t6.delete(e5.toLowerCase());
                      return G.seal(t6);
                    }(t5.headers)), c3.headers;
                  }, get cookies() {
                    if (!c3.cookies) {
                      let e4 = new V.tm(G.from(t5.headers));
                      em(t5, e4), c3.cookies = K.seal(e4);
                    }
                    return c3.cookies;
                  }, set cookies(value) {
                    c3.cookies = value;
                  }, get mutableCookies() {
                    if (!c3.mutableCookies) {
                      let e4 = function(e5, t6) {
                        let r5 = new V.tm(G.from(e5));
                        return W.wrap(r5, t6);
                      }(t5.headers, i4 || (r4 ? u4 : void 0));
                      em(t5, e4), c3.mutableCookies = e4;
                    }
                    return c3.mutableCookies;
                  }, get userspaceMutableCookies() {
                    if (!c3.userspaceMutableCookies) {
                      let e4 = function(e5) {
                        let t6 = new Proxy(e5, { get(e6, r5, n5) {
                          switch (r5) {
                            case "delete":
                              return function(...r6) {
                                return Z("cookies().delete"), e6.delete(...r6), t6;
                              };
                            case "set":
                              return function(...r6) {
                                return Z("cookies().set"), e6.set(...r6), t6;
                              };
                            default:
                              return B.l.get(e6, r5, n5);
                          }
                        } });
                        return t6;
                      }(this.mutableCookies);
                      c3.userspaceMutableCookies = e4;
                    }
                    return c3.userspaceMutableCookies;
                  }, get draftMode() {
                    return c3.draftMode || (c3.draftMode = new eg(s3, t5, this.cookies, this.mutableCookies)), c3.draftMode;
                  }, renderResumeDataCache: o4 ?? null, devWarmupPrerenderResumeDataCache: null, isHmrRefresh: d4, serverComponentsHmrCache: l4 || globalThis.__serverComponentsHmrCache };
                }("action", c2, void 0, d3, l3, u3, void 0, p3, false, void 0)), h2 = function({ page: e3, fallbackRouteParams: t5, renderOpts: r4, requestEndedState: n4, isPrefetchRequest: a3 }) {
                  var i4;
                  let o4 = { isStaticGeneration: !r4.supportsDynamicResponse && !r4.isDraftMode && !r4.isServerAction, page: e3, fallbackRouteParams: t5, route: (i4 = e3.split("/").reduce((e4, t6, r5, n5) => t6 ? "(" === t6[0] && t6.endsWith(")") || "@" === t6[0] || ("page" === t6 || "route" === t6) && r5 === n5.length - 1 ? e4 : e4 + "/" + t6 : e4, "")).startsWith("/") ? i4 : "/" + i4, incrementalCache: r4.incrementalCache || globalThis.__incrementalCache, cacheLifeProfiles: r4.cacheLifeProfiles, isRevalidate: r4.isRevalidate, isPrerendering: r4.nextExport, fetchCache: r4.fetchCache, isOnDemandRevalidate: r4.isOnDemandRevalidate, isDraftMode: r4.isDraftMode, requestEndedState: n4, isPrefetchRequest: a3, buildId: r4.buildId, reactLoadableManifest: (null == r4 ? void 0 : r4.reactLoadableManifest) || {}, assetPrefix: (null == r4 ? void 0 : r4.assetPrefix) || "", afterContext: function(e4) {
                    var t6;
                    if (!(null == e4 ? void 0 : null == (t6 = e4.experimental) ? void 0 : t6.after)) return;
                    let { waitUntil: r5, onClose: n5, onAfterTaskError: a4 } = e4;
                    return new eE({ waitUntil: r5, onClose: n5, onTaskError: a4 });
                  }(r4) };
                  return r4.store = o4, o4;
                }({ page: "/", fallbackRouteParams: null, renderOpts: { cacheLifeProfiles: null == (r3 = e2.request.nextConfig) ? void 0 : null == (t4 = r3.experimental) ? void 0 : t4.cacheLife, experimental: { after: o3, isRoutePPREnabled: false, dynamicIO: false }, buildId: s2 ?? "", supportsDynamicResponse: true, waitUntil: n3, onClose: i3 ? i3.onClose.bind(i3) : void 0 }, requestEndedState: { ended: false }, isPrefetchRequest: c2.headers.has(k) });
                return await H.J.run(h2, () => $.FP.run(f3, e2.handler, c2, _2));
              } finally {
                i3 && setTimeout(() => {
                  i3.dispatchClose();
                }, 0);
              }
            });
          }
          return e2.handler(c2, _2);
        })) && !(n2 instanceof Response)) throw TypeError("Expected an instance of Response to be returned");
        n2 && a2 && n2.headers.set("set-cookie", a2);
        let f2 = null == n2 ? void 0 : n2.headers.get("x-middleware-rewrite");
        if (n2 && f2 && !i2) {
          let t3 = new I.X(f2, { forceLocale: true, headers: e2.request.headers, nextConfig: e2.request.nextConfig });
          t3.host === c2.nextUrl.host && (t3.buildId = s2 || t3.buildId, n2.headers.set("x-middleware-rewrite", String(t3)));
          let r2 = A(String(t3), String(o2));
          d2 && n2.headers.set("x-nextjs-rewrite", r2);
        }
        let g2 = null == n2 ? void 0 : n2.headers.get("Location");
        if (n2 && g2 && !i2) {
          let t3 = new I.X(g2, { forceLocale: false, headers: e2.request.headers, nextConfig: e2.request.nextConfig });
          n2 = new Response(n2.body, n2), t3.host === c2.nextUrl.host && (t3.buildId = s2 || t3.buildId, n2.headers.set("Location", String(t3))), d2 && (n2.headers.delete("Location"), n2.headers.set("x-nextjs-redirect", A(String(t3), String(o2))));
        }
        let m2 = n2 || N.R.next(), v2 = m2.headers.get("x-middleware-override-headers"), y2 = [];
        if (v2) {
          for (let [e3, t3] of u2) m2.headers.set(`x-middleware-request-${e3}`, t3), y2.push(e3);
          y2.length > 0 && m2.headers.set("x-middleware-override-headers", v2 + "," + y2.join(","));
        }
        return { response: m2, waitUntil: ("internal" === _2[R].kind ? Promise.all(_2[R].promises).then(() => {
        }) : void 0) ?? Promise.resolve(), fetchMetrics: c2.fetchMetrics };
      }
      let ej = (0, r(230).A)({ locales: ["en", "tr", "pl", "es-MX", "pt-BR"], defaultLocale: "en", localePrefix: "always", localeDetection: true }), eB = { matcher: ["/", "/(en|tr|pl|es-MX|pt-BR)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"] }, eU = { ...g }, eG = eU.middleware || eU.default, eV = "/middleware";
      if ("function" != typeof eG) throw Error(`The Middleware "${eV}" must export a \`middleware\` or a \`default\` function`);
      function eH(e2) {
        return eD({ ...e2, page: eV, handler: async (...e3) => {
          try {
            return await eG(...e3);
          } catch (a2) {
            let t2 = e3[0], r2 = new URL(t2.url), n2 = r2.pathname + r2.search;
            throw await w(a2, { path: n2, method: t2.method, headers: Object.fromEntries(t2.headers.entries()) }, { routerKind: "Pages Router", routePath: "/middleware", routeType: "middleware", revalidateReason: void 0 }), a2;
          }
        } });
      }
    }, 58: (e, t, r) => {
      "use strict";
      r.d(t, { xl: () => o });
      let n = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
      class a {
        disable() {
          throw n;
        }
        getStore() {
        }
        run() {
          throw n;
        }
        exit() {
          throw n;
        }
        enterWith() {
          throw n;
        }
        static bind(e2) {
          return e2;
        }
      }
      let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function o() {
        return i ? new i() : new a();
      }
    } }, (e) => {
      var t = e(e.s = 686);
      (_ENTRIES = "undefined" == typeof _ENTRIES ? {} : _ENTRIES).middleware_middleware = t;
    }]);
  }
});

// node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js
var edgeFunctionHandler_exports = {};
__export(edgeFunctionHandler_exports, {
  default: () => edgeFunctionHandler
});
async function edgeFunctionHandler(request) {
  const path3 = new URL(request.url).pathname;
  const routes = globalThis._ROUTES;
  const correspondingRoute = routes.find((route) => route.regex.some((r) => new RegExp(r).test(path3)));
  if (!correspondingRoute) {
    throw new Error(`No route found for ${request.url}`);
  }
  const entry = await self._ENTRIES[`middleware_${correspondingRoute.name}`];
  const result = await entry.default({
    page: correspondingRoute.page,
    request: {
      ...request,
      page: {
        name: correspondingRoute.name
      }
    }
  });
  globalThis.__openNextAls.getStore()?.pendingPromiseRunner.add(result.waitUntil);
  const response = result.response;
  return response;
}
var init_edgeFunctionHandler = __esm({
  "node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js"() {
    globalThis._ENTRIES = {};
    globalThis.self = globalThis;
    globalThis._ROUTES = [{ "name": "middleware", "page": "/", "regex": ["^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json))?[\\/#\\?]?$", "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(en|tr|pl|es-MX|pt-BR))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json)?[\\/#\\?]?$", "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next|_vercel|.*\\..*).*))(\\.json)?[\\/#\\?]?$"] }];
    require_edge_runtime_webpack();
    require_middleware();
  }
});

// node_modules/@opennextjs/aws/dist/utils/promise.js
init_logger();
var DetachedPromise = class {
  resolve;
  reject;
  promise;
  constructor() {
    let resolve;
    let reject;
    this.promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this.resolve = resolve;
    this.reject = reject;
  }
};
var DetachedPromiseRunner = class {
  promises = [];
  withResolvers() {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    return detachedPromise;
  }
  add(promise) {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    promise.then(detachedPromise.resolve, detachedPromise.reject);
  }
  async await() {
    debug(`Awaiting ${this.promises.length} detached promises`);
    const results = await Promise.allSettled(this.promises.map((p) => p.promise));
    const rejectedPromises = results.filter((r) => r.status === "rejected");
    rejectedPromises.forEach((r) => {
      error(r.reason);
    });
  }
};
async function awaitAllDetachedPromise() {
  const store = globalThis.__openNextAls.getStore();
  const promisesToAwait = store?.pendingPromiseRunner.await() ?? Promise.resolve();
  if (store?.waitUntil) {
    store.waitUntil(promisesToAwait);
    return;
  }
  await promisesToAwait;
}
function provideNextAfterProvider() {
  const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for("@next/request-context");
  const VERCEL_REQUEST_CONTEXT_SYMBOL = Symbol.for("@vercel/request-context");
  const store = globalThis.__openNextAls.getStore();
  const waitUntil = store?.waitUntil ?? ((promise) => store?.pendingPromiseRunner.add(promise));
  const nextAfterContext = {
    get: () => ({
      waitUntil
    })
  };
  globalThis[NEXT_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  if (process.env.EMULATE_VERCEL_REQUEST_CONTEXT) {
    globalThis[VERCEL_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  }
}
function runWithOpenNextRequestContext({ isISRRevalidation, waitUntil, requestId = Math.random().toString(36) }, fn) {
  return globalThis.__openNextAls.run({
    requestId,
    pendingPromiseRunner: new DetachedPromiseRunner(),
    isISRRevalidation,
    waitUntil,
    writtenTags: /* @__PURE__ */ new Set()
  }, async () => {
    provideNextAfterProvider();
    let result;
    try {
      result = await fn();
    } finally {
      await awaitAllDetachedPromise();
    }
    return result;
  });
}

// node_modules/@opennextjs/aws/dist/adapters/middleware.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/resolve.js
async function resolveConverter(converter2) {
  if (typeof converter2 === "function") {
    return converter2();
  }
  const m_1 = await Promise.resolve().then(() => (init_edge(), edge_exports));
  return m_1.default;
}
async function resolveWrapper(wrapper) {
  if (typeof wrapper === "function") {
    return wrapper();
  }
  const m_1 = await Promise.resolve().then(() => (init_cloudflare_edge(), cloudflare_edge_exports));
  return m_1.default;
}
async function resolveOriginResolver(originResolver) {
  if (typeof originResolver === "function") {
    return originResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_pattern_env(), pattern_env_exports));
  return m_1.default;
}
async function resolveAssetResolver(assetResolver) {
  if (typeof assetResolver === "function") {
    return assetResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_dummy(), dummy_exports));
  return m_1.default;
}
async function resolveProxyRequest(proxyRequest) {
  if (typeof proxyRequest === "function") {
    return proxyRequest();
  }
  const m_1 = await Promise.resolve().then(() => (init_fetch(), fetch_exports));
  return m_1.default;
}

// node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
async function createGenericHandler(handler3) {
  const config = await import("./open-next.config.mjs").then((m) => m.default);
  globalThis.openNextConfig = config;
  const handlerConfig = config[handler3.type];
  const override = handlerConfig && "override" in handlerConfig ? handlerConfig.override : void 0;
  const converter2 = await resolveConverter(override?.converter);
  const { name, wrapper } = await resolveWrapper(override?.wrapper);
  debug("Using wrapper", name);
  return wrapper(handler3.handler, converter2);
}

// node_modules/@opennextjs/aws/dist/core/routing/util.js
import crypto from "node:crypto";
import { parse as parseQs, stringify as stringifyQs } from "node:querystring";

// node_modules/@opennextjs/aws/dist/adapters/config/index.js
init_logger();
import path from "node:path";
globalThis.__dirname ??= "";
var NEXT_DIR = path.join(__dirname, ".next");
var OPEN_NEXT_DIR = path.join(__dirname, ".open-next");
debug({ NEXT_DIR, OPEN_NEXT_DIR });
var NextConfig = { "env": {}, "eslint": { "ignoreDuringBuilds": false }, "typescript": { "ignoreBuildErrors": false, "tsconfigPath": "tsconfig.json" }, "distDir": ".next", "cleanDistDir": true, "assetPrefix": "", "cacheMaxMemorySize": 52428800, "configOrigin": "next.config.ts", "useFileSystemPublicRoutes": true, "generateEtags": true, "pageExtensions": ["tsx", "ts", "jsx", "js"], "poweredByHeader": true, "compress": true, "images": { "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840], "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384], "path": "/_next/image", "loader": "default", "loaderFile": "", "domains": [], "disableStaticImages": false, "minimumCacheTTL": 60, "formats": ["image/webp"], "dangerouslyAllowSVG": false, "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;", "contentDispositionType": "attachment", "remotePatterns": [], "unoptimized": true }, "devIndicators": { "appIsrStatus": true, "buildActivity": true, "buildActivityPosition": "bottom-right" }, "onDemandEntries": { "maxInactiveAge": 6e4, "pagesBufferLength": 5 }, "amp": { "canonicalBase": "" }, "basePath": "", "sassOptions": {}, "trailingSlash": false, "i18n": null, "productionBrowserSourceMaps": false, "excludeDefaultMomentLocales": true, "serverRuntimeConfig": {}, "publicRuntimeConfig": {}, "reactProductionProfiling": false, "reactStrictMode": null, "reactMaxHeadersLength": 6e3, "httpAgentOptions": { "keepAlive": true }, "logging": {}, "expireTime": 31536e3, "staticPageGenerationTimeout": 60, "output": "standalone", "modularizeImports": { "@mui/icons-material": { "transform": "@mui/icons-material/{{member}}" }, "lodash": { "transform": "lodash/{{member}}" } }, "outputFileTracingRoot": "/Users/jaydenworkplace/Desktop/web-tool-template/my_little_pony_test", "experimental": { "cacheLife": { "default": { "stale": 300, "revalidate": 900, "expire": 4294967294 }, "seconds": { "stale": 0, "revalidate": 1, "expire": 60 }, "minutes": { "stale": 300, "revalidate": 60, "expire": 3600 }, "hours": { "stale": 300, "revalidate": 3600, "expire": 86400 }, "days": { "stale": 300, "revalidate": 86400, "expire": 604800 }, "weeks": { "stale": 300, "revalidate": 604800, "expire": 2592e3 }, "max": { "stale": 300, "revalidate": 2592e3, "expire": 4294967294 } }, "cacheHandlers": {}, "multiZoneDraftMode": false, "appNavFailHandling": false, "prerenderEarlyExit": true, "serverMinification": true, "serverSourceMaps": false, "linkNoTouchStart": false, "caseSensitiveRoutes": false, "preloadEntriesOnStart": true, "clientRouterFilter": true, "clientRouterFilterRedirects": false, "fetchCacheKeyPrefix": "", "middlewarePrefetch": "flexible", "optimisticClientCache": true, "manualClientBasePath": false, "cpus": 7, "memoryBasedWorkersCount": false, "imgOptConcurrency": null, "imgOptTimeoutInSeconds": 7, "imgOptMaxInputPixels": 268402689, "imgOptSequentialRead": null, "isrFlushToDisk": true, "workerThreads": false, "optimizeCss": false, "nextScriptWorkers": false, "scrollRestoration": false, "externalDir": false, "disableOptimizedLoading": false, "gzipSize": true, "craCompat": false, "esmExternals": true, "fullySpecified": false, "swcTraceProfiling": false, "forceSwcTransforms": false, "largePageDataBytes": 128e3, "turbo": { "root": "/Users/jaydenworkplace/Desktop/web-tool-template/my_little_pony_test" }, "typedRoutes": false, "typedEnv": false, "parallelServerCompiles": false, "parallelServerBuildTraces": false, "ppr": false, "reactOwnerStack": false, "webpackMemoryOptimizations": false, "optimizeServerReact": true, "useEarlyImport": false, "staleTimes": { "dynamic": 0, "static": 300 }, "after": false, "serverComponentsHmrCache": true, "staticGenerationMaxConcurrency": 8, "staticGenerationMinPagesPerWorker": 25, "dynamicIO": false, "optimizePackageImports": ["lucide-react", "date-fns", "lodash-es", "ramda", "antd", "react-bootstrap", "ahooks", "@ant-design/icons", "@headlessui/react", "@headlessui-float/react", "@heroicons/react/20/solid", "@heroicons/react/24/solid", "@heroicons/react/24/outline", "@visx/visx", "@tremor/react", "rxjs", "@mui/material", "@mui/icons-material", "recharts", "react-use", "effect", "@effect/schema", "@effect/platform", "@effect/platform-node", "@effect/platform-browser", "@effect/platform-bun", "@effect/sql", "@effect/sql-mssql", "@effect/sql-mysql2", "@effect/sql-pg", "@effect/sql-squlite-node", "@effect/sql-squlite-bun", "@effect/sql-squlite-wasm", "@effect/sql-squlite-react-native", "@effect/rpc", "@effect/rpc-http", "@effect/typeclass", "@effect/experimental", "@effect/opentelemetry", "@material-ui/core", "@material-ui/icons", "@tabler/icons-react", "mui-core", "react-icons/ai", "react-icons/bi", "react-icons/bs", "react-icons/cg", "react-icons/ci", "react-icons/di", "react-icons/fa", "react-icons/fa6", "react-icons/fc", "react-icons/fi", "react-icons/gi", "react-icons/go", "react-icons/gr", "react-icons/hi", "react-icons/hi2", "react-icons/im", "react-icons/io", "react-icons/io5", "react-icons/lia", "react-icons/lib", "react-icons/lu", "react-icons/md", "react-icons/pi", "react-icons/ri", "react-icons/rx", "react-icons/si", "react-icons/sl", "react-icons/tb", "react-icons/tfi", "react-icons/ti", "react-icons/vsc", "react-icons/wi"], "trustHostHeader": false, "isExperimentalCompile": false }, "bundlePagesRouterDependencies": false, "configFileName": "next.config.ts" };
var BuildId = "3OSpKwx-SaCN_WoOZAKop";
var RoutesManifest = { "basePath": "", "rewrites": { "beforeFiles": [], "afterFiles": [], "fallback": [] }, "redirects": [{ "source": "/:path+/", "destination": "/:path+", "internal": true, "statusCode": 308, "regex": "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$" }], "routes": { "static": [{ "page": "/_not-found", "regex": "^/_not\\-found(?:/)?$", "routeKeys": {}, "namedRegex": "^/_not\\-found(?:/)?$" }, { "page": "/favicon.ico", "regex": "^/favicon\\.ico(?:/)?$", "routeKeys": {}, "namedRegex": "^/favicon\\.ico(?:/)?$" }, { "page": "/guide", "regex": "^/guide(?:/)?$", "routeKeys": {}, "namedRegex": "^/guide(?:/)?$" }, { "page": "/robots.txt", "regex": "^/robots\\.txt(?:/)?$", "routeKeys": {}, "namedRegex": "^/robots\\.txt(?:/)?$" }, { "page": "/sitemap.xml", "regex": "^/sitemap\\.xml(?:/)?$", "routeKeys": {}, "namedRegex": "^/sitemap\\.xml(?:/)?$" }], "dynamic": [{ "page": "/[locale]", "regex": "^/([^/]+?)(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)(?:/)?$" }, { "page": "/[locale]/character-test", "regex": "^/([^/]+?)/character\\-test(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/character\\-test(?:/)?$" }, { "page": "/[locale]/characters", "regex": "^/([^/]+?)/characters(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/characters(?:/)?$" }, { "page": "/[locale]/characters/[slug]", "regex": "^/([^/]+?)/characters/([^/]+?)(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale", "nxtPslug": "nxtPslug" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/characters/(?<nxtPslug>[^/]+?)(?:/)?$" }, { "page": "/[locale]/guides", "regex": "^/([^/]+?)/guides(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/guides(?:/)?$" }, { "page": "/[locale]/guides/best-mlp-quizzes", "regex": "^/([^/]+?)/guides/best\\-mlp\\-quizzes(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/guides/best\\-mlp\\-quizzes(?:/)?$" }, { "page": "/[locale]/guides/character-popularity", "regex": "^/([^/]+?)/guides/character\\-popularity(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/guides/character\\-popularity(?:/)?$" }, { "page": "/[locale]/guides/character-traits-explained", "regex": "^/([^/]+?)/guides/character\\-traits\\-explained(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/guides/character\\-traits\\-explained(?:/)?$" }, { "page": "/[locale]/guides/filter-tutorial", "regex": "^/([^/]+?)/guides/filter\\-tutorial(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/guides/filter\\-tutorial(?:/)?$" }, { "page": "/[locale]/guides/how-accurate-is-mlp-test", "regex": "^/([^/]+?)/guides/how\\-accurate\\-is\\-mlp\\-test(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/guides/how\\-accurate\\-is\\-mlp\\-test(?:/)?$" }, { "page": "/[locale]/guides/idrlabs-comparison", "regex": "^/([^/]+?)/guides/idrlabs\\-comparison(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/guides/idrlabs\\-comparison(?:/)?$" }, { "page": "/[locale]/guides/mbti-types-mlp", "regex": "^/([^/]+?)/guides/mbti\\-types\\-mlp(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/guides/mbti\\-types\\-mlp(?:/)?$" }, { "page": "/[locale]/personality-test", "regex": "^/([^/]+?)/personality\\-test(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/personality\\-test(?:/)?$" }, { "page": "/[locale]/privacy", "regex": "^/([^/]+?)/privacy(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/privacy(?:/)?$" }, { "page": "/[locale]/terms", "regex": "^/([^/]+?)/terms(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/terms(?:/)?$" }, { "page": "/[locale]/which-pony-are-you", "regex": "^/([^/]+?)/which\\-pony\\-are\\-you(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/which\\-pony\\-are\\-you(?:/)?$" }], "data": { "static": [], "dynamic": [] } }, "locales": [] };
var ConfigHeaders = [];
var PrerenderManifest = { "version": 4, "routes": { "/sitemap.xml": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "application/xml", "x-next-cache-tags": "_N_T_/layout,_N_T_/sitemap.xml/layout,_N_T_/sitemap.xml/route,_N_T_/sitemap.xml" }, "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/sitemap.xml", "dataRoute": null, "allowHeader": ["x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/favicon.ico": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico" }, "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/favicon.ico", "dataRoute": null, "allowHeader": ["x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/robots.txt": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "text/plain", "x-next-cache-tags": "_N_T_/layout,_N_T_/robots.txt/layout,_N_T_/robots.txt/route,_N_T_/robots.txt" }, "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/robots.txt", "dataRoute": null, "allowHeader": ["x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/guide": { "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/guide", "dataRoute": "/guide.rsc", "allowHeader": ["x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] } }, "dynamicRoutes": {}, "notFoundRoutes": [], "preview": { "previewModeId": "62e9f48f756d32f8a5aff3e0c9430b9a", "previewModeSigningKey": "c2294f8155e4a210bde3343eb3fe800f3c59420e8d7596caa6f0edb9fb6f83d6", "previewModeEncryptionKey": "93dd5447bfbe697089901980be4a4d4ff82f5edaa12990e17f8ebf8b7b168a15" } };
var MiddlewareManifest = { "version": 3, "middleware": { "/": { "files": ["server/edge-runtime-webpack.js", "server/middleware.js"], "name": "middleware", "page": "/", "matchers": [{ "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json))?[\\/#\\?]?$", "originalSource": "/" }, { "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(en|tr|pl|es-MX|pt-BR))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json)?[\\/#\\?]?$", "originalSource": "/(en|tr|pl|es-MX|pt-BR)/:path*" }, { "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next|_vercel|.*\\..*).*))(\\.json)?[\\/#\\?]?$", "originalSource": "/((?!api|_next|_vercel|.*\\..*).*)" }], "wasm": [], "assets": [], "env": { "__NEXT_BUILD_ID": "3OSpKwx-SaCN_WoOZAKop", "NEXT_SERVER_ACTIONS_ENCRYPTION_KEY": "JbEXlN+JID74xiccxnFEkdHYkfpFfub48KiJQLgS8/M=", "__NEXT_PREVIEW_MODE_ID": "62e9f48f756d32f8a5aff3e0c9430b9a", "__NEXT_PREVIEW_MODE_ENCRYPTION_KEY": "93dd5447bfbe697089901980be4a4d4ff82f5edaa12990e17f8ebf8b7b168a15", "__NEXT_PREVIEW_MODE_SIGNING_KEY": "c2294f8155e4a210bde3343eb3fe800f3c59420e8d7596caa6f0edb9fb6f83d6" } } }, "functions": {}, "sortedMiddleware": ["/"] };
var AppPathRoutesManifest = { "/robots.txt/route": "/robots.txt", "/sitemap.xml/route": "/sitemap.xml", "/_not-found/page": "/_not-found", "/favicon.ico/route": "/favicon.ico", "/guide/page": "/guide", "/[locale]/guides/character-popularity/page": "/[locale]/guides/character-popularity", "/[locale]/character-test/page": "/[locale]/character-test", "/[locale]/guides/filter-tutorial/page": "/[locale]/guides/filter-tutorial", "/[locale]/characters/page": "/[locale]/characters", "/[locale]/guides/idrlabs-comparison/page": "/[locale]/guides/idrlabs-comparison", "/[locale]/guides/page": "/[locale]/guides", "/[locale]/page": "/[locale]", "/[locale]/privacy/page": "/[locale]/privacy", "/[locale]/personality-test/page": "/[locale]/personality-test", "/[locale]/which-pony-are-you/page": "/[locale]/which-pony-are-you", "/[locale]/characters/[slug]/page": "/[locale]/characters/[slug]", "/[locale]/terms/page": "/[locale]/terms", "/[locale]/guides/how-accurate-is-mlp-test/page": "/[locale]/guides/how-accurate-is-mlp-test", "/[locale]/guides/best-mlp-quizzes/page": "/[locale]/guides/best-mlp-quizzes", "/[locale]/guides/character-traits-explained/page": "/[locale]/guides/character-traits-explained", "/[locale]/guides/mbti-types-mlp/page": "/[locale]/guides/mbti-types-mlp" };
var FunctionsConfigManifest = { "version": 1, "functions": { "/sitemap.xml": {}, "/robots.txt": {} } };
var PagesManifest = { "/_error": "pages/_error.js", "/_app": "pages/_app.js", "/_document": "pages/_document.js", "/404": "pages/404.html" };
process.env.NEXT_BUILD_ID = BuildId;
process.env.NEXT_PREVIEW_MODE_ID = PrerenderManifest?.preview?.previewModeId;

// node_modules/@opennextjs/aws/dist/http/openNextResponse.js
init_logger();
init_util();
import { Transform } from "node:stream";

// node_modules/@opennextjs/aws/dist/core/routing/util.js
init_util();
init_logger();
import { ReadableStream as ReadableStream2 } from "node:stream/web";

// node_modules/@opennextjs/aws/dist/utils/binary.js
var commonBinaryMimeTypes = /* @__PURE__ */ new Set([
  "application/octet-stream",
  // Docs
  "application/epub+zip",
  "application/msword",
  "application/pdf",
  "application/rtf",
  "application/vnd.amazon.ebook",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // Fonts
  "font/otf",
  "font/woff",
  "font/woff2",
  // Images
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "image/vnd.microsoft.icon",
  "image/webp",
  // Audio
  "audio/3gpp",
  "audio/aac",
  "audio/basic",
  "audio/flac",
  "audio/mpeg",
  "audio/ogg",
  "audio/wavaudio/webm",
  "audio/x-aiff",
  "audio/x-midi",
  "audio/x-wav",
  // Video
  "video/3gpp",
  "video/mp2t",
  "video/mpeg",
  "video/ogg",
  "video/quicktime",
  "video/webm",
  "video/x-msvideo",
  // Archives
  "application/java-archive",
  "application/vnd.apple.installer+xml",
  "application/x-7z-compressed",
  "application/x-apple-diskimage",
  "application/x-bzip",
  "application/x-bzip2",
  "application/x-gzip",
  "application/x-java-archive",
  "application/x-rar-compressed",
  "application/x-tar",
  "application/x-zip",
  "application/zip",
  // Serialized data
  "application/x-protobuf"
]);
function isBinaryContentType(contentType) {
  if (!contentType)
    return false;
  const value = contentType.split(";")[0];
  return commonBinaryMimeTypes.has(value);
}

// node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
init_stream();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/i18n/accept-header.js
function parse(raw, preferences, options) {
  const lowers = /* @__PURE__ */ new Map();
  const header = raw.replace(/[ \t]/g, "");
  if (preferences) {
    let pos = 0;
    for (const preference of preferences) {
      const lower = preference.toLowerCase();
      lowers.set(lower, { orig: preference, pos: pos++ });
      if (options.prefixMatch) {
        const parts2 = lower.split("-");
        while (parts2.pop(), parts2.length > 0) {
          const joined = parts2.join("-");
          if (!lowers.has(joined)) {
            lowers.set(joined, { orig: preference, pos: pos++ });
          }
        }
      }
    }
  }
  const parts = header.split(",");
  const selections = [];
  const map = /* @__PURE__ */ new Set();
  for (let i = 0; i < parts.length; ++i) {
    const part = parts[i];
    if (!part) {
      continue;
    }
    const params = part.split(";");
    if (params.length > 2) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const token = params[0].toLowerCase();
    if (!token) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const selection = { token, pos: i, q: 1 };
    if (preferences && lowers.has(token)) {
      selection.pref = lowers.get(token).pos;
    }
    map.add(selection.token);
    if (params.length === 2) {
      const q = params[1];
      const [key, value] = q.split("=");
      if (!value || key !== "q" && key !== "Q") {
        throw new Error(`Invalid ${options.type} header`);
      }
      const score = Number.parseFloat(value);
      if (score === 0) {
        continue;
      }
      if (Number.isFinite(score) && score <= 1 && score >= 1e-3) {
        selection.q = score;
      }
    }
    selections.push(selection);
  }
  selections.sort((a, b) => {
    if (b.q !== a.q) {
      return b.q - a.q;
    }
    if (b.pref !== a.pref) {
      if (a.pref === void 0) {
        return 1;
      }
      if (b.pref === void 0) {
        return -1;
      }
      return a.pref - b.pref;
    }
    return a.pos - b.pos;
  });
  const values = selections.map((selection) => selection.token);
  if (!preferences || !preferences.length) {
    return values;
  }
  const preferred = [];
  for (const selection of values) {
    if (selection === "*") {
      for (const [preference, value] of lowers) {
        if (!map.has(preference)) {
          preferred.push(value.orig);
        }
      }
    } else {
      const lower = selection.toLowerCase();
      if (lowers.has(lower)) {
        preferred.push(lowers.get(lower).orig);
      }
    }
  }
  return preferred;
}
function acceptLanguage(header = "", preferences) {
  return parse(header, preferences, {
    type: "accept-language",
    prefixMatch: true
  })[0] || void 0;
}

// node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
function isLocalizedPath(path3) {
  return NextConfig.i18n?.locales.includes(path3.split("/")[1].toLowerCase()) ?? false;
}
function getLocaleFromCookie(cookies) {
  const i18n = NextConfig.i18n;
  const nextLocale = cookies.NEXT_LOCALE?.toLowerCase();
  return nextLocale ? i18n?.locales.find((locale) => nextLocale === locale.toLowerCase()) : void 0;
}
function detectDomainLocale({ hostname, detectedLocale }) {
  const i18n = NextConfig.i18n;
  const domains = i18n?.domains;
  if (!domains) {
    return;
  }
  const lowercasedLocale = detectedLocale?.toLowerCase();
  for (const domain of domains) {
    const domainHostname = domain.domain.split(":", 1)[0].toLowerCase();
    if (hostname === domainHostname || lowercasedLocale === domain.defaultLocale.toLowerCase() || domain.locales?.some((locale) => lowercasedLocale === locale.toLowerCase())) {
      return domain;
    }
  }
}
function detectLocale(internalEvent, i18n) {
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  if (i18n.localeDetection === false) {
    return domainLocale?.defaultLocale ?? i18n.defaultLocale;
  }
  const cookiesLocale = getLocaleFromCookie(internalEvent.cookies);
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  debug({
    cookiesLocale,
    preferredLocale,
    defaultLocale: i18n.defaultLocale,
    domainLocale
  });
  return domainLocale?.defaultLocale ?? cookiesLocale ?? preferredLocale ?? i18n.defaultLocale;
}
function localizePath(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n) {
    return internalEvent.rawPath;
  }
  if (isLocalizedPath(internalEvent.rawPath)) {
    return internalEvent.rawPath;
  }
  const detectedLocale = detectLocale(internalEvent, i18n);
  return `/${detectedLocale}${internalEvent.rawPath}`;
}
function handleLocaleRedirect(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n || i18n.localeDetection === false || internalEvent.rawPath !== "/") {
    return false;
  }
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  const detectedLocale = detectLocale(internalEvent, i18n);
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  const preferredDomain = detectDomainLocale({
    detectedLocale: preferredLocale
  });
  if (domainLocale && preferredDomain) {
    const isPDomain = preferredDomain.domain === domainLocale.domain;
    const isPLocale = preferredDomain.defaultLocale === preferredLocale;
    if (!isPDomain || !isPLocale) {
      const scheme = `http${preferredDomain.http ? "" : "s"}`;
      const rlocale = isPLocale ? "" : preferredLocale;
      return {
        type: "core",
        statusCode: 307,
        headers: {
          Location: `${scheme}://${preferredDomain.domain}/${rlocale}`
        },
        body: emptyReadableStream(),
        isBase64Encoded: false
      };
    }
  }
  const defaultLocale = domainLocale?.defaultLocale ?? i18n.defaultLocale;
  if (detectedLocale.toLowerCase() !== defaultLocale.toLowerCase()) {
    return {
      type: "core",
      statusCode: 307,
      headers: {
        Location: constructNextUrl(internalEvent.url, `/${detectedLocale}`)
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}

// node_modules/@opennextjs/aws/dist/core/routing/queue.js
function generateShardId(rawPath, maxConcurrency, prefix) {
  let a = cyrb128(rawPath);
  let t = a += 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  const randomFloat = ((t ^ t >>> 14) >>> 0) / 4294967296;
  const randomInt = Math.floor(randomFloat * maxConcurrency);
  return `${prefix}-${randomInt}`;
}
function generateMessageGroupId(rawPath) {
  const maxConcurrency = Number.parseInt(process.env.MAX_REVALIDATE_CONCURRENCY ?? "10");
  return generateShardId(rawPath, maxConcurrency, "revalidate");
}
function cyrb128(str) {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ h1 >>> 18, 597399067);
  h2 = Math.imul(h4 ^ h2 >>> 22, 2869860233);
  h3 = Math.imul(h1 ^ h3 >>> 17, 951274213);
  h4 = Math.imul(h2 ^ h4 >>> 19, 2716044179);
  h1 ^= h2 ^ h3 ^ h4, h2 ^= h1, h3 ^= h1, h4 ^= h1;
  return h1 >>> 0;
}

// node_modules/@opennextjs/aws/dist/core/routing/util.js
function isExternal(url, host) {
  if (!url)
    return false;
  const pattern = /^https?:\/\//;
  if (!pattern.test(url))
    return false;
  if (host) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.host !== host;
    } catch {
      return !url.includes(host);
    }
  }
  return true;
}
function convertFromQueryString(query) {
  if (query === "")
    return {};
  const queryParts = query.split("&");
  return getQueryFromIterator(queryParts.map((p) => {
    const [key, value] = p.split("=");
    return [key, value];
  }));
}
function getUrlParts(url, isExternal2) {
  if (!isExternal2) {
    const regex2 = /\/([^?]*)\??(.*)/;
    const match3 = url.match(regex2);
    return {
      hostname: "",
      pathname: match3?.[1] ? `/${match3[1]}` : url,
      protocol: "",
      queryString: match3?.[2] ?? ""
    };
  }
  const regex = /^(https?:)\/\/?([^\/\s]+)(\/[^?]*)?(\?.*)?/;
  const match2 = url.match(regex);
  if (!match2) {
    throw new Error(`Invalid external URL: ${url}`);
  }
  return {
    protocol: match2[1] ?? "https:",
    hostname: match2[2],
    pathname: match2[3] ?? "",
    queryString: match2[4]?.slice(1) ?? ""
  };
}
function constructNextUrl(baseUrl, path3) {
  const nextBasePath = NextConfig.basePath ?? "";
  const url = new URL(`${nextBasePath}${path3}`, baseUrl);
  return url.href;
}
function convertToQueryString(query) {
  const queryStrings = [];
  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((entry) => queryStrings.push(`${key}=${entry}`));
    } else {
      queryStrings.push(`${key}=${value}`);
    }
  });
  return queryStrings.length > 0 ? `?${queryStrings.join("&")}` : "";
}
function getMiddlewareMatch(middlewareManifest2, functionsManifest) {
  if (functionsManifest?.functions?.["/_middleware"]) {
    return functionsManifest.functions["/_middleware"].matchers?.map(({ regexp }) => new RegExp(regexp)) ?? [/.*/];
  }
  const rootMiddleware = middlewareManifest2.middleware["/"];
  if (!rootMiddleware?.matchers)
    return [];
  return rootMiddleware.matchers.map(({ regexp }) => new RegExp(regexp));
}
function escapeRegex(str, { isPath } = {}) {
  const result = str.replaceAll("(.)", "_\xB51_").replaceAll("(..)", "_\xB52_").replaceAll("(...)", "_\xB53_");
  return isPath ? result : result.replaceAll("+", "_\xB54_");
}
function unescapeRegex(str) {
  return str.replaceAll("_\xB51_", "(.)").replaceAll("_\xB52_", "(..)").replaceAll("_\xB53_", "(...)").replaceAll("_\xB54_", "+");
}
function convertBodyToReadableStream(method, body) {
  if (method === "GET" || method === "HEAD")
    return void 0;
  if (!body)
    return void 0;
  return new ReadableStream2({
    start(controller) {
      controller.enqueue(body);
      controller.close();
    }
  });
}
var CommonHeaders;
(function(CommonHeaders2) {
  CommonHeaders2["CACHE_CONTROL"] = "cache-control";
  CommonHeaders2["NEXT_CACHE"] = "x-nextjs-cache";
})(CommonHeaders || (CommonHeaders = {}));
function normalizeLocationHeader(location, baseUrl, encodeQuery = false) {
  if (!URL.canParse(location)) {
    return location;
  }
  const locationURL = new URL(location);
  const origin = new URL(baseUrl).origin;
  let search = locationURL.search;
  if (encodeQuery && search) {
    search = `?${stringifyQs(parseQs(search.slice(1)))}`;
  }
  const href = `${locationURL.origin}${locationURL.pathname}${search}${locationURL.hash}`;
  if (locationURL.origin === origin) {
    return href.slice(origin.length);
  }
  return href;
}

// node_modules/@opennextjs/aws/dist/core/routingHandler.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
import { createHash } from "node:crypto";
init_stream();

// node_modules/@opennextjs/aws/dist/utils/cache.js
init_logger();
async function hasBeenRevalidated(key, tags, cacheEntry) {
  if (globalThis.openNextConfig.dangerous?.disableTagCache) {
    return false;
  }
  const value = cacheEntry.value;
  if (!value) {
    return true;
  }
  if ("type" in cacheEntry && cacheEntry.type === "page") {
    return false;
  }
  const lastModified = cacheEntry.lastModified ?? Date.now();
  if (globalThis.tagCache.mode === "nextMode") {
    return tags.length === 0 ? false : await globalThis.tagCache.hasBeenRevalidated(tags, lastModified);
  }
  const _lastModified = await globalThis.tagCache.getLastModified(key, lastModified);
  return _lastModified === -1;
}
function getTagsFromValue(value) {
  if (!value) {
    return [];
  }
  try {
    const cacheTags = value.meta?.headers?.["x-next-cache-tags"]?.split(",") ?? [];
    delete value.meta?.headers?.["x-next-cache-tags"];
    return cacheTags;
  } catch (e) {
    return [];
  }
}

// node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
init_logger();
var CACHE_ONE_YEAR = 60 * 60 * 24 * 365;
var CACHE_ONE_MONTH = 60 * 60 * 24 * 30;
var VARY_HEADER = "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Next-Url";
var NEXT_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
var NEXT_PRERENDER_HEADER = "x-nextjs-prerender";
var NEXT_POSTPONED_HEADER = "x-nextjs-postponed";
async function computeCacheControl(path3, body, host, revalidate, lastModified) {
  let finalRevalidate = CACHE_ONE_YEAR;
  const existingRoute = Object.entries(PrerenderManifest?.routes ?? {}).find((p) => p[0] === path3)?.[1];
  if (revalidate === void 0 && existingRoute) {
    finalRevalidate = existingRoute.initialRevalidateSeconds === false ? CACHE_ONE_YEAR : existingRoute.initialRevalidateSeconds;
  } else if (revalidate !== void 0) {
    finalRevalidate = revalidate === false ? CACHE_ONE_YEAR : revalidate;
  }
  const age = Math.round((Date.now() - (lastModified ?? 0)) / 1e3);
  const hash = (str) => createHash("md5").update(str).digest("hex");
  const etag = hash(body);
  if (revalidate === 0) {
    return {
      "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "x-opennext-cache": "ERROR",
      etag
    };
  }
  if (finalRevalidate !== CACHE_ONE_YEAR) {
    const sMaxAge = Math.max(finalRevalidate - age, 1);
    debug("sMaxAge", {
      finalRevalidate,
      age,
      lastModified,
      revalidate
    });
    const isStale = sMaxAge === 1;
    if (isStale) {
      let url = NextConfig.trailingSlash ? `${path3}/` : path3;
      if (NextConfig.basePath) {
        url = `${NextConfig.basePath}${url}`;
      }
      await globalThis.queue.send({
        MessageBody: {
          host,
          url,
          eTag: etag,
          lastModified: lastModified ?? Date.now()
        },
        MessageDeduplicationId: hash(`${path3}-${lastModified}-${etag}`),
        MessageGroupId: generateMessageGroupId(path3)
      });
    }
    return {
      "cache-control": `s-maxage=${sMaxAge}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
      "x-opennext-cache": isStale ? "STALE" : "HIT",
      etag
    };
  }
  return {
    "cache-control": `s-maxage=${CACHE_ONE_YEAR}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
    "x-opennext-cache": "HIT",
    etag
  };
}
function getBodyForAppRouter(event, cachedValue) {
  if (cachedValue.type !== "app") {
    throw new Error("getBodyForAppRouter called with non-app cache value");
  }
  try {
    const segmentHeader = `${event.headers[NEXT_SEGMENT_PREFETCH_HEADER]}`;
    const isSegmentResponse = Boolean(segmentHeader) && segmentHeader in (cachedValue.segmentData || {});
    const body = isSegmentResponse ? cachedValue.segmentData[segmentHeader] : cachedValue.rsc;
    return {
      body,
      additionalHeaders: isSegmentResponse ? { [NEXT_PRERENDER_HEADER]: "1", [NEXT_POSTPONED_HEADER]: "2" } : {}
    };
  } catch (e) {
    error("Error while getting body for app router from cache:", e);
    return { body: cachedValue.rsc, additionalHeaders: {} };
  }
}
async function generateResult(event, localizedPath, cachedValue, lastModified) {
  debug("Returning result from experimental cache");
  let body = "";
  let type = "application/octet-stream";
  let isDataRequest = false;
  let additionalHeaders = {};
  if (cachedValue.type === "app") {
    isDataRequest = Boolean(event.headers.rsc);
    if (isDataRequest) {
      const { body: appRouterBody, additionalHeaders: appHeaders } = getBodyForAppRouter(event, cachedValue);
      body = appRouterBody;
      additionalHeaders = appHeaders;
    } else {
      body = cachedValue.html;
    }
    type = isDataRequest ? "text/x-component" : "text/html; charset=utf-8";
  } else if (cachedValue.type === "page") {
    isDataRequest = Boolean(event.query.__nextDataReq);
    body = isDataRequest ? JSON.stringify(cachedValue.json) : cachedValue.html;
    type = isDataRequest ? "application/json" : "text/html; charset=utf-8";
  } else {
    throw new Error("generateResult called with unsupported cache value type, only 'app' and 'page' are supported");
  }
  const cacheControl = await computeCacheControl(localizedPath, body, event.headers.host, cachedValue.revalidate, lastModified);
  return {
    type: "core",
    // Sometimes other status codes can be cached, like 404. For these cases, we should return the correct status code
    // Also set the status code to the rewriteStatusCode if defined
    // This can happen in handleMiddleware in routingHandler.
    // `NextResponse.rewrite(url, { status: xxx})
    // The rewrite status code should take precedence over the cached one
    statusCode: event.rewriteStatusCode ?? cachedValue.meta?.status ?? 200,
    body: toReadableStream(body, false),
    isBase64Encoded: false,
    headers: {
      ...cacheControl,
      "content-type": type,
      ...cachedValue.meta?.headers,
      vary: VARY_HEADER,
      ...additionalHeaders
    }
  };
}
function escapePathDelimiters(segment, escapeEncoded) {
  return segment.replace(new RegExp(`([/#?]${escapeEncoded ? "|%(2f|23|3f|5c)" : ""})`, "gi"), (char) => encodeURIComponent(char));
}
function decodePathParams(pathname) {
  return pathname.split("/").map((segment) => {
    try {
      return escapePathDelimiters(decodeURIComponent(segment), true);
    } catch (e) {
      return segment;
    }
  }).join("/");
}
async function cacheInterceptor(event) {
  if (Boolean(event.headers["next-action"]) || Boolean(event.headers["x-prerender-revalidate"]))
    return event;
  const cookies = event.headers.cookie || "";
  const hasPreviewData = cookies.includes("__prerender_bypass") || cookies.includes("__next_preview_data");
  if (hasPreviewData) {
    debug("Preview mode detected, passing through to handler");
    return event;
  }
  let localizedPath = localizePath(event);
  if (NextConfig.basePath) {
    localizedPath = localizedPath.replace(NextConfig.basePath, "");
  }
  localizedPath = localizedPath.replace(/\/$/, "");
  localizedPath = decodePathParams(localizedPath);
  debug("Checking cache for", localizedPath, PrerenderManifest);
  const isISR = Object.keys(PrerenderManifest?.routes ?? {}).includes(localizedPath ?? "/") || Object.values(PrerenderManifest?.dynamicRoutes ?? {}).some((dr) => new RegExp(dr.routeRegex).test(localizedPath));
  debug("isISR", isISR);
  if (isISR) {
    try {
      const cachedData = await globalThis.incrementalCache.get(localizedPath ?? "/index");
      debug("cached data in interceptor", cachedData);
      if (!cachedData?.value) {
        return event;
      }
      if (cachedData.value?.type === "app" || cachedData.value?.type === "route") {
        const tags = getTagsFromValue(cachedData.value);
        const _hasBeenRevalidated = cachedData.shouldBypassTagCache ? false : await hasBeenRevalidated(localizedPath, tags, cachedData);
        if (_hasBeenRevalidated) {
          return event;
        }
      }
      const host = event.headers.host;
      switch (cachedData?.value?.type) {
        case "app":
        case "page":
          return generateResult(event, localizedPath, cachedData.value, cachedData.lastModified);
        case "redirect": {
          const cacheControl = await computeCacheControl(localizedPath, "", host, cachedData.value.revalidate, cachedData.lastModified);
          return {
            type: "core",
            statusCode: cachedData.value.meta?.status ?? 307,
            body: emptyReadableStream(),
            headers: {
              ...cachedData.value.meta?.headers ?? {},
              ...cacheControl
            },
            isBase64Encoded: false
          };
        }
        case "route": {
          const cacheControl = await computeCacheControl(localizedPath, cachedData.value.body, host, cachedData.value.revalidate, cachedData.lastModified);
          const isBinary = isBinaryContentType(String(cachedData.value.meta?.headers?.["content-type"]));
          return {
            type: "core",
            statusCode: event.rewriteStatusCode ?? cachedData.value.meta?.status ?? 200,
            body: toReadableStream(cachedData.value.body, isBinary),
            headers: {
              ...cacheControl,
              ...cachedData.value.meta?.headers,
              vary: VARY_HEADER
            },
            isBase64Encoded: isBinary
          };
        }
        default:
          return event;
      }
    } catch (e) {
      debug("Error while fetching cache", e);
      return event;
    }
  }
  return event;
}

// node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path3 = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  var isSafe = function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  };
  var safePattern = function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path3 += prefix;
        prefix = "";
      }
      if (path3) {
        result.push(path3);
        path3 = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path3 += value;
      continue;
    }
    if (path3) {
      result.push(path3);
      path3 = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path3 = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path3 += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path3 += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path3 += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path3;
  };
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path3 = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path: path3, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path3, keys) {
  if (!keys)
    return path3;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path3.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path3.source);
  }
  return path3;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path3) {
    return pathToRegexp(path3, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path3, keys, options) {
  return tokensToRegexp(parse2(path3, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path3, keys, options) {
  if (path3 instanceof RegExp)
    return regexpToRegexp(path3, keys);
  if (Array.isArray(path3))
    return arrayToRegexp(path3, keys, options);
  return stringToRegexp(path3, keys, options);
}

// node_modules/@opennextjs/aws/dist/utils/normalize-path.js
import path2 from "node:path";
function normalizeRepeatedSlashes(url) {
  const urlNoQuery = url.host + url.pathname;
  return `${url.protocol}//${urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/")}${url.search}`;
}

// node_modules/@opennextjs/aws/dist/core/routing/matcher.js
init_stream();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/routeMatcher.js
var optionalLocalePrefixRegex = `^/(?:${RoutesManifest.locales.map((locale) => `${locale}/?`).join("|")})?`;
var optionalBasepathPrefixRegex = RoutesManifest.basePath ? `^${RoutesManifest.basePath}/?` : "^/";
var optionalPrefix = optionalLocalePrefixRegex.replace("^/", optionalBasepathPrefixRegex);
function routeMatcher(routeDefinitions) {
  const regexp = routeDefinitions.map((route) => ({
    page: route.page,
    regexp: new RegExp(route.regex.replace("^/", optionalPrefix))
  }));
  const appPathsSet = /* @__PURE__ */ new Set();
  const routePathsSet = /* @__PURE__ */ new Set();
  for (const [k, v] of Object.entries(AppPathRoutesManifest)) {
    if (k.endsWith("page")) {
      appPathsSet.add(v);
    } else if (k.endsWith("route")) {
      routePathsSet.add(v);
    }
  }
  return function matchRoute(path3) {
    const foundRoutes = regexp.filter((route) => route.regexp.test(path3));
    return foundRoutes.map((foundRoute) => {
      let routeType = "page";
      if (appPathsSet.has(foundRoute.page)) {
        routeType = "app";
      } else if (routePathsSet.has(foundRoute.page)) {
        routeType = "route";
      }
      return {
        route: foundRoute.page,
        type: routeType
      };
    });
  };
}
var staticRouteMatcher = routeMatcher([
  ...RoutesManifest.routes.static,
  ...getStaticAPIRoutes()
]);
var dynamicRouteMatcher = routeMatcher(RoutesManifest.routes.dynamic);
function getStaticAPIRoutes() {
  const createRouteDefinition = (route) => ({
    page: route,
    regex: `^${route}(?:/)?$`
  });
  const dynamicRoutePages = new Set(RoutesManifest.routes.dynamic.map(({ page }) => page));
  const pagesStaticAPIRoutes = Object.keys(PagesManifest).filter((route) => route.startsWith("/api/") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  const appPathsStaticAPIRoutes = Object.values(AppPathRoutesManifest).filter((route) => (route.startsWith("/api/") || route === "/api") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  return [...pagesStaticAPIRoutes, ...appPathsStaticAPIRoutes];
}

// node_modules/@opennextjs/aws/dist/core/routing/matcher.js
var routeHasMatcher = (headers, cookies, query) => (redirect) => {
  switch (redirect.type) {
    case "header":
      return !!headers?.[redirect.key.toLowerCase()] && new RegExp(redirect.value ?? "").test(headers[redirect.key.toLowerCase()] ?? "");
    case "cookie":
      return !!cookies?.[redirect.key] && new RegExp(redirect.value ?? "").test(cookies[redirect.key] ?? "");
    case "query":
      return query[redirect.key] && Array.isArray(redirect.value) ? redirect.value.reduce((prev, current) => prev || new RegExp(current).test(query[redirect.key]), false) : new RegExp(redirect.value ?? "").test(query[redirect.key] ?? "");
    case "host":
      return headers?.host !== "" && new RegExp(redirect.value ?? "").test(headers.host);
    default:
      return false;
  }
};
function checkHas(matcher, has, inverted = false) {
  return has ? has.reduce((acc, cur) => {
    if (acc === false)
      return false;
    return inverted ? !matcher(cur) : matcher(cur);
  }, true) : true;
}
var getParamsFromSource = (source) => (value) => {
  debug("value", value);
  const _match = source(value);
  return _match ? _match.params : {};
};
var computeParamHas = (headers, cookies, query) => (has) => {
  if (!has.value)
    return {};
  const matcher = new RegExp(`^${has.value}$`);
  const fromSource = (value) => {
    const matches = value.match(matcher);
    return matches?.groups ?? {};
  };
  switch (has.type) {
    case "header":
      return fromSource(headers[has.key.toLowerCase()] ?? "");
    case "cookie":
      return fromSource(cookies[has.key] ?? "");
    case "query":
      return Array.isArray(query[has.key]) ? fromSource(query[has.key].join(",")) : fromSource(query[has.key] ?? "");
    case "host":
      return fromSource(headers.host ?? "");
  }
};
function convertMatch(match2, toDestination, destination) {
  if (!match2) {
    return destination;
  }
  const { params } = match2;
  const isUsingParams = Object.keys(params).length > 0;
  return isUsingParams ? toDestination(params) : destination;
}
function getNextConfigHeaders(event, configHeaders) {
  if (!configHeaders) {
    return {};
  }
  const matcher = routeHasMatcher(event.headers, event.cookies, event.query);
  const requestHeaders = {};
  const localizedRawPath = localizePath(event);
  for (const { headers, has, missing, regex, source, locale } of configHeaders) {
    const path3 = locale === false ? event.rawPath : localizedRawPath;
    if (new RegExp(regex).test(path3) && checkHas(matcher, has) && checkHas(matcher, missing, true)) {
      const fromSource = match(source);
      const _match = fromSource(path3);
      headers.forEach((h) => {
        try {
          const key = convertMatch(_match, compile(h.key), h.key);
          const value = convertMatch(_match, compile(h.value), h.value);
          requestHeaders[key] = value;
        } catch {
          debug(`Error matching header ${h.key} with value ${h.value}`);
          requestHeaders[h.key] = h.value;
        }
      });
    }
  }
  return requestHeaders;
}
function handleRewrites(event, rewrites) {
  const { rawPath, headers, query, cookies, url } = event;
  const localizedRawPath = localizePath(event);
  const matcher = routeHasMatcher(headers, cookies, query);
  const computeHas = computeParamHas(headers, cookies, query);
  const rewrite = rewrites.find((route) => {
    const path3 = route.locale === false ? rawPath : localizedRawPath;
    return new RegExp(route.regex).test(path3) && checkHas(matcher, route.has) && checkHas(matcher, route.missing, true);
  });
  let finalQuery = query;
  let rewrittenUrl = url;
  const isExternalRewrite = isExternal(rewrite?.destination);
  debug("isExternalRewrite", isExternalRewrite);
  if (rewrite) {
    const { pathname, protocol, hostname, queryString } = getUrlParts(rewrite.destination, isExternalRewrite);
    const pathToUse = rewrite.locale === false ? rawPath : localizedRawPath;
    debug("urlParts", { pathname, protocol, hostname, queryString });
    const toDestinationPath = compile(escapeRegex(pathname, { isPath: true }));
    const toDestinationHost = compile(escapeRegex(hostname));
    const toDestinationQuery = compile(escapeRegex(queryString));
    const params = {
      // params for the source
      ...getParamsFromSource(match(escapeRegex(rewrite.source, { isPath: true })))(pathToUse),
      // params for the has
      ...rewrite.has?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {}),
      // params for the missing
      ...rewrite.missing?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {})
    };
    const isUsingParams = Object.keys(params).length > 0;
    let rewrittenQuery = queryString;
    let rewrittenHost = hostname;
    let rewrittenPath = pathname;
    if (isUsingParams) {
      rewrittenPath = unescapeRegex(toDestinationPath(params));
      rewrittenHost = unescapeRegex(toDestinationHost(params));
      rewrittenQuery = unescapeRegex(toDestinationQuery(params));
    }
    if (NextConfig.i18n && !isExternalRewrite) {
      const strippedPathLocale = rewrittenPath.replace(new RegExp(`^/(${NextConfig.i18n.locales.join("|")})`), "");
      if (strippedPathLocale.startsWith("/api/")) {
        rewrittenPath = strippedPathLocale;
      }
    }
    rewrittenUrl = isExternalRewrite ? `${protocol}//${rewrittenHost}${rewrittenPath}` : new URL(rewrittenPath, event.url).href;
    finalQuery = {
      ...query,
      ...convertFromQueryString(rewrittenQuery)
    };
    rewrittenUrl += convertToQueryString(finalQuery);
    debug("rewrittenUrl", { rewrittenUrl, finalQuery, isUsingParams });
  }
  return {
    internalEvent: {
      ...event,
      query: finalQuery,
      rawPath: new URL(rewrittenUrl).pathname,
      url: rewrittenUrl
    },
    __rewrite: rewrite,
    isExternalRewrite
  };
}
function handleRepeatedSlashRedirect(event) {
  if (event.rawPath.match(/(\\|\/\/)/)) {
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: normalizeRepeatedSlashes(new URL(event.url))
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}
function handleTrailingSlashRedirect(event) {
  const url = new URL(event.rawPath, "http://localhost");
  if (
    // Someone is trying to redirect to a different origin, let's not do that
    url.host !== "localhost" || NextConfig.skipTrailingSlashRedirect || // We should not apply trailing slash redirect to API routes
    event.rawPath.startsWith("/api/")
  ) {
    return false;
  }
  const emptyBody = emptyReadableStream();
  if (NextConfig.trailingSlash && !event.headers["x-nextjs-data"] && !event.rawPath.endsWith("/") && !event.rawPath.match(/[\w-]+\.[\w]+$/g)) {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0]}/${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  if (!NextConfig.trailingSlash && event.rawPath.endsWith("/") && event.rawPath !== "/") {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0].replace(/\/$/, "")}${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  return false;
}
function handleRedirects(event, redirects) {
  const repeatedSlashRedirect = handleRepeatedSlashRedirect(event);
  if (repeatedSlashRedirect)
    return repeatedSlashRedirect;
  const trailingSlashRedirect = handleTrailingSlashRedirect(event);
  if (trailingSlashRedirect)
    return trailingSlashRedirect;
  const localeRedirect = handleLocaleRedirect(event);
  if (localeRedirect)
    return localeRedirect;
  const { internalEvent, __rewrite } = handleRewrites(event, redirects.filter((r) => !r.internal));
  if (__rewrite && !__rewrite.internal) {
    return {
      type: event.type,
      statusCode: __rewrite.statusCode ?? 308,
      headers: {
        Location: internalEvent.url
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
}
function fixDataPage(internalEvent, buildId) {
  const { rawPath, query } = internalEvent;
  const basePath = NextConfig.basePath ?? "";
  const dataPattern = `${basePath}/_next/data/${buildId}`;
  if (rawPath.startsWith("/_next/data") && !rawPath.startsWith(dataPattern)) {
    return {
      type: internalEvent.type,
      statusCode: 404,
      body: toReadableStream("{}"),
      headers: {
        "Content-Type": "application/json"
      },
      isBase64Encoded: false
    };
  }
  if (rawPath.startsWith(dataPattern) && rawPath.endsWith(".json")) {
    const newPath = `${basePath}${rawPath.slice(dataPattern.length, -".json".length).replace(/^\/index$/, "/")}`;
    query.__nextDataReq = "1";
    return {
      ...internalEvent,
      rawPath: newPath,
      query,
      url: new URL(`${newPath}${convertToQueryString(query)}`, internalEvent.url).href
    };
  }
  return internalEvent;
}
function handleFallbackFalse(internalEvent, prerenderManifest) {
  const { rawPath } = internalEvent;
  const { dynamicRoutes = {}, routes = {} } = prerenderManifest ?? {};
  const prerenderedFallbackRoutes = Object.entries(dynamicRoutes).filter(([, { fallback }]) => fallback === false);
  const routeFallback = prerenderedFallbackRoutes.some(([, { routeRegex }]) => {
    const routeRegexExp = new RegExp(routeRegex);
    return routeRegexExp.test(rawPath);
  });
  const locales = NextConfig.i18n?.locales;
  const routesAlreadyHaveLocale = locales?.includes(rawPath.split("/")[1]) || // If we don't use locales, we don't need to add the default locale
  locales === void 0;
  let localizedPath = routesAlreadyHaveLocale ? rawPath : `/${NextConfig.i18n?.defaultLocale}${rawPath}`;
  if (
    // Not if localizedPath is "/" tho, because that would not make it find `isPregenerated` below since it would be try to match an empty string.
    localizedPath !== "/" && NextConfig.trailingSlash && localizedPath.endsWith("/")
  ) {
    localizedPath = localizedPath.slice(0, -1);
  }
  const matchedStaticRoute = staticRouteMatcher(localizedPath);
  const prerenderedFallbackRoutesName = prerenderedFallbackRoutes.map(([name]) => name);
  const matchedDynamicRoute = dynamicRouteMatcher(localizedPath).filter(({ route }) => !prerenderedFallbackRoutesName.includes(route));
  const isPregenerated = Object.keys(routes).includes(localizedPath);
  if (routeFallback && !isPregenerated && matchedStaticRoute.length === 0 && matchedDynamicRoute.length === 0) {
    return {
      event: {
        ...internalEvent,
        rawPath: "/404",
        url: constructNextUrl(internalEvent.url, "/404"),
        headers: {
          ...internalEvent.headers,
          "x-invoke-status": "404"
        }
      },
      isISR: false
    };
  }
  return {
    event: internalEvent,
    isISR: routeFallback || isPregenerated
  };
}

// node_modules/@opennextjs/aws/dist/core/routing/middleware.js
init_stream();
init_utils();
var middlewareManifest = MiddlewareManifest;
var functionsConfigManifest = FunctionsConfigManifest;
var middleMatch = getMiddlewareMatch(middlewareManifest, functionsConfigManifest);
var REDIRECTS = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function defaultMiddlewareLoader() {
  return Promise.resolve().then(() => (init_edgeFunctionHandler(), edgeFunctionHandler_exports));
}
async function handleMiddleware(internalEvent, initialSearch, middlewareLoader = defaultMiddlewareLoader) {
  const headers = internalEvent.headers;
  if (headers["x-isr"] && headers["x-prerender-revalidate"] === PrerenderManifest?.preview?.previewModeId)
    return internalEvent;
  const normalizedPath = localizePath(internalEvent);
  const hasMatch = middleMatch.some((r) => r.test(normalizedPath));
  if (!hasMatch)
    return internalEvent;
  const initialUrl = new URL(normalizedPath, internalEvent.url);
  initialUrl.search = initialSearch;
  const url = initialUrl.href;
  const middleware = await middlewareLoader();
  const result = await middleware.default({
    // `geo` is pre Next 15.
    geo: {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: decodeURIComponent(headers["x-open-next-city"]),
      country: headers["x-open-next-country"],
      region: headers["x-open-next-region"],
      latitude: headers["x-open-next-latitude"],
      longitude: headers["x-open-next-longitude"]
    },
    headers,
    method: internalEvent.method || "GET",
    nextConfig: {
      basePath: NextConfig.basePath,
      i18n: NextConfig.i18n,
      trailingSlash: NextConfig.trailingSlash
    },
    url,
    body: convertBodyToReadableStream(internalEvent.method, internalEvent.body)
  });
  const statusCode = result.status;
  const responseHeaders = result.headers;
  const reqHeaders = {};
  const resHeaders = {};
  const filteredHeaders = [
    "x-middleware-override-headers",
    "x-middleware-next",
    "x-middleware-rewrite",
    // We need to drop `content-encoding` because it will be decoded
    "content-encoding"
  ];
  const xMiddlewareKey = "x-middleware-request-";
  responseHeaders.forEach((value, key) => {
    if (key.startsWith(xMiddlewareKey)) {
      const k = key.substring(xMiddlewareKey.length);
      reqHeaders[k] = value;
    } else {
      if (filteredHeaders.includes(key.toLowerCase()))
        return;
      if (key.toLowerCase() === "set-cookie") {
        resHeaders[key] = resHeaders[key] ? [...resHeaders[key], value] : [value];
      } else if (REDIRECTS.has(statusCode) && key.toLowerCase() === "location") {
        resHeaders[key] = normalizeLocationHeader(value, internalEvent.url);
      } else {
        resHeaders[key] = value;
      }
    }
  });
  const rewriteUrl = responseHeaders.get("x-middleware-rewrite");
  let isExternalRewrite = false;
  let middlewareQuery = internalEvent.query;
  let newUrl = internalEvent.url;
  if (rewriteUrl) {
    newUrl = rewriteUrl;
    if (isExternal(newUrl, internalEvent.headers.host)) {
      isExternalRewrite = true;
    } else {
      const rewriteUrlObject = new URL(rewriteUrl);
      middlewareQuery = getQueryFromSearchParams(rewriteUrlObject.searchParams);
      if ("__nextDataReq" in internalEvent.query) {
        middlewareQuery.__nextDataReq = internalEvent.query.__nextDataReq;
      }
    }
  }
  if (!rewriteUrl && !responseHeaders.get("x-middleware-next")) {
    const body = result.body ?? emptyReadableStream();
    return {
      type: internalEvent.type,
      statusCode,
      headers: resHeaders,
      body,
      isBase64Encoded: false
    };
  }
  return {
    responseHeaders: resHeaders,
    url: newUrl,
    rawPath: new URL(newUrl).pathname,
    type: internalEvent.type,
    headers: { ...internalEvent.headers, ...reqHeaders },
    body: internalEvent.body,
    method: internalEvent.method,
    query: middlewareQuery,
    cookies: internalEvent.cookies,
    remoteAddress: internalEvent.remoteAddress,
    isExternalRewrite,
    rewriteStatusCode: rewriteUrl && !isExternalRewrite ? statusCode : void 0
  };
}

// node_modules/@opennextjs/aws/dist/core/routingHandler.js
var MIDDLEWARE_HEADER_PREFIX = "x-middleware-response-";
var MIDDLEWARE_HEADER_PREFIX_LEN = MIDDLEWARE_HEADER_PREFIX.length;
var INTERNAL_HEADER_PREFIX = "x-opennext-";
var INTERNAL_HEADER_INITIAL_URL = `${INTERNAL_HEADER_PREFIX}initial-url`;
var INTERNAL_HEADER_LOCALE = `${INTERNAL_HEADER_PREFIX}locale`;
var INTERNAL_HEADER_RESOLVED_ROUTES = `${INTERNAL_HEADER_PREFIX}resolved-routes`;
var INTERNAL_HEADER_REWRITE_STATUS_CODE = `${INTERNAL_HEADER_PREFIX}rewrite-status-code`;
var INTERNAL_EVENT_REQUEST_ID = `${INTERNAL_HEADER_PREFIX}request-id`;
var geoHeaderToNextHeader = {
  "x-open-next-city": "x-vercel-ip-city",
  "x-open-next-country": "x-vercel-ip-country",
  "x-open-next-region": "x-vercel-ip-country-region",
  "x-open-next-latitude": "x-vercel-ip-latitude",
  "x-open-next-longitude": "x-vercel-ip-longitude"
};
function applyMiddlewareHeaders(eventOrResult, middlewareHeaders) {
  const isResult = isInternalResult(eventOrResult);
  const headers = eventOrResult.headers;
  const keyPrefix = isResult ? "" : MIDDLEWARE_HEADER_PREFIX;
  Object.entries(middlewareHeaders).forEach(([key, value]) => {
    if (value) {
      headers[keyPrefix + key] = Array.isArray(value) ? value.join(",") : value;
    }
  });
}
async function routingHandler(event, { assetResolver }) {
  try {
    for (const [openNextGeoName, nextGeoName] of Object.entries(geoHeaderToNextHeader)) {
      const value = event.headers[openNextGeoName];
      if (value) {
        event.headers[nextGeoName] = value;
      }
    }
    for (const key of Object.keys(event.headers)) {
      if (key.startsWith(INTERNAL_HEADER_PREFIX) || key.startsWith(MIDDLEWARE_HEADER_PREFIX)) {
        delete event.headers[key];
      }
    }
    let headers = getNextConfigHeaders(event, ConfigHeaders);
    let eventOrResult = fixDataPage(event, BuildId);
    if (isInternalResult(eventOrResult)) {
      return eventOrResult;
    }
    const redirect = handleRedirects(eventOrResult, RoutesManifest.redirects);
    if (redirect) {
      redirect.headers.Location = normalizeLocationHeader(redirect.headers.Location, event.url, true);
      debug("redirect", redirect);
      return redirect;
    }
    const middlewareEventOrResult = await handleMiddleware(
      eventOrResult,
      // We need to pass the initial search without any decoding
      // TODO: we'd need to refactor InternalEvent to include the initial querystring directly
      // Should be done in another PR because it is a breaking change
      new URL(event.url).search
    );
    if (isInternalResult(middlewareEventOrResult)) {
      return middlewareEventOrResult;
    }
    const middlewareHeadersPrioritized = globalThis.openNextConfig.dangerous?.middlewareHeadersOverrideNextConfigHeaders ?? false;
    if (middlewareHeadersPrioritized) {
      headers = {
        ...headers,
        ...middlewareEventOrResult.responseHeaders
      };
    } else {
      headers = {
        ...middlewareEventOrResult.responseHeaders,
        ...headers
      };
    }
    let isExternalRewrite = middlewareEventOrResult.isExternalRewrite ?? false;
    eventOrResult = middlewareEventOrResult;
    if (!isExternalRewrite) {
      const beforeRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.beforeFiles);
      eventOrResult = beforeRewrite.internalEvent;
      isExternalRewrite = beforeRewrite.isExternalRewrite;
      if (!isExternalRewrite) {
        const assetResult = await assetResolver?.maybeGetAssetResult?.(eventOrResult);
        if (assetResult) {
          applyMiddlewareHeaders(assetResult, headers);
          return assetResult;
        }
      }
    }
    const foundStaticRoute = staticRouteMatcher(eventOrResult.rawPath);
    const isStaticRoute = !isExternalRewrite && foundStaticRoute.length > 0;
    if (!(isStaticRoute || isExternalRewrite)) {
      const afterRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.afterFiles);
      eventOrResult = afterRewrite.internalEvent;
      isExternalRewrite = afterRewrite.isExternalRewrite;
    }
    let isISR = false;
    if (!isExternalRewrite) {
      const fallbackResult = handleFallbackFalse(eventOrResult, PrerenderManifest);
      eventOrResult = fallbackResult.event;
      isISR = fallbackResult.isISR;
    }
    const foundDynamicRoute = dynamicRouteMatcher(eventOrResult.rawPath);
    const isDynamicRoute = !isExternalRewrite && foundDynamicRoute.length > 0;
    if (!(isDynamicRoute || isStaticRoute || isExternalRewrite)) {
      const fallbackRewrites = handleRewrites(eventOrResult, RoutesManifest.rewrites.fallback);
      eventOrResult = fallbackRewrites.internalEvent;
      isExternalRewrite = fallbackRewrites.isExternalRewrite;
    }
    const isNextImageRoute = eventOrResult.rawPath.startsWith("/_next/image");
    const isRouteFoundBeforeAllRewrites = isStaticRoute || isDynamicRoute || isExternalRewrite;
    if (!(isRouteFoundBeforeAllRewrites || isNextImageRoute || // We need to check again once all rewrites have been applied
    staticRouteMatcher(eventOrResult.rawPath).length > 0 || dynamicRouteMatcher(eventOrResult.rawPath).length > 0)) {
      eventOrResult = {
        ...eventOrResult,
        rawPath: "/404",
        url: constructNextUrl(eventOrResult.url, "/404"),
        headers: {
          ...eventOrResult.headers,
          "x-middleware-response-cache-control": "private, no-cache, no-store, max-age=0, must-revalidate"
        }
      };
    }
    if (globalThis.openNextConfig.dangerous?.enableCacheInterception && !isInternalResult(eventOrResult)) {
      debug("Cache interception enabled");
      eventOrResult = await cacheInterceptor(eventOrResult);
      if (isInternalResult(eventOrResult)) {
        applyMiddlewareHeaders(eventOrResult, headers);
        return eventOrResult;
      }
    }
    applyMiddlewareHeaders(eventOrResult, headers);
    const resolvedRoutes = [
      ...foundStaticRoute,
      ...foundDynamicRoute
    ];
    debug("resolvedRoutes", resolvedRoutes);
    return {
      internalEvent: eventOrResult,
      isExternalRewrite,
      origin: false,
      isISR,
      resolvedRoutes,
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(eventOrResult, NextConfig.i18n) : void 0,
      rewriteStatusCode: middlewareEventOrResult.rewriteStatusCode
    };
  } catch (e) {
    error("Error in routingHandler", e);
    return {
      internalEvent: {
        type: "core",
        method: "GET",
        rawPath: "/500",
        url: constructNextUrl(event.url, "/500"),
        headers: {
          ...event.headers
        },
        query: event.query,
        cookies: event.cookies,
        remoteAddress: event.remoteAddress
      },
      isExternalRewrite: false,
      origin: false,
      isISR: false,
      resolvedRoutes: [],
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(event, NextConfig.i18n) : void 0
    };
  }
}
function isInternalResult(eventOrResult) {
  return eventOrResult != null && "statusCode" in eventOrResult;
}

// node_modules/@opennextjs/aws/dist/adapters/middleware.js
globalThis.internalFetch = fetch;
globalThis.__openNextAls = new AsyncLocalStorage();
var defaultHandler = async (internalEvent, options) => {
  const middlewareConfig = globalThis.openNextConfig.middleware;
  const originResolver = await resolveOriginResolver(middlewareConfig?.originResolver);
  const externalRequestProxy = await resolveProxyRequest(middlewareConfig?.override?.proxyExternalRequest);
  const assetResolver = await resolveAssetResolver(middlewareConfig?.assetResolver);
  const requestId = Math.random().toString(36);
  return runWithOpenNextRequestContext({
    isISRRevalidation: internalEvent.headers["x-isr"] === "1",
    waitUntil: options?.waitUntil,
    requestId
  }, async () => {
    const result = await routingHandler(internalEvent, { assetResolver });
    if ("internalEvent" in result) {
      debug("Middleware intercepted event", internalEvent);
      if (!result.isExternalRewrite) {
        const origin = await originResolver.resolve(result.internalEvent.rawPath);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_HEADER_INITIAL_URL]: internalEvent.url,
              [INTERNAL_HEADER_RESOLVED_ROUTES]: JSON.stringify(result.resolvedRoutes),
              [INTERNAL_EVENT_REQUEST_ID]: requestId,
              [INTERNAL_HEADER_REWRITE_STATUS_CODE]: String(result.rewriteStatusCode)
            }
          },
          isExternalRewrite: result.isExternalRewrite,
          origin,
          isISR: result.isISR,
          initialURL: result.initialURL,
          resolvedRoutes: result.resolvedRoutes
        };
      }
      try {
        return externalRequestProxy.proxy(result.internalEvent);
      } catch (e) {
        error("External request failed.", e);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_EVENT_REQUEST_ID]: requestId
            },
            rawPath: "/500",
            url: constructNextUrl(result.internalEvent.url, "/500"),
            method: "GET"
          },
          // On error we need to rewrite to the 500 page which is an internal rewrite
          isExternalRewrite: false,
          origin: false,
          isISR: result.isISR,
          initialURL: result.internalEvent.url,
          resolvedRoutes: [{ route: "/500", type: "page" }]
        };
      }
    }
    if (process.env.OPEN_NEXT_REQUEST_ID_HEADER || globalThis.openNextDebug) {
      result.headers[INTERNAL_EVENT_REQUEST_ID] = requestId;
    }
    debug("Middleware response", result);
    return result;
  });
};
var handler2 = await createGenericHandler({
  handler: defaultHandler,
  type: "middleware"
});
var middleware_default = {
  fetch: handler2
};
export {
  middleware_default as default,
  handler2 as handler
};
