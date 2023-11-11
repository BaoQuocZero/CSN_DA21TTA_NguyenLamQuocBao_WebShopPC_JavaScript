CREATE DATABASE ShopPC_data
GO
USE ShopPC_data;
GO
CREATE TABLE SanPham(
	MaSP INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	TenSP NVARCHAR(255),
	DonGiaSP MONEY,
	TonKhoSP SMALLINT,
	Chip NVARCHAR(50),
	Main NVARCHAR(100),
	VGA NVARCHAR(50),
	NhanSanXuat NVARCHAR(50),
	RAM NVARCHAR(100),
	AnhSP TEXT
)
GO
CREATE TABLE NhanVien(
	MaNV INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	HoLotNV NVARCHAR(20),
	TenNV NVARCHAR(10),
	DiaChiNV NVARCHAR(60),
	ThanhPhoNV NVARCHAR(15),
	QuocGiaNV NVARCHAR(15),
	SdtNV NVARCHAR(24),
	AnhNV TEXT
)
GO
CREATE TABLE KhachHang(
	MaKH INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	UseNameKH TEXT,
	PassKH TEXT,
	HoTenKH NVARCHAR(30),
	DiaChiKH NVARCHAR(60),
	ThanhPhoKH NVARCHAR(30),
	QuocGiaKH NVARCHAR(15),
	Sdt NVARCHAR(24),
)
GO
CREATE TABLE HoaDon(
	MaHD INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	MaKH INT,
	MaSP INT
)
GO
CREATE TABLE Admins(
	MaAD INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	UseNameAD TEXT,
	PassAD TEXT,
	TenLienHe NVARCHAR(30),
)

INSERT INTO [dbo].[KhachHang] (
      [UseNameKH]
      ,[PassKH]
      ,[HoTenKH]
      ,[DiaChiKH]
      ,[ThanhPhoKH]
      ,[QuocGiaKH]
      ,[Sdt]
)
VALUES
	('hohoangphuc', 'hohoangphuc', N'Hồ Hoàng Phúc', N'Tiểu Cần, Trà Vinh', N'Trà Vinh', N'Việt Nam', '0327434821');
GO
INSERT INTO [dbo].[SanPham](
      [TenSP]
      ,[MaNCC]
      ,[MaTL]
      ,[SoLuongTrenDonViSP]
      ,[DonGiaSP]
      ,[TonKhoSP]
)
VALUES
	(N'Sony a6000', 1, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 7000000, 12, 0, 1, 0),
	(N'Sony a6500', 1, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 25000000, 10, 0, 1, 0),
	(N'Nikon D5200', 2, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 4000000, 20, 0, 1, 0),
	(N'Nikon Z9', 2, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 130000000, 5, 0, 1, 0),
	(N'Canon 60D', 3, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 4000000, 20, 0, 1, 0),
	(N'Camon 6D', 3, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 10000000, 22, 0, 1, 0),
	(N'Fujifilm XT100', 4, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 8000000, 22, 0, 1, 0),
	(N'Fujifilm XT5', 4, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 8000000, 17, 0, 1, 0),
	(N'Leica M6', 5, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 65000000, 10, 0, 1, 0),
	(N'Leica M11', 5, 1, N'1xCamera, lens kit, pin, thẻ nhớ, túi đựng', 185000000, 5, 0, 1, 0)