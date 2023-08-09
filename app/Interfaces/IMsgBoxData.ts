export interface IMsgBoxData {
    classname?: string;
    message?: string;
    title?: string;
    isConfirmation?: boolean;
    callbackFunction?: Function;
    btnName?: string;
}