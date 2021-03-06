const clientService = require("../services/ClientService");
const utils = require("../utils/utils");

module.exports.getClients = function (req, res) {
    
    return clientService.getClients()
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.getClientById = function (req, res) {
    
    return clientService.getClientById(req.params)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.addClient = function (req, res) {
    
    return clientService.addClient(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.updateClient = function (req, res) {
    
    return clientService.updateClient(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};

module.exports.deleteClient = function (req, res) {
    
    return clientService.deleteClient(req.body)
    .then((data) => {
        utils.successResponse(res, data);
    }).catch((error) => {
        utils.errorResponse(res, error);
    });
    
};