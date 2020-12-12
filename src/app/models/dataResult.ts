export class DataResult {

    constructor(success: boolean, message: string, objeto: any) {
        this.success = success
        this.message = message
        this.objeto = objeto
    }

    public success: boolean;
    public message: string;
    public objeto: any;
}