
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GeoadminSearchSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GeoadminSearchSDK.test()
    equal(testsdk instanceof GeoadminSearchSDK, true,
      'GeoadminSearchSDK.test() must return a client synchronously')
  })

})
