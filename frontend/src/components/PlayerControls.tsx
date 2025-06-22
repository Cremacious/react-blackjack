import HitButton from './HitButton';
import RestartButton from './RestartButton';
import StayButton from './StayButton';

const PlayerControls = () => {
  return (
    <div>
      Player controls
      <HitButton />
      <RestartButton />
      <StayButton />
    </div>
  );
};

export default PlayerControls;
