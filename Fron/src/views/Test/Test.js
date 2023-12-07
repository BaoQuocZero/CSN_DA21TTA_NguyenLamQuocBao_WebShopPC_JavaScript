import React, { Component } from 'react';

class HoaDonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            MaKH: '',
            MaNV: '',
            DiaChiShip: '',
            ChiTietHoaDon: [
                { MaSP: '', SoLuong: 0, GiamGia: 0 },
                // Các mục ChiTietHoaDon khác nếu cần
            ],
            message: '',
        };
    }

    handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const updatedChiTietHoaDon = [...this.state.ChiTietHoaDon];
        updatedChiTietHoaDon[index][name] = value;

        this.setState({ ChiTietHoaDon: updatedChiTietHoaDon });
    };

    handleAddChiTietHoaDon = () => {
        this.setState((prevState) => ({
            ChiTietHoaDon: [...prevState.ChiTietHoaDon, { MaSP: '', SoLuong: 0, GiamGia: 0 }],
        }));
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/create-hoadon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state),
            });

            if (response.ok) {
                const data = await response.json();
                this.setState({ message: data.message });
            } else {
                throw new Error('Failed to create HoaDon');
            }
        } catch (error) {
            console.error('Error:', error);
            this.setState({ message: 'Failed to create HoaDon' });
        }
    };

    render() {
        return (
            <div>
                <h2>Create HoaDon</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        MaKH:
                        <input
                            type="text"
                            name="MaKH"
                            value={this.state.MaKH}
                            onChange={(e) => this.setState({ MaKH: e.target.value })}
                        />
                    </label>
                    <label>
                        MaNV:
                        <input
                            type="text"
                            name="MaNV"
                            value={this.state.MaNV}
                            onChange={(e) => this.setState({ MaNV: e.target.value })}
                        />
                    </label>
                    <label>
                        DiaChiShip:
                        <input
                            type="text"
                            name="DiaChiShip"
                            value={this.state.DiaChiShip}
                            onChange={(e) => this.setState({ DiaChiShip: e.target.value })}
                        />
                    </label>

                    {this.state.ChiTietHoaDon.map((item, index) => (
                        <div key={index}>
                            <h3>ChiTietHoaDon {index + 1}</h3>
                            <label>
                                MaSP:
                                <input
                                    type="text"
                                    name="MaSP"
                                    value={item.MaSP}
                                    onChange={(e) => this.handleInputChange(e, index)}
                                />
                            </label>
                            <label>
                                SoLuong:
                                <input
                                    type="number"
                                    name="SoLuong"
                                    value={item.SoLuong}
                                    onChange={(e) => this.handleInputChange(e, index)}
                                />
                            </label>
                            <label>
                                GiamGia:
                                <input
                                    type="number"
                                    name="GiamGia"
                                    value={item.GiamGia}
                                    onChange={(e) => this.handleInputChange(e, index)}
                                />
                            </label>
                        </div>
                    ))}

                    <button type="button" onClick={this.handleAddChiTietHoaDon}>
                        Add ChiTietHoaDon
                    </button>

                    <button type="submit">Create HoaDon</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default HoaDonForm;
