const models = require('../models')
const ProductModel = models.Product

/**
 * 根据产品类别，获取产品的数量
 * @param {Number} options 产品类别 0.全部1.产品体验2.定制家具3.配套家具
 */
exports.getProductCount = function (options) {
  return ProductModel.count(options).exec()
}

/**
 * 根据产品Id获取产品
 * @param {Number} id
 */
exports.getProductById = function (id) {
  return ProductModel.findOne({
    id: id
  }).exec()
}

/**
 * 根据产品类别获取产品列表
 * @param {Number} cid 产品类别 0.全部1.产品体验2.定制家具3.配套家具
 */
exports.getProductByType = function (cid, options) {
  if (cid) {
    return ProductModel.find(Object.assign({
      cid: cid
    }, options)).exec()
  } else {
    return ProductModel.find({}).exec()
  }
}

/**
 * 根据条件联合分类表，标签表获取产品列表
 * @param {String} p_select 产品查询字段 如：'id cid code skPic description price title lastModifyTime values'
 * @param {String} c_select 分类查询字段 如：'title'
 * @param {String} t_select 标签查询字段 如：'title'
 * @param {Object} p_options 产品查询条件 如：{isVisible: 1}
 * @param {Object} c_options 分类查询条件 如：{}
 * @param {Object} t_options 标签查询条件 如：{}
 * @param {Object} c_t_sort 标签和分类排序 如：{ sort: -1 }
 * @param {Object} p_sort 标签和分类排序 如：{ sort: -1 }
 */
exports.getProducts = function ({
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
  return ProductModel.find(p_options, p_select, p_sort).populate({
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
  }).exec()
}

/**
 * 获取产品，并取得所属类别
 */
exports.getProductsWithCategory = function (pSelect, pOptions, cOptions) {
  return ProductModel.find(pOptions, pSelect, {
    sort: '-lastModifyTime'
  }).populate({
    path: 'categoryRef',
    match: cOptions,
    select: 'id title',
    options: {
      sort: {
        sort: -1
      }
    }
  }).exec()
}

/**
 * 获取产品，并取得筛选条件
 */
exports.getProductsWithValue = function (pOptions, cOptions) {
  return ProductModel.find(pOptions, 'id cid code skPic description price title lastModifyTime values', {
    sort: '-lastModifyTime'
  }).populate({
    path: 'values',
    match: cOptions,
    select: 'id title',
    options: {
      sort: {
        sort: -1
      }
    }
  }).exec()
}

/**
 * 分页获取产品
 *
 * @param {any} select
 * @param {any} pageIndex
 * @param {any} pageSize
 * @param {any} options
 */
exports.getProductsByPage = function (select, pageIndex, pageSize, options) {
  let numToSkip = (pageIndex - 1) * pageSize
  return ProductModel.find(options, select).skip(numToSkip).limit(pageSize).exec()
}

exports.getProducts_Admin = function (options) {
  return ProductModel.find(options, 'id categoryRef isIndex isVisible code title lastModifyTime', {
    sort: '-lastModifyTime'
  }).populate({
    path: 'categoryRef',
    select: 'title'
  }).exec()
}

exports.getProductsLimit = function (opts, limit) {
  return ProductModel.find(opts, 'id categoryRef isIndex isVisible code title lastModifyTime', {
    sort: '-lastModifyTime'
  }).populate({
    path: 'categoryRef',
    select: 'title'
  }).limit(limit).exec()
}

exports.getById_Admin = function (_id) {
  return ProductModel.find({
    _id: _id
  }).exec()
}

exports.update = function (params) {
  return ProductModel.findOne({
    _id: params._id
  }).then(function (product) {
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
    return product.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}

/**
 * 新增和保存
 */
exports.create = function (params) {
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
  return product.save()
}

exports.remove = function (_id) {
  return ProductModel.remove({
    _id: _id
  })
}
