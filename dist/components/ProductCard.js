"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyProductCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
var jpg_product_card_1 = require("jpg-product-card");
var product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: '../../public/coffee-mug.png'
};
var MyProductCard = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 6 : _b, _c = _a.maxcount, maxcount = _c === void 0 ? 10 : _c, _d = _a.color, color = _d === void 0 ? 'rgba(250,11,0,0.2)' : _d, _e = _a.shadow, shadow = _e === void 0 ? { boxShadow: '100px 100px 10px rgba(250,250,0,0.2)' } : _e, _f = _a.background, background = _f === void 0 ? { backgroundColor: color } : _f, _g = _a.background2, background2 = _g === void 0 ? { backgroundColor: color } : _g, _h = _a.estilofinal, estilofinal = _h === void 0 ? __assign(__assign({}, shadow), background2) : _h;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "App App-header" }, { children: (0, jsx_runtime_1.jsx)(jpg_product_card_1.ProductCard, __assign({ product: product, initialValues: {
                count: count,
                maxCount: maxcount,
            }, 
            // style={{ color: fontColor, backgroundColor }}
            style: shadow }, { children: function (_a) {
                var reset = _a.reset, count = _a.count, isMaxCountReached = _a.isMaxCountReached, maxCount = _a.maxCount, increaseBy = _a.increaseBy;
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(jpg_product_card_1.ProductImage, {}, void 0), (0, jsx_runtime_1.jsx)(jpg_product_card_1.ProductTitle, {}, void 0), (0, jsx_runtime_1.jsx)(jpg_product_card_1.ProductButtons, { style: estilofinal }, void 0), count] }, void 0));
            } }), product.id) }), void 0));
};
exports.MyProductCard = MyProductCard;
