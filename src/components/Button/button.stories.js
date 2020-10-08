import React from "react";
import Button from ".";
export default {
    title: "UI 组件/Button",
    component: Button,
};
export const RectButton = () => <Button shape="rect" type="primary" bgColor="#ec7259">默认按钮</Button>
export const CircleButton = () => {
    return (
        <Button shape="circle" bgColor="#ec7259"size="50px" >
            点我
        </Button>
    )
}
export const SecondaryCircleButton = () => {
    return (
        <Button shape="circle" bgColor="#ec7259"size="50px" type="secondary">
            点我
        </Button>
    )
}
export const SecondaryRectButton = () => <Button shape="rect" type="secondary" bgColor="#ec7259">默认按钮</Button>