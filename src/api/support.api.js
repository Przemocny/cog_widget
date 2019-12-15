import { request } from './request'


class SupportAPI {
    constructor() {
        this.route = '/api'
        
        this.sendTicket = this.sendTicket.bind(this)
    }

    sendTicket(
        message
    ) {

    const url = this.route + `/landing-support/`
    const config = {
        method: 'POST',
        data:message
    }

    return request(url, config)
    }
}

const SupportApi = new SupportAPI()

export default SupportApi