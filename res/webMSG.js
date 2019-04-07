;(function(win, doc, $) {

let WebMSG = function() {
    this.div = $('#webMSG');
};

WebMSG.prototype = {
    constructor: WebMSG,

    options: {
        text: '默认提示文本',
        top: 80,
        hiddenRight: -300,
        showRight: 30,
        overRight: 15,
        showTime: 500,
        overTime: 100,
        showEasing: 'linear',
        width: 240,
        padding: '0 24px',
        borderRadius: 3,
        lineHeight: 44,
        color: 'white',
        backgroundColor: '#fd79a8',
    },
    init: function(opts) {
        let _self = this;
        _self.options = config(opts, _self.options);
        _self.div.text(_self.options.text);
        styleSet(_self.div, _self.options);
    },
    show: function(text = this.options.text) {
        let _self = this;
        _self.div.text(text);
        show(_self.div, _self.options);
        setTimeout(() => {
            hidden(_self.div, _self.options);
        }, 3000);
    }
}

function config(opts, options) {
    if(!opts) {
        return options;
    }
    for(let key in opts) {
        options[key] = opts[key];
    }
    return options;
}

function show(elem, opts) {
    elem.animate({right: '45px'}, 500, 'linear');
    elem.animate({right: '30px'}, 100, 'linear');
}

function hidden(elem, opts) {
    elem.animate({right: '45px'}, 100, 'linear');
    elem.animate({right: '-300px'}, 500, 'linear');
}

function styleSet(elem, opts) {
    styles = {
        boxSizing: 'border-box',
        position: 'fixed',
        top: opts.top + 'px',
        right: opts.hiddenRight + 'px',
        width: opts.width + 'px',
        padding: opts.padding,
        borderRadius: opts.borderRadius + 'px',
        lineHeight: opts.lineHeight + 'px',
        color: opts.color,
        backgroundColor: opts.backgroundColor
    }
    elem.css(styles);
}

win.WebMSG = WebMSG;
}(window,document,jQuery));