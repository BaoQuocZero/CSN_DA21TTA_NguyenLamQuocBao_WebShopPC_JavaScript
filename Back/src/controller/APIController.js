import pool from "../configs/connectDB"

let getAllSanPham = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM SanPham');

    return res.status(200).json({
        message: "ok",
        data: rows
    })
}

let updateSanPham = async (req, res) => {
    let { MaSP, TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP } = req.body;

    if (!MaSP || !TenSP || !MaTL || !DonGiaSP || !TonKhoSP || !Chip || !Main || !VGA || !NhanSanXuat || !RAM || !AnhSP) {
        return res.status(200).json({
            message: "missing update",
        })
    }

    await pool.execute(`
    UPDATE SanPham SET TenSP = ?, MaTL = ?, DonGiaSP=?, TonKhoSP = ?, Chip = ?, Main = ?, VGA = ?, NhanSanXuat = ?, RAM = ?, AnhSP = ? 
    WHERE MaSP = ?`,
        [TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP, MaSP]);
    return res.status(200).json({
        message: "ok",
    })
}

module.exports = {
    getAllSanPham, updateSanPham
}