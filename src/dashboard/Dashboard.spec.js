// Test away
import React from 'react';
import * as rt from 'react-testing-library';
import Dashboard from './Dashboard';

afterEach(rt.cleanup);

describe('check default', () => {
    it('defaults to unlocked and open', () => {
        const { getByText } = rt.render(<Dashboard />);
        const unlocked = getByText('Unlocked');
        const open = getByText('Open');
        expect(unlocked);
        expect(open);
    });

    it('lock gate button is disabled', () => {
        const { getByText } = rt.render(<Dashboard />);
        const lockButton = getByText(/lock gate/i);
        expect(lockButton.disabled).toBeTruthy();
    });
});

describe('buttons functionality',  () => {
    it('displays closed when close gate is clicked', () => {
        const { getByText } = rt.render(<Dashboard />);
        const closeButton = getByText(/close gate/i);
        rt.fireEvent.click(closeButton);
        const closed = getByText('Closed');
        expect(closed)
    });

    it('lock gate is not disabled when gate is closed', () => {
        const { getByText } = rt.render(<Dashboard />);
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);
        rt.fireEvent.click(closeButton);
        expect(lockButton.disabled).toBeFalsy();
    });

    it('displays locked if close and then locked are clicked', () => {
        const { getByText } = rt.render(<Dashboard />);
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);
        rt.fireEvent.click(closeButton);
        rt.fireEvent.click(lockButton);

        const locked = getByText('Locked');
        expect(locked)
    });

    it('open gate is disabled if gate is locked', () => {
        const { getByText } = rt.render(<Dashboard />);
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);
        rt.fireEvent.click(closeButton);
        rt.fireEvent.click(lockButton);

        const openButton = getByText(/open gate/i);
        expect(openButton.disabled).toBeTruthy();
    });
});

