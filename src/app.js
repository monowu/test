
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var win_size = cc.director.getWinSize();

        var webView = new ccui.WebView();

        // var settingSpriteNormal = new cc.Sprite(res.SettingBTN);
        // var settingSpriteSelected = new cc.Sprite(res.SettingBTN_sel);
        // var settingMenuItem = new cc.MenuItemSprite(settingSpriteNormal, settingSpriteSelected, this.onSetting, this);
        // settingMenuItem.setPosition(win_size.width/2, win_size.height/2);

        var scene = new cc.Scene();
        var menu = new cc.Menu();
        scene.addChild(menu);

        //https://github.com/cocos2d/cocos2d-js/issues/1795
        menu.setPosition(win_size.width/2, win_size.height/2);
        var item = new cc.MenuItemFont("Exit", function () {console.log("setting");}, this);
        item.setPosition(win_size.width/2, win_size.height/2);
        menu.addChild(item);
        cc.director.pushScene(scene);

        webView.setContentSize(1780, 960);
        webView.setPosition(win_size.width/2, win_size.height/2);
        //webView.loadURL("http://www.pinkoi.com/");
        webView.setScalesPageToFit(true);
        window.webView = webView;
        this.addChild(window.webView);


        // var menu = new cc.Menu(settingMenuItem);
        // menu.setPosition(cc.p(0, 0));
        // this.addChild(menu);
    },
    onSetting: function () {
        console.log("setting");
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

