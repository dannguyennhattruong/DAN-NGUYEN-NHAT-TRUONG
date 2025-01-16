import * as mongoose from 'mongoose';
import { ResourceSchema } from '../models/resources';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ResourceFilter } from '../dtos/resource';
import { ResponseHanlder } from '../handlers/response';
import { RESPONSE_STATUS } from '../enums';
import { PresistenceDatabase } from '../database/persistenceDB';

const Resource = new PresistenceDatabase<ResourceFilter>();

export class ResourceController {

    public async listResources(req: Request, res: Response) {
        try {
            const conditions: ResourceFilter = {};

            if (req.body?.resourceName) {
                conditions[`resourceName`] = req.body?.resourceName;
            }

            if (req.body?.resourceDescription) {
                conditions[`resourceDescription`] = req.body?.resourceDescription;
            }

            if (req.body?.createdDate) {
                conditions[`createdDate`] = req.body?.createdDate;
            }

            const ret = Resource.find(conditions);
            const result = new ResponseHanlder(RESPONSE_STATUS.OK, ret);
            return res.status(200).json(result);
        } catch (error) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, error);
            return res.status(400).json(result);
        }
    }
    public async addNewResource(req: Request, res: Response) {
        try {
            const ret = Resource.create(req.body);
            const result = new ResponseHanlder(RESPONSE_STATUS.OK, ret);

            return res.status(200).json(result);;
        } catch (error) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, error);
            return res.status(400).json(result);
        }
    }

    public async getDetail(req: Request, res: Response) {
        if (!req.body?._id) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, {
                message: '_id is required!'
            });
            return res.status(400).json(result);
        }
        try {
            const ret = Resource.find({ _id: req.body?._id });
            const result = new ResponseHanlder(RESPONSE_STATUS.OK, ret);

            return res.status(200).json(result);;
        } catch (error) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, error);
            return res.status(400).json(result);
        }
    }

    public async update(req: Request, res: Response) {
        if (!req.body?._id) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, {
                message: '_id is required!'
            });
            return res.status(400).json(result);
        }
        if (!req.body?.data) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, {
                message: 'data is required!'
            });
            return res.status(400).json(result);
        }
        try {
            const ret = Resource.update(req.body?._id, req.body.data);

            const result = new ResponseHanlder(RESPONSE_STATUS.OK, ret);

            return res.status(200).json(result);;
        } catch (error) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, error);
            return res.status(400).json(result);
        }
    }

    public async delete(req: Request, res: Response) {
        if (!req.body?._id) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, {
                message: '_id is required!'
            });
            return res.status(400).json(result);
        }
        try {
            const ret = Resource.delete(req.body?._id);
            const result = new ResponseHanlder(RESPONSE_STATUS.OK, ret);

            return res.status(200).json(result);;
        } catch (error) {
            const result = new ResponseHanlder(RESPONSE_STATUS.ERROR, error);
            return res.status(400).json(result);
        }
    }
}