## 综述

DepartureLayer是一个可配置的弹出浮层，在检测到一定的浏览器版本时弹出，提供了默认的主题，用户可自行配置浮层样式及浮层弹出的条件、频率等。

* 版本：1.0
* 作者：槿瑟
* demo：[http://gallery.kissyui.com/DepartureLayer/1.0/demo/index.html](http://gallery.kissyui.com/DepartureLayer/1.0/demo/index.html)

## 初始化组件
		
    S.use('gallery/DepartureLayer/1.0/index', function (S, DepartureLayer) {
        var departureLayer = new DepartureLayer( <!-- 使用默认配置 --> );
        departureLayer.show();
    })
	
	

## API说明