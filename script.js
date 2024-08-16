const items = {
    trump: [
        "Fake News", "China", "Make America Great Again", "Interrupts Moderator", "Criticizes the Media", 
        "Calls Someone a Nickname", "Huge", "Mentions the Border Wall", "Brags About the Economy", "Mentions Biden", 
        "References the Military", "Mentions Drain the Swamp", "Discusses Election Fraud", "Mentions a Trade Deal", "References His Time in Office", 
        "America First", "Mentions Law and Order", "Gestures with Hands", "Smirks or Smiles", "Talks About His Crowd Size",
        "We're Winning", "Witch Hunt", "Points Finger", "Mentions Fake News Media", "Greatest in History",
        "Nobody's Done More", "Radical Left", "Mentions His Businesses", "Hand Clenched Fist", "Believe Me"
    ],
    harris: [
        "Let Me Be Clear", "Laughs or Giggles", "Mentions Working Families", "References Her Time as Attorney General", "Mentions Climate Change",
        "Discusses Healthcare", "Talks About Women’s Rights", "References Biden Administration Policies", "Mentions Systemic Racism", "Criticizes Trump",
        "Discusses Immigration Reform", "Justice or Equity", "Mentions Her Heritage", "Talks About Voting Rights", "Unity or Coming Together",
        "Mentions the Supreme Court", "Gestures with Hands", "Smiles While Talking", "Talks About Education", "References Personal Stories",
        "Let's Be Clear", "For the People", "We Must Fight", "Smiles Before Answering", "Protect Our Democracy",
        "Injustice", "We Are Better Than This", "Nods While Listening", "Moral Obligation", "We Can't Afford To"
    ],
    vance: [
        "Middle Class", "Mentions Hillbilly Elegy", "Criticizes Big Tech", "References Ohio", "Discusses Border Security",
        "Mentions American Dream", "Talks About Working Families", "Criticizes the Biden Administration", "Pro-Life", "Mentions Drug Addiction Crisis",
        "Rural America", "Discusses Military Service", "References China as a Threat", "Mentions Blue-Collar Workers", "Faith or Christian Values",
        "Criticizes the Media", "Populism", "References His Family", "Discusses Tax Reform", "Talks About Manufacturing Jobs",
        "Outsider", "Mentions Corporate Elites", "Working Class", "Discusses Veterans", "Economic Nationalism",
        "Family Values", "Hand Gestures", "Mentions Opioid Crisis", "Criticizes Political Corruption", "References His Childhood"
    ],
    walz: [
        "Mentions Minnesota", "References His Time as Governor", "Discusses COVID-19 Response", "Mentions Education", "Talks About Healthcare Access",
        "Equity or Inclusion", "Criticizes Trump", "Mentions Climate Change Initiatives", "References the National Guard", "Discusses Infrastructure Investments",
        "Mentions Public Safety", "Talks About Renewable Energy", "Affordable Housing", "Mentions Bipartisanship", "References Rural Communities",
        "Discusses Police Reform", "Labor Unions", "Talks About Mental Health Services", "Mentions Voting Rights", "Social Justice",
        "Minnesota Nice", "Discusses Public Schools", "Livability", "Public Safety", "Healthcare for All",
        "Mentions Agriculture", "Economic Recovery", "Nods Head", "References Gun Control", "Diversity"
    ]
};

function generateTrumpCard() {
    const bingoItems = [...items.trump];
    generateBingoCard('trump-bingo-card.png', bingoItems);
}

function generateHarrisCard() {
    const bingoItems = [...items.harris];
    generateBingoCard('harris-bingo-card.png', bingoItems);
}

function generateVanceCard() {
    const bingoItems = [...items.vance];
    generateBingoCard('vance-bingo-card.png', bingoItems);
}

function generateWalzCard() {
    const bingoItems = [...items.walz];
    generateBingoCard('walz-bingo-card.png', bingoItems);
}

function generateBingoCard(imageSrc, bingoItems) {
    const bingoCard = [];
    while (bingoCard.length < 24) {
        const randomIndex = Math.floor(Math.random() * bingoItems.length);
        bingoCard.push(bingoItems.splice(randomIndex, 1)[0]);
    }

    const bingoContent = document.getElementById('bingo-content');
    bingoContent.innerHTML = '';

    const cardFrame = document.getElementById('card-frame');
    cardFrame.src = `./assets/${imageSrc}`;

    const gridTemplate = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 'Free Space', 12, 13],
        [14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23]
    ];

    gridTemplate.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const div = document.createElement('div');
            if (cell === 'Free Space') {
                div.textContent = 'Free Space';
                div.style.fontWeight = 'bold';
            } else {
                div.textContent = bingoCard[cell];
            }
            div.className = 'bingo-cell';
            bingoContent.appendChild(div);
        });
    });
}

function downloadPDF() {
    const element = document.getElementById('bingo-card');
    const options = {
        margin: 1,
        filename: 'bingo-card.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
}
