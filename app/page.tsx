import Chat from '@/components/chat';
import LandingSections from '@/components/LandingSections';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <LandingSections />
      <Chat />
    </div>
  );
}
