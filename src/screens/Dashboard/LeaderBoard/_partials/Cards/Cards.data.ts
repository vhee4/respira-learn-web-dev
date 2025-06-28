export const cardData = ({ userData }: { userData: any }) => [
  {
    id: 1,
    headText: `${userData?.length || '*****'}`,
    subText: 'Total Employee'
  },
  {
    id: 2,
    headText: '700',
    subText: 'Males'
  },
  {
    id: 3,
    headText: '1,300',
    subText: 'Approved Applications'
  },
  {
    id: 4,
    headText: '30%',
    subText: 'Participants'
  }
];
