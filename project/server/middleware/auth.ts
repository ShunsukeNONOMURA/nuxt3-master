export default defineEventHandler((event) => {
  // console.log(event.context)
  event.context.auth = {
    user: 123,
    date: Date.now(),
  }
  // console.log(event.context)
})
