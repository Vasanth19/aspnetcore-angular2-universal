exports.ids = [0];
exports.modules = {

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazy_component__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LazyModule = (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
LazyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__lazy_component__["a" /* LazyComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lazy_component__["a" /* LazyComponent */], pathMatch: 'full' },
                { path: 'tracks', component: __WEBPACK_IMPORTED_MODULE_2__lazy_component__["a" /* LazyComponent */] },
                { path: 'albums', component: __WEBPACK_IMPORTED_MODULE_2__lazy_component__["a" /* LazyComponent */] }
            ])
        ]
    })
], LazyModule);

//Lazy module testing - https://plnkr.co/edit/KdqKLokuAXcp5qecLslH?p=preview 
//# sourceMappingURL=lazy.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LazyComponent = (function () {
    function LazyComponent() {
    }
    return LazyComponent;
}());
LazyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'lazy-view',
        template: "\n    <h1>Lazy-Loaded Component!</h1>\n    <blockquote>\n      Fun fact: This was lazy-loaded :)\n      Check your Network tab!\n     </blockquote>\n    <p>\n  <a [routerLink]=\"['tracks']\">Tracks</a> |\n  <a [routerLink]=\"['albums']\">Albums</a>\n</p>\n<router-outlet></router-outlet>\n  "
    })
], LazyComponent);

//# sourceMappingURL=lazy.component.js.map

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnQvYXBwL2NvbnRhaW5lcnMvK2xhenkvbGF6eS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50L2FwcC9jb250YWluZXJzLytsYXp5L2xhenkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNMO0FBQ0U7QUFZakQsSUFBYSxVQUFVO0lBQXZCO0lBRUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQztBQUZZLFVBQVU7SUFWdEIsc0ZBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLHNFQUFhLENBQUM7UUFDN0IsT0FBTyxFQUFFO1lBQ1AscUVBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0VBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO2dCQUN2RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHNFQUFhLEVBQUU7Z0JBQzVDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsc0VBQWEsRUFBRTthQUMvQyxDQUFDO1NBQ0g7S0FDRixDQUFDO0dBQ1csVUFBVSxDQUV0QjtBQUZzQjtBQUt2Qiw0RUFBNEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJsQztBQWlCMUMsSUFBYSxhQUFhO0lBQTFCO0lBQTZCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUM7QUFBakIsYUFBYTtJQWZ6Qix5RkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLHFTQVdUO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FBSTtBQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExhenlDb21wb25lbnQgfSBmcm9tICcuL2xhenkuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTGF6eUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMYXp5Q29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgIHsgcGF0aDogJ3RyYWNrcycsIGNvbXBvbmVudDogTGF6eUNvbXBvbmVudCB9LFxyXG4gICAgICAgIHsgcGF0aDogJ2FsYnVtcycsIGNvbXBvbmVudDogTGF6eUNvbXBvbmVudCB9XHJcbiAgICBdKVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExhenlNb2R1bGUge1xyXG5cclxufVxyXG5cclxuXHJcbi8vTGF6eSBtb2R1bGUgdGVzdGluZyAtIGh0dHBzOi8vcGxua3IuY28vZWRpdC9LZHFLTG9rdUFYY3A1cWVjTHNsSD9wPXByZXZpZXdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnQvYXBwL2NvbnRhaW5lcnMvK2xhenkvbGF6eS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGF6eS12aWV3JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgxPkxhenktTG9hZGVkIENvbXBvbmVudCE8L2gxPlxyXG4gICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgIEZ1biBmYWN0OiBUaGlzIHdhcyBsYXp5LWxvYWRlZCA6KVxyXG4gICAgICBDaGVjayB5b3VyIE5ldHdvcmsgdGFiIVxyXG4gICAgIDwvYmxvY2txdW90ZT5cclxuICAgIDxwPlxyXG4gIDxhIFtyb3V0ZXJMaW5rXT1cIlsndHJhY2tzJ11cIj5UcmFja3M8L2E+IHxcclxuICA8YSBbcm91dGVyTGlua109XCJbJ2FsYnVtcyddXCI+QWxidW1zPC9hPlxyXG48L3A+XHJcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXp5Q29tcG9uZW50IHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnQvYXBwL2NvbnRhaW5lcnMvK2xhenkvbGF6eS5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9