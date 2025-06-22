import HitButton from '@/components/controls/HitButton';
import RestartButton from '@/components/controls/RestartButton';
import StayButton from '@/components/controls/StayButton';

const PlayerControls = () => {
  return (
    <div>
      <HitButton />
      <RestartButton />
      <StayButton />
    </div>
  );
};

export default PlayerControls;
