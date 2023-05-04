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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import Style from "./BottomSheetStyled";
function BottomSheet(_a) {
    var trigger = _a.trigger, children = _a.children, buttons = _a.buttons;
    var _b = useState(true), isOpened = _b[0], setIsOpened = _b[1];
    useEffect(function () {
        window.addEventListener("keyup", escHandler);
        return function () { return window.removeEventListener("keyup", escHandler); };
    }, []);
    var closeBottomSheet = function () {
        setIsOpened(false);
    };
    var openBottomSheet = function () {
        setIsOpened(true);
    };
    var escHandler = function (e) {
        if (e.key === "Escape")
            closeBottomSheet();
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ onClick: openBottomSheet }, { children: trigger })), isOpened && (_jsxs(_Fragment, { children: [_jsx(Style.Backdrop, { onClick: closeBottomSheet }), _jsx(Style.PopUp, { children: _jsxs(Style.Detail, { children: [children, buttons.map(function (button) {
                                    return (button &&
                                        React.cloneElement(button, {
                                            onClick: function () {
                                                button.props.onClick();
                                                closeBottomSheet();
                                            },
                                        }));
                                })] }) })] }))] }));
}
export default BottomSheet;
