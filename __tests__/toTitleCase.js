const { toTitleCase } = require("..")

describe('toTitleCase', () => { 

    test.todo('empty string returns empty string')

    describe('a single word string', () => {

        test('a connector word return a title case', () => {
            let r = toTitleCase(' to ');
            expect(r).toEqual('To')
        })

        test('a general word in lowercase returns a title case', () => {
            let r = toTitleCase(' sample ');
            expect(r).toEqual('Sample')
        })

        test('a general word in uppercase returns a title case', () => {
            let r = toTitleCase(' SAMPLE ');
            expect(r).toEqual('Sample')
        })
    }) 

    describe('a two word string', () => {

        test('last word a connector word return a title case', () => {
            let r = toTitleCase(' sample to ');
            expect(r).toEqual('Sample To')
        })

        test('last word a general word in lowercase returns a title case', () => {
            let r = toTitleCase(' sample sample');
            expect(r).toEqual('Sample Sample')
        })

        test('last word a general word in uppercase returns a title case', () => {
            let r = toTitleCase(' SAMPLE SAMPLE');
            expect(r).toEqual('Sample Sample')
        })
    })  

    describe('a three or more word string', () => {

        test('middle words are a connector result in connectors in lowercase', () => {
            let r = toTitleCase(' A to  as In More ');
            expect(r).toEqual('A to as in More')
        })
    })   

})