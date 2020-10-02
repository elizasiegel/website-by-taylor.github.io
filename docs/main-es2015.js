(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rDN":
/*!***************************************************************!*\
  !*** ./src/app/photos/france-color/france-color.component.ts ***!
  \***************************************************************/
/*! exports provided: FranceColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranceColorComponent", function() { return FranceColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-directory */ "Pky/");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-header/page-header.component */ "zAId");
/* harmony import */ var _photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo-grid/photo-grid.component */ "Z2aC");
/* harmony import */ var _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../photo-footer/photo-footer.component */ "/0wd");






class FranceColorComponent {
    constructor() {
        this.headerLine1 = 'Pale sunset';
        this.headerLine2 = 'Paris and Étretat, May-June, 2017. A vivid sunburst appearing and vanishing ' +
            'behind purple clouds.';
        this.imgs = _data_directory__WEBPACK_IMPORTED_MODULE_1__["PALESUNSET"];
    }
    ngOnInit() {
    }
}
FranceColorComponent.ɵfac = function FranceColorComponent_Factory(t) { return new (t || FranceColorComponent)(); };
FranceColorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FranceColorComponent, selectors: [["app-france-color"]], decls: 6, vars: 3, consts: [[1, "page-container"], [1, "header-container"], [3, "line1", "line2"], [1, "page-contents"], [3, "imgs"]], template: function FranceColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-photo-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-photo-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line1", ctx.headerLine1)("line2", ctx.headerLine2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgs", ctx.imgs);
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGridComponent"], _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_4__["PhotoFooterComponent"]], styles: [".page-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-container[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.page-contents[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    align-self: center;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL2ZyYW5jZS1jb2xvci9mcmFuY2UtY29sb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9mcmFuY2UtY29sb3IvZnJhbmNlLWNvbG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWdlLWNvbnRlbnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FranceColorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-france-color',
                templateUrl: './france-color.component.html',
                styleUrls: ['./france-color.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/0wd":
/*!********************************************************!*\
  !*** ./src/app/photo-footer/photo-footer.component.ts ***!
  \********************************************************/
/*! exports provided: PhotoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoFooterComponent", function() { return PhotoFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PhotoFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoFooterComponent.ɵfac = function PhotoFooterComponent_Factory(t) { return new (t || PhotoFooterComponent)(); };
PhotoFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoFooterComponent, selectors: [["app-photo-footer"]], decls: 13, vars: 0, consts: [[1, "photo-footer-container"], ["routerLink", "/moonscapes", "routerLinkActive", "activePage", 1, "item"], [1, "underline"], ["routerLink", "/pale-sunset", "routerLinkActive", "activePage", 1, "item"], ["routerLink", "/paris-coast", "routerLinkActive", "activePage", 1, "item"], ["routerLink", "/small-elations", "routerLinkActive", "activePage", 1, "item"]], template: function PhotoFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Moonscapes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Pale Sunset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Paris, then to the coast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Small elations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%] {\n    color: #4f4f4f;\n}\n\n.photo-footer-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 6em;\n}\n\n.item[_ngcontent-%COMP%] {\n    font-family: 'Bellefair', serif;\n    font-size: 1.2em;\n    margin: 1em;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #DF7234;\n  opacity: 1;\n}\n\n.activePage[_ngcontent-%COMP%] {\n  color: #516A44;\n}\n\n.activePage[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  background-color: #516A44;\n  opacity: 1;\n}\n\n.activePage[_ngcontent-%COMP%]:hover {\n  color: #516A44;\n}\n\n.underline[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #DF7234;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tZm9vdGVyL3Bob3RvLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9waG90by1mb290ZXIvcGhvdG8tZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBjb2xvcjogIzRmNGY0Zjtcbn1cblxuLnBob3RvLWZvb3Rlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogNmVtO1xufVxuXG4uaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4uaXRlbTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNERjcyMzQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5hY3RpdmVQYWdlIHtcbiAgY29sb3I6ICM1MTZBNDQ7XG59XG5cbi5hY3RpdmVQYWdlIC51bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE2QTQ0O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYWN0aXZlUGFnZTpob3ZlciB7XG4gIGNvbG9yOiAjNTE2QTQ0O1xufVxuXG4udW5kZXJsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREY3MjM0O1xuICBvcGFjaXR5OiAwO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-footer',
                templateUrl: './photo-footer.component.html',
                styleUrls: ['./photo-footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylormcpherson/elizasiegel.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "1PKx":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-directory */ "Pky/");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-header/page-header.component */ "zAId");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-card/photo-card.component */ "xvLB");






function PhotosComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-photo-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", p_r1.title)("cardColor", p_r1.hoverColor)("cardLink", p_r1.link)("cardImg", p_r1.backgroundImg);
} }
class PhotosComponent {
    constructor() {
        this.headerLine1 = 'Film Photography';
        this.headerLine2 = '';
        this.photos = _data_directory__WEBPACK_IMPORTED_MODULE_1__["PHOTOS"];
    }
    ngOnInit() {
    }
}
PhotosComponent.ɵfac = function PhotosComponent_Factory(t) { return new (t || PhotosComponent)(); };
PhotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotosComponent, selectors: [["app-photos"]], decls: 5, vars: 3, consts: [[1, "photos-container"], [1, "photos-header"], [3, "line1", "line2"], ["class", "page-contents", 4, "ngFor", "ngForOf"], [1, "page-contents"], [3, "cardTitle", "cardColor", "cardLink", "cardImg"]], template: function PhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhotosComponent_div_4_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line1", ctx.headerLine1)("line2", ctx.headerLine2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.photos);
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_4__["PhotoCardComponent"]], styles: [".photos-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.photos-header[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.page-contents[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3Rvcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGhvdG9zLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWdlLWNvbnRlbnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photos',
                templateUrl: './photos.component.html',
                styleUrls: ['./photos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2hwA":
/*!***************************************************!*\
  !*** ./src/app/photos/summer/summer.component.ts ***!
  \***************************************************/
/*! exports provided: SummerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummerComponent", function() { return SummerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-directory */ "Pky/");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-header/page-header.component */ "zAId");
/* harmony import */ var _photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo-grid/photo-grid.component */ "Z2aC");
/* harmony import */ var _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../photo-footer/photo-footer.component */ "/0wd");






