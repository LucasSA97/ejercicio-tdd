import { describe, expect, it } from 'vitest'
import { canConfigure } from '../src/can-configure'


describe('canconfigure', () => {
    it('should be a function', () => {
        expect(canConfigure).toBeTypeOf('function')
    })

    it('should throw if first parameter is missing ', () => {
        expect(()=> canConfigure()).toThrow()
    })

    it('should throw if first parameter is not a string ', () => {
        expect(()=> canConfigure(2)).toThrow()
    })

    it('should throw if second parameter is not a string ', () => {
        expect(canConfigure('a','b')).toBeTypeOf('boolean')
    })

    it('should return a boolean', () => {
        expect(()=> canConfigure('a')).toThrow()
    })

    it('should return false if strings provided have diferent length', () => {
        expect(canConfigure('abc','de')).toBe(false)
    })

    it('should return false if strings provided have diferent length even with same unique letters', () => {
        expect(canConfigure('aab','ab')).toBe(false)
    })

    it('should return false if strings provided have diferent number of unique letters', () => {
        expect(canConfigure('abc','ddd')).toBe(false)
    })

    it('should return false if strings has diferent order of transformation', () => {
        expect(canConfigure('XBOX','XXBO')).toBe(false)
    })

    it('should return false if strings has diferent order of transformation', () => {
        expect(canConfigure('XBOX','XXBO')).toBe(false)
    })



}) 