if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/status?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/tabBar/home/pageHeader?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/counter?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/goods/goodsHeader?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/popupSpec?hash=7ffafa2924060d33ae0506378d8ad054c6e0fbd4');
require('../../pages/tabBar/home/home?hash=abb6e97aeedc04924bbdcde63a18189ef564de1b');
require('../../pages/tabBar/category/category?hash=abb6e97aeedc04924bbdcde63a18189ef564de1b');
require('../../pages/tabBar/cart/cart?hash=564460e87b2d54bca8b7dc5df246f2126d424905');
require('../../pages/tabBar/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goodsList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods?hash=d6090fd63be3e3685430112c80d5b390b90083d9');
require('../../pages/goods/ratings?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/order/confirm?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/tabBar/user/qrCode?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}