class SummerComponent {
    constructor() {
        this.headerLine1 = 'Small elations';
        this.headerLine2 = 'Baltimore, Canton, Florence, Coney Island, 2018-2019. ' +
            'The sweetness of an oversaturated summer.';
        this.imgs = _data_directory__WEBPACK_IMPORTED_MODULE_1__["ELATIONS"];
    }
    ngOnInit() {
    }
}
SummerComponent.ɵfac = function SummerComponent_Factory(t) { return new (t || SummerComponent)(); };
SummerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummerComponent, selectors: [["app-summer"]], decls: 6, vars: 3, consts: [[1, "page-container"], [1, "header-container"], [3, "line1", "line2"], [1, "page-contents"], [3, "imgs"]], template: function SummerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-photo-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-photo-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line1", ctx.headerLine1)("line2", ctx.headerLine2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgs", ctx.imgs);
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGridComponent"], _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_4__["PhotoFooterComponent"]], styles: [".page-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-container[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3N1bW1lci9zdW1tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9zdW1tZXIvc3VtbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summer',
                templateUrl: './summer.component.html',
                styleUrls: ['./summer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() {
        this.headerLine1 = 'Reach me by email at siegel.eliza(at)gmail.com';
        this.headerLine2 = 'Follow me on Twitter @ElizaISiegel or connect with me on LinkedIn.';
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 46, vars: 0, consts: [[1, "about-container"], [1, "about-header"], [1, "header-container"], [1, "header-content"], [1, "line1"], ["href", "mailto:siegel.eliza@gmail.com"], [1, "line2"], ["href", "https://twitter.com/ElizaISiegel", "target", "_blank"], ["href", "https://www.linkedin.com/in/eliza-siegel-032380147", "target", "_blank"], [1, "page-contents"], [1, "about-words"], [1, "title"], ["href", "https://irwgs.columbia.edu/2020-irwgs-prize-winners-announced/"], ["href", "https://www.therationalonline.com/reading/category/IRRATIONAL+TAKES", 1, "itals"], ["href", "https://tol.org/", 1, "itals"], ["href", "https://voicesandvisionsjournal.com/", 1, "itals"], ["href", "https://www.amazon.com/New-Yorks-Best-Emerging-Poets/dp/1979352887", 1, "itals"], ["href", "https://issuu.com/collectiveadvocacyproject/docs/_sic._", 1, "itals"], ["href", "https://issuu.com/roachesaup/docs/roaches_book_for_online_publishing", 1, "itals"], ["href", "https://fellowvoices.wordpress.com/2018/10/09/sentiment-sentimentality-gendered-credibility-in-the-kavanaugh-hearings/", 1, "itals"], [1, "about-img"], ["src", "./assets/img/eliza-about.png", "alt", "headshot", "width", "100%"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reach me by email at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "siegel.eliza(at)gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Follow me on Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "@ElizaISiegel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " or connect with me on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LinkedIn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A0\u00A0\u00A0\u00A0\u00A0Eliza Siegel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " is a New Jersey-based interdisciplinary writer and artist who recently graduated from Barnard College of Columbia University with a BA in American Studies. She is the recipient of the 2020 John Demos Prize in American Studies and the 2020 Women and Gender Studies Prize administered by Columbia University\u2019s Institute for Research on Women, Gender, and Sexuality (read her interview with IRWGS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "). Most days, she can be found writing scathing political satire for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " The Rational, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " or else digging up carrots on a small New Jersey farm. In the past, she worked as an editorial intern at the Prague-based newsroom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Transitions Online. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Her poetry and editorial writing has appeared in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Voices and Visions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Literary Journal, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " New York\u2019s Best Emerging Poets: An Anthology, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " [sic.] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Literary Journal, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Roaches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Literary Journal, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Fellow Voices, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " and more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.about-header[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-content[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-self: center;\n  align-items: center;\n  margin-bottom: 2em;\n  border: 1px solid #626262;\n  border-radius: 4em;\n  padding: 1.6em;\n}\n.line1[_ngcontent-%COMP%], .line2[_ngcontent-%COMP%] {\n  font-family: 'Bellefair', serif;\n  font-size: 1.4em;\n  color: #525252;\n}\n.line2[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.header-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #516A44;\n    font-family: 'Bellefair', serif;\n}\n.header-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    color: #DF7234;\n    opacity: .8;\n}\n\n.page-contents[_ngcontent-%COMP%] {\n    margin: 2em 0 2em 0;\n    width: 84%;\n    font-size: 1.1em;\n    font-weight: 300;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n.about-img[_ngcontent-%COMP%] {\n    width: 60%;\n    margin-left: 4em;\n}\n.about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 4em;\n}\n.about-words[_ngcontent-%COMP%] {\n    width: 100%;\n    line-height: 2em;\n    text-align: justify;\n}\n.title[_ngcontent-%COMP%] {\n    font-family: 'Bellefair', serif;\n    font-size: 1.4em;\n    line-height: 1.6em;\n    color: #626262;\n}\n.page-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #516A44;\n    font-weight: 400;\n    font-family: 'Bellefair', serif;\n    font-size: 1.2em;\n    line-height: 1.8em;\n}\n.page-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    color: #DF7234;\n    opacity: .8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBLGdCQUFnQjtBQUNoQjtJQUNJLFdBQVc7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qLS0tLWhlYWRlci0tLSovXG4uYWJvdXQtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyLWNvbnRlbnQge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2MjYyO1xuICBib3JkZXItcmFkaXVzOiA0ZW07XG4gIHBhZGRpbmc6IDEuNmVtO1xufVxuXG4ubGluZTEsIC5saW5lMiB7XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGNvbG9yOiAjNTI1MjUyO1xufVxuXG4ubGluZTIge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5oZWFkZXItY29udGFpbmVyIGEge1xuICAgIGNvbG9yOiAjNTE2QTQ0O1xuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBhOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNERjcyMzQ7XG4gICAgb3BhY2l0eTogLjg7XG59XG5cbi8qLS0tLXBhZ2UgY29udGVudC0tLSovXG4ucGFnZS1jb250ZW50cyB7XG4gICAgbWFyZ2luOiAyZW0gMCAyZW0gMDtcbiAgICB3aWR0aDogODQlO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYm91dC1pbWcge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDRlbTtcbn1cbi5hYm91dC1pbWcgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA0ZW07XG59XG4uYWJvdXQtd29yZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgIGNvbG9yOiAjNjI2MjYyO1xufVxuXG4ucGFnZS1jb250ZW50cyBhIHtcbiAgICBjb2xvcjogIzUxNkE0NDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XG59XG5cbi5wYWdlLWNvbnRlbnRzIGE6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI0RGNzIzNDtcbiAgICBvcGFjaXR5OiAuODtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing/landing.component */ "JhD/");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../work/work.component */ "kH/F");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "84zG");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "home-container"], [1, "page-container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]], styles: [".home-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.page-container[_ngcontent-%COMP%] {\n  margin-bottom: 6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA2ZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-directory */ "Pky/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LandingComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", d_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r1.subtitle);
} }
class LandingComponent {
    constructor() {
        this.data = _data_directory__WEBPACK_IMPORTED_MODULE_1__["HOMEWORDS"];
    }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "home-content"], [1, "imgContainer"], ["width", "54%", 3, "src"], [1, "wordContainer"], [1, "title"], [1, "descrip"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LandingComponent_section_0_Template, 9, 3, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: 'Bellefair', serif;\n\n}\n\n.home-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.imgContainer[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  margin-left: 16%;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 4em;\n}\n\n.wordContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 2.8em;\n}\n\n.descrip[_ngcontent-%COMP%] {\n  width: 80%;\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7O0FBRWpDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcblxufVxuXG4uaG9tZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1nQ29udGFpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE2JTtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xufVxuXG4ud29yZENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjhlbTtcbn1cblxuLmRlc2NyaXAge1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Pky/":
/*!***********************************!*\
  !*** ./src/app/data-directory.ts ***!
  \***********************************/
/*! exports provided: HOMEWORDS, WORKCARDS, PHOTOS, MOONSCAPES, PALESUNSET, PARIS, ELATIONS, CONNECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOMEWORDS", function() { return HOMEWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKCARDS", function() { return WORKCARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTOS", function() { return PHOTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOONSCAPES", function() { return MOONSCAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PALESUNSET", function() { return PALESUNSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARIS", function() { return PARIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELATIONS", function() { return ELATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECTS", function() { return CONNECTS; });
/*----Home Page-----*/
const HOMEWORDS = [
    {
        title: 'Eliza Siegel',
        subtitle: 'is a journalist and storyteller based in New Jersey.',
        imgUrl: './assets/img/eliza.png',
    }
];
/*----Work Page-----*/
const WORKCARDS = [
    {
        title: 'Politics and Culture Satirist',
        description: 'Check out my monthly column, “Irrational Takes,” where I satirize politics and culture' +
            ' for the feminist news and storytelling site The Rational.',
        imgUrl: './assets/img/teacup.png',
        color: '#DA6B40',
        link: 'https://www.therationalonline.com/reading/category/IRRATIONAL+TAKES',
        hoverText: 'View Column',
    },
    {
        title: 'Investigative Journalist',
        description: 'I’ve reported on issues ranging from small town politics in Upstate New York, ' +
            'to Russian disinformation campaigns in the former Soviet Bloc, to the unexplained death' +
            ' of a prominent New York judge.',
        imgUrl: './assets/img/spyglass.png',
        color: '#EFA31E',
        link: './assets/docs/Eliza-Siegel-Journalism-Clips.pdf',
        hoverText: 'View Journalism Publications',
    },
    {
        title: 'Storyteller',
        description: 'I’m passionate about telling stories across mediums and genres, making ' +
            'connections between seemingly disparate ideas through documentary film, poetry, podcasts,' +
            ' and photography.',
        imgUrl: './assets/img/map.png',
        color: '#516A44',
        link: './assets/docs/Eliza-Siegel-Creative-Clips.pdf',
        hoverText: 'View Creative Publications',
    },
];
/*----About Page-----*/
/*----Photos Page-----*/
const PHOTOS = [
    {
        backgroundImg: './assets/img/roadtrip.png',
        hoverColor: '#CCE8F1',
        title: 'Moonscapes',
        description: 'August, 2019. An interplanetary drive across the country.',
        link: '/moonscapes',
    },
    {
        backgroundImg: './assets/img/etretat.png',
        hoverColor: '#F8E4B9',
        title: 'Pale sunset',
        description: 'Paris and Étretat, May-June, 2017. A vivid sunburst appearing and vanishing ' +
            'behind purple clouds.',
        link: '/pale-sunset',
    },
    {
        backgroundImg: './assets/img/paris.png',
        hoverColor: '#DCDCDC',
        title: 'Paris, then to the coast',
        description: 'Paris and Étretat, May-June, 2017. One swallow darting an inkblot across ' +
            'the grey sky.',
        link: '/paris-coast',
    },
    {
        backgroundImg: './assets/img/elations.png',
        hoverColor: '#83AB71',
        title: 'Small elations',
        description: 'Baltimore, Canton, Florence, Coney Island, 2018-2019. The sweetness of an ' +
            'oversaturated summer.',
        link: '/small-elations',
    },
];
/*-----Moonscapes imgs----*/
const MOONSCAPES = [
    {
        id: 0,
        imgUrl: './assets/img/moonscapes/moonscapes-1.png',
    },
    {
        id: 1,
        imgUrl: './assets/img/moonscapes/moonscapes-5.png',
    },
    {
        id: 2,
        imgUrl: './assets/img/moonscapes/moonscapes-17.png',
    },
    {
        id: 3,
        imgUrl: './assets/img/moonscapes/moonscapes-4.png',
    },
    {
        id: 4,
        imgUrl: './assets/img/moonscapes/moonscapes-9.png',
    },
    {
        id: 5,
        imgUrl: './assets/img/moonscapes/moonscapes-3.png',
    },
    {
        id: 6,
        imgUrl: './assets/img/moonscapes/moonscapes-6.png',
    },
    {
        id: 7,
        imgUrl: './assets/img/moonscapes/moonscapes-7.png',
    },
    {
        id: 8,
        imgUrl: './assets/img/moonscapes/moonscapes-8.png',
    },
    {
        id: 9,
        imgUrl: './assets/img/moonscapes/moonscapes-2.png',
    },
    {
        id: 10,
        imgUrl: './assets/img/moonscapes/moonscapes-12.png',
    },
    {
        id: 11,
        imgUrl: './assets/img/moonscapes/moonscapes-11.png',
    },
    {
        id: 12,
        imgUrl: './assets/img/moonscapes/moonscapes-15.png',
    },
    {
        id: 13,
        imgUrl: './assets/img/moonscapes/moonscapes-13.png',
    },
    {
        id: 14,
        imgUrl: './assets/img/moonscapes/moonscapes-14.png',
    },
    {
        id: 15,
        imgUrl: './assets/img/moonscapes/moonscapes-10.png',
    },
    {
        id: 16,
        imgUrl: './assets/img/moonscapes/moonscapes-16.png',
    },
    {
        id: 17,
        imgUrl: './assets/img/moonscapes/moonscapes-19.png',
    },
    {
        id: 18,
        imgUrl: './assets/img/moonscapes/moonscapes-18.png',
    },
];
/*-----Pale Sunset Imgs----*/
const PALESUNSET = [
    {
        id: 0,
        imgUrl: './assets/img/pale-sunset/pale-sunset-1.png'
    },
    {
        id: 1,
        imgUrl: './assets/img/pale-sunset/pale-sunset-2.png'
    },
    {
        id: 2,
        imgUrl: './assets/img/pale-sunset/pale-sunset-3.png'
    },
    {
        id: 3,
        imgUrl: './assets/img/pale-sunset/pale-sunset-4.png'
    },
    {
        id: 4,
        imgUrl: './assets/img/pale-sunset/pale-sunset-5.png'
    },
    {
        id: 5,
        imgUrl: './assets/img/pale-sunset/pale-sunset-6.png'
    },
    {
        id: 6,
        imgUrl: './assets/img/pale-sunset/pale-sunset-7.png'
    },
    {
        id: 7,
        imgUrl: './assets/img/pale-sunset/pale-sunset-8.png'
    },
    {
        id: 8,
        imgUrl: './assets/img/pale-sunset/pale-sunset-9.png'
    },
    {
        id: 9,
        imgUrl: './assets/img/pale-sunset/pale-sunset-10.png'
    },
    {
        id: 10,
        imgUrl: './assets/img/pale-sunset/pale-sunset-11.png'
    },
    {
        id: 11,
        imgUrl: './assets/img/pale-sunset/pale-sunset-12.png'
    },
];
/*-----Paris, coast imgs----*/
const PARIS = [
    {
        id: 0,
        imgUrl: './assets/img/paris-coast/paris-1.png',
    },
    {
        id: 1,
        imgUrl: './assets/img/paris-coast/paris-2.png',
    },
    {
        id: 2,
        imgUrl: './assets/img/paris-coast/paris-3.png',
    },
    {
        id: 3,
        imgUrl: './assets/img/paris-coast/paris-4.png',
    },
    {
        id: 4,
        imgUrl: './assets/img/paris-coast/paris-5.png',
    },
    {
        id: 5,
        imgUrl: './assets/img/paris-coast/paris-6.png',
    },
    {
        id: 6,
        imgUrl: './assets/img/paris-coast/paris-7.png',
    },
    {
        id: 7,
        imgUrl: './assets/img/paris-coast/paris-8.png',
    },
    {
        id: 8,
        imgUrl: './assets/img/paris-coast/paris-11.png',
    },
    {
        id: 9,
        imgUrl: './assets/img/paris-coast/paris-15.png',
    },
    {
        id: 10,
        imgUrl: './assets/img/paris-coast/paris-9.png',
    },
    {
        id: 11,
        imgUrl: './assets/img/paris-coast/paris-10.png',
    },
    {
        id: 12,
        imgUrl: './assets/img/paris-coast/paris-13.png',
    },
    {
        id: 13,
        imgUrl: './assets/img/paris-coast/paris-12.png',
    },
    {
        id: 14,
        imgUrl: './assets/img/paris-coast/paris-16.png',
    },
    {
        id: 15,
        imgUrl: './assets/img/paris-coast/paris-14.png',
    },
];
/*-----Small Elations Imgs----*/
const ELATIONS = [
    {
        id: 0,
        imgUrl: './assets/img/small-elations/elations-1.png'
    },
    {
        id: 1,
        imgUrl: './assets/img/small-elations/elations-2.png'
    },
    {
        id: 2,
        imgUrl: './assets/img/small-elations/elations-8.png'
    },
    {
        id: 3,
        imgUrl: './assets/img/small-elations/elations-4.png'
    },
    {
        id: 4,
        imgUrl: './assets/img/small-elations/elations-5.png'
    },
    {
        id: 5,
        imgUrl: './assets/img/small-elations/elations-6.png'
    },
    {
        id: 6,
        imgUrl: './assets/img/small-elations/elations-10.png'
    },
    {
        id: 7,
        imgUrl: './assets/img/small-elations/elations-9.png'
    },
    {
        id: 8,
        imgUrl: './assets/img/small-elations/elations-11.png'
    },
    {
        id: 9,
        imgUrl: './assets/img/small-elations/elations-3.png'
    },
    {
        id: 10,
        imgUrl: './assets/img/small-elations/elations-7.png'
    },
];
/*----Footer-----*/
const CONNECTS = [
    {
        title: 'email',
        imgUrl: './assets/img/mail.png',
        link: 'mailto:siegel.eliza@gmail.com',
    },
    {
        title: 'twitter',
        imgUrl: './assets/img/twitter.png',
        link: 'https://twitter.com/ElizaISiegel',
    },
    {
        title: 'linkedin',
        imgUrl: './assets/img/link.png',
        link: 'https://www.linkedin.com/in/eliza-siegel-032380147',
    }
];


/***/ }),

/***/ "RimG":
/*!***********************************************************!*\
  !*** ./src/app/photos/monoscapes/monoscapes.component.ts ***!
  \***********************************************************/
/*! exports provided: MonoscapesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonoscapesComponent", function() { return MonoscapesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-directory */ "Pky/");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-header/page-header.component */ "zAId");
/* harmony import */ var _photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo-grid/photo-grid.component */ "Z2aC");
/* harmony import */ var _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../photo-footer/photo-footer.component */ "/0wd");






