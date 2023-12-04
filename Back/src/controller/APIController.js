import pool from "../configs/connectDB"

let getAllSanPham = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM SanPham');

    // Thêm đường dẫn đầy đủ cho mỗi sản phẩm
    const productsWithImageUrls = rows.map((SanPham) => {
        return {
            ...SanPham,
            imageUrl: `http://localhost:8080/public/images/${SanPham.AnhSP}`,
        };
    });

    return res.status(200).json({
        message: "ok",
        data: productsWithImageUrls
    })
}

// Thêm hàm để lấy thông tin chi tiết sản phẩm theo id
let getSanPhamById = async (req, res) => {
    let { id } = req.params;

    if (!id) {
        return res.status(400).json({
            error: "Bad Request",
            message: "Thiếu thông tin id sản phẩm",
        });
    }

    const [rows, fields] = await pool.execute('SELECT * FROM SanPham WHERE MaSP = ?', [id]);

    if (rows.length === 0) {
        return res.status(404).json({
            message: "Không tìm thấy sản phẩm với id đã cho",
        });
    }

    const productWithImageUrl = {
        ...rows[0],
        imageUrl: `http://localhost:8080/public/images/${rows[0].AnhSP}`,
    };

    return res.status(200).json({
        message: "ok",
        data: productWithImageUrl,
    });
}

let createNewUser = async (req, res) => {
    let { MaSP, TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP } = req.body;

    if (!MaSP || !TenSP || !MaTL || !DonGiaSP || !TonKhoSP || !Chip || !Main || !VGA || !NhanSanXuat || !RAM || !AnhSP) {
        return res.status(200).json({
            message: "missing create",
        })
    }

    await pool.execute(`    
    INSERT INTO SanPham(TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [TenSP, MaTL, DonGiaSP, TonKhoSP, Chip, Main, VGA, NhanSanXuat, RAM, AnhSP]);
    return res.status(200).json({
        message: "ok",
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

let deleteUser = async (req, res) => {
    let { MaSP } = req.body;

    if (!MaSP) {
        return res.status(200).json({
            message: "missing delete",
        })
    }

    await pool.execute(`
    DELETE FROM SanPham
    WHERE MaSP = ?`,
        [MaSP]);
    return res.status(200).json({
        message: "ok",
    })
}

module.exports = {
    getAllSanPham, createNewUser, updateSanPham, deleteUser, getSanPhamById
}