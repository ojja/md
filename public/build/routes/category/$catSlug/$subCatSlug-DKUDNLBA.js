import {
  useLoaderData
} from "/build/_shared/chunk-2V5GRIES.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-523KVBGP.js";

// app/routes/category/$catSlug/$subCatSlug.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CatSlug() {
  const { slug, params } = useLoaderData();
  console.log("params Base child inside>", params);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "Cat Sl:::::",
    slug
  ] }, void 0, true, {
    fileName: "app/routes/category/$catSlug/$subCatSlug.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
export {
  CatSlug as default
};
//# sourceMappingURL=/build/routes/category/$catSlug/$subCatSlug-DKUDNLBA.js.map