class MonoscapesComponent {
    constructor() {
        this.headerLine1 = 'Moonscapes';
        this.headerLine2 = 'August, 2019. An interplanetary drive across the country.';
        this.imgs = _data_directory__WEBPACK_IMPORTED_MODULE_1__["MOONSCAPES"];
    }
    ngOnInit() {
    }
}
MonoscapesComponent.ɵfac = function MonoscapesComponent_Factory(t) { return new (t || MonoscapesComponent)(); };
MonoscapesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonoscapesComponent, selectors: [["app-monoscapes"]], decls: 6, vars: 3, consts: [[1, "page-container"], [1, "header-container"], [3, "line1", "line2"], [1, "page-contents"], [3, "imgs"]], template: function MonoscapesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-photo-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-photo-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line1", ctx.headerLine1)("line2", ctx.headerLine2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgs", ctx.imgs);
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGridComponent"], _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_4__["PhotoFooterComponent"]], styles: [".page-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-container[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.page-contents[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    align-self: center;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL21vbm9zY2FwZXMvbW9ub3NjYXBlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9waG90b3MvbW9ub3NjYXBlcy9tb25vc2NhcGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2UtY29udGVudHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonoscapesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-monoscapes',
                templateUrl: './monoscapes.html',
                styleUrls: ['./monoscapes.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'Eliza Siegel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-container-web"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".app-container-web[_ngcontent-%COMP%] {\n  margin: 4em 4em 0 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyLXdlYiB7XG4gIG1hcmdpbjogNGVtIDRlbSAwIDRlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Z2aC":
/*!***********************************************************!*\
  !*** ./src/app/photos/photo-grid/photo-grid.component.ts ***!
  \***********************************************************/
/*! exports provided: PhotoGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGridComponent", function() { return PhotoGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PhotoGridComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.imgs[10].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGridComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.imgs[11].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGridComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.imgs[12].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGridComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.imgs[13].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGridComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.imgs[14].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGridComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.imgs[15].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGridComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.imgs[16].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGridComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.imgs[17].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGridComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.imgs[18].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PhotoGridComponent {
    constructor() { }
    ngOnInit() {
    }
    enterFullScreen() {
        if (this.isClicked) {
            return {};
        }
    }
}
PhotoGridComponent.ɵfac = function PhotoGridComponent_Factory(t) { return new (t || PhotoGridComponent)(); };
PhotoGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoGridComponent, selectors: [["app-photo-grid"]], inputs: { imgs: "imgs" }, decls: 45, vars: 20, consts: [[1, "grid-container"], [1, "top-container"], [1, "left-col"], [1, "left-top"], [1, "img-container", 3, "ngStyle", "click"], ["width", "100%", "alt", "film-img", 3, "src"], [1, "img-container"], [1, "left-bottom"], [1, "left-row"], [1, "right-col"], ["width", "100%", 3, "src"], [1, "second-container"], [1, "top-row"], ["class", "img-container", 4, "ngIf"], [1, "second-row"], [1, "third-row"]], template: function PhotoGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoGridComponent_Template_div_click_4_listener() { return ctx.isClicked = !ctx.isClicked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PhotoGridComponent_div_30_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PhotoGridComponent_div_31_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PhotoGridComponent_div_32_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PhotoGridComponent_div_35_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PhotoGridComponent_div_36_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PhotoGridComponent_div_38_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PhotoGridComponent_div_41_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PhotoGridComponent_div_43_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PhotoGridComponent_div_44_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.enterFullScreen());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[0].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[1].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[3].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[4].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[5].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[9].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[2].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[7].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[8].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[6].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[10]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[11]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[12]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[13]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[14]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[15]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[16]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[17]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgs[18]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".grid-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-bottom: 6em;\n}\n\nimg[_ngcontent-%COMP%] {\n    border-radius: 2em;\n}\n.img-container[_ngcontent-%COMP%] {\n    margin: .4em;\n}\n.img-container[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: .7;\n}\n\n.top-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n.left-col[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 349%;\n}\n.left-top[_ngcontent-%COMP%], .left-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n.right-col[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 200%;\n}\n\n.second-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n.top-row[_ngcontent-%COMP%], .second-row[_ngcontent-%COMP%], .third-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n.second-row[_ngcontent-%COMP%]   .left-col[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 98%;\n}\n.third-row[_ngcontent-%COMP%]   .right-col[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 170%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3RvLWdyaWQvcGhvdG8tZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBQ0EsaUJBQWlCO0FBQ2pCO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0Esb0NBQW9DO0FBQ3BDO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0Esd0JBQXdCO0FBQ3hCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGhvdG9zL3Bob3RvLWdyaWQvcGhvdG8tZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDZlbTtcbn1cbi8qLS0tYWxsIGltZ3MtLS0qL1xuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG59XG4uaW1nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAuNGVtO1xufVxuLmltZy1jb250YWluZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAuNztcbn1cbi8qLS0tdG9wIGNvbnRhaW5lciAodG9wIDEwIGltZ3MpLS0tKi9cbi50b3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubGVmdC1jb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMzQ5JTtcbn1cbi5sZWZ0LXRvcCwgLmxlZnQtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5yaWdodC1jb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMjAwJTtcbn1cbi8qLS0tLS0ybmQgY29udGFpbmVyLS0tKi9cbi5zZWNvbmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udG9wLXJvdywgLnNlY29uZC1yb3csIC50aGlyZC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNlY29uZC1yb3cgLmxlZnQtY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDk4JTtcbn1cblxuLnRoaXJkLXJvdyAucmlnaHQtY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDE3MCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-grid',
                templateUrl: './photo-grid.component.html',
                styleUrls: ['./photo-grid.component.css']
            }]
    }], function () { return []; }, { imgs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "kH/F");
/* harmony import */ var _work_work_card_work_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work-card/work-card.component */ "yvlM");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-header/page-header.component */ "zAId");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./photos/photos.component */ "1PKx");
/* harmony import */ var _photos_monoscapes_monoscapes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./photos/monoscapes/monoscapes.component */ "RimG");
/* harmony import */ var _photos_france_color_france_color_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photos/france-color/france-color.component */ "+rDN");
/* harmony import */ var _photos_france_bw_france_bw_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./photos/france-bw/france-bw.component */ "qoP9");
/* harmony import */ var _photos_summer_summer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./photos/summer/summer.component */ "2hwA");
/* harmony import */ var _photos_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./photos/photo-card/photo-card.component */ "xvLB");
/* harmony import */ var _photos_photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./photos/photo-grid/photo-grid.component */ "Z2aC");
/* harmony import */ var _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./photo-footer/photo-footer.component */ "/0wd");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
        _work_work_card_work_card_component__WEBPACK_IMPORTED_MODULE_7__["WorkCardComponent"],
        _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _photos_photos_component__WEBPACK_IMPORTED_MODULE_11__["PhotosComponent"],
        _photos_monoscapes_monoscapes_component__WEBPACK_IMPORTED_MODULE_12__["MonoscapesComponent"],
        _photos_france_color_france_color_component__WEBPACK_IMPORTED_MODULE_13__["FranceColorComponent"],
        _photos_france_bw_france_bw_component__WEBPACK_IMPORTED_MODULE_14__["FranceBwComponent"],
        _photos_summer_summer_component__WEBPACK_IMPORTED_MODULE_15__["SummerComponent"],
        _photos_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_16__["PhotoCardComponent"],
        _photos_photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_17__["PhotoGridComponent"],
        _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_18__["PhotoFooterComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_19__["LandingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
                    _work_work_card_work_card_component__WEBPACK_IMPORTED_MODULE_7__["WorkCardComponent"],
                    _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _photos_photos_component__WEBPACK_IMPORTED_MODULE_11__["PhotosComponent"],
                    _photos_monoscapes_monoscapes_component__WEBPACK_IMPORTED_MODULE_12__["MonoscapesComponent"],
                    _photos_france_color_france_color_component__WEBPACK_IMPORTED_MODULE_13__["FranceColorComponent"],
                    _photos_france_bw_france_bw_component__WEBPACK_IMPORTED_MODULE_14__["FranceBwComponent"],
                    _photos_summer_summer_component__WEBPACK_IMPORTED_MODULE_15__["SummerComponent"],
                    _photos_photo_card_photo_card_component__WEBPACK_IMPORTED_MODULE_16__["PhotoCardComponent"],
                    _photos_photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_17__["PhotoGridComponent"],
                    _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_18__["PhotoFooterComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_19__["LandingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-directory */ "Pky/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FooterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", c_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class FooterComponent {
    constructor() {
        this.connects = _data_directory__WEBPACK_IMPORTED_MODULE_1__["CONNECTS"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 25, vars: 1, consts: [[1, "footer-container"], [1, "lhs"], [1, "title"], [1, "descrip"], ["href", "https://taylormcpherson.github.io/", "target", "_blank"], [1, "rhs"], [1, "site-map"], [1, "items"], ["routerLink", "/home", 1, "site-item"], ["routerLink", "/work", 1, "site-item"], ["routerLink", "/photos", 1, "site-item"], ["routerLink", "/about", 1, "site-item"], [1, "connect"], ["class", "items", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "site-item", 3, "href"], ["width", "18%", 3, "src"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Eliza Siegel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This site was designed and developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Taylor McPherson.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Site Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "PHOTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FooterComponent_div_24_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.connects);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n}\n.footer-container[_ngcontent-%COMP%] {\n    background-color: #516A44;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 0 -4em 0 -4em;\n    padding: 2.5em 6em 2.5em 6em;\n}\n\n.lhs[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 22%;\n    margin-left: 2em;\n}\n.lhs[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-family: 'Bellefair', serif;\n    font-size: 1.6em;\n    display: flex;\n    margin-bottom: 1em;\n    opacity: .9;\n}\n.lhs[_ngcontent-%COMP%]   .descrip[_ngcontent-%COMP%] {\n    font-weight: 300;\n    opacity: .85;\n    font-size: .9em;\n}\n.lhs[_ngcontent-%COMP%]   .descrip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .rhs[_ngcontent-%COMP%]   .site-item[_ngcontent-%COMP%] {\n    opacity: 1;\n    font-weight: 400;\n    cursor: pointer;\n}\n.lhs[_ngcontent-%COMP%]   .descrip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: .85;\n}\n\n.rhs[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n.rhs[_ngcontent-%COMP%]   .site-map[_ngcontent-%COMP%], .rhs[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n    margin-left: 8em;\n    font-weight: 300;\n    display: flex;\n    flex-direction: column;\n}\n.rhs[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    opacity: .8;\n    font-size: .8em;\n}\n.rhs[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n    margin-top: .2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n.rhs[_ngcontent-%COMP%]   .site-item[_ngcontent-%COMP%] {\n    font-size: .9em;\n    margin-top: .2em;\n    opacity: .85;\n    font-weight: 300;\n}\n.rhs[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]   .site-item[_ngcontent-%COMP%] {\n    margin-top: .3em;\n}\n.rhs[_ngcontent-%COMP%]   .site-item[_ngcontent-%COMP%]:hover {\n    opacity: .7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDO0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5mb290ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE2QTQ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogMCAtNGVtIDAgLTRlbTtcbiAgICBwYWRkaW5nOiAyLjVlbSA2ZW0gMi41ZW0gNmVtO1xufVxuXG4vKi0tLS0tbGVmdCBoYW5kIGl0ZW1zLS0tLS0qL1xuLmxocyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMjIlO1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG59XG5cbi5saHMgLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgb3BhY2l0eTogLjk7XG59XG5cbi5saHMgLmRlc2NyaXAge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgb3BhY2l0eTogLjg1O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLmxocyAuZGVzY3JpcCBhLCAucmhzIC5zaXRlLWl0ZW0ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saHMgLmRlc2NyaXAgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogLjg1O1xufVxuXG4vKi0tLS0tcmlnaHQgaGFuZCBpdGVtcy0tLS0tKi9cbi5yaHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnJocyAuc2l0ZS1tYXAsIC5yaHMgLmNvbm5lY3Qge1xuICAgIG1hcmdpbi1sZWZ0OiA4ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yaHMgLnRpdGxlIHtcbiAgICBvcGFjaXR5OiAuODtcbiAgICBmb250LXNpemU6IC44ZW07XG59XG5cbi5yaHMgLml0ZW1zIHtcbiAgICBtYXJnaW4tdG9wOiAuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucmhzIC5zaXRlLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBtYXJnaW4tdG9wOiAuMmVtO1xuICAgIG9wYWNpdHk6IC44NTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucmhzIC5jb25uZWN0IC5zaXRlLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IC4zZW07XG59XG5cbi5yaHMgLnNpdGUtaXRlbTpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kH/F":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-directory */ "Pky/");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-header/page-header.component */ "zAId");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _work_card_work_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-card/work-card.component */ "yvlM");






function WorkComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-work-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTitle", card_r1.title)("cardDescrip", card_r1.description)("cardImgURL", card_r1.imgUrl)("cardColor", card_r1.color)("cardLink", card_r1.link)("cardHoverText", card_r1.hoverText);
} }
class WorkComponent {
    constructor() {
        this.cards = _data_directory__WEBPACK_IMPORTED_MODULE_1__["WORKCARDS"];
        this.headerLine1 = 'I write things and also work on a farm.';
    }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 8, vars: 3, consts: [[1, "work-container"], [1, "work-header"], [3, "line1", "line2"], [1, "work-cards"], ["class", "single-card", 4, "ngFor", "ngForOf"], ["href", "./assets/docs/Eliza-Siegel-Resume.pdf", "target", "_blank", 1, "resume-button"], [1, "single-card"], [3, "cardTitle", "cardDescrip", "cardImgURL", "cardColor", "cardLink", "cardHoverText"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorkComponent_div_5_Template, 2, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line1", ctx.headerLine1)("line2", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _work_card_work_card_component__WEBPACK_IMPORTED_MODULE_4__["WorkCardComponent"]], styles: [".work-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.work-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.work-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\n.single-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 28%;\n  height: 100%;\n}\n\n.resume-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2em;\n  border: solid 1px #333333;\n  border-radius: 3em;\n  width: 8em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  align-self: center;\n}\n\n.resume-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #DF7234;\n  border-color: #DF7234;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndvcmstaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53b3JrLWNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaW5nbGUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAyOCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJlc3VtZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiAzZW07XG4gIHdpZHRoOiA4ZW07XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnJlc3VtZS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjREY3MjM0O1xuICBib3JkZXItY29sb3I6ICNERjcyMzQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 15, vars: 0, consts: [[1, "nav-container-web"], [1, "lhs"], ["routerLink", "/home", "routerLinkActive", "activePage", 1, "nav-item"], [1, "underline"], [1, "rhs"], ["routerLink", "/work", "routerLinkActive", "activePage", 1, "nav-item"], ["routerLink", "/photos", "routerLinkActive", "activePage", 1, "nav-item"], ["routerLink", "/about", "routerLinkActive", "activePage", 1, "nav-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Eliza Siegel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " WORK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PHOTOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ABOUT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%] {\n  color: #4f4f4f;\n}\n.nav-container-web[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 3em;\n  align-items: center;\n}\n.lhs[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  font-size: 1.4em;\n}\n.lhs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-family: 'Bellefair', serif;\n}\n.rhs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-left: 2em;\n  margin-right: 3em;\n}\n.rhs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-left: 4em;\n  font-size: 1em;\n  font-family: 'Bellefair', serif;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #DF7234;\n  opacity: 1;\n}\n.activePage[_ngcontent-%COMP%] {\n  color: #516A44;\n}\n.activePage[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  background-color: #516A44;\n  opacity: 1;\n}\n.activePage[_ngcontent-%COMP%]:hover {\n  color: #516A44;\n}\n.underline[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #DF7234;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cbi5uYXYtY29udGFpbmVyLXdlYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxocyB7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi5saHMgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcbn1cblxuLnJocyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDNlbTtcbn1cblxuLnJocyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogNGVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0RGNzIzNDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFjdGl2ZVBhZ2Uge1xuICBjb2xvcjogIzUxNkE0NDtcbn1cblxuLmFjdGl2ZVBhZ2UgLnVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTZBNDQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5hY3RpdmVQYWdlOmhvdmVyIHtcbiAgY29sb3I6ICM1MTZBNDQ7XG59XG5cbi51bmRlcmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERjcyMzQ7XG4gIG9wYWNpdHk6IDA7XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qoP9":
/*!*********************************************************!*\
  !*** ./src/app/photos/france-bw/france-bw.component.ts ***!
  \*********************************************************/
/*! exports provided: FranceBwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranceBwComponent", function() { return FranceBwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-directory */ "Pky/");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-header/page-header.component */ "zAId");
/* harmony import */ var _photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo-grid/photo-grid.component */ "Z2aC");
/* harmony import */ var _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../photo-footer/photo-footer.component */ "/0wd");






