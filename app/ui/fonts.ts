import { Inter } from 'next/font/google';
import {Roboto} from 'next/font/google';
import { Lusitana  } from 'next/font/google';


// export const inter = Inter({subsets : ['latin']});
export const roboto = Roboto({subsets: ['latin']});
export const lusitana = Lusitana({
    // Kiểu chữ - mỏng - đậm...
    subsets: ["latin"],  
    // cỡ đậm của chữ.
    weight: ['400' , '700'],
})