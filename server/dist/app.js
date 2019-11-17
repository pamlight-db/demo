"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_config_1 = require("./env-config");
const admin_1 = require("@pamlight/admin");
// setup Pamlight admin SDK
const pamlightAdmin = new admin_1.PamlightAdmin(env_config_1.settings.pamlight);
pamlightAdmin.reads.route({
    routeId: 'getDocsList',
    collection: 'demoDocs',
    isSingleDocument: false
});
pamlightAdmin.writes.route({
    routeId: 'createNewDoc',
    collection: 'demoDocs',
    writeType: admin_1.PamlightDBWriteTypes.CREATE_DOCUMENT,
    docFn: (payload = {}) => __awaiter(this, void 0, void 0, function* () {
        return {
            payload: {
                name: payload.name || '',
                message: payload.message || '',
                date: new Date()
            }
        };
    })
});
pamlightAdmin.start().then(() => {
    console.log('Connected');
}).catch(e => {
    console.log(e);
});
// const Server = require('http').createServer();
// Server.listen(settings.port, () => {
//     console.log(`Pamlight demo server listening on port ${settings.port} in ${settings.env} environment`);
// });
