import {call, put} from "@redux-saga/core/effects";
import {
    getReportsRevenueStatsAsync,
    getReportsProductsAsync,
    getReportsProductsStatsAsync,
    getReportsOrdersAsync,
    getReportsOrdersStatsAsync,
    getOrderAsync,
    getAdminNotesAsync,
    getProductsReviewsAsync,
    getProductsCategoriesAsync
} from "./api";

import {
    getReportsRevenueStatsError,
    getReportsRevenueStatsSuccess,
    getReportsProductsError,
    getReportsProductsSuccess,
    getReportsProductsStatsError,
    getReportsProductsStatsSuccess,
    getReportsOrdersError,
    getReportsOrdersSuccess,
    getReportsOrdersStatsError,
    getReportsOrdersStatsSuccess,
    getOrderError,
    getOrderSuccess,
    getAdminNotesError,
    getAdminNotesSuccess,
    getProductsReviewsError,
    getProductsReviewsSuccess,
    getProductsCategoriesError,
    getProductsCategoriesSuccess
} from "./actions";


import {
    repostRevenueStartsTransformer,
    repostProductsStartsTransformer,
    repostProductsTransformer,
    repostOrdersStartsTransformer
} from '../../../helpers/TransformerChart'

function* getReportsRevenueStats({payload}) {
    try {
        const res = yield call(getReportsRevenueStatsAsync, payload.filter);

        if (res.data) {
            // const data = repostRevenueStartsTransformer(res.data, payload.filter.fields);
            yield put(getReportsRevenueStatsSuccess(res.data));
        } else {
            yield put(getReportsRevenueStatsError(res.message));
        }
    } catch (error) {
        console.log(error)
        yield put(getReportsRevenueStatsError(error));
    }
}

function* getReportsProducts({payload}) {
    try {
        const res = yield call(getReportsProductsAsync, payload.filter);

        if (res.data) {
            yield put(getReportsProductsSuccess(res.data));
        } else {
            yield put(getReportsProductsError(res.message));
        }
    } catch (error) {
        // console.log(error)
        yield put(getReportsProductsError(error));
    }
}

function* getReportsProductsStats({payload}) {
    try {
        const res = yield call(getReportsProductsStatsAsync, payload.filter);
        if (res.data) {
            // const data = repostProductsStartsTransformer(res.data, payload.filter.fields);
            yield put(getReportsProductsStatsSuccess(res.data));
        } else {
            yield put(getReportsProductsStatsError(res.message));
        }
    } catch (error) {
        // console.log(error)
        yield put(getReportsProductsStatsError(error));
    }
}

function* getReportsOrdersStats({payload}) {
    try {
        const res = yield call(getReportsOrdersStatsAsync, payload.filter);
        if (res.data) {
            // const data = repostOrdersStartsTransformer(res.data, payload.filter.fields);
            yield put(getReportsOrdersStatsSuccess(res.data));
        } else {
            console.log(res.message)
            yield put(getReportsOrdersStatsError(res.message));
        }
    } catch (error) {
        console.log(error)
        yield put(getReportsOrdersStatsError(error));
    }
}


function* getReportsOrders({payload}) {
    try {
        const res = yield call(getReportsOrdersAsync, payload.filter);

        if (res.data) {
            yield put(getReportsOrdersSuccess(res));
        } else {
            console.log(res.message)
            yield put(getReportsOrdersError(res.message));
        }
    } catch (error) {
        console.log(error)
        yield put(getReportsOrdersError(error));
    }
}


function* getOrder({payload}) {
    try {
        const res = yield call(getOrderAsync, payload.filter);

        if (res.data) {
            yield put(getOrderSuccess(res));
        } else {
            console.log(res.message)
            yield put(getOrderError(res.message));
        }
    } catch (error) {
        console.log(error)
        yield put(getOrderError(error));
    }
}

function* getAdminNotes({payload}) {
    try {
        const res = yield call(getAdminNotesAsync, payload.filter);

        if (res.data) {
            yield put(getAdminNotesSuccess(res));
        } else {
            console.log(res.message)
            yield put(getAdminNotesError(res.message));
        }
    } catch (error) {
        console.log(error)
        yield put(getAdminNotesError(error));
    }
}

function* getProductsReviews({payload}) {
    try {
        const res = yield call(getProductsReviewsAsync, payload.filter);

        if (res.data) {
            yield put(getProductsReviewsSuccess(res));
        } else {
            console.log(res.message)
            yield put(getProductsReviewsError(res.message));
        }
    } catch (error) {
        console.log(error)
        yield put(getProductsReviewsError(error));
    }
}

function* getProductsCategories({payload}) {
    try {
        const res = yield call(getProductsCategoriesAsync, payload.filter);

        if (res.data) {
            yield put(getProductsCategoriesSuccess(res));
        } else {
            console.log(res.message)
            yield put(getProductsCategoriesError(res.message));
        }
    } catch (error) {
        console.log(error)
        yield put(getProductsCategoriesError(error));
    }
}

export {
    getReportsRevenueStats,
    getReportsProducts,
    getReportsProductsStats,
    getReportsOrders,
    getReportsOrdersStats,
    getOrder,
    getAdminNotes,
    getProductsReviews,
    getProductsCategories,
}
