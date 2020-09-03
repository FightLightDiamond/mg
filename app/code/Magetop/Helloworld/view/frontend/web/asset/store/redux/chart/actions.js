const GET_REPORTS_REVENUE_STATS = 'GET_REPORTS_REVENUE_STATS'
const GET_REPORTS_REVENUE_STATS_ERROR = 'GET_REPORTS_REVENUE_STATS_ERROR'
const GET_REPORTS_REVENUE_STATS_SUCCESS = 'GET_REPORTS_REVENUE_STATS_SUCCESS'
const GET_REPORTS_PRODUCTS = 'GET_REPORTS_PRODUCTS'
const GET_REPORTS_PRODUCTS_ERROR = 'GET_REPORTS_PRODUCTS_ERROR'
const GET_REPORTS_PRODUCTS_SUCCESS = 'GET_REPORTS_PRODUCTS_SUCCESS'
const GET_REPORTS_PRODUCTS_STATS = 'GET_REPORTS_PRODUCTS_STATS'
const GET_REPORTS_PRODUCTS_STATS_ERROR = 'GET_REPORTS_PRODUCTS_STATS_ERROR'
const GET_REPORTS_PRODUCTS_STATS_SUCCESS = 'GET_REPORTS_PRODUCTS_STATS_SUCCESS'
const GET_REPORTS_ORDERS_STATS = 'GET_REPORTS_ORDERS_STATS'
const GET_REPORTS_ORDERS_STATS_ERROR = 'GET_REPORTS_ORDERS_STATS_ERROR'
const GET_REPORTS_ORDERS_STATS_SUCCESS = 'GET_REPORTS_ORDERS_STATS_SUCCESS'
const GET_ORDER = 'GET_ORDER'
const GET_ORDER_ERROR = 'GET_ORDER_ERROR'
const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
const GET_ADMIN_NOTES = 'GET_ADMIN_NOTES'
const GET_ADMIN_NOTES_ERROR = 'GET_ADMIN_NOTES_ERROR'
const GET_ADMIN_NOTES_SUCCESS = 'GET_ADMIN_NOTES_SUCCESS'
const GET_REPORTS_ORDERS = 'GET_REPORTS_ORDERS'
const GET_REPORTS_ORDERS_ERROR = 'GET_REPORTS_ORDERS_ERROR'
const GET_REPORTS_ORDERS_SUCCESS = 'GET_REPORTS_ORDERS_SUCCESS'
const GET_PRODUCT_REVIEWS = 'GET_PRODUCT_REVIEWS'
const GET_PRODUCT_REVIEWS_ERROR = 'GET_PRODUCT_REVIEWS_ERROR'
const GET_PRODUCT_REVIEWS_SUCCESS = 'GET_PRODUCT_REVIEWS_SUCCESS'
const GET_PRODUCT_CATEGORIES = 'GET_PRODUCT_CATEGORIES'
const GET_PRODUCT_CATEGORIES_ERROR = 'GET_PRODUCT_CATEGORIES_ERROR'
const GET_PRODUCT_CATEGORIES_SUCCESS = 'GET_PRODUCT_CATEGORIES_SUCCESS'


const getReportsRevenueStats = (filter) => ({
  type: GET_REPORTS_REVENUE_STATS,
  payload: { filter }
});

const getReportsRevenueStatsError = (message) => ({
  type: GET_REPORTS_PRODUCTS_STATS_ERROR,
  payload: { message }
});

const getReportsRevenueStatsSuccess = (data) => ({
  type: GET_REPORTS_REVENUE_STATS_SUCCESS,
  payload: { data }
});

const getReportsProducts = (filter) => ({
  type: GET_REPORTS_PRODUCTS,
  payload: { filter }
});

const getReportsProductsError = (message) => ({
  type: GET_REPORTS_PRODUCTS_ERROR,
  payload: { message }
});

const getReportsProductsSuccess = (data) => ({
  type: GET_REPORTS_PRODUCTS_SUCCESS,
  payload: { data }
});

const getReportsProductsStats = (filter) => ({
  type: GET_REPORTS_PRODUCTS_STATS,
  payload: { filter }
});

const getReportsProductsStatsError = (message) => ({
  type: GET_REPORTS_REVENUE_STATS_ERROR,
  payload: { message }
});

