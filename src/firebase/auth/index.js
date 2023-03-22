import { getAuth } from 'firebase/auth'; //인증 관련 메소드 제공
import { app } from '../app';

export const auth = getAuth(app); //현재 접속한 사용자 인증 정보 가져오기
auth.useDeviceLanguage();

export * from './useSignUp';
export * from './useSignIn';
export * from './useSignOut';
export * from './useAuthState';
