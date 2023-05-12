import * as service from '../services/hiredsService.js';

export function getHireds(req, res) {
    service.getHireds(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}
