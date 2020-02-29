export enum ToastType {
    Error = "error",
    Warning = "warning",
    Info = "info",
    Success = "success"
}

export interface IToastState {
    open: boolean;
    type: ToastType;
    message: string;

}
