import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCreateDeck } from '@/hooks/useGameActions';
import { useNavigate } from 'react-router';
import { Play } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { mutate: createNewDeck, isPending } = useCreateDeck();

  const handleNewGame = () => {
    createNewDeck(undefined, {
      onSuccess: () => {
        navigate('/game');
      },
      onError: (error) => {
        console.error('Failed to create new deck:', error);
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full space-y-8">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black px-8 py-4 rounded-full border-4 border-yellow-500 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wider">
              ♠ BLACKJACK ♠
            </h1>
          </div>
        </div>
      </div>
      <Card className="w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-800 border-2 border-yellow-500 shadow-2xl">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl text-yellow-400 font-bold">
            Ready to Play?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Button
              onClick={handleNewGame}
              disabled={isPending}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-6 rounded-lg border-2 border-green-500 shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {isPending ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Starting Game...</span>
                </div>
              ) : (
                <span className="flex items-center space-x-2">
                  <Play />
                  <span>Quick Play</span>
                </span>
              )}
            </Button>

            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg border-2 border-blue-500 shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              👤 Login & Play
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Decorative elements */}
      <div className="flex space-x-8 text-6xl opacity-20">
        <span className="animate-bounce" style={{ animationDelay: '0s' }}>
          ♠
        </span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>
          ♥
        </span>
        <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>
          ♦
        </span>
        <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>
          ♣
        </span>
      </div>
    </div>
  );
};

export default Home;
