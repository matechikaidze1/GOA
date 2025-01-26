class book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    get summary() {
        return "${this.title} is written by ${this.author} and has ${this.pages} pages.";
    }
}

class detailedBook {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    introduce() {
        return "${this.title} by ${this.author}, published in ${this.publicationYear}.";
    }
}

class adventureBook extends book {
    constructor(title, author, pages, setting, dangerLevel) {
        super(title, author, pages);
    }

    get summary() {
        return "${super.summary} this adventure is happening in ${this.setting} with a danger level of ${this.dangerLevel}.";
    }

    dangerRating() {
        return "on danger level this book is rated a solid ${this.dangerLevel}/10!";
    }
}

class satireBook extends detailedBook {
    constructor(title, author, publicationYear, satireType, comedicEffect) {
        super(title, author, publicationYear);
        this.satireType = satireType;
        this.comedicEffect = comedicEffect;
    }

    describe() {
        return "${super.describe()} it's a ${this.satireType} satire that gives a comedic effect of ${this.comedicEffect}.";
    }

    rateHumor() {
        return "${this.title} gets a humor rating of ${this.comedicEffect}/10.";
    }
}

class fantasyBook extends book {
    constructor(title, author, pages, magicSystem, worldName) {
        super(title, author, pages);
        this.magicSystem = magicSystem;
        this.worldName = worldName;
    }

    get summary() {
        return "${super.summary} Dive into the magical world of ${this.worldName}, where the magic system is based on ${this.magicSystem}.";
    }

    magicFactor() {
        return "The magic system of this book is ${this.magicSystem}, making it a must-read for fantasy lovers.";
    }
}

const adventureBook = new adventureBook("Tom Sawyer's Adventure", "Mark Twain", 275, 9);
console.log(adventureBook.summary);
console.log(adventureBook.thrillingFactor());

const satireBook = new satireBook("Animal Farm", "George Orwell", 1945, "political", 8);
console.log(satireBook.describe());
console.log(satireBook.rateHumor());

const fantasyBook = new fantasyBook("The Hobbit", "J.R.R. Tolkien", 310, "rune-based magic", "Middle-earth");
console.log(fantasyBook.summary);
console.log(fantasyBook.magicFactor());
