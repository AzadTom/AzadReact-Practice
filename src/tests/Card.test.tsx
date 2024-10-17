import { render, screen } from '@testing-library/react'
import Card from '../components/Card/Card';
import { describe, expect, it } from 'vitest'

describe('Card', () => {
    
    it('heading should be displayed',()=>{

        render(<Card name='azadtom'/>)

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();

    })

})