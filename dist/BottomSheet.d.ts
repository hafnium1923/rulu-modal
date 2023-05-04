import { ReactElement, ReactNode } from "react";
interface BottomSheetProps {
    trigger: ReactElement;
    children?: ReactNode;
    buttons: (JSX.Element | false)[];
}
declare function BottomSheet({ trigger, children, buttons }: BottomSheetProps): JSX.Element;
export default BottomSheet;
