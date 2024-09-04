import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button>default button</Button>
      <Button variant='outline' size='icon'>
        <Camera></Camera>
      </Button>
    </div>
  );
}
