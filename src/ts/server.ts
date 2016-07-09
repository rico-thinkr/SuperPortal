

import * as express from 'express';

export function Run():void{
        var app = express();
        app.listen(3000,()=>{
            console.log("server start at localhost:3000");
        })
    }
