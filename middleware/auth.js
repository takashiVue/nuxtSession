export default function ({ store, error }) {
    if (!store.state.authUser) {
      error({
        message: 'ログイン状態ではないので移動することができません',
        statusCode: 403
      })
    }
  }
  