import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import './ListUser.scss';

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

    handleViewDetailUser = (sanpham) => {
        this.props.history.push(`/user/${sanpham.id}`);
    };

    render() {
        const { listSanPham } = this.state;
        return (
            <>
                <div className="list-user-container">
                    <div className="title">Fetch all list user</div>
                    <div className="list-user-cotent">
                        {listSanPham && listSanPham.length > 0 &&
                            listSanPham.map((item, index) => (
                                <div className="child" key={item.MaSP} onClick={() => this.handleViewDetailUser(item)}>
                                    {index + 1} - {item.TenSP}
                                </div>
                            ))}
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(ListSanPham);
