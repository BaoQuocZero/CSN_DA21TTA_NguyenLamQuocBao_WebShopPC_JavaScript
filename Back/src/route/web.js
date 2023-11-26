import express from "express";
import homeController from '../controller/homeController.js'

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/Trang-them-san-pham', homeController.getThemSanPhamPage);
    router.get('/edit/:id', homeController.getEditPage);

    router.post('/Them-san-pham', homeController.themSanPham)
    router.post('/update-sanpham', homeController.postUpdateSanPham)
    router.post('/delete', homeController.deleteSanPham)


    // router.get('/detail/user/:id', homeController.getDetailPage);
    // router.get('/edit-user/:id', homeController.getEditPage);

    // router.post('/create-new-user', homeController.createNewUser)

    return app.use('/', router)
}

export default initWebRoute;