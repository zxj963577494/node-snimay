const models = require('../models')
const ProductModel = models.Product

/**
 * 根据产品类别，获取产品的数量
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - count, 产品的数量
 * @param {Number} options 产品类别 0.全部1.产品体验2.定制家具3.配套家具
 * @param {Function} callback 获取消息数量
 */
exports.getProductCount = function (options, callback) {
  ProductModel.count(options, callback)
}

/**
 * 根据产品Id获取产品
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - product, 产品的数量
 * @param {Number} id
 * @param {Function} callback 获取的产品
 */
exports.getProductById = function (id, callback) {
  ProductModel.findOne({
    id: id
  }, callback)
}

/**
 * 根据产品类别获取产品列表
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - products, 产品列表
 * @param {Number} cid 产品类别 0.全部1.产品体验2.定制家具3.配套家具
 * @param {Function} callback 获取消息数量
 */
exports.getProductByType = function (cid, options, callback) {
  if (cid) {
    ProductModel.find(Object.assign({
      cid: cid
    }, options), callback)
  } else {
    ProductModel.find({}, callback)
  }
}

/**
 * 根据条件联合分类表，标签表获取产品列表
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - result, 产品列表
 * @param {Function} callback 回调函数
 * @param {String} p_select 产品查询字段 如：'id cid code skPic description price title lastModifyTime values'
 * @param {String} c_select 分类查询字段 如：'title'
 * @param {String} t_select 标签查询字段 如：'title'
 * @param {Object} p_options 产品查询条件 如：{isVisible: 1}
 * @param {Object} c_options 分类查询条件 如：{}
 * @param {Object} t_options 标签查询条件 如：{}
 * @param {Object} c_t_sort 标签和分类排序 如：{ sort: -1 }
 * @param {Object} p_sort 标签和分类排序 如：{ sort: -1 }
 */
exports.getProducts = function (callback, {
    p_select,
    c_select,
    t_select,
    p_options,
    c_options,
    t_options,
    c_t_sort,
    p_sort
} = {
  p_select: 'id cid code skPic description price title lastModifyTime values',
  c_select: 'title',
  t_select: 'title',
  p_options: {
    isVisible: 1
  },
  c_options: {
    isVisible: 1
  },
  t_options: {
    isVisible: 1
  },
  c_t_sort: {
    sort: -1
  },
  p_sort: {
    sort: '-lastModifyTime'
  }
}) {
  ProductModel.find(p_options, p_select, p_sort).populate({
    path: 'cid',
    match: c_options,
    select: c_select,
    options: {
      sort: c_t_sort
    }
  }).populate({
    path: 'values',
    match: t_options,
    select: t_select,
    options: {
        sort: c_t_sort
      }
  }).exec(callback)
}

/**
 * 获取产品，并取得所属类别
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - result, 产品列表
 */
exports.getProductsWithCategory = function (p_select, p_options, c_options, callback) {
  ProductModel.find(p_options, p_select, {
    sort: '-lastModifyTime'
  }).populate({
    path: 'categoryRef',
    match: c_options,
    select: 'id title',
    options: {
        sort: {
          sort: -1
        }
      }
  }).exec(callback)
}

/**
 * 获取产品，并取得筛选条件
 * Callback:
 * 回调函数参数列表：
 * - err, 数据库错误
 * - result, 产品列表
 */
exports.getProductsWithValue = function (p_options, c_options) {
  ProductModel.find(p_options, 'id cid code skPic description price title lastModifyTime values', {
    sort: '-lastModifyTime'
  }).populate({
    path: 'values',
    match: c_options,
    select: 'id title',
    options: {
        sort: {
          sort: -1
        }
      }
  }).exec(callback)
}

/**
 * 分页获取产品
 *
 * @param {any} select
 * @param {any} pageIndex
 * @param {any} pageSize
 * @param {any} options
 * @param {any} callback
 */
exports.getProductsByPage = function (select, pageIndex, pageSize, options, callback) {
  let numToSkip = (pageIndex - 1) * pageSize
  ProductModel.find(options, select).skip(numToSkip).limit(pageSize).exec(callback)
}

exports.getProducts_Admin = function (options, callback) {
  ProductModel.find(options, 'id categoryRef isIndex isVisible code title lastModifyTime', {
    sort: '-lastModifyTime'
  }).populate({
    path: 'categoryRef',
    select: 'title'
  }).exec(callback)
}

exports.getProductsLimit = function (opts, limit, callback) {
  ProductModel.find(opts, 'id categoryRef isIndex isVisible code title lastModifyTime', {
    sort: '-lastModifyTime'
  }).populate({
    path: 'categoryRef',
    select: 'title'
  }).limit(limit).exec(callback)
}

exports.getById_Admin = function (_id, callback) {
  ProductModel.find({
    _id: _id
  }).exec(callback)
}

exports.update = function (params, callback) {
  ProductModel.findOne({
    _id: params._id
  }, function (err, product) {
    if (err || !product) {
      return callback(err)
    }
    product.cid = params.cid
    product.categoryRef = params.categoryRef
    product.title = params.title
        // product.search = nodejieba.cut(sentence, true);
    product.content = params.content
    product.price = params.price
    product.description = params.description
    product.sliderPics = params.sliderPics
    product.skPic = params.skPic
    product.code = params.code
    product.part = params.part
    product.search = params.search
    product.tag = params.tag
    product.where = params.where
    product.isVisible = params.isVisible
    product.isIndex = params.isIndex
    product.lastModifyTime = new Date()
    product.save(callback)
  })
}

/**
 * 新增和保存
 */
exports.newAndSave = function (params, callback) {
  var product = new ProductModel()
  product.cid = params.cid
  product.categoryRef = params.categoryRef
  product.title = params.title
    // product.search = nodejieba.cut(sentence, true);
  product.content = params.content
  product.price = params.price
  product.description = params.description
  product.sliderPics = params.sliderPics
  product.skPic = params.skPic
  product.code = params.code
  product.part = params.part
  product.search = params.search
  product.tag = params.tag
  product.where = params.where
  product.isVisible = params.isVisible
  product.isIndex = params.isIndex
  product.save(callback)
}

exports.remove = function (_id, callback) {
  ProductModel.remove({
    _id: _id
  }, callback)
}
