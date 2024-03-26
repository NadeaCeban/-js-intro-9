class Author {
    // Private propreties -  can only be used within the class
    #isKnown = true; // by default is true but could be undefind
    
   getIsKnow() {
        return this.#isKnown
    }

    setIsKnow(newValue){
        this.#isKnown = newValue;
    }

    /*get isKnow() {
        return this.#isKnown
    }

    set isKnow(newValue){
        this.#isKnown = newValue;
    }*/

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

const author1 = new Author('John', 'Doe');

console.log(author1.isKnow());  // true
author1.setIsKnow(false);
console.log(author1.getIsKnow()); // false