import { useEffect, useRef, useState } from 'react';
import {
  useReadData,
  useCreateData,
  useCreateAuthUser,
} from '@/firebase/firestore';
import classes from './RegisterForm.module.scss';
import './RegisterForm.scss';
import RegisterFormStyledButton from './RegisterFormStyledButton';
import { useNavigate } from 'react-router-dom';
import DaumLocationModalButton from '@/components/DaumLocationModalButton/DaumLocationModalButton';
import { useSignUp, useAuthState } from '@/firebase/auth';
import { async } from '@firebase/util';

export default function RegisterForm(props) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState(null);
  const [locationDetail, setLocationDetail] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState(null);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const [isCheckBoxAgreedAll, setIsCheckBoxAgreedAll] = useState(false);
  const [
    isEventAgreementCheckBoxAgreedAll,
    setIsEventAgreementCheckBoxAgreedAll,
  ] = useState(false);

  const [checkBoxAgreedList, setCheckBoxAgreedList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function onlyNumber(obj) {
    return obj.value.replace(/[^0-9]/g, '');
  }

  const toggleNstCheckbox = (index) => {
    const tempArr = [...checkBoxAgreedList];
    tempArr[index] = !tempArr[index];
    let isAllChecked = true;
    let isEventAgreementAllChecked = true;

    tempArr.forEach((isChecked, i) => {
      if (!isChecked) {
        isAllChecked = false;
        if (i == 3 || i == 4) {
          isEventAgreementAllChecked = false;
        }
      }
    });

    setIsCheckBoxAgreedAll(isAllChecked);
    setIsEventAgreementCheckBoxAgreedAll(isEventAgreementAllChecked);
    setCheckBoxAgreedList([...tempArr]);
  };

  const handleConditionCheck = (e) => {
    console.log(e.target.checkBoxIndex);
    toggleNstCheckbox(+e.target.id.slice(-1));
  };

  const handleCheckAll = (e) => {
    const curState = !isCheckBoxAgreedAll;
    let tempArr = [...checkBoxAgreedList];
    tempArr = tempArr.map(() => {
      return curState;
    });

    setCheckBoxAgreedList([...tempArr]);
    setIsEventAgreementCheckBoxAgreedAll(curState);
    setIsCheckBoxAgreedAll(curState);
    setIsTermsOfConditionChecked(curState);
    setIsEssentialPrivacyInfoChecked(curState);
    setIsValidAgeChecked(curState);

    // console.log('AllBtnChecked', checkBoxAgreedList);
  };
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const handleCheckAllSubCheckboxes = (e) => {
    const curState = !isEventAgreementCheckBoxAgreedAll;
    let tempArr = [...checkBoxAgreedList];
    let isAllChecked = true;
    tempArr = tempArr.map((isChecked, index) => {
      if (index == 3 || index == 4) {
        if (isChecked) isAllChecked = false;
        return curState;
      }

      if (!isChecked) isAllChecked = false;

      return isChecked;
    });

    setCheckBoxAgreedList([...tempArr]);
    setIsEventAgreementCheckBoxAgreedAll(curState);
    setIsCheckBoxAgreedAll(isAllChecked);
  };

  function getStyledCheckbox(isChecked) {
    if (isChecked) {
      return (
        <div className={classes.styledCheckbox}>
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="rgb(161, 95, 4)"
            />
            <path
              d="M7 12.6667L10.3846 16L18 8.5"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      );
    }
    return (
      <div className={classes.styledCheckbox}>
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
            fill="#fff"
            stroke="#ddd"
          />
          <path
            d="M7 12.6667L10.3846 16L18 8.5"
            stroke="#ddd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  // const { readData, data = null, error: readError } = useReadData(`users`);
  // useEffect(() => {
  //   readData();
  // }, []);

  // const handleUserData = async () => {
  //   let d = await JSON.stringify(data);
  //   console.log(d);
  // };

  /* -------------------------------------------------------------------------- */
  /*                            value Onchange 이벤트 관련                       */
  /* -------------------------------------------------------------------------- */

  //'5-16자의 영문 대/소문자, 숫자, -, _만 사용 가능합니다.'
  const userIdPattern = /^[a-zA-Z0-9]{5,16}$/;

  const handleIdChange = (e) => {
    setId(e.target.value);

    if (!userIdPattern.test(e.target.value)) {
      setIsIdValid(false);
    } else {
      setIsIdValid(true);
    }
  };

  //비밀번호는 영문/숫자/특수문자(!@#$%^&*)를 포함하여 8~16자로 입력해야합니다.
  const passwordPattern = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
  const handlePwChange = (e) => {
    setPassword(e.target.value);

    if (!passwordPattern.test(e.target.value)) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const handlePwVerifyChange = (e) => {
    setPasswordVerify(e.target.value);
    if (e.target.value == password) {
      setIsPasswordVerifyValid(true);
    } else {
      setIsPasswordVerifyValid(false);
    }
  };

  //'유효한 이메일 주소를 입력해주세요.'

  // eslint-disable-next-line no-useless-escape
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!emailPattern.test(e.target.value)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };

  const handlePhoneNumChange = (e) => {
    setPhoneNumber(e.target.value);
    if (e.target.value.length > 0) {
      setIsPhoneNumValid(true);
    }
  };

  const handleLocationChange = (adress) => {
    if (adress.length > 0) {
      setIsLocationValid(true);
    }
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const mergeBirthDatas = async () => {
    // birth초기값 ''
    let curBirth = year + month + day;
    Number(curBirth);
    await setBirth(curBirth);
  };
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordVerifyValid, setIsPasswordVerifyValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(false);
  const [isLocationValid, setIsLocationValid] = useState(false);

  const [isTermsOfConditionChecked, setIsTermsOfConditionChecked] =
    useState(false);
  const [isEssentialPrivacyInfoChecked, setIsEssentialPrivacyInfoChecked] =
    useState(false);
  const [isValidAgeChecked, setIsValidAgeChecked] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                               input 유효성 검사 관련                        */
  /* -------------------------------------------------------------------------- */

  function isVerifiedAll() {
    if (
      isTermsOfConditionChecked &&
      isEssentialPrivacyInfoChecked &&
      isValidAgeChecked &&
      isIdValid &&
      isPasswordValid &&
      isPasswordVerifyValid &&
      isEmailValid &&
      isPhoneNumValid &&
      isLocationValid
    ) {
      return true;
    }

    return false;
  }

  /* -------------------------------------------------------------------------- */
  /*                                submitBtn 관련                              */
  /* -------------------------------------------------------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    await mergeBirthDatas();
    const userDefaultObject = {
      id: id,
      likedList: [],
      gender: gender,
      reviewList: [],
      name: name,
      uid: null,
      phoneNum: null,
      email: email,
      optionalTermsOfConditionCheckList: {
        personalInfo: checkBoxAgreedList[2],
        advertizement: checkBoxAgreedList[3] || checkBoxAgreedList[4],
      },
      cartInfo: [],
      birth: birth,
      inquiryList: [],
      password: password,
      adress: location ? location + ' ' + locationDetail : null,
    };
    console.log(userDefaultObject);

    // console.log([
    //   isTermsOfConditionChecked,
    //   isEssentialPrivacyInfoChecked,
    //   isValidAgeChecked,
    //   isIdValid,
    //   isPasswordValid,
    //   isPasswordVerifyValid,
    //   isEmailValid,
    //   isPhoneNumValid,
    //   isLocationValid,
    // ]);
    if (isVerifiedAll()) {
      updateUserAuth(updateUserStorage);
    } else {
      console.log('필수입력사항 미흡');
    }
  };

  const {
    signUp,
    isLoading: isSignUpLoading,
    error: signUpError,
  } = useSignUp();

  async function updateUserAuth(updateUserStorage) {
    let user;
    try {
      user = await signUp(id + '@boblion.com', password, name);
      updateUserStorage(user);
    } catch (signUpError) {
      console.error('useSignUp 함수의 signUp함수에서 문제 발생');
    }
    // console.log('user', user);
  }

  const { createAuthUser, error: createAuthUserError } =
    useCreateAuthUser('users');

  async function updateUserStorage(user) {
    try {
      const userDefaultObject = {
        id: id,
        likedList: [],
        gender: gender.length > 0 ? gender : '선택안함',
        reviewList: [],
        name: name,
        uid: user.uid,
        phoneNum: phoneNumber,
        email: email,
        optionalTermsOfConditionCheckList: {
          personalInfo: checkBoxAgreedList[2],
          advertizement: checkBoxAgreedList[3] || checkBoxAgreedList[4],
        },
        cartInfo: [],
        birth: birth,
        inquiryList: [],
        password: password,
        adress: location ? location + ' ' + locationDetail : null,
      };

      await createAuthUser(user, userDefaultObject);
    } catch (Error) {
      console.error('updateUserStorage 함수 이메일 중복 오류');
    }
  }

  return (
    <div className="RegisterForm">
      <div className="RegisterFormTitle">회원가입</div>

      <div className={classes.extraBlankArea}>
        <span>
          <span className={classes.redStar}>*</span>필수 입력사항
        </span>
      </div>

      <form className={classes.mainForm} onSubmit={handleSubmit}>
        <label className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>
            아이디<span className={classes.redStar}>*</span>
          </span>
          <div className={classes.inputAndHintWrapper}>
            <input
              className={classes.textInput}
              placeholder="아이디를 입력해주세요"
              type="text"
              value={id}
              onChange={handleIdChange}
            />
            {!isIdValid ? (
              <div className={classes.inputHint}>
                5자 이상 16자 이하의의 영문과 숫자만을 조합해주세요.
              </div>
            ) : null}
          </div>
          <RegisterFormStyledButton
            customStyle={{ width: '120px', height: '44px', marginLeft: '8px' }}
            innerText={'중복확인'}
          />
        </label>

        <label className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>
            비밀번호<span className={classes.redStar}>*</span>
          </span>

          <div className={classes.inputAndHintWrapper}>
            <input
              className={classes.textInput}
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={handlePwChange}
            />
            {!isPasswordValid ? (
              <div className={classes.inputHint}>
                비밀번호는 영문/숫자/특수문자(!@#$%^&*)를 포함하여 8~16자로
                입력해야합니다.
              </div>
            ) : null}
          </div>
        </label>

        <label className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>
            비밀번호 확인<span className={classes.redStar}>*</span>
          </span>
          <div className={classes.inputAndHintWrapper}>
            <input
              className={classes.textInput}
              placeholder="비밀번호를 한번 더 입력해주세요"
              type="password"
              value={passwordVerify}
              onChange={handlePwVerifyChange}
            />
            {!isPasswordVerifyValid ? (
              <div className={classes.inputHint}>
                비밀번호가 일치하지 않습니다.
              </div>
            ) : null}
          </div>
        </label>

        <label className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>
            이름<span className={classes.redStar}>*</span>
          </span>
          <div className={classes.inputAndHintWrapper}>
            <input
              className={classes.textInput}
              placeholder="이름을 입력해주세요"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name.length < 1 ? (
              <div className={classes.inputHint}>
                이름이 입력되지 않았습니다.
              </div>
            ) : null}
          </div>
        </label>

        <label className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>
            이메일<span className={classes.redStar}>*</span>
          </span>
          <div className={classes.inputAndHintWrapper}>
            <input
              className={classes.textInput}
              placeholder="예: BobLion@gmail.com"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            {!isEmailValid ? (
              <div className={classes.inputHint}>
                유효한 이메일 형식으로 입력해주세요
              </div>
            ) : null}
          </div>
          <RegisterFormStyledButton
            customStyle={{ width: '120px', height: '44px', marginLeft: '8px' }}
            innerText={'중복확인'}
          />
        </label>

        <label className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>
            휴대폰<span className={classes.redStar}>*</span>
          </span>
          <div className={classes.inputAndHintWrapper}>
            <input
              className={classes.textInput}
              placeholder="숫자만 입력해주세요"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumChange}
            />
            {phoneNumber.length < 1 ? (
              <div className={classes.inputHint}>
                전화번호가 입력되지 않았습니다.
              </div>
            ) : null}
          </div>
        </label>

        <div className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>
            주소<span className={classes.redStar}>*</span>
          </span>
          <div className={classes.inputAndHintWrapper}>
            <DaumLocationModalButton
              getDataCallback={(adress) => {
                setLocation(adress);
                handleLocationChange(adress);
                console.log(adress);
              }}
            />
            {location ? (
              <div className={classes.locationsWrapper}>
                <input
                  className={classes.textInput}
                  disabled={true}
                  type="text"
                  value={location}
                />
                <input
                  className={classes.textInput}
                  placeholder="상세 주소를 입력해 주세요"
                  type="text"
                  value={locationDetail}
                  onChange={(e) => setLocationDetail(e.target.value)}
                />
              </div>
            ) : null}
            {!isLocationValid ? (
              <div className={classes.inputHint}>주소를 입력해주세요.</div>
            ) : null}
          </div>
        </div>

        <div className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>성별</span>
          <fieldset className={classes.radioInputsWrapper}>
            <label className={classes.radioInputLabel}>
              <input
                className={classes.radioInput}
                name="gender"
                type="radio"
                onChange={(e) => {
                  setGender('남성');
                }}
              />
              <span>남자</span>
            </label>
            <label className={classes.radioInputLabel}>
              <input
                className={classes.radioInput}
                name="gender"
                type="radio"
                onChange={(e) => {
                  setGender('여성');
                }}
              />
              <span>여자</span>
            </label>
            <label className={classes.radioInputLabel}>
              <input
                className={classes.radioInput}
                name="gender"
                type="radio"
                onChange={(e) => {
                  setGender('선택안함');
                }}
              />
              <span>선택안함</span>
            </label>
          </fieldset>
        </div>

        <div className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>생년월일</span>
          <fieldset className={classes.birthInfoField}>
            <legend>생년월일</legend>
            <input
              className={classes.birthInput}
              maxLength="4"
              name="birthYear"
              placeholder="YYYY"
              type="text"
              value={year}
              onChange={(e) => setYear(onlyNumber(e.target))}
            />
            <span>/</span>
            <input
              className={classes.birthInput}
              maxLength="2"
              name="birthMonth"
              placeholder="MM"
              type="text"
              value={month}
              onChange={(e) => setMonth(onlyNumber(e.target))}
            />
            <span>/</span>
            <input
              className={classes.birthInput}
              maxLength="2"
              name="birthDay"
              placeholder="DD"
              type="text"
              value={day}
              onChange={(e) => setDay(onlyNumber(e.target))}
            />
          </fieldset>
        </div>

        {/* <div className={classes.inputContentsWrapper}>
          <span className={classes.inputTitle}>
            추가입력 사항<span className={classes.redStar}>*</span>
          </span>
          <fieldset className={classes.radioInputsWrapper}>
            <label className={classes.radioInputLabel}>
              <input
                className={classes.radioInput}
                name="additionalInfo"
                type="radio"
              />
              <span>친구초대 추천인 아이디</span>
            </label>
            <label className={classes.radioInputLabel}>
              <input
                className={classes.radioInput}
                name="additionalInfo"
                type="radio"
              />
              <span>참여 이벤트명</span>
            </label>
          </fieldset>
        </div> */}

        <div className={classes.extraBlankArea} />

        <div className={classes.inputContentsWrapper}>
          <div className={classes.checkboxInputTitleWrapper}>
            <span className={classes.checkboxInputTitle}>
              이용약관동의<span className={classes.redStar}>*</span>
            </span>
          </div>

          <fieldset className={classes.termsOfConditionCheckboxesWrapper}>
            <legend>이용약관동의</legend>
            <label className={classes.termsOfConditionCheckboxLabel}>
              <input
                className={classes.termsOfConditionCheckbox}
                id="termsOfConditionCheckAllbox"
                name="termsOfCondition"
                type="checkbox"
                onChange={handleCheckAll}
              />
              {getStyledCheckbox(isCheckBoxAgreedAll)}
              <div
                className={`${classes.agreeAllInfo} ${classes.checkboxInfoWrapper}`}
              >
                <span className={classes.agreeAllTitle}>전체 동의합니다.</span>
                <span className={classes.agreeAllDetail}>
                  선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                  이용할 수 있습니다.
                </span>
              </div>
            </label>

            <label
              className={classes.termsOfConditionCheckboxLabel}
              htmlFor="singleCheckbox0"
            >
              <input
                className={`${classes.termsOfConditionCheckbox} ${classes.IsEssential}`}
                id="singleCheckbox0"
                name="termsOfCondition"
                type="checkbox"
                onChange={(e) => {
                  handleConditionCheck(e);
                  setIsTermsOfConditionChecked(e.target.checked);
                }}
              />
              {getStyledCheckbox(checkBoxAgreedList[0])}
              <div
                className={`${classes.agreeInfo} ${classes.checkboxInfoWrapper}`}
              >
                <span className={classes.agreeInfoMain}>이용약관 동의</span>
                <span className={classes.agreeInfoIsEssential}>(필수)</span>
                <button
                  className={classes.showTermsOfConditionBtn}
                  type="button"
                >
                  약관보기 {'>'}
                </button>
              </div>
            </label>

            <label
              className={classes.termsOfConditionCheckboxLabel}
              htmlFor="singleCheckbox1"
            >
              <input
                className={`${classes.termsOfConditionCheckbox} ${classes.IsEssential}`}
                id="singleCheckbox1"
                name="termsOfCondition"
                type="checkbox"
                onChange={(e) => {
                  handleConditionCheck(e);
                  setIsEssentialPrivacyInfoChecked(e.target.checked);
                }}
              />
              {getStyledCheckbox(checkBoxAgreedList[1])}
              <div
                className={`${classes.agreeInfo} ${classes.checkboxInfoWrapper}`}
              >
                <span className={classes.agreeInfoMain}>
                  개인정보 수집∙이용 동의
                </span>
                <span className={classes.agreeInfoIsEssential}>(필수)</span>
                <button
                  className={classes.showTermsOfConditionBtn}
                  type="button"
                >
                  약관보기 {'>'}
                </button>
              </div>
            </label>

            <label
              className={classes.termsOfConditionCheckboxLabel}
              htmlFor="singleCheckbox2"
            >
              <input
                className={classes.termsOfConditionCheckbox}
                id="singleCheckbox2"
                name="termsOfCondition"
                type="checkbox"
                onChange={handleConditionCheck}
              />
              {getStyledCheckbox(checkBoxAgreedList[2])}
              <div
                className={`${classes.agreeInfo} ${classes.checkboxInfoWrapper}`}
              >
                <div>
                  <span className={classes.agreeInfoMain}>
                    개인정보 수집∙이용 동의
                  </span>
                  <span className={classes.agreeInfoIsEssential}>(선택)</span>
                </div>

                <button
                  className={classes.showTermsOfConditionBtn}
                  type="button"
                >
                  약관보기 {'>'}
                </button>
              </div>
            </label>

            <label className={classes.termsOfConditionCheckboxLabel}>
              <input
                className={classes.termsOfConditionCheckbox}
                name="termsOfCondition"
                type="checkbox"
                onChange={handleCheckAllSubCheckboxes}
              />
              {getStyledCheckbox(isEventAgreementCheckBoxAgreedAll)}
              <div
                className={`${classes.agreeInfo} ${classes.checkboxInfoWrapper}`}
              >
                <div>
                  <span className={classes.agreeInfoMain}>
                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                  </span>
                  <span className={classes.agreeInfoIsEssential}>(선택)</span>
                </div>
              </div>
            </label>

            <div className={classes.subCheckboxessWrapper}>
              <label
                className={classes.termsOfConditionCheckboxLabel}
                htmlFor="singleCheckbox3"
              >
                <input
                  className={classes.termsOfConditionCheckbox}
                  id="singleCheckbox3"
                  name="termsOfCondition"
                  type="checkbox"
                  onChange={handleConditionCheck}
                />
                {getStyledCheckbox(checkBoxAgreedList[3])}
                <div
                  className={`${classes.agreeSubInfo} ${classes.checkboxInfoWrapper}`}
                >
                  <div>
                    <span className={classes.agreeInfoMain}>SMS</span>
                  </div>
                </div>
              </label>

              <label
                className={classes.termsOfConditionCheckboxLabel}
                htmlFor="singleCheckbox4"
              >
                <input
                  className={classes.termsOfConditionCheckbox}
                  id="singleCheckbox4"
                  name="termsOfCondition"
                  type="checkbox"
                  onChange={handleConditionCheck}
                />
                {getStyledCheckbox(checkBoxAgreedList[4])}
                <div
                  className={`${classes.agreeSubInfo} ${classes.checkboxInfoWrapper}`}
                >
                  <div>
                    <span className={classes.agreeInfoMain}>이메일</span>
                  </div>
                </div>
              </label>
            </div>

            <label
              className={classes.termsOfConditionCheckboxLabel}
              htmlFor="singleCheckbox5"
            >
              <input
                className={`${classes.termsOfConditionCheckbox} ${classes.IsEssential}`}
                id="singleCheckbox5"
                name="termsOfCondition"
                type="checkbox"
                onChange={(e) => {
                  handleConditionCheck(e);
                  setIsValidAgeChecked(e.target.checked);
                }}
              />
              {getStyledCheckbox(checkBoxAgreedList[5])}
              <div
                className={`${classes.agreeInfo} ${classes.checkboxInfoWrapper}`}
              >
                <div>
                  <span className={classes.agreeInfoMain}>
                    본인은 만 14세 이상입니다.
                  </span>
                  <span className={classes.agreeInfoIsEssential}>(필수)</span>
                </div>
              </div>
            </label>
            {!(
              isTermsOfConditionChecked &&
              isTermsOfConditionChecked &&
              isValidAgeChecked
            ) ? (
              <div className={classes.inputHint}>
                필수 동의사항 및 입력사항을 확인해주세요.
              </div>
            ) : null}
          </fieldset>
        </div>
        <div className={classes.submitBtnWrapper}>
          <button
            className={classes.submitBtn}
            type="submit"
            onClick={handleSubmit}
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