const getReportsProductsStatsSuccess = (data) => ({
  type: GET_REPORTS_PRODUCTS_STATS_SUCCESS,
  payload: { data }
});

const getReportsOrdersStats = (filter) => ({
  type: GET_REPORTS_ORDERS_STATS,
  payload: { filter }
});

const getReportsOrdersStatsError = (message) => ({
  type: GET_REPORTS_ORDERS_STATS_ERROR,
  payload: { message }
});

const getReportsOrdersStatsSuccess = (data) => ({
  type: GET_REPORTS_ORDERS_STATS_SUCCESS,
  payload: { data }
});

const getOrder = (filter) => ({
  type: GET_ORDER,
  payload: { filter }
});

const getOrderSuccess = (data) => ({
  type: GET_ORDER_SUCCESS,
  payload: { data }
});

const getOrderError = (message) => ({
  type: GET_ORDER_ERROR,
  payload: { message }
});

const getAdminNotes = (filter) => ({
  type: GET_ADMIN_NOTES,
  payload: { filter }
});

const getAdminNotesSuccess = (data) => ({
  type: GET_ADMIN_NOTES_SUCCESS,
  payload: { data }
});

const getAdminNotesError = (message) => ({
  type: GET_ADMIN_NOTES_ERROR,
  payload: { message }
});

const getReportsOrders = (filter) => ({
  type: GET_REPORTS_ORDERS,
  payload: { filter }
});

const getReportsOrdersSuccess = (data) => ({
  type: GET_REPORTS_ORDERS_SUCCESS,
  payload: { data }
});

const getReportsOrdersError = (message) => ({
  type: GET_REPORTS_ORDERS_ERROR,
  payload: { message }
});

const getProductsReviews = (filter) => ({
  type: GET_PRODUCT_REVIEWS,
  payload: { filter }
});

const getProductsReviewsSuccess = (data) => ({
  type: GET_PRODUCT_REVIEWS_SUCCESS,
  payload: { data }
});

const getProductsReviewsError = (message) => ({
  type: GET_PRODUCT_REVIEWS_ERROR,
  payload: { message }
});

const getProductsCategories = (filter) => ({
  type: GET_PRODUCT_CATEGORIES,
  payload: { filter }
});

const getProductsCategoriesSuccess = (data) => ({
  type: GET_PRODUCT_CATEGORIES_SUCCESS,
  payload: { data }
});

const getProductsCategoriesError = (message) => ({
  type: GET_PRODUCT_CATEGORIES_ERROR,
  payload: { message }
});

export {
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
  GET_ORDER,
  GET_ORDER_ERROR,
  GET_ORDER_SUCCESS,
  GET_ADMIN_NOTES,
  GET_ADMIN_NOTES_ERROR,
  GET_ADMIN_NOTES_SUCCESS,
  GET_REPORTS_ORDERS,
  GET_REPORTS_ORDERS_ERROR,
  GET_REPORTS_ORDERS_SUCCESS,
  GET_PRODUCT_REVIEWS,
  GET_PRODUCT_REVIEWS_ERROR,
  GET_PRODUCT_REVIEWS_SUCCESS,
  GET_PRODUCT_CATEGORIES,
  GET_PRODUCT_CATEGORIES_ERROR,
  GET_PRODUCT_CATEGORIES_SUCCESS,

  getReportsRevenueStats,
  getReportsRevenueStatsError,
  getReportsRevenueStatsSuccess,
  getReportsProducts,
  getReportsProductsError,
  getReportsProductsSuccess,
  getReportsProductsStats,
  getReportsProductsStatsError,
  getReportsProductsStatsSuccess,
  getReportsOrdersStats,
  getReportsOrdersStatsError,
  getReportsOrdersStatsSuccess,
  getOrder,
  getOrderError,
  getOrderSuccess,
  getAdminNotes,
  getAdminNotesError,
  getAdminNotesSuccess,
  getReportsOrders,
  getReportsOrdersError,
  getReportsOrdersSuccess,
  getProductsReviews,
  getProductsReviewsError,
  getProductsReviewsSuccess,
  getProductsCategories,
  getProductsCategoriesError,
  getProductsCategoriesSuccess,
}
