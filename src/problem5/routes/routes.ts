import { Application, NextFunction, Request, Response } from "express";
import { ResourceController } from "../controllers/resource";

export class Routes {
    public resourceController: ResourceController = new ResourceController();
    public routes(app: Application): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Server is running!'
                })
            })

        app.route('/resource/list')
            .post(asyncWrapper(this.resourceController.listResources));

        app.route('/resource/create')
            .post(asyncWrapper(this.resourceController.addNewResource));

        app.route('/resource/detail')
            .post(asyncWrapper(this.resourceController.getDetail));

        app.route('/resource/update')
            .post(asyncWrapper(this.resourceController.update));

        app.route('/resource/delete')
            .post(asyncWrapper(this.resourceController.delete));
    }


}
function asyncWrapper(asyncFn: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
    return function (req: Request, res: Response, next: NextFunction) {
        asyncFn(req, res).catch(next)
    }
}

