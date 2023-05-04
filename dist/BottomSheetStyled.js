var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var FadeInUp = "\n@keyframes fadeInUp {\n  from {\n      transform: translate3d(0, 100%, 0);\n  }\n  to {\n      transform: translateZ(0);\n  }\n}\n";
var Style = {
    Backdrop: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    background: rgba(0, 0, 0, 0.35);\n  "], ["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    background: rgba(0, 0, 0, 0.35);\n  "]))),
    PopUp: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: fixed;\n    left: 0;\n    bottom: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    width: 100%;\n\n    padding: 34px 34px 15px 34px;\n\n    border-radius: 8px 8px 0px 0px;\n    background: #ffffff;\n    ", "\n    animation: fadeInUp 0.5s;\n  "], ["\n    position: fixed;\n    left: 0;\n    bottom: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    width: 100%;\n\n    padding: 34px 34px 15px 34px;\n\n    border-radius: 8px 8px 0px 0px;\n    background: #ffffff;\n    ", "\n    animation: fadeInUp 0.5s;\n  "])), FadeInUp),
    Detail: styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n\n    width: 100%;\n    height: 90%;\n  "], ["\n    display: flex;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n\n    width: 100%;\n    height: 90%;\n  "]))),
};
export default Style;
var templateObject_1, templateObject_2, templateObject_3;
