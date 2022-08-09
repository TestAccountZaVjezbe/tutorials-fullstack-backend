import subCategoryServiceHandler from "../services/subcategory.service";

const getOneSubCategory = async(req, res) => {
    try{
        const {params} = req;
        const subcategory = await subCategoryServiceHandler.getOneSubCategory(params.id);
        return res.send(subcategory);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
};
const getAllSubCategories = async(req, res) => {
    try{
        const subcategory = await subCategoryServiceHandler.getAllSubCategories();
        return res.send(subcategory);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
};
const getSubCategoryByCategory = async(req, res) => {
    try{
        const {params} = req;
        const subcategory = await subCategoryServiceHandler.getSubCategoryByCategory(params.id);
        return res.send(subcategory);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
}
const createOneSubCategory = async(req, res) => {
    try{
        const {body} = req;
        const subcategory = await subCategoryServiceHandler.createOneSubCategory(body);
        return res.send(subcategory)
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
};
const updateOneSubCategory = async(req, res) => {
    try{
        const {params, body} = req;
        const subcategory = await subCategoryServiceHandler.updateOneSubCategory(params.id, body);
        return res.send(subcategory)
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
};
const deleteOneSubCategory = async(req, res) => {
    try{
        const {params} = req;
        const deletedSubCategory = await subCategoryServiceHandler.deleteOneSubCategory(params.id);
        return res.send(deletedSubCategory);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
};

const subCategoryController = {
    getOneSubCategory,
    getAllSubCategories,
    createOneSubCategory,
    updateOneSubCategory,
    deleteOneSubCategory,
    getSubCategoryByCategory,
};

export default subCategoryController