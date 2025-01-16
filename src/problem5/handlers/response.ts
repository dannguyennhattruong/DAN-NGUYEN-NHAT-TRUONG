import { RESPONSE_STATUS } from "../enums";

export class ResponseHanlder {

    status: RESPONSE_STATUS;

    result: unknown;

    errors: unknown;

    num?: number;

    total_num?: number;

    constructor(_status: RESPONSE_STATUS, _data: unknown) {
        this.status = _status;
        // set data to return
        switch (_status) {
            case RESPONSE_STATUS.OK:
                this.result = _data;
                break;
            case RESPONSE_STATUS.NG:
                this.result = _data;
                break;
            case RESPONSE_STATUS.ERROR:
                this.errors = _data;
                break;
            default: {
                //statements;
                break;
            }
        }

        // set num data to return
        if (Array.isArray(_data)) {
            this.num = _data.length;
        } else if (
            _data !== undefined &&
            _data !== null
        ) {
            this.num = 1;
        }

        if (!_data) {
            this.result = [];
        }
    }


}