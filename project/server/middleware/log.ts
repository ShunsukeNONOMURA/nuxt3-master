import { defineNuxtModule, useLogger } from '@nuxt/kit'

export default defineEventHandler((event) => {
  // const date = Date.now()
  // console.log(date)
  // console.log(date.toString());
  // console.log('New request: ' + getRequestURL(event))
  // console.log(event.context)

  const logger = useLogger('my-module')
  logger.info('New request: ' + getRequestURL(event))
})