class FranceBwComponent {
    constructor() {
        this.headerLine1 = 'Paris, then to the coast';
        this.headerLine2 = 'Paris and Étretat, May-June, 2017. One swallow darting an inkblot across the' +
            ' grey sky.';
        this.imgs = _data_directory__WEBPACK_IMPORTED_MODULE_1__["PARIS"];
    }
    ngOnInit() {
    }
}
FranceBwComponent.ɵfac = function FranceBwComponent_Factory(t) { return new (t || FranceBwComponent)(); };
FranceBwComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FranceBwComponent, selectors: [["app-france-bw"]], decls: 6, vars: 3, consts: [[1, "page-container"], [1, "header-container"], [3, "line1", "line2"], [1, "page-contents"], [3, "imgs"]], template: function FranceBwComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-photo-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-photo-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("line1", ctx.headerLine1)("line2", ctx.headerLine2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgs", ctx.imgs);
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _photo_grid_photo_grid_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGridComponent"], _photo_footer_photo_footer_component__WEBPACK_IMPORTED_MODULE_4__["PhotoFooterComponent"]], styles: [".page-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-container[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL2ZyYW5jZS1idy9mcmFuY2UtYncuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9mcmFuY2UtYncvZnJhbmNlLWJ3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FranceBwComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-france-bw',
                templateUrl: './france-bw.component.html',
                styleUrls: ['./france-bw.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ "kH/F");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos/photos.component */ "1PKx");
/* harmony import */ var _photos_monoscapes_monoscapes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photos/monoscapes/monoscapes.component */ "RimG");
/* harmony import */ var _photos_france_color_france_color_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/france-color/france-color.component */ "+rDN");
/* harmony import */ var _photos_france_bw_france_bw_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photos/france-bw/france-bw.component */ "qoP9");
/* harmony import */ var _photos_summer_summer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photos/summer/summer.component */ "2hwA");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");













