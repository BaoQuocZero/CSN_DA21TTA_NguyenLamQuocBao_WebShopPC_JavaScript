import React from "react";
import { withRouter } from "react-router-dom";
import './ListSanPham.scss';

import imageErr from '../../assets/images/Kothayanh.jpg'

class ListSanPham extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            loading: true,
            error: null,
        };
    }

    fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/sanpham", {
                method: "GET",
                mode: "cors",
            });
            if (!response.ok) {
                throw new Error("Yêu cầu không thành công");
            }

            const jsonResponse = await response.json();

            this.setState({
                data: jsonResponse.data,
                loading: false,
            });

            console.log(jsonResponse);
        } catch (error) {
            console.error(error.message);
            this.setState({
                error: error.message,
                loading: false,
            });
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    handleViewSanPham = (SanPham) => {
        const { history } = this.props;
        history.push(`/SanPham/${SanPham.MaSP}`)
    }

    render() {
        const { data, loading, error } = this.state;
        return (
            <>
                <div className="relative">
                    <div className="container-bottom">
                        <div className="tieude"><h1>Danh Sách Sản Phẩm</h1></div>
                        <ul className="products">
                            {data && data.length > 0 &&
                                data.map((item, index) => (
                                    <li key={index}>
                                        <div className="product-top">
                                            <a onClick={() => this.handleViewSanPham(item)} className="product-thumb">
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.TenSP}
                                                    onError={(e) => {
                                                        e.target.src = { imageErr } // Hoặc hiển thị thông báo lỗi khác
                                                    }}
                                                />
                                            </a>
                                            <a onClick={() => this.handleViewSanPham(item)} className="mua">Mua</a>
                                        </div>
                                        <div className="product-info">
                                            <a onClick={() => this.handleViewSanPham(item)} className="product-TheLoai">{item.NhanSanXuat}</a>
                                            <a onClick={() => this.handleViewSanPham(item)} className="product-name">{item.TenSP}</a>
                                            <div className="product-price">{item.DonGiaSP.toLocaleString()} VND</div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(ListSanPham);
