import { setResult, fetchResult, SET_RESULT } from '../winner'

import { addNewResult } from '../../apis/winner'

jest.mock('../../apis/winner')
const mockResult = [{ movies_id: 7 }]

addNewResult.mockReturnValue(Promise.resolve(mockResult))

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('setResult', () => {
  it('sets the result to be the result', () => {
    expect(setResult(mockResult).type).toBe(SET_RESULT)
    expect(setResult(mockResult).payload).toBe(mockResult)
  })
})

describe('Result', () => {
  it('dispatches setResult after api call', () => {
    return fetchResult(mockResult)(fakeDispatch).then(() => {
      const fakeDispatchAction = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchAction.type).toBe(SET_RESULT)
      expect(fakeDispatchAction.payload[0].movies_id).toBe(7)
    })
  })
})
