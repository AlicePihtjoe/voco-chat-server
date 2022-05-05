import { WebSocket, WebSocketServer } from "ws";


export enum SocketType {
    CONNECTION = 'connection',
    MESSAGE = 'message'
}

export interface ChatData {
    username: string;
    message: string;
    date: string;
}

export default function socket({ wss }: { wss: WebSocketServer }) {
    console.log(`Sockets enabled`);

    wss.on(SocketType.CONNECTION, (ws: WebSocket) => {
        ws.on(SocketType.MESSAGE, (message: string) => {
            console.log('is nice');
            const data = JSON.parse(message) as ChatData;
            data.date = new Date().toISOString();
            //log the received message and send it back to the client. Do not log client credentials out in real world application (ex: email, firstname etc.)

            ws.send(JSON.stringify(data));
        });
    });
}