;(function(win,doc) {

let WebMSG = function() {
    this.div = doc.getElementById('webMSG');
};

WebMSG.prototype = {
    constructor: WebMSG,

    options: {
        text: '默认提示文本',
    },
    init: function(opts) {
        let _self = this;
        let option = config(opts, _self.options);
        _self.div.innerText = option.text;
        styleSet(_self.div);
    },
    show: function(text = this.options.text) {
        let _self = this;
        _self.div.innerText = text;
        show(this.div);
        setTimeout(() => {
            hidden(_self.div);
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

function show(elem) {
    let right = -300;
    let over = 0;
    let showId = setInterval(moveOn, 10);
    function moveOn() {
        if(over == 0 && right < 45) {
            right += 5;
            elem.style.right = right + 'px';
        }
        else if(over == 0 && right >= 45) {
            over = 1;
        }


        if(over == 1 && right > 30) {
            right -= 1;
            elem.style.right = right + 'px';
        }
        else if(over == 1 && right <= 30) {
            clearInterval(showId);
        }
    }
}

function hidden(elem) {
    let right = 30;
    let over = 0;
    let hiddenId = setInterval(moveOff, 10);
    function moveOff() {
        if(over == 0 && right < 45) {
            right += 1;
            elem.style.right = right + 'px';
        }
        else if(over == 0 && right >= 45) {
            over = 1;
        }


        if(over == 1 && right > -300) {
            right -= 5;
            elem.style.right = right + 'px';
        }
        else if(over == 1 && right <= -300) {
            clearInterval(hiddenId);
        }
    }
}

function styleSet(elem) {
    styles = {
        boxSizing: 'border-box',
        position: 'fixed',
        top: '80px',
        right: '30px',
        width: '240px',
        padding: '0 15px',
        borderRadius: '3px',
        lineHeight: '44px',
        color: 'white',
        backgroundColor: '#fd79a8'
    }
    for(let key in styles) {
        elem.style[key] = styles[key];
    }
}

win.WebMSG = WebMSG;
}(window,document));