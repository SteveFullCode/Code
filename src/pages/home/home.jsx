
import Brand from '../../components/brand/brand';
import { Datails } from '../datails/datails';


export default function Home(){
    return(
        <main className='flex'>
            <Brand/>
            <Datails/>
        </main>
    );
}