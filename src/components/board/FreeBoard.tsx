import {StudyType} from '@enums/StudyType';

interface IFreeBoardProps {
  type: StudyType;
}

function FreeBoard({type}: IFreeBoardProps) {
  return <div>자유게시판</div>;
}

export default FreeBoard;
