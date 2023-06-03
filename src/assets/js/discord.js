const rpc = require('discord-rpc');
const discordclient = new rpc.Client({ transport: 'ipc' });

function startDiscordRPC() {
    discordclient.login({ clientId: '1114264401147609099' }).catch(console.error);

    discordclient.on('ready', () => {
        discordclient.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: "- Dev By Perrier",
                state: "   ",
                timestamps: {
                    start: Date.now()
                },
                assets: {
                    large_image: "macaro",
                    large_text: "Khebekoah Launcher",
                    small_image: "heart_icon-icons_com_54429",
                    small_text: "Lucky I’m in love with my best friend",
                },
                /*buttons: [{
                        label: "",
                        url: ""
                    },
                    {
                        label: "",
                        url: ""
                    },
                    //labels are the buttons that you wanna provide to your rich presence and urls are the links that leads you when someone press that button
                    //Note the button won't work for you but don't worry it work for others
                ]*/
            }
        })
    })
}

module.exports =  {
    startDiscordRPC,
};