import StarIcon from '../../../assets/svg_component/StarIcon';
import { IQuestionData } from '../../../redux/slices/questions/questionsSlice';
import { rolePreset } from '../Home/_partials/SelectRoleForm/SelectRoleForm.data';
import { getLevel } from '../LeaderBoard/_partials/TopPerformersRecord/TopPerformersRecord.data';
import { CardDetail } from './PerformanceReport.types';

// Function to generate card data
export const CardData = (data: IQuestionData, userData: any): CardDetail[] => [
  {
    id: 1,
    headText: `${userData?.firstName} ${userData?.lastName}`,
    subText: 'Name'
  },
  {
    id: 2,
    headText: `${rolePreset[userData?.role] || '****'}`,
    subText: 'Role'
  },
  {
    id: 3,
    headText: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {getLevel(Number(data?.percentage))}
      </div>
    ),
    subText: 'Level'
  },
  {
    id: 4,
    headText: `${data?.percentage || '****'}%`,
    subText: 'Score'
  }
];
