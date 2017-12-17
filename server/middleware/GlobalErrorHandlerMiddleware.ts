
import * as Express from 'express';
import { MiddlewareError, Err, Next, Request, Response } from 'ts-express-decorators';
import { IMiddlewareError } from 'ts-express-decorators';
import { Exception } from 'ts-httpexceptions';

@MiddlewareError()
export default class GlobalErrorHandlerMiddleware implements IMiddlewareError {
	use(
		@Err() error: any,
		@Request() request: Express.Request,
		@Response() response: Express.Response,
		@Next() next: Express.NextFunction
	): any {
		if (response.headersSent) return next(error);



		if (error instanceof Exception) {
			response.status(error.status).send(error);
		} else {
			response.status(500).send(error);
		}

		return;
	}
}