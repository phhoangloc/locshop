"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnDTO = void 0;
class ReturnDTO {
    data(success, data) {
        return {
            success,
            data
        };
    }
    boolean(success) {
        return {
            success
        };
    }
    message(success, msg) {
        return {
            success,
            msg
        };
    }
}
exports.ReturnDTO = ReturnDTO;
//# sourceMappingURL=DTO.js.map