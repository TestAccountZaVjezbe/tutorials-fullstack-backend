import itemServiceHandler from "../services/item.service";

const getOneCategory = async(req, res) => {
    try{
        const {params} = req;
        const category = await categoryServiceHandler.getOneCategory(params.id);
        return res.send(category);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
};

const getOneItem = async(req, res) => {
    try{
        const {params} = req;
        const item = await itemServiceHandler.getOneItem(params.id);
        return res.send(item);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
}
const getAllItems = async(req, res) => {
    try{
        const item = await itemServiceHandler.getAllItems();
        return res.send(item);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
}
const getItemsBySubcategory = async(req, res) => {
    try{
        const item = await itemServiceHandler.getItemsBySubcategory(params.id);
        return res.send(item);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
}
const deleteOneItem = async(req, res) => {
    try{
        const {params} = req;
        const item = await itemServiceHandler.deleteOneItem(params.id);
        return res.send(item);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
}
const createOneItem = async(req, res) => {
    try{
        const {body} = req;
        const item = await itemServiceHandler.createOneItem(body);
        return res.send(item);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
}
const updateOneItem = async(req, res) => {
    try{
        const {params, body} = req;
        const item = await itemServiceHandler.updateOneItem(params.id, body);
        return res.send(item);
    } catch(e){
        return res.send({ msg: "Internal server error"}).status(500);
    }
}

const itemController = {
    getOneItem,
    getAllItems,
    getItemsBySubcategory,
    deleteOneItem,
    createOneItem,
    updateOneItem
};

export default itemController