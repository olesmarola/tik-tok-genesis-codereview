import tw from 'twin.macro';
import { FC } from 'react';

import useFormatter from '../helpers/hooks/useFormatter';

interface InfoCardProps {
  label: string;
  value: number;
}

const InfoCardContainer = tw.div`px-4 py-2 bg-gray-200 dark:bg-gray-500 rounded-xl text-center transition-colors duration-300`;
const InfoCardLabel = tw.h3`mb-0.5 truncate`;
const InfoCardValue = tw.p`font-bold truncate`;

const InfoCard: FC<InfoCardProps> = ({ label, value }) => {
  const formatter = useFormatter();

  return (
    <InfoCardContainer data-testid='user_info_card'>
      <InfoCardLabel>{label}</InfoCardLabel>
      <InfoCardValue data-testid="info_card_value">{formatter.format(value)}</InfoCardValue>
    </InfoCardContainer>
  );
};

export default InfoCard;
