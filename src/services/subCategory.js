import SubSubCategory from "../model/SubSubCategory";

export const getSubCategoryById = async (_id) => {
	const subcategory = await SubCategory.findOne({ _id });
	return subcategory;
};

export const createSubCategory = async (data) => {
	const { ...varData } = data;
	const subcategory = await SubCategory.create({ ...varData });
	return subcategory;
};

export const updateSubCategory = async (id, data) => {
	const { ...varData } = data;
	const subcategory = await SubCategory.findByIdAndUpdate(id, { ...varData });
	return subcategory;
};

export const deleteSubCategory = async (id, data) => {
	const { id } = id;
	const subcategory = await SubCategory.findByIdAndDelete(id);
	return subcategory;
};
export const getSubCategoryList = async (id, data) => {
	const subcategories = await SubCategory.find();
	return subcategories;
};
