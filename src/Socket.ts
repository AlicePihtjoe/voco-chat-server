export enum SocketType {
    CONNECTION = 'connection',
    MESSAGE = 'message'
}

export interface ChatData {
    username: string;
    message: string;
    date: string;
}

export default function socket({ wss } : { wss: WebSocketServer}) {
    console.log('Socket');

    wss.on(SocketType.CONNECTION, (ws: WebSocket) => {
        console.log('mhm');
        ws.on(SocketType.MESSAGE, (message: string) => {
            console.log('message is: ', message);
        });
    });
}