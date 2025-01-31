function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { accessFile, copyPasteFile, createDirectory, readDirectory, readFile, renameFile, writeFileAsync } from '../../../utils/fileOperationsUtils.js';

/**
 * Sets up TailwindCSS configuration for an Expo project.
 * @param {object} context - Configuration context.
 * @param {function} statusCallback - Callback function to report status.
 */
export default function setupTailwind(_x, _x2) {
  return _setupTailwind.apply(this, arguments);
}

/**
 * Checks if TailwindCSS and NativeWind are installed.
 */
function _setupTailwind() {
  _setupTailwind = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(context, statusCallback) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return checkDependencies(statusCallback);
        case 3:
          if (_context.sent) {
            _context.next = 9;
            break;
          }
          _context.next = 6;
          return setupEntryAndApp(statusCallback, context);
        case 6:
          displaySuccessMessage(context);
          _context.next = 11;
          break;
        case 9:
          _context.next = 11;
          return handleAppSetup(statusCallback, context);
        case 11:
          _context.next = 18;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          statusCallback('error', chalk.redBright('Error setting up Tailwind configuration!'));
          console.error(_context.t0.message);
          throw _context.t0;
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _setupTailwind.apply(this, arguments);
}
function checkDependencies(_x3) {
  return _checkDependencies.apply(this, arguments);
}
/**
 * Copies Tailwind configuration files.
 */
function _checkDependencies() {
  _checkDependencies = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(statusCallback) {
    var packageJsonPath, packageJson, dependencies, missingDeps;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          packageJsonPath = path.join(process.cwd(), 'package.json'); // const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
          _context2.t0 = JSON;
          _context2.next = 4;
          return readFile(packageJsonPath);
        case 4:
          _context2.t1 = _context2.sent;
          packageJson = _context2.t0.parse.call(_context2.t0, _context2.t1);
          dependencies = _objectSpread(_objectSpread({}, packageJson.dependencies), packageJson.devDependencies);
          missingDeps = [];
          if (!dependencies.tailwindcss) missingDeps.push('tailwindcss');
          if (!dependencies.nativewind) missingDeps.push('nativewind');
          if (!missingDeps.length) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", false);
        case 12:
          return _context2.abrupt("return", true);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _checkDependencies.apply(this, arguments);
}
function copyConfigFiles(_x4) {
  return _copyConfigFiles.apply(this, arguments);
}
/**
 * Updates the Tailwind configuration file with the correct source directory.
 */
function _copyConfigFiles() {
  _copyConfigFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return copyFile(context.configFilesFolder, 'tailwind/tailwind.config.js', 'tailwind.config.js');
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _copyConfigFiles.apply(this, arguments);
}
function updateTailwindConfig() {
  return _updateTailwindConfig.apply(this, arguments);
}
/**
 * Updates package.json to add expo.doctor configuration.
 */
function _updateTailwindConfig() {
  _updateTailwindConfig = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var filesAndDirs, detectedDir, configPath, configContent, updatedContent;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return readDirectory(process.cwd());
        case 2:
          filesAndDirs = _context4.sent;
          detectedDir = ['src', 'app'].find(function (dir) {
            return filesAndDirs.some(function (entry) {
              return entry.isDirectory() && entry.name === dir;
            });
          });
          if (detectedDir) {
            _context4.next = 6;
            break;
          }
          throw new Error('No valid source directory found (src or app required).');
        case 6:
          configPath = path.join(process.cwd(), 'tailwind.config.js'); // const configContent = await fs.readFile(configPath, 'utf-8');
          _context4.next = 9;
          return readFile(configPath);
        case 9:
          configContent = _context4.sent;
          updatedContent = configContent.replace('./src/**/*.{js,jsx,ts,tsx}', "./".concat(detectedDir, "/**/*.{js,jsx,ts,tsx}")); // await fs.writeFile(configPath, updatedContent, 'utf-8');
          _context4.next = 13;
          return writeFileAsync(configPath, updatedContent);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _updateTailwindConfig.apply(this, arguments);
}
function updatePackageJson() {
  return _updatePackageJson.apply(this, arguments);
}
/**
 * Finds the project's main entry file.
 */
function _updatePackageJson() {
  _updatePackageJson = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var packageJsonPath, packageJson;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          packageJsonPath = path.join(process.cwd(), 'package.json'); // const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
          _context5.t0 = JSON;
          _context5.next = 4;
          return readFile(packageJsonPath);
        case 4:
          _context5.t1 = _context5.sent;
          packageJson = _context5.t0.parse.call(_context5.t0, _context5.t1);
          packageJson.expo = packageJson.expo || {};
          packageJson.expo.doctor = packageJson.expo.doctor || {};
          packageJson.expo.doctor.reactNativeDirectoryCheck = {
            listUnknownPackages: false
          };

          // await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
          _context5.next = 11;
          return writeFileAsync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _updatePackageJson.apply(this, arguments);
}
function findEntryFile(_x5) {
  return _findEntryFile.apply(this, arguments);
}
/**
 * Ensures the global.css import exists in the entry file.
 */
function _findEntryFile() {
  _findEntryFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(statusCallback) {
    var possibleEntryFiles, _i, _possibleEntryFiles, file, filePath;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          possibleEntryFiles = ['index.js', 'index.ts', 'index.jsx', 'index.tsx'];
          _i = 0, _possibleEntryFiles = possibleEntryFiles;
        case 2:
          if (!(_i < _possibleEntryFiles.length)) {
            _context6.next = 16;
            break;
          }
          file = _possibleEntryFiles[_i];
          filePath = path.join(process.cwd(), file);
          _context6.prev = 5;
          _context6.next = 8;
          return accessFile(filePath);
        case 8:
          return _context6.abrupt("return", filePath);
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](5);
        case 13:
          _i++;
          _context6.next = 2;
          break;
        case 16:
          statusCallback('error', chalk.redBright('No valid entry file found.'));
          return _context6.abrupt("return", null);
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[5, 11]]);
  }));
  return _findEntryFile.apply(this, arguments);
}
function ensureGlobalCssImport(_x6) {
  return _ensureGlobalCssImport.apply(this, arguments);
}
/**
 * Moves App.js (or App.ts, App.jsx, App.tsx) to the correct directory.
 */
