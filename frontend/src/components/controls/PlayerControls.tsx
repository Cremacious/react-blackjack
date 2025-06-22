import HitButton from '@/components/controls/HitButton';
import StayButton from '@/components/controls/StayButton';

const PlayerControls = () => {
  return (
    <div className="flex flex-row gap-4 justify-center mt-4">
      <HitButton />
      <StayButton />
    </div>
  );
};

export default PlayerControls;
