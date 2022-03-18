import {RootState} from '@modules/index';
import {selectNav} from '@modules/selectMenu';
import {ComponentWrapper} from '@styles/common.style';
import {DeveloperComponent} from '@styles/developer.style';
import {
  NavContainer,
  NavForm,
  NavSubTitle,
  NavTitle,
  NavWrapper,
} from '@styles/nav.style';
import {changeMenuForRefresh} from '@utils/commonUtils';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Route, Routes} from 'react-router-dom';
import FreeBoard from '@components/board/FreeBoard';
import QnA from '@components/board/QnA';
import Study from '@components/board/Study';
import {StudyType} from '@enums/StudyType';

function Developer() {
  const selectMenu = useSelector(
    (state: RootState) => state.selectMenu.navMenu,
  );
  const dispatch = useDispatch();

  if (selectMenu === '') {
    const curMenu = changeMenuForRefresh();
    dispatch(selectNav(curMenu));
  }
  const changeLink = (link: string) => {
    dispatch(selectNav(link));
  };
  return (
    <ComponentWrapper>
      <NavWrapper>
        <NavContainer>
          <NavForm>
            <NavTitle>Developer</NavTitle>
            <Link to="study" onClick={() => changeLink('study')}>
              <NavSubTitle curLink="study" selectLink={selectMenu}>
                스터디 모집
              </NavSubTitle>
            </Link>
            <Link to="qna" onClick={() => changeLink('qna')}>
              <NavSubTitle curLink="qna" selectLink={selectMenu}>
                질문 {`&`} 답변
              </NavSubTitle>
            </Link>
            <Link to="free" onClick={() => changeLink('free')}>
              <NavSubTitle curLink="free" selectLink={selectMenu}>
                자유게시판
              </NavSubTitle>
            </Link>
          </NavForm>
        </NavContainer>
        <DeveloperComponent>
          <Routes>
            <Route
              path="study"
              element={<Study type={StudyType.DEVELOPER} />}
            />
            <Route path="qna" element={<QnA type={StudyType.DEVELOPER} />} />
            <Route
              path="free"
              element={<FreeBoard type={StudyType.DEVELOPER} />}
            />
          </Routes>
        </DeveloperComponent>
      </NavWrapper>
    </ComponentWrapper>
  );
}

export default Developer;
