'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan", res)
};

//menampilkan data sparepart dan montir
exports.tampildatasparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
exports.tampildatamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data sparepart dan montir berdasarkan id
exports.tampildatasparepartid = function (req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

exports.tampildatamontirid = function (req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

//Menampilkan Data Service 
exports.tampilservice = function(req,res){

    connection.query('SELECT t_user.username, t_service.tgl_service, t_montir.Nama_montir, t_sparepart.nama_sparepart,t_sparepart.harga_sparepart, t_service.jumlah_sparepart, t_service.jam_service, t_montir.harga_perjam, t_service.total_service FROM t_service JOIN t_user JOIN t_sparepart JOIN t_montir WHERE t_service.id_user = t_user.id_user AND t_service.id_sparepart = t_sparepart.id_sparepart AND t_service.id_montir = t_montir.id_montir ORDER BY t_user.id_user ',
     function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menambahkan data service
exports.ubahservice = function (req, res) {
    var id_service = req.body.id_service;
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;


    connection.query('UPDATE t_service SET tgl_service=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=?, jam_service=? WHERE id_service=?',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service, id_service], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//menampilkan data service total
exports.tampildatamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

exports.tambahservice = function (req, res) {
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;


    connection.query('INSERT INTO t_servis (tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service) VALUES(?,?,?,?,?,?)',
        [tgl_service, id_user, id_montir, jumlah_sparepart, id_sparepart, jam_service], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
}; 