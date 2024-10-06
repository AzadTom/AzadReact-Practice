import { render, screen } from '@testing-library/react'
import Card from '../components/card/Card'
import { describe, expect, it } from 'vitest'

describe('Card', () => {
    
    it('heading should be displayed',()=>{

        render(<Card name='azadtom'/>)

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();

    })

})