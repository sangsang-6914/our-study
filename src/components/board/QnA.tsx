import {StudyType} from '@enums/StudyType';

interface IQnaProps {
  type: StudyType;
}

function QnA({type}: IQnaProps) {
  return <div>질문 답변</div>;
}

export default QnA;
