import {
    GET_REPORTS_REVENUE_STATS,
    GET_REPORTS_REVENUE_STATS_ERROR,
    GET_REPORTS_REVENUE_STATS_SUCCESS,
    GET_REPORTS_PRODUCTS,
    GET_REPORTS_PRODUCTS_ERROR,
    GET_REPORTS_PRODUCTS_SUCCESS,
    GET_REPORTS_PRODUCTS_STATS,
    GET_REPORTS_PRODUCTS_STATS_ERROR,
    GET_REPORTS_PRODUCTS_STATS_SUCCESS,
    GET_REPORTS_ORDERS_STATS,
    GET_REPORTS_ORDERS_STATS_ERROR,
    GET_REPORTS_ORDERS_STATS_SUCCESS,
    GET_REPORTS_ORDERS,
    GET_REPORTS_ORDERS_ERROR,
    GET_REPORTS_ORDERS_SUCCESS,
    GET_ORDER,
    GET_ORDER_ERROR,
    GET_ORDER_SUCCESS,
    GET_ADMIN_NOTES,
    GET_ADMIN_NOTES_ERROR,
    GET_ADMIN_NOTES_SUCCESS,
    GET_PRODUCT_REVIEWS,
    GET_PRODUCT_REVIEWS_ERROR,
    GET_PRODUCT_REVIEWS_SUCCESS,
    GET_PRODUCT_CATEGORIES,
    GET_PRODUCT_CATEGORIES_ERROR,
    GET_PRODUCT_CATEGORIES_SUCCESS,
} from './actions';

const INIT_STATE = {
    repost_revenue_stats: '',
    repost_products: '',
    repost_products_stats: '',
    report_order: '',
    report_orders_stats: '',
    order: null,
    admin_notes: '',
    product_reviews: '',
    product_categories: '',
    loading: false,
    error: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_REPORTS_REVENUE_STATS:
            return {...state, loading: true, error: ''};
        case GET_REPORTS_REVENUE_STATS_SUCCESS:
            return {...state, loading: false, repost_revenue_stats: action.payload.data, error: '', isAuthenticated: true};
        case GET_REPORTS_REVENUE_STATS_ERROR:
            return {...state, loading: false, repost_revenue_stats: '', error: action.payload.error};

        case GET_REPORTS_PRODUCTS:
            return {...state, loading: true, error: ''};
        case GET_REPORTS_PRODUCTS_SUCCESS:
            return {...state, loading: false, repost_products: action.payload.data, error: '', isAuthenticated: true};
        case GET_REPORTS_PRODUCTS_ERROR:
            return {...state, loading: false, repost_products: '', error: action.payload.error};

        case GET_REPORTS_PRODUCTS_STATS:
            return {...state, loading: true, error: ''};
        case GET_REPORTS_PRODUCTS_STATS_SUCCESS:
            return {...state, loading: false, repost_products_stats: action.payload.data, error: '', isAuthenticated: true};
        case GET_REPORTS_PRODUCTS_STATS_ERROR:
            return {...state, loading: false, repost_products_stats: '', error: action.payload.error};

        case GET_REPORTS_ORDERS_STATS:
            return {...state, loading: true, error: ''};
        case GET_REPORTS_ORDERS_STATS_SUCCESS:
            return {...state, loading: false, report_orders_stats: action.payload.data, error: '', isAuthenticated: true};
        case GET_REPORTS_ORDERS_STATS_ERROR:
            return {...state, loading: false, report_orders_stats: '', error: action.payload.error};

        case GET_ORDER:
            return {...state, loading: true, error: ''};
        case GET_ORDER_SUCCESS:
            return {...state, loading: false, order: action.payload.data, error: ''};
        case GET_ORDER_ERROR:
            return {...state, loading: false, order: '', error: action.payload.error};

        case GET_ADMIN_NOTES:
            return {...state, loading: true, error: ''};
        case GET_ADMIN_NOTES_SUCCESS:
            return {...state, loading: false, admin_notes: action.payload.data, error: ''};
        case GET_ADMIN_NOTES_ERROR:
            return {...state, loading: false, admin_notes: '', error: action.payload.error};

        case GET_REPORTS_ORDERS:
            return {...state, loading: true, error: ''};
        case GET_REPORTS_ORDERS_SUCCESS:
            return {...state, loading: false, report_order: action.payload.data, error: '', isAuthenticated: true};
        case GET_REPORTS_ORDERS_ERROR:
            return {...state, loading: false, report_order: '', error: action.payload.error};

        case GET_PRODUCT_REVIEWS:
            return {...state, loading: true, error: ''};
        case GET_PRODUCT_REVIEWS_SUCCESS:
            return {...state, loading: false, product_reviews: action.payload.data, error: '', isAuthenticated: true};
        case GET_PRODUCT_REVIEWS_ERROR:
            return {...state, loading: false, product_reviews: '', error: action.payload.error};

        case GET_PRODUCT_CATEGORIES:
            return {...state, loading: true, error: ''};
        case GET_PRODUCT_CATEGORIES_SUCCESS:
            return {...state, loading: false, product_categories: action.payload.data, error: '', isAuthenticated: true};
        case GET_PRODUCT_CATEGORIES_ERROR:
            return {...state, loading: false, product_categories: '', error: action.payload.error};

        default:
            return {...state};
    }
}
