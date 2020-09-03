import {all, fork, takeEvery, takeLatest} from 'redux-saga/effects';
import {
    getReportsRevenueStats,
    getReportsProducts,
    getReportsProductsStats,
    getReportsOrders,
    getReportsOrdersStats,
    getOrder,
    getAdminNotes,
    getProductsReviews,
    getProductsCategories,
} from './call'
import {
    GET_REPORTS_REVENUE_STATS,
    GET_REPORTS_PRODUCTS,
    GET_REPORTS_PRODUCTS_STATS,
    GET_REPORTS_ORDERS,
    GET_REPORTS_ORDERS_STATS,
    GET_ORDER,
    GET_ADMIN_NOTES,
    GET_PRODUCT_REVIEWS,
    GET_PRODUCT_CATEGORIES,
} from './actions';

export function* watchGetReportsRevenueStats() {
    yield takeEvery(GET_REPORTS_REVENUE_STATS, getReportsRevenueStats);
}

export function* watchGetReportsProductStats() {
    yield takeEvery(GET_REPORTS_PRODUCTS_STATS, getReportsProductsStats);
}

export function* watchGetReportsProduct() {
    yield takeEvery(GET_REPORTS_PRODUCTS, getReportsProducts);
}

export function* watchGetReportsOrdersStats() {
    yield takeEvery(GET_REPORTS_ORDERS_STATS, getReportsOrdersStats);
}

export function* watchGetReportsOrders() {
    yield takeEvery(GET_REPORTS_ORDERS, getReportsOrders);
}

export function* watchGetOrder() {
    yield takeLatest(GET_ORDER, getOrder);
}

export function* watchGetAdminNotes() {
    yield takeEvery(GET_ADMIN_NOTES, getAdminNotes);
}

export function* watchGetProductsReviews() {
    yield takeEvery(GET_PRODUCT_REVIEWS, getProductsReviews);
}

export function* watchGetProductsCategories() {
    yield takeEvery(GET_PRODUCT_CATEGORIES, getProductsCategories);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetReportsRevenueStats),
        fork(watchGetReportsProduct),
        fork(watchGetReportsProductStats),
        fork(watchGetOrder),
        fork(watchGetReportsOrdersStats),
        fork(watchGetAdminNotes),
        fork(watchGetReportsOrders),
        fork(watchGetProductsReviews),
        fork(watchGetProductsCategories),
    ]);
}
