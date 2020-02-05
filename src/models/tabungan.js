const conn = require('../configs/connect')

module.exports = {
    getTabungan: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tabungan`, (err, result) => {
                if(err){
                    reject(new Error(err))
                }else{
                    conn.query(`SELECT COALESCE(SUM(jumlah), 0) as jmlh FROM tabungan WHERE lower(tipe) = 'pemasukan'`, (err, rows) => {
                        if(!err){
                            conn.query(`SELECT COALESCE(SUM(jumlah), 0) as jml FROM tabungan WHERE lower(tipe) = 'pengeluaran'`, (err, row) => {
                                let jmlPengeluaran = row[0].jml
                                let jmlPemasukan = rows[0].jmlh
                                let total = jmlPemasukan - jmlPengeluaran
                                const res = {result, jmlPemasukan, jmlPengeluaran, total}
                                resolve(res)
                            })
                        }
                    })
                }
            })
        })
    },
    addTabungan: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO tabungan SET ?`, data, (err) => {
                if(err){
                    reject(new Error(err))
                }else{
                    let result = "Data Added Successfully"
                    resolve(result)
                }
            })
        })
    },
    editTabungan: (id, data) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE tabungan SET ? WHERE id = ?`, [data, id], (err) => {
                if(err){
                    reject(new Error(err))
                }else{
                    let result ="Data Updated Successfully"
                    resolve(result)
                }
            })
        })
    },
    deleteTabungan: (id) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM tabungan WHERE id = ?`, id, (err) => {
                if(err){
                    reject(new Error(err))
                }else{
                    let result = "Data Deleted Successfully"
                    resolve(result)
                }
            })
        })
    }
}