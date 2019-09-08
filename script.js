window.onload = function(){

    let canvasWidth = 900;
    let canvasHeight = 600;
    var blockSize = 30;
    let ctx;
    let delay = 100;
    let snakee;

    init();

    function init(){
        let canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        snakee = new Snake([[6,4], [5,4], [4,4]]);
        refreshCanvas();
        
    }
    
    function refreshCanvas(){
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xCoord ,yCoord ,100 ,50);
        setTimeout(refreshCanvas,delay);
    }

    function Snake(body){
        this.body = body;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(let i = 0; i < this.body.lenght; i++ );{
                drawBlock(ctx, this.body[i]);
            }
        ctx.restore();
            
        };
    }

}