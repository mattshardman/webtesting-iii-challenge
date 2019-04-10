// Test away
import React from 'react';
import * as rt from 'react-testing-library';
import Dashboard from './Dashboard';

describe('check default', () => {
    it('defaults to unlocked and open', () => {
        const { getByText } = rt.render(<Dashboard />);
        const unlocked = getByText('Unlocked');
        const open = getByText('Open');
        expect(unlocked);
        expect(open);
    });

    
});

