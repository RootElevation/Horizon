import * as express from "express";
import * as vorpal from "vorpal";

import { AbstractPacket } from "./Scripts/common/packets/AbstractPacket";

var app = express();
app.get("/", (req, res) =>
{
    res.send("Hello World!");
});

var asp: AbstractPacket = AbstractPacket.createPacket('LRP { \"message\": \"test msg\", \"channel\": \"Development\", \"character\": \"chr\"}');
console.log(asp);


var vp = vorpal();
var server = app.listen(8080, () =>
{
    vp
        .command("stop")
        .description("Stop the server.")
        .action((args, callback) =>
        {
            server.close();
            callback();
        });

    var cc = vp.command("cc");

    vp
        .delimiter("Horizon #/")
        .show();
});