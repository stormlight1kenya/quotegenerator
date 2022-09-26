//Vatiables
let btn = document.querySelector('#new-quote');
let qoute = document.querySelector('.qoute');
 let person = document.querySelector('.person');

 const qoutes = [
    {
    qoute:"In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.",
    person:'Theodore Roosevelt'
    },
    {
        qoute:"The best way to find yourself is to lose yourself in the service of others.",
        person:'Mahatma Gandhi'
        },
        {
            qoute:"I have the simplest tastes. I am always satisfied with the best.",
            person:'Oscar Wilde'
            },
            {
                qoute:"Living well is the best revenge.",
                person:'George Herbert'
                },
                {
                    qoute:"To give anything less than your best, is to sacrifice the gift.",
                    person:'Steve Prefontaine'
                    },
                    {
                        qoute:"I am as bad as the worst, but, thank God, I am as good as the best.",
                        person:'Walt Whitman'
                        },
                        {
                            qoute:"God meets daily needs daily. Not weekly or annually. He will give you what you need when it is needed.",
                            person:'Max Lucado'
                            },
                            {
                                qoute:"Men must be governed by God or they will be ruled by tyrants.",
                                person:'William Penn'
                                },
                                {
                                    qoute:"Sir, my concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
                                    person:'Abraham Lincoln'
                                    },
                                    {
                                        qoute:"Life is God's novel. Let him write it.",
                                        person:'Isaac Bashevis Singer'
                                        },
                                        {
                                            qoute:"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
                                            person:'Buddha'
                                            },
                                            {
                                                qoute:"Life is really simple, but we insist on making it complicated.",
                                                person:'Confucius'
                                                },
                                                {
                                                    qoute:"Since love grows within you, so beauty grows. For love is the beauty of the soul.",
                                                    person:'Saint Augustine'
                                                    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * qoutes.length);
    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
});