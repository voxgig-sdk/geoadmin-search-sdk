
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GeoadminSearchSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GeoadminSearchSDK.test()
    equal(null !== testsdk, true)
  })

})
