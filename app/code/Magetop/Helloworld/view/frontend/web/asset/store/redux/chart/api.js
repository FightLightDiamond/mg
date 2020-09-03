import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// const api = new WooCommerceRestApi({
//     url: "http://localhost:4000",
//     consumerKey: "ck_60b7b726efa8fb98fa004f766e4f29821e439ffa",
//     consumerSecret: "cs_5fe97c6f385e7c0ac5dc9a77f2d0c1f4e2e99266",
//     version: "wc-analytics"
// });

const api = new WooCommerceRestApi({
    url: "http://172.16.50.5",
    consumerKey: "ck_69c231675554b23f9c86727df23e5355fc5a66c5",
    consumerSecret: "cs_ac03336dbf8714b5892a49a48cebfbb170472a73",
    version: "wc-analytics"
});

/**
 * reports/products/stats
 * @type {{per_page: number, before: null, interval: string, after: null, fields: string[], order: string, _locale: string}}
 */
const reportsRevenueStatsParams = {
    after: null,
    before: null,
    fields: [
        'avg_items_per_order',
        'avg_order_value',
        'coupons',
        'coupons_count',
        'gross_sales',
        'items_sold',
        'net_revenue',
        'num_new_customers',
        'num_returning_customers',
        'num_items_sold',
        'products',
        'orders_count',
        'refunds',
        'shipping',
        'taxes',
        'total_sales',
    ],
    interval: 'day', //hour
    order: 'asc',
    per_page: 100,
    _locale: 'user'
}

const getReportsRevenueStatsAsync = async (params = {}) => {
    return await api.get("reports/revenue/stats", params)
}

const getReportsProductsStatsAsync = async (params = {}) => {
    return await api.get("reports/products/stats", params)
}

const getReportsOrdersStatsAsync = async (params = {}) => {
    return await api.get("reports/orders/stats", params)
}

const getReportsOrdersAsyncParams = {
    after: '2020-08-13T00:00:00',
    before: '2020-08-13T23:59:59',
    extended_info: true,
    order: 'desc',
    orderby: 'date',
    page: 1,
    per_page: 25,
    _locale: 'user'
}

const getReportsOrdersAsync = async (params = {}) => {
    return await api.get("reports/orders", params)
}

/**
 * /orders
 * @type {{per_page: number, page: number, fields: [string], status: [string, string], _locale: string}}
 */
const orderParams = {
    fields: [
        'id',
    ],
    page: 1,
    per_page: 1,
    status: [
        'processing',
        'on-hold'
    ],
    _locale: 'user'
}


const getOrderAsync = async (params = {}) => {
    return await api.get("orders", params)
}

/**
 * /admin/notes
 */
const adminNotesParams = {
    order: 'desc',
    orderby: 'date',
    page: 1,
    per_page: 1,
    type: 'info,warning,error,update',
    status: 'unactioned',
    _locale: 'user'
}

const getAdminNotesAsync = async (params = {}) => {
    return await api.get("admin/notes", params)
}

/**
 * products/reviews
 * @type {{per_page: number, page: number, status: string, _locale: string}}
 */
const productsReviewsParams = {
    page: 1,
    per_page: 1,
    status: 'hold',
    _locale: 'user'
}

const getProductsReviewsAsync = async (params = {}) => {
    return await api.get("products/reviews", params)
}

const getProductsCategoriesAsyncParams = {
    per_page: 100,
    _locale: 'user'
}

const getProductsCategoriesAsync = async (params = {}) => {
    return await api.get("products/categories", params)
}

/**
 *
 * @type {{extended_info: boolean, per_page: number, before: string, orderby: string, interval: string, after: string, fields: [string, string, string, string], order: string, _locale: string}}
 */
const reportsProductsStatsParams = {
    after: '2020-08-13T00:00:00',
    before: '2020-08-13T23:59:59',
    extended_info: true,
    fields: [
        'products_count',
        'items_sold',
        'net_revenue',
        'orders_count'
    ],
    interval: 'hour',
    order: 'asc',
    orderby: 'items_sold',
    per_page: 100,
    _locale: 'user'
}

const getReportsProductsAsync = async (params = {}) => {
    return await api.get("reports/products", params)
}

const productsParams = {
    search: 'Vở South Star kpop-Mercado-Bút máy nét Light up',
    per_page: 10,
    orderby: 'popularity'
}

const getProductsAsync = async (params = {}) => {
    return await api.get("products", params)
}

export {
    getReportsRevenueStatsAsync,
    getReportsProductsAsync,
    getReportsProductsStatsAsync,
    getReportsOrdersStatsAsync,
    getReportsOrdersAsync,
    getOrderAsync,
    getAdminNotesAsync,
    getProductsAsync,
    getProductsReviewsAsync,
    getProductsCategoriesAsync
}