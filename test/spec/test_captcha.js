defaultConf = {
    height: 100,
    width: 300,
    fingerprintLength: 4,
    color: '#ef8216'
};

describe("The constructor is supposed a proper Captcha object", function() {
    it('Constructor Captcha exists', function(){
        expect(Captcha).toBeDefined();
    });
    var captcha = new Captcha();
    it("Captcha object is not null", function(){
       expect(captcha).not.toBeNull();
    });
    it('captcha object should be an instance of Captcha class', function(){
        expect(captcha instanceof Captcha).toBeTruthy();
    });
    it('the height of the svg should be set to the configured height', function(){
        expect(Number(captcha.height)).toEqual(defaultConf.height);
    });
    it('the width of the svg should be set to the configured width', function(){
        expect(Number(captcha.width)).toEqual(defaultConf.width);
    });
    it('the length of the fingerprint should be set to the configured fingerprintLength', function(){
        expect(Number(captcha.fingerprintLength)).toEqual(defaultConf.fingerprintLength);
    });
});

describe('The getSVG method of Captcha objects is supposed to generate the captcha as SVG', function(){
    var captcha = new Captcha();
    it('getSVG method is supposed to be a function', function(){
        expect(typeof captcha.getSVG).toEqual('function');
    });
});

describe('The checkCaptcha method of Captcha objects is supposed to check if input is equal to fingerprint', function(){
    var captcha = new Captcha();
    it('checkCaptcha method is supposed to be a function', function(){
        expect(typeof captcha.checkCaptcha).toEqual('function');
    });
});

describe("The getColor method is supposed to return the color of the svg", function() {
    var captcha = new Captcha();

    it('getColor method is supposed to be a function', function(){
        expect(typeof captcha.getColor).toEqual('function');
    });
    it('the function should return a defined value', function(){
        var color = captcha.getColor();
        expect(color).toBeDefined();
    });
    it('the function should return the color of the defaultConf', function(){
        var color = captcha.getColor();
        expect(color).toEqual(defaultConf.color);
    });
});

describe('The setColor method is supposed to set a new color for the captcha', function(){
    var captcha = new Captcha();
    it('setColor method is supposed to be a function', function(){
        expect(typeof captcha.setColor).toEqual('function');
    });
    it('the returned value of the setColor method should be the same as the color which is setted and returned by the setter-method', function(){
        var color = "#000000";
        expect(captcha.setColor(color)).toEqual(color);
    });
    it('when setColor is called several times the color should have the same value as the returned color of getColor method', function(){
        var color = "#000000";
        captcha.setColor(color);
        var newColor = captcha.getColor();
        expect(newColor).toEqual(color);
    });
    it('the setColor method should throw an error message if the assigned color is empty', function(){
        var color = "";
        expect(function(){captcha.setColor(color);}).toThrow("Sorry, you entered an empty value. Please try it again.");
    });
});
