export interface IMsgBoxData {
    isShow?: boolean;
    classname?: string;
    message?: string;
    title?: string;
    isConfirmation?: boolean;
    callbackFunction?: Function;
    btnName?: string;
}