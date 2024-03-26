class Actions {
    static visitURL(url) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => { 
                if(url.startsWith('www') || url.startsWith('https://')) {
                resolve(console.log('URL Visited Successfully'))
                }
                else reject('Wrong URL')
            }, 1000);
        })
    }

    static login(username, password) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => { 
                if(username === 'TechGlobal' && password === 'Test1234'){
                resolve(console.log('logged in Successfully'))
                }
                else reject('wrong credentials')
            }, 3000);
        })
    }

    static validateTitle(title) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => { 
                if(title.length > 0 &&  title !== null && title !== undefined){
                resolve(console.log('Title validated Successfully'))
                }
                else reject('wrong title')
            }, 500);
        })
    }

}


module.exports.Actions = Actions;

