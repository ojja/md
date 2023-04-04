import {
  useLoaderData
} from "/build/_shared/chunk-2V5GRIES.js";
import {
  Outlet,
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-523KVBGP.js";

// empty-module:~/models/category.server
var require_category = __commonJS({
  "empty-module:~/models/category.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/category/$catSlug/index.tsx
var import_category = __toESM(require_category());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CategorySlug() {
  const { data } = useLoaderData();
  console.log("params Base childD>", data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "Slug index: slug",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/category/$catSlug/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/category/$catSlug/index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  CategorySlug as default
};
//# sourceMappingURL=/build/routes/category/$catSlug/index-CV5BYDMF.js.map
