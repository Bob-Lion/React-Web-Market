import { useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './index';

/* -------------------------------------------------------------------------- */

/**
 * Firebase 인증: 인증 상태 감지 훅
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  user: null | UserCredential;
 * }}
 */
export function useAuthState() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    return onAuthStateChanged( //유저 상태의 변화를 감지
      auth,
      (currentUser) => { //현재 로그인한 사람을 확인
        setUser(currentUser);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      }
    );
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
    }),
    [isLoading, error, user]
  );
}
