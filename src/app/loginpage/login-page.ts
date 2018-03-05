export interface LoginPageSer {
    login(login: string, password: string, remember: boolean): Promise<ResponseLogin>;
}
export interface ResponseLogin {
    status: boolean;
    errorId?: number;
    error?: string;
    responseId?: number;
    response?: string;
    responseObject?: any;
}
