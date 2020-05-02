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

    connection.query('SELECT t_user.username, t_servis.tgl_service, t_montir.Nama_montir, t_sparepart.nama_sparepart,t_sparepart.harga_sparepart, t_servis.jumlah_sparepart, t_servis.jam_service, t_montir.harga_perjam, t_servis.total_service FROM t_servis JOIN t_user JOIN t_sparepart JOIN t_montir WHERE t_servis.id_user = t_user.id AND t_servis.id_sparepart = t_sparepart.id_sparepart AND t_servis.id_montir = t_montir.id_montir ORDER BY t_user.id ',
     function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//ubah data service
exports.ubahservice = function (req, res) {
    var id_service = req.body.id_service;
    var tgl_service = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    var jam_service = req.body.jam_service;


    connection.query('UPDATE t_servis SET tgl_service=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=?, jam_service=? WHERE id_service=?',
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

//menambahkan data montir
exports.tambahmontir = function (req, res) {
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;


    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES(?,?)',
        [nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data User
exports.tambahuser = function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();


    connection.query('INSERT INTO t_user (username, email, password, role, tanggal_daftar) VALUES(?,?,?,?,?)',
        [username, email, password, role, tanggal_daftar], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
};

//menambahkan data level
exports.tambahlevel = function (req, res) {
    var nama_level = req.body.nama_level;
    var role = req.body.role;



    connection.query('INSERT INTO t_level (nama_level, role) VALUES(?,?)',
        [nama_level, role], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data", res)
            }
        });
}; 

//Mengubah data montir
exports.ubahmontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;


    connection.query('UPDATE t_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?',
        [nama_montir, harga_perjam,  id_montir], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
}; 

//Mengubah data User
exports.ubahuser = function (req, res) {
    var id = req.body.id;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();


    connection.query('UPDATE t_user SET username=?, email=?, password=?, role=?, tanggal_daftar=? WHERE id=?',
        [username, email, password, role, tanggal_daftar, id], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
}; 

//Mengubah Data berdasarkan id
exports.ubahlevel = function (req, res) {
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;
    var role = req.body.role;

    connection.query('UPDATE t_level SET nama_level=?, role=? WHERE id_level=?', [nama_level, role, id_level],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}; 

//menghapus data montir
exports.hapusMontir = function(req, res){
    var id = req.body.id_montir;
    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

//hapus User
exports.hapususer = function(req, res){
    var id = req.body.id;
    connection.query('DELETE FROM t_user WHERE id=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
}; 

//hapus level
exports.hapuslevel = function(req, res){
    var id = req.body.id_level;
    connection.query('DELETE FROM t_level WHERE id_level=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};