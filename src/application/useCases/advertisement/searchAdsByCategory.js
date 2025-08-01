const adRepository = require('../../../domain/repositories/adRepository');

const searchAdsByCategory = async (categoryId, subCategoryId, page = 1, limit = 20) => {
  const { ads, total } = await adRepository.findByCategory(categoryId, subCategoryId, page, limit);
  const mappedAds = ads.map(p => ({
    ...p,
    images: [p.pic1, p.pic2, p.pic3, p.pic4, p.pic5, p.pic6].filter(Boolean),
  }));

  return {
    total,
    page: parseInt(page),
    limit: parseInt(limit),
    ads: mappedAds,
  };
};

module.exports = searchAdsByCategory;