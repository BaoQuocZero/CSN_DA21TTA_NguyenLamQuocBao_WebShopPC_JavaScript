import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import './ListSanPham.scss';

class ListSanPham extends React.Component {
    state = {
        listSanPham: []
    };

    async componentDidMount() {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/sanpham');
            this.setState({
                listSanPham: res.data && res.data.data ? res.data.data : []
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    render() {
        const { listSanPham } = this.state;
        console.log(">>> check listSanPham: ", listSanPham)

        return (
            <>
                <div className="container-bottom">
                    <div className="tieude"><h1>Sản Phẩm Nổi Bật</h1></div>
                    <ul className="products">
                        {listSanPham && listSanPham.length > 0 &&
                            listSanPham.map((item, index) => (
                                <li key={index}>
                                    <div className="product-top">
                                        <a href={`/product/${item.MaSP}`} className="product-thumb">
                                            <img src={require(`../../assets/images/img_sp/${item.AnhSP}`).default} alt={item.TenSP} />
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
            </>
        );
    }
}

export default withRouter(ListSanPham);
