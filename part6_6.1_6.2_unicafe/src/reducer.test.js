import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const firstState = initialState

    deepFreeze(firstState)
    const secondState = counterReducer(firstState, action)
    const thirdState = counterReducer(secondState, action)
    expect(thirdState).toEqual({
      good: 0,
      ok: 0,
      bad: 2
    })
  })

  test('function that resets stats to zero works', () => {
    const firstaction = {
      type: 'OK'
    }
    const secondaction = {
      type: 'GOOD'
    }
    const thirdaction = {
      type: 'BAD'
    }
    const resetaction = {
      type: 'ZERO'
    }
    const firstState = initialState

    deepFreeze(firstState)
    const secondState = counterReducer(firstState, firstaction)
    const thirdState = counterReducer(secondState, secondaction)
    const fourthState = counterReducer(thirdState, thirdaction)

    expect(fourthState).toEqual({
      good: 1,
      ok: 1,
      bad: 1
    })

    const fifthState = counterReducer(fourthState, resetaction)

    expect(fifthState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })

})