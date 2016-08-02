
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var webView = new ccui.WebView("http://www.pinkoi.com/");

        var scene = new cc.Scene();
        var menu = new cc.Menu();
        scene.addChild(menu);
        var win_size = cc.director.getWinSize();
        menu.setPosition(win_size.width/2, win_size.height/2);
        var item = new cc.MenuItemFont("Exit", function () {cc.director.popScene();}, this);
        menu.addChild(item);
        cc.director.pushScene(scene);

        webView.setContentSize(1780, 960);
        webView.setPosition(cc.p(cc.winSize.width/2, cc.winSize.height/2));
        webView.setScalesPageToFit(true);
        window.webView = webView;
        this.addChild(window.webView);

        // var settingSpriteNormal = new cc.Sprite(res.SettingBTN);
        // var settingSpriteSelected = new cc.Sprite(res.SettingBTN_sel);
        // var settingMenuItem = new cc.MenuItemSprite(settingSpriteNormal, settingSpriteSelected, this.onSetting, this);
        // settingMenuItem.setPosition(cc.p(cc.winSize.width/2, cc.winSize.height/2));
        //
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

