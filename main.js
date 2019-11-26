'use strict'; 

var Timeline = {
    chart: {
        type: 'timeline',
        renderTo: 'Timeline'
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    title: {
        text: 'Most Popular Zac Efron Movies by Year'
    },
    subtitle: {
        text: 'Info source: <a href="https://www.esquire.com/entertainment/movies/a55293/zac-efron-career-timeline/">www.esquire.com</a>'
    },
    colors: [
        '#CAE9FF',
        '#ADDCFF',
        '#87CCFF',
        '#5DBBFF',
        '#38A4F3',
        '#2294E6',
        '#1185DA',
        '#0979CA',
        '#0365AD',
        '#01518B',
        '#003E6C',
        '#002947'
    ],
    series: [{
        data: [{
            name: '2006',
            label: 'High School Musical',
            description: 'High School Musical: While the actual extent of his singing in his High School Musical debut is debatable, 18-year-old Zac Efron\'s main task in this beloved Disney Channel original is to be the attractive, popular basketball star with a heart of gold. Keep your head in the game, kid!'
        }, {
            name: '2007',
            label: 'Hairspray + High School Musical 2',
            description: 'Hairspray: Even though director Adam Shankman thought Efron was "too Disney" for the role of Link Larkin, he was finally convinced because the guy could bring in a "teen crowd." Certainly Efron\'s acting and singing ability factored in there somewhere, too. \n High School Musical 2: A sequel. Obviously. Notice, as Efron\'s Troy heads into summer before senior year, his hair has become noticeably shorter and less floppy. Now a 20-year-old man, he\'s slowly transitioning from cute teen to mature sex idol, which makes all the Disney-related fun infinitely more awkward.'
        }, {
            name: '2008',
            label: 'High School Musical 3: Senior Year',
            description: 'High School Musical 3: Surprise! A third. Unlike the previous installments, this one specifies which school year it is. Senior. Even though in reality, Efron would be graduating college, he\'s still playing a high school student with unusually defined muscles. As the film\'s title track asks, "High School Musical. Who says we have to let it go?" The answer is, of course, our own biological clock and normal society.'
        }, {
            name: '2009',
            label: '17 Again + Me & Orson Welles',
            description: '17 Again: Sadly, no High School Musical 4: College Freshman. Having graduated from the franchise, 22-year-old Zac Efron returns to high school to play 17-year-old Matthew Perry. Of course, we know Zac Efron does not grow up to be Matthew Perry, but at this point in his career, he still hadn\'t shaken his glory days. Me and Orson Welles: Here we go - Efron gets serious. Though this film got mostly positive reviews, it only grossed $2 million during its theatrical release. Interestingly enough, Efron plays an aspiring actor, hoping to get some serious meaty roles. Unfortunately, his own performance—best described as sweet—was overshadowed by the titular Orson Welles (as played by Christian McKay).'
        }, {
            name: '2010',
            label: 'Charlie St. Cloud',
            description: 'Charlie St. Cloud: Emotional Zac Efron is emotional. This is basically a high budget Lifetime movie, but even the easy emotions can\'t distract from sailor Zac Efron wearing tight t-shirts and sleeveless tops that often get wet.'
        }, {
            name: '2011',
            label: 'New Year\'s Eve',
            description: 'New Year\'s Eve: This is one of those annual Garry Marshall films that a bunch of big actors do for a quick paycheck. This is also one of those films that studios can make because there are no other good Valentine\'s Day or Mother\'s Day-themed movies for people to watch while bored on a Hallmark holiday. In Zac Efron\'s case, he did it to delve into adult rom-com waters.'
        }, {
            name: '2012',
            label: 'The Lucky One + The Paperboy + At Any Price',
            description: 'The Lucky One: The wholesome pseudo-spiritual red state sex god could have been Efron\'s calling. He could have been in Nicholas Sparks movies until he released his own country album.This movie made $99.4 million on a $25 million budget, despite a 20 percent rating on Rotten Tomatoes. The Paperboy: This is a pivotal movie in Efron\'s career. Right as he seemed to be going down the Chris Pratt path as a big, safe, Manic Red State Dream Boy he appeared in this trashy thriller as Matthew McConaughey\'s younger brother. His persona as the good boy vanished in a stream of Nicole Kidman\'s urine (literally—she pees on him in this movie). At Any Price: Having lost his purity, Efron went the high-brow indie film route. He moved onto the film festivals, where this car racing drama (more middle America!) had middling returns from Venice and Toronto Film festivals.'
        }, {
            name: '2013',
            label: 'Parkland',
            description: 'Parkland: More small budget, film festival movies. His most serious film to-date (the assassination of John F. Kennedy!), but Efron still couldn\'t get the critics to like him.'
        },  {
            name: '2014',
            label: 'That Awkward Moment + Neighbors',
            description: 'That Awkward Moment: Having failed on the festival circuit, Efron re-emerged in his next pivotal role in That Awkward Moment. With is innocence gone, and his chance at a serious career in acting looking unlikely, he became the horny, heavy-drinking bro who slips his dudes boner pills and tries to get them laid. Once again his shirt comes off, and in one scene after having sex with a young woman he says, "I was going to make you wait. Then I remembered I\'m a dude." Neighbors: Then of course, his first major franchise since High School Musical. Neighbors has Efron as a partying frat bro, except this time he\'s starring alongside noted Old Seth Rogen. The plot goes something like this: Efron is young and hot, Rogen is old and not. Hilarity ensues.'
        },  {
            name: '2015',
            label: 'We Are Your Friends',
            description: 'We Are Your Friends: That Awkward Moment: Having failed on the festival circuit, Efron re-emerged in his next pivotal role in That Awkward Moment. With is innocence gone, and his chance at a serious career in acting looking unlikely, he became the horny, heavy-drinking bro who slips his dudes boner pills and tries to get them laid. Once again his shirt comes off, and in one scene after having sex with a young woman he says, "I was going to make you wait. Then I remembered I\'m a dude." '
        },
        {
            name: '2017',
            label: 'Baywatch',
            description: 'Baywatch: It\'s as if the last three years had been building up to this. Efron\'s job is to show up on set, take off his shirt, and play dumb. In an almost poetic flip of the script, he becomes the Brocake of a new generation, a man who has fully embraced that his good looks will be enough to catapult him through to superstardom.'
        }]
    }]
};

var Bubblechart =  {
    chart: {
        type: 'packedbubble',
        height: '100%', 
        renderTo: 'Bubblechart'
    },
    title: {
        text: 'Zac Efron Movies Catagoriezed by Popular Genre'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value:.2f} IMBd Rating'
    },
    
    plotOptions: {
     
        packedbubble: {
            minSize: '30%',
            maxSize: '125%', 
            zMin: 10,
            zMax: 1000, 
            layoutAlgorithm: {
                gravitationalConstant: 0.1,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: false,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 6.5
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Biography',
        data: [{
            name: 'Extremely Wicked, Shockingly Evil and Vile',
            value: 6.6
        }, {
            name: 'The Disaster Artist',
            value: 7.4
        },
        {
            name: "The Greatest Showman",
            value: 7.6
        }]
    }, {
        name: 'Animation',
        data: [{
            name: "Robot Chicken",
            value: 7.7
        },
        {
            name: "The Lorax",
            value: 6.4
        },
        {
            name: "Robot Chicken: Star Wars III",
            value: 8.1
        },
        {
            name: "The Replacements",
            value: 5.8
        }]
    }, {
        name: 'Drama',
        data: [{
            name: "We Are Your Friends",
            value: 6.2
        },
        {
            name: "Charlie St. Cloud",
            value: 6.4
        },
        {
            name: "Summerland",
            value: 6.9
        },
        {
            name: "Miracle Run",
            value: 7.5
        },
        {
            name: "Parkland",
            value: 6.3
        },
        {
            name: "At Any Price",
            value: 5.6
        },
        {
            name: "The Lucky One",
            value: 6.5
        },
        {
            name: "The Derby Stallion",
            value: 5.6
        },
        {
            name: "ER",
            value: 7.7
        }]

    },
        {
            name: 'Comedy',
            data: [{
                name: "That Awkward Moment",
                value: 6.1
            },
            {
                name: "New Year's Eve",
                value: 5.7
            },
            {
                name: "High School Musical 3",
                value: 4.7
            },
            {
                name: "High School Musical 2",
                value: 4.9
            },
            {
                name: "High School Musical",
                value: 5.3
            },
            {
                name: "The Beach Bum",
                value: 5.5
            },
            {
                name: "Mike and Dave Need Wedding Dates",
                value: 6.0
            },
            {
                name: "Neighbors 2: Sorority Rising",
                value: 5.7
            },
            {
                name: "Dirty Grandpa",
                value: 5.9
            },           
            {
                name: "Neighbors",
                value: 6.3
            },
            {
                name: "Liberal Arts",
                value: 6.7
            },
            {
                name: "Entourage",
                value: 8.4
            },
            {
                name: "17 Again",
                value: 6.3
            },
            {
                name: "Me and Orson Welles",
                value: 6.7
            },
            {
                name: "Hairspray",
                value: 6.6
            },
            {
                name: "Neighbors 2: Sorority Rising",
                value: 5.7
            }]
    },
    {
        name: 'Crime',
        data: [{
            name: "The Paperboy",
            value: 5.8
        },
        {
            name: "The Guardian",
            value: 7.4
        }]

    },
    {
        name: 'Adventure',
        data: [{
            name: "Firefly",
            value: 9.0
        }]

    },
    {
        name: 'Action',
        data: [{
            name: "Baywatch",
            value: 5.5
        },
        {
            name: "NCIS",
            value: 7.8
        },
        {
            name: "CSI: Miami",
            value: 6.4
        }]

    }]
};

var radarChart =  {

    chart: {
        polar: true,
        type: 'line',
        renderTo: 'radar'
    },

    title: {
        text: 'Average IMBd Score by Genre for Zac Efron'
    },

    pane: {
        size: '90%',
        
    },

    xAxis: {
        categories: ['Biography', 'Animation', 'Drama', 'Comedy',
            'Crime', 'Adventure', 'Action'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.2f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'IMBd Score',
        data: [7.2, 7, 6.52, 6.03, 6.6, 9.0, 6.57 ],
        pointPlacement: 'on'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '90%'
                }
            }
        }]
    }

};


Highcharts.chart(Timeline);
Highcharts.chart(Bubblechart);
Highcharts.chart(radarChart);
