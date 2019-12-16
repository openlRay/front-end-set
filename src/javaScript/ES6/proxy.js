function createWebService(baseUrl) {
  return new Proxy(
    {},
    {
      get(target, propKey, receiver) {
        return () => httpGet(baseUrl + '/' + propKey)
      }
    }
  )
}
const service = createWebService('http://example.com/data')

service.employees().then(json => {
  const employees = JSON.parse(json)
  // ···
})
