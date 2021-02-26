import {Request, Response} from 'express'

class UserControler {
    async create(req: Request, res: Response) {
        const body = req.body;
        console.log(body);
        return res.send()
    }
}

export {UserControler}