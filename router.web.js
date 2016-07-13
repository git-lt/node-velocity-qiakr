import koaBody from 'koa-body'
import ctrs from './controller/'
import Router from 'koa-router'
let router = Router();

router
	.get('/', koaBody, ctrs.c_admin.login)
	.get('/admin/customerExchange.htm', koaBody, ctrs.c_admin.customerExchange);

export { router }
