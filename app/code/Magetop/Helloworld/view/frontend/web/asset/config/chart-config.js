const baseURL = "#"
const SaleReportData = [
    [
        {
            title: "Dòng tiền bán hàng - Tất cả cửa hàng",
            subTitle: "Dòng tiền các đơn hàng đã thanh toán theo ngày đặt hàng",
            link: baseURL + "/test"
        },
        {
            title: "Theo sản phẩm",
            subTitle: "Thống kê sản phẩm bán chạy theo thời gian",
            link: baseURL + "/products-stats-chart"
        },
        {
            title: "Kênh bán hàng",
            subTitle: "Dòng tiền thu được từ tất cả kênh bán hàng của bạn, bao gồm cả Online và Offline",
            link: baseURL + "/test"
        }
    ],
    [
        {
            title: "Kênh bán hàng POS",
            subTitle: "Dòng tiền thu được từ kênh bán hàng POS",
            link: baseURL + "/test"
        },
        {
            title: "Kênh bán hàng Facebook",
            subTitle: "Dòng tiền thu được từ kênh bán hàng Facebook",
            link: baseURL + "/test"
        },
        {
            title: "Nhân viên bán hàng",
            subTitle: "Hiệu suất Nhân viên bán hàng",
            link: baseURL + "/test"
        }
    ],
    [
        {
            title: "Chi nhánh bán hàng",
            subTitle: "Hiệu suất bán hàng theo chi nhánh",
            link: baseURL + "/test"
        },
        {
            title: "Theo traffic source",
            subTitle: "Doanh thu - Theo traffic source",
            link: baseURL + "/test"
        },
        {
            title: "Bán theo vùng",
            subTitle: "Doanh thu - Bán theo vùng",
            link: baseURL + "/test"
        }
    ],
    [
        {
            title: "Theo khách hàng",
            subTitle: "Doanh thu - Theo khách hàng",
            link: baseURL + "/test"
        },
        {
            title: "Tháng hiện tại",
            subTitle: "Doanh thu được tính theo ngày, bắt đầu từ ngày đầu tháng đến thời điểm hiện tại của bạn",
            link: baseURL + "/products-stats-chart-by-current-month"
        },
        {
            title: "Theo ngày giờ",
            subTitle: "Doanh thu được tính theo từng giờ trong ngày, bắt đầu từ ngày đầu tháng đến thời điểm hiện tại của bạn",
            link: baseURL + "/products-stats-chart-by-hour"
        }
    ],
    [
        {
            title: "Sản phẩm SKU",
            subTitle: "Giúp bạn thống kê chi tiết từng biến thể sản phẩm bán chạy theo thời gian",
            link: baseURL + "/product-chart"
        },
        {
            title: "Sản phẩm - Nhà sản xuất",
            subTitle: "Giúp bạn xác định sản phẩm của nhà sản xuất nào đang được kinh doanh hiệu quả theo thời gian",
            link: baseURL + "/test"
        },
        {
            title: "Nhân viên bán hàng - Theo ngày",
            subTitle: "Giúp bạn đánh giá hiệu suất và năng lực của từng nhân viên bán hàng",
            link: baseURL + "/test"
        }
    ]
]
const FinanceReport = [
    [
        {
            title: "Dòng tiền theo ngày giao dịch",
            subTitle: "Thu chi phát sinh theo ngày giao dịch, đổi trả",
            link: baseURL + "/test"
        },
        {
            title: "Dòng tiền theo ngày đặt hàng",
            subTitle: "Thu chi phát sinh theo ngày đặt đơn hàng",
            link: baseURL + "/test"
        },
        {
            title: "Tài chính tổng quan",
            subTitle: "Mang đến cho bạn cái nhìn tổng quan nhất về tình hình tài chính của doanh nghiệp",
            link: baseURL + "/test"
        }
    ],
    [
        {
            title: "Theo doanh thu thuần",
            subTitle: "Theo dõi tình hình kinh doanh của bạn theo doanh thu hệ thống ghi nhận được",
            link: baseURL + "/test"
        }
    ]
]
const WebsiteReport = [
    [
        {
            title: "PageViews - Tháng hiện tại",
            subTitle: "Thống kê lượng truy cập Website tháng hiện tại",
            link: baseURL + "/test"
        }
    ]
]
export { SaleReportData, FinanceReport, WebsiteReport };