import { autoCompleteDebounce } from './util';

const mockValue = "";
const mockItems = [];
const mockCallback = jest.fn();

describe('autoCompleteDebounce', () => {
    jest.useFakeTimers();
    test('autoCompleteDebounce waits 1000ms to call callback', () => {
        autoCompleteDebounce(mockValue, mockItems, mockCallback);

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });

    test('autoCompleteDebounce calls callback after delay', () => {
        autoCompleteDebounce(mockValue, mockItems, mockCallback);

        // before delay
        expect(mockCallback).not.toBeCalled();

        // jest.runAllTimers();
        jest.runOnlyPendingTimers()
        
        // after delay
        expect(mockCallback).toHaveBeenCalled();
    });
});

