var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Step = (function () {
    function Step(options) {
        this.title = options.title;
        this.description = options.description;
    }
    return Step;
}());
var Steps = (function (_super) {
    __extends(Steps, _super);
    function Steps(el, options) {
        var _this = _super.call(this) || this;
        _this.space = options.space;
        _this.direction = options.direction;
        _this.active = options.active;
        _this.processStatus = options.processStatus;
        _this.finishStatus = options.finishStatus;
        _this.alignCenter = options.alignCenter;
        _this.element = _this.createElement(el);
        return _this;
    }
    Steps.prototype.createElement = function (el) {
        return {};
    };
    return Steps;
}(HTMLElement));
customElements.define('steps', Steps);
//# sourceMappingURL=steps.js.map