export default function errorReporter(error: Error) {
  let message = 'Unknown Error'
  if (error instanceof Error) {
    message = error.message
    if (message.includes('variantGroupProperties')) {
      message = 'Component has errors. Please fix them and try again.'
    }
  } else if (typeof error === 'string') {
    message = error
  }

  if (error.stack) {
    console.error(error.stack)
  }

  figma.notify(message, {
    timeout: 5000,
    error: true,
  })
}
