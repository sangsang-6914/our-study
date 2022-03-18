import {StudyType} from '@enums/StudyType';

interface IStudyProps {
  type?: StudyType;
}

function Study({type}: IStudyProps) {
  return (
    // Developer, Design ... 등 상위컴포넌트에서 type을 받아서 list api all
    // listitems를 하위 DataTable로 전달
    <div>스터디 모집</div>
  );
}

export default Study;
