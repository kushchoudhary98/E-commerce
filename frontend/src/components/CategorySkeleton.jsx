import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function CategorySkeleton() {
  return (
    <div className='flex flex-col'>
        <Skeleton className='lg:w-80 md:w-36 sm:w-36 w-[120px] sm:h-[200px] h-80 m-4 p-2 rounded-lg'/>
        <div className='flex flex-col justify-between'>
            <div>
                <Skeleton className='m-4 p-0.5 w-80 rounded-lg'></Skeleton>
                <Skeleton className='mx-4 p-0.5 w-32 rounded-lg'></Skeleton>
            </div>
        </div>
    </div>
  )
}
