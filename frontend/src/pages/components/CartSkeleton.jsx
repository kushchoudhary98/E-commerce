import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function CartSkeleton() {
  return (
    <div className='flex mt-8'>
        <Skeleton className='md:w-40 lg:w-44 sm:w-28 h-[200px] w-[150px] p-2 rounded-lg'/>
        <div className='flex flex-col justify-between'>
            <div>
                <Skeleton className='lg:w-[500px] md:w-[400px] sm:w-[300px] w-[170px] m-4 sm:p-2 p-0.5 rounded-lg'></Skeleton>
                <Skeleton className='lg:w-36 md:w-32 sm:w-28 w-20 mx-4 sm:p-2 p-0.5 rounded-lg'></Skeleton>
            </div>
            <div>
                <Skeleton className='w-[60px] m-4 sm:p-0.5 rounded-lg'></Skeleton>
            </div>
        </div>
    </div>
  )
}
