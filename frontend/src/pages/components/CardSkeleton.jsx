import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function CardSkeleton() {
  return (
    <div className='flex sm:flex-col w-[90vw] sm:w-auto sm:h-[470px] h-[150px]'>
        <Skeleton className='lg:w-[300px] md:w-[300px] sm:w-36 w-[100px] sm:h-[300px] h-[100px] m-4 p-2 rounded-lg'/>
        <div className='flex flex-col justify-between'>
            <div>
                <Skeleton className='m-4 p-0.5 sm:w-[300px] w-[50vw] rounded-lg'></Skeleton>
                <Skeleton className='mx-4 p-0.5 w-32 rounded-lg'></Skeleton>
            </div>
        </div>
    </div>
  )
}
