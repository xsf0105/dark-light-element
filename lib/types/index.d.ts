import { QuarkElement } from "quarkc";
declare global {
    interface HTMLElementTagNameMap {
        "dark-light-element": DarkLightElement;
    }
}
declare class DarkLightElement extends QuarkElement {
    componentDidMount(): void;
    turnOnLight(e: any): void;
    turnOffLight(): void;
    updateLight(e: any): void;
    render(): any;
}
export default DarkLightElement;
