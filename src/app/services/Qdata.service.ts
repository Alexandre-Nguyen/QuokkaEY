export class QDataService {

    quokkaBgColorTab = [ 
        { 
            mainColor : "#0B4672",
            sdColor: "#FF5B5B"
        },
        { 
            mainColor : "#F9BA34",
            sdColor: "#2F3249"
        },
        { 
            mainColor : "#153B4F",
            sdColor: "#1AFED4"
        },
        { 
            mainColor : "#A4D3FF",
            sdColor: "#5C33BA"
        },
        { 
            mainColor : "#2BF1D3",
            sdColor: "#115BB1"
        },
        { 
            mainColor : "#F63376",
            sdColor: "#E5E5E5"
        },
    ];

    quokkaQuoteStart = [
        {
            text : "Hi there, I'm Quokka and I'm here to give your break a shake."
        }
    ];

    quokkaQuote = [
        {
            text : "Are you reaaaady?"
        },
        {
            text : "Getting ready for your break"
        },
        {
            text : "Creating an awesome break"
        },
        {
            text : "Chop Chop !"
        },
    ];

    quokkaTask = [
        {
            title : 'Walk up and down a few flights of stairs',
            hashtag : '#MOVE',
            category : 'Physical Activity'
        },
        {
            title : 'Organize the next football match',
            hashtag : '#MOVE',
            category : 'Physical Activity'
        },
        {
            title : 'Giggle like Brad Pitt in “Burn after reading”',
            hashtag : '#MOVE',
            category : 'Physical Activity'
        },
        {
            title : 'Stretch your hands and foot',
            hashtag : '#MOVE',
            category : 'Physical Activity'
        },

        {
            title : 'Did you know that all oysters are born male and have the ability to change sex?',
            hashtag : '#DIDYOUKNOW',
            category : 'Learning Something New'
        },
        {
            title : 'Did you know that the American flag was designed by a high school student?',
            hashtag : '#DIDYOUKNOW',
            category : 'Learning Something New'
        },
        {
            title : 'Did you know thet the first oranges weren’t orange but green?',
            hashtag : '#DIDYOUKNOW',
            category : 'Learning Something New'
        },

        {
            title : 'Play the hanged the winner will get a coffee by the user',
            hashtag : '#BETACOFFEE',
            category : 'Playing A Game'
        },
        {
            title : 'Guess the numeric sequence 2 3 _  13 Choose between 6 7 10 11',
            hashtag : '#BETACOFFEE',
            category : 'Playing A Game'
        },
        {
            title : 'A wick burns in one hour, but irregularly. How to measure half an hour?',
            hashtag : '#BETACOFFEE',
            category : 'Playing A Game'
        },

        {
            title : 'Take three big breaths',
            hashtag : '#REFRESH',
            category : 'Setting New Goals'
        },
        {
            title : 'Which startup would you invest in if you had the opportunity?',
            hashtag : '#REFRESH',
            category : 'Setting New Goals'
        },
        {
            title : 'What if you take a different path going home today ?',
            hashtag : '#REFRESH',
            category : 'Setting New Goals'
        },
        {
            title : 'Can you remember your last dream?',
            hashtag : '#REFRESH',
            category : 'Setting New Goals'
        },
        {
            title : 'Maybe the person next to you have the answer to your question',
            hashtag : '#REFRESH',
            category : 'Setting New Goals'
        },
        {
            title : 'What about following John Maeda on Linkedin?',
            hashtag : '#REFRESH',
            category : 'Setting New Goals'
        },

        {
            title : 'Wish someone a good day',
            hashtag : '#TALKTO',
            category : 'Helping And Interacting'
        },
        {
            title : 'Ask a co-worker about the latest concert they have been to',
            hashtag : '#TALKTO',
            category : 'Helping And Interacting'
        },
        {
            title : 'Propose a colleague to have lunch together next week',
            hashtag : '#TALKTO',
            category : 'Helping And Interacting'
        },
        {
            title : 'Ask someone about a startup they believe in',
            hashtag : '#TALKTO',
            category : 'Helping And Interacting'
        },
 
    ];

    getQuokkaTabCat(cat : string){
        let tmp : any[];
        tmp = [];

        for(let i = 0; i < this.quokkaTask.length; i++){
            if (this.quokkaTask[i].category === cat)
                tmp.push(this.quokkaTask[i]);
        }
        return tmp;
    }
}