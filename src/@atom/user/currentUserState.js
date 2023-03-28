import { atom } from 'recoil';

export const currentUserState = atom({
  key: 'currentUserState',
  default: null,
  // {
  //   id: 'djswns7',
  //   key: 'hDo7RNpVqLoIGqhkhOaI',
  //   likedList: [
  //     '9MjWQLw5Kb36efL2rbkC',
  //     '07KJEXR16ygMPs3VLWX7',
  //     'GUq1oMPFhSKkTsIRZkut',
  //   ],
  //   gender: '남성',
  //   reviewList: [
  //     {
  //       productDocId: 'GUq1oMPFhSKkTsIRZkut',
  //       reviewDocId: '상품후기 DocId값이 들어갈 예정',
  //     },
  //     {
  //       productDocId: 'ITNbyciLaW2kmOsk4NSq',
  //       reviewDocId: '상품후기 DocId값이 들어갈 예정',
  //     },
  //   ],
  //   name: '박원준',
  //   uid: '31gJfkETPWbUBsSfL4pnw7riX6E2',
  //   phoneNum: 1026747207,
  //   email: 'duftlagltkfwk7@gmail.com',
  //   optionalTermsOfConditionCheckList: {
  //     personalInfo: true,
  //     advertizement: false,
  //   },
  //   cartInfo: { docId: 'GUq1oMPFhSKkTsIRZkut', count: 7 },
  //   birth: 19980627,
  //   inquiryList: [
  //     {
  //       inquiryDocId: '상품문의 DocId값이 들어갈 예정',
  //       productDocId: 'ITNbyciLaW2kmOsk4NSq',
  //     },
  //   ],
  //   password: 'duftlagltkfwk7@gmail.com',
  //   adress: '경기도 용인시...',
  // }
});