const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_10__["LandingComponent"] },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'photos', component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_5__["PhotosComponent"] },
    { path: 'moonscapes', component: _photos_monoscapes_monoscapes_component__WEBPACK_IMPORTED_MODULE_6__["MonoscapesComponent"] },
    { path: 'pale-sunset', component: _photos_france_color_france_color_component__WEBPACK_IMPORTED_MODULE_7__["FranceColorComponent"] },
    { path: 'paris-coast', component: _photos_france_bw_france_bw_component__WEBPACK_IMPORTED_MODULE_8__["FranceBwComponent"] },
    { path: 'small-elations', component: _photos_summer_summer_component__WEBPACK_IMPORTED_MODULE_9__["SummerComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xvLB":
/*!***********************************************************!*\
  !*** ./src/app/photos/photo-card/photo-card.component.ts ***!
  \***********************************************************/
/*! exports provided: PhotoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoCardComponent", function() { return PhotoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function PhotoCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.cardImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.cardTitle);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function () { return { "visibility": "hidden" }; };
function PhotoCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r1.cardLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.cardColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.cardImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cardTitle);
} }
class PhotoCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotoCardComponent.ɵfac = function PhotoCardComponent_Factory(t) { return new (t || PhotoCardComponent)(); };
PhotoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoCardComponent, selectors: [["app-photo-card"]], inputs: { cardImg: "cardImg", cardColor: "cardColor", cardTitle: "cardTitle", cardLink: "cardLink" }, decls: 4, vars: 2, consts: [[1, "photo-card-container"], [1, "photo-card", 3, "mouseenter", "mouseleave"], ["class", "no-hover", 4, "ngIf"], ["class", "hover", 3, "routerLink", "ngStyle", 4, "ngIf"], [1, "no-hover"], ["width", "100%", 3, "src", "alt"], [1, "hover", 3, "routerLink", "ngStyle"], ["width", "100%", 3, "src", "ngStyle"], [1, "text"]], template: function PhotoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function PhotoCardComponent_Template_div_mouseenter_1_listener() { return ctx.hover = true; })("mouseleave", function PhotoCardComponent_Template_div_mouseleave_1_listener() { return ctx.hover = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhotoCardComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PhotoCardComponent_div_3_Template, 4, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hover);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hover);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".photo-card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.photo-card[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    width: 74%;\n    border-radius: 4em;\n    margin-bottom: 2em;\n}\n.photo-card[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n.photo-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 4em;\n    display: flex;\n    align-self: center;\n}\n.photo-card[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.hover[_ngcontent-%COMP%], .no-hover[_ngcontent-%COMP%] {\n    border-radius: 4em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.text[_ngcontent-%COMP%] {\n    display: flex;\n    align-self: center;\n    position: absolute;\n    font-family: 'Bellefair', serif;\n    font-size: 1.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3RvLWNhcmQvcGhvdG8tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90by1jYXJkL3Bob3RvLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waG90by1jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGhvdG8tY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDc0JTtcbiAgICBib3JkZXItcmFkaXVzOiA0ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLnBob3RvLWNhcmQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5waG90by1jYXJkIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNGVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnBob3RvLWNhcmQgLmhvdmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ob3ZlciwgLm5vLWhvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-card',
                templateUrl: './photo-card.component.html',
                styleUrls: ['./photo-card.component.css']
            }]
    }], function () { return []; }, { cardImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "yvlM":
/*!*******************************************************!*\
  !*** ./src/app/work/work-card/work-card.component.ts ***!
  \*******************************************************/
/*! exports provided: WorkCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkCardComponent", function() { return WorkCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function () { return { "visibility": "none" }; };
function WorkCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.cardImgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cardTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cardDescrip);
} }
const _c1 = function (a0) { return { "color": a0 }; };
function WorkCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.cardColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.cardHoverText, " ");
} }
class WorkCardComponent {
    constructor() {
    }
    ngOnInit() {
        this.hover = false;
    }
    styleCard() {
        if (!this.hover) {
            return { backgroundColor: this.cardColor, borderColor: this.cardColor };
        }
        else {
            return { backgroundColor: 'transparent', borderColor: this.cardColor };
        }
    }
}
WorkCardComponent.ɵfac = function WorkCardComponent_Factory(t) { return new (t || WorkCardComponent)(); };
WorkCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkCardComponent, selectors: [["app-work-card"]], inputs: { cardTitle: "cardTitle", cardDescrip: "cardDescrip", cardImgURL: "cardImgURL", cardColor: "cardColor", cardLink: "cardLink", cardHoverText: "cardHoverText" }, decls: 4, vars: 4, consts: [["target", "_blank", 1, "work-card-container", 3, "href", "ngStyle", "mouseenter", "mouseleave"], [1, "main-content"], [3, "ngStyle", 4, "ngIf"], ["class", "hover-content", 3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [1, "workIcon"], ["width", "20%", 3, "src"], [1, "workTitle"], [1, "workDescrip"], [1, "hover-content", 3, "ngStyle"]], template: function WorkCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkCardComponent_Template_a_mouseenter_0_listener() { return ctx.hover = true; })("mouseleave", function WorkCardComponent_Template_a_mouseleave_0_listener() { return ctx.hover = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkCardComponent_div_2_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkCardComponent_div_3_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.cardLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styleCard());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hover);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hover);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n.work-card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2em;\n  border-radius: 80px;\n  height: 21em;\n  width: 16em;\n  border: solid 1px;\n}\n.workIcon[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n.workTitle[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  font-family: 'Bellefair', serif;\n}\n.workDescrip[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-weight: 300;\n  margin-bottom: 2em;\n  text-align: justify;\n  width: 96%;\n\n}\n.work-card-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #FFFFFF;\n}\n.hover-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 1.4em;\n  font-family: 'Bellefair', serif;\n\n}\na[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLWNhcmQvd29yay1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTs7QUFFWjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsK0JBQStCOztBQUVqQztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLWNhcmQvd29yay1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgY29sb3I6ICNGRkY7XG59XG4ud29yay1jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XG4gIGhlaWdodDogMjFlbTtcbiAgd2lkdGg6IDE2ZW07XG4gIGJvcmRlcjogc29saWQgMXB4O1xufVxuXG4ud29ya0ljb24ge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG4ud29ya1RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcbn1cblxuLndvcmtEZXNjcmlwIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA5NiU7XG5cbn1cblxuLndvcmstY2FyZC1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5ob3Zlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG5cbn1cblxuYTphY3RpdmUsIGEsIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-card',
                templateUrl: './work-card.component.html',
                styleUrls: ['./work-card.component.css']
            }]
    }], function () { return []; }, { cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardDescrip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardImgURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardHoverText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zAId":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PageHeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.line2);
} }
class PageHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], inputs: { line1: "line1", line2: "line2" }, decls: 5, vars: 2, consts: [[1, "header-container"], [1, "header-content"], [1, "line1"], ["class", "line2", 4, "ngIf"], [1, "line2"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageHeaderComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.line1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.line2 != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-content[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-self: center;\n  align-items: center;\n  margin-bottom: 2em;\n  border: 1px solid #626262;\n\n  border-radius: 4em;\n  padding: 1.6em;\n}\n.line1[_ngcontent-%COMP%], .line2[_ngcontent-%COMP%] {\n  font-family: 'Bellefair', serif;\n  font-size: 1.4em;\n  color: #525252;\n}\n.line2[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  font-size: 1.2em;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCOztFQUV6QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyNjI2MjtcblxuICBib3JkZXItcmFkaXVzOiA0ZW07XG4gIHBhZGRpbmc6IDEuNmVtO1xufVxuXG4ubGluZTEsIC5saW5lMiB7XG4gIGZvbnQtZmFtaWx5OiAnQmVsbGVmYWlyJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGNvbG9yOiAjNTI1MjUyO1xufVxuXG4ubGluZTIge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-header',
                templateUrl: './page-header.component.html',
                styleUrls: ['./page-header.component.css']
            }]
    }], function () { return []; }, { line1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], line2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map