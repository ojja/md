import {
  AddToCart,
  St,
  mt,
  require_build,
  require_solid,
  tt,
  ve
} from "/build/_shared/chunk-HOJCPMPD.js";
import "/build/_shared/chunk-2VRDNHNX.js";
import {
  useLoaderData
} from "/build/_shared/chunk-2V5GRIES.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-523KVBGP.js";

// app/routes/products/$productId.tsx
var import_solid = __toESM(require_solid());
var import_react2 = __toESM(require_react());
var import_react_lazy_load_image_component = __toESM(require_build());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var product2 = {
  id: 12,
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" }
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat."
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee."
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee."
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee."
    }
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" }
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true }
  ],
  description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton"
  ],
  details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
};
var features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  { name: "Material", description: "Solid walnut base with rare earth magnets and powder coated steel card cover" },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  { name: "Considerations", description: "Made from natural materials. Grain and color vary with each item." }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ProductSingle() {
  const product = useLoaderData();
  const nearestNumberRating = Math.round(product.rating);
  const [selectedColor, setSelectedColor] = (0, import_react2.useState)(product2.colors[0]);
  const [selectedSize, setSelectedSize] = (0, import_react2.useState)(product2.sizes[2]);
  let [isOpenSize, setIsOpenSize] = (0, import_react2.useState)(false);
  const [isOpenCart, setIsOpenCart] = import_react2.default.useState(false);
  function closeModal() {
    setIsOpenSize(false);
  }
  function openModal() {
    isOpenSize(true);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "pt-12 pb-24 overflow-hidden bg-blueGray-100 rounded-b-10xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap -mx-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-4" }, void 0, false, {
        fileName: "app/routes/products/$productId.tsx",
        lineNumber: 138,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-4 mb-16 lg:w-1/2 lg:mb-0" }, void 0, false, {
        fileName: "app/routes/products/$productId.tsx",
        lineNumber: 141,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-4 lg:w-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2 mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs tracking-wider text-gray-400", children: "APPLE #3299803" }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 146,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 mb-4 text-5xl font-medium md:text-4xl font-heading", children: product.title }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 147,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-900 sm:pr-12", children: product.category }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 148,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { id: "information-heading", className: "sr-only", children: "Product information" }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 149,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl text-gray-900", children: product.price }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 152,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 145,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "sr-only", children: "Reviews" }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 157,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: Array(5).fill(0).map((_, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: `h-5 w-5 flex-shrink-0 ${idx < nearestNumberRating ? "text-gray-900" : "text-gray-200"}`, viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", clipRule: "evenodd" }, void 0, false, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 162,
              columnNumber: 49
            }, this) }, idx, false, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 161,
              columnNumber: 45
            }, this)) }, void 0, false, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 159,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "sr-only", children: [
              nearestNumberRating,
              " out of 5 stars"
            ] }, void 0, true, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 166,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 158,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 156,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: "Color" }, void 0, false, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 172,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt, { value: selectedColor, onChange: setSelectedColor, className: "mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt.Label, { className: "sr-only", children: " Choose a color " }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 175,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: product2.colors.map((color) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                mt.Option,
                {
                  value: color,
                  className: ({ active, checked }) => classNames(
                    color.selectedClass,
                    active && checked ? "ring ring-offset-1" : "",
                    !active && checked ? "ring-2" : "",
                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt.Label, { as: "span", className: "sr-only", children: [
                      " ",
                      color.name,
                      " "
                    ] }, void 0, true, {
                      fileName: "app/routes/products/$productId.tsx",
                      lineNumber: 190,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: classNames(
                          color.class,
                          "h-8 w-8 rounded-full border border-black border-opacity-10"
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/products/$productId.tsx",
                        lineNumber: 194,
                        columnNumber: 53
                      },
                      this
                    )
                  ]
                },
                color.name,
                true,
                {
                  fileName: "app/routes/products/$productId.tsx",
                  lineNumber: 178,
                  columnNumber: 49
                },
                this
              )) }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 176,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 174,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 171,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: "Size" }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 210,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "text-sm font-medium text-indigo-600 hover:text-indigo-500", onClick: openModal, children: "Size guide" }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 211,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt, { appear: true, show: isOpenSize, as: import_react2.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(St, { as: "div", className: "relative z-10", onClose: closeModal, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  tt.Child,
                  {
                    as: import_react2.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
                      fileName: "app/routes/products/$productId.tsx",
                      lineNumber: 225,
                      columnNumber: 53
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/products/$productId.tsx",
                    lineNumber: 216,
                    columnNumber: 49
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center min-h-full p-4 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  tt.Child,
                  {
                    as: import_react2.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(St.Panel, { className: "w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        St.Title,
                        {
                          as: "h3",
                          className: "text-lg font-medium leading-6 text-gray-900",
                          children: "Payment successful"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/products/$productId.tsx",
                          lineNumber: 240,
                          columnNumber: 65
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Your payment has been successfully submitted. We\u2019ve sent you an email with all of the details of your order." }, void 0, false, {
                        fileName: "app/routes/products/$productId.tsx",
                        lineNumber: 247,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/products/$productId.tsx",
                        lineNumber: 246,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                          onClick: closeModal,
                          children: "Got it, thanks!"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/products/$productId.tsx",
                          lineNumber: 254,
                          columnNumber: 69
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/products/$productId.tsx",
                        lineNumber: 253,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/products/$productId.tsx",
                      lineNumber: 239,
                      columnNumber: 61
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/products/$productId.tsx",
                    lineNumber: 230,
                    columnNumber: 57
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/products/$productId.tsx",
                  lineNumber: 229,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/products/$productId.tsx",
                  lineNumber: 228,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 215,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 214,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 209,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt, { value: selectedSize, onChange: setSelectedSize, className: "mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt.Label, { className: "sr-only", children: " Choose a size " }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 271,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4", children: product2.sizes.map((size) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                mt.Option,
                {
                  value: size,
                  disabled: !size.inStock,
                  className: ({ active }) => classNames(
                    size.inStock ? "cursor-pointer bg-white text-gray-900 shadow-sm" : "cursor-not-allowed bg-gray-50 text-gray-200",
                    active ? "ring-2 ring-indigo-500" : "",
                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                  ),
                  children: ({ active, checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mt.Label, { as: "span", children: size.name }, void 0, false, {
                      fileName: "app/routes/products/$productId.tsx",
                      lineNumber: 290,
                      columnNumber: 61
                    }, this),
                    size.inStock ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "span",
                      {
                        className: classNames(
                          active ? "border" : "border-2",
                          checked ? "border-indigo-500" : "border-transparent",
                          "pointer-events-none absolute -inset-px rounded-md"
                        ),
                        "aria-hidden": "true"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/products/$productId.tsx",
                        lineNumber: 292,
                        columnNumber: 65
                      },
                      this
                    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: "absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "svg",
                          {
                            className: "absolute inset-0 w-full h-full text-gray-200 stroke-2",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            stroke: "currentColor",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: 0, y1: 100, x2: 100, y2: 0, vectorEffect: "non-scaling-stroke" }, void 0, false, {
                              fileName: "app/routes/products/$productId.tsx",
                              lineNumber: 311,
                              columnNumber: 73
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/products/$productId.tsx",
                            lineNumber: 305,
                            columnNumber: 69
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/products/$productId.tsx",
                        lineNumber: 301,
                        columnNumber: 65
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/routes/products/$productId.tsx",
                    lineNumber: 289,
                    columnNumber: 57
                  }, this)
                },
                size.name,
                false,
                {
                  fileName: "app/routes/products/$productId.tsx",
                  lineNumber: 274,
                  columnNumber: 49
                },
                this
              )) }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 272,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 270,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 208,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-10 space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              AddToCart,
              {
                setIsOpenCart,
                classNames: "inline-flex justify-center rounded-lg font-medium py-3 px-8 text-base bg-slate-900 text-white w-full border-2 border-solid border-slate-900 hover:bg-slate-700 hover:border-slate-700"
              },
              void 0,
              false,
              {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 323,
                columnNumber: 37
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "items-center justify-center w-1/2 px-8 py-3 text-base font-medium capitalize border-2 border-solid rounded-md border-slate-600 text-slate hover:bg-slate-600 hover:text-white focus:outline-none",
                children: "Direct checkout"
              },
              void 0,
              false,
              {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 328,
                columnNumber: 37
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 322,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 169,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mx-auto bg-white rounded-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve, { as: "div", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Button, { className: "flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "What is your refund policy?" }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 344,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_solid.ChevronUpIcon,
                {
                  className: `${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-500`
                },
                void 0,
                false,
                {
                  fileName: "app/routes/products/$productId.tsx",
                  lineNumber: 345,
                  columnNumber: 57
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 343,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Panel, { className: "px-4 pt-4 pb-2 text-sm text-gray-500", children: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked." }, void 0, false, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 350,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 342,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 340,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve, { as: "div", className: "mt-2", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Button, { className: "flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Do you offer technical support?" }, void 0, false, {
                fileName: "app/routes/products/$productId.tsx",
                lineNumber: 361,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                import_solid.ChevronUpIcon,
                {
                  className: `${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-500`
                },
                void 0,
                false,
                {
                  fileName: "app/routes/products/$productId.tsx",
                  lineNumber: 362,
                  columnNumber: 57
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 360,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Panel, { className: "px-4 pt-4 pb-2 text-sm text-gray-500", children: "No." }, void 0, false, {
              fileName: "app/routes/products/$productId.tsx",
              lineNumber: 367,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 359,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 357,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 339,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 338,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 337,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products/$productId.tsx",
        lineNumber: 144,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products/$productId.tsx",
      lineNumber: 137,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/products/$productId.tsx",
      lineNumber: 136,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 bg-white border-t-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container grid items-center grid-cols-1 px-4 mx-auto gap-y-16 gap-x-8 py-14 sm:px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Technical Specifications" }, void 0, false, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 383,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-gray-500", children: "The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists." }, void 0, false, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 384,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8", children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4 border-t border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900", children: feature.name }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 392,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-2 text-sm text-gray-500", children: feature.description }, void 0, false, {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 393,
            columnNumber: 41
          }, this)
        ] }, feature.name, true, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 391,
          columnNumber: 37
        }, this)) }, void 0, false, {
          fileName: "app/routes/products/$productId.tsx",
          lineNumber: 389,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products/$productId.tsx",
        lineNumber: 382,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react_lazy_load_image_component.LazyLoadImage,
          {
            alt: product.title,
            src: "https://picsum.photos/350?random=1",
            placeholderSrc: "https://picsum.photos/50?random=1",
            className: "bg-gray-100 rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 399,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react_lazy_load_image_component.LazyLoadImage,
          {
            alt: product.title,
            src: "https://picsum.photos/350?random=2",
            placeholderSrc: "https://picsum.photos/50?random=2",
            className: "bg-gray-100 rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 406,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react_lazy_load_image_component.LazyLoadImage,
          {
            alt: product.title,
            src: "https://picsum.photos/350?random=3",
            placeholderSrc: "https://picsum.photos/50?random=3",
            className: "bg-gray-100 rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 413,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react_lazy_load_image_component.LazyLoadImage,
          {
            alt: product.title,
            src: "https://picsum.photos/350?random=5",
            className: "bg-gray-100 rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/routes/products/$productId.tsx",
            lineNumber: 420,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/products/$productId.tsx",
        lineNumber: 398,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products/$productId.tsx",
      lineNumber: 381,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/products/$productId.tsx",
      lineNumber: 380,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products/$productId.tsx",
    lineNumber: 135,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/products/$productId.tsx",
    lineNumber: 134,
    columnNumber: 9
  }, this);
}
export {
  ProductSingle as default
};
//# sourceMappingURL=/build/routes/products/$productId-J65H6Y4X.js.map
