// MuaHang.js
import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import './MuaSanPham.scss'; // Import tệp CSS


class MuaSanPham extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sanPham: {},  // Khởi tạo sanPham với một đối tượng trống
            soLuong: 1,
            loading: true,
        };
    }

    async componentDidMount() {
        const { match, location } = this.props;
        const id = match.params.id;
        if (location.state && location.state.soLuong) {
            this.setState({ soLuong: location.state.soLuong });
        }

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

    render() {
        const { sanPham, loading, soLuong } = this.state;
        return (
            <div className="muahang-container">

                <div className='container-setup'>
                    <div className="muahang-giay-info">
                        <form className="muahang-form">
                            <h5 className='thongtinh-muahang'>Thông tin giao hàng</h5>
                            <label className="muahang-label">

                                <input
                                    type="text"
                                    name="name"
                                    className="muahang-input hoten"
                                    placeholder='Họ và tên'
                                />
                            </label> <br />
                            <label className="muahang-label">

                                <input
                                    type="text"
                                    name="phoneNumber"
                                    className="muahang-input muahang-sdt"
                                    placeholder='Số điện thoại '
                                />
                            </label>
                            <label className="muahang-label">

                                <input
                                    type="text"
                                    name="address"
                                    className="muahang-input muahang-sonha" placeholder='Số nhà và tên đường'
                                />
                            </label> <br />
                            <label className="muahang-label">

                                <input
                                    type="text"
                                    className="muahang-input" placeholder='Ghi chú'
                                />
                            </label>
                            <p className='thanhtoan'>Hình thức thanh toán tại nhà</p>
                        </form>
                    </div>

                    <div className="muahang-customer-info">
                        <div className='hr-xoaydoc'></div>
                        <div className='thongtin-sanpham'>
                            <div className='thongtin-sanpham_2'>
                                <span className='discount-bannerr' >{soLuong}</span>
                                <img src={sanPham.imageUrl} className='sanpham-img'></img>

                                <span className='sanpham-name'>{sanPham.TenSP}</span>
                                {sanPham.DonGiaSP ? (
                                    <span className='sanpham-price'>{sanPham.DonGiaSP.toLocaleString()} VND</span>
                                ) : (
                                    <span className='sanpham-price'>Giá không xác định</span>
                                )}
                            </div>

                            <hr></hr>
                            <label className="muahang-magiamgia1">

                                <input
                                    type="text"
                                    name="name"


                                    className="muahang-magiamhgia" placeholder='Mã giảm giá (nếu có)'
                                />
                                <button className='muahang-xacnhan'>Sử Dụng</button>
                            </label>
                            <hr></hr>
                            <div className='muahang-tamtinh'>  <span className='muahang-tamtinh1'>Tạm tính</span>

                                {sanPham.DonGiaSP ? (
                                    <span className='sanpham-price'>{sanPham.DonGiaSP.toLocaleString()} VND</span>
                                ) : (
                                    <span className='sanpham-price'>Giá không xác định</span>
                                )}
                            </div>
                            <div className='muahang-phivanchuyen'>
                                <span>Phí vận chuyển</span>
                                <span className='muahang-phivanchuyen1'>0 VND</span>
                            </div>
                            <hr></hr>
                            <div className='muahang-tongcong'>
                                <span>Tổng cộng</span>
                                {sanPham.DonGiaSP ? (
                                    <span className='sanpham-price'>{sanPham.DonGiaSP.toLocaleString()} VND</span>
                                ) : (
                                    <span className='sanpham-price'>Giá không xác định</span>
                                )}
                            </div>
                            <button type="button" className="muahang-button">
                                Đặt Hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
};

export default withRouter(MuaSanPham);
