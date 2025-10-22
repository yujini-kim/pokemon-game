import { auth } from '@/lib/firebase'
import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
  
  
  const [isSignUp, setIsSignUp] = useState(false) //토글버튼
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()


const signUpSubmit = async (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') return
    try {
      setIsLoading(true)
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(credentials.user, {
        displayName: name,
      }) //프로필업데이트
      router.push('/')
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  //로그인
  const signInSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (isLoading || email === '' || password === '') return
    try {
      setIsLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/') //홈페이지로 이동
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message)
      }
      //setError
    } finally {
      setIsLoading(false)
    }
  }

  const githubBtn = async (e) => {
    try {
      const provider = new GithubAuthProvider()
      await signInWithPopup(auth, provider)
      router.push('/')
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const googleBtn = async (e) => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push('/')
    } catch (e) {
      kingyujin
      if (e instanceof FirebaseError) {
        setError(e.message)
      }
    } finally {
      setIsLoading(false)
    }
  }