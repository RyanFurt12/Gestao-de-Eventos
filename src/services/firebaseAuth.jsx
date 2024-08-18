import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile
} from 'firebase/auth';
import { auth } from './firebase'; 

async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function signup(email, password, displayName) {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: displayName,
      })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
    })
    .catch(() => {
      return false;
    });
}

async function updateUserProfile(config) {
  const user = auth.currentUser;
  if (user) {
    return await updateProfile(user, config)
    .then(() => {
      return true
    })
    .catch((error) => {
      return false;
    });
  }
  return false;
}

async function logout() {
  return await signOut(auth)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

function checkAuthState(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user); 
    } else {
      callback(null);
    }
  });
}

export { login, signup, updateUserProfile, logout, checkAuthState }