import React, { useState, useEffect } from "react";
import axios from "axios";

const ChiTietSanPham = ({ match }) => {
  const [sanPham, setSanPham] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSanPham = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/sanpham/${match.params.id}`);
        setSanPham(response.data.data || {});
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        // Xử lý khi không tìm thấy sản phẩm, ví dụ: chuyển hướng đến trang 404
      }
    };

    fetchSanPham();
  }, [match.params.id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{sanPham.TenSP}</h2>
          <p>Giá: {sanPham.DonGiaSP}</p>
          <p>Chip: {sanPham.Chip}</p>
          <p>Main: {sanPham.Main}</p>
          {/* Hiển thị các thông tin khác */}
        </>
      )}
    </div>
  );
};

export default ChiTietSanPham;
