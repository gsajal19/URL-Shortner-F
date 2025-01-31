import { Link} from 'react-scroll';
import 'dotenv'


function Hero() {
    
 
    return (<>
        <section className=" max-w-4xl mx-auto flex flex-col px-6 pb-32 items-center">
            <div className='version my-10 flex border-2 w-fit px-3 py-1 gap-2 rounded-xl bg-yellow-50 border-yellow-500 cursor-pointer items-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 group' >
                <div className='w-2 h-2 bg-yellow-500 rounded-full '></div>
                <p className='text-box flex gap-1'><span className='font-medium text-yellow-600'>v1.0.0: </span><span className='font-medium text-orange-950'> Find-in-page bug fixes <i className="fa fa-arrow-right group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true"></i></span></p>
            </div>
            <h1 className="text-6xl font-bold flex justify-center leading-snug text-center">Try this Amazing URL Shortner</h1>
            <p className="my-10 text-center font-medium text-lg">No worries about long URLs—just shorten them and share with ease!</p>
            <button className="bg-blue-600 text-white rounded py-2 px-5 hover:py-3 hover:px-6 hover:text-xl transition-all duration-300 text-lg font-medium mt-10 cursor-pointer group " ><Link to="drop" smooth={true}
        duration={500} // Duration of scroll in ms
        offset={-70}> Try Now</Link></button>
            <button className="hover:border-slate-600 hover:text-slate-600 bg-white text-slate-400 border-2 border-slate-300 rounded transition-all duration-300 py-2 px-5 text-lg font-medium mt-10 cursor-pointer "> About Project</button>
            
        </section>
    </>)

}
export default Hero;