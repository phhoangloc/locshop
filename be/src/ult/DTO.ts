export class ReturnDTO {
    data(success: boolean, data: any) {
        return {
            success,
            data
        }
    }
    boolean(success: boolean) {
        return {
            success
        }
    }
    message(success: boolean, msg: any) {
        return {
            success,
            msg
        }
    }
}