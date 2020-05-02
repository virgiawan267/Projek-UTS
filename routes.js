'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampilsparepart')
    .get(jsonku.tampildatasparepart);

    app.route('/tampilmontir')
    .get(jsonku.tampildatamontir);

    app.route('/tampilsparepart/:id')
    .get(jsonku.tampildatasparepartid);

    app.route('/tampilmontir/:id')
    .get(jsonku.tampildatamontirid);

    app.route('/tambahservice')
    .post(jsonku.tambahservice);

    app.route('/tampilservice')
    .get(jsonku.tampilservice);

    app.route('/tambahmontir')
    .post(jsonku.tambahmontir);

    app.route('/tambahuser')
    .post(jsonku.tambahuser);

    app.route('/tambahlevel')
     .post(jsonku.tambahlevel);

     app.route('/ubahmontir')
     .put(jsonku.ubahmontir);
}