const {Actions} = require('../utils/Action.js');

function test1(){
    Actions.visitURL('www.amazon.com')
    .then(() => Actions.login('TechGlobal', 'Test1234'))
    .then(() => Actions.validateTitle('Anything'))
    .catch(error => console.log(error))
}

test1()

async function test2() {
    try{
    await Actions.visitURL('www.amazon.com')
    await Actions.login('TechGlobal', 'Test1234')
    await Actions.validateTitle('Anything')
    }catch(error){
        console.log(error)
    }
}

test2()
