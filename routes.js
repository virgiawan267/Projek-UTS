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

    app.route('/tambahsparepart')
    .post(jsonku.tambahsparepart);

    app.route('/tambahuser')
    .post(jsonku.tambahuser);

    app.route('/tambahlevel')
     .post(jsonku.tambahlevel);

     app.route('/ubahmontir')
     .put(jsonku.ubahmontir);

     app.route('/ubahuser')
     .put(jsonku.ubahuser);

     app.route('/ubahlevel')
     .put(jsonku.ubahlevel);

     app.route('/ubahservice')
     .put(jsonku.ubahservice);

     app.route('/hapusmontir')
     .delete(jsonku.hapusMontir);

     app.route('/hapuslevel')
     .delete(jsonku.hapuslevel);

     app.route('/hapususer')
     .delete(jsonku.hapususer);

     app.route('/hapusservice')
     .delete(jsonku.hapusservice);

}
