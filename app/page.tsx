import Chat from '@/components/chat';
import Chat2 from '@/components/chat2';
import LandingSections from '@/components/LandingSections';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <LandingSections />
      <Chat />
      {/* <Chat2 /> */}
    </div>
  );
}
