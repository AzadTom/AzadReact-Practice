import { it, expect, describe } from 'vitest'
import { sum } from '../utils/utils'

describe('calculate-sum', () => {
    
    it('sum should be 0', () => {
        
        expect(sum()).toBe(0);
    })

    it('sum with single argument', () => {
        
        expect(sum(10)).toBe(10);
    })

    it('sum with multiple argument', () => {
        
        expect(sum(10,10)).toBe(20);
    })
})