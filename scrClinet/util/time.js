export function timeMessage(player , fn){
   
    const now = Date.now();
    fn(); // question.ask
    const end = Date.now();

    player.recordTime(now, end);
}