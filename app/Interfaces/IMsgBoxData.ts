export interface IMsgBoxData {
    classname?: string;
    message?: string;
    title?: string;
    isConfirmation?: boolean;
    actionCallbackFunction?: Function;
    closeCallbackFunction?: Function;
    btnName?: string;
}