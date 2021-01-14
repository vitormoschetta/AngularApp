export class DataResult {

    constructor(success: boolean, message: string, object: any = null) {
        this.success = success
        this.message = message
        this.object = object
    }

    public success: boolean;
    public message: string;
    public object: any;
}