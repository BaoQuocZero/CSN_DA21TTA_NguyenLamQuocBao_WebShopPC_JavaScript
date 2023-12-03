import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import './ListSanPham.scss';

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

    render() {
        const { data, loading, error } = this.state;
        console.log("check đata", data)
        return (
            <div className="container-bottom">
                <div className="tieude"><h1>Sản Phẩm Nổi Bật</h1></div>
                <ul className="products">
                    {data && data.length > 0 &&
                        data.map((item, index) => (
                            <li key={index}>
                                <div className="product-top">
                                    <a href={`/product/${item.MaSP}`} className="product-thumb">
                                        <img src={`http://localhost:8080/public/images/${item.AnhSP}`} alt={item.TenSP} />
                                    </a>
                                    <a href={`/product/${item.MaSP}`} className="mua">Mua</a>
                                </div>
                                <div className="product-info">
                                    <a href={`/product/${item.MaSP}`} className="product-TheLoai">{item.NhanSanXuat}</a>
                                    <a href={`/product/${item.MaSP}`} className="product-name">{item.TenSP}</a>
                                    <div className="product-price">{item.DonGiaSP.toLocaleString()} VND</div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default withRouter(ListSanPham);
