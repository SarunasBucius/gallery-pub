import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

if (process.env.NODE_ENV !== 'test') {
  firebase.initializeApp(JSON.parse(process.env.VUE_APP_FIRE_BASE))
}
export default firebase
