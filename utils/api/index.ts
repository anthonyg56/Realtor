export const captureEmail = (email: string) => fetch('/api/captureEmail', {
  body: JSON.stringify({
    email
  }),
  headers: {
    "Content-type": "application/json"
  },
  method: "POST"
})