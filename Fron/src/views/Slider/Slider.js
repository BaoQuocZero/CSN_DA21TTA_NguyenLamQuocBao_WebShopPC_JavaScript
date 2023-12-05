import React, { Component } from "react";
import './Slider.scss';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.fetchData();
        this.setupSliderNavigation();
    }

    fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/sanpham");
            if (!response.ok) {
                throw new Error("Yêu cầu không thành công");
            }

            const jsonResponse = await response.json();
            this.setState({
                products: jsonResponse.data,
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    setupSliderNavigation = () => {
        document.getElementById('next').onclick = () => {
            let lists = document.querySelectorAll('.slide-item');
            document.getElementById('slide').appendChild(lists[0]);
        };

        document.getElementById('prev').onclick = () => {
            let lists = document.querySelectorAll('.slide-item');
            document.getElementById('slide').prepend(lists[lists.length - 1]);
        };

        // Thêm xử lý tự động chuyển slider sau mỗi khoảng thời gian
        // setInterval(() => {
        //     this.moveSliderNext();
        // }, 10000);
    };

    moveSliderNext = () => {
        let lists = document.querySelectorAll('.slide-item');
        document.getElementById('slide').appendChild(lists[0]);
    };

    render() {
        const { products } = this.state;
        return (
            <>
                <div className="slider-main">
                    <div className="slide-container">
                        <div id="slide">
                            {products.map(product => (
                                <div key={product.MaSP} className="slide-item" style={{ backgroundImage: `url(${product.imageUrl})` }}>
                                    <div className="slide-content">
                                        <div className="slide-name">{product.TenSP}</div>
                                        <div className="slide-des">{product.DonGiaSP.toLocaleString()}</div>
                                        <button>See more</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="slide-button">
                            <button id="prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <button id="next"><FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Slider;