function _ensureGlobalCssImport() {
  _ensureGlobalCssImport = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(entryFilePath) {
    var entryContent;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return readFile(entryFilePath);
        case 2:
          entryContent = _context7.sent;
          if (entryContent.includes('import "./global.css"')) {
            _context7.next = 6;
            break;
          }
          _context7.next = 6;
          return writeFileAsync(entryFilePath, "import \"./global.css\";\n".concat(entryContent));
        case 6:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _ensureGlobalCssImport.apply(this, arguments);
}
function moveAppFile(_x7) {
  return _moveAppFile.apply(this, arguments);
}
/**
 * Updates the entry file to point to the moved App.js (without extension).
 */
function _moveAppFile() {
  _moveAppFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(statusCallback) {
    var targetDirs, targetDir, _i2, _targetDirs, dir, dirPath, possibleFiles, sourceAppPath, _i3, _possibleFiles, file, filePath, targetAppPath;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          targetDirs = ['app', 'src'];
          targetDir = null;
          _i2 = 0, _targetDirs = targetDirs;
        case 3:
          if (!(_i2 < _targetDirs.length)) {
            _context8.next = 18;
            break;
          }
          dir = _targetDirs[_i2];
          dirPath = path.join(process.cwd(), dir);
          _context8.prev = 6;
          _context8.next = 9;
          return accessFile(dirPath);
        case 9:
          targetDir = dirPath;
          return _context8.abrupt("break", 18);
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](6);
        case 15:
          _i2++;
          _context8.next = 3;
          break;
        case 18:
          if (targetDir) {
            _context8.next = 22;
            break;
          }
          targetDir = path.join(process.cwd(), targetDirs[0]);
          // await fs.mkdir(targetDir, { recursive: true });
          _context8.next = 22;
          return createDirectory(targetDir);
        case 22:
          possibleFiles = ['App.js', 'App.ts', 'App.jsx', 'App.tsx'];
          sourceAppPath = null;
          _i3 = 0, _possibleFiles = possibleFiles;
        case 25:
          if (!(_i3 < _possibleFiles.length)) {
            _context8.next = 40;
            break;
          }
          file = _possibleFiles[_i3];
          filePath = path.join(process.cwd(), file);
          _context8.prev = 28;
          _context8.next = 31;
          return accessFile(filePath);
        case 31:
          sourceAppPath = filePath;
          return _context8.abrupt("break", 40);
        case 35:
          _context8.prev = 35;
          _context8.t1 = _context8["catch"](28);
        case 37:
          _i3++;
          _context8.next = 25;
          break;
        case 40:
          if (sourceAppPath) {
            _context8.next = 43;
            break;
          }
          statusCallback('error', chalk.redBright('No valid App file (App.js, App.ts, App.jsx, or App.tsx) found in the root directory.'));
          return _context8.abrupt("return", null);
        case 43:
          targetAppPath = path.join(targetDir, path.basename(sourceAppPath)); // await fs.rename(sourceAppPath, targetAppPath);
          _context8.next = 46;
          return renameFile(sourceAppPath, targetAppPath);
        case 46:
          return _context8.abrupt("return", targetAppPath);
        case 47:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[6, 13], [28, 35]]);
  }));
  return _moveAppFile.apply(this, arguments);
}
function updateEntryFile(_x8, _x9) {
  return _updateEntryFile.apply(this, arguments);
}
/**
 * Updates App.js content with a welcome message.
 */
