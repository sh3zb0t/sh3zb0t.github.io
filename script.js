const player = OvenPlayer.create("plajer", {
                "autoStart": true,
                "autoFallback": true,
                "mute": false,
                "sources": [{
                    "type": "webrtc",
                    "file": "ws://streamserver.cipnet.cloud:3333/app/sh3zb0t"
                }, {
                    "type": "webrtc",
                    "file": "ws://streamserver.cipnet.cloud:3333/app/binguso"
                }]
                });
