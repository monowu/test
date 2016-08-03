var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var win_size = cc.director.getWinSize();

        var webView = new ccui.WebView();

        webView.setContentSize(1024, 768);
        webView.setPosition(win_size.width/2, win_size.height/2);
        webView.loadURL("http://www.pinkoi.com/");
        webView.setScalesPageToFit(true);

        window.webView = webView;
        this.addChild(window.webView);

        var backBtn = document.getElementById('backBtn');
        backBtn.style.visibility = 'visible';
    },
    removeWebView: function () {
        console.log("removeWebView");
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

