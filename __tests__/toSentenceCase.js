const { toSentenceCase } = require("..")

describe('toSentenceCase', () => {

    describe('a single word', () => {
        
        test('single word a connector returns a toFirstUpperCase', () => {
            let r = toSentenceCase(" a ");
            expect(r).toEqual('A')
        })
    }) 

    describe('a two-word string returs a sentence string', () => {
        let r = toSentenceCase('  A Sample   ');
        expect(r).toEqual('A sample')
    })

    describe('a three or more word string returns sentence string', () => {
        let r = toSentenceCase('  the Sample ApplicaTion IS  ');
        expect(r).toEqual('The sample application is')
    })
})