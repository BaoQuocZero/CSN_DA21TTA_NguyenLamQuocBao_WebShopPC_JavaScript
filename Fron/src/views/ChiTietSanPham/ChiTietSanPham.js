import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import './ChiTietSanPham.scss'

import Nav from "../Nav/Nav";

class ChiTietSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPham: {},
      soLuong: 1, // Số lượng mặc định là 1
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    try {
      const response = await axios.get(`http://localhost:8080/api/v1/sanpham/${id}`);
      this.setState({
        sanPham: response.data.data || {},
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching product details:", error);
      // Xử lý khi không tìm thấy sản phẩm, ví dụ: chuyển hướng đến trang 404
    }
  }

  handleQuantityChange = (event) => {
    // Xử lý thay đổi số lượng
    this.setState({ soLuong: event.target.value });
  };

  handlePurchase = () => {
    const { sanPham, soLuong } = this.state;

    if (soLuong > sanPham.TonKhoSP) {
      alert("Số lượng mua vượt quá số lượng tồn kho.");
      // Hoặc thực hiện một xử lý khác, chẳng hạn chuyển hướng đến trang thông báo
      return;
    }

    // Thực hiện xử lý mua hàng với số lượng hợp lệ
    // ...

    // Ví dụ: hiển thị thông báo thành công
    alert(`Bạn đã mua ${soLuong} sản phẩm thành công.`);
  };

  render() {
    const { sanPham, loading, soLuong } = this.state;

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Nav />
            <div className="container_ChiTietSanPham">
              <div className="product-info_ChiTietSanPham">
                <form className='form_ChiTietSanPham'>
                  <div className="product-image_ChiTietSanPham">
                    <img className="image_ChiTietSanPham" src={sanPham.imageUrl} alt={sanPham.TenSP} />
                  </div>
                  <div className='product-h3_ChiTietSanPham'>
                    <h3 className='h3_ChiTietSanPham'>{sanPham.TenSP}</h3>
                    <p className='product-prices_ChiTietSanPham'>${sanPham.DonGiaSP.toLocaleString()}</p>
                    <hr></hr>
                    <p className='product-status_ChiTietSanPham'>
                      {sanPham.TonKhoSP > 0 ? 'Còn hàng' : 'Hết hàng'}
                    </p>
                    <div className='SoLuongSanPham_ChiTietSanPham'>
                      <label htmlFor="quantity">Số lượng:</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value={soLuong}
                        onChange={this.handleQuantityChange}
                      />
                    </div>
                    <div className='product-h3_muahang_ChiTietSanPham'>

                      {sanPham.TonKhoSP > 0 && (
                        <button type="button" className="purchase-button_ChiTietSanPham" onClick={this.handlePurchase}>
                          Mua Hàng
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(ChiTietSanPham);