function _updateEntryFile() {
  _updateEntryFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(entryFilePath, targetAppPath) {
    var entryContent, newImportPath, updatedEntryContent;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return readFile(entryFilePath);
        case 2:
          entryContent = _context9.sent;
          // Get relative path and remove file extension
          newImportPath = "./".concat(path.relative(process.cwd(), targetAppPath).replace(/\\/g, '/'));
          newImportPath = newImportPath.replace(/\.(js|jsx|ts|tsx)$/, ''); // Remove extension

          // Update import statement without file extension
          updatedEntryContent = entryContent.replace(/(['"])\.\/App(\.js|\.jsx|\.ts|\.tsx)?(['"])/g, "$1".concat(newImportPath, "$3")); // await fs.writeFile(entryFilePath, updatedEntryContent, 'utf-8');
          _context9.next = 8;
          return writeFileAsync(entryFilePath, updatedEntryContent);
        case 8:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _updateEntryFile.apply(this, arguments);
}
function updateAppFile(_x10, _x11, _x12) {
  return _updateAppFile.apply(this, arguments);
}
/**
 * Copies a file from the template config folder to the project root.
 */
function _updateAppFile() {
  _updateAppFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(appFilePath, appName, statusCallback) {
    var appContent, newReturnContent, updatedAppContent, _newReturnContent, _updatedAppContent;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return readFile(appFilePath);
        case 2:
          appContent = _context10.sent;
          _context10.next = 5;
          return checkDependencies(statusCallback);
        case 5:
          if (_context10.sent) {
            _context10.next = 12;
            break;
          }
          newReturnContent = "\n    <View style={styles.container}>\n      <Text> Welcome to ".concat(appName, " Project!</Text>\n      <Text>Edit the files in the src directory to get started.</Text>\n      <StatusBar style=\"auto\" />\n    </View>");
          updatedAppContent = appContent.replace(/return\s*\([\s\S]*?\);/, "return (".concat(newReturnContent, ");")); // await fs.writeFile(appFilePath, updatedAppContent, 'utf-8');
          _context10.next = 10;
          return writeFileAsync(appFilePath, updatedAppContent);
        case 10:
          _context10.next = 16;
          break;
        case 12:
          _newReturnContent = "\n    <View className=\"flex-1\">\n      <View className=\"py-12 md:py-24 lg:py-32 xl:py-48\">\n        <View className=\"px-4 md:px-6\">\n          <View className=\"flex flex-col items-center gap-4 text-center\">\n            <Text role=\"heading\" className=\"text-3xl text-center native:text-5xl font-bold\">\n              Welcome to ".concat(appName, " Project!\n            </Text>\n            <Text className=\"text-lg text-center text-gray-500 dark:text-gray-400\">\n              Edit the files in the src directory to get started.\n            </Text>\n          </View>\n        </View>\n      </View>\n    </View>");
          _updatedAppContent = appContent.replace(/return\s*\([\s\S]*?\);/, "return (".concat(_newReturnContent, ");")); // await fs.writeFile(appFilePath, updatedAppContent, 'utf-8');
          _context10.next = 16;
          return writeFileAsync(appFilePath, _updatedAppContent);
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _updateAppFile.apply(this, arguments);
}
function copyFile(_x13, _x14, _x15) {
  return _copyFile.apply(this, arguments);
}
/**
 * Handles the app setup process, including moving App.js, updating entry files,
 * and configuring TailwindCSS.
 */
function _copyFile() {
  _copyFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(basePath, src, dest) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return copyPasteFile(path.join(basePath, src), path.join(process.cwd(), dest));
        case 2:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _copyFile.apply(this, arguments);
}
function handleAppSetup(_x16, _x17) {
  return _handleAppSetup.apply(this, arguments);
}
/**
 * Ensures the entry file is updated and moves App.js to the correct directory.
 */
function _handleAppSetup() {
  _handleAppSetup = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(statusCallback, context) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          statusCallback('start', "\uD83C\uDF3F Sprinkling Tailwind magic: ".concat(chalk.cyan('Gathering herbs...')));

          // Copy Tailwind Config & Update Paths
          _context12.next = 3;
          return copyConfigFiles(context);
        case 3:
          _context12.next = 5;
          return updateTailwindConfig();
        case 5:
          _context12.next = 7;
          return copyFile(context.configFilesFolder, 'tailwind/global.css', 'global.css');
        case 7:
          _context12.next = 9;
          return writeFileAsync(path.join(process.cwd(), '.expoignore'), "tailwind.config.js");
        case 9:
          _context12.next = 11;
          return updatePackageJson();
        case 11:
          _context12.next = 13;
          return copyFile(context.configFilesFolder, 'tailwind/babel.config.js', 'babel.config.js');
        case 13:
          _context12.next = 15;
          return copyFile(context.configFilesFolder, 'tailwind/metro.config.js', 'metro.config.js');
        case 15:
          if (!(context.language === 'typescript')) {
            _context12.next = 20;
            break;
          }
          _context12.next = 18;
          return copyFile(context.configFilesFolder, 'tailwind/global.d.ts', 'global.d.ts');
        case 18:
          _context12.next = 20;
          return copyFile(context.configFilesFolder, 'tailwind/tsconfig.json', 'tsconfig.json');
        case 20:
          _context12.next = 22;
          return setupEntryAndApp(statusCallback, context);
        case 22:
          statusCallback('success', "\uD83C\uDF3F Sprinkling Tailwind magic: ".concat(chalk.greenBright('Blending flavors...')));
          displaySuccessMessage(context);
        case 24:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _handleAppSetup.apply(this, arguments);
}
function setupEntryAndApp(_x18, _x19) {
  return _setupEntryAndApp.apply(this, arguments);
}
/**
 * Displays a final success message with next steps.
 */
function _setupEntryAndApp() {
  _setupEntryAndApp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(statusCallback, context) {
    var entryFilePath, targetAppPath;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return findEntryFile(statusCallback);
        case 2:
          entryFilePath = _context13.sent;
          _context13.t0 = entryFilePath;
          if (!_context13.t0) {
            _context13.next = 8;
            break;
          }
          _context13.next = 7;
          return checkDependencies(statusCallback);
        case 7:
          _context13.t0 = _context13.sent;
        case 8:
          if (!_context13.t0) {
            _context13.next = 11;
            break;
          }
          _context13.next = 11;
          return ensureGlobalCssImport(entryFilePath);
        case 11:
          _context13.next = 13;
          return moveAppFile(statusCallback);
        case 13:
          targetAppPath = _context13.sent;
          if (targetAppPath) {
            _context13.next = 16;
            break;
          }
          return _context13.abrupt("return");
        case 16:
          _context13.next = 18;
          return updateEntryFile(entryFilePath, targetAppPath);
        case 18:
          _context13.next = 20;
          return updateAppFile(targetAppPath, context.appName, statusCallback);
        case 20:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _setupEntryAndApp.apply(this, arguments);
}
function displaySuccessMessage(context) {
  console.log(chalk.white(''));
  console.log(chalk.white('--------------------------------------------'));
  console.log("\uD83C\uDF89 Expo app setup completed successfully! \uD83D\uDE80  \n\u2728 All configurations are in place, and your app is ready to go!  \n\n\uD83D\uDC49 Next steps:\n   1. Navigate to your project folder:\n      cd ".concat(context.projectName, "\n   2. Start your development server:\n      npx expo start\n\n\uD83D\uDCA1 ").concat(chalk.bold.white('Happy coding!'), " \uD83D\uDE0A  \n\n\uD83D\uDCE2 Found this tool helpful? Let us know or report issues!"));
}