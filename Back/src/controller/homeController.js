import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute(`SELECT * FROM SanPham`);
    return res.render("index.ejs", { SanPham: rows })
}

let getThemSanPhamPage = (req, res) => {
    return res.render('sanphamNew.ejs')
}

let themSanPham = async (req, res) => {
    let { TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP } = req.body;
    await pool.execute(`
    INSERT INTO SanPham (TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP]);
    return res.redirect('/')
}

let getEditPage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute(`
    SELECT * FROM SanPham WHERE MaSP = ?`,
        [id]);
    return res.render("update.ejs", { SanPham: user[0] })
}

let postUpdateSanPham = async (req, res) => {
    let { MaSP, TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP } = req.body;

    await pool.execute(`
    UPDATE SanPham SET TenSP = ?, MaTL = ?, DonGiaSP=?, TonKhoSP = ?, Chip = ?, Main = ?, VGA = ?, NhanSanXuat = ?, RAM = ?, AnhSP = ? 
    WHERE MaSP = ?`,
        [TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP, MaSP]);
    return res.redirect('/')
}

let deleteSanPham = async (req, res) => {
    let MaSP = req.body.MaSP
    await pool.execute(`
    DELETE FROM SanPham WHERE MaSP = ?`,
        [MaSP]);
    return res.redirect('/')
}

module.exports = {
    getHomePage, getThemSanPhamPage, themSanPham, getEditPage, postUpdateSanPham, deleteSanPham
}
//createNewUser, deleteUser