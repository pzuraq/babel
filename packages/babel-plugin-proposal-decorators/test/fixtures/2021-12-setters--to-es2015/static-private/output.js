var _call_a, _initStatic;

class Foo {
  static setA(v) {
    babelHelpers.classStaticPrivateFieldSpecSet(this, Foo, _a, v);
  }

}

function _set_a(v) {
  _call_a(this, v);
}

var _a = {
  get: void 0,
  set: _set_a
};

(() => {
  [_call_a, _initStatic] = babelHelpers.applyDecs(Foo, [[dec, 9, "a", function (v) {
    return this.value = v;
  }]], []);

  _initStatic(Foo);
})();

babelHelpers.defineProperty(Foo, "value", 1);